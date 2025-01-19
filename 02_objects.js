const regularUser = {
  fullname: {
    userfullname: {
      firstName: "FN",
      lastName: "LS",
    },
  },
};
console.log(regularUser.fullname.userfullname.lastName);

const obj2 = { 4: "d", 5: "e" };
const obj1 = { 1: "a", 2: "b", 3: "c" };

const obj3 = Object.assign(obj2, obj1);
console.log(obj3);

// Merge obj2 and obj1
const mergedObj = { ...obj2, ...obj1 };
console.log(mergedObj);
