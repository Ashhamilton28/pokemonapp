//call and configure your dotenv package
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
//data
const pokemon = require('./models/pokemon')
const app = express();
const PORT = 3000


//====Configuration
//these 2 lines of code are needed to set everything up
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//======Middleware
//Setting a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

//parses the data from the request
app.use(express.urlencoded({ extended: false }))


//change your /pokemon to res.render your Index.jsx file
app.get('/', (req, res)=>{
    // res.send(pokemon)
    res.render('Index', {pokemon: pokemon})
})

//return list of pokemon
app.get('/pokemon', (req, res)=>{
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/:id', (req,res)=>{
    res.render('Show',{pokemon: pokemon[req.params.id]})
})

// app.get('/pokemon/:id',(req, res)=>{
//     res.send (req.params.id)
// })

//if none of the routes matches the request show 404 page
app.get('*', (req, res) => {
    res.redirect('404')
})




// Tell the app to listen on port 3000
app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI_KEY, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})

