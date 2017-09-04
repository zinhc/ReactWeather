var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    titl: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    //宣告使用foundation的revael函式 開啟子視窗
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render : function () {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center data-reveal=''">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }


});

module.exports = ErrorModal;
