var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });與下面 11~15行 的output 一樣的結果

var About =  (props) =>  {
  return (
    <div>
        <h3>About</h3>
        <p>Welcome to the about page!!</p>
    </div>

  )
};

module.exports = About;
