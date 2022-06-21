import { Request, Response, NextFunction } from "express";
import { Connection } from "../../../helper";

export class HistoryService {
  pool;
  client;

  constructor() {
    this.pool = new Connection().createConnection();
    this.client = new Connection().twilioConnection();
  }

  public async postMessage(req: Request, res: Response, next: NextFunction) {
    const { message } = req.body;
    const receivedDate = new Date();

    const newMessage = await this.pool.query(
      "INSERT INTO history(message, received_date) VALUES($1, $2) RETURNING *",
      [message, receivedDate]
    );

    const sendSMS = await this.client.messages.create({
      body: message,
      from: "+18578472653",
      to: "+917082537506",
    });

    res.json({
      data: newMessage.rows[0],
      message: "Message Successfully sent!",
    });
  }

  public async getHistoryList(req: Request, res: Response, next: NextFunction) {
    const allMessages = await this.pool.query("SELECT * FROM history");

    res.json(allMessages.rows);
  }

  public async getMessage(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const message = await this.pool.query(
      "SELECT * FROM history WHERE id = $1",
      [id]
    );

    res.json(message.rows[0]);
  }
}
