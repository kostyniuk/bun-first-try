import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response(figlet.textSync("First Bun Http Server! Hot reload is enabled!", { font: "Standard" }));
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  