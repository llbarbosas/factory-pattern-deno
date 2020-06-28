import DatabaseService from "./src/database.ts";
import WebserverService from "./src/webserver.ts";

import { Module } from "./util/inject.ts";

import Core from "./src/core.ts";

const coreModule: Core = Module(Core, {
  providers: [WebserverService, DatabaseService],
});

try {
  coreModule.start();
  coreModule.stop();
} catch (error) {
  console.log("Uncaught exception!");
  console.log(error);
}
