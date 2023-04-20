const React = require("react");

function New() {
  return (
    <div>
      <h1>New Pokemon Page</h1>

      <form action="/pokemon" method="POST">
        Name:
        <input type="text" name="name" />
        <br />

        Img: <input type="text" name="img" />
        <br />

        <input type="submit" value="Submit New Pokemon" />
      </form>
    </div>
  );
}

module.exports = New;
