import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

const app= express();
const port = process.env.PORT || 8001 ;


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(`mongodb+srv://admin:Dtainugv@cluster0.iy7ieva.mongodb.net/?retryWrites=true&
    w=majority`); 
}

app.use(express.json());
app.use(Cors());
app.get('/',(req,res)=> res.status(200).send('Hllo'));
app.post('/tinder/cards',(req,res)=>{
    const dbCard= req.body;
    Cards.create( dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});

app.listen(port,()=> console.log(`listening on localhost: ${port}`));