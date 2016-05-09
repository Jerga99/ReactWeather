var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navbar = (props) => {
  return (
    <div>
      <h2>Navbar Component</h2>
      <IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Get weather</IndexLink>
      <Link to="/about" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>About</Link>
      <Link to="/example" activeClassName = "active" activeStyle = {{fontWeight: "bold"}}>Examples</Link>
    </div>
  );
}

module.exports = Navbar;
