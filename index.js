const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    name: String
    age: Int
    designation: String
    language: String
    technology: String
    products: [Product!]!
  }
  type Product {
    name: String
    description: String
    quantity: Int
    price: Float
    onSale: Boolean
  }
`;

const resolvers = {
  Query: {
    name: () => {
      return "Khairul";
    },
    age: () => {
      return 27;
    },
    designation: () => {
      return "Junior Software Engineer";
    },
    language: () => {
      return "javascript";
    },
    technology: () => {
      return "React-Native";
    },
    products: () => {
      return [
        {
          name: "Bike",
          description: "Mountain Bike",
          quantity: 20,
          price: 1500.5,
          onSale: true,
        },
        {
          name: "Car",
          description: "Sports Car",
          quantity: 10,
          price: 2500.5,
          onSale: true,
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server Listening on Port:" + url);
});
