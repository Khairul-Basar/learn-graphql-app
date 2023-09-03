exports.Query = {
  hello: (parent, args, context) => {
    return "World...!!!";
  },
  numberOfCar: (parent, args, context) => {
    return 30;
  },
  price: (parent, args, context) => {
    return 550000.5;
  },
  engineRunning: () => true,
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
