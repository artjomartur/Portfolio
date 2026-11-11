import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  D as t,
  O as n,
  S as r,
  T as i,
  _ as a,
  a as o,
  c as s,
  h as c,
  i as ee,
  j as l,
  l as u,
  o as d,
  s as f,
} from "./react.Bb_yyrg0.mjs";
import { T as p, a as m, n as te, r as ne, t as h } from "./motion.Dq3vMtKA.mjs";
import {
  A as g,
  G as _,
  M as v,
  R as y,
  S as re,
  T as ie,
  _t as b,
  a as x,
  at as ae,
  b as S,
  bt as C,
  c as oe,
  f as w,
  ft as T,
  gt as se,
  h as E,
  it as ce,
  lt as le,
  mt as ue,
  n as D,
  nt as de,
  pt as O,
  r as k,
  st as fe,
  t as A,
  tt as pe,
  ut as me,
  v as he,
  vt as j,
  w as M,
  wt as N,
  y as P,
  yt as ge,
  z as F,
} from "./framer.cs1Z8Vda.mjs";
import {
  a as I,
  i as L,
  n as R,
  o as _e,
  r as ve,
  s as ye,
  t as z,
} from "./QGzoyu2RM.C7jgKHUZ.mjs";
import {
  c as B,
  d as be,
  f as xe,
  i as Se,
  m as Ce,
  n as V,
  p as we,
  r as Te,
  s as H,
  t as Ee,
} from "./yk6i18qEx.CnQf8P0b.mjs";
import { n as U, t as De } from "./VideoController.D9ulu-ly.mjs";
import { n as Oe, t as W } from "./Video.CtoqTS3T.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./rf7eHa4dX.u16jYVVh.mjs";
import { n as Ne, r as Pe } from "./vjUZoXgWM.C8fq64_v.mjs";
function Fe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  G,
  K,
  Ke = e(() => {
    (d(),
      _(),
      h(),
      r(),
      Oe(),
      (Ie = y(W)),
      (Le = { zr8UYz7r9: { hover: !0 } }),
      (Re = `framer-Juu9S`),
      (ze = { zr8UYz7r9: `framer-v-erwxpp` }),
      (Be = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ve = (e, t) => `translate(-50%, -50%) ${t}`),
      (He = ({ value: e, children: r }) => {
        let i = t(m),
          a = e ?? i.transition,
          o = n(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return s(m.Provider, { value: o, children: r });
      }),
      (Ue = p.create(l)),
      (We = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        WOJWVlmTU: e ?? i.WOJWVlmTU,
      })),
      (Ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = b(
        c(function (e, t) {
          let n = i(null),
            r = t ?? n,
            o = a(),
            { activeLocale: c, setLocale: ee } = le();
          de();
          let { style: d, className: f, layoutId: m, variant: te, WOJWVlmTU: h, ..._ } = We(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ie,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ae,
              setGestureState: C,
              setVariant: oe,
              variants: w,
            } = se({
              defaultVariant: `zr8UYz7r9`,
              enabledGestures: Le,
              ref: r,
              variant: te,
              variantClassNames: ze,
            }),
            T = Ge(e, w),
            { activeVariantCallback: E, delay: ce } = pe(v),
            ue = E(async (...e) => {
              if ((C({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            D = g(Re);
          return s(ne, {
            id: m ?? o,
            children: s(Ue, {
              animate: w,
              initial: !1,
              children: s(He, {
                value: Be,
                children: u(p.div, {
                  ..._,
                  ...b,
                  className: g(D, `framer-erwxpp`, f, y),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `zr8UYz7r9`,
                  onTap: ue,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...d,
                  },
                  variants: {
                    "zr8UYz7r9-hover": {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                  },
                  ...Fe({ "zr8UYz7r9-hover": { "data-framer-name": void 0 } }, v, x),
                  children: [
                    s(A, {
                      children: s(re, {
                        className: `framer-b7jnyn-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: T,
                        layoutId: `gNxUTS3eS-container`,
                        nodeId: `gNxUTS3eS`,
                        rendersWithMotion: !0,
                        scopeId: `LFofDRicF`,
                        style: { filter: `blur(8px)`, WebkitFilter: `blur(8px)` },
                        variants: {
                          "zr8UYz7r9-hover": { filter: `blur(0px)`, WebkitFilter: `blur(0px)` },
                        },
                        children: s(W, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `gNxUTS3eS`,
                          isMixedBorderRadius: !1,
                          layoutId: `gNxUTS3eS`,
                          loop: !0,
                          muted: !0,
                          objectFit: `cover`,
                          playing: !0,
                          poster: `../../assets/images/US6f86kKjABlKtH9YxRhBJVpOwQ.png`,
                          posterEnabled: !0,
                          srcType: `URL`,
                          srcUrl: `../../assets/videos/main-9858c8.mp4`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: `100%`,
                        }),
                      }),
                    }),
                    s(S, {
                      __fromCanvasComponent: !0,
                      children: s(l, {
                        children: s(p.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `700`,
                            "--framer-line-height": `1em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: `▶`,
                        }),
                      }),
                      className: `framer-b0mc3d`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: T,
                      layoutId: `w5Y3GkAUg`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 1,
                      },
                      variants: { "zr8UYz7r9-hover": { opacity: 0 } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Fe({ "zr8UYz7r9-hover": { transformTemplate: Ve } }, v, x),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Juu9S.framer-1w6zrdw, .framer-Juu9S .framer-1w6zrdw { display: block; }`,
          `.framer-Juu9S.framer-erwxpp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Juu9S .framer-b7jnyn-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-Juu9S .framer-b0mc3d { flex: none; height: auto; mix-blend-mode: difference; position: absolute; right: 17px; top: 18px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-Juu9S.framer-v-erwxpp.hover.framer-erwxpp { height: 109px; width: 181px; }`,
          `.framer-Juu9S.framer-v-erwxpp.hover .framer-b0mc3d { left: 52%; right: unset; top: 52%; }`,
        ],
        `framer-Juu9S`
      )),
      (K = G),
      (G.displayName = `SideBarShowreel`),
      (G.defaultProps = { height: 50, width: 50 }),
      ie(G, { WOJWVlmTU: { title: `Click`, type: k.EventHandler } }),
      M(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
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
          ...Ie,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
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
  q,
  J,
  mt,
  ht,
  Y,
  X,
  gt,
  _t,
  vt,
  Z,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Q,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  $,
  At,
  jt;
e(() => {
  (d(),
    _(),
    h(),
    r(),
    o(),
    _e(),
    Oe(),
    Ce(),
    xe(),
    L(),
    Ke(),
    B(),
    ve(),
    Te(),
    Ee(),
    De(),
    ke(),
    Ne(),
    (qe = y(V)),
    (Je = y(K)),
    (Ye = y(W)),
    (Xe = y(ye)),
    (Ze = y(H)),
    (Qe = y(we)),
    ($e = j(W, { nodeId: `T1q56Frrk`, override: U, scopeId: `vjUZoXgWM` })),
    (et = ge(p.div)),
    (tt = y(I)),
    (nt = y(z)),
    (rt = C(j(z, { nodeId: `dJ1s0mlIG`, override: U, scopeId: `vjUZoXgWM` }), R)),
    (it = C(j(z, { nodeId: `PDVkNJuih`, override: U, scopeId: `vjUZoXgWM` }), R)),
    (at = C(j(z, { nodeId: `uH1U_BTN1`, override: U, scopeId: `vjUZoXgWM` }), R)),
    (ot = y(be)),
    (st = N(be)),
    (ct = y(Se)),
    (lt = {
      cYTuptfoX: `(min-width: 810px) and (max-width: 1199.98px)`,
      VEtW6bOPL: `(max-width: 809.98px)`,
      yhrH3k0nk: `(min-width: 1200px)`,
    }),
    (ut = []),
    (dt = `framer-4fn1s`),
    (ft = {
      cYTuptfoX: `framer-v-1uk2mcn`,
      VEtW6bOPL: `framer-v-xyggpu`,
      yhrH3k0nk: `framer-v-r2fef4`,
    }),
    (pt = (e, t, n) => (e && t ? `position` : n)),
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (J = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
    (mt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: J,
      x: 0,
      y: 0,
    }),
    (ht = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: J,
      x: 0,
      y: 0,
    }),
    (Y = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (X = { bounce: 0.2, delay: 0, duration: 0.7, type: `spring` }),
    (gt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.2,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 500,
    }),
    (_t = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 0,
    }),
    (vt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.2,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 500,
    }),
    (Z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (yt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 0,
      y: 0,
    }),
    (bt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: Z,
    }),
    (xt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 0,
      y: 0,
    }),
    (St = (e, t) => `translate(-50%, -50%) ${t}`),
    (Ct = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (wt = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = T({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Q = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Tt = { Desktop: `yhrH3k0nk`, Phone: `VEtW6bOPL`, Tablet: `cYTuptfoX` }),
    (Et = ({ value: e }) =>
      fe()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Dt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Tt[r.variant] ?? r.variant ?? `yhrH3k0nk`,
    })),
    (Ot = { component: Se, variant: `KaZbXU7Hw` }),
    (kt = { component: Se, variant: `ymH31qajX` }),
    ($ = b(
      c(function (e, r) {
        let o = i(null),
          c = r ?? o,
          d = a(),
          { activeLocale: h, setLocale: _ } = le(),
          v = de(),
          { style: y, className: re, layoutId: ie, variant: b, ...C } = Dt(e);
        me(n(() => Pe({}, h), [h]));
        let [T, se] = ae(b, lt, !1),
          { activeVariantCallback: k, delay: fe } = pe(void 0),
          j = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          M = ({ overlay: e }) =>
            k(async (...t) => {
              e.hide();
            }),
          N = g(dt, Me),
          ge = t(x)?.isLayoutTemplate,
          F = pt(ge, !!t(m)?.transition?.layout),
          L = i(null),
          R = O(`Fd5knT876`),
          _e = i(null),
          ve = O(`S910wOOkv`);
        ue();
        let z = O(`TM5EFM2EV`),
          B = i(null);
        return (
          ce({ "1bsa85u": { ...Ot, variant: `T2APWzmIm` }, bqygee: kt, yjimk7: Ot }),
          s(x.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Tt,
              primaryVariantId: `yhrH3k0nk`,
              variantClassNames: ft,
            },
            children: u(ne, {
              id: ie ?? d,
              children: [
                s(Et, {
                  value: `html body { background: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)); }`,
                }),
                u(p.div, {
                  ...C,
                  className: g(N, `framer-r2fef4`, re),
                  "data-framer-cursor": `yjimk7`,
                  "data-selection": !0,
                  ref: c,
                  style: { ...y },
                  children: [
                    s(E, {
                      breakpoint: T,
                      overrides: { VEtW6bOPL: { height: 50 } },
                      children: s(A, {
                        height: 64,
                        width: v?.width || `100vw`,
                        y: 0,
                        children: s(D, {
                          className: `framer-14o68wz-container`,
                          layout: F,
                          layoutScroll: !0,
                          nodeId: `BlC7duPI0`,
                          scopeId: `vjUZoXgWM`,
                          children: s(E, {
                            breakpoint: T,
                            overrides: { VEtW6bOPL: { variant: q(`yAuW89ZY2`) } },
                            children: s(V, {
                              dHsy3xrhB: `bqygee`,
                              height: `100%`,
                              id: `BlC7duPI0`,
                              layoutId: `BlC7duPI0`,
                              style: { height: `100%`, width: `100%` },
                              variant: q(`PJQL26TjW`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    s(wt, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        s(f, {
                          children: s(E, {
                            breakpoint: T,
                            overrides: { VEtW6bOPL: { width: `50px`, y: 942 } },
                            children: s(A, {
                              height: 50,
                              y: 936,
                              children: u(D, {
                                className: `framer-1i9inng-container`,
                                id: `1i9inng`,
                                layout: F,
                                layoutScroll: !0,
                                nodeId: `TqECIz1Sw`,
                                scopeId: `vjUZoXgWM`,
                                children: [
                                  s(E, {
                                    breakpoint: T,
                                    overrides: { VEtW6bOPL: { style: { width: `100%` } } },
                                    children: s(K, {
                                      height: `100%`,
                                      id: `TqECIz1Sw`,
                                      layoutId: `TqECIz1Sw`,
                                      width: `100%`,
                                      WOJWVlmTU: j({ overlay: e }),
                                    }),
                                  }),
                                  s(te, {
                                    children:
                                      e.visible &&
                                      s(f, {
                                        children: ee(
                                          s(oe, {
                                            triggerId: `1i9inng`,
                                            children: u(he, {
                                              children: [
                                                s(
                                                  p.div,
                                                  {
                                                    animate: {
                                                      opacity: 1,
                                                      transition: {
                                                        delay: 0,
                                                        duration: 0,
                                                        ease: [0.5, 0, 0.88, 0.77],
                                                        type: `tween`,
                                                      },
                                                    },
                                                    className: g(N, `framer-19m040o`),
                                                    "data-framer-portal-id": `1i9inng`,
                                                    exit: {
                                                      opacity: 0,
                                                      transition: {
                                                        delay: 0,
                                                        duration: 0,
                                                        ease: [0.12, 0.23, 0.5, 1],
                                                        type: `tween`,
                                                      },
                                                    },
                                                    initial: { opacity: 0 },
                                                    onTap: () => e.hide(),
                                                  },
                                                  `WsJsUVy1_`
                                                ),
                                                u(p.div, {
                                                  animate: ht,
                                                  className: g(N, `framer-1xsr6bn`),
                                                  "data-framer-portal-id": `1i9inng`,
                                                  exit: mt,
                                                  initial: Y,
                                                  children: [
                                                    s(A, {
                                                      children: s(D, {
                                                        animate: _t,
                                                        className: `framer-12s8260-container`,
                                                        exit: gt,
                                                        inComponentSlot: !0,
                                                        initial: vt,
                                                        isAuthoredByUser: !0,
                                                        isModuleExternal: !0,
                                                        nodeId: `csQkhON96`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `vjUZoXgWM`,
                                                        children: s(W, {
                                                          backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                                                          borderRadius: 25,
                                                          bottomLeftRadius: 25,
                                                          bottomRightRadius: 25,
                                                          controls: !0,
                                                          height: `100%`,
                                                          id: `csQkhON96`,
                                                          isMixedBorderRadius: !1,
                                                          layoutId: `csQkhON96`,
                                                          loop: !1,
                                                          muted: !1,
                                                          objectFit: `cover`,
                                                          playing: !0,
                                                          posterEnabled: !0,
                                                          srcType: `URL`,
                                                          srcUrl: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69cb86457a8212fa5fec9764/main.mp4`,
                                                          startTime: 0,
                                                          style: { height: `100%`, width: `100%` },
                                                          topLeftRadius: 25,
                                                          topRightRadius: 25,
                                                          volume: 25,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                    s(p.div, {
                                                      animate: xt,
                                                      className: `framer-nqrupm`,
                                                      "data-framer-name": `CloseB`,
                                                      exit: yt,
                                                      initial: Y,
                                                      onTap: M({ overlay: e }),
                                                      whileHover: bt,
                                                      children: s(ye, {
                                                        animated: !1,
                                                        className: `framer-1p6p9f4`,
                                                        CRY1Fpez4: !0,
                                                        layoutId: `heWp5WHyn`,
                                                        transformTemplate: St,
                                                        vet7gqNu_: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          Ct()
                                        ),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                    }),
                    s(E, {
                      breakpoint: T,
                      overrides: { VEtW6bOPL: { height: 50, y: 950 } },
                      children: s(A, {
                        height: 64,
                        width: v?.width || `100vw`,
                        y: 936,
                        children: s(D, {
                          className: `framer-6t8mhv-container`,
                          layout: F,
                          layoutScroll: !0,
                          nodeId: `bGHDdANvR`,
                          scopeId: `vjUZoXgWM`,
                          children: s(E, {
                            breakpoint: T,
                            overrides: { VEtW6bOPL: { variant: q(`A3DEEFWfS`) } },
                            children: s(H, {
                              height: `100%`,
                              id: `bGHDdANvR`,
                              layoutId: `bGHDdANvR`,
                              style: { height: `100%`, width: `100%` },
                              variant: q(`YN2PiCfKL`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    s(A, {
                      children: s(D, {
                        className: `framer-ry5mb-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: F,
                        nodeId: `MAPqyMZsx`,
                        scopeId: `vjUZoXgWM`,
                        children: s(we, {
                          height: `100%`,
                          id: `MAPqyMZsx`,
                          intensity: 10,
                          layoutId: `MAPqyMZsx`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    s(et, {
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
                            x: 0,
                            y: 0,
                          },
                        },
                        {
                          ref: L,
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 0.3,
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
                      className: `framer-1fwumxj`,
                      "data-framer-name": `WorkHero`,
                      id: R,
                      layout: F,
                      ref: _e,
                      children: s(A, {
                        children: s(D, {
                          className: `framer-lzkkxu-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `T1q56Frrk`,
                          rendersWithMotion: !0,
                          scopeId: `vjUZoXgWM`,
                          children: s($e, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `T1q56Frrk`,
                            isMixedBorderRadius: !1,
                            layoutId: `T1q56Frrk`,
                            loop: !0,
                            muted: !0,
                            objectFit: `contain`,
                            playing: !1,
                            poster: `../../assets/images/COivtL0GjK00DOklUaFQfYPaI.jpg`,
                            posterEnabled: !0,
                            srcFile: `https://framerusercontent.com/assets/95UcR5Ihl3uBTlIyXVZe9MtbVLA.webm`,
                            srcType: `URL`,
                            srcUrl: `../../assets/videos/main-4b0650.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(p.div, {
                      className: `framer-fue8fb`,
                      "data-framer-name": `WorkList`,
                      id: ve,
                      layout: F,
                      ref: L,
                      children: [
                        u(`div`, {
                          className: `framer-f7bjuf`,
                          "data-framer-name": `Filter`,
                          children: [
                            s(S, {
                              __fromCanvasComponent: !0,
                              children: s(l, {
                                children: u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `13px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  },
                                  children: [
                                    s(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                      },
                                      children: `*`,
                                    }),
                                    `selected works`,
                                  ],
                                }),
                              }),
                              className: `framer-13da5kp`,
                              fonts: [`FS;Outfit-medium`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            s(`div`, {
                              className: `framer-kgbszh`,
                              "data-framer-name": `Bottom Line`,
                            }),
                          ],
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `m9lVh9iu2` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `m9lVh9iu2` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `m9lVh9iu2` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-ohch6p-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `pHGNg9hXH`,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(I, {
                                    a4Op4GMGU: `Kinopolis · Operations & Automation`,
                                    d90GarC1x: !1,
                                    height: `100%`,
                                    id: `pHGNg9hXH`,
                                    K46KcvR9i: Q(
                                      {
                                        pixelHeight: 768,
                                        pixelWidth: 1376,
                                        src: `../../assets/images/kinopolis_hero_bear.jpg`,
                                        srcSet: `../../assets/images/kinopolis_hero_bear.jpg 512w,../../assets/images/kinopolis_hero_bear.jpg 1024w,../../assets/images/kinopolis_hero_bear.jpg 1376w`,
                                      },
                                      ``
                                    ),
                                    layoutId: `pHGNg9hXH`,
                                    LgdGA4U0Z: `Live-Saalüberwachung
Foyer- & Peak-Radar
Automatisierte Berichte
Cloudflare D1 & Vite`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: q(`eUYo2gsWO`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `Kinopolis Automation Suite`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        s(`div`, {
                          className: `framer-6ywb3j`,
                          "data-framer-name": `DividerLine`,
                          children: s(`div`, {
                            className: `framer-g2lcat`,
                            "data-framer-name": `Bottom Line`,
                          }),
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `f4PIrYHTh` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `f4PIrYHTh` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `f4PIrYHTh` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-1lkb6pq-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `igqb9duw6`,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(I, {
                                    a4Op4GMGU: `TU Darmstadt · Serious Game`,
                                    d90GarC1x: !1,
                                    height: `100%`,
                                    id: `igqb9duw6`,
                                    K46KcvR9i: Q(
                                      {
                                        pixelHeight: 1280,
                                        pixelWidth: 1920,
                                        src: `../../assets/images/projects/aom_brandboard.jpg`,
                                        srcSet: `../../assets/images/projects/aom_brandboard.jpg 512w,../../assets/images/projects/aom_brandboard.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1920w`,
                                      },
                                      ``
                                    ),
                                    layoutId: `igqb9duw6`,
                                    LgdGA4U0Z: `WebGL & Three.js
Serious Game Engine
Procedural Shaders
Psychological Tasks`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: q(`eUYo2gsWO`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `Architect of Mind`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        s(`div`, {
                          className: `framer-1wv8tgf`,
                          "data-framer-name": `DividerLine`,
                          children: s(`div`, {
                            className: `framer-7h3zgv`,
                            "data-framer-name": `Bottom Line`,
                          }),
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `KCyUwDA56` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `KCyUwDA56` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `KCyUwDA56` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-6e90v6-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `lftsi5QbG`,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(I, {
                                    a4Op4GMGU: `TU Darmstadt · Research`,
                                    d90GarC1x: !1,
                                    height: `100%`,
                                    id: `lftsi5QbG`,
                                    K46KcvR9i: Q(
                                      {
                                        pixelHeight: 1280,
                                        pixelWidth: 1920,
                                        src: `../../assets/images/projects/aom_brandboard.jpg`,
                                        srcSet: `../../assets/images/jKSWb8nhDHekUUhy7TU93bZUo-c9353d.jpg 512w,../../assets/images/jKSWb8nhDHekUUhy7TU93bZUo.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1920w`,
                                      },
                                      ``
                                    ),
                                    layoutId: `lftsi5QbG`,
                                    LgdGA4U0Z: `Multi-Agent Systems
Python & TypeScript
LLM Orchestration
Developer Tooling`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: q(`eUYo2gsWO`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `Autonomous Agent Workspace`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        s(`div`, {
                          className: `framer-128ds1h`,
                          "data-framer-name": `DividerLine`,
                          children: s(`div`, {
                            className: `framer-dgkqif`,
                            "data-framer-name": `Bottom Line`,
                          }),
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `HC6lAXg5r` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `HC6lAXg5r` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `HC6lAXg5r` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-1xowkg7-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `PDVkNJuih`,
                                rendersWithMotion: !0,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`dkfzYjcx_`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`NNrysK8nr`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(it, {
                                    a4Op4GMGU: `Creative Tech · Experiments`,
                                    Fb5Stv0oc: Q(
                                      {
                                        pixelHeight: 1080,
                                        pixelWidth: 1920,
                                        src: `../../assets/images/gRDjXOiaaSqzzE7GrjKrSfd2AE.jpg`,
                                        srcSet: `https://framerusercontent.com/images/gRDjXOiaaSqzzE7GrjKrSfd2AE.jpg?scale-down-to=512&width=1920&height=1080 512w,https://framerusercontent.com/images/gRDjXOiaaSqzzE7GrjKrSfd2AE.jpg?scale-down-to=1024&width=1920&height=1080 1024w,../../assets/images/gRDjXOiaaSqzzE7GrjKrSfd2AE.jpg 1920w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `PDVkNJuih`,
                                    layoutId: `PDVkNJuih`,
                                    LgdGA4U0Z: `GLSL Compute Shaders
Three.js & Canvas
Audio-Reactive Graphics
60 FPS WebGL`,
                                    m75mHruIi: !1,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    tkjUg1GHk: `../../assets/videos/main-edc37b.mp4`,
                                    variant: q(`vM0nzArsA`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `Interactive Design Lab`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        s(`div`, {
                          className: `framer-ukrfi0`,
                          "data-framer-name": `DividerLine`,
                          children: s(`div`, {
                            className: `framer-8k7lx`,
                            "data-framer-name": `Bottom Line`,
                          }),
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `m93indqJA` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `m93indqJA` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `m93indqJA` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-18c545p-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `nDuUT5XWL`,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(I, {
                                    a4Op4GMGU: `Cloudflare Edge & Microservices`,
                                    d90GarC1x: !1,
                                    height: `100%`,
                                    id: `nDuUT5XWL`,
                                    K46KcvR9i: Q(
                                      {
                                        pixelHeight: 726,
                                        pixelWidth: 1300,
                                        src: `../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4-ebeda9.jpg`,
                                        srcSet: `../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4-0cf2c4.jpg 512w,../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4.jpg 1024w,../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4-ebeda9.jpg 1300w`,
                                      },
                                      ``
                                    ),
                                    layoutId: `nDuUT5XWL`,
                                    LgdGA4U0Z: `WebGL & Three.js
Serious Game Engine
Procedural Shaders
Psychological Tasks`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: q(`eUYo2gsWO`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `Full-Stack Distributed Systems`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        s(`div`, {
                          className: `framer-1mx1axu`,
                          "data-framer-name": `DividerLine`,
                          children: s(`div`, {
                            className: `framer-itzj22`,
                            "data-framer-name": `Bottom Line`,
                          }),
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-1fnripr-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `gXB554tS4`,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`QHpQrO7Yv`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`C2qNZZEgm`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(I, {
                                    a4Op4GMGU: `Computer Graphics · TU Darmstadt`,
                                    d90GarC1x: !0,
                                    height: `100%`,
                                    id: `gXB554tS4`,
                                    K46KcvR9i: Q(
                                      {
                                        pixelHeight: 1080,
                                        pixelWidth: 1920,
                                        src: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg`,
                                        srcSet: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-f82408.jpg 512w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg.jpg 1024w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg 1920w`,
                                      },
                                      ``
                                    ),
                                    layoutId: `gXB554tS4`,
                                    LgdGA4U0Z: `Next.js & React
High-Frequency Trading
Stripe Checkout
Edge Architecture`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: q(`eUYo2gsWO`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `Real-Time 3D Rendering Engine`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        s(`div`, {
                          className: `framer-1e93uxk`,
                          "data-framer-name": `DividerLine`,
                          children: s(`div`, {
                            className: `framer-lnp4j6`,
                            "data-framer-name": `Bottom Line`,
                          }),
                        }),
                        s(P, {
                          links: [
                            { href: { webPageId: `BQfPzQxJd` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `BQfPzQxJd` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `BQfPzQxJd` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            s(A, {
                              height: 405,
                              width: `min(${v?.width || `100vw`}, 1500px)`,
                              children: s(D, {
                                className: `framer-usus9y-container`,
                                "data-framer-cursor": `1bsa85u`,
                                nodeId: `uH1U_BTN1`,
                                rendersWithMotion: !0,
                                scopeId: `vjUZoXgWM`,
                                children: s(E, {
                                  breakpoint: T,
                                  overrides: {
                                    cYTuptfoX: { variant: q(`dkfzYjcx_`), y4zHDIvQS: e[1] },
                                    VEtW6bOPL: { variant: q(`NNrysK8nr`), y4zHDIvQS: e[2] },
                                  },
                                  children: s(at, {
                                    a4Op4GMGU: `TU Darmstadt · Teaching & Leadership`,
                                    Fb5Stv0oc: Q(
                                      {
                                        pixelHeight: 1080,
                                        pixelWidth: 1920,
                                        src: `../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w.jpg`,
                                        srcSet: `../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w-c19144.jpg 512w,../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w-820dcf.jpg 1024w,../../assets/images/IF9MDlNLXKlApwkkWoou4mQMo1w.jpg 1920w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `uH1U_BTN1`,
                                    layoutId: `uH1U_BTN1`,
                                    LgdGA4U0Z: `Art Direction
Brand Systems
2D & 3D Animation`,
                                    m75mHruIi: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    tkjUg1GHk: `../../assets/videos/main-3af80a.mp4`,
                                    variant: q(`vM0nzArsA`),
                                    width: `100%`,
                                    y4zHDIvQS: e[0],
                                    Zsl7YX1CQ: `TPSE Agile Org Framework`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                    s(p.div, {
                      className: `framer-j433zn`,
                      "data-framer-name": `Let'sTalk`,
                      layout: F,
                      children: s(`div`, {
                        className: `framer-1wdw66n`,
                        children: s(E, {
                          breakpoint: T,
                          overrides: {
                            VEtW6bOPL: {
                              children: u(l, {
                                children: [
                                  s(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `26.650779469823977px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: `got a project in mind? `,
                                  }),
                                  u(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `26.650779469823977px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: [
                                      `let’s talk `,
                                      s(w, {
                                        href: `mailto:hello@artjom.dev`,
                                        motionChild: !0,
                                        nodeId: `zkoV9uw6e`,
                                        openInNewTab: !0,
                                        preserveParams: !1,
                                        relValues: [],
                                        scopeId: `vjUZoXgWM`,
                                        smoothScroll: !1,
                                        children: s(p.a, {
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
                          children: s(S, {
                            __fromCanvasComponent: !0,
                            children: u(l, {
                              children: [
                                s(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `50px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  },
                                  children: `got a project in mind? `,
                                }),
                                u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `50px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  },
                                  children: [
                                    `let’s talk `,
                                    s(w, {
                                      href: `mailto:hello@artjom.dev`,
                                      motionChild: !0,
                                      nodeId: `zkoV9uw6e`,
                                      openInNewTab: !0,
                                      preserveParams: !1,
                                      relValues: [],
                                      scopeId: `vjUZoXgWM`,
                                      smoothScroll: !1,
                                      children: s(p.a, {
                                        className: `framer-styles-preset-aoqdeg`,
                                        "data-styles-preset": `rf7eHa4dX`,
                                        children: `hello@artjom.dev`,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            className: `framer-1e9ehe2`,
                            fonts: [`FS;Outfit-bold`],
                            verticalAlignment: `top`,
                            viewBox: `0 0 724 100`,
                            viewBoxScale: 0.8,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    }),
                    s(p.div, {
                      className: `framer-1ojb3u5`,
                      "data-framer-name": `IndexFooter`,
                      id: z,
                      layout: F,
                      ref: B,
                      children: s(A, {
                        height: 360,
                        width: `calc(${v?.width || `100vw`} - 48px)`,
                        children: s(D, {
                          className: `framer-1ur063f-container`,
                          nodeId: `b_FxkWmUO`,
                          rendersWithMotion: !0,
                          scopeId: `vjUZoXgWM`,
                          children: s(E, {
                            breakpoint: T,
                            overrides: {
                              cYTuptfoX: {
                                __framer__targets: [{ ref: B, target: `dgixlhc1H` }],
                                variant: q(`H6h6fviq3`),
                              },
                              VEtW6bOPL: {
                                __framer__targets: [{ ref: B, target: `nOKgs1SEl` }],
                                variant: q(`GVYGZcCCV`),
                              },
                            },
                            children: s(st, {
                              __framer__animateOnce: !1,
                              __framer__targets: [{ ref: B, target: `XolEYst5Z` }],
                              __framer__threshold: 0,
                              __framer__variantAppearEffectEnabled: !0,
                              height: `100%`,
                              id: `b_FxkWmUO`,
                              layoutId: `b_FxkWmUO`,
                              style: { width: `100%` },
                              variant: q(`ZRUlqdzB5`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-4fn1s.framer-9gjgq7, .framer-4fn1s .framer-9gjgq7 { display: block; }`,
        `.framer-4fn1s.framer-r2fef4 { --selection-background-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01) /* {"name":"Orange"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-4fn1s .framer-14o68wz-container { flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,
        `.framer-4fn1s .framer-1i9inng-container { bottom: 14px; flex: none; height: auto; left: 50%; position: fixed; transform: translateX(-50%); width: auto; z-index: 4; }`,
        `.framer-4fn1s.framer-19m040o { inset: 0px; position: fixed; user-select: none; z-index: 5; }`,
        `.framer-4fn1s.framer-1xsr6bn { -webkit-backdrop-filter: blur(20px); align-content: center; align-items: center; backdrop-filter: blur(20px); background-color: rgba(255, 255, 255, 0.2); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: fixed; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 5; }`,
        `.framer-4fn1s .framer-12s8260-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: 70vh; position: relative; width: var(--framer-aspect-ratio-supported, 356px); will-change: var(--framer-will-change-effect-override, transform); z-index: 6; }`,
        `.framer-4fn1s .framer-nqrupm { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 56px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-4fn1s .framer-1p6p9f4 { --1ww558a: 3; --4rxgx6: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 24px; z-index: 1; }`,
        `.framer-4fn1s .framer-6t8mhv-container { bottom: 0px; flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; z-index: 3; }`,
        `.framer-4fn1s .framer-ry5mb-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-4fn1s .framer-1fwumxj { align-content: center; align-items: center; aspect-ratio: 2.4 / 1; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 83px); justify-content: center; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-lzkkxu-container { aspect-ratio: 1.8848167539267016 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 106px); pointer-events: none; position: relative; width: 80%; }`,
        `.framer-4fn1s .framer-fue8fb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-f7bjuf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 100px 5px 100px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-13da5kp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 333px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4fn1s .framer-kgbszh, .framer-4fn1s .framer-15r3my7, .framer-4fn1s .framer-d0tgp6, .framer-4fn1s .framer-7h3zgv, .framer-4fn1s .framer-dgkqif, .framer-4fn1s .framer-8k7lx, .framer-4fn1s .framer-itzj22, .framer-4fn1s .framer-lnp4j6 { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, #ababab); flex: none; height: 1px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-ohch6p-container, .framer-4fn1s .framer-660n66-container, .framer-4fn1s .framer-wfj2pz-container, .framer-4fn1s .framer-1lkb6pq-container, .framer-4fn1s .framer-6e90v6-container, .framer-4fn1s .framer-1xowkg7-container, .framer-4fn1s .framer-18c545p-container, .framer-4fn1s .framer-1fnripr-container, .framer-4fn1s .framer-usus9y-container { flex: none; height: auto; max-width: 1500px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-6ywb3j, .framer-4fn1s .framer-s7kfc1, .framer-4fn1s .framer-1n89cym, .framer-4fn1s .framer-1wv8tgf, .framer-4fn1s .framer-128ds1h, .framer-4fn1s .framer-ukrfi0, .framer-4fn1s .framer-1mx1axu, .framer-4fn1s .framer-1e93uxk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 20px 100px 5px 100px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-g2lcat { background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, #ababab); flex: none; height: 1px; overflow: visible; position: relative; width: 100%; z-index: 1; }`,
        `.framer-4fn1s .framer-j433zn { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-1wdw66n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1500px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 20px 5px 20px; position: relative; width: 1px; }`,
        `.framer-4fn1s .framer-1e9ehe2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }`,
        `.framer-4fn1s .framer-1ojb3u5 { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 24px 100px 24px; position: relative; width: 100%; }`,
        `.framer-4fn1s .framer-1ur063f-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Ae,
        `.framer-4fn1s[data-selection="true"] * ::selection, .framer-4fn1s [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-4fn1s.framer-r2fef4 { width: 810px; } .framer-4fn1s .framer-12s8260-container { height: var(--framer-aspect-ratio-supported, 113px); width: 90%; } .framer-4fn1s .framer-f7bjuf { padding: 0px 50px 5px 50px; } .framer-4fn1s .framer-6ywb3j, .framer-4fn1s .framer-s7kfc1, .framer-4fn1s .framer-1n89cym, .framer-4fn1s .framer-1wv8tgf, .framer-4fn1s .framer-128ds1h, .framer-4fn1s .framer-ukrfi0, .framer-4fn1s .framer-1mx1axu, .framer-4fn1s .framer-1e93uxk { padding: 20px 50px 5px 50px; }}`,
        `@media (max-width: 809.98px) { .framer-4fn1s.framer-r2fef4 { width: 390px; } .framer-4fn1s .framer-14o68wz-container, .framer-4fn1s .framer-6t8mhv-container { height: 50px; } .framer-4fn1s .framer-1i9inng-container { bottom: 8px; width: 50px; } .framer-4fn1s .framer-12s8260-container { height: var(--framer-aspect-ratio-supported, 113px); width: 90%; } .framer-4fn1s .framer-1fwumxj { aspect-ratio: 1.3 / 1; height: var(--framer-aspect-ratio-supported, 154px); padding: 25px 0px 0px 0px; } .framer-4fn1s .framer-lzkkxu-container { width: 90%; } .framer-4fn1s .framer-fue8fb { gap: 0px; } .framer-4fn1s .framer-f7bjuf { padding: 0px 16px 5px 16px; } .framer-4fn1s .framer-6ywb3j, .framer-4fn1s .framer-s7kfc1, .framer-4fn1s .framer-1n89cym, .framer-4fn1s .framer-1wv8tgf, .framer-4fn1s .framer-128ds1h, .framer-4fn1s .framer-ukrfi0, .framer-4fn1s .framer-1mx1axu, .framer-4fn1s .framer-1e93uxk { padding: 20px 16px 5px 16px; } .framer-4fn1s .framer-1wdw66n { padding: 20px 20px 5px 20px; }}`,
      ],
      `framer-4fn1s`
    )),
    (At = $),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 5364, width: 1200 }),
    M(
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
              url: `../../assets/misc/3JX43FCBGINLH25MK4NSVCHCDXUSMHUE.woff2`,
              weight: `500`,
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
        ...qe,
        ...Je,
        ...Ye,
        ...Xe,
        ...Ze,
        ...Qe,
        ...tt,
        ...nt,
        ...ot,
        ...ct,
        ...F(je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          v(V, {}, t),
          v(K, {}, t),
          v(H, {}, t),
          v(I, {}, t),
          v(z, {}, t),
          v(be, {}, t),
        ])
      ),
    }),
    (jt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramervjUZoXgWM`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `5364`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cYTuptfoX":{"layout":["fixed","auto"]},"VEtW6bOPL":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `{"Fd5knT876":{"pattern":":Fd5knT876","name":"top"},"S910wOOkv":{"pattern":":S910wOOkv","name":"selectedwork"},"TM5EFM2EV":{"pattern":":TM5EFM2EV","name":"indexfooter"}}`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { jt as __FramerMetadata__, At as default, ut as queryParamNames };
//# sourceMappingURL=WoyxPdQt3duHKHWc40flJrtpvfW5BDMeySG08vpi-I8.Dptaj8ik.mjs.map
