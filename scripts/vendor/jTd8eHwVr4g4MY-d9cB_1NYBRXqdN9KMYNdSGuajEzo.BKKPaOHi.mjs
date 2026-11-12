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
import { n as ve, r as ye } from "./m93indqJA.BVj_q9LK.mjs";
var be, H, U, W, G, K, q, J, Y, xe, Se, Ce, X, we, Te, Z, Q, Ee, De, Oe, ke, $, Ae, je;
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
    (K = y(E(V, { nodeId: `q7SG1h1tC`, override: he, scopeId: `m93indqJA` }), me)),
    (q = h(B)),
    (J = h(j)),
    (Y = O(j)),
    (xe = h(N)),
    (Se = {
      AsKqAL9oH: `(min-width: 1200px)`,
      lKOzoiRCg: `(min-width: 810px) and (max-width: 1199.98px)`,
      oJm_lVGmd: `(max-width: 809.98px)`,
    }),
    (Ce = []),
    (X = `framer-w5Vut`),
    (we = {
      AsKqAL9oH: `framer-v-pa70xd`,
      lKOzoiRCg: `framer-v-1uicz5z`,
      oJm_lVGmd: `framer-v-1qg3yka`,
    }),
    (Te = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `AsKqAL9oH`, Phone: `oJm_lVGmd`, Tablet: `lKOzoiRCg` }),
    (Ee = ({ value: e }) =>
      w()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (De = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `AsKqAL9oH`,
    })),
    (Oe = { component: N, variant: `KaZbXU7Hw` }),
    (ke = { component: N, variant: `ymH31qajX` }),
    ($ = g(
      o(function (e, r) {
        let o = i(null),
          l = r ?? o,
          re = ee(),
          { activeLocale: p, setLocale: m } = oe(),
          h = ce(),
          { style: g, className: y, layoutId: w, variant: E, ...D } = De(e);
        le(n(() => ye({}, p), [p]));
        let [O, ue] = ie(E, Se, !1),
          A = d(X),
          j = t(_)?.isLayoutTemplate,
          M = Te(j, !!t(te)?.transition?.layout);
        se();
        let N = S(`AvT2PpWRn`),
          P = i(null),
          L = S(`gbrMHe0Bl`),
          z = i(null);
        return (
          ae({ bqygee: ke, yjimk7: Oe }),
          a(_.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `AsKqAL9oH`,
              variantClassNames: we,
            },
            children: c(ne, {
              id: w ?? re,
              children: [
                a(Ee, {
                  value: `html body { background: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)); }`,
                }),
                c(u.div, {
                  ...D,
                  className: d(A, `framer-pa70xd`, y),
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
                        className: `framer-1sp2es3-container`,
                        layout: M,
                        layoutScroll: !0,
                        nodeId: `XXc5TDTJY`,
                        scopeId: `m93indqJA`,
                        children: a(b, {
                          breakpoint: O,
                          overrides: {
                            oJm_lVGmd: { style: { width: `100%` }, variant: Z(`yAuW89ZY2`) },
                          },
                          children: a(F, {
                            dHsy3xrhB: `bqygee`,
                            height: `100%`,
                            id: `XXc5TDTJY`,
                            layoutId: `XXc5TDTJY`,
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
                          href: { hash: `:AvT2PpWRn`, webPageId: `m93indqJA` },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: `:AvT2PpWRn`, webPageId: `m93indqJA` },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { hash: `:AvT2PpWRn`, webPageId: `m93indqJA` },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (e) =>
                        a(b, {
                          breakpoint: O,
                          overrides: { oJm_lVGmd: { height: 50, y: 950 } },
                          children: a(T, {
                            height: 64,
                            width: h?.width || `100vw`,
                            y: 936,
                            children: a(x, {
                              className: `framer-1vjf1ym-container`,
                              layout: M,
                              layoutScroll: !0,
                              nodeId: `RXv4_ozWI`,
                              scopeId: `m93indqJA`,
                              children: a(b, {
                                breakpoint: O,
                                overrides: {
                                  lKOzoiRCg: { dVeyGUmu6: e[2] },
                                  oJm_lVGmd: { dVeyGUmu6: e[1], variant: Z(`A3DEEFWfS`) },
                                },
                                children: a(R, {
                                  dVeyGUmu6: e[0],
                                  height: `100%`,
                                  id: `RXv4_ozWI`,
                                  layoutId: `RXv4_ozWI`,
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
                        className: `framer-sobbkr-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `q7y1QQ6OG`,
                        scopeId: `m93indqJA`,
                        children: a(I, {
                          height: `100%`,
                          id: `q7y1QQ6OG`,
                          intensity: 10,
                          layoutId: `q7y1QQ6OG`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    c(W, {
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-1bchpzz`,
                      "data-framer-name": `Header`,
                      id: N,
                      layout: M,
                      ref: P,
                      children: [
                        a(b, {
                          breakpoint: O,
                          overrides: {
                            lKOzoiRCg: {
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
                                  children: `Ranger Buddies Quest`,
                                }),
                              }),
                            },
                            oJm_lVGmd: {
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
                                  children: `Ranger Buddies Quest`,
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
                                children: `Ranger Buddies Quest`,
                              }),
                            }),
                            className: `framer-1o0dm3h`,
                            "data-framer-name": `Title`,
                            fonts: [`FS;Outfit-regular`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        c(`div`, {
                          className: `framer-1y75wnx`,
                          children: [
                            a(b, {
                              breakpoint: O,
                              overrides: {
                                oJm_lVGmd: {
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
                                          children: `(MR01)`,
                                        }),
                                        a(`span`, {
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                            "--framer-font-weight": `400`,
                                          },
                                          children: `      `,
                                        }),
                                        `Client / Mandai Wildlife Reserve`,
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
                                        children: `(MR01)`,
                                      }),
                                      a(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                          "--framer-font-weight": `400`,
                                        },
                                        children: `      `,
                                      }),
                                      `Client / Mandai Wildlife Reserve`,
                                    ],
                                  }),
                                }),
                                className: `framer-18iynrn`,
                                "data-framer-name": `Client`,
                                fonts: [`FS;Outfit-medium`, `FS;Outfit-bold`, `FS;Outfit-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(b, {
                              breakpoint: O,
                              overrides: {
                                oJm_lVGmd: {
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
                                      children: `A gamified wildlife adventure that transforms Singapore Zoo into a digital playground. Utilizing projection mapping and motion tracking, children engage in sensory-led missions that bridge physical exploration with digital storytelling. The experience concludes with a physical badge of honor, turning conservation education into a tangible achievement.`,
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
                                    children: `A gamified wildlife adventure that transforms Singapore Zoo into a digital playground. Utilizing projection mapping and motion tracking, children engage in sensory-led missions that bridge physical exploration with digital storytelling. The experience concludes with a physical badge of honor, turning conservation education into a tangible achievement.`,
                                  }),
                                }),
                                className: `framer-84gipk`,
                                "data-framer-name": `Intro`,
                                fonts: [`FS;Outfit-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(b, {
                              breakpoint: O,
                              overrides: {
                                oJm_lVGmd: {
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
                                        children: `Experiential Design`,
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
                                        children: `Motion Design`,
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
                                      children: `Experiential Design`,
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
                                      children: `Motion Design`,
                                    }),
                                  ],
                                }),
                                className: `framer-vd6d5p`,
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
                      className: `framer-1cuqn4i`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 656 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_fox_architect.jpg`,
                              srcSet: `../../assets/images/z9UBqKXz4EdXNO51h9jMSogRB8-0e558e.jpg 512w,../../assets/images/z9UBqKXz4EdXNO51h9jMSogRB8-6dba3b.jpg 1024w,../../assets/images/projects/aom_fox_architect.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 682 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_fox_architect.jpg`,
                              srcSet: `../../assets/images/z9UBqKXz4EdXNO51h9jMSogRB8-0e558e.jpg 512w,../../assets/images/z9UBqKXz4EdXNO51h9jMSogRB8-6dba3b.jpg 1024w,../../assets/images/projects/aom_fox_architect.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 750 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_fox_architect.jpg`,
                            srcSet: `../../assets/images/z9UBqKXz4EdXNO51h9jMSogRB8-0e558e.jpg 512w,../../assets/images/z9UBqKXz4EdXNO51h9jMSogRB8-6dba3b.jpg 1024w,../../assets/images/projects/aom_fox_architect.jpg 1300w`,
                          },
                          className: `framer-jlacxb`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-yu6apv`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1108 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_brandboard.jpg`,
                              srcSet: `../../assets/images/6i1KYXiyji9VZnOdKOIRlbZa50-79f71f.jpg 512w,../../assets/images/6i1KYXiyji9VZnOdKOIRlbZa50-4c27ba.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 900 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_brandboard.jpg`,
                              srcSet: `../../assets/images/6i1KYXiyji9VZnOdKOIRlbZa50-79f71f.jpg 512w,../../assets/images/6i1KYXiyji9VZnOdKOIRlbZa50-4c27ba.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 1420 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_brandboard.jpg`,
                            srcSet: `../../assets/images/6i1KYXiyji9VZnOdKOIRlbZa50-79f71f.jpg 512w,../../assets/images/6i1KYXiyji9VZnOdKOIRlbZa50-4c27ba.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1300w`,
                          },
                          className: `framer-3xbagj`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-rcr0yw`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1560 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_thought_puzzle.jpg`,
                              srcSet: `../../assets/images/GYcWNPT4xxdXb4nf8MJrbEDapYQ-bf553f.jpg 512w,../../assets/images/GYcWNPT4xxdXb4nf8MJrbEDapYQ-8b0423.jpg 1024w,../../assets/images/projects/aom_thought_puzzle.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1118 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_thought_puzzle.jpg`,
                              srcSet: `../../assets/images/GYcWNPT4xxdXb4nf8MJrbEDapYQ-bf553f.jpg 512w,../../assets/images/GYcWNPT4xxdXb4nf8MJrbEDapYQ-8b0423.jpg 1024w,../../assets/images/projects/aom_thought_puzzle.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 2090 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_thought_puzzle.jpg`,
                            srcSet: `../../assets/images/GYcWNPT4xxdXb4nf8MJrbEDapYQ-bf553f.jpg 512w,../../assets/images/GYcWNPT4xxdXb4nf8MJrbEDapYQ-8b0423.jpg 1024w,../../assets/images/projects/aom_thought_puzzle.jpg 1300w`,
                          },
                          className: `framer-1yuopiz`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-v1p3nc`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2012 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_hero_surreal.jpg`,
                              srcSet: `../../assets/images/CMWkKr5QHttXdSH5meJKKcYQ6s-c4ac52.jpg 512w,../../assets/images/CMWkKr5QHttXdSH5meJKKcYQ6s-46d7c9.jpg 1024w,../../assets/images/projects/aom_hero_surreal.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1336 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_hero_surreal.jpg`,
                              srcSet: `../../assets/images/CMWkKr5QHttXdSH5meJKKcYQ6s-c4ac52.jpg 512w,../../assets/images/CMWkKr5QHttXdSH5meJKKcYQ6s-46d7c9.jpg 1024w,../../assets/images/projects/aom_hero_surreal.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 2760 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_hero_surreal.jpg`,
                            srcSet: `../../assets/images/CMWkKr5QHttXdSH5meJKKcYQ6s-c4ac52.jpg 512w,../../assets/images/CMWkKr5QHttXdSH5meJKKcYQ6s-46d7c9.jpg 1024w,../../assets/images/projects/aom_hero_surreal.jpg 1300w`,
                          },
                          className: `framer-1bpzej4`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-hsufli`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2464 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_prototype.jpg`,
                              srcSet: `../../assets/images/oBq3g0hLxX2eeVcAlS61tkw38w-8649cc.jpg 512w,../../assets/images/oBq3g0hLxX2eeVcAlS61tkw38w-f473de.jpg 1024w,../../assets/images/projects/aom_prototype.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1554 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_prototype.jpg`,
                              srcSet: `../../assets/images/oBq3g0hLxX2eeVcAlS61tkw38w-8649cc.jpg 512w,../../assets/images/oBq3g0hLxX2eeVcAlS61tkw38w-f473de.jpg 1024w,../../assets/images/projects/aom_prototype.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 3430 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_prototype.jpg`,
                            srcSet: `../../assets/images/oBq3g0hLxX2eeVcAlS61tkw38w-8649cc.jpg 512w,../../assets/images/oBq3g0hLxX2eeVcAlS61tkw38w-f473de.jpg 1024w,../../assets/images/projects/aom_prototype.jpg 1300w`,
                          },
                          className: `framer-1ab5401`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1x66947`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2916 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_headspace.jpg`,
                              srcSet: `../../assets/images/Gnm6xlm8R1BsOfrP14nl1jXXE-56833a.jpg 512w,../../assets/images/Gnm6xlm8R1BsOfrP14nl1jXXE-1d3569.jpg 1024w,../../assets/images/projects/aom_headspace.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1772 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_headspace.jpg`,
                              srcSet: `../../assets/images/Gnm6xlm8R1BsOfrP14nl1jXXE-56833a.jpg 512w,../../assets/images/Gnm6xlm8R1BsOfrP14nl1jXXE-1d3569.jpg 1024w,../../assets/images/projects/aom_headspace.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 4100 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_headspace.jpg`,
                            srcSet: `../../assets/images/Gnm6xlm8R1BsOfrP14nl1jXXE-56833a.jpg 512w,../../assets/images/Gnm6xlm8R1BsOfrP14nl1jXXE-1d3569.jpg 1024w,../../assets/images/projects/aom_headspace.jpg 1300w`,
                          },
                          className: `framer-1uazyll`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-1ewdsx9`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3368 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_hero_island.jpg`,
                              srcSet: `../../assets/images/GqBrCxyickiuQaSz2J5ucAI5ZW0-130b8a.jpg 512w,../../assets/images/GqBrCxyickiuQaSz2J5ucAI5ZW0-c6fde8.jpg 1024w,../../assets/images/projects/aom_hero_island.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 1990 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_hero_island.jpg`,
                              srcSet: `../../assets/images/GqBrCxyickiuQaSz2J5ucAI5ZW0-130b8a.jpg 512w,../../assets/images/GqBrCxyickiuQaSz2J5ucAI5ZW0-c6fde8.jpg 1024w,../../assets/images/projects/aom_hero_island.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 4770 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_hero_island.jpg`,
                            srcSet: `../../assets/images/GqBrCxyickiuQaSz2J5ucAI5ZW0-130b8a.jpg 512w,../../assets/images/GqBrCxyickiuQaSz2J5ucAI5ZW0-c6fde8.jpg 1024w,../../assets/images/projects/aom_hero_island.jpg 1300w`,
                          },
                          className: `framer-vs3y0r`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-ph2nln`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 3820 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_brandboard.jpg`,
                              srcSet: `../../assets/images/roP8IruJJHCWoYgjhFvsZ6hw218-658d9e.jpg 512w,../../assets/images/roP8IruJJHCWoYgjhFvsZ6hw218-bef23f.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2208 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_brandboard.jpg`,
                              srcSet: `../../assets/images/roP8IruJJHCWoYgjhFvsZ6hw218-658d9e.jpg 512w,../../assets/images/roP8IruJJHCWoYgjhFvsZ6hw218-bef23f.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 5440 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_brandboard.jpg`,
                            srcSet: `../../assets/images/roP8IruJJHCWoYgjhFvsZ6hw218-658d9e.jpg 512w,../../assets/images/roP8IruJJHCWoYgjhFvsZ6hw218-bef23f.jpg 1024w,../../assets/images/projects/aom_brandboard.jpg 1300w`,
                          },
                          className: `framer-aqfafl`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-nbhnyn`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 4272 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_fox_architect.jpg`,
                              srcSet: `../../assets/images/jCzLayWaer8zQ33swZ99GkGWU-c486ad.jpg 512w,../../assets/images/jCzLayWaer8zQ33swZ99GkGWU-22c8a5.jpg 1024w,../../assets/images/projects/aom_fox_architect.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2426 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_fox_architect.jpg`,
                              srcSet: `../../assets/images/jCzLayWaer8zQ33swZ99GkGWU-c486ad.jpg 512w,../../assets/images/jCzLayWaer8zQ33swZ99GkGWU-22c8a5.jpg 1024w,../../assets/images/projects/aom_fox_architect.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 6110 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_fox_architect.jpg`,
                            srcSet: `../../assets/images/jCzLayWaer8zQ33swZ99GkGWU-c486ad.jpg 512w,../../assets/images/jCzLayWaer8zQ33swZ99GkGWU-22c8a5.jpg 1024w,../../assets/images/projects/aom_fox_architect.jpg 1300w`,
                          },
                          className: `framer-13wssb6`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-o24z8`,
                      "data-framer-name": `1Image`,
                      layout: M,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 4724 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                              src: `../../assets/images/projects/aom_thought_puzzle.jpg`,
                              srcSet: `../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4-0cf2c4.jpg 512w,../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4.jpg 1024w,../../assets/images/projects/aom_thought_puzzle.jpg 1300w`,
                            },
                          },
                          oJm_lVGmd: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((h?.y || 0) + 0 + 2644 + 0 + 0),
                              pixelHeight: 726,
                              pixelWidth: 1300,
                              sizes: `min(${h?.width || `100vw`}, 1440px)`,
                              src: `../../assets/images/projects/aom_thought_puzzle.jpg`,
                              srcSet: `../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4-0cf2c4.jpg 512w,../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4.jpg 1024w,../../assets/images/projects/aom_thought_puzzle.jpg 1300w`,
                            },
                          },
                        },
                        children: a(C, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((h?.y || 0) + 0 + 6780 + 0),
                            pixelHeight: 726,
                            pixelWidth: 1300,
                            sizes: `max(min(${h?.width || `100vw`}, 1440px), 1px)`,
                            src: `../../assets/images/projects/aom_thought_puzzle.jpg`,
                            srcSet: `../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4-0cf2c4.jpg 512w,../../assets/images/WZDxoLFszqnn1nHZ7UmFvoPB4.jpg 1024w,../../assets/images/projects/aom_thought_puzzle.jpg 1300w`,
                          },
                          className: `framer-1n5igr5`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    a(b, {
                      breakpoint: O,
                      overrides: {
                        lKOzoiRCg: { y: (h?.y || 0) + 0 + 5176 },
                        oJm_lVGmd: { y: (h?.y || 0) + 0 + 2862 },
                      },
                      children: a(T, {
                        height: 1,
                        width: `1200px`,
                        y: (h?.y || 0) + 0 + 7450,
                        children: a(x, {
                          className: `framer-dzcecs-container`,
                          layout: M,
                          nodeId: `q7SG1h1tC`,
                          rendersWithMotion: !0,
                          scopeId: `m93indqJA`,
                          children: a(K, {
                            height: `100%`,
                            id: `q7SG1h1tC`,
                            layoutId: `q7SG1h1tC`,
                            style: { width: `100%` },
                            variant: Z(`lPllubKXP`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(u.div, {
                      className: `framer-biytre`,
                      layout: M,
                      children: a(k, {
                        links: [
                          { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          a(b, {
                            breakpoint: O,
                            overrides: {
                              lKOzoiRCg: { y: (h?.y || 0) + 0 + 5177 + 0 },
                              oJm_lVGmd: { y: (h?.y || 0) + 0 + 2863 + 0 },
                            },
                            children: a(T, {
                              height: 150,
                              width: `min(max(${h?.width || `100vw`}, 1px), 1440px)`,
                              y: (h?.y || 0) + 0 + 7451 + 0,
                              children: a(x, {
                                className: `framer-xchnjn-container`,
                                nodeId: `ruTB1ijds`,
                                scopeId: `m93indqJA`,
                                children: a(b, {
                                  breakpoint: O,
                                  overrides: {
                                    lKOzoiRCg: { fe8fJLFAK: e[2], variant: Z(`QN7SoHE9a`) },
                                    oJm_lVGmd: { fe8fJLFAK: e[1], variant: Z(`whH09Af37`) },
                                  },
                                  children: a(B, {
                                    fe8fJLFAK: e[0],
                                    height: `100%`,
                                    id: `ruTB1ijds`,
                                    layoutId: `ruTB1ijds`,
                                    Pwy_evt22: `next / SIT Virtual Open House 2025`,
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
                      className: `framer-1sao13i`,
                      "data-framer-name": `IndexFooter`,
                      id: L,
                      layout: M,
                      ref: z,
                      children: a(b, {
                        breakpoint: O,
                        overrides: {
                          lKOzoiRCg: { y: (h?.y || 0) + 0 + 5327 + 100 + 220 },
                          oJm_lVGmd: { y: (h?.y || 0) + 0 + 3013 + 10 + 310 },
                        },
                        children: a(T, {
                          height: 360,
                          width: `calc(${h?.width || `100vw`} - 48px)`,
                          y: (h?.y || 0) + 0 + 7601 + 100 + 220,
                          children: a(x, {
                            className: `framer-1gjnsk6-container`,
                            nodeId: `iItuDKfQ0`,
                            rendersWithMotion: !0,
                            scopeId: `m93indqJA`,
                            children: a(b, {
                              breakpoint: O,
                              overrides: {
                                lKOzoiRCg: {
                                  __framer__targets: [{ ref: z, target: `dgixlhc1H` }],
                                  variant: Z(`H6h6fviq3`),
                                },
                                oJm_lVGmd: {
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
                                id: `iItuDKfQ0`,
                                layoutId: `iItuDKfQ0`,
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
        `.framer-w5Vut.framer-4tixq6, .framer-w5Vut .framer-4tixq6 { display: block; }`,
        `.framer-w5Vut.framer-pa70xd { --selection-background-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01) /* {"name":"Orange"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-w5Vut .framer-1sp2es3-container { flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,
        `.framer-w5Vut .framer-1vjf1ym-container { bottom: 0px; flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; z-index: 3; }`,
        `.framer-w5Vut .framer-sobbkr-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-w5Vut .framer-1bchpzz { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 200px 50px 80px 50px; position: relative; width: 100%; }`,
        `.framer-w5Vut .framer-1o0dm3h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 50%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w5Vut .framer-1y75wnx { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-w5Vut .framer-18iynrn, .framer-w5Vut .framer-84gipk, .framer-w5Vut .framer-vd6d5p { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 350px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-w5Vut .framer-1cuqn4i, .framer-w5Vut .framer-yu6apv, .framer-w5Vut .framer-rcr0yw, .framer-w5Vut .framer-v1p3nc, .framer-w5Vut .framer-hsufli, .framer-w5Vut .framer-1x66947, .framer-w5Vut .framer-1ewdsx9, .framer-w5Vut .framer-ph2nln, .framer-w5Vut .framer-nbhnyn, .framer-w5Vut .framer-o24z8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-w5Vut .framer-jlacxb, .framer-w5Vut .framer-3xbagj, .framer-w5Vut .framer-1yuopiz, .framer-w5Vut .framer-1bpzej4, .framer-w5Vut .framer-1ab5401, .framer-w5Vut .framer-1uazyll, .framer-w5Vut .framer-vs3y0r, .framer-w5Vut .framer-aqfafl, .framer-w5Vut .framer-13wssb6, .framer-w5Vut .framer-1n5igr5 { flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-w5Vut .framer-dzcecs-container { flex: none; height: auto; position: relative; width: 1200px; }`,
        `.framer-w5Vut .framer-biytre { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-w5Vut .framer-xchnjn-container { flex: 1 0 0px; height: auto; max-width: 1440px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-w5Vut .framer-1sao13i { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 24px 100px 24px; position: relative; width: 100%; }`,
        `.framer-w5Vut .framer-1gjnsk6-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-w5Vut[data-selection="true"] * ::selection, .framer-w5Vut [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `@media (max-width: 809.98px) { .framer-w5Vut.framer-pa70xd { width: 390px; } .framer-w5Vut .framer-1sp2es3-container { height: auto; } .framer-w5Vut .framer-1vjf1ym-container { height: 50px; } .framer-w5Vut .framer-1bchpzz { flex-direction: column; gap: 30px; justify-content: flex-start; padding: 120px 24px 20px 24px; } .framer-w5Vut .framer-1o0dm3h { max-width: 500px; width: 100%; } .framer-w5Vut .framer-1y75wnx, .framer-w5Vut .framer-jlacxb, .framer-w5Vut .framer-3xbagj, .framer-w5Vut .framer-1yuopiz, .framer-w5Vut .framer-1bpzej4, .framer-w5Vut .framer-1ab5401, .framer-w5Vut .framer-1uazyll, .framer-w5Vut .framer-vs3y0r, .framer-w5Vut .framer-aqfafl, .framer-w5Vut .framer-13wssb6, .framer-w5Vut .framer-1n5igr5 { flex: none; width: 100%; } .framer-w5Vut .framer-18iynrn, .framer-w5Vut .framer-84gipk, .framer-w5Vut .framer-vd6d5p { max-width: 342px; width: 100%; } .framer-w5Vut .framer-1cuqn4i, .framer-w5Vut .framer-yu6apv, .framer-w5Vut .framer-rcr0yw, .framer-w5Vut .framer-v1p3nc, .framer-w5Vut .framer-hsufli, .framer-w5Vut .framer-1x66947, .framer-w5Vut .framer-1ewdsx9, .framer-w5Vut .framer-ph2nln, .framer-w5Vut .framer-nbhnyn, .framer-w5Vut .framer-o24z8 { flex-direction: column; } .framer-w5Vut .framer-1sao13i { padding: 10px 24px 10px 24px; }}`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-w5Vut.framer-pa70xd { width: 810px; } .framer-w5Vut .framer-1o0dm3h { width: 60%; } .framer-w5Vut .framer-18iynrn, .framer-w5Vut .framer-84gipk, .framer-w5Vut .framer-vd6d5p { width: 100%; }}`,
      ],
      `framer-w5Vut`
    )),
    (Ae = $),
    ($.displayName = `Work / Lky100`),
    ($.defaultProps = { height: 7873, width: 1200 }),
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
    (je = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerm93indqJA`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `7873`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `{"AvT2PpWRn":{"pattern":":AvT2PpWRn","name":"top"},"gbrMHe0Bl":{"pattern":":gbrMHe0Bl","name":"indexfooter"}}`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oJm_lVGmd":{"layout":["fixed","auto"]},"lKOzoiRCg":{"layout":["fixed","auto"]}}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { je as __FramerMetadata__, Ae as default, Ce as queryParamNames };
//# sourceMappingURL=jTd8eHwVr4g4MY-d9cB_1NYBRXqdN9KMYNdSGuajEzo.BKKPaOHi.mjs.map
