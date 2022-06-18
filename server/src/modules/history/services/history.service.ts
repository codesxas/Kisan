import { Request, Response, NextFunction } from "express";
import { App } from "../../../helper";
import { History } from "../entities";

export class HistoryService {
  connection;
  constructor() {
    this.connection = new App().connection;
  }

  public async getHistoryList(req: Request, res: Response, next: NextFunction) {
    this.connection
      .query(`SELECT * FROM public.history`)
      .then(async (response) => {
        const historyList: History[] = await response.manager.findAll();
        res.json({
          message: "Request successfully fetched!",
          data: historyList,
        });
      })
      .catch((error) => {
        console.error("Error ", error);
        res.json(error);
        next(error);
      });
  }
}
