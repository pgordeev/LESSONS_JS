console.log("Switch-Case Example");

//const role = "admin"; // admin, manger, user
// const role = "manager";
// const role = "user";
const role = "unknown";

switch (role) {
  case "admin":
    console.log({
      role: "admin",
      drink: "beer",
    });
    break;
  case "manager":
    console.log({
      role: "manager",
      drink: "juice",
    });
    break;
  case "user":
    console.log({
      role: "user",
      drink: "aqua",
    });
    break;
  default:
    console.log("Unknown user");
}
