import express, { Express } from "express";
import { errorHandler } from "../helper";

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

  public create(): Express {
    this.useParser();

    /* Error handler middleware */
    this.app.use(errorHandler);
    this.useBaseRoute();

    return this.app;
  }
}

export { AppModule };
