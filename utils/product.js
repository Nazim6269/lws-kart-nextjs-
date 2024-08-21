export const getCategory = (productsArray) => {
  const categoryArray = [];

  const data = productsArray.reduce((acc, curr) => {
    if (!categoryArray.includes(curr.category)) {
      categoryArray.push(curr.category);
      acc.push(curr);
    }

    return acc;
  }, []);

  return data;
};
