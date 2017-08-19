var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
      return { //一開始loading時 畫面呈現的location and temp
        isLoading: false
      }
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
      that.setState({isLoading: false});
        alert(errorMessage);
    })
    //alert(location);
    // this.setState({ //做search後 畫面呈現的location是輸入的位置 temp已被設成25
    //   location: location,
    //   temp: 25
    // });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;//初始值

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
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
