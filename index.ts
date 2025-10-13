import figlet from "figlet";

import db from "./lib/db";
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
        }
    },
    port: 3000,
    fetch(req) {




      return new Response(figlet.textSync("First Bun Http Server! Hot reload is enabled!", { font: "Standard" }));
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  