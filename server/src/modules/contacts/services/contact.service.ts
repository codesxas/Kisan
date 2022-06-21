import { Request, Response, NextFunction } from "express";
import { Connection } from "../../../helper";

export class ContactService {
  pool;
  constructor() {
    this.pool = new Connection().createConnection();
  }

  public async postContact(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { firstName, lastName, areaCode, phoneNumber, status, organization } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !areaCode ||
      !phoneNumber ||
      !status ||
      !organization
    )
      res.json({ error: { message: "Invalid Data" } });

    const newContact = await this.pool.query(
      "INSERT INTO contact (first_name, last_name, area_code, phone_number, status, organization) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstName, lastName, areaCode, phoneNumber, status, organization]
    );

    res.json(newContact.rows[0]);
  }

  public async getContactList(req: Request, res: Response, next: NextFunction) {
    const allContacts = await this.pool.query("SELECT * FROM contact");

    res.json(allContacts.rows);
  }

  public async getContact(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const contact = await this.pool.query(
      "SELECT * FROM contact WHERE id = $1",
      [id]
    );

    res.json(contact.rows[0]);
  }
}
