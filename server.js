const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes')
const fileupload = require('express-fileupload')
const app = express();
app.use(fileupload())
app.use(cors()); 
app.use('/', routes)
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};

app.listen(port, ()=>{console.log('listening')})
    // console.log('server is running at port 5000');

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