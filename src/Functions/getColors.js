const getColors = function (obj) {
  let array = [];
  obj.map((e) =>
    Object.keys(e).forEach((key) => {
      key === "avatar_color" && array.push(e[key]);
    })
  );

  return array;
};

export default getColors;
