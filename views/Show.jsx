const React = require('react')

function Show(props){
    
    const {pokemon} = props
    console.log(pokemon)
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>

            <h2>{pokemon.name} 
            </h2>
            <img src={pokemon.img + '.jpg'} href="/"/>
            <div><a href="/">Back</a></div>
        </div>
    )
}

 module.exports  = Show;