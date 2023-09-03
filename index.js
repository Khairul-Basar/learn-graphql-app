const { ApolloServer, gql } = require("apollo-server");
const { products, categories, reviews } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
// Scalar Type =>  String , Int, Float, Boolean, ID

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is Started " + url);
});
