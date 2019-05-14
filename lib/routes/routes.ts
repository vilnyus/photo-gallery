
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
            // var files: string[] = fs.readdirSync('./public/photoalbum');      

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

            // res.send(this.binary); 

            // im.resize({
            //     srcData: fs.readFileSync(`./public/photoalbum/big/${req.params.resized_photo}`, 'binary'),
            //     width:   256
            //   }, function(err, stdout, stderr){
            //     if (err) throw err
            //     fs.writeFileSync(`./public/photoalbum/small/${req.params.resized_photo}`, stdout, 'binary');
            //     console.log('resized kittens.jpg to fit within 256x256px')
            // });

            // im.readMetadata(`./public/photoalbum/big/${req.params.resized_photo}`, function(err, metadata){
            //     if (err) throw err;
            //     console.log('Shot at '+metadata.exif.dateTimeOriginal);
            //     // -> Shot at Tue, 06 Feb 2007 21:13:54 GMT
            // });
            // im.convert([this.binary, '-resize', '25x120', 'kittens-small.jpg'], 
            // function(err, stdout){
            //     if (err) throw err;
            //     console.log('stdout:', stdout);
            // });

            // lwip.open(`./public/photoalbum/big/${req.params.resized_photo}`, function(err, image) {
                // image.rotate(33, function(err, image){
                //     // res.send(image);
                //     // 'image' is now rotated 33 degrees
                // });
                // image.resize(200, 200, function(err, image){
                    // console.log(image);
            //             // encode resized image to jpeg and get a Buffer object
            //         image.toBuffer('jpg', {quality: 90}, function(err, buffer){
            //             // Send buffer over the network, save to disk, etc.
            //             console.log(buffer); 
            //         });    
                // });
            // });
    
        })        
        
    }

}