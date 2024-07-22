import { server } from "./app.js";
import connect from "./db/connection.js";

connect();

const PORT = 3000;

server.listen(PORT, () =>
  console.log(`App is listening on http://localhost:${PORT}`),
);
