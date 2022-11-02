const express = require('express');
var bodyParser = require('body-parser')
const client =require('./config/db');
const csv=require('csvtojson');

const app = express();

app.use(bodyParser.json())



let path = "sample-user-data.csv"; 

const fs = require('fs').promises;

(async() => {
    const stat = await fs.lstat('sample-user-data.csv');
    console.log(stat.isFile());
})().catch(console.error)

app.post('/api/v1/upload-user/add',async(req,res)=>{
    try {
        const data = await client.query("COPY users(name , email ,phone , city) FROM 'sample-user-data.csv' delimiter ',' CSV HEADER")
        res.status(201).json({
            success:true,
            data

        })
    } catch (error) {
        console.log(error);
    }
})

const PORT = process.env.PORT ||5000;



app.listen(PORT,console.log(`Server Runing on port ${PORT}` ));