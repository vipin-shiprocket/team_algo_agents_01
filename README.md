# Zop Customer Review

## Project Overview
Zop Customer Review is a server application designed to retrieve and sync top-selling product reviews. It leverages the Model Context Protocol (MCP) SDK to provide tools for analyzing customer feedback and sales data.

## Features
- **Get Top-Selling Products Review**: Retrieves the top best-selling products along with their customer reviews, including average ratings, review counts, and recent feedback highlights.
- **Sync Top-Selling Products Review**: Syncs and reviews top-selling products by analyzing recent sales data and customer feedback, providing insights for inventory and marketing decisions.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd zop-customer-review
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Compile the TypeScript files:
   ```bash
   npx tsc
   ```
2. Run the server:
   ```bash
   node build/server.js
   ```

## Project Structure
- `src/server.ts`: Main server file containing the implementation of MCP tools.
- `build/`: Directory for compiled JavaScript files.
- `package.json`: Project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration file.

## Dependencies
- `@modelcontextprotocol/sdk`: MCP SDK for server and tool creation.
- `zod`: Schema validation library.

## Dev Dependencies
- `@types/node`: Type definitions for Node.js.
- `typescript`: TypeScript compiler.

