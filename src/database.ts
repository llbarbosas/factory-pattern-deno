export default class DatabaseService {
  start() {
    console.log("[database] Starting...");
    console.log("[database] Connecting to Postgres...");
    console.log("[database] Running migrations...");
    console.log("[database] Starting done!");
  }

  stop() {
    console.log("[database] Stopping...");
    console.log("[database] Closing Postgres connection...");
    console.log("[database] Stopping done!");
  }
}
