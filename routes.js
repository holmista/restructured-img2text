const Tesseract  = require('tesseract.js');
const express  = require('express')
const router = express.Router()


router.post('/upload', (req,res)=>{
    //console.log(req)
    const myFile = req.files.file;
    
    // myFile.mv(`D:/web_projects/react-express-mongodb-template/server/pictures/${myFile.name}`)
    
    // let img = `D:/web_projects/react-express-mongodb-template/server/pictures/${myFile.name}`
    // convert(img).then((text)=>res.send(text)).then(()=>remove(img));
    // ()=>remove(img)
    recognize(myFile)
    .then((text)=>res.send(text.data.text))
    // convert(myFile)
    // .then((text)=>res.send(text))
    
    
})

async function recognize(file){
    let text = await Tesseract.recognize(
        file.data,
        'eng',
        { logger: m => console.log(m) })
    return text
}
module.exports = router;