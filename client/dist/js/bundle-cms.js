/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle-cms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/lang/src/en.json":
/***/ (function(module, exports) {

module.exports = {"MultiFactorAuthentication.HOW_MFA_WORKS":"How multi-factor authentication works","MultiFactorAuthentication.TITLE":"Add extra security to your account","MultiFactorAuthentication.HOW_IT_WORKS":"How it works","MultiFactorAuthentication.EXTRA_LAYER_IMAGE_ALT":"Shields indicating additional protection","MultiFactorAuthentication.EXTRA_LAYER_TITLE":"Extra layer of protection","MultiFactorAuthentication.EXTRA_LAYER_DESCRIPTION":"Every time you log into your account, you'll need your password and an additional form of verification.","MultiFactorAuthentication.UNIQUE_IMAGE_ALT":"Person with tick indicating uniqueness","MultiFactorAuthentication.UNIQUE_TITLE":"Unique to you","MultiFactorAuthentication.UNIQUE_DESCRIPTION":"This verification is only available to you. Even if someone gets your password, they will not be able to access your account.","MultiFactorAuthentication.GET_STARTED":"Get started","MultiFactorAuthentication.SETUP_LATER":"Setup later","MultiFactorAuthentication.ADD_ANOTHER_METHOD":"Add another MFA method","MultiFactorAuthentication.ADD_FIRST_METHOD":"Add an MFA method","MultiFactorAuthentication.REGISTERED":"{method}: Registered","MultiFactorAuthentication.DEFAULT_REGISTERED":"{method} (default): Registered","MultiFactorAuthentication.BACKUP_REGISTERED":"{method}: Created {date}","MultiFactorAuthentication.RESET_METHOD":"Reset","MultiFactorAuthentication.REMOVE_METHOD":"Remove","MultiFactorAuthentication.SET_AS_DEFAULT":"Set as default method","MultiFactorAuthentication.NO_METHODS_REGISTERED":"No MFA methods have been registered. Add one using the button below","MultiFactorAuthentication.NO_METHODS_REGISTERED_READONLY":"This member has not registered any MFA methods yet","MultiFactorAuthentication.SELECT_METHOD":"Select a verification method","MultiFactorAuthentication.SETUP_COMPLETE_TITLE":"Multi-factor authentication is now set up","MultiFactorAuthentication.ACCOUNT_RESET_TITLE":"Help user reset account","MultiFactorAuthentication.ACCOUNT_RESET_DESCRIPTION":"Ensure that the person requesting a reset is the real person associated with this account before proceeding. An email will be sent to the member's address with a link to reset both their password and multi-factor authentication methods.","MultiFactorAuthentication.ACCOUNT_RESET_ACTION":"Send account reset email","MultiFactorAuthentication.ACCOUNT_RESET_SENDING":"Sending...","MultiFactorAuthentication.ACCOUNT_RESET_SENDING_SUCCESS":"An email has been sent.","MultiFactorAuthentication.ACCOUNT_RESET_SENDING_FAILURE":"We were unable to send an email, please try again later.","MultiFactorAuthentication.ACCOUNT_RESET_CONFIRMATION":"You are about to reset this account. Their password and multi-factor authentication will be reset. Continue?","MultiFactorAuthentication.ACCOUNT_RESET_CONFIRMATION_BUTTON":"Yes, send reset email","MultiFactorAuthentication.DEFAULT_CONFIRM_BUTTON":"Confirm","MultiFactorAuthentication.DEFAULT_CONFIRM_DISMISS_BUTTON":"Cancel","MultiFactorAuthentication.DELETE_CONFIRMATION":"Are you sure you want to remove this method","MultiFactorAuthentication.CONFIRMATION_TITLE":"Are you sure?","MultiFactorAuthentication.DELETE_CONFIRMATION_BUTTON":"Remove method","MultiFactorAuthentication.RESET_BACKUP_CONFIRMATION":"All existing codes will be made invalid and new codes will be created","MultiFactorAuthentication.RESET_BACKUP_CONFIRMATION_BUTTON":"Reset codes","MultiFactorAuthentication.ADMIN_SETUP_COMPLETE_CONTINUE":"Your settings have been updated"}

/***/ }),

/***/ "./client/src/boot/cms/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/cms/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerReducers = __webpack_require__("./client/src/boot/cms/registerReducers.js");

var _registerReducers2 = _interopRequireDefault(_registerReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
  (0, _registerReducers2.default)();
});

/***/ }),

/***/ "./client/src/boot/cms/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _Register = __webpack_require__("./client/src/components/Register.js");

var _Register2 = _interopRequireDefault(_Register);

var _RegisteredMFAMethodListField = __webpack_require__("./client/src/components/FormField/RegisteredMFAMethodListField/RegisteredMFAMethodListField.js");

var _RegisteredMFAMethodListField2 = _interopRequireDefault(_RegisteredMFAMethodListField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  (0, _registerComponents2.default)();

  _Injector2.default.component.registerMany({
    MFARegister: _Register2.default,
    RegisteredMFAMethodListField: _RegisteredMFAMethodListField2.default
  });
};

/***/ }),

/***/ "./client/src/boot/cms/registerReducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _registerReducers = __webpack_require__("./client/src/boot/registerReducers.js");

var _registerReducers2 = _interopRequireDefault(_registerReducers);

var _reducer = __webpack_require__("./client/src/state/mfaAdministration/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  (0, _registerReducers2.default)();

  _Injector2.default.reducer.register('mfaAdministration', _reducer2.default);
};

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Register = __webpack_require__("./client/src/components/BackupCodes/Register.js");

var _Register2 = _interopRequireDefault(_Register);

var _Verify = __webpack_require__("./client/src/components/BackupCodes/Verify.js");

var _Verify2 = _interopRequireDefault(_Verify);

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    BackupCodeRegister: _Register2.default,
    BackupCodeVerify: _Verify2.default
  });
};

/***/ }),

/***/ "./client/src/boot/registerReducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _reducer = __webpack_require__("./client/src/state/mfaRegister/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__("./client/src/state/mfaVerify/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.reducer.register('mfaRegister', _reducer2.default);
  _Injector2.default.reducer.register('mfaVerify', _reducer4.default);
};

/***/ }),

/***/ "./client/src/bundles/bundle-cms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/index.js");
__webpack_require__("./client/src/boot/cms/index.js");

/***/ }),

/***/ "./client/src/components/BackupCodes/Register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _printd = __webpack_require__("./node_modules/printd/index.js");

var _printd2 = _interopRequireDefault(_printd);

var _reactCopyToClipboard = __webpack_require__("./node_modules/react-copy-to-clipboard/lib/index.js");

var _formatCode = __webpack_require__("./client/src/lib/formatCode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      recentlyCopied: false
    };

    _this.printRef = null;
    _this.setPrintRef = function (element) {
      _this.printRef = element;
    };

    _this.copyMessageTimeout = null;

    _this.handlePrint = _this.handlePrint.bind(_this);
    _this.handleCopy = _this.handleCopy.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'getFormattedCodes',
    value: function getFormattedCodes() {
      var codes = this.props.codes;


      return codes.map(function (code) {
        return (0, _formatCode.formatCode)(code);
      });
    }
  }, {
    key: 'handlePrint',
    value: function handlePrint(event) {
      event.preventDefault();

      new _printd2.default().print(this.printRef, ['body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif }']);
    }
  }, {
    key: 'handleCopy',
    value: function handleCopy(event) {
      var _this2 = this;

      event.preventDefault();
      var copyFeedbackDuration = this.props.copyFeedbackDuration;


      this.setState({
        recentlyCopied: true
      });

      if (this.copyMessageTimeout) {
        clearTimeout(this.copyMessageTimeout);
      }

      this.copyMessageTimeout = setTimeout(function () {
        _this2.setState({
          recentlyCopied: false
        });
      }, copyFeedbackDuration);
    }
  }, {
    key: 'renderCodes',
    value: function renderCodes() {
      return _react2.default.createElement(
        'pre',
        { ref: this.setPrintRef, className: 'mfa-register-backup-codes__code-grid' },
        this.getFormattedCodes().map(function (code) {
          return _react2.default.createElement(
            'div',
            { key: code },
            code
          );
        })
      );
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription() {
      var _window = window,
          i18n = _window.ss.i18n;
      var _props$method = this.props.method,
          supportLink = _props$method.supportLink,
          supportText = _props$method.supportText;


      return _react2.default.createElement(
        'p',
        null,
        i18n._t('MFABackupCodesRegister.DESCRIPTION', 'Recovery codes enable you to log into your account in the event your primary ' + 'authentication is not available. Each code can only be used once. Store these codes ' + 'somewhere safe, as they will not be viewable after leaving this page.'),
        '\xA0',
        supportLink && _react2.default.createElement(
          'a',
          {
            href: supportLink,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          supportText || i18n._t('MFARegister.RECOVERY_HELP', 'Learn more about recovery codes.')
        )
      );
    }
  }, {
    key: 'renderPrintAction',
    value: function renderPrintAction() {
      var _window2 = window,
          i18n = _window2.ss.i18n;


      return _react2.default.createElement(
        'button',
        { type: 'button', onClick: this.handlePrint, className: 'btn btn-link' },
        i18n._t('MFABackupCodesRegister.PRINT', 'Print codes')
      );
    }
  }, {
    key: 'renderDownloadAction',
    value: function renderDownloadAction() {
      var _props = this.props,
          codes = _props.codes,
          method = _props.method;
      var _window3 = window,
          Blob = _window3.Blob,
          URL = _window3.URL,
          i18n = _window3.ss.i18n;


      var codesText = codes.join('\r\n');
      var codesBlob = new Blob([codesText]);
      var codesURL = URL.createObjectURL(codesBlob);

      return _react2.default.createElement(
        'a',
        { download: method.name + '.txt', href: codesURL, className: 'btn btn-link' },
        i18n._t('MFABackupCodesRegister.DOWNLOAD', 'Download')
      );
    }
  }, {
    key: 'renderCopyAction',
    value: function renderCopyAction() {
      var codes = this.props.codes;
      var recentlyCopied = this.state.recentlyCopied;
      var _window4 = window,
          i18n = _window4.ss.i18n;


      var label = recentlyCopied ? i18n._t('MFABackupCodesRegister.COPY_RECENT', 'Copied!') : i18n._t('MFABackupCodesRegister.COPY', 'Copy codes');

      return _react2.default.createElement(
        _reactCopyToClipboard.CopyToClipboard,
        { text: codes.join('\n') },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'mfa-register-backup-codes__copy-to-clipboard btn btn-link',
            onClick: this.handleCopy
          },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var onCompleteRegistration = this.props.onCompleteRegistration;
      var _window5 = window,
          i18n = _window5.ss.i18n;


      return _react2.default.createElement(
        'div',
        { className: 'mfa-register-backup-codes__container' },
        this.renderDescription(),
        this.renderCodes(),
        _react2.default.createElement(
          'div',
          { className: 'mfa-register-backup-codes__helper-links' },
          this.renderPrintAction(),
          this.renderDownloadAction(),
          this.renderCopyAction()
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary', onClick: function onClick() {
              return onCompleteRegistration();
            } },
          i18n._t('MFABackupCodesRegister.FINISH', 'Finish')
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

Register.propTypes = {
  codes: _propTypes2.default.arrayOf(_propTypes2.default.string),

  copyFeedbackDuration: _propTypes2.default.number
};

Register.defaultProps = {
  copyFeedbackDuration: 3000
};

exports.default = Register;

/***/ }),

/***/ "./client/src/components/BackupCodes/Verify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verify = function (_Component) {
  _inherits(Verify, _Component);

  function Verify(props) {
    _classCallCheck(this, Verify);

    var _this = _possibleConstructorReturn(this, (Verify.__proto__ || Object.getPrototypeOf(Verify)).call(this, props));

    _this.state = {
      value: ''
    };

    _this.codeInput = _react2.default.createRef();

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleCompleteVerification = _this.handleCompleteVerification.bind(_this);
    return _this;
  }

  _createClass(Verify, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.codeInput.current) {
        this.codeInput.current.focus();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: 'handleCompleteVerification',
    value: function handleCompleteVerification(event) {
      event.preventDefault();

      var onCompleteVerification = this.props.onCompleteVerification;


      onCompleteVerification({ code: this.state.value });
    }
  }, {
    key: 'renderControls',
    value: function renderControls() {
      var moreOptionsControl = this.props.moreOptionsControl;
      var _window = window,
          i18n = _window.ss.i18n;


      return _react2.default.createElement(
        'ul',
        { className: 'mfa-action-list' },
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-primary',
              disabled: this.state.value.length === 0,
              onClick: this.handleCompleteVerification
            },
            i18n._t('MFABackupCodesVerify.NEXT', 'Next')
          )
        ),
        moreOptionsControl && _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          moreOptionsControl
        )
      );
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription() {
      var _window2 = window,
          i18n = _window2.ss.i18n;
      var method = this.props.method;


      return _react2.default.createElement(
        'p',
        null,
        i18n._t('MFABackupCodesVerify.DESCRIPTION', 'Use one of the recovery codes you received'),
        '\xA0',
        method && method.supportLink && _react2.default.createElement(
          'a',
          {
            href: method.supportLink,
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          i18n._t('MFARegister.RECOVERY_HELP', 'How to use recovery codes.')
        )
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var error = this.props.error;
      var _window3 = window,
          i18n = _window3.ss.i18n;

      var label = i18n._t('MFABackupCodesVerify.LABEL', 'Enter recovery code');
      var formGroupClasses = (0, _classnames2.default)('mfa-verify-backup-codes__input-container form-group', {
        'has-error': !!error
      });

      return _react2.default.createElement(
        'div',
        { className: formGroupClasses },
        _react2.default.createElement(
          'label',
          { htmlFor: 'backup-code', className: 'control-label' },
          label
        ),
        _react2.default.createElement('input', {
          className: 'mfa-verify-backup-codes__input form-control',
          type: 'text',
          placeholder: label,
          id: 'backup-code',
          ref: this.codeInput,
          onChange: this.handleChange
        }),
        error && _react2.default.createElement(
          'div',
          { className: 'help-block' },
          error
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          graphic = _props.graphic,
          leadInLabel = _props.leadInLabel;


      return _react2.default.createElement(
        'form',
        { className: 'mfa-verify-backup-codes__container' },
        _react2.default.createElement(
          'div',
          { className: 'mfa-verify-backup-codes__content' },
          this.renderDescription(),
          this.renderInput()
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { className: 'mfa-verify-backup-codes__image', src: graphic, alt: leadInLabel })
        ),
        this.renderControls()
      );
    }
  }]);

  return Verify;
}(_react.Component);

exports.default = Verify;

/***/ }),

/***/ "./client/src/components/FormField/RegisteredMFAMethodListField/AccountResetUI.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Config = __webpack_require__(5);

var _Config2 = _interopRequireDefault(_Config);

var _reactstrapConfirm = __webpack_require__("./node_modules/@silverstripe/reactstrap-confirm/dist/index.js");

var _reactstrapConfirm2 = _interopRequireDefault(_reactstrapConfirm);

var _LoadingIndicator = __webpack_require__("./client/src/components/LoadingIndicator.js");

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _CircleDash = __webpack_require__("./client/src/components/Icons/CircleDash.js");

var _CircleDash2 = _interopRequireDefault(_CircleDash);

var _CircleTick = __webpack_require__("./client/src/components/Icons/CircleTick.js");

var _CircleTick2 = _interopRequireDefault(_CircleTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var AccountResetUI = function (_Component) {
  _inherits(AccountResetUI, _Component);

  function AccountResetUI(props) {
    _classCallCheck(this, AccountResetUI);

    var _this = _possibleConstructorReturn(this, (AccountResetUI.__proto__ || Object.getPrototypeOf(AccountResetUI)).call(this, props));

    _this.state = {
      complete: false,
      failed: false,
      submitting: false
    };

    _this.handleSendReset = _this.handleSendReset.bind(_this);
    return _this;
  }

  _createClass(AccountResetUI, [{
    key: 'handleSendReset',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _window, i18n, confirmMessage, confirmTitle, buttonLabel, body;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _window = window, i18n = _window.ss.i18n;
                confirmMessage = i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_CONFIRMATION', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_CONFIRMATION']);
                confirmTitle = i18n._t('MultiFactorAuthentication.CONFIRMATION_TITLE', fallbacks['MultiFactorAuthentication.CONFIRMATION_TITLE']);
                buttonLabel = i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_CONFIRMATION_BUTTON', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_CONFIRMATION_BUTTON']);
                _context.next = 6;
                return (0, _reactstrapConfirm2.default)(confirmMessage, { title: confirmTitle, confirmLabel: buttonLabel });

              case 6:
                if (_context.sent) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return');

              case 8:

                this.setState({ submitting: true });

                body = JSON.stringify({ csrf_token: _Config2.default.get('SecurityID') });


                fetch(this.props.resetEndpoint, { method: 'POST', body: body }).then(function (response) {
                  return response.json();
                }).then(function (output) {
                  var failed = !!output.error;

                  _this2.setState({ complete: true, failed: failed, submitting: false });
                }).catch(function () {
                  _this2.setState({ complete: true, failed: true, submitting: false });
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSendReset() {
        return _ref.apply(this, arguments);
      }

      return handleSendReset;
    }()
  }, {
    key: 'renderAction',
    value: function renderAction() {
      var _window2 = window,
          i18n = _window2.ss.i18n;
      var resetEndpoint = this.props.resetEndpoint;
      var _state = this.state,
          complete = _state.complete,
          submitting = _state.submitting;


      if (complete || submitting) {
        return null;
      }

      return _react2.default.createElement(
        'p',
        { className: 'account-reset-action' },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-outline-secondary',
            disabled: !resetEndpoint,
            onClick: this.handleSendReset,
            type: 'button'
          },
          i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_ACTION', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_ACTION'])
        )
      );
    }
  }, {
    key: 'renderSending',
    value: function renderSending() {
      var _window3 = window,
          i18n = _window3.ss.i18n;


      return _react2.default.createElement(
        'p',
        { className: 'account-reset-action account-reset-action--sending' },
        _react2.default.createElement(
          'span',
          { className: 'account-reset-action__icon' },
          _react2.default.createElement(_LoadingIndicator2.default, { size: '32px' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'account-reset-action__message' },
          i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_SENDING', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_SENDING'])
        )
      );
    }
  }, {
    key: 'renderFailure',
    value: function renderFailure() {
      var _window4 = window,
          i18n = _window4.ss.i18n;


      return _react2.default.createElement(
        'p',
        { className: 'account-reset-action account-reset-action--failure' },
        _react2.default.createElement(
          'span',
          { className: 'account-reset-action__icon' },
          _react2.default.createElement(_CircleDash2.default, { size: '32px' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'account-reset-action__message' },
          i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_SENDING', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_SENDING_FAILURE'])
        )
      );
    }
  }, {
    key: 'renderSuccess',
    value: function renderSuccess() {
      var _window5 = window,
          i18n = _window5.ss.i18n;


      return _react2.default.createElement(
        'p',
        { className: 'account-reset-action account-reset-action--success' },
        _react2.default.createElement(
          'span',
          { className: 'account-reset-action__icon' },
          _react2.default.createElement(_CircleTick2.default, { size: '32px' })
        ),
        _react2.default.createElement(
          'span',
          { className: 'account-reset-action__message' },
          i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_SENDING', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_SENDING_SUCCESS'])
        )
      );
    }
  }, {
    key: 'renderStatusMessage',
    value: function renderStatusMessage() {
      var _state2 = this.state,
          complete = _state2.complete,
          failed = _state2.failed,
          submitting = _state2.submitting;


      if (submitting) {
        return this.renderSending();
      }

      if (!complete) {
        return null;
      }

      return failed ? this.renderFailure() : this.renderSuccess();
    }
  }, {
    key: 'render',
    value: function render() {
      var _window6 = window,
          i18n = _window6.ss.i18n;


      return _react2.default.createElement(
        'div',
        { className: 'account-reset' },
        _react2.default.createElement(
          'h5',
          { className: 'account-reset__title' },
          i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_TITLE', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_TITLE'])
        ),
        _react2.default.createElement(
          'p',
          { className: 'account-reset__description' },
          i18n._t('MultiFactorAuthentication.ACCOUNT_RESET_DESCRIPTION', fallbacks['MultiFactorAuthentication.ACCOUNT_RESET_DESCRIPTION'])
        ),
        this.renderAction(),
        this.renderStatusMessage()
      );
    }
  }]);

  return AccountResetUI;
}(_react.Component);

AccountResetUI.propTypes = {
  resetEndpoint: _propTypes2.default.string
};

exports.default = AccountResetUI;

/***/ }),

/***/ "./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrapConfirm = __webpack_require__("./node_modules/@silverstripe/reactstrap-confirm/dist/index.js");

var _reactstrapConfirm2 = _interopRequireDefault(_reactstrapConfirm);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(9);

var _moment2 = _interopRequireDefault(_moment);

var _Remove = __webpack_require__("./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem/Remove.js");

var _Remove2 = _interopRequireDefault(_Remove);

var _Reset = __webpack_require__("./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem/Reset.js");

var _Reset2 = _interopRequireDefault(_Reset);

var _SetDefault = __webpack_require__("./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem/SetDefault.js");

var _SetDefault2 = _interopRequireDefault(_SetDefault);

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var MethodListItem = function (_PureComponent) {
  _inherits(MethodListItem, _PureComponent);

  function MethodListItem() {
    _classCallCheck(this, MethodListItem);

    return _possibleConstructorReturn(this, (MethodListItem.__proto__ || Object.getPrototypeOf(MethodListItem)).apply(this, arguments));
  }

  _createClass(MethodListItem, [{
    key: 'getStatusMessage',
    value: function getStatusMessage() {
      var _props = this.props,
          isBackupMethod = _props.isBackupMethod,
          isDefaultMethod = _props.isDefaultMethod;
      var _window = window,
          i18n = _window.ss.i18n;


      if (isDefaultMethod) {
        return i18n._t('MultiFactorAuthentication.DEFAULT_REGISTERED', fallbacks['MultiFactorAuthentication.DEFAULT_REGISTERED']);
      }

      if (isBackupMethod) {
        return i18n._t('MultiFactorAuthentication.BACKUP_REGISTERED', fallbacks['MultiFactorAuthentication.BACKUP_REGISTERED']);
      }

      return i18n._t('MultiFactorAuthentication.REGISTERED', fallbacks['MultiFactorAuthentication.REGISTERED']);
    }
  }, {
    key: 'renderRemove',
    value: function renderRemove() {
      var _props2 = this.props,
          canRemove = _props2.canRemove,
          method = _props2.method;


      if (!canRemove) {
        return null;
      }

      return _react2.default.createElement(_Remove2.default, { method: method });
    }
  }, {
    key: 'renderReset',
    value: function renderReset() {
      var _this2 = this;

      var _props3 = this.props,
          canReset = _props3.canReset,
          isBackupMethod = _props3.isBackupMethod,
          method = _props3.method;


      if (!canReset) {
        return null;
      }

      var props = {
        method: method
      };

      if (isBackupMethod) {
        var _window2 = window,
            i18n = _window2.ss.i18n;

        var confirmMessage = i18n._t('MultiFactorAuthentication.RESET_BACKUP_CONFIRMATION', fallbacks['MultiFactorAuthentication.RESET_BACKUP_CONFIRMATION']);
        var confirmTitle = i18n._t('MultiFactorAuthentication.CONFIRMATION_TITLE', fallbacks['MultiFactorAuthentication.CONFIRMATION_TITLE']);
        var buttonLabel = i18n._t('MultiFactorAuthentication.RESET_BACKUP_CONFIRMATION_BUTTON', fallbacks['MultiFactorAuthentication.RESET_BACKUP_CONFIRMATION_BUTTON']);

        props.onReset = function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(callback) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _reactstrapConfirm2.default)(confirmMessage, { title: confirmTitle, confirmLabel: buttonLabel });

                  case 2:
                    if (_context.sent) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt('return');

                  case 4:
                    callback();

                  case 5:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }

      return _react2.default.createElement(_Reset2.default, props);
    }
  }, {
    key: 'renderSetAsDefault',
    value: function renderSetAsDefault() {
      var _props4 = this.props,
          isDefaultMethod = _props4.isDefaultMethod,
          isBackupMethod = _props4.isBackupMethod,
          method = _props4.method;


      if (isDefaultMethod || isBackupMethod) {
        return null;
      }

      return _react2.default.createElement(_SetDefault2.default, { method: method });
    }
  }, {
    key: 'renderControls',
    value: function renderControls() {
      var _props5 = this.props,
          canRemove = _props5.canRemove,
          canReset = _props5.canReset;


      if (!canRemove && !canReset) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        this.renderRemove(),
        this.renderReset(),
        this.renderSetAsDefault()
      );
    }
  }, {
    key: 'renderNameAndStatus',
    value: function renderNameAndStatus() {
      var _props6 = this.props,
          method = _props6.method,
          createdDate = _props6.createdDate;
      var _window3 = window,
          i18n = _window3.ss.i18n;


      var statusMessage = this.getStatusMessage();

      _moment2.default.locale(i18n.detectLocale());

      return i18n.inject(statusMessage, {
        method: method.name,
        date: (0, _moment2.default)(createdDate).format('L')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          Tag = _props7.tag,
          className = _props7.className;


      var classes = (0, _classnames2.default)(className, 'registered-method-list-item');

      return _react2.default.createElement(
        Tag,
        { className: classes },
        this.renderNameAndStatus(),
        this.renderControls()
      );
    }
  }]);

  return MethodListItem;
}(_react.PureComponent);

MethodListItem.propTypes = {
  method: _registeredMethod2.default.isRequired,
  isDefaultMethod: _propTypes2.default.bool,
  isBackupMethod: _propTypes2.default.bool,
  canRemove: _propTypes2.default.bool,
  canReset: _propTypes2.default.bool,
  onRemove: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  createdDate: _propTypes2.default.string,
  className: _propTypes2.default.string,
  tag: _propTypes2.default.string
};

MethodListItem.defaultProps = {
  isDefaultMethod: false,
  isBackupMethod: false,
  canRemove: false,
  canReset: false,
  tag: 'li'
};

exports.default = MethodListItem;

/***/ }),

/***/ "./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem/Remove.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _reactstrapConfirm = __webpack_require__("./node_modules/@silverstripe/reactstrap-confirm/dist/index.js");

var _reactstrapConfirm2 = _interopRequireDefault(_reactstrapConfirm);

var _Config = __webpack_require__(5);

var _Config2 = _interopRequireDefault(_Config);

var _actions = __webpack_require__("./client/src/state/mfaRegister/actions.js");

var _actions2 = __webpack_require__("./client/src/state/mfaAdministration/actions.js");

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var Remove = function Remove(_ref, _ref2) {
  var method = _ref.method,
      onRemove = _ref.onRemove,
      registeredMethods = _ref.registeredMethods,
      onDeregisterMethod = _ref.onDeregisterMethod,
      onAddAvailableMethod = _ref.onAddAvailableMethod;
  var backupMethod = _ref2.backupMethod,
      remove = _ref2.endpoints.remove;
  var _window = window,
      i18n = _window.ss.i18n;


  var handleRemove = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var confirmMessage, confirmTitle, buttonLabel, token, endpoint;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              confirmMessage = i18n._t('MultiFactorAuthentication.DELETE_CONFIRMATION', fallbacks['MultiFactorAuthentication.DELETE_CONFIRMATION']);
              confirmTitle = i18n._t('MultiFactorAuthentication.CONFIRMATION_TITLE', fallbacks['MultiFactorAuthentication.CONFIRMATION_TITLE']);
              buttonLabel = i18n._t('MultiFactorAuthentication.DELETE_CONFIRMATION_BUTTON', fallbacks['MultiFactorAuthentication.DELETE_CONFIRMATION_BUTTON']);
              _context.next = 5;
              return (0, _reactstrapConfirm2.default)(confirmMessage, { title: confirmTitle, confirmLabel: buttonLabel });

            case 5:
              if (_context.sent) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              token = _Config2.default.get('SecurityID');
              endpoint = remove.replace('{urlSegment}', method.urlSegment) + '?SecurityID=' + token;


              fetch(endpoint, {
                method: 'DELETE'
              }).then(function (response) {
                return response.json().then(function (json) {
                  if (response.status === 200) {
                    onDeregisterMethod(method);
                    onAddAvailableMethod(json.availableMethod);

                    if (!json.hasBackupMethod && backupMethod && registeredMethods.find(function (candidate) {
                      return candidate.urlSegment === backupMethod.urlSegment;
                    })) {
                      onDeregisterMethod(backupMethod);
                    }

                    return;
                  }

                  var message = json.errors && ' Errors: \n - ' + json.errors.join('\n -') || '';
                  throw Error('Could not delete method. Error code ' + response.status + '.' + message);
                });
              });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function handleRemove() {
      return _ref3.apply(this, arguments);
    };
  }();

  return _react2.default.createElement(
    'button',
    {
      className: 'registered-method-list-item__control',
      type: 'button',
      onClick: onRemove ? onRemove(handleRemove) : handleRemove
    },
    i18n._t('MultiFactorAuthentication.REMOVE_METHOD', fallbacks['MultiFactorAuthentication.REMOVE_METHOD'])
  );
};

Remove.propTypes = {
  method: _registeredMethod2.default.isRequired,
  onRemove: _propTypes2.default.func,

  registeredMethods: _propTypes2.default.arrayOf(_registeredMethod2.default).isRequired,
  onDeregisterMethod: _propTypes2.default.func.isRequired,
  onAddAvailableMethod: _propTypes2.default.func.isRequired
};

Remove.contextTypes = {
  backupMethod: _registeredMethod2.default,
  endpoints: _propTypes2.default.shape({
    register: _propTypes2.default.string,
    remove: _propTypes2.default.string
  })
};

exports.default = (0, _reactRedux.connect)(function (_ref4) {
  var registeredMethods = _ref4.mfaAdministration.registeredMethods;
  return {
    registeredMethods: registeredMethods
  };
}, function (dispatch) {
  return {
    onDeregisterMethod: function onDeregisterMethod(method) {
      dispatch((0, _actions2.deregisterMethod)(method));
    },
    onAddAvailableMethod: function onAddAvailableMethod(method) {
      dispatch((0, _actions.addAvailableMethod)(method));
    }
  };
})(Remove);

/***/ }),

/***/ "./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem/Reset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _Register = __webpack_require__("./client/src/components/Register.js");

var _actions = __webpack_require__("./client/src/state/mfaRegister/actions.js");

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

var _availableMethod = __webpack_require__("./client/src/types/availableMethod.js");

var _availableMethod2 = _interopRequireDefault(_availableMethod);

var _RegisterModal = __webpack_require__("./client/src/components/RegisterModal.js");

var _RegisterModal2 = _interopRequireDefault(_RegisterModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var Reset = function (_Component) {
  _inherits(Reset, _Component);

  function Reset(props) {
    _classCallCheck(this, Reset);

    var _this = _possibleConstructorReturn(this, (Reset.__proto__ || Object.getPrototypeOf(Reset)).call(this, props));

    _this.state = {
      modalOpen: false
    };

    _this.handleReset = _this.handleReset.bind(_this);
    _this.handleToggleModal = _this.handleToggleModal.bind(_this);
    return _this;
  }

  _createClass(Reset, [{
    key: 'handleToggleModal',
    value: function handleToggleModal() {
      this.setState(function (state) {
        return {
          modalOpen: !state.modalOpen
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      var _props = this.props,
          onResetMethod = _props.onResetMethod,
          method = _props.method;
      var allAvailableMethods = this.context.allAvailableMethods;


      var availableMethodDetail = allAvailableMethods.find(function (candidate) {
        return candidate.urlSegment === method.urlSegment;
      });

      if (!availableMethodDetail) {
        throw Error('Cannot register the method given: ' + method.name + ' (' + method.urlSegment + ').');
      }

      onResetMethod(availableMethodDetail);
      this.handleToggleModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var onReset = this.props.onReset;
      var _context = this.context,
          backupMethod = _context.backupMethod,
          endpoints = _context.endpoints,
          resources = _context.resources;


      var callback = onReset ? function () {
        return onReset(_this2.handleReset);
      } : this.handleReset;

      return _react2.default.createElement(
        'button',
        {
          className: 'registered-method-list-item__control',
          type: 'button',
          onClick: callback
        },
        window.ss.i18n._t('MultiFactorAuthentication.RESET_METHOD', fallbacks['MultiFactorAuthentication.RESET_METHOD']),
        _react2.default.createElement(_RegisterModal2.default, {
          backupMethod: backupMethod,
          isOpen: this.state.modalOpen,
          toggle: this.handleToggleModal,
          resources: resources,
          endpoints: endpoints
        })
      );
    }
  }]);

  return Reset;
}(_react.Component);

Reset.propTypes = {
  method: _registeredMethod2.default.isRequired,
  onReset: _propTypes2.default.func
};

Reset.contextTypes = {
  allAvailableMethods: _propTypes2.default.arrayOf(_availableMethod2.default),
  backupMethod: _registeredMethod2.default,
  endpoints: _propTypes2.default.shape({
    register: _propTypes2.default.string
  }),
  resources: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(null, function (dispatch) {
  return { onResetMethod: function onResetMethod(method) {
      dispatch((0, _actions.chooseMethod)(method));
      dispatch((0, _actions.showScreen)(_Register.SCREEN_REGISTER_METHOD));
    } };
})(Reset);

/***/ }),

/***/ "./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem/SetDefault.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

var _Config = __webpack_require__(5);

var _Config2 = _interopRequireDefault(_Config);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__("./client/src/state/mfaAdministration/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var SetDefault = function (_Component) {
  _inherits(SetDefault, _Component);

  function SetDefault(props) {
    _classCallCheck(this, SetDefault);

    var _this = _possibleConstructorReturn(this, (SetDefault.__proto__ || Object.getPrototypeOf(SetDefault)).call(this, props));

    _this.handleSetDefault = _this.handleSetDefault.bind(_this);
    return _this;
  }

  _createClass(SetDefault, [{
    key: 'handleSetDefault',
    value: function handleSetDefault() {
      var _props = this.props,
          method = _props.method,
          onSetDefaultMethod = _props.onSetDefaultMethod;
      var setDefault = this.context.endpoints.setDefault;


      var token = _Config2.default.get('SecurityID');
      var endpoint = setDefault.replace('{urlSegment}', method.urlSegment) + '?SecurityID=' + token;

      fetch(endpoint, {
        method: 'PUT'
      }).then(function (response) {
        return response.json().then(function (json) {
          if (response.status === 200) {
            onSetDefaultMethod(method.urlSegment);
            return;
          }

          var message = json.errors && ' Errors: \n - ' + json.errors.join('\n -') || '';
          throw Error('Could not set default method. Error code ' + response.status + '.' + message);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _window = window,
          i18n = _window.ss.i18n;


      return _react2.default.createElement(
        'button',
        {
          className: 'registered-method-list-item__control',
          type: 'button',
          onClick: this.handleSetDefault
        },
        i18n._t('MultiFactorAuthentication.SET_AS_DEFAULT', fallbacks['MultiFactorAuthentication.SET_AS_DEFAULT'])
      );
    }
  }]);

  return SetDefault;
}(_react.Component);

SetDefault.propTypes = {
  method: _registeredMethod2.default.isRequired
};

SetDefault.contextTypes = {
  endpoints: _propTypes2.default.shape({
    setDefault: _propTypes2.default.string
  })
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetDefaultMethod: function onSetDefaultMethod(urlSegment) {
      return dispatch((0, _actions.setDefaultMethod)(urlSegment));
    }
  };
};

exports.Component = SetDefault;
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SetDefault);

/***/ }),

/***/ "./client/src/components/FormField/RegisteredMFAMethodListField/RegisteredMFAMethodListField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

var _availableMethod = __webpack_require__("./client/src/types/availableMethod.js");

var _availableMethod2 = _interopRequireDefault(_availableMethod);

var _AccountResetUI = __webpack_require__("./client/src/components/FormField/RegisteredMFAMethodListField/AccountResetUI.js");

var _AccountResetUI2 = _interopRequireDefault(_AccountResetUI);

var _MethodListItem = __webpack_require__("./client/src/components/FormField/RegisteredMFAMethodListField/MethodListItem.js");

var _MethodListItem2 = _interopRequireDefault(_MethodListItem);

var _actions = __webpack_require__("./client/src/state/mfaRegister/actions.js");

var _actions2 = __webpack_require__("./client/src/state/mfaAdministration/actions.js");

var _Register = __webpack_require__("./client/src/components/Register.js");

var _RegisterModal = __webpack_require__("./client/src/components/RegisterModal.js");

var _RegisterModal2 = _interopRequireDefault(_RegisterModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var RegisteredMFAMethodListField = function (_Component) {
  _inherits(RegisteredMFAMethodListField, _Component);

  function RegisteredMFAMethodListField(props) {
    _classCallCheck(this, RegisteredMFAMethodListField);

    var _this = _possibleConstructorReturn(this, (RegisteredMFAMethodListField.__proto__ || Object.getPrototypeOf(RegisteredMFAMethodListField)).call(this, props));

    _this.state = {
      modalOpen: false
    };

    _this.handleToggleModal = _this.handleToggleModal.bind(_this);
    return _this;
  }

  _createClass(RegisteredMFAMethodListField, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          allAvailableMethods = _props.allAvailableMethods,
          backupMethod = _props.backupMethod,
          endpoints = _props.endpoints,
          resources = _props.resources;


      return { allAvailableMethods: allAvailableMethods, backupMethod: backupMethod, endpoints: endpoints, resources: resources };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          onSetDefaultMethod = _props2.onSetDefaultMethod,
          initialDefaultMethod = _props2.initialDefaultMethod,
          onSetRegisteredMethods = _props2.onSetRegisteredMethods,
          initialRegisteredMethods = _props2.initialRegisteredMethods,
          onUpdateAvailableMethods = _props2.onUpdateAvailableMethods,
          initialAvailableMethods = _props2.initialAvailableMethods;


      onSetRegisteredMethods(initialRegisteredMethods);
      onUpdateAvailableMethods(initialAvailableMethods);
      onSetDefaultMethod(initialDefaultMethod);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var registrationScreen = this.props.registrationScreen;
      var modalOpen = this.state.modalOpen;

      if (prevProps.registrationScreen !== registrationScreen && registrationScreen === _Register.SCREEN_INTRODUCTION && prevState.modalOpen && modalOpen) {
        this.handleToggleModal();
      }
    }
  }, {
    key: 'getBaseMethods',
    value: function getBaseMethods() {
      var backupMethod = this.props.backupMethod;
      var methods = this.props.registeredMethods;


      if (!methods) {
        return [];
      }

      if (backupMethod) {
        methods = methods.filter(function (method) {
          return method.urlSegment !== backupMethod.urlSegment;
        });
      }

      return methods;
    }
  }, {
    key: 'handleToggleModal',
    value: function handleToggleModal() {
      this.setState(function (state) {
        return {
          modalOpen: !state.modalOpen
        };
      });
    }
  }, {
    key: 'renderNoMethodsMessage',
    value: function renderNoMethodsMessage() {
      if (this.getBaseMethods().length) {
        return null;
      }

      var readOnly = this.props.readOnly;
      var _window = window,
          i18n = _window.ss.i18n;

      var messageKey = readOnly ? 'MultiFactorAuthentication.NO_METHODS_REGISTERED_READONLY' : 'MultiFactorAuthentication.NO_METHODS_REGISTERED';

      return _react2.default.createElement(
        'div',
        { className: 'registered-mfa-method-list-field__no-methods' },
        i18n._t(messageKey, fallbacks[messageKey])
      );
    }
  }, {
    key: 'renderBackupMethod',
    value: function renderBackupMethod() {
      var _props3 = this.props,
          backupMethod = _props3.backupMethod,
          backupCreatedDate = _props3.backupCreatedDate,
          registeredMethods = _props3.registeredMethods,
          readOnly = _props3.readOnly;


      if (!backupMethod) {
        return null;
      }

      var registeredBackupMethod = registeredMethods.find(function (candidate) {
        return candidate.urlSegment === backupMethod.urlSegment;
      });

      if (!registeredBackupMethod) {
        return null;
      }

      return _react2.default.createElement(_MethodListItem2.default, {
        method: registeredBackupMethod,
        createdDate: backupCreatedDate,
        canReset: !readOnly,
        isBackupMethod: true,
        tag: 'div',
        className: 'registered-method-list-item--backup'
      });
    }
  }, {
    key: 'renderBaseMethods',
    value: function renderBaseMethods() {
      var baseMethods = this.getBaseMethods();

      if (!baseMethods.length) {
        return [];
      }

      var _props4 = this.props,
          defaultMethod = _props4.defaultMethod,
          readOnly = _props4.readOnly;


      return baseMethods.map(function (method) {
        var props = {
          method: method,
          key: method.urlSegment,
          isDefaultMethod: defaultMethod && method.urlSegment === defaultMethod,
          canRemove: !readOnly,
          canReset: !readOnly
        };

        return _react2.default.createElement(_MethodListItem2.default, props);
      });
    }
  }, {
    key: 'renderModal',
    value: function renderModal() {
      var _props5 = this.props,
          backupMethod = _props5.backupMethod,
          endpoints = _props5.endpoints,
          resources = _props5.resources;


      return _react2.default.createElement(_RegisterModal2.default, {
        backupMethod: backupMethod,
        isOpen: this.state.modalOpen,
        toggle: this.handleToggleModal,
        resources: resources,
        endpoints: endpoints
      });
    }
  }, {
    key: 'renderAddButton',
    value: function renderAddButton() {
      var _this2 = this;

      var _props6 = this.props,
          availableMethods = _props6.availableMethods,
          registeredMethods = _props6.registeredMethods,
          readOnly = _props6.readOnly,
          onResetRegister = _props6.onResetRegister;


      if (readOnly || !availableMethods || availableMethods.length === 0) {
        return null;
      }

      var _window2 = window,
          i18n = _window2.ss.i18n;

      var label = registeredMethods.length ? i18n._t('MultiFactorAuthentication.ADD_ANOTHER_METHOD', fallbacks['MultiFactorAuthentication.ADD_ANOTHER_METHOD']) : i18n._t('MultiFactorAuthentication.ADD_FIRST_METHOD', fallbacks['MultiFactorAuthentication.ADD_FIRST_METHOD']);

      return _react2.default.createElement(
        _reactstrap.Button,
        {
          className: 'registered-mfa-method-list-field__button',
          outline: true,
          type: 'button',
          onClick: function onClick() {
            _this2.handleToggleModal();
            onResetRegister();
          }
        },
        label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          readOnly = _props7.readOnly,
          resetEndpoint = _props7.resetEndpoint;

      var classNames = (0, _classnames2.default)({
        'registered-mfa-method-list-field': true,
        'registered-mfa-method-list-field--read-only': readOnly
      });

      return _react2.default.createElement(
        'div',
        { className: classNames },
        _react2.default.createElement(
          'ul',
          { className: 'method-list' },
          this.renderBaseMethods()
        ),
        this.renderNoMethodsMessage(),
        this.renderAddButton(),
        this.renderBackupMethod(),
        readOnly && _react2.default.createElement('hr', null),
        readOnly && _react2.default.createElement(_AccountResetUI2.default, { resetEndpoint: resetEndpoint }),
        this.renderModal()
      );
    }
  }]);

  return RegisteredMFAMethodListField;
}(_react.Component);

RegisteredMFAMethodListField.propTypes = {
  backupMethod: _registeredMethod2.default,
  defaultMethod: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  initialDefaultMethod: _propTypes2.default.string,
  initialRegisteredMethods: _propTypes2.default.arrayOf(_registeredMethod2.default),
  initialAvailableMethods: _propTypes2.default.arrayOf(_availableMethod2.default),
  allAvailableMethods: _propTypes2.default.arrayOf(_availableMethod2.default),
  resetEndpoint: _propTypes2.default.string,
  endpoints: _propTypes2.default.shape({
    register: _propTypes2.default.string,
    remove: _propTypes2.default.string
  }),
  resources: _propTypes2.default.object,

  availableMethods: _propTypes2.default.arrayOf(_availableMethod2.default),
  registeredMethods: _propTypes2.default.arrayOf(_registeredMethod2.default),
  registrationScreen: _propTypes2.default.number
};

RegisteredMFAMethodListField.defaultProps = {
  initialAvailableMethods: []
};

RegisteredMFAMethodListField.childContextTypes = {
  allAvailableMethods: _propTypes2.default.arrayOf(_availableMethod2.default),
  backupMethod: _registeredMethod2.default,
  endpoints: _propTypes2.default.shape({
    register: _propTypes2.default.string,
    remove: _propTypes2.default.string,
    setDefault: _propTypes2.default.string
  }),
  resources: _propTypes2.default.object
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onResetRegister: function onResetRegister() {
      dispatch((0, _actions.chooseMethod)(null));
      dispatch((0, _actions.showScreen)(_Register.SCREEN_CHOOSE_METHOD));
    },
    onUpdateAvailableMethods: function onUpdateAvailableMethods(methods) {
      dispatch((0, _actions.setAvailableMethods)(methods));
    },
    onSetDefaultMethod: function onSetDefaultMethod(urlSegment) {
      dispatch((0, _actions2.setDefaultMethod)(urlSegment));
    },
    onSetRegisteredMethods: function onSetRegisteredMethods(methods) {
      dispatch((0, _actions2.setRegisteredMethods)(methods));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$mfaRegister = state.mfaRegister,
      availableMethods = _state$mfaRegister.availableMethods,
      screen = _state$mfaRegister.screen;
  var _state$mfaAdministrat = state.mfaAdministration,
      defaultMethod = _state$mfaAdministrat.defaultMethod,
      registeredMethods = _state$mfaAdministrat.registeredMethods;


  return {
    availableMethods: availableMethods,
    defaultMethod: defaultMethod,
    registeredMethods: registeredMethods || [],
    registrationScreen: screen
  };
};

exports.Component = RegisteredMFAMethodListField;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RegisteredMFAMethodListField);

/***/ }),

/***/ "./client/src/components/Icons/CircleDash.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? '3em' : _ref$size;
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512', height: size, width: size },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z' })
    )
  );
};

/***/ }),

/***/ "./client/src/components/Icons/CircleTick.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? '3em' : _ref$size;
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512', height: size, width: size },
    _react2.default.createElement(
      'g',
      { fill: color },
      _react2.default.createElement('path', { d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' })
    )
  );
};

/***/ }),

/***/ "./client/src/components/LoadingIndicator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$block = _ref.block,
      block = _ref$block === undefined ? false : _ref$block,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? '6em' : _ref$size;
  return _react2.default.createElement('div', {
    style: { height: size, width: size },
    className: (0, _classnames2.default)({ 'mfa-loading-indicator': true, 'mfa-loading-indicator--block': block })
  });
};

/***/ }),

/***/ "./client/src/components/Register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.SCREEN_COMPLETE = exports.SCREEN_CHOOSE_METHOD = exports.SCREEN_REGISTER_METHOD = exports.SCREEN_INTRODUCTION = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(3);

var _availableMethod = __webpack_require__("./client/src/types/availableMethod.js");

var _availableMethod2 = _interopRequireDefault(_availableMethod);

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

var _LoadingIndicator = __webpack_require__("./client/src/components/LoadingIndicator.js");

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _Introduction = __webpack_require__("./client/src/components/Register/Introduction.js");

var _Introduction2 = _interopRequireDefault(_Introduction);

var _Complete = __webpack_require__("./client/src/components/Register/Complete.js");

var _Complete2 = _interopRequireDefault(_Complete);

var _SelectMethod = __webpack_require__("./client/src/components/Register/SelectMethod.js");

var _SelectMethod2 = _interopRequireDefault(_SelectMethod);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__("./client/src/state/mfaRegister/actions.js");

var _Title = __webpack_require__("./client/src/components/Register/Title.js");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SCREEN_INTRODUCTION = 1;
var SCREEN_REGISTER_METHOD = 2;
var SCREEN_CHOOSE_METHOD = 3;
var SCREEN_COMPLETE = 4;

exports.SCREEN_INTRODUCTION = SCREEN_INTRODUCTION;
exports.SCREEN_REGISTER_METHOD = SCREEN_REGISTER_METHOD;
exports.SCREEN_CHOOSE_METHOD = SCREEN_CHOOSE_METHOD;
exports.SCREEN_COMPLETE = SCREEN_COMPLETE;

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      registerProps: null,
      token: null
    };

    _this.handleBack = _this.handleBack.bind(_this);
    _this.handleCompleteRegistration = _this.handleCompleteRegistration.bind(_this);
    _this.handleSkip = _this.handleSkip.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var selectedMethod = this.props.selectedMethod;


      if (selectedMethod) {
        this.fetchStartRegistrationData();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var selectedMethod = this.props.selectedMethod;


      if (!selectedMethod) {
        return;
      }

      if (JSON.stringify(selectedMethod) !== JSON.stringify(prevProps.selectedMethod)) {
        this.fetchStartRegistrationData();
      }
    }
  }, {
    key: 'setupBackupMethod',
    value: function setupBackupMethod() {
      var _props = this.props,
          backupMethod = _props.backupMethod,
          selectedMethod = _props.selectedMethod,
          onShowComplete = _props.onShowComplete,
          onSelectMethod = _props.onSelectMethod;


      if (this.shouldSetupBackupMethod() && selectedMethod.urlSegment !== backupMethod.urlSegment) {
        onSelectMethod(backupMethod);
        return;
      }

      onShowComplete();
    }
  }, {
    key: 'fetchStartRegistrationData',
    value: function fetchStartRegistrationData() {
      var _this2 = this;

      var _props2 = this.props,
          register = _props2.endpoints.register,
          selectedMethod = _props2.selectedMethod;


      var endpoint = register.replace('{urlSegment}', selectedMethod.urlSegment);

      fetch(endpoint).then(function (response) {
        return response.json().then(function (result) {
          var token = result.SecurityID,
              registerProps = _objectWithoutProperties(result, ['SecurityID']);

          _this2.setState({
            registerProps: registerProps,
            token: token
          });
        });
      });
    }
  }, {
    key: 'handleBack',
    value: function handleBack() {
      var _props3 = this.props,
          availableMethods = _props3.availableMethods,
          onShowIntroduction = _props3.onShowIntroduction,
          onShowChooseMethod = _props3.onShowChooseMethod;

      if (availableMethods.length === 1 && onShowIntroduction) {
        return onShowIntroduction();
      }

      this.setState({ registerProps: null });

      return onShowChooseMethod();
    }
  }, {
    key: 'handleCompleteRegistration',
    value: function handleCompleteRegistration(registrationData) {
      var _this3 = this;

      var _props4 = this.props,
          register = _props4.endpoints.register,
          selectedMethod = _props4.selectedMethod,
          onRemoveAvailableMethod = _props4.onRemoveAvailableMethod,
          onRegister = _props4.onRegister;
      var token = this.state.token;

      var params = token ? '?SecurityID=' + token : '';

      fetch('' + register.replace('{urlSegment}', selectedMethod.urlSegment) + params, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      }).then(function (response) {
        switch (response.status) {
          case 201:
            _this3.setState({
              registerProps: null
            });

            if (typeof onRegister === 'function') {
              onRegister(selectedMethod);
            }

            onRemoveAvailableMethod(selectedMethod);

            _this3.setupBackupMethod();

            return null;
          default:
        }
        return response.json();
      }).then(function (response) {

        if (response && response.errors) {
          var formattedErrors = response.errors.join(', ');

          _this3.setState({
            registerProps: _extends({}, _this3.state.registerProps, {
              error: formattedErrors
            })
          });
        }
      });
    }
  }, {
    key: 'shouldSetupBackupMethod',
    value: function shouldSetupBackupMethod() {
      var _props5 = this.props,
          backupMethod = _props5.backupMethod,
          registeredMethods = _props5.registeredMethods;


      if (!backupMethod) {
        return false;
      }

      return !registeredMethods.find(function (method) {
        return method.urlSegment === backupMethod.urlSegment;
      });
    }
  }, {
    key: 'handleSkip',
    value: function handleSkip() {
      var skip = this.props.endpoints.skip;


      if (skip) {
        window.location = this.props.endpoints.skip;
      }
    }
  }, {
    key: 'renderIntroduction',
    value: function renderIntroduction() {
      var _props6 = this.props,
          canSkip = _props6.canSkip,
          resources = _props6.resources,
          skip = _props6.endpoints.skip,
          showSubTitle = _props6.showSubTitle;


      return _react2.default.createElement(_Introduction2.default, {
        canSkip: skip && canSkip,
        onSkip: this.handleSkip,
        resources: resources,
        showTitle: showSubTitle
      });
    }
  }, {
    key: 'renderMethod',
    value: function renderMethod() {
      var _props7 = this.props,
          selectedMethod = _props7.selectedMethod,
          showSubTitle = _props7.showSubTitle;
      var registerProps = this.state.registerProps;

      if (!selectedMethod) {
        return null;
      }

      if (!registerProps) {
        return _react2.default.createElement(_LoadingIndicator2.default, { block: true });
      }

      var RegistrationComponent = (0, _Injector.loadComponent)(selectedMethod.component);

      return _react2.default.createElement(
        'div',
        null,
        showSubTitle && _react2.default.createElement(_Title2.default, null),
        _react2.default.createElement(RegistrationComponent, _extends({}, registerProps, {
          method: selectedMethod,
          onBack: this.handleBack,
          onCompleteRegistration: this.handleCompleteRegistration
        }))
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _props8 = this.props,
          availableMethods = _props8.availableMethods,
          showSubTitle = _props8.showSubTitle;


      return _react2.default.createElement(_SelectMethod2.default, {
        methods: availableMethods,
        showTitle: showSubTitle
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props9 = this.props,
          screen = _props9.screen,
          onCompleteRegistration = _props9.onCompleteRegistration,
          showTitle = _props9.showTitle,
          showSubTitle = _props9.showSubTitle,
          completeMessage = _props9.completeMessage;
      var _window = window,
          i18n = _window.ss.i18n;


      if (screen === SCREEN_COMPLETE) {
        return _react2.default.createElement(_Complete2.default, {
          showTitle: showSubTitle,
          onComplete: onCompleteRegistration,
          message: completeMessage
        });
      }

      var content = void 0;

      switch (screen) {
        default:
        case SCREEN_INTRODUCTION:
          content = this.renderIntroduction();
          break;
        case SCREEN_CHOOSE_METHOD:
          content = this.renderOptions();
          break;
        case SCREEN_REGISTER_METHOD:
          content = this.renderMethod();
          break;
      }

      return _react2.default.createElement(
        'div',
        null,
        showTitle && _react2.default.createElement(
          'h1',
          { className: 'mfa-app-title' },
          i18n._t('MFARegister.TITLE', 'Multi-factor authentication')
        ),
        content
      );
    }
  }]);

  return Register;
}(_react.Component);

Register.propTypes = {
  availableMethods: _propTypes2.default.arrayOf(_availableMethod2.default),
  backupMethod: _availableMethod2.default,
  canSkip: _propTypes2.default.bool,
  endpoints: _propTypes2.default.shape({
    register: _propTypes2.default.string.isRequired,
    skip: _propTypes2.default.string
  }),
  onRegister: _propTypes2.default.func,
  onCompleteRegistration: _propTypes2.default.func.isRequired,
  registeredMethods: _propTypes2.default.arrayOf(_registeredMethod2.default),
  resources: _propTypes2.default.object,
  showTitle: _propTypes2.default.bool,
  showSubTitle: _propTypes2.default.bool
};

Register.defaultProps = {
  resources: {},
  showTitle: true,
  showSubTitle: true,
  showIntroduction: true
};

var mapStateToProps = function mapStateToProps(state) {
  var source = state.mfaRegister || state;

  return {
    screen: source.screen,
    selectedMethod: source.method,
    availableMethods: source.availableMethods
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onShowIntroduction: function onShowIntroduction() {
      return dispatch((0, _actions.showScreen)(SCREEN_INTRODUCTION));
    },
    onShowComplete: function onShowComplete() {
      return dispatch((0, _actions.showScreen)(SCREEN_COMPLETE));
    },
    onSelectMethod: function onSelectMethod(method) {
      return dispatch((0, _actions.chooseMethod)(method));
    },
    onShowChooseMethod: function onShowChooseMethod() {
      dispatch((0, _actions.chooseMethod)(null));
      dispatch((0, _actions.showScreen)(SCREEN_CHOOSE_METHOD));
    },
    onRemoveAvailableMethod: function onRemoveAvailableMethod(method) {
      return dispatch((0, _actions.removeAvailableMethod)(method));
    }
  };
};

exports.Component = Register;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);

/***/ }),

/***/ "./client/src/components/Register/Complete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Title = __webpack_require__("./client/src/components/Register/Title.js");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Complete = function Complete(_ref) {
  var onComplete = _ref.onComplete,
      showTitle = _ref.showTitle,
      message = _ref.message;
  return _react2.default.createElement(
    'div',
    { className: 'mfa-register-confirmation' },
    _react2.default.createElement('i', { className: 'font-icon-check-mark mfa-register-confirmation__icon' }),
    showTitle && _react2.default.createElement(_Title2.default, { className: 'mfa-register-confirmation__title' }),
    _react2.default.createElement(
      'p',
      { className: 'mfa-register-confirmation__description' },
      message || window.ss.i18n._t('MFARegister.SETUP_COMPLETE_DESCRIPTION', 'You will be able to edit these settings later from your profile area.')
    ),
    _react2.default.createElement(
      'button',
      {
        onClick: onComplete,
        className: 'mfa-register-confirmation__continue btn btn-primary'
      },
      window.ss.i18n._t('MFARegister.SETUP_COMPLETE_CONTINUE', 'Continue')
    )
  );
};

Complete.propTypes = {
  onComplete: _propTypes2.default.func.isRequired,
  showTitle: _propTypes2.default.bool
};

Complete.defaultProps = {
  showTitle: true
};

exports.default = Complete;

/***/ }),

/***/ "./client/src/components/Register/Introduction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.ActionList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__("./client/src/state/mfaRegister/actions.js");

var _Register = __webpack_require__("./client/src/components/Register.js");

var _reactRedux = __webpack_require__(2);

var _Title = __webpack_require__("./client/src/components/Register/Title.js");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var ActionList = exports.ActionList = function ActionList(_ref) {
  var canSkip = _ref.canSkip,
      onContinue = _ref.onContinue,
      onSkip = _ref.onSkip;
  var _window = window,
      i18n = _window.ss.i18n;


  return _react2.default.createElement(
    'ul',
    { className: 'mfa-action-list' },
    _react2.default.createElement(
      'li',
      { className: 'mfa-action-list__item' },
      _react2.default.createElement(
        'button',
        { className: 'btn btn-primary', onClick: onContinue },
        i18n._t('MultiFactorAuthentication.GET_STARTED', fallbacks['MultiFactorAuthentication.GET_STARTED'])
      )
    ),
    canSkip && _react2.default.createElement(
      'li',
      { className: 'mfa-action-list__item' },
      _react2.default.createElement(
        'button',
        { className: 'btn btn-secondary', onClick: onSkip },
        i18n._t('MultiFactorAuthentication.SETUP_LATER', fallbacks['MultiFactorAuthentication.SETUP_LATER'])
      )
    )
  );
};

var Introduction = function Introduction(_ref2) {
  var canSkip = _ref2.canSkip,
      onContinue = _ref2.onContinue,
      onSkip = _ref2.onSkip,
      resources = _ref2.resources,
      showTitle = _ref2.showTitle;
  var _window2 = window,
      i18n = _window2.ss.i18n;


  return _react2.default.createElement(
    'div',
    null,
    showTitle && _react2.default.createElement(_Title2.default, null),
    _react2.default.createElement(
      'h4',
      { className: 'mfa-feature-list-title' },
      i18n._t('MultiFactorAuthentication.HOW_IT_WORKS', fallbacks['MultiFactorAuthentication.HOW_IT_WORKS'])
    ),
    _react2.default.createElement(
      'ul',
      { className: 'mfa-feature-list' },
      _react2.default.createElement(
        'li',
        { className: 'mfa-feature-list-item' },
        resources.extra_factor_image_url && _react2.default.createElement('img', {
          alt: i18n._t('MultiFactorAuthentication.EXTRA_LAYER_IMAGE_ALT', fallbacks['MultiFactorAuthentication.EXTRA_LAYER_IMAGE_ALT']),
          'aria-hidden': 'true',
          className: 'mfa-feature-list-item__icon',
          src: resources.extra_factor_image_url
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h5',
            { className: 'mfa-block-heading mfa-feature-list-item__title' },
            i18n._t('MultiFactorAuthentication.EXTRA_LAYER_TITLE', fallbacks['MultiFactorAuthentication.EXTRA_LAYER_TITLE'])
          ),
          _react2.default.createElement(
            'p',
            { className: 'mfa-feature-list-item__description' },
            i18n._t('MultiFactorAuthentication.EXTRA_LAYER_DESCRIPTION', fallbacks['MultiFactorAuthentication.EXTRA_LAYER_DESCRIPTION']),
            '\xA0',
            resources.user_help_link && _react2.default.createElement(
              'a',
              { href: resources.user_help_link },
              i18n._t('MultiFactorAuthentication.HOW_MFA_WORKS', fallbacks['MultiFactorAuthentication.HOW_MFA_WORKS'])
            )
          )
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'mfa-feature-list-item' },
        resources.unique_image_url && _react2.default.createElement('img', {
          alt: i18n._t('MultiFactorAuthentication.UNIQUE_IMAGE_ALT', fallbacks['MultiFactorAuthentication.UNIQUE_IMAGE_ALT']),
          'aria-hidden': 'true',
          className: 'mfa-feature-list-item__icon',
          src: resources.unique_image_url
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h5',
            { className: 'mfa-block-heading mfa-feature-list-item__title' },
            i18n._t('MultiFactorAuthentication.UNIQUE_TITLE', fallbacks['MultiFactorAuthentication.UNIQUE_TITLE'])
          ),
          _react2.default.createElement(
            'p',
            { className: 'mfa-feature-list-item__description' },
            i18n._t('MultiFactorAuthentication.UNIQUE_DESCRIPTION', fallbacks['MultiFactorAuthentication.UNIQUE_DESCRIPTION'])
          )
        )
      )
    ),
    _react2.default.createElement(ActionList, {
      canSkip: canSkip,
      onContinue: onContinue,
      onSkip: onSkip
    })
  );
};

Introduction.propTypes = {
  canSkip: _propTypes2.default.bool,
  onContinue: _propTypes2.default.func.isRequired,
  onSkip: _propTypes2.default.func,
  resources: _propTypes2.default.shape({
    user_help_link: _propTypes2.default.string,
    extra_factor_image_url: _propTypes2.default.string,
    unique_image_url: _propTypes2.default.string
  }).isRequired,
  showTitle: _propTypes2.default.bool
};

Introduction.defaultProps = {
  showTitle: true
};

exports.Component = Introduction;


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onContinue: function onContinue() {
      dispatch((0, _actions.chooseMethod)(null));
      dispatch((0, _actions.showScreen)(_Register.SCREEN_REGISTER_METHOD));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Introduction);

/***/ }),

/***/ "./client/src/components/Register/MethodTile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _availableMethod = __webpack_require__("./client/src/types/availableMethod.js");

var _availableMethod2 = _interopRequireDefault(_availableMethod);

var _withMethodAvailability = __webpack_require__("./client/src/state/methodAvailability/withMethodAvailability.js");

var _withMethodAvailability2 = _interopRequireDefault(_withMethodAvailability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MethodTile = function (_Component) {
  _inherits(MethodTile, _Component);

  function MethodTile(props) {
    _classCallCheck(this, MethodTile);

    var _this = _possibleConstructorReturn(this, (MethodTile.__proto__ || Object.getPrototypeOf(MethodTile)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(MethodTile, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var _props = this.props,
          isAvailable = _props.method.isAvailable,
          onClick = _props.onClick;


      if (isAvailable && onClick) {
        onClick(event);
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      if (event.keyCode === 13) {
        this.handleClick(event);
      }
    }
  }, {
    key: 'renderSupportLink',
    value: function renderSupportLink(method) {
      var _window = window,
          i18n = _window.ss.i18n;
      var supportLink = method.supportLink,
          supportText = method.supportText;


      if (!supportLink) {
        return null;
      }

      return _react2.default.createElement(
        'a',
        {
          href: supportLink,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'mfa-method-tile__support-link'
        },
        supportText || i18n._t('MFARegister.HELP', 'Find out more.')
      );
    }
  }, {
    key: 'renderUnavailableMask',
    value: function renderUnavailableMask() {
      var _window2 = window,
          i18n = _window2.ss.i18n;
      var _props2 = this.props,
          isAvailable = _props2.isAvailable,
          getUnavailableMessage = _props2.getUnavailableMessage;


      if (isAvailable()) {
        return null;
      }
      var message = getUnavailableMessage();

      return _react2.default.createElement(
        'div',
        { className: 'mfa-method-tile__unavailable-mask' },
        _react2.default.createElement(
          'h3',
          { className: 'mfa-method-tile__unavailable-title' },
          i18n._t('MFAMethodTile.UNAVAILABLE', 'Unsupported')
        ),
        message && _react2.default.createElement(
          'p',
          { className: 'mfa-method-tile__unavailable-text' },
          message
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          isActive = _props3.isActive,
          method = _props3.method;


      var classes = (0, _classnames2.default)('mfa-method-tile', {
        'mfa-method-tile--active': isActive
      });

      return _react2.default.createElement(
        'li',
        { className: classes },
        this.renderUnavailableMask(),
        _react2.default.createElement(
          'div',
          {
            className: 'mfa-method-tile__content',
            onClick: this.handleClick,
            onKeyUp: this.handleKeyUp,
            tabIndex: '0',
            role: 'button'
          },
          method.thumbnail && _react2.default.createElement(
            'div',
            { className: 'mfa-method-tile__thumbnail-container' },
            _react2.default.createElement('img', { src: method.thumbnail, className: 'mfa-method-tile__thumbnail', alt: method.name })
          ),
          _react2.default.createElement(
            'h3',
            { className: 'mfa-method-tile__title' },
            method.name
          ),
          _react2.default.createElement(
            'p',
            { className: 'mfa-method-tile__description' },
            method.description && method.description + '. ',
            this.renderSupportLink(method)
          )
        )
      );
    }
  }]);

  return MethodTile;
}(_react.Component);

MethodTile.propTypes = {
  getUnavailableMessage: _propTypes2.default.func.isRequired,
  isActive: _propTypes2.default.bool,
  isAvailable: _propTypes2.default.func.isRequired,
  method: _availableMethod2.default.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

MethodTile.defaultProps = {
  isActive: false
};

exports.Component = MethodTile;
exports.default = (0, _withMethodAvailability2.default)(MethodTile);

/***/ }),

/***/ "./client/src/components/Register/SelectMethod.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MethodTile = __webpack_require__("./client/src/components/Register/MethodTile.js");

var _MethodTile2 = _interopRequireDefault(_MethodTile);

var _availableMethod = __webpack_require__("./client/src/types/availableMethod.js");

var _availableMethod2 = _interopRequireDefault(_availableMethod);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Register = __webpack_require__("./client/src/components/Register.js");

var _actions = __webpack_require__("./client/src/state/mfaRegister/actions.js");

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _withMethodAvailability = __webpack_require__("./client/src/state/methodAvailability/withMethodAvailability.js");

var _withMethodAvailability2 = _interopRequireDefault(_withMethodAvailability);

var _Title = __webpack_require__("./client/src/components/Register/Title.js");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMethod = function (_Component) {
  _inherits(SelectMethod, _Component);

  function SelectMethod(props) {
    _classCallCheck(this, SelectMethod);

    var _this = _possibleConstructorReturn(this, (SelectMethod.__proto__ || Object.getPrototypeOf(SelectMethod)).call(this, props));

    var highlightedMethod = null;
    if (props.methods.length === 1 && props.isAvailable && props.isAvailable(props.methods[0])) {
      highlightedMethod = props.methods[0];
    }

    _this.state = {
      highlightedMethod: highlightedMethod
    };

    _this.handleGoToNext = _this.handleGoToNext.bind(_this);
    _this.handleBack = _this.handleBack.bind(_this);
    return _this;
  }

  _createClass(SelectMethod, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var highlightedMethod = this.state.highlightedMethod;


      if (highlightedMethod) {
        this.handleGoToNext();
      }
    }
  }, {
    key: 'handleGoToNext',
    value: function handleGoToNext() {
      var highlightedMethod = this.state.highlightedMethod;


      this.props.onSelectMethod(highlightedMethod);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(method) {
      this.setState({
        highlightedMethod: method
      });
    }
  }, {
    key: 'handleBack',
    value: function handleBack() {
      if (this.props.onClickBack) {
        this.props.onClickBack();
      }
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var _window = window,
          i18n = _window.ss.i18n;
      var highlightedMethod = this.state.highlightedMethod;


      return _react2.default.createElement(
        'ul',
        { className: 'mfa-action-list' },
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-primary',
              disabled: highlightedMethod === null,
              onClick: this.handleGoToNext
            },
            i18n._t('MFARegister.NEXT', 'Next')
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-secondary',
              onClick: this.handleBack
            },
            i18n._t('MFARegister.BACK', 'Back')
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          methods = _props.methods,
          showTitle = _props.showTitle;
      var highlightedMethod = this.state.highlightedMethod;


      var classes = (0, _classnames2.default)('mfa-method-tile__container', {
        'mfa-method-tile__container--two-columns': methods.length % 2 === 0
      });

      return _react2.default.createElement(
        'div',
        null,
        showTitle && _react2.default.createElement(_Title2.default, null),
        _react2.default.createElement(
          'ul',
          { className: classes },
          methods.map(function (method) {
            return _react2.default.createElement(_MethodTile2.default, {
              isActive: highlightedMethod === method,
              key: method.urlSegment,
              method: method,
              onClick: function onClick() {
                return _this2.handleClick(method);
              }
            });
          })
        ),
        this.renderActions()
      );
    }
  }]);

  return SelectMethod;
}(_react.Component);

SelectMethod.propTypes = {
  methods: _propTypes2.default.arrayOf(_availableMethod2.default),
  onSelectMethod: _propTypes2.default.func,
  onClickBack: _propTypes2.default.func,
  showTitle: _propTypes2.default.bool
};

SelectMethod.defaultProps = {
  showTitle: true
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClickBack: function onClickBack() {
      return dispatch((0, _actions.showScreen)(_Register.SCREEN_INTRODUCTION));
    },
    onSelectMethod: function onSelectMethod(method) {
      dispatch((0, _actions.chooseMethod)(method));
      dispatch((0, _actions.showScreen)(_Register.SCREEN_REGISTER_METHOD));
    }
  };
};

exports.Component = SelectMethod;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(null, mapDispatchToProps), _withMethodAvailability2.default)(SelectMethod);

/***/ }),

/***/ "./client/src/components/Register/Title.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Register = __webpack_require__("./client/src/components/Register.js");

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var Title = function Title(_ref) {
  var screen = _ref.screen,
      method = _ref.method,
      _ref$Tag = _ref.Tag,
      Tag = _ref$Tag === undefined ? 'h2' : _ref$Tag,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? 'mfa-section-title' : _ref$className;
  var _window = window,
      i18n = _window.ss.i18n;

  var content = void 0;

  switch (screen) {
    case _Register.SCREEN_INTRODUCTION:
      content = i18n._t('MultiFactorAuthentication.TITLE', fallbacks['MultiFactorAuthentication.TITLE']);
      break;
    case _Register.SCREEN_CHOOSE_METHOD:
      content = i18n._t('MultiFactorAuthentication.SELECT_METHOD', fallbacks['MultiFactorAuthentication.SELECT_METHOD']);
      break;
    case _Register.SCREEN_COMPLETE:
      content = i18n._t('MultiFactorAuthentication.SETUP_COMPLETE_TITLE', fallbacks['MultiFactorAuthentication.SETUP_COMPLETE_TITLE']);
      break;
    case _Register.SCREEN_REGISTER_METHOD:
      content = method && method.name;
      break;
    default:
      content = false;
  }

  if (!content || !content.length) {
    return null;
  }

  var ParsedTag = Tag || 'span';

  return _react2.default.createElement(
    ParsedTag,
    { className: className },
    content
  );
};

exports.Component = Title;


var mapStateToProps = function mapStateToProps(state) {
  var source = state.mfaRegister || state;

  return {
    screen: source.screen,
    method: source.method
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Title);

/***/ }),

/***/ "./client/src/components/RegisterModal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(6);

var _Injector = __webpack_require__(3);

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _Title = __webpack_require__("./client/src/components/Register/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _actions = __webpack_require__("./client/src/state/mfaAdministration/actions.js");

var _registeredMethod = __webpack_require__("./client/src/types/registeredMethod.js");

var _registeredMethod2 = _interopRequireDefault(_registeredMethod);

var _Register = __webpack_require__("./client/src/components/Register.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fallbacks = __webpack_require__("./client/lang/src/en.json");

var RegisterModal = function RegisterModal(_ref) {
  var backupMethod = _ref.backupMethod,
      endpoints = _ref.endpoints,
      isOpen = _ref.isOpen,
      toggle = _ref.toggle,
      onAddRegisteredMethod = _ref.onAddRegisteredMethod,
      registeredMethods = _ref.registeredMethods,
      registrationScreen = _ref.registrationScreen,
      resources = _ref.resources,
      RegisterComponent = _ref.RegisterComponent;
  return _react2.default.createElement(
    _reactstrap.Modal,
    {
      isOpen: isOpen,
      toggle: toggle,
      className: 'registered-mfa-method-list-field-register-modal'
    },
    _react2.default.createElement(
      _reactstrap.ModalHeader,
      { toggle: toggle },
      _react2.default.createElement(_Title2.default, { Tag: null })
    ),
    _react2.default.createElement(
      _reactstrap.ModalBody,
      { className: 'registered-mfa-method-list-field-register-modal__content' },
      registrationScreen !== _Register.SCREEN_INTRODUCTION && _react2.default.createElement(RegisterComponent, {
        backupMethod: backupMethod,
        registeredMethods: registeredMethods,
        onCompleteRegistration: toggle,
        onRegister: onAddRegisteredMethod,
        resources: resources,
        endpoints: endpoints,
        showTitle: false,
        showSubTitle: false,
        completeMessage: window.ss.i18n._t('MultiFactorAuthentication.ADMIN_SETUP_COMPLETE_CONTINUE', fallbacks['MultiFactorAuthentication.ADMIN_SETUP_COMPLETE_CONTINUE'])
      })
    )
  );
};

RegisterModal.propTypes = {
  backupMethod: _registeredMethod2.default,
  isOpen: _propTypes2.default.bool,
  toggle: _propTypes2.default.func,
  resources: _propTypes2.default.object,
  endpoints: _propTypes2.default.shape({
    register: _propTypes2.default.string
  }),

  registrationScreen: _propTypes2.default.number,
  registeredMethods: _propTypes2.default.arrayOf(_registeredMethod2.default),
  onAddRegisteredMethod: _propTypes2.default.func,

  RegisterComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func])
};

RegisterModal.defaultProps = {
  isOpen: false
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    registrationScreen: state.mfaRegister.screen,
    registeredMethods: state.mfaAdministration.registeredMethods
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddRegisteredMethod: function onAddRegisteredMethod(method) {
      dispatch((0, _actions.registerMethod)(method));
    }
  };
};

exports.Component = RegisterModal;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['MFARegister'], function (RegisterComponent) {
  return {
    RegisterComponent: RegisterComponent
  };
}, function () {
  return 'MFARegisterModal';
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(RegisterModal);

/***/ }),

/***/ "./client/src/legacy/RegisteredMFAMethodListFieldEntwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIELD_SELECTOR = '.js-injector-boot [data-field-type="registered-mfa-method-list-field"]';

window.jQuery.entwine('ss', function ($) {
  $(FIELD_SELECTOR).entwine({
    onmatch: function onmatch() {
      var RegisteredMFAMethodListField = (0, _Injector.loadComponent)('RegisteredMFAMethodListField');

      var _data = this.data('schema'),
          readOnly = _data.readOnly,
          _data$schema = _data.schema,
          backupMethod = _data$schema.backupMethod,
          defaultMethod = _data$schema.defaultMethod,
          registeredMethods = _data$schema.registeredMethods,
          availableMethods = _data$schema.availableMethods,
          allAvailableMethods = _data$schema.allAvailableMethods,
          resources = _data$schema.resources,
          endpoints = _data$schema.endpoints,
          backupCreatedDate = _data$schema.backupCreatedDate,
          resetEndpoint = _data$schema.resetEndpoint;

      _reactDom2.default.render(_react2.default.createElement(RegisteredMFAMethodListField, {
        backupMethod: backupMethod,
        readOnly: readOnly,
        initialDefaultMethod: defaultMethod,
        initialRegisteredMethods: registeredMethods,
        initialAvailableMethods: availableMethods,
        allAvailableMethods: allAvailableMethods,
        resources: resources,
        endpoints: endpoints,
        backupCreatedDate: backupCreatedDate,
        resetEndpoint: resetEndpoint
      }), this[0]);
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/SiteConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.jQuery.entwine('ss', function ($) {
  $('[name="MFARequired"]').entwine({
    onchange: function onchange() {
      var isRequired = parseInt(this.val(), 10);
      if (isRequired) {
        $('.mfa-settings__grace-period').removeAttr('disabled');
      } else {
        $('.mfa-settings__grace-period').attr('disabled', 'disabled');
      }
    },
    onmatch: function onmatch() {
      this.trigger('change');
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/RegisteredMFAMethodListFieldEntwine.js");
__webpack_require__("./client/src/legacy/SiteConfig.js");

/***/ }),

/***/ "./client/src/lib/formatCode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var formatCode = function formatCode(code) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

  if (code.length < 6) {
    return code;
  }

  if (code.length % 4 === 0) {
    return code.split(/(.{4})/g).filter(function (c) {
      return c;
    }).join(delimiter).trim();
  }
  if (code.length % 3 === 0) {
    return code.split(/(.{3})/g).filter(function (c) {
      return c;
    }).join(delimiter).trim();
  }

  var groupsOfThree = 4 - code.length % 4;
  var groupsOfFour = (code.length - groupsOfThree * 3) / 4;

  var chunkSizes = [].concat(_toConsumableArray([].concat(_toConsumableArray(Array(groupsOfFour).keys())).map(function () {
    return 4;
  })), _toConsumableArray([].concat(_toConsumableArray(Array(groupsOfThree).keys())).map(function () {
    return 3;
  })));

  var pointer = 0;

  var chunks = chunkSizes.map(function (size) {
    return code.substring(pointer, pointer += size);
  });

  return chunks.join(delimiter).trim();
};

exports.formatCode = formatCode;

/***/ }),

/***/ "./client/src/state/methodAvailability/withMethodAvailability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoc = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

var withMethodAvailability = function withMethodAvailability(WrappedComponent) {
  var WithMethodAvailability = function (_Component) {
    _inherits(WithMethodAvailability, _Component);

    function WithMethodAvailability(props) {
      _classCallCheck(this, WithMethodAvailability);

      var _this = _possibleConstructorReturn(this, (WithMethodAvailability.__proto__ || Object.getPrototypeOf(WithMethodAvailability)).call(this, props));

      _this.getAvailabilityOverride = _this.getAvailabilityOverride.bind(_this);
      _this.isAvailable = _this.isAvailable.bind(_this);
      _this.getUnavailableMessage = _this.getUnavailableMessage.bind(_this);
      return _this;
    }

    _createClass(WithMethodAvailability, [{
      key: 'getAvailabilityOverride',
      value: function getAvailabilityOverride() {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var availableMethodOverrides = this.props.availableMethodOverrides;

        var checkMethod = method || this.props.method;
        var urlSegment = checkMethod.urlSegment;


        if (typeof availableMethodOverrides[urlSegment] !== 'undefined') {
          return availableMethodOverrides[urlSegment];
        }
        return {};
      }
    }, {
      key: 'getUnavailableMessage',
      value: function getUnavailableMessage() {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var checkMethod = method || this.props.method;
        var availabilityOverride = this.getAvailabilityOverride(checkMethod);

        return availabilityOverride.unavailableMessage || checkMethod.unavailableMessage;
      }
    }, {
      key: 'isAvailable',
      value: function isAvailable() {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var checkMethod = method || this.props.method;
        var availabilityOverride = this.getAvailabilityOverride(checkMethod);

        var isAvailable = checkMethod.isAvailable;
        if (typeof availabilityOverride.isAvailable !== 'undefined') {
          isAvailable = availabilityOverride.isAvailable;
        }

        return isAvailable;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          isAvailable: this.isAvailable,
          getUnavailableMessage: this.getUnavailableMessage
        }));
      }
    }]);

    return WithMethodAvailability;
  }(_react.Component);

  var displayName = getDisplayName(WrappedComponent);

  WithMethodAvailability.displayName = 'WithMethodAvailability(' + displayName + ')';

  return WithMethodAvailability;
};

var mapStateToProps = function mapStateToProps(state) {
  var methods = [].concat(_toConsumableArray(state.mfaRegister.availableMethods), _toConsumableArray(state.mfaVerify.allMethods));

  var availableMethodOverrides = {};

  Object.values(methods).forEach(function (method) {
    var urlSegment = method.urlSegment;

    var stateKey = urlSegment + 'Availability';
    if (typeof state[stateKey] !== 'undefined') {
      availableMethodOverrides[urlSegment] = state[stateKey];
    }
  });

  return {
    availableMethodOverrides: availableMethodOverrides
  };
};

exports.hoc = withMethodAvailability;


var composedWithMethodAvailability = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), withMethodAvailability);

exports.default = composedWithMethodAvailability;

/***/ }),

/***/ "./client/src/state/mfaAdministration/actionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ['ADD_REGISTERED_METHOD', 'REMOVE_REGISTERED_METHOD', 'SET_DEFAULT_METHOD', 'SET_REGISTERED_METHODS'].reduce(function (obj, item) {
  return Object.assign(obj, _defineProperty({}, item, 'MFA_ADMINISTRATION.' + item));
}, {});

/***/ }),

/***/ "./client/src/state/mfaAdministration/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRegisteredMethods = exports.setDefaultMethod = exports.deregisterMethod = exports.registerMethod = undefined;

var _actionTypes = __webpack_require__("./client/src/state/mfaAdministration/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerMethod = exports.registerMethod = function registerMethod(method) {
  return {
    type: _actionTypes2.default.ADD_REGISTERED_METHOD,
    payload: { method: method }
  };
};

var deregisterMethod = exports.deregisterMethod = function deregisterMethod(method) {
  return {
    type: _actionTypes2.default.REMOVE_REGISTERED_METHOD,
    payload: { method: method }
  };
};

var setDefaultMethod = exports.setDefaultMethod = function setDefaultMethod(urlSegment) {
  return {
    type: _actionTypes2.default.SET_DEFAULT_METHOD,
    payload: { defaultMethod: urlSegment }
  };
};

var setRegisteredMethods = exports.setRegisteredMethods = function setRegisteredMethods(methods) {
  return {
    type: _actionTypes2.default.SET_REGISTERED_METHODS,
    payload: { methods: methods }
  };
};

/***/ }),

/***/ "./client/src/state/mfaAdministration/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mfaAdministationReducer;

var _actionTypes = __webpack_require__("./client/src/state/mfaAdministration/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  defaultMethod: null,
  registeredMethods: []
};

function mfaAdministationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  var getMatcher = function getMatcher(method) {
    return function (candidate) {
      return candidate.urlSegment === method.urlSegment;
    };
  };
  var registeredMethods = state.registeredMethods;


  switch (type) {
    case _actionTypes2.default.ADD_REGISTERED_METHOD:
      {
        var method = payload.method;


        if (!Array.isArray(registeredMethods)) {
          return _extends({}, state, {
            registeredMethods: [method]
          });
        }

        if (registeredMethods.find(getMatcher(method))) {
          return state;
        }

        registeredMethods.push(method);

        return _extends({}, state, {
          registeredMethods: registeredMethods
        });
      }

    case _actionTypes2.default.REMOVE_REGISTERED_METHOD:
      {
        var _method = payload.method;

        var index = registeredMethods.findIndex(getMatcher(_method));

        if (index < 0) {
          return state;
        }

        registeredMethods.splice(index, 1);

        var defaultMethodState = registeredMethods.length === 2 ? {
          defaultMethod: registeredMethods.find(function () {
            return true;
          }).urlSegment
        } : {};

        return _extends({}, state, defaultMethodState, {
          registeredMethods: [].concat(_toConsumableArray(registeredMethods))
        });
      }

    case _actionTypes2.default.SET_DEFAULT_METHOD:
      {
        return _extends({}, state, {
          defaultMethod: payload.defaultMethod
        });
      }

    case _actionTypes2.default.SET_REGISTERED_METHODS:
      {
        return _extends({}, state, {
          registeredMethods: payload.methods
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/src/state/mfaRegister/actionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ['ADD_AVAILABLE_METHOD', 'REMOVE_AVAILABLE_METHOD', 'SET_AVAILABLE_METHODS', 'SET_SCREEN', 'SET_METHOD'].reduce(function (obj, item) {
  return Object.assign(obj, _defineProperty({}, item, 'MFA_REGISTER.' + item));
}, {});

/***/ }),

/***/ "./client/src/state/mfaRegister/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAvailableMethod = exports.addAvailableMethod = exports.setAvailableMethods = exports.chooseMethod = exports.showScreen = undefined;

var _actionTypes = __webpack_require__("./client/src/state/mfaRegister/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showScreen = exports.showScreen = function showScreen(screen) {
  return {
    type: _actionTypes2.default.SET_SCREEN,
    payload: { screen: screen }
  };
};

var chooseMethod = exports.chooseMethod = function chooseMethod(method) {
  return {
    type: _actionTypes2.default.SET_METHOD,
    payload: { method: method }
  };
};

var setAvailableMethods = exports.setAvailableMethods = function setAvailableMethods(methods) {
  return {
    type: _actionTypes2.default.SET_AVAILABLE_METHODS,
    payload: { availableMethods: methods }
  };
};

var addAvailableMethod = exports.addAvailableMethod = function addAvailableMethod(method) {
  return {
    type: _actionTypes2.default.ADD_AVAILABLE_METHOD,
    payload: { method: method }
  };
};

var removeAvailableMethod = exports.removeAvailableMethod = function removeAvailableMethod(method) {
  return {
    type: _actionTypes2.default.REMOVE_AVAILABLE_METHOD,
    payload: { method: method }
  };
};

/***/ }),

/***/ "./client/src/state/mfaRegister/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mfaRegisterReducer;

var _actionTypes = __webpack_require__("./client/src/state/mfaRegister/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _Register = __webpack_require__("./client/src/components/Register.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  screen: _Register.SCREEN_INTRODUCTION,
  method: null,
  availableMethods: []
};

function mfaRegisterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.SET_SCREEN:
      {
        var screen = payload.screen;

        if (state.method === null && screen === _Register.SCREEN_REGISTER_METHOD) {
          return _extends({}, state, {
            screen: _Register.SCREEN_CHOOSE_METHOD
          });
        }
        return _extends({}, state, {
          screen: screen
        });
      }

    case _actionTypes2.default.SET_METHOD:
      {
        return _extends({}, state, {
          method: payload.method
        });
      }

    case _actionTypes2.default.SET_AVAILABLE_METHODS:
      {
        return _extends({}, state, {
          availableMethods: payload.availableMethods
        });
      }

    case _actionTypes2.default.ADD_AVAILABLE_METHOD:
      {
        return _extends({}, state, {
          availableMethods: [].concat(_toConsumableArray(state.availableMethods), [payload.method])
        });
      }

    case _actionTypes2.default.REMOVE_AVAILABLE_METHOD:
      {
        return _extends({}, state, {
          availableMethods: state.availableMethods.filter(function (method) {
            return method.urlSegment !== payload.method.urlSegment;
          })
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/src/state/mfaVerify/actionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ['SET_ALL_METHODS'].reduce(function (obj, item) {
  return Object.assign(obj, _defineProperty({}, item, 'MFA_VERIFY.' + item));
}, {});

/***/ }),

/***/ "./client/src/state/mfaVerify/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = mfaRegisterReducer;

var _actionTypes = __webpack_require__("./client/src/state/mfaVerify/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  allMethods: []
};

function mfaRegisterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.SET_ALL_METHODS:
      {
        return _extends({}, state, {
          allMethods: payload.allMethods
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/src/types/availableMethod.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  urlSegment: _propTypes2.default.string,
  name: _propTypes2.default.string,
  description: _propTypes2.default.string,
  supportLink: _propTypes2.default.string,
  thumbnail: _propTypes2.default.string,
  component: _propTypes2.default.string,
  isAvailable: _propTypes2.default.bool,
  unavailableMessage: _propTypes2.default.string
});

/***/ }),

/***/ "./client/src/types/registeredMethod.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
  name: _propTypes2.default.string,
  urlSegment: _propTypes2.default.string,
  leadInLabel: _propTypes2.default.string,
  component: _propTypes2.default.string
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@silverstripe/reactstrap-confirm/dist/Confirmation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _reactstrap = __webpack_require__(6);

/**
 * Renders a confirmation modal immediately with an onConfirm action. Used with `lib/confirm`.
 */
var Confirmation =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Confirmation, _Component);

  function Confirmation(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    return _this;
  }

  var _proto = Confirmation.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onConfirm = _this$props.onConfirm,
        onCancel = _this$props.onCancel,
        title = _this$props.title,
        body = _this$props.body,
        confirmLabel = _this$props.confirmLabel,
        dismissLabel = _this$props.dismissLabel,
        showDismissButton = _this$props.showDismissButton;
    var isOpen = this.state.isOpen;

    var handleToggle = function handleToggle() {
      if (typeof onCancel === 'function') {
        onCancel();
      }

      _this2.setState({
        isOpen: false
      });
    };

    var handleConfirm = function handleConfirm() {
      onConfirm();

      _this2.setState({
        isOpen: false
      });
    };

    return _react.default.createElement(_reactstrap.Modal, {
      isOpen: isOpen,
      toggle: handleToggle
    }, title && _react.default.createElement(_reactstrap.ModalHeader, {
      toggle: handleToggle
    }, title), _react.default.createElement(_reactstrap.ModalBody, null, body), _react.default.createElement(_reactstrap.ModalFooter, null, _react.default.createElement(_reactstrap.Button, {
      color: "primary",
      onClick: handleConfirm
    }, confirmLabel), (showDismissButton || !title) && _react.default.createElement(_reactstrap.Button, {
      onClick: handleToggle
    }, dismissLabel || 'Cancel')));
  };

  return Confirmation;
}(_react.Component);

Confirmation.propTypes = {
  onConfirm: _propTypes.default.func.isRequired,
  body: _propTypes.default.string.isRequired,
  onCancel: _propTypes.default.func,
  title: _propTypes.default.string,
  confirmLabel: _propTypes.default.string,
  dismissLabel: _propTypes.default.string
};
Confirmation.defaultProps = {
  confirmLabel: 'Confirm'
};
var _default = Confirmation;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@silverstripe/reactstrap-confirm/dist/confirm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(8));

var _Confirmation = _interopRequireDefault(__webpack_require__("./node_modules/@silverstripe/reactstrap-confirm/dist/Confirmation.js"));

var confirmation = function confirmation(message, additionalProps, mountNode, unmountDelay, Component) {
  if (additionalProps === void 0) {
    additionalProps = {};
  }

  if (mountNode === void 0) {
    mountNode = document.body;
  }

  if (unmountDelay === void 0) {
    unmountDelay = 350;
  }

  var ConfirmComponent = Component || _Confirmation.default;
  var wrapper = mountNode.appendChild(document.createElement('div'));
  return new Promise(function (resolve) {
    var createCompleteHandler = function createCompleteHandler(result) {
      return function () {
        resolve(result);
        setTimeout(function () {
          _reactDom.default.unmountComponentAtNode(wrapper);

          setTimeout(function () {
            return mountNode.removeChild(wrapper);
          });
        }, unmountDelay);
      };
    };

    _reactDom.default.render(_react.default.createElement(ConfirmComponent, (0, _extends2.default)({}, additionalProps, {
      onConfirm: createCompleteHandler(true),
      onCancel: createCompleteHandler(false),
      body: message
    })), wrapper);
  });
};

var _default = confirmation;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@silverstripe/reactstrap-confirm/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _confirm = _interopRequireDefault(__webpack_require__("./node_modules/@silverstripe/reactstrap-confirm/dist/confirm.js"));

var _Confirmation = _interopRequireDefault(__webpack_require__("./node_modules/@silverstripe/reactstrap-confirm/dist/Confirmation.js"));

exports.Confirmation = _Confirmation.default;
var _default = _confirm.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__("./node_modules/toggle-selection/index.js");

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        e.clipboardData.clearData();
        e.clipboardData.setData(options.format, text);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/printd/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var URL_LONG = /^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/g;
var URL_SHORT = /^([\.]?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/g;
var isValidURL = function (str) { return URL_LONG.test(str) || URL_SHORT.test(str); };
function createStyle(doc, cssText) {
    var style = doc.createElement('style');
    style.type = 'text/css';
    style.appendChild(window.document.createTextNode(cssText));
    return style;
}
exports.createStyle = createStyle;
function createLinkStyle(doc, url) {
    var style = doc.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = url;
    return style;
}
exports.createLinkStyle = createLinkStyle;
function createIFrame(parent) {
    var el = window.document.createElement('iframe');
    var css = 'visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;';
    el.setAttribute('src', 'about:blank');
    el.setAttribute('style', css);
    el.setAttribute('width', '0');
    el.setAttribute('height', '0');
    el.setAttribute('wmode', 'opaque');
    parent.appendChild(el);
    return el;
}
exports.createIFrame = createIFrame;
var DEFAULT_OPTIONS = {
    parent: window.document.body,
    headElements: [],
    bodyElements: []
};
/** Printd class that prints HTML elements in a blank document */
var Printd = /** @class */ (function () {
    function Printd(options) {
        this.isLoading = false;
        this.hasEvents = false;
        this.opts = Object.assign(DEFAULT_OPTIONS, (options || {}));
        this.iframe = createIFrame(this.opts.parent);
    }
    /** Gets current Iframe reference */
    Printd.prototype.getIFrame = function () {
        return this.iframe;
    };
    /**
     * Print an HTMLElement
     *
     * @param el HTMLElement
     * @param styles Optional styles (css texts or urls) that will add to iframe document.head
     * @param scripts Optional scripts (script texts or urls) that will add to iframe document.body
     * @param callback Optional callback that will be triggered when content is ready to print
     */
    Printd.prototype.print = function (el, styles, scripts, callback) {
        if (this.isLoading)
            return;
        var _a = this.iframe, contentDocument = _a.contentDocument, contentWindow = _a.contentWindow;
        if (!contentDocument || !contentWindow)
            return;
        this.iframe.src = 'about:blank';
        this.elCopy = el.cloneNode(true);
        if (!this.elCopy)
            return;
        this.isLoading = true;
        this.callback = callback;
        var doc = contentWindow.document;
        doc.open();
        doc.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>');
        this.addEvents();
        // 1. append custom elements
        var _b = this.opts, headElements = _b.headElements, bodyElements = _b.bodyElements;
        // 1.1 append custom head elements
        if (Array.isArray(headElements)) {
            headElements.forEach(function (el) { return doc.head.appendChild(el); });
        }
        // 1.1 append custom body elements
        if (Array.isArray(bodyElements)) {
            bodyElements.forEach(function (el) { return doc.body.appendChild(el); });
        }
        // 2. append custom styles
        if (Array.isArray(styles)) {
            styles.forEach(function (value) {
                if (value) {
                    if (isValidURL(value)) {
                        doc.head.appendChild(createLinkStyle(doc, value));
                    }
                    else {
                        doc.head.appendChild(createStyle(doc, value));
                    }
                }
            });
        }
        // 3. append element copy
        doc.body.appendChild(this.elCopy);
        // 4. append custom scripts
        if (Array.isArray(scripts)) {
            scripts.forEach(function (value) {
                if (value) {
                    var script = doc.createElement('script');
                    if (isValidURL(value)) {
                        script.src = value;
                    }
                    else {
                        script.innerText = value;
                    }
                    doc.body.appendChild(script);
                }
            });
        }
        doc.close();
    };
    /**
     * Print an URL
     *
     * @param url URL to print
     * @param callback Optional callback that will be triggered when content is ready to print
     */
    Printd.prototype.printURL = function (url, callback) {
        if (this.isLoading)
            return;
        this.addEvents();
        this.isLoading = true;
        this.callback = callback;
        this.iframe.src = url;
    };
    Printd.prototype.launchPrint = function (contentWindow) {
        var result = contentWindow.document.execCommand('print', false, null);
        if (!result) {
            contentWindow.print();
        }
    };
    Printd.prototype.addEvents = function () {
        var _this = this;
        if (!this.hasEvents) {
            this.hasEvents = true;
            this.iframe.addEventListener('load', function () { return _this.onLoad(); }, false);
        }
    };
    Printd.prototype.onLoad = function () {
        var _this = this;
        if (this.iframe) {
            this.isLoading = false;
            var _a = this.iframe, contentDocument = _a.contentDocument, contentWindow_1 = _a.contentWindow;
            if (!contentDocument || !contentWindow_1)
                return;
            if (this.callback) {
                this.callback({
                    iframe: this.iframe,
                    element: this.elCopy,
                    launchPrint: function () { return _this.launchPrint(contentWindow_1); }
                });
            }
            else {
                this.launchPrint(contentWindow_1);
            }
        }
    };
    return Printd;
}());
exports.Printd = Printd;
exports.default = Printd;


/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__("./node_modules/copy-to-clipboard/index.js");

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyToClipboard = exports.CopyToClipboard = function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;


      var elem = _react2.default.Children.only(children);

      var result = (0, _copyToClipboard2.default)(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyToClipboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _text = _props.text,
          _onCopy = _props.onCopy,
          _options = _props.options,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);

      var elem = _react2.default.Children.only(children);

      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.PureComponent);

CopyToClipboard.defaultProps = {
  onCopy: undefined,
  options: undefined
};

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = classnames;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = moment;

/***/ })

/******/ });
//# sourceMappingURL=bundle-cms.js.map