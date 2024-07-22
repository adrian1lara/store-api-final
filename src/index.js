const { server } = require("./app");
const connect = require("./db/connection");

connect();

const PORT = 3000;

server.listen(PORT, () =>
  console.log(`App is listening on http://localhost:${PORT}`),
);
