const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const {json} = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const albumsRoutes = require('./src/router/albums.router')

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:'./uploads',
        limits:{fileSize: 10000000},
        abortOnLimit:true
    })
)
app.use(json({limit:'50mb'}))



app.use('/album',albumsRoutes)



module.exports = app;