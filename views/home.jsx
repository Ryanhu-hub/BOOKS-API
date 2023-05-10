const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Hello World</h1>
        <div>
          <img src="https://i.redd.it/9c2h4gy21hs21.jpg" alt="Minute Rice Talent" />
</div>
      </main>
    </Def>
  );
}

module.exports = home;
