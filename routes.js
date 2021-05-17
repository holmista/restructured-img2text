const Tesseract  = require('tesseract.js');
const express  = require('express')
const router = express.Router()


router.post('/upload', (req,res)=>{
    
    const myFile = req.files.file;
    // myFile.mv(`D:/web_projects/react-express-mongodb-template/server/pictures/${myFile.name}`)
    
    // let img = `D:/web_projects/react-express-mongodb-template/server/pictures/${myFile.name}`
    // convert(img).then((text)=>res.send(text)).then(()=>remove(img));
    // ()=>remove(img)
    Tesseract.recognize(
        myFile.data,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        res.send(text);
      })
    // convert(myFile)
    // .then((text)=>res.send(text))
    
    
})