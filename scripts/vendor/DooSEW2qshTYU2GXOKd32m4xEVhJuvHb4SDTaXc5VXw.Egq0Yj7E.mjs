import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  D as t,
  O as n,
  S as r,
  T as i,
  _ as ee,
  c as a,
  h as o,
  j as s,
  l as c,
  o as l,
} from "./react.Bb_yyrg0.mjs";
import { T as u, a as te, r as ne, t as re } from "./motion.Dq3vMtKA.mjs";
import {
  A as d,
  B as f,
  G as p,
  M as m,
  R as h,
  _t as g,
  a as _,
  at as ie,
  b as v,
  bt as y,
  h as b,
  it as ae,
  lt as oe,
  mt as se,
  n as x,
  nt as ce,
  pt as S,
  s as C,
  st as w,
  t as T,
  ut as le,
  vt as E,
  w as D,
  wt as O,
  y as k,
  yt as ue,
} from "./framer.cs1Z8Vda.mjs";
import {
  c as A,
  d as j,
  f as M,
  i as N,
  m as P,
  n as F,
  p as I,
  r as L,
  s as R,
  t as z,
} from "./yk6i18qEx.CnQf8P0b.mjs";
import { n as de, t as fe } from "./x8rD2lyjy.BpUu5ST3.mjs";
import { n as B, t as pe } from "./p3e4cIzHe.DD6X2pHr.mjs";
import { a as me, i as V, n as he, r as ge, t as _e } from "./AutoResize.Dw7s4QWx.mjs";
import { n as ve, r as ye } from "./KCyUwDA56.DHXNgTiM.mjs";
var be, H, U, W, G, K, q, J, Y, xe, Se, Ce, X, we, Te, Z, Ee, Q, De, Oe, ke, Ae, $, je, Me;
e(() => {
  (l(),
    p(),
    re(),
    r(),
    P(),
    M(),
    ge(),
    A(),
    pe(),
    L(),
    fe(),
    z(),
    _e(),
    ve(),
    (be = h(F)),
    (H = h(R)),
    (U = h(I)),
    (W = ue(u.div)),
    (G = h(V)),
    (K = y(E(V, { nodeId: `fX_vGMoa5`, override: he, scopeId: `KCyUwDA56` }), me)),
    (q = h(B)),
    (J = h(j)),
    (Y = O(j)),
    (xe = h(N)),
    (Se = {
      gZza5MGFZ: `(min-width: 810px) and (max-width: 1199.98px)`,
      Sc_BHKwoj: `(min-width: 1200px)`,
      szC4HkiqF: `(max-width: 809.98px)`,
    }),
    (Ce = []),
    (X = `framer-0PLhf`),
    (we = {
      gZza5MGFZ: `framer-v-1hyh99a`,
      Sc_BHKwoj: `framer-v-1rylwi2`,
      szC4HkiqF: `framer-v-2doa28`,
    }),
    (Te = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Ee = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      tokenization: `word`,
      transition: { bounce: 0, delay: 0.05, duration: 1, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (Q = { Desktop: `Sc_BHKwoj`, Phone: `szC4HkiqF`, Tablet: `gZza5MGFZ` }),
    (De = ({ value: e }) =>
      w()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Oe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `Sc_BHKwoj`,
    })),
    (ke = { component: N, variant: `KaZbXU7Hw` }),
    (Ae = { component: N, variant: `ymH31qajX` }),
    ($ = g(
      o(function (e, r) {
        let o = i(null),
          l = r ?? o,
          re = ee(),
          { activeLocale: p, setLocale: m } = oe(),
          h = ce(),
          { style: g, className: y, layoutId: w, variant: E, ...D } = Oe(e);
        le(n(() => ye({}, p), [p]));
        let [O, ue] = ie(E, Se, !1),
          A = d(X),
          j = t(_)?.isLayoutTemplate,
          M = Te(j, !!t(te)?.transition?.layout);
        se();
        let N = S(`naXzwhcrb`),
          P = i(null),
          L = S(`fS_0cxVWT`),
          z = i(null);
        return (
          ae({ bqygee: Ae, yjimk7: ke }),
          a(_.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `Sc_BHKwoj`,
              variantClassNames: we,
            },
            children: c(ne, {
              id: w ?? re,
              children: [
                a(De, {
                  value: `html body { background: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)); }`,
                }),
                c(u.div, {
                  ...D,
                  className: d(A, `framer-1rylwi2`, y),
                  "data-framer-cursor": `yjimk7`,
                  "data-selection": !0,
                  ref: l,
                  style: { ...g },
                  children: [
                    a(T, {
                      height: 64,
                      width: h?.width || `100vw`,
                      y: 0,
                      children: a(x, {
                        className: `framer-ad896n-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `NeFA2LbHW`,
                        scopeId: `KCyUwDA56`,
                        children: a(b, {
                          breakpoint: O,
                          overrides: {
                            szC4HkiqF: { style: { width: `100%` }, variant: Z(`yAuW89ZY2`) },
                          },
                          children: a(F, {
                            dHsy3xrhB: `bqygee`,
                            height: `100%`,
                            id: `NeFA2LbHW`,
                            layoutId: `NeFA2LbHW`,
                            style: { height: `100%`, width: `100%` },
                            variant: Z(`PJQL26TjW`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(k, {
                      links: [
                        {
                          href: { hash: `:naXzwhcrb`, webPageId: `KCyUwDA56` },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: `:naXzwhcrb`, webPageId: `KCyUwDA56` },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: `:naXzwhcrb`, webPageId: `KCyUwDA56` },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (e) =>
                        a(b, {
                          breakpoint: O,
                          overrides: { szC4HkiqF: { height: 50, y: 950 } },
                          children: a(T, {
                            height: 64,
                            width: h?.width || `100vw`,
                            y: 936,
                            children: a(x, {
                              className: `framer-ug7uub-container`,
                              layout: M,
                              layoutScroll: !0,
                              nodeId: `VT0WA5vOB`,
                              scopeId: `KCyUwDA56`,
                              children: a(b, {
                                breakpoint: O,
                                overrides: {
                                  gZza5MGFZ: { dVeyGUmu6: e[2] },
                                  szC4HkiqF: { dVeyGUmu6: e[1], variant: Z(`A3DEEFWfS`) },
                                },
                                children: a(R, {
                                  dVeyGUmu6: e[0],
                                  height: `100%`,
                                  id: `VT0WA5vOB`,
                                  layoutId: `VT0WA5vOB`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Z(`YN2PiCfKL`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                    }),
                    a(T, {
                      children: a(x, {
                        className: `framer-1qpzovi-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `Ak1AIyOQ_`,
                        scopeId: `KCyUwDA56`,
                        children: a(I, {
                          height: `100%`,
                          id: `Ak1AIyOQ_`,
                          intensity: 10,
                          layoutId: `Ak1AIyOQ_`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    c(W, {
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-eh2ikw`,
                      "data-framer-name": `Header`,
                      id: N,
                      layout: M,
                      ref: P,
                      children: [
                        a(b, {
                          breakpoint: O,
                          overrides: {
                            gZza5MGFZ: {
                              children: a(s, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `80px`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `0.94em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  },
                                  children: `Jumbo Signatures`,
                                }),
                              }),
                            },
                            szC4HkiqF: {
                              children: a(s, {
                                children: a(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `60px`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `0.94em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  },
                                  children: `Jumbo Signatures`,
                                }),
                              }),
                            },
                          },
                          children: a(v, {
                            __fromCanvasComponent: !0,
                            children: a(s, {
                              children: a(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `100px`,
                                  "--framer-letter-spacing": `-0.05em`,
                                  "--framer-line-height": `0.94em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                },
                                children: `Jumbo Signatures`,
                              }),
                            }),
                            className: `framer-12d7x1h`,
                            "data-framer-name": `Title`,
                            effect: Ee,
                            fonts: [`FS;Outfit-regular`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        c(`div`, {
                          className: `framer-1x3j6u2`,
                          children: [
                            a(b, {
                              breakpoint: O,
                              overrides: {
                                szC4HkiqF: {
                                  children: a(s, {
                                    children: c(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `10px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: [
                                        a(`span`, {
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                            "--framer-font-weight": `700`,
                                            "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                          },
                                          children: `(JM01)`,
                                        }),
                                        a(`span`, {
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                            "--framer-font-weight": `400`,
                                          },
                                          children: `      `,
                                        }),
                                        `Client / Jumbo Group of Restaurants`,
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: a(v, {
                                __fromCanvasComponent: !0,
                                children: a(s, {
                                  children: c(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0.1px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    },
                                    children: [
                                      a(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                          "--framer-font-weight": `700`,
                                          "--framer-text-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                        },
                                        children: `(JM01)`,
                                      }),
                                      a(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                          "--framer-font-weight": `400`,
                                        },
                                        children: `      `,
                                      }),
                                      `Client / Jumbo Group of Restaurants`,
                                    ],
                                  }),
                                }),
                                className: `framer-8dauzc`,
                                "data-framer-name": `Client`,
                                fonts: [`FS;Outfit-medium`, `FS;Outfit-bold`, `FS;Outfit-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(b, {
                              breakpoint: O,
                              overrides: {
                                szC4HkiqF: {
                                  children: a(s, {
                                    children: a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `10px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: `A refined dining identity rooted in Singaporean culture, where the orchid and refined color system reference the national flower and culinary heritage, distilled into a minimalist, elegant expression.`,
                                    }),
                                  }),
                                },
                              },
                              children: a(v, {
                                __fromCanvasComponent: !0,
                                children: a(s, {
                                  children: a(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0.1px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    },
                                    children: `A refined dining identity rooted in Singaporean culture, where the orchid and refined color system reference the national flower and culinary heritage, distilled into a minimalist, elegant expression.`,
                                  }),
                                }),
                                className: `framer-1gkk96j`,
                                "data-framer-name": `Intro`,
                                fonts: [`FS;Outfit-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(b, {
                              breakpoint: O,
                              overrides: {
                                szC4HkiqF: {
                                  children: c(s, {
                                    children: [
                                      a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `10px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.1px`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                        },
                                        children: `Art Direction`,
                                      }),
                                      a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `10px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.1px`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                        },
                                        children: `Brand Systems`,
                                      }),
                                      a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `10px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.1px`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                        },
                                        children: `Print`,
                                      }),
                                    ],
                                  }),
                                },
                              },
                              children: a(v, {
                                __fromCanvasComponent: !0,
                                children: c(s, {
                                  children: [
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                      },
                                      children: `Art Direction`,
                                    }),
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                      },
                                      children: `Brand Systems`,
                                    }),
                                    a(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                      },
                                      children: `Print`,
                                    }),
                                  ],
                                }),
                                className: `framer-1u023am`,
                                "data-framer-name": `Category`,
                                fonts: [`FS;Outfit-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a(u.div, {
                      className: `framer-48cem8`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 667.5 + 0),
                              pixelHeight: 1280,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU.jpg`,
                              srcSet: `../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU-90ee36.jpg 512w,../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU-5c7b22.jpg 1024w,../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 732 + 0 + 0),
                              pixelHeight: 1280,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU.jpg`,
                              srcSet: `../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU-90ee36.jpg 512w,../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU-5c7b22.jpg 1024w,../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 750 + 0),
                            pixelHeight: 1280,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU.jpg`,
                            srcSet: `../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU-90ee36.jpg 512w,../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU-5c7b22.jpg 1024w,../../assets/images/mkqhuYvkWz9uBXAMZNOq3ysJBU.jpg 1920w`,
                          },
                          className: `framer-hlgfdb`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-pt1o7q`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1207.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM.jpg`,
                              srcSet: `../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM-a8d5d3.jpg 512w,../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM-7384b5.jpg 1024w,../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 992 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM.jpg`,
                              srcSet: `../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM-a8d5d3.jpg 512w,../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM-7384b5.jpg 1024w,../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 1550 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM.jpg`,
                            srcSet: `../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM-a8d5d3.jpg 512w,../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM-7384b5.jpg 1024w,../../assets/images/FfowQ1B4Vw1DilsHhaBruUaO7QM.jpg 1920w`,
                          },
                          className: `framer-mh2n0u`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1csmyy8`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1663.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4.jpg`,
                              srcSet: `../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4-f0260b.jpg 512w,../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4-89170b.jpg 1024w,../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1211 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4.jpg`,
                              srcSet: `../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4-f0260b.jpg 512w,../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4-89170b.jpg 1024w,../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 2225 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4.jpg`,
                            srcSet: `../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4-f0260b.jpg 512w,../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4-89170b.jpg 1024w,../../assets/images/fETEAatt2g0fbYNOPe78vyTKce4.jpg 1920w`,
                          },
                          className: `framer-11ga0u0`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-k73sp2`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2119.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA.jpg`,
                              srcSet: `../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA-513595.jpg 512w,../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA-4b6c13.jpg 1024w,../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1430 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA.jpg`,
                              srcSet: `../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA-513595.jpg 512w,../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA-4b6c13.jpg 1024w,../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 2900 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA.jpg`,
                            srcSet: `../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA-513595.jpg 512w,../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA-4b6c13.jpg 1024w,../../assets/images/op2WxKwSxXoosbyyLAeGrHLAukA.jpg 1920w`,
                          },
                          className: `framer-1tg5oqv`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-m9o20e`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2575.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ.jpg`,
                              srcSet: `../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ-a10f64.jpg 512w,../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ-b4873b.jpg 1024w,../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1649 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ.jpg`,
                              srcSet: `../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ-a10f64.jpg 512w,../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ-b4873b.jpg 1024w,../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 3575 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ.jpg`,
                            srcSet: `../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ-a10f64.jpg 512w,../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ-b4873b.jpg 1024w,../../assets/images/ehpLJ2rF2UowngvZuY0Or2VRHQ.jpg 1920w`,
                          },
                          className: `framer-1g2tbx2`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-oau3kh`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3031.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ.jpg`,
                              srcSet: `../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ-5bd209.jpg 512w,../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ-d21682.jpg 1024w,../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1868 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ.jpg`,
                              srcSet: `../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ-5bd209.jpg 512w,../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ-d21682.jpg 1024w,../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 4250 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ.jpg`,
                            srcSet: `../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ-5bd209.jpg 512w,../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ-d21682.jpg 1024w,../../assets/images/fR4OqA324WhfhArIJsYwcHBolQ.jpg 1920w`,
                          },
                          className: `framer-153shhk`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1mdl6rw`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3487.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM.jpg`,
                              srcSet: `../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM-4214e4.jpg 512w,../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM-b4400e.jpg 1024w,../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2087 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM.jpg`,
                              srcSet: `../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM-4214e4.jpg 512w,../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM-b4400e.jpg 1024w,../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 4925 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM.jpg`,
                            srcSet: `../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM-4214e4.jpg 512w,../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM-b4400e.jpg 1024w,../../assets/images/zGlt1WV6FRp2CLkJ7Iw14DbLrhM.jpg 1920w`,
                          },
                          className: `framer-1e36fqs`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1m37i2g`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3943.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I.jpg`,
                              srcSet: `../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I-88a1d0.jpg 512w,../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I-8bc9d5.jpg 1024w,../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2306 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I.jpg`,
                              srcSet: `../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I-88a1d0.jpg 512w,../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I-8bc9d5.jpg 1024w,../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 5600 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I.jpg`,
                            srcSet: `../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I-88a1d0.jpg 512w,../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I-8bc9d5.jpg 1024w,../../assets/images/gXz0Lr9Lcm38aiji1f992sQw68I.jpg 1920w`,
                          },
                          className: `framer-va07jv`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1rrlm42`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 4399.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM.jpg`,
                              srcSet: `../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM-39636b.jpg 512w,../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM-5d35be.jpg 1024w,../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2525 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM.jpg`,
                              srcSet: `../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM-39636b.jpg 512w,../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM-5d35be.jpg 1024w,../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 6275 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM.jpg`,
                            srcSet: `../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM-39636b.jpg 512w,../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM-5d35be.jpg 1024w,../../assets/images/MRZI6RJwByB2lEGWSa7tseJf3dM.jpg 1920w`,
                          },
                          className: `framer-jrty9v`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-ayrjtz`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 4855.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I.jpg`,
                              srcSet: `../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I-9ece6a.jpg 512w,../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I-cc0a5f.jpg 1024w,../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2744 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I.jpg`,
                              srcSet: `../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I-9ece6a.jpg 512w,../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I-cc0a5f.jpg 1024w,../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 6950 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I.jpg`,
                            srcSet: `../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I-9ece6a.jpg 512w,../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I-cc0a5f.jpg 1024w,../../assets/images/0elV5JmJZktBbgXyhq5VteW0A1I.jpg 1920w`,
                          },
                          className: `framer-1wc0pa7`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-mcj50n`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 5311.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU.jpg`,
                              srcSet: `../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU-764603.jpg 512w,../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU-c09e9e.jpg 1024w,../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2963 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU.jpg`,
                              srcSet: `../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU-764603.jpg 512w,../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU-c09e9e.jpg 1024w,../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 7625 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU.jpg`,
                            srcSet: `../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU-764603.jpg 512w,../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU-c09e9e.jpg 1024w,../../assets/images/pwF8lfBszjDEl0n9ZkPNiZso1hU.jpg 1920w`,
                          },
                          className: `framer-9cr76g`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-l3bb78`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 5767.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk.jpg`,
                              srcSet: `../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk-60ae73.jpg 512w,../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk-9fd8e9.jpg 1024w,../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3182 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk.jpg`,
                              srcSet: `../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk-60ae73.jpg 512w,../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk-9fd8e9.jpg 1024w,../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 8300 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk.jpg`,
                            srcSet: `../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk-60ae73.jpg 512w,../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk-9fd8e9.jpg 1024w,../../assets/images/7PbQezeS5Cbo1ag3FE7O49NSKk.jpg 1920w`,
                          },
                          className: `framer-67h0q4`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1sjlndl`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 6223.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0.jpg`,
                              srcSet: `../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0-b3f48a.jpg 512w,../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0-88728d.jpg 1024w,../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3401 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0.jpg`,
                              srcSet: `../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0-b3f48a.jpg 512w,../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0-88728d.jpg 1024w,../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 8975 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0.jpg`,
                            srcSet: `../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0-b3f48a.jpg 512w,../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0-88728d.jpg 1024w,../../assets/images/UIq7prAqGWBWFOOAh9ZN4Lx1Lf0.jpg 1920w`,
                          },
                          className: `framer-12zn8y1`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-jgqcuo`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 6679.5 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY.jpg`,
                              srcSet: `../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY-a7ee13.jpg 512w,../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY-bc1f10.jpg 1024w,../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY.jpg 1920w`,
                            },
                          },
                          szC4HkiqF: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3620 + 0 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY.jpg`,
                              srcSet: `../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY-a7ee13.jpg 512w,../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY-bc1f10.jpg 1024w,../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY.jpg 1920w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 9650 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY.jpg`,
                            srcSet: `../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY-a7ee13.jpg 512w,../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY-bc1f10.jpg 1024w,../../assets/images/PWgrbRhXw5nyU7sNMSUkKU29vY.jpg 1920w`,
                          },
                          className: `framer-19xwabx`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(b, {
                      breakpoint: O,
                      overrides: {
                        gZza5MGFZ: { y: (h?.y || 0) + 0 + 7135.5 },
                        szC4HkiqF: { y: (h?.y || 0) + 0 + 3839 },
                      },
                      children: a(T, {
                        height: 1,
                        width: h?.width || `100vw`,
                        y: (h?.y || 0) + 0 + 10325,
                        children: a(x, {
                          className: `framer-1r9po48-container`,
                          layout: M,
                          nodeId: `fX_vGMoa5`,
                          rendersWithMotion: !0,
                          scopeId: `KCyUwDA56`,
                          children: a(K, {
                            height: `100%`,
                            id: `fX_vGMoa5`,
                            layoutId: `fX_vGMoa5`,
                            style: { width: `100%` },
                            variant: Z(`lPllubKXP`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-117oljz`,
                      layout: M,
                      children: a(k, {
                        links: [
                          { href: { webPageId: `HC6lAXg5r` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `HC6lAXg5r` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `HC6lAXg5r` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          a(b, {
                            breakpoint: O,
                            overrides: {
                              gZza5MGFZ: { y: (h?.y || 0) + 0 + 7136.5 + 0 },
                              szC4HkiqF: { y: (h?.y || 0) + 0 + 3840 + 0 },
                            },
                            children: a(T, {
                              height: 150,
                              width: `min(max(${h?.width || `100vw`}, 1px), 1440px)`,
                              y: (h?.y || 0) + 0 + 10326 + 0,
                              children: a(x, {
                                className: `framer-18qb16z-container`,
                                nodeId: `LwYqMlR6c`,
                                scopeId: `KCyUwDA56`,
                                children: a(b, {
                                  breakpoint: O,
                                  overrides: {
                                    gZza5MGFZ: { fe8fJLFAK: e[2], variant: Z(`QN7SoHE9a`) },
                                    szC4HkiqF: { fe8fJLFAK: e[1], variant: Z(`whH09Af37`) },
                                  },
                                  children: a(B, {
                                    fe8fJLFAK: e[0],
                                    height: `100%`,
                                    id: `LwYqMlR6c`,
                                    layoutId: `LwYqMlR6c`,
                                    Pwy_evt22: `next / Advancing with Thermo Fisher Scientific`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: Z(`Irv2y1gkW`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1lm3axy`,
                      "data-framer-name": `IndexFooter`,
                      id: L,
                      layout: M,
                      ref: z,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          gZza5MGFZ: { y: (h?.y || 0) + 0 + 7286.5 + 100 + 220 },
                          szC4HkiqF: { y: (h?.y || 0) + 0 + 3990 + 10 + 310 },
                        },
                        children: a(T, {
                          height: 360,
                          width: `calc(${h?.width || `100vw`} - 48px)`,
                          y: (h?.y || 0) + 0 + 10476 + 100 + 220,
                          children: a(x, {
                            className: `framer-1hkrl23-container`,
                            nodeId: `R2tu41gaT`,
                            rendersWithMotion: !0,
                            scopeId: `KCyUwDA56`,
                            children: a(b, {
                              breakpoint: O,
                              overrides: {
                                gZza5MGFZ: {
                                  __framer__targets: [{ ref: z, target: `dgixlhc1H` }],
                                  variant: Z(`H6h6fviq3`),
                                },
                                szC4HkiqF: {
                                  __framer__targets: [{ ref: z, target: `nOKgs1SEl` }],
                                  variant: Z(`GVYGZcCCV`),
                                },
                              },
                              children: a(Y, {
                                __framer__animateOnce: !1,
                                __framer__targets: [{ ref: z, target: `XolEYst5Z` }],
                                __framer__threshold: 0,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `R2tu41gaT`,
                                layoutId: `R2tu41gaT`,
                                style: { width: `100%` },
                                variant: Z(`ZRUlqdzB5`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-0PLhf.framer-1hgz7im, .framer-0PLhf .framer-1hgz7im { display: block; }`,
        `.framer-0PLhf.framer-1rylwi2 { --selection-background-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01) /* {"name":"Orange"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-0PLhf .framer-ad896n-container { flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,
        `.framer-0PLhf .framer-ug7uub-container { bottom: 0px; flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; z-index: 3; }`,
        `.framer-0PLhf .framer-1qpzovi-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-0PLhf .framer-eh2ikw { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 200px 50px 80px 50px; position: relative; width: 100%; }`,
        `.framer-0PLhf .framer-12d7x1h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 50%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-0PLhf .framer-1x3j6u2 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-0PLhf .framer-8dauzc, .framer-0PLhf .framer-1gkk96j, .framer-0PLhf .framer-1u023am { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 350px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-0PLhf .framer-48cem8, .framer-0PLhf .framer-pt1o7q, .framer-0PLhf .framer-1csmyy8, .framer-0PLhf .framer-k73sp2, .framer-0PLhf .framer-m9o20e, .framer-0PLhf .framer-oau3kh, .framer-0PLhf .framer-1mdl6rw, .framer-0PLhf .framer-1m37i2g, .framer-0PLhf .framer-1rrlm42, .framer-0PLhf .framer-ayrjtz, .framer-0PLhf .framer-mcj50n, .framer-0PLhf .framer-l3bb78, .framer-0PLhf .framer-1sjlndl, .framer-0PLhf .framer-jgqcuo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-0PLhf .framer-hlgfdb, .framer-0PLhf .framer-mh2n0u, .framer-0PLhf .framer-11ga0u0, .framer-0PLhf .framer-1tg5oqv, .framer-0PLhf .framer-1g2tbx2, .framer-0PLhf .framer-153shhk, .framer-0PLhf .framer-1e36fqs, .framer-0PLhf .framer-va07jv, .framer-0PLhf .framer-jrty9v, .framer-0PLhf .framer-1wc0pa7, .framer-0PLhf .framer-9cr76g, .framer-0PLhf .framer-67h0q4, .framer-0PLhf .framer-12zn8y1, .framer-0PLhf .framer-19xwabx { flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-0PLhf .framer-1r9po48-container, .framer-0PLhf .framer-1hkrl23-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-0PLhf .framer-117oljz { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-0PLhf .framer-18qb16z-container { flex: 1 0 0px; height: auto; max-width: 1440px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-0PLhf .framer-1lm3axy { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 24px 100px 24px; position: relative; width: 100%; }`,
        `.framer-0PLhf[data-selection="true"] * ::selection, .framer-0PLhf [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `@media (max-width: 809.98px) { .framer-0PLhf.framer-1rylwi2 { width: 390px; } .framer-0PLhf .framer-ad896n-container { height: auto; } .framer-0PLhf .framer-ug7uub-container { height: 50px; } .framer-0PLhf .framer-eh2ikw { flex-direction: column; gap: 30px; justify-content: flex-start; padding: 120px 24px 20px 24px; } .framer-0PLhf .framer-12d7x1h { max-width: 500px; width: 100%; } .framer-0PLhf .framer-1x3j6u2, .framer-0PLhf .framer-hlgfdb, .framer-0PLhf .framer-mh2n0u, .framer-0PLhf .framer-11ga0u0, .framer-0PLhf .framer-1tg5oqv, .framer-0PLhf .framer-1g2tbx2, .framer-0PLhf .framer-153shhk, .framer-0PLhf .framer-1e36fqs, .framer-0PLhf .framer-va07jv, .framer-0PLhf .framer-jrty9v, .framer-0PLhf .framer-1wc0pa7, .framer-0PLhf .framer-9cr76g, .framer-0PLhf .framer-67h0q4, .framer-0PLhf .framer-12zn8y1, .framer-0PLhf .framer-19xwabx { flex: none; width: 100%; } .framer-0PLhf .framer-8dauzc, .framer-0PLhf .framer-1gkk96j, .framer-0PLhf .framer-1u023am { max-width: 342px; width: 100%; } .framer-0PLhf .framer-48cem8, .framer-0PLhf .framer-pt1o7q, .framer-0PLhf .framer-1csmyy8, .framer-0PLhf .framer-k73sp2, .framer-0PLhf .framer-m9o20e, .framer-0PLhf .framer-oau3kh, .framer-0PLhf .framer-1mdl6rw, .framer-0PLhf .framer-1m37i2g, .framer-0PLhf .framer-1rrlm42, .framer-0PLhf .framer-ayrjtz, .framer-0PLhf .framer-mcj50n, .framer-0PLhf .framer-l3bb78, .framer-0PLhf .framer-1sjlndl, .framer-0PLhf .framer-jgqcuo { flex-direction: column; } .framer-0PLhf .framer-1lm3axy { padding: 10px 24px 10px 24px; }}`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-0PLhf.framer-1rylwi2 { width: 810px; } .framer-0PLhf .framer-12d7x1h { width: 60%; } .framer-0PLhf .framer-8dauzc, .framer-0PLhf .framer-1gkk96j, .framer-0PLhf .framer-1u023am { width: 100%; }}`,
      ],
      `framer-0PLhf`
    )),
    (je = $),
    ($.displayName = `Work / Tsui Wah Restaurant`),
    ($.defaultProps = { height: 10767, width: 1200 }),
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
              url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
              weight: `400`,
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
              url: `../../assets/misc/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2`,
              weight: `700`,
            },
          ],
        },
        ...be,
        ...H,
        ...U,
        ...G,
        ...q,
        ...J,
        ...xe,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          m(F, {}, t),
          m(R, {}, t),
          m(de, {}, t),
          m(V, {}, t),
          m(B, {}, t),
          m(j, {}, t),
        ])
      ),
    }),
    (Me = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerKCyUwDA56`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `10767`,
            framerScrollSections: `{"naXzwhcrb":{"pattern":":naXzwhcrb","name":"top"},"fS_0cxVWT":{"pattern":":fS_0cxVWT","name":"indexfooter"}}`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"szC4HkiqF":{"layout":["fixed","auto"]},"gZza5MGFZ":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, je as default, Ce as queryParamNames };
//# sourceMappingURL=DooSEW2qshTYU2GXOKd32m4xEVhJuvHb4SDTaXc5VXw.Egq0Yj7E.mjs.map
