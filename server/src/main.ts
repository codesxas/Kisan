import { configService } from "./config/config.service";
// import { AppModule } from "./modules/app.module";

// const port = configService.getPort();

async function server() {
  console.log('first')
  // const app = new AppModule().create();

  // await app.listen(port, () => {
  //   console.log(`App is listening at http://localhost:${port}`);
  // });
}

server();
