import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as t,
  D as n,
  F as r,
  I as i,
  L as a,
  M as o,
  O as s,
  P as c,
  S as l,
  T as u,
  _ as d,
  c as f,
  h as p,
  j as m,
  l as h,
  o as g,
} from "./react.Bb_yyrg0.mjs";
import { T as _, a as v, r as y, t as b } from "./motion.Dq3vMtKA.mjs";
import {
  A as ee,
  B as x,
  D as te,
  G as S,
  R as ne,
  S as re,
  T as C,
  _ as w,
  _t as T,
  b as ie,
  gt as ae,
  lt as oe,
  nt as se,
  r as E,
  s as ce,
  t as le,
  tt as ue,
  w as D,
} from "./framer.cs1Z8Vda.mjs";
import { a as de, i as fe } from "./VideoController.D9ulu-ly.mjs";
import { t as pe } from "./default-utils.js__0.45.Bq6ANkX0.mjs";
function O(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function k(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function me(e, t, n) {
  return (t && k(e.prototype, t), n && k(e, n), e);
}
function he(e, t) {
  return e.indexOf(t.toLowerCase()) === 0
    ? e
    : `${t.toLowerCase()}${e.substr(0, 1).toUpperCase()}${e.substr(1)}`;
}
function A(e) {
  return !!(
    e &&
    e.nodeType === 1 &&
    `nodeName` in e &&
    e.ownerDocument &&
    e.ownerDocument.defaultView
  );
}
function j(e) {
  return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
}
function M(e) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
}
function N() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.id,
    n = e.url,
    r = t || n;
  if (!r)
    throw Error(
      `An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.`
    );
  if (j(r)) return `https://vimeo.com/${r}`;
  if (M(r)) return r.replace(`http:`, `https:`);
  throw t
    ? TypeError(`“${t}” is not a valid video id.`)
    : TypeError(`“${r}” is not a vimeo.com url.`);
}
function ge(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
  /*!
   * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */
}
function P(e, t, n) {
  var r = W.get(e.element) || {};
  (t in r || (r[t] = []), r[t].push(n), W.set(e.element, r));
}
function F(e, t) {
  return (W.get(e.element) || {})[t] || [];
}
function I(e, t, n) {
  var r = W.get(e.element) || {};
  if (!r[t]) return !0;
  if (!n) return ((r[t] = []), W.set(e.element, r), !0);
  var i = r[t].indexOf(n);
  return (i !== -1 && r[t].splice(i, 1), W.set(e.element, r), r[t] && r[t].length === 0);
}
function _e(e, t) {
  var n = F(e, t);
  if (n.length < 1) return !1;
  var r = n.shift();
  return (I(e, t, r), r);
}
function ve(e, t) {
  var n = W.get(e);
  (W.set(t, n), W.delete(e));
}
function ye(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Ee.reduce(function (t, n) {
    var r = e.getAttribute(`data-vimeo-${n}`);
    return ((r || r === ``) && (t[n] = r === `` ? 1 : r), t);
  }, t);
}
function L(e, t) {
  var n = e.html;
  if (!t) throw TypeError(`An element must be provided`);
  if (t.getAttribute(`data-vimeo-initialized`) !== null) return t.querySelector(`iframe`);
  var r = document.createElement(`div`);
  return (
    (r.innerHTML = n),
    t.appendChild(r.firstChild),
    t.setAttribute(`data-vimeo-initialized`, `true`),
    t.querySelector(`iframe`)
  );
}
function be(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (r, i) {
    if (!M(e)) throw TypeError(`“${e}” is not a vimeo.com url.`);
    var o = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(e)}`;
    for (var s in t) t.hasOwnProperty(s) && (o += `&${s}=${encodeURIComponent(t[s])}`);
    var c = `XDomainRequest` in a ? new XDomainRequest() : new XMLHttpRequest();
    (c.open(`GET`, o, !0),
      (c.onload = function () {
        if (c.status !== 404)
          if (c.status !== 403)
            try {
              var t = JSON.parse(c.responseText);
              if (t.domain_status_code === 403) {
                (L(t, n), i(Error(`“${e}” is not embeddable.`)));
                return;
              }
              r(t);
            } catch (e) {
              i(e);
            }
          else i(Error(`“${e}” is not embeddable.`));
        else i(Error(`“${e}” was not found.`));
      }),
      (c.onerror = function () {
        var e = c.status ? ` (${c.status})` : ``;
        i(Error(`There was an error fetching the embed code from Vimeo${e}.`));
      }),
      c.send());
  });
}
function xe() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    t = [].slice.call(e.querySelectorAll(`[data-vimeo-id], [data-vimeo-url]`)),
    n = function (e) {
      `console` in a &&
        console.error &&
        console.error(`There was an error creating an embed: ${e}`);
    };
  t.forEach(function (e) {
    try {
      if (e.getAttribute(`data-vimeo-defer`) !== null) return;
      var t = ye(e);
      be(N(t), t, e)
        .then(function (t) {
          return L(t, e);
        })
        .catch(n);
    } catch (e) {
      n(e);
    }
  });
}
function Se() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  a.VimeoPlayerResizeEmbeds_ ||
    ((a.VimeoPlayerResizeEmbeds_ = !0),
    a.addEventListener(`message`, function (t) {
      if (M(t.origin) && t.data && t.data.event === `spacechange`) {
        for (var n = e.querySelectorAll(`iframe`), r = 0; r < n.length; r++)
          if (n[r].contentWindow === t.source) {
            var i = n[r].parentElement;
            i.style.paddingBottom = `${t.data.data[0].bottom}px`;
            break;
          }
      }
    }));
}
function Ce(e) {
  if (typeof e == `string`)
    try {
      e = JSON.parse(e);
    } catch (e) {
      return (console.warn(e), {});
    }
  return e;
}
function R(e, t, n) {
  if (e.element.contentWindow && e.element.contentWindow.postMessage) {
    var r = { method: t };
    n !== void 0 && (r.value = n);
    var a = parseFloat(i.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, `$1`));
    (a >= 8 && a < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin));
  }
}
function we(e, t) {
  t = Ce(t);
  var n = [],
    r;
  if (t.event)
    (t.event === `error` &&
      F(e, t.data.method).forEach(function (n) {
        var r = Error(t.data.message);
        ((r.name = t.data.name), n.reject(r), I(e, t.data.method, n));
      }),
      (n = F(e, `event:${t.event}`)),
      (r = t.data));
  else if (t.method) {
    var i = _e(e, t.method);
    i && (n.push(i), (r = t.value));
  }
  n.forEach(function (t) {
    try {
      if (typeof t == `function`) {
        t.call(e, r);
        return;
      }
      t.resolve(r);
    } catch {}
  });
}
function Te() {
  var e = (function () {
      for (
        var e,
          t = [
            [
              `requestFullscreen`,
              `exitFullscreen`,
              `fullscreenElement`,
              `fullscreenEnabled`,
              `fullscreenchange`,
              `fullscreenerror`,
            ],
            [
              `webkitRequestFullscreen`,
              `webkitExitFullscreen`,
              `webkitFullscreenElement`,
              `webkitFullscreenEnabled`,
              `webkitfullscreenchange`,
              `webkitfullscreenerror`,
            ],
            [
              `webkitRequestFullScreen`,
              `webkitCancelFullScreen`,
              `webkitCurrentFullScreenElement`,
              `webkitCancelFullScreen`,
              `webkitfullscreenchange`,
              `webkitfullscreenerror`,
            ],
            [
              `mozRequestFullScreen`,
              `mozCancelFullScreen`,
              `mozFullScreenElement`,
              `mozFullScreenEnabled`,
              `mozfullscreenchange`,
              `mozfullscreenerror`,
            ],
            [
              `msRequestFullscreen`,
              `msExitFullscreen`,
              `msFullscreenElement`,
              `msFullscreenEnabled`,
              `MSFullscreenChange`,
              `MSFullscreenError`,
            ],
          ],
          n = 0,
          r = t.length,
          i = {};
        n < r;
        n++
      )
        if (((e = t[n]), e && e[1] in document)) {
          for (n = 0; n < e.length; n++) i[t[0][n]] = e[n];
          return i;
        }
      return !1;
    })(),
    t = { fullscreenchange: e.fullscreenchange, fullscreenerror: e.fullscreenerror },
    n = {
      request: function (t) {
        return new Promise(function (r, i) {
          var a = function e() {
            (n.off(`fullscreenchange`, e), r());
          };
          (n.on(`fullscreenchange`, a), (t ||= document.documentElement));
          var o = t[e.requestFullscreen]();
          o instanceof Promise && o.then(a).catch(i);
        });
      },
      exit: function () {
        return new Promise(function (t, r) {
          if (n.isFullscreen) {
            var i = function e() {
              (n.off(`fullscreenchange`, e), t());
            };
            n.on(`fullscreenchange`, i);
            var a = document[e.exitFullscreen]();
            a instanceof Promise && a.then(i).catch(r);
          } else t();
        });
      },
      on: function (e, n) {
        var r = t[e];
        r && document.addEventListener(r, n);
      },
      off: function (e, n) {
        var r = t[e];
        r && document.removeEventListener(r, n);
      },
    };
  return (
    Object.defineProperties(n, {
      isFullscreen: {
        get: function () {
          return !!document[e.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return document[e.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return !!document[e.fullscreenEnabled];
        },
      },
    }),
    n
  );
}
var z,
  B,
  V,
  H,
  U,
  W,
  Ee,
  G,
  K,
  q,
  De,
  Oe = e(() => {
    if (
      (r(),
      (z = c !== void 0 && {}.toString.call(c) === `[object global]`),
      (B = Array.prototype.indexOf !== void 0),
      (V = a !== void 0 && a.postMessage !== void 0),
      !z && (!B || !V))
    )
      throw Error(`Sorry, the Vimeo Player API is not available in this browser.`);
    ((H =
      typeof globalThis < `u`
        ? globalThis
        : a === void 0
          ? c === void 0
            ? typeof self < `u`
              ? self
              : {}
            : c
          : a),
      (function (e) {
        if (!e.WeakMap) {
          var t = Object.prototype.hasOwnProperty,
            n = function (e, t, n) {
              Object.defineProperty
                ? Object.defineProperty(e, t, { configurable: !0, writable: !0, value: n })
                : (e[t] = n);
            };
          e.WeakMap = (function () {
            function e() {
              if (this === void 0) throw TypeError(`Constructor WeakMap requires 'new'`);
              if ((n(this, `_id`, a(`_WeakMap`)), arguments.length > 0))
                throw TypeError(`WeakMap iterable is not supported`);
            }
            (n(e.prototype, `delete`, function (e) {
              if ((i(this, `delete`), !r(e))) return !1;
              var t = e[this._id];
              return t && t[0] === e ? (delete e[this._id], !0) : !1;
            }),
              n(e.prototype, `get`, function (e) {
                if ((i(this, `get`), r(e))) {
                  var t = e[this._id];
                  return t && t[0] === e ? t[1] : void 0;
                }
              }),
              n(e.prototype, `has`, function (e) {
                if ((i(this, `has`), !r(e))) return !1;
                var t = e[this._id];
                return !(!t || t[0] !== e);
              }),
              n(e.prototype, `set`, function (e, t) {
                if ((i(this, `set`), !r(e))) throw TypeError(`Invalid value used as weak map key`);
                var a = e[this._id];
                return a && a[0] === e ? ((a[1] = t), this) : (n(e, this._id, [e, t]), this);
              }));
            function i(e, n) {
              if (!r(e) || !t.call(e, `_id`))
                throw TypeError(n + ` method called on incompatible receiver ` + typeof e);
            }
            function a(e) {
              return e + `_` + o() + `.` + o();
            }
            function o() {
              return Math.random().toString().substring(2);
            }
            return (n(e, `_polyfill`, !0), e);
          })();
        }
        function r(e) {
          return Object(e) === e;
        }
      })(typeof self < `u` ? self : a === void 0 ? H : a),
      (U = ge(function (e) {
        (function (t, n, r) {
          ((n[t] = n[t] || r()), (e.exports &&= n[t]));
        })(`Promise`, H, function () {
          var e,
            t,
            n,
            r = Object.prototype.toString,
            i =
              typeof setImmediate < `u`
                ? function (e) {
                    return setImmediate(e);
                  }
                : setTimeout;
          try {
            (Object.defineProperty({}, `x`, {}),
              (e = function (e, t, n, r) {
                return Object.defineProperty(e, t, {
                  value: n,
                  writable: !0,
                  configurable: !1 !== r,
                });
              }));
          } catch {
            e = function (e, t, n) {
              return ((e[t] = n), e);
            };
          }
          n = (function () {
            var e, n, r;
            function i(e, t) {
              ((this.fn = e), (this.self = t), (this.next = void 0));
            }
            return {
              add: function (t, a) {
                ((r = new i(t, a)), n ? (n.next = r) : (e = r), (n = r), (r = void 0));
              },
              drain: function () {
                var r = e;
                for (e = n = t = void 0; r;) (r.fn.call(r.self), (r = r.next));
              },
            };
          })();
          function a(e, r) {
            (n.add(e, r), (t ||= i(n.drain)));
          }
          function o(e) {
            var t,
              n = typeof e;
            return (
              e == null || (n != `object` && n != `function`) || (t = e.then),
              typeof t == `function` && t
            );
          }
          function s() {
            for (var e = 0; e < this.chain.length; e++)
              c(
                this,
                this.state === 1 ? this.chain[e].success : this.chain[e].failure,
                this.chain[e]
              );
            this.chain.length = 0;
          }
          function c(e, t, n) {
            var r, i;
            try {
              !1 === t
                ? n.reject(e.msg)
                : ((r = !0 === t ? e.msg : t.call(void 0, e.msg)),
                  r === n.promise
                    ? n.reject(TypeError(`Promise-chain cycle`))
                    : (i = o(r))
                      ? i.call(r, n.resolve, n.reject)
                      : n.resolve(r));
            } catch (e) {
              n.reject(e);
            }
          }
          function l(e) {
            var t,
              n = this;
            if (!n.triggered) {
              ((n.triggered = !0), n.def && (n = n.def));
              try {
                (t = o(e))
                  ? a(function () {
                      var r = new f(n);
                      try {
                        t.call(
                          e,
                          function () {
                            l.apply(r, arguments);
                          },
                          function () {
                            u.apply(r, arguments);
                          }
                        );
                      } catch (e) {
                        u.call(r, e);
                      }
                    })
                  : ((n.msg = e), (n.state = 1), n.chain.length > 0 && a(s, n));
              } catch (e) {
                u.call(new f(n), e);
              }
            }
          }
          function u(e) {
            var t = this;
            t.triggered ||
              ((t.triggered = !0),
              t.def && (t = t.def),
              (t.msg = e),
              (t.state = 2),
              t.chain.length > 0 && a(s, t));
          }
          function d(e, t, n, r) {
            for (var i = 0; i < t.length; i++)
              (function (i) {
                e.resolve(t[i]).then(function (e) {
                  n(i, e);
                }, r);
              })(i);
          }
          function f(e) {
            ((this.def = e), (this.triggered = !1));
          }
          function p(e) {
            ((this.promise = e),
              (this.state = 0),
              (this.triggered = !1),
              (this.chain = []),
              (this.msg = void 0));
          }
          function m(e) {
            if (typeof e != `function`) throw TypeError(`Not a function`);
            if (this.__NPO__ !== 0) throw TypeError(`Not a promise`);
            this.__NPO__ = 1;
            var t = new p(this);
            ((this.then = function (e, n) {
              var r = {
                success: typeof e != `function` || e,
                failure: typeof n == `function` && n,
              };
              return (
                (r.promise = new this.constructor(function (e, t) {
                  if (typeof e != `function` || typeof t != `function`)
                    throw TypeError(`Not a function`);
                  ((r.resolve = e), (r.reject = t));
                })),
                t.chain.push(r),
                t.state !== 0 && a(s, t),
                r.promise
              );
            }),
              (this.catch = function (e) {
                return this.then(void 0, e);
              }));
            try {
              e.call(
                void 0,
                function (e) {
                  l.call(t, e);
                },
                function (e) {
                  u.call(t, e);
                }
              );
            } catch (e) {
              u.call(t, e);
            }
          }
          var h = e({}, `constructor`, m, !1);
          return (
            (m.prototype = h),
            e(h, `__NPO__`, 0, !1),
            e(m, `resolve`, function (e) {
              var t = this;
              return e && typeof e == `object` && e.__NPO__ === 1
                ? e
                : new t(function (t, n) {
                    if (typeof t != `function` || typeof n != `function`)
                      throw TypeError(`Not a function`);
                    t(e);
                  });
            }),
            e(m, `reject`, function (e) {
              return new this(function (t, n) {
                if (typeof t != `function` || typeof n != `function`)
                  throw TypeError(`Not a function`);
                n(e);
              });
            }),
            e(m, `all`, function (e) {
              var t = this;
              return r.call(e) == `[object Array]`
                ? e.length === 0
                  ? t.resolve([])
                  : new t(function (n, r) {
                      if (typeof n != `function` || typeof r != `function`)
                        throw TypeError(`Not a function`);
                      var i = e.length,
                        a = Array(i),
                        o = 0;
                      d(
                        t,
                        e,
                        function (e, t) {
                          ((a[e] = t), ++o === i && n(a));
                        },
                        r
                      );
                    })
                : t.reject(TypeError(`Not an array`));
            }),
            e(m, `race`, function (e) {
              var t = this;
              return r.call(e) == `[object Array]`
                ? new t(function (n, r) {
                    if (typeof n != `function` || typeof r != `function`)
                      throw TypeError(`Not a function`);
                    d(
                      t,
                      e,
                      function (e, t) {
                        n(t);
                      },
                      r
                    );
                  })
                : t.reject(TypeError(`Not an array`));
            }),
            m
          );
        });
      })),
      (W = new WeakMap()),
      (Ee = [
        `autopause`,
        `autoplay`,
        `background`,
        `byline`,
        `color`,
        `controls`,
        `dnt`,
        `height`,
        `id`,
        `interactive_params`,
        `keyboard`,
        `loop`,
        `maxheight`,
        `maxwidth`,
        `muted`,
        `playsinline`,
        `portrait`,
        `responsive`,
        `speed`,
        `texttrack`,
        `title`,
        `transparent`,
        `url`,
        `width`,
      ]),
      (G = new WeakMap()),
      (K = new WeakMap()),
      (q = {}),
      (De = (function () {
        function e(t) {
          var n = this,
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (
            (O(this, e),
            a.jQuery &&
              t instanceof jQuery &&
              (t.length > 1 &&
                a.console &&
                console.warn &&
                console.warn(
                  `A jQuery object with multiple elements was passed, using the first element.`
                ),
              (t = t[0])),
            typeof document < `u` && typeof t == `string` && (t = document.getElementById(t)),
            !A(t))
          )
            throw TypeError(`You must pass either a valid element or a valid id.`);
          if (t.nodeName !== `IFRAME`) {
            var i = t.querySelector(`iframe`);
            i && (t = i);
          }
          if (t.nodeName === `IFRAME` && !M(t.getAttribute(`src`) || ``))
            throw Error(`The player element passed isn’t a Vimeo embed.`);
          if (G.has(t)) return G.get(t);
          ((this._window = t.ownerDocument.defaultView), (this.element = t), (this.origin = `*`));
          var o = new U(function (e, i) {
            if (
              ((n._onMessage = function (t) {
                if (M(t.origin) && n.element.contentWindow === t.source) {
                  n.origin === `*` && (n.origin = t.origin);
                  var r = Ce(t.data);
                  if (r && r.event === `error` && r.data && r.data.method === `ready`) {
                    var a = Error(r.data.message);
                    ((a.name = r.data.name), i(a));
                  } else {
                    var o = r && r.event === `ready`,
                      s = r && r.method === `ping`;
                    o || s ? (n.element.setAttribute(`data-ready`, `true`), e()) : we(n, r);
                  }
                }
              }),
              n._window.addEventListener(`message`, n._onMessage),
              n.element.nodeName !== `IFRAME`)
            ) {
              var a = ye(t, r);
              be(N(a), a, t)
                .then(function (e) {
                  var r = L(e, t);
                  return (
                    (n.element = r),
                    (n._originalElement = t),
                    ve(t, r),
                    G.set(n.element, n),
                    e
                  );
                })
                .catch(i);
            }
          });
          if (
            (K.set(this, o),
            G.set(this.element, this),
            this.element.nodeName === `IFRAME` && R(this, `ping`),
            q.isEnabled)
          ) {
            var s = function () {
              return q.exit();
            };
            ((this.fullscreenchangeHandler = function () {
              (q.isFullscreen ? P(n, `event:exitFullscreen`, s) : I(n, `event:exitFullscreen`, s),
                n.ready().then(function () {
                  R(n, `fullscreenchange`, q.isFullscreen);
                }));
            }),
              q.on(`fullscreenchange`, this.fullscreenchangeHandler));
          }
          return this;
        }
        return (
          me(e, [
            {
              key: `callMethod`,
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return new U(function (r, i) {
                  return t
                    .ready()
                    .then(function () {
                      (P(t, e, { resolve: r, reject: i }), R(t, e, n));
                    })
                    .catch(i);
                });
              },
            },
            {
              key: `get`,
              value: function (e) {
                var t = this;
                return new U(function (n, r) {
                  return (
                    (e = he(e, `get`)),
                    t
                      .ready()
                      .then(function () {
                        (P(t, e, { resolve: n, reject: r }), R(t, e));
                      })
                      .catch(r)
                  );
                });
              },
            },
            {
              key: `set`,
              value: function (e, t) {
                var n = this;
                return new U(function (r, i) {
                  if (((e = he(e, `set`)), t == null))
                    throw TypeError(`There must be a value to set.`);
                  return n
                    .ready()
                    .then(function () {
                      (P(n, e, { resolve: r, reject: i }), R(n, e, t));
                    })
                    .catch(i);
                });
              },
            },
            {
              key: `on`,
              value: function (e, t) {
                if (!e) throw TypeError(`You must pass an event name.`);
                if (!t) throw TypeError(`You must pass a callback function.`);
                if (typeof t != `function`) throw TypeError(`The callback must be a function.`);
                (F(this, `event:${e}`).length === 0 &&
                  this.callMethod(`addEventListener`, e).catch(function () {}),
                  P(this, `event:${e}`, t));
              },
            },
            {
              key: `off`,
              value: function (e, t) {
                if (!e) throw TypeError(`You must pass an event name.`);
                if (t && typeof t != `function`)
                  throw TypeError(`The callback must be a function.`);
                I(this, `event:${e}`, t) &&
                  this.callMethod(`removeEventListener`, e).catch(function (e) {});
              },
            },
            {
              key: `loadVideo`,
              value: function (e) {
                return this.callMethod(`loadVideo`, e);
              },
            },
            {
              key: `ready`,
              value: function () {
                var e =
                  K.get(this) ||
                  new U(function (e, t) {
                    t(Error(`Unknown player. Probably unloaded.`));
                  });
                return U.resolve(e);
              },
            },
            {
              key: `addCuePoint`,
              value: function (e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return this.callMethod(`addCuePoint`, { time: e, data: t });
              },
            },
            {
              key: `removeCuePoint`,
              value: function (e) {
                return this.callMethod(`removeCuePoint`, e);
              },
            },
            {
              key: `enableTextTrack`,
              value: function (e, t) {
                if (!e) throw TypeError(`You must pass a language.`);
                return this.callMethod(`enableTextTrack`, { language: e, kind: t });
              },
            },
            {
              key: `disableTextTrack`,
              value: function () {
                return this.callMethod(`disableTextTrack`);
              },
            },
            {
              key: `pause`,
              value: function () {
                return this.callMethod(`pause`);
              },
            },
            {
              key: `play`,
              value: function () {
                return this.callMethod(`play`);
              },
            },
            {
              key: `requestFullscreen`,
              value: function () {
                return q.isEnabled ? q.request(this.element) : this.callMethod(`requestFullscreen`);
              },
            },
            {
              key: `exitFullscreen`,
              value: function () {
                return q.isEnabled ? q.exit() : this.callMethod(`exitFullscreen`);
              },
            },
            {
              key: `getFullscreen`,
              value: function () {
                return q.isEnabled ? U.resolve(q.isFullscreen) : this.get(`fullscreen`);
              },
            },
            {
              key: `requestPictureInPicture`,
              value: function () {
                return this.callMethod(`requestPictureInPicture`);
              },
            },
            {
              key: `exitPictureInPicture`,
              value: function () {
                return this.callMethod(`exitPictureInPicture`);
              },
            },
            {
              key: `getPictureInPicture`,
              value: function () {
                return this.get(`pictureInPicture`);
              },
            },
            {
              key: `unload`,
              value: function () {
                return this.callMethod(`unload`);
              },
            },
            {
              key: `destroy`,
              value: function () {
                var e = this;
                return new U(function (t) {
                  if (
                    (K.delete(e),
                    G.delete(e.element),
                    e._originalElement &&
                      (G.delete(e._originalElement),
                      e._originalElement.removeAttribute(`data-vimeo-initialized`)),
                    e.element &&
                      e.element.nodeName === `IFRAME` &&
                      e.element.parentNode &&
                      (e.element.parentNode.parentNode &&
                      e._originalElement &&
                      e._originalElement !== e.element.parentNode
                        ? e.element.parentNode.parentNode.removeChild(e.element.parentNode)
                        : e.element.parentNode.removeChild(e.element)),
                    e.element && e.element.nodeName === `DIV` && e.element.parentNode)
                  ) {
                    e.element.removeAttribute(`data-vimeo-initialized`);
                    var n = e.element.querySelector(`iframe`);
                    n &&
                      n.parentNode &&
                      (n.parentNode.parentNode &&
                      e._originalElement &&
                      e._originalElement !== n.parentNode
                        ? n.parentNode.parentNode.removeChild(n.parentNode)
                        : n.parentNode.removeChild(n));
                  }
                  (e._window.removeEventListener(`message`, e._onMessage),
                    q.isEnabled && q.off(`fullscreenchange`, e.fullscreenchangeHandler),
                    t());
                });
              },
            },
            {
              key: `getAutopause`,
              value: function () {
                return this.get(`autopause`);
              },
            },
            {
              key: `setAutopause`,
              value: function (e) {
                return this.set(`autopause`, e);
              },
            },
            {
              key: `getBuffered`,
              value: function () {
                return this.get(`buffered`);
              },
            },
            {
              key: `getCameraProps`,
              value: function () {
                return this.get(`cameraProps`);
              },
            },
            {
              key: `setCameraProps`,
              value: function (e) {
                return this.set(`cameraProps`, e);
              },
            },
            {
              key: `getChapters`,
              value: function () {
                return this.get(`chapters`);
              },
            },
            {
              key: `getCurrentChapter`,
              value: function () {
                return this.get(`currentChapter`);
              },
            },
            {
              key: `getColor`,
              value: function () {
                return this.get(`color`);
              },
            },
            {
              key: `setColor`,
              value: function (e) {
                return this.set(`color`, e);
              },
            },
            {
              key: `getCuePoints`,
              value: function () {
                return this.get(`cuePoints`);
              },
            },
            {
              key: `getCurrentTime`,
              value: function () {
                return this.get(`currentTime`);
              },
            },
            {
              key: `setCurrentTime`,
              value: function (e) {
                return this.set(`currentTime`, e);
              },
            },
            {
              key: `getDuration`,
              value: function () {
                return this.get(`duration`);
              },
            },
            {
              key: `getEnded`,
              value: function () {
                return this.get(`ended`);
              },
            },
            {
              key: `getLoop`,
              value: function () {
                return this.get(`loop`);
              },
            },
            {
              key: `setLoop`,
              value: function (e) {
                return this.set(`loop`, e);
              },
            },
            {
              key: `setMuted`,
              value: function (e) {
                return this.set(`muted`, e);
              },
            },
            {
              key: `getMuted`,
              value: function () {
                return this.get(`muted`);
              },
            },
            {
              key: `getPaused`,
              value: function () {
                return this.get(`paused`);
              },
            },
            {
              key: `getPlaybackRate`,
              value: function () {
                return this.get(`playbackRate`);
              },
            },
            {
              key: `setPlaybackRate`,
              value: function (e) {
                return this.set(`playbackRate`, e);
              },
            },
            {
              key: `getPlayed`,
              value: function () {
                return this.get(`played`);
              },
            },
            {
              key: `getQualities`,
              value: function () {
                return this.get(`qualities`);
              },
            },
            {
              key: `getQuality`,
              value: function () {
                return this.get(`quality`);
              },
            },
            {
              key: `setQuality`,
              value: function (e) {
                return this.set(`quality`, e);
              },
            },
            {
              key: `getSeekable`,
              value: function () {
                return this.get(`seekable`);
              },
            },
            {
              key: `getSeeking`,
              value: function () {
                return this.get(`seeking`);
              },
            },
            {
              key: `getTextTracks`,
              value: function () {
                return this.get(`textTracks`);
              },
            },
            {
              key: `getVideoEmbedCode`,
              value: function () {
                return this.get(`videoEmbedCode`);
              },
            },
            {
              key: `getVideoId`,
              value: function () {
                return this.get(`videoId`);
              },
            },
            {
              key: `getVideoTitle`,
              value: function () {
                return this.get(`videoTitle`);
              },
            },
            {
              key: `getVideoWidth`,
              value: function () {
                return this.get(`videoWidth`);
              },
            },
            {
              key: `getVideoHeight`,
              value: function () {
                return this.get(`videoHeight`);
              },
            },
            {
              key: `getVideoUrl`,
              value: function () {
                return this.get(`videoUrl`);
              },
            },
            {
              key: `getVolume`,
              value: function () {
                return this.get(`volume`);
              },
            },
            {
              key: `setVolume`,
              value: function (e) {
                return this.set(`volume`, e);
              },
            },
          ]),
          e
        );
      })()),
      z || ((q = Te()), xe(), Se()));
  }),
  J,
  Y,
  X,
  ke = e(() => {
    (g(),
      S(),
      b(),
      Oe(),
      l(),
      pe(),
      (J = /^https?:\/\/vimeo\.com\/(\d+)/),
      (Y = T(
        function ({
          video: e,
          autoplay: n,
          mute: r,
          controls: i,
          loop: a,
          titles: s,
          backgroundColor: c,
          onPlay: l = () => {},
          onEnd: d = () => {},
          style: p,
          ...m
        }) {
          let [h, g] = o(0),
            v = u(),
            y = de(m);
          return (
            t(() => {
              if (!v.current) return;
              let [, t] = e.match(J) ? e.match(J) : [null, 0],
                o = new De(v.current, {
                  id: t,
                  autopause: !1,
                  autoplay: w.current() === w.canvas ? !1 : n,
                  byline: s,
                  controls: i,
                  loop: a,
                  title: s,
                  muted: r,
                  responsive: !0,
                });
              (o.on(`play`, l), o.on(`ended`, d));
            }, [v, h]),
            t(() => {
              g((e) => e + 1);
            }, [e, n, r, i, a, s]),
            f(_.div, {
              style: {
                "--background-rgb": te(c),
                background: `var(--vimeo-background, ${c})`,
                ...p,
                borderRadius: y,
                position: `relative`,
                width: `100%`,
                height: `100%`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                overflow: `hidden`,
              },
              ...m,
              children: f(
                `div`,
                { className: `framer-vimeo`, ref: v, style: { width: `100%`, height: `100%` } },
                h
              ),
            })
          );
        },
        [
          `.framer-vimeo > div { padding: 0 !important; width: 100%; height: 100%; }`,
          `@supports not (color: color(display-p3 1 1 1)) { :root { --vimeo-background: var(--background-rgb)}}`,
        ],
        `framer-lib-vimeo`
      )),
      (Y.defaultProps = {
        video: `https://vimeo.com/642263700`,
        autoplay: !1,
        loop: !1,
        mute: !1,
        backgroundColor: `rgba(0, 0, 0, 0)`,
        borderRadius: 0,
      }),
      C(Y, {
        video: { title: `URL`, type: E.String },
        ...fe,
        controls: {
          title: `Controls`,
          type: E.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        autoplay: { title: `Autoplay`, type: E.Boolean, enabledTitle: `Yes`, disabledTitle: `No` },
        loop: { title: `Loop`, type: E.Boolean, enabledTitle: `Yes`, disabledTitle: `No` },
        mute: { title: `Mute`, type: E.Boolean, enabledTitle: `Yes`, disabledTitle: `No` },
        backgroundColor: { type: E.Color, title: `Background`, defaultValue: `rgba(0, 0, 0, 0)` },
        onPlay: { type: E.EventHandler },
        onEnd: { type: E.EventHandler },
      }),
      (X = Y));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Q,
  Ie,
  Le,
  Re,
  ze,
  Be,
  $,
  Ve,
  He = e(() => {
    (g(),
      S(),
      b(),
      l(),
      ke(),
      (Ae = ne(X)),
      (je = [`uDO9ASFiK`, `bYKt9WsBN`, `oUelL0aP6`]),
      (Me = `framer-CHgDM`),
      (Ne = {
        bYKt9WsBN: `framer-v-8qkw4x`,
        oUelL0aP6: `framer-v-1p56vy8`,
        uDO9ASFiK: `framer-v-1i4y8h4`,
      }),
      (Pe = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Fe = (e, t) => `translate(-50%, -50%) ${t}`),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ie = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(v.Provider, { value: a, children: t });
      }),
      (Le = { "Variant 1": `uDO9ASFiK`, "Variant 2": `bYKt9WsBN`, "Variant 3": `oUelL0aP6` }),
      (Re = _.create(m)),
      (ze = ({
        buttonColor: e,
        cursor: t,
        height: n,
        id: r,
        image: i,
        uRL: a,
        width: o,
        ...s
      }) => ({
        ...s,
        HKiOTJCKp: i ?? s.HKiOTJCKp,
        oswkqhnf6: t ?? s.oswkqhnf6,
        UsYVabcpi: e ?? s.UsYVabcpi ?? `rgba(0, 0, 0, 0.2)`,
        variant: Le[s.variant] ?? s.variant ?? `uDO9ASFiK`,
        vsl6Y3IvI: a ?? s.vsl6Y3IvI,
      })),
      (Be = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = T(
        p(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = d(),
            { activeLocale: a, setLocale: o } = oe(),
            s = se(),
            {
              style: c,
              className: l,
              layoutId: p,
              variant: g,
              vsl6Y3IvI: v,
              HKiOTJCKp: b,
              UsYVabcpi: te,
              oswkqhnf6: S,
              ...ne
            } = ze(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: de,
              setGestureState: fe,
              setVariant: pe,
              variants: O,
            } = ae({
              cycleOrder: je,
              defaultVariant: `uDO9ASFiK`,
              ref: r,
              variant: g,
              variantClassNames: Ne,
            }),
            k = Be(e, O),
            { activeVariantCallback: me, delay: he } = ue(C),
            A = me(async (...e) => {
              (fe({ isPressed: !1 }), pe(`oUelL0aP6`));
            }),
            j = ee(Me),
            M = () => C !== `oUelL0aP6`,
            N = () => C === `oUelL0aP6`;
          return f(y, {
            id: p ?? i,
            children: f(Re, {
              animate: O,
              initial: !1,
              children: f(Ie, {
                value: Pe,
                children: h(_.div, {
                  ...ne,
                  ...E,
                  className: ee(j, `framer-1i4y8h4`, l, w),
                  "data-framer-cursor": S,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `uDO9ASFiK`,
                  ref: r,
                  style: { ...c },
                  ...Z(
                    {
                      bYKt9WsBN: {
                        "data-framer-name": `Variant 2`,
                        "data-highlight": !0,
                        onTap: A,
                      },
                      oUelL0aP6: { "data-framer-cursor": void 0, "data-framer-name": `Variant 3` },
                    },
                    C,
                    D
                  ),
                  children: [
                    f(_.div, {
                      className: `framer-k2gcc7`,
                      "data-framer-name": `PlayCircle`,
                      layoutDependency: k,
                      layoutId: `AdRBegmQ6`,
                      style: {
                        backdropFilter: `blur(8px)`,
                        backgroundColor: te,
                        borderBottomLeftRadius: 70,
                        borderBottomRightRadius: 70,
                        borderTopLeftRadius: 70,
                        borderTopRightRadius: 70,
                        opacity: 1,
                        WebkitBackdropFilter: `blur(8px)`,
                      },
                      transformTemplate: Fe,
                      variants: { oUelL0aP6: { opacity: 0 } },
                      children: f(ie, {
                        __fromCanvasComponent: !0,
                        children: f(m, {
                          children: f(_.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                              "--framer-font-size": `50px`,
                              "--framer-font-weight": `600`,
                              "--framer-line-height": `1em`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                            },
                            children: `play`,
                          }),
                        }),
                        className: `framer-1vt745a`,
                        fonts: [`FS;Outfit-semibold`],
                        layoutDependency: k,
                        layoutId: `zqz6KfX71`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    M() &&
                      f(ce, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: x((s?.y || 0) + (0 + ((s?.height || 600) - 0 - 600) / 2)),
                          sizes: `calc((${s?.width || `100vw`} - 48px) * 0.94)`,
                          ...Q(b),
                        },
                        className: `framer-saotnk`,
                        layoutDependency: k,
                        layoutId: `V7giVmgiV`,
                        style: {
                          borderBottomLeftRadius: 60,
                          borderBottomRightRadius: 60,
                          borderTopLeftRadius: 60,
                          borderTopRightRadius: 60,
                        },
                        variants: {
                          bYKt9WsBN: {
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                          },
                        },
                        ...Z(
                          {
                            bYKt9WsBN: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: x((s?.y || 0) + (0 + ((s?.height || 650) - 0 - 650) / 2)),
                                sizes: `calc(${s?.width || `100vw`} - 48px)`,
                                ...Q(b),
                              },
                            },
                          },
                          C,
                          D
                        ),
                      }),
                    N() &&
                      f(le, {
                        children: f(re, {
                          className: `framer-k2er6y-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `FsyRB5sbL-container`,
                          nodeId: `FsyRB5sbL`,
                          rendersWithMotion: !0,
                          scopeId: `CIe0Dv4oV`,
                          children: f(X, {
                            autoplay: !1,
                            backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                            borderRadius: 60,
                            bottomLeftRadius: 60,
                            bottomRightRadius: 60,
                            controls: !0,
                            height: `100%`,
                            id: `FsyRB5sbL`,
                            isMixedBorderRadius: !1,
                            layoutId: `FsyRB5sbL`,
                            loop: !1,
                            mute: !0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 60,
                            topRightRadius: 60,
                            video: v,
                            width: `100%`,
                            ...Z(
                              {
                                oUelL0aP6: {
                                  autoplay: !0,
                                  borderRadius: 15,
                                  bottomLeftRadius: 15,
                                  bottomRightRadius: 15,
                                  mute: !1,
                                  topLeftRadius: 15,
                                  topRightRadius: 15,
                                },
                              },
                              C,
                              D
                            ),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-CHgDM.framer-18l82h5, .framer-CHgDM .framer-18l82h5 { display: block; }`,
          `.framer-CHgDM.framer-1i4y8h4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 1200px; }`,
          `.framer-CHgDM .framer-k2gcc7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 18px 30px 26px 30px; position: absolute; top: 50%; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-CHgDM .framer-1vt745a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-CHgDM .framer-saotnk { aspect-ratio: 1.8033333333333332 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 600px); overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 94%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-CHgDM .framer-k2er6y-container { aspect-ratio: 1.8033333333333332 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 111px); position: relative; width: 94%; z-index: 2; }`,
          `.framer-CHgDM.framer-v-8qkw4x.framer-1i4y8h4 { cursor: pointer; }`,
          `.framer-CHgDM.framer-v-8qkw4x .framer-saotnk, .framer-CHgDM.framer-v-1p56vy8 .framer-k2er6y-container { aspect-ratio: 1.7723076923076924 / 1; height: var(--framer-aspect-ratio-supported, 650px); width: 100%; }`,
        ],
        `framer-CHgDM`
      )),
      (Ve = $),
      ($.displayName = `WorkHeroVideo`),
      ($.defaultProps = { height: 600, width: 1200 }),
      C($, {
        variant: {
          options: [`uDO9ASFiK`, `bYKt9WsBN`, `oUelL0aP6`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: E.Enum,
        },
        vsl6Y3IvI: { defaultValue: ``, title: `URL`, type: E.String },
        onvsl6Y3IvIChange: { changes: `vsl6Y3IvI`, type: E.ChangeHandler },
        HKiOTJCKp: { title: `Image`, type: E.ResponsiveImage },
        UsYVabcpi: { defaultValue: `rgba(0, 0, 0, 0.2)`, title: `ButtonColor`, type: E.Color },
        oswkqhnf6: { title: `Cursor`, type: E.CustomCursor },
      }),
      D(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/P65L7VCWZE3ZYHD2XJZ2WDLQCATH7Y3R.woff2`,
                weight: `600`,
              },
            ],
          },
          ...Ae,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { He as n, Ve as t };
//# sourceMappingURL=CIe0Dv4oV.CojP6Uq1.mjs.map
