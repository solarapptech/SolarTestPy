const spawner = require('child_process').spawn;

const bnc_data = 10;
const python_process = spawner('python', ['./apibnc.py', bnc_data]);

python_process.stdout.on('data', (data) => {
  app.get ('/info5', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')
             
      tasabinance = data.toString();
    
      const sendData5 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
      res.write(sendData5);
  })
});

