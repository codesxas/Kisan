import express, { Router } from "express";
import { HistoryService } from "../services";

const service: HistoryService = new HistoryService();

export class HistoryController {
  public router: Router;

  constructor() {
    this.router = express.Router();

    /* following code is to handle http://localhost:3000/history request. */
    this.router
      .post("/message", this.postMessage)
      .get("/message", this.getHistoryList)
      .get("/message/:id", this.getMessage)
      .get("/history/:id", this.getContactHistory);
  }

  // post a message
  public async postMessage(req, res, next) {
    res.json(await service.postMessage(req, res, next));
  }

  // get all message (msg-history)
  public async getHistoryList(req, res, next) {
    res.json(await service.getHistoryList(req, res, next));
  }

  // get a message based upon the id
  public async getMessage(req, res, next) {
    res.json(await service.getMessage(req, res, next));
  }

  // get a message based upon the id
  public async getContactHistory(req, res, next) {
    res.json(await service.getContactHistory(req, res, next));
  }
}
