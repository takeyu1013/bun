import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", ({ body }) => {
    console.log(body);
    return "Hello Elysia";
  })
  .get("/ping", () => "pong")
  .get("id/:id", ({ params: { id } }) => `${id}`)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
