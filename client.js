const net = require("net");
//connect to the server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
//translate the message
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write ('Name: MF');
    return conn;
  });
};

module.exports = { connect };
