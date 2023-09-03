exports.Category = {
  products: ({ id }, args, { products }) => {
    const categoryId = id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
