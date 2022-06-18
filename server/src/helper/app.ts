import express, { Express } from "express";
import { DataSource } from "typeorm";

import { Connection } from "./connection";
import { errorHandler } from "./error.helper";

import { contact } from "../modules/contacts/modules";
import { history } from "../modules/history/modules";
import { ContactController } from "../modules/common/controllers/contact.controller";

class App {
  app: Express;
  connection: Promise<DataSource>;

  constructor() {
    this.app = express();

    const entities = [...contact.entities, ...history.entities];
    const connection = new Connection().createConnection(entities);
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

    const controller = new ContactController();
    controller.getContactList(this.app);

    // this.app.use(new ContactController().router);

    /* Routing */
    this.useBaseRoute();

    return this.app;
  }
}

export { App };
