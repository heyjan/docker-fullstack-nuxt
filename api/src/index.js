require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Query = require("./Query");
const Mutation = require("./models/Mutation");
const { port, host, db, authApiUrl } = require("./configuration");
const { connectDb } = require("./helpers/db");

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
  resolvers,
});

// Lets start our server

const startServer = () => {
  server.listen(port, () => {
    console.log(`Started Apollo/GraphQL Api on port ${port}!`);
    console.log(`Our host is ${host}`);
    console.log(`Database url ${db}`);
    console.log(`Auth Api URL ${authApiUrl}`);
  });
};

// connect to Database
connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
