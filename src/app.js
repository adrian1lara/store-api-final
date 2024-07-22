const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const clienteRoute = require("./routes/clienteRoute");
const categoriaRoute = require("./routes/categoriaRoute");
const productoRoute = require("./routes/productoRoute");
const ordenRoute = require("./routes/ordenRoute");

const app = express();

const server = http.createServer(app);

app.use(bodyParser.json());

app.use("/api/v0/cliente", clienteRoute);

app.use("/api/v0/categoria", categoriaRoute);

app.use("/api/v0/producto", productoRoute);

app.use("/api/v0/orden", ordenRoute);

app.get("/", (req, res) => {
  return res.status(201).json({ msg: "alive" });
});

module.exports = {
  app,
  server,
};
