let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    console.log("Move: up");
    connection.write('Move: up');
  }
  if (key === "d") {
    console.log("Move: up");
    connection.write('Move: right');
  }
  if (key === "a") {
    console.log("Move: up");
    connection.write('Move: left');
  }
  if (key === "s") {
    console.log("Move: up");
    connection.write('Move: down');
  }
  if (key === "1") {
    console.log("Don't run");
    connection.write("Don't run");
  }
  if (key === "2") {
    console.log("I will eat you");
    connection.write("I will eat you");
  }
  if (key === "3") {
    console.log("You lose!");
    connection.write("You lose!");
  }
}

module.exports = { setupInput };