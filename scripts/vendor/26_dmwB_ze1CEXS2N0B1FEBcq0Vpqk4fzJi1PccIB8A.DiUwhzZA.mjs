import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  a,
  c as o,
  g as ee,
  i as s,
  k as te,
  l as c,
  o as ne,
  s as l,
  v as re,
} from "./react.D20wc1Tc.mjs";
import { S as u, a as ie, n as d, r as ae, t as f } from "./motion.CdKWDduH.mjs";
import {
  B as p,
  C as m,
  Dt as h,
  H as oe,
  M as g,
  O as se,
  P as _,
  T as v,
  Tt as ce,
  _t as le,
  a as y,
  b,
  ct as ue,
  dt as de,
  f as fe,
  ft as pe,
  gt as me,
  i as x,
  lt as he,
  mt as S,
  p as C,
  q as w,
  u as T,
  w as ge,
  xt as _e,
  yt as E,
} from "./framer.DLo72eib.mjs";
import {
  A as ve,
  D as ye,
  M as D,
  O as be,
  _ as xe,
  b as Se,
  d as O,
  f as k,
  g as Ce,
  h as A,
  j as we,
  k as Te,
  l as j,
  m as Ee,
  n as M,
  p as N,
  r as De,
  u as P,
  v as Oe,
  y as F,
} from "./shared-lib.BME5ZRRK.mjs";
var I, L, R, z, B, V, H, ke, Ae, je, Me, U, W, G, K, q, J, Y, X, Z, Ne, Q, Pe, Fe, $, Ie;
e(() => {
  (ne(),
    w(),
    f(),
    n(),
    a(),
    D(),
    ve(),
    be(),
    Oe(),
    Ce(),
    Ee(),
    k(),
    Se(),
    P(),
    M(),
    (I = p(j)),
    (L = p(F)),
    (R = p(A)),
    (z = p(O)),
    (B = h(y)),
    (V = p(N)),
    (H = {
      AzazzSOR8: `(max-width: 809.98px)`,
      ld3sWVu_v: `(min-width: 1440px)`,
      R8YkmBNIv: `(min-width: 810px) and (max-width: 1439.98px)`,
    }),
    (ke = []),
    (Ae = `framer-n5Zpv`),
    (je = {
      AzazzSOR8: `framer-v-rt3n0v`,
      ld3sWVu_v: `framer-v-8wz472`,
      R8YkmBNIv: `framer-v-1vnxj44`,
    }),
    (Me = (e, t, n) => (e && t ? `position` : n)),
    (U = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (W = (e) => e.preventDefault()),
    (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (K = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (q = { cursor: `grabbing` }),
    (J = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (Y = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (X = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Z = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = E({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Ne = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Q = { Desktop: `ld3sWVu_v`, Phone: `AzazzSOR8`, Tablet: `R8YkmBNIv` }),
    (Pe = ({ value: e }) =>
      S()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Fe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `ld3sWVu_v`,
    })),
    ($ = ce(
      ee(function (e, n) {
        let a = r(null),
          ee = n ?? a,
          ne = re(),
          { activeLocale: f, setLocale: p } = me(),
          h = he(),
          { style: se, className: _, layoutId: ce, variant: S, ...w } = Fe(e);
        le(t(() => De({}, f), [f]));
        let [E, ve] = pe(S, H, !1),
          { activeVariantCallback: D, delay: be } = ue(void 0),
          xe = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          Se = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          k = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          Ce = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          Ee = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          M = ({ overlay: e }) =>
            D(async (...t) => {
              e.hide();
            }),
          P = g(Ae),
          Oe = te(T)?.isLayoutTemplate,
          I = !!te(ie)?.transition?.layout,
          L = Me(Oe, I);
        return (
          _e(),
          de({}),
          o(T.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Q,
              primaryVariantId: `ld3sWVu_v`,
              variantClassNames: je,
            },
            children: c(ae, {
              id: ce ?? ne,
              children: [
                o(Pe, { value: `html body { background: none; }` }),
                c(fe, {
                  ...w,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 960,
                    intrinsicWidth: 1440,
                    loading: oe(h?.y || 0),
                    pixelHeight: 960,
                    pixelWidth: 1440,
                    sizes: h?.width || `100vw`,
                    src: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg`,
                    srcSet: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-130463.jpg 512w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-21f64d.jpg 1024w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg 1440w`,
                  },
                  className: g(P, `framer-8wz472`, _),
                  ref: ee,
                  style: { ...se },
                  children: [
                    c(u.div, {
                      className: `framer-r96p0p`,
                      layout: L,
                      children: [
                        o(x, {
                          height: 40,
                          width: h?.width || `100vw`,
                          y: (h?.y || 0) + 0 + 0 + 0 + 0,
                          children: o(y, {
                            className: `framer-esl021-container`,
                            nodeId: `AOyt6UI9I`,
                            scopeId: `x_ez6ywFs`,
                            children: o(b, {
                              breakpoint: E,
                              overrides: { AzazzSOR8: { variant: U(`NoRjRtEUK`) } },
                              children: o(j, {
                                FXtMXmAJy: Te,
                                height: `100%`,
                                id: `AOyt6UI9I`,
                                In2G2vAnT: ye,
                                layoutId: `AOyt6UI9I`,
                                r6axoAGvo: we,
                                style: { width: `100%` },
                                variant: U(`vM8w75LM3`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-ynh3et`,
                          "data-framer-name": `404-Heading`,
                          children: [
                            o(b, {
                              breakpoint: E,
                              overrides: {
                                AzazzSOR8: {
                                  children: o(i, {
                                    children: o(`h1`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7TW9uYSBTYW5zLTUwMA==`,
                                        "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `80px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.06em`,
                                        "--framer-line-height": `90%`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `uppercase`,
                                      },
                                      children: `404`,
                                    }),
                                  }),
                                },
                              },
                              children: o(v, {
                                __fromCanvasComponent: !0,
                                children: o(i, {
                                  children: o(`h1`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7TW9uYSBTYW5zLTUwMA==`,
                                      "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `132px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.06em`,
                                      "--framer-line-height": `90%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `uppercase`,
                                    },
                                    children: `404`,
                                  }),
                                }),
                                className: `framer-qykkaf`,
                                fonts: [`GF;Mona Sans-500`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            c(`div`, {
                              className: `framer-1yt179a`,
                              children: [
                                c(`div`, {
                                  className: `framer-ks13be`,
                                  children: [
                                    o(b, {
                                      breakpoint: E,
                                      overrides: {
                                        AzazzSOR8: {
                                          children: o(i, {
                                            children: o(`h1`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7TW9uYSBTYW5zLTUwMA==`,
                                                "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `24px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-0.06em`,
                                                "--framer-line-height": `110%`,
                                                "--framer-text-alignment": `right`,
                                                "--framer-text-color": `var(--token-594eae76-8f12-4e5a-96ae-794dfa4288d2, rgb(240, 240, 240))`,
                                                "--framer-text-transform": `capitalize`,
                                              },
                                              children: `Page Not Found`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(v, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`h1`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7TW9uYSBTYW5zLTUwMA==`,
                                              "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                              "--framer-font-size": `32px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.06em`,
                                              "--framer-line-height": `110%`,
                                              "--framer-text-alignment": `right`,
                                              "--framer-text-color": `var(--token-594eae76-8f12-4e5a-96ae-794dfa4288d2, rgb(240, 240, 240))`,
                                              "--framer-text-transform": `capitalize`,
                                            },
                                            children: `Page Not Found`,
                                          }),
                                        }),
                                        className: `framer-829puz`,
                                        fonts: [`GF;Mona Sans-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    o(b, {
                                      breakpoint: E,
                                      overrides: {
                                        AzazzSOR8: {
                                          children: o(i, {
                                            children: o(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7TW9uYSBTYW5zLTUwMA==`,
                                                "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-0.02em`,
                                                "--framer-line-height": `110%`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `rgba(240, 240, 240, 0.8)`,
                                              },
                                              children: `The page you’re looking for seems to have gone missing. Let’s get you back on track.`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(v, {
                                        __fromCanvasComponent: !0,
                                        children: o(i, {
                                          children: o(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7TW9uYSBTYW5zLTUwMA==`,
                                              "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `110%`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgba(240, 240, 240, 0.8)`,
                                            },
                                            children: `The page you’re looking for seems to have gone missing. Let’s get you back on track.`,
                                          }),
                                        }),
                                        className: `framer-1xvszlj`,
                                        fonts: [`GF;Mona Sans-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                o(ge, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(b, {
                                      breakpoint: E,
                                      overrides: {
                                        AzazzSOR8: {
                                          width: `208px`,
                                          y: (h?.y || 0) + 0 + 0 + 0 + 40 + 0 + 383.8 + 0 + 116.4,
                                        },
                                      },
                                      children: o(x, {
                                        height: 40,
                                        width: `240px`,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 40 + 0 + 388.8 + 0 + 161.2,
                                        children: o(y, {
                                          className: `framer-1xwbbse-container`,
                                          nodeId: `xcnr3Q53w`,
                                          scopeId: `x_ez6ywFs`,
                                          children: o(b, {
                                            breakpoint: E,
                                            overrides: {
                                              AzazzSOR8: { VKalbHVCl: e[2] },
                                              R8YkmBNIv: { VKalbHVCl: e[1] },
                                            },
                                            children: o(F, {
                                              height: `100%`,
                                              HX1JlvIWT: `Back to Home`,
                                              id: `xcnr3Q53w`,
                                              layoutId: `xcnr3Q53w`,
                                              mX0l1YcM1: `rgb(255, 255, 255)`,
                                              style: { height: `100%`, width: `100%` },
                                              variant: U(`cMGzIeCJI`),
                                              VKalbHVCl: e[0],
                                              width: `100%`,
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
                        o(`div`, {
                          className: `framer-11h1y41`,
                          "data-framer-name": `DockNav`,
                          children: o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(Z, {
                                dismissWithEsc: !0,
                                children: (t) =>
                                  o(Z, {
                                    dismissWithEsc: !0,
                                    children: (n) =>
                                      o(Z, {
                                        dismissWithEsc: !0,
                                        children: (r) =>
                                          o(Z, {
                                            dismissWithEsc: !0,
                                            children: (i) =>
                                              o(l, {
                                                children: o(x, {
                                                  height: 76,
                                                  y: (h?.y || 0) + 0 + 0 + 0 + 876 + 24 + 0,
                                                  children: c(y, {
                                                    className: `framer-7rkzri-container`,
                                                    id: `7rkzri`,
                                                    nodeId: `J8rvxPPEU`,
                                                    scopeId: `x_ez6ywFs`,
                                                    children: [
                                                      o(b, {
                                                        breakpoint: E,
                                                        overrides: {
                                                          AzazzSOR8: { variant: U(`VA0wD7VMq`) },
                                                        },
                                                        children: o(A, {
                                                          height: `100%`,
                                                          id: `J8rvxPPEU`,
                                                          layoutId: `J8rvxPPEU`,
                                                          M_nVROFeh: xe({ overlay: i }),
                                                          mpocvNeVh: Ee({ overlay: e }),
                                                          ngqPmxnQO: Ce({ overlay: t }),
                                                          nQDhkiYgL: k({ overlay: n }),
                                                          SSFbg9Im0: Se({ overlay: r }),
                                                          variant: U(`DdcJUIQiX`),
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      o(d, {
                                                        children:
                                                          i.visible &&
                                                          o(l, {
                                                            children: s(
                                                              o(C, {
                                                                triggerId: `7rkzri`,
                                                                children: c(m, {
                                                                  children: [
                                                                    o(
                                                                      u.div,
                                                                      {
                                                                        animate: {
                                                                          opacity: 1,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: g(
                                                                          P,
                                                                          `framer-9hq06m`
                                                                        ),
                                                                        "data-framer-name": `About-Overlay`,
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => i.hide(),
                                                                      },
                                                                      `TU0F85V6o`
                                                                    ),
                                                                    o(x, {
                                                                      width: `55vw`,
                                                                      children: o(B, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: J,
                                                                        className: g(
                                                                          P,
                                                                          `framer-10tdxvb-container`
                                                                        ),
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        drag: !0,
                                                                        dragMomentum: !1,
                                                                        exit: K,
                                                                        inComponentSlot: !0,
                                                                        initial: Y,
                                                                        nodeId: `EOO6K3ZNg`,
                                                                        onMouseDown: W,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `x_ez6ywFs`,
                                                                        whileTap: q,
                                                                        children: o(O, {
                                                                          height: `100%`,
                                                                          id: `EOO6K3ZNg`,
                                                                          layoutId: `EOO6K3ZNg`,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          variant: U(`oCi1bB4zu`),
                                                                          width: `100%`,
                                                                          XrlWiIKIe: M({
                                                                            overlay: i,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                              }),
                                                              X()
                                                            ),
                                                          }),
                                                      }),
                                                      o(d, {
                                                        children:
                                                          r.visible &&
                                                          o(l, {
                                                            children: s(
                                                              o(C, {
                                                                triggerId: `7rkzri`,
                                                                children: c(m, {
                                                                  children: [
                                                                    o(
                                                                      u.div,
                                                                      {
                                                                        animate: {
                                                                          opacity: 1,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: g(
                                                                          P,
                                                                          `framer-18arnow`
                                                                        ),
                                                                        "data-framer-name": `Project-Overlay`,
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => r.hide(),
                                                                      },
                                                                      `Pv4MRN7sp`
                                                                    ),
                                                                    o(x, {
                                                                      width: `55vw`,
                                                                      children: o(B, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: J,
                                                                        className: g(
                                                                          P,
                                                                          `framer-17iw6h2-container`
                                                                        ),
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        drag: !0,
                                                                        dragMomentum: !1,
                                                                        exit: K,
                                                                        inComponentSlot: !0,
                                                                        initial: Y,
                                                                        nodeId: `bt4FViLDJ`,
                                                                        onMouseDown: W,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `x_ez6ywFs`,
                                                                        whileTap: q,
                                                                        children: o(O, {
                                                                          height: `100%`,
                                                                          id: `bt4FViLDJ`,
                                                                          layoutId: `bt4FViLDJ`,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          variant: U(`erhMUPQJh`),
                                                                          width: `100%`,
                                                                          XrlWiIKIe: M({
                                                                            overlay: r,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                              }),
                                                              X()
                                                            ),
                                                          }),
                                                      }),
                                                      o(d, {
                                                        children:
                                                          n.visible &&
                                                          o(l, {
                                                            children: s(
                                                              o(C, {
                                                                triggerId: `7rkzri`,
                                                                children: c(m, {
                                                                  children: [
                                                                    o(
                                                                      u.div,
                                                                      {
                                                                        animate: {
                                                                          opacity: 1,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: g(
                                                                          P,
                                                                          `framer-1p4rhfa`
                                                                        ),
                                                                        "data-framer-name": `reel-overlay`,
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => n.hide(),
                                                                      },
                                                                      `kIqgQl9PN`
                                                                    ),
                                                                    o(x, {
                                                                      width: `55vw`,
                                                                      children: o(B, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: J,
                                                                        className: g(
                                                                          P,
                                                                          `framer-1bpza52-container`
                                                                        ),
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        drag: !0,
                                                                        dragMomentum: !1,
                                                                        exit: K,
                                                                        inComponentSlot: !0,
                                                                        initial: Y,
                                                                        nodeId: `qisMcZbpt`,
                                                                        onMouseDown: W,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `x_ez6ywFs`,
                                                                        whileTap: q,
                                                                        children: o(O, {
                                                                          height: `100%`,
                                                                          id: `qisMcZbpt`,
                                                                          layoutId: `qisMcZbpt`,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          variant: U(`OLS50c4bW`),
                                                                          width: `100%`,
                                                                          XrlWiIKIe: M({
                                                                            overlay: n,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                              }),
                                                              X()
                                                            ),
                                                          }),
                                                      }),
                                                      o(d, {
                                                        children:
                                                          t.visible &&
                                                          o(l, {
                                                            children: s(
                                                              o(C, {
                                                                triggerId: `7rkzri`,
                                                                children: c(m, {
                                                                  children: [
                                                                    o(
                                                                      u.div,
                                                                      {
                                                                        animate: {
                                                                          opacity: 1,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: g(
                                                                          P,
                                                                          `framer-1vrdyuh`
                                                                        ),
                                                                        "data-framer-name": `Contact-Overlay`,
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => t.hide(),
                                                                      },
                                                                      `z3Tsy09rt`
                                                                    ),
                                                                    o(x, {
                                                                      width: `50vw`,
                                                                      children: o(y, {
                                                                        animate: J,
                                                                        className: g(
                                                                          P,
                                                                          `framer-130t6om-container`
                                                                        ),
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        exit: K,
                                                                        inComponentSlot: !0,
                                                                        initial: Y,
                                                                        nodeId: `uvMs14I55`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `x_ez6ywFs`,
                                                                        children: o(O, {
                                                                          height: `100%`,
                                                                          id: `uvMs14I55`,
                                                                          layoutId: `uvMs14I55`,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          variant: U(`aiLuop0Fp`),
                                                                          width: `100%`,
                                                                          XrlWiIKIe: M({
                                                                            overlay: t,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                              }),
                                                              X()
                                                            ),
                                                          }),
                                                      }),
                                                      o(d, {
                                                        children:
                                                          e.visible &&
                                                          o(l, {
                                                            children: s(
                                                              o(C, {
                                                                triggerId: `7rkzri`,
                                                                children: c(m, {
                                                                  children: [
                                                                    o(
                                                                      u.div,
                                                                      {
                                                                        animate: {
                                                                          opacity: 1,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: g(
                                                                          P,
                                                                          `framer-d7z48p`
                                                                        ),
                                                                        "data-framer-name": `Gallery-Overlay`,
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `XenDuAz7f`
                                                                    ),
                                                                    o(x, {
                                                                      width: `55vw`,
                                                                      children: o(B, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: J,
                                                                        className: g(
                                                                          P,
                                                                          `framer-1dim8vw-container`
                                                                        ),
                                                                        "data-framer-portal-id": `7rkzri`,
                                                                        drag: !0,
                                                                        dragMomentum: !1,
                                                                        exit: K,
                                                                        inComponentSlot: !0,
                                                                        initial: Y,
                                                                        nodeId: `ewcQKrDoO`,
                                                                        onMouseDown: W,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `x_ez6ywFs`,
                                                                        whileTap: q,
                                                                        children: o(O, {
                                                                          height: `100%`,
                                                                          id: `ewcQKrDoO`,
                                                                          layoutId: `ewcQKrDoO`,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          variant: U(`vWfdkeKCq`),
                                                                          width: `100%`,
                                                                          XrlWiIKIe: M({
                                                                            overlay: e,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                              }),
                                                              X()
                                                            ),
                                                          }),
                                                      }),
                                                    ],
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
                    o(u.div, {
                      className: `framer-16jz9n3`,
                      "data-framer-name": `Overlay`,
                      layout: L,
                    }),
                    o(u.div, {
                      className: `framer-1m1vjm0`,
                      "data-framer-name": `Pre-Loader`,
                      layout: L,
                      children: o(b, {
                        breakpoint: E,
                        overrides: { R8YkmBNIv: { width: `100vw` } },
                        children: o(x, {
                          height: 1e3,
                          width: `102vw`,
                          y: 0,
                          children: o(y, {
                            className: `framer-17xkn6r-container`,
                            nodeId: `F2autDBjf`,
                            scopeId: `x_ez6ywFs`,
                            children: o(b, {
                              breakpoint: E,
                              overrides: { AzazzSOR8: { URqBiiyf0: 56 } },
                              children: o(N, {
                                AR4P0Spr8: {
                                  delay: 0,
                                  duration: 3,
                                  ease: [0.12, 0.23, 0.5, 1],
                                  type: `tween`,
                                },
                                height: `100%`,
                                id: `F2autDBjf`,
                                IeAOvqJJC: Ne(
                                  {
                                    pixelHeight: 960,
                                    pixelWidth: 1440,
                                    src: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg`,
                                    srcSet: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-130463.jpg 512w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-21f64d.jpg 1024w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg 1440w`,
                                  },
                                  ``
                                ),
                                layoutId: `F2autDBjf`,
                                style: { height: `100%`, width: `100%` },
                                URqBiiyf0: 80,
                                variant: U(`fgxFbObTD`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-n5Zpv.framer-1xi6eg1, .framer-n5Zpv .framer-1xi6eg1 { display: block; }`,
        `.framer-n5Zpv.framer-8wz472 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-n5Zpv .framer-r96p0p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-n5Zpv .framer-esl021-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-n5Zpv .framer-ynh3et { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-n5Zpv .framer-qykkaf, .framer-n5Zpv .framer-829puz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-n5Zpv .framer-1yt179a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 270px; }`,
        `.framer-n5Zpv .framer-ks13be { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-n5Zpv .framer-1xvszlj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-n5Zpv .framer-1xwbbse-container { flex: none; height: 40px; position: relative; width: 240px; }`,
        `.framer-n5Zpv .framer-11h1y41 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-n5Zpv .framer-7rkzri-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-n5Zpv.framer-9hq06m, .framer-n5Zpv.framer-18arnow, .framer-n5Zpv.framer-1vrdyuh { inset: 0px; position: fixed; user-select: none; z-index: 0; }`,
        `.framer-n5Zpv.framer-10tdxvb-container { cursor: grab; flex: none; height: 70%; left: 177px; position: fixed; top: calc(47.50000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-n5Zpv.framer-17iw6h2-container { cursor: grab; flex: none; height: 70%; left: calc(50.00000000000002% - 55.00000000000001% / 2); position: fixed; top: calc(50.00000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-n5Zpv.framer-1p4rhfa, .framer-n5Zpv.framer-d7z48p { inset: 0px; position: fixed; user-select: none; }`,
        `.framer-n5Zpv.framer-1bpza52-container { cursor: grab; flex: none; height: 70%; left: 100px; position: fixed; top: calc(48.25000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
        `.framer-n5Zpv.framer-130t6om-container { cursor: default; flex: none; height: 70%; left: calc(48.64285714285717% - 50% / 2); position: fixed; top: calc(48.12500000000002% - 70% / 2); width: 50%; will-change: var(--framer-will-change-effect-override, transform); z-index: 6; }`,
        `.framer-n5Zpv.framer-1dim8vw-container { cursor: grab; flex: none; height: 70%; left: calc(48.64285714285717% - 55.00000000000001% / 2); position: fixed; top: calc(48.12500000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-n5Zpv .framer-16jz9n3 { background-color: rgba(0, 0, 0, 0.46); flex: none; height: 101%; left: calc(50.00000000000002% - 102.70833333333333% / 2); opacity: 0.76; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 101% / 2); width: 103%; z-index: 1; }`,
        `.framer-n5Zpv .framer-1m1vjm0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - 102% / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: fixed; top: 0px; width: 102%; z-index: 10; }`,
        `.framer-n5Zpv .framer-17xkn6r-container { flex: none; height: 100%; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-n5Zpv.framer-8wz472 { width: 810px; } .framer-n5Zpv .framer-1m1vjm0 { left: calc(50.00000000000002% - 100% / 2); width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-n5Zpv.framer-8wz472 { width: 390px; } .framer-n5Zpv .framer-ynh3et { gap: 16px; } .framer-n5Zpv .framer-1yt179a { gap: 16px; width: 260px; } .framer-n5Zpv .framer-ks13be { gap: 8px; } .framer-n5Zpv .framer-1xwbbse-container { width: 80%; }}`,
      ],
      `framer-n5Zpv`
    )),
    ($.displayName = `404`),
    ($.defaultProps = { height: 800, width: 1440 }),
    se(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Mona Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Mona Sans`,
              url: `../../assets/fonts/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyDPA99Y41P6zHtY.woff2`,
              weight: `500`,
            },
          ],
        },
        ...I,
        ...L,
        ...R,
        ...z,
        ...V,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          _(j, {}, t),
          _(F, {}, t),
          _(A, {}, t),
          _(O, {}, t),
          _(xe, {}, t),
          _(N, {}, t),
        ])
      ),
    }),
    (Ie = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framerx_ez6ywFs`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"R8YkmBNIv":{"layout":["fixed","auto"]},"AzazzSOR8":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1440`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `800`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ie as __FramerMetadata__, $ as default, ke as queryParamNames };
//# sourceMappingURL=26_dmwB_ze1CEXS2N0B1FEBcq0Vpqk4fzJi1PccIB8A.DiUwhzZA.mjs.map
