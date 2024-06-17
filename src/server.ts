import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors, {
    origin: "https://user-base-one.vercel.app",
  });
  await app.register(routes);

  const port = 3333;

  try {
    await app.listen({ port, host: "0.0.0.0" });
  } catch (error) {
    process.exit(1);
  }
};

start();
