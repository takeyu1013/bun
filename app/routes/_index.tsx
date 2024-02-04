import type { MetaFunction } from "@remix-run/node";
import { create, props } from "@stylexjs/stylex";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

const { h1 } = create({ h1: { fontWeight: "bold" } });

export default function Index() {
  return (
    <div>
      <h1 {...props(h1)}>Welcome to Remix (SPA Mode)</h1>
    </div>
  );
}
