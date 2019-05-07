"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            var files = fs.readdirSync('./public/photoalbum');
            res.render('index', {
                photos: files
            });
            console.log('Reading files');
            // res.status(200).send({
            //     message: 'GET request successfulll!!!!'
            // })
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map