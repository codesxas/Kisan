import { createConnection, ConnectionOptions } from "typeorm";
import { configService } from "../config/config.service";

class Connection {
  constructor() {}

  /* connecting with postgres db */
  public createConnection(entities: any) {
    const config = { ...configService.getConfigData(), debug: true, entities };
    const connection = createConnection(config as ConnectionOptions);

    return connection;
  }
}

export { Connection };
