import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
  public app: express.Application = express();

  constructor() {
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
