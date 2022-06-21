import express, { Router } from "express";
import { HistoryService } from "../services";

const service: HistoryService = new HistoryService();

export class HistoryController {
  public router: Router;

  constructor() {
    this.router = express.Router();

    /* following code is to handle http://localhost:3000/history request. */
    this.router
      .post("/history", this.postMessage)
      .get("/history", this.getHistoryList)
      .get("/history/:id", this.getMessage);
  }

  // post a message
  public async postMessage(req, res, next) {
    service.postMessage(req, res, next);
  }

  // get all message (msg-history)
  public async getHistoryList(req, res, next) {
    service.getHistoryList(req, res, next);
  }

   // get a message based upon the id
   public async getMessage(req, res, next) {
    service.getMessage(req, res, next);
  }
}
