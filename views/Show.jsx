const React = require('react')

function Show(props){
    
    const {pokemon} = props
    console.log(pokemon)
    return (
        <div>
            <h1>Pokemon Show Page</h1>

            <h2>{pokemon.name} 
            </h2>
            <img href="/">{pokemon.img}</img>
        </div>
    )
}

 module.exports  = Show;