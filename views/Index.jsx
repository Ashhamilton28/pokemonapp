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
     
    </div>
  );
}

module.exports = Index;