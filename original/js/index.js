var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function Quote(props) {
  return (
    React.createElement("div", { id: props.id },
      React.createElement("p", { id: "text" }, props.quote),
      React.createElement("p", { id: "author" }, "Quote by: " + props.author),
      React.createElement("div", null,
        React.createElement("button", { id: "new-quote", className: "button", onClick: props.genQuote }, "New Quote"),
        React.createElement("a", { href: "https://twitter.com/intent/tweet?text=" + props.quote + " Quote by: " + props.author, target: "_blank", id: "tweet-quote", className: "button" }, React.createElement("button", { className: "button" }, "Tweet Quote")))));



}var

Box = function (_React$Component) {_inherits(Box, _React$Component);
  function Box(props) {_classCallCheck(this, Box);var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this,
    props));
    _this.state = {
      quote: "",
      author: "" };

    _this.generateQuote = _this.generateQuote.bind(_this);
    _this.shareQuote = _this.shareQuote.bind(_this);return _this;
  }_createClass(Box, [{ key: "componentWillMount", value: function componentWillMount()

    {
      this.generateQuote();
    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      this.generateQuote();
    } }, { key: "generateQuote", value: function generateQuote()

    {var _this2 = this;
      var url = "https://talaikis.com/api/quotes/random/";
      fetch(url).then(function (response) {return response.json();}).
      then(function (quote) {
        _this2.setState({
          quote: quote.quote,
          author: quote.author });

      });
    } }, { key: "shareQuote", value: function shareQuote()

    {
      console.log("clicked");
      window.open("https://twitter.com/intent/tweet?text=" + this.state.quote + " Quote by: " + this.state.author);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("h1", null, "Random Quote Generator"),
          React.createElement(Quote, {
            id: "quote-box",
            quote: this.state.quote,
            author: this.state.author,
            genQuote: this.generateQuote,
            shareQuote: this.shareQuote })));



    } }]);return Box;}(React.Component);


ReactDOM.render(React.createElement(Box, null), document.getElementById("root"));