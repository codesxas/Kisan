import { Router } from "express";
import { ContactService } from "../services";

export class ContactController {
  private service: ContactService;
  public router: Router;

  constructor() {
    this.service = new ContactService();
    /* following code is to handle http://localhost:3000/contact request. */
    this.router
      .get("/contact", this.getContactList)
      .post("/contact", this.postMessageDetails);
  }

  public async getContactList(req, res, next) {
    return await this.service.getContactList(req, res, next);
  }

  public async postMessageDetails(req, res, next) {
    return await this.service.postMessageDetails(req, res, next);
  }
}
