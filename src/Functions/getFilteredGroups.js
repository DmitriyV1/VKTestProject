const getFilteredGroups = function (obj, filter) {
  let array = [];

  filter === "friends" &&
    obj.map((e) =>
      Object.values(e).forEach((value) => {
        value == e.friends && array.push(e);
      })
    );

  filter === "friendless" &&
    obj.map((e) => e["friends"] === undefined && array.push(e));

  filter === "all" && array.push(...obj);

  filter === "open" && obj.map((e) => e["closed"] === false && array.push(e));

  filter === "private" && obj.map((e) => e["closed"] === true && array.push(e));

  // -------------------- Filtering all other (colors)
  obj.map((e) =>
    Object.values(e).forEach((value) => {
      value === filter && array.push(e);
    })
  );

  return array;
};

export default getFilteredGroups;

//    obj.map((e) =>
//       Object.keys(e).forEach((key) => {
//         key === "avatar_color" && array.push(e[key]);
//         //   console.log(`${key}'s value is ${e[key]}`);
//       })
//     );
