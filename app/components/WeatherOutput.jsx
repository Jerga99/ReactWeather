var React = require('react');

var WeatherOutput = ({temp, location}) => { // destructurazing temp.props, location.props

  return (
    <h3>Its {temp} Degresas in {location}!</h3>
  );
}

module.exports = WeatherOutput;
