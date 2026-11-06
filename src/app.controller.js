import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { connectDB } from "./DB/connection.js";
import { typeDefs } from "./graphql/schema/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

export const bootstrap = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.get("/", (req, res) => res.send("GraphQL endpoint available at /graphql"));

  app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("GraphQL Sandbox available at http://localhost:3000/graphql");
  });
};
