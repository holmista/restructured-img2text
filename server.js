const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs')
const { createWorker } = require('tesseract.js');
const Tesseract  = require('tesseract.js');


const app = express();
app.use(cors()); 
app.use(fileUpload());

app.post('/upload', (req,res)=>{
    
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
app.listen(process.env.PORT || 5000, () => {
    // console.log('server is running at port 5000');
})
// async function convert(img){
//   const worker = createWorker();
    
//   console.log(worker)
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
//   const { data: { text } } = await worker.recognize(img);
  
//   // console.log(text);
//   await worker.terminate();
//   return text
    
// }
// async function remove(path){
//   try {
//     fs.unlinkSync(path)
//   } catch(err) {
//     console.error(err)
//   }
// }