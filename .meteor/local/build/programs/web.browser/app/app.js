var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw('<div id="render-target">\n\n  </div>\n\n  '), HTML.SCRIPT({
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
    crossorigin: "anonymous"
  }), "\n  ", HTML.SCRIPT({
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
    crossorigin: "anonymous"
  }), "\n  ", HTML.SCRIPT({
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
    crossorigin: "anonymous"
  }), "\n  ", HTML.SCRIPT({
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.js"
  }) ];
}));
Meteor.startup(Template.body.renderToDocument);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var render;
module.watch(require("react-dom"), {
  render: function (v) {
    render = v;
  }
}, 2);
var renderRoutes;
module.watch(require("../imports/ui/MainManage/Routes.jsx"), {
  renderRoutes: function (v) {
    renderRoutes = v;
  }
}, 3);
Meteor.startup(function () {
  render(renderRoutes(), document.getElementById("render-target"));
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"ui":{"Accounts":{"Login.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/Accounts/Login.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 1);
var createContainer;
module.watch(require("meteor/react-meteor-data"), {
  createContainer: function (v) {
    createContainer = v;
  }
}, 2);

var Login =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Login, _Component);

  function Login(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      error: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Login.prototype;

  _proto.handleSubmit = function () {
    function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var email = document.getElementById('login-email').value;
      var password = document.getElementById('login-password').value;
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          _this2.setState({
            error: err.reason
          });
        } else {
          _this2.props.history.push('/');
        }
      });
    }

    return handleSubmit;
  }();

  _proto.render = function () {
    function render() {
      var error = this.state.error;
      console.log(error);
      return React.createElement("div", {
        className: ""
      }, React.createElement("div", {
        className: "alert alert-primary",
        role: "alert"
      }, "This is a primary alert\u2014check it out!"), React.createElement("div", {
        className: "modal-dialog"
      }, React.createElement("div", {
        className: "modal-content"
      }, React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h1", {
        className: "text-center"
      }, "Login")), React.createElement("div", {
        className: "modal-body"
      }, error.length > 0 ? React.createElement("div", {
        className: "alert alert-danger"
      }, error) : '', React.createElement("form", {
        id: "login-form",
        className: "form col-md-12 center-block",
        onSubmit: this.handleSubmit
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "email",
        id: "login-email",
        className: "form-control input-lg",
        placeholder: "Email"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "password",
        id: "login-password",
        className: "form-control input-lg",
        placeholder: "Password"
      })), React.createElement("div", {
        className: "form-group text-center"
      }, React.createElement("input", {
        type: "submit",
        id: "login-button",
        className: "btn btn-primary btn-lg btn-block",
        value: "Login"
      })), React.createElement("div", {
        className: "form-group text-center"
      }, React.createElement("p", {
        className: "text-center"
      }, "Don't have an account? Register ", React.createElement(Link, {
        to: "/signup"
      }, "here"))))), React.createElement("div", {
        className: "modal-footer",
        style: {
          borderTop: 0
        }
      }))));
    }

    return render;
  }();

  return Login;
}(Component);

module.exportDefault(Login);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/Accounts/Signup.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 1);
var Accounts;
module.watch(require("meteor/accounts-base"), {
  Accounts: function (v) {
    Accounts = v;
  }
}, 2);

var Signup =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Signup, _Component);

  function Signup(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      error: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Signup.prototype;

  _proto.handleSubmit = function () {
    function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var name = document.getElementById("signup-name").value;
      var email = document.getElementById("signup-email").value;
      var password = document.getElementById("signup-password").value;
      this.setState({
        error: "test"
      });
      Accounts.createUser({
        email: email,
        username: name,
        password: password
      }, function (err) {
        if (err) {
          _this2.setState({
            error: err.reason
          });
        } else {
          _this2.props.history.push('/login');
        }
      });
    }

    return handleSubmit;
  }();

  _proto.render = function () {
    function render() {
      var error = this.state.error;
      return React.createElement("div", {
        className: ""
      }, React.createElement("div", {
        className: "modal-dialog"
      }, React.createElement("div", {
        className: "modal-content"
      }, React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h1", {
        className: "text-center"
      }, "Sign up")), React.createElement("div", {
        className: "modal-body"
      }, error.length > 0 ? React.createElement("div", {
        className: "alert alert-danger fade in"
      }, error) : '', React.createElement("form", {
        id: "login-form",
        className: "form col-md-12 center-block",
        onSubmit: this.handleSubmit
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "text",
        id: "signup-name",
        className: "form-control input-lg",
        placeholder: "Name"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "email",
        id: "signup-email",
        className: "form-control input-lg",
        placeholder: "Email"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "password",
        id: "signup-password",
        className: "form-control input-lg",
        placeholder: "Password"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "submit",
        id: "login-button",
        className: "btn btn-lg btn-primary btn-block",
        value: "Sign Up"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("p", {
        className: "text-center"
      }, "Already have an account? Login ", React.createElement(Link, {
        to: "/login"
      }, "here"))))), React.createElement("div", {
        className: "modal-footer",
        style: {
          borderTop: 0
        }
      }))));
    }

    return render;
  }();

  return Signup;
}(Component);

module.exportDefault(Signup);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"MainManage":{"AddBetModal.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/AddBetModal.jsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
module.watch(require("../css/AddEventModal.css"));

var AddBetModal =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(AddBetModal, _Component);

  function AddBetModal(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      bet1: 0,
      bet2: 0,
      betT: 0
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = AddBetModal.prototype;

  _proto.AddBet = function () {
    function AddBet() {
      this.props.AddBet(parseFloat(this.state.bet1), parseFloat(this.state.bet2), parseFloat(this.state.betT), this.getEarnings(1), this.getEarnings(2), this.getEarnings("T"));
    }

    return AddBet;
  }();

  _proto.getFee = function () {
    function getFee(percent) {
      var res = 100 / percent;
      return Math.round(res * 100) / 100;
    }

    return getFee;
  }();

  _proto.getEarnings = function () {
    function getEarnings(v) {
      var lEarnings = 0;
      var eInfo = this.props.eventInfo;

      if (v == 1) {
        lEarnings += this.getFee(eInfo.Prob1) * this.state.bet1;
      } else if (v == 2) {
        lEarnings += this.getFee(eInfo.Prob2) * this.state.bet2;
      } else {
        lEarnings += this.getFee(eInfo.Tie) * this.state.betT;
      }

      return Math.round(lEarnings * 100) / 100;
    }

    return getEarnings;
  }();

  _proto.handleChange = function () {
    function handleChange(event) {
      var _setState;

      this.setState((_setState = {}, _setState[event.target.id] = event.target.value, _setState));
    }

    return handleChange;
  }();

  _proto.render = function () {
    function render() {
      var _this2 = this;

      //console.log(this.props.eventInfo);
      return React.createElement("div", {
        id: "Add" + this.props.eventInfo.Name + this.props.fromW + "BetModal",
        className: "modal fade",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, React.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, React.createElement("div", {
        className: "modal-content"
      }, React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h5", {
        className: "modal-title",
        id: "exampleModalLabel"
      }, "Add bet"), React.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), React.createElement("div", {
        className: "modal-body"
      }, React.createElement("div", {
        className: "form-row bottomPadding"
      }, React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("label", null, this.props.eventInfo.Team1 + " bet"), React.createElement("input", {
        type: "number",
        min: "0",
        step: "0.01",
        className: "form-control",
        id: "bet1",
        placeholder: "",
        value: this.state.bet1,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("label", null, "Tie bet"), React.createElement("input", {
        type: "number",
        min: "0",
        step: "0.01",
        className: "form-control",
        id: "betT",
        placeholder: "",
        value: this.state.betT,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("label", null, this.props.eventInfo.Team2 + " bet"), React.createElement("input", {
        type: "number",
        min: "0",
        step: "0.01",
        className: "form-control",
        id: "bet2",
        placeholder: "",
        value: this.state.bet2,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-group row"
      }, React.createElement("label", {
        htmlFor: "staticEmail",
        className: "col-sm-2 col-form-label"
      }, "Earnings:"), React.createElement("div", {
        className: "form-row col-md-12"
      }, React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: this.getEarnings(1) + "",
        readOnly: true
      })), React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: this.getEarnings("T") + "",
        readOnly: true
      })), React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: this.getEarnings(2) + "",
        readOnly: true
      })))), React.createElement("div", {
        className: "modal-footer"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Cancel"), React.createElement("button", {
        onClick: function () {
          return _this2.AddBet();
        },
        type: "button",
        className: "btn btn-primary"
      }, "Bet!"))))));
    }

    return render;
  }();

  return AddBetModal;
}(Component);

AddBetModal.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  fromW: PropTypes.string.isRequired
};
module.exportDefault(AddBetModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AddEventModal.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/AddEventModal.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var ImageGallery;
module.watch(require("./ImageGallery.jsx"), {
  "default": function (v) {
    ImageGallery = v;
  }
}, 2);

var AddEventModal =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(AddEventModal, _Component);

  function AddEventModal(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      name: '',
      place: "",
      date: "",
      image: "Basketball_1.png",
      team1: "",
      team2: "",
      prob1: 0.0,
      prob2: 0.0,
      tie: 0.0
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.AddEvent = _this.AddEvent.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = AddEventModal.prototype;

  _proto.handleChange = function () {
    function handleChange(event) {
      var _setState;

      this.setState((_setState = {}, _setState[event.target.id] = event.target.value, _setState));
    }

    return handleChange;
  }();

  _proto.AddEvent = function () {
    function AddEvent(e) {
      //alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      var actCarouselImage = "Basic_Event.png";
      var currentIndex = $('div.active').index();
      var indicator = document.getElementById(this.props.categoryInfo.name + "EventImageCarousel").getElementsByClassName("active");
      console.log(indicator[0]);
      console.log(indicator[0].attributes);
      console.log(indicator[0].attributes.name.value);
      actCarouselImage = indicator[0].attributes.name.value;
      /*let txtTest = "";
          txtTest += (this.state.name + "\n");
       txtTest += (this.state.place + "\n");
       txtTest += (this.state.date + "\n");
       txtTest += (actCarouselImage + "\n");
       txtTest += (this.state.team1 + "\n");
       txtTest += (this.state.team2 + "\n");
       txtTest += (this.state.prob1 + "\n");
       txtTest += (this.state.prob2 + "\n");
       txtTest += (this.state.tie + "\n");
          alert("Adding the event on the modal: \n" + txtTest);*/

      if (this.state.name == "" || this.state.place == "" || this.state.date == "" || this.state.team1 == "" || this.state.team2 == "" || this.state.prob1 == "" || this.state.prob2 == "" || this.state.tie == "") {
        $('#emptyField').fadeIn();
      } else if (parseFloat(this.state.prob1) + parseFloat(this.state.prob2) + parseFloat(this.state.tie) > 100) {
        $('#emptyField').fadeOut();
        $('#probabilitiesHigerThan100').fadeIn(); //alert("The sum of all probabilities cannot be greater than 100.");
      } else {
        $('#probabilitiesHigerThan100').fadeOut();
        $('#emptyField').fadeOut();
        this.props.AddCategoryEvent(this.state.name, this.state.place, this.state.date, actCarouselImage, this.state.team1, this.state.team2, this.state.prob1, this.state.prob2, this.state.tie);
        this.clearModal();
      }
    }

    return AddEvent;
  }();

  _proto.clearModal = function () {
    function clearModal() {
      $('#probabilitiesHigerThan100').fadeOut();
      $('#emptyField').fadeOut();
      this.setState({
        name: '',
        place: "",
        date: "",
        image: "Basketball_1.png",
        team1: "",
        team2: "",
        prob1: 0.0,
        prob2: 0.0,
        tie: 0.0
      });
    }

    return clearModal;
  }();

  _proto.render = function () {
    function render() {
      var _this2 = this;

      /*let txtTest = "";
        txtTest += (this.state.name + "\n");
      txtTest += (this.state.place + "\n");
      txtTest += (this.state.date + "\n");
      txtTest += (this.state.team1 + "\n");
      txtTest += (this.state.team2 + "\n");
      txtTest += (this.state.prob1 + "\n");
      txtTest += (this.state.prob2 + "\n");
      txtTest += (this.state.tie + "\n");
        console.log(txtTest);*/
      return React.createElement("div", {
        id: "Add" + this.props.categoryInfo.name + "EventModal",
        className: "modal fade",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, React.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, React.createElement("div", {
        className: "modal-content"
      }, React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h5", {
        className: "modal-title",
        id: "exampleModalLabel"
      }, "Add ", this.props.categoryInfo.name, " Event"), React.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), React.createElement("div", {
        className: "modal-body"
      }, React.createElement("div", {
        id: "probabilitiesHigerThan100",
        className: "alert alert-danger in",
        role: "alert",
        style: {
          display: "none"
        }
      }, "The sum of all probabilities cannot be greater than 100!"), React.createElement("div", {
        id: "emptyField",
        className: "alert alert-warning in",
        role: "alert",
        style: {
          display: "none"
        }
      }, "All fields need to be full!"), React.createElement("div", {
        className: "form-group"
      }, React.createElement("div", {
        className: "input-group mb-2"
      }, React.createElement("div", {
        className: "input-group-prepend"
      }, React.createElement("div", {
        className: "input-group-text"
      }, "Name: ")), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "name",
        placeholder: "Event name...",
        value: this.state.name,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-group"
      }, React.createElement("div", {
        className: "input-group mb-2"
      }, React.createElement("div", {
        className: "input-group-prepend"
      }, React.createElement("div", {
        className: "input-group-text"
      }, "Place: ")), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "place",
        placeholder: "Event place...",
        value: this.state.place,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-group"
      }, React.createElement("div", {
        className: "input-group mb-2"
      }, React.createElement("div", {
        className: "input-group-prepend"
      }, React.createElement("div", {
        className: "input-group-text"
      }, "Date: ")), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "date",
        placeholder: "dd/mm/aaaa",
        value: this.state.date,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-row"
      }, React.createElement("div", {
        className: "form-group col-md-6"
      }, React.createElement("label", {
        htmlFor: "inputEmail4"
      }, "Team 1"), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "team1",
        placeholder: "Team 1 Name...",
        value: this.state.team1,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-6"
      }, React.createElement("label", {
        htmlFor: "inputPassword4"
      }, "Team 2"), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "team2",
        placeholder: "Team 2 Name...",
        value: this.state.team2,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-row"
      }, React.createElement("div", {
        className: "form-group col-md-12"
      }, React.createElement("label", {
        htmlFor: "inputEmail4"
      }, "Probabilities..."), React.createElement("div", {
        className: "form-row"
      }, React.createElement("div", {
        className: "input-group col-md-4"
      }, React.createElement("input", {
        type: "number",
        min: "0",
        step: "0.01",
        className: "form-control",
        id: "prob1",
        placeholder: "Team 1...",
        value: this.state.prob1,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "input-group col-md-4"
      }, React.createElement("input", {
        type: "number",
        min: "0",
        step: "0.01",
        className: "form-control",
        id: "tie",
        placeholder: "Tie...",
        value: this.state.tie,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "input-group col-md-4"
      }, React.createElement("input", {
        type: "number",
        min: "0",
        step: "0.01",
        className: "form-control",
        id: "prob2",
        placeholder: "Team 2...",
        value: this.state.prob2,
        onChange: this.handleChange
      }))))), React.createElement(ImageGallery, {
        categoryInfo: this.props.categoryInfo
      }), React.createElement("div", {
        className: "modal-footer"
      }, React.createElement("button", {
        onClick: function () {
          return _this2.clearModal();
        },
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Cancel"), React.createElement("button", {
        onClick: function () {
          return _this2.AddEvent();
        },
        type: "button",
        className: "btn btn-danger"
      }, "Save event"))))));
    }

    return render;
  }();

  return AddEventModal;
}(Component);

AddEventModal.propTypes = {
  categoryInfo: PropTypes.object.isRequired
};
module.exportDefault(AddEventModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"App.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/App.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withHistory;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  }
}, 1);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 2);
var MainPage;
module.watch(require("./MainPage.jsx"), {
  "default": function (v) {
    MainPage = v;
  }
}, 3);
var UserData;
module.watch(require("../../api/UserData"), {
  UserData: function (v) {
    UserData = v;
  }
}, 4);

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(App, _Component);

  function App(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = _this.getMeteorData();
    _this.logout = _this.logout.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = App.prototype;

  _proto.getMeteorData = function () {
    function getMeteorData() {
      return {
        isAuthenticated: Meteor.userId() !== null
      };
    }

    return getMeteorData;
  }();

  _proto.componentDidMount = function () {
    function componentDidMount() {
      /*console.log("App | UserData: ");
      console.log(this.props.userData);
        if (this.props.userData != null && this.props.userData != undefined) {
          if (this.props.userData.length == 0) {
              console.log("Creando datos de usuario");
                /*
              Meteor.call("UserData.createUserData", (err, res) => {
                  if (err) {
                      alert(err);
                  } else {
                      currentUserData = UserData.find(
                          { userId: currentUser._id }
                      ).fetch();
                  }
              });
          }
      }*/
    }

    return componentDidMount;
  }();

  _proto.componentWillMount = function () {
    function componentWillMount() {
      if (!this.state.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    return componentWillMount;
  }();

  _proto.componentDidUpdate = function () {
    function componentDidUpdate(prevProps, prevState) {
      if (!this.state.isAuthenticated) {
        this.props.history.push('/login');
      }

      console.log("App | DidUpdate | UserData: ");
      console.log(this.props.userData);

      if (this.props.userData != null && this.props.userData != undefined) {
        if (this.props.userData.length == 0) {
          console.log("Creando datos de usuario");
          Meteor.call("UserData.createUserData", function (err, res) {
            if (err) {
              alert(err);
            } else {
              currentUserData = UserData.find({
                userId: currentUser._id
              }).fetch();
            }
          });
        }
      }
    }

    return componentDidUpdate;
  }();

  _proto.logout = function () {
    function logout(e) {
      var _this2 = this;

      e.preventDefault();
      Meteor.logout(function (err) {
        if (err) {
          console.log(err.reason);
        } else {
          _this2.props.history.push('/login');
        }
      });
    }

    return logout;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        id: "App"
      }, this.props.user && this.props.userData ? React.createElement(MainPage, {
        logout: this.logout,
        user: this.props.user,
        userData: this.props.userData[0]
      }) : "Loading user settings...");
    }

    return render;
  }();

  return App;
}(Component);

App.propTypes = {};
module.exportDefault(withTracker(function () {
  Meteor.subscribe('users');
  Meteor.subscribe('UserData');
  var currentUser = Meteor.user();
  var currentUserData = null;

  if (currentUser != null) {
    //console.log("Searching for data of " + currentUser._id);
    currentUserData = UserData.find({
      userId: currentUser._id
    }).fetch();
    console.log("App | WithTracker | currentUserData: ");
    console.log(currentUserData);
  }

  return {
    user: currentUser,
    userData: currentUserData
  };
})(App));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"BasicNav.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/BasicNav.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
module.watch(require("../css/BasicNav.css"));

var BasicNav =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(BasicNav, _Component);

  function BasicNav() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BasicNav.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        id: "BasicNav",
        className: "myNav"
      }, React.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark myNav"
      }, React.createElement("a", {
        className: "navbar-brand col-sm-3 col-md-2 mr-0",
        href: "#"
      }, React.createElement("img", {
        src: "",
        width: "30",
        height: "30",
        className: "d-inline-block align-top",
        alt: ""
      }), "Bet Simulator"), React.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navContent",
        "aria-controls": "navContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, React.createElement("span", {
        className: "navbar-toggler-icon"
      })), React.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navContent"
      }, React.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0"
      }, React.createElement("li", {
        className: "nav-item active"
      }, React.createElement("a", {
        name: "",
        className: "nav-link"
      }, "Welcome ", this.props.userName, "! ", React.createElement("span", {
        className: "sr-only"
      }, "(current)"))), React.createElement("li", {
        className: "nav-item"
      }, React.createElement("a", {
        id: "coins-info",
        className: "nav-link"
      }, "Coins bag: ", this.props.coins)), React.createElement("li", {
        className: "nav-item"
      }, React.createElement("a", {
        id: "coins-info",
        className: "nav-link"
      }, "In bet: 0"))), React.createElement("button", {
        onClick: this.props.logout,
        className: "btn btn-outline-danger my-2 my-sm-0",
        type: "submit"
      }, "Log out"))));
    }

    return render;
  }();

  return BasicNav;
}(Component);

module.exportDefault(BasicNav);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CategoryPage.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/CategoryPage.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var AddEventModal;
module.watch(require("./AddEventModal.jsx"), {
  "default": function (v) {
    AddEventModal = v;
  }
}, 2);
var EventCard;
module.watch(require("./EventCard.jsx"), {
  "default": function (v) {
    EventCard = v;
  }
}, 3);
module.watch(require("../css/CategoryPage.css"));
var ImageGallery;
module.watch(require("./ImageGallery.jsx"), {
  "default": function (v) {
    ImageGallery = v;
  }
}, 4);

var CategoryPage =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(CategoryPage, _Component);

  function CategoryPage(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.AddEvent = _this.AddEvent.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadEventsCards = _this.loadEventsCards.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = CategoryPage.prototype;

  _proto.AddEvent = function () {
    function AddEvent(name, place, date, image, team1, team2, prob1, prob2, tie) {
      if (this.props.userData.type == "ADMIN") {
        /*let txtTest = "";
          txtTest += (name + "\n");
        txtTest += (place + "\n");
        txtTest += (date + "\n");
        txtTest += (image + "\n");
        txtTest += (team1 + "\n");
        txtTest += (team2 + "\n");
        txtTest += (prob1 + "\n");
        txtTest += (prob2 + "\n");
        txtTest += (tie + "\n");
        alert("Adding the event on Category page: \n" + txtTest);*/
        Meteor.call("Events.addEvent", this.props.categoryInfo.name, name, place, date, image, team1, team2, prob1, prob2, tie, function (err, res) {
          if (err) {
            alert(err);
          } else {
            alert("Event created!");
          }
        });
      } else {
        alert("You do not have rights to do that!");
      }
    }

    return AddEvent;
  }();

  _proto.loadEventsCards = function () {
    function loadEventsCards() {
      var _this2 = this;

      var actEvents = this.props.events;
      var res = ""; //console.log(this.props.categoryInfo);

      res = actEvents.map(function (e) {
        return (//console.log("CategoryPage | loadEventsCards | Event: " + e),
          //console.log(e),
          React.createElement(EventCard, {
            key: e.Name + "Card",
            eventInfo: e,
            AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
              return _this2.props.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
            }
          })
        );
      });
      return res;
    }

    return loadEventsCards;
  }();

  _proto.render = function () {
    function render() {
      var _this3 = this;

      return React.createElement("div", {
        id: this.props.categoryInfo.name,
        className: "container category"
      }, this.props.userData.type == "ADMIN" ? React.createElement("div", {
        id: "Admin Bar",
        className: "row verticalCenteredParent"
      }, React.createElement("div", {
        className: "col"
      }, React.createElement("h1", null, this.props.categoryInfo.name)), React.createElement("div", {
        className: "col pullRight"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-danger pull-right",
        "data-toggle": "modal",
        "data-target": "#Add" + this.props.categoryInfo.name + "EventModal"
      }, "Add Event")), React.createElement(AddEventModal, {
        AddCategoryEvent: function (n, p, d, i, t1, t2, p1, p2, t) {
          return _this3.AddEvent(n, p, d, i, t1, t2, p1, p2, t);
        },
        categoryInfo: this.props.categoryInfo
      })) : React.createElement("h1", null, this.props.categoryInfo.name), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("div", {
        className: "row"
      }, this.loadEventsCards()));
    }

    return render;
  }();

  return CategoryPage;
}(Component);

CategoryPage.propTypes = {
  categoryInfo: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired
};
module.exportDefault(CategoryPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EventBetCard.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/EventBetCard.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var AddBetModal;
module.watch(require("./AddBetModal.jsx"), {
  "default": function (v) {
    AddBetModal = v;
  }
}, 2);
module.watch(require("../css/EventBetCard.css"));

var EventBetCard =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(EventBetCard, _Component);

  function EventBetCard(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      colSize: "col-md-4"
    };
    return _this;
  }

  var _proto = EventBetCard.prototype;

  _proto.AddBet = function () {
    function AddBet(b1, b2, bT, eR1, eR2, eRt) {
      var eInfo = this.props.eventInfo[0]; //console.log( "EventBetCard earnings: " + eR1 + "-" + eR2 + "-" + eRt);

      this.props.AddBet(eInfo._id, eInfo.Prob1, eInfo.Prob2, eInfo.Tie, b1, b2, bT, eR1, eR2, eRt);
    }

    return AddBet;
  }();

  _proto.getFee = function () {
    function getFee(percent) {
      var res = 100 / percent;
      return Math.round(res * 100) / 100;
    }

    return getFee;
  }();

  _proto.componentDidMount = function () {
    function componentDidMount() {
      var _this2 = this;

      if (this.state.colSize) {
        window.addEventListener('resize', function () {
          var nColSize = "col";
          var width = window.innerWidth;

          if (width >= 1500) {
            nColSize = "col-md-3";
          } else if (width > 900 && width < 1500) {
            nColSize = "col-md-4";
          } else {
            nColSize = "col-md-6";
          }

          _this2.setState({
            colSize: nColSize
          });
        }, false);
      }
    }

    return componentDidMount;
  }();

  _proto.loadEventBets = function () {
    function loadEventBets() {
      //console.log("EventBetCard | Bets: ");
      //console.log(this.props.eventBetsInfo);
      var res = "Loading...";
      var bInfo = this.props.eventBetsInfo; //console.log("Bets of event: ");
      //console.log(bInfo);

      res = [];

      for (var i = 0; i < bInfo.length; i++) {
        var e = bInfo[i];
        res.push(React.createElement("div", {
          key: "Bet#" + (i + 1) + "Of" + this.props.eventInfo.Name,
          className: "row myBetGroup"
        }, React.createElement("div", {
          className: "btn-group myButtonGroup"
        }, React.createElement("span", {
          className: "badge badge-warning myBetTitle"
        }, this.getFee(e.Prob1)), React.createElement("span", {
          className: "badge badge-warning myBetTitle"
        }, this.getFee(e.ProbT)), React.createElement("span", {
          className: "badge badge-warning myBetTitle"
        }, this.getFee(e.Prob2))), React.createElement("div", {
          className: "btn-group myButtonGroup"
        }, React.createElement("span", {
          className: "badge badge-warning myBetAmount"
        }, e.Team1), React.createElement("span", {
          className: "badge badge-warning myBetAmount"
        }, e.Tie), React.createElement("span", {
          className: "badge badge-warning myBetAmount"
        }, e.Team2))));
      }

      return res;
    }

    return loadEventBets;
  }();

  _proto.render = function () {
    function render() {
      var _this3 = this;

      var txtLoading = "Loading...";
      var Name = txtLoading;
      var Place = txtLoading;
      var Date = txtLoading;
      var Image = "Basic_Event.png";
      var Team1 = txtLoading;
      var Team2 = txtLoading;
      var Prob1 = txtLoading;
      var Tie = txtLoading;
      var Prob2 = txtLoading;
      var eInfo = this.props.eventInfo;
      var bInfo = this.props.eventBetsInfo;
      var actBetsEarnings = 0; //console.log("EventBetCard | Event info: ");
      //console.log(eInfo);

      var modal = "Loading event info...";

      if (eInfo != null && eInfo != undefined && eInfo.length > 0) {
        eInfo = eInfo[0]; //console.log(eInfo);

        Name = eInfo.Name;
        Place = eInfo.Place;
        Date = eInfo.Date;
        Image = eInfo.Image;
        Team1 = eInfo.Team1;
        Team2 = eInfo.Team2;
        Prob1 = eInfo.Prob1;
        Tie = eInfo.Tie;
        Prob2 = eInfo.Prob2;
        modal = React.createElement(AddBetModal, {
          eventInfo: eInfo,
          fromW: "betCard",
          AddBet: function (b1, b2, bT, eR1, eR2, eRt) {
            return _this3.AddBet(b1, b2, bT, eR1, eR2, eRt);
          }
        });
        bInfo.map(function (e) {
          actBetsEarnings += e.Earnings;
        }); //console.log(actBetsEarnings);            
      }

      return React.createElement("div", {
        id: Name,
        className: this.state.colSize + " myBetCard"
      }, React.createElement("div", {
        className: "card myCard"
      }, React.createElement("img", {
        className: "card-img-top",
        src: "img/" + Image,
        alt: "Card image cap"
      }), React.createElement("div", {
        className: "card-body"
      }, React.createElement("h4", {
        className: "card-title"
      }, Name), React.createElement("h5", {
        className: "card-title subTitle"
      }, Place), React.createElement("h5", {
        className: "card-title subTitle"
      }, Date), React.createElement("div", {
        className: "btn-group myButtonGroup"
      }, React.createElement("span", {
        className: "badge badge-primary myButtonGroup"
      }, Team1), React.createElement("span", {
        className: "badge badge-secondary myButtonGroup"
      }, "Tie"), React.createElement("span", {
        className: "badge badge-primary myButtonGroup"
      }, Team2)), React.createElement("div", {
        className: "btn-group myButtonGroup",
        role: "group",
        "aria-label": "Basic example"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-primary myButtonOnGroup",
        "data-toggle": "modal",
        "data-target": "#Add" + Name + "betCardBetModal"
      }, "" + this.getFee(Prob1)), React.createElement("button", {
        type: "button",
        className: "btn btn-secondary myButtonOnGroup",
        "data-toggle": "modal",
        "data-target": "#Add" + Name + "betCardBetModal"
      }, "" + this.getFee(Tie)), React.createElement("button", {
        type: "button",
        className: "btn btn-primary myButtonOnGroup",
        "data-toggle": "modal",
        "data-target": "#Add" + Name + "betCardBetModal"
      }, "" + this.getFee(Prob2))), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("h5", {
        className: "card-title"
      }, "Bets..."), this.loadEventBets(), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("button", {
        className: "btn btn-outline-info myCardButton",
        type: "submit"
      }, "More info"))), modal);
    }

    return render;
  }();

  return EventBetCard;
}(Component);

EventBetCard.propTypes = {
  eventBetsInfo: PropTypes.array.isRequired,
  eventInfo: PropTypes.array.isRequired
};
module.exportDefault(EventBetCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EventCard.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/EventCard.jsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var AddBetModal;
module.watch(require("./AddBetModal.jsx"), {
  "default": function (v) {
    AddBetModal = v;
  }
}, 2);
module.watch(require("../css/EventCard.css"));

var EventCard =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(EventCard, _Component);

  function EventCard(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      colSize: "col-md-4"
    };
    return _this;
  }

  var _proto = EventCard.prototype;

  _proto.AddBet = function () {
    function AddBet(b1, b2, bT, eR1, eR2, eRt) {
      var eInfo = this.props.eventInfo; //console.log("EventCard earnings: " + eR);

      this.props.AddBet(eInfo._id, eInfo.Prob1, eInfo.Prob2, eInfo.Tie, b1, b2, bT, eR1, eR2, eRt);
    }

    return AddBet;
  }();

  _proto.componentDidMount = function () {
    function componentDidMount() {
      var _this2 = this;

      if (this.state.colSize) {
        window.addEventListener('resize', function () {
          var nColSize = "col";
          var width = window.innerWidth;

          if (width >= 1500) {
            nColSize = "col-md-3";
          } else if (width > 900 && width < 1500) {
            nColSize = "col-md-4";
          } else {
            nColSize = "col-md-6";
          }

          _this2.setState({
            colSize: nColSize
          });
        }, false);
      }
    }

    return componentDidMount;
  }();

  _proto.getFee = function () {
    function getFee(percent) {
      var res = 100 / percent;
      return Math.round(res * 100) / 100;
    }

    return getFee;
  }();

  _proto.render = function () {
    function render() {
      var _this3 = this;

      var eInfo = this.props.eventInfo;
      var modal = "";
      modal = React.createElement(AddBetModal, {
        eventInfo: eInfo,
        fromW: "eventCard",
        AddBet: function (b1, b2, bT, eR1, eR2, eRt) {
          return _this3.AddBet(b1, b2, bT, eR1, eR2, eRt);
        }
      });
      return React.createElement("div", {
        id: eInfo.Name,
        className: this.state.colSize
      }, React.createElement("div", {
        className: "card myCard"
      }, React.createElement("img", {
        className: "card-img-top",
        src: "img/" + eInfo.Image,
        alt: "Card image cap"
      }), React.createElement("div", {
        className: "card-body"
      }, React.createElement("h4", {
        className: "card-title"
      }, eInfo.Name), React.createElement("h5", {
        className: "card-title subTitle"
      }, eInfo.Place), React.createElement("h5", {
        className: "card-title subTitle"
      }, eInfo.Date), React.createElement("div", {
        className: "btn-group myButtonGroup"
      }, React.createElement("span", {
        className: "badge badge-primary myButtonGroup"
      }, eInfo.Team1), React.createElement("span", {
        className: "badge badge-secondary myButtonGroup"
      }, "Tie"), React.createElement("span", {
        className: "badge badge-primary myButtonGroup"
      }, eInfo.Team2)), React.createElement("div", {
        className: "btn-group myButtonGroup",
        role: "group",
        "aria-label": "Basic example"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-primary myButtonOnGroup",
        "data-toggle": "modal",
        "data-target": "#Add" + eInfo.Name + "eventCardBetModal"
      }, "" + this.getFee(eInfo.Prob1)), React.createElement("button", {
        type: "button",
        className: "btn btn-secondary myButtonOnGroup",
        "data-toggle": "modal",
        "data-target": "#Add" + eInfo.Name + "eventCardBetModal"
      }, "" + this.getFee(eInfo.Tie)), React.createElement("button", {
        type: "button",
        className: "btn btn-primary myButtonOnGroup",
        "data-toggle": "modal",
        "data-target": "#Add" + eInfo.Name + "eventCardBetModal"
      }, "" + this.getFee(eInfo.Prob2))), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("button", {
        className: "btn btn-outline-info myCardButton",
        type: "submit"
      }, "More info"))), modal);
    }

    return render;
  }();

  return EventCard;
}(Component);

EventCard.propTypes = {
  eventInfo: PropTypes.object.isRequired
};
module.exportDefault(EventCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageGallery.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/ImageGallery.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
module.watch(require("../css/ImageGallery.css"));

var ImageGallery =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(ImageGallery, _Component);

  function ImageGallery() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ImageGallery.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        id: this.props.categoryInfo.name + "EventImageCarousel",
        className: "carousel slide",
        "data-ride": "carousel"
      }, React.createElement("ol", {
        className: "carousel-indicators"
      }, React.createElement("li", {
        name: "Basketball_1.png",
        "data-target": "#" + this.props.categoryInfo.name + "EventImageCarousel",
        "data-slide-to": "0",
        className: "active"
      }), React.createElement("li", {
        name: "Football_1.png",
        "data-target": "#" + this.props.categoryInfo.name + "EventImageCarousel",
        "data-slide-to": "1"
      }), React.createElement("li", {
        name: "Basic_Event.png",
        "data-target": "#" + this.props.categoryInfo.name + "EventImageCarousel",
        "data-slide-to": "2"
      }), React.createElement("li", {
        name: "Basic_Event_FondoNegro.png",
        "data-target": "#" + this.props.categoryInfo.name + "EventImageCarousel",
        "data-slide-to": "3"
      })), React.createElement("div", {
        className: "carousel-inner"
      }, React.createElement("div", {
        className: "carousel-item active"
      }, React.createElement("img", {
        id: "Slide0",
        className: "d-block w-100",
        name: "Basketball_1.png",
        src: "img/Basketball_1.png",
        alt: "Basketball event image"
      })), React.createElement("div", {
        className: "carousel-item"
      }, React.createElement("img", {
        id: "Slide1",
        className: "d-block w-100",
        name: "Football_1.png",
        src: "img/Football_1.png",
        alt: "Football event image"
      })), React.createElement("div", {
        className: "carousel-item"
      }, React.createElement("img", {
        id: "Slide2",
        className: "d-block w-100",
        name: "Basic_Event.png",
        src: "img/Basic_Event.png",
        alt: "Basic event image, white bakground"
      })), React.createElement("div", {
        className: "carousel-item"
      }, React.createElement("img", {
        id: "Slide3",
        className: "d-block w-100",
        name: "Basic_Event_FondoNegro.png",
        src: "img/Basic_Event_FondoNegro.png",
        alt: "Basic event image, black bakground"
      }))), React.createElement("a", {
        className: "carousel-control-prev",
        href: "#" + this.props.categoryInfo.name + "EventImageCarousel",
        role: "button",
        "data-slide": "prev"
      }, React.createElement("span", {
        className: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), React.createElement("span", {
        className: "sr-only"
      }, "Previous")), React.createElement("a", {
        className: "carousel-control-next",
        href: "#" + this.props.categoryInfo.name + "EventImageCarousel",
        role: "button",
        "data-slide": "next"
      }, React.createElement("span", {
        className: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), React.createElement("span", {
        className: "sr-only"
      }, "Next")));
    }

    return render;
  }();

  return ImageGallery;
}(Component);

ImageGallery.propTypes = {
  categoryInfo: PropTypes.object.isRequired
};
module.exportDefault(ImageGallery);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MainPage.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/MainPage.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withHistory, Link;
module.watch(require("react-router-dom"), {
  withHistory: function (v) {
    withHistory = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 1);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 2);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 3);
var BasicNav;
module.watch(require("./BasicNav.jsx"), {
  "default": function (v) {
    BasicNav = v;
  }
}, 4);
var CategoryPage;
module.watch(require("./CategoryPage.jsx"), {
  "default": function (v) {
    CategoryPage = v;
  }
}, 5);
var MyBets;
module.watch(require("./MyBets.jsx"), {
  "default": function (v) {
    MyBets = v;
  }
}, 6);
var Bets;
module.watch(require("../../api/Bets"), {
  Bets: function (v) {
    Bets = v;
  }
}, 7);
var Categories;
module.watch(require("../../api/Categories"), {
  Categories: function (v) {
    Categories = v;
  }
}, 8);
var Events;
module.watch(require("../../api/Events"), {
  Events: function (v) {
    Events = v;
  }
}, 9);
var UserData;
module.watch(require("../../api/UserData"), {
  UserData: function (v) {
    UserData = v;
  }
}, 10);
module.watch(require("../css/MainPage.css"));

var MainPage =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(MainPage, _Component);

  function MainPage(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      username: ''
    };
    _this.AddBet = _this.AddBet.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadCategoryPages = _this.loadCategoryPages.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = MainPage.prototype;

  _proto.AddBet = function () {
    function AddBet(eventId, prob1, prob2, probT, bet1, bet2, betT, eR1, eR2, eRt) {
      console.log("MainPage | AddBet: " + eventId + " - " + prob1 + " - " + prob2 + " - " + probT + " - " + bet1 + " - " + bet2 + " - " + betT + " - " + eR1 + " - " + eR2 + " - " + eRt); //alert("MainPage | Adding bet : " + bet1 + "|" + betT + "|" + bet2 + " | Earnings: " + eR);

      Meteor.call("UserData.addBet", eventId, prob1, prob2, probT, bet1, bet2, betT, eR1, eR2, eRt, function (err, res) {
        if (err) {
          alert(err);
        } else {//alert("Bet created!");
        }
      });
    }

    return AddBet;
  }();

  _proto.componentDidMount = function () {
    function componentDidMount() {}

    return componentDidMount;
  }();

  _proto.loadCategoriesList = function () {
    function loadCategoriesList() {
      var actCategories = this.props.categories;
      var res = [];
      res.push(React.createElement("li", {
        key: "MyBetsOption",
        className: "nav-item"
      }, React.createElement("a", {
        href: "#MyBets",
        className: "nav-link"
      }, "My Bets...")));
      res.push(actCategories.map(function (e) {
        return React.createElement("li", {
          key: e.name,
          className: "nav-item"
        }, React.createElement("a", {
          href: "#" + e.name,
          className: "nav-link"
        }, e.name));
      }));
      return res;
    }

    return loadCategoriesList;
  }();

  _proto.loadCategoryPages = function () {
    function loadCategoryPages() {
      var _this2 = this;

      var actCategories = this.props.categories;
      var res = []; //console.log(this.props.userData);        
      //console.log(this.props.userBets);

      res.push(React.createElement(MyBets, {
        key: "MyBetsPage",
        myBets: this.props.userBets,
        AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
          return _this2.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
        }
      }));
      res.push(actCategories.map(function (e) {
        return React.createElement(CategoryPage, {
          key: e.name + "Page",
          categoryInfo: e,
          events: Events.find({
            Category: e.name
          }).fetch(),
          userData: _this2.props.userData,
          AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
            return _this2.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
          }
        });
      }));
      return res;
    }

    return loadCategoryPages;
  }();

  _proto.render = function () {
    function render() {
      var currentUser = this.props.user;
      var currentUserAvailable = currentUser !== undefined;
      var currentUserData = this.props.userData;
      var userDataAvailable = currentUserData !== undefined;
      var loggedIn = currentUser && currentUserAvailable && currentUserData && userDataAvailable;
      var numCoins = 0;

      if (loggedIn) {
        /*console.log("Render | loggedIn | AllDta: ");
        console.log(currentUser);
        console.log(currentUserData);*/
        numCoins = currentUserData.coins;
        var actCategories = this.props.categories;

        if (actCategories != null && actCategories != undefined && actCategories.length > 0) {//console.log(actCategories);
        }
      }

      return React.createElement("div", {
        id: "MainPage"
      }, loggedIn ? React.createElement(BasicNav, {
        logout: this.props.logout,
        userName: currentUser.username,
        coins: numCoins
      }) : "Error", React.createElement("div", {
        className: "container-fluid"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("nav", {
        className: "col-md-2 bg-light sidebar"
      }, React.createElement("div", {
        className: "sidebar-sticky"
      }, React.createElement("ul", {
        className: "nav flex-column"
      }, this.loadCategoriesList()))), React.createElement("main", {
        role: "main",
        className: "col-md-10 categoryPageContainer"
      }, this.loadCategoryPages()))));
    }

    return render;
  }();

  return MainPage;
}(Component);

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};
module.exportDefault(withTracker(function () {
  Meteor.subscribe("Bets");
  Meteor.subscribe("Categories");
  Meteor.subscribe("Events");
  Meteor.subscribe("UserData");
  return {
    categories: Categories.find({}, {
      sort: {
        name: 1
      }
    }).fetch(),
    events: Events.find({}).fetch(),
    userBets: Bets.find({}).fetch()
  };
})(MainPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MyBets.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/MyBets.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React, Component;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var PropTypes;
module.watch(require("prop-types"), {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var withTracker;
module.watch(require("meteor/react-meteor-data"), {
  withTracker: function (v) {
    withTracker = v;
  }
}, 2);
var EventBetCard;
module.watch(require("./EventBetCard.jsx"), {
  "default": function (v) {
    EventBetCard = v;
  }
}, 3);
var Events;
module.watch(require("../../api/Events"), {
  Events: function (v) {
    Events = v;
  }
}, 4);
module.watch(require("../css/MyBets.css"));

var MyBets =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(MyBets, _Component);

  function MyBets(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.AddBet = _this.AddBet.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadBetsList = _this.loadBetsList.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = MyBets.prototype;

  _proto.AddBet = function () {
    function AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
      console.log(eI + " - " + p1 + " - " + p2 + " - " + pT + " - " + b1 + " - " + b2 + " - " + bT + " - " + eR1 + " - " + eR2 + " - " + eRt);
      this.props.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
    }

    return AddBet;
  }();

  _proto.componentDidMount = function () {
    function componentDidMount() {//console.log(this.props.myBets);
    }

    return componentDidMount;
  }();

  _proto.loadBetsList = function () {
    function loadBetsList() {
      var _this2 = this;

      var actBets = this.props.myBets; //console.log(actBets);

      if (actBets) {
        if (actBets.length > 0) {
          var res = []; //console.log(this.props.categoryInfo);

          /*res = actBets.map(e => (
              //console.log("MyBets | loadBetsList | Bet: " + e),
              //console.log(e),
              <EventBetCard key={e.Name + "BetCard"} eventBetsInfo={e} eventInfo={Events.find({ _id: e.EventId }, { limit: 1 }).fetch()} AddBet={(b1, b2, bT, eR) => this.AddBet(b1, b2, bT, eR)} />
          ));*/

          res = [];
          var sup = [];
          var lastEventId = actBets[0].eventId;
          sup.push(actBets[0]);
          var numEvents = 1;
          var i = 1;

          for (i = 1; i < actBets.length; i++) {
            var e = actBets[i];

            if (e.eventId == lastEventId) {
              sup.push(e);
            } else {
              res.push(React.createElement(EventBetCard, {
                key: "BetCard#" + numEvents,
                eventBetsInfo: sup,
                eventInfo: Events.find({
                  _id: lastEventId
                }, {
                  limit: 1
                }).fetch(),
                AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
                  return _this2.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
                }
              }));
              numEvents++;
              sup = [];
              lastEventId = e.eventId;
            }
          }

          sup.push(actBets[i - 1]);
          res.push(React.createElement(EventBetCard, {
            key: "BetCard#" + numEvents,
            eventBetsInfo: sup,
            eventInfo: Events.find({
              _id: lastEventId
            }, {
              limit: 1
            }).fetch(),
            AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
              return _this2.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
            }
          })); //console.log(res);

          return res;
        } else {
          return React.createElement("h5", null, "You don't have bets");
        }
      } else {
        return "Loading bets..";
      }
    }

    return loadBetsList;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        id: "MyBets",
        className: "container myEvents"
      }, React.createElement("h1", null, "My Bets"), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("div", {
        className: "row"
      }, this.loadBetsList()));
    }

    return render;
  }();

  return MyBets;
}(Component);

MyBets.propTypes = {
  myBets: PropTypes.array.isRequired
};
module.exportDefault(withTracker(function () {
  Meteor.subscribe("Events");
  return {
    events: Events.find({}).fetch()
  };
})(MyBets));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Routes.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/Routes.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  renderRoutes: function () {
    return renderRoutes;
  }
});
var React;
module.watch(require("react"), {
  "default": function (v) {
    React = v;
  }
}, 0);
var Router, Route;
module.watch(require("react-router-dom"), {
  BrowserRouter: function (v) {
    Router = v;
  },
  Route: function (v) {
    Route = v;
  }
}, 1);
var App;
module.watch(require("./App.jsx"), {
  "default": function (v) {
    App = v;
  }
}, 2);
var Login;
module.watch(require("../Accounts/Login.jsx"), {
  "default": function (v) {
    Login = v;
  }
}, 3);
var Signup;
module.watch(require("../Accounts/Signup.jsx"), {
  "default": function (v) {
    Signup = v;
  }
}, 4);

var renderRoutes = function () {
  return React.createElement(Router, null, React.createElement("div", {
    id: "Routes"
  }, React.createElement(Route, {
    exact: true,
    path: "/",
    component: App
  }), React.createElement(Route, {
    path: "/login",
    component: Login
  }), React.createElement(Route, {
    path: "/signup",
    component: Signup
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"css":{"AddEventModal.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/AddEventModal.css                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".bottomPadding{\n    padding-bottom: 10px;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"BasicNav.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/BasicNav.css                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".myNav{\n    color: white;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CategoryPage.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/CategoryPage.css                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".category{\n    display: none;\n    max-width: 95%;\n}\n\n:target{\n    display: block;\n}\n\n.Live{\n    color: springgreen;\n    font-weight: bold;\n}\n\n.verticalCenteredParent{\n    display: table;\n}\n\n.pullRight{\n    display: table-cell;\n    text-align: right;\n    vertical-align: middle;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EventBetCard.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/EventBetCard.css                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".myCard  p, h4{\n    margin-bottom: 0 !important;\n}\n\n.myCardButton{\n    width: 100%;\n}\n\n.myButtonGroup{\n    width: 100%;\n}\n\n.myBetGroup{\n    padding-bottom: 10px;\n}\n\n.subTitle{\n    color: dimgray;\n}\n\n.myBetTitle{    \n    padding-bottom: 0;\n    padding-top: 0;\n    width: 100%;\n}\n\n.myBetAmount{\n    width: 100%;\n}\n\n.noPadding{\n    padding: 0;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EventCard.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/EventCard.css                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".myCard  p, h4{\n    margin-bottom: 0 !important;\n}\n\n.myCardButton{\n    width: 100%;\n}\n\n.myButtonGroup{\n    width: 100%;\n}\n\n.myButtonOnGroup{\n    padding-bottom: 0;\n    padding-top: 0;\n    width: 100%;\n}\n\n.subTitle{\n    color: dimgray;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageGallery.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/ImageGallery.css                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ""
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MainPage.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/MainPage.css                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".categoryPageContainer{\n  \n}\n\n.sidebar-sticky{    \n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px; /* Height of navbar */\n  height: calc(100vh - 48px - 16px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n  \n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n \n.sidebar .nav-link.active {\n  color: #007bff;\n}\n  \n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MyBets.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/MyBets.css                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".myEvents{\n    display: none;\n    max-width: 95%;\n}\n\n:target{\n    display: block;\n}\n\n.Live{\n    color: springgreen;\n    font-weight: bold;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"Bets.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Bets.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Bets: function () {
    return Bets;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var check;
module.watch(require("meteor/check"), {
  check: function (v) {
    check = v;
  }
}, 2);
var Bets = new Mongo.Collection("Bets");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Bets', function () {
    function userDataPublication() {
      //return Bets.find();
      if (!this.userId) {
        return this.ready();
      }

      return Bets.find({
        userId: this.userId
      }, {
        fields: Bets.publicFields,
        sort: {
          eventId: 1
        }
      });
    }

    return userDataPublication;
  }());
}

Meteor.methods({
  "UserData.addBet": function (eI, p1, p2, pT, b1, b2, bT, eR) {
    Bets.insert({
      userId: this.userId,
      eventId: eI,
      Prob1: p1,
      Prob2: p2,
      ProbT: pT,
      Team1: b1,
      Team2: b2,
      Tie: bT,
      Earnings: eR
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Categories.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Categories.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Categories: function () {
    return Categories;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var check;
module.watch(require("meteor/check"), {
  check: function (v) {
    check = v;
  }
}, 2);
var Categories = new Mongo.Collection("Categories");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Categories', function () {
    function CategoriesPublication() {
      return Categories.find();
      /*
              if (!this.userId) {
                  return this.ready();
                }
              
                return UserData.find({
                  userId: this.userId
                }, {
                  fields: UserData.publicFields
                });*/
    }

    return CategoriesPublication;
  }());
}

Meteor.methods({
  "Categories.getAll": function () {
    var res = Categories.find({}).fetch();
    console.log(res);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Events.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Events.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Events: function () {
    return Events;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var check;
module.watch(require("meteor/check"), {
  check: function (v) {
    check = v;
  }
}, 2);
var Events = new Mongo.Collection("Events");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Events', function () {
    function EventsPublication() {
      return Events.find();
      /*
              if (!this.userId) {
                  return this.ready();
                }
              
                return UserData.find({
                  userId: this.userId
                }, {
                  fields: UserData.publicFields
                });*/
    }

    return EventsPublication;
  }());
}

Meteor.methods({
  "Events.getAll": function () {
    var res = Events.find({}).fetch();
    console.log(res);
  },
  "Events.addEvent": function (category, name, place, date, image, team1, team2, prob1, prob2, tie) {
    var txtTest = "";
    txtTest += category + "\n";
    txtTest += name + "\n";
    txtTest += place + "\n";
    txtTest += date + "\n";
    txtTest += image + "\n";
    txtTest += team1 + "\n";
    txtTest += team2 + "\n";
    txtTest += prob1 + "\n";
    txtTest += prob2 + "\n";
    txtTest += tie + "\n";
    console.log(txtTest);
    var nEvent = {
      Category: category,
      Name: name,
      Place: place,
      Image: image,
      Team1: team1,
      Team2: team2,
      Date: date,
      Prob1: prob1,
      Prob2: prob2,
      Tie: tie,
      Bets: []
    };
    Events.insert(nEvent);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/UserData.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  UserData: function () {
    return UserData;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var check;
module.watch(require("meteor/check"), {
  check: function (v) {
    check = v;
  }
}, 2);
var UserData = new Mongo.Collection("UserData");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('UserData', function () {
    function userDataPublication() {
      //return UserData.find();
      if (!this.userId) {
        return this.ready();
      }

      return UserData.find({
        userId: this.userId
      }, {
        fields: UserData.publicFields
      });
    }

    return userDataPublication;
  }());
}

Meteor.methods({
  "UserData.createUserData": function () {
    UserData.insert({
      type: "USER",
      userId: this.userId,
      coins: 1000
    });
  },
  "UserData.getAll": function () {
    var all = UserData.find({}).fetch();
    console.log("All user data: ");
    console.log(all); //Lo Anterior funciona

    return all;
  },
  "UserData.getData": function (userId) {
    check(userId, String);
    var res = UserData.find({
      userId: userId
    }).fetch();
    return res;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});
require("/client/template.main.js");
require("/client/main.js");