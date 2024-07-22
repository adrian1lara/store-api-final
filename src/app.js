import express from "express";
import http from "http";
import bodyParser from "body-parser";

import clienteRoute from "./routes/clienteRoute.js";
import categoriaRoute from "./routes/categoriaRoute.js";
import productoRoute from "./routes/productoRoute.js";
import ordenRoute from "./routes/ordenRoute.js";

export const app = express();

export const server = http.createServer(app);

app.use(bodyParser.json());

app.use("/api/v0/cliente", clienteRoute);

app.use("/api/v0/categoria", categoriaRoute);

app.use("/api/v0/producto", productoRoute);

app.use("/api/v0/orden", ordenRoute);

app.get("/", (req, res) => {
  return res.status(201).json({ msg: "alive" });
});
