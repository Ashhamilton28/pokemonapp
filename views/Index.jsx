const React = require("react");

function Index(props) {
  const { pokemon } = props;

  const myStyle = {
    color: '#F4EEE0',
    backgroundColor:'#393646',
  }

  return (
    <div>
      <h1 style={myStyle}>See All The Pokemon</h1>


      <ul>
        {pokemon.map((pokemonChar, i) => {
          return (
           
            <li>
              <a key={pokemon.indexOf(pokemonChar)} href={`/pokemon/${i}`}>{pokemonChar.name.charAt(0).toUpperCase()+ pokemonChar.name.slice(1)}</a> 
            </li>
          );
        })}
      </ul>
     
    </div>
  );
}

module.exports = Index;