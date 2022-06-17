import express, { Express } from "express";
import { errorHandler } from "../helper";
import { configService } from "../config/config.service";

const { Client } = require("pg");
class AppModule {
  app: Express;

  constructor() {
    this.app = express();
  }

  /* setting up parsers for JSON and URLs respectively */
  private useParser() {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
  }

  public useBaseRoute() {
    this.app.get("/", (req, res) => {
      res.json({ message: "Hello World" });
    });
  }

  /* adding routes by using their file-path */
  public useRoutes(path: string) {
    this.app.use(require(path));
  }

  /* connecting with postgres db */
  public createConnection() {
    const connection = new Client(configService.getDbConfig());

    connection.connect((err: any) => {
      if (err) throw err;
      console.log("Connected!");
    });

    return connection;
  }

  public create(): Express {
    this.useParser();
    const connection = this.createConnection();

    /* Error handler middleware */
    this.app.use(errorHandler);

    /* Routing */
    this.useBaseRoute();

    return this.app;
  }
}

export { AppModule };
