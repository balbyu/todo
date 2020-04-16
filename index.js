import app from "./app";
import config from "./config/index";

app.listen(config.server.port, () => {
  console.log(`Server started on port: ${config.server.port}.`);
});
