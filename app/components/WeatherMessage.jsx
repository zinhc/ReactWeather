var React = require('react');

//version1
// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props; //從weather.jsx收到傳入的值
//     return (
//       <h3> It is {temp} in {location} </h3>
//     );
//   }
// });
//version2
// var WeatherMessage = (props) => {
//   var {temp , location} = props;
//
//   return (
//     <h3>It's it {temp} in {location}.</h3>
//   )
// };
//version3 es6 syntax
var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
