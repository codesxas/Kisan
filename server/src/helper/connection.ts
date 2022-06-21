const Pool = require("pg").Pool;
import { configService } from "../config/config.service";

const twilio = require("twilio");

class Connection {
  constructor() {}

  /* connecting with postgres db */
  public createConnection() {
    const pool = new Pool(configService.getDbConfig());
    return pool;
  }

  public twilioConnection() {
    const accountSid = configService.getAccountSid();
    const authToken = configService.getAuthToken();

    const client = new twilio(accountSid, authToken);
    return client;
  }
}

export { Connection };
