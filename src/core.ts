import { InjectDependencies } from "../util/inject.ts";

import DatabaseService from "./database.ts";
import WebserverService from "./webserver.ts";

@InjectDependencies
export default class Core {
  constructor(
    private database: DatabaseService,
    private webserver: WebserverService
  ) {}

  start() {
    console.log("[core] Starting...");
    this.database.start();
    this.webserver.start();
    console.log("[core] Starting done! System running!");
  }

  stop() {
    console.log("[core] Stopping...");
    this.webserver.stop();
    this.database.stop();
    console.log("[core] Stopping done!");
  }
}
