import express from "express";
import http from "http";
import bodyParser from "body-parser";

import clienteRoute from "./routes/clienteRoute.js";
import categoriaRoute from "./routes/categoriaRoute.js";

export const app = express();

export const server = http.createServer(app);

app.use(bodyParser.json());

app.use("/api/v0/cliente", clienteRoute);

app.use("/api/v0/categoria", categoriaRoute);

app.get("/", (req, res) => {
  return res.status(201).json({ msg: "alive" });
});
