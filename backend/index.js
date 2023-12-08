import express from 'express'
import { PORT, mongodbURL } from './conf.js'
import mongoose from 'mongoose'

const app = express()

app.get('/', (req, res)=> {
    console.log(req)
    return res.status(234).send("Welcome To our backend Resto app")
})

mongoose
    .connect(mongodbURL)
    .then(()=> {
        console.log("App is connected to DB")
        app.listen(PORT, ()=> {
            console.log(`App is listenin to port : ${PORT}`)
        })
    })
    .catch((err)=> {
        console.log(err)
    })
