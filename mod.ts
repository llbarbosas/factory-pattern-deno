import DatabaseService from "./src/database.ts";
import WebserverService from "./src/webserver.ts";

import Core from "./src/core.ts";

// TODO: refactor this conversion
const core: Core = new (Core as any)().inject({
  WebserverService: new WebserverService(),
  DatabaseService: new DatabaseService(),
});

try {
  core.start();
  core.stop();
} catch (error) {
  console.log("Uncaught exception!");
  console.log(error);
}
