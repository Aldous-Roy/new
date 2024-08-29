const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    const {name,email}=req.body;
    console.log(`Received data: Name = ${name}, Email = ${email}`);

    res.json({ message: 'Data received successfully', receivedData: req.body });
});

app.get('/', (req, res) => {
  res.send('This is a start point')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})