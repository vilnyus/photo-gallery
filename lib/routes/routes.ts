
import * as fs from "fs";
import * as Jimp from "jimp";

import {Request, Response} from "express";

export class Routes {   
    public files: string[]; 
    public binary;

    constructor() {
        this.files = fs.readdirSync('./public/photoalbum/big'); 
    }
    public routes(app): void {      
   
        app.route('/')
        .get((req: Request, res: Response) => {              

            res.render('index', {
                photos: this.files
            });
            console.log('Reading files');  

        })     

        app.route('/photoalbum/:resized_photo')
        .get((req: Request, res: Response) => { 
            console.log(req.params.resized_photo);

            Jimp.read(`./public/photoalbum/big/${req.params.resized_photo}`).then(image => {
                return image
                  .resize(256, 256) // resize
                  .getBuffer(Jimp.MIME_JPEG, (err, imageResized)=> {
                    res.send(imageResized);
                  });           
            });
    
        })        
        
    }

}