const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write ('Name: MF');

    // let delay = 0;
    // for(let i = 0; i < 100; i++) {
    //   setTimeout(() => {
    //   conn.write ('Move: up')}, delay);
    //   delay +=50
    // };
    // setInterval(() => {
    // conn.write ('Move: up')}, 50);
    // });

    return conn;
  });
};

module.exports = connect;
