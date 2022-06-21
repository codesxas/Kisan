import cors from "cors";
import express, { Express } from "express";
import _ from "lodash";

import { errorHandler } from "./error.helper";
import { ContactController } from "../modules/contacts/controllers";
import { HistoryController } from "../modules/history/controllers";
import { ContactService } from "../modules/contacts/services";

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

  public async createTestData() {
    const seedId = Date.now()
      .toString()
      .split("")
      .reverse()
      .reduce((s, it, x) => (x > 3 ? s : (s += it)), "");

    const statusArray = ["Available", "Unavailable"];
    const organizationArray = [
      "Zencorporation",
      "Groovestreet",
      "Iselectrics",
      "Toughzap",
      "Konmatfix",
    ];

    const service = new ContactService();

    const data = _.range(1, 20)
      .map((n) => {
        return {
          body: {
            firstName: `FN${seedId}-${n}`,
            lastName: `LN${seedId}-${n}`,
            areaCode: "+91",
            phoneNumber: `${7082537507 + n}`,
            status: statusArray[Math.floor(Math.random() * statusArray.length)],
            organization:
              organizationArray[
                Math.floor(Math.random() * organizationArray.length)
              ],
          },
        };
      })
      .map((item) => {
        service.postContact(item, null, null);
      });

    return await Promise.all(data);
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

    // this.createTestData()
    //   .then((_) => console.log("...wait for script to exit"))
    //   .catch((error) => console.error("seed error", error));

    return this.app;
  }
}

export { App };
