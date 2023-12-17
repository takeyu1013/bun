// import { edenTreaty } from "@elysiajs/eden";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  return [
    { id: "foo", title: "bar", description: "baz", link: "hoge" },
  ] satisfies {
    id: string;
    title: string;
    description: string;
    link: string;
  }[];
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
}
