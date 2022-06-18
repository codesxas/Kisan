import { configService } from "./config/config.service";
import { App } from "./helper/app";

const port = configService.getPort();

async function server() {
  const app = new App().create();

  await app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
  });
}

server();
