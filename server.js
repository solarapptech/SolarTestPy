const spawner = require('child_process').spawn;

const bnc_data = 10;
const python_process = spawner('python', ['./apibnc.py', bnc_data]);

python_process.stdout.on('data', (data) => {
  
      tasabinance = data.toString();

});

