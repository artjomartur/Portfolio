import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as t,
  F as n,
  I as r,
  L as i,
  O as a,
  S as o,
  T as s,
  c,
  o as l,
} from "./react.Bb_yyrg0.mjs";
import { G as u, _ as d, ot as f, r as p } from "./framer.cs1Z8Vda.mjs";
var m,
  h,
  g = e(() => {
    (u(),
      (m = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...m },
      (h = {
        onClick: { type: p.EventHandler },
        onMouseEnter: { type: p.EventHandler },
        onMouseLeave: { type: p.EventHandler },
      }),
      p.Number,
      p.Boolean,
      p.String,
      p.Enum);
  });
function _(e, t) {
  return y(!0, e, t);
}
function v(e, t) {
  return y(!1, e, t);
}
function y(e, n, r = !0) {
  let i = f();
  t(() => {
    r && i === e && n();
  }, [i]);
}
var b = e(() => {
  (u(), o());
});
function x(e) {
  let t = s(null);
  return (t.current === null && (t.current = e()), t.current);
}
var S = e(() => {
    o();
  }),
  C = e(() => {
    u();
  }),
  w = e(() => {
    u();
  }),
  T = e(() => {
    o();
  }),
  E = e(() => {
    u();
  }),
  D,
  O,
  k = e(() => {
    (n(),
      o(),
      (D = () => {
        if (r !== void 0) {
          let e = r.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (O = () => a(() => D(), [])));
  }),
  A = e(() => {
    (o(), w());
  }),
  j = e(() => {
    (o(), u(), w(), S());
  }),
  M = e(() => {
    (u(), o(), g());
  });
function N() {
  return a(() => d.current(), []);
}
function P() {
  return a(() => d.current() === d.canvas, []);
}
var F = e(() => {
    (o(), u());
  }),
  I = e(() => {
    o();
  });
function L(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return a(() => (n ? `${r}px ${i}px ${o}px ${s}px` : `${t}px`), [t, n, r, i, o, s]);
}
var R,
  z = e(() => {
    (o(),
      u(),
      (R = {
        borderRadius: {
          title: `Radius`,
          type: p.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      p.FusedNumber);
  }),
  B = e(() => {
    (g(), b(), S(), C(), w(), T(), E(), k(), A(), j(), M(), F(), I(), z());
  });
function V() {
  return i === void 0
    ? null
    : ((U ||= new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            let t = e.target;
            e.isIntersecting ? t.play().catch(() => {}) : t.pause();
          });
        },
        { threshold: 0.3 }
      )),
      U);
}
function H(e) {
  return (n) => {
    let r = s(null);
    return (
      t(() => {
        let e = r.current,
          t = V();
        if (!e || !t) return;
        let n = e.querySelector(`video`);
        return (
          n && t.observe(n),
          () => {
            n && t.unobserve(n);
          }
        );
      }, []),
      c(`div`, { ref: r, style: { display: `contents` }, children: c(e, { ...n }) })
    );
  };
}
var U,
  W = e(() => {
    (n(), l(), o(), (U = null));
  });
export {
  L as a,
  O as c,
  _ as d,
  v as f,
  R as i,
  S as l,
  H as n,
  P as o,
  h as p,
  B as r,
  N as s,
  W as t,
  x as u,
};
//# sourceMappingURL=VideoController.D9ulu-ly.mjs.map
