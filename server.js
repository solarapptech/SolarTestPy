var cors = require('cors')
const express = require ('express')
const app = express ()
// const port = 8000
let server = app.listen(8000);
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;
app.use(cors())

let tasabinance = 33.33;

// const spawner = require('child_process').spawn;

// const bnc_data = 10;
// const python_process = spawner('python', ['./apibnc.py', bnc_data]);

// python_process.stdout.on('data', (data) => {
  
//   tasabinance = data.toString();
//   new_info();

// });


app.get ('/info5', (req, res) =>{
   res.setHeader('Content-Type', 'text/event-stream')
   res.setHeader('Access-Control-Allow-Origin', '*')

  const sendData = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
  res.write(sendData);

})

  

