var React = require('react');
var WeatherForm = require("WeatherForm");
var WeatherOutput = require("WeatherOutput");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({

  getInitialState: function (location){
    return {
      isLoading: false
    }
  },

  setWeatherState(isLoading){
    this.setState({
      isLoading: isLoading
    });
  },

  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setWeatherState(false);
      alert(errorMessage);
    });
  },

  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather ...</h3>
      } else if(temp && location) {
        return <WeatherOutput temp = {temp} location = {location}/>
      }
    }

    return (
      <div>
      <h3>Weather Component</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
