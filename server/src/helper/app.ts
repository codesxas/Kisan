import cors from "cors";
import express, { Express } from "express";

import { errorHandler } from "./error.helper";
import { ContactController } from "../modules/contacts/controllers";
import { HistoryController } from "../modules/history/controllers";

class App {
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

  public create(): Express {
    this.app.use(cors());
    this.useParser();

    /* Error handler middleware */
    this.app.use(errorHandler);

    const contact = new ContactController();
    this.app.use(contact.router);

    const history = new HistoryController();
    this.app.use(history.router);

    return this.app;
  }
}

export { App };
