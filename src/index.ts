import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger())
  .get("/", ({ body, set }) => {
    console.log(body);
    set.status = 200;
    return "Hello Elysia";
  })
  .get("/ping", () => "pong")
  .get("id/:id", ({ params: { id } }) => `${id}`)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
