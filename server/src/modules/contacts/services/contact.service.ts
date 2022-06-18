import { Request, Response, NextFunction } from "express";
import { App } from "../../../helper";
import { Contact } from "../entities";

export class ContactService {
  connection;
  constructor() {
    this.connection = new App().connection;
  }

  public async getContactList(req: Request, res: Response, next: NextFunction) {
    this.connection
      .query(`SELECT * FROM public.contact`)
      .then(async (response) => {
        const contactList: Contact[] = await this.connection.manager.findAll();
        res.json({
          message: "Request successfully fetched!",
          data: contactList,
        });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
        next(error);
      });
  }

  public async postMessageDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { name, phoneNumber, message, text } = req.body;

    if (!name || !phoneNumber || !message || !text) {
      throw { error: { message: "Add all required fields!" } };
    }

    this.connection
      .query(`SELECT * FROM public.contact`)
      .then(async (response) => {
        await response.manager.save({
          name,
          phoneNumber,
          message,
          text,
        });
        res.json({
          message: "Request successfully posted!",
        });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
        next(error);
      });
  }
}
