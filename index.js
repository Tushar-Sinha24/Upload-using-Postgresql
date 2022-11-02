const express = require('express');
const client = require('./config/db');
const csv = require('csvtojson')

const app = express();


app.post('/api/v1/upload-user/add', async (req, res) => {
    try {
        const json = await csv()
            .fromFile('./sample-user-data.csv')

        let data = JSON.parse(JSON.stringify(json))
        console.log(json)
        data.map(async (data) => {
            await client.query(`INSERT INTO users(name , email, phone , city) VALUES ('${data.name}' ,'${data.email}', '${data.phone}', '${data.city}')`)
        })

        res.status(201).json({
            success: true,
            data

        })
    } catch (error) {
        console.log(error);
    }
})

const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`Server Runing on port ${PORT}`));