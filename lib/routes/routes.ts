
import * as fs from "fs";
import {Request, Response} from "express";

export class Routes {   
    
    public routes(app): void {      
   
        app.route('/')
        .get((req: Request, res: Response) => {         
            var files: string[] = fs.readdirSync('./public/photoalbum');      

            res.render('index', {
                photos: files
            });
            console.log('Reading files');  

        })  

    }

}