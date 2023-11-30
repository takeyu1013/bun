// client.ts
import { edenTreaty } from "@elysiajs/eden";
import type { App } from ".";

const client = edenTreaty<App>("http://localhost:3000");

// response type: 'Hi Elysia'
client.get().then(console.log);

// response type: 1895
(client.id[1895] as typeof client).get().then(console.log);

// response type: { id: 1895, name: 'Skadi' }
client.mirror
  .post({
    id: 1895,
    name: "Skadi",
  })
  .then(console.log);
