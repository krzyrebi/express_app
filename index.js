// uwagi: stop tha node application before running npm install on hosting

require('express-async-errors')
const express = require('express')
const mongoose = require('mongoose')
const genres = require('./routes/genres')
const logger = require('./logger')
const cors = require('cors')
const app = express()


process.on('uncaughtException', (ex) => {
    console.log('We got uncaught exception')
    logger.error(ex.message)
    process.exit(1)
})

process.on('unhandledRejection', (ex) => {
    console.log('We got unhandled rejection')
    logger.error(ex.message)
    process.exit(1)
})


app.use(express.json())
app.use(cors())
app.use('/testapp7/api/genres', genres)

const movies2 = ['Birdman', 'Batman']

app.get('/testapp7/api/movies', (req, res) => {
    // const movies = await Movie.find().sort('name')  
    res.send(movies2); 
})

app.get('/testapp7', async (req, res) => {
    res.send(movies2); 
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))