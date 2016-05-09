var React = require("react");

var Navbar = require("Navbar");

var Main = (props) => {
  return (
    <div>
      <Navbar/>
      <h2>Main Component</h2>
      {props.children}
    </div>

  );
}

module.exports = Main;
