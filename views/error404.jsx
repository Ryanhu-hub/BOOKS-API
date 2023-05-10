const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <a href="/">Click Here to go Home</a>
        <div>
          <img src="https://pbs.twimg.com/media/EZt-MQxU4AAEbcq?format=jpg&name=large" alt="Sad Cat" />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
