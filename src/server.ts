import express from "express";
import { json } from "express";
import morgan from "morgan";
import router from "./routers";

const server = express();

server.use(json());
server.use(morgan("dev"));

server.use(router);

export default server;
