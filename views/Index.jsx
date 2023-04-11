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
        {pokemon.map((pokemon, i) => {
          return (
            <li>
              <a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</a> 
            </li>
          );
        })}
      </ul>
     
    </div>
  );
}

module.exports = Index;