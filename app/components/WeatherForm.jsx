var React = require("react");

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
      e.preventDefault();

      var location = this.refs.location.value;

      if(location.length > 0) {
          this.refs.location.value = "";
          this.props.onSearch(location);
      }
  },

  render: function(){

    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
            <input ref="location" type = "text" placeholder="Enter a city name" />
            <button> Submit </button>
        </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
