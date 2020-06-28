export default class WebserverService {
  start() {
    console.log("[webserver] Staring...");
    console.log("[webserver] Waiting for port to be available...");
    console.log("[webserver] Starting done!");
  }

  stop() {
    console.log("[webserver] Stopping...");
    console.log("[webserver] Gracefully waiting for all clients...");
    console.log("[webserver] Closing all ports...");
    console.log("[webserver] Stopping done!");
  }
}
