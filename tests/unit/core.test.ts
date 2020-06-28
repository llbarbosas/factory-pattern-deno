import Core from "../../src/core.ts";

Deno.test("must run", () => {
  const mockService = {
    start: () => console.log("[mock] ..."),
    stop: () => console.log("[mock] ..."),
  };

  const core: Core = new (Core as any)().inject({
    WebserverService: mockService,
    DatabaseService: mockService,
  });

  core.start();
  core.stop();
});
