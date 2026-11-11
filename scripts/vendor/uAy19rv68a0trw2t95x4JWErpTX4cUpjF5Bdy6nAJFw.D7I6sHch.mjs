import { n as e, t } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as n,
  D as r,
  M as i,
  O as a,
  S as o,
  T as s,
  _ as c,
  c as l,
  h as u,
  j as d,
  l as f,
  o as p,
} from "./react.Bb_yyrg0.mjs";
import { T as m, a as h, r as g, t as _ } from "./motion.Dq3vMtKA.mjs";
import {
  A as v,
  B as y,
  C as b,
  Ct as x,
  G as S,
  M as C,
  R as w,
  S as T,
  T as E,
  _t as D,
  a as O,
  at as k,
  b as A,
  bt as j,
  dt as M,
  f as N,
  gt as P,
  h as F,
  ht as I,
  it as ee,
  lt as L,
  mt as R,
  n as z,
  nt as B,
  pt as V,
  r as H,
  s as U,
  st as te,
  t as W,
  tt as ne,
  ut as re,
  vt as G,
  w as K,
  wt as ie,
  x as q,
  xt as ae,
  y as J,
  yt as Y,
  z as oe,
} from "./framer.cs1Z8Vda.mjs";
import {
  a as se,
  i as ce,
  n as le,
  o as ue,
  r as de,
  s as fe,
  t as pe,
} from "./QGzoyu2RM.C7jgKHUZ.mjs";
import {
  c as me,
  d as he,
  f as ge,
  i as _e,
  m as ve,
  n as ye,
  p as be,
  r as xe,
  s as Se,
  t as Ce,
} from "./yk6i18qEx.CnQf8P0b.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./ScrollText.CzCuclR_.mjs";
import { n as Oe, t as ke } from "./VideoController.D9ulu-ly.mjs";
import { n as Ae, t as je } from "./Video.CtoqTS3T.mjs";
import { n as Me, r as Ne, t as Pe } from "./jXv_GjSDx.BsTF2j5Z.mjs";
import { n as Fe, t as Ie } from "./x8rD2lyjy.BpUu5ST3.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./rf7eHa4dX.u16jYVVh.mjs";
import { n as Ve, r as He } from "./KMvorioYR.CyX1B8AL.mjs";
var Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze = t(() => {
    (p(),
      S(),
      o(),
      (Ue = `var(--framer-icon-mask)`),
      (We = u(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ge = m.create(We)),
      (Ke = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Ge, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (qe = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 L 6 12 L 18 0" fill="transparent" height="12px" id="KVyKpRjev" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 6)" width="18px"/></svg>`),
      (Je = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Ye = D(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Je(e),
            u = I(`1839610128`, qe);
          return l(Ke, {
            ...c,
            className: v(`framer-MO1L3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-MO1L3 { -webkit-mask: ${Ue}; aspect-ratio: 1; display: block; mask: ${Ue}; width: 24px; }`,
        ],
        `framer-MO1L3`
      )),
      (Ye.displayName = `Check Good`),
      (Xe = Ye),
      E(Ye, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: H.Number,
        },
      }));
  }),
  Qe = e({ __FramerMetadata__: () => ht, default: () => mt });
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (et = ae(Y(U))),
      (tt = [`x8xkRWLOf`, `B_sqV3kCQ`]),
      (nt = `framer-fSLTC`),
      (rt = { B_sqV3kCQ: `framer-v-kkamvw`, x8xkRWLOf: `framer-v-15yxlsv` }),
      (it = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (at = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 3.5, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ot = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (st = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.1, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ct = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (lt = { "Variant 1": `x8xkRWLOf`, "Variant 3": `B_sqV3kCQ` }),
      (ut = m.create(d)),
      (dt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: lt[r.variant] ?? r.variant ?? `x8xkRWLOf`,
      })),
      (ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pt = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: h, ..._ } = dt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = P({
              cycleOrder: tt,
              defaultVariant: `x8xkRWLOf`,
              ref: r,
              variant: h,
              variantClassNames: rt,
            }),
            k = ft(e, O),
            A = v(nt);
          return l(g, {
            id: p ?? i,
            children: l(ut, {
              animate: O,
              initial: !1,
              children: l(ct, {
                value: it,
                children: l(m.div, {
                  ..._,
                  ...C,
                  className: v(A, `framer-15yxlsv`, f, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `x8xkRWLOf`,
                  ref: r,
                  style: { ...d },
                  ...$e({ B_sqV3kCQ: { "data-framer-name": `Variant 3` } }, b, w),
                  children: l(et, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: at,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 590,
                      intrinsicWidth: 450,
                      loading: y(
                        (u?.y || 0) +
                          (0 + ((u?.height || 286) - 0 - ((u?.height || 286) - 0) * 1) / 2)
                      ),
                      pixelHeight: 1024,
                      pixelWidth: 696,
                      sizes: `max(${u?.width || `100vw`}, 1px)`,
                      src: `../../assets/images/nNLGLKBaN3TMBNgUnAFjyxbtQ.jpg`,
                      srcSet: `../../assets/images/nNLGLKBaN3TMBNgUnAFjyxbtQ.jpg 696w`,
                    },
                    className: `framer-23osh2`,
                    "data-framer-appear-id": `23osh2`,
                    "data-framer-name": `BlueArt`,
                    initial: ot,
                    layoutDependency: k,
                    layoutId: `pKq3MlBhU`,
                    optimized: !0,
                    ...$e({ B_sqV3kCQ: { animate: st } }, b, w),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fSLTC.framer-14gr2vq, .framer-fSLTC .framer-14gr2vq { display: block; }`,
          `.framer-fSLTC.framer-15yxlsv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 286px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 204px; }`,
          `.framer-fSLTC .framer-23osh2 { flex: 1 0 0px; height: 100%; overflow: visible; pointer-events: none; position: relative; width: 1px; z-index: 0; }`,
        ],
        `framer-fSLTC`
      )),
      (mt = pt),
      (pt.displayName = `DraggablePoster1`),
      (pt.defaultProps = { height: 286, width: 204 }),
      E(pt, {
        variant: {
          options: [`x8xkRWLOf`, `B_sqV3kCQ`],
          optionTitles: [`Variant 1`, `Variant 3`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(pt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (ht = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerA8gA1Ump_`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `204`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"B_sqV3kCQ":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicHeight: `286`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (_t = `framer-G1YQh`),
      (vt = { lmgFoIklu: `framer-v-1n3c834` }),
      (yt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (bt = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (xt = m.create(d)),
      (St = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wt = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = St(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({ defaultVariant: `lmgFoIklu`, ref: r, variant: m, variantClassNames: vt }),
            O = Ct(e, D),
            k = v(_t);
          return l(g, {
            id: p ?? i,
            children: l(xt, {
              animate: D,
              initial: !1,
              children: l(bt, {
                value: yt,
                children: l(N, {
                  href: { webPageId: `Q1TLs1t8l` },
                  motionChild: !0,
                  nodeId: `lmgFoIklu`,
                  openInNewTab: !1,
                  scopeId: `beIH8ytYO`,
                  children: l(U, {
                    ...h,
                    ...S,
                    as: `a`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 45,
                      intrinsicWidth: 90,
                      loading: y(u?.y || 0),
                      pixelHeight: 45,
                      pixelWidth: 90,
                      sizes: u?.width || `100vw`,
                      src: `../../assets/images/Z0oPD4aqeRrqmX19aQu0j7wCDiA.gif`,
                    },
                    className: `${v(k, `framer-1n3c834`, f, b)} framer-1tss8sd`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: O,
                    layoutId: `lmgFoIklu`,
                    ref: r,
                    style: { ...d },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-G1YQh.framer-1tss8sd, .framer-G1YQh .framer-1tss8sd { display: block; }`,
          `.framer-G1YQh.framer-1n3c834 { height: 45px; overflow: visible; position: relative; text-decoration: none; width: 90px; }`,
        ],
        `framer-G1YQh`
      )),
      (Tt = wt),
      (wt.displayName = `Building`),
      (wt.defaultProps = { height: 45, width: 90 }),
      K(wt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (Dt = `framer-os0IT`),
      (Ot = { Cbg2Q3xgx: `framer-v-12jmfdb` }),
      (kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (At = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (jt = m.create(d)),
      (Mt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pt = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = Mt(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({ defaultVariant: `Cbg2Q3xgx`, ref: r, variant: m, variantClassNames: Ot }),
            O = Nt(e, D),
            k = v(Dt);
          return l(g, {
            id: p ?? i,
            children: l(jt, {
              animate: D,
              initial: !1,
              children: l(At, {
                value: kt,
                children: l(U, {
                  ...h,
                  ...S,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 45,
                    intrinsicWidth: 60,
                    loading: y(u?.y || 0),
                    pixelHeight: 45,
                    pixelWidth: 60,
                    sizes: u?.width || `100vw`,
                    src: `../../assets/images/xfnsTlzEew5abOSsoTwi2MDXM4.gif`,
                  },
                  className: v(k, `framer-12jmfdb`, f, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `Cbg2Q3xgx`,
                  ref: r,
                  style: { ...d },
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-os0IT.framer-cogpgj, .framer-os0IT .framer-cogpgj { display: block; }`,
          `.framer-os0IT.framer-12jmfdb { height: 45px; overflow: visible; position: relative; width: 60px; }`,
        ],
        `framer-os0IT`
      )),
      (Ft = Pt),
      (Pt.displayName = `Ocean`),
      (Pt.defaultProps = { height: 45, width: 60 }),
      K(Pt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Lt = e({ __FramerMetadata__: () => Zt, default: () => Xt });
function Rt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt = t(() => {
    (p(),
      S(),
      _(),
      o(),
      Ae(),
      (zt = w(je)),
      (Bt = [`xy9sQhJyL`, `QQ01C4za4`, `MZwwthf09`]),
      (Vt = `framer-S4LXO`),
      (Ht = {
        MZwwthf09: `framer-v-6w64iu`,
        QQ01C4za4: `framer-v-1rjhxns`,
        xy9sQhJyL: `framer-v-1mlauz6`,
      }),
      (Ut = { duration: 0, type: `tween` }),
      (Wt = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Gt = { "Variant 1": `xy9sQhJyL`, "Variant 2": `QQ01C4za4`, "Variant 3": `MZwwthf09` }),
      (Kt = m.create(d)),
      (qt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Gt[r.variant] ?? r.variant ?? `xy9sQhJyL`,
      })),
      (Jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Yt = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: p, layoutId: h, variant: _, ...b } = qt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = P({
              cycleOrder: Bt,
              defaultVariant: `xy9sQhJyL`,
              ref: r,
              variant: _,
              variantClassNames: Ht,
            }),
            j = Jt(e, A),
            { activeVariantCallback: M, delay: N } = ne(x),
            F = M(async (...e) => {
              k(`QQ01C4za4`);
            }),
            I = v(Vt),
            ee = () => x !== `MZwwthf09`,
            R = () => x === `MZwwthf09`;
          return l(g, {
            id: h ?? i,
            children: l(Kt, {
              animate: A,
              initial: !1,
              children: l(Wt, {
                value: Ut,
                children: f(m.div, {
                  ...b,
                  ...w,
                  className: v(I, `framer-1mlauz6`, p, S),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `xy9sQhJyL`,
                  ref: r,
                  style: { ...d },
                  ...Rt(
                    {
                      MZwwthf09: { "data-framer-name": `Variant 3` },
                      QQ01C4za4: { "data-framer-name": `Variant 2` },
                    },
                    x,
                    E
                  ),
                  children: [
                    ee() &&
                      l(W, {
                        children: l(T, {
                          className: `framer-9jj25p-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `X4MO3F8mL-container`,
                          nodeId: `X4MO3F8mL`,
                          rendersWithMotion: !0,
                          scopeId: `dJ4eWWYzy`,
                          children: l(je, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `X4MO3F8mL`,
                            isMixedBorderRadius: !1,
                            layoutId: `X4MO3F8mL`,
                            loop: !1,
                            muted: !0,
                            objectFit: `contain`,
                            onEnd: F,
                            playing: !0,
                            poster: `../../assets/images/jOQ3WSvHY482zYegmuEP1iYjc.gif`,
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: `../../assets/videos/main.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                            ...Rt({ QQ01C4za4: { playing: !1, poster: void 0 } }, x, E),
                          }),
                        }),
                      }),
                    R() &&
                      l(U, {
                        background: {
                          alt: ``,
                          fit: `fit`,
                          intrinsicHeight: 1e3,
                          intrinsicWidth: 1366,
                          pixelHeight: 1e3,
                          pixelWidth: 1366,
                          positionX: `center`,
                          positionY: `center`,
                          src: `https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?width=1366&height=1000`,
                          srcSet: `https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?scale-down-to=512&width=1366&height=1000 512w,https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?scale-down-to=1024&width=1366&height=1000 1024w,https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?width=1366&height=1000 1366w`,
                        },
                        className: `framer-fgxf2f`,
                        layoutDependency: j,
                        layoutId: `A_3Bcai_I`,
                        ...Rt(
                          {
                            MZwwthf09: {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 1e3,
                                intrinsicWidth: 1366,
                                loading: y(
                                  (u?.y || 0) +
                                    (30 +
                                      ((u?.height || 878) - 60 - ((u?.height || 878) - 60) * 1) / 2)
                                ),
                                pixelHeight: 1e3,
                                pixelWidth: 1366,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `max(${u?.width || `100vw`} - 60px, 1px)`,
                                src: `https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?width=1366&height=1000`,
                                srcSet: `https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?scale-down-to=512&width=1366&height=1000 512w,https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?scale-down-to=1024&width=1366&height=1000 1024w,https://framerusercontent.com/images/51CetPzSFpvaraczTEtCz0jCo.png?width=1366&height=1000 1366w`,
                              },
                            },
                          },
                          x,
                          E
                        ),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-S4LXO.framer-j3svyj, .framer-S4LXO .framer-j3svyj { display: block; }`,
          `.framer-S4LXO.framer-1mlauz6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 878px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 1010px; }`,
          `.framer-S4LXO .framer-9jj25p-container { flex: 1 0 0px; height: 100%; pointer-events: none; position: relative; width: 1px; }`,
          `.framer-S4LXO .framer-fgxf2f { flex: 1 0 0px; height: 100%; overflow: visible; pointer-events: none; position: relative; width: 1px; }`,
        ],
        `framer-S4LXO`
      )),
      (Xt = Yt),
      (Yt.displayName = `HeroVideo`),
      (Yt.defaultProps = { height: 878, width: 1010 }),
      E(Yt, {
        variant: {
          options: [`xy9sQhJyL`, `QQ01C4za4`, `MZwwthf09`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(Yt, [{ explicitInter: !0, fonts: [] }, ...zt], { supportsExplicitInterCodegen: !0 }),
      (Zt = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerdJ4eWWYzy`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1010`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"QQ01C4za4":{"layout":["fixed","fixed"]},"MZwwthf09":{"layout":["fixed","fixed"]}}}`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `878`,
              framerDisplayContentsDiv: `false`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  $t = e({ __FramerMetadata__: () => _n, default: () => gn });
function en(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (tn = ae(Y(U))),
      (nn = [`UmOQzJjKW`, `ND0c8pAZh`]),
      (rn = `framer-K2qOh`),
      (an = { ND0c8pAZh: `framer-v-1i81iwt`, UmOQzJjKW: `framer-v-14v40zp` }),
      (on = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 3.6, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (cn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ln = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.2, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (un = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (dn = { "Variant 1": `UmOQzJjKW`, "Variant 3": `ND0c8pAZh` }),
      (fn = m.create(d)),
      (pn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: dn[r.variant] ?? r.variant ?? `UmOQzJjKW`,
      })),
      (mn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (hn = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: h, ..._ } = pn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = P({
              cycleOrder: nn,
              defaultVariant: `UmOQzJjKW`,
              ref: r,
              variant: h,
              variantClassNames: an,
            }),
            k = mn(e, O),
            A = v(rn);
          return l(g, {
            id: p ?? i,
            children: l(fn, {
              animate: O,
              initial: !1,
              children: l(un, {
                value: on,
                children: l(m.div, {
                  ..._,
                  ...C,
                  className: v(A, `framer-14v40zp`, f, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `UmOQzJjKW`,
                  ref: r,
                  style: { ...d },
                  ...en({ ND0c8pAZh: { "data-framer-name": `Variant 3` } }, b, w),
                  children: l(tn, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: sn,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 590,
                      intrinsicWidth: 450,
                      loading: y(
                        (u?.y || 0) +
                          (0 + ((u?.height || 247) - 0 - ((u?.height || 247) - 0) * 1) / 2)
                      ),
                      pixelHeight: 919,
                      pixelWidth: 1024,
                      sizes: `max(${u?.width || `100vw`}, 1px)`,
                      src: `../../assets/images/eworU6xoE2plzVUmMOPx9rIp7pY-206941.jpg`,
                      srcSet: `../../assets/images/eworU6xoE2plzVUmMOPx9rIp7pY.jpg 512w,../../assets/images/eworU6xoE2plzVUmMOPx9rIp7pY-206941.jpg 1024w`,
                    },
                    className: `framer-bazrm2`,
                    "data-framer-appear-id": `bazrm2`,
                    "data-framer-name": `KeycapArt`,
                    initial: cn,
                    layoutDependency: k,
                    layoutId: `OL9Jb6lLj`,
                    optimized: !0,
                    ...en({ ND0c8pAZh: { animate: ln } }, b, w),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-K2qOh.framer-75tem7, .framer-K2qOh .framer-75tem7 { display: block; }`,
          `.framer-K2qOh.framer-14v40zp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 247px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 264px; }`,
          `.framer-K2qOh .framer-bazrm2 { flex: 1 0 0px; height: 100%; mix-blend-mode: multiply; overflow: visible; pointer-events: none; position: relative; width: 1px; z-index: 0; }`,
        ],
        `framer-K2qOh`
      )),
      (gn = hn),
      (hn.displayName = `DraggablePoster2`),
      (hn.defaultProps = { height: 247, width: 264 }),
      E(hn, {
        variant: {
          options: [`UmOQzJjKW`, `ND0c8pAZh`],
          optionTitles: [`Variant 1`, `Variant 3`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(hn, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (_n = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerEtBMyK0Yr`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `264`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `247`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ND0c8pAZh":{"layout":["fixed","fixed"]}}}`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function yn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (bn = { aGPV1MVu_: { hover: !0 } }),
      (xn = `framer-5BLFD`),
      (Sn = { aGPV1MVu_: `framer-v-16uu939` }),
      (Cn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wn = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Tn = m.create(d)),
      (En = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (On = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = En(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({
              defaultVariant: `aGPV1MVu_`,
              enabledGestures: bn,
              ref: r,
              variant: m,
              variantClassNames: Sn,
            }),
            O = Dn(e, D),
            k = v(xn);
          return l(g, {
            id: p ?? i,
            children: l(Tn, {
              animate: D,
              initial: !1,
              children: l(wn, {
                value: Cn,
                children: l(U, {
                  ...h,
                  ...S,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 45,
                    intrinsicWidth: 43,
                    loading: y(u?.y || 0),
                    pixelHeight: 45,
                    pixelWidth: 43,
                    sizes: u?.width || `100vw`,
                    src: `../../assets/images/CrQdgMKOAf5N4duSXjc76KKJlw.png`,
                  },
                  className: v(k, `framer-16uu939`, f, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `aGPV1MVu_`,
                  ref: r,
                  style: { rotate: 0, ...d },
                  variants: { "aGPV1MVu_-hover": { rotate: 90 } },
                  ...yn({ "aGPV1MVu_-hover": { "data-framer-name": void 0 } }, _, C),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-5BLFD.framer-zri8qb, .framer-5BLFD .framer-zri8qb { display: block; }`,
          `.framer-5BLFD.framer-16uu939 { cursor: pointer; height: 45px; overflow: visible; position: relative; width: 43px; }`,
        ],
        `framer-5BLFD`
      )),
      (kn = On),
      (On.displayName = `Tomato`),
      (On.defaultProps = { height: 45, width: 43 }),
      K(On, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (jn = `framer-yN7hE`),
      (Mn = { daGbBGgSB: `framer-v-ovwyiz` }),
      (Nn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pn = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Fn = m.create(d)),
      (In = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Rn = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L();
          B();
          let { style: u, className: d, layoutId: p, variant: h, ..._ } = In(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({ defaultVariant: `daGbBGgSB`, ref: r, variant: h, variantClassNames: Mn }),
            O = Ln(e, D),
            k = v(jn);
          return l(g, {
            id: p ?? i,
            children: l(Fn, {
              animate: D,
              initial: !1,
              children: l(Pn, {
                value: Nn,
                children: l(m.div, {
                  ..._,
                  ...S,
                  className: v(k, `framer-ovwyiz`, d, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `daGbBGgSB`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                    borderBottomLeftRadius: 26,
                    borderBottomRightRadius: 26,
                    borderTopLeftRadius: 26,
                    borderTopRightRadius: 26,
                    ...u,
                  },
                  children: l(q, {
                    className: `framer-13dgind`,
                    layoutDependency: O,
                    layoutId: `xIU_B7OCK`,
                    requiresOverflowVisible: !1,
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 182 24" overflow="visible"><g><path d="M 2.555 14.744 C 1.806 14.744 1.213 15 0.723 15.487 C 0.258 15.974 0 16.59 0 17.308 C 0 18.026 0.232 18.641 0.723 19.128 C 1.213 19.615 1.806 19.872 2.555 19.872 C 3.303 19.872 3.896 19.615 4.387 19.128 C 4.877 18.641 5.109 18.026 5.109 17.308 C 5.109 16.59 4.877 15.974 4.387 15.487 C 3.91 14.992 3.244 14.722 2.555 14.744 Z M 11.973 0 L 8.593 0 L 8.593 19.564 L 13.006 19.564 L 13.006 11.923 L 21.831 11.923 L 21.831 8.128 L 13.006 8.128 L 13.006 3.769 L 22.295 3.769 L 22.295 0 Z M 25.056 0 L 29.469 0 L 29.469 19.564 L 25.056 19.564 Z M 45.623 11.872 L 36.307 0 L 33.211 0 L 33.211 19.564 L 37.623 19.564 L 37.623 7.846 L 46.784 19.564 L 50.061 19.564 L 50.061 0 L 45.623 0 Z M 60.125 0 L 52.358 19.564 L 56.899 19.564 L 58.215 16.051 L 65.905 16.051 L 67.169 19.564 L 71.814 19.564 L 64.099 0 Z M 59.505 12.487 L 62.086 5.538 L 64.615 12.487 Z M 78.291 0 L 73.879 0 L 73.879 19.564 L 87.013 19.564 L 87.013 15.744 L 78.291 15.744 Z M 87.658 20.641 L 101.748 20.641 L 101.748 24 L 87.658 24 Z M 106.96 0 L 103.58 0 L 103.58 19.564 L 107.992 19.564 L 107.992 11.923 L 116.818 11.923 L 116.818 8.128 L 107.992 8.128 L 107.992 3.769 L 117.282 3.769 L 117.282 0 Z M 120.043 0 L 124.456 0 L 124.456 19.564 L 120.043 19.564 Z M 140.609 11.872 L 131.294 0 L 128.197 0 L 128.197 19.564 L 132.61 19.564 L 132.61 7.846 L 141.771 19.564 L 145.048 19.564 L 145.048 0 L 140.609 0 Z M 155.112 0 L 147.344 19.564 L 151.886 19.564 L 153.202 16.051 L 160.892 16.051 L 162.156 19.564 L 166.801 19.564 L 159.086 0 Z M 154.492 12.487 L 157.073 5.538 L 159.602 12.487 Z M 173.278 15.744 L 173.278 0 L 168.865 0 L 168.865 19.564 L 182 19.564 L 182 15.744 Z" fill="rgb(255,255,255)"></path></g></svg>`,
                    withExternalLayout: !0,
                    children: f(q, {
                      className: `framer-1whzncs`,
                      layoutDependency: O,
                      layoutId: `j0HUKpDoD`,
                      requiresOverflowVisible: !1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 182 24" overflow="visible"><path d="M 2.555 14.744 C 1.806 14.744 1.213 15 0.723 15.487 C 0.258 15.974 0 16.59 0 17.308 C 0 18.026 0.232 18.641 0.723 19.128 C 1.213 19.615 1.806 19.872 2.555 19.872 C 3.303 19.872 3.896 19.615 4.387 19.128 C 4.877 18.641 5.109 18.026 5.109 17.308 C 5.109 16.59 4.877 15.974 4.387 15.487 C 3.91 14.992 3.244 14.722 2.555 14.744 Z M 11.973 0 L 8.593 0 L 8.593 19.564 L 13.006 19.564 L 13.006 11.923 L 21.831 11.923 L 21.831 8.128 L 13.006 8.128 L 13.006 3.769 L 22.295 3.769 L 22.295 0 Z M 25.056 0 L 29.469 0 L 29.469 19.564 L 25.056 19.564 Z M 45.623 11.872 L 36.307 0 L 33.211 0 L 33.211 19.564 L 37.623 19.564 L 37.623 7.846 L 46.784 19.564 L 50.061 19.564 L 50.061 0 L 45.623 0 Z M 60.125 0 L 52.358 19.564 L 56.899 19.564 L 58.215 16.051 L 65.905 16.051 L 67.169 19.564 L 71.814 19.564 L 64.099 0 Z M 59.505 12.487 L 62.086 5.538 L 64.615 12.487 Z M 78.291 0 L 73.879 0 L 73.879 19.564 L 87.013 19.564 L 87.013 15.744 L 78.291 15.744 Z M 87.658 20.641 L 101.748 20.641 L 101.748 24 L 87.658 24 Z M 106.96 0 L 103.58 0 L 103.58 19.564 L 107.992 19.564 L 107.992 11.923 L 116.818 11.923 L 116.818 8.128 L 107.992 8.128 L 107.992 3.769 L 117.282 3.769 L 117.282 0 Z M 120.043 0 L 124.456 0 L 124.456 19.564 L 120.043 19.564 Z M 140.609 11.872 L 131.294 0 L 128.197 0 L 128.197 19.564 L 132.61 19.564 L 132.61 7.846 L 141.771 19.564 L 145.048 19.564 L 145.048 0 L 140.609 0 Z M 155.112 0 L 147.344 19.564 L 151.886 19.564 L 153.202 16.051 L 160.892 16.051 L 162.156 19.564 L 166.801 19.564 L 159.086 0 Z M 154.492 12.487 L 157.073 5.538 L 159.602 12.487 Z M 173.278 15.744 L 173.278 0 L 168.865 0 L 168.865 19.564 L 182 19.564 L 182 15.744 Z" fill="rgb(255,255,255)"></path></svg>`,
                      withExternalLayout: !0,
                      children: [
                        l(q, {
                          className: `framer-9qrg07`,
                          layoutDependency: O,
                          layoutId: `h8Szx45Iy`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.109 5.129" overflow="visible"><path d="M 2.555 0.001 C 1.806 0.001 1.213 0.258 0.723 0.745 C 0.258 1.232 0 1.847 0 2.565 C 0 3.283 0.232 3.899 0.723 4.386 C 1.213 4.873 1.806 5.129 2.555 5.129 C 3.303 5.129 3.896 4.873 4.387 4.386 C 4.877 3.899 5.109 3.283 5.109 2.565 C 5.109 1.847 4.877 1.232 4.387 0.745 C 3.91 0.25 3.244 -0.02 2.555 0.001 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-1wbt3uw`,
                          layoutDependency: O,
                          layoutId: `hu4ag8HOA`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.702 19.564" overflow="visible"><path d="M 3.38 0 L 0 0 L 0 19.564 L 4.413 19.564 L 4.413 11.923 L 13.238 11.923 L 13.238 8.128 L 4.413 8.128 L 4.413 3.769 L 13.702 3.769 L 13.702 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-154gf9w`,
                          layoutDependency: O,
                          layoutId: `sca0nuOsG`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.413 19.564" overflow="visible"><path d="M 0 0 L 4.413 0 L 4.413 19.564 L 0 19.564 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-13ih234`,
                          layoutDependency: O,
                          layoutId: `Hy0PSYaX1`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.85 19.564" overflow="visible"><path d="M 12.412 11.872 L 3.097 0 L 0 0 L 0 19.564 L 4.413 19.564 L 4.413 7.846 L 13.573 19.564 L 16.85 19.564 L 16.85 0 L 12.412 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-132c3pj`,
                          layoutDependency: O,
                          layoutId: `NtNBrZPbt`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.457 19.564" overflow="visible"><path d="M 7.767 0 L 0 19.564 L 4.542 19.564 L 5.858 16.051 L 13.547 16.051 L 14.812 19.564 L 19.457 19.564 L 11.741 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-1hk14ci`,
                          layoutDependency: O,
                          layoutId: `ToW1D4Jkl`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.109 6.949" overflow="visible"><path d="M 0 6.949 L 2.58 0 L 5.109 6.949 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-88ima0`,
                          layoutDependency: O,
                          layoutId: `yHfa3Dj3m`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.135 19.564" overflow="visible"><path d="M 4.413 0 L 0 0 L 0 19.564 L 13.135 19.564 L 13.135 15.744 L 4.413 15.744 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-cf1ngc`,
                          layoutDependency: O,
                          layoutId: `pfXjJxZac`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.089 3.359" overflow="visible"><path d="M 0 0 L 14.089 0 L 14.089 3.359 L 0 3.359 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-g9unzv`,
                          layoutDependency: O,
                          layoutId: `A2aNaaGOG`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.702 19.564" overflow="visible"><path d="M 3.38 0 L 0 0 L 0 19.564 L 4.413 19.564 L 4.413 11.923 L 13.238 11.923 L 13.238 8.128 L 4.413 8.128 L 4.413 3.769 L 13.702 3.769 L 13.702 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-yuqycq`,
                          layoutDependency: O,
                          layoutId: `GBCRy7GvY`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.413 19.564" overflow="visible"><path d="M 0 0 L 4.413 0 L 4.413 19.564 L 0 19.564 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-1stcdxq`,
                          layoutDependency: O,
                          layoutId: `sigPhbP6P`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.85 19.564" overflow="visible"><path d="M 12.412 11.872 L 3.097 0 L 0 0 L 0 19.564 L 4.413 19.564 L 4.413 7.846 L 13.573 19.564 L 16.85 19.564 L 16.85 0 L 12.412 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-gj6suv`,
                          layoutDependency: O,
                          layoutId: `o69Qzaq9R`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.457 19.564" overflow="visible"><path d="M 7.767 0 L 0 19.564 L 4.542 19.564 L 5.858 16.051 L 13.547 16.051 L 14.812 19.564 L 19.457 19.564 L 11.741 0 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-ods6uh`,
                          layoutDependency: O,
                          layoutId: `XCpjIBDxI`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.109 6.949" overflow="visible"><path d="M 0 6.949 L 2.58 0 L 5.109 6.949 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        l(q, {
                          className: `framer-too6ol`,
                          layoutDependency: O,
                          layoutId: `hIU6g1M9K`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.135 19.564" overflow="visible"><path d="M 4.413 15.744 L 4.413 0 L 0 0 L 0 19.564 L 13.135 19.564 L 13.135 15.744 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-yN7hE.framer-15usp8a, .framer-yN7hE .framer-15usp8a { display: block; }`,
          `.framer-yN7hE.framer-ovwyiz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 45px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 0px 0px 0px; position: relative; width: 217px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yN7hE .framer-13dgind { height: 24px; position: relative; width: 182px; }`,
          `.framer-yN7hE .framer-1whzncs { height: 24px; left: 0px; position: absolute; top: 0px; width: 182px; }`,
          `.framer-yN7hE .framer-9qrg07 { height: 5px; left: 0px; position: absolute; top: 15px; width: 5px; }`,
          `.framer-yN7hE .framer-1wbt3uw { height: 20px; left: 9px; position: absolute; top: 0px; width: 14px; }`,
          `.framer-yN7hE .framer-154gf9w { height: 20px; left: 25px; position: absolute; top: 0px; width: 5px; }`,
          `.framer-yN7hE .framer-13ih234 { height: 20px; left: 33px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-yN7hE .framer-132c3pj { height: 20px; left: 53px; position: absolute; top: 0px; width: 20px; }`,
          `.framer-yN7hE .framer-1hk14ci { height: 7px; left: 60px; position: absolute; top: 6px; width: 5px; }`,
          `.framer-yN7hE .framer-88ima0 { height: 20px; left: 74px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-yN7hE .framer-cf1ngc { height: 4px; left: 88px; position: absolute; top: 21px; width: 14px; }`,
          `.framer-yN7hE .framer-g9unzv { height: 20px; left: 104px; position: absolute; top: 0px; width: 14px; }`,
          `.framer-yN7hE .framer-yuqycq { height: 20px; left: 120px; position: absolute; top: 0px; width: 5px; }`,
          `.framer-yN7hE .framer-1stcdxq { height: 20px; left: 128px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-yN7hE .framer-gj6suv { height: 20px; left: 148px; position: absolute; top: 0px; width: 20px; }`,
          `.framer-yN7hE .framer-ods6uh { height: 7px; left: 155px; position: absolute; top: 6px; width: 5px; }`,
          `.framer-yN7hE .framer-too6ol { height: 20px; left: 169px; position: absolute; top: 0px; width: 13px; }`,
        ],
        `framer-yN7hE`
      )),
      (zn = Rn),
      (Rn.displayName = `FINAL_FINALTag`),
      (Rn.defaultProps = { height: 45, width: 217 }),
      K(Rn, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Vn = e({ __FramerMetadata__: () => nr, default: () => X });
function Hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  X,
  nr,
  rr = t(() => {
    (p(),
      S(),
      _(),
      o(),
      Ae(),
      (Un = w(je)),
      (Wn = [`GV6jvMGC1`, `SKok4jMLr`]),
      (Gn = `framer-EjejV`),
      (Kn = { GV6jvMGC1: `framer-v-v4xdn`, SKok4jMLr: `framer-v-1m7fwoc` }),
      (qn = { delay: 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Jn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (Yn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Xn = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Zn = { CoverImage: `GV6jvMGC1`, CoverVideo: `SKok4jMLr` }),
      (Qn = m.create(d)),
      ($n = ({
        height: e,
        id: t,
        image: n,
        link: r,
        logo: i,
        uRL: a,
        videoPoster: o,
        width: s,
        ...c
      }) => ({
        ...c,
        Egm481Id_: o ?? c.Egm481Id_,
        kIp5EpMd3:
          a ??
          c.kIp5EpMd3 ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
        m_Tifg3X2: r ?? c.m_Tifg3X2,
        SXjjKopWL: i ?? c.SXjjKopWL,
        variant: Zn[c.variant] ?? c.variant ?? `GV6jvMGC1`,
        VypX2yAlC: n ?? c.VypX2yAlC,
      })),
      (er = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (tr = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            {
              style: d,
              className: p,
              layoutId: h,
              variant: _,
              VypX2yAlC: b,
              SXjjKopWL: x,
              Egm481Id_: S,
              m_Tifg3X2: C,
              kIp5EpMd3: w,
              ...E
            } = $n(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: F,
              setVariant: I,
              variants: ee,
            } = P({
              cycleOrder: Wn,
              defaultVariant: `GV6jvMGC1`,
              ref: r,
              variant: _,
              variantClassNames: Kn,
            }),
            R = er(e, ee),
            z = v(Gn),
            V = () => D === `SKok4jMLr`,
            H = () => D !== `SKok4jMLr`;
          return l(g, {
            id: h ?? i,
            children: l(Qn, {
              animate: ee,
              initial: !1,
              children: l(Xn, {
                value: qn,
                children: l(N, {
                  href: C,
                  motionChild: !0,
                  nodeId: `GV6jvMGC1`,
                  openInNewTab: !1,
                  scopeId: `Khijgwu8L`,
                  children: f(m.a, {
                    ...E,
                    ...A,
                    className: `${v(z, `framer-v4xdn`, p, O)} framer-1eo0bar`,
                    "data-framer-name": `CoverImage`,
                    layoutDependency: R,
                    layoutId: `GV6jvMGC1`,
                    ref: r,
                    style: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      ...d,
                    },
                    ...Hn({ SKok4jMLr: { "data-framer-name": `CoverVideo` } }, D, j),
                    children: [
                      V() &&
                        l(W, {
                          children: l(T, {
                            className: `framer-1t6cen-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: R,
                            layoutId: `WekdGwiNW-container`,
                            nodeId: `WekdGwiNW`,
                            rendersWithMotion: !0,
                            scopeId: `Khijgwu8L`,
                            style: { filter: `brightness(0.8)`, WebkitFilter: `brightness(0.8)` },
                            children: l(je, {
                              backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                              borderRadius: 0,
                              bottomLeftRadius: 0,
                              bottomRightRadius: 0,
                              controls: !1,
                              height: `100%`,
                              id: `WekdGwiNW`,
                              isMixedBorderRadius: !1,
                              layoutId: `WekdGwiNW`,
                              loop: !0,
                              muted: !0,
                              objectFit: `cover`,
                              playing: !1,
                              poster: Jn(S),
                              posterEnabled: !0,
                              srcType: `URL`,
                              srcUrl: w,
                              startTime: 0,
                              style: { height: `100%`, width: `100%` },
                              topLeftRadius: 0,
                              topRightRadius: 0,
                              volume: 25,
                              width: `100%`,
                            }),
                          }),
                        }),
                      H() &&
                        l(U, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: y((u?.y || 0) + 0),
                            pixelHeight: 1200,
                            pixelWidth: 1200,
                            sizes: u?.width || `100vw`,
                            ...Yn(b),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-147uhr`,
                          draggable: `false`,
                          layoutDependency: R,
                          layoutId: `h0ipgz3_8`,
                          style: { filter: `brightness(0.6)`, WebkitFilter: `brightness(0.6)` },
                        }),
                      l(m.div, {
                        className: `framer-gbp2da`,
                        "data-framer-name": `Logo`,
                        layoutDependency: R,
                        layoutId: `ZdHUSwB0l`,
                        children: l(U, {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 43.5,
                            intrinsicWidth: 115,
                            loading: y(
                              (u?.y || 0) + 0 + (((u?.height || 215) - 0 - 39) / 2 + 0 + 0) + 0 + 0
                            ),
                            pixelHeight: 87,
                            pixelWidth: 230,
                            sizes: `110px`,
                            ...Yn(x),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-hya4pj`,
                          "data-framer-name": `ClientLogo`,
                          layoutDependency: R,
                          layoutId: `u_QhoK1ra`,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-EjejV.framer-1eo0bar, .framer-EjejV .framer-1eo0bar { display: block; }`,
          `.framer-EjejV.framer-v4xdn { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 215px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 320px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-EjejV .framer-1t6cen-container { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-EjejV .framer-147uhr { bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-EjejV .framer-gbp2da { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; user-select: none; width: min-content; z-index: 1; }`,
          `.framer-EjejV .framer-hya4pj { aspect-ratio: 2.6436781609195403 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 39px); overflow: visible; pointer-events: none; position: relative; width: 110px; }`,
        ],
        `framer-EjejV`
      )),
      (X = tr),
      (tr.displayName = `Client Card`),
      (tr.defaultProps = { height: 215, width: 320 }),
      E(tr, {
        variant: {
          options: [`GV6jvMGC1`, `SKok4jMLr`],
          optionTitles: [`CoverImage`, `CoverVideo`],
          title: `Variant`,
          type: H.Enum,
        },
        VypX2yAlC: { title: `Image`, type: H.ResponsiveImage },
        SXjjKopWL: { title: `Logo`, type: H.ResponsiveImage },
        Egm481Id_: { title: `VideoPoster`, type: H.ResponsiveImage },
        m_Tifg3X2: { title: `Link`, type: H.Link },
        kIp5EpMd3: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          title: `URL`,
          type: H.String,
        },
        onkIp5EpMd3Change: { changes: `kIp5EpMd3`, type: H.ChangeHandler },
      }),
      K(tr, [{ explicitInter: !0, fonts: [] }, ...Un], { supportsExplicitInterCodegen: !0 }),
      (nr = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerKhijgwu8L`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerVariables: `{"VypX2yAlC":"image","SXjjKopWL":"logo","Egm481Id_":"videoPoster","m_Tifg3X2":"link","kIp5EpMd3":"uRL"}`,
              framerIntrinsicHeight: `215`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `320`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"SKok4jMLr":{"layout":["fixed","fixed"]}}}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function ir(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (ar = { ZyuxG8xXx: { hover: !0 } }),
      (or = `framer-Gtepf`),
      (sr = { ZyuxG8xXx: `framer-v-1mou74d` }),
      (cr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (lr = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (ur = m.create(d)),
      (dr = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (fr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pr = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = dr(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({
              defaultVariant: `ZyuxG8xXx`,
              enabledGestures: ar,
              ref: r,
              variant: m,
              variantClassNames: sr,
            }),
            O = fr(e, D),
            k = v(or);
          return l(g, {
            id: p ?? i,
            children: l(ur, {
              animate: D,
              initial: !1,
              children: l(lr, {
                value: cr,
                children: l(U, {
                  ...h,
                  ...S,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 45,
                    intrinsicWidth: 56,
                    loading: y(u?.y || 0),
                    pixelHeight: 45,
                    pixelWidth: 56,
                    sizes: u?.width || `100vw`,
                    src: `../../assets/images/z7iqm9BwewMwg1PC3K9MnyaC7JE.png`,
                  },
                  className: v(k, `framer-1mou74d`, f, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `ZyuxG8xXx`,
                  ref: r,
                  style: { rotate: 0, ...d },
                  variants: { "ZyuxG8xXx-hover": { rotate: 17 } },
                  ...ir({ "ZyuxG8xXx-hover": { "data-framer-name": void 0 } }, _, C),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Gtepf.framer-1f4xeow, .framer-Gtepf .framer-1f4xeow { display: block; }`,
          `.framer-Gtepf.framer-1mou74d { cursor: pointer; height: 45px; overflow: visible; position: relative; width: 56px; }`,
        ],
        `framer-Gtepf`
      )),
      (mr = pr),
      (pr.displayName = `Lamp`),
      (pr.defaultProps = { height: 45, width: 56 }),
      K(pr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function gr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (_r = x(m.div)),
      (vr = [`FCvduN2U9`, `P1RI678P9`, `KZwBhGAJs`]),
      (yr = `framer-ArRMd`),
      (br = {
        FCvduN2U9: `framer-v-q6xibl`,
        KZwBhGAJs: `framer-v-c3vms0`,
        P1RI678P9: `framer-v-8pxice`,
      }),
      (xr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Sr = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Cr = { Desktop: `FCvduN2U9`, Phone: `KZwBhGAJs`, Tablet: `P1RI678P9` }),
      (wr = m.create(d)),
      (Tr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Cr[r.variant] ?? r.variant ?? `FCvduN2U9`,
      })),
      (Er = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Dr = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L();
          B();
          let { style: u, className: p, layoutId: h, variant: _, ...y } = Tr(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = P({
              cycleOrder: vr,
              defaultVariant: `FCvduN2U9`,
              ref: r,
              variant: _,
              variantClassNames: br,
            }),
            j = Er(e, k),
            M = v(yr);
          return l(g, {
            id: h ?? i,
            children: l(wr, {
              animate: k,
              initial: !1,
              children: l(Sr, {
                value: xr,
                children: l(m.div, {
                  ...y,
                  ...w,
                  className: v(M, `framer-q6xibl`, p, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `FCvduN2U9`,
                  ref: r,
                  style: { ...u },
                  ...gr(
                    {
                      KZwBhGAJs: { "data-framer-name": `Phone` },
                      P1RI678P9: { "data-framer-name": `Tablet` },
                    },
                    x,
                    T
                  ),
                  children: l(_r, {
                    className: `framer-c6b47q`,
                    layoutDependency: j,
                    layoutId: `jXqFo2rg8`,
                    style: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    tickerEffectAlign: `center`,
                    tickerEffectDirectionModifier: `default`,
                    tickerEffectDraggable: !1,
                    tickerEffectEnabled: !0,
                    tickerEffectGap: 10,
                    tickerEffectHoverModifier: 60,
                    tickerEffectOverflow: `visible`,
                    tickerEffectPosition: `relative`,
                    tickerEffectStackDirection: `row`,
                    tickerEffectVelocity: 100,
                    children: l(b, {
                      children: l(A, {
                        __fromCanvasComponent: !0,
                        children: l(d, {
                          children: f(m.h1, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                              "--framer-font-size": `166px`,
                              "--framer-font-weight": `600`,
                              "--framer-letter-spacing": `-0.04em`,
                              "--framer-line-height": `1em`,
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-gdpscs, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                            },
                            children: [
                              `featured work`,
                              l(m.span, {
                                style: {
                                  "--framer-text-color": `var(--extracted-1sp2osd, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                                },
                                children: `*`,
                              }),
                              `   `,
                            ],
                          }),
                        }),
                        className: `framer-p4s05z`,
                        "data-framer-name": `Text`,
                        fonts: [`FS;Outfit-semibold`],
                        layoutDependency: j,
                        layoutId: `vhMLrFHru`,
                        style: {
                          "--extracted-1sp2osd": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                          "--extracted-gdpscs": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...gr(
                          {
                            KZwBhGAJs: {
                              children: l(d, {
                                children: f(m.h1, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `60px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: [
                                    `featured work`,
                                    l(m.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-1sp2osd, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                                      },
                                      children: `*`,
                                    }),
                                    `   `,
                                  ],
                                }),
                              }),
                            },
                            P1RI678P9: {
                              children: l(d, {
                                children: f(m.h1, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `129px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: [
                                    `featured work`,
                                    l(m.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-1sp2osd, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                                      },
                                      children: `*`,
                                    }),
                                    `   `,
                                  ],
                                }),
                              }),
                            },
                          },
                          x,
                          T
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ArRMd.framer-1kuu6mk, .framer-ArRMd .framer-1kuu6mk { display: block; }`,
          `.framer-ArRMd.framer-q6xibl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-ArRMd .framer-c6b47q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ArRMd .framer-p4s05z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-ArRMd`
      )),
      (Or = Dr),
      (Dr.displayName = `Ticker Header`),
      (Dr.defaultProps = { height: 166, width: 1200 }),
      E(Dr, {
        variant: {
          options: [`FCvduN2U9`, `P1RI678P9`, `KZwBhGAJs`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(
        Dr,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ar(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (jr = { cembM2sLI: { hover: !0 } }),
      (Mr = `framer-tnjo1`),
      (Nr = { cembM2sLI: `framer-v-my80ak` }),
      (Pr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Fr = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Ir = m.create(d)),
      (Lr = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Rr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (zr = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = Lr(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({
              defaultVariant: `cembM2sLI`,
              enabledGestures: jr,
              ref: r,
              variant: m,
              variantClassNames: Nr,
            }),
            O = Rr(e, D),
            k = v(Mr);
          return l(g, {
            id: p ?? i,
            children: l(Ir, {
              animate: D,
              initial: !1,
              children: l(Fr, {
                value: Pr,
                children: l(U, {
                  ...h,
                  ...S,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 45,
                    intrinsicWidth: 46,
                    loading: y(u?.y || 0),
                    pixelHeight: 45,
                    pixelWidth: 46,
                    sizes: u?.width || `100vw`,
                    src: `../../assets/images/n3VTfiXUGql3C0TJIFvXgs8Ko.png`,
                  },
                  className: v(k, `framer-my80ak`, f, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `cembM2sLI`,
                  ref: r,
                  style: { rotate: 0, ...d },
                  variants: { "cembM2sLI-hover": { rotate: -19 } },
                  ...Ar({ "cembM2sLI-hover": { "data-framer-name": void 0 } }, _, C),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-tnjo1.framer-x64d5r, .framer-tnjo1 .framer-x64d5r { display: block; }`,
          `.framer-tnjo1.framer-my80ak { cursor: pointer; height: 45px; overflow: visible; position: relative; width: 46px; }`,
        ],
        `framer-tnjo1`
      )),
      (Br = zr),
      (zr.displayName = `Mug`),
      (zr.defaultProps = { height: 45, width: 46 }),
      K(zr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Hr = e({ __FramerMetadata__: () => ai, default: () => ii });
function Ur(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (Wr = ae(Y(U))),
      (Gr = [`ofpoz_Qo3`, `ZONwt7xR5`]),
      (Kr = `framer-noFgs`),
      (qr = { ofpoz_Qo3: `framer-v-n4y7fz`, ZONwt7xR5: `framer-v-1lwxse4` }),
      (Jr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Yr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 3.9, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Xr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Zr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.5, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Qr = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      ($r = { "Variant 1": `ofpoz_Qo3`, "Variant 3": `ZONwt7xR5` }),
      (ei = m.create(d)),
      (ti = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: $r[r.variant] ?? r.variant ?? `ofpoz_Qo3`,
      })),
      (ni = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ri = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: h, ..._ } = ti(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = P({
              cycleOrder: Gr,
              defaultVariant: `ofpoz_Qo3`,
              ref: r,
              variant: h,
              variantClassNames: qr,
            }),
            k = ni(e, O),
            A = v(Kr);
          return l(g, {
            id: p ?? i,
            children: l(ei, {
              animate: O,
              initial: !1,
              children: l(Qr, {
                value: Jr,
                children: l(m.div, {
                  ..._,
                  ...C,
                  className: v(A, `framer-n4y7fz`, f, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `ofpoz_Qo3`,
                  ref: r,
                  style: { ...d },
                  ...Ur({ ZONwt7xR5: { "data-framer-name": `Variant 3` } }, b, w),
                  children: l(Wr, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: Yr,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 590,
                      intrinsicWidth: 450,
                      loading: y(
                        (u?.y || 0) +
                          (0 + ((u?.height || 232) - 0 - ((u?.height || 232) - 0) * 1) / 2)
                      ),
                      pixelHeight: 1024,
                      pixelWidth: 720,
                      positionX: `right`,
                      positionY: `center`,
                      sizes: `max(${u?.width || `100vw`}, 1px)`,
                      src: `../../assets/images/bssDxEIkplBAwpalnxd7jncvrpA.jpg`,
                      srcSet: `../../assets/images/bssDxEIkplBAwpalnxd7jncvrpA.jpg 720w`,
                    },
                    className: `framer-1ys7gsm`,
                    "data-framer-appear-id": `1ys7gsm`,
                    "data-framer-name": `CoffeeArt`,
                    initial: Xr,
                    layoutDependency: k,
                    layoutId: `KoSG8fup_`,
                    optimized: !0,
                    ...Ur({ ZONwt7xR5: { animate: Zr } }, b, w),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-noFgs.framer-n34p0u, .framer-noFgs .framer-n34p0u { display: block; }`,
          `.framer-noFgs.framer-n4y7fz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 232px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 168px; }`,
          `.framer-noFgs .framer-1ys7gsm { flex: 1 0 0px; height: 100%; mix-blend-mode: multiply; overflow: visible; pointer-events: none; position: relative; width: 1px; z-index: 0; }`,
        ],
        `framer-noFgs`
      )),
      (ii = ri),
      (ri.displayName = `DraggablePoster4`),
      (ri.defaultProps = { height: 232, width: 168 }),
      E(ri, {
        variant: {
          options: [`ofpoz_Qo3`, `ZONwt7xR5`],
          optionTitles: [`Variant 1`, `Variant 3`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(ri, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (ai = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerupPhH4U2V`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `232`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `168`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ZONwt7xR5":{"layout":["fixed","fixed"]}}}`,
              framerImmutableVariables: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  si = e({ __FramerMetadata__: () => wi, default: () => Ci });
function ci(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti = t(() => {
    (p(),
      S(),
      _(),
      o(),
      Ae(),
      (li = w(je)),
      (ui = [`LZTjuhhpk`, `D_ls4YDW6`, `rFTOIw0lf`, `lHQNyG3DT`]),
      (di = `framer-5VDnE`),
      (fi = {
        D_ls4YDW6: `framer-v-nhb8as`,
        lHQNyG3DT: `framer-v-2v6aec`,
        LZTjuhhpk: `framer-v-rjy3q6`,
        rFTOIw0lf: `framer-v-1r273qj`,
      }),
      (pi = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (mi = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
      (hi = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (gi = (e, t) => `translate(-50%, -50%) ${t}`),
      (_i = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (vi = {
        "Variant 1": `LZTjuhhpk`,
        "Variant 2": `D_ls4YDW6`,
        "Variant 3": `rFTOIw0lf`,
        "Variant 4": `lHQNyG3DT`,
      }),
      (yi = m.create(d)),
      (bi = ({ cursor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        oswkqhnf6: e ?? i.oswkqhnf6,
        variant: vi[i.variant] ?? i.variant ?? `LZTjuhhpk`,
      })),
      (xi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Si = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L();
          B();
          let { style: u, className: p, layoutId: h, variant: _, oswkqhnf6: y, ...b } = bi(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: j,
            } = P({
              cycleOrder: ui,
              defaultVariant: `LZTjuhhpk`,
              ref: r,
              variant: _,
              variantClassNames: fi,
            }),
            N = xi(e, j),
            { activeVariantCallback: F, delay: I } = ne(x),
            ee = F(async (...e) => {
              await I(() => k(`rFTOIw0lf`, !0), 300);
            }),
            R = F(async (...e) => {
              (O({ isPressed: !1 }), k(`lHQNyG3DT`));
            }),
            z = F(async (...e) => {
              k(`rFTOIw0lf`);
            });
          M(x, { D_ls4YDW6: ee });
          let V = v(di),
            H = () => x !== `lHQNyG3DT`;
          return l(g, {
            id: h ?? i,
            children: l(yi, {
              animate: j,
              initial: !1,
              children: l(_i, {
                value: pi,
                ...ci({ lHQNyG3DT: { value: hi }, rFTOIw0lf: { value: mi } }, x, E),
                children: f(m.div, {
                  ...b,
                  ...w,
                  className: v(V, `framer-rjy3q6`, p, S),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: N,
                  layoutId: `LZTjuhhpk`,
                  ref: r,
                  style: { ...u },
                  ...ci(
                    {
                      D_ls4YDW6: { "data-framer-name": `Variant 2`, "data-highlight": !0 },
                      lHQNyG3DT: { "data-framer-name": `Variant 4` },
                      rFTOIw0lf: {
                        "data-framer-cursor": y,
                        "data-framer-name": `Variant 3`,
                        "data-highlight": !0,
                        onTap: R,
                      },
                    },
                    x,
                    E
                  ),
                  children: [
                    H() &&
                      l(m.div, {
                        className: `framer-100mnpo`,
                        "data-border": !0,
                        "data-framer-name": `PlayCircle`,
                        layoutDependency: N,
                        layoutId: `HTMBj4ge4`,
                        style: {
                          "--border-bottom-width": `5px`,
                          "--border-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                          "--border-left-width": `5px`,
                          "--border-right-width": `5px`,
                          "--border-style": `solid`,
                          "--border-top-width": `5px`,
                          borderBottomLeftRadius: 70,
                          borderBottomRightRadius: 70,
                          borderTopLeftRadius: 70,
                          borderTopRightRadius: 70,
                          opacity: 0,
                        },
                        transformTemplate: gi,
                        variants: { rFTOIw0lf: { opacity: 1 } },
                        children: l(A, {
                          __fromCanvasComponent: !0,
                          children: l(d, {
                            children: l(m.p, {
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
                          className: `framer-b9e44v`,
                          fonts: [`FS;Outfit-semibold`],
                          layoutDependency: N,
                          layoutId: `R5GOMF_x6`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    l(W, {
                      children: l(T, {
                        className: `framer-sjoon5-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: N,
                        layoutId: `VVUNhJqd2-container`,
                        nodeId: `VVUNhJqd2`,
                        rendersWithMotion: !0,
                        scopeId: `Vj4aAeKEU`,
                        style: {
                          filter: `blur(0px)`,
                          opacity: 0,
                          rotateX: 0,
                          transformPerspective: 950,
                          WebkitFilter: `blur(0px)`,
                        },
                        variants: {
                          D_ls4YDW6: {
                            filter: `blur(10px)`,
                            opacity: 1,
                            originY: 0.21,
                            rotateX: 54,
                            WebkitFilter: `blur(10px)`,
                          },
                          lHQNyG3DT: { opacity: 1, rotateX: 0 },
                          rFTOIw0lf: { opacity: 1, rotateX: 0 },
                        },
                        children: l(je, {
                          backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `VVUNhJqd2`,
                          isMixedBorderRadius: !1,
                          layoutId: `VVUNhJqd2`,
                          loop: !0,
                          muted: !0,
                          objectFit: `fill`,
                          playing: !1,
                          poster: `../../assets/images/tJsD7xrbCGWGjMrILAtVywtorg.png`,
                          posterEnabled: !0,
                          srcType: `URL`,
                          srcUrl: `../../assets/videos/main-99aed0.mp4`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: `100%`,
                          ...ci(
                            {
                              D_ls4YDW6: {
                                borderRadius: 25,
                                bottomLeftRadius: 25,
                                bottomRightRadius: 25,
                                topLeftRadius: 25,
                                topRightRadius: 25,
                              },
                              lHQNyG3DT: {
                                borderRadius: 25,
                                bottomLeftRadius: 25,
                                bottomRightRadius: 25,
                                controls: !0,
                                loop: !1,
                                muted: !1,
                                onEnd: z,
                                playing: !0,
                                srcUrl: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69cb86457a8212fa5fec9764/main.mp4`,
                                topLeftRadius: 25,
                                topRightRadius: 25,
                              },
                              rFTOIw0lf: {
                                borderRadius: 25,
                                bottomLeftRadius: 25,
                                bottomRightRadius: 25,
                                topLeftRadius: 25,
                                topRightRadius: 25,
                              },
                            },
                            x,
                            E
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
          `.framer-5VDnE.framer-o62mru, .framer-5VDnE .framer-o62mru { display: block; }`,
          `.framer-5VDnE.framer-rjy3q6 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 650px; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 1200px; }`,
          `.framer-5VDnE .framer-100mnpo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; mix-blend-mode: difference; overflow: hidden; padding: 18px 30px 26px 30px; position: absolute; top: 50%; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-5VDnE .framer-b9e44v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-5VDnE .framer-sjoon5-container { aspect-ratio: 1.5333333333333334 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 130px); position: relative; width: 20%; }`,
          `.framer-5VDnE.framer-v-nhb8as.framer-rjy3q6 { height: min-content; }`,
          `.framer-5VDnE.framer-v-nhb8as .framer-sjoon5-container { aspect-ratio: unset; height: 630px; width: 25%; }`,
          `.framer-5VDnE.framer-v-1r273qj.framer-rjy3q6 { align-content: center; align-items: center; cursor: pointer; }`,
          `.framer-5VDnE.framer-v-1r273qj .framer-sjoon5-container { aspect-ratio: 1.7723076923076924 / 1; height: var(--framer-aspect-ratio-supported, 113px); width: 100%; }`,
          `.framer-5VDnE.framer-v-2v6aec.framer-rjy3q6 { align-content: center; align-items: center; }`,
          `.framer-5VDnE.framer-v-2v6aec .framer-sjoon5-container { aspect-ratio: 1.7723076923076924 / 1; height: var(--framer-aspect-ratio-supported, 113px); width: 100%; z-index: 2; }`,
          `.framer-5VDnE[data-border="true"]::after, .framer-5VDnE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-5VDnE`
      )),
      (Ci = Si),
      (Si.displayName = `Showreel`),
      (Si.defaultProps = { height: 650, width: 1200 }),
      E(Si, {
        variant: {
          options: [`LZTjuhhpk`, `D_ls4YDW6`, `rFTOIw0lf`, `lHQNyG3DT`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: H.Enum,
        },
        oswkqhnf6: { title: `Cursor`, type: H.CustomCursor },
      }),
      K(
        Si,
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
          ...li,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (wi = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerVj4aAeKEU`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1200`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `650`,
              framerVariables: `{"oswkqhnf6":"cursor"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"D_ls4YDW6":{"layout":["fixed","auto"]},"rFTOIw0lf":{"layout":["fixed","fixed"]},"lHQNyG3DT":{"layout":["fixed","fixed"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (Ei = `framer-YPeMb`),
      (Di = { HAG2lmVFR: `framer-v-t8sqon` }),
      (Oi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ki = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Ai = m.create(d)),
      (ji = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Mi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ni = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = ji(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = P({ defaultVariant: `HAG2lmVFR`, ref: r, variant: m, variantClassNames: Di }),
            O = Mi(e, D),
            k = v(Ei);
          return l(g, {
            id: p ?? i,
            children: l(Ai, {
              animate: D,
              initial: !1,
              children: l(ki, {
                value: Oi,
                children: l(U, {
                  ...h,
                  ...S,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 45,
                    intrinsicWidth: 75,
                    loading: y(u?.y || 0),
                    pixelHeight: 45,
                    pixelWidth: 75,
                    sizes: u?.width || `100vw`,
                    src: `../../assets/images/eyywHU5EahGjcyhpTfFeFWC2m20.gif`,
                  },
                  className: v(k, `framer-t8sqon`, f, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `HAG2lmVFR`,
                  ref: r,
                  style: { ...d },
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-YPeMb.framer-154waw0, .framer-YPeMb .framer-154waw0 { display: block; }`,
          `.framer-YPeMb.framer-t8sqon { height: 45px; overflow: visible; position: relative; width: 75px; }`,
        ],
        `framer-YPeMb`
      )),
      (Pi = Ni),
      (Ni.displayName = `Skateboard`),
      (Ni.defaultProps = { height: 45, width: 75 }),
      K(Ni, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Ii = e({ __FramerMetadata__: () => $i, default: () => Qi });
function Li(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (Ri = ae(Y(U))),
      (zi = [`wW3FFmMIq`, `FMcfehdfQ`]),
      (Bi = `framer-PKrJE`),
      (Vi = { FMcfehdfQ: `framer-v-19u1ljq`, wW3FFmMIq: `framer-v-1n8526w` }),
      (Hi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ui = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 4, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Wi = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Gi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.6, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ki = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (qi = { "Variant 1": `wW3FFmMIq`, "Variant 3": `FMcfehdfQ` }),
      (Ji = m.create(d)),
      (Yi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: qi[r.variant] ?? r.variant ?? `wW3FFmMIq`,
      })),
      (Xi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Zi = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: h, ..._ } = Yi(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = P({
              cycleOrder: zi,
              defaultVariant: `wW3FFmMIq`,
              ref: r,
              variant: h,
              variantClassNames: Vi,
            }),
            k = Xi(e, O),
            A = v(Bi);
          return l(g, {
            id: p ?? i,
            children: l(Ji, {
              animate: O,
              initial: !1,
              children: l(Ki, {
                value: Hi,
                children: l(m.div, {
                  ..._,
                  ...C,
                  className: v(A, `framer-1n8526w`, f, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `wW3FFmMIq`,
                  ref: r,
                  style: { ...d },
                  ...Li({ FMcfehdfQ: { "data-framer-name": `Variant 3` } }, b, w),
                  children: l(Ri, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: Ui,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 590,
                      intrinsicWidth: 450,
                      loading: y(
                        (u?.y || 0) +
                          (0 + ((u?.height || 200) - 0 - ((u?.height || 200) - 0) * 1) / 2)
                      ),
                      pixelHeight: 928,
                      pixelWidth: 1251,
                      positionX: `center`,
                      positionY: `top`,
                      sizes: `max(${u?.width || `100vw`}, 1px)`,
                      src: `../../assets/images/ScU99IyOsTtb1lxML9872VIoxU-7f1308.jpg`,
                      srcSet: `../../assets/images/ScU99IyOsTtb1lxML9872VIoxU.jpg 512w,../../assets/images/ScU99IyOsTtb1lxML9872VIoxU-382e14.jpg 1024w,../../assets/images/ScU99IyOsTtb1lxML9872VIoxU-7f1308.jpg 1251w`,
                    },
                    className: `framer-1k89tjj`,
                    "data-framer-appear-id": `1k89tjj`,
                    "data-framer-name": `LogoArt`,
                    initial: Wi,
                    layoutDependency: k,
                    layoutId: `WapLTxrRJ`,
                    optimized: !0,
                    ...Li({ FMcfehdfQ: { animate: Gi } }, b, w),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-PKrJE.framer-1s7b8fl, .framer-PKrJE .framer-1s7b8fl { display: block; }`,
          `.framer-PKrJE.framer-1n8526w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 276px; }`,
          `.framer-PKrJE .framer-1k89tjj { flex: 1 0 0px; height: 100%; mix-blend-mode: multiply; overflow: visible; pointer-events: none; position: relative; width: 1px; z-index: 0; }`,
        ],
        `framer-PKrJE`
      )),
      (Qi = Zi),
      (Zi.displayName = `DraggablePoster5`),
      (Zi.defaultProps = { height: 200, width: 276 }),
      E(Zi, {
        variant: {
          options: [`wW3FFmMIq`, `FMcfehdfQ`],
          optionTitles: [`Variant 1`, `Variant 3`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(Zi, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      ($i = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerwnPsgB1AD`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `276`,
              framerIntrinsicHeight: `200`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"FMcfehdfQ":{"layout":["fixed","fixed"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  ta = e({ __FramerMetadata__: () => va, default: () => _a });
function na(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya = t(() => {
    (p(),
      S(),
      _(),
      o(),
      (ra = ae(Y(U))),
      (ia = [`S_aynm5Kz`, `Vyckx1Iao`]),
      (aa = `framer-xVOwp`),
      (oa = { S_aynm5Kz: `framer-v-1lv0lx9`, Vyckx1Iao: `framer-v-1qu37ek` }),
      (sa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ca = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 3.7, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (la = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ua = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.3, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (da = ({ value: e, children: t }) => {
        let n = r(h),
          i = e ?? n.transition,
          o = a(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (fa = { "Variant 1": `S_aynm5Kz`, "Variant 3": `Vyckx1Iao` }),
      (pa = m.create(d)),
      (ma = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: fa[r.variant] ?? r.variant ?? `S_aynm5Kz`,
      })),
      (ha = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ga = D(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = L(),
            u = B(),
            { style: d, className: f, layoutId: p, variant: h, ..._ } = ma(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = P({
              cycleOrder: ia,
              defaultVariant: `S_aynm5Kz`,
              ref: r,
              variant: h,
              variantClassNames: oa,
            }),
            k = ha(e, O),
            A = v(aa);
          return l(g, {
            id: p ?? i,
            children: l(pa, {
              animate: O,
              initial: !1,
              children: l(da, {
                value: sa,
                children: l(m.div, {
                  ..._,
                  ...C,
                  className: v(A, `framer-1lv0lx9`, f, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `S_aynm5Kz`,
                  ref: r,
                  style: { ...d },
                  ...na({ Vyckx1Iao: { "data-framer-name": `Variant 3` } }, b, w),
                  children: l(ra, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: ca,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 590,
                      intrinsicWidth: 450,
                      loading: y(
                        (u?.y || 0) +
                          0 +
                          (((u?.height || 176) -
                            0 -
                            (Math.max(0, ((u?.height || 176) - 0 - 0) / 1) * 1 + 0)) /
                            2 +
                            0 +
                            0)
                      ),
                      pixelHeight: 950,
                      pixelWidth: 950,
                      sizes: u?.width || `100vw`,
                      src: `../../assets/images/KStWazohrKWwui4n8wNsyKNqet0-f27ec2.jpg`,
                      srcSet: `../../assets/images/KStWazohrKWwui4n8wNsyKNqet0.jpg 512w,../../assets/images/KStWazohrKWwui4n8wNsyKNqet0-f27ec2.jpg 950w`,
                    },
                    className: `framer-1rhbil6`,
                    "data-framer-appear-id": `1rhbil6`,
                    "data-framer-name": `ModuleArt`,
                    initial: la,
                    layoutDependency: k,
                    layoutId: `X0PlmjZCe`,
                    optimized: !0,
                    ...na({ Vyckx1Iao: { animate: ua } }, b, w),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-xVOwp.framer-88brl1, .framer-xVOwp .framer-88brl1 { display: block; }`,
          `.framer-xVOwp.framer-1lv0lx9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 176px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 180px; }`,
          `.framer-xVOwp .framer-1rhbil6 { flex: 1 0 0px; height: 1px; mix-blend-mode: multiply; overflow: visible; pointer-events: none; position: relative; width: 100%; z-index: 0; }`,
        ],
        `framer-xVOwp`
      )),
      (_a = ga),
      (ga.displayName = `DraggablePoster3`),
      (ga.defaultProps = { height: 176, width: 180 }),
      E(ga, {
        variant: {
          options: [`S_aynm5Kz`, `Vyckx1Iao`],
          optionTitles: [`Variant 1`, `Variant 3`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      K(ga, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (va = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerZTAX33o8b`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `180`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `176`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Vyckx1Iao":{"layout":["fixed","fixed"]}}}`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function ba(e) {
  return (t) => {
    let [r, a] = i(`Variant 1`);
    return (
      n(() => {
        let e = document.createElement(`video`);
        ((e.muted = !0), (e.playsInline = !0));
        let t = e.play();
        t !== void 0 &&
          t
            .then(() => {
              a(`Variant 1`);
            })
            .catch((e) => {
              (console.log(`Autoplay blocked: Switching to Image variant.`), a(`Variant 3`));
            });
      }, []),
      l(e, { ...t, variant: r })
    );
  };
}
var xa = t(() => {
    (p(), o());
  }),
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  Z,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  Q,
  xo,
  So,
  Co,
  $,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo;
t(() => {
  (p(),
    S(),
    _(),
    o(),
    Ze(),
    ue(),
    ve(),
    gt(),
    ge(),
    Et(),
    It(),
    we(),
    Qt(),
    vn(),
    An(),
    Bn(),
    Pe(),
    rr(),
    ce(),
    me(),
    hr(),
    de(),
    xe(),
    kr(),
    Vr(),
    oi(),
    Ti(),
    Fi(),
    ea(),
    Ie(),
    Ce(),
    ya(),
    xa(),
    ke(),
    Te(),
    Le(),
    Ve(),
    (Sa = w(ye)),
    (Ca = ie(ye)),
    (wa = w(Se)),
    (Ta = ie(Se)),
    (Ea = w(be)),
    (Da = w(Xt)),
    (Oa = j(G(Xt, { nodeId: `eArCvnK0w`, override: ba, scopeId: `KMvorioYR` }), Lt)),
    (Z = Y(z)),
    (ka = w(gn)),
    (Aa = j(G(gn, { nodeId: `fsaajvOCv`, override: ba, scopeId: `KMvorioYR` }), $t)),
    (ja = w(mt)),
    (Ma = j(G(mt, { nodeId: `UgDnzr38P`, override: ba, scopeId: `KMvorioYR` }), Qe)),
    (Na = w(Qi)),
    (Pa = j(G(Qi, { nodeId: `ax641HTTq`, override: ba, scopeId: `KMvorioYR` }), Ii)),
    (Fa = w(ii)),
    (Ia = j(G(ii, { nodeId: `sTQ9cZ6OE`, override: ba, scopeId: `KMvorioYR` }), Hr)),
    (La = w(_a)),
    (Ra = j(G(_a, { nodeId: `lAkMpPAZv`, override: ba, scopeId: `KMvorioYR` }), ta)),
    (za = w(Ee)),
    (Ba = w(kn)),
    (Va = w(Tt)),
    (Ha = w(mr)),
    (Ua = w(Ft)),
    (Wa = w(Pi)),
    (Ga = w(Br)),
    (Ka = w(zn)),
    (qa = w(De)),
    (Ja = w(Ci)),
    (Ya = ie(j(G(Ci, { nodeId: `t0EBqOzw6`, override: Oe, scopeId: `KMvorioYR` }), si))),
    (Xa = w(Or)),
    (Za = w(pe)),
    (Qa = j(G(pe, { nodeId: `PrSWzkOLu`, override: Oe, scopeId: `KMvorioYR` }), le)),
    ($a = w(se)),
    (eo = j(G(pe, { nodeId: `nlCR1xMrv`, override: Oe, scopeId: `KMvorioYR` }), le)),
    (to = w(Fe)),
    (no = w(Me)),
    (ro = j(G(Me, { nodeId: `aw3y0IWDO`, override: Oe, scopeId: `KMvorioYR` }), Ne)),
    (io = Y(U)),
    (ao = Y(A)),
    (oo = w(X)),
    (so = j(G(X, { nodeId: `eGWHUdgxS`, override: Oe, scopeId: `KMvorioYR` }), Vn)),
    (co = j(G(X, { nodeId: `SoeONp5nr`, override: Oe, scopeId: `KMvorioYR` }), Vn)),
    (lo = Y(m.div)),
    (uo = x(m.div)),
    (fo = w(he)),
    (po = ie(he)),
    (mo = w(_e)),
    (ho = {
      BYVZE4WeS: `(min-width: 810px) and (max-width: 1199.98px)`,
      Dgv7oRDPe: `(max-width: 809.98px)`,
      nSmDd6sEA: `(min-width: 1200px)`,
    }),
    (go = () => typeof document < `u`),
    (_o = []),
    (vo = `framer-XF9OF`),
    (yo = {
      BYVZE4WeS: `framer-v-1l1a1i0`,
      Dgv7oRDPe: `framer-v-1eeimiq`,
      nSmDd6sEA: `framer-v-1ifvuj5`,
    }),
    (bo = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (xo = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: `inertia` }),
    (So = (e) => e.preventDefault()),
    (Co = (e, t) => `translateY(-50%) ${t}`),
    ($ = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (wo = { Desktop: `nSmDd6sEA`, Phone: `Dgv7oRDPe`, Tablet: `BYVZE4WeS` }),
    (To = ({ value: e }) =>
      te()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Eo = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: wo[r.variant] ?? r.variant ?? `nSmDd6sEA`,
    })),
    (Do = { component: _e, variant: `KaZbXU7Hw` }),
    (Oo = { component: _e, variant: `ymH31qajX` }),
    (ko = { component: _e, variant: `EI0WZtA8z` }),
    (Ao = D(
      u(function (e, t) {
        let n = s(null),
          i = t ?? n,
          o = c(),
          { activeLocale: u, setLocale: p } = L(),
          _ = B(),
          { style: y, className: x, layoutId: S, variant: C, ...w } = Eo(e);
        re(a(() => He({}, u), [u]));
        let [T, E] = k(C, ho, !1),
          D = v(vo, Be),
          j = r(O)?.isLayoutTemplate,
          M = bo(j, !!r(h)?.transition?.layout),
          P = s(null),
          I = s(null),
          H = V(`idZny8EYk`),
          te = s(null),
          ne = s(null),
          G = V(`sxn5LS4dS`),
          K = V(`TX8sNigqd`),
          ie = s(null),
          q = s(null),
          ae = V(`MpDyUXQWv`),
          Y = s(null);
        R();
        let oe = V(`MivpxP5Sr`),
          ce = V(`JkWXrvQQj`),
          le = () => (go() ? ![`BYVZE4WeS`, `Dgv7oRDPe`].includes(T) : !0),
          ue = V(`kbY2vMClY`),
          de = s(null),
          pe = V(`jT8rvFpy1`),
          me = V(`bM04fR14P`),
          he = s(null);
        return (
          ee({
            "1bsa85u": { ...Do, variant: `T2APWzmIm` },
            "1dzwwdt": ko,
            bqygee: Oo,
            eg9eyq: { ...Do, variant: `ddmNZILe2` },
            yjimk7: Do,
          }),
          l(O.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: wo,
              primaryVariantId: `nSmDd6sEA`,
              variantClassNames: yo,
            },
            children: f(g, {
              id: S ?? o,
              children: [
                l(To, {
                  value: `html body { background: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)); }`,
                }),
                f(m.div, {
                  ...w,
                  className: v(D, `framer-1ifvuj5`, x),
                  "data-framer-cursor": `yjimk7`,
                  "data-selection": !0,
                  ref: i,
                  style: { ...y },
                  children: [
                    l(W, {
                      height: 64,
                      width: _?.width || `100vw`,
                      y: 0,
                      children: l(z, {
                        className: `framer-7jz0ud-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `YKEllPwp7`,
                        rendersWithMotion: !0,
                        scopeId: `KMvorioYR`,
                        children: l(F, {
                          breakpoint: T,
                          overrides: {
                            Dgv7oRDPe: {
                              __framer__targets: [
                                { ref: P, target: `WgEhqFyTq` },
                                { ref: I, target: `yAuW89ZY2` },
                              ],
                              style: { width: `100%` },
                              variant: Q(`yAuW89ZY2`),
                            },
                          },
                          children: l(Ca, {
                            __framer__animateOnce: !1,
                            __framer__targets: [
                              { ref: P, target: `jm7dtRG0L` },
                              { ref: I, target: `PJQL26TjW` },
                            ],
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            dHsy3xrhB: `bqygee`,
                            height: `100%`,
                            id: `YKEllPwp7`,
                            layoutId: `YKEllPwp7`,
                            style: { height: `100%`, width: `100%` },
                            variant: Q(`PJQL26TjW`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    l(F, {
                      breakpoint: T,
                      overrides: { Dgv7oRDPe: { height: 50, y: 950 } },
                      children: l(W, {
                        height: 64,
                        width: _?.width || `100vw`,
                        y: 936,
                        children: l(z, {
                          className: `framer-wa3jsn-container`,
                          layout: M,
                          layoutScroll: !0,
                          nodeId: `boAYz_n40`,
                          rendersWithMotion: !0,
                          scopeId: `KMvorioYR`,
                          children: l(F, {
                            breakpoint: T,
                            overrides: {
                              Dgv7oRDPe: {
                                __framer__targets: [
                                  { ref: P, target: `iw4ulhat6` },
                                  { ref: I, target: `A3DEEFWfS` },
                                ],
                                variant: Q(`A3DEEFWfS`),
                              },
                            },
                            children: l(Ta, {
                              __framer__animateOnce: !1,
                              __framer__targets: [
                                { ref: P, target: `dL0KB8uoX` },
                                { ref: I, target: `YN2PiCfKL` },
                              ],
                              __framer__threshold: 1,
                              __framer__variantAppearEffectEnabled: !0,
                              height: `100%`,
                              id: `boAYz_n40`,
                              layoutId: `boAYz_n40`,
                              style: { height: `100%`, width: `100%` },
                              variant: Q(`YN2PiCfKL`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    l(W, {
                      children: l(z, {
                        className: `framer-foun8u-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `IvmHhEgzx`,
                        scopeId: `KMvorioYR`,
                        children: l(be, {
                          height: `100%`,
                          id: `IvmHhEgzx`,
                          intensity: 10,
                          layoutId: `IvmHhEgzx`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(m.div, {
                      className: `framer-11jv63j`,
                      "data-framer-name": `Hero`,
                      id: H,
                      layout: M,
                      ref: te,
                      children: [
                        l(F, {
                          breakpoint: T,
                          overrides: {
                            BYVZE4WeS: { width: `824.0741px` },
                            Dgv7oRDPe: { width: `603.9474px` },
                          },
                          children: l(W, {
                            height: 900,
                            width: `1500px`,
                            children: l(Z, {
                              __framer__spring: {
                                bounce: 0,
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                durationBasedSpring: !0,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stagger: 0,
                                stiffness: 500,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  ref: ne,
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0.7,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onScrollTarget`,
                              __framer__transformViewportThreshold: 1,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1gfqinq-container`,
                              "data-framer-name": `HeroMain`,
                              name: `HeroMain`,
                              nodeId: `eArCvnK0w`,
                              rendersWithMotion: !0,
                              scopeId: `KMvorioYR`,
                              children: l(Oa, {
                                height: `100%`,
                                id: `eArCvnK0w`,
                                layoutId: `eArCvnK0w`,
                                name: `HeroMain`,
                                style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                variant: Q(`xy9sQhJyL`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        l(F, {
                          breakpoint: T,
                          overrides: {
                            BYVZE4WeS: {
                              height: 205,
                              width: `calc(${_?.width || `100vw`} * 0.2704)`,
                            },
                            Dgv7oRDPe: {
                              height: 170,
                              width: `calc(${_?.width || `100vw`} * 0.4692)`,
                            },
                          },
                          children: l(W, {
                            height: 258,
                            width: `calc(${_?.width || `100vw`} * 0.23)`,
                            children: l(F, {
                              breakpoint: T,
                              overrides: {
                                Dgv7oRDPe: { "data-framer-cursor": void 0, drag: void 0 },
                              },
                              children: l(Z, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-78l3n2-container`,
                                "data-framer-cursor": `eg9eyq`,
                                drag: !0,
                                dragConstraints: te,
                                dragMomentum: !0,
                                dragTransition: xo,
                                nodeId: `fsaajvOCv`,
                                onMouseDown: So,
                                rendersWithMotion: !0,
                                scopeId: `KMvorioYR`,
                                children: l(Aa, {
                                  height: `100%`,
                                  id: `fsaajvOCv`,
                                  layoutId: `fsaajvOCv`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Q(`UmOQzJjKW`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        l(F, {
                          breakpoint: T,
                          overrides: {
                            BYVZE4WeS: {
                              height: 250,
                              width: `calc(${_?.width || `100vw`} * 0.2198)`,
                            },
                            Dgv7oRDPe: {
                              height: 175,
                              width: `calc(${_?.width || `100vw`} / 3.12)`,
                            },
                          },
                          children: l(W, {
                            height: 286,
                            width: `calc(${_?.width || `100vw`} * 0.17)`,
                            children: l(F, {
                              breakpoint: T,
                              overrides: {
                                Dgv7oRDPe: { "data-framer-cursor": void 0, drag: void 0 },
                              },
                              children: l(Z, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1qxsll5-container`,
                                "data-framer-cursor": `eg9eyq`,
                                drag: !0,
                                dragConstraints: te,
                                dragMomentum: !0,
                                dragTransition: xo,
                                nodeId: `UgDnzr38P`,
                                onMouseDown: So,
                                rendersWithMotion: !0,
                                scopeId: `KMvorioYR`,
                                children: l(Ma, {
                                  height: `100%`,
                                  id: `UgDnzr38P`,
                                  layoutId: `UgDnzr38P`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Q(`x8xkRWLOf`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        l(F, {
                          breakpoint: T,
                          overrides: {
                            BYVZE4WeS: {
                              height: 153,
                              width: `calc(${_?.width || `100vw`} * 0.2605)`,
                            },
                            Dgv7oRDPe: {
                              height: 119,
                              width: `calc(${_?.width || `100vw`} / 2.378)`,
                            },
                          },
                          children: l(W, {
                            height: 200,
                            width: `calc(${_?.width || `100vw`} * 0.23)`,
                            children: l(F, {
                              breakpoint: T,
                              overrides: {
                                Dgv7oRDPe: { "data-framer-cursor": void 0, drag: void 0 },
                              },
                              children: l(Z, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-13nhal7-container`,
                                "data-framer-cursor": `eg9eyq`,
                                drag: !0,
                                dragConstraints: te,
                                dragMomentum: !0,
                                dragTransition: xo,
                                nodeId: `ax641HTTq`,
                                onMouseDown: So,
                                rendersWithMotion: !0,
                                scopeId: `KMvorioYR`,
                                children: l(Pa, {
                                  height: `100%`,
                                  id: `ax641HTTq`,
                                  layoutId: `ax641HTTq`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Q(`wW3FFmMIq`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        l(F, {
                          breakpoint: T,
                          overrides: {
                            BYVZE4WeS: {
                              height: 156,
                              width: `calc(${_?.width || `100vw`} * 0.19)`,
                            },
                            Dgv7oRDPe: {
                              height: 167,
                              width: `calc(${_?.width || `100vw`} * 0.3103)`,
                            },
                          },
                          children: l(W, {
                            height: 232,
                            width: `calc(${_?.width || `100vw`} * 0.14)`,
                            children: l(F, {
                              breakpoint: T,
                              overrides: {
                                Dgv7oRDPe: { "data-framer-cursor": void 0, drag: void 0 },
                              },
                              children: l(Z, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-jwxgy9-container`,
                                "data-framer-cursor": `eg9eyq`,
                                drag: !0,
                                dragConstraints: te,
                                dragMomentum: !0,
                                dragTransition: xo,
                                nodeId: `sTQ9cZ6OE`,
                                onMouseDown: So,
                                rendersWithMotion: !0,
                                scopeId: `KMvorioYR`,
                                children: l(Ia, {
                                  height: `100%`,
                                  id: `sTQ9cZ6OE`,
                                  layoutId: `sTQ9cZ6OE`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Q(`ofpoz_Qo3`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        l(F, {
                          breakpoint: T,
                          overrides: {
                            BYVZE4WeS: {
                              height: 143,
                              width: `calc(${_?.width || `100vw`} * 0.1802)`,
                            },
                            Dgv7oRDPe: {
                              height: 111,
                              width: `calc(${_?.width || `100vw`} * 0.2897)`,
                            },
                          },
                          children: l(W, {
                            height: 176,
                            width: `calc(${_?.width || `100vw`} * 0.15)`,
                            children: l(F, {
                              breakpoint: T,
                              overrides: {
                                BYVZE4WeS: { transformTemplate: void 0 },
                                Dgv7oRDPe: {
                                  "data-framer-cursor": void 0,
                                  drag: void 0,
                                  transformTemplate: void 0,
                                },
                              },
                              children: l(Z, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-ds8lc1-container`,
                                "data-framer-cursor": `eg9eyq`,
                                drag: !0,
                                dragConstraints: te,
                                dragMomentum: !0,
                                dragTransition: xo,
                                nodeId: `lAkMpPAZv`,
                                onMouseDown: So,
                                rendersWithMotion: !0,
                                scopeId: `KMvorioYR`,
                                transformTemplate: Co,
                                children: l(Ra, {
                                  height: `100%`,
                                  id: `lAkMpPAZv`,
                                  layoutId: `lAkMpPAZv`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Q(`S_aynm5Kz`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(m.div, {
                      className: `framer-1s9alie`,
                      "data-framer-name": `About`,
                      layout: M,
                      children: l(`div`, {
                        className: `framer-4d7i5n`,
                        "data-framer-name": `Stack`,
                        id: G,
                        ref: ne,
                        children: l(W, {
                          children: l(z, {
                            className: `framer-1icim18-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            nodeId: `tvf3mCczM`,
                            scopeId: `KMvorioYR`,
                            children: l(F, {
                              breakpoint: T,
                              overrides: {
                                BYVZE4WeS: {
                                  endOffset: 0.86,
                                  font: {
                                    fontFamily: `"Outfit", "Outfit Placeholder", sans-serif`,
                                    fontSize: `30px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  wordFonts: [
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 12,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 13,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 14,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 15,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 16,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 18,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 19,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `30px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 27,
                                    },
                                  ],
                                },
                                Dgv7oRDPe: {
                                  font: {
                                    fontFamily: `"Outfit", "Outfit Placeholder", sans-serif`,
                                    fontSize: `18px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1.1em`,
                                  },
                                  wordFonts: [
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 12,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 13,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 14,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 15,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 16,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 18,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 19,
                                    },
                                    {
                                      font: {
                                        fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        fontSize: `18px`,
                                        fontStyle: `italic`,
                                        fontWeight: 700,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      wordIndex: 27,
                                    },
                                  ],
                                },
                              },
                              children: l(De, {
                                animationStyle: `slide`,
                                enableBlur: !1,
                                enableSmooth: !0,
                                endOffset: 0.8,
                                endOpacity: 1,
                                font: {
                                  fontFamily: `"Outfit", "Outfit Placeholder", sans-serif`,
                                  fontSize: `36px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                },
                                height: `100%`,
                                id: `tvf3mCczM`,
                                layerGap: 0,
                                layoutId: `tvf3mCczM`,
                                showSlots: !0,
                                slotAutoScale: !0,
                                slotBaseFontSize: 30,
                                slots: [
                                  l(W, {
                                    height: 36,
                                    width: `16px`,
                                    children: l(z, {
                                      className: `framer-1h9mriv-container`,
                                      "data-framer-name": `YellowAsterisk`,
                                      inComponentSlot: !0,
                                      name: `YellowAsterisk`,
                                      nodeId: `JsVxaHD_5`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(Ee, {
                                        height: `100%`,
                                        id: `JsVxaHD_5`,
                                        layoutId: `JsVxaHD_5`,
                                        name: `YellowAsterisk`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `43px`,
                                    children: l(z, {
                                      className: `framer-1y8q4hm-container`,
                                      inComponentSlot: !0,
                                      nodeId: `lDgQQrjNM`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(kn, {
                                        height: `100%`,
                                        id: `lDgQQrjNM`,
                                        layoutId: `lDgQQrjNM`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `90px`,
                                    children: l(z, {
                                      className: `framer-1hrok1j-container`,
                                      inComponentSlot: !0,
                                      nodeId: `EaZZdyVC4`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(Tt, {
                                        height: `100%`,
                                        id: `EaZZdyVC4`,
                                        layoutId: `EaZZdyVC4`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `56px`,
                                    children: l(z, {
                                      className: `framer-uo1jp5-container`,
                                      inComponentSlot: !0,
                                      nodeId: `efs1xjEaa`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(mr, {
                                        height: `100%`,
                                        id: `efs1xjEaa`,
                                        layoutId: `efs1xjEaa`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `60px`,
                                    children: l(z, {
                                      className: `framer-16kmnxy-container`,
                                      inComponentSlot: !0,
                                      nodeId: `hk18pWa9Y`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(Ft, {
                                        height: `100%`,
                                        id: `hk18pWa9Y`,
                                        layoutId: `hk18pWa9Y`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `75px`,
                                    children: l(z, {
                                      className: `framer-13q6q43-container`,
                                      inComponentSlot: !0,
                                      nodeId: `szAbCL7Ew`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(Pi, {
                                        height: `100%`,
                                        id: `szAbCL7Ew`,
                                        layoutId: `szAbCL7Ew`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `46px`,
                                    children: l(z, {
                                      className: `framer-1hp6vpm-container`,
                                      inComponentSlot: !0,
                                      nodeId: `L2Qd4ww0b`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(Br, {
                                        height: `100%`,
                                        id: `L2Qd4ww0b`,
                                        layoutId: `L2Qd4ww0b`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(W, {
                                    height: 45,
                                    width: `217px`,
                                    children: l(z, {
                                      className: `framer-n18uxw-container`,
                                      "data-framer-name": `FINAL_FINAL`,
                                      inComponentSlot: !0,
                                      name: `FINAL_FINAL`,
                                      nodeId: `ma34WGGKd`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(zn, {
                                        height: `100%`,
                                        id: `ma34WGGKd`,
                                        layoutId: `ma34WGGKd`,
                                        name: `FINAL_FINAL`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                                slotScale: 1,
                                startOffset: 1,
                                startOpacity: 1,
                                style: { width: `100%` },
                                text: `[1]Artjom Becker is a software developer[2]and CS student at TU Darmstadt[3]engineering high-performance web systems, 3D graphics, and AI agent architectures into[4]cohesive digital platforms.[5] He builds projects End-to-End, [6]from scalable distributed backends to interactive frontends,[7]combining deep algorithmic rigor[8]with modern execution.`,
                                textColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                width: `100%`,
                                wordFonts: [
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 12,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 13,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 14,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 15,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 16,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 18,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 19,
                                  },
                                  {
                                    font: {
                                      fontFamily: `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      fontSize: `36px`,
                                      fontStyle: `italic`,
                                      fontWeight: 700,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    wordIndex: 27,
                                  },
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    l(m.div, {
                      className: `framer-1a5vd2f`,
                      "data-framer-name": `ShowreelMain`,
                      id: K,
                      layout: M,
                      ref: ie,
                      children: l(F, {
                        breakpoint: T,
                        overrides: {
                          BYVZE4WeS: { height: 433, width: `800px` },
                          Dgv7oRDPe: { height: 206, width: `380px` },
                        },
                        children: l(W, {
                          height: 650,
                          width: `min(${_?.width || `100vw`}, 1500px)`,
                          children: l(z, {
                            className: `framer-lxo8aj-container`,
                            nodeId: `t0EBqOzw6`,
                            rendersWithMotion: !0,
                            scopeId: `KMvorioYR`,
                            children: l(Ya, {
                              __framer__animateOnce: !1,
                              __framer__targets: [
                                { ref: ie, target: `D_ls4YDW6` },
                                { ref: q, target: `rFTOIw0lf` },
                              ],
                              __framer__threshold: 1,
                              __framer__variantAppearEffectEnabled: !0,
                              height: `100%`,
                              id: `t0EBqOzw6`,
                              layoutId: `t0EBqOzw6`,
                              oswkqhnf6: `1dzwwdt`,
                              style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                              variant: Q(`LZTjuhhpk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    l(m.section, {
                      className: `framer-ssakup`,
                      "data-framer-name": `Featured`,
                      id: ae,
                      layout: M,
                      ref: Y,
                      children: f(`div`, {
                        className: `framer-uuzfzd`,
                        "data-framer-name": `Container`,
                        children: [
                          l(W, {
                            height: 166,
                            width: _?.width || `100vw`,
                            children: l(z, {
                              className: `framer-svw7go-container`,
                              "data-framer-name": `featuredWork`,
                              name: `featuredWork`,
                              nodeId: `AFsJ441y2`,
                              scopeId: `KMvorioYR`,
                              children: l(F, {
                                breakpoint: T,
                                overrides: {
                                  BYVZE4WeS: { variant: Q(`P1RI678P9`) },
                                  Dgv7oRDPe: { variant: Q(`KZwBhGAJs`) },
                                },
                                children: l(Or, {
                                  height: `100%`,
                                  id: `AFsJ441y2`,
                                  layoutId: `AFsJ441y2`,
                                  name: `featuredWork`,
                                  style: { width: `100%` },
                                  variant: Q(`FCvduN2U9`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          l(`div`, {
                            className: `framer-1mh221c`,
                            "data-framer-name": `Body`,
                            children: l(A, {
                              __fromCanvasComponent: !0,
                              children: l(d, {
                                children: f(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `13px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `0px`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  },
                                  children: [
                                    l(`span`, {
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                        "--framer-font-family": `"Outfit", sans-serif`,
                                        "--framer-font-weight": `900`,
                                        "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                      },
                                      children: `*`,
                                    }),
                                    `Ideas that survived the jump from the brain to the screen. Multi-disciplinary work carried from concept to completion.`,
                                  ],
                                }),
                              }),
                              className: `framer-4l4ez1`,
                              "data-framer-name": `Body Text`,
                              fonts: [`FS;Outfit-medium`, `FS;Outfit-black`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(`div`, {
                            className: `framer-f6853m`,
                            "data-framer-name": `Bottom`,
                            children: [
                              l(`div`, {
                                className: `framer-1bcdse2`,
                                "data-framer-name": `SmallTitle`,
                                children: l(`div`, {
                                  className: `framer-1kaf4o3`,
                                  "data-framer-name": `Bottom Line`,
                                }),
                              }),
                              l(J, {
                                links: [
                                  {
                                    href: { webPageId: `yQH2AVVxR` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `yQH2AVVxR` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `yQH2AVVxR` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  l(W, {
                                    height: 405,
                                    width: `min(${_?.width || `100vw`} - 48px, 1500px)`,
                                    children: l(z, {
                                      className: `framer-10j2sx4-container`,
                                      "data-framer-cursor": `1bsa85u`,
                                      nodeId: `PrSWzkOLu`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { variant: Q(`dkfzYjcx_`), y4zHDIvQS: e[1] },
                                          Dgv7oRDPe: { variant: Q(`NNrysK8nr`), y4zHDIvQS: e[2] },
                                        },
                                        children: l(Qa, {
                                          a4Op4GMGU: `Kinopolis · Operations & Automation`,
                                          Fb5Stv0oc: $(
                                            {
                                              pixelHeight: 768,
                                              pixelWidth: 1376,
                                              src: `../../assets/images/kinopolis_hero_bear.jpg`,
                                              srcSet: `../../assets/images/kinopolis_hero_bear.jpg 512w,../../assets/images/kinopolis_hero_bear.jpg 1024w,../../assets/images/kinopolis_hero_bear.jpg 1376w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `PrSWzkOLu`,
                                          layoutId: `PrSWzkOLu`,
                                          LgdGA4U0Z: `Live-Saalüberwachung
Foyer- & Peak-Radar
Automatisierte Berichte
Cloudflare D1 & Vite`,
                                          m75mHruIi: !0,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          tkjUg1GHk: `../../assets/videos/main-5eb755.mp4`,
                                          variant: Q(`vM0nzArsA`),
                                          width: `100%`,
                                          y4zHDIvQS: e[0],
                                          Zsl7YX1CQ: `Kinopolis Automation Suite`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              l(`div`, {
                                className: `framer-1dbufhi`,
                                "data-framer-name": `DividerLine`,
                                children: l(`div`, {
                                  className: `framer-1spj5xv`,
                                  "data-framer-name": `Bottom Line`,
                                }),
                              }),
                              l(J, {
                                links: [
                                  {
                                    href: { webPageId: `f4PIrYHTh` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `f4PIrYHTh` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `f4PIrYHTh` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  l(W, {
                                    height: 405,
                                    width: `min(${_?.width || `100vw`} - 48px, 1500px)`,
                                    children: l(z, {
                                      className: `framer-10blw20-container`,
                                      "data-framer-cursor": `1bsa85u`,
                                      id: oe,
                                      nodeId: `MivpxP5Sr`,
                                      ref: q,
                                      scopeId: `KMvorioYR`,
                                      children: l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { variant: Q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                          Dgv7oRDPe: { variant: Q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                        },
                                        children: l(se, {
                                          a4Op4GMGU: `Workflow Automation · macOS`,
                                          d90GarC1x: !1,
                                          height: `100%`,
                                          id: `MivpxP5Sr`,
                                          K46KcvR9i: $(
                                            {
                                              pixelHeight: 1280,
                                              pixelWidth: 1920,
                                              src: `../../assets/images/wMsJeUgDAt07Spb9jgbEdL7tifs-46437f.jpg`,
                                              srcSet: `../../assets/images/wMsJeUgDAt07Spb9jgbEdL7tifs-9d3440.jpg 512w,../../assets/images/wMsJeUgDAt07Spb9jgbEdL7tifs.jpg 1024w,../../assets/images/wMsJeUgDAt07Spb9jgbEdL7tifs-46437f.jpg 1920w`,
                                            },
                                            ``
                                          ),
                                          layoutId: `MivpxP5Sr`,
                                          LgdGA4U0Z: `PDF Schedule Parsing
AppleScript & Native Sync
Automated Event Pipeline
Zero-Click Integration`,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: Q(`eUYo2gsWO`),
                                          width: `100%`,
                                          y4zHDIvQS: e[0],
                                          Zsl7YX1CQ: `ATOSS Schedule Automation`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              l(`div`, {
                                className: `framer-1e33vkn`,
                                "data-framer-name": `DividerLine`,
                                children: l(`div`, {
                                  className: `framer-1ffaker`,
                                  "data-framer-name": `Bottom Line`,
                                }),
                              }),
                              l(J, {
                                links: [
                                  {
                                    href: { webPageId: `BQfPzQxJd` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `BQfPzQxJd` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `BQfPzQxJd` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  l(W, {
                                    height: 405,
                                    width: `min(${_?.width || `100vw`} - 48px, 1500px)`,
                                    children: l(z, {
                                      className: `framer-glghlr-container`,
                                      "data-framer-cursor": `1bsa85u`,
                                      nodeId: `nlCR1xMrv`,
                                      rendersWithMotion: !0,
                                      scopeId: `KMvorioYR`,
                                      children: l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { variant: Q(`dkfzYjcx_`), y4zHDIvQS: e[1] },
                                          Dgv7oRDPe: { variant: Q(`NNrysK8nr`), y4zHDIvQS: e[2] },
                                        },
                                        children: l(eo, {
                                          a4Op4GMGU: `Skinstock · Marketplace`,
                                          Fb5Stv0oc: $(
                                            {
                                              pixelHeight: 1080,
                                              pixelWidth: 1920,
                                              src: `../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w.jpg`,
                                              srcSet: `../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w-c19144.jpg 512w,../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w-820dcf.jpg 1024w,../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w.jpg 1920w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `nlCR1xMrv`,
                                          layoutId: `nlCR1xMrv`,
                                          LgdGA4U0Z: `Next.js & React
High-Frequency Trading
Stripe Checkout
Edge Architecture`,
                                          m75mHruIi: !0,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          tkjUg1GHk: `../../assets/videos/main-3af80a.mp4`,
                                          variant: Q(`vM0nzArsA`),
                                          width: `100%`,
                                          y4zHDIvQS: e[0],
                                          Zsl7YX1CQ: `Skinstock Marketplace`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              l(`div`, {
                                className: `framer-4xpgl5`,
                                "data-framer-name": `DividerLine`,
                                children: l(`div`, {
                                  className: `framer-uqxom5`,
                                  "data-framer-name": `Bottom Line`,
                                }),
                              }),
                              l(J, {
                                links: [
                                  {
                                    href: { webPageId: `KCyUwDA56` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `KCyUwDA56` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `KCyUwDA56` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  l(W, {
                                    height: 405,
                                    width: `min(${_?.width || `100vw`} - 48px, 1500px)`,
                                    children: l(z, {
                                      className: `framer-5x1slb-container`,
                                      "data-framer-cursor": `1bsa85u`,
                                      nodeId: `bfDyd6qbN`,
                                      scopeId: `KMvorioYR`,
                                      children: l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { variant: Q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                          Dgv7oRDPe: { variant: Q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                        },
                                        children: l(se, {
                                          a4Op4GMGU: `TU Darmstadt · Serious Game`,
                                          d90GarC1x: !1,
                                          height: `100%`,
                                          id: `bfDyd6qbN`,
                                          K46KcvR9i: $(
                                            {
                                              pixelHeight: 1280,
                                              pixelWidth: 1920,
                                              src: `../../assets/images/jKSWb8nhDHekUUhy7TU93bZUo-ed7907.jpg`,
                                              srcSet: `../../assets/images/jKSWb8nhDHekUUhy7TU93bZUo-c9353d.jpg 512w,../../assets/images/jKSWb8nhDHekUUhy7TU93bZUo.jpg 1024w,../../assets/images/jKSWb8nhDHekUUhy7TU93bZUo-ed7907.jpg 1920w`,
                                            },
                                            ``
                                          ),
                                          layoutId: `bfDyd6qbN`,
                                          LgdGA4U0Z: `WebGL & Three.js
Serious Game Engine
Procedural Shaders
Psychological Tasks`,
                                          style: { maxWidth: `100%`, width: `100%` },
                                          variant: Q(`eUYo2gsWO`),
                                          width: `100%`,
                                          y4zHDIvQS: e[0],
                                          Zsl7YX1CQ: `Architect of Mind`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              l(`div`, {
                                className: `framer-11l6t1m`,
                                "data-framer-name": `Button`,
                                children: l(J, {
                                  links: [
                                    {
                                      href: { webPageId: `vjUZoXgWM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vjUZoXgWM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vjUZoXgWM` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    l(W, {
                                      height: 54,
                                      children: l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          Dgv7oRDPe: {
                                            __framer__transformTargets: [
                                              {
                                                target: {
                                                  opacity: 0,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 0.9,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 15,
                                                },
                                              },
                                              {
                                                target: {
                                                  opacity: 1,
                                                  rotate: 0,
                                                  rotateX: 0,
                                                  rotateY: 0,
                                                  scale: 1,
                                                  skewX: 0,
                                                  skewY: 0,
                                                  x: 0,
                                                  y: 0,
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        children: l(Z, {
                                          __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stagger: 0,
                                            stiffness: 500,
                                            type: `spring`,
                                          },
                                          __framer__styleTransformEffectEnabled: !0,
                                          __framer__transformTargets: [
                                            {
                                              target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 65,
                                              },
                                            },
                                            {
                                              target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0,
                                              },
                                            },
                                          ],
                                          __framer__transformTrigger: `onInView`,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-12aw9p9-container`,
                                          nodeId: `IhelRBE3b`,
                                          rendersWithMotion: !0,
                                          scopeId: `KMvorioYR`,
                                          children: l(F, {
                                            breakpoint: T,
                                            overrides: {
                                              BYVZE4WeS: { JQPbxOZrF: e[1] },
                                              Dgv7oRDPe: {
                                                JQPbxOZrF: e[2],
                                                variant: Q(`ZT6lwoK2R`),
                                              },
                                            },
                                            children: l(Fe, {
                                              Gh9QOfeLM: `view all work`,
                                              height: `100%`,
                                              id: `IhelRBE3b`,
                                              JQPbxOZrF: e[0],
                                              layoutId: `IhelRBE3b`,
                                              variant: Q(`VTUwhOpvn`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    f(m.section, {
                      className: `framer-15uw8yz`,
                      "data-framer-name": `WhatIDo`,
                      id: ce,
                      layout: M,
                      ref: P,
                      children: [
                        f(`div`, {
                          className: `framer-hukp5v`,
                          "data-framer-name": `Heading`,
                          children: [
                            l(F, {
                              breakpoint: T,
                              overrides: {
                                BYVZE4WeS: {
                                  children: l(d, {
                                    children: f(`h1`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                        "--framer-font-size": `129px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: [
                                        `what i do`,
                                        l(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                          },
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                                Dgv7oRDPe: {
                                  children: l(d, {
                                    children: f(`h1`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                        "--framer-font-size": `60px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: [
                                        `what i do`,
                                        l(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                          },
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: l(A, {
                                __fromCanvasComponent: !0,
                                children: l(d, {
                                  children: f(`h1`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on`,
                                      "--framer-font-size": `166px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    },
                                    children: [
                                      `what i do`,
                                      l(`span`, {
                                        style: {
                                          "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                        },
                                        children: `*`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-16gda05`,
                                "data-framer-name": `Text`,
                                fonts: [`FS;Outfit-semibold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(`div`, {
                              className: `framer-1sps585`,
                              children: l(A, {
                                __fromCanvasComponent: !0,
                                children: l(d, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    },
                                    children: [
                                      l(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                          "--framer-font-family": `"Outfit", sans-serif`,
                                          "--framer-font-weight": `900`,
                                          "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                        },
                                        children: `*`,
                                      }),
                                      `I build software through architectural rigor and systems thinking, combining performant backends, distributed edge computing, and fluid 3D interactions into robust, scalable digital products.`,
                                    ],
                                  }),
                                }),
                                className: `framer-16aq31d`,
                                "data-framer-name": `Body Text`,
                                fonts: [`FS;Outfit-medium`, `FS;Outfit-black`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        f(`div`, {
                          className: `framer-g0qx93`,
                          children: [
                            le() &&
                              l(`div`, {
                                className: `framer-108nzez hidden-1l1a1i0 hidden-1eeimiq`,
                                children: l(W, {
                                  height: 316,
                                  width: `max((min(${_?.width || `100vw`}, 1500px) - 95px) * 0.2697, 1px)`,
                                  children: l(z, {
                                    className: `framer-m90iwc-container`,
                                    nodeId: `aw3y0IWDO`,
                                    rendersWithMotion: !0,
                                    scopeId: `KMvorioYR`,
                                    children: l(ro, {
                                      EXJFz2w_i: !0,
                                      height: `100%`,
                                      HFH6aper_: $(
                                        {
                                          pixelHeight: 658,
                                          pixelWidth: 620,
                                          src: `../../assets/images/rk7FEMbmcIVV3cz36NBzqcnCmI.jpg`,
                                          srcSet: `../../assets/images/rk7FEMbmcIVV3cz36NBzqcnCmI.jpg 620w`,
                                        },
                                        ``
                                      ),
                                      id: `aw3y0IWDO`,
                                      layoutId: `aw3y0IWDO`,
                                      NkcnUcBsR: $(
                                        {
                                          pixelHeight: 658,
                                          pixelWidth: 620,
                                          src: `../../assets/images/rk7FEMbmcIVV3cz36NBzqcnCmI.jpg`,
                                          srcSet: `../../assets/images/rk7FEMbmcIVV3cz36NBzqcnCmI.jpg 620w`,
                                        },
                                        ``
                                      ),
                                      pFR6gGOTf: !1,
                                      RMqa4oc2M: fe,
                                      style: { height: `100%`, width: `100%` },
                                      un47GrRTF: `../../assets/videos/main-491fec.mp4`,
                                      variant: Q(`bUf_ZfKJS`),
                                      vvn0BUdka: `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                      width: `100%`,
                                      XV6TsVptV: Xe,
                                      zlD00AyQl: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    }),
                                  }),
                                }),
                              }),
                            f(`div`, {
                              className: `framer-pmvw0b`,
                              "data-framer-name": `AllLists`,
                              children: [
                                f(`div`, {
                                  className: `framer-1j1zbhy`,
                                  "data-framer-name": `List1`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-xh9cp6`,
                                      "data-framer-name": `LeftTitle`,
                                      children: [
                                        f(`div`, {
                                          className: `framer-15qnu4b`,
                                          "data-framer-name": `Top`,
                                          children: [
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  children: l(d, {
                                                    children: l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                        "--framer-font-size": `30px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                      },
                                                      children: `digital (`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: l(A, {
                                                __fromCanvasComponent: !0,
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `50px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `digital (`,
                                                  }),
                                                }),
                                                className: `framer-19yoq18`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FS;Outfit-medium`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `30px`,
                                                    src: `../../assets/images/uPkjnOdw2GRmeHFxOdW7I5T1w.png`,
                                                  },
                                                },
                                              },
                                              children: l(io, {
                                                __framer__spring: {
                                                  bounce: 0.2,
                                                  damping: 60,
                                                  delay: 0,
                                                  duration: 1,
                                                  durationBasedSpring: !0,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  mass: 1,
                                                  stagger: 0,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                  {
                                                    target: {
                                                      opacity: 0,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 0.5,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: -20,
                                                      y: 0,
                                                    },
                                                  },
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 0,
                                                      y: 0,
                                                    },
                                                  },
                                                ],
                                                __framer__transformTrigger: `onInView`,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  pixelHeight: 60,
                                                  pixelWidth: 60,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `50px`,
                                                  src: `../../assets/images/uPkjnOdw2GRmeHFxOdW7I5T1w.png`,
                                                },
                                                className: `framer-12pnkq2`,
                                              }),
                                            }),
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  children: l(d, {
                                                    children: l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                        "--framer-font-size": `30px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                      },
                                                      children: `)`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: l(ao, {
                                                __framer__spring: {
                                                  bounce: 0.2,
                                                  damping: 60,
                                                  delay: 0,
                                                  duration: 1,
                                                  durationBasedSpring: !0,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  mass: 1,
                                                  stagger: 0,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: -40,
                                                      y: 0,
                                                    },
                                                  },
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 0,
                                                      y: 0,
                                                    },
                                                  },
                                                ],
                                                __framer__transformTrigger: `onInView`,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `50px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `)`,
                                                  }),
                                                }),
                                                className: `framer-68amvi`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FS;Outfit-medium`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-w0nij7`,
                                          "data-framer-name": `Bot`,
                                          children: l(F, {
                                            breakpoint: T,
                                            overrides: {
                                              Dgv7oRDPe: {
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `30px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `experiences`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: l(A, {
                                              __fromCanvasComponent: !0,
                                              children: l(d, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                    "--framer-font-size": `50px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `0.9em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                  },
                                                  children: `experiences`,
                                                }),
                                              }),
                                              className: `framer-euh0kk`,
                                              "data-framer-name": `Text`,
                                              fonts: [`FS;Outfit-medium`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    l(A, {
                                      __fromCanvasComponent: !0,
                                      children: f(d, {
                                        children: [
                                          f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: [
                                              l(`span`, {
                                                style: {
                                                  "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                                  "--framer-font-family": `"Outfit", sans-serif`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                                },
                                                children: `(01 )`,
                                              }),
                                              l(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                                },
                                                children: ` `,
                                              }),
                                              `       Design and build robust, scalable systems that work. Bridging algorithmic complexity with clean production architectures.`,
                                            ],
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: l(`br`, { className: `trailing-break` }),
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(01.01 ) Brand Identity`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(01.02) Experiential Design`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(01.03) 2D & 3D Animation`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(01.04) Environments & Spatial Design`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(01.05) Interactive Installations`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(01.06) Touchscreen & Website`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-172g1g7`,
                                      "data-framer-name": `Text`,
                                      fonts: [
                                        `FS;Outfit-medium`,
                                        `FS;Outfit-black`,
                                        `FS;Outfit-regular`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-10d5qey`,
                                  "data-framer-name": `List2`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-1ggfgjy`,
                                      "data-framer-name": `LeftTitle`,
                                      children: [
                                        f(`div`, {
                                          className: `framer-10x3ah0`,
                                          "data-framer-name": `Top`,
                                          children: [
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  children: l(d, {
                                                    children: l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                        "--framer-font-size": `30px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                      },
                                                      children: `(`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: l(ao, {
                                                __framer__spring: {
                                                  bounce: 0.2,
                                                  damping: 60,
                                                  delay: 0,
                                                  duration: 1,
                                                  durationBasedSpring: !0,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  mass: 1,
                                                  stagger: 0,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 40,
                                                      y: 0,
                                                    },
                                                  },
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 0,
                                                      y: 0,
                                                    },
                                                  },
                                                ],
                                                __framer__transformTrigger: `onInView`,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `50px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `(`,
                                                  }),
                                                }),
                                                className: `framer-hw0nzp`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FS;Outfit-medium`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fill`,
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    sizes: `30px`,
                                                    src: `../../assets/images/VVY0zanjrQI7rjlpHVAsg32Jw.jpg`,
                                                  },
                                                },
                                              },
                                              children: l(io, {
                                                __framer__spring: {
                                                  bounce: 0.2,
                                                  damping: 60,
                                                  delay: 0,
                                                  duration: 1,
                                                  durationBasedSpring: !0,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  mass: 1,
                                                  stagger: 0,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                  {
                                                    target: {
                                                      opacity: 0,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 0.5,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 20,
                                                      y: 0,
                                                    },
                                                  },
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 0,
                                                      y: 0,
                                                    },
                                                  },
                                                ],
                                                __framer__transformTrigger: `onInView`,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  pixelHeight: 60,
                                                  pixelWidth: 60,
                                                  sizes: `50px`,
                                                  src: `../../assets/images/VVY0zanjrQI7rjlpHVAsg32Jw.jpg`,
                                                },
                                                className: `framer-hcf6v1`,
                                              }),
                                            }),
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  children: l(d, {
                                                    children: l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                        "--framer-font-size": `30px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                      },
                                                      children: `) creative`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: l(A, {
                                                __fromCanvasComponent: !0,
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `50px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `) creative`,
                                                  }),
                                                }),
                                                className: `framer-1lj5c3k`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FS;Outfit-medium`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-fh2pd4`,
                                          "data-framer-name": `Bot`,
                                          children: l(F, {
                                            breakpoint: T,
                                            overrides: {
                                              Dgv7oRDPe: {
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `30px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `execution`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: l(A, {
                                              __fromCanvasComponent: !0,
                                              children: l(d, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                    "--framer-font-size": `50px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `0.9em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                  },
                                                  children: `execution`,
                                                }),
                                              }),
                                              className: `framer-ne4mq4`,
                                              "data-framer-name": `Text`,
                                              fonts: [`FS;Outfit-medium`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    l(A, {
                                      __fromCanvasComponent: !0,
                                      children: f(d, {
                                        children: [
                                          f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: [
                                              l(`span`, {
                                                style: {
                                                  "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                                  "--framer-font-family": `"Outfit", sans-serif`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                                },
                                                children: `(02)`,
                                              }),
                                              `        Transforming computational models into fluid 60 FPS interactive experiences through WebGL, Three.js, and custom shaders.`,
                                            ],
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: l(`br`, { className: `trailing-break` }),
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.01 ) Art Direction`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.02) Concept Development`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.03) Brand Systems`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.04) Motion Graphics`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.05) Interactive UI/UX`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.06) Post-Production`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(02.07) 3D Pipelines`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-1k675mp`,
                                      "data-framer-name": `Text`,
                                      fonts: [
                                        `FS;Outfit-medium`,
                                        `FS;Outfit-black`,
                                        `FS;Outfit-regular`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-1p4ofdh`,
                                  "data-framer-name": `List3`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-42eqwf`,
                                      "data-framer-name": `LeftTitle`,
                                      children: [
                                        f(`div`, {
                                          className: `framer-ks9f6t`,
                                          "data-framer-name": `Top`,
                                          children: [
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  children: l(d, {
                                                    children: l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                        "--framer-font-size": `30px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                      },
                                                      children: `lead (`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: l(A, {
                                                __fromCanvasComponent: !0,
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `50px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `lead (`,
                                                  }),
                                                }),
                                                className: `framer-1f16lmn`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FS;Outfit-medium`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  background: {
                                                    alt: ``,
                                                    fit: `fit`,
                                                    pixelHeight: 60,
                                                    pixelWidth: 60,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `30px`,
                                                    src: `../../assets/images/7sTxsuPQP2eF4yA6uo6MEKXKVAI.png`,
                                                  },
                                                },
                                              },
                                              children: l(io, {
                                                __framer__spring: {
                                                  bounce: 0.2,
                                                  damping: 60,
                                                  delay: 0,
                                                  duration: 1,
                                                  durationBasedSpring: !0,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  mass: 1,
                                                  stagger: 0,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                  {
                                                    target: {
                                                      opacity: 0,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 0.5,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: -20,
                                                      y: 0,
                                                    },
                                                  },
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 0,
                                                      y: 0,
                                                    },
                                                  },
                                                ],
                                                __framer__transformTrigger: `onInView`,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  pixelHeight: 60,
                                                  pixelWidth: 60,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `50px`,
                                                  src: `../../assets/images/7sTxsuPQP2eF4yA6uo6MEKXKVAI.png`,
                                                },
                                                className: `framer-yg6zqu`,
                                              }),
                                            }),
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                Dgv7oRDPe: {
                                                  children: l(d, {
                                                    children: l(`p`, {
                                                      dir: `auto`,
                                                      style: {
                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                        "--framer-font-size": `30px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-line-height": `0.9em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                      },
                                                      children: `)`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: l(ao, {
                                                __framer__spring: {
                                                  bounce: 0.2,
                                                  damping: 60,
                                                  delay: 0,
                                                  duration: 1,
                                                  durationBasedSpring: !0,
                                                  ease: [0.44, 0, 0.56, 1],
                                                  mass: 1,
                                                  stagger: 0,
                                                  stiffness: 500,
                                                  type: `spring`,
                                                },
                                                __framer__styleTransformEffectEnabled: !0,
                                                __framer__transformTargets: [
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: -40,
                                                      y: 0,
                                                    },
                                                  },
                                                  {
                                                    target: {
                                                      opacity: 1,
                                                      rotate: 0,
                                                      rotateX: 0,
                                                      rotateY: 0,
                                                      scale: 1,
                                                      skewX: 0,
                                                      skewY: 0,
                                                      x: 0,
                                                      y: 0,
                                                    },
                                                  },
                                                ],
                                                __framer__transformTrigger: `onInView`,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `50px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `)`,
                                                  }),
                                                }),
                                                className: `framer-y6d8eg`,
                                                "data-framer-name": `Text`,
                                                fonts: [`FS;Outfit-medium`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-1lyaqvo`,
                                          "data-framer-name": `Bot`,
                                          children: l(F, {
                                            breakpoint: T,
                                            overrides: {
                                              Dgv7oRDPe: {
                                                children: l(d, {
                                                  children: l(`p`, {
                                                    dir: `auto`,
                                                    style: {
                                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                      "--framer-font-size": `30px`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `0.9em`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                    },
                                                    children: `strategy`,
                                                  }),
                                                }),
                                              },
                                            },
                                            children: l(A, {
                                              __fromCanvasComponent: !0,
                                              children: l(d, {
                                                children: l(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                    "--framer-font-size": `50px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `0.9em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                  },
                                                  children: `strategy`,
                                                }),
                                              }),
                                              className: `framer-9kgtit`,
                                              "data-framer-name": `Text`,
                                              fonts: [`FS;Outfit-medium`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    l(A, {
                                      __fromCanvasComponent: !0,
                                      children: f(d, {
                                        children: [
                                          f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: [
                                              l(`span`, {
                                                style: {
                                                  "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                                  "--framer-font-family": `"Outfit", sans-serif`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-text-color": `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
                                                },
                                                children: `(03)`,
                                              }),
                                              `        Aligning technical teams with architectural precision. Leading team leads and developers to ensure 100% on-time milestone delivery.`,
                                            ],
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: l(`br`, { className: `trailing-break` }),
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(03.01 ) Project Pitching & Vision`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(03.02) Storytelling & Narrative`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(03.03) End-to-end Delivery`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(03.04) Team Leadership`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(03.05) Technical Feasibility & Strategy`,
                                          }),
                                          l(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-letter-spacing": `0.1px`,
                                              "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                            },
                                            children: `(03.06) Developer Collaboration`,
                                          }),
                                        ],
                                      }),
                                      className: `framer-1u6x7a4`,
                                      "data-framer-name": `Text`,
                                      fonts: [
                                        `FS;Outfit-medium`,
                                        `FS;Outfit-black`,
                                        `FS;Outfit-regular`,
                                      ],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f(m.section, {
                      className: `framer-j9cg3d`,
                      "data-framer-name": `Client`,
                      id: ue,
                      layout: M,
                      ref: I,
                      children: [
                        f(`div`, {
                          className: `framer-x0vsg8`,
                          "data-framer-name": `Responsive Heading`,
                          children: [
                            l(F, {
                              breakpoint: T,
                              overrides: {
                                BYVZE4WeS: {
                                  children: l(d, {
                                    children: f(`h1`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `129px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      },
                                      children: [
                                        `clients`,
                                        l(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                          },
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                                Dgv7oRDPe: {
                                  children: l(d, {
                                    children: f(`h1`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `60px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      },
                                      children: [
                                        `clients`,
                                        l(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                          },
                                          children: `*`,
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: l(A, {
                                __fromCanvasComponent: !0,
                                children: l(d, {
                                  children: f(`h1`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `166px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: [
                                      `clients`,
                                      l(`span`, {
                                        style: {
                                          "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                        },
                                        children: `*`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-1i7tafk`,
                                "data-framer-name": `Text`,
                                fonts: [`FS;Outfit-semibold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(`div`, {
                              className: `framer-gb3c8s`,
                              children: l(A, {
                                __fromCanvasComponent: !0,
                                children: l(d, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: [
                                      l(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                          "--framer-font-family": `"Outfit", sans-serif`,
                                          "--framer-font-weight": `900`,
                                          "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                        },
                                        children: `*`,
                                      }),
                                      `Universities, institutions and employers I have worked and engineered with.`,
                                    ],
                                  }),
                                }),
                                className: `framer-143xyf8`,
                                "data-framer-name": `Body Text`,
                                fonts: [`FS;Outfit-medium`, `FS;Outfit-black`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        f(`div`, {
                          className: `framer-dg33jy`,
                          "data-framer-name": `Scroll Animation Section`,
                          children: [
                            l(`div`, {
                              className: `framer-83770v`,
                              "data-framer-name": `Sticky`,
                              children: l(`div`, {
                                className: `framer-yng6vz`,
                                "data-framer-name": `Content`,
                                children: l(F, {
                                  breakpoint: T,
                                  overrides: {
                                    BYVZE4WeS: {
                                      __framer__styleTransformEffectEnabled: void 0,
                                      style: {},
                                    },
                                    Dgv7oRDPe: {
                                      __framer__styleTransformEffectEnabled: void 0,
                                      style: {},
                                    },
                                  },
                                  children: f(lo, {
                                    __framer__spring: {
                                      bounce: 0,
                                      damping: 50,
                                      delay: 0,
                                      duration: 1,
                                      durationBasedSpring: !1,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 0.1,
                                      stiffness: 500,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 240,
                                        },
                                      },
                                      {
                                        ref: de,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: -180,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: -200,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-mq7eps`,
                                    "data-framer-name": `3D Space`,
                                    style: { rotateY: 90, transformPerspective: 1200 },
                                    children: [
                                      l(`div`, {
                                        className: `framer-skdmo`,
                                        "data-framer-name": `1`,
                                        children: l(J, {
                                          links: [
                                            {
                                              href: { webPageId: `yQH2AVVxR` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `yQH2AVVxR` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `yQH2AVVxR` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            l(F, {
                                              breakpoint: T,
                                              overrides: {
                                                BYVZE4WeS: {
                                                  height: 360,
                                                  width: `max(${_?.width || `100vw`} - 48px, 1px)`,
                                                },
                                                Dgv7oRDPe: {
                                                  height: 240,
                                                  width: `max(${_?.width || `100vw`} - 40px, 1px)`,
                                                },
                                              },
                                              children: l(W, {
                                                height: 215,
                                                width: `320px`,
                                                children: l(F, {
                                                  breakpoint: T,
                                                  overrides: {
                                                    BYVZE4WeS: { style: {} },
                                                    Dgv7oRDPe: { style: {} },
                                                  },
                                                  children: l(z, {
                                                    className: `framer-16akfvn-container`,
                                                    "data-framer-cursor": `1bsa85u`,
                                                    nodeId: `eGWHUdgxS`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `KMvorioYR`,
                                                    style: { rotateY: -90 },
                                                    children: l(F, {
                                                      breakpoint: T,
                                                      overrides: {
                                                        BYVZE4WeS: {
                                                                                                                    m_Tifg3X2: e[1],
                                                        },
                                                        Dgv7oRDPe: { m_Tifg3X2: e[2] },
                                                      },
                                                      children: l(X, {
                                                        height: `100%`,
                                                        id: `eGWHUdgxS`,
                                                        layoutId: `eGWHUdgxS`,
                                                        m_Tifg3X2: e[0],
                                                        style: { height: `100%`, width: `100%` },
                                                        SXjjKopWL: $(
                                                          {
                                                            pixelHeight: 156,
                                                            pixelWidth: 400,
                                                            src: `../../assets/images/VMqAbr6Irn7p1aOpL6oC1E9RgiE.png`,
                                                          },
                                                          ``
                                                        ),
                                                        variant: Q(`GV6jvMGC1`),
                                                        VypX2yAlC: $(
                                                          {
                                                            pixelHeight: 403,
                                                            pixelWidth: 600,
                                                            src: `../../assets/images/TOWJS5MUqxf0AqCS6k4cyarVzY.jpg`,
                                                            srcSet: `../../assets/images/TOWJS5MUqxf0AqCS6k4cyarVzY.jpg 600w`,
                                                          },
                                                          ``
                                                        ),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      }),
                                      l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { style: {} },
                                          Dgv7oRDPe: { style: {} },
                                        },
                                        children: l(m.div, {
                                          className: `framer-1n58v19`,
                                          "data-framer-name": `2`,
                                          style: { rotateY: 45 },
                                          children: l(J, {
                                            links: [
                                              {
                                                href: { webPageId: `f4PIrYHTh` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `f4PIrYHTh` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `f4PIrYHTh` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                breakpoint: T,
                                                overrides: {
                                                  BYVZE4WeS: {
                                                    height: 360,
                                                    width: `max(${_?.width || `100vw`} - 48px, 1px)`,
                                                  },
                                                  Dgv7oRDPe: {
                                                    height: 240,
                                                    width: `max(${_?.width || `100vw`} - 40px, 1px)`,
                                                  },
                                                },
                                                children: l(W, {
                                                  height: 215,
                                                  width: `320px`,
                                                  children: l(F, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      BYVZE4WeS: { style: {} },
                                                      Dgv7oRDPe: { style: {} },
                                                    },
                                                    children: l(z, {
                                                      className: `framer-1wxpq1k-container`,
                                                      "data-framer-cursor": `1bsa85u`,
                                                      nodeId: `qz4BieTuU`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `KMvorioYR`,
                                                      style: { rotateY: -90 },
                                                      children: l(F, {
                                                        breakpoint: T,
                                                        overrides: {
                                                          BYVZE4WeS: { m_Tifg3X2: e[1] },
                                                          Dgv7oRDPe: { m_Tifg3X2: e[2] },
                                                        },
                                                        children: l(X, {
                                                          height: `100%`,
                                                          id: `qz4BieTuU`,
                                                          kIp5EpMd3: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                          layoutId: `qz4BieTuU`,
                                                          m_Tifg3X2: e[0],
                                                          style: { height: `100%`, width: `100%` },
                                                          SXjjKopWL: $(
                                                            {
                                                              pixelHeight: 156,
                                                              pixelWidth: 400,
                                                              src: `../../assets/images/0a9eC0DsSdgltwG6NFXIJwEwpk.png`,
                                                            },
                                                            ``
                                                          ),
                                                          variant: Q(`GV6jvMGC1`),
                                                          VypX2yAlC: $(
                                                            {
                                                              pixelHeight: 403,
                                                              pixelWidth: 600,
                                                              src: `../../assets/images/UroXQULTaU62PLU8teHo2Z82mtI-c5f303.jpg`,
                                                              srcSet: `../../assets/images/UroXQULTaU62PLU8teHo2Z82mtI.jpg 512w,../../assets/images/UroXQULTaU62PLU8teHo2Z82mtI-c5f303.jpg 600w`,
                                                            },
                                                            ``
                                                          ),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        }),
                                      }),
                                      l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { style: {} },
                                          Dgv7oRDPe: { style: {} },
                                        },
                                        children: l(m.div, {
                                          className: `framer-a0mq9o`,
                                          "data-framer-name": `3`,
                                          style: { rotateY: 90 },
                                          children: l(J, {
                                            links: [
                                              {
                                                href: { webPageId: `HC6lAXg5r` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `HC6lAXg5r` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `HC6lAXg5r` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                breakpoint: T,
                                                overrides: {
                                                  BYVZE4WeS: {
                                                    height: 360,
                                                    width: `max(${_?.width || `100vw`} - 48px, 1px)`,
                                                  },
                                                  Dgv7oRDPe: {
                                                    height: 240,
                                                    width: `max(${_?.width || `100vw`} - 40px, 1px)`,
                                                  },
                                                },
                                                children: l(W, {
                                                  height: 215,
                                                  width: `320px`,
                                                  children: l(F, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      BYVZE4WeS: { style: {} },
                                                      Dgv7oRDPe: { style: {} },
                                                    },
                                                    children: l(z, {
                                                      className: `framer-1ocjq7z-container`,
                                                      "data-framer-cursor": `1bsa85u`,
                                                      nodeId: `SoeONp5nr`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `KMvorioYR`,
                                                      style: { rotateY: -90 },
                                                      children: l(F, {
                                                        breakpoint: T,
                                                        overrides: {
                                                          BYVZE4WeS: { m_Tifg3X2: e[1] },
                                                          Dgv7oRDPe: { m_Tifg3X2: e[2] },
                                                        },
                                                        children: l(X, {
                                                          height: `100%`,
                                                          id: `SoeONp5nr`,
                                                          layoutId: `SoeONp5nr`,
                                                          m_Tifg3X2: e[0],
                                                          style: { height: `100%`, width: `100%` },
                                                          SXjjKopWL: $(
                                                            {
                                                              pixelHeight: 156,
                                                              pixelWidth: 400,
                                                              src: `../../assets/images/NVzY0swVhyTo6Ei9PcXQKF2I.png`,
                                                            },
                                                            ``
                                                          ),
                                                          variant: Q(`GV6jvMGC1`),
                                                          VypX2yAlC: $(
                                                            {
                                                              pixelHeight: 403,
                                                              pixelWidth: 600,
                                                              src: `../../assets/images/obk7Ti7nUMhyfX69fexY8uK5l0.jpg`,
                                                              srcSet: `../../assets/images/obk7Ti7nUMhyfX69fexY8uK5l0.jpg 600w`,
                                                            },
                                                            ``
                                                          ),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        }),
                                      }),
                                      l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { style: {} },
                                          Dgv7oRDPe: { style: {} },
                                        },
                                        children: l(m.div, {
                                          className: `framer-1sy0oev`,
                                          "data-framer-name": `4`,
                                          style: { rotateY: 135 },
                                          children: l(J, {
                                            links: [
                                              {
                                                href: { webPageId: `KCyUwDA56` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `KCyUwDA56` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `KCyUwDA56` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                breakpoint: T,
                                                overrides: {
                                                  BYVZE4WeS: {
                                                    height: 360,
                                                    width: `max(${_?.width || `100vw`} - 48px, 1px)`,
                                                  },
                                                  Dgv7oRDPe: {
                                                    height: 240,
                                                    width: `max(${_?.width || `100vw`} - 40px, 1px)`,
                                                  },
                                                },
                                                children: l(W, {
                                                  height: 215,
                                                  width: `320px`,
                                                  children: l(F, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      BYVZE4WeS: { style: {} },
                                                      Dgv7oRDPe: { style: {} },
                                                    },
                                                    children: l(z, {
                                                      className: `framer-b1amg4-container`,
                                                      "data-framer-cursor": `1bsa85u`,
                                                      nodeId: `qRacFG08h`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `KMvorioYR`,
                                                      style: { rotateY: -90 },
                                                      children: l(F, {
                                                        breakpoint: T,
                                                        overrides: {
                                                          BYVZE4WeS: { m_Tifg3X2: e[1] },
                                                          Dgv7oRDPe: { m_Tifg3X2: e[2] },
                                                        },
                                                        children: l(X, {
                                                          height: `100%`,
                                                          id: `qRacFG08h`,
                                                          kIp5EpMd3: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                          layoutId: `qRacFG08h`,
                                                          m_Tifg3X2: e[0],
                                                          style: { height: `100%`, width: `100%` },
                                                          SXjjKopWL: $(
                                                            {
                                                              pixelHeight: 156,
                                                              pixelWidth: 400,
                                                              src: `../../assets/images/nLJFcAvaw9vlG6tMIIEXtoB188.png`,
                                                            },
                                                            ``
                                                          ),
                                                          variant: Q(`GV6jvMGC1`),
                                                          VypX2yAlC: $(
                                                            {
                                                              pixelHeight: 403,
                                                              pixelWidth: 600,
                                                              src: `../../assets/images/ckJ56L2WEjBjJ5dteiOlvXMdc-c981ba.jpg`,
                                                              srcSet: `../../assets/images/ckJ56L2WEjBjJ5dteiOlvXMdc.jpg 512w,../../assets/images/ckJ56L2WEjBjJ5dteiOlvXMdc-c981ba.jpg 600w`,
                                                            },
                                                            ``
                                                          ),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        }),
                                      }),
                                      l(F, {
                                        breakpoint: T,
                                        overrides: {
                                          BYVZE4WeS: { style: {} },
                                          Dgv7oRDPe: { style: {} },
                                        },
                                        children: l(m.div, {
                                          className: `framer-1eb3l4i`,
                                          "data-framer-name": `5`,
                                          style: { rotateY: 180 },
                                          children: l(J, {
                                            links: [
                                              {
                                                href: { webPageId: `m93indqJA` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `m93indqJA` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `m93indqJA` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                breakpoint: T,
                                                overrides: {
                                                  BYVZE4WeS: {
                                                    height: 360,
                                                    width: `max(${_?.width || `100vw`} - 48px, 1px)`,
                                                  },
                                                  Dgv7oRDPe: {
                                                    height: 240,
                                                    width: `max(${_?.width || `100vw`} - 40px, 1px)`,
                                                  },
                                                },
                                                children: l(W, {
                                                  height: 215,
                                                  width: `320px`,
                                                  children: l(F, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      BYVZE4WeS: { style: {} },
                                                      Dgv7oRDPe: { style: {} },
                                                    },
                                                    children: l(z, {
                                                      className: `framer-1cnsl9t-container`,
                                                      "data-framer-cursor": `1bsa85u`,
                                                      nodeId: `AZYV3jRqf`,
                                                      rendersWithMotion: !0,
                                                      scopeId: `KMvorioYR`,
                                                      style: { rotateY: -90 },
                                                      children: l(F, {
                                                        breakpoint: T,
                                                        overrides: {
                                                          BYVZE4WeS: { m_Tifg3X2: e[1] },
                                                          Dgv7oRDPe: { m_Tifg3X2: e[2] },
                                                        },
                                                        children: l(X, {
                                                          height: `100%`,
                                                          id: `AZYV3jRqf`,
                                                          kIp5EpMd3: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                          layoutId: `AZYV3jRqf`,
                                                          m_Tifg3X2: e[0],
                                                          style: { height: `100%`, width: `100%` },
                                                          SXjjKopWL: $(
                                                            {
                                                              pixelHeight: 156,
                                                              pixelWidth: 400,
                                                              src: `../../assets/images/IDoUjTdGKievQsFbVuZtYlLXesE.png`,
                                                            },
                                                            ``
                                                          ),
                                                          variant: Q(`GV6jvMGC1`),
                                                          VypX2yAlC: $(
                                                            {
                                                              pixelHeight: 403,
                                                              pixelWidth: 600,
                                                              src: `../../assets/images/XjwPzi2YSxoT7gtF3dSedIiadM-9439ac.jpg`,
                                                              srcSet: `../../assets/images/XjwPzi2YSxoT7gtF3dSedIiadM.jpg 512w,../../assets/images/XjwPzi2YSxoT7gtF3dSedIiadM-9439ac.jpg 600w`,
                                                            },
                                                            ``
                                                          ),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                            le() &&
                              l(`div`, {
                                className: `framer-1vl6wuh hidden-1l1a1i0 hidden-1eeimiq`,
                                "data-framer-name": `Trigger`,
                                id: pe,
                                ref: de,
                              }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-1sdwmrq`,
                          children: l(F, {
                            breakpoint: T,
                            overrides: {
                              BYVZE4WeS: { tickerEffectGap: `20px` },
                              Dgv7oRDPe: { tickerEffectGap: `20px` },
                            },
                            children: f(uo, {
                              className: `framer-12ww611`,
                              tickerEffectAlign: `center`,
                              tickerEffectDirectionModifier: `default`,
                              tickerEffectDraggable: !1,
                              tickerEffectEnabled: !0,
                              tickerEffectGap: `60px`,
                              tickerEffectHoverModifier: 70,
                              tickerEffectOverflow: `clip`,
                              tickerEffectPosition: `relative`,
                              tickerEffectStackDirection: `row`,
                              tickerEffectVelocity: 100,
                              children: [
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/bYmLoWn0jWW4AePUOixjU54juUQ.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/bYmLoWn0jWW4AePUOixjU54juUQ.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/bYmLoWn0jWW4AePUOixjU54juUQ.png`,
                                      },
                                      className: `framer-19xtapl`,
                                      "data-framer-name": `Logo1`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/HzluPjZZ97kEySqSSvE0vMrVog.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/HzluPjZZ97kEySqSSvE0vMrVog.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/HzluPjZZ97kEySqSSvE0vMrVog.png`,
                                      },
                                      className: `framer-txqesg`,
                                      "data-framer-name": `Logo9`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/v8I6SIsDNsHaPX5yny09Dqupi3s.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/v8I6SIsDNsHaPX5yny09Dqupi3s.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/v8I6SIsDNsHaPX5yny09Dqupi3s.png`,
                                      },
                                      className: `framer-1k1zern`,
                                      "data-framer-name": `Logo8`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/WU8xRcrAW0hEF4mxJkRvf9auc0.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/WU8xRcrAW0hEF4mxJkRvf9auc0.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/WU8xRcrAW0hEF4mxJkRvf9auc0.png`,
                                      },
                                      className: `framer-2mdo19`,
                                      "data-framer-name": `Logo7`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/1u2cQuCLhJk6p4LiUK1LEMNZc.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/1u2cQuCLhJk6p4LiUK1LEMNZc.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/1u2cQuCLhJk6p4LiUK1LEMNZc.png`,
                                      },
                                      className: `framer-1rx9gjr`,
                                      "data-framer-name": `Logo3`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/ulmuMkAblUexnoYjdNPymShrnas.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/ulmuMkAblUexnoYjdNPymShrnas.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/ulmuMkAblUexnoYjdNPymShrnas.png`,
                                      },
                                      className: `framer-wm3grk`,
                                      "data-framer-name": `Logo6`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/Y9y7MupSiyGewtmr1UC30q2Mdk.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/Y9y7MupSiyGewtmr1UC30q2Mdk.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/Y9y7MupSiyGewtmr1UC30q2Mdk.png`,
                                      },
                                      className: `framer-193iegv`,
                                      "data-framer-name": `Logo4`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/v4QAy6oDB19VT4wT9Ki18p2Vs0.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/v4QAy6oDB19VT4wT9Ki18p2Vs0.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/v4QAy6oDB19VT4wT9Ki18p2Vs0.png`,
                                      },
                                      className: `framer-1ah0a3f`,
                                      "data-framer-name": `Logo2`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/gXL3P49yPxLjruucSEhrOz8.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/gXL3P49yPxLjruucSEhrOz8.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/gXL3P49yPxLjruucSEhrOz8.png`,
                                      },
                                      className: `framer-84kh4d`,
                                      "data-framer-name": `Logo5`,
                                    }),
                                  }),
                                }),
                                l(b, {
                                  children: l(F, {
                                    breakpoint: T,
                                    overrides: {
                                      BYVZE4WeS: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `130px`,
                                          src: `../../assets/images/NP9cWrMW115Dged0sXMFFqp0kY.png`,
                                        },
                                      },
                                      Dgv7oRDPe: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 70,
                                          intrinsicWidth: 180,
                                          pixelHeight: 156,
                                          pixelWidth: 400,
                                          sizes: `110px`,
                                          src: `../../assets/images/NP9cWrMW115Dged0sXMFFqp0kY.png`,
                                        },
                                      },
                                    },
                                    children: l(U, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 70,
                                        intrinsicWidth: 180,
                                        pixelHeight: 156,
                                        pixelWidth: 400,
                                        sizes: `180px`,
                                        src: `../../assets/images/NP9cWrMW115Dged0sXMFFqp0kY.png`,
                                      },
                                      className: `framer-1dujpgu`,
                                      "data-framer-name": `Logo10`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(m.div, {
                      className: `framer-1qjfxwd`,
                      layout: M,
                      children: l(`div`, {
                        className: `framer-1kkftub`,
                        children: l(F, {
                          breakpoint: T,
                          overrides: {
                            Dgv7oRDPe: {
                              children: f(d, {
                                children: [
                                  l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `26.650779469823977px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: `got a project in mind? `,
                                  }),
                                  f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                      "--framer-font-size": `26.650779469823977px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: [
                                      `let’s talk `,
                                      l(N, {
                                        href: `mailto:hello@artjom.dev`,
                                        motionChild: !0,
                                        nodeId: `tMstx_0qo`,
                                        openInNewTab: !0,
                                        preserveParams: !1,
                                        relValues: [],
                                        scopeId: `KMvorioYR`,
                                        smoothScroll: !1,
                                        children: l(m.a, {
                                          className: `framer-styles-preset-aoqdeg`,
                                          "data-styles-preset": `rf7eHa4dX`,
                                          children: `hello@artjom.dev`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              viewBox: `0 0 350 53`,
                            },
                          },
                          children: l(A, {
                            __fromCanvasComponent: !0,
                            children: f(d, {
                              children: [
                                l(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `50px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  },
                                  children: `got a project in mind? `,
                                }),
                                f(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `50px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  },
                                  children: [
                                    `let’s talk `,
                                    l(N, {
                                      href: `mailto:hello@artjom.dev`,
                                      motionChild: !0,
                                      nodeId: `tMstx_0qo`,
                                      openInNewTab: !0,
                                      preserveParams: !1,
                                      relValues: [],
                                      scopeId: `KMvorioYR`,
                                      smoothScroll: !1,
                                      children: l(m.a, {
                                        className: `framer-styles-preset-aoqdeg`,
                                        "data-styles-preset": `rf7eHa4dX`,
                                        children: `hello@artjom.dev`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            className: `framer-bgalu0`,
                            fonts: [`FS;Outfit-bold`],
                            verticalAlignment: `top`,
                            viewBox: `0 0 724 100`,
                            viewBoxScale: 0.8,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    }),
                    l(m.div, {
                      className: `framer-58dhih`,
                      "data-framer-name": `IndexFooter`,
                      id: me,
                      layout: M,
                      ref: he,
                      children: l(W, {
                        height: 360,
                        width: `calc(${_?.width || `100vw`} - 48px)`,
                        children: l(z, {
                          className: `framer-159x3q9-container`,
                          nodeId: `lGIW5Hlci`,
                          rendersWithMotion: !0,
                          scopeId: `KMvorioYR`,
                          children: l(F, {
                            breakpoint: T,
                            overrides: {
                              BYVZE4WeS: {
                                __framer__targets: [{ ref: he, target: `dgixlhc1H` }],
                                variant: Q(`H6h6fviq3`),
                              },
                              Dgv7oRDPe: {
                                __framer__targets: [{ ref: he, target: `nOKgs1SEl` }],
                                variant: Q(`GVYGZcCCV`),
                              },
                            },
                            children: l(po, {
                              __framer__animateOnce: !1,
                              __framer__targets: [{ ref: he, target: `XolEYst5Z` }],
                              __framer__threshold: 0,
                              __framer__variantAppearEffectEnabled: !0,
                              height: `100%`,
                              id: `lGIW5Hlci`,
                              layoutId: `lGIW5Hlci`,
                              style: { width: `100%` },
                              variant: Q(`ZRUlqdzB5`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-XF9OF.framer-1hl0n7g, .framer-XF9OF .framer-1hl0n7g { display: block; }`,
        `.framer-XF9OF.framer-1ifvuj5 { --selection-background-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01) /* {"name":"Orange"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-XF9OF .framer-7jz0ud-container { flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,
        `.framer-XF9OF .framer-wa3jsn-container { bottom: 0px; flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; z-index: 3; }`,
        `.framer-XF9OF .framer-foun8u-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-XF9OF .framer-11jv63j { align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1gfqinq-container { aspect-ratio: 2.1686746987951806 / 1; flex: none; height: 90vh; max-width: 1500px; position: relative; width: var(--framer-aspect-ratio-supported, 972px); }`,
        `.framer-XF9OF .framer-78l3n2-container { aspect-ratio: 1.0688259109311742 / 1; bottom: 72px; flex: none; height: var(--framer-aspect-ratio-supported, 258px); left: 35px; mix-blend-mode: multiply; position: absolute; width: 23%; }`,
        `.framer-XF9OF .framer-1qxsll5-container { aspect-ratio: 0.7132867132867133 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 286px); left: 89px; mix-blend-mode: multiply; position: absolute; top: 35px; width: 17%; }`,
        `.framer-XF9OF .framer-13nhal7-container { aspect-ratio: 1.38 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); mix-blend-mode: multiply; position: absolute; right: 93px; top: 43px; width: 23%; }`,
        `.framer-XF9OF .framer-jwxgy9-container { aspect-ratio: 0.7241379310344828 / 1; bottom: 30px; flex: none; height: var(--framer-aspect-ratio-supported, 232px); mix-blend-mode: multiply; position: absolute; right: 104px; width: 14%; }`,
        `.framer-XF9OF .framer-ds8lc1-container { aspect-ratio: 1.0227272727272727 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 176px); mix-blend-mode: multiply; position: absolute; right: 32px; top: 45%; transform: translateY(-50%); width: 15%; }`,
        `.framer-XF9OF .framer-1s9alie { align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-4d7i5n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 105px 40px 180px 40px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1icim18-container { flex: none; height: auto; position: relative; width: 68%; z-index: 1; }`,
        `.framer-XF9OF .framer-1h9mriv-container { height: 36px; position: relative; width: 16px; }`,
        `.framer-XF9OF .framer-1y8q4hm-container { height: 45px; position: relative; width: 43px; }`,
        `.framer-XF9OF .framer-1hrok1j-container { height: 45px; position: relative; width: 90px; }`,
        `.framer-XF9OF .framer-uo1jp5-container { height: 45px; position: relative; width: 56px; }`,
        `.framer-XF9OF .framer-16kmnxy-container { height: 45px; position: relative; width: 60px; }`,
        `.framer-XF9OF .framer-13q6q43-container { height: 45px; position: relative; width: 75px; }`,
        `.framer-XF9OF .framer-1hp6vpm-container { height: 45px; position: relative; width: 46px; }`,
        `.framer-XF9OF .framer-n18uxw-container { height: 45px; position: relative; width: 217px; }`,
        `.framer-XF9OF .framer-1a5vd2f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-XF9OF .framer-lxo8aj-container { aspect-ratio: 1.8461538461538463 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 650px); max-width: 1500px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-ssakup { align-content: flex-start; align-items: flex-start; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 130px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-uuzfzd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-svw7go-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-XF9OF .framer-1mh221c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; max-width: 1500px; overflow: visible; padding: 50px 24px 0px 200px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-XF9OF .framer-4l4ez1 { --framer-paragraph-spacing: 0px; flex: none; height: 28px; max-width: 540px; position: relative; white-space: pre-wrap; width: 418px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XF9OF .framer-f6853m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1bcdse2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 100px 0px 100px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1kaf4o3, .framer-XF9OF .framer-1spj5xv, .framer-XF9OF .framer-1ffaker, .framer-XF9OF .framer-uqxom5 { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, #ababab); flex: none; height: 1px; overflow: visible; position: relative; width: 100%; z-index: 1; }`,
        `.framer-XF9OF .framer-10j2sx4-container, .framer-XF9OF .framer-10blw20-container, .framer-XF9OF .framer-glghlr-container, .framer-XF9OF .framer-5x1slb-container { flex: none; height: auto; max-width: 1500px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1dbufhi, .framer-XF9OF .framer-1e33vkn, .framer-XF9OF .framer-4xpgl5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 20px 100px 5px 100px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-11l6t1m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-12aw9p9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-XF9OF .framer-15uw8yz { align-content: center; align-items: center; background-color: var(--token-611b823e-c855-40c6-b029-2ae726e0e1b8, #ff6200); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-hukp5v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; max-width: 1500px; overflow: visible; padding: 0px 24px 0px 35px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-16gda05, .framer-XF9OF .framer-19yoq18, .framer-XF9OF .framer-68amvi, .framer-XF9OF .framer-euh0kk, .framer-XF9OF .framer-hw0nzp, .framer-XF9OF .framer-1lj5c3k, .framer-XF9OF .framer-ne4mq4, .framer-XF9OF .framer-1f16lmn, .framer-XF9OF .framer-y6d8eg, .framer-XF9OF .framer-9kgtit { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-XF9OF .framer-1sps585, .framer-XF9OF .framer-gb3c8s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 200px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-16aq31d { --framer-paragraph-spacing: 0px; flex: none; height: 46px; max-width: 540px; position: relative; white-space: pre-wrap; width: 430px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XF9OF .framer-g0qx93 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1500px; overflow: visible; padding: 0px 60px 100px 35px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-108nzez { align-content: center; align-items: center; aspect-ratio: 0.9430379746835443 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 316px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 50px; width: 27%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-XF9OF .framer-m90iwc-container { aspect-ratio: 0.9430379746835443 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 316px); position: relative; width: 1px; z-index: 1; }`,
        `.framer-XF9OF .framer-pmvw0b { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 200px; position: relative; width: 1px; }`,
        `.framer-XF9OF .framer-1j1zbhy, .framer-XF9OF .framer-10d5qey, .framer-XF9OF .framer-1p4ofdh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-xh9cp6, .framer-XF9OF .framer-1ggfgjy, .framer-XF9OF .framer-42eqwf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-XF9OF .framer-15qnu4b, .framer-XF9OF .framer-10x3ah0, .framer-XF9OF .framer-ks9f6t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-12pnkq2, .framer-XF9OF .framer-hcf6v1, .framer-XF9OF .framer-yg6zqu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); position: relative; width: 50px; }`,
        `.framer-XF9OF .framer-w0nij7, .framer-XF9OF .framer-fh2pd4, .framer-XF9OF .framer-1lyaqvo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-172g1g7, .framer-XF9OF .framer-1k675mp, .framer-XF9OF .framer-1u6x7a4 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XF9OF .framer-j9cg3d { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-x0vsg8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 870px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1i7tafk { --framer-paragraph-spacing: 0px; flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
        `.framer-XF9OF .framer-143xyf8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 540px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XF9OF .framer-dg33jy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-83770v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-XF9OF .framer-yng6vz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-mq7eps { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: min-content; }`,
        `.framer-XF9OF .framer-skdmo, .framer-XF9OF .framer-1n58v19, .framer-XF9OF .framer-a0mq9o, .framer-XF9OF .framer-1sy0oev, .framer-XF9OF .framer-1eb3l4i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 151px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 865px; }`,
        `.framer-XF9OF .framer-16akfvn-container { flex: none; height: 215px; left: calc(-0.1615508885298647% - 320px / 2); position: absolute; top: calc(49.62406015037596% - 215px / 2); width: 320px; z-index: 1; }`,
        `.framer-XF9OF .framer-1wxpq1k-container, .framer-XF9OF .framer-1ocjq7z-container, .framer-XF9OF .framer-b1amg4-container, .framer-XF9OF .framer-1cnsl9t-container { flex: none; height: 215px; left: -161px; position: absolute; top: -82px; width: 320px; z-index: 1; }`,
        `.framer-XF9OF .framer-1vl6wuh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1400px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1sdwmrq { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-12ww611 { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 97%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 3%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 97%) add; max-width: 1480px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-XF9OF .framer-19xtapl, .framer-XF9OF .framer-txqesg, .framer-XF9OF .framer-1k1zern, .framer-XF9OF .framer-2mdo19, .framer-XF9OF .framer-1rx9gjr, .framer-XF9OF .framer-wm3grk, .framer-XF9OF .framer-193iegv, .framer-XF9OF .framer-1ah0a3f, .framer-XF9OF .framer-84kh4d, .framer-XF9OF .framer-1dujpgu { aspect-ratio: 2.5714285714285716 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 180px; }`,
        `.framer-XF9OF .framer-1qjfxwd { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-1kkftub { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1480px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 20px 5px 20px; position: relative; width: 1px; }`,
        `.framer-XF9OF .framer-bgalu0 { flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }`,
        `.framer-XF9OF .framer-58dhih { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 24px 100px 24px; position: relative; width: 100%; }`,
        `.framer-XF9OF .framer-159x3q9-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Re,
        `.framer-XF9OF[data-selection="true"] * ::selection, .framer-XF9OF [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-XF9OF.framer-1ifvuj5 { width: 810px; } .framer-XF9OF .framer-1gfqinq-container { aspect-ratio: 0.9156378600823045 / 1; width: var(--framer-aspect-ratio-supported, 890px); } .framer-XF9OF .framer-78l3n2-container { aspect-ratio: 1.0682926829268293 / 1; bottom: 169px; height: var(--framer-aspect-ratio-supported, 205px); left: 26px; width: 27%; } .framer-XF9OF .framer-1qxsll5-container { aspect-ratio: 0.712 / 1; height: var(--framer-aspect-ratio-supported, 250px); left: 47px; top: 92px; width: 22%; } .framer-XF9OF .framer-13nhal7-container { height: var(--framer-aspect-ratio-supported, 153px); right: 35px; top: 109px; width: 26%; } .framer-XF9OF .framer-jwxgy9-container { bottom: 90px; height: var(--framer-aspect-ratio-supported, 213px); right: 78px; width: 19%; } .framer-XF9OF .framer-ds8lc1-container { aspect-ratio: 1.020979020979021 / 1; height: var(--framer-aspect-ratio-supported, 143px); right: 31px; top: 397px; transform: unset; width: 18%; } .framer-XF9OF .framer-4d7i5n { padding: 60px 40px 160px 40px; } .framer-XF9OF .framer-1icim18-container { width: 86%; } .framer-XF9OF .framer-1a5vd2f { height: 500px; } .framer-XF9OF .framer-lxo8aj-container { aspect-ratio: unset; height: 433px; width: 800px; } .framer-XF9OF .framer-ssakup { padding: 50px 0px 60px 0px; } .framer-XF9OF .framer-1mh221c { padding: 30px 24px 0px 200px; } .framer-XF9OF .framer-1bcdse2 { padding: 80px 50px 0px 50px; } .framer-XF9OF .framer-1dbufhi, .framer-XF9OF .framer-1e33vkn, .framer-XF9OF .framer-4xpgl5 { padding: 20px 50px 5px 50px; } .framer-XF9OF .framer-11l6t1m { padding: 80px 0px 60px 0px; } .framer-XF9OF .framer-hukp5v { gap: 30px; } .framer-XF9OF .framer-pmvw0b { padding: 0px 0px 0px 160px; } .framer-XF9OF .framer-1j1zbhy, .framer-XF9OF .framer-10d5qey, .framer-XF9OF .framer-1p4ofdh { gap: 60px; } .framer-XF9OF .framer-x0vsg8 { padding: 0px 24px 0px 35px; } .framer-XF9OF .framer-83770v { height: min-content; padding: 60px 24px 0px 24px; position: relative; top: unset; } .framer-XF9OF .framer-yng6vz { flex: none; height: min-content; } .framer-XF9OF .framer-mq7eps { gap: 24px; width: 100%; } .framer-XF9OF .framer-skdmo, .framer-XF9OF .framer-1n58v19, .framer-XF9OF .framer-a0mq9o, .framer-XF9OF .framer-1sy0oev, .framer-XF9OF .framer-1eb3l4i { height: 360px; width: 100%; } .framer-XF9OF .framer-16akfvn-container, .framer-XF9OF .framer-1wxpq1k-container, .framer-XF9OF .framer-1ocjq7z-container, .framer-XF9OF .framer-b1amg4-container, .framer-XF9OF .framer-1cnsl9t-container { flex: 1 0 0px; height: 100%; left: unset; position: relative; top: unset; width: 1px; } .framer-XF9OF .framer-1sdwmrq { padding: 50px 0px 50px 0px; } .framer-XF9OF .framer-12ww611 { gap: 20px; } .framer-XF9OF .framer-19xtapl, .framer-XF9OF .framer-txqesg, .framer-XF9OF .framer-1k1zern, .framer-XF9OF .framer-2mdo19, .framer-XF9OF .framer-1rx9gjr, .framer-XF9OF .framer-wm3grk, .framer-XF9OF .framer-193iegv, .framer-XF9OF .framer-1ah0a3f, .framer-XF9OF .framer-84kh4d, .framer-XF9OF .framer-1dujpgu { height: var(--framer-aspect-ratio-supported, 50px); width: 130px; } .framer-XF9OF .framer-1kkftub { padding: 100px 20px 5px 20px; }}`,
        `@media (max-width: 809.98px) { .framer-XF9OF.framer-1ifvuj5 { width: 390px; } .framer-XF9OF .framer-7jz0ud-container { height: auto; } .framer-XF9OF .framer-wa3jsn-container { height: 50px; } .framer-XF9OF .framer-1gfqinq-container { aspect-ratio: 0.6710526315789473 / 1; width: var(--framer-aspect-ratio-supported, 510px); } .framer-XF9OF .framer-78l3n2-container { aspect-ratio: 1.076470588235294 / 1; bottom: 117px; height: var(--framer-aspect-ratio-supported, 170px); left: 16px; width: 47%; } .framer-XF9OF .framer-1qxsll5-container { aspect-ratio: 0.7142857142857143 / 1; height: var(--framer-aspect-ratio-supported, 175px); left: 31px; top: 119px; width: 32%; } .framer-XF9OF .framer-13nhal7-container { height: var(--framer-aspect-ratio-supported, 119px); right: 39px; top: 51px; width: 42%; } .framer-XF9OF .framer-jwxgy9-container { bottom: 50px; height: var(--framer-aspect-ratio-supported, 167px); right: 42px; width: 31%; } .framer-XF9OF .framer-ds8lc1-container { aspect-ratio: 1.018018018018018 / 1; height: var(--framer-aspect-ratio-supported, 111px); right: 14px; top: 151px; transform: unset; width: 29%; } .framer-XF9OF .framer-4d7i5n { padding: 25px 24px 70px 24px; } .framer-XF9OF .framer-1icim18-container { width: 86%; } .framer-XF9OF .framer-1a5vd2f { height: 250px; } .framer-XF9OF .framer-lxo8aj-container { aspect-ratio: unset; height: 206px; width: 380px; } .framer-XF9OF .framer-ssakup { padding: 30px 0px 0px 0px; } .framer-XF9OF .framer-1mh221c { align-content: center; align-items: center; justify-content: center; padding: 20px 24px 0px 24px; } .framer-XF9OF .framer-4l4ez1, .framer-XF9OF .framer-16aq31d { width: 100%; } .framer-XF9OF .framer-1bcdse2 { padding: 60px 16px 0px 16px; } .framer-XF9OF .framer-1dbufhi, .framer-XF9OF .framer-1e33vkn, .framer-XF9OF .framer-4xpgl5 { padding: 20px 16px 5px 16px; } .framer-XF9OF .framer-11l6t1m { padding: 60px 0px 60px 0px; } .framer-XF9OF .framer-15uw8yz, .framer-XF9OF .framer-j9cg3d { padding: 60px 0px 0px 0px; } .framer-XF9OF .framer-hukp5v { gap: 20px; padding: 0px 24px 0px 24px; } .framer-XF9OF .framer-1sps585, .framer-XF9OF .framer-gb3c8s { padding: 0px; } .framer-XF9OF .framer-g0qx93 { padding: 0px 18px 60px 18px; } .framer-XF9OF .framer-pmvw0b { gap: 80px; padding: 0px; } .framer-XF9OF .framer-1j1zbhy, .framer-XF9OF .framer-10d5qey, .framer-XF9OF .framer-1p4ofdh { gap: 40px; } .framer-XF9OF .framer-12pnkq2, .framer-XF9OF .framer-hcf6v1, .framer-XF9OF .framer-yg6zqu { height: var(--framer-aspect-ratio-supported, 30px); width: 30px; } .framer-XF9OF .framer-83770v { height: min-content; padding: 30px 20px 0px 20px; position: relative; top: unset; } .framer-XF9OF .framer-yng6vz { flex: none; height: min-content; } .framer-XF9OF .framer-mq7eps { gap: 24px; transform-style: unset; width: 100%; } .framer-XF9OF .framer-skdmo, .framer-XF9OF .framer-1n58v19, .framer-XF9OF .framer-a0mq9o, .framer-XF9OF .framer-1sy0oev, .framer-XF9OF .framer-1eb3l4i { height: 240px; transform-style: unset; width: 100%; } .framer-XF9OF .framer-16akfvn-container, .framer-XF9OF .framer-1wxpq1k-container, .framer-XF9OF .framer-1ocjq7z-container, .framer-XF9OF .framer-b1amg4-container, .framer-XF9OF .framer-1cnsl9t-container { flex: 1 0 0px; height: 100%; left: unset; position: relative; top: unset; width: 1px; } .framer-XF9OF .framer-1sdwmrq { padding: 50px 0px 50px 0px; } .framer-XF9OF .framer-12ww611 { gap: 20px; } .framer-XF9OF .framer-19xtapl, .framer-XF9OF .framer-txqesg, .framer-XF9OF .framer-1k1zern, .framer-XF9OF .framer-2mdo19, .framer-XF9OF .framer-1rx9gjr, .framer-XF9OF .framer-wm3grk, .framer-XF9OF .framer-193iegv, .framer-XF9OF .framer-1ah0a3f, .framer-XF9OF .framer-84kh4d, .framer-XF9OF .framer-1dujpgu { height: var(--framer-aspect-ratio-supported, 43px); width: 110px; }}`,
      ],
      `framer-XF9OF`
    )),
    (jo = Ao),
    (Ao.displayName = `Page`),
    (Ao.defaultProps = { height: 8846, width: 1200 }),
    K(
      Ao,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `EB Garamond`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `EB Garamond`,
              url: `https://fonts.gstatic.com/s/ebgaramond/v32/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7dbR49_WamXgXFI.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/3JX43FCBGINLH25MK4NSVCHCDXUSMHUE.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/QWBFHLNJNNJC3X2PA4WN6Q2H5G7OG6MX.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/P65L7VCWZE3ZYHD2XJZ2WDLQCATH7Y3R.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2`,
              weight: `700`,
            },
          ],
        },
        ...Sa,
        ...wa,
        ...Ea,
        ...Da,
        ...ka,
        ...ja,
        ...Na,
        ...Fa,
        ...La,
        ...za,
        ...Ba,
        ...Va,
        ...Ha,
        ...Ua,
        ...Wa,
        ...Ga,
        ...Ka,
        ...qa,
        ...Ja,
        ...Xa,
        ...Za,
        ...$a,
        ...to,
        ...no,
        ...oo,
        ...fo,
        ...mo,
        ...oe(ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Ao.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          C(ye, {}, t),
          C(Se, {}, t),
          C(Xt, {}, t),
          C(gn, {}, t),
          C(mt, {}, t),
          C(Qi, {}, t),
          C(ii, {}, t),
          C(_a, {}, t),
          C(Ee, {}, t),
          C(kn, {}, t),
          C(Tt, {}, t),
          C(mr, {}, t),
          C(Ft, {}, t),
          C(Pi, {}, t),
          C(Br, {}, t),
          C(zn, {}, t),
          C(Ci, {}, t),
          C(Or, {}, t),
          C(pe, {}, t),
          C(se, {}, t),
          C(Fe, {}, t),
          C(Me, {}, t),
          C(X, {}, t),
          C(he, {}, t),
        ])
      ),
    }),
    (Mo = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerKMvorioYR`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `8846`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BYVZE4WeS":{"layout":["fixed","auto"]},"Dgv7oRDPe":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"idZny8EYk":{"pattern":":idZny8EYk","name":"top"},"sxn5LS4dS":{"pattern":":sxn5LS4dS","name":"intro"},"TX8sNigqd":{"pattern":":TX8sNigqd","name":"showreelmain"},"MpDyUXQWv":{"pattern":":MpDyUXQWv","name":"featured"},"MivpxP5Sr":{"pattern":":MivpxP5Sr","name":"lky100"},"JkWXrvQQj":{"pattern":":JkWXrvQQj","name":"whatido"},"kbY2vMClY":{"pattern":":kbY2vMClY","name":"client"},"jT8rvFpy1":{"pattern":":jT8rvFpy1","name":"images"},"bM04fR14P":{"pattern":":bM04fR14P","name":"indexfooter"}}`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Mo as __FramerMetadata__, jo as default, _o as queryParamNames };
//# sourceMappingURL=uAy19rv68a0trw2t95x4JWErpTX4cUpjF5Bdy6nAJFw.D7I6sHch.mjs.map
