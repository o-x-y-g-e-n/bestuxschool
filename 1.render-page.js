exports.ids = [1];
exports.modules = {

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _InfoBox = __webpack_require__(446);
	
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InfoBox).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"];

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(164);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _reactRedux = __webpack_require__(235);
	
	var _InfoMenu = __webpack_require__(447);
	
	var _InfoMenu2 = _interopRequireDefault(_InfoMenu);
	
	var _InfoHeader = __webpack_require__(448);
	
	var _InfoHeader2 = _interopRequireDefault(_InfoHeader);
	
	var _InfoText = __webpack_require__(450);
	
	var _InfoText2 = _interopRequireDefault(_InfoText);
	
	var _StackIcons = __webpack_require__(451);
	
	var _StackIcons2 = _interopRequireDefault(_StackIcons);
	
	var _SocialIcons = __webpack_require__(453);
	
	var _SocialIcons2 = _interopRequireDefault(_SocialIcons);
	
	var _shared = __webpack_require__(344);
	
	var _store = __webpack_require__(313);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(456);
	
	var styles = function styles(theme) {
	  var _infoBox;
	
	  return {
	    infoBox: (_infoBox = {
	      display: "none"
	    }, _infoBox["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      color: theme.info.colors.text,
	      background: theme.info.colors.background,
	      position: "absolute",
	      left: 0,
	      top: 0,
	      width: theme.info.sizes.width + "px",
	      height: "100%",
	      padding: "20px 40px",
	      "&::after": {
	        content: "\"\"",
	        position: "absolute",
	        right: 0,
	        top: "20px",
	        bottom: "20px",
	        width: "1px",
	        borderRight: "1px solid " + theme.base.colors.lines
	      }
	    }, _infoBox),
	    wrapper: {
	      position: "absolute",
	      top: theme.info.sizes.headerHeight + "px",
	      bottom: 0,
	      left: 0,
	      width: "100%",
	      padding: "0 40px 0",
	      willChange: "opacity, bottom",
	      transition: "bottom .5s 0s",
	      opacity: 1,
	      transitionTimingFunction: "ease",
	      ".is-aside.closed &": {
	        bottom: theme.navigator.sizes.closedHeight + "px"
	      },
	      ".moving-featured &": {
	        bottom: 0
	      }
	    }
	  };
	};
	
	var InfoBox = function (_React$Component) {
	  _inherits(InfoBox, _React$Component);
	
	  function InfoBox() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, InfoBox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.avatarOnClick = _shared.featureNavigator.bind(_this), _this.menulinkOnClick = _shared.moveNavigatorAside.bind(_this), _this.expandOnClick = function (e) {
	      _this.props.setNavigatorShape("closed");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  InfoBox.prototype.render = function render() {
	    var _props = this.props,
	        classes = _props.classes,
	        parts = _props.parts,
	        pages = _props.pages,
	        navigatorPosition = _props.navigatorPosition,
	        navigatorShape = _props.navigatorShape;
	
	    var info = parts.find(function (el) {
	      return el.node.frontmatter.title === "info";
	    });
	
	    return _react2.default.createElement(
	      "aside",
	      {
	        className: classes.infoBox + " " + (navigatorPosition ? navigatorPosition : "") + " \n        " + (navigatorShape ? navigatorShape : "")
	      },
	      info && _react2.default.createElement(_InfoHeader2.default, {
	        info: info,
	        avatarOnClick: this.avatarOnClick,
	        expandOnClick: this.expandOnClick
	      }),
	      _react2.default.createElement(
	        "div",
	        { className: classes.wrapper },
	        info && _react2.default.createElement(_InfoText2.default, { info: info }),
	        _react2.default.createElement(_SocialIcons2.default, null),
	        pages && _react2.default.createElement(_InfoMenu2.default, { pages: pages, linkOnClick: this.menulinkOnClick }),
	        _react2.default.createElement(_StackIcons2.default, null)
	      )
	    );
	  };
	
	  return InfoBox;
	}(_react2.default.Component);
	
	InfoBox.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  parts: _propTypes2.default.array.isRequired,
	  pages: _propTypes2.default.array.isRequired,
	  navigatorPosition: _propTypes2.default.string.isRequired,
	  navigatorShape: _propTypes2.default.string.isRequired,
	  isWideScreen: _propTypes2.default.bool.isRequired,
	  setNavigatorShape: _propTypes2.default.func.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    navigatorPosition: state.navigatorPosition,
	    navigatorShape: state.navigatorShape,
	    isWideScreen: state.isWideScreen
	  };
	};
	
	var mapDispatchToProps = {
	  setNavigatorPosition: _store.setNavigatorPosition,
	  setNavigatorShape: _store.setNavigatorShape
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactJss2.default)(styles)(InfoBox));
	module.exports = exports["default"];

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(164);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(62);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    infoMenu: {
	      display: "flex",
	      flexDirection: "column",
	      alignItems: "center",
	      listStyle: "none",
	      margin: 0,
	      width: "100%"
	    },
	    link: {
	      padding: ".5em",
	      fontWeight: 300,
	      textTransform: "lowercase",
	      color: theme.info.colors.menuLink,
	      "&:hover": {
	        color: theme.info.colors.menuLinkHover
	      }
	    }
	  };
	};
	
	var InfoMenu = function InfoMenu(props) {
	  var classes = props.classes,
	      pages = props.pages,
	      linkOnClick = props.linkOnClick;
	
	
	  return _react2.default.createElement(
	    "nav",
	    { className: classes.infoMenu },
	    pages.map(function (page, i) {
	      var _page$node = page.node,
	          fields = _page$node.fields,
	          frontmatter = _page$node.frontmatter;
	
	      return _react2.default.createElement(
	        _gatsbyLink2.default,
	        {
	          key: fields.slug,
	          to: fields.slug,
	          onClick: linkOnClick,
	          className: classes.link,
	          "data-shape": "closed"
	        },
	        frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title
	      );
	    }),
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { to: "/contact/", onClick: linkOnClick, className: classes.link, "data-shape": "closed" },
	      "Contact"
	    ),
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { to: "/howto/", onClick: linkOnClick, className: classes.link, "data-shape": "closed" },
	      "How To Guides"
	    )
	  );
	};
	
	InfoMenu.propTypes = {
	  pages: _propTypes2.default.array.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  linkOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoMenu);
	module.exports = exports["default"];

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(164);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(62);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _IconButton = __webpack_require__(347);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _ExpandMore = __webpack_require__(449);
	
	var _ExpandMore2 = _interopRequireDefault(_ExpandMore);
	
	var _avatar2 = __webpack_require__(438);
	
	var _avatar3 = _interopRequireDefault(_avatar2);
	
	var _config = __webpack_require__(437);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _avatarLink, _avatar, _title;
	
	  return {
	    header: {
	      lineHeight: 1,
	      position: "relative"
	    },
	    avatarLink: (_avatarLink = {
	      willChange: "left, top",
	      float: "left",
	      display: "block",
	      position: "relative",
	      margin: "0 12px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 20px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      position: "absolute",
	      top: "10px",
	      left: "50%",
	      marginLeft: "-30px",
	      transition: "all .5s",
	      transitionTimingFunction: "ease",
	      ".navigator-in-transition-from.navigator-is-opened &": {
	        left: "50%"
	      },
	      ".is-aside.open &": {
	        left: "8%",
	        top: "0"
	      }
	    }, _avatarLink),
	    avatar: (_avatar = {
	      width: "36px",
	      height: "36px",
	      borderRadius: "65% 75%",
	      border: "1px solid #ddd",
	      transition: "all .3s",
	      transitionTimingFunction: "ease",
	      display: "inline-block",
	      overflow: "hidden",
	      "& img": {
	        maxWidth: "100%"
	      }
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      width: "44px",
	      height: "44px"
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      width: "60px",
	      height: "60px"
	    }, _avatar["@media (hover: hover)"] = {
	      "&:hover": {
	        borderRadius: "75% 65%"
	      }
	    }, _avatar),
	    title: (_title = {
	      willChange: "transform, left, top",
	      fontSize: theme.info.fonts.boxTitleSize + "em",
	      margin: 0,
	      float: "left",
	      transitionTimingFunction: "ease",
	      "& small": {
	        display: "block",
	        fontSize: ".6em",
	        marginTop: ".3em"
	      }
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeM + "em"
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeL + "em",
	      position: "absolute",
	      top: "85px",
	      textAlign: "center",
	      left: "50%",
	      transform: "translate(-50%)",
	      transition: "all .5s",
	      ".is-aside.open &": {
	        left: "60%",
	        top: 1.9 - theme.info.fonts.boxTitleSizeL + "em",
	        textAlign: "left"
	      }
	    }, _title),
	    expand: {
	      position: "absolute",
	      top: "30px",
	      right: "-25px",
	      display: "none",
	      color: theme.info.colors.text,
	      ".is-aside.open &": {
	        display: "block"
	      }
	    }
	  };
	};
	
	var InfoHeader = function InfoHeader(props) {
	  var classes = props.classes,
	      avatarOnClick = props.avatarOnClick,
	      expandOnClick = props.expandOnClick;
	
	
	  return _react2.default.createElement(
	    "header",
	    { className: classes.header },
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { className: classes.avatarLink, onClick: avatarOnClick, to: "/", title: "back to Home page" },
	      _react2.default.createElement(
	        "div",
	        { className: classes.avatar },
	        _react2.default.createElement("img", { src: _avatar3.default, alt: "" })
	      )
	    ),
	    _react2.default.createElement(
	      "h1",
	      { className: classes.title },
	      _config2.default.infoTitle.replace(/ /g, "\xA0"),
	      _react2.default.createElement(
	        "small",
	        null,
	        _config2.default.infoTitleNote
	      )
	    ),
	    _react2.default.createElement(
	      _IconButton2.default,
	      {
	        "aria-label": "Expand the box",
	        className: classes.expand,
	        onClick: expandOnClick,
	        title: "Expand the box"
	      },
	      _react2.default.createElement(_ExpandMore2.default, null)
	    )
	  );
	};
	
	InfoHeader.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  avatarOnClick: _propTypes2.default.func.isRequired,
	  expandOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoHeader);
	module.exports = exports["default"];

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(370);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _createSvgIcon = _interopRequireDefault(__webpack_require__(371));
	
	var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
	  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
	})), 'ExpandMore');
	
	exports.default = _default;

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(164);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    text: {
	      display: "block",
	      fontWeight: 300,
	      lineHeight: 1.5,
	      fontSize: ".95em",
	      textAlign: "left",
	      marginBottom: ".8em",
	      "& p:first-child": {
	        marginTop: 0
	      },
	      "& p:last-child": {
	        marginBottom: 0
	      }
	    }
	  };
	};
	
	var InfoText = function InfoText(props) {
	  var classes = props.classes,
	      info = props.info;
	
	  var text = info.node.html;
	
	  return _react2.default.createElement("div", { className: classes.text, dangerouslySetInnerHTML: { __html: text } });
	};
	
	InfoText.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  info: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoText);
	module.exports = exports["default"];

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(164);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsby = __webpack_require__(452);
	
	var _gatsby2 = _interopRequireDefault(_gatsby);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _stack;
	
	  return {
	    stack: (_stack = {
	      display: "none"
	    }, _stack["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      position: "absolute",
	      left: 0,
	      bottom: 0,
	      width: "100%",
	      padding: "1em 2em"
	    }, _stack),
	    box: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap",
	      flexDirection: "column",
	      textAlign: "center"
	    },
	    link: {
	      display: "inline-block",
	      padding: "8px"
	    },
	    svg: {
	      width: "22px",
	      height: "22px"
	    },
	    header: {
	      textAlign: "center",
	      fontSize: ".85em",
	      letterSpacing: ".3em",
	      width: "100%",
	      margin: "0 0 .8em 0",
	      fontWeight: 300
	    }
	  };
	};
	
	var StackIcons = function StackIcons(props) {
	  var classes = props.classes;
	
	
	  var item = {
	    name: "gatsby",
	    url: "https://www.gatsbyjs.com/starters/greglobinski/gatsby-starter-personal-blog",
	    comp: _gatsby2.default
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: classes.stack },
	    _react2.default.createElement(
	      "h5",
	      { className: classes.header },
	      "Maintained By :"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: classes.box },
	      _react2.default.createElement(
	        "a",
	        { className: classes.link, target: "_blank", href: "https://www.linkedin.com/in/shivamgohel/" },
	        _react2.default.createElement(
	          "h5",
	          null,
	          "Shivam Gohel"
	        )
	      )
	    )
	  );
	};
	
	StackIcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(StackIcons);
	module.exports = exports["default"];

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GatsbyIcon (props) {
	    return React.createElement("svg",props,[React.createElement("style",{"type":"text/css","key":0},".st0{fill:#639}"),React.createElement("path",{"className":"st0","d":"M600,0C268.6,0,0,268.6,0,600s268.6,600,600,600s600-268.6,600-600S931.4,0,600,0z M266.6,933.3\tC176.1,842.8,131,724.6,129.6,606L594,1070.4C475.4,1069,357.2,1023.9,266.6,933.3z M704.3,1059.4L140.6,495.7\tc47.5-210.1,235-367.1,459.4-367.1c156.9,0,295.5,77,381.2,194.9L915.6,379C845.8,279.5,730.5,214.3,600,214.3\tc-167.7,0-310.3,107.7-363.3,257.5l491.6,491.6c123.4-43.7,218-148.2,247.6-277.6H771.4V600h300\tC1071.4,824.5,914.4,1011.9,704.3,1059.4z","key":1})]);
	}
	
	GatsbyIcon.defaultProps = {"version":"1.1","id":"Ebene_1","x":"0","y":"0","viewBox":"0 0 1200 1200","xmlSpace":"preserve","enableBackground":"new 0 0 1200 1200"};
	
	module.exports = GatsbyIcon;
	
	GatsbyIcon.default = GatsbyIcon;


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(164);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _config = __webpack_require__(437);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _github = __webpack_require__(454);
	
	var _github2 = _interopRequireDefault(_github);
	
	var _email = __webpack_require__(455);
	
	var _email2 = _interopRequireDefault(_email);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    social: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "5px",
	      "&:hover": {
	        "& svg": {
	          fill: theme.info.colors.socialIconsHover
	        }
	      }
	    },
	    svg: {
	      width: "40px",
	      height: "40px",
	      fill: theme.info.colors.socialIcons,
	      transition: "all .5s"
	    }
	  };
	};
	
	var SocialIcons = function SocialIcons(props) {
	  var classes = props.classes;
	
	  var items = _config2.default.authorSocialLinks;
	  var icons = {
	    github: _github2.default,
	    email: _email2.default
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: classes.social },
	    items.map(function (item) {
	      var Icon = icons[item.name];
	      return _react2.default.createElement(
	        "a",
	        {
	          href: item.url,
	          key: item.name,
	          className: classes.link,
	          target: "_blank",
	          rel: "noopener noreferrer",
	          title: item.name
	        },
	        _react2.default.createElement(Icon, { className: classes.svg })
	      );
	    })
	  );
	};
	
	SocialIcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(SocialIcons);
	module.exports = exports["default"];

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GithubIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}));
	}
	
	GithubIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = GithubIcon;
	
	GithubIcon.default = GithubIcon;


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function EmailIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"}));
	}
	
	EmailIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = EmailIcon;
	
	EmailIcon.default = EmailIcon;


/***/ })

};;
//# sourceMappingURL=1.render-page.js.map