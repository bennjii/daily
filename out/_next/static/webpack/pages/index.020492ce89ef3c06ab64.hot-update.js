self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/settings */ "./public/components/settings.tsx");
/* harmony import */ var _components_qotd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/qotd */ "./public/components/qotd.tsx");
/* harmony import */ var keyboardist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! keyboardist */ "./node_modules/keyboardist/dist/keyboardist.module.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/scene */ "./public/components/scene.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\b.t.white\\Documents\\NonSyncedProjectsOnDemand\\daily\\daily\\pages\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Home() {
  _s();

  var _background$urls,
      _documentSettings$sta,
      _documentSettings$sta2,
      _this = this,
      _background$user,
      _background$user2,
      _background$user3;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new Date()),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      background = _useState2[0],
      setBackground = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      quoteOfTheDay = _useState3[0],
      setQuoteOfTheDay = _useState3[1];

  var searchRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var color = "#ffffff"; //`#${invert(background?.color ? background.color : '#000000')}`;

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)( true && localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []),
      todo = _useState4[0],
      setTodo = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)( true && localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings"), function (k, v) {
    return typeof v === "string" ? v.startsWith('function') ? eval("(" + v + ")") : v : v;
  }) : {
    states: {
      editingTitle: false,
      settingsOpen: false,
      searchOpen: false
    },
    settings: {
      title: 'things to do',
      showToDo: true,
      showAds: false,
      hour24: false,
      shortDate: false,
      quoteOfTheDay: false,
      backgroundType: 'standard' //standard, chaos, custom

    },
    powertools: {
      search_engine: "duckduckgo",
      powerbinds: [{
        title: "search",
        bind: 's',
        action: function action(string) {
          window.location.replace("https://duckduckgo.com/?q=".concat(string));
        }
      }, {
        title: "settings",
        bind: 'v',
        action: function action(string) {}
      }, {
        title: "task",
        bind: 't',
        action: function action(string) {
          console.log("Recieved:: ".concat(string));
          todo.push({
            editable: false,
            title: string,
            completed: false
          });
          localStorage.setItem("todo", JSON.stringify(todo));
        }
      }, {
        title: "wikipedia",
        bind: 'w',
        action: function action(string) {
          window.location.href = "https://en.wikipedia.org/wiki/".concat(string);
        }
      }]
    }
  }),
      documentSettings = _useState5[0],
      setDocumentSettings = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var _documentSettings$pow;

    if (false) {} //@ts-expect-error

    var listener = new keyboardist__WEBPACK_IMPORTED_MODULE_8__.createListener();
    var search = listener.subscribe('Slash', function () {
      //@ts-expect-error
      if (documentSettings.states.searchOpen && searchRef.current) searchRef.current.focus();else setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
        states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
          searchOpen: true,
          onSearchCompletion: null
        })
      }));
    });
    var resetState = listener.subscribe('Shift+Down', function () {
      setDocumentSettings(null);
      localStorage.removeItem("settings");
      window.location.reload();
    });
    documentSettings === null || documentSettings === void 0 ? void 0 : (_documentSettings$pow = documentSettings.powertools) === null || _documentSettings$pow === void 0 ? void 0 : _documentSettings$pow.powerbinds.map(function (powerbind) {
      console.log(powerbind);
      listener.subscribe("Shift+key".concat(powerbind.bind), function () {
        console.log("TRIGGERED");
        setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
          states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
            searchOpen: true,
            onSearchCompletion: powerbind
          })
        }));
      });
    });
    return function () {
      listener.stopListening();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    console.log("Component Started");
    console.log(documentSettings);

    var repeat = function repeat() {
      setDate(new Date());
      setTimeout(repeat, 100);
    };

    setTimeout(repeat, 100);

    (0,C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_b_t_white_Documents_NonSyncedProjectsOnDemand_daily_daily_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    localStorage.setItem("settings", JSON.stringify(documentSettings, function (k, v) {
      return typeof v === "function" ? "" + v : v;
    }));
    console.log("Settings Updated");
  }, [documentSettings]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
    style: documentSettings.settings.backgroundType == "chaos" ? {
      background: 'rgb(0, 0, 0)',
      backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8voDgUhskLo%2Fmaxresdefault.jpg&f=1&nofb=1)',
      backgroundColor: '#000'
    } : {
      backgroundImage: "url(".concat(background !== null && background !== void 0 && (_background$urls = background.urls) !== null && _background$urls !== void 0 && _background$urls.raw ? background.urls.raw : 'https://images.unsplash.com/photo-1617642171314-276bb7641536?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80', ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "New Tab"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 4
    }, this), documentSettings.settings.backgroundType == 'chaos' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().background),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scene__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().leftSide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [documentSettings.settings.showAds && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            style: {
              color: color
            },
            children: "AD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 7
        }, this), documentSettings.settings.quoteOfTheDay && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_qotd__WEBPACK_IMPORTED_MODULE_7__.default, {
          qotd: quoteOfTheDay,
          color: color
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 52
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().time),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          style: {
            color: color
          },
          children: [documentSettings.settings.hour24 ? date.getHours() : date.getHours() > 12 ? date.getHours() - 12 : date.getHours(), ":", date.getMinutes() < 10 ? "0".concat(date.getMinutes()) : date.getMinutes()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              color: color
            },
            children: date.toLocaleString('en-us', {
              weekday: 'long',
              day: '2-digit',
              month: documentSettings.settings.shortDate ? 'short' : 'long'
            }).toUpperCase()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.Settings, {
            color: "#f4f4f40e",
            size: 20,
            onClick: function onClick() {
              return setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
                states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
                  settingsOpen: !documentSettings.states.settingsOpen
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 4
    }, this), documentSettings.states.searchOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().search), " ").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchActive)),
      onClick: function onClick(e) {
        console.log(e.target); //@ts-expect-error

        if (e.target.classList.value.includes((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().search))) setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
          states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
            searchOpen: false
          })
        }));
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "search",
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchDiv),
          onClick: function onClick() {
            console.log("Event Sucked.");
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "/".concat((_documentSettings$sta = documentSettings.states.onSearchCompletion) === null || _documentSettings$sta === void 0 ? void 0 : _documentSettings$sta.bind, "\t").concat((_documentSettings$sta2 = documentSettings.states.onSearchCompletion) === null || _documentSettings$sta2 === void 0 ? void 0 : _documentSettings$sta2.title),
            ref: searchRef,
            autoFocus: true,
            onKeyDown: function onKeyDown(event) {
              if (event.key.toLocaleLowerCase() == "escape") {
                setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
                  states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
                    searchOpen: false
                  })
                }));
              } else if (event.key.toLocaleLowerCase() == "enter") {
                var _documentSettings$sta3;

                //@ts-expect-error
                (_documentSettings$sta3 = documentSettings.states.onSearchCompletion) === null || _documentSettings$sta3 === void 0 ? void 0 : _documentSettings$sta3.action(searchRef.current.value); //@ts-expect-error

                searchRef.current.value = '';
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 8
          }, this), function () {
            var _documentSettings$sta4;

            switch ((_documentSettings$sta4 = documentSettings.states.onSearchCompletion) === null || _documentSettings$sta4 === void 0 ? void 0 : _documentSettings$sta4.title) {
              case 'search':
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.ArrowRight, {
                  size: 15,
                  color: "#3b3b3b",
                  opacity: "0.7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 19
                }, _this);

              case 'task':
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.Plus, {
                  size: 15,
                  color: "#3b3b3b",
                  opacity: "0.7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, _this);

              default:
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.ArrowRight, {
                  size: 15,
                  color: "#3b3b3b",
                  opacity: "0.7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 19
                }, _this);
            }
          }()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().search)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().rightSide),
      children:  true && documentSettings.settings.showToDo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoHeader),
          children: [documentSettings.states.editingTitle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            placeholder: documentSettings.settings.title,
            onChange: function onChange(e) {
              return setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
                settings: _objectSpread(_objectSpread({}, documentSettings.settings), {}, {
                  title: e.target.value
                })
              }));
            },
            onKeyDown: function onKeyDown(e) {
              if (e.key == "Enter") setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
                states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
                  editingTitle: false
                })
              }));
            },
            autoFocus: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 9
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            onClick: function onClick() {
              return setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
                states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
                  editingTitle: true
                })
              }));
            },
            children: documentSettings.settings.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.Plus, {
            color: "#000000",
            size: 20,
            strokeWidth: 1.5,
            onClick: function onClick() {
              todo.push({
                editable: true,
                title: '',
                completed: false
              });
              localStorage.setItem("todo", JSON.stringify(todo));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoBody),
          children: todo.map(function (e, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: function onClick(e) {
                //@ts-ignore
                if (e.target.nodeName == "DIV") {
                  todo[index].completed = !todo[index].completed;
                  localStorage.setItem("todo", JSON.stringify(todo));
                }
              },
              children: e.editable ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  defaultValue: e.title,
                  placeholder: "Click to edit me",
                  onBlur: function onBlur(e) {
                    todo[index] = {
                      editable: false,
                      title: e.target.value,
                      completed: false
                    };
                  },
                  onKeyDown: function onKeyDown(e) {
                    if (e.key == "Enter") {
                      todo[index] = {
                        editable: false,
                        //@ts-ignore
                        title: e.target.value,
                        completed: false
                      };
                      localStorage.setItem("todo", JSON.stringify(todo));
                    }
                  },
                  autoFocus: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 13
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 12
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: e.completed ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().completedTask) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().uncompletedTask),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoLabel),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    onClick: function onClick() {
                      todo[index].editable = true;
                    },
                    children: e.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 14
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 13
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: e.completed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.Check, {
                    color: e.completed ? "#226d38" : "#3b3b3b",
                    size: 20,
                    onClick: function onClick(e) {
                      todo[index].completed = false;
                      localStorage.setItem("todo", JSON.stringify(todo));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 14
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.Square, {
                    color: e.completed ? "#226d38" : "#3b3b3b",
                    size: 20,
                    onClick: function onClick(e) {
                      todo[index].completed = true;
                      localStorage.setItem("todo", JSON.stringify(todo));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 14
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 13
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.Trash, {
                  color: e.completed ? "#226d38" : "#3b3b3b",
                  size: 20,
                  onClick: function onClick(e) {
                    todo.splice(index, 1);
                    localStorage.setItem("todo", JSON.stringify(todo));
                  },
                  onMouseOver: function onMouseOver(e) {
                    //@ts-expect-error
                    if (e.target.nodeName == 'path' || e.target.nodeName == 'polyline') {
                      //@ts-expect-error
                      e.target.parentElement.classList.add((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoTrashHover));
                    } else {
                      //@ts-expect-error
                      e.target.classList.add((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoTrashHover));
                    }
                  },
                  onMouseLeave: function onMouseLeave(e) {
                    //@ts-expect-error
                    if (e.target.nodeName == 'path' || e.target.nodeName == 'polyline') {
                      //@ts-expect-error
                      e.target.parentElement.classList.remove((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoTrashHover));
                    } else {
                      //@ts-expect-error
                      e.target.classList.remove((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().todoTrashHover));
                    }
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 13
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 12
              }, _this)
            }, "TODO".concat(index), false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 11
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 4
    }, this), documentSettings.states.settingsOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().settingsOverlay),
      id: "settingsBackground",
      onClick: function onClick(e) {
        //@ts-expect-error
        if (e.target.id == 'settingsBackground') setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
          states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
            settingsOpen: !documentSettings.states.settingsOpen
          })
        }));
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().settingsHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 8
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_11__.X, {
            color: "#3b3b3b",
            size: 20,
            onClick: function onClick() {
              return setDocumentSettings(_objectSpread(_objectSpread({}, documentSettings), {}, {
                states: _objectSpread(_objectSpread({}, documentSettings.states), {}, {
                  settingsOpen: false
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().settingsBody),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings__WEBPACK_IMPORTED_MODULE_6__.default, {
            settings: documentSettings,
            callback: setDocumentSettings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 5
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().photoCredit),
      children: documentSettings.settings.backgroundType == 'standard' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        style: {
          color: color,
          fontWeight: 100,
          fontSize: '12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Photo by"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://unsplash.com/@".concat(background === null || background === void 0 ? void 0 : (_background$user = background.user) === null || _background$user === void 0 ? void 0 : _background$user.username),
          children: [background === null || background === void 0 ? void 0 : (_background$user2 = background.user) === null || _background$user2 === void 0 ? void 0 : _background$user2.name, " ", background === null || background === void 0 ? void 0 : (_background$user3 = background.user) === null || _background$user3 === void 0 ? void 0 : _background$user3.lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        style: {
          color: color,
          fontWeight: 100,
          fontSize: '12px'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Lorenz Chaos Attractor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 3
  }, this);
}

_s(Home, "8oB6EzP3nqbUaUboolgIKMLZDu8=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsImJhY2tncm91bmQiLCJzZXRCYWNrZ3JvdW5kIiwicXVvdGVPZlRoZURheSIsInNldFF1b3RlT2ZUaGVEYXkiLCJzZWFyY2hSZWYiLCJ1c2VSZWYiLCJjb2xvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ0b2RvIiwic2V0VG9kbyIsImsiLCJ2Iiwic3RhcnRzV2l0aCIsImV2YWwiLCJzdGF0ZXMiLCJlZGl0aW5nVGl0bGUiLCJzZXR0aW5nc09wZW4iLCJzZWFyY2hPcGVuIiwic2V0dGluZ3MiLCJ0aXRsZSIsInNob3dUb0RvIiwic2hvd0FkcyIsImhvdXIyNCIsInNob3J0RGF0ZSIsImJhY2tncm91bmRUeXBlIiwicG93ZXJ0b29scyIsInNlYXJjaF9lbmdpbmUiLCJwb3dlcmJpbmRzIiwiYmluZCIsImFjdGlvbiIsInN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZWRpdGFibGUiLCJjb21wbGV0ZWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaHJlZiIsImRvY3VtZW50U2V0dGluZ3MiLCJzZXREb2N1bWVudFNldHRpbmdzIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJjcmVhdGVMaXN0ZW5lciIsInNlYXJjaCIsInN1YnNjcmliZSIsImN1cnJlbnQiLCJmb2N1cyIsIm9uU2VhcmNoQ29tcGxldGlvbiIsInJlc2V0U3RhdGUiLCJyZW1vdmVJdGVtIiwicmVsb2FkIiwibWFwIiwicG93ZXJiaW5kIiwic3RvcExpc3RlbmluZyIsInJlcGVhdCIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1cmxzIiwicmF3IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiZGF5IiwibW9udGgiLCJ0b1VwcGVyQ2FzZSIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiZXZlbnQiLCJrZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluZGV4Iiwibm9kZU5hbWUiLCJzcGxpY2UiLCJwYXJlbnRFbGVtZW50IiwiYWRkIiwicmVtb3ZlIiwiaWQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ1c2VyIiwidXNlcm5hbWUiLCJuYW1lIiwibGFzdE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFDSkMsK0NBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FESjtBQUFBLE1BQ3RCQyxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFBQSxtQkFFUUgsK0NBQVEsQ0FBQyxJQUFELENBRmhCO0FBQUEsTUFFdEJJLFVBRnNCO0FBQUEsTUFFVkMsYUFGVTs7QUFBQSxtQkFHY0wsK0NBQVEsQ0FBQyxJQUFELENBSHRCO0FBQUEsTUFHdEJNLGFBSHNCO0FBQUEsTUFHUEMsZ0JBSE87O0FBSzlCLE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sRUFBeEI7QUFFQSxNQUFNQyxLQUFLLEdBQUcsU0FBZCxDQVA4QixDQU9MOztBQVBLLG1CQVNKViwrQ0FBUSxDQUFDLFNBQXFCVyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBckIsR0FBb0RDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFwRCxHQUErRixFQUFoRyxDQVRKO0FBQUEsTUFTdEJHLElBVHNCO0FBQUEsTUFTaEJDLE9BVGdCOztBQUFBLG1CQVVvQmhCLCtDQUFRLENBQ3pELFNBQXFCVyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBckIsR0FDQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFYLEVBQTZDLFVBQUNLLENBQUQsRUFBR0MsQ0FBSDtBQUFBLFdBQVMsT0FBT0EsQ0FBUCxLQUFhLFFBQWIsR0FBeUJBLENBQUMsQ0FBQ0MsVUFBRixDQUFhLFVBQWIsSUFBMkJDLElBQUksQ0FBQyxNQUFJRixDQUFKLEdBQU0sR0FBUCxDQUEvQixHQUE2Q0EsQ0FBdEUsR0FBMEVBLENBQW5GO0FBQUEsR0FBN0MsQ0FERCxHQUdBO0FBQ0NHLFVBQU0sRUFBRTtBQUNQQyxrQkFBWSxFQUFFLEtBRFA7QUFFUEMsa0JBQVksRUFBRSxLQUZQO0FBR1BDLGdCQUFVLEVBQUU7QUFITCxLQURUO0FBTUNDLFlBQVEsRUFBRTtBQUNUQyxXQUFLLEVBQUUsY0FERTtBQUVUQyxjQUFRLEVBQUUsSUFGRDtBQUdUQyxhQUFPLEVBQUUsS0FIQTtBQUlUQyxZQUFNLEVBQUUsS0FKQztBQUtUQyxlQUFTLEVBQUUsS0FMRjtBQU1UeEIsbUJBQWEsRUFBRSxLQU5OO0FBT1R5QixvQkFBYyxFQUFFLFVBUFAsQ0FPbUI7O0FBUG5CLEtBTlg7QUFlQ0MsY0FBVSxFQUFFO0FBQ1hDLG1CQUFhLEVBQUUsWUFESjtBQUVYQyxnQkFBVSxFQUFFLENBQ1g7QUFDQ1IsYUFBSyxFQUFFLFFBRFI7QUFFQ1MsWUFBSSxFQUFFLEdBRlA7QUFHQ0MsY0FBTSxFQUFFLGdCQUFDQyxNQUFELEVBQVk7QUFDbkJDLGdCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLHFDQUFxREgsTUFBckQ7QUFDQTtBQUxGLE9BRFcsRUFRWDtBQUNDWCxhQUFLLEVBQUUsVUFEUjtBQUVDUyxZQUFJLEVBQUUsR0FGUDtBQUdDQyxjQUFNLEVBQUUsZ0JBQUNDLE1BQUQsRUFBWSxDQUVuQjtBQUxGLE9BUlcsRUFlWDtBQUNDWCxhQUFLLEVBQUUsTUFEUjtBQUVDUyxZQUFJLEVBQUUsR0FGUDtBQUdDQyxjQUFNLEVBQUUsZ0JBQUNDLE1BQUQsRUFBWTtBQUNuQkksaUJBQU8sQ0FBQ0MsR0FBUixzQkFBMEJMLE1BQTFCO0FBRUF0QixjQUFJLENBQUM0QixJQUFMLENBQVU7QUFDVEMsb0JBQVEsRUFBRSxLQUREO0FBRVRsQixpQkFBSyxFQUFFVyxNQUZFO0FBR1RRLHFCQUFTLEVBQUU7QUFIRixXQUFWO0FBTUFsQyxzQkFBWSxDQUFDbUMsT0FBYixDQUFxQixNQUFyQixFQUE2QmpDLElBQUksQ0FBQ2tDLFNBQUwsQ0FBZWhDLElBQWYsQ0FBN0I7QUFDQTtBQWJGLE9BZlcsRUE4Qlg7QUFDQ1csYUFBSyxFQUFFLFdBRFI7QUFFQ1MsWUFBSSxFQUFFLEdBRlA7QUFHQ0MsY0FBTSxFQUFFLGdCQUFDQyxNQUFELEVBQVk7QUFDbkJDLGdCQUFNLENBQUNDLFFBQVAsQ0FBZ0JTLElBQWhCLDJDQUF3RFgsTUFBeEQ7QUFDQTtBQUxGLE9BOUJXO0FBRkQ7QUFmYixHQUp5RCxDQVY1QjtBQUFBLE1BVXRCWSxnQkFWc0I7QUFBQSxNQVVKQyxtQkFWSTs7QUF5RTlCQyxrREFBUyxDQUFDLFlBQU07QUFBQTs7QUFDZixRQUFHLEtBQUgsRUFBcUIsRUFETixDQUdmOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyx1REFBSixFQUFqQjtBQUVBLFFBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxTQUFULENBQW1CLE9BQW5CLEVBQTRCLFlBQU07QUFDaEQ7QUFDQSxVQUFHTixnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCRyxVQUF4QixJQUFzQ2hCLFNBQVMsQ0FBQ2dELE9BQW5ELEVBQTREaEQsU0FBUyxDQUFDZ0QsT0FBVixDQUFrQkMsS0FBbEIsR0FBNUQsS0FDS1AsbUJBQW1CLGlDQUFNRCxnQkFBTjtBQUF3QjVCLGNBQU0sa0NBQU80QixnQkFBZ0IsQ0FBQzVCLE1BQXhCO0FBQWdDRyxvQkFBVSxFQUFFLElBQTVDO0FBQWtEa0MsNEJBQWtCLEVBQUU7QUFBdEU7QUFBOUIsU0FBbkI7QUFDTCxLQUpjLENBQWY7QUFNQSxRQUFNQyxVQUFVLEdBQUdQLFFBQVEsQ0FBQ0csU0FBVCxDQUFtQixZQUFuQixFQUFpQyxZQUFNO0FBQ3pETCx5QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0F2QyxrQkFBWSxDQUFDaUQsVUFBYixDQUF3QixVQUF4QjtBQUVBdEIsWUFBTSxDQUFDQyxRQUFQLENBQWdCc0IsTUFBaEI7QUFDQSxLQUxrQixDQUFuQjtBQU9BWixvQkFBZ0IsU0FBaEIsSUFBQUEsZ0JBQWdCLFdBQWhCLHFDQUFBQSxnQkFBZ0IsQ0FBRWpCLFVBQWxCLGdGQUE4QkUsVUFBOUIsQ0FBeUM0QixHQUF6QyxDQUE2QyxVQUFDQyxTQUFELEVBQXdCO0FBQ3BFdEIsYUFBTyxDQUFDQyxHQUFSLENBQVlxQixTQUFaO0FBRUFYLGNBQVEsQ0FBQ0csU0FBVCxvQkFBK0JRLFNBQVMsQ0FBQzVCLElBQXpDLEdBQWlELFlBQU07QUFDdERNLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFFQVEsMkJBQW1CLGlDQUNmRCxnQkFEZTtBQUVsQjVCLGdCQUFNLGtDQUNGNEIsZ0JBQWdCLENBQUM1QixNQURmO0FBRUxHLHNCQUFVLEVBQUUsSUFGUDtBQUdMa0MsOEJBQWtCLEVBQUVLO0FBSGY7QUFGWSxXQUFuQjtBQVFBLE9BWEQ7QUFZQSxLQWZEO0FBaUJBLFdBQU8sWUFBTTtBQUNaWCxjQUFRLENBQUNZLGFBQVQ7QUFDQSxLQUZEO0FBR0UsR0F2Q00sRUF1Q0osRUF2Q0ksQ0FBVDtBQXlDQWIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZWLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZTyxnQkFBWjs7QUFFQSxRQUFNZ0IsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNwQjlELGFBQU8sQ0FBQyxJQUFJRixJQUFKLEVBQUQsQ0FBUDtBQUNBaUUsZ0JBQVUsQ0FBQ0QsTUFBRCxFQUFTLEdBQVQsQ0FBVjtBQUNBLEtBSEQ7O0FBS0FDLGNBQVUsQ0FBQ0QsTUFBRCxFQUFTLEdBQVQsQ0FBVjs7QUFFQSwwVUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFNQSxHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBZCxrREFBUyxDQUFDLFlBQU07QUFDZnhDLGdCQUFZLENBQUNtQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDakMsSUFBSSxDQUFDa0MsU0FBTCxDQUFlRSxnQkFBZixFQUFpQyxVQUFDaEMsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsYUFBUyxPQUFPQSxDQUFQLEtBQWEsVUFBYixHQUEwQixLQUFLQSxDQUEvQixHQUFtQ0EsQ0FBNUM7QUFBQSxLQUFqQyxDQUFqQztBQUNBdUIsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQSxHQUhRLEVBR04sQ0FBQ08sZ0JBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUVrQiwyRUFBaEI7QUFBa0MsU0FBSyxFQUNyQ2xCLGdCQUFnQixDQUFDeEIsUUFBakIsQ0FBMEJNLGNBQTFCLElBQTRDLE9BQTdDLEdBQ0E7QUFDQzNCLGdCQUFVLEVBQUUsY0FEYjtBQUVDZ0UscUJBQWUsRUFBRSxnSUFGbEI7QUFHQ0MscUJBQWUsRUFBRTtBQUhsQixLQURBLEdBT0E7QUFDQ0QscUJBQWUsZ0JBQVNoRSxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLHdCQUFBQSxVQUFVLENBQUVrRSxJQUFaLDhEQUFrQkMsR0FBbEIsR0FBd0JuRSxVQUFVLENBQUNrRSxJQUFYLENBQWdCQyxHQUF4QyxHQUE4QyxnS0FBdkQsTUFEaEI7QUFFQ0Msc0JBQWdCLEVBQUUsV0FGbkI7QUFHQ0Msb0JBQWMsRUFBRTtBQUhqQixLQVJEO0FBQUEsNEJBY0MsOERBQUMsa0RBQUQ7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRELEVBb0JFeEIsZ0JBQWdCLENBQUN4QixRQUFqQixDQUEwQk0sY0FBMUIsSUFBNEMsT0FBNUMsaUJBQ0E7QUFBSyxlQUFTLEVBQUVvQyw0RUFBaEI7QUFBQSw2QkFDQyw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRixlQTBCQztBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsOEJBQ0M7QUFBQSxtQkFFR2xCLGdCQUFnQixDQUFDeEIsUUFBakIsQ0FBMEJHLE9BQTNCLGlCQUVBO0FBQUEsaUNBQ0M7QUFBSSxpQkFBSyxFQUFFO0FBQUVsQixtQkFBSyxFQUFHQTtBQUFWLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBVUd1QyxnQkFBZ0IsQ0FBQ3hCLFFBQWpCLENBQTBCbkIsYUFBM0IsaUJBQTZDLDhEQUFDLHFEQUFEO0FBQWUsY0FBSSxFQUFFQSxhQUFyQjtBQUFvQyxlQUFLLEVBQUVJO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVi9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBZUM7QUFBSyxpQkFBUyxFQUFFeUQsc0VBQWhCO0FBQUEsZ0NBQ0M7QUFBSSxlQUFLLEVBQUU7QUFBRXpELGlCQUFLLEVBQUdBO0FBQVYsV0FBWDtBQUFBLHFCQUVHdUMsZ0JBQWdCLENBQUN4QixRQUFqQixDQUEwQkksTUFBM0IsR0FDQTNCLElBQUksQ0FBQ3dFLFFBQUwsRUFEQSxHQUdBeEUsSUFBSSxDQUFDd0UsUUFBTCxLQUFrQixFQUFsQixHQUF1QnhFLElBQUksQ0FBQ3dFLFFBQUwsS0FBZ0IsRUFBdkMsR0FBNEN4RSxJQUFJLENBQUN3RSxRQUFMLEVBTDlDLE9BU0d4RSxJQUFJLENBQUN5RSxVQUFMLEtBQW9CLEVBQXJCLGNBQStCekUsSUFBSSxDQUFDeUUsVUFBTCxFQUEvQixJQUFxRHpFLElBQUksQ0FBQ3lFLFVBQUwsRUFUdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBY0M7QUFBQSxrQ0FDQztBQUFHLGlCQUFLLEVBQUU7QUFBRWpFLG1CQUFLLEVBQUVBO0FBQVQsYUFBVjtBQUFBLHNCQUE2QlIsSUFBSSxDQUFDMEUsY0FBTCxDQUFvQixPQUFwQixFQUE2QjtBQUFHQyxxQkFBTyxFQUFFLE1BQVo7QUFBb0JDLGlCQUFHLEVBQUUsU0FBekI7QUFBb0NDLG1CQUFLLEVBQUc5QixnQkFBZ0IsQ0FBQ3hCLFFBQWpCLENBQTBCSyxTQUEzQixHQUF3QyxPQUF4QyxHQUFrRDtBQUE3RixhQUE3QixFQUFvSWtELFdBQXBJO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFHQyw4REFBQyxvREFBRDtBQUFVLGlCQUFLLEVBQUUsV0FBakI7QUFBOEIsZ0JBQUksRUFBRSxFQUFwQztBQUF3QyxtQkFBTyxFQUFFO0FBQUEscUJBQU05QixtQkFBbUIsaUNBQUtELGdCQUFMO0FBQXVCNUIsc0JBQU0sa0NBQU80QixnQkFBZ0IsQ0FBQzVCLE1BQXhCO0FBQWdDRSw4QkFBWSxFQUFFLENBQUMwQixnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCRTtBQUF2RTtBQUE3QixpQkFBekI7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkQsRUFnRUUwQixnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCRyxVQUF4QixnQkFDQTtBQUFLLGVBQVMsWUFBSzJDLHdFQUFMLGNBQXNCQSw4RUFBdEIsQ0FBZDtBQUEyRCxhQUFPLEVBQUUsaUJBQUNjLENBQUQsRUFBTztBQUMxRXhDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsQ0FBQyxDQUFDQyxNQUFkLEVBRDBFLENBRTFFOztBQUNBLFlBQUdELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxTQUFULENBQW1CQyxLQUFuQixDQUF5QkMsUUFBekIsQ0FBa0NsQix3RUFBbEMsQ0FBSCxFQUFxRGpCLG1CQUFtQixpQ0FBTUQsZ0JBQU47QUFBd0I1QixnQkFBTSxrQ0FBTzRCLGdCQUFnQixDQUFDNUIsTUFBeEI7QUFBZ0NHLHNCQUFVLEVBQUU7QUFBNUM7QUFBOUIsV0FBbkI7QUFDckQsT0FKRDtBQUFBLDZCQUtDO0FBQUEsK0JBT0M7QUFBSyxZQUFFLEVBQUUsUUFBVDtBQUFtQixtQkFBUyxFQUFFMkMsMkVBQTlCO0FBQWdELGlCQUFPLEVBQUUsbUJBQU07QUFBQzFCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQTZCLFdBQTdGO0FBQUEsa0NBQ0M7QUFBTyx1QkFBVyxzQ0FBTU8sZ0JBQWdCLENBQUM1QixNQUFqQixDQUF3QnFDLGtCQUE5QiwwREFBTSxzQkFBNEN2QixJQUFsRCx5Q0FBMkRjLGdCQUFnQixDQUFDNUIsTUFBakIsQ0FBd0JxQyxrQkFBbkYsMkRBQTJELHVCQUE0Q2hDLEtBQXZHLENBQWxCO0FBQWtJLGVBQUcsRUFBRWxCLFNBQXZJO0FBQWtKLHFCQUFTLE1BQTNKO0FBQTRKLHFCQUFTLEVBQUUsbUJBQUM4RSxLQUFELEVBQVc7QUFDakwsa0JBQUdBLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxpQkFBVixNQUFpQyxRQUFwQyxFQUE4QztBQUM3Q3RDLG1DQUFtQixpQ0FBTUQsZ0JBQU47QUFBd0I1Qix3QkFBTSxrQ0FBTzRCLGdCQUFnQixDQUFDNUIsTUFBeEI7QUFBZ0NHLDhCQUFVLEVBQUU7QUFBNUM7QUFBOUIsbUJBQW5CO0FBQ0EsZUFGRCxNQUVNLElBQUc4RCxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsaUJBQVYsTUFBaUMsT0FBcEMsRUFBNkM7QUFBQTs7QUFDbEQ7QUFDQSwwQ0FBQXZDLGdCQUFnQixDQUFDNUIsTUFBakIsQ0FBd0JxQyxrQkFBeEIsa0ZBQTRDdEIsTUFBNUMsQ0FBbUQ1QixTQUFTLENBQUNnRCxPQUFWLENBQWtCNEIsS0FBckUsRUFGa0QsQ0FHbEQ7O0FBQ0E1RSx5QkFBUyxDQUFDZ0QsT0FBVixDQUFrQjRCLEtBQWxCLEdBQTBCLEVBQTFCO0FBQ0E7QUFDRDtBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsRUFhRyxZQUFNO0FBQUE7O0FBQ04sOENBQU9uQyxnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCcUMsa0JBQS9CLDJEQUFPLHVCQUE0Q2hDLEtBQW5EO0FBQ0MsbUJBQUssUUFBTDtBQUNDLG9DQUFPLDhEQUFDLHNEQUFEO0FBQVksc0JBQUksRUFBRSxFQUFsQjtBQUFzQix1QkFBSyxFQUFFLFNBQTdCO0FBQXdDLHlCQUFPLEVBQUU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDs7QUFDRCxtQkFBSyxNQUFMO0FBQ0Msb0NBQU8sOERBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFFLEVBQVo7QUFBZ0IsdUJBQUssRUFBRSxTQUF2QjtBQUFrQyx5QkFBTyxFQUFFO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7O0FBQ0Q7QUFDQyxvQ0FBTyw4REFBQyxzREFBRDtBQUFZLHNCQUFJLEVBQUUsRUFBbEI7QUFBc0IsdUJBQUssRUFBRSxTQUE3QjtBQUF3Qyx5QkFBTyxFQUFFO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFORjtBQVFBLFdBVEQsRUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGdCQXlDQTtBQUFLLGVBQVMsRUFBRXlDLHdFQUFhYjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekdGLGVBNEdDO0FBQUssZUFBUyxFQUFFYSwyRUFBaEI7QUFBQSxnQkFFRyxTQUFtQmxCLGdCQUFnQixDQUFDeEIsUUFBakIsQ0FBMEJFLFFBQTlDLGdCQUNBO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFd0MsNEVBQWhCO0FBQUEscUJBRUVsQixnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCQyxZQUF4QixnQkFDQTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQix1QkFBVyxFQUFFMkIsZ0JBQWdCLENBQUN4QixRQUFqQixDQUEwQkMsS0FBMUQ7QUFDQSxvQkFBUSxFQUFFLGtCQUFDdUQsQ0FBRDtBQUFBLHFCQUFPL0IsbUJBQW1CLGlDQUFLRCxnQkFBTDtBQUF1QnhCLHdCQUFRLGtDQUFPd0IsZ0JBQWdCLENBQUN4QixRQUF4QjtBQUFrQ0MsdUJBQUssRUFBRXVELENBQUMsQ0FBQ0MsTUFBRixDQUFTRTtBQUFsRDtBQUEvQixpQkFBMUI7QUFBQSxhQURWO0FBRUEscUJBQVMsRUFBRSxtQkFBQ0gsQ0FBRCxFQUFPO0FBQ2pCLGtCQUFHQSxDQUFDLENBQUNNLEdBQUYsSUFBUyxPQUFaLEVBQXFCckMsbUJBQW1CLGlDQUFLRCxnQkFBTDtBQUF1QjVCLHNCQUFNLGtDQUFPNEIsZ0JBQWdCLENBQUM1QixNQUF4QjtBQUFnQ0MsOEJBQVksRUFBRTtBQUE5QztBQUE3QixpQkFBbkI7QUFDckIsYUFKRDtBQUlHLHFCQUFTO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxnQkFPQTtBQUFJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTTRCLG1CQUFtQixpQ0FBS0QsZ0JBQUw7QUFBdUI1QixzQkFBTSxrQ0FBTzRCLGdCQUFnQixDQUFDNUIsTUFBeEI7QUFBZ0NDLDhCQUFZLEVBQUU7QUFBOUM7QUFBN0IsaUJBQXpCO0FBQUEsYUFBYjtBQUFBLHNCQUE2SDJCLGdCQUFnQixDQUFDeEIsUUFBakIsQ0FBMEJDO0FBQXZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEYsZUFZQyw4REFBQyxnREFBRDtBQUFNLGlCQUFLLEVBQUUsU0FBYjtBQUF3QixnQkFBSSxFQUFFLEVBQTlCO0FBQWtDLHVCQUFXLEVBQUUsR0FBL0M7QUFBb0QsbUJBQU8sRUFBRSxtQkFBTTtBQUNsRVgsa0JBQUksQ0FBQzRCLElBQUwsQ0FBVTtBQUNUQyx3QkFBUSxFQUFFLElBREQ7QUFFVGxCLHFCQUFLLEVBQUUsRUFGRTtBQUdUbUIseUJBQVMsRUFBRTtBQUhGLGVBQVY7QUFNQWxDLDBCQUFZLENBQUNtQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCakMsSUFBSSxDQUFDa0MsU0FBTCxDQUFlaEMsSUFBZixDQUE3QjtBQUNBO0FBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUF1QkM7QUFBSyxtQkFBUyxFQUFFb0QsMEVBQWhCO0FBQUEsb0JBRUVwRCxJQUFJLENBQUMrQyxHQUFMLENBQVMsVUFBQ21CLENBQUQsRUFBSVEsS0FBSixFQUFjO0FBQ3RCLGdDQUNDO0FBQTBCLHFCQUFPLEVBQUUsaUJBQUNSLENBQUQsRUFBTztBQUN4QztBQUNBLG9CQUFHQSxDQUFDLENBQUNDLE1BQUYsQ0FBU1EsUUFBVCxJQUFxQixLQUF4QixFQUErQjtBQUMvQjNFLHNCQUFJLENBQUMwRSxLQUFELENBQUosQ0FBWTVDLFNBQVosR0FBd0IsQ0FBQzlCLElBQUksQ0FBQzBFLEtBQUQsQ0FBSixDQUFZNUMsU0FBckM7QUFDQWxDLDhCQUFZLENBQUNtQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCakMsSUFBSSxDQUFDa0MsU0FBTCxDQUFlaEMsSUFBZixDQUE3QjtBQUNDO0FBQ0QsZUFORjtBQUFBLHdCQVNFa0UsQ0FBQyxDQUFDckMsUUFBSCxnQkFFQTtBQUFBLHVDQUNDO0FBQU8sc0JBQUksRUFBQyxNQUFaO0FBQW1CLDhCQUFZLEVBQUVxQyxDQUFDLENBQUN2RCxLQUFuQztBQUEwQyw2QkFBVyxFQUFFLGtCQUF2RDtBQUEyRSx3QkFBTSxFQUFFLGdCQUFDdUQsQ0FBRCxFQUFPO0FBQ3pGbEUsd0JBQUksQ0FBQzBFLEtBQUQsQ0FBSixHQUFjO0FBQ2I3Qyw4QkFBUSxFQUFFLEtBREc7QUFFYmxCLDJCQUFLLEVBQUV1RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FGSDtBQUdidkMsK0JBQVMsRUFBRTtBQUhFLHFCQUFkO0FBS0EsbUJBTkQ7QUFNRywyQkFBUyxFQUFFLG1CQUFDb0MsQ0FBRCxFQUFPO0FBQ3BCLHdCQUFHQSxDQUFDLENBQUNNLEdBQUYsSUFBUyxPQUFaLEVBQXFCO0FBQ3BCeEUsMEJBQUksQ0FBQzBFLEtBQUQsQ0FBSixHQUFjO0FBQ2Q3QyxnQ0FBUSxFQUFFLEtBREk7QUFFZDtBQUNBbEIsNkJBQUssRUFBRXVELENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUhGO0FBSWR2QyxpQ0FBUyxFQUFFO0FBSkcsdUJBQWQ7QUFPQWxDLGtDQUFZLENBQUNtQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCakMsSUFBSSxDQUFDa0MsU0FBTCxDQUFlaEMsSUFBZixDQUE3QjtBQUNBO0FBQ0QsbUJBakJEO0FBaUJHLDJCQUFTO0FBakJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZBLGdCQXVCQTtBQUFLLHlCQUFTLEVBQUdrRSxDQUFDLENBQUNwQyxTQUFILEdBQWdCc0IsK0VBQWhCLEdBQXVDQSxpRkFBdkQ7QUFBQSx3Q0FDQztBQUFLLDJCQUFTLEVBQUVBLDJFQUFoQjtBQUFBLHlDQUNDO0FBQUcsMkJBQU8sRUFBRSxtQkFBTTtBQUNqQnBELDBCQUFJLENBQUMwRSxLQUFELENBQUosQ0FBWTdDLFFBQVosR0FBdUIsSUFBdkI7QUFDQSxxQkFGRDtBQUFBLDhCQUVJcUMsQ0FBQyxDQUFDdkQ7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxlQU9DO0FBQUEsNEJBRUV1RCxDQUFDLENBQUNwQyxTQUFILGdCQUVBLDhEQUFDLGlEQUFEO0FBQU8seUJBQUssRUFBR29DLENBQUMsQ0FBQ3BDLFNBQUgsR0FBZ0IsU0FBaEIsR0FBNEIsU0FBMUM7QUFBcUQsd0JBQUksRUFBRSxFQUEzRDtBQUFnRSwyQkFBTyxFQUFFLGlCQUFDb0MsQ0FBRCxFQUFPO0FBQy9FbEUsMEJBQUksQ0FBQzBFLEtBQUQsQ0FBSixDQUFZNUMsU0FBWixHQUF3QixLQUF4QjtBQUNBbEMsa0NBQVksQ0FBQ21DLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJqQyxJQUFJLENBQUNrQyxTQUFMLENBQWVoQyxJQUFmLENBQTdCO0FBQ0E7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZBLGdCQU9BLDhEQUFDLGtEQUFEO0FBQVEseUJBQUssRUFBR2tFLENBQUMsQ0FBQ3BDLFNBQUgsR0FBZ0IsU0FBaEIsR0FBNEIsU0FBM0M7QUFBc0Qsd0JBQUksRUFBRSxFQUE1RDtBQUFnRSwyQkFBTyxFQUFFLGlCQUFDb0MsQ0FBRCxFQUFPO0FBQy9FbEUsMEJBQUksQ0FBQzBFLEtBQUQsQ0FBSixDQUFZNUMsU0FBWixHQUF3QixJQUF4QjtBQUNBbEMsa0NBQVksQ0FBQ21DLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJqQyxJQUFJLENBQUNrQyxTQUFMLENBQWVoQyxJQUFmLENBQTdCO0FBQ0E7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRCxlQXVCQyw4REFBQyxpREFBRDtBQUFPLHVCQUFLLEVBQUdrRSxDQUFDLENBQUNwQyxTQUFILEdBQWdCLFNBQWhCLEdBQTRCLFNBQTFDO0FBQXFELHNCQUFJLEVBQUUsRUFBM0Q7QUFBK0QseUJBQU8sRUFBRSxpQkFBQ29DLENBQUQsRUFBTztBQUM5RWxFLHdCQUFJLENBQUM0RSxNQUFMLENBQVlGLEtBQVosRUFBbUIsQ0FBbkI7QUFDQTlFLGdDQUFZLENBQUNtQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCakMsSUFBSSxDQUFDa0MsU0FBTCxDQUFlaEMsSUFBZixDQUE3QjtBQUNBLG1CQUhEO0FBR0csNkJBQVcsRUFBRSxxQkFBQ2tFLENBQUQsRUFBTztBQUN0QjtBQUNBLHdCQUFHQSxDQUFDLENBQUNDLE1BQUYsQ0FBU1EsUUFBVCxJQUFxQixNQUFyQixJQUErQlQsQ0FBQyxDQUFDQyxNQUFGLENBQVNRLFFBQVQsSUFBcUIsVUFBdkQsRUFBbUU7QUFDbEU7QUFDQVQsdUJBQUMsQ0FBQ0MsTUFBRixDQUFTVSxhQUFULENBQXVCVCxTQUF2QixDQUFpQ1UsR0FBakMsQ0FBcUMxQixnRkFBckM7QUFDQSxxQkFIRCxNQUdNO0FBQ0w7QUFDQWMsdUJBQUMsQ0FBQ0MsTUFBRixDQUFTQyxTQUFULENBQW1CVSxHQUFuQixDQUF1QjFCLGdGQUF2QjtBQUNBO0FBQ0QsbUJBWkQ7QUFZRyw4QkFBWSxFQUFFLHNCQUFDYyxDQUFELEVBQU87QUFDdkI7QUFDQSx3QkFBR0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNRLFFBQVQsSUFBcUIsTUFBckIsSUFBK0JULENBQUMsQ0FBQ0MsTUFBRixDQUFTUSxRQUFULElBQXFCLFVBQXZELEVBQW1FO0FBQ2xFO0FBQ0FULHVCQUFDLENBQUNDLE1BQUYsQ0FBU1UsYUFBVCxDQUF1QlQsU0FBdkIsQ0FBaUNXLE1BQWpDLENBQXdDM0IsZ0ZBQXhDO0FBQ0EscUJBSEQsTUFHTTtBQUNMO0FBQ0FjLHVCQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQlcsTUFBbkIsQ0FBMEIzQixnRkFBMUI7QUFDQTtBQUNEO0FBckJEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhDRCw2QkFBaUJzQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBa0ZBLFdBbkZEO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZ0JBa0hBO0FBcEhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1R0QsRUFxT0V4QyxnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCRSxZQUF4QixnQkFDQTtBQUFLLGVBQVMsRUFBRTRDLGlGQUFoQjtBQUF3QyxRQUFFLEVBQUUsb0JBQTVDO0FBQWtFLGFBQU8sRUFBRSxpQkFBQ2MsQ0FBRCxFQUFPO0FBQ2pGO0FBQ0EsWUFBR0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNhLEVBQVQsSUFBZSxvQkFBbEIsRUFBd0M3QyxtQkFBbUIsaUNBQUtELGdCQUFMO0FBQXVCNUIsZ0JBQU0sa0NBQU80QixnQkFBZ0IsQ0FBQzVCLE1BQXhCO0FBQWdDRSx3QkFBWSxFQUFFLENBQUMwQixnQkFBZ0IsQ0FBQzVCLE1BQWpCLENBQXdCRTtBQUF2RTtBQUE3QixXQUFuQjtBQUN4QyxPQUhEO0FBQUEsNkJBSUM7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUU0QyxnRkFBaEI7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUdDLDhEQUFDLDZDQUFEO0FBQUcsaUJBQUssRUFBRSxTQUFWO0FBQXFCLGdCQUFJLEVBQUUsRUFBM0I7QUFBK0IsbUJBQU8sRUFBRTtBQUFBLHFCQUFNakIsbUJBQW1CLGlDQUFLRCxnQkFBTDtBQUF1QjVCLHNCQUFNLGtDQUFPNEIsZ0JBQWdCLENBQUM1QixNQUF4QjtBQUFnQ0UsOEJBQVksRUFBRTtBQUE5QztBQUE3QixpQkFBekI7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU9DO0FBQUssbUJBQVMsRUFBRTRDLDhFQUFoQjtBQUFBLGlDQUNDLDhEQUFDLHlEQUFEO0FBQWMsb0JBQVEsRUFBRWxCLGdCQUF4QjtBQUEwQyxvQkFBUSxFQUFFQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZ0JBa0JBLDZJQXZQRixlQTBQQztBQUFLLGVBQVMsRUFBRWlCLDZFQUFoQjtBQUFBLGdCQUVFbEIsZ0JBQWdCLENBQUN4QixRQUFqQixDQUEwQk0sY0FBMUIsSUFBNEMsVUFBNUMsZ0JBQ0E7QUFBSSxhQUFLLEVBQUU7QUFBRXJCLGVBQUssRUFBTEEsS0FBRjtBQUFTc0Ysb0JBQVUsRUFBRSxHQUFyQjtBQUEwQkMsa0JBQVEsRUFBRTtBQUFwQyxTQUFYO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFHLGNBQUksa0NBQTJCN0YsVUFBM0IsYUFBMkJBLFVBQTNCLDJDQUEyQkEsVUFBVSxDQUFFOEYsSUFBdkMscURBQTJCLGlCQUFrQkMsUUFBN0MsQ0FBUDtBQUFBLHFCQUFpRS9GLFVBQWpFLGFBQWlFQSxVQUFqRSw0Q0FBaUVBLFVBQVUsQ0FBRThGLElBQTdFLHNEQUFpRSxrQkFBa0JFLElBQW5GLE9BQTBGaEcsVUFBMUYsYUFBMEZBLFVBQTFGLDRDQUEwRkEsVUFBVSxDQUFFOEYsSUFBdEcsc0RBQTBGLGtCQUFrQkcsUUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGdCQU1BO0FBQUksYUFBSyxFQUFFO0FBQUUzRixlQUFLLEVBQUxBLEtBQUY7QUFBU3NGLG9CQUFVLEVBQUUsR0FBckI7QUFBMEJDLGtCQUFRLEVBQUU7QUFBcEMsU0FBWDtBQUFBLCtCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFzUkE7O0dBaGF1QmxHLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDIwNDkyY2U4OWVmM2MwNmFiNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW52ZXJ0IGZyb20gJy4uL3B1YmxpYy9pbnZlcnQnXHJcblxyXG5pbXBvcnQgU2V0dGluZ3NNZW51IGZyb20gJ0Bjb21wb25lbnRzL3NldHRpbmdzJ1xyXG5pbXBvcnQgUXVvdGVPZlRoZURheSBmcm9tICdAY29tcG9uZW50cy9xb3RkJ1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlTGlzdGVuZXIgfSBmcm9tIFwia2V5Ym9hcmRpc3RcIjtcclxuaW1wb3J0IHsgQmluZGluZywgRG9jdW1lbnQgfSBmcm9tICdAcHVibGljL0B0eXBlcy9kb2N1bWVudCdcclxuXHJcbmltcG9ydCB7IEFycm93UmlnaHQsIEJveCwgQ2hlY2ssIEV5ZSwgUGx1cywgU2V0dGluZ3MsIFNxdWFyZSwgVHJhc2gsIFggfSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnQGNvbXBvbmVudHMvc2NlbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cdGNvbnN0IFsgZGF0ZSwgc2V0RGF0ZSBdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblx0Y29uc3QgWyBiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbIHF1b3RlT2ZUaGVEYXksIHNldFF1b3RlT2ZUaGVEYXkgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3QgY29sb3IgPSBcIiNmZmZmZmZcIjsgLy9gIyR7aW52ZXJ0KGJhY2tncm91bmQ/LmNvbG9yID8gYmFja2dyb3VuZC5jb2xvciA6ICcjMDAwMDAwJyl9YDtcclxuXHRcclxuXHRjb25zdCBbIHRvZG8sIHNldFRvZG8gXSA9IHVzZVN0YXRlKChwcm9jZXNzLmJyb3dzZXIpICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb1wiKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvXCIpKSA6IFtdKVxyXG5cdGNvbnN0IFsgZG9jdW1lbnRTZXR0aW5ncywgc2V0RG9jdW1lbnRTZXR0aW5ncyBdID0gdXNlU3RhdGU8RG9jdW1lbnQ+KFxyXG5cdFx0KHByb2Nlc3MuYnJvd3NlcikgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSA/IFxyXG5cdFx0XHRKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2V0dGluZ3NcIiksIChrLHYpID0+IHR5cGVvZiB2ID09PSBcInN0cmluZ1wiID8gKHYuc3RhcnRzV2l0aCgnZnVuY3Rpb24nKSA/IGV2YWwoXCIoXCIrditcIilcIikgOiB2KTogdikgXHJcblx0XHQ6IFxyXG5cdFx0e1xyXG5cdFx0XHRzdGF0ZXM6IHtcclxuXHRcdFx0XHRlZGl0aW5nVGl0bGU6IGZhbHNlLFxyXG5cdFx0XHRcdHNldHRpbmdzT3BlbjogZmFsc2UsXHJcblx0XHRcdFx0c2VhcmNoT3BlbjogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHR0aXRsZTogJ3RoaW5ncyB0byBkbycsXHJcblx0XHRcdFx0c2hvd1RvRG86IHRydWUsXHJcblx0XHRcdFx0c2hvd0FkczogZmFsc2UsXHJcblx0XHRcdFx0aG91cjI0OiBmYWxzZSxcclxuXHRcdFx0XHRzaG9ydERhdGU6IGZhbHNlLFxyXG5cdFx0XHRcdHF1b3RlT2ZUaGVEYXk6IGZhbHNlLFxyXG5cdFx0XHRcdGJhY2tncm91bmRUeXBlOiAnc3RhbmRhcmQnICAvL3N0YW5kYXJkLCBjaGFvcywgY3VzdG9tXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvd2VydG9vbHM6IHtcclxuXHRcdFx0XHRzZWFyY2hfZW5naW5lOiBcImR1Y2tkdWNrZ29cIixcclxuXHRcdFx0XHRwb3dlcmJpbmRzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XHRiaW5kOiAncycsXHJcblx0XHRcdFx0XHRcdGFjdGlvbjogKHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGBodHRwczovL2R1Y2tkdWNrZ28uY29tLz9xPSR7c3RyaW5nfWApXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcInNldHRpbmdzXCIsXHJcblx0XHRcdFx0XHRcdGJpbmQ6ICd2JyxcclxuXHRcdFx0XHRcdFx0YWN0aW9uOiAoc3RyaW5nKSA9PiB7XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwidGFza1wiLFxyXG5cdFx0XHRcdFx0XHRiaW5kOiAndCcsXHJcblx0XHRcdFx0XHRcdGFjdGlvbjogKHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSZWNpZXZlZDo6ICR7c3RyaW5nfWApO1xyXG5cdFx0XHJcblx0XHRcdFx0XHRcdFx0dG9kby5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdGVkaXRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBzdHJpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZWQ6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9cIiwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJ3aWtpcGVkaWFcIixcclxuXHRcdFx0XHRcdFx0YmluZDogJ3cnLFxyXG5cdFx0XHRcdFx0XHRhY3Rpb246IChzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8ke3N0cmluZ31gXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoIXByb2Nlc3MuYnJvd3NlcikgcmV0dXJuO1xyXG5cdFx0XHJcblx0XHQvL0B0cy1leHBlY3QtZXJyb3JcclxuXHRcdGNvbnN0IGxpc3RlbmVyID0gbmV3IGNyZWF0ZUxpc3RlbmVyKCk7XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoID0gbGlzdGVuZXIuc3Vic2NyaWJlKCdTbGFzaCcsICgpID0+IHtcclxuXHRcdFx0Ly9AdHMtZXhwZWN0LWVycm9yXHJcblx0XHRcdGlmKGRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLnNlYXJjaE9wZW4gJiYgc2VhcmNoUmVmLmN1cnJlbnQpIHNlYXJjaFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcblx0XHRcdGVsc2Ugc2V0RG9jdW1lbnRTZXR0aW5ncyh7IC4uLmRvY3VtZW50U2V0dGluZ3MsIHN0YXRlczogeyAuLi5kb2N1bWVudFNldHRpbmdzLnN0YXRlcywgc2VhcmNoT3BlbjogdHJ1ZSwgb25TZWFyY2hDb21wbGV0aW9uOiBudWxsIH19KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHJlc2V0U3RhdGUgPSBsaXN0ZW5lci5zdWJzY3JpYmUoJ1NoaWZ0K0Rvd24nLCAoKSA9PiB7XHJcblx0XHRcdHNldERvY3VtZW50U2V0dGluZ3MobnVsbCk7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2V0dGluZ3NcIik7XHJcblxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkb2N1bWVudFNldHRpbmdzPy5wb3dlcnRvb2xzPy5wb3dlcmJpbmRzLm1hcCgocG93ZXJiaW5kOiBCaW5kaW5nKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHBvd2VyYmluZCk7XHJcblxyXG5cdFx0XHRsaXN0ZW5lci5zdWJzY3JpYmUoYFNoaWZ0K2tleSR7cG93ZXJiaW5kLmJpbmR9YCwgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xyXG5cclxuXHRcdFx0XHRzZXREb2N1bWVudFNldHRpbmdzKHsgXHJcblx0XHRcdFx0XHQuLi5kb2N1bWVudFNldHRpbmdzLCBcclxuXHRcdFx0XHRcdHN0YXRlczogeyBcclxuXHRcdFx0XHRcdFx0Li4uZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMsIFxyXG5cdFx0XHRcdFx0XHRzZWFyY2hPcGVuOiB0cnVlLCBcclxuXHRcdFx0XHRcdFx0b25TZWFyY2hDb21wbGV0aW9uOiBwb3dlcmJpbmQgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0bGlzdGVuZXIuc3RvcExpc3RlbmluZygpO1xyXG5cdFx0fVxyXG4gIFx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJDb21wb25lbnQgU3RhcnRlZFwiKTtcclxuXHRcdGNvbnNvbGUubG9nKGRvY3VtZW50U2V0dGluZ3MpXHJcblxyXG5cdFx0Y29uc3QgcmVwZWF0ID0gKCkgPT4ge1xyXG5cdFx0XHRzZXREYXRlKG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KHJlcGVhdCwgMTAwKVxyXG5cdFx0fVxyXG5cclxuXHRcdHNldFRpbWVvdXQocmVwZWF0LCAxMDApO1xyXG5cclxuXHRcdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdC8vIGFwaS51bnNwbGFzaC5jb20vcGhvdG8vXzh6ZmdUOWtTMmcmY2xpZW50X2lkPVhZVWN6Ykd4N2ZZX2VvRTFEd3QxS3BNMDRoSVJ0d1R2OGxMYWlTa044cDQgLSBTaW5nbGUgUGhvdG8gKDE1MzgxNTApICgxMzY4NzQ3IC0gVFhUVVJFUykgKDEwNDE5ODMgLSBCRydzKVxyXG5cdFx0XHQvLyBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbS8/Y29sbGVjdGlvbnM9MTM2ODc0NyZjb3VudD0xJmNsaWVudF9pZD1YWVVjemJHeDdmWV9lb0UxRHd0MUtwTTA0aElSdHdUdjhsTGFpU2tOOHA0XHJcblx0XHRcdC8vIHNldEJhY2tncm91bmQoKGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9hUWNFM2dEU1NUWT9jbGllbnRfaWQ9WFlVY3piR3g3ZllfZW9FMUR3dDFLcE0wNGhJUnR3VHY4bExhaVNrTjhwNCcpKS5kYXRhKTtcclxuXHRcdFx0Ly8gZG9jdW1lbnRTZXR0aW5ncy5zZXR0aW5ncy5xdW90ZU9mVGhlRGF5ID8/IHNldFF1b3RlT2ZUaGVEYXkoKGF3YWl0IChhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9xdW90ZXMucmVzdC9xb2QuanNvbicpKS5kYXRhKSk7XHJcblx0XHR9KSgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2V0dGluZ3NcIiwgSlNPTi5zdHJpbmdpZnkoZG9jdW1lbnRTZXR0aW5ncywgKGssdikgPT4gdHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIiA/IFwiXCIgKyB2IDogdikpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJTZXR0aW5ncyBVcGRhdGVkXCIpO1xyXG5cdH0sIFtkb2N1bWVudFNldHRpbmdzXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17XHJcblx0XHRcdChkb2N1bWVudFNldHRpbmdzLnNldHRpbmdzLmJhY2tncm91bmRUeXBlID09IFwiY2hhb3NcIikgP1xyXG5cdFx0XHR7IFx0XHJcblx0XHRcdFx0YmFja2dyb3VuZDogJ3JnYigwLCAwLCAwKScsXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmkueXRpbWcuY29tJTJGdmklMkY4dm9EZ1Voc2tMbyUyRm1heHJlc2RlZmF1bHQuanBnJmY9MSZub2ZiPTEpJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJ1xyXG5cdFx0XHR9XHJcblx0XHRcdDpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmQ/LnVybHM/LnJhdyA/IGJhY2tncm91bmQudXJscy5yYXcgOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTc2NDIxNzEzMTQtMjc2YmI3NjQxNTM2P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNzAwJnE9ODAnfSlgLCBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgXHJcblx0XHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcidcclxuXHRcdFx0fX0+XHJcblxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+TmV3IFRhYjwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZG9jdW1lbnRTZXR0aW5ncy5zZXR0aW5ncy5iYWNrZ3JvdW5kVHlwZSA9PSAnY2hhb3MnICYmIFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0gPlxyXG5cdFx0XHRcdFx0PFNjZW5lIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGV9PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdChkb2N1bWVudFNldHRpbmdzLnNldHRpbmdzLnNob3dBZHMpIFxyXG5cdFx0XHRcdFx0XHQmJlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMyBzdHlsZT17eyBjb2xvcjogIGNvbG9yIH19PkFEPC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0KGRvY3VtZW50U2V0dGluZ3Muc2V0dGluZ3MucXVvdGVPZlRoZURheSkgJiYgPFF1b3RlT2ZUaGVEYXkgcW90ZD17cXVvdGVPZlRoZURheX0gY29sb3I9e2NvbG9yfSAvPlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG5cdFx0XHRcdFx0PGgxIHN0eWxlPXt7IGNvbG9yOiAgY29sb3IgfX0+XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQoZG9jdW1lbnRTZXR0aW5ncy5zZXR0aW5ncy5ob3VyMjQpID9cclxuXHRcdFx0XHRcdFx0XHRkYXRlLmdldEhvdXJzKCkgXHJcblx0XHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRcdGRhdGUuZ2V0SG91cnMoKSA+IDEyID8gZGF0ZS5nZXRIb3VycygpLTEyIDogZGF0ZS5nZXRIb3VycygpIFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHQoZGF0ZS5nZXRNaW51dGVzKCkgPCAxMCkgPyBgMCR7ZGF0ZS5nZXRNaW51dGVzKCl9YCA6IGRhdGUuZ2V0TWludXRlcygpIFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fT57ZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7ICB3ZWVrZGF5OiAnbG9uZycsIGRheTogJzItZGlnaXQnLCBtb250aDogKGRvY3VtZW50U2V0dGluZ3Muc2V0dGluZ3Muc2hvcnREYXRlKSA/ICdzaG9ydCcgOiAnbG9uZycgfSkudG9VcHBlckNhc2UoKX08L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8U2V0dGluZ3MgY29sb3I9e1wiI2Y0ZjRmNDBlXCJ9IHNpemU9ezIwfSBvbkNsaWNrPXsoKSA9PiBzZXREb2N1bWVudFNldHRpbmdzKHsuLi5kb2N1bWVudFNldHRpbmdzLCBzdGF0ZXM6IHsgLi4uZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMsIHNldHRpbmdzT3BlbjogIWRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLnNldHRpbmdzT3BlbiB9IH0pfS8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMuc2VhcmNoT3BlbiA/XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWFyY2h9ICR7c3R5bGVzLnNlYXJjaEFjdGl2ZX1gfSBvbkNsaWNrPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQpXHJcblx0XHRcdFx0XHQvL0B0cy1leHBlY3QtZXJyb3JcclxuXHRcdFx0XHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhzdHlsZXMuc2VhcmNoKSkgc2V0RG9jdW1lbnRTZXR0aW5ncyh7IC4uLmRvY3VtZW50U2V0dGluZ3MsIHN0YXRlczogeyAuLi5kb2N1bWVudFNldHRpbmdzLnN0YXRlcywgc2VhcmNoT3BlbjogZmFsc2UgfX0pXHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hSZXN1bHRzfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBsdXMgc2l6ZT17MTV9IGNvbG9yPXtcIiMzYjNiM2JcIn0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+TmV3IFRhc2s8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0PGRpdiBpZD17XCJzZWFyY2hcIn0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRGl2fSBvbkNsaWNrPXsoKSA9PiB7Y29uc29sZS5sb2coXCJFdmVudCBTdWNrZWQuXCIpfX0+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPXtgLyR7ZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMub25TZWFyY2hDb21wbGV0aW9uPy5iaW5kfVxcdCR7ZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMub25TZWFyY2hDb21wbGV0aW9uPy50aXRsZX1gfSByZWY9e3NlYXJjaFJlZn0gYXV0b0ZvY3VzIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihldmVudC5rZXkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSBcImVzY2FwZVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldERvY3VtZW50U2V0dGluZ3MoeyAuLi5kb2N1bWVudFNldHRpbmdzLCBzdGF0ZXM6IHsgLi4uZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMsIHNlYXJjaE9wZW46IGZhbHNlIH19KVxyXG5cdFx0XHRcdFx0XHRcdFx0fWVsc2UgaWYoZXZlbnQua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gXCJlbnRlclwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vQHRzLWV4cGVjdC1lcnJvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudFNldHRpbmdzLnN0YXRlcy5vblNlYXJjaENvbXBsZXRpb24/LmFjdGlvbihzZWFyY2hSZWYuY3VycmVudC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vQHRzLWV4cGVjdC1lcnJvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWFyY2hSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH19PjwvaW5wdXQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaChkb2N1bWVudFNldHRpbmdzLnN0YXRlcy5vblNlYXJjaENvbXBsZXRpb24/LnRpdGxlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2VhcmNoJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8QXJyb3dSaWdodCBzaXplPXsxNX0gY29sb3I9e1wiIzNiM2IzYlwifSBvcGFjaXR5PXtcIjAuN1wifS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAndGFzayc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFBsdXMgc2l6ZT17MTV9IGNvbG9yPXtcIiMzYjNiM2JcIn0gb3BhY2l0eT17XCIwLjdcIn0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPEFycm93UmlnaHQgc2l6ZT17MTV9IGNvbG9yPXtcIiMzYjNiM2JcIn0gb3BhY2l0eT17XCIwLjdcIn0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KSgpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDpcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+PC9kaXY+XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTaWRlfT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQocHJvY2Vzcy5icm93c2VyICYmIGRvY3VtZW50U2V0dGluZ3Muc2V0dGluZ3Muc2hvd1RvRG8pID9cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0hlYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnRTZXR0aW5ncy5zdGF0ZXMuZWRpdGluZ1RpdGxlID9cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtkb2N1bWVudFNldHRpbmdzLnNldHRpbmdzLnRpdGxlfSBcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RG9jdW1lbnRTZXR0aW5ncyh7Li4uZG9jdW1lbnRTZXR0aW5ncywgc2V0dGluZ3M6IHsgLi4uZG9jdW1lbnRTZXR0aW5ncy5zZXR0aW5ncywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH19KX0gXHJcblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGUua2V5ID09IFwiRW50ZXJcIikgc2V0RG9jdW1lbnRTZXR0aW5ncyh7Li4uZG9jdW1lbnRTZXR0aW5ncywgc3RhdGVzOiB7IC4uLmRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLCBlZGl0aW5nVGl0bGU6IGZhbHNlIH0gfSlcclxuXHRcdFx0XHRcdFx0XHRcdH19IGF1dG9Gb2N1cy8+XHJcblx0XHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDIgb25DbGljaz17KCkgPT4gc2V0RG9jdW1lbnRTZXR0aW5ncyh7Li4uZG9jdW1lbnRTZXR0aW5ncywgc3RhdGVzOiB7IC4uLmRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLCBlZGl0aW5nVGl0bGU6IHRydWUgfSB9KX0+e2RvY3VtZW50U2V0dGluZ3Muc2V0dGluZ3MudGl0bGV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxQbHVzIGNvbG9yPXtcIiMwMDAwMDBcIn0gc2l6ZT17MjB9IHN0cm9rZVdpZHRoPXsxLjV9IG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRvZG8ucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVkaXRhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlZDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvXCIsIEpTT04uc3RyaW5naWZ5KHRvZG8pKTtcclxuXHRcdFx0XHRcdFx0XHR9fS8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9Cb2R5fT5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0b2RvLm1hcCgoZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17YFRPRE8ke2luZGV4fWB9IG9uQ2xpY2s9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkRJVlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZG9baW5kZXhdLmNvbXBsZXRlZCA9ICF0b2RvW2luZGV4XS5jb21wbGV0ZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdChlLmVkaXRhYmxlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0P1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtlLnRpdGxlfSBwbGFjZWhvbGRlcj17XCJDbGljayB0byBlZGl0IG1lXCJ9IG9uQmx1cj17KGUpID0+IHsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9kb1tpbmRleF0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlZGl0YWJsZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZS50YXJnZXQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZWQ6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSBvbktleURvd249eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoZS5rZXkgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b2RvW2luZGV4XSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVkaXRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGUudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSBhdXRvRm9jdXMvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17KGUuY29tcGxldGVkKSA/IHN0eWxlcy5jb21wbGV0ZWRUYXNrIDogc3R5bGVzLnVuY29tcGxldGVkVGFzayB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG9MYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgb25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9kb1tpbmRleF0uZWRpdGFibGUgPSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+e2UudGl0bGV9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZS5jb21wbGV0ZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0P1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVjayBjb2xvcj17KGUuY29tcGxldGVkKSA/IFwiIzIyNmQzOFwiIDogXCIjM2IzYjNiXCJ9IHNpemU9ezIwfSAgb25DbGljaz17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZG9baW5kZXhdLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvXCIsIEpTT04uc3RyaW5naWZ5KHRvZG8pKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTcXVhcmUgY29sb3I9eyhlLmNvbXBsZXRlZCkgPyBcIiMyMjZkMzhcIiA6IFwiIzNiM2IzYlwifSBzaXplPXsyMH0gb25DbGljaz17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZG9baW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9cIiwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUcmFzaCBjb2xvcj17KGUuY29tcGxldGVkKSA/IFwiIzIyNmQzOFwiIDogXCIjM2IzYjNiXCJ9IHNpemU9ezIwfSBvbkNsaWNrPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZG8uc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9cIiwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSBvbk1vdXNlT3Zlcj17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL0B0cy1leHBlY3QtZXJyb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihlLnRhcmdldC5ub2RlTmFtZSA9PSAncGF0aCcgfHwgZS50YXJnZXQubm9kZU5hbWUgPT0gJ3BvbHlsaW5lJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9AdHMtZXhwZWN0LWVycm9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGVzLnRvZG9UcmFzaEhvdmVyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vQHRzLWV4cGVjdC1lcnJvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZXMudG9kb1RyYXNoSG92ZXIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9AdHMtZXhwZWN0LWVycm9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoZS50YXJnZXQubm9kZU5hbWUgPT0gJ3BhdGgnIHx8IGUudGFyZ2V0Lm5vZGVOYW1lID09ICdwb2x5bGluZScpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vQHRzLWV4cGVjdC1lcnJvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy50b2RvVHJhc2hIb3ZlcilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL0B0cy1leHBlY3QtZXJyb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnRvZG9UcmFzaEhvdmVyKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHQ8PjwvPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLnNldHRpbmdzT3BlbiA/XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc092ZXJsYXl9IGlkPXtcInNldHRpbmdzQmFja2dyb3VuZFwifSBvbkNsaWNrPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly9AdHMtZXhwZWN0LWVycm9yXHJcblx0XHRcdFx0XHRpZihlLnRhcmdldC5pZCA9PSAnc2V0dGluZ3NCYWNrZ3JvdW5kJykgc2V0RG9jdW1lbnRTZXR0aW5ncyh7Li4uZG9jdW1lbnRTZXR0aW5ncywgc3RhdGVzOiB7IC4uLmRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLCBzZXR0aW5nc09wZW46ICFkb2N1bWVudFNldHRpbmdzLnN0YXRlcy5zZXR0aW5nc09wZW4gfSB9KVxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc0hlYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0PGgyPnNldHRpbmdzPC9oMj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PFggY29sb3I9e1wiIzNiM2IzYlwifSBzaXplPXsyMH0gb25DbGljaz17KCkgPT4gc2V0RG9jdW1lbnRTZXR0aW5ncyh7Li4uZG9jdW1lbnRTZXR0aW5ncywgc3RhdGVzOiB7IC4uLmRvY3VtZW50U2V0dGluZ3Muc3RhdGVzLCBzZXR0aW5nc09wZW46IGZhbHNlIH0gfSl9Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzQm9keX0+XHJcblx0XHRcdFx0XHRcdFx0PFNldHRpbmdzTWVudSBzZXR0aW5ncz17ZG9jdW1lbnRTZXR0aW5nc30gY2FsbGJhY2s9e3NldERvY3VtZW50U2V0dGluZ3N9Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6XHJcblx0XHRcdFx0PD48Lz5cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9DcmVkaXR9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRvY3VtZW50U2V0dGluZ3Muc2V0dGluZ3MuYmFja2dyb3VuZFR5cGUgPT0gJ3N0YW5kYXJkJyA/XHJcblx0XHRcdFx0XHQ8aDYgc3R5bGU9e3sgY29sb3IsIGZvbnRXZWlnaHQ6IDEwMCwgZm9udFNpemU6ICcxMnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PHA+UGhvdG8gYnk8L3A+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2BodHRwczovL3Vuc3BsYXNoLmNvbS9AJHtiYWNrZ3JvdW5kPy51c2VyPy51c2VybmFtZX1gfT57YmFja2dyb3VuZD8udXNlcj8ubmFtZX0ge2JhY2tncm91bmQ/LnVzZXI/Lmxhc3ROYW1lfTwvYT5cclxuXHRcdFx0XHRcdDwvaDY+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHQ8aDYgc3R5bGU9e3sgY29sb3IsIGZvbnRXZWlnaHQ6IDEwMCwgZm9udFNpemU6ICcxMnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PHA+TG9yZW56IENoYW9zIEF0dHJhY3RvcjwvcD5cclxuXHRcdFx0XHRcdDwvaDY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdHtcclxuXHRcdC8qIFxyXG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e1wiU2VhcmNoXCJ9IG9uS2V5RG93bj17KGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblxyXG5cdFx0XHRpZihlLmtleSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYGh0dHBzOi8vZHVja2R1Y2tnby5jb20vP3E9JHtlLnRhcmdldC52YWx1ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fX0vPiBcclxuXHRcdCovXHJcblx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==