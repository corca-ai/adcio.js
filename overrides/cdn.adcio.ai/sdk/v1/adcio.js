/*!
 *   Dev version with product grid for testing
 *   ADCIO v0.1.6
 *
 *   Copyright (c) Corca  and project contributors.
 *
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.adcio = e())
        : (t.adcio = e());
})(self, () =>
  (() => {
    var t = {
        282: (t, e, r) => {
          "use strict";
          var n = r(155),
            o = r(108);
          function i(t) {
            return (
              (i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              i(t)
            );
          }
          function a(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(
                  t,
                  ((o = n.key),
                  (a = void 0),
                  (a = (function (t, e) {
                    if ("object" !== i(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" !== i(n)) return n;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(o, "string")),
                  "symbol" === i(a) ? a : String(a)),
                  n,
                );
            }
            var o, a;
          }
          function c(t, e, r) {
            return (
              e && a(t.prototype, e),
              r && a(t, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          var u,
            s,
            f = r(136).codes,
            l = f.ERR_AMBIGUOUS_ARGUMENT,
            p = f.ERR_INVALID_ARG_TYPE,
            h = f.ERR_INVALID_ARG_VALUE,
            y = f.ERR_INVALID_RETURN_VALUE,
            d = f.ERR_MISSING_ARGS,
            g = r(961),
            b = r(539).inspect,
            v = r(539).types,
            m = v.isPromise,
            w = v.isRegExp,
            O = r(162)(),
            E = r(624)(),
            S = r(924)("RegExp.prototype.test");
          new Map();
          function j() {
            var t = r(158);
            (u = t.isDeepEqual), (s = t.isDeepStrictEqual);
          }
          var P = !1,
            A = (t.exports = R),
            x = {};
          function T(t) {
            if (t.message instanceof Error) throw t.message;
            throw new g(t);
          }
          function k(t, e, r, n) {
            if (!r) {
              var o = !1;
              if (0 === e)
                (o = !0), (n = "No value argument passed to `assert.ok()`");
              else if (n instanceof Error) throw n;
              var i = new g({
                actual: r,
                expected: !0,
                message: n,
                operator: "==",
                stackStartFn: t,
              });
              throw ((i.generatedMessage = o), i);
            }
          }
          function R() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            k.apply(void 0, [R, e.length].concat(e));
          }
          (A.fail = function t(e, r, i, a, c) {
            var u,
              s = arguments.length;
            if (0 === s) u = "Failed";
            else if (1 === s) (i = e), (e = void 0);
            else {
              if (!1 === P)
                (P = !0),
                  (n.emitWarning ? n.emitWarning : o.warn.bind(o))(
                    "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
                    "DeprecationWarning",
                    "DEP0094",
                  );
              2 === s && (a = "!=");
            }
            if (i instanceof Error) throw i;
            var f = {
              actual: e,
              expected: r,
              operator: void 0 === a ? "fail" : a,
              stackStartFn: c || t,
            };
            void 0 !== i && (f.message = i);
            var l = new g(f);
            throw (u && ((l.message = u), (l.generatedMessage = !0)), l);
          }),
            (A.AssertionError = g),
            (A.ok = R),
            (A.equal = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              e != r &&
                T({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "==",
                  stackStartFn: t,
                });
            }),
            (A.notEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              e == r &&
                T({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "!=",
                  stackStartFn: t,
                });
            }),
            (A.deepEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              void 0 === u && j(),
                u(e, r) ||
                  T({
                    actual: e,
                    expected: r,
                    message: n,
                    operator: "deepEqual",
                    stackStartFn: t,
                  });
            }),
            (A.notDeepEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              void 0 === u && j(),
                u(e, r) &&
                  T({
                    actual: e,
                    expected: r,
                    message: n,
                    operator: "notDeepEqual",
                    stackStartFn: t,
                  });
            }),
            (A.deepStrictEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              void 0 === u && j(),
                s(e, r) ||
                  T({
                    actual: e,
                    expected: r,
                    message: n,
                    operator: "deepStrictEqual",
                    stackStartFn: t,
                  });
            }),
            (A.notDeepStrictEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              void 0 === u && j();
              s(e, r) &&
                T({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "notDeepStrictEqual",
                  stackStartFn: t,
                });
            }),
            (A.strictEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              E(e, r) ||
                T({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "strictEqual",
                  stackStartFn: t,
                });
            }),
            (A.notStrictEqual = function t(e, r, n) {
              if (arguments.length < 2) throw new d("actual", "expected");
              E(e, r) &&
                T({
                  actual: e,
                  expected: r,
                  message: n,
                  operator: "notStrictEqual",
                  stackStartFn: t,
                });
            });
          var I = c(function t(e, r, n) {
            var o = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              r.forEach(function (t) {
                t in e &&
                  (void 0 !== n &&
                  "string" == typeof n[t] &&
                  w(e[t]) &&
                  S(e[t], n[t])
                    ? (o[t] = n[t])
                    : (o[t] = e[t]));
              });
          });
          function _(t, e, r, n) {
            if ("function" != typeof e) {
              if (w(e)) return S(e, t);
              if (2 === arguments.length)
                throw new p("expected", ["Function", "RegExp"], e);
              if ("object" !== i(t) || null === t) {
                var o = new g({
                  actual: t,
                  expected: e,
                  message: r,
                  operator: "deepStrictEqual",
                  stackStartFn: n,
                });
                throw ((o.operator = n.name), o);
              }
              var a = Object.keys(e);
              if (e instanceof Error) a.push("name", "message");
              else if (0 === a.length)
                throw new h("error", e, "may not be an empty object");
              return (
                void 0 === u && j(),
                a.forEach(function (o) {
                  ("string" == typeof t[o] && w(e[o]) && S(e[o], t[o])) ||
                    (function (t, e, r, n, o, i) {
                      if (!(r in t) || !s(t[r], e[r])) {
                        if (!n) {
                          var a = new I(t, o),
                            c = new I(e, o, t),
                            u = new g({
                              actual: a,
                              expected: c,
                              operator: "deepStrictEqual",
                              stackStartFn: i,
                            });
                          throw (
                            ((u.actual = t),
                            (u.expected = e),
                            (u.operator = i.name),
                            u)
                          );
                        }
                        T({
                          actual: t,
                          expected: e,
                          message: n,
                          operator: i.name,
                          stackStartFn: i,
                        });
                      }
                    })(t, e, o, r, a, n);
                }),
                !0
              );
            }
            return (
              (void 0 !== e.prototype && t instanceof e) ||
              (!Error.isPrototypeOf(e) && !0 === e.call({}, t))
            );
          }
          function C(t) {
            if ("function" != typeof t) throw new p("fn", "Function", t);
            try {
              t();
            } catch (t) {
              return t;
            }
            return x;
          }
          function L(t) {
            return (
              m(t) ||
              (null !== t &&
                "object" === i(t) &&
                "function" == typeof t.then &&
                "function" == typeof t.catch)
            );
          }
          function N(t) {
            return Promise.resolve().then(function () {
              var e;
              if ("function" == typeof t) {
                if (!L((e = t())))
                  throw new y("instance of Promise", "promiseFn", e);
              } else {
                if (!L(t)) throw new p("promiseFn", ["Function", "Promise"], t);
                e = t;
              }
              return Promise.resolve()
                .then(function () {
                  return e;
                })
                .then(function () {
                  return x;
                })
                .catch(function (t) {
                  return t;
                });
            });
          }
          function B(t, e, r, n) {
            if ("string" == typeof r) {
              if (4 === arguments.length)
                throw new p(
                  "error",
                  ["Object", "Error", "Function", "RegExp"],
                  r,
                );
              if ("object" === i(e) && null !== e) {
                if (e.message === r)
                  throw new l(
                    "error/message",
                    'The error message "'.concat(
                      e.message,
                      '" is identical to the message.',
                    ),
                  );
              } else if (e === r)
                throw new l(
                  "error/message",
                  'The error "'.concat(e, '" is identical to the message.'),
                );
              (n = r), (r = void 0);
            } else if (null != r && "object" !== i(r) && "function" != typeof r)
              throw new p(
                "error",
                ["Object", "Error", "Function", "RegExp"],
                r,
              );
            if (e === x) {
              var o = "";
              r && r.name && (o += " (".concat(r.name, ")")),
                (o += n ? ": ".concat(n) : ".");
              var a = "rejects" === t.name ? "rejection" : "exception";
              T({
                actual: void 0,
                expected: r,
                operator: t.name,
                message: "Missing expected ".concat(a).concat(o),
                stackStartFn: t,
              });
            }
            if (r && !_(e, r, n, t)) throw e;
          }
          function F(t, e, r, n) {
            if (e !== x) {
              if (
                ("string" == typeof r && ((n = r), (r = void 0)), !r || _(e, r))
              ) {
                var o = n ? ": ".concat(n) : ".",
                  i = "doesNotReject" === t.name ? "rejection" : "exception";
                T({
                  actual: e,
                  expected: r,
                  operator: t.name,
                  message:
                    "Got unwanted ".concat(i).concat(o, "\n") +
                    'Actual message: "'.concat(e && e.message, '"'),
                  stackStartFn: t,
                });
              }
              throw e;
            }
          }
          function U(t, e, r, n, o) {
            if (!w(e)) throw new p("regexp", "RegExp", e);
            var a = "match" === o;
            if ("string" != typeof t || S(e, t) !== a) {
              if (r instanceof Error) throw r;
              var c = !r;
              r =
                r ||
                ("string" != typeof t
                  ? 'The "string" argument must be of type string. Received type ' +
                    "".concat(i(t), " (").concat(b(t), ")")
                  : (a
                      ? "The input did not match the regular expression "
                      : "The input was expected to not match the regular expression ") +
                    "".concat(b(e), ". Input:\n\n").concat(b(t), "\n"));
              var u = new g({
                actual: t,
                expected: e,
                message: r,
                operator: o,
                stackStartFn: n,
              });
              throw ((u.generatedMessage = c), u);
            }
          }
          function D() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            k.apply(void 0, [D, e.length].concat(e));
          }
          (A.throws = function t(e) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              n[o - 1] = arguments[o];
            B.apply(void 0, [t, C(e)].concat(n));
          }),
            (A.rejects = function t(e) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              return N(e).then(function (e) {
                return B.apply(void 0, [t, e].concat(n));
              });
            }),
            (A.doesNotThrow = function t(e) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              F.apply(void 0, [t, C(e)].concat(n));
            }),
            (A.doesNotReject = function t(e) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              return N(e).then(function (e) {
                return F.apply(void 0, [t, e].concat(n));
              });
            }),
            (A.ifError = function t(e) {
              if (null != e) {
                var r = "ifError got unwanted exception: ";
                "object" === i(e) && "string" == typeof e.message
                  ? 0 === e.message.length && e.constructor
                    ? (r += e.constructor.name)
                    : (r += e.message)
                  : (r += b(e));
                var n = new g({
                    actual: e,
                    expected: null,
                    operator: "ifError",
                    message: r,
                    stackStartFn: t,
                  }),
                  o = e.stack;
                if ("string" == typeof o) {
                  var a = o.split("\n");
                  a.shift();
                  for (var c = n.stack.split("\n"), u = 0; u < a.length; u++) {
                    var s = c.indexOf(a[u]);
                    if (-1 !== s) {
                      c = c.slice(0, s);
                      break;
                    }
                  }
                  n.stack = "".concat(c.join("\n"), "\n").concat(a.join("\n"));
                }
                throw n;
              }
            }),
            (A.match = function t(e, r, n) {
              U(e, r, n, t, "match");
            }),
            (A.doesNotMatch = function t(e, r, n) {
              U(e, r, n, t, "doesNotMatch");
            }),
            (A.strict = O(D, A, {
              equal: A.strictEqual,
              deepEqual: A.deepStrictEqual,
              notEqual: A.notStrictEqual,
              notDeepEqual: A.notDeepStrictEqual,
            })),
            (A.strict.strict = A.strict);
        },
        961: (t, e, r) => {
          "use strict";
          var n = r(155);
          function o(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function i(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? o(Object(r), !0).forEach(function (e) {
                    a(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : o(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e),
                      );
                    });
            }
            return t;
          }
          function a(t, e, r) {
            return (
              (e = u(e)) in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }
          function c(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, u(n.key), n);
            }
          }
          function u(t) {
            var e = (function (t, e) {
              if ("object" !== g(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== g(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === g(e) ? e : String(e);
          }
          function s(t, e) {
            if (e && ("object" === g(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return f(t);
          }
          function f(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t;
          }
          function l(t) {
            var e = "function" == typeof Map ? new Map() : void 0;
            return (
              (l = function (t) {
                if (
                  null === t ||
                  ((r = t),
                  -1 === Function.toString.call(r).indexOf("[native code]"))
                )
                  return t;
                var r;
                if ("function" != typeof t)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                if (void 0 !== e) {
                  if (e.has(t)) return e.get(t);
                  e.set(t, n);
                }
                function n() {
                  return p(t, arguments, d(this).constructor);
                }
                return (
                  (n.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  y(n, t)
                );
              }),
              l(t)
            );
          }
          function p(t, e, r) {
            return (
              (p = h()
                ? Reflect.construct.bind()
                : function (t, e, r) {
                    var n = [null];
                    n.push.apply(n, e);
                    var o = new (Function.bind.apply(t, n))();
                    return r && y(o, r.prototype), o;
                  }),
              p.apply(null, arguments)
            );
          }
          function h() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          }
          function y(t, e) {
            return (
              (y = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              y(t, e)
            );
          }
          function d(t) {
            return (
              (d = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              d(t)
            );
          }
          function g(t) {
            return (
              (g =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              g(t)
            );
          }
          var b = r(539).inspect,
            v = r(136).codes.ERR_INVALID_ARG_TYPE;
          function m(t, e, r) {
            return (
              (void 0 === r || r > t.length) && (r = t.length),
              t.substring(r - e.length, r) === e
            );
          }
          var w = "",
            O = "",
            E = "",
            S = "",
            j = {
              deepStrictEqual: "Expected values to be strictly deep-equal:",
              strictEqual: "Expected values to be strictly equal:",
              strictEqualObject:
                'Expected "actual" to be reference-equal to "expected":',
              deepEqual: "Expected values to be loosely deep-equal:",
              equal: "Expected values to be loosely equal:",
              notDeepStrictEqual:
                'Expected "actual" not to be strictly deep-equal to:',
              notStrictEqual: 'Expected "actual" to be strictly unequal to:',
              notStrictEqualObject:
                'Expected "actual" not to be reference-equal to "expected":',
              notDeepEqual:
                'Expected "actual" not to be loosely deep-equal to:',
              notEqual: 'Expected "actual" to be loosely unequal to:',
              notIdentical: "Values identical but not reference-equal:",
            };
          function P(t) {
            var e = Object.keys(t),
              r = Object.create(Object.getPrototypeOf(t));
            return (
              e.forEach(function (e) {
                r[e] = t[e];
              }),
              Object.defineProperty(r, "message", { value: t.message }),
              r
            );
          }
          function A(t) {
            return b(t, {
              compact: !1,
              customInspect: !1,
              depth: 1e3,
              maxArrayLength: 1 / 0,
              showHidden: !1,
              breakLength: 1 / 0,
              showProxy: !1,
              sorted: !0,
              getters: !0,
            });
          }
          function x(t, e, r) {
            var o = "",
              i = "",
              a = 0,
              c = "",
              u = !1,
              s = A(t),
              f = s.split("\n"),
              l = A(e).split("\n"),
              p = 0,
              h = "";
            if (
              ("strictEqual" === r &&
                "object" === g(t) &&
                "object" === g(e) &&
                null !== t &&
                null !== e &&
                (r = "strictEqualObject"),
              1 === f.length && 1 === l.length && f[0] !== l[0])
            ) {
              var y = f[0].length + l[0].length;
              if (y <= 10) {
                if (
                  !(
                    ("object" === g(t) && null !== t) ||
                    ("object" === g(e) && null !== e) ||
                    (0 === t && 0 === e)
                  )
                )
                  return (
                    "".concat(j[r], "\n\n") +
                    "".concat(f[0], " !== ").concat(l[0], "\n")
                  );
              } else if ("strictEqualObject" !== r) {
                if (y < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
                  for (; f[0][p] === l[0][p]; ) p++;
                  p > 2 &&
                    ((h = "\n  ".concat(
                      (function (t, e) {
                        if (((e = Math.floor(e)), 0 == t.length || 0 == e))
                          return "";
                        var r = t.length * e;
                        for (e = Math.floor(Math.log(e) / Math.log(2)); e; )
                          (t += t), e--;
                        return t + t.substring(0, r - t.length);
                      })(" ", p),
                      "^",
                    )),
                    (p = 0));
                }
              }
            }
            for (
              var d = f[f.length - 1], b = l[l.length - 1];
              d === b &&
              (p++ < 2 ? (c = "\n  ".concat(d).concat(c)) : (o = d),
              f.pop(),
              l.pop(),
              0 !== f.length && 0 !== l.length);

            )
              (d = f[f.length - 1]), (b = l[l.length - 1]);
            var v = Math.max(f.length, l.length);
            if (0 === v) {
              var P = s.split("\n");
              if (P.length > 30)
                for (P[26] = "".concat(w, "...").concat(S); P.length > 27; )
                  P.pop();
              return ""
                .concat(j.notIdentical, "\n\n")
                .concat(P.join("\n"), "\n");
            }
            p > 3 &&
              ((c = "\n".concat(w, "...").concat(S).concat(c)), (u = !0)),
              "" !== o && ((c = "\n  ".concat(o).concat(c)), (o = ""));
            var x = 0,
              T =
                j[r] +
                "\n"
                  .concat(O, "+ actual")
                  .concat(S, " ")
                  .concat(E, "- expected")
                  .concat(S),
              k = " ".concat(w, "...").concat(S, " Lines skipped");
            for (p = 0; p < v; p++) {
              var R = p - a;
              if (f.length < p + 1)
                R > 1 &&
                  p > 2 &&
                  (R > 4
                    ? ((i += "\n".concat(w, "...").concat(S)), (u = !0))
                    : R > 3 && ((i += "\n  ".concat(l[p - 2])), x++),
                  (i += "\n  ".concat(l[p - 1])),
                  x++),
                  (a = p),
                  (o += "\n".concat(E, "-").concat(S, " ").concat(l[p])),
                  x++;
              else if (l.length < p + 1)
                R > 1 &&
                  p > 2 &&
                  (R > 4
                    ? ((i += "\n".concat(w, "...").concat(S)), (u = !0))
                    : R > 3 && ((i += "\n  ".concat(f[p - 2])), x++),
                  (i += "\n  ".concat(f[p - 1])),
                  x++),
                  (a = p),
                  (i += "\n".concat(O, "+").concat(S, " ").concat(f[p])),
                  x++;
              else {
                var I = l[p],
                  _ = f[p],
                  C = _ !== I && (!m(_, ",") || _.slice(0, -1) !== I);
                C &&
                  m(I, ",") &&
                  I.slice(0, -1) === _ &&
                  ((C = !1), (_ += ",")),
                  C
                    ? (R > 1 &&
                        p > 2 &&
                        (R > 4
                          ? ((i += "\n".concat(w, "...").concat(S)), (u = !0))
                          : R > 3 && ((i += "\n  ".concat(f[p - 2])), x++),
                        (i += "\n  ".concat(f[p - 1])),
                        x++),
                      (a = p),
                      (i += "\n".concat(O, "+").concat(S, " ").concat(_)),
                      (o += "\n".concat(E, "-").concat(S, " ").concat(I)),
                      (x += 2))
                    : ((i += o),
                      (o = ""),
                      (1 !== R && 0 !== p) || ((i += "\n  ".concat(_)), x++));
              }
              if (x > 20 && p < v - 2)
                return (
                  ""
                    .concat(T)
                    .concat(k, "\n")
                    .concat(i, "\n")
                    .concat(w, "...")
                    .concat(S)
                    .concat(o, "\n") + "".concat(w, "...").concat(S)
                );
            }
            return ""
              .concat(T)
              .concat(u ? k : "", "\n")
              .concat(i)
              .concat(o)
              .concat(c)
              .concat(h);
          }
          var T = (function (t, e) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && y(t, e);
            })(m, t);
            var r,
              o,
              a,
              u,
              l,
              p =
                ((r = m),
                (o = h()),
                function () {
                  var t,
                    e = d(r);
                  if (o) {
                    var n = d(this).constructor;
                    t = Reflect.construct(e, arguments, n);
                  } else t = e.apply(this, arguments);
                  return s(this, t);
                });
            function m(t) {
              var e;
              if (
                ((function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, m),
                "object" !== g(t) || null === t)
              )
                throw new v("options", "Object", t);
              var r = t.message,
                o = t.operator,
                i = t.stackStartFn,
                a = t.actual,
                c = t.expected,
                u = Error.stackTraceLimit;
              if (((Error.stackTraceLimit = 0), null != r))
                e = p.call(this, String(r));
              else if (
                (n.stderr &&
                  n.stderr.isTTY &&
                  (n.stderr &&
                  n.stderr.getColorDepth &&
                  1 !== n.stderr.getColorDepth()
                    ? ((w = "[34m"), (O = "[32m"), (S = "[39m"), (E = "[31m"))
                    : ((w = ""), (O = ""), (S = ""), (E = ""))),
                "object" === g(a) &&
                  null !== a &&
                  "object" === g(c) &&
                  null !== c &&
                  "stack" in a &&
                  a instanceof Error &&
                  "stack" in c &&
                  c instanceof Error &&
                  ((a = P(a)), (c = P(c))),
                "deepStrictEqual" === o || "strictEqual" === o)
              )
                e = p.call(this, x(a, c, o));
              else if ("notDeepStrictEqual" === o || "notStrictEqual" === o) {
                var l = j[o],
                  h = A(a).split("\n");
                if (
                  ("notStrictEqual" === o &&
                    "object" === g(a) &&
                    null !== a &&
                    (l = j.notStrictEqualObject),
                  h.length > 30)
                )
                  for (h[26] = "".concat(w, "...").concat(S); h.length > 27; )
                    h.pop();
                e =
                  1 === h.length
                    ? p.call(this, "".concat(l, " ").concat(h[0]))
                    : p.call(
                        this,
                        "".concat(l, "\n\n").concat(h.join("\n"), "\n"),
                      );
              } else {
                var y = A(a),
                  d = "",
                  b = j[o];
                "notDeepEqual" === o || "notEqual" === o
                  ? (y = "".concat(j[o], "\n\n").concat(y)).length > 1024 &&
                    (y = "".concat(y.slice(0, 1021), "..."))
                  : ((d = "".concat(A(c))),
                    y.length > 512 && (y = "".concat(y.slice(0, 509), "...")),
                    d.length > 512 && (d = "".concat(d.slice(0, 509), "...")),
                    "deepEqual" === o || "equal" === o
                      ? (y = ""
                          .concat(b, "\n\n")
                          .concat(y, "\n\nshould equal\n\n"))
                      : (d = " ".concat(o, " ").concat(d))),
                  (e = p.call(this, "".concat(y).concat(d)));
              }
              return (
                (Error.stackTraceLimit = u),
                (e.generatedMessage = !r),
                Object.defineProperty(f(e), "name", {
                  value: "AssertionError [ERR_ASSERTION]",
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                }),
                (e.code = "ERR_ASSERTION"),
                (e.actual = a),
                (e.expected = c),
                (e.operator = o),
                Error.captureStackTrace && Error.captureStackTrace(f(e), i),
                e.stack,
                (e.name = "AssertionError"),
                s(e)
              );
            }
            return (
              (a = m),
              (u = [
                {
                  key: "toString",
                  value: function () {
                    return ""
                      .concat(this.name, " [")
                      .concat(this.code, "]: ")
                      .concat(this.message);
                  },
                },
                {
                  key: e,
                  value: function (t, e) {
                    return b(
                      this,
                      i(i({}, e), {}, { customInspect: !1, depth: 0 }),
                    );
                  },
                },
              ]) && c(a.prototype, u),
              l && c(a, l),
              Object.defineProperty(a, "prototype", { writable: !1 }),
              m
            );
          })(l(Error), b.custom);
          t.exports = T;
        },
        136: (t, e, r) => {
          "use strict";
          function n(t) {
            return (
              (n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              n(t)
            );
          }
          function o(t, e) {
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(
                  t,
                  ((i = o.key),
                  (a = void 0),
                  (a = (function (t, e) {
                    if ("object" !== n(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var o = r.call(t, e || "default");
                      if ("object" !== n(o)) return o;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(i, "string")),
                  "symbol" === n(a) ? a : String(a)),
                  o,
                );
            }
            var i, a;
          }
          function i(t, e) {
            return (
              (i = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              i(t, e)
            );
          }
          function a(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                o = c(t);
              if (e) {
                var i = c(this).constructor;
                r = Reflect.construct(o, arguments, i);
              } else r = o.apply(this, arguments);
              return (function (t, e) {
                if (e && ("object" === n(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(this, r);
            };
          }
          function c(t) {
            return (
              (c = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              c(t)
            );
          }
          var u,
            s,
            f = {};
          function l(t, e, r) {
            r || (r = Error);
            var n = (function (r) {
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && i(t, e);
              })(f, r);
              var n,
                c,
                u,
                s = a(f);
              function f(r, n, o) {
                var i;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, f),
                  (i = s.call(
                    this,
                    (function (t, r, n) {
                      return "string" == typeof e ? e : e(t, r, n);
                    })(r, n, o),
                  )),
                  (i.code = t),
                  i
                );
              }
              return (
                (n = f),
                c && o(n.prototype, c),
                u && o(n, u),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
            })(r);
            f[t] = n;
          }
          function p(t, e) {
            if (Array.isArray(t)) {
              var r = t.length;
              return (
                (t = t.map(function (t) {
                  return String(t);
                })),
                r > 2
                  ? "one of "
                      .concat(e, " ")
                      .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
                  : 2 === r
                    ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                    : "of ".concat(e, " ").concat(t[0])
              );
            }
            return "of ".concat(e, " ").concat(String(t));
          }
          l(
            "ERR_AMBIGUOUS_ARGUMENT",
            'The "%s" argument is ambiguous. %s',
            TypeError,
          ),
            l(
              "ERR_INVALID_ARG_TYPE",
              function (t, e, o) {
                var i, a, c, s;
                if (
                  (void 0 === u && (u = r(282)),
                  u("string" == typeof t, "'name' must be a string"),
                  "string" == typeof e &&
                  ((a = "not "), e.substr(!c || c < 0 ? 0 : +c, a.length) === a)
                    ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                    : (i = "must be"),
                  (function (t, e, r) {
                    return (
                      (void 0 === r || r > t.length) && (r = t.length),
                      t.substring(r - e.length, r) === e
                    );
                  })(t, " argument"))
                )
                  s = "The ".concat(t, " ").concat(i, " ").concat(p(e, "type"));
                else {
                  var f = (function (t, e, r) {
                    return (
                      "number" != typeof r && (r = 0),
                      !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                    );
                  })(t, ".")
                    ? "property"
                    : "argument";
                  s = 'The "'
                    .concat(t, '" ')
                    .concat(f, " ")
                    .concat(i, " ")
                    .concat(p(e, "type"));
                }
                return (s += ". Received type ".concat(n(o)));
              },
              TypeError,
            ),
            l(
              "ERR_INVALID_ARG_VALUE",
              function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "is invalid";
                void 0 === s && (s = r(539));
                var o = s.inspect(e);
                return (
                  o.length > 128 && (o = "".concat(o.slice(0, 128), "...")),
                  "The argument '"
                    .concat(t, "' ")
                    .concat(n, ". Received ")
                    .concat(o)
                );
              },
              TypeError,
              RangeError,
            ),
            l(
              "ERR_INVALID_RETURN_VALUE",
              function (t, e, r) {
                var o;
                return (
                  (o =
                    r && r.constructor && r.constructor.name
                      ? "instance of ".concat(r.constructor.name)
                      : "type ".concat(n(r))),
                  "Expected "
                    .concat(t, ' to be returned from the "')
                    .concat(e, '"') + " function but got ".concat(o, ".")
                );
              },
              TypeError,
            ),
            l(
              "ERR_MISSING_ARGS",
              function () {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                void 0 === u && (u = r(282)),
                  u(e.length > 0, "At least one arg needs to be specified");
                var o = "The ",
                  i = e.length;
                switch (
                  ((e = e.map(function (t) {
                    return '"'.concat(t, '"');
                  })),
                  i)
                ) {
                  case 1:
                    o += "".concat(e[0], " argument");
                    break;
                  case 2:
                    o += "".concat(e[0], " and ").concat(e[1], " arguments");
                    break;
                  default:
                    (o += e.slice(0, i - 1).join(", ")),
                      (o += ", and ".concat(e[i - 1], " arguments"));
                }
                return "".concat(o, " must be specified");
              },
              TypeError,
            ),
            (t.exports.codes = f);
        },
        158: (t, e, r) => {
          "use strict";
          function n(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    i,
                    a,
                    c = [],
                    u = !0,
                    s = !1;
                  try {
                    if (((i = (r = r.call(t)).next), 0 === e)) {
                      if (Object(r) !== r) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (n = i.call(r)).done) &&
                        (c.push(n.value), c.length !== e);
                        u = !0
                      );
                  } catch (t) {
                    (s = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (s) throw o;
                    }
                  }
                  return c;
                }
              })(t, e) ||
              (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return o(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(t);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return o(t, e);
              })(t, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })()
            );
          }
          function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }
          function i(t) {
            return (
              (i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              i(t)
            );
          }
          var a = void 0 !== /a/g.flags,
            c = function (t) {
              var e = [];
              return (
                t.forEach(function (t) {
                  return e.push(t);
                }),
                e
              );
            },
            u = function (t) {
              var e = [];
              return (
                t.forEach(function (t, r) {
                  return e.push([r, t]);
                }),
                e
              );
            },
            s = Object.is ? Object.is : r(609),
            f = Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols
              : function () {
                  return [];
                },
            l = Number.isNaN ? Number.isNaN : r(360);
          function p(t) {
            return t.call.bind(t);
          }
          var h = p(Object.prototype.hasOwnProperty),
            y = p(Object.prototype.propertyIsEnumerable),
            d = p(Object.prototype.toString),
            g = r(539).types,
            b = g.isAnyArrayBuffer,
            v = g.isArrayBufferView,
            m = g.isDate,
            w = g.isMap,
            O = g.isRegExp,
            E = g.isSet,
            S = g.isNativeError,
            j = g.isBoxedPrimitive,
            P = g.isNumberObject,
            A = g.isStringObject,
            x = g.isBooleanObject,
            T = g.isBigIntObject,
            k = g.isSymbolObject,
            R = g.isFloat32Array,
            I = g.isFloat64Array;
          function _(t) {
            if (0 === t.length || t.length > 10) return !0;
            for (var e = 0; e < t.length; e++) {
              var r = t.charCodeAt(e);
              if (r < 48 || r > 57) return !0;
            }
            return 10 === t.length && t >= Math.pow(2, 32);
          }
          function C(t) {
            return Object.keys(t)
              .filter(_)
              .concat(
                f(t).filter(Object.prototype.propertyIsEnumerable.bind(t)),
              );
          }
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
           * @license  MIT
           */ function L(t, e) {
            if (t === e) return 0;
            for (
              var r = t.length, n = e.length, o = 0, i = Math.min(r, n);
              o < i;
              ++o
            )
              if (t[o] !== e[o]) {
                (r = t[o]), (n = e[o]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }
          var N = 0,
            B = 1,
            F = 2,
            U = 3;
          function D(t, e, r, n) {
            if (t === e) return 0 !== t || !r || s(t, e);
            if (r) {
              if ("object" !== i(t))
                return "number" == typeof t && l(t) && l(e);
              if ("object" !== i(e) || null === t || null === e) return !1;
              if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e))
                return !1;
            } else {
              if (null === t || "object" !== i(t))
                return (null === e || "object" !== i(e)) && t == e;
              if (null === e || "object" !== i(e)) return !1;
            }
            var o,
              c,
              u,
              f,
              p = d(t);
            if (p !== d(e)) return !1;
            if (Array.isArray(t)) {
              if (t.length !== e.length) return !1;
              var h = C(t),
                y = C(e);
              return h.length === y.length && q(t, e, r, n, B, h);
            }
            if ("[object Object]" === p && ((!w(t) && w(e)) || (!E(t) && E(e))))
              return !1;
            if (m(t)) {
              if (
                !m(e) ||
                Date.prototype.getTime.call(t) !==
                  Date.prototype.getTime.call(e)
              )
                return !1;
            } else if (O(t)) {
              if (
                !O(e) ||
                ((u = t),
                (f = e),
                !(a
                  ? u.source === f.source && u.flags === f.flags
                  : RegExp.prototype.toString.call(u) ===
                    RegExp.prototype.toString.call(f)))
              )
                return !1;
            } else if (S(t) || t instanceof Error) {
              if (t.message !== e.message || t.name !== e.name) return !1;
            } else {
              if (v(t)) {
                if (r || (!R(t) && !I(t))) {
                  if (
                    !(function (t, e) {
                      return (
                        t.byteLength === e.byteLength &&
                        0 ===
                          L(
                            new Uint8Array(
                              t.buffer,
                              t.byteOffset,
                              t.byteLength,
                            ),
                            new Uint8Array(
                              e.buffer,
                              e.byteOffset,
                              e.byteLength,
                            ),
                          )
                      );
                    })(t, e)
                  )
                    return !1;
                } else if (
                  !(function (t, e) {
                    if (t.byteLength !== e.byteLength) return !1;
                    for (var r = 0; r < t.byteLength; r++)
                      if (t[r] !== e[r]) return !1;
                    return !0;
                  })(t, e)
                )
                  return !1;
                var g = C(t),
                  _ = C(e);
                return g.length === _.length && q(t, e, r, n, N, g);
              }
              if (E(t))
                return !(!E(e) || t.size !== e.size) && q(t, e, r, n, F);
              if (w(t))
                return !(!w(e) || t.size !== e.size) && q(t, e, r, n, U);
              if (b(t)) {
                if (
                  ((c = e),
                  (o = t).byteLength !== c.byteLength ||
                    0 !== L(new Uint8Array(o), new Uint8Array(c)))
                )
                  return !1;
              } else if (
                j(t) &&
                !(function (t, e) {
                  return P(t)
                    ? P(e) &&
                        s(
                          Number.prototype.valueOf.call(t),
                          Number.prototype.valueOf.call(e),
                        )
                    : A(t)
                      ? A(e) &&
                        String.prototype.valueOf.call(t) ===
                          String.prototype.valueOf.call(e)
                      : x(t)
                        ? x(e) &&
                          Boolean.prototype.valueOf.call(t) ===
                            Boolean.prototype.valueOf.call(e)
                        : T(t)
                          ? T(e) &&
                            BigInt.prototype.valueOf.call(t) ===
                              BigInt.prototype.valueOf.call(e)
                          : k(e) &&
                            Symbol.prototype.valueOf.call(t) ===
                              Symbol.prototype.valueOf.call(e);
                })(t, e)
              )
                return !1;
            }
            return q(t, e, r, n, N);
          }
          function M(t, e) {
            return e.filter(function (e) {
              return y(t, e);
            });
          }
          function q(t, e, r, o, a, s) {
            if (5 === arguments.length) {
              s = Object.keys(t);
              var l = Object.keys(e);
              if (s.length !== l.length) return !1;
            }
            for (var p = 0; p < s.length; p++) if (!h(e, s[p])) return !1;
            if (r && 5 === arguments.length) {
              var d = f(t);
              if (0 !== d.length) {
                var g = 0;
                for (p = 0; p < d.length; p++) {
                  var b = d[p];
                  if (y(t, b)) {
                    if (!y(e, b)) return !1;
                    s.push(b), g++;
                  } else if (y(e, b)) return !1;
                }
                var v = f(e);
                if (d.length !== v.length && M(e, v).length !== g) return !1;
              } else {
                var m = f(e);
                if (0 !== m.length && 0 !== M(e, m).length) return !1;
              }
            }
            if (
              0 === s.length &&
              (a === N || (a === B && 0 === t.length) || 0 === t.size)
            )
              return !0;
            if (void 0 === o)
              o = { val1: new Map(), val2: new Map(), position: 0 };
            else {
              var w = o.val1.get(t);
              if (void 0 !== w) {
                var O = o.val2.get(e);
                if (void 0 !== O) return w === O;
              }
              o.position++;
            }
            o.val1.set(t, o.position), o.val2.set(e, o.position);
            var E = (function (t, e, r, o, a, s) {
              var f = 0;
              if (s === F) {
                if (
                  !(function (t, e, r, n) {
                    for (var o = null, a = c(t), u = 0; u < a.length; u++) {
                      var s = a[u];
                      if ("object" === i(s) && null !== s)
                        null === o && (o = new Set()), o.add(s);
                      else if (!e.has(s)) {
                        if (r) return !1;
                        if (!z(t, e, s)) return !1;
                        null === o && (o = new Set()), o.add(s);
                      }
                    }
                    if (null !== o) {
                      for (var f = c(e), l = 0; l < f.length; l++) {
                        var p = f[l];
                        if ("object" === i(p) && null !== p) {
                          if (!G(o, p, r, n)) return !1;
                        } else if (!r && !t.has(p) && !G(o, p, r, n)) return !1;
                      }
                      return 0 === o.size;
                    }
                    return !0;
                  })(t, e, r, a)
                )
                  return !1;
              } else if (s === U) {
                if (
                  !(function (t, e, r, o) {
                    for (var a = null, c = u(t), s = 0; s < c.length; s++) {
                      var f = n(c[s], 2),
                        l = f[0],
                        p = f[1];
                      if ("object" === i(l) && null !== l)
                        null === a && (a = new Set()), a.add(l);
                      else {
                        var h = e.get(l);
                        if ((void 0 === h && !e.has(l)) || !D(p, h, r, o)) {
                          if (r) return !1;
                          if (!V(t, e, l, p, o)) return !1;
                          null === a && (a = new Set()), a.add(l);
                        }
                      }
                    }
                    if (null !== a) {
                      for (var y = u(e), d = 0; d < y.length; d++) {
                        var g = n(y[d], 2),
                          b = g[0],
                          v = g[1];
                        if ("object" === i(b) && null !== b) {
                          if (!W(a, t, b, v, r, o)) return !1;
                        } else if (
                          !(
                            r ||
                            (t.has(b) && D(t.get(b), v, !1, o)) ||
                            W(a, t, b, v, !1, o)
                          )
                        )
                          return !1;
                      }
                      return 0 === a.size;
                    }
                    return !0;
                  })(t, e, r, a)
                )
                  return !1;
              } else if (s === B)
                for (; f < t.length; f++) {
                  if (!h(t, f)) {
                    if (h(e, f)) return !1;
                    for (var l = Object.keys(t); f < l.length; f++) {
                      var p = l[f];
                      if (!h(e, p) || !D(t[p], e[p], r, a)) return !1;
                    }
                    return l.length === Object.keys(e).length;
                  }
                  if (!h(e, f) || !D(t[f], e[f], r, a)) return !1;
                }
              for (f = 0; f < o.length; f++) {
                var y = o[f];
                if (!D(t[y], e[y], r, a)) return !1;
              }
              return !0;
            })(t, e, r, s, o, a);
            return o.val1.delete(t), o.val2.delete(e), E;
          }
          function G(t, e, r, n) {
            for (var o = c(t), i = 0; i < o.length; i++) {
              var a = o[i];
              if (D(e, a, r, n)) return t.delete(a), !0;
            }
            return !1;
          }
          function $(t) {
            switch (i(t)) {
              case "undefined":
                return null;
              case "object":
                return;
              case "symbol":
                return !1;
              case "string":
                t = +t;
              case "number":
                if (l(t)) return !1;
            }
            return !0;
          }
          function z(t, e, r) {
            var n = $(r);
            return null != n ? n : e.has(n) && !t.has(n);
          }
          function V(t, e, r, n, o) {
            var i = $(r);
            if (null != i) return i;
            var a = e.get(i);
            return (
              !((void 0 === a && !e.has(i)) || !D(n, a, !1, o)) &&
              !t.has(i) &&
              D(n, a, !1, o)
            );
          }
          function W(t, e, r, n, o, i) {
            for (var a = c(t), u = 0; u < a.length; u++) {
              var s = a[u];
              if (D(r, s, o, i) && D(n, e.get(s), o, i)) return t.delete(s), !0;
            }
            return !1;
          }
          t.exports = {
            isDeepEqual: function (t, e) {
              return D(t, e, false);
            },
            isDeepStrictEqual: function (t, e) {
              return D(t, e, true);
            },
          };
        },
        742: (t, e) => {
          "use strict";
          (e.byteLength = function (t) {
            var e = c(t),
              r = e[0],
              n = e[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (e.toByteArray = function (t) {
              var e,
                r,
                i = c(t),
                a = i[0],
                u = i[1],
                s = new o(
                  (function (t, e, r) {
                    return (3 * (e + r)) / 4 - r;
                  })(0, a, u),
                ),
                f = 0,
                l = u > 0 ? a - 4 : a;
              for (r = 0; r < l; r += 4)
                (e =
                  (n[t.charCodeAt(r)] << 18) |
                  (n[t.charCodeAt(r + 1)] << 12) |
                  (n[t.charCodeAt(r + 2)] << 6) |
                  n[t.charCodeAt(r + 3)]),
                  (s[f++] = (e >> 16) & 255),
                  (s[f++] = (e >> 8) & 255),
                  (s[f++] = 255 & e);
              2 === u &&
                ((e =
                  (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
                (s[f++] = 255 & e));
              1 === u &&
                ((e =
                  (n[t.charCodeAt(r)] << 10) |
                  (n[t.charCodeAt(r + 1)] << 4) |
                  (n[t.charCodeAt(r + 2)] >> 2)),
                (s[f++] = (e >> 8) & 255),
                (s[f++] = 255 & e));
              return s;
            }),
            (e.fromByteArray = function (t) {
              for (
                var e,
                  n = t.length,
                  o = n % 3,
                  i = [],
                  a = 16383,
                  c = 0,
                  s = n - o;
                c < s;
                c += a
              )
                i.push(u(t, c, c + a > s ? s : c + a));
              1 === o
                ? ((e = t[n - 1]), i.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
                : 2 === o &&
                  ((e = (t[n - 2] << 8) + t[n - 1]),
                  i.push(
                    r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "=",
                  ));
              return i.join("");
            });
          for (
            var r = [],
              n = [],
              o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              i =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              a = 0;
            a < 64;
            ++a
          )
            (r[a] = i[a]), (n[i.charCodeAt(a)] = a);
          function c(t) {
            var e = t.length;
            if (e % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
          }
          function u(t, e, n) {
            for (var o, i, a = [], c = e; c < n; c += 3)
              (o =
                ((t[c] << 16) & 16711680) +
                ((t[c + 1] << 8) & 65280) +
                (255 & t[c + 2])),
                a.push(
                  r[((i = o) >> 18) & 63] +
                    r[(i >> 12) & 63] +
                    r[(i >> 6) & 63] +
                    r[63 & i],
                );
            return a.join("");
          }
          (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        },
        764: (t, e, r) => {
          "use strict";
          var n = r(108);
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <https://feross.org>
           * @license  MIT
           */
          const o = r(742),
            i = r(645),
            a =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          (e.lW = s), (e.h2 = 50);
          const c = 2147483647;
          function u(t) {
            if (t > c)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"',
              );
            const e = new Uint8Array(t);
            return Object.setPrototypeOf(e, s.prototype), e;
          }
          function s(t, e, r) {
            if ("number" == typeof t) {
              if ("string" == typeof e)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number',
                );
              return p(t);
            }
            return f(t, e, r);
          }
          function f(t, e, r) {
            if ("string" == typeof t)
              return (function (t, e) {
                ("string" == typeof e && "" !== e) || (e = "utf8");
                if (!s.isEncoding(e))
                  throw new TypeError("Unknown encoding: " + e);
                const r = 0 | g(t, e);
                let n = u(r);
                const o = n.write(t, e);
                o !== r && (n = n.slice(0, o));
                return n;
              })(t, e);
            if (ArrayBuffer.isView(t))
              return (function (t) {
                if (K(t, Uint8Array)) {
                  const e = new Uint8Array(t);
                  return y(e.buffer, e.byteOffset, e.byteLength);
                }
                return h(t);
              })(t);
            if (null == t)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t,
              );
            if (K(t, ArrayBuffer) || (t && K(t.buffer, ArrayBuffer)))
              return y(t, e, r);
            if (
              "undefined" != typeof SharedArrayBuffer &&
              (K(t, SharedArrayBuffer) || (t && K(t.buffer, SharedArrayBuffer)))
            )
              return y(t, e, r);
            if ("number" == typeof t)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number',
              );
            const n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return s.from(n, e, r);
            const o = (function (t) {
              if (s.isBuffer(t)) {
                const e = 0 | d(t.length),
                  r = u(e);
                return 0 === r.length || t.copy(r, 0, 0, e), r;
              }
              if (void 0 !== t.length)
                return "number" != typeof t.length || X(t.length) ? u(0) : h(t);
              if ("Buffer" === t.type && Array.isArray(t.data))
                return h(t.data);
            })(t);
            if (o) return o;
            if (
              "undefined" != typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof t[Symbol.toPrimitive]
            )
              return s.from(t[Symbol.toPrimitive]("string"), e, r);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t,
            );
          }
          function l(t) {
            if ("number" != typeof t)
              throw new TypeError('"size" argument must be of type number');
            if (t < 0)
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"',
              );
          }
          function p(t) {
            return l(t), u(t < 0 ? 0 : 0 | d(t));
          }
          function h(t) {
            const e = t.length < 0 ? 0 : 0 | d(t.length),
              r = u(e);
            for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
            return r;
          }
          function y(t, e, r) {
            if (e < 0 || t.byteLength < e)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (r || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return (
              (n =
                void 0 === e && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                    ? new Uint8Array(t, e)
                    : new Uint8Array(t, e, r)),
              Object.setPrototypeOf(n, s.prototype),
              n
            );
          }
          function d(t) {
            if (t >= c)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  c.toString(16) +
                  " bytes",
              );
            return 0 | t;
          }
          function g(t, e) {
            if (s.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || K(t, ArrayBuffer)) return t.byteLength;
            if ("string" != typeof t)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof t,
              );
            const r = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            let o = !1;
            for (;;)
              switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return J(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return H(t).length;
                default:
                  if (o) return n ? -1 : J(t).length;
                  (e = ("" + e).toLowerCase()), (o = !0);
              }
          }
          function b(t, e, r) {
            let n = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length))
              return "";
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return "";
            if ((r >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ; )
              switch (t) {
                case "hex":
                  return I(this, e, r);
                case "utf8":
                case "utf-8":
                  return x(this, e, r);
                case "ascii":
                  return k(this, e, r);
                case "latin1":
                case "binary":
                  return R(this, e, r);
                case "base64":
                  return A(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return _(this, e, r);
                default:
                  if (n) throw new TypeError("Unknown encoding: " + t);
                  (t = (t + "").toLowerCase()), (n = !0);
              }
          }
          function v(t, e, r) {
            const n = t[e];
            (t[e] = t[r]), (t[r] = n);
          }
          function m(t, e, r, n, o) {
            if (0 === t.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                  ? (r = 2147483647)
                  : r < -2147483648 && (r = -2147483648),
              X((r = +r)) && (r = o ? 0 : t.length - 1),
              r < 0 && (r = t.length + r),
              r >= t.length)
            ) {
              if (o) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!o) return -1;
              r = 0;
            }
            if (("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)))
              return 0 === e.length ? -1 : w(t, e, r, n, o);
            if ("number" == typeof e)
              return (
                (e &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? o
                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                    : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                  : w(t, [e], r, n, o)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function w(t, e, r, n, o) {
            let i,
              a = 1,
              c = t.length,
              u = e.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              (a = 2), (c /= 2), (u /= 2), (r /= 2);
            }
            function s(t, e) {
              return 1 === a ? t[e] : t.readUInt16BE(e * a);
            }
            if (o) {
              let n = -1;
              for (i = r; i < c; i++)
                if (s(t, i) === s(e, -1 === n ? 0 : i - n)) {
                  if ((-1 === n && (n = i), i - n + 1 === u)) return n * a;
                } else -1 !== n && (i -= i - n), (n = -1);
            } else
              for (r + u > c && (r = c - u), i = r; i >= 0; i--) {
                let r = !0;
                for (let n = 0; n < u; n++)
                  if (s(t, i + n) !== s(e, n)) {
                    r = !1;
                    break;
                  }
                if (r) return i;
              }
            return -1;
          }
          function O(t, e, r, n) {
            r = Number(r) || 0;
            const o = t.length - r;
            n ? (n = Number(n)) > o && (n = o) : (n = o);
            const i = e.length;
            let a;
            for (n > i / 2 && (n = i / 2), a = 0; a < n; ++a) {
              const n = parseInt(e.substr(2 * a, 2), 16);
              if (X(n)) return a;
              t[r + a] = n;
            }
            return a;
          }
          function E(t, e, r, n) {
            return Y(J(e, t.length - r), t, r, n);
          }
          function S(t, e, r, n) {
            return Y(
              (function (t) {
                const e = [];
                for (let r = 0; r < t.length; ++r)
                  e.push(255 & t.charCodeAt(r));
                return e;
              })(e),
              t,
              r,
              n,
            );
          }
          function j(t, e, r, n) {
            return Y(H(e), t, r, n);
          }
          function P(t, e, r, n) {
            return Y(
              (function (t, e) {
                let r, n, o;
                const i = [];
                for (let a = 0; a < t.length && !((e -= 2) < 0); ++a)
                  (r = t.charCodeAt(a)),
                    (n = r >> 8),
                    (o = r % 256),
                    i.push(o),
                    i.push(n);
                return i;
              })(e, t.length - r),
              t,
              r,
              n,
            );
          }
          function A(t, e, r) {
            return 0 === e && r === t.length
              ? o.fromByteArray(t)
              : o.fromByteArray(t.slice(e, r));
          }
          function x(t, e, r) {
            r = Math.min(t.length, r);
            const n = [];
            let o = e;
            for (; o < r; ) {
              const e = t[o];
              let i = null,
                a = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
              if (o + a <= r) {
                let r, n, c, u;
                switch (a) {
                  case 1:
                    e < 128 && (i = e);
                    break;
                  case 2:
                    (r = t[o + 1]),
                      128 == (192 & r) &&
                        ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (i = u));
                    break;
                  case 3:
                    (r = t[o + 1]),
                      (n = t[o + 2]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                        u > 2047 && (u < 55296 || u > 57343) && (i = u));
                    break;
                  case 4:
                    (r = t[o + 1]),
                      (n = t[o + 2]),
                      (c = t[o + 3]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        128 == (192 & c) &&
                        ((u =
                          ((15 & e) << 18) |
                          ((63 & r) << 12) |
                          ((63 & n) << 6) |
                          (63 & c)),
                        u > 65535 && u < 1114112 && (i = u));
                }
              }
              null === i
                ? ((i = 65533), (a = 1))
                : i > 65535 &&
                  ((i -= 65536),
                  n.push(((i >>> 10) & 1023) | 55296),
                  (i = 56320 | (1023 & i))),
                n.push(i),
                (o += a);
            }
            return (function (t) {
              const e = t.length;
              if (e <= T) return String.fromCharCode.apply(String, t);
              let r = "",
                n = 0;
              for (; n < e; )
                r += String.fromCharCode.apply(String, t.slice(n, (n += T)));
              return r;
            })(n);
          }
          (s.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const t = new Uint8Array(1),
                e = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                42 === t.foo()
              );
            } catch (t) {
              return !1;
            }
          })()),
            s.TYPED_ARRAY_SUPPORT ||
              void 0 === n ||
              "function" != typeof n.error ||
              n.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
              ),
            Object.defineProperty(s.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (s.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(s.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (s.isBuffer(this)) return this.byteOffset;
              },
            }),
            (s.poolSize = 8192),
            (s.from = function (t, e, r) {
              return f(t, e, r);
            }),
            Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(s, Uint8Array),
            (s.alloc = function (t, e, r) {
              return (function (t, e, r) {
                return (
                  l(t),
                  t <= 0
                    ? u(t)
                    : void 0 !== e
                      ? "string" == typeof r
                        ? u(t).fill(e, r)
                        : u(t).fill(e)
                      : u(t)
                );
              })(t, e, r);
            }),
            (s.allocUnsafe = function (t) {
              return p(t);
            }),
            (s.allocUnsafeSlow = function (t) {
              return p(t);
            }),
            (s.isBuffer = function (t) {
              return null != t && !0 === t._isBuffer && t !== s.prototype;
            }),
            (s.compare = function (t, e) {
              if (
                (K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
                !s.isBuffer(t) || !s.isBuffer(e))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                );
              if (t === e) return 0;
              let r = t.length,
                n = e.length;
              for (let o = 0, i = Math.min(r, n); o < i; ++o)
                if (t[o] !== e[o]) {
                  (r = t[o]), (n = e[o]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (s.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (s.concat = function (t, e) {
              if (!Array.isArray(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              if (0 === t.length) return s.alloc(0);
              let r;
              if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
              const n = s.allocUnsafe(e);
              let o = 0;
              for (r = 0; r < t.length; ++r) {
                let e = t[r];
                if (K(e, Uint8Array))
                  o + e.length > n.length
                    ? (s.isBuffer(e) || (e = s.from(e)), e.copy(n, o))
                    : Uint8Array.prototype.set.call(n, e, o);
                else {
                  if (!s.isBuffer(e))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers',
                    );
                  e.copy(n, o);
                }
                o += e.length;
              }
              return n;
            }),
            (s.byteLength = g),
            (s.prototype._isBuffer = !0),
            (s.prototype.swap16 = function () {
              const t = this.length;
              if (t % 2 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits",
                );
              for (let e = 0; e < t; e += 2) v(this, e, e + 1);
              return this;
            }),
            (s.prototype.swap32 = function () {
              const t = this.length;
              if (t % 4 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits",
                );
              for (let e = 0; e < t; e += 4)
                v(this, e, e + 3), v(this, e + 1, e + 2);
              return this;
            }),
            (s.prototype.swap64 = function () {
              const t = this.length;
              if (t % 8 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits",
                );
              for (let e = 0; e < t; e += 8)
                v(this, e, e + 7),
                  v(this, e + 1, e + 6),
                  v(this, e + 2, e + 5),
                  v(this, e + 3, e + 4);
              return this;
            }),
            (s.prototype.toString = function () {
              const t = this.length;
              return 0 === t
                ? ""
                : 0 === arguments.length
                  ? x(this, 0, t)
                  : b.apply(this, arguments);
            }),
            (s.prototype.toLocaleString = s.prototype.toString),
            (s.prototype.equals = function (t) {
              if (!s.isBuffer(t))
                throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === s.compare(this, t);
            }),
            (s.prototype.inspect = function () {
              let t = "";
              const r = e.h2;
              return (
                (t = this.toString("hex", 0, r)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > r && (t += " ... "),
                "<Buffer " + t + ">"
              );
            }),
            a && (s.prototype[a] = s.prototype.inspect),
            (s.prototype.compare = function (t, e, r, n, o) {
              if (
                (K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                !s.isBuffer(t))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof t,
                );
              if (
                (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === o && (o = this.length),
                e < 0 || r > t.length || n < 0 || o > this.length)
              )
                throw new RangeError("out of range index");
              if (n >= o && e >= r) return 0;
              if (n >= o) return -1;
              if (e >= r) return 1;
              if (this === t) return 0;
              let i = (o >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (e >>>= 0);
              const c = Math.min(i, a),
                u = this.slice(n, o),
                f = t.slice(e, r);
              for (let t = 0; t < c; ++t)
                if (u[t] !== f[t]) {
                  (i = u[t]), (a = f[t]);
                  break;
                }
              return i < a ? -1 : a < i ? 1 : 0;
            }),
            (s.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (s.prototype.indexOf = function (t, e, r) {
              return m(this, t, e, r, !0);
            }),
            (s.prototype.lastIndexOf = function (t, e, r) {
              return m(this, t, e, r, !1);
            }),
            (s.prototype.write = function (t, e, r, n) {
              if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
              else if (void 0 === r && "string" == typeof e)
                (n = e), (r = this.length), (e = 0);
              else {
                if (!isFinite(e))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                  );
                (e >>>= 0),
                  isFinite(r)
                    ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                    : ((n = r), (r = void 0));
              }
              const o = this.length - e;
              if (
                ((void 0 === r || r > o) && (r = o),
                (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              let i = !1;
              for (;;)
                switch (n) {
                  case "hex":
                    return O(this, t, e, r);
                  case "utf8":
                  case "utf-8":
                    return E(this, t, e, r);
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return S(this, t, e, r);
                  case "base64":
                    return j(this, t, e, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return P(this, t, e, r);
                  default:
                    if (i) throw new TypeError("Unknown encoding: " + n);
                    (n = ("" + n).toLowerCase()), (i = !0);
                }
            }),
            (s.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          const T = 4096;
          function k(t, e, r) {
            let n = "";
            r = Math.min(t.length, r);
            for (let o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
            return n;
          }
          function R(t, e, r) {
            let n = "";
            r = Math.min(t.length, r);
            for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
            return n;
          }
          function I(t, e, r) {
            const n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            let o = "";
            for (let n = e; n < r; ++n) o += Z[t[n]];
            return o;
          }
          function _(t, e, r) {
            const n = t.slice(e, r);
            let o = "";
            for (let t = 0; t < n.length - 1; t += 2)
              o += String.fromCharCode(n[t] + 256 * n[t + 1]);
            return o;
          }
          function C(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function L(t, e, r, n, o, i) {
            if (!s.isBuffer(t))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance',
              );
            if (e > o || e < i)
              throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range");
          }
          function N(t, e, r, n, o) {
            $(e, n, o, t, r, 7);
            let i = Number(e & BigInt(4294967295));
            (t[r++] = i),
              (i >>= 8),
              (t[r++] = i),
              (i >>= 8),
              (t[r++] = i),
              (i >>= 8),
              (t[r++] = i);
            let a = Number((e >> BigInt(32)) & BigInt(4294967295));
            return (
              (t[r++] = a),
              (a >>= 8),
              (t[r++] = a),
              (a >>= 8),
              (t[r++] = a),
              (a >>= 8),
              (t[r++] = a),
              r
            );
          }
          function B(t, e, r, n, o) {
            $(e, n, o, t, r, 7);
            let i = Number(e & BigInt(4294967295));
            (t[r + 7] = i),
              (i >>= 8),
              (t[r + 6] = i),
              (i >>= 8),
              (t[r + 5] = i),
              (i >>= 8),
              (t[r + 4] = i);
            let a = Number((e >> BigInt(32)) & BigInt(4294967295));
            return (
              (t[r + 3] = a),
              (a >>= 8),
              (t[r + 2] = a),
              (a >>= 8),
              (t[r + 1] = a),
              (a >>= 8),
              (t[r] = a),
              r + 8
            );
          }
          function F(t, e, r, n, o, i) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function U(t, e, r, n, o) {
            return (
              (e = +e),
              (r >>>= 0),
              o || F(t, 0, r, 4),
              i.write(t, e, r, n, 23, 4),
              r + 4
            );
          }
          function D(t, e, r, n, o) {
            return (
              (e = +e),
              (r >>>= 0),
              o || F(t, 0, r, 8),
              i.write(t, e, r, n, 52, 8),
              r + 8
            );
          }
          (s.prototype.slice = function (t, e) {
            const r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              (e = void 0 === e ? r : ~~e) < 0
                ? (e += r) < 0 && (e = 0)
                : e > r && (e = r),
              e < t && (e = t);
            const n = this.subarray(t, e);
            return Object.setPrototypeOf(n, s.prototype), n;
          }),
            (s.prototype.readUintLE = s.prototype.readUIntLE =
              function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                let n = this[t],
                  o = 1,
                  i = 0;
                for (; ++i < e && (o *= 256); ) n += this[t + i] * o;
                return n;
              }),
            (s.prototype.readUintBE = s.prototype.readUIntBE =
              function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                let n = this[t + --e],
                  o = 1;
                for (; e > 0 && (o *= 256); ) n += this[t + --e] * o;
                return n;
              }),
            (s.prototype.readUint8 = s.prototype.readUInt8 =
              function (t, e) {
                return (t >>>= 0), e || C(t, 1, this.length), this[t];
              }),
            (s.prototype.readUint16LE = s.prototype.readUInt16LE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 2, this.length),
                  this[t] | (this[t + 1] << 8)
                );
              }),
            (s.prototype.readUint16BE = s.prototype.readUInt16BE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 2, this.length),
                  (this[t] << 8) | this[t + 1]
                );
              }),
            (s.prototype.readUint32LE = s.prototype.readUInt32LE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                    16777216 * this[t + 3]
                );
              }),
            (s.prototype.readUint32BE = s.prototype.readUInt32BE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  16777216 * this[t] +
                    ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
            (s.prototype.readBigUInt64LE = Q(function (t) {
              z((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || V(t, this.length - 8);
              const n =
                  e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                o =
                  this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
              return BigInt(n) + (BigInt(o) << BigInt(32));
            })),
            (s.prototype.readBigUInt64BE = Q(function (t) {
              z((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || V(t, this.length - 8);
              const n =
                  e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                o =
                  this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
              return (BigInt(n) << BigInt(32)) + BigInt(o);
            })),
            (s.prototype.readIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
              let n = this[t],
                o = 1,
                i = 0;
              for (; ++i < e && (o *= 256); ) n += this[t + i] * o;
              return (o *= 128), n >= o && (n -= Math.pow(2, 8 * e)), n;
            }),
            (s.prototype.readIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
              let n = e,
                o = 1,
                i = this[t + --n];
              for (; n > 0 && (o *= 256); ) i += this[t + --n] * o;
              return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
            }),
            (s.prototype.readInt8 = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
              );
            }),
            (s.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || C(t, 2, this.length);
              const r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (s.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || C(t, 2, this.length);
              const r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (s.prototype.readInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (s.prototype.readInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (s.prototype.readBigInt64LE = Q(function (t) {
              z((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || V(t, this.length - 8);
              const n =
                this[t + 4] +
                256 * this[t + 5] +
                65536 * this[t + 6] +
                (r << 24);
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                )
              );
            })),
            (s.prototype.readBigInt64BE = Q(function (t) {
              z((t >>>= 0), "offset");
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || V(t, this.length - 8);
              const n =
                (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r,
                )
              );
            })),
            (s.prototype.readFloatLE = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 4, this.length),
                i.read(this, t, !0, 23, 4)
              );
            }),
            (s.prototype.readFloatBE = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 4, this.length),
                i.read(this, t, !1, 23, 4)
              );
            }),
            (s.prototype.readDoubleLE = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 8, this.length),
                i.read(this, t, !0, 52, 8)
              );
            }),
            (s.prototype.readDoubleBE = function (t, e) {
              return (
                (t >>>= 0),
                e || C(t, 8, this.length),
                i.read(this, t, !1, 52, 8)
              );
            }),
            (s.prototype.writeUintLE = s.prototype.writeUIntLE =
              function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                  L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                }
                let o = 1,
                  i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256); )
                  this[e + i] = (t / o) & 255;
                return e + r;
              }),
            (s.prototype.writeUintBE = s.prototype.writeUIntBE =
              function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                  L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                }
                let o = r - 1,
                  i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
                  this[e + o] = (t / i) & 255;
                return e + r;
              }),
            (s.prototype.writeUint8 = s.prototype.writeUInt8 =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || L(this, t, e, 1, 255, 0),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
            (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || L(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
            (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || L(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
            (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || L(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
            (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || L(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
            (s.prototype.writeBigUInt64LE = Q(function (t, e = 0) {
              return N(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (s.prototype.writeBigUInt64BE = Q(function (t, e = 0) {
              return B(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (s.prototype.writeIntLE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                L(this, t, e, r, n - 1, -n);
              }
              let o = 0,
                i = 1,
                a = 0;
              for (this[e] = 255 & t; ++o < r && (i *= 256); )
                t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                  (this[e + o] = (((t / i) >> 0) - a) & 255);
              return e + r;
            }),
            (s.prototype.writeIntBE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                L(this, t, e, r, n - 1, -n);
              }
              let o = r - 1,
                i = 1,
                a = 0;
              for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
                t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                  (this[e + o] = (((t / i) >> 0) - a) & 255);
              return e + r;
            }),
            (s.prototype.writeInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || L(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (s.prototype.writeInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || L(this, t, e, 2, 32767, -32768),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (s.prototype.writeInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || L(this, t, e, 2, 32767, -32768),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (s.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || L(this, t, e, 4, 2147483647, -2147483648),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (s.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || L(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (s.prototype.writeBigInt64LE = Q(function (t, e = 0) {
              return N(
                this,
                t,
                e,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff"),
              );
            })),
            (s.prototype.writeBigInt64BE = Q(function (t, e = 0) {
              return B(
                this,
                t,
                e,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff"),
              );
            })),
            (s.prototype.writeFloatLE = function (t, e, r) {
              return U(this, t, e, !0, r);
            }),
            (s.prototype.writeFloatBE = function (t, e, r) {
              return U(this, t, e, !1, r);
            }),
            (s.prototype.writeDoubleLE = function (t, e, r) {
              return D(this, t, e, !0, r);
            }),
            (s.prototype.writeDoubleBE = function (t, e, r) {
              return D(this, t, e, !1, r);
            }),
            (s.prototype.copy = function (t, e, r, n) {
              if (!s.isBuffer(t))
                throw new TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
              const o = n - r;
              return (
                this === t &&
                "function" == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(e, r, n)
                  : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
                o
              );
            }),
            (s.prototype.fill = function (t, e, r, n) {
              if ("string" == typeof t) {
                if (
                  ("string" == typeof e
                    ? ((n = e), (e = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !s.isEncoding(n))
                  throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                  const e = t.charCodeAt(0);
                  (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
                }
              } else
                "number" == typeof t
                  ? (t &= 255)
                  : "boolean" == typeof t && (t = Number(t));
              if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
              if (r <= e) return this;
              let o;
              if (
                ((e >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                t || (t = 0),
                "number" == typeof t)
              )
                for (o = e; o < r; ++o) this[o] = t;
              else {
                const i = s.isBuffer(t) ? t : s.from(t, n),
                  a = i.length;
                if (0 === a)
                  throw new TypeError(
                    'The value "' + t + '" is invalid for argument "value"',
                  );
                for (o = 0; o < r - e; ++o) this[o + e] = i[o % a];
              }
              return this;
            });
          const M = {};
          function q(t, e, r) {
            M[t] = class extends r {
              constructor() {
                super(),
                  Object.defineProperty(this, "message", {
                    value: e.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${t}]`),
                  this.stack,
                  delete this.name;
              }
              get code() {
                return t;
              }
              set code(t) {
                Object.defineProperty(this, "code", {
                  configurable: !0,
                  enumerable: !0,
                  value: t,
                  writable: !0,
                });
              }
              toString() {
                return `${this.name} [${t}]: ${this.message}`;
              }
            };
          }
          function G(t) {
            let e = "",
              r = t.length;
            const n = "-" === t[0] ? 1 : 0;
            for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
            return `${t.slice(0, r)}${e}`;
          }
          function $(t, e, r, n, o, i) {
            if (t > r || t < e) {
              const n = "bigint" == typeof e ? "n" : "";
              let o;
              throw (
                ((o =
                  i > 3
                    ? 0 === e || e === BigInt(0)
                      ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
                      : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${
                          8 * (i + 1) - 1
                        }${n}`
                    : `>= ${e}${n} and <= ${r}${n}`),
                new M.ERR_OUT_OF_RANGE("value", o, t))
              );
            }
            !(function (t, e, r) {
              z(e, "offset"),
                (void 0 !== t[e] && void 0 !== t[e + r]) ||
                  V(e, t.length - (r + 1));
            })(n, o, i);
          }
          function z(t, e) {
            if ("number" != typeof t)
              throw new M.ERR_INVALID_ARG_TYPE(e, "number", t);
          }
          function V(t, e, r) {
            if (Math.floor(t) !== t)
              throw (
                (z(t, r),
                new M.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
              );
            if (e < 0) throw new M.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new M.ERR_OUT_OF_RANGE(
              r || "offset",
              `>= ${r ? 1 : 0} and <= ${e}`,
              t,
            );
          }
          q(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function (t) {
              return t
                ? `${t} is outside of buffer bounds`
                : "Attempt to access memory outside buffer bounds";
            },
            RangeError,
          ),
            q(
              "ERR_INVALID_ARG_TYPE",
              function (t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`;
              },
              TypeError,
            ),
            q(
              "ERR_OUT_OF_RANGE",
              function (t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                  o = r;
                return (
                  Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (o = G(String(r)))
                    : "bigint" == typeof r &&
                      ((o = String(r)),
                      (r > BigInt(2) ** BigInt(32) ||
                        r < -(BigInt(2) ** BigInt(32))) &&
                        (o = G(o)),
                      (o += "n")),
                  (n += ` It must be ${e}. Received ${o}`),
                  n
                );
              },
              RangeError,
            );
          const W = /[^+/0-9A-Za-z-_]/g;
          function J(t, e) {
            let r;
            e = e || 1 / 0;
            const n = t.length;
            let o = null;
            const i = [];
            for (let a = 0; a < n; ++a) {
              if (((r = t.charCodeAt(a)), r > 55295 && r < 57344)) {
                if (!o) {
                  if (r > 56319) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  if (a + 1 === n) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue;
                  }
                  o = r;
                  continue;
                }
                if (r < 56320) {
                  (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                  continue;
                }
                r = 65536 + (((o - 55296) << 10) | (r - 56320));
              } else o && (e -= 3) > -1 && i.push(239, 191, 189);
              if (((o = null), r < 128)) {
                if ((e -= 1) < 0) break;
                i.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                i.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                i.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128,
                );
              }
            }
            return i;
          }
          function H(t) {
            return o.toByteArray(
              (function (t) {
                if (
                  (t = (t = t.split("=")[0]).trim().replace(W, "")).length < 2
                )
                  return "";
                for (; t.length % 4 != 0; ) t += "=";
                return t;
              })(t),
            );
          }
          function Y(t, e, r, n) {
            let o;
            for (o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
              e[o + r] = t[o];
            return o;
          }
          function K(t, e) {
            return (
              t instanceof e ||
              (null != t &&
                null != t.constructor &&
                null != t.constructor.name &&
                t.constructor.name === e.name)
            );
          }
          function X(t) {
            return t != t;
          }
          const Z = (function () {
            const t = "0123456789abcdef",
              e = new Array(256);
            for (let r = 0; r < 16; ++r) {
              const n = 16 * r;
              for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o];
            }
            return e;
          })();
          function Q(t) {
            return "undefined" == typeof BigInt ? tt : t;
          }
          function tt() {
            throw new Error("BigInt not supported");
          }
        },
        924: (t, e, r) => {
          "use strict";
          var n = r(210),
            o = r(559),
            i = o(n("String.prototype.indexOf"));
          t.exports = function (t, e) {
            var r = n(t, !!e);
            return "function" == typeof r && i(t, ".prototype.") > -1
              ? o(r)
              : r;
          };
        },
        559: (t, e, r) => {
          "use strict";
          var n = r(612),
            o = r(210),
            i = r(771),
            a = o("%TypeError%"),
            c = o("%Function.prototype.apply%"),
            u = o("%Function.prototype.call%"),
            s = o("%Reflect.apply%", !0) || n.call(u, c),
            f = o("%Object.defineProperty%", !0),
            l = o("%Math.max%");
          if (f)
            try {
              f({}, "a", { value: 1 });
            } catch (t) {
              f = null;
            }
          t.exports = function (t) {
            if ("function" != typeof t) throw new a("a function is required");
            var e = s(n, u, arguments);
            return i(e, 1 + l(0, t.length - (arguments.length - 1)), !0);
          };
          var p = function () {
            return s(n, c, arguments);
          };
          f ? f(t.exports, "apply", { value: p }) : (t.exports.apply = p);
        },
        108: (t, e, r) => {
          var n = r(539),
            o = r(282);
          function i() {
            return new Date().getTime();
          }
          var a,
            c = Array.prototype.slice,
            u = {};
          a =
            void 0 !== r.g && r.g.console
              ? r.g.console
              : "undefined" != typeof window && window.console
                ? window.console
                : {};
          for (
            var s = [
                [function () {}, "log"],
                [
                  function () {
                    a.log.apply(a, arguments);
                  },
                  "info",
                ],
                [
                  function () {
                    a.log.apply(a, arguments);
                  },
                  "warn",
                ],
                [
                  function () {
                    a.warn.apply(a, arguments);
                  },
                  "error",
                ],
                [
                  function (t) {
                    u[t] = i();
                  },
                  "time",
                ],
                [
                  function (t) {
                    var e = u[t];
                    if (!e) throw new Error("No such label: " + t);
                    delete u[t];
                    var r = i() - e;
                    a.log(t + ": " + r + "ms");
                  },
                  "timeEnd",
                ],
                [
                  function () {
                    var t = new Error();
                    (t.name = "Trace"),
                      (t.message = n.format.apply(null, arguments)),
                      a.error(t.stack);
                  },
                  "trace",
                ],
                [
                  function (t) {
                    a.log(n.inspect(t) + "\n");
                  },
                  "dir",
                ],
                [
                  function (t) {
                    if (!t) {
                      var e = c.call(arguments, 1);
                      o.ok(!1, n.format.apply(null, e));
                    }
                  },
                  "assert",
                ],
              ],
              f = 0;
            f < s.length;
            f++
          ) {
            var l = s[f],
              p = l[0],
              h = l[1];
            a[h] || (a[h] = p);
          }
          t.exports = a;
        },
        296: (t, e, r) => {
          "use strict";
          var n = r(44)(),
            o = r(210),
            i = n && o("%Object.defineProperty%", !0);
          if (i)
            try {
              i({}, "a", { value: 1 });
            } catch (t) {
              i = !1;
            }
          var a = o("%SyntaxError%"),
            c = o("%TypeError%"),
            u = r(275);
          t.exports = function (t, e, r) {
            if (!t || ("object" != typeof t && "function" != typeof t))
              throw new c("`obj` must be an object or a function`");
            if ("string" != typeof e && "symbol" != typeof e)
              throw new c("`property` must be a string or a symbol`");
            if (
              arguments.length > 3 &&
              "boolean" != typeof arguments[3] &&
              null !== arguments[3]
            )
              throw new c(
                "`nonEnumerable`, if provided, must be a boolean or null",
              );
            if (
              arguments.length > 4 &&
              "boolean" != typeof arguments[4] &&
              null !== arguments[4]
            )
              throw new c(
                "`nonWritable`, if provided, must be a boolean or null",
              );
            if (
              arguments.length > 5 &&
              "boolean" != typeof arguments[5] &&
              null !== arguments[5]
            )
              throw new c(
                "`nonConfigurable`, if provided, must be a boolean or null",
              );
            if (arguments.length > 6 && "boolean" != typeof arguments[6])
              throw new c("`loose`, if provided, must be a boolean");
            var n = arguments.length > 3 ? arguments[3] : null,
              o = arguments.length > 4 ? arguments[4] : null,
              s = arguments.length > 5 ? arguments[5] : null,
              f = arguments.length > 6 && arguments[6],
              l = !!u && u(t, e);
            if (i)
              i(t, e, {
                configurable: null === s && l ? l.configurable : !s,
                enumerable: null === n && l ? l.enumerable : !n,
                value: r,
                writable: null === o && l ? l.writable : !o,
              });
            else {
              if (!f && (n || o || s))
                throw new a(
                  "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
                );
              t[e] = r;
            }
          };
        },
        289: (t, e, r) => {
          "use strict";
          var n = r(215),
            o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
            i = Object.prototype.toString,
            a = Array.prototype.concat,
            c = r(296),
            u = r(44)(),
            s = function (t, e, r, n) {
              if (e in t)
                if (!0 === n) {
                  if (t[e] === r) return;
                } else if (
                  "function" != typeof (o = n) ||
                  "[object Function]" !== i.call(o) ||
                  !n()
                )
                  return;
              var o;
              u ? c(t, e, r, !0) : c(t, e, r);
            },
            f = function (t, e) {
              var r = arguments.length > 2 ? arguments[2] : {},
                i = n(e);
              o && (i = a.call(i, Object.getOwnPropertySymbols(e)));
              for (var c = 0; c < i.length; c += 1)
                s(t, i[c], e[i[c]], r[i[c]]);
            };
          (f.supportsDescriptors = !!u), (t.exports = f);
        },
        29: (t, e, r) => {
          "use strict";
          var n = r(320),
            o = Object.prototype.toString,
            i = Object.prototype.hasOwnProperty;
          t.exports = function (t, e, r) {
            if (!n(e)) throw new TypeError("iterator must be a function");
            var a;
            arguments.length >= 3 && (a = r),
              "[object Array]" === o.call(t)
                ? (function (t, e, r) {
                    for (var n = 0, o = t.length; n < o; n++)
                      i.call(t, n) &&
                        (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
                  })(t, e, a)
                : "string" == typeof t
                  ? (function (t, e, r) {
                      for (var n = 0, o = t.length; n < o; n++)
                        null == r
                          ? e(t.charAt(n), n, t)
                          : e.call(r, t.charAt(n), n, t);
                    })(t, e, a)
                  : (function (t, e, r) {
                      for (var n in t)
                        i.call(t, n) &&
                          (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
                    })(t, e, a);
          };
        },
        648: (t) => {
          "use strict";
          var e = Object.prototype.toString,
            r = Math.max,
            n = function (t, e) {
              for (var r = [], n = 0; n < t.length; n += 1) r[n] = t[n];
              for (var o = 0; o < e.length; o += 1) r[o + t.length] = e[o];
              return r;
            };
          t.exports = function (t) {
            var o = this;
            if ("function" != typeof o || "[object Function]" !== e.apply(o))
              throw new TypeError(
                "Function.prototype.bind called on incompatible " + o,
              );
            for (
              var i,
                a = (function (t, e) {
                  for (
                    var r = [], n = e || 0, o = 0;
                    n < t.length;
                    n += 1, o += 1
                  )
                    r[o] = t[n];
                  return r;
                })(arguments, 1),
                c = r(0, o.length - a.length),
                u = [],
                s = 0;
              s < c;
              s++
            )
              u[s] = "$" + s;
            if (
              ((i = Function(
                "binder",
                "return function (" +
                  (function (t, e) {
                    for (var r = "", n = 0; n < t.length; n += 1)
                      (r += t[n]), n + 1 < t.length && (r += e);
                    return r;
                  })(u, ",") +
                  "){ return binder.apply(this,arguments); }",
              )(function () {
                if (this instanceof i) {
                  var e = o.apply(this, n(a, arguments));
                  return Object(e) === e ? e : this;
                }
                return o.apply(t, n(a, arguments));
              })),
              o.prototype)
            ) {
              var f = function () {};
              (f.prototype = o.prototype),
                (i.prototype = new f()),
                (f.prototype = null);
            }
            return i;
          };
        },
        612: (t, e, r) => {
          "use strict";
          var n = r(648);
          t.exports = Function.prototype.bind || n;
        },
        210: (t, e, r) => {
          "use strict";
          var n,
            o = SyntaxError,
            i = Function,
            a = TypeError,
            c = function (t) {
              try {
                return i('"use strict"; return (' + t + ").constructor;")();
              } catch (t) {}
            },
            u = Object.getOwnPropertyDescriptor;
          if (u)
            try {
              u({}, "");
            } catch (t) {
              u = null;
            }
          var s = function () {
              throw new a();
            },
            f = u
              ? (function () {
                  try {
                    return s;
                  } catch (t) {
                    try {
                      return u(arguments, "callee").get;
                    } catch (t) {
                      return s;
                    }
                  }
                })()
              : s,
            l = r(405)(),
            p = r(185)(),
            h =
              Object.getPrototypeOf ||
              (p
                ? function (t) {
                    return t.__proto__;
                  }
                : null),
            y = {},
            d = "undefined" != typeof Uint8Array && h ? h(Uint8Array) : n,
            g = {
              "%AggregateError%":
                "undefined" == typeof AggregateError ? n : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%":
                "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
              "%ArrayIteratorPrototype%": l && h ? h([][Symbol.iterator]()) : n,
              "%AsyncFromSyncIteratorPrototype%": n,
              "%AsyncFunction%": y,
              "%AsyncGenerator%": y,
              "%AsyncGeneratorFunction%": y,
              "%AsyncIteratorPrototype%": y,
              "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
              "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
              "%BigInt64Array%":
                "undefined" == typeof BigInt64Array ? n : BigInt64Array,
              "%BigUint64Array%":
                "undefined" == typeof BigUint64Array ? n : BigUint64Array,
              "%Boolean%": Boolean,
              "%DataView%": "undefined" == typeof DataView ? n : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": Error,
              "%eval%": eval,
              "%EvalError%": EvalError,
              "%Float32Array%":
                "undefined" == typeof Float32Array ? n : Float32Array,
              "%Float64Array%":
                "undefined" == typeof Float64Array ? n : Float64Array,
              "%FinalizationRegistry%":
                "undefined" == typeof FinalizationRegistry
                  ? n
                  : FinalizationRegistry,
              "%Function%": i,
              "%GeneratorFunction%": y,
              "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
              "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
              "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": l && h ? h(h([][Symbol.iterator]())) : n,
              "%JSON%": "object" == typeof JSON ? JSON : n,
              "%Map%": "undefined" == typeof Map ? n : Map,
              "%MapIteratorPrototype%":
                "undefined" != typeof Map && l && h
                  ? h(new Map()[Symbol.iterator]())
                  : n,
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": Object,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": "undefined" == typeof Promise ? n : Promise,
              "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
              "%RangeError%": RangeError,
              "%ReferenceError%": ReferenceError,
              "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
              "%RegExp%": RegExp,
              "%Set%": "undefined" == typeof Set ? n : Set,
              "%SetIteratorPrototype%":
                "undefined" != typeof Set && l && h
                  ? h(new Set()[Symbol.iterator]())
                  : n,
              "%SharedArrayBuffer%":
                "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%":
                l && h ? h(""[Symbol.iterator]()) : n,
              "%Symbol%": l ? Symbol : n,
              "%SyntaxError%": o,
              "%ThrowTypeError%": f,
              "%TypedArray%": d,
              "%TypeError%": a,
              "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
              "%Uint8ClampedArray%":
                "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
              "%Uint16Array%":
                "undefined" == typeof Uint16Array ? n : Uint16Array,
              "%Uint32Array%":
                "undefined" == typeof Uint32Array ? n : Uint32Array,
              "%URIError%": URIError,
              "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
              "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
              "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
            };
          if (h)
            try {
              null.error;
            } catch (t) {
              var b = h(h(t));
              g["%Error.prototype%"] = b;
            }
          var v = function t(e) {
              var r;
              if ("%AsyncFunction%" === e) r = c("async function () {}");
              else if ("%GeneratorFunction%" === e) r = c("function* () {}");
              else if ("%AsyncGeneratorFunction%" === e)
                r = c("async function* () {}");
              else if ("%AsyncGenerator%" === e) {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype);
              } else if ("%AsyncIteratorPrototype%" === e) {
                var o = t("%AsyncGenerator%");
                o && h && (r = h(o.prototype));
              }
              return (g[e] = r), r;
            },
            m = {
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": [
                "AsyncGeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": [
                "GeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": [
                "SharedArrayBuffer",
                "prototype",
              ],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": [
                "Uint8ClampedArray",
                "prototype",
              ],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"],
            },
            w = r(612),
            O = r(824),
            E = w.call(Function.call, Array.prototype.concat),
            S = w.call(Function.apply, Array.prototype.splice),
            j = w.call(Function.call, String.prototype.replace),
            P = w.call(Function.call, String.prototype.slice),
            A = w.call(Function.call, RegExp.prototype.exec),
            x =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            T = /\\(\\)?/g,
            k = function (t, e) {
              var r,
                n = t;
              if ((O(m, n) && (n = "%" + (r = m[n])[0] + "%"), O(g, n))) {
                var i = g[n];
                if ((i === y && (i = v(n)), void 0 === i && !e))
                  throw new a(
                    "intrinsic " +
                      t +
                      " exists, but is not available. Please file an issue!",
                  );
                return { alias: r, name: n, value: i };
              }
              throw new o("intrinsic " + t + " does not exist!");
            };
          t.exports = function (t, e) {
            if ("string" != typeof t || 0 === t.length)
              throw new a("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof e)
              throw new a('"allowMissing" argument must be a boolean');
            if (null === A(/^%?[^%]*%?$/, t))
              throw new o(
                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
              );
            var r = (function (t) {
                var e = P(t, 0, 1),
                  r = P(t, -1);
                if ("%" === e && "%" !== r)
                  throw new o("invalid intrinsic syntax, expected closing `%`");
                if ("%" === r && "%" !== e)
                  throw new o("invalid intrinsic syntax, expected opening `%`");
                var n = [];
                return (
                  j(t, x, function (t, e, r, o) {
                    n[n.length] = r ? j(o, T, "$1") : e || t;
                  }),
                  n
                );
              })(t),
              n = r.length > 0 ? r[0] : "",
              i = k("%" + n + "%", e),
              c = i.name,
              s = i.value,
              f = !1,
              l = i.alias;
            l && ((n = l[0]), S(r, E([0, 1], l)));
            for (var p = 1, h = !0; p < r.length; p += 1) {
              var y = r[p],
                d = P(y, 0, 1),
                b = P(y, -1);
              if (
                ('"' === d ||
                  "'" === d ||
                  "`" === d ||
                  '"' === b ||
                  "'" === b ||
                  "`" === b) &&
                d !== b
              )
                throw new o(
                  "property names with quotes must have matching quotes",
                );
              if (
                (("constructor" !== y && h) || (f = !0),
                O(g, (c = "%" + (n += "." + y) + "%")))
              )
                s = g[c];
              else if (null != s) {
                if (!(y in s)) {
                  if (!e)
                    throw new a(
                      "base intrinsic for " +
                        t +
                        " exists, but the property is not available.",
                    );
                  return;
                }
                if (u && p + 1 >= r.length) {
                  var v = u(s, y);
                  s =
                    (h = !!v) && "get" in v && !("originalValue" in v.get)
                      ? v.get
                      : s[y];
                } else (h = O(s, y)), (s = s[y]);
                h && !f && (g[c] = s);
              }
            }
            return s;
          };
        },
        275: (t, e, r) => {
          "use strict";
          var n = r(210)("%Object.getOwnPropertyDescriptor%", !0);
          if (n)
            try {
              n([], "length");
            } catch (t) {
              n = null;
            }
          t.exports = n;
        },
        44: (t, e, r) => {
          "use strict";
          var n = r(210)("%Object.defineProperty%", !0),
            o = function () {
              if (n)
                try {
                  return n({}, "a", { value: 1 }), !0;
                } catch (t) {
                  return !1;
                }
              return !1;
            };
          (o.hasArrayLengthDefineBug = function () {
            if (!o()) return null;
            try {
              return 1 !== n([], "length", { value: 1 }).length;
            } catch (t) {
              return !0;
            }
          }),
            (t.exports = o);
        },
        185: (t) => {
          "use strict";
          var e = { foo: {} },
            r = Object;
          t.exports = function () {
            return (
              { __proto__: e }.foo === e.foo &&
              !({ __proto__: null } instanceof r)
            );
          };
        },
        405: (t, e, r) => {
          "use strict";
          var n = "undefined" != typeof Symbol && Symbol,
            o = r(419);
          t.exports = function () {
            return (
              "function" == typeof n &&
              "function" == typeof Symbol &&
              "symbol" == typeof n("foo") &&
              "symbol" == typeof Symbol("bar") &&
              o()
            );
          };
        },
        419: (t) => {
          "use strict";
          t.exports = function () {
            if (
              "function" != typeof Symbol ||
              "function" != typeof Object.getOwnPropertySymbols
            )
              return !1;
            if ("symbol" == typeof Symbol.iterator) return !0;
            var t = {},
              e = Symbol("test"),
              r = Object(e);
            if ("string" == typeof e) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(e))
              return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(r))
              return !1;
            for (e in ((t[e] = 42), t)) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
              return !1;
            if (
              "function" == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(t).length
            )
              return !1;
            var n = Object.getOwnPropertySymbols(t);
            if (1 !== n.length || n[0] !== e) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
              var o = Object.getOwnPropertyDescriptor(t, e);
              if (42 !== o.value || !0 !== o.enumerable) return !1;
            }
            return !0;
          };
        },
        410: (t, e, r) => {
          "use strict";
          var n = r(419);
          t.exports = function () {
            return n() && !!Symbol.toStringTag;
          };
        },
        824: (t, e, r) => {
          "use strict";
          var n = Function.prototype.call,
            o = Object.prototype.hasOwnProperty,
            i = r(612);
          t.exports = i.call(n, o);
        },
        645: (t, e) => {
          /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
          (e.read = function (t, e, r, n, o) {
            var i,
              a,
              c = 8 * o - n - 1,
              u = (1 << c) - 1,
              s = u >> 1,
              f = -7,
              l = r ? o - 1 : 0,
              p = r ? -1 : 1,
              h = t[e + l];
            for (
              l += p, i = h & ((1 << -f) - 1), h >>= -f, f += c;
              f > 0;
              i = 256 * i + t[e + l], l += p, f -= 8
            );
            for (
              a = i & ((1 << -f) - 1), i >>= -f, f += n;
              f > 0;
              a = 256 * a + t[e + l], l += p, f -= 8
            );
            if (0 === i) i = 1 - s;
            else {
              if (i === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
              (a += Math.pow(2, n)), (i -= s);
            }
            return (h ? -1 : 1) * a * Math.pow(2, i - n);
          }),
            (e.write = function (t, e, r, n, o, i) {
              var a,
                c,
                u,
                s = 8 * i - o - 1,
                f = (1 << s) - 1,
                l = f >> 1,
                p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = n ? 0 : i - 1,
                y = n ? 1 : -1,
                d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((c = isNaN(e) ? 1 : 0), (a = f))
                    : ((a = Math.floor(Math.log(e) / Math.LN2)),
                      e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                      (e += a + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >=
                        2 && (a++, (u /= 2)),
                      a + l >= f
                        ? ((c = 0), (a = f))
                        : a + l >= 1
                          ? ((c = (e * u - 1) * Math.pow(2, o)), (a += l))
                          : ((c = e * Math.pow(2, l - 1) * Math.pow(2, o)),
                            (a = 0)));
                o >= 8;
                t[r + h] = 255 & c, h += y, c /= 256, o -= 8
              );
              for (
                a = (a << o) | c, s += o;
                s > 0;
                t[r + h] = 255 & a, h += y, a /= 256, s -= 8
              );
              t[r + h - y] |= 128 * d;
            });
        },
        717: (t) => {
          "function" == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        },
        584: (t, e, r) => {
          "use strict";
          var n = r(410)(),
            o = r(924)("Object.prototype.toString"),
            i = function (t) {
              return (
                !(n && t && "object" == typeof t && Symbol.toStringTag in t) &&
                "[object Arguments]" === o(t)
              );
            },
            a = function (t) {
              return (
                !!i(t) ||
                (null !== t &&
                  "object" == typeof t &&
                  "number" == typeof t.length &&
                  t.length >= 0 &&
                  "[object Array]" !== o(t) &&
                  "[object Function]" === o(t.callee))
              );
            },
            c = (function () {
              return i(arguments);
            })();
          (i.isLegacyArguments = a), (t.exports = c ? i : a);
        },
        320: (t) => {
          "use strict";
          var e,
            r,
            n = Function.prototype.toString,
            o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
          if (
            "function" == typeof o &&
            "function" == typeof Object.defineProperty
          )
            try {
              (e = Object.defineProperty({}, "length", {
                get: function () {
                  throw r;
                },
              })),
                (r = {}),
                o(
                  function () {
                    throw 42;
                  },
                  null,
                  e,
                );
            } catch (t) {
              t !== r && (o = null);
            }
          else o = null;
          var i = /^\s*class\b/,
            a = function (t) {
              try {
                var e = n.call(t);
                return i.test(e);
              } catch (t) {
                return !1;
              }
            },
            c = function (t) {
              try {
                return !a(t) && (n.call(t), !0);
              } catch (t) {
                return !1;
              }
            },
            u = Object.prototype.toString,
            s = "function" == typeof Symbol && !!Symbol.toStringTag,
            f = !(0 in [,]),
            l = function () {
              return !1;
            };
          if ("object" == typeof document) {
            var p = document.all;
            u.call(p) === u.call(document.all) &&
              (l = function (t) {
                if ((f || !t) && (void 0 === t || "object" == typeof t))
                  try {
                    var e = u.call(t);
                    return (
                      ("[object HTMLAllCollection]" === e ||
                        "[object HTML document.all class]" === e ||
                        "[object HTMLCollection]" === e ||
                        "[object Object]" === e) &&
                      null == t("")
                    );
                  } catch (t) {}
                return !1;
              });
          }
          t.exports = o
            ? function (t) {
                if (l(t)) return !0;
                if (!t) return !1;
                if ("function" != typeof t && "object" != typeof t) return !1;
                try {
                  o(t, null, e);
                } catch (t) {
                  if (t !== r) return !1;
                }
                return !a(t) && c(t);
              }
            : function (t) {
                if (l(t)) return !0;
                if (!t) return !1;
                if ("function" != typeof t && "object" != typeof t) return !1;
                if (s) return c(t);
                if (a(t)) return !1;
                var e = u.call(t);
                return (
                  !(
                    "[object Function]" !== e &&
                    "[object GeneratorFunction]" !== e &&
                    !/^\[object HTML/.test(e)
                  ) && c(t)
                );
              };
        },
        662: (t, e, r) => {
          "use strict";
          var n,
            o = Object.prototype.toString,
            i = Function.prototype.toString,
            a = /^\s*(?:function)?\*/,
            c = r(410)(),
            u = Object.getPrototypeOf;
          t.exports = function (t) {
            if ("function" != typeof t) return !1;
            if (a.test(i.call(t))) return !0;
            if (!c) return "[object GeneratorFunction]" === o.call(t);
            if (!u) return !1;
            if (void 0 === n) {
              var e = (function () {
                if (!c) return !1;
                try {
                  return Function("return function*() {}")();
                } catch (t) {}
              })();
              n = !!e && u(e);
            }
            return u(t) === n;
          };
        },
        611: (t) => {
          "use strict";
          t.exports = function (t) {
            return t != t;
          };
        },
        360: (t, e, r) => {
          "use strict";
          var n = r(559),
            o = r(289),
            i = r(611),
            a = r(415),
            c = r(194),
            u = n(a(), Number);
          o(u, { getPolyfill: a, implementation: i, shim: c }), (t.exports = u);
        },
        415: (t, e, r) => {
          "use strict";
          var n = r(611);
          t.exports = function () {
            return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")
              ? Number.isNaN
              : n;
          };
        },
        194: (t, e, r) => {
          "use strict";
          var n = r(289),
            o = r(415);
          t.exports = function () {
            var t = o();
            return (
              n(
                Number,
                { isNaN: t },
                {
                  isNaN: function () {
                    return Number.isNaN !== t;
                  },
                },
              ),
              t
            );
          };
        },
        692: (t, e, r) => {
          "use strict";
          var n = r(430);
          t.exports = function (t) {
            return !!n(t);
          };
        },
        244: (t) => {
          "use strict";
          var e = function (t) {
            return t != t;
          };
          t.exports = function (t, r) {
            return 0 === t && 0 === r
              ? 1 / t == 1 / r
              : t === r || !(!e(t) || !e(r));
          };
        },
        609: (t, e, r) => {
          "use strict";
          var n = r(289),
            o = r(559),
            i = r(244),
            a = r(624),
            c = r(281),
            u = o(a(), Object);
          n(u, { getPolyfill: a, implementation: i, shim: c }), (t.exports = u);
        },
        624: (t, e, r) => {
          "use strict";
          var n = r(244);
          t.exports = function () {
            return "function" == typeof Object.is ? Object.is : n;
          };
        },
        281: (t, e, r) => {
          "use strict";
          var n = r(624),
            o = r(289);
          t.exports = function () {
            var t = n();
            return (
              o(
                Object,
                { is: t },
                {
                  is: function () {
                    return Object.is !== t;
                  },
                },
              ),
              t
            );
          };
        },
        987: (t, e, r) => {
          "use strict";
          var n;
          if (!Object.keys) {
            var o = Object.prototype.hasOwnProperty,
              i = Object.prototype.toString,
              a = r(414),
              c = Object.prototype.propertyIsEnumerable,
              u = !c.call({ toString: null }, "toString"),
              s = c.call(function () {}, "prototype"),
              f = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor",
              ],
              l = function (t) {
                var e = t.constructor;
                return e && e.prototype === t;
              },
              p = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0,
              },
              h = (function () {
                if ("undefined" == typeof window) return !1;
                for (var t in window)
                  try {
                    if (
                      !p["$" + t] &&
                      o.call(window, t) &&
                      null !== window[t] &&
                      "object" == typeof window[t]
                    )
                      try {
                        l(window[t]);
                      } catch (t) {
                        return !0;
                      }
                  } catch (t) {
                    return !0;
                  }
                return !1;
              })();
            n = function (t) {
              var e = null !== t && "object" == typeof t,
                r = "[object Function]" === i.call(t),
                n = a(t),
                c = e && "[object String]" === i.call(t),
                p = [];
              if (!e && !r && !n)
                throw new TypeError("Object.keys called on a non-object");
              var y = s && r;
              if (c && t.length > 0 && !o.call(t, 0))
                for (var d = 0; d < t.length; ++d) p.push(String(d));
              if (n && t.length > 0)
                for (var g = 0; g < t.length; ++g) p.push(String(g));
              else
                for (var b in t)
                  (y && "prototype" === b) ||
                    !o.call(t, b) ||
                    p.push(String(b));
              if (u)
                for (
                  var v = (function (t) {
                      if ("undefined" == typeof window || !h) return l(t);
                      try {
                        return l(t);
                      } catch (t) {
                        return !1;
                      }
                    })(t),
                    m = 0;
                  m < f.length;
                  ++m
                )
                  (v && "constructor" === f[m]) ||
                    !o.call(t, f[m]) ||
                    p.push(f[m]);
              return p;
            };
          }
          t.exports = n;
        },
        215: (t, e, r) => {
          "use strict";
          var n = Array.prototype.slice,
            o = r(414),
            i = Object.keys,
            a = i
              ? function (t) {
                  return i(t);
                }
              : r(987),
            c = Object.keys;
          (a.shim = function () {
            if (Object.keys) {
              var t = (function () {
                var t = Object.keys(arguments);
                return t && t.length === arguments.length;
              })(1, 2);
              t ||
                (Object.keys = function (t) {
                  return o(t) ? c(n.call(t)) : c(t);
                });
            } else Object.keys = a;
            return Object.keys || a;
          }),
            (t.exports = a);
        },
        414: (t) => {
          "use strict";
          var e = Object.prototype.toString;
          t.exports = function (t) {
            var r = e.call(t),
              n = "[object Arguments]" === r;
            return (
              n ||
                (n =
                  "[object Array]" !== r &&
                  null !== t &&
                  "object" == typeof t &&
                  "number" == typeof t.length &&
                  t.length >= 0 &&
                  "[object Function]" === e.call(t.callee)),
              n
            );
          };
        },
        837: (t, e, r) => {
          "use strict";
          var n = r(215),
            o = r(419)(),
            i = r(924),
            a = Object,
            c = i("Array.prototype.push"),
            u = i("Object.prototype.propertyIsEnumerable"),
            s = o ? Object.getOwnPropertySymbols : null;
          t.exports = function (t, e) {
            if (null == t) throw new TypeError("target must be an object");
            var r = a(t);
            if (1 === arguments.length) return r;
            for (var i = 1; i < arguments.length; ++i) {
              var f = a(arguments[i]),
                l = n(f),
                p = o && (Object.getOwnPropertySymbols || s);
              if (p)
                for (var h = p(f), y = 0; y < h.length; ++y) {
                  var d = h[y];
                  u(f, d) && c(l, d);
                }
              for (var g = 0; g < l.length; ++g) {
                var b = l[g];
                if (u(f, b)) {
                  var v = f[b];
                  r[b] = v;
                }
              }
            }
            return r;
          };
        },
        162: (t, e, r) => {
          "use strict";
          var n = r(837);
          t.exports = function () {
            return Object.assign
              ? (function () {
                  if (!Object.assign) return !1;
                  for (
                    var t = "abcdefghijklmnopqrst",
                      e = t.split(""),
                      r = {},
                      n = 0;
                    n < e.length;
                    ++n
                  )
                    r[e[n]] = e[n];
                  var o = Object.assign({}, r),
                    i = "";
                  for (var a in o) i += a;
                  return t !== i;
                })() ||
                (function () {
                  if (!Object.assign || !Object.preventExtensions) return !1;
                  var t = Object.preventExtensions({ 1: 2 });
                  try {
                    Object.assign(t, "xy");
                  } catch (e) {
                    return "y" === t[1];
                  }
                  return !1;
                })()
                ? n
                : Object.assign
              : n;
          };
        },
        155: (t) => {
          var e,
            r,
            n = (t.exports = {});
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function i() {
            throw new Error("clearTimeout has not been defined");
          }
          function a(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === o || !e) && setTimeout)
              return (e = setTimeout), setTimeout(t, 0);
            try {
              return e(t, 0);
            } catch (r) {
              try {
                return e.call(null, t, 0);
              } catch (r) {
                return e.call(this, t, 0);
              }
            }
          }
          !(function () {
            try {
              e = "function" == typeof setTimeout ? setTimeout : o;
            } catch (t) {
              e = o;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (t) {
              r = i;
            }
          })();
          var c,
            u = [],
            s = !1,
            f = -1;
          function l() {
            s &&
              c &&
              ((s = !1),
              c.length ? (u = c.concat(u)) : (f = -1),
              u.length && p());
          }
          function p() {
            if (!s) {
              var t = a(l);
              s = !0;
              for (var e = u.length; e; ) {
                for (c = u, u = []; ++f < e; ) c && c[f].run();
                (f = -1), (e = u.length);
              }
              (c = null),
                (s = !1),
                (function (t) {
                  if (r === clearTimeout) return clearTimeout(t);
                  if ((r === i || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(t);
                  try {
                    return r(t);
                  } catch (e) {
                    try {
                      return r.call(null, t);
                    } catch (e) {
                      return r.call(this, t);
                    }
                  }
                })(t);
            }
          }
          function h(t, e) {
            (this.fun = t), (this.array = e);
          }
          function y() {}
          (n.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            u.push(new h(t, e)), 1 !== u.length || s || a(p);
          }),
            (h.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (n.title = "browser"),
            (n.browser = !0),
            (n.env = {}),
            (n.argv = []),
            (n.version = ""),
            (n.versions = {}),
            (n.on = y),
            (n.addListener = y),
            (n.once = y),
            (n.off = y),
            (n.removeListener = y),
            (n.removeAllListeners = y),
            (n.emit = y),
            (n.prependListener = y),
            (n.prependOnceListener = y),
            (n.listeners = function (t) {
              return [];
            }),
            (n.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (n.cwd = function () {
              return "/";
            }),
            (n.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (n.umask = function () {
              return 0;
            });
        },
        771: (t, e, r) => {
          "use strict";
          var n = r(210),
            o = r(296),
            i = r(44)(),
            a = r(275),
            c = n("%TypeError%"),
            u = n("%Math.floor%");
          t.exports = function (t, e) {
            if ("function" != typeof t) throw new c("`fn` is not a function");
            if ("number" != typeof e || e < 0 || e > 4294967295 || u(e) !== e)
              throw new c("`length` must be a positive 32-bit integer");
            var r = arguments.length > 2 && !!arguments[2],
              n = !0,
              s = !0;
            if ("length" in t && a) {
              var f = a(t, "length");
              f && !f.configurable && (n = !1), f && !f.writable && (s = !1);
            }
            return (
              (n || s || !r) &&
                (i ? o(t, "length", e, !0, !0) : o(t, "length", e)),
              t
            );
          };
        },
        384: (t) => {
          t.exports = function (t) {
            return (
              t &&
              "object" == typeof t &&
              "function" == typeof t.copy &&
              "function" == typeof t.fill &&
              "function" == typeof t.readUInt8
            );
          };
        },
        955: (t, e, r) => {
          "use strict";
          var n = r(584),
            o = r(662),
            i = r(430),
            a = r(692);
          function c(t) {
            return t.call.bind(t);
          }
          var u = "undefined" != typeof BigInt,
            s = "undefined" != typeof Symbol,
            f = c(Object.prototype.toString),
            l = c(Number.prototype.valueOf),
            p = c(String.prototype.valueOf),
            h = c(Boolean.prototype.valueOf);
          if (u) var y = c(BigInt.prototype.valueOf);
          if (s) var d = c(Symbol.prototype.valueOf);
          function g(t, e) {
            if ("object" != typeof t) return !1;
            try {
              return e(t), !0;
            } catch (t) {
              return !1;
            }
          }
          function b(t) {
            return "[object Map]" === f(t);
          }
          function v(t) {
            return "[object Set]" === f(t);
          }
          function m(t) {
            return "[object WeakMap]" === f(t);
          }
          function w(t) {
            return "[object WeakSet]" === f(t);
          }
          function O(t) {
            return "[object ArrayBuffer]" === f(t);
          }
          function E(t) {
            return (
              "undefined" != typeof ArrayBuffer &&
              (O.working ? O(t) : t instanceof ArrayBuffer)
            );
          }
          function S(t) {
            return "[object DataView]" === f(t);
          }
          function j(t) {
            return (
              "undefined" != typeof DataView &&
              (S.working ? S(t) : t instanceof DataView)
            );
          }
          (e.isArgumentsObject = n),
            (e.isGeneratorFunction = o),
            (e.isTypedArray = a),
            (e.isPromise = function (t) {
              return (
                ("undefined" != typeof Promise && t instanceof Promise) ||
                (null !== t &&
                  "object" == typeof t &&
                  "function" == typeof t.then &&
                  "function" == typeof t.catch)
              );
            }),
            (e.isArrayBufferView = function (t) {
              return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : a(t) || j(t);
            }),
            (e.isUint8Array = function (t) {
              return "Uint8Array" === i(t);
            }),
            (e.isUint8ClampedArray = function (t) {
              return "Uint8ClampedArray" === i(t);
            }),
            (e.isUint16Array = function (t) {
              return "Uint16Array" === i(t);
            }),
            (e.isUint32Array = function (t) {
              return "Uint32Array" === i(t);
            }),
            (e.isInt8Array = function (t) {
              return "Int8Array" === i(t);
            }),
            (e.isInt16Array = function (t) {
              return "Int16Array" === i(t);
            }),
            (e.isInt32Array = function (t) {
              return "Int32Array" === i(t);
            }),
            (e.isFloat32Array = function (t) {
              return "Float32Array" === i(t);
            }),
            (e.isFloat64Array = function (t) {
              return "Float64Array" === i(t);
            }),
            (e.isBigInt64Array = function (t) {
              return "BigInt64Array" === i(t);
            }),
            (e.isBigUint64Array = function (t) {
              return "BigUint64Array" === i(t);
            }),
            (b.working = "undefined" != typeof Map && b(new Map())),
            (e.isMap = function (t) {
              return (
                "undefined" != typeof Map &&
                (b.working ? b(t) : t instanceof Map)
              );
            }),
            (v.working = "undefined" != typeof Set && v(new Set())),
            (e.isSet = function (t) {
              return (
                "undefined" != typeof Set &&
                (v.working ? v(t) : t instanceof Set)
              );
            }),
            (m.working = "undefined" != typeof WeakMap && m(new WeakMap())),
            (e.isWeakMap = function (t) {
              return (
                "undefined" != typeof WeakMap &&
                (m.working ? m(t) : t instanceof WeakMap)
              );
            }),
            (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
            (e.isWeakSet = function (t) {
              return w(t);
            }),
            (O.working =
              "undefined" != typeof ArrayBuffer && O(new ArrayBuffer())),
            (e.isArrayBuffer = E),
            (S.working =
              "undefined" != typeof ArrayBuffer &&
              "undefined" != typeof DataView &&
              S(new DataView(new ArrayBuffer(1), 0, 1))),
            (e.isDataView = j);
          var P =
            "undefined" != typeof SharedArrayBuffer
              ? SharedArrayBuffer
              : void 0;
          function A(t) {
            return "[object SharedArrayBuffer]" === f(t);
          }
          function x(t) {
            return (
              void 0 !== P &&
              (void 0 === A.working && (A.working = A(new P())),
              A.working ? A(t) : t instanceof P)
            );
          }
          function T(t) {
            return g(t, l);
          }
          function k(t) {
            return g(t, p);
          }
          function R(t) {
            return g(t, h);
          }
          function I(t) {
            return u && g(t, y);
          }
          function _(t) {
            return s && g(t, d);
          }
          (e.isSharedArrayBuffer = x),
            (e.isAsyncFunction = function (t) {
              return "[object AsyncFunction]" === f(t);
            }),
            (e.isMapIterator = function (t) {
              return "[object Map Iterator]" === f(t);
            }),
            (e.isSetIterator = function (t) {
              return "[object Set Iterator]" === f(t);
            }),
            (e.isGeneratorObject = function (t) {
              return "[object Generator]" === f(t);
            }),
            (e.isWebAssemblyCompiledModule = function (t) {
              return "[object WebAssembly.Module]" === f(t);
            }),
            (e.isNumberObject = T),
            (e.isStringObject = k),
            (e.isBooleanObject = R),
            (e.isBigIntObject = I),
            (e.isSymbolObject = _),
            (e.isBoxedPrimitive = function (t) {
              return T(t) || k(t) || R(t) || I(t) || _(t);
            }),
            (e.isAnyArrayBuffer = function (t) {
              return "undefined" != typeof Uint8Array && (E(t) || x(t));
            }),
            ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
              function (t) {
                Object.defineProperty(e, t, {
                  enumerable: !1,
                  value: function () {
                    throw new Error(t + " is not supported in userland");
                  },
                });
              },
            );
        },
        539: (t, e, r) => {
          var n = r(155),
            o = r(108),
            i =
              Object.getOwnPropertyDescriptors ||
              function (t) {
                for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
                  r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
                return r;
              },
            a = /%[sdj%]/g;
          (e.format = function (t) {
            if (!w(t)) {
              for (var e = [], r = 0; r < arguments.length; r++)
                e.push(f(arguments[r]));
              return e.join(" ");
            }
            r = 1;
            for (
              var n = arguments,
                o = n.length,
                i = String(t).replace(a, function (t) {
                  if ("%%" === t) return "%";
                  if (r >= o) return t;
                  switch (t) {
                    case "%s":
                      return String(n[r++]);
                    case "%d":
                      return Number(n[r++]);
                    case "%j":
                      try {
                        return JSON.stringify(n[r++]);
                      } catch (t) {
                        return "[Circular]";
                      }
                    default:
                      return t;
                  }
                }),
                c = n[r];
              r < o;
              c = n[++r]
            )
              v(c) || !S(c) ? (i += " " + c) : (i += " " + f(c));
            return i;
          }),
            (e.deprecate = function (t, r) {
              if (void 0 !== n && !0 === n.noDeprecation) return t;
              if (void 0 === n)
                return function () {
                  return e.deprecate(t, r).apply(this, arguments);
                };
              var i = !1;
              return function () {
                if (!i) {
                  if (n.throwDeprecation) throw new Error(r);
                  n.traceDeprecation ? o.trace(r) : o.error(r), (i = !0);
                }
                return t.apply(this, arguments);
              };
            });
          var c = {},
            u = /^$/;
          if (n.env.NODE_DEBUG) {
            var s = n.env.NODE_DEBUG;
            (s = s
              .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
              .replace(/\*/g, ".*")
              .replace(/,/g, "$|^")
              .toUpperCase()),
              (u = new RegExp("^" + s + "$", "i"));
          }
          function f(t, r) {
            var n = { seen: [], stylize: p };
            return (
              arguments.length >= 3 && (n.depth = arguments[2]),
              arguments.length >= 4 && (n.colors = arguments[3]),
              b(r) ? (n.showHidden = r) : r && e._extend(n, r),
              O(n.showHidden) && (n.showHidden = !1),
              O(n.depth) && (n.depth = 2),
              O(n.colors) && (n.colors = !1),
              O(n.customInspect) && (n.customInspect = !0),
              n.colors && (n.stylize = l),
              h(n, t, n.depth)
            );
          }
          function l(t, e) {
            var r = f.styles[e];
            return r
              ? "[" + f.colors[r][0] + "m" + t + "[" + f.colors[r][1] + "m"
              : t;
          }
          function p(t, e) {
            return t;
          }
          function h(t, r, n) {
            if (
              t.customInspect &&
              r &&
              A(r.inspect) &&
              r.inspect !== e.inspect &&
              (!r.constructor || r.constructor.prototype !== r)
            ) {
              var o = r.inspect(n, t);
              return w(o) || (o = h(t, o, n)), o;
            }
            var i = (function (t, e) {
              if (O(e)) return t.stylize("undefined", "undefined");
              if (w(e)) {
                var r =
                  "'" +
                  JSON.stringify(e)
                    .replace(/^"|"$/g, "")
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return t.stylize(r, "string");
              }
              if (m(e)) return t.stylize("" + e, "number");
              if (b(e)) return t.stylize("" + e, "boolean");
              if (v(e)) return t.stylize("null", "null");
            })(t, r);
            if (i) return i;
            var a = Object.keys(r),
              c = (function (t) {
                var e = {};
                return (
                  t.forEach(function (t, r) {
                    e[t] = !0;
                  }),
                  e
                );
              })(a);
            if (
              (t.showHidden && (a = Object.getOwnPropertyNames(r)),
              P(r) &&
                (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
            )
              return y(r);
            if (0 === a.length) {
              if (A(r)) {
                var u = r.name ? ": " + r.name : "";
                return t.stylize("[Function" + u + "]", "special");
              }
              if (E(r))
                return t.stylize(RegExp.prototype.toString.call(r), "regexp");
              if (j(r))
                return t.stylize(Date.prototype.toString.call(r), "date");
              if (P(r)) return y(r);
            }
            var s,
              f = "",
              l = !1,
              p = ["{", "}"];
            (g(r) && ((l = !0), (p = ["[", "]"])), A(r)) &&
              (f = " [Function" + (r.name ? ": " + r.name : "") + "]");
            return (
              E(r) && (f = " " + RegExp.prototype.toString.call(r)),
              j(r) && (f = " " + Date.prototype.toUTCString.call(r)),
              P(r) && (f = " " + y(r)),
              0 !== a.length || (l && 0 != r.length)
                ? n < 0
                  ? E(r)
                    ? t.stylize(RegExp.prototype.toString.call(r), "regexp")
                    : t.stylize("[Object]", "special")
                  : (t.seen.push(r),
                    (s = l
                      ? (function (t, e, r, n, o) {
                          for (var i = [], a = 0, c = e.length; a < c; ++a)
                            R(e, String(a))
                              ? i.push(d(t, e, r, n, String(a), !0))
                              : i.push("");
                          return (
                            o.forEach(function (o) {
                              o.match(/^\d+$/) || i.push(d(t, e, r, n, o, !0));
                            }),
                            i
                          );
                        })(t, r, n, c, a)
                      : a.map(function (e) {
                          return d(t, r, n, c, e, l);
                        })),
                    t.seen.pop(),
                    (function (t, e, r) {
                      var n = t.reduce(function (t, e) {
                        return (
                          e.indexOf("\n") >= 0 && 0,
                          t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0);
                      if (n > 60)
                        return (
                          r[0] +
                          ("" === e ? "" : e + "\n ") +
                          " " +
                          t.join(",\n  ") +
                          " " +
                          r[1]
                        );
                      return r[0] + e + " " + t.join(", ") + " " + r[1];
                    })(s, f, p))
                : p[0] + f + p[1]
            );
          }
          function y(t) {
            return "[" + Error.prototype.toString.call(t) + "]";
          }
          function d(t, e, r, n, o, i) {
            var a, c, u;
            if (
              ((u = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] })
                .get
                ? (c = u.set
                    ? t.stylize("[Getter/Setter]", "special")
                    : t.stylize("[Getter]", "special"))
                : u.set && (c = t.stylize("[Setter]", "special")),
              R(n, o) || (a = "[" + o + "]"),
              c ||
                (t.seen.indexOf(u.value) < 0
                  ? (c = v(r)
                      ? h(t, u.value, null)
                      : h(t, u.value, r - 1)).indexOf("\n") > -1 &&
                    (c = i
                      ? c
                          .split("\n")
                          .map(function (t) {
                            return "  " + t;
                          })
                          .join("\n")
                          .slice(2)
                      : "\n" +
                        c
                          .split("\n")
                          .map(function (t) {
                            return "   " + t;
                          })
                          .join("\n"))
                  : (c = t.stylize("[Circular]", "special"))),
              O(a))
            ) {
              if (i && o.match(/^\d+$/)) return c;
              (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((a = a.slice(1, -1)), (a = t.stylize(a, "name")))
                : ((a = a
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (a = t.stylize(a, "string")));
            }
            return a + ": " + c;
          }
          function g(t) {
            return Array.isArray(t);
          }
          function b(t) {
            return "boolean" == typeof t;
          }
          function v(t) {
            return null === t;
          }
          function m(t) {
            return "number" == typeof t;
          }
          function w(t) {
            return "string" == typeof t;
          }
          function O(t) {
            return void 0 === t;
          }
          function E(t) {
            return S(t) && "[object RegExp]" === x(t);
          }
          function S(t) {
            return "object" == typeof t && null !== t;
          }
          function j(t) {
            return S(t) && "[object Date]" === x(t);
          }
          function P(t) {
            return S(t) && ("[object Error]" === x(t) || t instanceof Error);
          }
          function A(t) {
            return "function" == typeof t;
          }
          function x(t) {
            return Object.prototype.toString.call(t);
          }
          function T(t) {
            return t < 10 ? "0" + t.toString(10) : t.toString(10);
          }
          (e.debuglog = function (t) {
            if (((t = t.toUpperCase()), !c[t]))
              if (u.test(t)) {
                var r = n.pid;
                c[t] = function () {
                  var n = e.format.apply(e, arguments);
                  o.error("%s %d: %s", t, r, n);
                };
              } else c[t] = function () {};
            return c[t];
          }),
            (e.inspect = f),
            (f.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (f.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red",
            }),
            (e.types = r(955)),
            (e.isArray = g),
            (e.isBoolean = b),
            (e.isNull = v),
            (e.isNullOrUndefined = function (t) {
              return null == t;
            }),
            (e.isNumber = m),
            (e.isString = w),
            (e.isSymbol = function (t) {
              return "symbol" == typeof t;
            }),
            (e.isUndefined = O),
            (e.isRegExp = E),
            (e.types.isRegExp = E),
            (e.isObject = S),
            (e.isDate = j),
            (e.types.isDate = j),
            (e.isError = P),
            (e.types.isNativeError = P),
            (e.isFunction = A),
            (e.isPrimitive = function (t) {
              return (
                null === t ||
                "boolean" == typeof t ||
                "number" == typeof t ||
                "string" == typeof t ||
                "symbol" == typeof t ||
                void 0 === t
              );
            }),
            (e.isBuffer = r(384));
          var k = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          function R(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          (e.log = function () {
            var t, r;
            o.log(
              "%s - %s",
              ((t = new Date()),
              (r = [T(t.getHours()), T(t.getMinutes()), T(t.getSeconds())].join(
                ":",
              )),
              [t.getDate(), k[t.getMonth()], r].join(" ")),
              e.format.apply(e, arguments),
            );
          }),
            (e.inherits = r(717)),
            (e._extend = function (t, e) {
              if (!e || !S(e)) return t;
              for (var r = Object.keys(e), n = r.length; n--; )
                t[r[n]] = e[r[n]];
              return t;
            });
          var I =
            "undefined" != typeof Symbol
              ? Symbol("util.promisify.custom")
              : void 0;
          function _(t, e) {
            if (!t) {
              var r = new Error("Promise was rejected with a falsy value");
              (r.reason = t), (t = r);
            }
            return e(t);
          }
          (e.promisify = function (t) {
            if ("function" != typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function',
              );
            if (I && t[I]) {
              var e;
              if ("function" != typeof (e = t[I]))
                throw new TypeError(
                  'The "util.promisify.custom" argument must be of type Function',
                );
              return (
                Object.defineProperty(e, I, {
                  value: e,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
                e
              );
            }
            function e() {
              for (
                var e,
                  r,
                  n = new Promise(function (t, n) {
                    (e = t), (r = n);
                  }),
                  o = [],
                  i = 0;
                i < arguments.length;
                i++
              )
                o.push(arguments[i]);
              o.push(function (t, n) {
                t ? r(t) : e(n);
              });
              try {
                t.apply(this, o);
              } catch (t) {
                r(t);
              }
              return n;
            }
            return (
              Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
              I &&
                Object.defineProperty(e, I, {
                  value: e,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
              Object.defineProperties(e, i(t))
            );
          }),
            (e.promisify.custom = I),
            (e.callbackify = function (t) {
              if ("function" != typeof t)
                throw new TypeError(
                  'The "original" argument must be of type Function',
                );
              function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                  e.push(arguments[r]);
                var o = e.pop();
                if ("function" != typeof o)
                  throw new TypeError(
                    "The last argument must be of type Function",
                  );
                var i = this,
                  a = function () {
                    return o.apply(i, arguments);
                  };
                t.apply(this, e).then(
                  function (t) {
                    n.nextTick(a.bind(null, null, t));
                  },
                  function (t) {
                    n.nextTick(_.bind(null, t, a));
                  },
                );
              }
              return (
                Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
                Object.defineProperties(e, i(t)),
                e
              );
            });
        },
        430: (t, e, r) => {
          "use strict";
          var n = r(29),
            o = r(83),
            i = r(559),
            a = r(924),
            c = r(275),
            u = a("Object.prototype.toString"),
            s = r(410)(),
            f = "undefined" == typeof globalThis ? r.g : globalThis,
            l = o(),
            p = a("String.prototype.slice"),
            h = Object.getPrototypeOf,
            y =
              a("Array.prototype.indexOf", !0) ||
              function (t, e) {
                for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
                return -1;
              },
            d = { __proto__: null };
          n(
            l,
            s && c && h
              ? function (t) {
                  var e = new f[t]();
                  if (Symbol.toStringTag in e) {
                    var r = h(e),
                      n = c(r, Symbol.toStringTag);
                    if (!n) {
                      var o = h(r);
                      n = c(o, Symbol.toStringTag);
                    }
                    d["$" + t] = i(n.get);
                  }
                }
              : function (t) {
                  var e = new f[t](),
                    r = e.slice || e.set;
                  r && (d["$" + t] = i(r));
                },
          );
          t.exports = function (t) {
            if (!t || "object" != typeof t) return !1;
            if (!s) {
              var e = p(u(t), 8, -1);
              return y(l, e) > -1
                ? e
                : "Object" === e &&
                    (function (t) {
                      var e = !1;
                      return (
                        n(d, function (r, n) {
                          if (!e)
                            try {
                              r(t), (e = p(n, 1));
                            } catch (t) {}
                        }),
                        e
                      );
                    })(t);
            }
            return c
              ? (function (t) {
                  var e = !1;
                  return (
                    n(d, function (r, n) {
                      if (!e)
                        try {
                          "$" + r(t) === n && (e = p(n, 1));
                        } catch (t) {}
                    }),
                    e
                  );
                })(t)
              : null;
          };
        },
        83: (t, e, r) => {
          "use strict";
          var n = [
              "BigInt64Array",
              "BigUint64Array",
              "Float32Array",
              "Float64Array",
              "Int16Array",
              "Int32Array",
              "Int8Array",
              "Uint16Array",
              "Uint32Array",
              "Uint8Array",
              "Uint8ClampedArray",
            ],
            o = "undefined" == typeof globalThis ? r.g : globalThis;
          t.exports = function () {
            for (var t = [], e = 0; e < n.length; e++)
              "function" == typeof o[n[e]] && (t[t.length] = n[e]);
            return t;
          };
        },
      },
      e = {};
    function r(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var i = (e[n] = { exports: {} });
      return t[n](i, i.exports, r), i.exports;
    }
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (r.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        "use strict";
        r.r(n),
          r.d(n, {
            Adcio: () => io,
            Cafe24API: () => Po,
            clientApi: () => Ao,
            createElement: () => wo,
            createNestedElement: () => Oo,
            getMeta: () => mo,
            waitForDOM: () => bo,
            waitForElement: () => vo,
          });
        var t = {};
        function e(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        r.r(t),
          r.d(t, {
            hasBrowserEnv: () => nt,
            hasStandardBrowserEnv: () => ot,
            hasStandardBrowserWebWorkerEnv: () => at,
          });
        const { toString: o } = Object.prototype,
          { getPrototypeOf: i } = Object,
          a =
            ((c = Object.create(null)),
            (t) => {
              const e = o.call(t);
              return c[e] || (c[e] = e.slice(8, -1).toLowerCase());
            });
        var c;
        const u = (t) => ((t = t.toLowerCase()), (e) => a(e) === t),
          s = (t) => (e) => typeof e === t,
          { isArray: f } = Array,
          l = s("undefined");
        const p = u("ArrayBuffer");
        const h = s("string"),
          y = s("function"),
          d = s("number"),
          g = (t) => null !== t && "object" == typeof t,
          b = (t) => {
            if ("object" !== a(t)) return !1;
            const e = i(t);
            return !(
              (null !== e &&
                e !== Object.prototype &&
                null !== Object.getPrototypeOf(e)) ||
              Symbol.toStringTag in t ||
              Symbol.iterator in t
            );
          },
          v = u("Date"),
          m = u("File"),
          w = u("Blob"),
          O = u("FileList"),
          E = u("URLSearchParams");
        function S(t, e, { allOwnKeys: r = !1 } = {}) {
          if (null == t) return;
          let n, o;
          if (("object" != typeof t && (t = [t]), f(t)))
            for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
          else {
            const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
              i = o.length;
            let a;
            for (n = 0; n < i; n++) (a = o[n]), e.call(null, t[a], a, t);
          }
        }
        function j(t, e) {
          e = e.toLowerCase();
          const r = Object.keys(t);
          let n,
            o = r.length;
          for (; o-- > 0; ) if (((n = r[o]), e === n.toLowerCase())) return n;
          return null;
        }
        const P =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : global,
          A = (t) => !l(t) && t !== P;
        const x =
          ((T = "undefined" != typeof Uint8Array && i(Uint8Array)),
          (t) => T && t instanceof T);
        var T;
        const k = u("HTMLFormElement"),
          R = (
            ({ hasOwnProperty: t }) =>
            (e, r) =>
              t.call(e, r)
          )(Object.prototype),
          I = u("RegExp"),
          _ = (t, e) => {
            const r = Object.getOwnPropertyDescriptors(t),
              n = {};
            S(r, (r, o) => {
              let i;
              !1 !== (i = e(r, o, t)) && (n[o] = i || r);
            }),
              Object.defineProperties(t, n);
          },
          C = "abcdefghijklmnopqrstuvwxyz",
          L = "0123456789",
          N = { DIGIT: L, ALPHA: C, ALPHA_DIGIT: C + C.toUpperCase() + L };
        const B = u("AsyncFunction"),
          F = {
            isArray: f,
            isArrayBuffer: p,
            isBuffer: function (t) {
              return (
                null !== t &&
                !l(t) &&
                null !== t.constructor &&
                !l(t.constructor) &&
                y(t.constructor.isBuffer) &&
                t.constructor.isBuffer(t)
              );
            },
            isFormData: (t) => {
              let e;
              return (
                t &&
                (("function" == typeof FormData && t instanceof FormData) ||
                  (y(t.append) &&
                    ("formdata" === (e = a(t)) ||
                      ("object" === e &&
                        y(t.toString) &&
                        "[object FormData]" === t.toString()))))
              );
            },
            isArrayBufferView: function (t) {
              let e;
              return (
                (e =
                  "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t && t.buffer && p(t.buffer)),
                e
              );
            },
            isString: h,
            isNumber: d,
            isBoolean: (t) => !0 === t || !1 === t,
            isObject: g,
            isPlainObject: b,
            isUndefined: l,
            isDate: v,
            isFile: m,
            isBlob: w,
            isRegExp: I,
            isFunction: y,
            isStream: (t) => g(t) && y(t.pipe),
            isURLSearchParams: E,
            isTypedArray: x,
            isFileList: O,
            forEach: S,
            merge: function t() {
              const { caseless: e } = (A(this) && this) || {},
                r = {},
                n = (n, o) => {
                  const i = (e && j(r, o)) || o;
                  b(r[i]) && b(n)
                    ? (r[i] = t(r[i], n))
                    : b(n)
                      ? (r[i] = t({}, n))
                      : f(n)
                        ? (r[i] = n.slice())
                        : (r[i] = n);
                };
              for (let t = 0, e = arguments.length; t < e; t++)
                arguments[t] && S(arguments[t], n);
              return r;
            },
            extend: (t, r, n, { allOwnKeys: o } = {}) => (
              S(
                r,
                (r, o) => {
                  n && y(r) ? (t[o] = e(r, n)) : (t[o] = r);
                },
                { allOwnKeys: o },
              ),
              t
            ),
            trim: (t) =>
              t.trim
                ? t.trim()
                : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
            inherits: (t, e, r, n) => {
              (t.prototype = Object.create(e.prototype, n)),
                (t.prototype.constructor = t),
                Object.defineProperty(t, "super", { value: e.prototype }),
                r && Object.assign(t.prototype, r);
            },
            toFlatObject: (t, e, r, n) => {
              let o, a, c;
              const u = {};
              if (((e = e || {}), null == t)) return e;
              do {
                for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
                  (c = o[a]),
                    (n && !n(c, t, e)) || u[c] || ((e[c] = t[c]), (u[c] = !0));
                t = !1 !== r && i(t);
              } while (t && (!r || r(t, e)) && t !== Object.prototype);
              return e;
            },
            kindOf: a,
            kindOfTest: u,
            endsWith: (t, e, r) => {
              (t = String(t)),
                (void 0 === r || r > t.length) && (r = t.length),
                (r -= e.length);
              const n = t.indexOf(e, r);
              return -1 !== n && n === r;
            },
            toArray: (t) => {
              if (!t) return null;
              if (f(t)) return t;
              let e = t.length;
              if (!d(e)) return null;
              const r = new Array(e);
              for (; e-- > 0; ) r[e] = t[e];
              return r;
            },
            forEachEntry: (t, e) => {
              const r = (t && t[Symbol.iterator]).call(t);
              let n;
              for (; (n = r.next()) && !n.done; ) {
                const r = n.value;
                e.call(t, r[0], r[1]);
              }
            },
            matchAll: (t, e) => {
              let r;
              const n = [];
              for (; null !== (r = t.exec(e)); ) n.push(r);
              return n;
            },
            isHTMLForm: k,
            hasOwnProperty: R,
            hasOwnProp: R,
            reduceDescriptors: _,
            freezeMethods: (t) => {
              _(t, (e, r) => {
                if (y(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                  return !1;
                const n = t[r];
                y(n) &&
                  ((e.enumerable = !1),
                  "writable" in e
                    ? (e.writable = !1)
                    : e.set ||
                      (e.set = () => {
                        throw Error(
                          "Can not rewrite read-only method '" + r + "'",
                        );
                      }));
              });
            },
            toObjectSet: (t, e) => {
              const r = {},
                n = (t) => {
                  t.forEach((t) => {
                    r[t] = !0;
                  });
                };
              return f(t) ? n(t) : n(String(t).split(e)), r;
            },
            toCamelCase: (t) =>
              t
                .toLowerCase()
                .replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
                  return e.toUpperCase() + r;
                }),
            noop: () => {},
            toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
            findKey: j,
            global: P,
            isContextDefined: A,
            ALPHABET: N,
            generateString: (t = 16, e = N.ALPHA_DIGIT) => {
              let r = "";
              const { length: n } = e;
              for (; t--; ) r += e[(Math.random() * n) | 0];
              return r;
            },
            isSpecCompliantForm: function (t) {
              return !!(
                t &&
                y(t.append) &&
                "FormData" === t[Symbol.toStringTag] &&
                t[Symbol.iterator]
              );
            },
            toJSONObject: (t) => {
              const e = new Array(10),
                r = (t, n) => {
                  if (g(t)) {
                    if (e.indexOf(t) >= 0) return;
                    if (!("toJSON" in t)) {
                      e[n] = t;
                      const o = f(t) ? [] : {};
                      return (
                        S(t, (t, e) => {
                          const i = r(t, n + 1);
                          !l(i) && (o[e] = i);
                        }),
                        (e[n] = void 0),
                        o
                      );
                    }
                  }
                  return t;
                };
              return r(t, 0);
            },
            isAsyncFn: B,
            isThenable: (t) => t && (g(t) || y(t)) && y(t.then) && y(t.catch),
          };
        function U(t, e, r, n, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = t),
            (this.name = "AxiosError"),
            e && (this.code = e),
            r && (this.config = r),
            n && (this.request = n),
            o && (this.response = o);
        }
        F.inherits(U, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: F.toJSONObject(this.config),
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        const D = U.prototype,
          M = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((t) => {
          M[t] = { value: t };
        }),
          Object.defineProperties(U, M),
          Object.defineProperty(D, "isAxiosError", { value: !0 }),
          (U.from = (t, e, r, n, o, i) => {
            const a = Object.create(D);
            return (
              F.toFlatObject(
                t,
                a,
                function (t) {
                  return t !== Error.prototype;
                },
                (t) => "isAxiosError" !== t,
              ),
              U.call(a, t.message, e, r, n, o),
              (a.cause = t),
              (a.name = t.name),
              i && Object.assign(a, i),
              a
            );
          });
        const q = U;
        var G = r(764).lW;
        function $(t) {
          return F.isPlainObject(t) || F.isArray(t);
        }
        function z(t) {
          return F.endsWith(t, "[]") ? t.slice(0, -2) : t;
        }
        function V(t, e, r) {
          return t
            ? t
                .concat(e)
                .map(function (t, e) {
                  return (t = z(t)), !r && e ? "[" + t + "]" : t;
                })
                .join(r ? "." : "")
            : e;
        }
        const W = F.toFlatObject(F, {}, null, function (t) {
          return /^is[A-Z]/.test(t);
        });
        const J = function (t, e, r) {
          if (!F.isObject(t)) throw new TypeError("target must be an object");
          e = e || new FormData();
          const n = (r = F.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (t, e) {
                return !F.isUndefined(e[t]);
              },
            )).metaTokens,
            o = r.visitor || s,
            i = r.dots,
            a = r.indexes,
            c =
              (r.Blob || ("undefined" != typeof Blob && Blob)) &&
              F.isSpecCompliantForm(e);
          if (!F.isFunction(o))
            throw new TypeError("visitor must be a function");
          function u(t) {
            if (null === t) return "";
            if (F.isDate(t)) return t.toISOString();
            if (!c && F.isBlob(t))
              throw new q("Blob is not supported. Use a Buffer instead.");
            return F.isArrayBuffer(t) || F.isTypedArray(t)
              ? c && "function" == typeof Blob
                ? new Blob([t])
                : G.from(t)
              : t;
          }
          function s(t, r, o) {
            let c = t;
            if (t && !o && "object" == typeof t)
              if (F.endsWith(r, "{}"))
                (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
              else if (
                (F.isArray(t) &&
                  (function (t) {
                    return F.isArray(t) && !t.some($);
                  })(t)) ||
                ((F.isFileList(t) || F.endsWith(r, "[]")) && (c = F.toArray(t)))
              )
                return (
                  (r = z(r)),
                  c.forEach(function (t, n) {
                    !F.isUndefined(t) &&
                      null !== t &&
                      e.append(
                        !0 === a ? V([r], n, i) : null === a ? r : r + "[]",
                        u(t),
                      );
                  }),
                  !1
                );
            return !!$(t) || (e.append(V(o, r, i), u(t)), !1);
          }
          const f = [],
            l = Object.assign(W, {
              defaultVisitor: s,
              convertValue: u,
              isVisitable: $,
            });
          if (!F.isObject(t)) throw new TypeError("data must be an object");
          return (
            (function t(r, n) {
              if (!F.isUndefined(r)) {
                if (-1 !== f.indexOf(r))
                  throw Error("Circular reference detected in " + n.join("."));
                f.push(r),
                  F.forEach(r, function (r, i) {
                    !0 ===
                      (!(F.isUndefined(r) || null === r) &&
                        o.call(e, r, F.isString(i) ? i.trim() : i, n, l)) &&
                      t(r, n ? n.concat(i) : [i]);
                  }),
                  f.pop();
              }
            })(t),
            e
          );
        };
        function H(t) {
          const e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(t).replace(
            /[!'()~]|%20|%00/g,
            function (t) {
              return e[t];
            },
          );
        }
        function Y(t, e) {
          (this._pairs = []), t && J(t, this, e);
        }
        const K = Y.prototype;
        (K.append = function (t, e) {
          this._pairs.push([t, e]);
        }),
          (K.toString = function (t) {
            const e = t
              ? function (e) {
                  return t.call(this, e, H);
                }
              : H;
            return this._pairs
              .map(function (t) {
                return e(t[0]) + "=" + e(t[1]);
              }, "")
              .join("&");
          });
        const X = Y;
        function Z(t) {
          return encodeURIComponent(t)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function Q(t, e, r) {
          if (!e) return t;
          const n = (r && r.encode) || Z,
            o = r && r.serialize;
          let i;
          if (
            ((i = o
              ? o(e, r)
              : F.isURLSearchParams(e)
                ? e.toString()
                : new X(e, r).toString(n)),
            i)
          ) {
            const e = t.indexOf("#");
            -1 !== e && (t = t.slice(0, e)),
              (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
          }
          return t;
        }
        const tt = class {
            constructor() {
              this.handlers = [];
            }
            use(t, e, r) {
              return (
                this.handlers.push({
                  fulfilled: t,
                  rejected: e,
                  synchronous: !!r && r.synchronous,
                  runWhen: r ? r.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(t) {
              this.handlers[t] && (this.handlers[t] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(t) {
              F.forEach(this.handlers, function (e) {
                null !== e && t(e);
              });
            }
          },
          et = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          rt = {
            isBrowser: !0,
            classes: {
              URLSearchParams:
                "undefined" != typeof URLSearchParams ? URLSearchParams : X,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null,
            },
            protocols: ["http", "https", "file", "blob", "url", "data"],
          },
          nt = "undefined" != typeof window && "undefined" != typeof document,
          ot =
            ((it = "undefined" != typeof navigator && navigator.product),
            nt && ["ReactNative", "NativeScript", "NS"].indexOf(it) < 0);
        var it;
        const at =
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" == typeof self.importScripts,
          ct = { ...t, ...rt };
        const ut = function (t) {
          function e(t, r, n, o) {
            let i = t[o++];
            if ("__proto__" === i) return !0;
            const a = Number.isFinite(+i),
              c = o >= t.length;
            if (((i = !i && F.isArray(n) ? n.length : i), c))
              return F.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !a;
            (n[i] && F.isObject(n[i])) || (n[i] = []);
            return (
              e(t, r, n[i], o) &&
                F.isArray(n[i]) &&
                (n[i] = (function (t) {
                  const e = {},
                    r = Object.keys(t);
                  let n;
                  const o = r.length;
                  let i;
                  for (n = 0; n < o; n++) (i = r[n]), (e[i] = t[i]);
                  return e;
                })(n[i])),
              !a
            );
          }
          if (F.isFormData(t) && F.isFunction(t.entries)) {
            const r = {};
            return (
              F.forEachEntry(t, (t, n) => {
                e(
                  (function (t) {
                    return F.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                      "[]" === t[0] ? "" : t[1] || t[0],
                    );
                  })(t),
                  n,
                  r,
                  0,
                );
              }),
              r
            );
          }
          return null;
        };
        const st = {
          transitional: et,
          adapter: ["xhr", "http"],
          transformRequest: [
            function (t, e) {
              const r = e.getContentType() || "",
                n = r.indexOf("application/json") > -1,
                o = F.isObject(t);
              o && F.isHTMLForm(t) && (t = new FormData(t));
              if (F.isFormData(t)) return n && n ? JSON.stringify(ut(t)) : t;
              if (
                F.isArrayBuffer(t) ||
                F.isBuffer(t) ||
                F.isStream(t) ||
                F.isFile(t) ||
                F.isBlob(t)
              )
                return t;
              if (F.isArrayBufferView(t)) return t.buffer;
              if (F.isURLSearchParams(t))
                return (
                  e.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1,
                  ),
                  t.toString()
                );
              let i;
              if (o) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function (t, e) {
                    return J(
                      t,
                      new ct.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (t, e, r, n) {
                            return ct.isNode && F.isBuffer(t)
                              ? (this.append(e, t.toString("base64")), !1)
                              : n.defaultVisitor.apply(this, arguments);
                          },
                        },
                        e,
                      ),
                    );
                  })(t, this.formSerializer).toString();
                if (
                  (i = F.isFileList(t)) ||
                  r.indexOf("multipart/form-data") > -1
                ) {
                  const e = this.env && this.env.FormData;
                  return J(
                    i ? { "files[]": t } : t,
                    e && new e(),
                    this.formSerializer,
                  );
                }
              }
              return o || n
                ? (e.setContentType("application/json", !1),
                  (function (t, e, r) {
                    if (F.isString(t))
                      try {
                        return (e || JSON.parse)(t), F.trim(t);
                      } catch (t) {
                        if ("SyntaxError" !== t.name) throw t;
                      }
                    return (r || JSON.stringify)(t);
                  })(t))
                : t;
            },
          ],
          transformResponse: [
            function (t) {
              const e = this.transitional || st.transitional,
                r = e && e.forcedJSONParsing,
                n = "json" === this.responseType;
              if (t && F.isString(t) && ((r && !this.responseType) || n)) {
                const r = !(e && e.silentJSONParsing) && n;
                try {
                  return JSON.parse(t);
                } catch (t) {
                  if (r) {
                    if ("SyntaxError" === t.name)
                      throw q.from(
                        t,
                        q.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response,
                      );
                    throw t;
                  }
                }
              }
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: ct.classes.FormData, Blob: ct.classes.Blob },
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
        F.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
          st.headers[t] = {};
        });
        const ft = st,
          lt = F.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          pt = Symbol("internals");
        function ht(t) {
          return t && String(t).trim().toLowerCase();
        }
        function yt(t) {
          return !1 === t || null == t
            ? t
            : F.isArray(t)
              ? t.map(yt)
              : String(t);
        }
        function dt(t, e, r, n, o) {
          return F.isFunction(n)
            ? n.call(this, e, r)
            : (o && (e = r),
              F.isString(e)
                ? F.isString(n)
                  ? -1 !== e.indexOf(n)
                  : F.isRegExp(n)
                    ? n.test(e)
                    : void 0
                : void 0);
        }
        class gt {
          constructor(t) {
            t && this.set(t);
          }
          set(t, e, r) {
            const n = this;
            function o(t, e, r) {
              const o = ht(e);
              if (!o) throw new Error("header name must be a non-empty string");
              const i = F.findKey(n, o);
              (!i ||
                void 0 === n[i] ||
                !0 === r ||
                (void 0 === r && !1 !== n[i])) &&
                (n[i || e] = yt(t));
            }
            const i = (t, e) => F.forEach(t, (t, r) => o(t, r, e));
            return (
              F.isPlainObject(t) || t instanceof this.constructor
                ? i(t, e)
                : F.isString(t) &&
                    (t = t.trim()) &&
                    !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
                  ? i(
                      ((t) => {
                        const e = {};
                        let r, n, o;
                        return (
                          t &&
                            t.split("\n").forEach(function (t) {
                              (o = t.indexOf(":")),
                                (r = t.substring(0, o).trim().toLowerCase()),
                                (n = t.substring(o + 1).trim()),
                                !r ||
                                  (e[r] && lt[r]) ||
                                  ("set-cookie" === r
                                    ? e[r]
                                      ? e[r].push(n)
                                      : (e[r] = [n])
                                    : (e[r] = e[r] ? e[r] + ", " + n : n));
                            }),
                          e
                        );
                      })(t),
                      e,
                    )
                  : null != t && o(e, t, r),
              this
            );
          }
          get(t, e) {
            if ((t = ht(t))) {
              const r = F.findKey(this, t);
              if (r) {
                const t = this[r];
                if (!e) return t;
                if (!0 === e)
                  return (function (t) {
                    const e = Object.create(null),
                      r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let n;
                    for (; (n = r.exec(t)); ) e[n[1]] = n[2];
                    return e;
                  })(t);
                if (F.isFunction(e)) return e.call(this, t, r);
                if (F.isRegExp(e)) return e.exec(t);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(t, e) {
            if ((t = ht(t))) {
              const r = F.findKey(this, t);
              return !(
                !r ||
                void 0 === this[r] ||
                (e && !dt(0, this[r], r, e))
              );
            }
            return !1;
          }
          delete(t, e) {
            const r = this;
            let n = !1;
            function o(t) {
              if ((t = ht(t))) {
                const o = F.findKey(r, t);
                !o || (e && !dt(0, r[o], o, e)) || (delete r[o], (n = !0));
              }
            }
            return F.isArray(t) ? t.forEach(o) : o(t), n;
          }
          clear(t) {
            const e = Object.keys(this);
            let r = e.length,
              n = !1;
            for (; r--; ) {
              const o = e[r];
              (t && !dt(0, this[o], o, t, !0)) || (delete this[o], (n = !0));
            }
            return n;
          }
          normalize(t) {
            const e = this,
              r = {};
            return (
              F.forEach(this, (n, o) => {
                const i = F.findKey(r, o);
                if (i) return (e[i] = yt(n)), void delete e[o];
                const a = t
                  ? (function (t) {
                      return t
                        .trim()
                        .toLowerCase()
                        .replace(
                          /([a-z\d])(\w*)/g,
                          (t, e, r) => e.toUpperCase() + r,
                        );
                    })(o)
                  : String(o).trim();
                a !== o && delete e[o], (e[a] = yt(n)), (r[a] = !0);
              }),
              this
            );
          }
          concat(...t) {
            return this.constructor.concat(this, ...t);
          }
          toJSON(t) {
            const e = Object.create(null);
            return (
              F.forEach(this, (r, n) => {
                null != r &&
                  !1 !== r &&
                  (e[n] = t && F.isArray(r) ? r.join(", ") : r);
              }),
              e
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([t, e]) => t + ": " + e)
              .join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(t) {
            return t instanceof this ? t : new this(t);
          }
          static concat(t, ...e) {
            const r = new this(t);
            return e.forEach((t) => r.set(t)), r;
          }
          static accessor(t) {
            const e = (this[pt] = this[pt] = { accessors: {} }).accessors,
              r = this.prototype;
            function n(t) {
              const n = ht(t);
              e[n] ||
                (!(function (t, e) {
                  const r = F.toCamelCase(" " + e);
                  ["get", "set", "has"].forEach((n) => {
                    Object.defineProperty(t, n + r, {
                      value: function (t, r, o) {
                        return this[n].call(this, e, t, r, o);
                      },
                      configurable: !0,
                    });
                  });
                })(r, t),
                (e[n] = !0));
            }
            return F.isArray(t) ? t.forEach(n) : n(t), this;
          }
        }
        gt.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
          "Authorization",
        ]),
          F.reduceDescriptors(gt.prototype, ({ value: t }, e) => {
            let r = e[0].toUpperCase() + e.slice(1);
            return {
              get: () => t,
              set(t) {
                this[r] = t;
              },
            };
          }),
          F.freezeMethods(gt);
        const bt = gt;
        function vt(t, e) {
          const r = this || ft,
            n = e || r,
            o = bt.from(n.headers);
          let i = n.data;
          return (
            F.forEach(t, function (t) {
              i = t.call(r, i, o.normalize(), e ? e.status : void 0);
            }),
            o.normalize(),
            i
          );
        }
        function mt(t) {
          return !(!t || !t.__CANCEL__);
        }
        function wt(t, e, r) {
          q.call(this, null == t ? "canceled" : t, q.ERR_CANCELED, e, r),
            (this.name = "CanceledError");
        }
        F.inherits(wt, q, { __CANCEL__: !0 });
        const Ot = wt;
        const Et = ct.hasStandardBrowserEnv
          ? {
              write(t, e, r, n, o, i) {
                const a = [t + "=" + encodeURIComponent(e)];
                F.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                  F.isString(n) && a.push("path=" + n),
                  F.isString(o) && a.push("domain=" + o),
                  !0 === i && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read(t) {
                const e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove(t) {
                this.write(t, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
        function St(t, e) {
          return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            ? (function (t, e) {
                return e
                  ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "")
                  : t;
              })(t, e)
            : e;
        }
        const jt = ct.hasStandardBrowserEnv
          ? (function () {
              const t = /(msie|trident)/i.test(navigator.userAgent),
                e = document.createElement("a");
              let r;
              function n(r) {
                let n = r;
                return (
                  t && (e.setAttribute("href", n), (n = e.href)),
                  e.setAttribute("href", n),
                  {
                    href: e.href,
                    protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                    host: e.host,
                    search: e.search ? e.search.replace(/^\?/, "") : "",
                    hash: e.hash ? e.hash.replace(/^#/, "") : "",
                    hostname: e.hostname,
                    port: e.port,
                    pathname:
                      "/" === e.pathname.charAt(0)
                        ? e.pathname
                        : "/" + e.pathname,
                  }
                );
              }
              return (
                (r = n(window.location.href)),
                function (t) {
                  const e = F.isString(t) ? n(t) : t;
                  return e.protocol === r.protocol && e.host === r.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        const Pt = function (t, e) {
          t = t || 10;
          const r = new Array(t),
            n = new Array(t);
          let o,
            i = 0,
            a = 0;
          return (
            (e = void 0 !== e ? e : 1e3),
            function (c) {
              const u = Date.now(),
                s = n[a];
              o || (o = u), (r[i] = c), (n[i] = u);
              let f = a,
                l = 0;
              for (; f !== i; ) (l += r[f++]), (f %= t);
              if (((i = (i + 1) % t), i === a && (a = (a + 1) % t), u - o < e))
                return;
              const p = s && u - s;
              return p ? Math.round((1e3 * l) / p) : void 0;
            }
          );
        };
        function At(t, e) {
          let r = 0;
          const n = Pt(50, 250);
          return (o) => {
            const i = o.loaded,
              a = o.lengthComputable ? o.total : void 0,
              c = i - r,
              u = n(c);
            r = i;
            const s = {
              loaded: i,
              total: a,
              progress: a ? i / a : void 0,
              bytes: c,
              rate: u || void 0,
              estimated: u && a && i <= a ? (a - i) / u : void 0,
              event: o,
            };
            (s[e ? "download" : "upload"] = !0), t(s);
          };
        }
        const xt = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (t) {
              return new Promise(function (e, r) {
                let n = t.data;
                const o = bt.from(t.headers).normalize();
                let i,
                  a,
                  { responseType: c, withXSRFToken: u } = t;
                function s() {
                  t.cancelToken && t.cancelToken.unsubscribe(i),
                    t.signal && t.signal.removeEventListener("abort", i);
                }
                if (F.isFormData(n))
                  if (
                    ct.hasStandardBrowserEnv ||
                    ct.hasStandardBrowserWebWorkerEnv
                  )
                    o.setContentType(!1);
                  else if (!1 !== (a = o.getContentType())) {
                    const [t, ...e] = a
                      ? a
                          .split(";")
                          .map((t) => t.trim())
                          .filter(Boolean)
                      : [];
                    o.setContentType(
                      [t || "multipart/form-data", ...e].join("; "),
                    );
                  }
                let f = new XMLHttpRequest();
                if (t.auth) {
                  const e = t.auth.username || "",
                    r = t.auth.password
                      ? unescape(encodeURIComponent(t.auth.password))
                      : "";
                  o.set("Authorization", "Basic " + btoa(e + ":" + r));
                }
                const l = St(t.baseURL, t.url);
                function p() {
                  if (!f) return;
                  const n = bt.from(
                    "getAllResponseHeaders" in f && f.getAllResponseHeaders(),
                  );
                  !(function (t, e, r) {
                    const n = r.config.validateStatus;
                    r.status && n && !n(r.status)
                      ? e(
                          new q(
                            "Request failed with status code " + r.status,
                            [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][
                              Math.floor(r.status / 100) - 4
                            ],
                            r.config,
                            r.request,
                            r,
                          ),
                        )
                      : t(r);
                  })(
                    function (t) {
                      e(t), s();
                    },
                    function (t) {
                      r(t), s();
                    },
                    {
                      data:
                        c && "text" !== c && "json" !== c
                          ? f.response
                          : f.responseText,
                      status: f.status,
                      statusText: f.statusText,
                      headers: n,
                      config: t,
                      request: f,
                    },
                  ),
                    (f = null);
                }
                if (
                  (f.open(
                    t.method.toUpperCase(),
                    Q(l, t.params, t.paramsSerializer),
                    !0,
                  ),
                  (f.timeout = t.timeout),
                  "onloadend" in f
                    ? (f.onloadend = p)
                    : (f.onreadystatechange = function () {
                        f &&
                          4 === f.readyState &&
                          (0 !== f.status ||
                            (f.responseURL &&
                              0 === f.responseURL.indexOf("file:"))) &&
                          setTimeout(p);
                      }),
                  (f.onabort = function () {
                    f &&
                      (r(new q("Request aborted", q.ECONNABORTED, t, f)),
                      (f = null));
                  }),
                  (f.onerror = function () {
                    r(new q("Network Error", q.ERR_NETWORK, t, f)), (f = null);
                  }),
                  (f.ontimeout = function () {
                    let e = t.timeout
                      ? "timeout of " + t.timeout + "ms exceeded"
                      : "timeout exceeded";
                    const n = t.transitional || et;
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                      r(
                        new q(
                          e,
                          n.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                          t,
                          f,
                        ),
                      ),
                      (f = null);
                  }),
                  ct.hasStandardBrowserEnv &&
                    (u && F.isFunction(u) && (u = u(t)),
                    u || (!1 !== u && jt(l))))
                ) {
                  const e =
                    t.xsrfHeaderName &&
                    t.xsrfCookieName &&
                    Et.read(t.xsrfCookieName);
                  e && o.set(t.xsrfHeaderName, e);
                }
                void 0 === n && o.setContentType(null),
                  "setRequestHeader" in f &&
                    F.forEach(o.toJSON(), function (t, e) {
                      f.setRequestHeader(e, t);
                    }),
                  F.isUndefined(t.withCredentials) ||
                    (f.withCredentials = !!t.withCredentials),
                  c && "json" !== c && (f.responseType = t.responseType),
                  "function" == typeof t.onDownloadProgress &&
                    f.addEventListener(
                      "progress",
                      At(t.onDownloadProgress, !0),
                    ),
                  "function" == typeof t.onUploadProgress &&
                    f.upload &&
                    f.upload.addEventListener(
                      "progress",
                      At(t.onUploadProgress),
                    ),
                  (t.cancelToken || t.signal) &&
                    ((i = (e) => {
                      f &&
                        (r(!e || e.type ? new Ot(null, t, f) : e),
                        f.abort(),
                        (f = null));
                    }),
                    t.cancelToken && t.cancelToken.subscribe(i),
                    t.signal &&
                      (t.signal.aborted
                        ? i()
                        : t.signal.addEventListener("abort", i)));
                const h = (function (t) {
                  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                  return (e && e[1]) || "";
                })(l);
                h && -1 === ct.protocols.indexOf(h)
                  ? r(
                      new q(
                        "Unsupported protocol " + h + ":",
                        q.ERR_BAD_REQUEST,
                        t,
                      ),
                    )
                  : f.send(n || null);
              });
            },
        };
        F.forEach(xt, (t, e) => {
          if (t) {
            try {
              Object.defineProperty(t, "name", { value: e });
            } catch (t) {}
            Object.defineProperty(t, "adapterName", { value: e });
          }
        });
        const Tt = (t) => `- ${t}`,
          kt = (t) => F.isFunction(t) || null === t || !1 === t,
          Rt = (t) => {
            t = F.isArray(t) ? t : [t];
            const { length: e } = t;
            let r, n;
            const o = {};
            for (let i = 0; i < e; i++) {
              let e;
              if (
                ((r = t[i]),
                (n = r),
                !kt(r) &&
                  ((n = xt[(e = String(r)).toLowerCase()]), void 0 === n))
              )
                throw new q(`Unknown adapter '${e}'`);
              if (n) break;
              o[e || "#" + i] = n;
            }
            if (!n) {
              const t = Object.entries(o).map(
                ([t, e]) =>
                  `adapter ${t} ` +
                  (!1 === e
                    ? "is not supported by the environment"
                    : "is not available in the build"),
              );
              let r = e
                ? t.length > 1
                  ? "since :\n" + t.map(Tt).join("\n")
                  : " " + Tt(t[0])
                : "as no adapter specified";
              throw new q(
                "There is no suitable adapter to dispatch the request " + r,
                "ERR_NOT_SUPPORT",
              );
            }
            return n;
          };
        function It(t) {
          if (
            (t.cancelToken && t.cancelToken.throwIfRequested(),
            t.signal && t.signal.aborted)
          )
            throw new Ot(null, t);
        }
        function _t(t) {
          It(t),
            (t.headers = bt.from(t.headers)),
            (t.data = vt.call(t, t.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(t.method) &&
              t.headers.setContentType("application/x-www-form-urlencoded", !1);
          return Rt(t.adapter || ft.adapter)(t).then(
            function (e) {
              return (
                It(t),
                (e.data = vt.call(t, t.transformResponse, e)),
                (e.headers = bt.from(e.headers)),
                e
              );
            },
            function (e) {
              return (
                mt(e) ||
                  (It(t),
                  e &&
                    e.response &&
                    ((e.response.data = vt.call(
                      t,
                      t.transformResponse,
                      e.response,
                    )),
                    (e.response.headers = bt.from(e.response.headers)))),
                Promise.reject(e)
              );
            },
          );
        }
        const Ct = (t) => (t instanceof bt ? t.toJSON() : t);
        function Lt(t, e) {
          e = e || {};
          const r = {};
          function n(t, e, r) {
            return F.isPlainObject(t) && F.isPlainObject(e)
              ? F.merge.call({ caseless: r }, t, e)
              : F.isPlainObject(e)
                ? F.merge({}, e)
                : F.isArray(e)
                  ? e.slice()
                  : e;
          }
          function o(t, e, r) {
            return F.isUndefined(e)
              ? F.isUndefined(t)
                ? void 0
                : n(void 0, t, r)
              : n(t, e, r);
          }
          function i(t, e) {
            if (!F.isUndefined(e)) return n(void 0, e);
          }
          function a(t, e) {
            return F.isUndefined(e)
              ? F.isUndefined(t)
                ? void 0
                : n(void 0, t)
              : n(void 0, e);
          }
          function c(r, o, i) {
            return i in e ? n(r, o) : i in t ? n(void 0, r) : void 0;
          }
          const u = {
            url: i,
            method: i,
            data: i,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            withXSRFToken: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: c,
            headers: (t, e) => o(Ct(t), Ct(e), !0),
          };
          return (
            F.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
              const i = u[n] || o,
                a = i(t[n], e[n], n);
              (F.isUndefined(a) && i !== c) || (r[n] = a);
            }),
            r
          );
        }
        const Nt = "1.6.5";
        var Bt = r(108);
        const Ft = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (t, e) => {
            Ft[t] = function (r) {
              return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
            };
          },
        );
        const Ut = {};
        Ft.transitional = function (t, e, r) {
          function n(t, e) {
            return (
              "[Axios v1.6.5] Transitional option '" +
              t +
              "'" +
              e +
              (r ? ". " + r : "")
            );
          }
          return (r, o, i) => {
            if (!1 === t)
              throw new q(
                n(o, " has been removed" + (e ? " in " + e : "")),
                q.ERR_DEPRECATED,
              );
            return (
              e &&
                !Ut[o] &&
                ((Ut[o] = !0),
                Bt.warn(
                  n(
                    o,
                    " has been deprecated since v" +
                      e +
                      " and will be removed in the near future",
                  ),
                )),
              !t || t(r, o, i)
            );
          };
        };
        const Dt = {
            assertOptions: function (t, e, r) {
              if ("object" != typeof t)
                throw new q(
                  "options must be an object",
                  q.ERR_BAD_OPTION_VALUE,
                );
              const n = Object.keys(t);
              let o = n.length;
              for (; o-- > 0; ) {
                const i = n[o],
                  a = e[i];
                if (a) {
                  const e = t[i],
                    r = void 0 === e || a(e, i, t);
                  if (!0 !== r)
                    throw new q(
                      "option " + i + " must be " + r,
                      q.ERR_BAD_OPTION_VALUE,
                    );
                } else if (!0 !== r)
                  throw new q("Unknown option " + i, q.ERR_BAD_OPTION);
              }
            },
            validators: Ft,
          },
          Mt = Dt.validators;
        class qt {
          constructor(t) {
            (this.defaults = t),
              (this.interceptors = { request: new tt(), response: new tt() });
          }
          request(t, e) {
            "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
              (e = Lt(this.defaults, e));
            const { transitional: r, paramsSerializer: n, headers: o } = e;
            void 0 !== r &&
              Dt.assertOptions(
                r,
                {
                  silentJSONParsing: Mt.transitional(Mt.boolean),
                  forcedJSONParsing: Mt.transitional(Mt.boolean),
                  clarifyTimeoutError: Mt.transitional(Mt.boolean),
                },
                !1,
              ),
              null != n &&
                (F.isFunction(n)
                  ? (e.paramsSerializer = { serialize: n })
                  : Dt.assertOptions(
                      n,
                      { encode: Mt.function, serialize: Mt.function },
                      !0,
                    )),
              (e.method = (
                e.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase());
            let i = o && F.merge(o.common, o[e.method]);
            o &&
              F.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (t) => {
                  delete o[t];
                },
              ),
              (e.headers = bt.concat(i, o));
            const a = [];
            let c = !0;
            this.interceptors.request.forEach(function (t) {
              ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
                ((c = c && t.synchronous), a.unshift(t.fulfilled, t.rejected));
            });
            const u = [];
            let s;
            this.interceptors.response.forEach(function (t) {
              u.push(t.fulfilled, t.rejected);
            });
            let f,
              l = 0;
            if (!c) {
              const t = [_t.bind(this), void 0];
              for (
                t.unshift.apply(t, a),
                  t.push.apply(t, u),
                  f = t.length,
                  s = Promise.resolve(e);
                l < f;

              )
                s = s.then(t[l++], t[l++]);
              return s;
            }
            f = a.length;
            let p = e;
            for (l = 0; l < f; ) {
              const t = a[l++],
                e = a[l++];
              try {
                p = t(p);
              } catch (t) {
                e.call(this, t);
                break;
              }
            }
            try {
              s = _t.call(this, p);
            } catch (t) {
              return Promise.reject(t);
            }
            for (l = 0, f = u.length; l < f; ) s = s.then(u[l++], u[l++]);
            return s;
          }
          getUri(t) {
            return Q(
              St((t = Lt(this.defaults, t)).baseURL, t.url),
              t.params,
              t.paramsSerializer,
            );
          }
        }
        F.forEach(["delete", "get", "head", "options"], function (t) {
          qt.prototype[t] = function (e, r) {
            return this.request(
              Lt(r || {}, { method: t, url: e, data: (r || {}).data }),
            );
          };
        }),
          F.forEach(["post", "put", "patch"], function (t) {
            function e(e) {
              return function (r, n, o) {
                return this.request(
                  Lt(o || {}, {
                    method: t,
                    headers: e ? { "Content-Type": "multipart/form-data" } : {},
                    url: r,
                    data: n,
                  }),
                );
              };
            }
            (qt.prototype[t] = e()), (qt.prototype[t + "Form"] = e(!0));
          });
        const Gt = qt;
        class $t {
          constructor(t) {
            if ("function" != typeof t)
              throw new TypeError("executor must be a function.");
            let e;
            this.promise = new Promise(function (t) {
              e = t;
            });
            const r = this;
            this.promise.then((t) => {
              if (!r._listeners) return;
              let e = r._listeners.length;
              for (; e-- > 0; ) r._listeners[e](t);
              r._listeners = null;
            }),
              (this.promise.then = (t) => {
                let e;
                const n = new Promise((t) => {
                  r.subscribe(t), (e = t);
                }).then(t);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(e);
                  }),
                  n
                );
              }),
              t(function (t, n, o) {
                r.reason || ((r.reason = new Ot(t, n, o)), e(r.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(t) {
            this.reason
              ? t(this.reason)
              : this._listeners
                ? this._listeners.push(t)
                : (this._listeners = [t]);
          }
          unsubscribe(t) {
            if (!this._listeners) return;
            const e = this._listeners.indexOf(t);
            -1 !== e && this._listeners.splice(e, 1);
          }
          static source() {
            let t;
            return {
              token: new $t(function (e) {
                t = e;
              }),
              cancel: t,
            };
          }
        }
        const zt = $t;
        const Vt = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
        Object.entries(Vt).forEach(([t, e]) => {
          Vt[e] = t;
        });
        const Wt = Vt;
        const Jt = (function t(r) {
          const n = new Gt(r),
            o = e(Gt.prototype.request, n);
          return (
            F.extend(o, Gt.prototype, n, { allOwnKeys: !0 }),
            F.extend(o, n, null, { allOwnKeys: !0 }),
            (o.create = function (e) {
              return t(Lt(r, e));
            }),
            o
          );
        })(ft);
        (Jt.Axios = Gt),
          (Jt.CanceledError = Ot),
          (Jt.CancelToken = zt),
          (Jt.isCancel = mt),
          (Jt.VERSION = Nt),
          (Jt.toFormData = J),
          (Jt.AxiosError = q),
          (Jt.Cancel = Jt.CanceledError),
          (Jt.all = function (t) {
            return Promise.all(t);
          }),
          (Jt.spread = function (t) {
            return function (e) {
              return t.apply(null, e);
            };
          }),
          (Jt.isAxiosError = function (t) {
            return F.isObject(t) && !0 === t.isAxiosError;
          }),
          (Jt.mergeConfig = Lt),
          (Jt.AxiosHeaders = bt),
          (Jt.formToJSON = (t) => ut(F.isHTMLForm(t) ? new FormData(t) : t)),
          (Jt.getAdapter = Rt),
          (Jt.HttpStatusCode = Wt),
          (Jt.default = Jt);
        const Ht = Jt;
        function Yt(t) {
          return (
            (Yt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Yt(t)
          );
        }
        function Kt(t) {
          var e = Qt();
          return function () {
            var r,
              n = ee(t);
            if (e) {
              var o = ee(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Yt(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(this, r);
          };
        }
        function Xt(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (Xt = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return Zt(t, arguments, ee(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                te(r, t)
              );
            }),
            Xt(t)
          );
        }
        function Zt(t, e, r) {
          return (
            (Zt = Qt()
              ? Reflect.construct.bind()
              : function (t, e, r) {
                  var n = [null];
                  n.push.apply(n, e);
                  var o = new (Function.bind.apply(t, n))();
                  return r && te(o, r.prototype), o;
                }),
            Zt.apply(null, arguments)
          );
        }
        function Qt() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function te(t, e) {
          return (
            (te = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            te(t, e)
          );
        }
        function ee(t) {
          return (
            (ee = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ee(t)
          );
        }
        function re(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                ((o = n.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Yt(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== Yt(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Yt(i) ? i : String(i)),
                n,
              );
          }
          var o, i;
        }
        function ne(t, e, r) {
          return (
            e && re(t.prototype, e),
            r && re(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function oe(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        var ie = "https://api.adcio.ai".replace(/\/+$/, ""),
          ae = ne(function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ie,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Ht;
            oe(this, t),
              (this.basePath = r),
              (this.axios = n),
              e &&
                ((this.configuration = e),
                (this.basePath = e.basePath || this.basePath));
          }),
          ce = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && te(t, e);
            })(r, t);
            var e = Kt(r);
            function r(t, n) {
              var o;
              return (
                oe(this, r),
                ((o = e.call(this, n)).field = t),
                (o.name = "RequiredError"),
                o
              );
            }
            return ne(r);
          })(Xt(Error));
        function ue(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function se(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? ue(Object(r), !0).forEach(function (e) {
                  fe(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : ue(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function fe(t, e, r) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== le(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" !== le(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(t, "string");
              return "symbol" === le(e) ? e : String(e);
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function le(t) {
          return (
            (le =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            le(t)
          );
        }
        var pe = "https://example.com",
          he = function (t, e, r) {
            if (null == r)
              throw new ce(
                e,
                "Required parameter "
                  .concat(e, " was null or undefined when calling ")
                  .concat(t, "."),
              );
          };
        function ye(t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          null != e &&
            ("object" === le(e)
              ? Array.isArray(e)
                ? e.forEach(function (e) {
                    return ye(t, e, r);
                  })
                : Object.keys(e).forEach(function (n) {
                    return ye(
                      t,
                      e[n],
                      ""
                        .concat(r)
                        .concat("" !== r ? "." : "")
                        .concat(n),
                    );
                  })
              : t.has(r)
                ? t.append(r, e)
                : t.set(r, e));
        }
        var de = function (t) {
            for (
              var e = new URLSearchParams(t.search),
                r = arguments.length,
                n = new Array(r > 1 ? r - 1 : 0),
                o = 1;
              o < r;
              o++
            )
              n[o - 1] = arguments[o];
            ye(e, n), (t.search = e.toString());
          },
          ge = function (t, e, r) {
            var n = "string" != typeof t;
            return (
              n && r && r.isJsonMime
                ? r.isJsonMime(e.headers["Content-Type"])
                : n
            )
              ? JSON.stringify(void 0 !== t ? t : {})
              : t || "";
          },
          be = function (t) {
            return t.pathname + t.search + t.hash;
          },
          ve = function (t, e, r, n) {
            return function () {
              var o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : e,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r,
                a = se(
                  se({}, t.options),
                  {},
                  { url: ((null == n ? void 0 : n.basePath) || i) + t.url },
                );
              return o.request(a);
            };
          };
        function me(t) {
          return (
            (me =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            me(t)
          );
        }
        function we(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function Oe(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Ie(n.key), n);
          }
        }
        function Ee(t, e, r) {
          return (
            e && Oe(t.prototype, e),
            r && Oe(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function Se(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && je(t, e);
        }
        function je(t, e) {
          return (
            (je = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            je(t, e)
          );
        }
        function Pe(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = Ae(t);
            if (e) {
              var o = Ae(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === me(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(this, r);
          };
        }
        function Ae(t) {
          return (
            (Ae = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Ae(t)
          );
        }
        function xe() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ xe =
            function () {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function s(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var i = e && e.prototype instanceof b ? e : b,
              a = Object.create(i.prototype),
              c = new R(n || []);
            return o(a, "_invoke", { value: A(t, r, c) }), a;
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            h = "suspendedYield",
            y = "executing",
            d = "completed",
            g = {};
          function b() {}
          function v() {}
          function m() {}
          var w = {};
          s(w, a, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            E = O && O(O(I([])));
          E && E !== r && n.call(E, a) && (w = E);
          var S = (m.prototype = b.prototype = Object.create(w));
          function j(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function P(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" == me(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      },
                    );
              }
              c(u.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function A(e, r, n) {
            var o = p;
            return function (i, a) {
              if (o === y) throw new Error("Generator is already running");
              if (o === d) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = x(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = d), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var s = l(e, r, n);
                if ("normal" === s.type) {
                  if (((o = n.done ? d : h), s.arg === g)) continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((o = d), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function x(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  x(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                g
              );
            var i = l(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function T(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function k(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function R(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(T, this),
              this.reset(!0);
          }
          function I(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(me(e) + " is not iterable");
          }
          return (
            (v.prototype = m),
            o(S, "constructor", { value: m, configurable: !0 }),
            o(m, "constructor", { value: v, configurable: !0 }),
            (v.displayName = s(m, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(S)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            j(P.prototype),
            s(P.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new P(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            j(S),
            s(S, u, "Generator"),
            s(S, a, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = I),
            (R.prototype = {
              constructor: R,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), k(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      k(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: I(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        }
        function Te(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ke(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Te(Object(r), !0).forEach(function (e) {
                  Re(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : Te(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function Re(t, e, r) {
          return (
            (e = Ie(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Ie(t) {
          var e = (function (t, e) {
            if ("object" !== me(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== me(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === me(e) ? e : String(e);
        }
        function _e(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void r(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function Ce(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                _e(i, n, o, a, c, "next", t);
              }
              function c(t) {
                _e(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        var Le = function (t) {
            var e = (function (t) {
              return {
                pageControllerFetchActivePlacements:
                  ((e = Ce(
                    xe().mark(function e(r, n) {
                      var o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f,
                        l,
                        p = arguments;
                      return xe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o =
                                  p.length > 2 && void 0 !== p[2] ? p[2] : {}),
                                he(
                                  "pageControllerFetchActivePlacements",
                                  "name",
                                  r,
                                ),
                                he(
                                  "pageControllerFetchActivePlacements",
                                  "clientId",
                                  n,
                                ),
                                (i = "/pages/{name}/placements".replace(
                                  "{".concat("name", "}"),
                                  encodeURIComponent(String(r)),
                                )),
                                (a = new URL(i, pe)),
                                t && (c = t.baseOptions),
                                (u = ke(ke({ method: "GET" }, c), o)),
                                (s = {}),
                                (f = {}),
                                void 0 !== n && (f.clientId = n),
                                de(a, f),
                                (l = c && c.headers ? c.headers : {}),
                                (u.headers = ke(ke(ke({}, s), l), o.headers)),
                                e.abrupt("return", { url: be(a), options: u })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t, r) {
                    return e.apply(this, arguments);
                  }),
              };
              var e;
            })(t);
            return {
              pageControllerFetchActivePlacements: function (r, n, o) {
                return Ce(
                  xe().mark(function i() {
                    var a;
                    return xe().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (i.next = 2),
                              e.pageControllerFetchActivePlacements(r, n, o)
                            );
                          case 2:
                            return (
                              (a = i.sent), i.abrupt("return", ve(a, Ht, ie, t))
                            );
                          case 4:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  }),
                )();
              },
            };
          },
          Ne = (function (t) {
            Se(r, t);
            var e = Pe(r);
            function r() {
              return we(this, r), e.apply(this, arguments);
            }
            return (
              Ee(r, [
                {
                  key: "pageControllerFetchActivePlacements",
                  value: function (t, e, r) {
                    var n = this;
                    return Le(this.configuration)
                      .pageControllerFetchActivePlacements(t, e, r)
                      .then(function (t) {
                        return t(n.axios, n.basePath);
                      });
                  },
                },
              ]),
              r
            );
          })(ae),
          Be = function (t) {
            var e = (function (t) {
              return {
                suggestionControllerSuggest:
                  ((r = Ce(
                    xe().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return xe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                he(
                                  "suggestionControllerSuggest",
                                  "suggestionRequestDto",
                                  r,
                                ),
                                (o = new URL("/suggestions", pe)),
                                t && (i = t.baseOptions),
                                (a = ke(ke({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                de(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = ke(ke(ke({}, c), s), n.headers)),
                                (a.data = ge(r, a, t)),
                                e.abrupt("return", { url: be(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
                suggestionControllerSuggestProducts:
                  ((e = Ce(
                    xe().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return xe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                he(
                                  "suggestionControllerSuggestProducts",
                                  "suggestionProductsRequestDto",
                                  r,
                                ),
                                (o = new URL("/suggestion-products", pe)),
                                t && (i = t.baseOptions),
                                (a = ke(ke({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                de(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = ke(ke(ke({}, c), s), n.headers)),
                                (a.data = ge(r, a, t)),
                                e.abrupt("return", { url: be(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return e.apply(this, arguments);
                  }),
              };
              var e, r;
            })(t);
            return {
              suggestionControllerSuggest: function (r, n) {
                return Ce(
                  xe().mark(function o() {
                    var i;
                    return xe().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2), e.suggestionControllerSuggest(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", ve(i, Ht, ie, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
              suggestionControllerSuggestProducts: function (r, n) {
                return Ce(
                  xe().mark(function o() {
                    var i;
                    return xe().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              e.suggestionControllerSuggestProducts(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", ve(i, Ht, ie, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
            };
          },
          Fe = (function (t) {
            Se(r, t);
            var e = Pe(r);
            function r() {
              return we(this, r), e.apply(this, arguments);
            }
            return (
              Ee(r, [
                {
                  key: "suggestionControllerSuggest",
                  value: function (t, e) {
                    var r = this;
                    return Be(this.configuration)
                      .suggestionControllerSuggest(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
                {
                  key: "suggestionControllerSuggestProducts",
                  value: function (t, e) {
                    var r = this;
                    return Be(this.configuration)
                      .suggestionControllerSuggestProducts(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
              ]),
              r
            );
          })(ae);
        function Ue(t) {
          return (
            (Ue =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ue(t)
          );
        }
        function De(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                ((o = n.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Ue(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== Ue(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Ue(i) ? i : String(i)),
                n,
              );
          }
          var o, i;
        }
        var Me = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.apiKey = e.apiKey),
              (this.username = e.username),
              (this.password = e.password),
              (this.accessToken = e.accessToken),
              (this.basePath = e.basePath),
              (this.baseOptions = e.baseOptions),
              (this.formDataCtor = e.formDataCtor);
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
              {
                key: "isJsonMime",
                value: function (t) {
                  var e = new RegExp(
                    "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
                    "i",
                  );
                  return (
                    null !== t &&
                    (e.test(t) ||
                      "application/json-patch+json" === t.toLowerCase())
                  );
                },
              },
            ]) && De(e.prototype, r),
            n && De(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function qe(t) {
          return (
            (qe =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            qe(t)
          );
        }
        function Ge(t) {
          var e = Ve();
          return function () {
            var r,
              n = Je(t);
            if (e) {
              var o = Je(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === qe(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(this, r);
          };
        }
        function $e(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            ($e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return ze(t, arguments, Je(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                We(r, t)
              );
            }),
            $e(t)
          );
        }
        function ze(t, e, r) {
          return (
            (ze = Ve()
              ? Reflect.construct.bind()
              : function (t, e, r) {
                  var n = [null];
                  n.push.apply(n, e);
                  var o = new (Function.bind.apply(t, n))();
                  return r && We(o, r.prototype), o;
                }),
            ze.apply(null, arguments)
          );
        }
        function Ve() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function We(t, e) {
          return (
            (We = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            We(t, e)
          );
        }
        function Je(t) {
          return (
            (Je = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Je(t)
          );
        }
        function He(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                ((o = n.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== qe(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== qe(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === qe(i) ? i : String(i)),
                n,
              );
          }
          var o, i;
        }
        function Ye(t, e, r) {
          return (
            e && He(t.prototype, e),
            r && He(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function Ke(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        var Xe = "https://receiver.adcio.ai".replace(/\/+$/, ""),
          Ze = Ye(function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Xe,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Ht;
            Ke(this, t),
              (this.basePath = r),
              (this.axios = n),
              e &&
                ((this.configuration = e),
                (this.basePath = e.basePath || this.basePath));
          }),
          Qe = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && We(t, e);
            })(r, t);
            var e = Ge(r);
            function r(t, n) {
              var o;
              return (
                Ke(this, r),
                ((o = e.call(this, n)).field = t),
                (o.name = "RequiredError"),
                o
              );
            }
            return Ye(r);
          })($e(Error));
        function tr(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function er(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? tr(Object(r), !0).forEach(function (e) {
                  rr(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : tr(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function rr(t, e, r) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== nr(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" !== nr(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(t, "string");
              return "symbol" === nr(e) ? e : String(e);
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function nr(t) {
          return (
            (nr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            nr(t)
          );
        }
        var or = "https://example.com",
          ir = function (t, e, r) {
            if (null == r)
              throw new Qe(
                e,
                "Required parameter "
                  .concat(e, " was null or undefined when calling ")
                  .concat(t, "."),
              );
          };
        function ar(t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          null != e &&
            ("object" === nr(e)
              ? Array.isArray(e)
                ? e.forEach(function (e) {
                    return ar(t, e, r);
                  })
                : Object.keys(e).forEach(function (n) {
                    return ar(
                      t,
                      e[n],
                      ""
                        .concat(r)
                        .concat("" !== r ? "." : "")
                        .concat(n),
                    );
                  })
              : t.has(r)
                ? t.append(r, e)
                : t.set(r, e));
        }
        var cr = function (t) {
            for (
              var e = new URLSearchParams(t.search),
                r = arguments.length,
                n = new Array(r > 1 ? r - 1 : 0),
                o = 1;
              o < r;
              o++
            )
              n[o - 1] = arguments[o];
            ar(e, n), (t.search = e.toString());
          },
          ur = function (t, e, r) {
            var n = "string" != typeof t;
            return (
              n && r && r.isJsonMime
                ? r.isJsonMime(e.headers["Content-Type"])
                : n
            )
              ? JSON.stringify(void 0 !== t ? t : {})
              : t || "";
          },
          sr = function (t) {
            return t.pathname + t.search + t.hash;
          },
          fr = function (t, e, r, n) {
            return function () {
              var o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : e,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r,
                a = er(
                  er({}, t.options),
                  {},
                  { url: ((null == n ? void 0 : n.basePath) || i) + t.url },
                );
              return o.request(a);
            };
          };
        function lr(t) {
          return (
            (lr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            lr(t)
          );
        }
        function pr(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function hr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Sr(n.key), n);
          }
        }
        function yr(t, e, r) {
          return (
            e && hr(t.prototype, e),
            r && hr(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        function dr(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && gr(t, e);
        }
        function gr(t, e) {
          return (
            (gr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            gr(t, e)
          );
        }
        function br(t) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = vr(t);
            if (e) {
              var o = vr(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === lr(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(this, r);
          };
        }
        function vr(t) {
          return (
            (vr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            vr(t)
          );
        }
        function mr() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ mr =
            function () {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function s(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var i = e && e.prototype instanceof b ? e : b,
              a = Object.create(i.prototype),
              c = new R(n || []);
            return o(a, "_invoke", { value: A(t, r, c) }), a;
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            h = "suspendedYield",
            y = "executing",
            d = "completed",
            g = {};
          function b() {}
          function v() {}
          function m() {}
          var w = {};
          s(w, a, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            E = O && O(O(I([])));
          E && E !== r && n.call(E, a) && (w = E);
          var S = (m.prototype = b.prototype = Object.create(w));
          function j(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function P(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" == lr(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      },
                    );
              }
              c(u.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function A(e, r, n) {
            var o = p;
            return function (i, a) {
              if (o === y) throw new Error("Generator is already running");
              if (o === d) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = x(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = d), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var s = l(e, r, n);
                if ("normal" === s.type) {
                  if (((o = n.done ? d : h), s.arg === g)) continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((o = d), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function x(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  x(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                g
              );
            var i = l(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function T(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function k(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function R(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(T, this),
              this.reset(!0);
          }
          function I(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(lr(e) + " is not iterable");
          }
          return (
            (v.prototype = m),
            o(S, "constructor", { value: m, configurable: !0 }),
            o(m, "constructor", { value: v, configurable: !0 }),
            (v.displayName = s(m, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(S)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            j(P.prototype),
            s(P.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new P(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            j(S),
            s(S, u, "Generator"),
            s(S, a, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = I),
            (R.prototype = {
              constructor: R,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), k(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      k(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: I(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        }
        function wr(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Or(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? wr(Object(r), !0).forEach(function (e) {
                  Er(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : wr(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function Er(t, e, r) {
          return (
            (e = Sr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Sr(t) {
          var e = (function (t, e) {
            if ("object" !== lr(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== lr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === lr(e) ? e : String(e);
        }
        function jr(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void r(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function Pr(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                jr(i, n, o, a, c, "next", t);
              }
              function c(t) {
                jr(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        var Ar = function (t) {
            var e = (function (t) {
              return {
                eventsControllerOnAddToCart:
                  ((n = Pr(
                    mr().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return mr().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                ir(
                                  "eventsControllerOnAddToCart",
                                  "trackAddToCartRequestDto",
                                  r,
                                ),
                                (o = new URL("/events/add-to-cart", or)),
                                t && (i = t.baseOptions),
                                (a = Or(Or({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                cr(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = Or(Or(Or({}, c), s), n.headers)),
                                (a.data = ur(r, a, t)),
                                e.abrupt("return", { url: sr(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return n.apply(this, arguments);
                  }),
                eventsControllerOnPageView:
                  ((r = Pr(
                    mr().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return mr().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                ir(
                                  "eventsControllerOnPageView",
                                  "trackPageViewRequestDto",
                                  r,
                                ),
                                (o = new URL("/events/view", or)),
                                t && (i = t.baseOptions),
                                (a = Or(Or({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                cr(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = Or(Or(Or({}, c), s), n.headers)),
                                (a.data = ur(r, a, t)),
                                e.abrupt("return", { url: sr(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
                eventsControllerOnPurchase:
                  ((e = Pr(
                    mr().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return mr().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                ir(
                                  "eventsControllerOnPurchase",
                                  "trackPurchaseRequestDto",
                                  r,
                                ),
                                (o = new URL("/events/purchase", or)),
                                t && (i = t.baseOptions),
                                (a = Or(Or({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                cr(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = Or(Or(Or({}, c), s), n.headers)),
                                (a.data = ur(r, a, t)),
                                e.abrupt("return", { url: sr(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return e.apply(this, arguments);
                  }),
              };
              var e, r, n;
            })(t);
            return {
              eventsControllerOnAddToCart: function (r, n) {
                return Pr(
                  mr().mark(function o() {
                    var i;
                    return mr().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2), e.eventsControllerOnAddToCart(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", fr(i, Ht, Xe, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
              eventsControllerOnPageView: function (r, n) {
                return Pr(
                  mr().mark(function o() {
                    var i;
                    return mr().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2), e.eventsControllerOnPageView(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", fr(i, Ht, Xe, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
              eventsControllerOnPurchase: function (r, n) {
                return Pr(
                  mr().mark(function o() {
                    var i;
                    return mr().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2), e.eventsControllerOnPurchase(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", fr(i, Ht, Xe, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
            };
          },
          xr = (function (t) {
            dr(r, t);
            var e = br(r);
            function r() {
              return pr(this, r), e.apply(this, arguments);
            }
            return (
              yr(r, [
                {
                  key: "eventsControllerOnAddToCart",
                  value: function (t, e) {
                    var r = this;
                    return Ar(this.configuration)
                      .eventsControllerOnAddToCart(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
                {
                  key: "eventsControllerOnPageView",
                  value: function (t, e) {
                    var r = this;
                    return Ar(this.configuration)
                      .eventsControllerOnPageView(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
                {
                  key: "eventsControllerOnPurchase",
                  value: function (t, e) {
                    var r = this;
                    return Ar(this.configuration)
                      .eventsControllerOnPurchase(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
              ]),
              r
            );
          })(Ze),
          Tr = function (t) {
            var e = (function (t) {
              return {
                performanceControllerOnClick:
                  ((r = Pr(
                    mr().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return mr().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                ir(
                                  "performanceControllerOnClick",
                                  "trackClickRequestDto",
                                  r,
                                ),
                                (o = new URL("/performance/click", or)),
                                t && (i = t.baseOptions),
                                (a = Or(Or({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                cr(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = Or(Or(Or({}, c), s), n.headers)),
                                (a.data = ur(r, a, t)),
                                e.abrupt("return", { url: sr(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
                performanceControllerOnImpression:
                  ((e = Pr(
                    mr().mark(function e(r) {
                      var n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        f = arguments;
                      return mr().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                ir(
                                  "performanceControllerOnImpression",
                                  "trackImpressionRequestDto",
                                  r,
                                ),
                                (o = new URL("/performance/impression", or)),
                                t && (i = t.baseOptions),
                                (a = Or(Or({ method: "POST" }, i), n)),
                                (u = {}),
                                ((c = {})["Content-Type"] = "application/json"),
                                cr(o, u),
                                (s = i && i.headers ? i.headers : {}),
                                (a.headers = Or(Or(Or({}, c), s), n.headers)),
                                (a.data = ur(r, a, t)),
                                e.abrupt("return", { url: sr(o), options: a })
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (t) {
                    return e.apply(this, arguments);
                  }),
              };
              var e, r;
            })(t);
            return {
              performanceControllerOnClick: function (r, n) {
                return Pr(
                  mr().mark(function o() {
                    var i;
                    return mr().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2), e.performanceControllerOnClick(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", fr(i, Ht, Xe, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
              performanceControllerOnImpression: function (r, n) {
                return Pr(
                  mr().mark(function o() {
                    var i;
                    return mr().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              e.performanceControllerOnImpression(r, n)
                            );
                          case 2:
                            return (
                              (i = o.sent), o.abrupt("return", fr(i, Ht, Xe, t))
                            );
                          case 4:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  }),
                )();
              },
            };
          },
          kr = (function (t) {
            dr(r, t);
            var e = br(r);
            function r() {
              return pr(this, r), e.apply(this, arguments);
            }
            return (
              yr(r, [
                {
                  key: "performanceControllerOnClick",
                  value: function (t, e) {
                    var r = this;
                    return Tr(this.configuration)
                      .performanceControllerOnClick(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
                {
                  key: "performanceControllerOnImpression",
                  value: function (t, e) {
                    var r = this;
                    return Tr(this.configuration)
                      .performanceControllerOnImpression(t, e)
                      .then(function (t) {
                        return t(r.axios, r.basePath);
                      });
                  },
                },
              ]),
              r
            );
          })(Ze);
        function Rr(t) {
          return (
            (Rr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Rr(t)
          );
        }
        function Ir() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Ir =
            function () {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function s(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var i = e && e.prototype instanceof b ? e : b,
              a = Object.create(i.prototype),
              c = new R(n || []);
            return o(a, "_invoke", { value: A(t, r, c) }), a;
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            h = "suspendedYield",
            y = "executing",
            d = "completed",
            g = {};
          function b() {}
          function v() {}
          function m() {}
          var w = {};
          s(w, a, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            E = O && O(O(I([])));
          E && E !== r && n.call(E, a) && (w = E);
          var S = (m.prototype = b.prototype = Object.create(w));
          function j(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function P(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" == Rr(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      },
                    );
              }
              c(u.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function A(e, r, n) {
            var o = p;
            return function (i, a) {
              if (o === y) throw new Error("Generator is already running");
              if (o === d) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = x(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = d), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var s = l(e, r, n);
                if ("normal" === s.type) {
                  if (((o = n.done ? d : h), s.arg === g)) continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((o = d), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function x(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  x(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                g
              );
            var i = l(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function T(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function k(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function R(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(T, this),
              this.reset(!0);
          }
          function I(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(Rr(e) + " is not iterable");
          }
          return (
            (v.prototype = m),
            o(S, "constructor", { value: m, configurable: !0 }),
            o(m, "constructor", { value: v, configurable: !0 }),
            (v.displayName = s(m, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(S)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            j(P.prototype),
            s(P.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new P(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            j(S),
            s(S, u, "Generator"),
            s(S, a, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = I),
            (R.prototype = {
              constructor: R,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), k(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      k(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: I(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        }
        function _r(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Cr(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? _r(Object(r), !0).forEach(function (e) {
                  Lr(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : _r(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function Lr(t, e, r) {
          return (
            (e = Ur(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Nr(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void r(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function Br(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                Nr(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Nr(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function Fr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Ur(n.key), n);
          }
        }
        function Ur(t) {
          var e = (function (t, e) {
            if ("object" !== Rr(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== Rr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Rr(e) ? e : String(e);
        }
        var Dr = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.adcioCore = e.adcioCore),
              (this.apiConfig = new Me({
                basePath: e.receiverEndpoint,
                baseOptions: { headers: { Authorization: "" } },
              }));
          }
          var e, r, n, o, i, a, c, u;
          return (
            (e = t),
            (r = [
              {
                key: "onPageView",
                value:
                  ((u = Br(
                    Ir().mark(function t(e) {
                      return Ir().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  new xr(
                                    this.apiConfig,
                                  ).eventsControllerOnPageView(
                                    Cr(
                                      Cr({}, e),
                                      this.adcioCore.getSessionDto(),
                                    ),
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: "onImpression",
                value:
                  ((c = Br(
                    Ir().mark(function t(e) {
                      return Ir().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  new kr(
                                    this.apiConfig,
                                  ).performanceControllerOnImpression(
                                    Cr(
                                      Cr({}, e),
                                      this.adcioCore.getSessionDto(),
                                    ),
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return c.apply(this, arguments);
                  }),
              },
              {
                key: "onClick",
                value:
                  ((a = Br(
                    Ir().mark(function t(e) {
                      return Ir().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  new kr(
                                    this.apiConfig,
                                  ).performanceControllerOnClick(
                                    Cr(
                                      Cr({}, e),
                                      this.adcioCore.getSessionDto(),
                                    ),
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "onAddToCart",
                value:
                  ((i = Br(
                    Ir().mark(function t(e) {
                      return Ir().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  new xr(
                                    this.apiConfig,
                                  ).eventsControllerOnAddToCart(
                                    Cr(
                                      Cr({}, e),
                                      this.adcioCore.getSessionDto(),
                                    ),
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "onPurchase",
                value:
                  ((o = Br(
                    Ir().mark(function t(e) {
                      return Ir().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  new xr(
                                    this.apiConfig,
                                  ).eventsControllerOnPurchase(
                                    Cr(
                                      Cr({}, e),
                                      this.adcioCore.getSessionDto(),
                                    ),
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return o.apply(this, arguments);
                  }),
              },
            ]),
            r && Fr(e.prototype, r),
            n && Fr(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function Mr(t) {
          return (
            (Mr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Mr(t)
          );
        }
        function qr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Gr(n.key), n);
          }
        }
        function Gr(t) {
          var e = (function (t, e) {
            if ("object" !== Mr(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== Mr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Mr(e) ? e : String(e);
        }
        var $r = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (function (t, e, r) {
                (e = Gr(e)) in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
              })(this, "key", "");
            var r = e.key;
            this.key = r;
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
              {
                key: "set",
                value: function (t) {
                  localStorage && localStorage.setItem(this.key, t);
                },
              },
              {
                key: "getOrSet",
                value: function () {
                  var t = this.get();
                  return t || ((t = crypto.randomUUID()), this.set(t)), t;
                },
              },
              {
                key: "get",
                value: function () {
                  if (!localStorage) return "";
                  var t = localStorage.getItem(this.key);
                  return t || "";
                },
              },
            ]) && qr(e.prototype, r),
            n && qr(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function zr(t) {
          return (
            (zr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            zr(t)
          );
        }
        function Vr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Wr(n.key), n);
          }
        }
        function Wr(t) {
          var e = (function (t, e) {
            if ("object" !== zr(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== zr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === zr(e) ? e : String(e);
        }
        var Jr = (function () {
          function t(e) {
            var r = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (function (t, e, r) {
                (e = Wr(e)) in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r);
              })(this, "key", "");
            var n = e.key,
              o = e.expiration;
            if (((this.key = n), o)) {
              var i = setTimeout(function () {
                return r.reset();
              }, o);
              window.addEventListener("unload", function () {
                return clearTimeout(i);
              });
            }
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
              {
                key: "reset",
                value: function () {
                  return this.set(""), this.getOrSet();
                },
              },
              {
                key: "set",
                value: function (t) {
                  sessionStorage && sessionStorage.setItem(this.key, t);
                },
              },
              {
                key: "getOrSet",
                value: function () {
                  var t = this.get();
                  return t || ((t = crypto.randomUUID()), this.set(t)), t;
                },
              },
              {
                key: "get",
                value: function () {
                  if (!sessionStorage) return "";
                  var t = sessionStorage.getItem(this.key);
                  return t || "";
                },
              },
            ]) && Vr(e.prototype, r),
            n && Vr(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function Hr(t) {
          if (t.local) return new $r(t.local);
          if (t.session) return new Jr(t.session);
          throw new Error("Invalid StorageParams");
        }
        function Yr(t) {
          return (
            (Yr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Yr(t)
          );
        }
        function Kr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                ((o = n.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Yr(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== Yr(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Yr(i) ? i : String(i)),
                n,
              );
          }
          var o, i;
        }
        var Xr = (function () {
          function t(e) {
            var r = e.clientId,
              n = e.customerId;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.sessionStorage = Hr({
                session: { key: "adcio-session-".concat(r), expiration: 18e5 },
              })),
              this.sessionStorage.getOrSet(),
              (this.deviceId = Hr({
                local: { key: "adcio-device-".concat(r) },
              }).getOrSet()),
              (this.clientId = r),
              (this.customerId = n);
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
              {
                key: "setCustomerId",
                value: function (t) {
                  this.customerId = t;
                },
              },
              {
                key: "getSessionDto",
                value: function () {
                  return {
                    storeId: this.getStoreId(),
                    sessionId: this.getSessionId(),
                    deviceId: this.getDeviceId(),
                    customerId: this.getCustomerId(),
                  };
                },
              },
              {
                key: "getClientId",
                value: function () {
                  return this.clientId;
                },
              },
              {
                key: "getSessionId",
                value: function () {
                  return this.sessionStorage.get();
                },
              },
              {
                key: "getStoreId",
                value: function () {
                  return this.clientId;
                },
              },
              {
                key: "getDeviceId",
                value: function () {
                  return this.deviceId;
                },
              },
              {
                key: "getCustomerId",
                value: function () {
                  return this.customerId;
                },
              },
            ]) && Kr(e.prototype, r),
            n && Kr(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function Zr(t) {
          return (
            (Zr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Zr(t)
          );
        }
        function Qr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, en(n.key), n);
          }
        }
        function tn(t, e, r) {
          return (
            (e = en(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function en(t) {
          var e = (function (t, e) {
            if ("object" !== Zr(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== Zr(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Zr(e) ? e : String(e);
        }
        var rn = (function () {
          function t() {
            var e = (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).filter;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              tn(this, "isIntersected", !1),
              tn(this, "isMutated", !1),
              (this.filter = e);
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
              {
                key: "checkFilter",
                value: function (t) {
                  return (this.filter && this.filter(t)) || !this.filter;
                },
              },
              {
                key: "onIntersection",
                value: function (t) {
                  var e;
                  null === (e = this.iObserver) ||
                    void 0 === e ||
                    e.disconnect(),
                    (this.isIntersected = !0),
                    this.isMutated && this.isIntersected && t();
                },
              },
              {
                key: "onMutation",
                value: function (t) {
                  var e;
                  null === (e = this.mObserver) ||
                    void 0 === e ||
                    e.disconnect(),
                    (this.isMutated = !0),
                    this.isMutated && this.isIntersected && t();
                },
              },
              {
                key: "observeWithIntersectionObserver",
                value: function (t, e) {
                  var r = this;
                  (this.iObserver = new IntersectionObserver(
                    function (n) {
                      return n.forEach(function (n) {
                        n.isIntersecting &&
                          r.onIntersection(function () {
                            return e(t);
                          });
                      });
                    },
                    { threshold: 0.5 },
                  )),
                    this.iObserver.observe(t),
                    this.filter
                      ? ((this.mObserver = new MutationObserver(function () {
                          r.checkFilter(t) &&
                            r.onMutation(function () {
                              return e(t);
                            });
                        })),
                        this.mObserver.observe(t, { attributes: !0 }))
                      : this.onMutation(function () {
                          return e(t);
                        });
                },
              },
              {
                key: "observe",
                value: function (e) {
                  return this.observeWithIntersectionObserver(e, function (e) {
                    return e.dispatchEvent(
                      new CustomEvent(t.IMPRESSION_EVENT, { bubbles: !0 }),
                    );
                  });
                },
              },
              {
                key: "disconnect",
                value: function () {
                  var t, e;
                  null === (t = this.iObserver) ||
                    void 0 === t ||
                    t.disconnect(),
                    null === (e = this.mObserver) ||
                      void 0 === e ||
                      e.disconnect();
                },
              },
            ]) && Qr(e.prototype, r),
            n && Qr(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        tn(rn, "IMPRESSION_EVENT", "impression");
        const {
          Axios: nn,
          AxiosError: on,
          CanceledError: an,
          isCancel: cn,
          CancelToken: un,
          VERSION: sn,
          all: fn,
          Cancel: ln,
          isAxiosError: pn,
          spread: hn,
          toFormData: yn,
          AxiosHeaders: dn,
          HttpStatusCode: gn,
          formToJSON: bn,
          getAdapter: vn,
          mergeConfig: mn,
        } = Ht;
        var wn = {
            PLACEMENT_NOT_FOUND: 12001,
            INVALID_PLACEMENT_TYPE: 12003,
            NO_ACTIVATED_PLACEMENT: 12004,
          },
          On = "Failed to suggestions: The placement id is not registered",
          En = "Failed to suggestions: The placement is not active",
          Sn = "Failed to suggestions: An unknown error occurred";
        function jn(t) {
          return (
            (jn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            jn(t)
          );
        }
        function Pn(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                ((o = n.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== jn(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== jn(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === jn(i) ? i : String(i)),
                n,
              );
          }
          var o, i;
        }
        function An(t) {
          var e = kn();
          return function () {
            var r,
              n = In(t);
            if (e) {
              var o = In(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === jn(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(this, r);
          };
        }
        function xn(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (xn = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
              }
              function r() {
                return Tn(t, arguments, In(this).constructor);
              }
              return (
                (r.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                Rn(r, t)
              );
            }),
            xn(t)
          );
        }
        function Tn(t, e, r) {
          return (
            (Tn = kn()
              ? Reflect.construct.bind()
              : function (t, e, r) {
                  var n = [null];
                  n.push.apply(n, e);
                  var o = new (Function.bind.apply(t, n))();
                  return r && Rn(o, r.prototype), o;
                }),
            Tn.apply(null, arguments)
          );
        }
        function kn() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function Rn(t, e) {
          return (
            (Rn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Rn(t, e)
          );
        }
        function In(t) {
          return (
            (In = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            In(t)
          );
        }
        var _n = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Rn(t, e);
          })(i, t);
          var e,
            r,
            n,
            o = An(i);
          function i(t, e) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((r = o.call(this)).statusCode = t),
              (r.message = e),
              r
            );
          }
          return (
            (e = i),
            r && Pn(e.prototype, r),
            n && Pn(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(xn(Error));
        function Cn(t) {
          return (
            (Cn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Cn(t)
          );
        }
        function Ln(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Nn(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ln(Object(r), !0).forEach(function (e) {
                  Bn(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : Ln(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function Bn(t, e, r) {
          return (
            (e = qn(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function Fn() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Fn =
            function () {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function s(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var i = e && e.prototype instanceof b ? e : b,
              a = Object.create(i.prototype),
              c = new R(n || []);
            return o(a, "_invoke", { value: A(t, r, c) }), a;
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            h = "suspendedYield",
            y = "executing",
            d = "completed",
            g = {};
          function b() {}
          function v() {}
          function m() {}
          var w = {};
          s(w, a, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            E = O && O(O(I([])));
          E && E !== r && n.call(E, a) && (w = E);
          var S = (m.prototype = b.prototype = Object.create(w));
          function j(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function P(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" == Cn(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      },
                    );
              }
              c(u.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function A(e, r, n) {
            var o = p;
            return function (i, a) {
              if (o === y) throw new Error("Generator is already running");
              if (o === d) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = x(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = d), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var s = l(e, r, n);
                if ("normal" === s.type) {
                  if (((o = n.done ? d : h), s.arg === g)) continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((o = d), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function x(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  x(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                g
              );
            var i = l(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function T(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function k(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function R(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(T, this),
              this.reset(!0);
          }
          function I(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(Cn(e) + " is not iterable");
          }
          return (
            (v.prototype = m),
            o(S, "constructor", { value: m, configurable: !0 }),
            o(m, "constructor", { value: v, configurable: !0 }),
            (v.displayName = s(m, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(S)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            j(P.prototype),
            s(P.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new P(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            j(S),
            s(S, u, "Generator"),
            s(S, a, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = I),
            (R.prototype = {
              constructor: R,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), k(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      k(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: I(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        }
        function Un(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void r(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function Dn(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                Un(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Un(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function Mn(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, qn(n.key), n);
          }
        }
        function qn(t) {
          var e = (function (t, e) {
            if ("object" !== Cn(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== Cn(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Cn(e) ? e : String(e);
        }
        var Gn = (function () {
            function t(e) {
              var r = e.adcioCore,
                n = e.apiEndpoint;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.adcioCore = r),
                (this.apiConfig = new Me({ basePath: n }));
            }
            var e, r, n, o, i, a;
            return (
              (e = t),
              (r = [
                {
                  key: "handleError",
                  value: function (t) {
                    var e, r, n, o, i;
                    if (!pn(t) || !t.response) throw t;
                    if (
                      400 ===
                      (null === (e = t.response) || void 0 === e
                        ? void 0
                        : e.status)
                    )
                      throw new _n(
                        null === (i = t.response) || void 0 === i
                          ? void 0
                          : i.status,
                        t.response.data.message,
                      );
                    switch (Number(t.response.data.message)) {
                      case wn.PLACEMENT_NOT_FOUND:
                        throw new _n(
                          null === (r = t.response) || void 0 === r
                            ? void 0
                            : r.status,
                          On,
                        );
                      case wn.NO_ACTIVATED_PLACEMENT:
                        throw new _n(
                          null === (n = t.response) || void 0 === n
                            ? void 0
                            : n.status,
                          En,
                        );
                      default:
                        throw new _n(
                          null === (o = t.response) || void 0 === o
                            ? void 0
                            : o.status,
                          Sn,
                        );
                    }
                  },
                },
                {
                  key: "fetchPlacements",
                  value:
                    ((a = Dn(
                      Fn().mark(function t(e) {
                        var r, n;
                        return Fn().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    new Ne(
                                      this.apiConfig,
                                    ).pageControllerFetchActivePlacements(
                                      e.pageName,
                                      this.adcioCore.getClientId(),
                                    )
                                  );
                                case 3:
                                  return (
                                    (r = t.sent),
                                    (n = r.data),
                                    t.abrupt("return", n)
                                  );
                                case 8:
                                  (t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    this.handleError(t.t0);
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 8]],
                        );
                      }),
                    )),
                    function (t) {
                      return a.apply(this, arguments);
                    }),
                },
                {
                  key: "createSuggestion",
                  value:
                    ((i = Dn(
                      Fn().mark(function t(e) {
                        var r, n;
                        return Fn().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    new Fe(
                                      this.apiConfig,
                                    ).suggestionControllerSuggest(
                                      Nn(
                                        {
                                          customerId:
                                            this.adcioCore.getCustomerId(),
                                          sessionId:
                                            this.adcioCore.getSessionId(),
                                          deviceId:
                                            this.adcioCore.getDeviceId(),
                                        },
                                        e,
                                      ),
                                    )
                                  );
                                case 3:
                                  return (
                                    (r = t.sent),
                                    (n = r.data),
                                    t.abrupt("return", n)
                                  );
                                case 8:
                                  (t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    this.handleError(t.t0);
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 8]],
                        );
                      }),
                    )),
                    function (t) {
                      return i.apply(this, arguments);
                    }),
                },
                {
                  key: "createSuggestionProducts",
                  value:
                    ((o = Dn(
                      Fn().mark(function t(e) {
                        var r, n;
                        return Fn().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    new Fe(
                                      this.apiConfig,
                                    ).suggestionControllerSuggestProducts(
                                      Nn(
                                        {
                                          customerId:
                                            this.adcioCore.getCustomerId(),
                                          sessionId:
                                            this.adcioCore.getSessionId(),
                                          deviceId:
                                            this.adcioCore.getDeviceId(),
                                        },
                                        e,
                                      ),
                                    )
                                  );
                                case 3:
                                  return (
                                    (r = t.sent),
                                    (n = r.data),
                                    t.abrupt("return", n)
                                  );
                                case 8:
                                  (t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    this.handleError(t.t0);
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 8]],
                        );
                      }),
                    )),
                    function (t) {
                      return o.apply(this, arguments);
                    }),
                },
              ]),
              r && Mn(e.prototype, r),
              n && Mn(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })(),
          $n = r(108);
        function zn(t) {
          return (
            (zn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            zn(t)
          );
        }
        function Vn(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, Wn(n.key), n);
          }
        }
        function Wn(t) {
          var e = (function (t, e) {
            if ("object" !== zn(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== zn(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === zn(e) ? e : String(e);
        }
        var Jn = (function () {
            function t(e) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (function (t, e, r) {
                  (e = Wn(e)) in t
                    ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = r);
                })(this, "key", "");
              var r = e.key;
              (this.key = r), (this.carts = []);
            }
            var e, r, n;
            return (
              (e = t),
              (r = [
                {
                  key: "getOrSet",
                  value: function () {
                    try {
                      var t = JSON.parse(
                        localStorage.getItem(this.key) || "null",
                      );
                      if (!t || !Array.isArray(t.carts))
                        throw new Error("Invalid data");
                      this.carts = t.carts;
                    } catch (t) {
                      $n.warn("Failed to load adcio tracker storage: ", t),
                        (this.carts = []);
                    }
                    return this.carts;
                  },
                },
                {
                  key: "get",
                  value: function () {
                    return this.carts;
                  },
                },
                {
                  key: "set",
                  value: function (t) {
                    (this.carts = t),
                      localStorage.setItem(
                        this.key,
                        JSON.stringify({ carts: this.carts }),
                      );
                  },
                },
              ]) && Vn(e.prototype, r),
              n && Vn(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })(),
          Hn = r(108);
        function Yn(t) {
          return (
            (Yn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Yn(t)
          );
        }
        function Kn(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Xn(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Xn(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return Xn(t, e);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function Xn(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        function Zn() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Zn =
            function () {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function s(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var i = e && e.prototype instanceof b ? e : b,
              a = Object.create(i.prototype),
              c = new R(n || []);
            return o(a, "_invoke", { value: A(t, r, c) }), a;
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            h = "suspendedYield",
            y = "executing",
            d = "completed",
            g = {};
          function b() {}
          function v() {}
          function m() {}
          var w = {};
          s(w, a, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            E = O && O(O(I([])));
          E && E !== r && n.call(E, a) && (w = E);
          var S = (m.prototype = b.prototype = Object.create(w));
          function j(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function P(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" == Yn(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      },
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      },
                    );
              }
              c(u.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function A(e, r, n) {
            var o = p;
            return function (i, a) {
              if (o === y) throw new Error("Generator is already running");
              if (o === d) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = x(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === p) throw ((o = d), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = y;
                var s = l(e, r, n);
                if ("normal" === s.type) {
                  if (((o = n.done ? d : h), s.arg === g)) continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((o = d), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function x(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  x(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                g
              );
            var i = l(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function T(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function k(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function R(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(T, this),
              this.reset(!0);
          }
          function I(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(Yn(e) + " is not iterable");
          }
          return (
            (v.prototype = m),
            o(S, "constructor", { value: m, configurable: !0 }),
            o(m, "constructor", { value: v, configurable: !0 }),
            (v.displayName = s(m, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(S)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            j(P.prototype),
            s(P.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new P(f(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            j(S),
            s(S, u, "Generator"),
            s(S, a, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = I),
            (R.prototype = {
              constructor: R,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), k(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      k(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: I(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        }
        function Qn(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void r(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function to(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                Qn(i, n, o, a, c, "next", t);
              }
              function c(t) {
                Qn(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          };
        }
        function eo(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ro(t, e, r) {
          return (
            (e = oo(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function no(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, oo(n.key), n);
          }
        }
        function oo(t) {
          var e = (function (t, e) {
            if ("object" !== Yn(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== Yn(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Yn(e) ? e : String(e);
        }
        var io = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.config = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? eo(Object(r), !0).forEach(function (e) {
                        ro(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(r),
                        )
                      : eo(Object(r)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(r, e),
                          );
                        });
                }
                return t;
              })(
                {
                  apiEndpoint: "https://api.adcio.ai",
                  receiverEndpoint: "https://receiver.adcio.ai",
                },
                e,
              )),
              (this.adcioCore = new Xr({
                clientId: this.config.clientId,
                customerId: this.config.customerId,
              })),
              (this.adcioPlacement = new Gn({
                adcioCore: this.adcioCore,
                apiEndpoint: this.config.apiEndpoint,
              })),
              (this.adcioAnalytics = new Dr({
                adcioCore: this.adcioCore,
                receiverEndpoint: this.config.receiverEndpoint,
              }));
          }
          var e, r, n, o, i, a, c, u, s, f;
          return (
            (e = t),
            (r = [
              {
                key: "onPageView",
                value: function (t) {
                  return this.adcioAnalytics.onPageView(t);
                },
              },
              {
                key: "onImpression",
                value: function (t) {
                  return this.adcioAnalytics.onImpression(t);
                },
              },
              {
                key: "onClick",
                value: function (t) {
                  return this.adcioAnalytics.onClick(t);
                },
              },
              {
                key: "onAddToCart",
                value: function (t) {
                  return this.adcioAnalytics.onAddToCart(t);
                },
              },
              {
                key: "onPurchase",
                value: function (t) {
                  return this.adcioAnalytics.onPurchase(t);
                },
              },
              {
                key: "observeImpression",
                value: function (t) {
                  return new rn({ filter: t.filter }).observe(t.element);
                },
              },
              {
                key: "fetchPlacements",
                value:
                  ((f = to(
                    Zn().mark(function t(e) {
                      return Zn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this.adcioPlacement.fetchPlacements(e),
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return f.apply(this, arguments);
                  }),
              },
              {
                key: "createSuggestion",
                value:
                  ((s = to(
                    Zn().mark(function t(e) {
                      return Zn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this.adcioPlacement.createSuggestion(e),
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: "createSuggestionProducts",
                value:
                  ((u = to(
                    Zn().mark(function t(e) {
                      return Zn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this.adcioPlacement.createSuggestionProducts(
                                    e,
                                  ),
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: "collectLogs",
                value:
                  ((c = to(
                    Zn().mark(function t(e) {
                      var r;
                      return Zn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.init();
                              case 2:
                                return (
                                  (t.prev = 2), (t.next = 5), e.getCustomer()
                                );
                              case 5:
                                (r = t.sent) &&
                                  this.adcioCore.setCustomerId(r.id),
                                  (t.next = 12);
                                break;
                              case 9:
                                (t.prev = 9),
                                  (t.t0 = t.catch(2)),
                                  Hn.warn("Failed to get customer id: ", t.t0);
                              case 12:
                                return (
                                  (t.t1 = Promise),
                                  (t.t2 = []),
                                  (t.t3 = Kn),
                                  (t.next = 17),
                                  this.handleView(e)
                                );
                              case 17:
                                return (
                                  (t.t4 = t.sent),
                                  (t.t5 = (0, t.t3)(t.t4)),
                                  (t.t6 = Kn),
                                  (t.next = 22),
                                  this.handleCarts(e)
                                );
                              case 22:
                                return (
                                  (t.t7 = t.sent),
                                  (t.t8 = (0, t.t6)(t.t7)),
                                  (t.t9 = Kn),
                                  (t.next = 27),
                                  this.handleOrder(e)
                                );
                              case 27:
                                return (
                                  (t.t10 = t.sent),
                                  (t.t11 = (0, t.t9)(t.t10)),
                                  (t.t12 = t.t2.concat.call(
                                    t.t2,
                                    t.t5,
                                    t.t8,
                                    t.t11,
                                  )),
                                  t.abrupt(
                                    "return",
                                    t.t1.allSettled.call(t.t1, t.t12),
                                  )
                                );
                              case 31:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 9]],
                      );
                    }),
                  )),
                  function (t) {
                    return c.apply(this, arguments);
                  }),
              },
              {
                key: "handleView",
                value:
                  ((a = to(
                    Zn().mark(function t(e) {
                      var r, n;
                      return Zn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.getProduct();
                              case 2:
                                return (
                                  (r = t.sent), (t.next = 5), e.getCategory()
                                );
                              case 5:
                                if (
                                  ((n = t.sent),
                                  null != r &&
                                    r.idOnStore &&
                                    null != n &&
                                    n.idOnStore)
                                ) {
                                  t.next = 8;
                                  break;
                                }
                                return t.abrupt("return", []);
                              case 8:
                                return t.abrupt("return", [
                                  this.onPageView({
                                    productIdOnStore: r.idOnStore,
                                    categoryIdOnStore: n.idOnStore,
                                  }),
                                ]);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "handleCarts",
                value:
                  ((i = to(
                    Zn().mark(function t(e) {
                      var r,
                        n,
                        o,
                        i,
                        a = this;
                      return Zn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.getCarts();
                              case 2:
                                if ((r = t.sent)) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return", []);
                              case 5:
                                if (
                                  ((n = new Jn({
                                    key: "adcio-carts-".concat(
                                      this.adcioCore.getClientId(),
                                    ),
                                  })),
                                  (o = n.getOrSet()),
                                  n.set(r),
                                  0 !==
                                    (i = r.filter(function (t) {
                                      return !o.find(function (e) {
                                        return e.id === t.id;
                                      });
                                    })).length)
                                ) {
                                  t.next = 11;
                                  break;
                                }
                                return t.abrupt("return", []);
                              case 11:
                                return t.abrupt(
                                  "return",
                                  i.map(function (t) {
                                    return a.onAddToCart({
                                      cartId: t.id,
                                      productIdOnStore: t.productIdOnStore,
                                    });
                                  }),
                                );
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "handleOrder",
                value:
                  ((o = to(
                    Zn().mark(function t(e) {
                      var r,
                        n = this;
                      return Zn().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), e.getOrder();
                            case 2:
                              if ((r = t.sent)) {
                                t.next = 5;
                                break;
                              }
                              return t.abrupt("return", []);
                            case 5:
                              return t.abrupt(
                                "return",
                                r.products.map(function (t) {
                                  return n.onPurchase({
                                    orderId: r.id,
                                    amount: Number(
                                      t.subTotalPrice || t.price * t.quantity,
                                    ),
                                    quantity: t.quantity,
                                    productIdOnStore: t.idOnStore,
                                  });
                                }),
                              );
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function (t) {
                    return o.apply(this, arguments);
                  }),
              },
            ]),
            r && no(e.prototype, r),
            n && no(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function ao(t) {
          return (
            (ao =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ao(t)
          );
        }
        var co = ["tag", "children"];
        function uo(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function so(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? uo(Object(r), !0).forEach(function (e) {
                  fo(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : uo(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        }
        function fo(t, e, r) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== ao(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" !== ao(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(t, "string");
              return "symbol" === ao(e) ? e : String(e);
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function lo(t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        }
        function po(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  i,
                  a,
                  c = [],
                  u = !0,
                  s = !1;
                try {
                  if (((i = (r = r.call(t)).next), 0 === e)) {
                    if (Object(r) !== r) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (n = i.call(r)).done) &&
                      (c.push(n.value), c.length !== e);
                      u = !0
                    );
                } catch (t) {
                  (s = !0), (o = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((a = r.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (s) throw o;
                  }
                }
                return c;
              }
            })(t, e) ||
            yo(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function ho(t, e) {
          var r =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!r) {
            if (
              Array.isArray(t) ||
              (r = yo(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              r && (t = r);
              var n = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return n >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[n++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var i,
            a = !0,
            c = !1;
          return {
            s: function () {
              r = r.call(t);
            },
            n: function () {
              var t = r.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (c = !0), (i = t);
            },
            f: function () {
              try {
                a || null == r.return || r.return();
              } finally {
                if (c) throw i;
              }
            },
          };
        }
        function yo(t, e) {
          if (t) {
            if ("string" == typeof t) return go(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? go(t, e)
                  : void 0
            );
          }
        }
        function go(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n;
        }
        var bo = function () {
            if ("complete" !== document.readyState)
              return new Promise(function (t) {
                return document.addEventListener(
                  "DOMContentLoaded",
                  function () {
                    t(document);
                  },
                );
              });
          },
          vo = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document,
              r = arguments.length > 2 ? arguments[2] : void 0;
            return new Promise(function (n) {
              var o = e.querySelector(t);
              if (o) return n(o);
              var i = new MutationObserver(function (r, o) {
                var i = e.querySelector(t);
                if (i) return o.disconnect(), n(i);
              });
              i.observe(e, { childList: !0, subtree: !0 }),
                r &&
                  setTimeout(function () {
                    i.disconnect(), n(null);
                  }, r);
            });
          },
          mo = function (t) {
            var e = t.property,
              r = t.name,
              n = "";
            if (
              (e
                ? (n = 'meta[property="'.concat(e, '"]'))
                : r && (n = 'meta[name="'.concat(r, '"]')),
              !n)
            )
              return null;
            var o = document.querySelector(n);
            return o ? o.getAttribute("content") : null;
          },
          wo = function (t) {
            var e,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = document.createElement(t),
              o = ho(r.classList || []);
            try {
              for (o.s(); !(e = o.n()).done; ) {
                var i = e.value;
                n.classList.add(i);
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            for (
              var a = 0, c = Object.entries(r.attributes || {});
              a < c.length;
              a++
            ) {
              var u = po(c[a], 2),
                s = u[0],
                f = u[1];
              n.setAttribute(s, f);
            }
            return (
              r.textContent && (n.textContent = r.textContent),
              r.parent && r.parent.appendChild(n),
              n
            );
          },
          Oo = function t(e) {
            var r,
              n = e.tag,
              o = e.children,
              i = lo(e, co),
              a = wo(n, i),
              c = ho(o || []);
            try {
              for (c.s(); !(r = c.n()).done; ) {
                t(so(so({}, r.value), {}, { parent: a }));
              }
            } catch (t) {
              c.e(t);
            } finally {
              c.f();
            }
            return a;
          },
          Eo = r(108);
        function So(t) {
          return (
            (So =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            So(t)
          );
        }
        function jo(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                t,
                ((o = n.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== So(t) || null === t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== So(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === So(i) ? i : String(i)),
                n,
              );
          }
          var o, i;
        }
        var Po = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.api = window.CAFE24API),
                (this.data = window.CAFE24),
                (this.authorized = !1);
            }
            var e, r, n;
            return (
              (e = t),
              (r = [
                {
                  key: "init",
                  value: function () {
                    this.api = window.CAFE24API;
                    try {
                      this.api.init({
                        client_id: "8HE5BizGD9agkHIObMfXRF",
                        version: "2023-06-01",
                      }),
                        (this.authorized = !0);
                    } catch (t) {
                      Eo.warn("Failed to initialize cafe24 api", t),
                        (this.authorized = !1);
                    }
                  },
                },
                {
                  key: "getCustomer",
                  value: function () {
                    var t = this;
                    return new Promise(function (e, r) {
                      t.authorized
                        ? t.api.getCustomerInfo(function (t, n) {
                            t ? r(t) : e({ id: n.customer.member_id });
                          })
                        : t.api.getCustomerIDInfo(function (t, n) {
                            t
                              ? r(t)
                              : n.id.member_id
                                ? e({ id: n.id.member_id })
                                : e(null);
                          });
                    });
                  },
                },
                {
                  key: "getProduct",
                  value: function () {
                    var t = mo({ property: "product:productId" });
                    return t ? { idOnStore: t } : null;
                  },
                },
                {
                  key: "getCategory",
                  value: function () {
                    var t,
                      e =
                        ((t = "cate_no"),
                        new URL(window.location.href).searchParams.get(t));
                    return e ? { idOnStore: e } : null;
                  },
                },
                {
                  key: "getCarts",
                  value: function () {
                    var t = this;
                    return new Promise(function (e, r) {
                      t.api.getCartList(function (t, n) {
                        t
                          ? r(t)
                          : n.carts
                            ? e(
                                n.carts.map(function (t) {
                                  return {
                                    id: "".concat(t.basket_product_no),
                                    productIdOnStore: "".concat(t.product_no),
                                    productPrice: t.product_price,
                                    quantity: Number(t.quantity),
                                  };
                                }),
                              )
                            : e(null);
                      });
                    });
                  },
                },
                {
                  key: "getOrder",
                  value: function () {
                    var t = this;
                    return new Promise(function (e) {
                      var r = t.data.FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA,
                        n = r.order_id,
                        o = r.order_product,
                        i = r.payed_amount,
                        a = r.total_basic_ship_fee;
                      e(
                        n && o && void 0 !== i
                          ? {
                              id: n,
                              products: o.map(function (t) {
                                return {
                                  idOnStore: "".concat(t.product_no),
                                  quantity: t.quantity,
                                  price: t.product_price,
                                  subTotalPrice: t.sub_total_price,
                                  sumTotalOptPrice: t.sum_total_opt_price,
                                };
                              }),
                              amount: a ? i - a : i,
                            }
                          : null,
                      );
                    });
                  },
                },
              ]),
              r && jo(e.prototype, r),
              n && jo(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })(),
          Ao = { cafe24: new Po() };
      })(),
      n
    );
  })(),
);
//# sourceMappingURL=adcio.js.map
