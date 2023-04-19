const mongoose = require('mongoose')


const pokemonSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Img:{type: String, required: true},
   
})

const Pokemonmodel = mongoose.model('Pokemonmodel', pokemonSchema)
module.exports= Pokemonmodel