import { Router } from "express";
import { HistoryService } from "../services";

export class HistoryController {
  private service: HistoryService;
  public router: Router;

  constructor() {
    this.service = new HistoryService();
    /* following code is to handle http://localhost:3000/history request. */
    this.router
      .get("/history", this.getHistoryList)
  }

  public async getHistoryList(req, res, next) {
    return await this.service.getHistoryList(req, res, next);
  }
}
