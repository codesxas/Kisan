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
    const { message, phoneNumber } = req.body;

    if (!message || !phoneNumber) return { error: { message: "Invalid Data" } };
    
    const receivedDate = new Date();
    const getContact = await this.pool.query(
      "SELECT * FROM contact WHERE phone_number = $1",
      [phoneNumber]
    );
    const contactId = await getContact.rows[0].id;

    const newMessage = await this.pool.query(
      "INSERT INTO messages(message, received_date, sent_to) VALUES($1, $2, $3) RETURNING *",
      [message, receivedDate, contactId]
    );

    const areaCode = getContact.rows[0].area_code;

    const sendSMS = await this.client.messages.create({
      body: message,
      from: "+18578472653",
      to: areaCode + phoneNumber,
    });

    return {
      data: newMessage.rows[0],
      message: "Message Successfully sent!",
    };
  }

  public async getHistoryList(req: Request, res: Response, next: NextFunction) {
    const allMessages = await this.pool.query("SELECT * FROM messages");

    return allMessages.rows;
  }

  public async getMessage(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const message = await this.pool.query(
      "SELECT * FROM messages WHERE id = $1",
      [id]
    );

    return message.rows[0];
  }

  public async getContactHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const message = await this.pool.query(
      "SELECT * FROM messages WHERE sent_to = $1",
      [id]
    );

    return message.rows;
  }
}
