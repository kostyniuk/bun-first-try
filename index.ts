const server = Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response("First Bun Http Server! Hot reload is enabled!");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  