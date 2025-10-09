const prompt = require("prompt-sync")();
let items = [];

while (true) {
  console.log("\n1.Add  2.View  3.Update  4.Delete  5.Exit");
  let choice = prompt("Choice: ");

  if (choice === "1") {
    items.push(prompt("Enter item: "));
  } 
  else if (choice === "2") {
    console.log("Items:", items.length ? items.join(", ") : "None");
  } 
  else if (choice === "3") {
    let i = parseInt(prompt("Item no: ")) - 1;
    if (items[i]) items[i] = prompt("New value: ");
    else console.log("Invalid!");
  } 
  else if (choice === "4") {
    let i = parseInt(prompt("Item no: ")) - 1;
    if (items[i]) items.splice(i, 1);
    else console.log("Invalid!");
  } 
  else if (choice === "5") {
    console.log("Goodbye!");
    break;
  } 
  else {
    console.log("Invalid choice!");
  }
}
