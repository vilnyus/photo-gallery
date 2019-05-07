"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express();
        this.routePrv.routes(this.app);
        this.config();
    }
    config() {
        // config view engine
        this.app.set('view engine', 'ejs');
        this.app.set('views', 'views');
        // config static files
        this.app.use(express.static('public'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map