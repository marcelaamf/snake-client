const connect = require("./client");
console.log("Connecting ...");

connect();

const handleUserInput = function(key){ 
    if (key === '\u0003') {
      process.exit();
    };
    if (key === "w") {
     conn.write('Move: up');
    }
    if (key === 'd') {
    conn.write('Move: right')
    };
    if (key === "s") {
    conn.write('Move: down')
    };
    if (key === "a") {
    conn.write('Move: left')
    };
  };


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();

  return stdin;
  };



setupInput();