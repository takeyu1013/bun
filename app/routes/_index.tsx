import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Remix Contacts</h1>
      <div>
        <Form role="search">
          <input
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div aria-hidden hidden={true} />
        </Form>
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/contacts/1">Your Name</a>
          </li>
          <li>
            <a href="/contacts/2">Your Friend</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
