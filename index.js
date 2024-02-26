import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer, WebSocket, createWebSocketStream } from "ws";

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const  wss = new WebSocketServer({port: WSS_PORT})
