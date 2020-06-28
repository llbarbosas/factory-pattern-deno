import Core from "../../src/core.ts";
import { Module } from "../../util/inject.ts";

Deno.test("must run", () => {
  const mockService = {
    start: () => console.log("[mock] ..."),
    stop: () => console.log("[mock] ..."),
  };

  const coreModule: Core = Module(Core, {
    providers: [
      { provide: "WebserverService", useValue: mockService },
      { provide: "DatabaseService", useValue: mockService },
    ],
  });

  coreModule.start();
  coreModule.stop();
});
