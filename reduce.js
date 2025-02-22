let userActivity = [
  { user: "User1", activityCount: 10 },
  { user: "User2", activityCount: 22 },
  { user: "User3", activityCount: 23 },
  { user: "User4", activityCount: 44 },
];

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser);
