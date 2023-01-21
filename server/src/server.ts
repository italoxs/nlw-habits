import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3333,
    host: "127.0.0.1",
  })
  .then(() => {
    console.log("HTTP Server running!");
  });
