/*! For license information please see embeds-b8f2e61b88152188e57d.js.LICENSE */
!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "//cdn.podia.com/packs/"),
    n((n.s = 749));
})({
  212: function (t, e) {
    function n(t) {
      return (n =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" === typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (i) {
      "object" === ("undefined" === typeof window ? "undefined" : n(window)) &&
        (r = window);
    }
    t.exports = r;
  },
  292: function (t, e) {
    var n,
      r,
      i = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" === typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        r = "function" === typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var u,
      c = [],
      l = !1,
      f = -1;
    function d() {
      l &&
        u &&
        ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && h());
    }
    function h() {
      if (!l) {
        var t = s(d);
        l = !0;
        for (var e = c.length; e; ) {
          for (u = c, c = []; ++f < e; ) u && u[f].run();
          (f = -1), (e = c.length);
        }
        (u = null),
          (l = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
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
    function p(t, e) {
      (this.fun = t), (this.array = e);
    }
    function y() {}
    (i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new p(t, e)), 1 !== c.length || l || s(h);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = y),
      (i.addListener = y),
      (i.once = y),
      (i.off = y),
      (i.removeListener = y),
      (i.removeAllListeners = y),
      (i.emit = y),
      (i.prependListener = y),
      (i.prependOnceListener = y),
      (i.listeners = function (t) {
        return [];
      }),
      (i.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  501: function (t, e) {
    !(function () {
      if ("function" === typeof window.CustomEvent) return !1;
      function t(t, e) {
        e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
      }
      (t.prototype = window.Event.prototype), (window.CustomEvent = t);
    })();
  },
  523: function (t, e, n) {
    "use strict";
    t.exports = n(524).polyfill();
  },
  524: function (t, e, n) {
    (function (r, i) {
      var o, a, s;
      function u(t) {
        return (u =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      (s = function () {
        "use strict";
        function t(t) {
          return "function" === typeof t;
        }
        var e = Array.isArray
            ? Array.isArray
            : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t);
              },
          n = 0,
          o = void 0,
          a = void 0,
          s = function (t, e) {
            (y[n] = t), (y[n + 1] = e), 2 === (n += 2) && (a ? a(m) : _());
          },
          c = "undefined" !== typeof window ? window : void 0,
          l = c || {},
          f = l.MutationObserver || l.WebKitMutationObserver,
          d =
            "undefined" === typeof self &&
            "undefined" !== typeof r &&
            "[object process]" === {}.toString.call(r),
          h =
            "undefined" !== typeof Uint8ClampedArray &&
            "undefined" !== typeof importScripts &&
            "undefined" !== typeof MessageChannel;
        function p() {
          var t = setTimeout;
          return function () {
            return t(m, 1);
          };
        }
        var y = new Array(1e3);
        function m() {
          for (var t = 0; t < n; t += 2)
            (0, y[t])(y[t + 1]), (y[t] = void 0), (y[t + 1] = void 0);
          n = 0;
        }
        var v,
          b,
          w,
          g,
          _ = void 0;
        function E(t, e) {
          var n = this,
            r = new this.constructor(S);
          void 0 === r[T] && U(r);
          var i = n._state;
          if (i) {
            var o = arguments[i - 1];
            s(function () {
              return z(i, r, o, n._result);
            });
          } else F(n, r, t, e);
          return r;
        }
        function k(t) {
          if (t && "object" === u(t) && t.constructor === this) return t;
          var e = new this(S);
          return O(e, t), e;
        }
        d
          ? (_ = function () {
              return r.nextTick(m);
            })
          : f
          ? ((b = 0),
            (w = new f(m)),
            (g = document.createTextNode("")),
            w.observe(g, { characterData: !0 }),
            (_ = function () {
              g.data = b = ++b % 2;
            }))
          : h
          ? (((v = new MessageChannel()).port1.onmessage = m),
            (_ = function () {
              return v.port2.postMessage(0);
            }))
          : (_ =
              void 0 === c
                ? (function () {
                    try {
                      var t = Function("return this")().require("vertx");
                      return "undefined" !==
                        typeof (o = t.runOnLoop || t.runOnContext)
                        ? function () {
                            o(m);
                          }
                        : p();
                    } catch (e) {
                      return p();
                    }
                  })()
                : p());
        var T = Math.random().toString(36).substring(2);
        function S() {}
        var A = void 0,
          C = 1,
          P = 2;
        function j(e, n, r) {
          n.constructor === e.constructor &&
          r === E &&
          n.constructor.resolve === k
            ? (function (t, e) {
                e._state === C
                  ? x(t, e._result)
                  : e._state === P
                  ? M(t, e._result)
                  : F(
                      e,
                      void 0,
                      function (e) {
                        return O(t, e);
                      },
                      function (e) {
                        return M(t, e);
                      }
                    );
              })(e, n)
            : void 0 === r
            ? x(e, n)
            : t(r)
            ? (function (t, e, n) {
                s(function (t) {
                  var r = !1,
                    i = (function (t, e, n, r) {
                      try {
                        t.call(e, n, r);
                      } catch (i) {
                        return i;
                      }
                    })(
                      n,
                      e,
                      function (n) {
                        r || ((r = !0), e !== n ? O(t, n) : x(t, n));
                      },
                      function (e) {
                        r || ((r = !0), M(t, e));
                      },
                      t._label
                    );
                  !r && i && ((r = !0), M(t, i));
                }, t);
              })(e, n, r)
            : x(e, n);
        }
        function O(t, e) {
          if (t === e)
            M(t, new TypeError("You cannot resolve a promise with itself"));
          else if (
            ((i = u((r = e))),
            null === r || ("object" !== i && "function" !== i))
          )
            x(t, e);
          else {
            var n = void 0;
            try {
              n = e.then;
            } catch (o) {
              return void M(t, o);
            }
            j(t, e, n);
          }
          var r, i;
        }
        function L(t) {
          t._onerror && t._onerror(t._result), R(t);
        }
        function x(t, e) {
          t._state === A &&
            ((t._result = e),
            (t._state = C),
            0 !== t._subscribers.length && s(R, t));
        }
        function M(t, e) {
          t._state === A && ((t._state = P), (t._result = e), s(L, t));
        }
        function F(t, e, n, r) {
          var i = t._subscribers,
            o = i.length;
          (t._onerror = null),
            (i[o] = e),
            (i[o + C] = n),
            (i[o + P] = r),
            0 === o && t._state && s(R, t);
        }
        function R(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (
              var r = void 0, i = void 0, o = t._result, a = 0;
              a < e.length;
              a += 3
            )
              (r = e[a]), (i = e[a + n]), r ? z(n, r, i, o) : i(o);
            t._subscribers.length = 0;
          }
        }
        function z(e, n, r, i) {
          var o = t(r),
            a = void 0,
            s = void 0,
            u = !0;
          if (o) {
            try {
              a = r(i);
            } catch (c) {
              (u = !1), (s = c);
            }
            if (n === a)
              return void M(
                n,
                new TypeError(
                  "A promises callback cannot return that same promise."
                )
              );
          } else a = i;
          n._state !== A ||
            (o && u
              ? O(n, a)
              : !1 === u
              ? M(n, s)
              : e === C
              ? x(n, a)
              : e === P && M(n, a));
        }
        var I = 0;
        function U(t) {
          (t[T] = I++),
            (t._state = void 0),
            (t._result = void 0),
            (t._subscribers = []);
        }
        var q = (function () {
            function t(t, n) {
              (this._instanceConstructor = t),
                (this.promise = new t(S)),
                this.promise[T] || U(this.promise),
                e(n)
                  ? ((this.length = n.length),
                    (this._remaining = n.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? x(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(n),
                        0 === this._remaining && x(this.promise, this._result)))
                  : M(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (t.prototype._enumerate = function (t) {
                for (var e = 0; this._state === A && e < t.length; e++)
                  this._eachEntry(t[e], e);
              }),
              (t.prototype._eachEntry = function (t, e) {
                var n = this._instanceConstructor,
                  r = n.resolve;
                if (r === k) {
                  var i = void 0,
                    o = void 0,
                    a = !1;
                  try {
                    i = t.then;
                  } catch (u) {
                    (a = !0), (o = u);
                  }
                  if (i === E && t._state !== A)
                    this._settledAt(t._state, e, t._result);
                  else if ("function" !== typeof i)
                    this._remaining--, (this._result[e] = t);
                  else if (n === D) {
                    var s = new n(S);
                    a ? M(s, o) : j(s, t, i), this._willSettleAt(s, e);
                  } else
                    this._willSettleAt(
                      new n(function (e) {
                        return e(t);
                      }),
                      e
                    );
                } else this._willSettleAt(r(t), e);
              }),
              (t.prototype._settledAt = function (t, e, n) {
                var r = this.promise;
                r._state === A &&
                  (this._remaining--,
                  t === P ? M(r, n) : (this._result[e] = n)),
                  0 === this._remaining && x(r, this._result);
              }),
              (t.prototype._willSettleAt = function (t, e) {
                var n = this;
                F(
                  t,
                  void 0,
                  function (t) {
                    return n._settledAt(C, e, t);
                  },
                  function (t) {
                    return n._settledAt(P, e, t);
                  }
                );
              }),
              t
            );
          })(),
          D = (function () {
            function e(t) {
              (this[T] = I++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                S !== t &&
                  ("function" !== typeof t &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof e
                    ? (function (t, e) {
                        try {
                          e(
                            function (e) {
                              O(t, e);
                            },
                            function (e) {
                              M(t, e);
                            }
                          );
                        } catch (n) {
                          M(t, n);
                        }
                      })(this, t)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (e.prototype.catch = function (t) {
                return this.then(null, t);
              }),
              (e.prototype.finally = function (e) {
                var n = this.constructor;
                return t(e)
                  ? this.then(
                      function (t) {
                        return n.resolve(e()).then(function () {
                          return t;
                        });
                      },
                      function (t) {
                        return n.resolve(e()).then(function () {
                          throw t;
                        });
                      }
                    )
                  : this.then(e, e);
              }),
              e
            );
          })();
        return (
          (D.prototype.then = E),
          (D.all = function (t) {
            return new q(this, t).promise;
          }),
          (D.race = function (t) {
            var n = this;
            return e(t)
              ? new n(function (e, r) {
                  for (var i = t.length, o = 0; o < i; o++)
                    n.resolve(t[o]).then(e, r);
                })
              : new n(function (t, e) {
                  return e(new TypeError("You must pass an array to race."));
                });
          }),
          (D.resolve = k),
          (D.reject = function (t) {
            var e = new this(S);
            return M(e, t), e;
          }),
          (D._setScheduler = function (t) {
            a = t;
          }),
          (D._setAsap = function (t) {
            s = t;
          }),
          (D._asap = s),
          (D.polyfill = function () {
            var t = void 0;
            if ("undefined" !== typeof i) t = i;
            else if ("undefined" !== typeof self) t = self;
            else
              try {
                t = Function("return this")();
              } catch (r) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var e = t.Promise;
            if (e) {
              var n = null;
              try {
                n = Object.prototype.toString.call(e.resolve());
              } catch (r) {}
              if ("[object Promise]" === n && !e.cast) return;
            }
            t.Promise = D;
          }),
          (D.Promise = D),
          D
        );
      }),
        "object" === u(e) && "undefined" !== typeof t
          ? (t.exports = s())
          : void 0 ===
              (a = "function" === typeof (o = s) ? o.call(e, n, e, t) : o) ||
            (t.exports = a);
    }.call(this, n(292), n(212)));
  },
  693: function (t, e, n) {},
  749: function (t, e, n) {
    "use strict";
    n.r(e);
    n(501), n(523), n(693);
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var i = function (t) {
        var e = t.querySelector("meta[name=viewport]");
        return (
          e ||
            (((e = t.createElement("meta")).name = "viewport"),
            (e.content = ""),
            t.head.append(e)),
          (e.dataset.initial = e.content),
          (e.dataset.podia =
            "width=device-width, initial-scale=1, user-scalable=0"),
          e
        );
      },
      o = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.document = e),
            (this.tag = i(e)),
            (this.performSwap =
              this.tag.dataset.initial !== this.tag.dataset.podia);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "podia",
              value: function () {
                this.mode = "podia";
              },
            },
            {
              key: "restore",
              value: function () {
                this.mode = "initial";
              },
            },
            {
              key: "repaint",
              value: function () {
                (this.document.body.style.opacity = 0.9999),
                  setTimeout(function () {
                    this.document.body.style.opacity = 1;
                  }, 1);
              },
            },
            {
              key: "mode",
              set: function (t) {
                this.performSwap &&
                  ((this.tag.content = this.tag.dataset[t]), this.repaint());
              },
            },
          ]) && r(e.prototype, n),
          o && r(e, o),
          t
        );
      })();
    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var s = function (t) {
        var e = t.createElement("div");
        return (
          e.classList.add("podia-loader"),
          e.appendChild(t.createElement("div")),
          e.appendChild(t.createElement("div")),
          e.appendChild(t.createElement("div")),
          e
        );
      },
      u = function (t, e) {
        var n = t.createElement("div"),
          r = t.createElement("div"),
          i = t.createElement("a");
        return (
          n.classList.add("podia-error"),
          (r.textContent = "Sorry, something went wrong \ud83d\ude22"),
          (i.textContent = e.textContent + " \u2192"),
          (i.href = e.href),
          (i.target = "_blank"),
          n.appendChild(r),
          n.appendChild(i),
          n
        );
      },
      c = function (t) {
        var e = t.createElement("div");
        return e.classList.add("podia-overlay"), e;
      },
      l = (function () {
        function t(e, n) {
          var r = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.tag = c(e)),
            (this.spinner = s(e)),
            (this.error = u(e, n)),
            this.tag.appendChild(this.spinner),
            this.tag.appendChild(this.error),
            e.body.appendChild(this.tag),
            setTimeout(function () {
              return (r.tag.style.opacity = 1);
            }, 0);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "wait",
              value: function () {
                (this.spinner.style.display = "block"),
                  (this.error.style.display = "none");
              },
            },
            {
              key: "finish",
              value: function () {
                (this.spinner.style.display = "none"),
                  (this.error.style.display = "none");
              },
            },
            {
              key: "fail",
              value: function () {
                (this.spinner.style.display = "none"),
                  (this.error.style.display = "inline-block");
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                (this.tag.style.opacity = 0),
                  setTimeout(function () {
                    return t.tag.remove();
                  }, 350);
              },
            },
          ]) && a(e.prototype, n),
          r && a(e, r),
          t
        );
      })();
    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var d = function (t) {
        var e = t.cloneNode(!0);
        return (e.pathname += "/embed"), e;
      },
      h = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.document = e),
            (this.tag = e.createElement("iframe")),
            (this.tag.src = d(n)),
            this.tag.classList.add("podia-embedded-checkout"),
            (this.timeout = null);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "load",
              value: function (e) {
                var n = this;
                document.body.appendChild(this.tag),
                  (this.timeout = setTimeout(function () {
                    n.destroy(), e.onError();
                  }, t.TIMEOUT));
              },
            },
            {
              key: "show",
              value: function () {
                this._cancelTimeout(), (this.tag.style.opacity = 1);
              },
            },
            {
              key: "destroy",
              value: function () {
                this._cancelTimeout(), this.tag.remove();
              },
            },
            {
              key: "_cancelTimeout",
              value: function () {
                clearTimeout(this.timeout), (this.timeout = null);
              },
            },
          ]) && f(e.prototype, n),
          r && f(e, r),
          t
        );
      })();
    h.TIMEOUT = 1e4;
    var p = h,
      y = function (t, e) {
        var n = new URLSearchParams(t.search.substring(1));
        Object.keys(e).forEach(function (t) {
          return n.set(t, e[t]);
        }),
          (t.search = n.toString());
      };
    function m(t, e) {
      return !e || ("object" !== typeof e && "function" !== typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function v(t) {
      return (v = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function b(t, e) {
      if ("function" !== typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && w(t, e);
    }
    function w(t, e) {
      return (w =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function g(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function _(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var E = function (t, e, n) {
        var r = t.cloneNode(!0);
        return (r.pathname += "/embed/".concat(e)), n && y(r, n), r;
      },
      k = (function () {
        function t(e) {
          g(this, t);
          var n = e.ownerDocument;
          (this.link = e),
            (this.tag = n.createElement("div")),
            (this.tag.style.display = "none"),
            this.tag.classList.add("podia-embedded-widget"),
            this.tag.classList.add(this.constructor.WRAPPER_CLASS);
          var r = n.createElement("iframe");
          (r.style.border = "none"),
            (r.width = r.height = 0),
            (r.widget = this),
            (r.src = E(e, this.constructor.IFRAME_PATH_SUFFIX, this.params)),
            e.parentElement.insertBefore(this.tag, e),
            this.tag.appendChild(r);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "show",
              value: function () {
                this.link.remove(), (this.tag.style.display = "block");
              },
            },
            {
              key: "params",
              get: function () {
                var t = this,
                  e = {};
                return (
                  ["coupon", "text"].forEach(function (n) {
                    t.link.dataset[n] && (e[n] = t.link.dataset[n]);
                  }),
                  e
                );
              },
            },
          ]) && _(e.prototype, n),
          r && _(e, r),
          t
        );
      })(),
      T = (function (t) {
        function e() {
          return g(this, e), m(this, v(e).apply(this, arguments));
        }
        return b(e, t), e;
      })(k);
    (T.IFRAME_PATH_SUFFIX = "button"),
      (T.WRAPPER_CLASS = "podia-button-widget");
    var S = (function (t) {
      function e() {
        return g(this, e), m(this, v(e).apply(this, arguments));
      }
      return b(e, t), e;
    })(k);
    (S.IFRAME_PATH_SUFFIX = "card"), (S.WRAPPER_CLASS = "podia-card-widget");
    var A = { button: T, card: S },
      C = function (t) {
        return new (0, A[t.dataset.podiaEmbed])(t);
      };
    function P(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function j(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    var O,
      L,
      x,
      M,
      F = function t() {
        var e = this;
        j(this, t),
          (this.promise = new Promise(function (t, n) {
            (e.reject = n), (e.resolve = t);
          }));
      },
      R = function (t) {
        var e = t.ownerDocument.createElement("iframe");
        return (
          (e.src = ""
            .concat(t.protocol, "//")
            .concat(t.host, "/embeds/cookie")),
          (e.style.width = e.style.height = e.width = e.height = 0),
          (e.style.border = "none"),
          t.ownerDocument.body.append(e),
          e
        );
      },
      z = (function () {
        function t() {
          j(this, t);
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: "initialize",
              value: function () {
                var t = this;
                window.addEventListener("message", function (e) {
                  e.data.podia &&
                    "cookie:check" === e.data.podia.message &&
                    t._resolve(e.data.podia.host, e.data.podia.hasCookieAccess);
                }),
                  (this.initialized = !0);
              },
            },
            {
              key: "check",
              value: function (t) {
                return this.checkRequired
                  ? (this.initialized || this.initialize(),
                    "undefined" === typeof this.hosts[t.host] &&
                      (this.hosts[t.host] = {
                        iframe: R(t),
                        deferred: new F(),
                      }),
                    this.hosts[t.host].deferred.promise)
                  : Promise.resolve(!0);
              },
            },
            {
              key: "_resolve",
              value: function (t, e) {
                var n = this.hosts[t];
                n.deferred.resolve(e),
                  n.iframe && n.iframe.remove(),
                  delete n.iframe;
              },
            },
          ]),
          (n = null) && P(e.prototype, n),
          r && P(e, r),
          t
        );
      })();
    (z.hosts = {}),
      (z.checkRequired =
        ((O = window.navigator.userAgent),
        /safari/i.test(O) && !/chrome/i.test(O))),
      (z.initialized = !1);
    var I = {
        start: function (t) {
          z.check(t)
            .then(function (e) {
              return e ? I.embedded(t) : I.fallback(t);
            })
            .catch(function () {
              return I.fallback(t);
            });
        },
        fallback: function (t) {
          (t.pathname += "/buy"), window.open(t.href);
        },
        embedded: function (t) {
          y(t, { embed_parent_url: window.location }),
            (x = new l(document, t)),
            (M = new p(document, t)),
            x.wait(),
            L.podia(),
            document.defaultView.focus(),
            document.addEventListener("keydown", U, !1),
            M.load({
              onError: function () {
                x.fail(),
                  x.tag.addEventListener(
                    "click",
                    function (t) {
                      t.target === x.tag && I.abort();
                    },
                    !1
                  );
              },
            });
        },
        abort: function () {
          document.removeEventListener("keydown", U),
            x.destroy(),
            M.destroy(),
            L.restore();
        },
      },
      U = function (t) {
        27 === t.keyCode && I.abort();
      };
    function q(t) {
      return [].slice
        .call(document.getElementsByTagName("iframe"))
        .filter(function (e) {
          return e.contentWindow === t.source;
        })[0];
    }
    var D,
      W = function (t) {
        var e = t.data.podia;
        if (e)
          if ("checkout:closed" === e.message)
            M.destroy(), x.destroy(), (x = null), L.restore();
          else if ("checkout:opened" === e.message)
            document.removeEventListener("keydown", U), M.show(), x.finish();
          else if ("checkout:start" === e.message) {
            var n = document.createElement("a");
            (n.href = e.product.url),
              (n.textContent = e.product.name),
              I.start(n);
          } else if ("iframe:resize" === e.message) {
            var r = document.getElementById(e.iframe.id) || q(t);
            (r.width = e.iframe.width), (r.height = e.iframe.height);
          } else if ("iframe:load" === e.message) {
            var i = q(t);
            (i.width = e.iframe.width),
              (i.height = e.iframe.height),
              i.widget.show(),
              (i.id = e.iframe.id);
          }
      },
      N = {
        initialize: function () {
          (L = new o(document)),
            document
              .querySelectorAll("a[data-podia-embed]")
              .forEach(function (t) {
                t.dataset.initialized ||
                  (z.check(t),
                  "link" === t.dataset.podiaEmbed
                    ? (function (t) {
                        t.dataset.coupon && y(t, { coupon: t.dataset.coupon }),
                          t.addEventListener(
                            "click",
                            function (e) {
                              return e.preventDefault(), I.start(t), !1;
                            },
                            !1
                          );
                      })(t)
                    : C(t),
                  (t.dataset.initialized = !0));
              }),
            window.addEventListener("message", W, !1);
        },
      };
    (window.Podia = (((D = window.Podia || {}).Embeds = N), D)),
      window.dispatchEvent(new CustomEvent("podia:embeds:ready")),
      window.addEventListener("load", Podia.Embeds.initialize, !1);
  },
});
//# sourceMappingURL=embeds-b8f2e61b88152188e57d.js.map
