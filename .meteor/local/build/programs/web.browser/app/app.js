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
module.watch(require("../css/Login.css"));

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
          //console.log(Meteor.userId());
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
        id: "loginDiv",
        className: "loginDiv verticalAlignParent",
        style: {
          backgroundImage: "img/Login.jpg"
        }
      }, React.createElement("div", {
        className: "verticalAlignSon"
      }, React.createElement("div", {
        className: ""
      }, React.createElement("h1", {
        className: "text-center myMainTitle"
      }, "Welcome to BetSimulator!"), React.createElement("h5", {
        className: "text-center mySubTitle"
      }, "The best bet simulator ever!"), React.createElement("div", {
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
      }))))));
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
          Meteor.call("UserData.createUserData", Meteor.userId());

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
        className: "alert alert-danger"
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

},"AddCoinsModal.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/AddCoinsModal.jsx                                                                             //
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
module.watch(require("../css/AddCoinsModal.css"));

var AddCoinsModal =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(AddCoinsModal, _Component);

  function AddCoinsModal(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      txtCardNumber: "",
      txtCode: 0,
      txtMonth: 0,
      txtYear: 0,
      numCoins: 0
    };
    _this.addCoins = _this.addCoins.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = AddCoinsModal.prototype;

  _proto.addCoins = function () {
    function addCoins() {
      var coins = $('#coinsSelector')[0].options.selectedIndex;
      var finalNum = 0;

      if (coins == 0) {
        finalNum = 100;
      } else if (coins == 1) {
        finalNum = 510;
      } else if (coins == 2) {
        finalNum = 1050;
      }

      this.props.addCoins(finalNum);
    }

    return addCoins;
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

      return React.createElement("div", {
        id: "AddCoins",
        className: "modal",
        tabIndex: "-1",
        role: "dialog"
      }, React.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, React.createElement("div", {
        className: "modal-content"
      }, React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h5", {
        className: "modal-title"
      }, "Add more coins!"), React.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), React.createElement("div", {
        className: "modal-body"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("div", {
        className: "input-group mb-2"
      }, React.createElement("div", {
        className: "input-group-prepend"
      }, React.createElement("div", {
        className: "input-group-text"
      }, "Card # : ")), React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "txtCardNumber",
        placeholder: "XXXX-XXXX-XXXX-XXXX",
        value: this.state.txtCardNumber,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-row bottomPadding"
      }, React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("label", null, "Security code: "), React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "txtCode",
        placeholder: "",
        value: this.state.txtCode,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("label", null, "Month"), React.createElement("input", {
        type: "number",
        min: "0",
        max: "12",
        step: "1",
        className: "form-control",
        id: "txtMonth",
        placeholder: "",
        value: this.state.txtMonth,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-4"
      }, React.createElement("label", null, "Year"), React.createElement("input", {
        type: "number",
        min: "2018",
        step: "1",
        className: "form-control",
        id: "txtYear",
        placeholder: "",
        value: this.state.txtYear,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "coinsSelector"
      }, "Select your coins package:"), React.createElement("select", {
        className: "form-control",
        id: "coinsSelector"
      }, React.createElement("option", null, "100 / $10.000"), React.createElement("option", null, "510 / $50.000"), React.createElement("option", null, "1050 / $100.000")))), React.createElement("div", {
        className: "modal-footer"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), React.createElement("button", {
        type: "button",
        className: "btn btn-success",
        "data-dismiss": "modal",
        onClick: function () {
          return _this2.addCoins();
        }
      }, "Add coins!")))));
    }

    return render;
  }();

  return AddCoinsModal;
}(Component);

module.exportDefault(AddCoinsModal);
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
var AddCoinsModal;
module.watch(require("./AddCoinsModal.jsx"), {
  "default": function (v) {
    AddCoinsModal = v;
  }
}, 3);
var MainPage;
module.watch(require("./MainPage.jsx"), {
  "default": function (v) {
    MainPage = v;
  }
}, 4);
var UserData;
module.watch(require("../../api/UserData"), {
  UserData: function (v) {
    UserData = v;
  }
}, 5);
module.watch(require("../css/App.css"));

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(App, _Component);

  function App(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      userData: {}
    };
    _this.state = _this.getMeteorData();
    _this.logout = _this.logout.bind((0, _assertThisInitialized2.default)(_this));
    _this.addCoins = _this.addCoins.bind((0, _assertThisInitialized2.default)(_this));
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

  _proto.addCoins = function () {
    function addCoins(numCoins) {
      console.log("Adding coins from App | # coins: " + numCoins);
      Meteor.call("UserData.addCoins", this.props.user._id, numCoins);
    }

    return addCoins;
  }();

  _proto.render = function () {
    function render() {
      var _this3 = this;

      return React.createElement("div", {
        id: "App"
      }, this.props.user && this.props.userData ? React.createElement(MainPage, {
        logout: this.logout,
        user: this.props.user,
        userData: this.props.userData[0]
      }) : "Loading user settings...", React.createElement(AddCoinsModal, {
        addCoins: function (numC) {
          return _this3.addCoins(numC);
        }
      }));
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
    }).fetch(); //console.log("App | WithTracker | currentUserData: ");
    //console.log(currentUserData);
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
      }, "In bet: ", this.props.InBet)), React.createElement("li", null, React.createElement("button", {
        onClick: this.props.addcoins,
        className: "btn btn-outline-success my-2 my-sm-0",
        type: "button",
        "data-toggle": "modal",
        "data-target": "#AddCoins"
      }, "Add coins"))), React.createElement("button", {
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
            },
            GenerateEventPage: function (eId) {
              return _this2.props.GenerateEventPage(eId);
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
      colSize: "col-md-3"
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
          console.log("EventBetCard | Width: " + width);

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
    function loadEventBets(eInfo) {
      //console.log("EventBetCard | Bets: ");
      //console.log(this.props.eventBetsInfo);
      var res = "Loading...";
      var bInfo = this.props.eventBetsInfo;
      var State = eInfo.State;
      var Team1R = eInfo.Team1R;
      var Team2R = eInfo.Team2R; //console.log("Bets of event: ");
      //console.log(bInfo);
      //console.log(eInfo);
      //console.log("LoadEventBets | Event state: " + State);
      //console.log("LoadEventBets | Event results: " + Team1R + " - " + Team2R);

      res = [];

      for (var i = 0; i < bInfo.length; i++) {
        var e = bInfo[i];
        var T1R = "warning";
        var T2R = "warning";
        var TieR = "warning";

        if (State == "FINISHED") {
          if (Team1R > Team2R) {
            T1R = "success";
            T2R = "danger";
            TieR = "danger";
          } else if (Team1R < Team2R) {
            T1R = "danger";
            T2R = "success";
            TieR = "danger";
          } else {
            T1R = "danger";
            T2R = "danger";
            TieR = "success";
          }
        }

        res.push(React.createElement("div", {
          key: "Bet#" + (i + 1) + "Of" + eInfo.Name,
          className: "row myBetGroup"
        }, React.createElement("div", {
          className: "btn-group myButtonGroup container"
        }, React.createElement("span", {
          className: "badge badge-warning myBetTitle"
        }, this.getFee(e.Prob1)), React.createElement("span", {
          className: "badge badge-warning myBetTitle"
        }, this.getFee(e.ProbT)), React.createElement("span", {
          className: "badge badge-warning myBetTitle"
        }, this.getFee(e.Prob2))), React.createElement("div", {
          className: "btn-group myButtonGroup container"
        }, React.createElement("span", {
          className: "badge myBetAmount badge-" + T1R
        }, e.Team1), React.createElement("span", {
          className: "badge myBetAmount badge-" + TieR
        }, e.Tie), React.createElement("span", {
          className: "badge myBetAmount badge-" + T2R
        }, e.Team2))));
      }

      return res;
    }

    return loadEventBets;
  }();

  _proto.GenerateEventPage = function () {
    function GenerateEventPage(eId) {
      this.props.GenerateEventPage(eId);
    }

    return GenerateEventPage;
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
      var State = null;
      var Team1R = 0;
      var Team2R = 0;
      var eInfo = this.props.eventInfo;
      var bInfo = this.props.eventBetsInfo;
      var actBetsEarnings = 0; //console.log("EventBetCard | Event info: ");
      //console.log(eInfo);

      var modal = "Loading event info...";
      var fDate = React.createElement("h5", {
        className: "card-title subTitle"
      }, eInfo.Date);
      var isOver = "";
      var showResult = "none";
      var team1RI = "danger";
      var team2RI = "danger";

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
        State = eInfo.State;
        Team1R = eInfo.Team1R;
        Team2R = eInfo.Team2R;
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

        if (State == "STARTED") {
          fDate = React.createElement("h5", {
            className: "card-title txtLive"
          }, "Now live!");
        } else if (State == "FINISHED") {
          fDate = React.createElement("h5", {
            className: "card-title txtFinished"
          }, "The event is over!");
          isOver = " none";
          showResult = "";
        }

        if (Team1R > Team2R) {
          team1RI = "success";
        } else if (Team1R < Team2R) {
          team1RI = "success";
        } else {
          team1RI = "warning";
        }
      }

      console.log("Event Bet Card | Event info: ");
      console.log(eInfo);
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
      }, Place), fDate, React.createElement("div", {
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
        "aria-label": "Basic example",
        style: {
          display: isOver
        }
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
      }, "" + this.getFee(Prob2))), React.createElement("div", {
        className: "btn-group myButtonGroup",
        role: "group",
        "aria-label": "Basic example",
        style: {
          display: showResult
        }
      }, React.createElement("span", {
        className: "badge myButtonGroup badge-" + team1RI
      }, eInfo.Team1R), React.createElement("span", {
        className: "badge myButtonGroup badge-" + team2RI
      }, eInfo.Team2R)), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("h5", {
        className: "card-title"
      }, "Bets..."), eInfo && eInfo != undefined ? this.loadEventBets(eInfo) : "", React.createElement("hr", {
        className: "my-4"
      }), React.createElement("button", {
        onClick: function () {
          return _this3.GenerateEventPage(eInfo._id);
        },
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
      colSize: "col-md-3"
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
          console.log("EventCard | Width: " + width);

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

  _proto.GenerateEventPage = function () {
    function GenerateEventPage(eId) {
      this.props.GenerateEventPage(eId);
    }

    return GenerateEventPage;
  }();

  _proto.render = function () {
    function render() {
      var _this3 = this;

      var eInfo = this.props.eventInfo;
      var modal = "";
      var fDate = React.createElement("h5", {
        className: "card-title subTitle"
      }, eInfo.Date);
      var isOver = "";
      var showResult = "none";
      var team1RI = "danger";
      var team2RI = "danger";

      if (eInfo.State == "STARTED") {
        fDate = React.createElement("h5", {
          className: "card-title txtLive"
        }, "Now live!");
      } else if (eInfo.State == "FINISHED") {
        fDate = React.createElement("h5", {
          className: "card-title txtFinished"
        }, "The event is over!");
        isOver = " none";
        showResult = "";
      }

      if (eInfo.Team1R > eInfo.Team2R) {
        team1RI = "success";
      } else if (eInfo.Team1R < eInfo.Team2R) {
        team1RI = "success";
      } else {
        team1RI = "warning";
      }

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
        className: "card-title subTitle noBotMargin"
      }, eInfo.Place), fDate, React.createElement("div", {
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
        "aria-label": "Basic example",
        style: {
          display: isOver
        }
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
      }, "" + this.getFee(eInfo.Prob2))), React.createElement("div", {
        className: "btn-group myButtonGroup",
        role: "group",
        "aria-label": "Basic example",
        style: {
          display: isOver
        }
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-success myLargeButton",
        "data-toggle": "modal",
        "data-target": "#Add" + eInfo.Name + "eventCardBetModal"
      }, "Bet!")), React.createElement("div", {
        className: "btn-group myButtonGroup",
        style: {
          display: showResult
        }
      }, React.createElement("span", {
        className: "badge myButtonGroup badge-" + team1RI
      }, eInfo.Team1R), React.createElement("span", {
        className: "badge myButtonGroup badge-" + team2RI
      }, eInfo.Team2R)), React.createElement("hr", {
        className: "my-4"
      }), React.createElement("button", {
        onClick: function () {
          return _this3.GenerateEventPage(eInfo._id);
        },
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

},"EventPage.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MainManage/EventPage.jsx                                                                                 //
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
var Chart;
module.watch(require("chart.js"), {
  "default": function (v) {
    Chart = v;
  }
}, 3);
module.watch(require("../css/EventPage.css"));

var EventPage =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(EventPage, _Component);

  function EventPage(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      addingEvents: "none",
      updatingScores: "none",
      score1: 0,
      score2: 0,
      eventText: "",
      minute: 0,
      time: 0
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = EventPage.prototype;

  _proto.componentDidMount = function () {
    function componentDidMount() {//this.generateChart();        
    }

    return componentDidMount;
  }();

  _proto.componentDidUpdate = function () {
    function componentDidUpdate() {//this.generateChart();
    }

    return componentDidUpdate;
  }();

  _proto.transparentize = function () {
    function transparentize(color, opacity) {
      var alpha = opacity === undefined ? 0.5 : 1 - opacity;
      return Color(color).alpha(alpha).rgbString();
    }

    return transparentize;
  }();

  _proto.generateChart = function () {
    function generateChart() {
      var bInfo = this.props.betsInfo;
      var eInfo = this.props.eventInfo;
      var ctx = document.getElementById('myChart').getContext('2d');
      eInfo = eInfo[0]; //console.log("Event bets data");
      //console.log(bInfo);

      /* Example
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
            // The data for our dataset
          data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                  label: "My First dataset",
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [0, 10, 5, 2, 20, 30, 45],
              }]
          },
            // Configuration options go here
          options: {}
      });*/

      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7"],
          datasets: [{
            backgroundColor: this.transparentize("rgb(255, 0, 0)", 0.5),
            borderColor: "rgba(255, 0, 0, 255)",
            data: [0, 10, 20, 30, -5, 0, 10],
            label: 'Dataset',
            fill: "origin"
          }]
        },
        options: Chart.helpers.merge({
          elements: {
            line: {
              tension: 0.000001
            }
          },
          plugins: {
            filler: {
              propagate: false
            }
          },
          title: {
            text: eInfo.Name + " bets",
            display: true
          }
        })
      });
      /*var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
            // The data for our dataset
          data: {
              labels: ["Team 1", "Team 2"],
              datasets: [{
                  label: "Bets",
                  backgroundColor: "rgb(255,0,0)",
                  borderColor: "rgb(0, 255, 0)",
                  data: [0, 10, 20, -5, -10],
                  fill: 'origin',
              }]
          },
            // Configuration options go here
          options: {}
      });*/

      return chart;
    }

    return generateChart;
  }();

  _proto.getWinner = function () {
    function getWinner() {
      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0]; //console.log(eInfo);
      //console.log("Event result: " + eInfo.Team1R + " - " + eInfo.Team2R);

      if (eInfo.Team1R > eInfo.Team2R) {
        return eInfo.Team1;
      } else if (eInfo.Team1R < eInfo.Team2R) {
        return eInfo.Team2;
      } else {
        return "It's a Tie!";
      }
    }

    return getWinner;
  }();

  _proto.startEvent = function () {
    function startEvent() {
      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0];
      this.props.startEvent(eInfo._id);
    }

    return startEvent;
  }();

  _proto.endEvent = function () {
    function endEvent(eID) {
      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0];
      this.props.endEvent(eInfo._id);
    }

    return endEvent;
  }();

  _proto.loadBetsBar = function () {
    function loadBetsBar() {
      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0];
      var bInfo = this.props.betsInfo;
      var res = "Loading bar...";
      var numBets1 = 0;
      var numBets2 = 0;
      var numBetsT = 0;
      bInfo.map(function (b) {
        if (b.Team1 > 0) {
          numBets1++;
        }

        if (b.Team2 > 0) {
          numBets2++;
        }

        if (b.Tie > 0) {
          numBetsT++;
        }
      });
      var total = numBets1 + numBets2 + numBetsT;
      var per1 = numBets1 * 100 / total;
      var per2 = numBets2 * 100 / total;
      var perT = numBetsT * 100 / total;
      per1 = Math.round(per1 * 100) / 100;
      per2 = Math.round(per2 * 100) / 100;
      perT = Math.round(perT * 100) / 100; //console.log("Bets bar: " + per1 + "|" + perT + "|" + per2 + ":>" + total);

      if (total == 0) {
        return React.createElement("h5", null, "There are no bets yet!");
      } else {
        //console.log("Printing bets bar");
        return React.createElement("div", {
          id: "BetsBar"
        }, React.createElement("h5", null, "There are no bets yet!"), React.createElement("div", {
          className: "btn-group myButtonGroup"
        }, React.createElement("span", {
          className: "badge badge-info myButtonGroup"
        }, eInfo.Team1), React.createElement("span", {
          className: "badge badge-warning myButtonGroup"
        }, "Tie"), React.createElement("span", {
          className: "badge badge-primary myButtonGroup"
        }, eInfo.Team2)), React.createElement("div", {
          className: "progress"
        }, React.createElement("div", {
          className: "progress-bar progress-bar-striped progress-bar-animated bg-info",
          role: "progressbar",
          "aria-valuenow": per1,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          style: {
            width: per1 + "%"
          }
        }, per1 + "%"), React.createElement("div", {
          className: "progress-bar progress-bar-striped progress-bar-animated bg-warning",
          role: "progressbar",
          "aria-valuenow": perT,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          style: {
            width: perT + "%"
          }
        }, perT + "%"), React.createElement("div", {
          className: "progress-bar progress-bar-striped progress-bar-animated",
          role: "progressbar",
          "aria-valuenow": per2,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          style: {
            width: per2 + "%"
          }
        }, per2 + "%")));
      }
    }

    return loadBetsBar;
  }();

  _proto.startUpdatingScore = function () {
    function startUpdatingScore() {
      this.setState({
        updatingScores: " "
      });
    }

    return startUpdatingScore;
  }();

  _proto.endUpdatingScores = function () {
    function endUpdatingScores() {
      var _this2 = this;

      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0];
      var sc1 = parseInt(this.state.score1);
      var sc2 = parseInt(this.state.score2);
      Meteor.call("Events.updateScore", eInfo._id, sc1, sc2, function (err, res) {
        _this2.setState({
          updatingScores: "none"
        }); //this.props.reRender(eInfo._id);

      });
    }

    return endUpdatingScores;
  }();

  _proto.startMatchEvent = function () {
    function startMatchEvent() {
      this.setState({
        addingEvents: " "
      });
    }

    return startMatchEvent;
  }();

  _proto.endMatchEvent = function () {
    function endMatchEvent() {
      var _this3 = this;

      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0];
      var fText = this.state.eventText;
      var fMin = parseInt(this.state.minute);
      var fTime = parseInt(this.state.time);
      Meteor.call("Events.addMatchEvent", eInfo._id, fText, fMin, fTime, function (err, res) {
        _this3.setState({
          addingEvents: "none"
        });
      });
    }

    return endMatchEvent;
  }();

  _proto.handleChange = function () {
    function handleChange(event) {
      var _setState;

      this.setState((_setState = {}, _setState[event.target.id] = event.target.value, _setState));
    }

    return handleChange;
  }();

  _proto.generateListOfEvents = function () {
    function generateListOfEvents() {
      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0]; //console.log("Generate list of evenst: ");
      //console.log(eInfo);

      var res = React.createElement("li", {
        className: "list-group-item"
      }, "Loading Events...");
      var count = 0;
      res = eInfo.Events.map(function (e) {
        return count++, React.createElement("li", {
          key: "Event#" + count,
          className: "list-group-item d-flex justify-content-between align-items-center"
        }, e.text, React.createElement("span", {
          className: "badge badge-primary badge-pill"
        }, "At " + e.minute + " minutes of the " + e.time + " set"));
      }); //console.log(res);

      return res;
    }

    return generateListOfEvents;
  }();

  _proto.render = function () {
    function render() {
      var _this4 = this;

      //console.log("Render");
      var bInfo = this.props.betsInfo;
      var eInfo = this.props.eventInfo;
      eInfo = eInfo[0];
      var state = "";
      var score = "";
      var winnerInfo = "";
      var eventState = "NOT_STARTED";

      if (eInfo) {
        eventState = eInfo.State;

        if (eInfo.State == "STARTED") {
          state = React.createElement("h5", {
            className: "txtLive"
          }, "Now Live!");
          score = React.createElement("h5", {
            className: "txtScore"
          }, eInfo.Team1R + " - " + eInfo.Team2R);
        } else if (eInfo.State == "FINISHED") {
          state = React.createElement("h5", {
            className: "txtLive"
          }, "Event finished!");
          score = React.createElement("h5", {
            className: "txtScore"
          }, eInfo.Team1R + " - " + eInfo.Team2R);
          winnerInfo = React.createElement("h5", {
            className: "txtWinner"
          }, this.getWinner() + " win!");
        } else {
          state = React.createElement("h5", null, "Waiting for the event to start!");
        }
      }

      var updatingScores = this.state.updatingScores;
      var addingEvents = this.state.addingEvents;
      return React.createElement("div", {
        id: "EventModal",
        className: "modal",
        tabIndex: "-1",
        role: "dialog"
      }, React.createElement("div", {
        className: "modal-dialog modal-lg myEventModal",
        role: "document"
      }, React.createElement("div", {
        className: "modal-content"
      }, React.createElement("div", {
        className: "modal-header"
      }, React.createElement("h5", {
        className: "modal-title"
      }, eInfo.Name + " info..."), React.createElement("div", {
        className: "rightButtons"
      }, this.props.userType == "ADMIN" && eventState == "NOT_STARTED" ? React.createElement("button", {
        onClick: function () {
          return _this4.startEvent();
        },
        type: "button",
        className: "btn btn-success myAdminButton"
      }, "Start event") : "", this.props.userType == "ADMIN" && eventState == "STARTED" ? React.createElement("button", {
        onClick: function () {
          return _this4.endEvent();
        },
        type: "button",
        className: "btn btn-danger myAdminButton"
      }, "End event") : "", this.props.userType == "ADMIN" && eventState == "STARTED" ? React.createElement("button", {
        onClick: function () {
          return _this4.startUpdatingScore();
        },
        type: "button",
        className: "btn btn-info"
      }, "Update score") : "", React.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")))), React.createElement("div", {
        className: "modal-body"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        id: "UpdateInputs",
        className: "container",
        style: {
          display: updatingScores
        }
      }, React.createElement("div", {
        className: "form-row bottomPadding"
      }, React.createElement("div", {
        className: "form-group col-md-6"
      }, React.createElement("label", null, eInfo.Team1 + " score:"), React.createElement("input", {
        type: "number",
        min: "0",
        step: "1",
        className: "form-control",
        id: "score1",
        placeholder: "",
        value: this.state.score1,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-6"
      }, React.createElement("label", null, eInfo.Team2 + " score:"), React.createElement("input", {
        type: "number",
        min: "0",
        step: "1",
        className: "form-control",
        id: "score2",
        placeholder: "",
        value: this.state.score2,
        onChange: this.handleChange
      }))), React.createElement("button", {
        onClick: function () {
          return _this4.endUpdatingScores();
        },
        type: "button",
        className: "btn btn-success"
      }, "Update score!"), React.createElement("hr", {
        className: "my-4"
      })), React.createElement("div", {
        id: "AddEventInputs",
        className: "container",
        style: {
          display: addingEvents
        }
      }, React.createElement("div", {
        className: "form-row bottomPadding"
      }, React.createElement("div", {
        className: "form-group col-md-6"
      }, React.createElement("label", null, "Minute of the event: "), React.createElement("input", {
        type: "number",
        min: "0",
        step: "1",
        className: "form-control",
        id: "minute",
        placeholder: "",
        value: this.state.minute,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group col-md-6"
      }, React.createElement("label", null, "Set/Quarter of the event:"), React.createElement("input", {
        type: "number",
        min: "0",
        step: "1",
        className: "form-control",
        id: "time",
        placeholder: "",
        value: this.state.time,
        onChange: this.handleChange
      }))), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "eventText"
      }, "Event: "), React.createElement("textarea", {
        className: "form-control",
        id: "eventText",
        rows: "3",
        value: this.state.eventText,
        onChange: this.handleChange
      })), React.createElement("button", {
        onClick: function () {
          return _this4.endMatchEvent();
        },
        type: "button",
        className: "btn btn-success"
      }, "Add match event"), React.createElement("hr", {
        className: "my-4"
      })), React.createElement("h5", null, "Date: ", eInfo.Date), React.createElement("div", {
        className: "centeredDiv"
      }, state, score, winnerInfo, this.loadBetsBar(), React.createElement("h5", null, "Match events: "), React.createElement("ul", {
        className: "list-group"
      }, this.generateListOfEvents()), React.createElement("hr", {
        className: "my-4"
      }), this.props.userType == "ADMIN" && eventState == "STARTED" ? React.createElement("button", {
        onClick: function () {
          return _this4.startMatchEvent();
        },
        type: "button",
        className: "btn btn-warning myAdminButton"
      }, "Add match event") : ""))), React.createElement("div", {
        className: "modal-footer"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close")))));
    }

    return render;
  }();

  return EventPage;
}(Component);

EventPage.propTypes = {
  userType: PropTypes.string.isRequired,
  eventInfo: PropTypes.array.isRequired,
  betsInfo: PropTypes.array.isRequired
};
module.exportDefault(withTracker(function () {
  Meteor.subscribe("Events");
  return {};
})(EventPage));
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
var EventPage;
module.watch(require("./EventPage.jsx"), {
  "default": function (v) {
    EventPage = v;
  }
}, 6);
var MyBets;
module.watch(require("./MyBets.jsx"), {
  "default": function (v) {
    MyBets = v;
  }
}, 7);
var Bets;
module.watch(require("../../api/Bets"), {
  Bets: function (v) {
    Bets = v;
  }
}, 8);
var Categories;
module.watch(require("../../api/Categories"), {
  Categories: function (v) {
    Categories = v;
  }
}, 9);
var Events;
module.watch(require("../../api/Events"), {
  Events: function (v) {
    Events = v;
  }
}, 10);
var UserData;
module.watch(require("../../api/UserData"), {
  UserData: function (v) {
    UserData = v;
  }
}, 11);
module.watch(require("../css/MainPage.css"));

var MainPage =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(MainPage, _Component);

  function MainPage(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      state: "",
      username: '',
      actEventPage: "",
      betsToPay: [],
      lastEndedEvent: {},
      lastEventInfo: {},
      lasEventInfoId: null
    };
    _this.AddBet = _this.AddBet.bind((0, _assertThisInitialized2.default)(_this));
    _this.startEvent = _this.startEvent.bind((0, _assertThisInitialized2.default)(_this));
    _this.endEvent = _this.endEvent.bind((0, _assertThisInitialized2.default)(_this));
    _this.generateEventPage = _this.generateEventPage.bind((0, _assertThisInitialized2.default)(_this));
    _this.loadCategoryPages = _this.loadCategoryPages.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = MainPage.prototype;

  _proto.startEvent = function () {
    function startEvent(eId) {
      var _this2 = this;

      //console.log("Starting event | id: " + eId)
      var mUserType = this.props.userData.type;
      Meteor.call("Events.startEvent", eId, function () {
        _this2.setState({
          actEventPage: React.createElement(EventPage, {
            betsInfo: Bets.find({
              eventId: eId
            }).fetch(),
            eventInfo: Events.find({
              _id: eId
            }).fetch(),
            userType: mUserType,
            startEvent: function (eID) {
              return _this2.startEvent(eId);
            },
            endEvent: function (eId) {
              return _this2.endEvent(eId);
            }
          })
        });
      });
    }

    return startEvent;
  }();

  _proto.endEvent = function () {
    function endEvent(eId) {
      var _this3 = this;

      //console.log("Ending event | id: " + eId);
      var mUserType = this.props.userData.type;
      Meteor.call("Events.endEvent", eId, Bets.find({
        eventId: eId
      }).fetch(), function () {
        _this3.setState({
          actEventPage: React.createElement(EventPage, {
            betsInfo: Bets.find({
              eventId: eId
            }).fetch(),
            eventInfo: Events.find({
              _id: eId
            }).fetch(),
            userType: mUserType,
            startEvent: function (eID) {
              return _this3.startEvent(eId);
            },
            endEvent: function (eId) {
              return _this3.endEvent(eId);
            }
          }),
          betsToPay: Bets.find({
            eventId: eId
          }).fetch(),
          lastEndedEvent: Events.find({
            _id: eId
          }).fetch()
        });

        _this3.payWinners(eId);
      });
    }

    return endEvent;
  }();

  _proto.payWinners = function () {
    function payWinners(eId) {
      //console.log("PayWinners");
      //console.log(this.state.betsToPay);
      var eInfo = this.state.lastEndedEvent;
      var winner = "NA";

      if (eInfo.Team1R > eInfo.Team2R) {
        winner = 1;
      } else if (eInfo.Team1R < eInfo.Team2R) {
        winner = 2;
      } else {
        winner = 0;
      }

      var bets = this.state.betsToPay;
      bets.forEach(function (e) {
        var e1 = e.E1;
        var e2 = e.E2;
        var eT = e.ET; //let currentUserData = UserData.find({ userId: e.userId }).fetch();
        //console.log(currentUserData);
        //console.log("Earnings: " + e1 + "|" + eT + "|" + e2);
        //console.log("Winner: " + winner);

        Meteor.call("Bets.closeBet", e._id, e1, e2, eT, winner);
        Meteor.call("UserData.removeBetCoins", e.userId); //let total = parseFloat(currentUserData.coins);

        var earning = 0;

        if (e1 > 0 && winner == 1) {
          earning = e1;
        } else if (e2 > 0 && winner == 2) {
          earning = e2;
        } else if (eT > 0 && winner == 0) {
          earning = eT;
        }

        var newCoins = earning;
        console.log("New coins: " + newCoins);
        Meteor.call("UserData.updateCoins", e.userId, earning);
      });
    }

    return payWinners;
  }();

  _proto.generateEventPage = function () {
    function generateEventPage(eId) {
      //console.log("Main page | GenerateEventPage | EventId: " + eId);
      var mUserType = this.props.userData.type;
      /*this.setState({
          actEventPage: <EventPage betsInfo={Bets.find({ eventId: eId }).fetch()} eventInfo={Events.find({ _id: eId }).fetch()} userType={mUserType} startEvent={(eID) => this.startEvent(eId)} endEvent={(eId) => this.endEvent(eId)} />
      },
          () => {
              $('#EventModal').modal('show')
          }
      );*/

      this.setState({
        lasEventInfoId: eId
      }, function () {
        $('#EventModal').modal('show');
      });
    }

    return generateEventPage;
  }();

  _proto.AddBet = function () {
    function AddBet(eventId, prob1, prob2, probT, bet1, bet2, betT, eR1, eR2, eRt) {
      console.log("MainPage | AddBet: " + eventId + " - " + prob1 + " - " + prob2 + " - " + probT + " - " + bet1 + " - " + bet2 + " - " + betT + " - " + eR1 + " - " + eR2 + " - " + eRt); //alert("MainPage | Adding bet : " + bet1 + "|" + betT + "|" + bet2 + " | Earnings: " + eR);

      var totalCoins = parseFloat(bet1 + bet2 + betT);
      Meteor.call("Bets.addBet", eventId, prob1, prob2, probT, bet1, bet2, betT, eR1, eR2, eRt, function (err, res) {
        if (err) {
          alert(err);
        } else {
          alert("Bet created!");
          Meteor.call("UserData.removeNewBetCoins", totalCoins);
        }
      });
    }

    return AddBet;
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
      var _this4 = this;

      var actCategories = this.props.categories;
      var res = []; //console.log(this.props.userData);        
      //console.log(this.props.userBets);

      res.push(React.createElement(MyBets, {
        key: "MyBetsPage",
        myBets: this.props.userBets,
        AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
          return _this4.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
        },
        GenerateEventPage: function (eId) {
          return _this4.generateEventPage(eId);
        }
      }));
      res.push(actCategories.map(function (e) {
        return React.createElement(CategoryPage, {
          key: e.name + "Page",
          categoryInfo: e,
          events: Events.find({
            Category: e.name
          }).fetch(),
          userData: _this4.props.userData,
          AddBet: function (eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt) {
            return _this4.AddBet(eI, p1, p2, pT, b1, b2, bT, eR1, eR2, eRt);
          },
          GenerateEventPage: function (eId) {
            return _this4.generateEventPage(eId);
          }
        });
      }));
      return res;
    }

    return loadCategoryPages;
  }();

  _proto.render = function () {
    function render() {
      var _this5 = this;

      var currentUser = this.props.user;
      var currentUserAvailable = currentUser !== undefined;
      var currentUserData = this.props.userData;
      var userDataAvailable = currentUserData !== undefined;
      var loggedIn = currentUser && currentUserAvailable && currentUserData && userDataAvailable;
      var numCoins = 0;
      var inBetCoins = 0;

      if (loggedIn) {
        /*console.log("Render | loggedIn | AllDta: ");
        console.log(currentUser);
        console.log(currentUserData);*/
        numCoins = currentUserData.coins;
        inBetCoins = currentUserData.InBet;
        var actCategories = this.props.categories;

        if (actCategories != null && actCategories != undefined && actCategories.length > 0) {//console.log(actCategories);
        }
      }

      var uData = this.props.userData;
      var mUserType = uData ? uData.type : "USER";
      console.log(uData);
      var eId = this.state.lasEventInfoId;
      var actEventElement = eId ? React.createElement(EventPage, {
        betsInfo: Bets.find({
          eventId: eId
        }).fetch(),
        eventInfo: Events.find({
          _id: eId
        }).fetch(),
        userType: mUserType,
        startEvent: function (eID) {
          return _this5.startEvent(eId);
        },
        endEvent: function (eId) {
          return _this5.endEvent(eId);
        }
      }) : "";
      return React.createElement("div", {
        id: "MainPage"
      }, loggedIn ? React.createElement(BasicNav, {
        logout: this.props.logout,
        userName: currentUser.username,
        coins: numCoins,
        InBet: inBetCoins
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
      }, this.loadCategoryPages(), actEventElement))));
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
    userBets: Bets.find({
      userId: Meteor.userId()
    }, {
      fields: Bets.publicFields,
      sort: {
        eventId: 1
      }
    }).fetch()
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
          //console.log("Load bets list | Bets: ");
          //console.log(actBets);

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
                },
                GenerateEventPage: function (eId) {
                  return _this2.props.GenerateEventPage(eId);
                }
              }));
              numEvents++;
              sup = [];
              sup.push(e);
              lastEventId = e.eventId;
            }
          }

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
            },
            GenerateEventPage: function (eId) {
              return _this2.props.GenerateEventPage(eId);
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
        className: "container myBets"
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

}},"css":{"AddCoinsModal.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/AddCoinsModal.css                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".bottomPadding{\n    padding-bottom: 10px;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AddEventModal.css":function(require,exports,module){

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

},"App.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/App.css                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  "body {\n    font-family: 'Montserrat', sans-serif;\n}"
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
  ".category{\n    display: none;\n    background-color: white;\n    max-width: 95%;\n    height: 100%;\n}\n\n:target{\n    display: block;\n}\n\n.Live{\n    color: springgreen;\n    font-weight: bold;\n}\n\n.verticalCenteredParent{\n    display: table;\n}\n\n.pullRight{\n    display: table-cell;\n    text-align: right;\n    vertical-align: middle;\n}"
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
  ".myCard  p, h4{\n    margin-bottom: 0 !important;\n}\n\n.myCardButton{\n    width: 100%;\n}\n\n.myButtonGroup{\n    width: 100%;\n}\n\n.myButtonOnGroup{\n    padding-bottom: 0;\n    padding-top: 0;\n    width: 100%;\n}\n\n.txtLive{\n  color: greenyellow;\n  font-weight: bold;\n}\n\n.txtFinished{\n  color: red;\n  font-weight: bold;\n}\n\n.noBotMargin{\n    margin-bottom: 0;\n}\n\n.myLargeButton{\n    padding-top: 0;\n    padding-bottom: 0;\n    width: 100%;\n}"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EventPage.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/EventPage.css                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  "\n.myAdminButton{\n  margin-right: 10px;\n}\n\n.myEventModal {\n  margin: auto;\n  max-width: 100%;\n  width: 80%;\n}\n\n.rightButtons{\n  float: right;\n}\n\n\n/* Text */\n.txtLive{\n  color: #28a745;\n  font-weight: bold;\n  text-align: center;\n}\n\n.txtScore{\n  color: dodgerblue;\n  font-weight: bold;\n  text-align: center;\n}\n\n.txtWinner{\n  color: #28a745;\n  font-weight: bold;\n  text-align: center;\n}"
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

},"Login.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/css/Login.css                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  "body{\n    background-image: url(\"img/Login.jpg\");\n    background-repeat: no-repeat;\n    background-size: 100% auto;\n}\n\np{\n    font-size: 20   px;\n}\n\n.myContent{\n    background-color: white;    \n}\n\n.myMainTitle{\n    color: white;\n    font-size: 300%;\n}\n\n.mySubTitle{\n    color: white;\n    font-size: 150%;\n}\n\n.loginDiv{\n    width: 100vw;\n    height: 100vh;\n}\n\n.verticalAlignParent{\n    display: table;\n    text-align: center;\n}\n\n.verticalAlignSon{\n    display: table-cell;\n    vertical-align: middle;\n}"
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
  ".myBets{\n    display: none;\n    background-color: white;\n    max-width: 95%;\n    height: 100%;\n}\n\n:target{\n    display: block;\n}\n\n.Live{\n    color: springgreen;\n    font-weight: bold;\n}"
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
      return Bets.find();

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
  "Bets.addBet": function (eI, p1, p2, pT, b1, b2, bT, e1, e2, eT) {
    Bets.insert({
      userId: this.userId,
      eventId: eI,
      Prob1: p1,
      Prob2: p2,
      ProbT: pT,
      Team1: b1,
      Team2: b2,
      Tie: bT,
      E1: e1,
      E2: e2,
      ET: eT,
      State: "OPEN"
    });
  },
  "Bets.closeBet": function (betId) {
    Bets.update({
      _id: betId
    }, {
      $set: {
        State: "CLOSED"
      }
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
      State: "NOT_STARTED",
      Team1R: 0,
      Team2R: 0,
      Events: []
    };
    Events.insert(nEvent);
  },
  "Events.startEvent": function (eId) {
    console.log("Starting event");
    Events.update({
      _id: eId
    }, {
      $set: {
        State: "STARTED"
      }
    });
  },
  "Events.endEvent": function (eId) {
    console.log("Ending event");
    Events.update({
      _id: eId
    }, {
      $set: {
        State: "FINISHED"
      }
    });
  },
  "Events.updateScore": function (eId, sc1, sc2) {
    Events.update({
      _id: eId
    }, {
      $set: {
        Team1R: sc1,
        Team2R: sc2
      }
    });
  },
  "Events.addMatchEvent": function (eId, fT, fM, fTi) {
    Events.update({
      _id: eId
    }, {
      $push: {
        Events: {
          text: fT,
          minute: fM,
          time: fTi
        }
      }
    });
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
      coins: 1000,
      InBet: 0
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
  },
  "UserData.updateCoins": function (aUserId, e1) {
    UserData.update({
      userId: aUserId
    }, {
      $inc: {
        coins: e1
      }
    });
  },
  "UserData.removeBetCoins": function (aUserId) {
    UserData.update({
      userId: aUserId
    }, {
      $set: {
        InBet: 0
      }
    });
  },
  "UserData.addCoins": function (aUserId, numCoins) {
    UserData.update({
      userId: aUserId
    }, {
      $inc: {
        coins: numCoins
      }
    });
  },
  "UserData.removeNewBetCoins": function (numCoins) {
    UserData.update({
      userId: this.userId
    }, {
      $inc: {
        coins: -numCoins,
        InBet: numCoins
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".jsx"
  ]
});
require("/client/template.main.js");
require("/client/main.js");