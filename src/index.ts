import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger())
  .get("/", ({ body, set }) => {
    console.log(body);
    set.status = 200;
    return "Hello Elysia";
  })
  .get("/ping", () => "pong")
  .get("id/:id", ({ params: { id } }) => id)
  .get("posts", ({ body }) => {
    console.log(body);
    return [
      { id: "foo", title: "bar", description: "baz", link: "hoge" },
    ] satisfies {
      id: string;
      title: string;
      description: string;
      link: string;
    }[];
  })
  .post("/mirror", ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
    }),
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
