import type { MetaFunction } from "@remix-run/node";
import type { App } from "backend/src";

import { useLoaderData } from "@remix-run/react";
import { edenTreaty } from "@elysiajs/eden";

export const loader = async () => {
  const client = edenTreaty<App>("http://localhost:8080");
  return client.hello.get();
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Home</h1>
      <p>{data}</p>
    </>
  );
}
