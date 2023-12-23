import type { App } from "backend/src";

import { useLoaderData } from "@remix-run/react";
import { edenTreaty } from "@elysiajs/eden";

export const loader = async () => {
  const client = edenTreaty<App>("http://localhost:8080");
  return client.posts.get();
};

const Index = () => {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data?.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default Index;
