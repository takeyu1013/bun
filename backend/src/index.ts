import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger())
  .get("/hello", () => "Hello Elysia")
  .get("/posts", () => {
    return [{ id: "foo", title: "bar", description: "baz" }] satisfies {
      id: string;
      title: string;
      description: string;
    }[];
  })
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
