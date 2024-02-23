import type { LinksFunction } from "@remix-run/node";
import {
  Form,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import href from "./app.css?url";
import { createEmptyContact, getContacts } from "./data";

export const clientAction = async () => {
  const contact = await createEmptyContact();
  return json({ contact });
};

export const links = (() => [
  { rel: "stylesheet", href },
]) satisfies LinksFunction;

export const clientLoader = async () => {
  const contacts = await getContacts();
  return json({ contacts });
};

export default function App() {
  const { contacts } = useLoaderData<typeof clientLoader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map(({ id, first, last, favorite }) => (
                  <li key={id}>
                    <Link to={`contacts/${id}`}>
                      {first || last ? (
                        <>
                          {first} {last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {favorite ? <span>★</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No contacts</p>
            )}
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>Loading...</p>
        <Scripts />
      </body>
    </html>
  );
}
