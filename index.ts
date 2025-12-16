import figlet from "figlet";

import { db, sqlite } from "./lib/db";
import seed from "./lib/seed";

const server = Bun.serve({
    routes: {
        "/": {
            GET: (req) => {
                return new Response(figlet.textSync("First Bun Http Server! Hot reload is enabled!", { font: "Standard" }));
            }
        },
        "/seed": {
            GET: async (req) => {
                await seed();
                return new Response("Seeded the database");
            }
        },
        "/users": {
            GET: async (req) => {
                return new Response(JSON.stringify(db.query(`SELECT * FROM users`).all()));
            }
        },
        "/posts": {
            GET: async (req) => {
                return new Response(JSON.stringify(db.query(`SELECT * FROM posts`).all()));
            }
        },
        "/users/:id": {
            GET: async (req) => {
                const url = new URL(req.url);
                const id = url.pathname.split('/').pop();
                const result = sqlite`SELECT * FROM users WHERE id = ${id}`.values();
                return new Response(JSON.stringify(result));
            }
        },
        "/posts/:id": {
            GET: async (req) => {
                const url = new URL(req.url);
                const id = url.pathname.split('/').pop();
                const result = sqlite`SELECT * FROM posts WHERE id = ${id}`.values();
                return new Response(JSON.stringify(result));
            }
        }
    },
    port: 3000,
    fetch(req) {
      return new Response(figlet.textSync("First Bun Http Server! Hot reload is enabled!", { font: "Standard" }));
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  