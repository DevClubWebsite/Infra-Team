'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var propTypes = {exports: {}};

var reactIs$3 = {exports: {}};

var reactIs_production_min$2 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b$3 = "function" === typeof Symbol && Symbol.for,
    c$2 = b$3 ? Symbol.for("react.element") : 60103,
    d$2 = b$3 ? Symbol.for("react.portal") : 60106,
    e$2 = b$3 ? Symbol.for("react.fragment") : 60107,
    f$2 = b$3 ? Symbol.for("react.strict_mode") : 60108,
    g$3 = b$3 ? Symbol.for("react.profiler") : 60114,
    h$2 = b$3 ? Symbol.for("react.provider") : 60109,
    k$4 = b$3 ? Symbol.for("react.context") : 60110,
    l$2 = b$3 ? Symbol.for("react.async_mode") : 60111,
    m$2 = b$3 ? Symbol.for("react.concurrent_mode") : 60111,
    n$2 = b$3 ? Symbol.for("react.forward_ref") : 60112,
    p$2 = b$3 ? Symbol.for("react.suspense") : 60113,
    q$4 = b$3 ? Symbol.for("react.suspense_list") : 60120,
    r$2 = b$3 ? Symbol.for("react.memo") : 60115,
    t$1 = b$3 ? Symbol.for("react.lazy") : 60116,
    v$3 = b$3 ? Symbol.for("react.block") : 60121,
    w$4 = b$3 ? Symbol.for("react.fundamental") : 60117,
    x$4 = b$3 ? Symbol.for("react.responder") : 60118,
    y$3 = b$3 ? Symbol.for("react.scope") : 60119;

function z$3(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c$2:
        switch (a = a.type, a) {
          case l$2:
          case m$2:
          case e$2:
          case g$3:
          case f$2:
          case p$2:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k$4:
              case n$2:
              case t$1:
              case r$2:
              case h$2:
                return a;

              default:
                return u;
            }

        }

      case d$2:
        return u;
    }
  }
}

function A$3(a) {
  return z$3(a) === m$2;
}

reactIs_production_min$2.AsyncMode = l$2;
reactIs_production_min$2.ConcurrentMode = m$2;
reactIs_production_min$2.ContextConsumer = k$4;
reactIs_production_min$2.ContextProvider = h$2;
reactIs_production_min$2.Element = c$2;
reactIs_production_min$2.ForwardRef = n$2;
reactIs_production_min$2.Fragment = e$2;
reactIs_production_min$2.Lazy = t$1;
reactIs_production_min$2.Memo = r$2;
reactIs_production_min$2.Portal = d$2;
reactIs_production_min$2.Profiler = g$3;
reactIs_production_min$2.StrictMode = f$2;
reactIs_production_min$2.Suspense = p$2;

reactIs_production_min$2.isAsyncMode = function (a) {
  return A$3(a) || z$3(a) === l$2;
};

reactIs_production_min$2.isConcurrentMode = A$3;

reactIs_production_min$2.isContextConsumer = function (a) {
  return z$3(a) === k$4;
};

reactIs_production_min$2.isContextProvider = function (a) {
  return z$3(a) === h$2;
};

reactIs_production_min$2.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c$2;
};

reactIs_production_min$2.isForwardRef = function (a) {
  return z$3(a) === n$2;
};

reactIs_production_min$2.isFragment = function (a) {
  return z$3(a) === e$2;
};

reactIs_production_min$2.isLazy = function (a) {
  return z$3(a) === t$1;
};

reactIs_production_min$2.isMemo = function (a) {
  return z$3(a) === r$2;
};

reactIs_production_min$2.isPortal = function (a) {
  return z$3(a) === d$2;
};

reactIs_production_min$2.isProfiler = function (a) {
  return z$3(a) === g$3;
};

reactIs_production_min$2.isStrictMode = function (a) {
  return z$3(a) === f$2;
};

reactIs_production_min$2.isSuspense = function (a) {
  return z$3(a) === p$2;
};

reactIs_production_min$2.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e$2 || a === m$2 || a === g$3 || a === f$2 || a === p$2 || a === q$4 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r$2 || a.$$typeof === h$2 || a.$$typeof === k$4 || a.$$typeof === n$2 || a.$$typeof === w$4 || a.$$typeof === x$4 || a.$$typeof === y$3 || a.$$typeof === v$3);
};

reactIs_production_min$2.typeOf = z$3;

var reactIs_development$2 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function () {
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    reactIs_development$2.AsyncMode = AsyncMode;
    reactIs_development$2.ConcurrentMode = ConcurrentMode;
    reactIs_development$2.ContextConsumer = ContextConsumer;
    reactIs_development$2.ContextProvider = ContextProvider;
    reactIs_development$2.Element = Element;
    reactIs_development$2.ForwardRef = ForwardRef;
    reactIs_development$2.Fragment = Fragment;
    reactIs_development$2.Lazy = Lazy;
    reactIs_development$2.Memo = Memo;
    reactIs_development$2.Portal = Portal;
    reactIs_development$2.Profiler = Profiler;
    reactIs_development$2.StrictMode = StrictMode;
    reactIs_development$2.Suspense = Suspense;
    reactIs_development$2.isAsyncMode = isAsyncMode;
    reactIs_development$2.isConcurrentMode = isConcurrentMode;
    reactIs_development$2.isContextConsumer = isContextConsumer;
    reactIs_development$2.isContextProvider = isContextProvider;
    reactIs_development$2.isElement = isElement;
    reactIs_development$2.isForwardRef = isForwardRef;
    reactIs_development$2.isFragment = isFragment;
    reactIs_development$2.isLazy = isLazy;
    reactIs_development$2.isMemo = isMemo;
    reactIs_development$2.isPortal = isPortal;
    reactIs_development$2.isProfiler = isProfiler;
    reactIs_development$2.isStrictMode = isStrictMode;
    reactIs_development$2.isSuspense = isSuspense;
    reactIs_development$2.isValidElementType = isValidElementType;
    reactIs_development$2.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$3.exports = reactIs_production_min$2;
} else {
  reactIs$3.exports = reactIs_development$2;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols$1) {
      symbols = getOwnPropertySymbols$1(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function () {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;

  var loggedTypeFailures = {};

  var has$1 = has$2;

  printWarning$1 = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {
      /**/
    }
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes$1.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs$3.exports;

var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

var has = has$2;

var checkPropTypes = checkPropTypes_1;

var printWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data : {};
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);

        if (checkerResult == null) {
          return null;
        }

        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }

      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$3.exports; // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b$2 = 60103,
    c$1 = 60106,
    d$1 = 60107,
    e$1 = 60108,
    f$1 = 60114,
    g$2 = 60109,
    h$1 = 60110,
    k$3 = 60112,
    l$1 = 60113,
    m$1 = 60120,
    n$1 = 60115,
    p$1 = 60116,
    q$3 = 60121,
    r$1 = 60122,
    u = 60117,
    v$2 = 60129,
    w$3 = 60131;

if ("function" === typeof Symbol && Symbol.for) {
  var x$3 = Symbol.for;
  b$2 = x$3("react.element");
  c$1 = x$3("react.portal");
  d$1 = x$3("react.fragment");
  e$1 = x$3("react.strict_mode");
  f$1 = x$3("react.profiler");
  g$2 = x$3("react.provider");
  h$1 = x$3("react.context");
  k$3 = x$3("react.forward_ref");
  l$1 = x$3("react.suspense");
  m$1 = x$3("react.suspense_list");
  n$1 = x$3("react.memo");
  p$1 = x$3("react.lazy");
  q$3 = x$3("react.block");
  r$1 = x$3("react.server.block");
  u = x$3("react.fundamental");
  v$2 = x$3("react.debug_trace_mode");
  w$3 = x$3("react.legacy_hidden");
}

function y$2(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;

    switch (t) {
      case b$2:
        switch (a = a.type, a) {
          case d$1:
          case f$1:
          case e$1:
          case l$1:
          case m$1:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case h$1:
              case k$3:
              case p$1:
              case n$1:
              case g$2:
                return a;

              default:
                return t;
            }

        }

      case c$1:
        return t;
    }
  }
}

var z$2 = g$2,
    A$2 = b$2,
    B$1 = k$3,
    C$1 = d$1,
    D$2 = p$1,
    E$2 = n$1,
    F$1 = c$1,
    G$2 = f$1,
    H$1 = e$1,
    I$2 = l$1;
reactIs_production_min$1.ContextConsumer = h$1;
reactIs_production_min$1.ContextProvider = z$2;
reactIs_production_min$1.Element = A$2;
reactIs_production_min$1.ForwardRef = B$1;
reactIs_production_min$1.Fragment = C$1;
reactIs_production_min$1.Lazy = D$2;
reactIs_production_min$1.Memo = E$2;
reactIs_production_min$1.Portal = F$1;
reactIs_production_min$1.Profiler = G$2;
reactIs_production_min$1.StrictMode = H$1;
reactIs_production_min$1.Suspense = I$2;

reactIs_production_min$1.isAsyncMode = function () {
  return !1;
};

reactIs_production_min$1.isConcurrentMode = function () {
  return !1;
};

reactIs_production_min$1.isContextConsumer = function (a) {
  return y$2(a) === h$1;
};

reactIs_production_min$1.isContextProvider = function (a) {
  return y$2(a) === g$2;
};

reactIs_production_min$1.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b$2;
};

reactIs_production_min$1.isForwardRef = function (a) {
  return y$2(a) === k$3;
};

reactIs_production_min$1.isFragment = function (a) {
  return y$2(a) === d$1;
};

reactIs_production_min$1.isLazy = function (a) {
  return y$2(a) === p$1;
};

reactIs_production_min$1.isMemo = function (a) {
  return y$2(a) === n$1;
};

reactIs_production_min$1.isPortal = function (a) {
  return y$2(a) === c$1;
};

reactIs_production_min$1.isProfiler = function (a) {
  return y$2(a) === f$1;
};

reactIs_production_min$1.isStrictMode = function (a) {
  return y$2(a) === e$1;
};

reactIs_production_min$1.isSuspense = function (a) {
  return y$2(a) === l$1;
};

reactIs_production_min$1.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d$1 || a === f$1 || a === v$2 || a === e$1 || a === l$1 || a === m$1 || a === w$3 || "object" === typeof a && null !== a && (a.$$typeof === p$1 || a.$$typeof === n$1 || a.$$typeof === g$2 || a.$$typeof === h$1 || a.$$typeof === k$3 || a.$$typeof === u || a.$$typeof === q$3 || a[0] === r$1) ? !0 : !1;
};

reactIs_production_min$1.typeOf = y$2;

var reactIs_development$1 = {};

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function () {
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      symbolFor('react.scope');
      symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    }

    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }
      return false;
    }

    function isConcurrentMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
          hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }
      return false;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    reactIs_development$1.ContextConsumer = ContextConsumer;
    reactIs_development$1.ContextProvider = ContextProvider;
    reactIs_development$1.Element = Element;
    reactIs_development$1.ForwardRef = ForwardRef;
    reactIs_development$1.Fragment = Fragment;
    reactIs_development$1.Lazy = Lazy;
    reactIs_development$1.Memo = Memo;
    reactIs_development$1.Portal = Portal;
    reactIs_development$1.Profiler = Profiler;
    reactIs_development$1.StrictMode = StrictMode;
    reactIs_development$1.Suspense = Suspense;
    reactIs_development$1.isAsyncMode = isAsyncMode;
    reactIs_development$1.isConcurrentMode = isConcurrentMode;
    reactIs_development$1.isContextConsumer = isContextConsumer;
    reactIs_development$1.isContextProvider = isContextProvider;
    reactIs_development$1.isElement = isElement;
    reactIs_development$1.isForwardRef = isForwardRef;
    reactIs_development$1.isFragment = isFragment;
    reactIs_development$1.isLazy = isLazy;
    reactIs_development$1.isMemo = isMemo;
    reactIs_development$1.isPortal = isPortal;
    reactIs_development$1.isProfiler = isProfiler;
    reactIs_development$1.isStrictMode = isStrictMode;
    reactIs_development$1.isSuspense = isSuspense;
    reactIs_development$1.isValidElementType = isValidElementType;
    reactIs_development$1.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$2.exports = reactIs_production_min$1;
} else {
  reactIs$2.exports = reactIs_development$1;
}

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b$1 = "function" === typeof Symbol && Symbol.for,
    c = b$1 ? Symbol.for("react.element") : 60103,
    d = b$1 ? Symbol.for("react.portal") : 60106,
    e = b$1 ? Symbol.for("react.fragment") : 60107,
    f = b$1 ? Symbol.for("react.strict_mode") : 60108,
    g$1 = b$1 ? Symbol.for("react.profiler") : 60114,
    h = b$1 ? Symbol.for("react.provider") : 60109,
    k$2 = b$1 ? Symbol.for("react.context") : 60110,
    l = b$1 ? Symbol.for("react.async_mode") : 60111,
    m = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
    n = b$1 ? Symbol.for("react.forward_ref") : 60112,
    p = b$1 ? Symbol.for("react.suspense") : 60113,
    q$2 = b$1 ? Symbol.for("react.suspense_list") : 60120,
    r = b$1 ? Symbol.for("react.memo") : 60115,
    t = b$1 ? Symbol.for("react.lazy") : 60116,
    v$1 = b$1 ? Symbol.for("react.block") : 60121,
    w$2 = b$1 ? Symbol.for("react.fundamental") : 60117,
    x$2 = b$1 ? Symbol.for("react.responder") : 60118,
    y$1 = b$1 ? Symbol.for("react.scope") : 60119;

function z$1(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g$1:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k$2:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A$1(a) {
  return z$1(a) === m;
}

reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k$2;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;

reactIs_production_min.isAsyncMode = function (a) {
  return A$1(a) || z$1(a) === l;
};

reactIs_production_min.isConcurrentMode = A$1;

reactIs_production_min.isContextConsumer = function (a) {
  return z$1(a) === k$2;
};

reactIs_production_min.isContextProvider = function (a) {
  return z$1(a) === h;
};

reactIs_production_min.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

reactIs_production_min.isForwardRef = function (a) {
  return z$1(a) === n;
};

reactIs_production_min.isFragment = function (a) {
  return z$1(a) === e;
};

reactIs_production_min.isLazy = function (a) {
  return z$1(a) === t;
};

reactIs_production_min.isMemo = function (a) {
  return z$1(a) === r;
};

reactIs_production_min.isPortal = function (a) {
  return z$1(a) === d;
};

reactIs_production_min.isProfiler = function (a) {
  return z$1(a) === g$1;
};

reactIs_production_min.isStrictMode = function (a) {
  return z$1(a) === f;
};

reactIs_production_min.isSuspense = function (a) {
  return z$1(a) === p;
};

reactIs_production_min.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g$1 || a === f || a === p || a === q$2 || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k$2 || a.$$typeof === n || a.$$typeof === w$2 || a.$$typeof === x$2 || a.$$typeof === y$1 || a.$$typeof === v$1);
};

reactIs_production_min.typeOf = z$1;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function () {
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    reactIs_development.AsyncMode = AsyncMode;
    reactIs_development.ConcurrentMode = ConcurrentMode;
    reactIs_development.ContextConsumer = ContextConsumer;
    reactIs_development.ContextProvider = ContextProvider;
    reactIs_development.Element = Element;
    reactIs_development.ForwardRef = ForwardRef;
    reactIs_development.Fragment = Fragment;
    reactIs_development.Lazy = Lazy;
    reactIs_development.Memo = Memo;
    reactIs_development.Portal = Portal;
    reactIs_development.Profiler = Profiler;
    reactIs_development.StrictMode = StrictMode;
    reactIs_development.Suspense = Suspense;
    reactIs_development.isAsyncMode = isAsyncMode;
    reactIs_development.isConcurrentMode = isConcurrentMode;
    reactIs_development.isContextConsumer = isContextConsumer;
    reactIs_development.isContextProvider = isContextProvider;
    reactIs_development.isElement = isElement;
    reactIs_development.isForwardRef = isForwardRef;
    reactIs_development.isFragment = isFragment;
    reactIs_development.isLazy = isLazy;
    reactIs_development.isMemo = isMemo;
    reactIs_development.isPortal = isPortal;
    reactIs_development.isProfiler = isProfiler;
    reactIs_development.isStrictMode = isStrictMode;
    reactIs_development.isSuspense = isSuspense;
    reactIs_development.isValidElementType = isValidElementType;
    reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

var reactIs = reactIs$1.exports;
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function y() {
  return (y = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }

    return e;
  }).apply(this, arguments);
}

var v = function (e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);

  return n;
},
    g = function (t) {
  return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !reactIs$2.exports.typeOf(t);
},
    S$1 = Object.freeze([]),
    w$1 = Object.freeze({});

function E$1(e) {
  return "function" == typeof e;
}

function b(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}

function _$1(e) {
  return e && "string" == typeof e.styledComponentId;
}

var N = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
    C = "undefined" != typeof window && "HTMLElement" in window,
    I$1 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV),
    P = {},
    O = "production" !== process.env.NODE_ENV ? {
  1: "Cannot create styled-component for component: %s.\n\n",
  2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
  8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
  9: "Missing document `<head>`\n\n",
  10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  14: 'ThemeProvider: "theme" prop is required.\n\n',
  15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
} : {};

function R() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);

  return t.forEach(function (t) {
    e = e.replace(/%[a-z]/, t);
  }), e;
}

function D$1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

  throw "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(R.apply(void 0, [O[e]].concat(n)).trim());
}

var j = function () {
  function e(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }

  var t = e.prototype;
  return t.indexOfGroup = function (e) {
    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];

    return t;
  }, t.insertRules = function (e, t) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && D$1(16, "" + e);

      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;

      for (var s = r; s < o; s++) this.groupSizes[s] = 0;
    }

    for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
  }, t.clearGroup = function (e) {
    if (e < this.length) {
      var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
      this.groupSizes[e] = 0;

      for (var o = n; o < r; o++) this.tag.deleteRule(n);
    }
  }, t.getGroup = function (e) {
    var t = "";
    if (e >= this.length || 0 === this.groupSizes[e]) return t;

    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";

    return t;
  }, e;
}(),
    T = new Map(),
    x$1 = new Map(),
    k$1 = 1,
    V = function (e) {
  if (T.has(e)) return T.get(e);

  for (; x$1.has(k$1);) k$1++;

  var t = k$1++;
  return "production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > 1 << 30) && D$1(16, "" + t), T.set(e, t), x$1.set(t, e), t;
},
    z = function (e) {
  return x$1.get(e);
},
    B = function (e, t) {
  t >= k$1 && (k$1 = t + 1), T.set(e, t), x$1.set(t, e);
},
    M$1 = "style[" + N + '][data-styled-version="5.3.5"]',
    G$1 = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    L = function (e, t, n) {
  for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
},
    F = function (e, t) {
  for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
    var i = n[o].trim();

    if (i) {
      var a = i.match(G$1);

      if (a) {
        var c = 0 | parseInt(a[1], 10),
            u = a[2];
        0 !== c && (B(u, c), L(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else r.push(i);
    }
  }
},
    Y = function () {
  return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
},
    q$1 = function (e) {
  var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
    for (var t = e.childNodes, n = t.length; n >= 0; n--) {
      var r = t[n];
      if (r && 1 === r.nodeType && r.hasAttribute(N)) return r;
    }
  }(n),
      s = void 0 !== o ? o.nextSibling : null;

  r.setAttribute(N, "active"), r.setAttribute("data-styled-version", "5.3.5");
  var i = Y();
  return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
},
    H = function () {
  function e(e) {
    var t = this.element = q$1(e);
    t.appendChild(document.createTextNode("")), this.sheet = function (e) {
      if (e.sheet) return e.sheet;

      for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
        var o = t[n];
        if (o.ownerNode === e) return o;
      }

      D$1(17);
    }(t), this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    try {
      return this.sheet.insertRule(t, e), this.length++, !0;
    } catch (e) {
      return !1;
    }
  }, t.deleteRule = function (e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.getRule = function (e) {
    var t = this.sheet.cssRules[e];
    return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
  }, e;
}(),
    $ = function () {
  function e(e) {
    var t = this.element = q$1(e);
    this.nodes = t.childNodes, this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(t),
          r = this.nodes[e];
      return this.element.insertBefore(n, r || null), this.length++, !0;
    }

    return !1;
  }, t.deleteRule = function (e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.getRule = function (e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, e;
}(),
    W$1 = function () {
  function e(e) {
    this.rules = [], this.length = 0;
  }

  var t = e.prototype;
  return t.insertRule = function (e, t) {
    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
  }, t.deleteRule = function (e) {
    this.rules.splice(e, 1), this.length--;
  }, t.getRule = function (e) {
    return e < this.length ? this.rules[e] : "";
  }, e;
}(),
    U$1 = C,
    J$1 = {
  isServer: !C,
  useCSSOMInjection: !I$1
},
    X = function () {
  function e(e, t, n) {
    void 0 === e && (e = w$1), void 0 === t && (t = {}), this.options = y({}, J$1, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && C && U$1 && (U$1 = !1, function (e) {
      for (var t = document.querySelectorAll(M$1), n = 0, r = t.length; n < r; n++) {
        var o = t[n];
        o && "active" !== o.getAttribute(N) && (F(e, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }

  e.registerId = function (e) {
    return V(e);
  };

  var t = e.prototype;
  return t.reconstructWithOptions = function (t, n) {
    return void 0 === n && (n = !0), new e(y({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function (e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.getTag = function () {
    return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new W$1(o) : r ? new H(o) : new $(o), new j(e)));
    var e, t, n, r, o;
  }, t.hasNameForId = function (e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, t.registerName = function (e, t) {
    if (V(e), this.names.has(e)) this.names.get(e).add(t);else {
      var n = new Set();
      n.add(t), this.names.set(e, n);
    }
  }, t.insertRules = function (e, t, n) {
    this.registerName(e, t), this.getTag().insertRules(V(e), n);
  }, t.clearNames = function (e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.clearRules = function (e) {
    this.getTag().clearGroup(V(e)), this.clearNames(e);
  }, t.clearTag = function () {
    this.tag = void 0;
  }, t.toString = function () {
    return function (e) {
      for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
        var s = z(o);

        if (void 0 !== s) {
          var i = e.names.get(s),
              a = t.getGroup(o);

          if (i && a && i.size) {
            var c = N + ".g" + o + '[id="' + s + '"]',
                u = "";
            void 0 !== i && i.forEach(function (e) {
              e.length > 0 && (u += e + ",");
            }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
          }
        }
      }

      return r;
    }(this);
  }, e;
}(),
    Z = /(a)(d)/gi,
    K = function (e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};

function Q$1(e) {
  var t,
      n = "";

  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = K(t % 52) + n;

  return (K(t % 52) + n).replace(Z, "$1-$2");
}

var ee$1 = function (e, t) {
  for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);

  return e;
},
    te = function (e) {
  return ee$1(5381, e);
};

function ne(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (E$1(n) && !_$1(n)) return !1;
  }

  return !0;
}

var re$1 = te("5.3.5"),
    oe = function () {
  function e(e, t, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && ne(e), this.componentId = t, this.baseHash = ee$1(re$1, t), this.baseStyle = n, X.registerId(t);
  }

  return e.prototype.generateAndInjectStyles = function (e, t, n) {
    var r = this.componentId,
        o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
      if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
        var s = _e$1(this.rules, e, t, n).join(""),
            i = Q$1(ee$1(this.baseHash, s) >>> 0);

        if (!t.hasNameForId(r, i)) {
          var a = n(s, "." + i, void 0, r);
          t.insertRules(r, i, a);
        }

        o.push(i), this.staticRulesId = i;
      }
    } else {
      for (var c = this.rules.length, u = ee$1(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if ("string" == typeof h) l += h, "production" !== process.env.NODE_ENV && (u = ee$1(u, h + d));else if (h) {
          var p = _e$1(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;

          u = ee$1(u, f + d), l += f;
        }
      }

      if (l) {
        var m = Q$1(u >>> 0);

        if (!t.hasNameForId(r, m)) {
          var y = n(l, "." + m, void 0, r);
          t.insertRules(r, m, y);
        }

        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(),
    se$1 = /^\s*\/\/.*$/gm,
    ie = [":", "[", ".", "#"];

function ae$1(e) {
  var t,
      n,
      r,
      o,
      s = void 0 === e ? w$1 : e,
      i = s.options,
      a = void 0 === i ? w$1 : i,
      c = s.plugins,
      u = void 0 === c ? S$1 : c,
      l = new stylis_min(a),
      d = [],
      p = function (e) {
    function t(t) {
      if (t) try {
        e(t + "}");
      } catch (e) {}
    }

    return function (n, r, o, s, i, a, c, u, l, d) {
      switch (n) {
        case 1:
          if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
          break;

        case 2:
          if (0 === u) return r + "/*|*/";
          break;

        case 3:
          switch (u) {
            case 102:
            case 112:
              return e(o[0] + r), "";

            default:
              return r + (0 === d ? "/*|*/" : "");
          }

        case -2:
          r.split("/*|*/}").forEach(t);
      }
    };
  }(function (e) {
    d.push(e);
  }),
      f = function (e, r, s) {
    return 0 === r && -1 !== ie.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
  };

  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(se$1, ""),
        u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }

  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, p, function (e) {
    if (-2 === e) {
      var t = d;
      return d = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || D$1(15), ee$1(e, t.name);
  }, 5381).toString() : "", m;
}

var ce$1 = /*#__PURE__*/React__default["default"].createContext();
    ce$1.Consumer;
    var le = /*#__PURE__*/React__default["default"].createContext(),
    de$1 = (le.Consumer, new X()),
    he = ae$1();

function pe$1() {
  return React.useContext(ce$1) || de$1;
}

function fe$1() {
  return React.useContext(le) || he;
}

var ye = function () {
  function e(e, t) {
    var n = this;
    this.inject = function (e, t) {
      void 0 === t && (t = he);
      var r = n.name + t.hash;
      e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
    }, this.toString = function () {
      return D$1(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
  }

  return e.prototype.getName = function (e) {
    return void 0 === e && (e = he), this.name + e.hash;
  }, e;
}(),
    ve = /([A-Z])/,
    ge = /([A-Z])/g,
    Se = /^ms-/,
    we = function (e) {
  return "-" + e.toLowerCase();
};

function Ee$1(e) {
  return ve.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
}

var be = function (e) {
  return null == e || !1 === e || "" === e;
};

function _e$1(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = _e$1(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));

    return i;
  }

  if (be(e)) return "";
  if (_$1(e)) return "." + e.styledComponentId;

  if (E$1(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return "production" !== process.env.NODE_ENV && reactIs$2.exports.isElement(u) && console.warn(b(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _e$1(u, n, r, o);
  }

  var l;
  return e instanceof ye ? r ? (e.inject(r, o), e.getName(o)) : e : g(e) ? function e(t, n) {
    var r,
        o,
        s = [];

    for (var i in t) t.hasOwnProperty(i) && !be(t[i]) && (Array.isArray(t[i]) && t[i].isCss || E$1(t[i]) ? s.push(Ee$1(i) + ":", t[i], ";") : g(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(Ee$1(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys ? String(o).trim() : o + "px") + ";"));

    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}

var Ne$1 = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};

function Ae(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

  return E$1(e) || g(e) ? Ne$1(_e$1(v(S$1, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne$1(_e$1(v(e, n)));
}

var Ce = /invalid hook call/i,
    Ie = new Set(),
    Pe = function (e, t) {
  if ("production" !== process.env.NODE_ENV) {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
        r = console.error;

    try {
      var o = !0;
      console.error = function (e) {
        if (Ce.test(e)) o = !1, Ie.delete(n);else {
          for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) s[i - 1] = arguments[i];

          r.apply(void 0, [e].concat(s));
        }
      }, React.useRef(), o && !Ie.has(n) && (console.warn(n), Ie.add(n));
    } catch (e) {
      Ce.test(e.message) && Ie.delete(n);
    } finally {
      console.error = r;
    }
  }
},
    Oe = function (e, t, n) {
  return void 0 === n && (n = w$1), e.theme !== n.theme && e.theme || t || n.theme;
},
    Re$1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    De$1 = /(^-|-$)/g;

function je(e) {
  return e.replace(Re$1, "-").replace(De$1, "");
}

var Te$1 = function (e) {
  return Q$1(te(e) >>> 0);
};

function xe$1(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}

var ke$1 = function (e) {
  return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
},
    Ve$1 = function (e) {
  return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
};

function ze(e, t, n) {
  var r = e[n];
  ke$1(t) && ke$1(r) ? Be$1(r, t) : e[n] = t;
}

function Be$1(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (ke$1(i)) for (var a in i) Ve$1(a) && ze(e, i[a], a);
  }

  return e;
}

var Me = /*#__PURE__*/React__default["default"].createContext();
    Me.Consumer;

var Fe = {};

function Ye$1(e, t, n) {
  var o = _$1(e),
      i = !xe$1(e),
      a = t.attrs,
      c = void 0 === a ? S$1 : a,
      d = t.componentId,
      h = void 0 === d ? function (e, t) {
    var n = "string" != typeof e ? "sc" : je(e);
    Fe[n] = (Fe[n] || 0) + 1;
    var r = n + "-" + Te$1("5.3.5" + n + Fe[n]);
    return t ? t + "-" + r : r;
  }(t.displayName, t.parentComponentId) : d,
      p = t.displayName,
      v = void 0 === p ? function (e) {
    return xe$1(e) ? "styled." + e : "Styled(" + b(e) + ")";
  }(e) : p,
      g = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || h,
      N = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
      A = t.shouldForwardProp;

  o && e.shouldForwardProp && (A = t.shouldForwardProp ? function (n, r, o) {
    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
  } : e.shouldForwardProp);

  var C,
      I = new oe(n, g, o ? e.componentStyle : void 0),
      P = I.isStatic && 0 === c.length,
      O = function (e, t) {
    return function (e, t, n, r) {
      var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          d = e.shouldForwardProp,
          h = e.styledComponentId,
          p = e.target;
      "production" !== process.env.NODE_ENV && React.useDebugValue(h);

      var m = function (e, t, n) {
        void 0 === e && (e = w$1);
        var r = y({}, t, {
          theme: e
        }),
            o = {};
        return n.forEach(function (e) {
          var t,
              n,
              s,
              i = e;

          for (t in E$1(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
        }), [r, o];
      }(Oe(t, React.useContext(Me), a) || w$1, t, o),
          v = m[0],
          g = m[1],
          S = function (e, t, n, r) {
        var o = pe$1(),
            s = fe$1(),
            i = t ? e.generateAndInjectStyles(w$1, o, s) : e.generateAndInjectStyles(n, o, s);
        return "production" !== process.env.NODE_ENV && React.useDebugValue(i), "production" !== process.env.NODE_ENV && !t && r && r(i), i;
      }(i, r, v, "production" !== process.env.NODE_ENV ? e.warnTooManyClasses : void 0),
          b = n,
          _ = g.$as || t.$as || g.as || t.as || p,
          N = xe$1(_),
          A = g !== t ? y({}, t, {}, g) : t,
          C = {};

      for (var I in A) "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, isPropValid, _) : !N || isPropValid(I)) && (C[I] = A[I]));

      return t.style && g.style !== t.style && (C.style = y({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = b, /*#__PURE__*/React.createElement(_, C);
    }(C, e, t, P);
  };

  return O.displayName = v, (C = /*#__PURE__*/React__default["default"].forwardRef(O)).attrs = N, C.componentStyle = I, C.displayName = v, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : S$1, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
    var r = t.componentId,
        o = function (e, t) {
      if (null == e) return {};
      var n,
          r,
          o = {},
          s = Object.keys(e);

      for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);

      return o;
    }(t, ["componentId"]),
        s = r && r + "-" + (xe$1(e) ? e : je(b(e)));

    return Ye$1(e, y({}, o, {
      attrs: N,
      componentId: s
    }), n);
  }, Object.defineProperty(C, "defaultProps", {
    get: function () {
      return this._foldedDefaultProps;
    },
    set: function (t) {
      this._foldedDefaultProps = o ? Be$1({}, e.defaultProps, t) : t;
    }
  }), "production" !== process.env.NODE_ENV && (Pe(v, g), C.warnTooManyClasses = function (e, t) {
    var n = {},
        r = !1;
    return function (o) {
      if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
        var s = t ? ' with the id of "' + t + '"' : "";
        console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
      }
    };
  }(v, g)), C.toString = function () {
    return "." + C.styledComponentId;
  }, i && hoistNonReactStatics_cjs(C, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), C;
}

var qe = function (e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = w$1), !reactIs$2.exports.isValidElementType(r)) return D$1(1, String(r));

    var s = function () {
      return t(r, o, Ae.apply(void 0, arguments));
    };

    return s.withConfig = function (n) {
      return e(t, r, y({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, y({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(Ye$1, e);
};

["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
  qe[e] = qe(e);
});

var He = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = ne(e), X.registerId(this.componentId + 1);
  }

  var t = e.prototype;
  return t.createStyles = function (e, t, n, r) {
    var o = r(_e$1(this.rules, t, n, r).join(""), ""),
        s = this.componentId + e;
    n.insertRules(s, s, o);
  }, t.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, t.renderStyles = function (e, t, n, r) {
    e > 2 && X.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();

function $e(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];

  var i = Ae.apply(void 0, [e].concat(n)),
      a = "sc-global-" + Te$1(JSON.stringify(i)),
      u = new He(i, a);

  function l(e) {
    var t = pe$1(),
        n = fe$1(),
        o = React.useContext(Me),
        u = React.useRef(t.allocateGSInstance(a)).current;
    return "production" !== process.env.NODE_ENV && React__default["default"].Children.count(e.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."), "production" !== process.env.NODE_ENV && i.some(function (e) {
      return "string" == typeof e && -1 !== e.indexOf("@import");
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.server && d(u, e, t, o, n), null;
  }

  function d(e, t, n, r, o) {
    if (u.isStatic) u.renderStyles(e, P, n, o);else {
      var s = y({}, t, {
        theme: Oe(t, r, l.defaultProps)
      });
      u.renderStyles(e, s, n, o);
    }
  }

  return "production" !== process.env.NODE_ENV && Pe(a), /*#__PURE__*/React__default["default"].memo(l);
}

"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var styled = qe;

const StyledButton = styled.button`
  padding: 0.5rem;
  min-width: ${({
  width
}) => width}rem;
  min-height: ${({
  height
}) => height}rem;
  border-radius: 0.277rem;
  border: none;
  background: ${({
  background
}) => background};
  color: ${({
  color
}) => color};
  ${({
  variant
}) => variant === "outlined" && Ae`
      border: 1.5px solid ${({
  color
}) => color};
    `}
`;

const Theme = {
  background: {
    dark: "#040413",
    light: "#0A0A1B",
    blue: "#121231",
    yellow: "#F6C927"
  },
  border: {
    blue: "#1F1F53"
  },
  typography: {
    white: "#FFFFFF",
    yellow: "#F6C927",
    dark: "#0A0A1B",
    darker: "#0E0E28"
  }
};

function Button({
  background = Theme.background.dark,
  color = "none",
  variant = "regular",
  width = 10,
  height = 3,
  padding = 0.2,
  onclick,
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledButton, {
    onClick: () => onclick(),
    background: background,
    color: color,
    variant: variant,
    width: width,
    height: height,
    padding: padding
  }, children));
}
Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["regular", "outlined", "text"]),
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  onclick: PropTypes.func
};

const StyledButtonCTA = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${Theme.background.yellow};
  border-radius: 0.227rem;
  padding: 0 0.227rem 0 0.833rem;
  min-width: 15.444em;
  min-height: 3.055em;
  font-size: 1rem;
  border: none;
  ${props => props.size === "mobile" && Ae`
      font-size: 0.7rem;
    `}
`;
const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5em;
  height: 2.722em;
  background: ${Theme.background.dark};
  border-radius: 0.227rem;
  ${props => props.size === "mobile" && Ae`
      font-size: 0.7rem;
    `}
`;

var img$1 = "data:image/svg+xml,%3csvg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.9285 5.88406L18.6987 6.72233H17.5603H0.714239C0.671812 6.72233 0.621553 6.7403 0.577448 6.78832C0.532032 6.83777 0.5 6.91328 0.5 7C0.5 7.08672 0.532034 7.16223 0.577448 7.21168C0.621552 7.2597 0.67181 7.27767 0.714239 7.27767H17.5603H18.6987L17.9285 8.11594L13.4331 13.009C13.4331 13.009 13.4331 13.009 13.4331 13.009C13.4109 13.0332 13.3912 13.0642 13.3772 13.1012C13.3631 13.1382 13.3554 13.1791 13.3554 13.2213C13.3554 13.2636 13.3631 13.3045 13.3772 13.3415C13.3913 13.3785 13.4109 13.4095 13.4331 13.4337C13.4553 13.4578 13.4793 13.4745 13.5024 13.4849C13.5255 13.4953 13.5485 13.5 13.5706 13.5C13.5926 13.5 13.6156 13.4953 13.6387 13.4849C13.6619 13.4745 13.6858 13.4578 13.708 13.4337L19.4219 7.21237L19.4223 7.21191C19.4445 7.1878 19.4642 7.1569 19.4782 7.11999C19.4923 7.08305 19.5 7.04216 19.5 7C19.5 6.95784 19.4923 6.91695 19.4782 6.88001C19.4642 6.8431 19.4445 6.8122 19.4223 6.78809L19.4219 6.78763L13.708 0.566278C13.6858 0.542158 13.6619 0.525522 13.6387 0.515062C13.6156 0.504665 13.5926 0.5 13.5706 0.5C13.5485 0.5 13.5255 0.504665 13.5024 0.515062C13.4793 0.525522 13.4553 0.542158 13.4331 0.566278C13.4109 0.590484 13.3913 0.621477 13.3772 0.658458C13.3631 0.695472 13.3554 0.736428 13.3554 0.778651C13.3554 0.820875 13.3631 0.861831 13.3772 0.898844C13.3912 0.935795 13.4109 0.966768 13.4331 0.990966C13.4331 0.990985 13.4331 0.991005 13.4331 0.991024L17.9285 5.88406Z' stroke='%23F6C927'/%3e%3c/svg%3e";

const StyledTypography = ({ ...props
}) => {
  const Container = styled(props.variant)`
    color: ${props => props.color};
    ${props => {
    props.weight && Ae`
          font-weight: ${props.weight};
        `;
  }}
    ${({
    size
  }) => {
    if (size) {
      return Ae`
          font-size: ${size}rem;
        `;
    }
  }}
  `;
  return /*#__PURE__*/React__default["default"].createElement(Container, props);
};

function Typography({
  children = 'Text',
  variant,
  color,
  weight,
  size
}) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledTypography, {
    weight: weight,
    variant: variant,
    color: color,
    size: size
  }, children));
}
Typography.propTypes = {
  variant: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  color: PropTypes.string.isRequired,
  weight: PropTypes.number,
  size: PropTypes.number
};

function ButtonCTA({
  children,
  size = "regular"
}) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledButtonCTA, {
    size: size
  }, /*#__PURE__*/React__default["default"].createElement(Typography, {
    variant: "p",
    color: "black"
  }, children), /*#__PURE__*/React__default["default"].createElement(ArrowDiv, {
    size: size
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$1,
    alt: "arrow"
  }))));
}

ButtonCTA.propTypes = {
  size: PropTypes.oneOf(["regular", "mobile"])
};

const StyledNavbar = styled.nav`
    ul {
        display: flex;
        flex-direction: ${({
  direction
}) => direction};
        gap: ${({
  gap
}) => `${gap}rem`}
    }
`;

const StyledNavbarButton = styled.a`
    text-decoration:none; 
    color: ${({
  color
}) => color}; 
`;

function NavbarButton({
  text,
  url,
  focusedElement,
  setFocusedElement,
  id
}) {
  const color = focusedElement === id ? Theme.typography.yellow : Theme.typography.white;

  const changeColor = id => {
    console.log(id);
    setFocusedElement(id);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledNavbarButton, {
    target: "_blank",
    color: color,
    href: url,
    onClick: () => changeColor(id)
  }, text));
}

function Navbar({
  items,
  direction = "row",
  gap = 1
}) {
  const [focusedElement, setFocusedElement] = React.useState(0);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledNavbar, {
    direction: direction,
    gap: gap
  }, /*#__PURE__*/React__default["default"].createElement("ul", null, items.map((item, index) => {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      key: index
    }, /*#__PURE__*/React__default["default"].createElement(NavbarButton, {
      text: item.text,
      url: item.url,
      focusedElement: focusedElement,
      setFocusedElement: setFocusedElement,
      id: index
    }));
  }))));
}

Navbar.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
  gap: PropTypes.number
};

const StyledCard = styled.div`
    width: ${({
  width
}) => width}rem;
    height: ${({
  height
}) => height}rem;
    background-color: ${({
  color
}) => color};
    ${({
  border
}) => border && Ae`
      border: 1px solid ${({
  border
}) => border};
    `}
    border-radius: 0.555rem
`;

function Card({
  width = 12.222,
  height = 14.222,
  color = "#F6C927",
  border,
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledCard, {
    width: width,
    height: height,
    color: color,
    border: border
  }, children));
}
Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  border: PropTypes.string
};

const GlobalStyles = $e`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root {
        font-size: 18px;
    }

    html {
        font-family: 'Poppins', sans-serif;
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }     

    button {
        border:none;
    }

`;

function k() {
  let e = [],
      t = [],
      r = {
    enqueue(o) {
      t.push(o);
    },

    requestAnimationFrame(...o) {
      let n = requestAnimationFrame(...o);
      r.add(() => cancelAnimationFrame(n));
    },

    nextFrame(...o) {
      r.requestAnimationFrame(() => {
        r.requestAnimationFrame(...o);
      });
    },

    setTimeout(...o) {
      let n = setTimeout(...o);
      r.add(() => clearTimeout(n));
    },

    add(o) {
      e.push(o);
    },

    dispose() {
      for (let o of e.splice(0)) o();
    },

    async workQueue() {
      for (let o of t.splice(0)) await o();
    }

  };
  return r;
}

function Q() {
  let [e] = React.useState(k);
  return React.useEffect(() => () => e.dispose(), [e]), e;
}
var x = typeof window != "undefined" ? React.useLayoutEffect : React.useEffect;
var yt = {
  serverHandoffComplete: !1
};

function q() {
  let [e, t] = React.useState(yt.serverHandoffComplete);
  return React.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), React.useEffect(() => {
    yt.serverHandoffComplete === !1 && (yt.serverHandoffComplete = !0);
  }, []), e;
}

var or = 0;

function to() {
  return ++or;
}

function A() {
  let e = q(),
      [t, r] = React.useState(e ? to : null);
  return x(() => {
    t === null && r(to());
  }, [t]), t != null ? "" + t : void 0;
}

function ke(e) {
  let t = React.useRef(e);
  return React.useEffect(() => {
    t.current = e;
  }, [e]), t;
}

function ee(e, t) {
  let [r, o] = React.useState(e),
      n = ke(e);
  return x(() => o(n.current), [n, o, ...t]), r;
}

function I(...e) {
  let t = React.useRef(e);
  return React.useEffect(() => {
    t.current = e;
  }, [e]), React.useCallback(r => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  }, [t]);
}

function S(e, t, ...r) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...r) : n;
  }

  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, S), o;
}

function E({
  props: e,
  slot: t,
  defaultTag: r,
  features: o,
  visible: n = !0,
  name: i
}) {
  if (n) return _e(e, t, r, i);
  let a = o != null ? o : 0;

  if (a & 2) {
    let {
      static: l = !1,
      ...s
    } = e;
    if (l) return _e(s, t, r, i);
  }

  if (a & 1) {
    let {
      unmount: l = !0,
      ...s
    } = e;
    return S(l ? 0 : 1, {
      [0]() {
        return null;
      },

      [1]() {
        return _e({ ...s,
          hidden: !0,
          style: {
            display: "none"
          }
        }, t, r, i);
      }

    });
  }

  return _e(e, t, r, i);
}

function _e(e, t = {}, r, o) {
  let {
    as: n = r,
    children: i,
    refName: a = "ref",
    ...l
  } = gt(e, ["unmount", "static"]),
      s = e.ref !== void 0 ? {
    [a]: e.ref
  } : {},
      u = typeof i == "function" ? i(t) : i;

  if (l.className && typeof l.className == "function" && (l.className = l.className(t)), n === React.Fragment && Object.keys(l).length > 0) {
    if (! /*#__PURE__*/React.isValidElement(u) || Array.isArray(u) && u.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map(c => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(c => `  - ${c}`).join(`
`)].join(`
`));
    return /*#__PURE__*/React.cloneElement(u, Object.assign({}, fr(mr(gt(l, ["ref"])), u.props, ["onClick"]), s));
  }

  return /*#__PURE__*/React.createElement(n, Object.assign({}, gt(l, ["ref"]), n !== React.Fragment && s), u);
}

function fr(e, t, r) {
  let o = Object.assign({}, e);

  for (let n of r) e[n] !== void 0 && t[n] !== void 0 && Object.assign(o, {
    [n](i) {
      i.defaultPrevented || e[n](i), i.defaultPrevented || t[n](i);
    }

  });

  return o;
}

function D(e) {
  var t;
  return Object.assign( /*#__PURE__*/React.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name
  });
}

function mr(e) {
  let t = Object.assign({}, e);

  for (let r in t) t[r] === void 0 && delete t[r];

  return t;
}

function gt(e, t = []) {
  let r = Object.assign({}, e);

  for (let o of t) o in r && delete r[o];

  return r;
}

function br(e) {
  throw new Error("Unexpected object: " + e);
}

function ae(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0) return null;

  let o = t.resolveActiveIndex(),
      n = o != null ? o : -1,
      i = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex(a => !t.resolveDisabled(a));

      case 1:
        {
          let a = r.slice().reverse().findIndex((l, s, u) => n !== -1 && u.length - s - 1 >= n ? !1 : !t.resolveDisabled(l));
          return a === -1 ? a : r.length - 1 - a;
        }

      case 2:
        return r.findIndex((a, l) => l <= n ? !1 : !t.resolveDisabled(a));

      case 3:
        {
          let a = r.slice().reverse().findIndex(l => !t.resolveDisabled(l));
          return a === -1 ? a : r.length - 1 - a;
        }

      case 4:
        return r.findIndex(a => t.resolveId(a) === e.id);

      case 5:
        return null;

      default:
        br(e);
    }
  })();

  return i === -1 ? o : i;
}

function G(e) {
  let t = e.parentElement,
      r = null;

  for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;

  let o = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return o && Tr(r) ? !1 : o;
}

function Tr(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;

  for (; t !== null;) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }

  return !0;
}

function w(e, t, r) {
  let o = React.useRef(t);
  o.current = t, React.useEffect(() => {
    function n(i) {
      o.current.call(window, i);
    }

    return window.addEventListener(e, n, r), () => window.removeEventListener(e, n, r);
  }, [e, r]);
}
var Pt = /*#__PURE__*/React.createContext(null);
Pt.displayName = "OpenClosedContext";

function _() {
  return React.useContext(Pt);
}

function W({
  value: e,
  children: t
}) {
  return /*#__PURE__*/React__default["default"].createElement(Pt.Provider, {
    value: e
  }, t);
}

function ro(e) {
  var r;
  if (e.type) return e.type;
  let t = (r = e.as) != null ? r : "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}

function U(e, t) {
  let [r, o] = React.useState(() => ro(e));
  return x(() => {
    o(ro(e));
  }, [e.type, e.as]), x(() => {
    r || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button");
  }, [r, t]), r;
}

function se({
  container: e,
  accept: t,
  walk: r,
  enabled: o = !0
}) {
  let n = React.useRef(t),
      i = React.useRef(r);
  React.useEffect(() => {
    n.current = t, i.current = r;
  }, [t, r]), x(() => {
    if (!e || !o) return;
    let a = n.current,
        l = i.current,
        s = Object.assign(c => a(c), {
      acceptNode: a
    }),
        u = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);

    for (; u.nextNode();) l(u.currentNode);
  }, [e, o, n, i]);
}

var Ar = {
  [1](e) {
    return e.disabled || e.comboboxState === 1 ? e : { ...e,
      activeOptionIndex: null,
      comboboxState: 1
    };
  },

  [0](e) {
    return e.disabled || e.comboboxState === 0 ? e : { ...e,
      comboboxState: 0
    };
  },

  [2](e, t) {
    return e.disabled === t.disabled ? e : { ...e,
      disabled: t.disabled
    };
  },

  [3](e, t) {
    if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && e.comboboxState === 1) return e;
    let r = ae(t, {
      resolveItems: () => e.options,
      resolveActiveIndex: () => e.activeOptionIndex,
      resolveId: o => o.id,
      resolveDisabled: o => o.dataRef.current.disabled
    });
    return e.activeOptionIndex === r ? e : { ...e,
      activeOptionIndex: r
    };
  },

  [4]: (e, t) => {
    var i;
    let r = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
        o = Array.from((i = e.optionsRef.current) == null ? void 0 : i.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a, l, s) => Object.assign(a, {
      [l.id]: s
    }), {}),
        n = [...e.options, {
      id: t.id,
      dataRef: t.dataRef
    }].sort((a, l) => o[a.id] - o[l.id]);
    return { ...e,
      options: n,
      activeOptionIndex: (() => r === null ? null : n.indexOf(r))()
    };
  },
  [5]: (e, t) => {
    let r = e.options.slice(),
        o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null,
        n = r.findIndex(i => i.id === t.id);
    return n !== -1 && r.splice(n, 1), { ...e,
      options: r,
      activeOptionIndex: (() => n === e.activeOptionIndex || o === null ? null : r.indexOf(o))()
    };
  }
},
    vt = /*#__PURE__*/React.createContext(null);
vt.displayName = "ComboboxContext";

function pe(e) {
  let t = React.useContext(vt);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pe), r;
  }

  return t;
}

var Rt = /*#__PURE__*/React.createContext(null);
Rt.displayName = "ComboboxActions";

function Ue() {
  let e = React.useContext(Rt);

  if (e === null) {
    let t = new Error("ComboboxActions is missing a parent <Combobox /> component.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ue), t;
  }

  return e;
}

function hr(e, t) {
  return S(t.type, Ar, e, t);
}

var Or = React.Fragment,
    Ir = D(function (t, r) {
  let {
    value: o,
    onChange: n,
    disabled: i = !1,
    ...a
  } = t,
      l = React.useRef({
    value: o,
    onChange: n
  }),
      s = React.useRef({
    static: !1,
    hold: !1
  }),
      u = React.useRef({
    displayValue: void 0
  }),
      c = React.useReducer(hr, {
    comboboxState: 1,
    comboboxPropsRef: l,
    optionsPropsRef: s,
    inputPropsRef: u,
    labelRef: /*#__PURE__*/React.createRef(),
    inputRef: /*#__PURE__*/React.createRef(),
    buttonRef: /*#__PURE__*/React.createRef(),
    optionsRef: /*#__PURE__*/React.createRef(),
    disabled: i,
    options: [],
    activeOptionIndex: null
  }),
      [{
    comboboxState: m,
    options: b,
    activeOptionIndex: T,
    optionsRef: y,
    inputRef: p,
    buttonRef: f
  }, d] = c;
  x(() => {
    l.current.value = o;
  }, [o, l]), x(() => {
    l.current.onChange = n;
  }, [n, l]), x(() => d({
    type: 2,
    disabled: i
  }), [i]), w("mousedown", O => {
    var N, K, V;
    let L = O.target;
    m === 0 && (((N = f.current) == null ? void 0 : N.contains(L)) || ((K = p.current) == null ? void 0 : K.contains(L)) || ((V = y.current) == null ? void 0 : V.contains(L)) || d({
      type: 1
    }));
  });
  let P = T === null ? null : b[T].dataRef.current.value,
      C = React.useMemo(() => ({
    open: m === 0,
    disabled: i,
    activeIndex: T,
    activeOption: P
  }), [m, i, b, T]),
      R = React.useCallback(() => {
    if (!p.current || o === void 0) return;
    let O = u.current.displayValue;
    typeof O == "function" ? p.current.value = O(o) : typeof o == "string" && (p.current.value = o);
  }, [o, p, u]),
      g = React.useCallback(O => {
    let L = b.find(K => K.id === O);
    if (!L) return;
    let {
      dataRef: N
    } = L;
    l.current.onChange(N.current.value), R();
  }, [b, l, p]),
      v = React.useCallback(() => {
    if (T !== null) {
      let {
        dataRef: O
      } = b[T];
      l.current.onChange(O.current.value), R();
    }
  }, [T, b, l, p]),
      h = React.useMemo(() => ({
    selectOption: g,
    selectActiveOption: v
  }), [g, v]);
  return x(() => {
    m === 1 && R();
  }, [R, m]), x(R, [R]), /*#__PURE__*/React__default["default"].createElement(Rt.Provider, {
    value: h
  }, /*#__PURE__*/React__default["default"].createElement(vt.Provider, {
    value: c
  }, /*#__PURE__*/React__default["default"].createElement(W, {
    value: S(m, {
      [0]: 0,
      [1]: 1
    })
  }, E({
    props: r === null ? a : { ...a,
      ref: r
    },
    slot: C,
    defaultTag: Or,
    name: "Combobox"
  }))));
}),
    Lr = "input",
    Dr = D(function (t, r) {
  var R, g;
  let {
    value: o,
    onChange: n,
    displayValue: i,
    ...a
  } = t,
      [l, s] = pe("Combobox.Input"),
      u = Ue(),
      c = I(l.inputRef, r),
      m = l.inputPropsRef,
      b = `headlessui-combobox-input-${A()}`,
      T = Q(),
      y = ke(n);
  x(() => {
    m.current.displayValue = i;
  }, [i, m]);
  let p = React.useCallback(v => {
    switch (v.key) {
      case "Enter":
        v.preventDefault(), v.stopPropagation(), u.selectActiveOption(), s({
          type: 1
        });
        break;

      case "ArrowDown":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, {
          [0]: () => s({
            type: 3,
            focus: 2
          }),
          [1]: () => {
            s({
              type: 0
            }), T.nextFrame(() => {
              l.comboboxPropsRef.current.value || s({
                type: 3,
                focus: 0
              });
            });
          }
        });

      case "ArrowUp":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, {
          [0]: () => s({
            type: 3,
            focus: 1
          }),
          [1]: () => {
            s({
              type: 0
            }), T.nextFrame(() => {
              l.comboboxPropsRef.current.value || s({
                type: 3,
                focus: 3
              });
            });
          }
        });

      case "Home":
      case "PageUp":
        return v.preventDefault(), v.stopPropagation(), s({
          type: 3,
          focus: 0
        });

      case "End":
      case "PageDown":
        return v.preventDefault(), v.stopPropagation(), s({
          type: 3,
          focus: 3
        });

      case "Escape":
        return v.preventDefault(), l.optionsRef.current && !l.optionsPropsRef.current.static && v.stopPropagation(), s({
          type: 1
        });

      case "Tab":
        u.selectActiveOption(), s({
          type: 1
        });
        break;
    }
  }, [T, s, l, u]),
      f = React.useCallback(v => {
    var h;
    s({
      type: 0
    }), (h = y.current) == null || h.call(y, v);
  }, [s, y]),
      d = ee(() => {
    if (!!l.labelRef.current) return [l.labelRef.current.id].join(" ");
  }, [l.labelRef.current]),
      P = React.useMemo(() => ({
    open: l.comboboxState === 0,
    disabled: l.disabled
  }), [l]),
      C = {
    ref: c,
    id: b,
    role: "combobox",
    type: "text",
    "aria-controls": (R = l.optionsRef.current) == null ? void 0 : R.id,
    "aria-expanded": l.disabled ? void 0 : l.comboboxState === 0,
    "aria-activedescendant": l.activeOptionIndex === null || (g = l.options[l.activeOptionIndex]) == null ? void 0 : g.id,
    "aria-labelledby": d,
    disabled: l.disabled,
    onKeyDown: p,
    onChange: f
  };
  return E({
    props: { ...a,
      ...C
    },
    slot: P,
    defaultTag: Lr,
    name: "Combobox.Input"
  });
}),
    Mr = "button",
    Fr = D(function (t, r) {
  var p;
  let [o, n] = pe("Combobox.Button"),
      i = Ue(),
      a = I(o.buttonRef, r),
      l = `headlessui-combobox-button-${A()}`,
      s = Q(),
      u = React.useCallback(f => {
    switch (f.key) {
      case "ArrowDown":
        return f.preventDefault(), f.stopPropagation(), o.comboboxState === 1 && (n({
          type: 0
        }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n({
            type: 3,
            focus: 0
          });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({
            preventScroll: !0
          });
        });

      case "ArrowUp":
        return f.preventDefault(), f.stopPropagation(), o.comboboxState === 1 && (n({
          type: 0
        }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n({
            type: 3,
            focus: 3
          });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({
            preventScroll: !0
          });
        });

      case "Escape":
        return f.preventDefault(), o.optionsRef.current && !o.optionsPropsRef.current.static && f.stopPropagation(), n({
          type: 1
        }), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({
            preventScroll: !0
          });
        });
    }
  }, [s, n, o, i]),
      c = React.useCallback(f => {
    if (G(f.currentTarget)) return f.preventDefault();
    o.comboboxState === 0 ? n({
      type: 1
    }) : (f.preventDefault(), n({
      type: 0
    })), s.nextFrame(() => {
      var d;
      return (d = o.inputRef.current) == null ? void 0 : d.focus({
        preventScroll: !0
      });
    });
  }, [n, s, o]),
      m = ee(() => {
    if (!!o.labelRef.current) return [o.labelRef.current.id, l].join(" ");
  }, [o.labelRef.current, l]),
      b = React.useMemo(() => ({
    open: o.comboboxState === 0,
    disabled: o.disabled
  }), [o]),
      T = t,
      y = {
    ref: a,
    id: l,
    type: U(t, o.buttonRef),
    tabIndex: -1,
    "aria-haspopup": !0,
    "aria-controls": (p = o.optionsRef.current) == null ? void 0 : p.id,
    "aria-expanded": o.disabled ? void 0 : o.comboboxState === 0,
    "aria-labelledby": m,
    disabled: o.disabled,
    onClick: c,
    onKeyDown: u
  };
  return E({
    props: { ...T,
      ...y
    },
    slot: b,
    defaultTag: Mr,
    name: "Combobox.Button"
  });
}),
    wr = "label";

function kr(e) {
  let [t] = pe("Combobox.Label"),
      r = `headlessui-combobox-label-${A()}`,
      o = React.useCallback(() => {
    var a;
    return (a = t.inputRef.current) == null ? void 0 : a.focus({
      preventScroll: !0
    });
  }, [t.inputRef]),
      n = React.useMemo(() => ({
    open: t.comboboxState === 0,
    disabled: t.disabled
  }), [t]),
      i = {
    ref: t.labelRef,
    id: r,
    onClick: o
  };
  return E({
    props: { ...e,
      ...i
    },
    slot: n,
    defaultTag: wr,
    name: "Combobox.Label"
  });
}

var _r = "ul",
    Gr = 1 | 2,
    Hr = D(function (t, r) {
  var y;

  let {
    hold: o = !1,
    ...n
  } = t,
      [i] = pe("Combobox.Options"),
      {
    optionsPropsRef: a
  } = i,
      l = I(i.optionsRef, r),
      s = `headlessui-combobox-options-${A()}`,
      u = _(),
      c = (() => u !== null ? u === 0 : i.comboboxState === 0)();

  x(() => {
    var p;
    a.current.static = (p = t.static) != null ? p : !1;
  }, [a, t.static]), x(() => {
    a.current.hold = o;
  }, [o, a]), se({
    container: i.optionsRef.current,
    enabled: i.comboboxState === 0,

    accept(p) {
      return p.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
    },

    walk(p) {
      p.setAttribute("role", "none");
    }

  });
  let m = ee(() => {
    var p, f, d;
    return (d = (p = i.labelRef.current) == null ? void 0 : p.id) != null ? d : (f = i.buttonRef.current) == null ? void 0 : f.id;
  }, [i.labelRef.current, i.buttonRef.current]),
      b = React.useMemo(() => ({
    open: i.comboboxState === 0
  }), [i]),
      T = {
    "aria-activedescendant": i.activeOptionIndex === null || (y = i.options[i.activeOptionIndex]) == null ? void 0 : y.id,
    "aria-labelledby": m,
    role: "listbox",
    id: s,
    ref: l
  };
  return E({
    props: { ...n,
      ...T
    },
    slot: b,
    defaultTag: _r,
    features: Gr,
    visible: c,
    name: "Combobox.Options"
  });
}),
    Ur = "li";

function Br(e) {
  let {
    disabled: t = !1,
    value: r,
    ...o
  } = e,
      [n, i] = pe("Combobox.Option"),
      a = Ue(),
      l = `headlessui-combobox-option-${A()}`,
      s = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === l : !1,
      u = n.comboboxPropsRef.current.value === r,
      c = React.useRef({
    disabled: t,
    value: r
  });
  x(() => {
    c.current.disabled = t;
  }, [c, t]), x(() => {
    c.current.value = r;
  }, [c, r]), x(() => {
    var P, C;
    c.current.textValue = (C = (P = document.getElementById(l)) == null ? void 0 : P.textContent) == null ? void 0 : C.toLowerCase();
  }, [c, l]);
  let m = React.useCallback(() => a.selectOption(l), [a, l]);
  x(() => (i({
    type: 4,
    id: l,
    dataRef: c
  }), () => i({
    type: 5,
    id: l
  })), [c, l]), x(() => {
    n.comboboxState === 0 && (!u || i({
      type: 3,
      focus: 4,
      id: l
    }));
  }, [n.comboboxState, u, l]), x(() => {
    if (n.comboboxState !== 0 || !s) return;
    let P = k();
    return P.requestAnimationFrame(() => {
      var C, R;
      (R = (C = document.getElementById(l)) == null ? void 0 : C.scrollIntoView) == null || R.call(C, {
        block: "nearest"
      });
    }), P.dispose;
  }, [l, s, n.comboboxState, n.activeOptionIndex]);
  let b = React.useCallback(P => {
    if (t) return P.preventDefault();
    m(), i({
      type: 1
    }), k().nextFrame(() => {
      var C;
      return (C = n.inputRef.current) == null ? void 0 : C.focus({
        preventScroll: !0
      });
    });
  }, [i, n.inputRef, t, m]),
      T = React.useCallback(() => {
    if (t) return i({
      type: 3,
      focus: 5
    });
    i({
      type: 3,
      focus: 4,
      id: l
    });
  }, [t, l, i]),
      y = React.useCallback(() => {
    t || s || i({
      type: 3,
      focus: 4,
      id: l
    });
  }, [t, s, l, i]),
      p = React.useCallback(() => {
    t || !s || n.optionsPropsRef.current.hold || i({
      type: 3,
      focus: 5
    });
  }, [t, s, i, n.comboboxState, n.comboboxPropsRef]),
      f = React.useMemo(() => ({
    active: s,
    selected: u,
    disabled: t
  }), [s, u, t]);
  return E({
    props: { ...o,
      ...{
        id: l,
        role: "option",
        tabIndex: t === !0 ? void 0 : -1,
        "aria-disabled": t === !0 ? !0 : void 0,
        "aria-selected": u === !0 ? !0 : void 0,
        disabled: void 0,
        onClick: b,
        onFocus: T,
        onPointerMove: y,
        onMouseMove: y,
        onPointerLeave: p,
        onMouseLeave: p
      }
    },
    slot: f,
    defaultTag: Ur,
    name: "Combobox.Option"
  });
}

Object.assign(Ir, {
  Input: Dr,
  Button: Fr,
  Label: kr,
  Options: Hr,
  Option: Br
});
var Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");

function xe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Et));
}

function de(e, t = 0) {
  return e === document.body ? !1 : S(t, {
    [0]() {
      return e.matches(Et);
    },

    [1]() {
      let r = e;

      for (; r !== null;) {
        if (r.matches(Et)) return !0;
        r = r.parentElement;
      }

      return !1;
    }

  });
}

function ce(e) {
  e == null || e.focus({
    preventScroll: !0
  });
}

function M(e, t) {
  let r = Array.isArray(e) ? e.slice().sort((c, m) => {
    let b = c.compareDocumentPosition(m);
    return b & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : b & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : xe(e),
      o = document.activeElement,
      n = (() => {
    if (t & (1 | 4)) return 1;
    if (t & (2 | 8)) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(),
      i = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, r.indexOf(o)) - 1;
    if (t & 4) return Math.max(0, r.indexOf(o)) + 1;
    if (t & 8) return r.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(),
      a = t & 32 ? {
    preventScroll: !0
  } : {},
      l = 0,
      s = r.length,
      u;

  do {
    if (l >= s || l + s <= 0) return 0;
    let c = i + l;
    if (t & 16) c = (c + s) % s;else {
      if (c < 0) return 3;
      if (c >= s) return 1;
    }
    u = r[c], u == null || u.focus(a), l += n;
  } while (u !== document.activeElement);

  return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), 2;
}

function Be() {
  let e = React.useRef(!1);
  return React.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}

function Ne(e, t = 30, {
  initialFocus: r,
  containers: o
} = {}) {
  let n = React.useRef(typeof window != "undefined" ? document.activeElement : null),
      i = React.useRef(null),
      a = Be(),
      l = Boolean(t & 16),
      s = Boolean(t & 2);
  React.useEffect(() => {
    !l || (n.current = document.activeElement);
  }, [l]), React.useEffect(() => {
    if (!!l) return () => {
      ce(n.current), n.current = null;
    };
  }, [l]), React.useEffect(() => {
    if (!s || !e.current) return;
    let u = document.activeElement;

    if (r == null ? void 0 : r.current) {
      if ((r == null ? void 0 : r.current) === u) {
        i.current = u;
        return;
      }
    } else if (e.current.contains(u)) {
      i.current = u;
      return;
    }

    (r == null ? void 0 : r.current) ? ce(r.current) : M(e.current, 1) === 0 && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = document.activeElement;
  }, [e, r, s]), w("keydown", u => {
    !(t & 4) || !e.current || u.key === "Tab" && (u.preventDefault(), M(e.current, (u.shiftKey ? 2 : 4) | 16) === 2 && (i.current = document.activeElement));
  }), w("focus", u => {
    if (!(t & 8)) return;
    let c = new Set(o == null ? void 0 : o.current);
    if (c.add(e), !c.size) return;
    let m = i.current;
    if (!m || !a.current) return;
    let b = u.target;
    b && b instanceof HTMLElement ? Kr(c, b) ? (i.current = b, ce(b)) : (u.preventDefault(), u.stopPropagation(), ce(m)) : ce(i.current);
  }, !0);
}

function Kr(e, t) {
  var r;

  for (let o of e) if ((r = o.current) == null ? void 0 : r.contains(t)) return !0;

  return !1;
}

var fe = new Set(),
    J = new Map();

function po(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}

function co(e) {
  let t = J.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}

function fo(e, t = !0) {
  x(() => {
    if (!t || !e.current) return;
    let r = e.current;
    fe.add(r);

    for (let o of J.keys()) o.contains(r) && (co(o), J.delete(o));

    return document.querySelectorAll("body > *").forEach(o => {
      if (o instanceof HTMLElement) {
        for (let n of fe) if (o.contains(n)) return;

        fe.size === 1 && (J.set(o, {
          "aria-hidden": o.getAttribute("aria-hidden"),
          inert: o.inert
        }), po(o));
      }
    }), () => {
      if (fe.delete(r), fe.size > 0) document.querySelectorAll("body > *").forEach(o => {
        if (o instanceof HTMLElement && !J.has(o)) {
          for (let n of fe) if (o.contains(n)) return;

          J.set(o, {
            "aria-hidden": o.getAttribute("aria-hidden"),
            inert: o.inert
          }), po(o);
        }
      });else for (let o of J.keys()) co(o), J.delete(o);
    };
  }, [t]);
}
var mo = /*#__PURE__*/React.createContext(!1);

function bo() {
  return React.useContext(mo);
}

function At(e) {
  return /*#__PURE__*/React__default["default"].createElement(mo.Provider, {
    value: e.force
  }, e.children);
}

function Xr() {
  let e = bo(),
      t = React.useContext(Po),
      [r, o] = React.useState(() => {
    if (!e && t !== null || typeof window == "undefined") return null;
    let n = document.getElementById("headlessui-portal-root");
    if (n) return n;
    let i = document.createElement("div");
    return i.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i);
  });
  return React.useEffect(() => {
    r !== null && (document.body.contains(r) || document.body.appendChild(r));
  }, [r]), React.useEffect(() => {
    e || t !== null && o(t.current);
  }, [t, o, e]), r;
}

var Jr = React.Fragment;

function We(e) {
  let t = e,
      r = Xr(),
      [o] = React.useState(() => typeof window == "undefined" ? null : document.createElement("div")),
      n = q();
  return x(() => {
    if (!!r && !!o) return r.appendChild(o), () => {
      var i;
      !r || !o || (r.removeChild(o), r.childNodes.length <= 0 && ((i = r.parentElement) == null || i.removeChild(r)));
    };
  }, [r, o]), n ? !r || !o ? null : /*#__PURE__*/reactDom.createPortal(E({
    props: t,
    defaultTag: Jr,
    name: "Portal"
  }), o) : null;
}

var Zr = React.Fragment,
    Po = /*#__PURE__*/React.createContext(null);

function en(e) {
  let {
    target: t,
    ...r
  } = e;
  return /*#__PURE__*/React__default["default"].createElement(Po.Provider, {
    value: t
  }, E({
    props: r,
    defaultTag: Zr,
    name: "Popover.Group"
  }));
}

We.Group = en;
var vo = /*#__PURE__*/React.createContext(null);

function Ro() {
  let e = React.useContext(vo);

  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ro), t;
  }

  return e;
}

function re() {
  let [e, t] = React.useState([]);
  return [e.length > 0 ? e.join(" ") : void 0, React.useMemo(() => function (o) {
    let n = React.useCallback(a => (t(l => [...l, a]), () => t(l => {
      let s = l.slice(),
          u = s.indexOf(a);
      return u !== -1 && s.splice(u, 1), s;
    })), []),
        i = React.useMemo(() => ({
      register: n,
      slot: o.slot,
      name: o.name,
      props: o.props
    }), [n, o.slot, o.name, o.props]);
    return /*#__PURE__*/React__default["default"].createElement(vo.Provider, {
      value: i
    }, o.children);
  }, [t])];
}

var an = "p";

function me(e) {
  let t = Ro(),
      r = `headlessui-description-${A()}`;
  x(() => t.register(r), [r, t.register]);
  let o = e,
      n = { ...t.props,
    id: r
  };
  return E({
    props: { ...o,
      ...n
    },
    slot: t.slot || {},
    defaultTag: an,
    name: t.name || "Description"
  });
}
var ht = /*#__PURE__*/React.createContext(() => {});
ht.displayName = "StackContext";

function cn() {
  return React.useContext(ht);
}

function Eo({
  children: e,
  onUpdate: t,
  type: r,
  element: o
}) {
  let n = cn(),
      i = React.useCallback((...a) => {
    t == null || t(...a), n(...a);
  }, [n, t]);
  return x(() => (i(0, r, o), () => i(1, r, o)), [i, r, o]), /*#__PURE__*/React__default["default"].createElement(ht.Provider, {
    value: i
  }, e);
}

var yn = {
  [0](e, t) {
    return e.titleId === t.id ? e : { ...e,
      titleId: t.id
    };
  }

},
    Ve = /*#__PURE__*/React.createContext(null);
Ve.displayName = "DialogContext";

function It(e) {
  let t = React.useContext(Ve);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, It), r;
  }

  return t;
}

function gn(e, t) {
  return S(t.type, yn, e, t);
}

var Pn = "div",
    xn = 1 | 2,
    vn = D(function (t, r) {
  let {
    open: o,
    onClose: n,
    initialFocus: i,
    ...a
  } = t,
      [l, s] = React.useState(0),
      u = _();

  o === void 0 && u !== null && (o = S(u, {
    [0]: !0,
    [1]: !1
  }));
  let c = React.useRef(new Set()),
      m = React.useRef(null),
      b = I(m, r),
      T = t.hasOwnProperty("open") || u !== null,
      y = t.hasOwnProperty("onClose");
  if (!T && !y) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof o != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
  if (typeof n != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);

  let p = o ? 0 : 1,
      f = (() => u !== null ? u === 0 : p === 0)(),
      [d, P] = React.useReducer(gn, {
    titleId: null,
    descriptionId: null
  }),
      C = React.useCallback(() => n(!1), [n]),
      R = React.useCallback(F => P({
    type: 0,
    id: F
  }), [P]),
      v = q() && p === 0,
      h = l > 1,
      O = React.useContext(Ve) !== null;

  Ne(m, v ? S(h ? "parent" : "leaf", {
    parent: 16,
    leaf: 30
  }) : 1, {
    initialFocus: i,
    containers: c
  }), fo(m, h ? v : !1), w("mousedown", F => {
    var H;
    let $ = F.target;
    p === 0 && (h || ((H = m.current) == null ? void 0 : H.contains($)) || C());
  }), w("keydown", F => {
    F.key === "Escape" && p === 0 && (h || (F.preventDefault(), F.stopPropagation(), C()));
  }), React.useEffect(() => {
    if (p !== 0 || O) return;
    let F = document.documentElement.style.overflow,
        $ = document.documentElement.style.paddingRight,
        H = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${H}px`, () => {
      document.documentElement.style.overflow = F, document.documentElement.style.paddingRight = $;
    };
  }, [p, O]), React.useEffect(() => {
    if (p !== 0 || !m.current) return;
    let F = new IntersectionObserver($ => {
      for (let H of $) H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && C();
    });
    return F.observe(m.current), () => F.disconnect();
  }, [p, m, C]);
  let [N, K] = re(),
      V = `headlessui-dialog-${A()}`,
      Fe = React.useMemo(() => [{
    dialogState: p,
    close: C,
    setTitleId: R
  }, d], [p, d, C, R]),
      ge = React.useMemo(() => ({
    open: p === 0
  }), [p]),
      we = {
    ref: b,
    id: V,
    role: "dialog",
    "aria-modal": p === 0 ? !0 : void 0,
    "aria-labelledby": d.titleId,
    "aria-describedby": N,

    onClick(F) {
      F.stopPropagation();
    }

  },
      X = a;
  return /*#__PURE__*/React__default["default"].createElement(Eo, {
    type: "Dialog",
    element: m,
    onUpdate: React.useCallback((F, $, H) => {
      $ === "Dialog" && S(F, {
        [0]() {
          c.current.add(H), s(Pe => Pe + 1);
        },

        [1]() {
          c.current.add(H), s(Pe => Pe - 1);
        }

      });
    }, [])
  }, /*#__PURE__*/React__default["default"].createElement(At, {
    force: !0
  }, /*#__PURE__*/React__default["default"].createElement(We, null, /*#__PURE__*/React__default["default"].createElement(Ve.Provider, {
    value: Fe
  }, /*#__PURE__*/React__default["default"].createElement(We.Group, {
    target: m
  }, /*#__PURE__*/React__default["default"].createElement(At, {
    force: !1
  }, /*#__PURE__*/React__default["default"].createElement(K, {
    slot: ge,
    name: "Dialog.Description"
  }, E({
    props: { ...X,
      ...we
    },
    slot: ge,
    defaultTag: Pn,
    features: xn,
    visible: f,
    name: "Dialog"
  }))))))));
}),
    Rn = "div",
    En = D(function (t, r) {
  let [{
    dialogState: o,
    close: n
  }] = It("Dialog.Overlay"),
      i = I(r),
      a = `headlessui-dialog-overlay-${A()}`,
      l = React.useCallback(m => {
    if (m.target === m.currentTarget) {
      if (G(m.currentTarget)) return m.preventDefault();
      m.preventDefault(), m.stopPropagation(), n();
    }
  }, [n]),
      s = React.useMemo(() => ({
    open: o === 0
  }), [o]);
  return E({
    props: { ...t,
      ...{
        ref: i,
        id: a,
        "aria-hidden": !0,
        onClick: l
      }
    },
    slot: s,
    defaultTag: Rn,
    name: "Dialog.Overlay"
  });
}),
    Cn = "h2";

function Sn(e) {
  let [{
    dialogState: t,
    setTitleId: r
  }] = It("Dialog.Title"),
      o = `headlessui-dialog-title-${A()}`;
  React.useEffect(() => (r(o), () => r(null)), [o, r]);
  let n = React.useMemo(() => ({
    open: t === 0
  }), [t]);
  return E({
    props: { ...e,
      ...{
        id: o
      }
    },
    slot: n,
    defaultTag: Cn,
    name: "Dialog.Title"
  });
}

var An = Object.assign(vn, {
  Overlay: En,
  Title: Sn,
  Description: me
});
var Ln = {
  [0]: e => ({ ...e,
    disclosureState: S(e.disclosureState, {
      [0]: 1,
      [1]: 0
    })
  }),
  [1]: e => e.disclosureState === 1 ? e : { ...e,
    disclosureState: 1
  },

  [4](e) {
    return e.linkedPanel === !0 ? e : { ...e,
      linkedPanel: !0
    };
  },

  [5](e) {
    return e.linkedPanel === !1 ? e : { ...e,
      linkedPanel: !1
    };
  },

  [2](e, t) {
    return e.buttonId === t.buttonId ? e : { ...e,
      buttonId: t.buttonId
    };
  },

  [3](e, t) {
    return e.panelId === t.panelId ? e : { ...e,
      panelId: t.panelId
    };
  }

},
    Mt = /*#__PURE__*/React.createContext(null);
Mt.displayName = "DisclosureContext";

function Ft(e) {
  let t = React.useContext(Mt);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ft), r;
  }

  return t;
}

var wt = /*#__PURE__*/React.createContext(null);
wt.displayName = "DisclosureAPIContext";

function Ao(e) {
  let t = React.useContext(wt);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ao), r;
  }

  return t;
}

var kt = /*#__PURE__*/React.createContext(null);
kt.displayName = "DisclosurePanelContext";

function Dn() {
  return React.useContext(kt);
}

function Mn(e, t) {
  return S(t.type, Ln, e, t);
}

var Fn = React.Fragment;

function Ye(e) {
  let {
    defaultOpen: t = !1,
    ...r
  } = e,
      o = `headlessui-disclosure-button-${A()}`,
      n = `headlessui-disclosure-panel-${A()}`,
      i = React.useReducer(Mn, {
    disclosureState: t ? 0 : 1,
    linkedPanel: !1,
    buttonId: o,
    panelId: n
  }),
      [{
    disclosureState: a
  }, l] = i;
  React.useEffect(() => l({
    type: 2,
    buttonId: o
  }), [o, l]), React.useEffect(() => l({
    type: 3,
    panelId: n
  }), [n, l]);
  let s = React.useCallback(m => {
    l({
      type: 1
    });

    let b = (() => m ? m instanceof HTMLElement ? m : m.current instanceof HTMLElement ? m.current : document.getElementById(o) : document.getElementById(o))();

    b == null || b.focus();
  }, [l, o]),
      u = React.useMemo(() => ({
    close: s
  }), [s]),
      c = React.useMemo(() => ({
    open: a === 0,
    close: s
  }), [a, s]);
  return /*#__PURE__*/React__default["default"].createElement(Mt.Provider, {
    value: i
  }, /*#__PURE__*/React__default["default"].createElement(wt.Provider, {
    value: u
  }, /*#__PURE__*/React__default["default"].createElement(W, {
    value: S(a, {
      [0]: 0,
      [1]: 1
    })
  }, E({
    props: r,
    slot: c,
    defaultTag: Fn,
    name: "Disclosure"
  }))));
}

var wn = "button",
    kn = D(function (t, r) {
  let [o, n] = Ft("Disclosure.Button"),
      i = React.useRef(null),
      a = I(i, r),
      l = Dn(),
      s = l === null ? !1 : l === o.panelId,
      u = React.useCallback(f => {
    var d;

    if (s) {
      if (o.disclosureState === 1) return;

      switch (f.key) {
        case " ":
        case "Enter":
          f.preventDefault(), f.stopPropagation(), n({
            type: 0
          }), (d = document.getElementById(o.buttonId)) == null || d.focus();
          break;
      }
    } else switch (f.key) {
      case " ":
      case "Enter":
        f.preventDefault(), f.stopPropagation(), n({
          type: 0
        });
        break;
    }
  }, [n, s, o.disclosureState, o.buttonId]),
      c = React.useCallback(f => {
    switch (f.key) {
      case " ":
        f.preventDefault();
        break;
    }
  }, []),
      m = React.useCallback(f => {
    var d;
    G(f.currentTarget) || t.disabled || (s ? (n({
      type: 0
    }), (d = document.getElementById(o.buttonId)) == null || d.focus()) : n({
      type: 0
    }));
  }, [n, t.disabled, o.buttonId, s]),
      b = React.useMemo(() => ({
    open: o.disclosureState === 0
  }), [o]),
      T = U(t, i),
      y = t,
      p = s ? {
    ref: a,
    type: T,
    onKeyDown: u,
    onClick: m
  } : {
    ref: a,
    id: o.buttonId,
    type: T,
    "aria-expanded": t.disabled ? void 0 : o.disclosureState === 0,
    "aria-controls": o.linkedPanel ? o.panelId : void 0,
    onKeyDown: u,
    onKeyUp: c,
    onClick: m
  };
  return E({
    props: { ...y,
      ...p
    },
    slot: b,
    defaultTag: wn,
    name: "Disclosure.Button"
  });
}),
    _n = "div",
    Gn = 1 | 2,
    Hn = D(function (t, r) {
  let [o, n] = Ft("Disclosure.Panel"),
      {
    close: i
  } = Ao("Disclosure.Panel"),
      a = I(r, () => {
    o.linkedPanel || n({
      type: 4
    });
  }),
      l = _(),
      s = (() => l !== null ? l === 0 : o.disclosureState === 0)();

  React.useEffect(() => () => n({
    type: 5
  }), [n]), React.useEffect(() => {
    var b;
    o.disclosureState === 1 && ((b = t.unmount) != null ? b : !0) && n({
      type: 5
    });
  }, [o.disclosureState, t.unmount, n]);
  let u = React.useMemo(() => ({
    open: o.disclosureState === 0,
    close: i
  }), [o, i]),
      c = {
    ref: a,
    id: o.panelId
  },
      m = t;
  return /*#__PURE__*/React__default["default"].createElement(kt.Provider, {
    value: o.panelId
  }, E({
    props: { ...m,
      ...c
    },
    slot: u,
    defaultTag: _n,
    features: Gn,
    visible: s,
    name: "Disclosure.Panel"
  }));
});
Ye.Button = kn;
Ye.Panel = Hn;
var $n = {
  [1](e) {
    return e.disabled || e.listboxState === 1 ? e : { ...e,
      activeOptionIndex: null,
      listboxState: 1
    };
  },

  [0](e) {
    return e.disabled || e.listboxState === 0 ? e : { ...e,
      listboxState: 0
    };
  },

  [2](e, t) {
    return e.disabled === t.disabled ? e : { ...e,
      disabled: t.disabled
    };
  },

  [3](e, t) {
    return e.orientation === t.orientation ? e : { ...e,
      orientation: t.orientation
    };
  },

  [4](e, t) {
    if (e.disabled || e.listboxState === 1) return e;
    let r = ae(t, {
      resolveItems: () => e.options,
      resolveActiveIndex: () => e.activeOptionIndex,
      resolveId: o => o.id,
      resolveDisabled: o => o.dataRef.current.disabled
    });
    return e.searchQuery === "" && e.activeOptionIndex === r ? e : { ...e,
      searchQuery: "",
      activeOptionIndex: r
    };
  },

  [5]: (e, t) => {
    if (e.disabled || e.listboxState === 1) return e;
    let o = e.searchQuery !== "" ? 0 : 1,
        n = e.searchQuery + t.value.toLowerCase(),
        a = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + o).concat(e.options.slice(0, e.activeOptionIndex + o)) : e.options).find(s => {
      var u;
      return !s.dataRef.current.disabled && ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n));
    }),
        l = a ? e.options.indexOf(a) : -1;
    return l === -1 || l === e.activeOptionIndex ? { ...e,
      searchQuery: n
    } : { ...e,
      searchQuery: n,
      activeOptionIndex: l
    };
  },

  [6](e) {
    return e.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e,
      searchQuery: ""
    };
  },

  [7]: (e, t) => {
    var n;
    let r = Array.from((n = e.optionsRef.current) == null ? void 0 : n.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i, a, l) => Object.assign(i, {
      [a.id]: l
    }), {}),
        o = [...e.options, {
      id: t.id,
      dataRef: t.dataRef
    }].sort((i, a) => r[i.id] - r[a.id]);
    return { ...e,
      options: o
    };
  },
  [8]: (e, t) => {
    let r = e.options.slice(),
        o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null,
        n = r.findIndex(i => i.id === t.id);
    return n !== -1 && r.splice(n, 1), { ...e,
      options: r,
      activeOptionIndex: (() => n === e.activeOptionIndex || o === null ? null : r.indexOf(o))()
    };
  }
},
    Gt = /*#__PURE__*/React.createContext(null);
Gt.displayName = "ListboxContext";

function Re(e) {
  let t = React.useContext(Gt);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Re), r;
  }

  return t;
}

function Qn(e, t) {
  return S(t.type, $n, e, t);
}

var qn = React.Fragment;

function Ee(e) {
  let {
    value: t,
    onChange: r,
    disabled: o = !1,
    horizontal: n = !1,
    ...i
  } = e,
      a = n ? "horizontal" : "vertical",
      l = React.useReducer(Qn, {
    listboxState: 1,
    propsRef: {
      current: {
        value: t,
        onChange: r
      }
    },
    labelRef: /*#__PURE__*/React.createRef(),
    buttonRef: /*#__PURE__*/React.createRef(),
    optionsRef: /*#__PURE__*/React.createRef(),
    disabled: o,
    orientation: a,
    options: [],
    searchQuery: "",
    activeOptionIndex: null
  }),
      [{
    listboxState: s,
    propsRef: u,
    optionsRef: c,
    buttonRef: m
  }, b] = l;
  x(() => {
    u.current.value = t;
  }, [t, u]), x(() => {
    u.current.onChange = r;
  }, [r, u]), x(() => b({
    type: 2,
    disabled: o
  }), [o]), x(() => b({
    type: 3,
    orientation: a
  }), [a]), w("mousedown", y => {
    var f, d, P;
    let p = y.target;
    s === 0 && (((f = m.current) == null ? void 0 : f.contains(p)) || ((d = c.current) == null ? void 0 : d.contains(p)) || (b({
      type: 1
    }), de(p, 1) || (y.preventDefault(), (P = m.current) == null || P.focus())));
  });
  let T = React.useMemo(() => ({
    open: s === 0,
    disabled: o
  }), [s, o]);
  return /*#__PURE__*/React__default["default"].createElement(Gt.Provider, {
    value: l
  }, /*#__PURE__*/React__default["default"].createElement(W, {
    value: S(s, {
      [0]: 0,
      [1]: 1
    })
  }, E({
    props: i,
    slot: T,
    defaultTag: qn,
    name: "Listbox"
  })));
}

var zn = "button",
    Yn = D(function (t, r) {
  var p;
  let [o, n] = Re("Listbox.Button"),
      i = I(o.buttonRef, r),
      a = `headlessui-listbox-button-${A()}`,
      l = Q(),
      s = React.useCallback(f => {
    switch (f.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        f.preventDefault(), n({
          type: 0
        }), l.nextFrame(() => {
          o.propsRef.current.value || n({
            type: 4,
            focus: 0
          });
        });
        break;

      case "ArrowUp":
        f.preventDefault(), n({
          type: 0
        }), l.nextFrame(() => {
          o.propsRef.current.value || n({
            type: 4,
            focus: 3
          });
        });
        break;
    }
  }, [n, o, l]),
      u = React.useCallback(f => {
    switch (f.key) {
      case " ":
        f.preventDefault();
        break;
    }
  }, []),
      c = React.useCallback(f => {
    if (G(f.currentTarget)) return f.preventDefault();
    o.listboxState === 0 ? (n({
      type: 1
    }), l.nextFrame(() => {
      var d;
      return (d = o.buttonRef.current) == null ? void 0 : d.focus({
        preventScroll: !0
      });
    })) : (f.preventDefault(), n({
      type: 0
    }));
  }, [n, l, o]),
      m = ee(() => {
    if (!!o.labelRef.current) return [o.labelRef.current.id, a].join(" ");
  }, [o.labelRef.current, a]),
      b = React.useMemo(() => ({
    open: o.listboxState === 0,
    disabled: o.disabled
  }), [o]),
      T = t,
      y = {
    ref: i,
    id: a,
    type: U(t, o.buttonRef),
    "aria-haspopup": !0,
    "aria-controls": (p = o.optionsRef.current) == null ? void 0 : p.id,
    "aria-expanded": o.disabled ? void 0 : o.listboxState === 0,
    "aria-labelledby": m,
    disabled: o.disabled,
    onKeyDown: s,
    onKeyUp: u,
    onClick: c
  };
  return E({
    props: { ...T,
      ...y
    },
    slot: b,
    defaultTag: zn,
    name: "Listbox.Button"
  });
}),
    Xn = "label";

function Jn(e) {
  let [t] = Re("Listbox.Label"),
      r = `headlessui-listbox-label-${A()}`,
      o = React.useCallback(() => {
    var a;
    return (a = t.buttonRef.current) == null ? void 0 : a.focus({
      preventScroll: !0
    });
  }, [t.buttonRef]),
      n = React.useMemo(() => ({
    open: t.listboxState === 0,
    disabled: t.disabled
  }), [t]),
      i = {
    ref: t.labelRef,
    id: r,
    onClick: o
  };
  return E({
    props: { ...e,
      ...i
    },
    slot: n,
    defaultTag: Xn,
    name: "Listbox.Label"
  });
}

var Zn = "ul",
    ei = 1 | 2,
    ti = D(function (t, r) {
  var f;

  let [o, n] = Re("Listbox.Options"),
      i = I(o.optionsRef, r),
      a = `headlessui-listbox-options-${A()}`,
      l = Q(),
      s = Q(),
      u = _(),
      c = (() => u !== null ? u === 0 : o.listboxState === 0)();

  x(() => {
    let d = o.optionsRef.current;
    !d || o.listboxState === 0 && d !== document.activeElement && d.focus({
      preventScroll: !0
    });
  }, [o.listboxState, o.optionsRef]);
  let m = React.useCallback(d => {
    switch (s.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "") return d.preventDefault(), d.stopPropagation(), n({
          type: 5,
          value: d.key
        });

      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n({
          type: 1
        }), o.activeOptionIndex !== null) {
          let {
            dataRef: P
          } = o.options[o.activeOptionIndex];
          o.propsRef.current.onChange(P.current.value);
        }

        k().nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({
            preventScroll: !0
          });
        });
        break;

      case S(o.orientation, {
        vertical: "ArrowDown",
        horizontal: "ArrowRight"
      }):
        return d.preventDefault(), d.stopPropagation(), n({
          type: 4,
          focus: 2
        });

      case S(o.orientation, {
        vertical: "ArrowUp",
        horizontal: "ArrowLeft"
      }):
        return d.preventDefault(), d.stopPropagation(), n({
          type: 4,
          focus: 1
        });

      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 4,
          focus: 0
        });

      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 4,
          focus: 3
        });

      case "Escape":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 1
        }), l.nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({
            preventScroll: !0
          });
        });

      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;

      default:
        d.key.length === 1 && (n({
          type: 5,
          value: d.key
        }), s.setTimeout(() => n({
          type: 6
        }), 350));
        break;
    }
  }, [l, n, s, o]),
      b = ee(() => {
    var d, P, C;
    return (C = (d = o.labelRef.current) == null ? void 0 : d.id) != null ? C : (P = o.buttonRef.current) == null ? void 0 : P.id;
  }, [o.labelRef.current, o.buttonRef.current]),
      T = React.useMemo(() => ({
    open: o.listboxState === 0
  }), [o]),
      y = {
    "aria-activedescendant": o.activeOptionIndex === null || (f = o.options[o.activeOptionIndex]) == null ? void 0 : f.id,
    "aria-labelledby": b,
    "aria-orientation": o.orientation,
    id: a,
    onKeyDown: m,
    role: "listbox",
    tabIndex: 0,
    ref: i
  };
  return E({
    props: { ...t,
      ...y
    },
    slot: T,
    defaultTag: Zn,
    features: ei,
    visible: c,
    name: "Listbox.Options"
  });
}),
    oi = "li";

function ri(e) {
  let {
    disabled: t = !1,
    value: r,
    ...o
  } = e,
      [n, i] = Re("Listbox.Option"),
      a = `headlessui-listbox-option-${A()}`,
      l = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === a : !1,
      s = n.propsRef.current.value === r,
      u = React.useRef({
    disabled: t,
    value: r
  });
  x(() => {
    u.current.disabled = t;
  }, [u, t]), x(() => {
    u.current.value = r;
  }, [u, r]), x(() => {
    var d, P;
    u.current.textValue = (P = (d = document.getElementById(a)) == null ? void 0 : d.textContent) == null ? void 0 : P.toLowerCase();
  }, [u, a]);
  let c = React.useCallback(() => n.propsRef.current.onChange(r), [n.propsRef, r]);
  x(() => (i({
    type: 7,
    id: a,
    dataRef: u
  }), () => i({
    type: 8,
    id: a
  })), [u, a]), x(() => {
    var d, P;
    n.listboxState === 0 && (!s || (i({
      type: 4,
      focus: 4,
      id: a
    }), (P = (d = document.getElementById(a)) == null ? void 0 : d.focus) == null || P.call(d)));
  }, [n.listboxState]), x(() => {
    if (n.listboxState !== 0 || !l) return;
    let d = k();
    return d.requestAnimationFrame(() => {
      var P, C;
      (C = (P = document.getElementById(a)) == null ? void 0 : P.scrollIntoView) == null || C.call(P, {
        block: "nearest"
      });
    }), d.dispose;
  }, [a, l, n.listboxState, n.activeOptionIndex]);
  let m = React.useCallback(d => {
    if (t) return d.preventDefault();
    c(), i({
      type: 1
    }), k().nextFrame(() => {
      var P;
      return (P = n.buttonRef.current) == null ? void 0 : P.focus({
        preventScroll: !0
      });
    });
  }, [i, n.buttonRef, t, c]),
      b = React.useCallback(() => {
    if (t) return i({
      type: 4,
      focus: 5
    });
    i({
      type: 4,
      focus: 4,
      id: a
    });
  }, [t, a, i]),
      T = React.useCallback(() => {
    t || l || i({
      type: 4,
      focus: 4,
      id: a
    });
  }, [t, l, a, i]),
      y = React.useCallback(() => {
    t || !l || i({
      type: 4,
      focus: 5
    });
  }, [t, l, i]),
      p = React.useMemo(() => ({
    active: l,
    selected: s,
    disabled: t
  }), [l, s, t]);
  return E({
    props: { ...o,
      ...{
        id: a,
        role: "option",
        tabIndex: t === !0 ? void 0 : -1,
        "aria-disabled": t === !0 ? !0 : void 0,
        "aria-selected": s === !0 ? !0 : void 0,
        disabled: void 0,
        onClick: m,
        onFocus: b,
        onPointerMove: T,
        onMouseMove: T,
        onPointerLeave: y,
        onMouseLeave: y
      }
    },
    slot: p,
    defaultTag: oi,
    name: "Listbox.Option"
  });
}

Ee.Button = Yn;
Ee.Label = Jn;
Ee.Options = ti;
Ee.Option = ri;
var ui = {
  [1](e) {
    return e.menuState === 1 ? e : { ...e,
      activeItemIndex: null,
      menuState: 1
    };
  },

  [0](e) {
    return e.menuState === 0 ? e : { ...e,
      menuState: 0
    };
  },

  [2]: (e, t) => {
    let r = ae(t, {
      resolveItems: () => e.items,
      resolveActiveIndex: () => e.activeItemIndex,
      resolveId: o => o.id,
      resolveDisabled: o => o.dataRef.current.disabled
    });
    return e.searchQuery === "" && e.activeItemIndex === r ? e : { ...e,
      searchQuery: "",
      activeItemIndex: r
    };
  },
  [3]: (e, t) => {
    let o = e.searchQuery !== "" ? 0 : 1,
        n = e.searchQuery + t.value.toLowerCase(),
        a = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + o).concat(e.items.slice(0, e.activeItemIndex + o)) : e.items).find(s => {
      var u;
      return ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n)) && !s.dataRef.current.disabled;
    }),
        l = a ? e.items.indexOf(a) : -1;
    return l === -1 || l === e.activeItemIndex ? { ...e,
      searchQuery: n
    } : { ...e,
      searchQuery: n,
      activeItemIndex: l
    };
  },

  [4](e) {
    return e.searchQuery === "" ? e : { ...e,
      searchQuery: "",
      searchActiveItemIndex: null
    };
  },

  [5]: (e, t) => {
    var n;
    let r = Array.from((n = e.itemsRef.current) == null ? void 0 : n.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i, a, l) => Object.assign(i, {
      [a.id]: l
    }), {}),
        o = [...e.items, {
      id: t.id,
      dataRef: t.dataRef
    }].sort((i, a) => r[i.id] - r[a.id]);
    return { ...e,
      items: o
    };
  },
  [6]: (e, t) => {
    let r = e.items.slice(),
        o = e.activeItemIndex !== null ? r[e.activeItemIndex] : null,
        n = r.findIndex(i => i.id === t.id);
    return n !== -1 && r.splice(n, 1), { ...e,
      items: r,
      activeItemIndex: (() => n === e.activeItemIndex || o === null ? null : r.indexOf(o))()
    };
  }
},
    Ht = /*#__PURE__*/React.createContext(null);
Ht.displayName = "MenuContext";

function Je(e) {
  let t = React.useContext(Ht);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Je), r;
  }

  return t;
}

function pi(e, t) {
  return S(t.type, ui, e, t);
}

var di = React.Fragment;

function Ze(e) {
  let t = React.useReducer(pi, {
    menuState: 1,
    buttonRef: /*#__PURE__*/React.createRef(),
    itemsRef: /*#__PURE__*/React.createRef(),
    items: [],
    searchQuery: "",
    activeItemIndex: null
  }),
      [{
    menuState: r,
    itemsRef: o,
    buttonRef: n
  }, i] = t;
  w("mousedown", l => {
    var u, c, m;
    let s = l.target;
    r === 0 && (((u = n.current) == null ? void 0 : u.contains(s)) || ((c = o.current) == null ? void 0 : c.contains(s)) || (i({
      type: 1
    }), de(s, 1) || (l.preventDefault(), (m = n.current) == null || m.focus())));
  });
  let a = React.useMemo(() => ({
    open: r === 0
  }), [r]);
  return /*#__PURE__*/React__default["default"].createElement(Ht.Provider, {
    value: t
  }, /*#__PURE__*/React__default["default"].createElement(W, {
    value: S(r, {
      [0]: 0,
      [1]: 1
    })
  }, E({
    props: e,
    slot: a,
    defaultTag: di,
    name: "Menu"
  })));
}

var ci = "button",
    fi = D(function (t, r) {
  var y;
  let [o, n] = Je("Menu.Button"),
      i = I(o.buttonRef, r),
      a = `headlessui-menu-button-${A()}`,
      l = Q(),
      s = React.useCallback(p => {
    switch (p.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        p.preventDefault(), p.stopPropagation(), n({
          type: 0
        }), l.nextFrame(() => n({
          type: 2,
          focus: 0
        }));
        break;

      case "ArrowUp":
        p.preventDefault(), p.stopPropagation(), n({
          type: 0
        }), l.nextFrame(() => n({
          type: 2,
          focus: 3
        }));
        break;
    }
  }, [n, l]),
      u = React.useCallback(p => {
    switch (p.key) {
      case " ":
        p.preventDefault();
        break;
    }
  }, []),
      c = React.useCallback(p => {
    if (G(p.currentTarget)) return p.preventDefault();
    t.disabled || (o.menuState === 0 ? (n({
      type: 1
    }), l.nextFrame(() => {
      var f;
      return (f = o.buttonRef.current) == null ? void 0 : f.focus({
        preventScroll: !0
      });
    })) : (p.preventDefault(), p.stopPropagation(), n({
      type: 0
    })));
  }, [n, l, o, t.disabled]),
      m = React.useMemo(() => ({
    open: o.menuState === 0
  }), [o]),
      b = t,
      T = {
    ref: i,
    id: a,
    type: U(t, o.buttonRef),
    "aria-haspopup": !0,
    "aria-controls": (y = o.itemsRef.current) == null ? void 0 : y.id,
    "aria-expanded": t.disabled ? void 0 : o.menuState === 0,
    onKeyDown: s,
    onKeyUp: u,
    onClick: c
  };
  return E({
    props: { ...b,
      ...T
    },
    slot: m,
    defaultTag: ci,
    name: "Menu.Button"
  });
}),
    mi = "div",
    bi = 1 | 2,
    Ti = D(function (t, r) {
  var p, f;

  let [o, n] = Je("Menu.Items"),
      i = I(o.itemsRef, r),
      a = `headlessui-menu-items-${A()}`,
      l = Q(),
      s = _(),
      u = (() => s !== null ? s === 0 : o.menuState === 0)();

  React.useEffect(() => {
    let d = o.itemsRef.current;
    !d || o.menuState === 0 && d !== document.activeElement && d.focus({
      preventScroll: !0
    });
  }, [o.menuState, o.itemsRef]), se({
    container: o.itemsRef.current,
    enabled: o.menuState === 0,

    accept(d) {
      return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
    },

    walk(d) {
      d.setAttribute("role", "none");
    }

  });
  let c = React.useCallback(d => {
    var P;

    switch (l.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "") return d.preventDefault(), d.stopPropagation(), n({
          type: 3,
          value: d.key
        });

      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n({
          type: 1
        }), o.activeItemIndex !== null) {
          let {
            id: C
          } = o.items[o.activeItemIndex];
          (P = document.getElementById(C)) == null || P.click();
        }

        k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({
            preventScroll: !0
          });
        });
        break;

      case "ArrowDown":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 2,
          focus: 2
        });

      case "ArrowUp":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 2,
          focus: 1
        });

      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 2,
          focus: 0
        });

      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n({
          type: 2,
          focus: 3
        });

      case "Escape":
        d.preventDefault(), d.stopPropagation(), n({
          type: 1
        }), k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({
            preventScroll: !0
          });
        });
        break;

      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;

      default:
        d.key.length === 1 && (n({
          type: 3,
          value: d.key
        }), l.setTimeout(() => n({
          type: 4
        }), 350));
        break;
    }
  }, [n, l, o]),
      m = React.useCallback(d => {
    switch (d.key) {
      case " ":
        d.preventDefault();
        break;
    }
  }, []),
      b = React.useMemo(() => ({
    open: o.menuState === 0
  }), [o]),
      T = {
    "aria-activedescendant": o.activeItemIndex === null || (p = o.items[o.activeItemIndex]) == null ? void 0 : p.id,
    "aria-labelledby": (f = o.buttonRef.current) == null ? void 0 : f.id,
    id: a,
    onKeyDown: c,
    onKeyUp: m,
    role: "menu",
    tabIndex: 0,
    ref: i
  };
  return E({
    props: { ...t,
      ...T
    },
    slot: b,
    defaultTag: mi,
    features: bi,
    visible: u,
    name: "Menu.Items"
  });
}),
    yi = React.Fragment;

function gi(e) {
  let {
    disabled: t = !1,
    onClick: r,
    ...o
  } = e,
      [n, i] = Je("Menu.Item"),
      a = `headlessui-menu-item-${A()}`,
      l = n.activeItemIndex !== null ? n.items[n.activeItemIndex].id === a : !1;
  x(() => {
    if (n.menuState !== 0 || !l) return;
    let p = k();
    return p.requestAnimationFrame(() => {
      var f, d;
      (d = (f = document.getElementById(a)) == null ? void 0 : f.scrollIntoView) == null || d.call(f, {
        block: "nearest"
      });
    }), p.dispose;
  }, [a, l, n.menuState, n.activeItemIndex]);
  let s = React.useRef({
    disabled: t
  });
  x(() => {
    s.current.disabled = t;
  }, [s, t]), x(() => {
    var p, f;
    s.current.textValue = (f = (p = document.getElementById(a)) == null ? void 0 : p.textContent) == null ? void 0 : f.toLowerCase();
  }, [s, a]), x(() => (i({
    type: 5,
    id: a,
    dataRef: s
  }), () => i({
    type: 6,
    id: a
  })), [s, a]);
  let u = React.useCallback(p => {
    if (t) return p.preventDefault();
    if (i({
      type: 1
    }), k().nextFrame(() => {
      var f;
      return (f = n.buttonRef.current) == null ? void 0 : f.focus({
        preventScroll: !0
      });
    }), r) return r(p);
  }, [i, n.buttonRef, t, r]),
      c = React.useCallback(() => {
    if (t) return i({
      type: 2,
      focus: 5
    });
    i({
      type: 2,
      focus: 4,
      id: a
    });
  }, [t, a, i]),
      m = React.useCallback(() => {
    t || l || i({
      type: 2,
      focus: 4,
      id: a
    });
  }, [t, l, a, i]),
      b = React.useCallback(() => {
    t || !l || i({
      type: 2,
      focus: 5
    });
  }, [t, l, i]),
      T = React.useMemo(() => ({
    active: l,
    disabled: t
  }), [l, t]);
  return E({
    props: { ...o,
      ...{
        id: a,
        role: "menuitem",
        tabIndex: t === !0 ? void 0 : -1,
        "aria-disabled": t === !0 ? !0 : void 0,
        disabled: void 0,
        onClick: u,
        onFocus: c,
        onPointerMove: m,
        onMouseMove: m,
        onPointerLeave: b,
        onMouseLeave: b
      }
    },
    slot: T,
    defaultTag: yi,
    name: "Menu.Item"
  });
}

Ze.Button = fi;
Ze.Items = Ti;
Ze.Item = gi;
var vi = {
  [0]: e => ({ ...e,
    popoverState: S(e.popoverState, {
      [0]: 1,
      [1]: 0
    })
  }),

  [1](e) {
    return e.popoverState === 1 ? e : { ...e,
      popoverState: 1
    };
  },

  [2](e, t) {
    return e.button === t.button ? e : { ...e,
      button: t.button
    };
  },

  [3](e, t) {
    return e.buttonId === t.buttonId ? e : { ...e,
      buttonId: t.buttonId
    };
  },

  [4](e, t) {
    return e.panel === t.panel ? e : { ...e,
      panel: t.panel
    };
  },

  [5](e, t) {
    return e.panelId === t.panelId ? e : { ...e,
      panelId: t.panelId
    };
  }

},
    Ut = /*#__PURE__*/React.createContext(null);
Ut.displayName = "PopoverContext";

function ot(e) {
  let t = React.useContext(Ut);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ot), r;
  }

  return t;
}

var Bt = /*#__PURE__*/React.createContext(null);
Bt.displayName = "PopoverAPIContext";

function Mo(e) {
  let t = React.useContext(Bt);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Mo), r;
  }

  return t;
}

var Nt = /*#__PURE__*/React.createContext(null);
Nt.displayName = "PopoverGroupContext";

function Fo() {
  return React.useContext(Nt);
}

var Wt = /*#__PURE__*/React.createContext(null);
Wt.displayName = "PopoverPanelContext";

function Ri() {
  return React.useContext(Wt);
}

function Ei(e, t) {
  return S(t.type, vi, e, t);
}

var Ci = "div";

function Te(e) {
  let t = `headlessui-popover-button-${A()}`,
      r = `headlessui-popover-panel-${A()}`,
      o = React.useReducer(Ei, {
    popoverState: 1,
    button: null,
    buttonId: t,
    panel: null,
    panelId: r
  }),
      [{
    popoverState: n,
    button: i,
    panel: a
  }, l] = o;
  React.useEffect(() => l({
    type: 3,
    buttonId: t
  }), [t, l]), React.useEffect(() => l({
    type: 5,
    panelId: r
  }), [r, l]);
  let s = React.useMemo(() => ({
    buttonId: t,
    panelId: r,
    close: () => l({
      type: 1
    })
  }), [t, r, l]),
      u = Fo(),
      c = u == null ? void 0 : u.registerPopover,
      m = React.useCallback(() => {
    var p;
    return (p = u == null ? void 0 : u.isFocusWithinPopoverGroup()) != null ? p : (i == null ? void 0 : i.contains(document.activeElement)) || (a == null ? void 0 : a.contains(document.activeElement));
  }, [u, i, a]);
  React.useEffect(() => c == null ? void 0 : c(s), [c, s]), w("focus", () => {
    n === 0 && (m() || !i || !a || l({
      type: 1
    }));
  }, !0), w("mousedown", p => {
    let f = p.target;
    n === 0 && ((i == null ? void 0 : i.contains(f)) || (a == null ? void 0 : a.contains(f)) || (l({
      type: 1
    }), de(f, 1) || (p.preventDefault(), i == null || i.focus())));
  });
  let b = React.useCallback(p => {
    l({
      type: 1
    });

    let f = (() => p ? p instanceof HTMLElement ? p : p.current instanceof HTMLElement ? p.current : i : i)();

    f == null || f.focus();
  }, [l, i]),
      T = React.useMemo(() => ({
    close: b
  }), [b]),
      y = React.useMemo(() => ({
    open: n === 0,
    close: b
  }), [n, b]);
  return /*#__PURE__*/React__default["default"].createElement(Ut.Provider, {
    value: o
  }, /*#__PURE__*/React__default["default"].createElement(Bt.Provider, {
    value: T
  }, /*#__PURE__*/React__default["default"].createElement(W, {
    value: S(n, {
      [0]: 0,
      [1]: 1
    })
  }, E({
    props: e,
    slot: y,
    defaultTag: Ci,
    name: "Popover"
  }))));
}

var Si = "button",
    Ai = D(function (t, r) {
  let [o, n] = ot("Popover.Button"),
      i = React.useRef(null),
      a = Fo(),
      l = a == null ? void 0 : a.closeOthers,
      s = Ri(),
      u = s === null ? !1 : s === o.panelId,
      c = I(i, r, u ? null : g => n({
    type: 2,
    button: g
  })),
      m = I(i, r),
      b = React.useRef(null),
      T = React.useRef(typeof window == "undefined" ? null : document.activeElement);
  w("focus", () => {
    T.current = b.current, b.current = document.activeElement;
  }, !0);
  let y = React.useCallback(g => {
    var v, h;

    if (u) {
      if (o.popoverState === 1) return;

      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), n({
            type: 1
          }), (v = o.button) == null || v.focus();
          break;
      }
    } else switch (g.key) {
      case " ":
      case "Enter":
        g.preventDefault(), g.stopPropagation(), o.popoverState === 1 && (l == null || l(o.buttonId)), n({
          type: 0
        });
        break;

      case "Escape":
        if (o.popoverState !== 0) return l == null ? void 0 : l(o.buttonId);
        if (!i.current || !i.current.contains(document.activeElement)) return;
        g.preventDefault(), g.stopPropagation(), n({
          type: 1
        });
        break;

      case "Tab":
        if (o.popoverState !== 0 || !o.panel || !o.button) return;

        if (g.shiftKey) {
          if (!T.current || ((h = o.button) == null ? void 0 : h.contains(T.current)) || o.panel.contains(T.current)) return;
          let O = xe(),
              L = O.indexOf(T.current);
          if (O.indexOf(o.button) > L) return;
          g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
        } else g.preventDefault(), g.stopPropagation(), M(o.panel, 1);

        break;
    }
  }, [n, o.popoverState, o.buttonId, o.button, o.panel, i, l, u]),
      p = React.useCallback(g => {
    var v;
    if (!u && (g.key === " " && g.preventDefault(), o.popoverState === 0 && !!o.panel && !!o.button)) switch (g.key) {
      case "Tab":
        if (!T.current || ((v = o.button) == null ? void 0 : v.contains(T.current)) || o.panel.contains(T.current)) return;
        let h = xe(),
            O = h.indexOf(T.current);
        if (h.indexOf(o.button) > O) return;
        g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
        break;
    }
  }, [o.popoverState, o.panel, o.button, u]),
      f = React.useCallback(g => {
    var v, h;
    G(g.currentTarget) || t.disabled || (u ? (n({
      type: 1
    }), (v = o.button) == null || v.focus()) : (o.popoverState === 1 && (l == null || l(o.buttonId)), (h = o.button) == null || h.focus(), n({
      type: 0
    })));
  }, [n, o.button, o.popoverState, o.buttonId, t.disabled, l, u]),
      d = React.useMemo(() => ({
    open: o.popoverState === 0
  }), [o]),
      P = U(t, i),
      C = t,
      R = u ? {
    ref: m,
    type: P,
    onKeyDown: y,
    onClick: f
  } : {
    ref: c,
    id: o.buttonId,
    type: P,
    "aria-expanded": t.disabled ? void 0 : o.popoverState === 0,
    "aria-controls": o.panel ? o.panelId : void 0,
    onKeyDown: y,
    onKeyUp: p,
    onClick: f
  };
  return E({
    props: { ...C,
      ...R
    },
    slot: d,
    defaultTag: Si,
    name: "Popover.Button"
  });
}),
    hi = "div",
    Oi = 1 | 2,
    Ii = D(function (t, r) {
  let [{
    popoverState: o
  }, n] = ot("Popover.Overlay"),
      i = I(r),
      a = `headlessui-popover-overlay-${A()}`,
      l = _(),
      s = (() => l !== null ? l === 0 : o === 0)(),
      u = React.useCallback(T => {
    if (G(T.currentTarget)) return T.preventDefault();
    n({
      type: 1
    });
  }, [n]),
      c = React.useMemo(() => ({
    open: o === 0
  }), [o]);

  return E({
    props: { ...t,
      ...{
        ref: i,
        id: a,
        "aria-hidden": !0,
        onClick: u
      }
    },
    slot: c,
    defaultTag: hi,
    features: Oi,
    visible: s,
    name: "Popover.Overlay"
  });
}),
    Li = "div",
    Di = 1 | 2,
    Mi = D(function (t, r) {
  let {
    focus: o = !1,
    ...n
  } = t,
      [i, a] = ot("Popover.Panel"),
      {
    close: l
  } = Mo("Popover.Panel"),
      s = React.useRef(null),
      u = I(s, r, p => {
    a({
      type: 4,
      panel: p
    });
  }),
      c = _(),
      m = (() => c !== null ? c === 0 : i.popoverState === 0)(),
      b = React.useCallback(p => {
    var f;

    switch (p.key) {
      case "Escape":
        if (i.popoverState !== 0 || !s.current || !s.current.contains(document.activeElement)) return;
        p.preventDefault(), p.stopPropagation(), a({
          type: 1
        }), (f = i.button) == null || f.focus();
        break;
    }
  }, [i, s, a]);

  React.useEffect(() => () => a({
    type: 4,
    panel: null
  }), [a]), React.useEffect(() => {
    var p;
    t.static || i.popoverState === 1 && ((p = t.unmount) != null ? p : !0) && a({
      type: 4,
      panel: null
    });
  }, [i.popoverState, t.unmount, t.static, a]), React.useEffect(() => {
    if (!o || i.popoverState !== 0 || !s.current) return;
    let p = document.activeElement;
    s.current.contains(p) || M(s.current, 1);
  }, [o, s, i.popoverState]), w("keydown", p => {
    var d;
    if (i.popoverState !== 0 || !s.current || p.key !== "Tab" || !document.activeElement || !s.current || !s.current.contains(document.activeElement)) return;
    p.preventDefault();
    let f = M(s.current, p.shiftKey ? 2 : 4);
    if (f === 3) return (d = i.button) == null ? void 0 : d.focus();

    if (f === 1) {
      if (!i.button) return;
      let P = xe(),
          C = P.indexOf(i.button),
          R = P.splice(C + 1).filter(g => {
        var v;
        return !((v = s.current) == null ? void 0 : v.contains(g));
      });
      M(R, 1) === 0 && M(document.body, 1);
    }
  }), w("focus", () => {
    var p;
    !o || i.popoverState === 0 && (!s.current || ((p = s.current) == null ? void 0 : p.contains(document.activeElement)) || a({
      type: 1
    }));
  }, !0);
  let T = React.useMemo(() => ({
    open: i.popoverState === 0,
    close: l
  }), [i, l]),
      y = {
    ref: u,
    id: i.panelId,
    onKeyDown: b
  };
  return /*#__PURE__*/React__default["default"].createElement(Wt.Provider, {
    value: i.panelId
  }, E({
    props: { ...n,
      ...y
    },
    slot: T,
    defaultTag: Li,
    features: Di,
    visible: m,
    name: "Popover.Panel"
  }));
}),
    Fi = "div";

function wi(e) {
  let t = React.useRef(null),
      [r, o] = React.useState([]),
      n = React.useCallback(b => {
    o(T => {
      let y = T.indexOf(b);

      if (y !== -1) {
        let p = T.slice();
        return p.splice(y, 1), p;
      }

      return T;
    });
  }, [o]),
      i = React.useCallback(b => (o(T => [...T, b]), () => n(b)), [o, n]),
      a = React.useCallback(() => {
    var T;
    let b = document.activeElement;
    return ((T = t.current) == null ? void 0 : T.contains(b)) ? !0 : r.some(y => {
      var p, f;
      return ((p = document.getElementById(y.buttonId)) == null ? void 0 : p.contains(b)) || ((f = document.getElementById(y.panelId)) == null ? void 0 : f.contains(b));
    });
  }, [t, r]),
      l = React.useCallback(b => {
    for (let T of r) T.buttonId !== b && T.close();
  }, [r]),
      s = React.useMemo(() => ({
    registerPopover: i,
    unregisterPopover: n,
    isFocusWithinPopoverGroup: a,
    closeOthers: l
  }), [i, n, a, l]),
      u = React.useMemo(() => ({}), []),
      c = {
    ref: t
  },
      m = e;
  return /*#__PURE__*/React__default["default"].createElement(Nt.Provider, {
    value: s
  }, E({
    props: { ...m,
      ...c
    },
    slot: u,
    defaultTag: Fi,
    name: "Popover.Group"
  }));
}

Te.Button = Ai;
Te.Overlay = Ii;
Te.Panel = Mi;
Te.Group = wi;

var jt = /*#__PURE__*/React.createContext(null);
jt.displayName = "RadioGroupContext";
var $t = /*#__PURE__*/React.createContext(null);
$t.displayName = "GroupContext";
var ul = {
  [0](e, t) {
    return e.selectedIndex === t.index ? e : { ...e,
      selectedIndex: t.index
    };
  },

  [1](e, t) {
    return e.orientation === t.orientation ? e : { ...e,
      orientation: t.orientation
    };
  },

  [2](e, t) {
    return e.activation === t.activation ? e : { ...e,
      activation: t.activation
    };
  },

  [3](e, t) {
    return e.tabs.includes(t.tab) ? e : { ...e,
      tabs: [...e.tabs, t.tab]
    };
  },

  [4](e, t) {
    return { ...e,
      tabs: e.tabs.filter(r => r !== t.tab)
    };
  },

  [5](e, t) {
    return e.panels.includes(t.panel) ? e : { ...e,
      panels: [...e.panels, t.panel]
    };
  },

  [6](e, t) {
    return { ...e,
      panels: e.panels.filter(r => r !== t.panel)
    };
  },

  [7](e) {
    return { ...e
    };
  }

},
    zt = /*#__PURE__*/React.createContext(null);
zt.displayName = "TabsContext";

function Le(e) {
  let t = React.useContext(zt);

  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Le), r;
  }

  return t;
}

function pl(e, t) {
  return S(t.type, ul, e, t);
}

var dl = React.Fragment;

function cl(e) {
  let {
    defaultIndex: t = 0,
    vertical: r = !1,
    manual: o = !1,
    onChange: n,
    selectedIndex: i = null,
    ...a
  } = e,
      l = r ? "vertical" : "horizontal",
      s = o ? "manual" : "auto",
      [u, c] = React.useReducer(pl, {
    selectedIndex: null,
    tabs: [],
    panels: [],
    orientation: l,
    activation: s
  }),
      m = React.useMemo(() => ({
    selectedIndex: u.selectedIndex
  }), [u.selectedIndex]),
      b = React.useRef(() => {});
  React.useEffect(() => {
    c({
      type: 1,
      orientation: l
    });
  }, [l]), React.useEffect(() => {
    c({
      type: 2,
      activation: s
    });
  }, [s]), React.useEffect(() => {
    typeof n == "function" && (b.current = n);
  }, [n]), React.useEffect(() => {
    if (u.tabs.length <= 0 || i === null && u.selectedIndex !== null) return;
    let p = u.tabs.map(P => P.current).filter(Boolean),
        f = p.filter(P => !P.hasAttribute("disabled")),
        d = i != null ? i : t;
    if (d < 0) c({
      type: 0,
      index: p.indexOf(f[0])
    });else if (d > u.tabs.length) c({
      type: 0,
      index: p.indexOf(f[f.length - 1])
    });else {
      let P = p.slice(0, d),
          R = [...p.slice(d), ...P].find(g => f.includes(g));
      if (!R) return;
      c({
        type: 0,
        index: p.indexOf(R)
      });
    }
  }, [t, i, u.tabs, u.selectedIndex]);
  let T = React.useRef(u.selectedIndex);
  React.useEffect(() => {
    T.current = u.selectedIndex;
  }, [u.selectedIndex]);
  let y = React.useMemo(() => [u, {
    dispatch: c,

    change(p) {
      T.current !== p && b.current(p), T.current = p, c({
        type: 0,
        index: p
      });
    }

  }], [u, c]);
  return /*#__PURE__*/React__default["default"].createElement(zt.Provider, {
    value: y
  }, E({
    props: { ...a
    },
    slot: m,
    defaultTag: dl,
    name: "Tabs"
  }));
}

var fl = "div";

function ml(e) {
  let [{
    selectedIndex: t,
    orientation: r
  }] = Le("Tab.List"),
      o = {
    selectedIndex: t
  };
  return E({
    props: { ...e,
      ...{
        role: "tablist",
        "aria-orientation": r
      }
    },
    slot: o,
    defaultTag: fl,
    name: "Tabs.List"
  });
}

var bl = "button";

function De(e) {
  var C, R;
  let t = `headlessui-tabs-tab-${A()}`,
      [{
    selectedIndex: r,
    tabs: o,
    panels: n,
    orientation: i,
    activation: a
  }, {
    dispatch: l,
    change: s
  }] = Le(De.name),
      u = React.useRef(null),
      c = I(u, g => {
    !g || l({
      type: 7
    });
  });
  x(() => (l({
    type: 3,
    tab: u
  }), () => l({
    type: 4,
    tab: u
  })), [l, u]);
  let m = o.indexOf(u),
      b = m === r,
      T = React.useCallback(g => {
    let v = o.map(h => h.current).filter(Boolean);

    if (g.key === " " || g.key === "Enter") {
      g.preventDefault(), g.stopPropagation(), s(m);
      return;
    }

    switch (g.key) {
      case "Home":
      case "PageUp":
        return g.preventDefault(), g.stopPropagation(), M(v, 1);

      case "End":
      case "PageDown":
        return g.preventDefault(), g.stopPropagation(), M(v, 8);
    }

    return S(i, {
      vertical() {
        if (g.key === "ArrowUp") return M(v, 2 | 16);
        if (g.key === "ArrowDown") return M(v, 4 | 16);
      },

      horizontal() {
        if (g.key === "ArrowLeft") return M(v, 2 | 16);
        if (g.key === "ArrowRight") return M(v, 4 | 16);
      }

    });
  }, [o, i, m, s]),
      y = React.useCallback(() => {
    var g;
    (g = u.current) == null || g.focus();
  }, [u]),
      p = React.useCallback(() => {
    var g;
    (g = u.current) == null || g.focus(), s(m);
  }, [s, m, u]),
      f = React.useMemo(() => ({
    selected: b
  }), [b]),
      d = {
    ref: c,
    onKeyDown: T,
    onFocus: a === "manual" ? y : p,
    onClick: p,
    id: t,
    role: "tab",
    type: U(e, u),
    "aria-controls": (R = (C = n[m]) == null ? void 0 : C.current) == null ? void 0 : R.id,
    "aria-selected": b,
    tabIndex: b ? 0 : -1
  };
  return E({
    props: { ...e,
      ...d
    },
    slot: f,
    defaultTag: bl,
    name: "Tabs.Tab"
  });
}

var Tl = "div";

function yl(e) {
  let [{
    selectedIndex: t
  }] = Le("Tab.Panels"),
      r = React.useMemo(() => ({
    selectedIndex: t
  }), [t]);
  return E({
    props: e,
    slot: r,
    defaultTag: Tl,
    name: "Tabs.Panels"
  });
}

var gl = "div",
    Pl = 1 | 2;

function xl(e) {
  var T, y;
  let [{
    selectedIndex: t,
    tabs: r,
    panels: o
  }, {
    dispatch: n
  }] = Le("Tab.Panel"),
      i = `headlessui-tabs-panel-${A()}`,
      a = React.useRef(null),
      l = I(a, p => {
    !p || n({
      type: 7
    });
  });
  x(() => (n({
    type: 5,
    panel: a
  }), () => n({
    type: 6,
    panel: a
  })), [n, a]);
  let s = o.indexOf(a),
      u = s === t,
      c = React.useMemo(() => ({
    selected: u
  }), [u]),
      m = {
    ref: l,
    id: i,
    role: "tabpanel",
    "aria-labelledby": (y = (T = r[s]) == null ? void 0 : T.current) == null ? void 0 : y.id,
    tabIndex: u ? 0 : -1
  };
  return E({
    props: { ...e,
      ...m
    },
    slot: c,
    defaultTag: gl,
    features: Pl,
    visible: u,
    name: "Tabs.Panel"
  });
}

De.Group = cl;
De.List = ml;
De.Panels = yl;
De.Panel = xl;

var dt = /*#__PURE__*/React.createContext(null);
dt.displayName = "TransitionContext";

var ct = /*#__PURE__*/React.createContext(null);
ct.displayName = "NestingContext";

const StyledTab = styled.button`
    min-width: ${({
  width
}) => width}rem;
    min-height: ${({
  height
}) => height}rem;
    padding: 0.2rem;
    background: none;
    background-color: ${({
  background
}) => background};
    border: 1px solid ${({
  border
}) => border};
    border-radius: 0.277rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;
const StyledTabPanel = styled.div`
    padding-top: 1rem;
`;
const StyledTabList = styled.div`
    display: flex;
    ${({
  space
}) => {
  if (space === "true") {
    return Ae`
                justify-content: space-between;
            `;
  }
}}
    flex-direction: ${({
  direction
}) => `${direction};`}
    gap: ${({
  gap
}) => `${gap}rem;`}    
`;

function Tabs({
  tabs,
  gap = 1,
  direction = 'column',
  space = true,
  width,
  height,
  selectedbackground = Theme.background.yellow,
  background = Theme.background.light,
  border = 'none',
  selectedcolor = Theme.typography.darker,
  color = Theme.typography.white,
  fontsize = 1
}) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const changeSelectedTab = index => {
    setSelectedTab(index);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(GlobalStyles, null), /*#__PURE__*/React__default["default"].createElement(De.Group, null, /*#__PURE__*/React__default["default"].createElement(De.List, {
    as: StyledTabList,
    gap: gap,
    direction: direction,
    space: `${space}`
  }, tabs.map((tab, index) => {
    return /*#__PURE__*/React__default["default"].createElement(De, {
      as: StyledTab,
      key: index,
      height: height,
      width: width,
      background: index === selectedTab ? selectedbackground : background,
      border: border,
      color: color,
      selectedbackground: selectedbackground
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      onClick: () => changeSelectedTab(index)
    }, /*#__PURE__*/React__default["default"].createElement(Typography, {
      color: index === selectedTab ? selectedcolor : color,
      variant: "p",
      size: fontsize
    }, tab.text)));
  })), /*#__PURE__*/React__default["default"].createElement(De.Panels, null, tabs.map((tab, index) => {
    return /*#__PURE__*/React__default["default"].createElement(De.Panel, {
      as: StyledTabPanel,
      key: index
    }, tab.content);
  }))));
}
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  background: PropTypes.string,
  selectedbackground: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  selectedcolor: PropTypes.string,
  gap: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
  space: PropTypes.bool,
  fontsize: PropTypes.number
};

function _extends() {
  _extends = Object.assign || function (target) {
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

const StyledTitle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-size: 1rem;
  width: ${({
  width
}) => width}rem;
  height: ${({
  height
}) => height}rem;
  background: ${({
  background
}) => background};
  color: ${({
  color
}) => color};
  border-radius: 0.277rem;
  cursor: pointer;
  margin-bottom: -3px;
`;
const StyledItem$1 = styled.div`
  width: ${({
  width
}) => width}rem;
  height: ${({
  height
}) => height}rem;
  line-height: ${({
  height
}) => height}rem;
  background: ${({
  background
}) => background};
  color: ${({
  color
}) => color};
  cursor: pointer;
  padding-left: 1em;
  border-top: 1px solid ${({
  color
}) => color};
  position: relative;
  z-index: 1;
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
  &:hover {
    background: ${({
  hover
}) => hover};
  }
  ${({
  pick
}) => pick && Ae`
      background: ${({
  hover
}) => hover};
    `}
  ${({
  error
}) => error && Ae`
      cursor: not-allowed;
    `}
`;

var img = "data:image/svg+xml,%3csvg width='13' height='7' viewBox='0 0 13 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.1429 1.19209e-07L6.5 4.375L1.85714 1.19209e-07L4.76837e-07 0.875L6.5 7L13 0.875L11.1429 1.19209e-07Z' fill='white'/%3e%3c/svg%3e";

function Droplist(args) {
  const {
    items,
    title,
    background = Theme.background.blue,
    color = Theme.typography.white,
    width = 19.5,
    height = 2.3,
    hover
  } = args;
  const [selectedItem, setSelectedItem] = React.useState(title);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Ee, {
    value: selectedItem,
    onChange: setSelectedItem
  }, /*#__PURE__*/React__default["default"].createElement(Ee.Button, {
    as: StyledTitle,
    color: color,
    background: background,
    width: width,
    height: height
  }, selectedItem !== title ? selectedItem.text : title, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img,
    alt: ">"
  })), /*#__PURE__*/React__default["default"].createElement(Ee.Options, null, items.map((item, index) => /*#__PURE__*/React__default["default"].createElement(Ee.Option, _extends({
    as: StyledItem$1,
    key: index,
    value: item,
    disabled: item.disabled,
    error: item.disabled
  }, args), item.text)))));
}

Droplist.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.string
};

const StyledMenuButton = styled.button`
  text-align: left;
  border-radius: 5px;
  background: ${({
  background
}) => background};
  font-size: 1em;
  padding: 0 0 0 1em;
  min-width: ${({
  width
}) => width}em;
  min-height: ${({
  height
}) => height}em;
  color: ${({
  color
}) => color};
  margin-bottom: 5px;
  cursor: pointer;
`;
const StyledItem = styled.a`
  cursor: pointer;
  display: block;
  padding: 0 0 0 1em;
  background: ${({
  background
}) => background};
  width: ${({
  width
}) => width}em;
  height: ${({
  height
}) => height}em;
  line-height: ${({
  height
}) => height}em;
  color: ${({
  color
}) => color};
  border-bottom: 1px solid ${({
  color
}) => color};
  ${({
  active,
  hover
}) => active && Ae`
      &:hover {
        background: ${hover};
      }
    `}
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
    border: none;
  }
  &:only-child {
    border-radius: 5px;
    border: none;
  }
`;

function DropMenu(args) {
  const {
    title,
    items,
    width = 15,
    height = 3,
    hover = Theme.background.yellow,
    background = Theme.background.dark,
    color = Theme.typography.white
  } = args;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Ze, null, /*#__PURE__*/React__default["default"].createElement(Ze.Button, _extends({
    as: StyledMenuButton
  }, args), title), /*#__PURE__*/React__default["default"].createElement(Ze.Items, null, items.map((item, index) => {
    return /*#__PURE__*/React__default["default"].createElement(Ze.Item, _extends({
      as: StyledItem,
      key: index,
      active: ({
        active
      }) => active
    }, args), item.text);
  }))));
}

DropMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string
};

const StyledBox = styled.div`
  width: ${({
  width
}) => width}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({
  background
}) => background};
  border: 1px solid ${({
  border
}) => border};
  border-radius: 0.277rem;
  padding: 0.2rem;
`;
const StyledDisclosure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({
  width
}) => width}rem;
  padding: 0.2rem 0.4rem;
`;
const StyledDisclosureButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  min-width: 100%;
  padding: 0.5rem 0.5rem;
  background: none;
  background-color: ${({
  backgroundButton
}) => backgroundButton};
  border: 1px solid ${({
  border
}) => border};
  border-radius: 0.277rem;
  color: ${({
  color
}) => color};
`;
const StyledDisclosurePanel = styled.div`
  padding: 0.5rem;
  color: ${({
  color
}) => color};
`;

function DisclosureStory({
  disclosures,
  width = 30,
  background = Theme.background.light,
  border = Theme.background.dark,
  color = Theme.typography.white,
  backgroundButton = Theme.background.yellow
}) {
  const openedStyle = {
    transform: "rotate(180deg)"
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledBox, {
    width: width,
    background: background,
    border: border
  }, disclosures.map((disclosure, index) => {
    return /*#__PURE__*/React__default["default"].createElement(Ye, {
      key: index,
      as: StyledDisclosure,
      width: width
    }, ({
      open
    }) => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Ye.Button, {
      as: StyledDisclosureButton,
      width: width,
      color: color,
      backgroundButton: backgroundButton
    }, /*#__PURE__*/React__default["default"].createElement(Typography, {
      color: color,
      variant: "p"
    }, disclosure.text), /*#__PURE__*/React__default["default"].createElement("img", {
      src: img,
      alt: ">",
      style: open ? openedStyle : {}
    })), /*#__PURE__*/React__default["default"].createElement(Ye.Panel, {
      as: StyledDisclosurePanel,
      color: color
    }, disclosure.content)));
  })));
}
DisclosureStory.propTypes = {
  disclosures: PropTypes.array.isRequired,
  width: PropTypes.number,
  background: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  backgroundButton: PropTypes.string
};

exports.Button = Button;
exports.ButtonCTA = ButtonCTA;
exports.Card = Card;
exports.Disclosure = DisclosureStory;
exports.DropMenu = DropMenu;
exports.Droplist = Droplist;
exports.GlobalStyles = GlobalStyles;
exports.Navbar = Navbar;
exports.Tabs = Tabs;
exports.Theme = Theme;
exports.Typography = Typography;
