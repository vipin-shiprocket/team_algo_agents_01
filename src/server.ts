import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
// import { z } from "zod";

const server = new McpServer({
  name: "zop-customer-reviews",
  version: "0.0.1",
});

server.tool(
  "get-top-selling-products-review",
  "Retrieves the top best-selling products along with their customer reviews, including average ratings, review counts, and recent feedback highlights.",
  async () => {
    try {
      const response = await fetch(
        `https://7555-125-20-116-46.ngrok-free.app/top5-products`
      );
      const data = await response.text();
      return {
        content: [
          { type: "text", text: "Here are the products: " },
          { type: "text", text: JSON.stringify(data, null, 2) },
        ],
      };
    } catch (error) {
      console.error("Error fetching top-selling products reviews:", error);
      return {
        content: [{ type: "text", text: "Error fetching data" }],
      };
    }
  }
);

server.tool(
  "sync-top-selling-products-review",
  "Syncs and reviews top-selling products by analyzing recent sales data and customer feedback, providing insights for inventory and marketing decisions",
  async () => {
    try {
      const response = await fetch(
        `https://7555-125-20-116-46.ngrok-free.app/sync-latest-reviews`
      );
      const data = await response.text();
      return {
        content: [
          {
            type: "text",
            text: "The synchronization of products and their reviews has been successfully completed.",
          },
          { type: "text", text: JSON.stringify(data, null, 2) },
        ],
      };
    } catch (error) {
      console.error("Error fetching top-selling products reviews:", error);
      return {
        content: [{ type: "text", text: "Error fetching data" }],
      };
    }
  }
);

// server.registerTool(
//   "calculate-bmi",
//   {
//     title: "BMI Calculator",
//     description: "Calculate Body Mass Index",
//     inputSchema: {
//       weightKg: z.number(),
//       heightM: z.number(),
//     },
//   },
//   async ({ weightKg, heightM }) => ({
//     content: [
//       {
//         type: "text",
//         text: String(weightKg / (heightM * heightM)),
//       },
//     ],
//   })
// );

// Async tool with external API call
// server.registerTool(
//   "fetch-weather",
//   {
//     title: "Weather Fetcher",
//     description: "Get weather data for a city",
//     inputSchema: { city: z.string() },
//   },
//   async ({ city }) => {
//     const response = await fetch(`https://api.weather.com/${city}`);
//     const data = await response.text();
//     return {
//       content: [{ type: "text", text: data }],
//     };
//   }
// );

// Add a dynamic greeting resource
// server.registerResource(
//   "greeting",
//   new ResourceTemplate("greeting://{name}", { list: undefined }),
//   {
//     title: "Greeting Resource", // Display name for UI
//     description: "Dynamic greeting generator",
//   },
//   async (uri: { href: any }, { name }: any) => ({
//     contents: [
//       {
//         uri: uri.href,
//         text: `Hello, ${name}!`,
//       },
//     ],
//   })
// );

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
