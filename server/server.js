const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose =require('mongoose')
const app = express()
const port = 3000

const mongourl="mongodb://localhost:27017/new_login"

app.use(cors())
app.use(bodyParser.json())

const DBconnect= async()=>{
  try{
    await mongoose.connect(mongourl)
    console.log("DB connected")
  }
  catch(error){
    console.error("DB connection failed")
    process.exit(1);//fail safe methoid
  }
}
DBconnect();

app.post('/login',(req,res)=>{
    const {name,email}=req.body;
    console.log(`Received data: Name = ${name}, Email = ${email}`);

    res.json({ message: 'Data received successfully', receivedData: req.body });
});

app.get('/', (req, res) => {
  res.send('This is stack')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})