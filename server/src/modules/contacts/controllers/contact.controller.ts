import express, { Router } from "express";
import { ContactService } from "../services";

const service: ContactService = new ContactService();

export class ContactController {
  public router: Router;

  constructor() {
    this.router = express.Router();

    /* following code is to handle http://{url}/contact request. */
    this.router
      .post("/contact", this.postContact)
      .get("/contact", this.getContactList)
      .get("/contact/:id", this.getContact);
  }

  // post a contact
  public postContact(req, res, next) {
    service.postContact(req, res, next);
  }

  // get all contacts
  public async getContactList(req, res, next) {
    service.getContactList(req, res, next);
  }

  // get a contacts based upon their ids
  public async getContact(req, res, next) {
    service.getContact(req, res, next);
  }
}
