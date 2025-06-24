import app from "./app.js";
import "./database.js";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js";

async function main() {
  app.listen(config.server.PORT);
  console.log("=========================================");
  console.log("           Server on port " + config.server.PORT);
  console.log("=========================================");
  console.log("-----------------------------------------");
}

main();