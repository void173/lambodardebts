const express = require('express')
const app = express();
const db = require('./db')
require('dotenv').config();
const User = require('./models/User')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/carrer',async (req,res)=>{
    try{
        const data = req.body;
        const newUser = new User(data);

        const response = await newUser.save();

        if(!response)
            return res.send({error:'Cant save the data'});
        else{
            return res.status(200).send({message:'Data saved'});
        }
    }catch(err){
        res.status(400).send({message:'Internal server issue'})
    }
})


app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`);
})