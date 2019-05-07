
import * as express from "express";
import { Routes } from "./routes/routes";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.routePrv.routes(this.app);
        this.config();
    }    

    private config(): void{
        // config view engine
        this.app.set('view engine', 'ejs');
        this.app.set('views', 'views');

        // config static files
        this.app.use(express.static('public'));
    }
}

export default new App().app;