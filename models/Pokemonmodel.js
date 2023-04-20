const mongoose = require('mongoose')


const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img:{type: String},
   
})

const Pokemonmodel = mongoose.model('Pokemonmodel', pokemonSchema)
module.exports= Pokemonmodel