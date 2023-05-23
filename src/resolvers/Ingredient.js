module.exports = {
  Ingredient: {
    // Ingredient resolvers go here
    detailedDescription: (parent) => {
      console.log(parent);
      return parent.text;
    }
  },
};
