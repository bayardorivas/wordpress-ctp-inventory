import { config } from "dotenv";
config();
import Server from "./server.js";
const app = new Server();

app.listen();
