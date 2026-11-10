import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  D as t,
  O as n,
  S as r,
  T as i,
  _ as a,
  c as o,
  h as s,
  j as c,
  l,
  o as u,
} from "./react.Bb_yyrg0.mjs";
import { T as d, a as ee, r as te, t as f } from "./motion.Dq3vMtKA.mjs";
import {
  A as p,
  B as m,
  G as h,
  M as g,
  R as _,
  T as ne,
  _t as v,
  a as y,
  at as re,
  b,
  f as ie,
  h as x,
  ht as ae,
  it as oe,
  j as se,
  lt as ce,
  mt as le,
  n as S,
  nt as ue,
  pt as C,
  r as w,
  s as T,
  st as E,
  t as D,
  ut as de,
  vt as O,
  w as fe,
  wt as k,
  y as pe,
  yt as A,
  z as j,
} from "./framer.cs1Z8Vda.mjs";
import {
  a as M,
  c as me,
  d as N,
  f as P,
  i as F,
  m as I,
  n as L,
  o as R,
  p as z,
  r as he,
  s as B,
  t as ge,
} from "./yk6i18qEx.CnQf8P0b.mjs";
import { n as V, t as _e } from "./VideoController.D9ulu-ly.mjs";
import { n as ve, t as H } from "./Video.CtoqTS3T.mjs";
import { n as U, t as ye } from "./x8rD2lyjy.BpUu5ST3.mjs";
import { n as be, t as W } from "./CIe0Dv4oV.CojP6Uq1.mjs";
import { i as xe, n as G, r as Se, t as Ce } from "./oix5mGE7Z.eWjNGzm2.mjs";
import {
  a as we,
  c as Te,
  i as Ee,
  l as De,
  n as Oe,
  o as ke,
  r as Ae,
  s as je,
  t as Me,
  u as K,
} from "./ZtAm2QBrM.BBUNk1De.mjs";
import { n as Ne, r as Pe } from "./ZgFmrycH0.nUkkwA1c.mjs";
var q,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  J,
  Be,
  Ve = e(() => {
    (u(),
      h(),
      r(),
      (q = `var(--framer-icon-mask)`),
      (Fe = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ie = d.create(Fe)),
      (Le = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(Ie, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Re = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 13 C 6 13 7 15 10 15 C 13 15 14 13 14 13 M 14 7 L 13 8 M 13 8 L 12 9 M 13 8 L 14 9 M 13 8 L 12 7 M 8 7 L 7 8 M 7 8 L 6 9 M 7 8 L 8 9 M 7 8 L 6 7 M 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 Z" fill="transparent" height="20px" id="FZTUMzNqc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (ze = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (J = v(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = ze(e),
            u = ae(`4117757888`, Re);
          return o(Le, {
            ...l,
            className: p(`framer-tjmJh`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-tjmJh { -webkit-mask: ${q}; aspect-ratio: 1; display: block; mask: ${q}; width: 24px; }`,
        ],
        `framer-tjmJh`
      )),
      (J.displayName = `Emoji Smiley Dizzy Happy`),
      (Be = J),
      ne(J, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: w.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: w.Number,
        },
      }));
  }),
  He,
  Ue,
  We,
  Ge = e(() => {
    (h(),
      se.loadFonts([]),
      (He = [{ explicitInter: !0, fonts: [] }]),
      (Ue = [
        `.framer-7WrNq .framer-styles-preset-tzva5l:not(.rich-text-wrapper), .framer-7WrNq .framer-styles-preset-tzva5l.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01); --framer-link-text-background-corner-shape: superellipse(1); }`,
      ]),
      (We = `framer-7WrNq`));
  }),
  Ke,
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
  mt,
  ht,
  gt,
  Y,
  _t,
  X,
  vt,
  yt,
  bt,
  Z,
  xt,
  Q,
  St,
  $;
e(() => {
  (u(),
    h(),
    f(),
    r(),
    Se(),
    ve(),
    R(),
    Ve(),
    I(),
    P(),
    be(),
    me(),
    Ce(),
    he(),
    De(),
    ye(),
    ge(),
    _e(),
    Te(),
    Ge(),
    Ee(),
    Ne(),
    (Ke = _(L)),
    (qe = _(B)),
    (Je = _(z)),
    (Ye = _(K)),
    (Xe = A(d.div)),
    (Ze = _(H)),
    (Qe = O(H, { nodeId: `lWl90f7FJ`, override: V, scopeId: `ZgFmrycH0` })),
    ($e = _(G)),
    (et = O(H, { nodeId: `FhpBM2VrB`, override: V, scopeId: `ZgFmrycH0` })),
    (tt = O(H, { nodeId: `WDmgmyViy`, override: V, scopeId: `ZgFmrycH0` })),
    (nt = O(H, { nodeId: `NznenSn6Y`, override: V, scopeId: `ZgFmrycH0` })),
    (rt = O(H, { nodeId: `e2z3kfEL9`, override: V, scopeId: `ZgFmrycH0` })),
    (it = O(H, { nodeId: `SKckzpQOI`, override: V, scopeId: `ZgFmrycH0` })),
    (at = _(W)),
    (ot = k(W)),
    (st = _(U)),
    (ct = _(N)),
    (lt = k(N)),
    (ut = _(F)),
    (dt = {
      cW_6pQo5p: `(max-width: 809.98px)`,
      no9ek4Ux4: `(min-width: 1200px)`,
      vU_gVGWK9: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (ft = () => typeof document < `u`),
    (pt = []),
    (mt = `framer-JJaGr`),
    (ht = {
      cW_6pQo5p: `framer-v-185fzuy`,
      no9ek4Ux4: `framer-v-1h0sfqq`,
      vU_gVGWK9: `framer-v-jgbrxz`,
    }),
    (gt = (e, t, n) => (e && t ? `position` : n)),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (_t = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (X = { Desktop: `no9ek4Ux4`, Phone: `cW_6pQo5p`, Tablet: `vU_gVGWK9` }),
    (vt = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (yt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `no9ek4Ux4`,
    })),
    (bt = { component: F, variant: `KaZbXU7Hw` }),
    (Z = { component: F, variant: `ymH31qajX` }),
    (xt = { component: F, variant: `EI0WZtA8z` }),
    (Q = v(
      s(function (e, r) {
        let s = i(null),
          u = r ?? s,
          f = a(),
          { activeLocale: h, setLocale: g } = ce(),
          _ = ue(),
          { style: ne, className: v, layoutId: ae, variant: se, ...w } = yt(e);
        de(n(() => Pe({}, h), [h]));
        let [E, O] = re(se, dt, !1),
          fe = p(mt, We, we, Me),
          k = t(y)?.isLayoutTemplate,
          A = gt(k, !!t(ee)?.transition?.layout),
          j = C(`zdtEVNMr8`),
          me = i(null);
        le();
        let N = C(`jAfeVstFp`),
          P = i(null),
          F = () => (ft() ? E !== `cW_6pQo5p` : !0),
          I = C(`UvGvRcRqz`),
          R = i(null);
        return (
          oe({ "1dzwwdt": xt, bqygee: Z, yjimk7: bt }),
          o(y.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: X,
              primaryVariantId: `no9ek4Ux4`,
              variantClassNames: ht,
            },
            children: l(te, {
              id: ae ?? f,
              children: [
                o(vt, {
                  value: `html body { background: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)); }`,
                }),
                l(d.div, {
                  ...w,
                  className: p(fe, `framer-1h0sfqq`, v),
                  "data-framer-cursor": `yjimk7`,
                  "data-selection": !0,
                  ref: u,
                  style: { ...ne },
                  children: [
                    o(D, {
                      height: 64,
                      width: _?.width || `100vw`,
                      y: 0,
                      children: o(S, {
                        className: `framer-8qmz50-container`,
                        layout: A,
                        layoutScroll: !0,
                        nodeId: `MEGAGJx3X`,
                        scopeId: `ZgFmrycH0`,
                        children: o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: { style: { width: `100%` }, variant: Y(`yAuW89ZY2`) },
                          },
                          children: o(L, {
                            dHsy3xrhB: `bqygee`,
                            height: `100%`,
                            id: `MEGAGJx3X`,
                            layoutId: `MEGAGJx3X`,
                            style: { height: `100%`, width: `100%` },
                            variant: Y(`PJQL26TjW`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    o(x, {
                      breakpoint: E,
                      overrides: { cW_6pQo5p: { height: 50, y: 950 } },
                      children: o(D, {
                        height: 64,
                        width: _?.width || `100vw`,
                        y: 936,
                        children: o(S, {
                          className: `framer-mjxqut-container`,
                          layout: A,
                          layoutScroll: !0,
                          nodeId: `iOJqcL9sV`,
                          scopeId: `ZgFmrycH0`,
                          children: o(x, {
                            breakpoint: E,
                            overrides: { cW_6pQo5p: { variant: Y(`A3DEEFWfS`) } },
                            children: o(B, {
                              height: `100%`,
                              id: `iOJqcL9sV`,
                              layoutId: `iOJqcL9sV`,
                              style: { height: `100%`, width: `100%` },
                              variant: Y(`YN2PiCfKL`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    o(D, {
                      children: o(S, {
                        className: `framer-3j5854-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: A,
                        nodeId: `HD2h671Q_`,
                        scopeId: `ZgFmrycH0`,
                        children: o(z, {
                          height: `100%`,
                          id: `HD2h671Q_`,
                          intensity: 10,
                          layoutId: `HD2h671Q_`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    l(Xe, {
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-3zda5q`,
                      "data-framer-name": `Header`,
                      id: j,
                      layout: A,
                      ref: me,
                      children: [
                        o(pe, {
                          links: [
                            { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            o(D, {
                              height: 67,
                              y: (_?.y || 0) + 0 + 0 + 90 + 0,
                              children: o(S, {
                                className: `framer-q05sql-container`,
                                nodeId: `bfKe8oKr4`,
                                scopeId: `ZgFmrycH0`,
                                children: o(x, {
                                  breakpoint: E,
                                  overrides: {
                                    cW_6pQo5p: { ksVXL1JYm: e[2], variant: Y(`LROrPwHm5`) },
                                    vU_gVGWK9: { ksVXL1JYm: e[1] },
                                  },
                                  children: o(K, {
                                    height: `100%`,
                                    id: `bfKe8oKr4`,
                                    ksVXL1JYm: e[0],
                                    layoutId: `bfKe8oKr4`,
                                    variant: Y(`tEfwcToIF`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: {
                              children: o(c, {
                                children: o(`p`, {
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
                                  children: `SIT Virtual Open House 2025`,
                                }),
                              }),
                            },
                            vU_gVGWK9: {
                              children: o(c, {
                                children: o(`p`, {
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
                                  children: `SIT Virtual Open House 2025`,
                                }),
                              }),
                            },
                          },
                          children: o(b, {
                            __fromCanvasComponent: !0,
                            children: o(c, {
                              children: o(`p`, {
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
                                children: `SIT Virtual Open House 2025`,
                              }),
                            }),
                            className: `framer-1dm10f7`,
                            "data-framer-name": `Title`,
                            fonts: [`FS;Outfit-regular`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-1lq074t`,
                      "data-framer-name": `1Image`,
                      layout: A,
                      children: o(x, {
                        breakpoint: E,
                        overrides: {
                          cW_6pQo5p: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: m((_?.y || 0) + 0 + 454 + 10 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `calc(min(${_?.width || `100vw`}, 1440px) - 20px)`,
                              src: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg`,
                              srcSet: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-f82408.jpg 512w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg.jpg 1024w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg 1920w`,
                            },
                          },
                          vU_gVGWK9: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: m((_?.y || 0) + 0 + 548 + 20 + 0),
                              pixelHeight: 1080,
                              pixelWidth: 1920,
                              sizes: `calc(min(${_?.width || `100vw`}, 1440px) - 48px)`,
                              src: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg`,
                              srcSet: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-f82408.jpg 512w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg.jpg 1024w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg 1920w`,
                            },
                          },
                        },
                        children: o(T, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: m((_?.y || 0) + 0 + 642 + 20 + 0),
                            pixelHeight: 1080,
                            pixelWidth: 1920,
                            sizes: `calc(min(${_?.width || `100vw`}, 1440px) - 48px)`,
                            src: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg`,
                            srcSet: `../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-f82408.jpg 512w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg.jpg 1024w,../../assets/images/g2RmQ7KwMaXqw0XREQiULWgqVyg-263151.jpg 1920w`,
                          },
                          className: `framer-w97l0r`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-13xftsf`,
                      "data-framer-name": `2Text`,
                      layout: A,
                      children: l(`div`, {
                        className: `framer-11vony6`,
                        children: [
                          o(b, {
                            __fromCanvasComponent: !0,
                            children: o(c, {
                              children: o(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                  "--framer-font-family": `"Outfit", sans-serif`,
                                  "--framer-font-weight": `900`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `1.1em`,
                                  "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(255, 12, 34))`,
                                },
                                children: `(01)`,
                              }),
                            }),
                            className: `framer-1xfo7dp`,
                            fonts: [`FS;Outfit-black`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(b, {
                            __fromCanvasComponent: !0,
                            children: o(c, {
                              children: l(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `1.1em`,
                                  "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                },
                                children: [
                                  `Why Me? The client discovered my work through my previous project on `,
                                  o(ie, {
                                    href: { webPageId: `Q1TLs1t8l` },
                                    motionChild: !0,
                                    nodeId: `Qj3PtKCPu`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `ZgFmrycH0`,
                                    smoothScroll: !1,
                                    children: o(d.a, {
                                      className: `framer-styles-preset-tzva5l`,
                                      "data-styles-preset": `t3mZmNsDA`,
                                      children: o(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                          "--framer-font-weight": `700`,
                                        },
                                        children: `Building a 3D Interactive World in Spline`,
                                      }),
                                    }),
                                  }),
                                  `. After seeing that project, the brief was refreshingly simple: "This is exactly what we’re looking for. Let's do this." That clarity allowed us to move straight from vision to execution.`,
                                ],
                              }),
                            }),
                            className: `framer-1pma423`,
                            fonts: [`FS;Outfit-medium`, `FS;Outfit-bold`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    }),
                    l(d.div, {
                      className: `framer-vgn37r`,
                      "data-framer-name": `2Text`,
                      layout: A,
                      children: [
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: {
                              children: o(c, {
                                children: l(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-text-transform": `capitalize`,
                                  },
                                  children: [
                                    `When the `,
                                    o(`span`, {
                                      style: {
                                        "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                        "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        "--framer-font-style": `italic`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(255, 12, 34))`,
                                      },
                                      children: `Vision`,
                                    }),
                                    ` Clicked.`,
                                  ],
                                }),
                              }),
                            },
                            vU_gVGWK9: {
                              children: o(c, {
                                children: l(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `50px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-text-transform": `capitalize`,
                                  },
                                  children: [
                                    `When the `,
                                    o(`span`, {
                                      style: {
                                        "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                        "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        "--framer-font-style": `italic`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(255, 12, 34))`,
                                      },
                                      children: `Vision`,
                                    }),
                                    ` Clicked.`,
                                  ],
                                }),
                              }),
                            },
                          },
                          children: o(b, {
                            __fromCanvasComponent: !0,
                            children: o(c, {
                              children: l(`h2`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `60px`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `0.9em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  "--framer-text-transform": `capitalize`,
                                },
                                children: [
                                  `When the `,
                                  o(`span`, {
                                    style: {
                                      "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                      "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      "--framer-font-style": `italic`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(255, 12, 34))`,
                                    },
                                    children: `Vision`,
                                  }),
                                  ` Clicked.`,
                                ],
                              }),
                            }),
                            className: `framer-1wupr8i`,
                            fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(c, {
                            children: o(`h6`, {
                              className: `framer-styles-preset-15rjf4m`,
                              "data-styles-preset": `sMbK3rYy6`,
                              dir: `auto`,
                              children: `We want to design an environment native to the virtual world, not a digital copy of a physical booth.`,
                            }),
                          }),
                          className: `framer-dxcont`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(d.div, {
                      className: `framer-5aqoud`,
                      "data-framer-name": `2Images`,
                      layout: A,
                      children: [
                        o(`div`, {
                          className: `framer-kgowp`,
                          "data-border": !0,
                          children: o(x, {
                            breakpoint: E,
                            overrides: {
                              cW_6pQo5p: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: m((_?.y || 0) + 0 + 1286.4 + 0 + 0 + 0),
                                  pixelHeight: 756,
                                  pixelWidth: 756,
                                  sizes: `max(min(${_?.width || `100vw`}, 1440px) - 20px, 1px)`,
                                  src: `../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU.jpg`,
                                  srcSet: `../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU-4cac16.jpg 512w,../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU.jpg 756w`,
                                },
                              },
                              vU_gVGWK9: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: m((_?.y || 0) + 0 + 1409 + 0 + 0),
                                  pixelHeight: 756,
                                  pixelWidth: 756,
                                  sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                  src: `../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU.jpg`,
                                  srcSet: `../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU-4cac16.jpg 512w,../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU.jpg 756w`,
                                },
                              },
                            },
                            children: o(T, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: m((_?.y || 0) + 0 + 1542 + 0 + 0),
                                pixelHeight: 756,
                                pixelWidth: 756,
                                sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                src: `../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU.jpg`,
                                srcSet: `../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU-4cac16.jpg 512w,../../assets/images/q34fIw3hdX6vOOcrJBBxzxFgAYU.jpg 756w`,
                              },
                              className: `framer-qjypw4`,
                              fitImageDimension: `height`,
                            }),
                          }),
                        }),
                        o(`div`, {
                          className: `framer-bkiqj5`,
                          "data-border": !0,
                          children: o(x, {
                            breakpoint: E,
                            overrides: {
                              cW_6pQo5p: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: m((_?.y || 0) + 0 + 1286.4 + 0 + 329 + 0),
                                  pixelHeight: 756,
                                  pixelWidth: 756,
                                  sizes: `max(min(${_?.width || `100vw`}, 1440px) - 20px, 1px)`,
                                  src: `../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA.jpg`,
                                  srcSet: `../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA-8bf895.jpg 512w,../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA.jpg 756w`,
                                },
                              },
                              vU_gVGWK9: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: m((_?.y || 0) + 0 + 1409 + 0 + 0),
                                  pixelHeight: 756,
                                  pixelWidth: 756,
                                  sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                  src: `../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA.jpg`,
                                  srcSet: `../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA-8bf895.jpg 512w,../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA.jpg 756w`,
                                },
                              },
                            },
                            children: o(T, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: m((_?.y || 0) + 0 + 1542 + 0 + 0),
                                pixelHeight: 756,
                                pixelWidth: 756,
                                sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                src: `../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA.jpg`,
                                srcSet: `../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA-8bf895.jpg 512w,../../assets/images/TCY9zcgrB0FjAav6UFBb5UTTlA.jpg 756w`,
                              },
                              className: `framer-1ytix9h`,
                              fitImageDimension: `height`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-lrzrva`,
                      layout: A,
                      children: o(`div`, {
                        className: `framer-w9vj54`,
                        "data-framer-name": `GreenBox`,
                        children: l(`div`, {
                          className: `framer-dtos25`,
                          children: [
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `40px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `guide users through a `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `narrative-driven experience`,
                                        }),
                                        ` using motion and interactive elements.`,
                                      ],
                                    }),
                                  }),
                                },
                                vU_gVGWK9: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `50px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `guide users through a `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `narrative-driven experience`,
                                        }),
                                        ` using motion and interactive elements.`,
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: o(b, {
                                __fromCanvasComponent: !0,
                                children: o(c, {
                                  children: l(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `60px`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: [
                                      `guide users through a `,
                                      o(`span`, {
                                        style: {
                                          "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                          "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                        },
                                        children: `narrative-driven experience`,
                                      }),
                                      ` using motion and interactive elements.`,
                                    ],
                                  }),
                                }),
                                className: `framer-o1gr7i`,
                                fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(`div`, {
                              className: `framer-rpthjz`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(c, {
                                    children: o(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                        "--framer-font-family": `"Outfit", sans-serif`,
                                        "--framer-font-weight": `900`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      },
                                      children: `(02)`,
                                    }),
                                  }),
                                  className: `framer-yv0zb5`,
                                  fonts: [`FS;Outfit-black`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(x, {
                                  breakpoint: E,
                                  overrides: {
                                    cW_6pQo5p: {
                                      children: o(c, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-5lkxto`,
                                          "data-styles-preset": `ZtAm2QBrM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          },
                                          children: `I reimagined the SIT experience as a living, interconnected machine. Every section\xA0serves as a visual metaphor for students’ growth. Abstract elements were used so every course feels represented without forcing literal symbols for each one. Everyone should feel like the booth was made for them.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(c, {
                                      children: o(`h6`, {
                                        className: `framer-styles-preset-15rjf4m`,
                                        "data-styles-preset": `sMbK3rYy6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `I reimagined the SIT experience as a living, interconnected machine. Every section\xA0serves as a visual metaphor for students’ growth. Abstract elements were used so every course feels represented without forcing literal symbols for each one. Everyone should feel like the booth was made for them.`,
                                      }),
                                    }),
                                    className: `framer-1nkdgoh`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-1wu91c6`,
                      "data-framer-name": `1Image`,
                      layout: A,
                      children: o(x, {
                        breakpoint: E,
                        overrides: {
                          cW_6pQo5p: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: m((_?.y || 0) + 0 + 2145.4 + 10 + 0),
                              pixelHeight: 541,
                              pixelWidth: 961,
                              sizes: `calc(min(${_?.width || `100vw`}, 1440px) - 20px)`,
                              src: `../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo.jpg`,
                              srcSet: `../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo-2a5617.jpg 512w,../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo.jpg 961w`,
                            },
                          },
                          vU_gVGWK9: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: m((_?.y || 0) + 0 + 2048.4 + 24 + 0),
                              pixelHeight: 541,
                              pixelWidth: 961,
                              sizes: `calc(min(${_?.width || `100vw`}, 1440px) - 48px)`,
                              src: `../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo.jpg`,
                              srcSet: `../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo-2a5617.jpg 512w,../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo.jpg 961w`,
                            },
                          },
                        },
                        children: o(T, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: m((_?.y || 0) + 0 + 2211.4 + 24 + 0),
                            pixelHeight: 541,
                            pixelWidth: 961,
                            sizes: `calc(min(${_?.width || `100vw`}, 1440px) - 48px)`,
                            src: `../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo.jpg`,
                            srcSet: `../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo-2a5617.jpg 512w,../../assets/images/wLAcRK8zJwRb57hgKnselSFgPo.jpg 961w`,
                          },
                          className: `framer-crbllo`,
                          fitImageDimension: `height`,
                        }),
                      }),
                    }),
                    l(d.div, {
                      className: `framer-1vhjlvw`,
                      "data-framer-name": `Video&Text`,
                      layout: A,
                      children: [
                        l(`div`, {
                          className: `framer-1r84fs4`,
                          children: [
                            o(D, {
                              children: o(S, {
                                className: `framer-14lqyir-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `lWl90f7FJ`,
                                rendersWithMotion: !0,
                                scopeId: `ZgFmrycH0`,
                                children: o(Qe, {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: `100%`,
                                  id: `lWl90f7FJ`,
                                  isMixedBorderRadius: !1,
                                  layoutId: `lWl90f7FJ`,
                                  loop: !0,
                                  muted: !0,
                                  objectFit: `cover`,
                                  playing: !1,
                                  poster: `../../assets/images/LnKmxXGUtsRjfyzx1ZfdZn0ZI.png`,
                                  posterEnabled: !0,
                                  srcType: `URL`,
                                  srcUrl: `../../assets/videos/main-ed5fad.mp4`,
                                  startTime: 0,
                                  style: { width: `100%` },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: { y: (_?.y || 0) + 0 + 2474.4 + 10 + 0 + 24 },
                                vU_gVGWK9: { y: (_?.y || 0) + 0 + 2391.4 + 24 + 22 },
                              },
                              children: o(D, {
                                height: 150,
                                y: (_?.y || 0) + 0 + 2554.4 + 24 + 24,
                                children: o(S, {
                                  className: `framer-piyt0y-container`,
                                  nodeId: `fKDz_JnPS`,
                                  scopeId: `ZgFmrycH0`,
                                  children: o(x, {
                                    breakpoint: E,
                                    overrides: {
                                      cW_6pQo5p: { variant: Y(`LNzaPJAUG`) },
                                      vU_gVGWK9: { variant: Y(`goY3o_wgq`) },
                                    },
                                    children: o(G, {
                                      bXhAdK6t9: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                      GhS_QCI5B: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      height: `100%`,
                                      id: `fKDz_JnPS`,
                                      layoutId: `fKDz_JnPS`,
                                      pcPg6wHxb: `flex-end`,
                                      U8o9Wh7JU: xe,
                                      variant: Y(`k1f99Z3n8`),
                                      width: `100%`,
                                      wQLyK_Ukb: `No Memory Orbs were harmed in the making of this project`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-153kcnd`,
                          children: l(`div`, {
                            className: `framer-ywfq8n`,
                            children: [
                              o(x, {
                                breakpoint: E,
                                overrides: {
                                  cW_6pQo5p: {
                                    children: o(c, {
                                      children: l(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `40px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `0.9em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: [
                                          `So... The journey `,
                                          o(`span`, {
                                            style: {
                                              "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                              "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                              "--framer-font-style": `italic`,
                                              "--framer-font-weight": `600`,
                                            },
                                            children: `begins`,
                                          }),
                                          ` with the Memory Orbs.\xA0`,
                                        ],
                                      }),
                                    }),
                                  },
                                  vU_gVGWK9: {
                                    children: o(c, {
                                      children: l(`h2`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `50px`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `0.9em`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: [
                                          `So... The journey `,
                                          o(`span`, {
                                            style: {
                                              "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                              "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                              "--framer-font-style": `italic`,
                                              "--framer-font-weight": `600`,
                                            },
                                            children: `begins`,
                                          }),
                                          ` with the Memory Orbs.\xA0`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `60px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `So... The journey `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `begins`,
                                        }),
                                        ` with the Memory Orbs.\xA0`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-17dokvx`,
                                  fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(b, {
                                __fromCanvasComponent: !0,
                                children: o(c, {
                                  children: l(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-line-height": `1.1em`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: [
                                      o(`span`, {
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                          "--framer-font-family": `"Outfit", sans-serif`,
                                          "--framer-font-weight": `900`,
                                        },
                                        children: `(03)`,
                                      }),
                                      `      Inspired by Disney’s Inside Out, we visualized students' experience\xA0as glowing, precious orbs. These spheres represent `,
                                      o(`strong`, {
                                        children: `the raw experiences, memories, and aspirations that a student brings with them at the beginning of their SIT journey.`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-1o81np9`,
                                fonts: [`FS;Outfit-medium`, `FS;Outfit-bold`, `FS;Outfit-black`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-1q0nhe6`,
                      "data-framer-name": `1Video`,
                      layout: A,
                      children: o(D, {
                        children: o(S, {
                          className: `framer-1eyjxe5-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `FhpBM2VrB`,
                          rendersWithMotion: !0,
                          scopeId: `ZgFmrycH0`,
                          children: o(et, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 15,
                            bottomLeftRadius: 15,
                            bottomRightRadius: 15,
                            controls: !1,
                            height: `100%`,
                            id: `FhpBM2VrB`,
                            isMixedBorderRadius: !1,
                            layoutId: `FhpBM2VrB`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !1,
                            poster: `../../assets/images/mIRmozHoOfvSfdin3PF9ogw4pw.png`,
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: `../../assets/videos/main-fde85e.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 15,
                            topRightRadius: 15,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-1gkh1m7`,
                      layout: A,
                      children: o(`div`, {
                        className: `framer-1p82twn`,
                        "data-framer-name": `GreenBox`,
                        children: l(`div`, {
                          className: `framer-p0cjaa`,
                          children: [
                            l(`div`, {
                              className: `framer-zxf1xt`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(c, {
                                    children: o(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                        "--framer-font-family": `"Outfit", sans-serif`,
                                        "--framer-font-weight": `900`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      },
                                      children: `(04)`,
                                    }),
                                  }),
                                  className: `framer-wq7m2l`,
                                  fonts: [`FS;Outfit-black`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(x, {
                                  breakpoint: E,
                                  overrides: {
                                    cW_6pQo5p: {
                                      children: o(c, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-5lkxto`,
                                          "data-styles-preset": `ZtAm2QBrM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          },
                                          children: `As the orbs move through the central processing core (Curriculum), raw potential condenses into something denser and more focused. A spring mechanism activates, launching these refined orbs to the next section.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(c, {
                                      children: o(`h6`, {
                                        className: `framer-styles-preset-15rjf4m`,
                                        "data-styles-preset": `sMbK3rYy6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `As the orbs move through the central processing core (Curriculum), raw potential condenses into something denser and more focused. A spring mechanism activates, launching these refined orbs to the next section.`,
                                      }),
                                    }),
                                    className: `framer-1h7heh8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `40px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `physically propelling the student into the `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `next phase`,
                                        }),
                                        ` of their growth.`,
                                      ],
                                    }),
                                  }),
                                },
                                vU_gVGWK9: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `50px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `physically propelling the student into the `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `next phase`,
                                        }),
                                        ` of their growth.`,
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: o(b, {
                                __fromCanvasComponent: !0,
                                children: o(c, {
                                  children: l(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `60px`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: [
                                      `physically propelling the student into the `,
                                      o(`span`, {
                                        style: {
                                          "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                          "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                        },
                                        children: `next phase`,
                                      }),
                                      ` of their growth.`,
                                    ],
                                  }),
                                }),
                                className: `framer-ua8sr5`,
                                fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(d.div, {
                      className: `framer-1sfhcma`,
                      "data-framer-name": `1Video`,
                      layout: A,
                      children: [
                        o(D, {
                          children: o(S, {
                            className: `framer-13sw7sc-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `WDmgmyViy`,
                            rendersWithMotion: !0,
                            scopeId: `ZgFmrycH0`,
                            children: o(tt, {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderRadius: 15,
                              bottomLeftRadius: 15,
                              bottomRightRadius: 15,
                              controls: !1,
                              height: `100%`,
                              id: `WDmgmyViy`,
                              isMixedBorderRadius: !1,
                              layoutId: `WDmgmyViy`,
                              loop: !0,
                              muted: !0,
                              objectFit: `cover`,
                              playing: !1,
                              poster: `../../assets/images/0OS8WSn2UQY72kaFLGU7tquKvI.png`,
                              posterEnabled: !0,
                              srcType: `URL`,
                              srcUrl: `../../assets/videos/main-fe6995.mp4`,
                              startTime: 0,
                              style: { height: `100%`, width: `100%` },
                              topLeftRadius: 15,
                              topRightRadius: 15,
                              volume: 25,
                              width: `100%`,
                            }),
                          }),
                        }),
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: { width: `200px`, y: (_?.y || 0) + 0 + 3840.4 + 22 },
                            vU_gVGWK9: { width: `200px`, y: (_?.y || 0) + 0 + 3695.8 + 44 },
                          },
                          children: o(D, {
                            height: 150,
                            y: (_?.y || 0) + 0 + 4068.8 + 48,
                            children: o(S, {
                              className: `framer-1gkqj41-container`,
                              nodeId: `xSJ5_nQGh`,
                              scopeId: `ZgFmrycH0`,
                              children: o(x, {
                                breakpoint: E,
                                overrides: {
                                  cW_6pQo5p: { style: { width: `100%` }, variant: Y(`LNzaPJAUG`) },
                                  vU_gVGWK9: { style: { width: `100%` }, variant: Y(`goY3o_wgq`) },
                                },
                                children: o(G, {
                                  bXhAdK6t9: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                  GhS_QCI5B: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  height: `100%`,
                                  id: `xSJ5_nQGh`,
                                  layoutId: `xSJ5_nQGh`,
                                  pcPg6wHxb: `flex-start`,
                                  U8o9Wh7JU: M,
                                  variant: Y(`k1f99Z3n8`),
                                  width: `100%`,
                                  wQLyK_Ukb: `Clicking the joystick launches a random memory orb, letting you explore its content in the next module!`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-clyzlr`,
                      layout: A,
                      children: o(`div`, {
                        className: `framer-ucua4t`,
                        "data-framer-name": `GreenBox`,
                        children: l(`div`, {
                          className: `framer-b6rdqs`,
                          children: [
                            l(`div`, {
                              className: `framer-1q045ei`,
                              children: [
                                o(x, {
                                  breakpoint: E,
                                  overrides: {
                                    cW_6pQo5p: {
                                      children: o(c, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-5lkxto`,
                                          "data-styles-preset": `ZtAm2QBrM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          },
                                          children: `Now, the orbs dropped into a ball pit full of opportunities. At the heart of the pit sits the Mixer that gently gathers the orbs and guides them toward three distinct exit paths.\xA0​​​​​​`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(c, {
                                      children: o(`h6`, {
                                        className: `framer-styles-preset-15rjf4m`,
                                        "data-styles-preset": `sMbK3rYy6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `Now, the orbs dropped into a ball pit full of opportunities. At the heart of the pit sits the Mixer that gently gathers the orbs and guides them toward three distinct exit paths.\xA0​​​​​​`,
                                      }),
                                    }),
                                    className: `framer-1xgn8qr`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                o(x, {
                                  breakpoint: E,
                                  overrides: {
                                    cW_6pQo5p: {
                                      children: o(c, {
                                        children: o(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                            "--framer-font-family": `"Outfit", sans-serif`,
                                            "--framer-font-weight": `900`,
                                            "--framer-letter-spacing": `0px`,
                                            "--framer-line-height": `1.1em`,
                                            "--framer-text-alignment": `right`,
                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          },
                                          children: `(05)`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(c, {
                                      children: o(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                          "--framer-font-family": `"Outfit", sans-serif`,
                                          "--framer-font-weight": `900`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `1.1em`,
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `(05)`,
                                      }),
                                    }),
                                    className: `framer-t1938q`,
                                    fonts: [`FS;Outfit-black`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `40px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `a perfect metaphor that a degree isn’t a single path, but the `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `momentum`,
                                        }),
                                        ` to choose one.`,
                                      ],
                                    }),
                                  }),
                                },
                                vU_gVGWK9: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `50px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `a perfect metaphor that a degree isn’t a single path, but the `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `momentum`,
                                        }),
                                        ` to choose one.`,
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: o(b, {
                                __fromCanvasComponent: !0,
                                children: o(c, {
                                  children: l(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `60px`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: [
                                      `a perfect metaphor that a degree isn’t a single path, but the `,
                                      o(`span`, {
                                        style: {
                                          "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                          "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                        },
                                        children: `momentum`,
                                      }),
                                      ` to choose one.`,
                                    ],
                                  }),
                                }),
                                className: `framer-nkgoia`,
                                fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(d.div, {
                      className: `framer-1t3i2vg`,
                      "data-framer-name": `1Video`,
                      layout: A,
                      children: [
                        o(D, {
                          children: o(S, {
                            className: `framer-1cr3435-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `NznenSn6Y`,
                            rendersWithMotion: !0,
                            scopeId: `ZgFmrycH0`,
                            children: o(nt, {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderRadius: 15,
                              bottomLeftRadius: 15,
                              bottomRightRadius: 15,
                              controls: !1,
                              height: `100%`,
                              id: `NznenSn6Y`,
                              isMixedBorderRadius: !1,
                              layoutId: `NznenSn6Y`,
                              loop: !0,
                              muted: !0,
                              objectFit: `cover`,
                              playing: !1,
                              poster: `../../assets/images/9jOguu96ryD0vW4uxTX7dkkywLQ.png`,
                              posterEnabled: !0,
                              srcType: `URL`,
                              srcUrl: `../../assets/videos/main-7265eb.mp4`,
                              startTime: 0,
                              style: { height: `100%`, width: `100%` },
                              topLeftRadius: 15,
                              topRightRadius: 15,
                              volume: 25,
                              width: `100%`,
                            }),
                          }),
                        }),
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: { width: `200px`, y: (_?.y || 0) + 0 + 4606.4 + 22 },
                            vU_gVGWK9: { width: `200px`, y: (_?.y || 0) + 0 + 4600.2 + 44 },
                          },
                          children: o(D, {
                            height: 150,
                            y: (_?.y || 0) + 0 + 4983.2 + 48,
                            children: o(S, {
                              className: `framer-oa6gyb-container`,
                              nodeId: `xvjOymMRZ`,
                              scopeId: `ZgFmrycH0`,
                              children: o(x, {
                                breakpoint: E,
                                overrides: {
                                  cW_6pQo5p: { style: { width: `100%` }, variant: Y(`LNzaPJAUG`) },
                                  vU_gVGWK9: { style: { width: `100%` }, variant: Y(`goY3o_wgq`) },
                                },
                                children: o(G, {
                                  bXhAdK6t9: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                  GhS_QCI5B: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  height: `100%`,
                                  id: `xvjOymMRZ`,
                                  layoutId: `xvjOymMRZ`,
                                  pcPg6wHxb: `flex-end`,
                                  U8o9Wh7JU: Be,
                                  variant: Y(`k1f99Z3n8`),
                                  width: `100%`,
                                  wQLyK_Ukb: `Look at that projection ray! Isn’t it beautiful?`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-uli3c6`,
                      layout: A,
                      children: o(`div`, {
                        className: `framer-1b161xq`,
                        "data-framer-name": `GreenBox`,
                        children: l(`div`, {
                          className: `framer-x4b3na`,
                          children: [
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `40px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `where the whole experience clicks: Every `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `Journey`,
                                        }),
                                        ` at SIT Is Worth Watching.`,
                                      ],
                                    }),
                                  }),
                                },
                                vU_gVGWK9: {
                                  children: o(c, {
                                    children: l(`h2`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `50px`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        "--framer-text-transform": `capitalize`,
                                      },
                                      children: [
                                        `where the whole experience clicks: Every `,
                                        o(`span`, {
                                          style: {
                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                            "--framer-font-style": `italic`,
                                            "--framer-font-weight": `600`,
                                          },
                                          children: `Journey`,
                                        }),
                                        ` at SIT Is Worth Watching.`,
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: o(b, {
                                __fromCanvasComponent: !0,
                                children: o(c, {
                                  children: l(`h2`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `60px`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      "--framer-text-transform": `capitalize`,
                                    },
                                    children: [
                                      `where the whole experience clicks: Every `,
                                      o(`span`, {
                                        style: {
                                          "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                          "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                          "--framer-font-style": `italic`,
                                          "--framer-font-weight": `600`,
                                        },
                                        children: `Journey`,
                                      }),
                                      ` at SIT Is Worth Watching.`,
                                    ],
                                  }),
                                }),
                                className: `framer-1h13dtg`,
                                fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(`div`, {
                              className: `framer-ra9vw8`,
                              children: [
                                o(b, {
                                  __fromCanvasComponent: !0,
                                  children: o(c, {
                                    children: o(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                        "--framer-font-family": `"Outfit", sans-serif`,
                                        "--framer-font-weight": `900`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      },
                                      children: `(06)`,
                                    }),
                                  }),
                                  className: `framer-1ibr06r`,
                                  fonts: [`FS;Outfit-black`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(x, {
                                  breakpoint: E,
                                  overrides: {
                                    cW_6pQo5p: {
                                      children: o(c, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-5lkxto`,
                                          "data-styles-preset": `ZtAm2QBrM`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                          },
                                          children: `Users can physically drag and drop a memory orb collected from the previous section onto this platform. Doing so triggers the video player to project the specific story contained inside that orb. One orb. One story.\xA0This mechanic reinforces the idea that every SIT student’s journey has a story worth watching.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: o(b, {
                                    __fromCanvasComponent: !0,
                                    children: o(c, {
                                      children: o(`h6`, {
                                        className: `framer-styles-preset-15rjf4m`,
                                        "data-styles-preset": `sMbK3rYy6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                        },
                                        children: `Users can physically drag and drop a memory orb collected from the previous section onto this platform. Doing so triggers the video player to project the specific story contained inside that orb. One orb. One story.\xA0This mechanic reinforces the idea that every SIT student’s journey has a story worth watching.`,
                                      }),
                                    }),
                                    className: `framer-18embw0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(d.div, {
                      className: `framer-16yxjdb`,
                      layout: A,
                      children: [
                        l(`div`, {
                          className: `framer-lzq8t1`,
                          children: [
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 338,
                                    intrinsicWidth: 600,
                                    loading: m((_?.y || 0) + 0 + 5386.4 + 15 + 0),
                                    pixelHeight: 1080,
                                    pixelWidth: 1080,
                                    sizes: `max((min(${_?.width || `100vw`}, 1440px) - 30px) / 2, 1px)`,
                                    src: `../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-3ee0d9.jpg`,
                                    srcSet: `../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-a4964f.jpg 512w,../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ.jpg 1024w,../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-3ee0d9.jpg 1080w`,
                                  },
                                },
                                vU_gVGWK9: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 338,
                                    intrinsicWidth: 600,
                                    loading: m((_?.y || 0) + 0 + 5504.6 + 29 + 0),
                                    pixelHeight: 1080,
                                    pixelWidth: 1080,
                                    sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                    src: `../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-3ee0d9.jpg`,
                                    srcSet: `../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-a4964f.jpg 512w,../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ.jpg 1024w,../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-3ee0d9.jpg 1080w`,
                                  },
                                },
                              },
                              children: o(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 338,
                                  intrinsicWidth: 600,
                                  loading: m((_?.y || 0) + 0 + 5897.6 + 29 + 0),
                                  pixelHeight: 1080,
                                  pixelWidth: 1080,
                                  sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                  src: `../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-3ee0d9.jpg`,
                                  srcSet: `../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-a4964f.jpg 512w,../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ.jpg 1024w,../../assets/images/LMig9HURcPRvVqgeAptj5VcJgjQ-3ee0d9.jpg 1080w`,
                                },
                                className: `framer-dog3os`,
                                "data-framer-name": `Image1`,
                              }),
                            }),
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: { y: (_?.y || 0) + 0 + 5386.4 + 15 + 10 },
                                vU_gVGWK9: { y: (_?.y || 0) + 0 + 5504.6 + 29 + 20 },
                              },
                              children: o(D, {
                                height: 150,
                                y: (_?.y || 0) + 0 + 5897.6 + 29 + 20,
                                children: o(S, {
                                  className: `framer-1n18az3-container`,
                                  nodeId: `xbTMkb7Yf`,
                                  scopeId: `ZgFmrycH0`,
                                  children: o(x, {
                                    breakpoint: E,
                                    overrides: {
                                      cW_6pQo5p: { variant: Y(`LNzaPJAUG`) },
                                      vU_gVGWK9: { variant: Y(`goY3o_wgq`) },
                                    },
                                    children: o(G, {
                                      bXhAdK6t9: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                      GhS_QCI5B: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      height: `100%`,
                                      id: `xbTMkb7Yf`,
                                      layoutId: `xbTMkb7Yf`,
                                      pcPg6wHxb: `flex-start`,
                                      U8o9Wh7JU: M,
                                      variant: Y(`k1f99Z3n8`),
                                      width: `100%`,
                                      wQLyK_Ukb: `The primary energy source for the entire\xA0booth. Pipes branch out from here\xA0to connect with every other section.`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 338,
                                intrinsicWidth: 600,
                                loading: m((_?.y || 0) + 0 + 5386.4 + 10),
                                pixelHeight: 1080,
                                pixelWidth: 1080,
                                sizes: `max((min(${_?.width || `100vw`}, 1440px) - 30px) / 2, 1px)`,
                                src: `../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-f48b3c.jpg`,
                                srcSet: `../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-928c85.jpg 512w,../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444.jpg 1024w,../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-f48b3c.jpg 1080w`,
                              },
                            },
                            vU_gVGWK9: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 338,
                                intrinsicWidth: 600,
                                loading: m((_?.y || 0) + 0 + 5504.6 + 24),
                                pixelHeight: 1080,
                                pixelWidth: 1080,
                                sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                src: `../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-f48b3c.jpg`,
                                srcSet: `../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-928c85.jpg 512w,../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444.jpg 1024w,../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-f48b3c.jpg 1080w`,
                              },
                            },
                          },
                          children: o(T, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 338,
                              intrinsicWidth: 600,
                              loading: m((_?.y || 0) + 0 + 5897.6 + 24),
                              pixelHeight: 1080,
                              pixelWidth: 1080,
                              sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                              src: `../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-f48b3c.jpg`,
                              srcSet: `../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-928c85.jpg 512w,../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444.jpg 1024w,../../assets/images/1HfFTrD3ihCaG5ZiZfisvK6444-f48b3c.jpg 1080w`,
                            },
                            className: `framer-1p2vcw2`,
                            "data-framer-name": `Image2`,
                          }),
                        }),
                      ],
                    }),
                    l(d.div, {
                      className: `framer-1u4p3d2`,
                      layout: A,
                      children: [
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 338,
                                intrinsicWidth: 600,
                                loading: m((_?.y || 0) + 0 + 5966.4 + 10),
                                pixelHeight: 1080,
                                pixelWidth: 1080,
                                sizes: `max((min(${_?.width || `100vw`}, 1440px) - 30px) / 2, 1px)`,
                                src: `../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-94eeb5.jpg`,
                                srcSet: `../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-879195.jpg 512w,../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ.jpg 1024w,../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-94eeb5.jpg 1080w`,
                              },
                            },
                            vU_gVGWK9: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 338,
                                intrinsicWidth: 600,
                                loading: m((_?.y || 0) + 0 + 6098.6 + 24),
                                pixelHeight: 1080,
                                pixelWidth: 1080,
                                sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                src: `../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-94eeb5.jpg`,
                                srcSet: `../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-879195.jpg 512w,../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ.jpg 1024w,../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-94eeb5.jpg 1080w`,
                              },
                            },
                          },
                          children: o(T, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 338,
                              intrinsicWidth: 600,
                              loading: m((_?.y || 0) + 0 + 6491.6 + 24),
                              pixelHeight: 1080,
                              pixelWidth: 1080,
                              sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                              src: `../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-94eeb5.jpg`,
                              srcSet: `../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-879195.jpg 512w,../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ.jpg 1024w,../../assets/images/s4ErauDUrgnD1ra3U2AGUY40BIQ-94eeb5.jpg 1080w`,
                            },
                            className: `framer-iomzrj`,
                            "data-framer-name": `Image3`,
                          }),
                        }),
                        l(`div`, {
                          className: `framer-krrqbo`,
                          children: [
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: { y: (_?.y || 0) + 0 + 5966.4 + 14.5 + 10 },
                                vU_gVGWK9: { y: (_?.y || 0) + 0 + 6098.6 + 28.5 + 20 },
                              },
                              children: o(D, {
                                height: 150,
                                y: (_?.y || 0) + 0 + 6491.6 + 28.5 + 20,
                                children: o(S, {
                                  className: `framer-e0yrwp-container`,
                                  nodeId: `xcitSihJN`,
                                  scopeId: `ZgFmrycH0`,
                                  children: o(x, {
                                    breakpoint: E,
                                    overrides: {
                                      cW_6pQo5p: { variant: Y(`LNzaPJAUG`) },
                                      vU_gVGWK9: { variant: Y(`goY3o_wgq`) },
                                    },
                                    children: o(G, {
                                      bXhAdK6t9: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                      GhS_QCI5B: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      height: `100%`,
                                      id: `xcitSihJN`,
                                      layoutId: `xcitSihJN`,
                                      pcPg6wHxb: `flex-end`,
                                      U8o9Wh7JU: M,
                                      variant: Y(`k1f99Z3n8`),
                                      width: `100%`,
                                      wQLyK_Ukb: `Have any questions about this open house? Just ask Spark!`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 338,
                                    intrinsicWidth: 600,
                                    loading: m((_?.y || 0) + 0 + 5966.4 + 14.5 + 0),
                                    pixelHeight: 1080,
                                    pixelWidth: 1080,
                                    sizes: `max((min(${_?.width || `100vw`}, 1440px) - 30px) / 2, 1px)`,
                                    src: `../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-df74ce.jpg`,
                                    srcSet: `../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-cee38a.jpg 512w,../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I.jpg 1024w,../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-df74ce.jpg 1080w`,
                                  },
                                },
                                vU_gVGWK9: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 338,
                                    intrinsicWidth: 600,
                                    loading: m((_?.y || 0) + 0 + 6098.6 + 28.5 + 0),
                                    pixelHeight: 1080,
                                    pixelWidth: 1080,
                                    sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                    src: `../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-df74ce.jpg`,
                                    srcSet: `../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-cee38a.jpg 512w,../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I.jpg 1024w,../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-df74ce.jpg 1080w`,
                                  },
                                },
                              },
                              children: o(T, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 338,
                                  intrinsicWidth: 600,
                                  loading: m((_?.y || 0) + 0 + 6491.6 + 28.5 + 0),
                                  pixelHeight: 1080,
                                  pixelWidth: 1080,
                                  sizes: `max((min(${_?.width || `100vw`}, 1440px) - 72px) / 2, 1px)`,
                                  src: `../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-df74ce.jpg`,
                                  srcSet: `../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-cee38a.jpg 512w,../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I.jpg 1024w,../../assets/images/FnmuKqCPy4LZXYzzK976nDe8j9I-df74ce.jpg 1080w`,
                                },
                                className: `framer-q95nzf`,
                                "data-framer-name": `Image4`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-th3k0e`,
                      "data-framer-name": `1Video`,
                      layout: A,
                      children: o(D, {
                        children: o(S, {
                          className: `framer-fnek5e-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `e2z3kfEL9`,
                          rendersWithMotion: !0,
                          scopeId: `ZgFmrycH0`,
                          children: o(rt, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 15,
                            bottomLeftRadius: 15,
                            bottomRightRadius: 15,
                            controls: !1,
                            height: `100%`,
                            id: `e2z3kfEL9`,
                            isMixedBorderRadius: !1,
                            layoutId: `e2z3kfEL9`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !1,
                            poster: `../../assets/images/jQUzosFx7cqYWtyBKWr8pMPu40.png`,
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: `../../assets/videos/main-a44fea.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 15,
                            topRightRadius: 15,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-wdd02p`,
                      "data-framer-name": `1Video`,
                      layout: A,
                      children: o(D, {
                        children: o(S, {
                          className: `framer-12w8rhd-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `SKckzpQOI`,
                          rendersWithMotion: !0,
                          scopeId: `ZgFmrycH0`,
                          children: o(it, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 15,
                            bottomLeftRadius: 15,
                            bottomRightRadius: 15,
                            controls: !1,
                            height: `100%`,
                            id: `SKckzpQOI`,
                            isMixedBorderRadius: !1,
                            layoutId: `SKckzpQOI`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !1,
                            poster: `../../assets/images/djhkiD0gcHFp7HiT8jaqJiZxVls.png`,
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: `../../assets/videos/main-1ec14a.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 15,
                            topRightRadius: 15,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    l(d.div, {
                      className: `framer-1dapu9g`,
                      "data-framer-name": `2Text`,
                      layout: A,
                      children: [
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: {
                              children: o(c, {
                                children: l(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-text-transform": `capitalize`,
                                  },
                                  children: [
                                    `No section felt like an `,
                                    o(`span`, {
                                      style: {
                                        "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                        "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        "--framer-font-style": `italic`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(227, 9, 29))`,
                                      },
                                      children: `isolated`,
                                    }),
                                    ` island.`,
                                  ],
                                }),
                              }),
                            },
                            vU_gVGWK9: {
                              children: o(c, {
                                children: l(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `50px`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `0.9em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    "--framer-text-transform": `capitalize`,
                                  },
                                  children: [
                                    `No section felt like an `,
                                    o(`span`, {
                                      style: {
                                        "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                        "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                        "--framer-font-style": `italic`,
                                        "--framer-font-weight": `600`,
                                        "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(227, 9, 29))`,
                                      },
                                      children: `isolated`,
                                    }),
                                    ` island.`,
                                  ],
                                }),
                              }),
                            },
                          },
                          children: o(b, {
                            __fromCanvasComponent: !0,
                            children: o(c, {
                              children: l(`h2`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `60px`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `0.9em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  "--framer-text-transform": `capitalize`,
                                },
                                children: [
                                  `No section felt like an `,
                                  o(`span`, {
                                    style: {
                                      "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                      "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                      "--framer-font-style": `italic`,
                                      "--framer-font-weight": `600`,
                                      "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(227, 9, 29))`,
                                    },
                                    children: `isolated`,
                                  }),
                                  ` island.`,
                                ],
                              }),
                            }),
                            className: `framer-4ewn14`,
                            fonts: [`FS;Outfit-regular`, `GF;EB Garamond-600italic`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(c, {
                            children: o(`h6`, {
                              className: `framer-styles-preset-15rjf4m`,
                              "data-styles-preset": `sMbK3rYy6`,
                              dir: `auto`,
                              children: `The final result is not a collection of isolated elements, but a cohesive, living ecosystem.`,
                            }),
                          }),
                          className: `framer-18nye2n`,
                          fonts: [`Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    l(d.div, {
                      className: `framer-z3mxuy`,
                      "data-framer-name": `2Text`,
                      layout: A,
                      children: [
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(c, {
                            children: o(`p`, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                "--framer-font-family": `"Outfit", sans-serif`,
                                "--framer-font-weight": `900`,
                                "--framer-letter-spacing": `0px`,
                                "--framer-line-height": `1.1em`,
                                "--framer-text-color": `var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, rgb(255, 12, 34))`,
                              },
                              children: `(07)`,
                            }),
                          }),
                          className: `framer-1p93cby`,
                          fonts: [`FS;Outfit-black`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(b, {
                          __fromCanvasComponent: !0,
                          children: o(c, {
                            children: o(`p`, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `0px`,
                                "--framer-line-height": `1.1em`,
                                "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                              },
                              children: `The pipes and travel path of the Memory Orbs physically connect every module, forming a complete loop from the moment an orb enters the system, moves through it, and is finally viewed. The user witnesses a complete journey.`,
                            }),
                          }),
                          className: `framer-ds5gzs`,
                          fonts: [`FS;Outfit-medium`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-vyg7z3`,
                      "data-framer-name": `WorkHeroVideo`,
                      id: N,
                      layout: A,
                      ref: P,
                      children: o(x, {
                        breakpoint: E,
                        overrides: {
                          cW_6pQo5p: {
                            width: `min(${_?.width || `100vw`}, 1440px)`,
                            y: (_?.y || 0) + 0 + 8144.8 + 0 + 0,
                          },
                          vU_gVGWK9: { y: (_?.y || 0) + 0 + 8395 + 0 },
                        },
                        children: o(D, {
                          height: 600,
                          width: `min(max(${_?.width || `100vw`}, 1px), 1440px)`,
                          y: (_?.y || 0) + 0 + 8862 + 0,
                          children: o(S, {
                            className: `framer-1jyehxl-container`,
                            nodeId: `Y0EtXIuc3`,
                            rendersWithMotion: !0,
                            scopeId: `ZgFmrycH0`,
                            children: o(x, {
                              breakpoint: E,
                              overrides: { cW_6pQo5p: { variant: Y(`bYKt9WsBN`) } },
                              children: o(ot, {
                                __framer__animateOnce: !1,
                                __framer__targets: [{ ref: P, target: `bYKt9WsBN` }],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                HKiOTJCKp: _t(
                                  {
                                    pixelHeight: 1080,
                                    pixelWidth: 1920,
                                    src: `../../assets/images/8INsgmxTI5l2InRSNYJ9O4WBEE.png`,
                                    srcSet: `../../assets/images/8INsgmxTI5l2InRSNYJ9O4WBEE-ce2239.png 512w,../../assets/images/8INsgmxTI5l2InRSNYJ9O4WBEE-a37f26.png 1024w,../../assets/images/8INsgmxTI5l2InRSNYJ9O4WBEE.png 1920w`,
                                  },
                                  ``
                                ),
                                id: `Y0EtXIuc3`,
                                layoutId: `Y0EtXIuc3`,
                                oswkqhnf6: `1dzwwdt`,
                                style: { maxWidth: `100%`, width: `100%` },
                                UsYVabcpi: `rgba(255, 48, 50, 0.29)`,
                                variant: Y(`uDO9ASFiK`),
                                vsl6Y3IvI: `https://vimeo.com/1149017110?fl=tl&fe=ec`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    l(d.div, {
                      className: `framer-d3dgr7`,
                      "data-framer-name": `EndingText`,
                      layout: A,
                      children: [
                        o(x, {
                          breakpoint: E,
                          overrides: {
                            cW_6pQo5p: {
                              children: o(c, {
                                children: l(`h6`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `25px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                  },
                                  children: [
                                    `Built for a digital-native audience, the experience drove measurable results. `,
                                    o(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: `After launch, the client recorded the highest open house applications in SIT’s history for 2025`,
                                    }),
                                    `, demonstrating the impact of immersive, experience-led design.`,
                                  ],
                                }),
                              }),
                            },
                            vU_gVGWK9: {
                              children: o(c, {
                                children: l(`h6`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `30px`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                  },
                                  children: [
                                    `Built for a digital-native audience, the experience drove measurable results. `,
                                    o(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: `After launch, the client recorded the highest open house applications in SIT’s history for 2025`,
                                    }),
                                    `, demonstrating the impact of immersive, experience-led design.`,
                                  ],
                                }),
                              }),
                            },
                          },
                          children: o(b, {
                            __fromCanvasComponent: !0,
                            children: o(c, {
                              children: l(`h6`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `35px`,
                                  "--framer-letter-spacing": `-0.02em`,
                                  "--framer-line-height": `1.1em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                },
                                children: [
                                  `Built for a digital-native audience, the experience drove measurable results. `,
                                  o(`span`, {
                                    style: {
                                      "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                    },
                                    children: `After launch, the client recorded the highest open house applications in SIT’s history for 2025`,
                                  }),
                                  `, demonstrating the impact of immersive, experience-led design.`,
                                ],
                              }),
                            }),
                            className: `framer-srq323`,
                            "data-framer-name": `EndingText`,
                            fonts: [`FS;Outfit-regular`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        F() &&
                          o(x, {
                            breakpoint: E,
                            overrides: {
                              vU_gVGWK9: {
                                children: o(c, {
                                  children: o(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `80px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-letter-spacing": `0.1px`,
                                      "--framer-line-height": `0.8em`,
                                      "--framer-text-color": `rgb(237, 237, 237)`,
                                    },
                                    children: `SI01`,
                                  }),
                                }),
                              },
                            },
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: o(c, {
                                children: o(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `100px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `0.1px`,
                                    "--framer-line-height": `0.8em`,
                                    "--framer-text-color": `rgb(237, 237, 237)`,
                                  },
                                  children: `SI01`,
                                }),
                              }),
                              className: `framer-1x31uou hidden-185fzuy`,
                              "data-framer-name": `ProjectCode`,
                              fonts: [`FS;Outfit-bold`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                      ],
                    }),
                    o(d.div, {
                      className: `framer-1mc6o1q`,
                      layout: A,
                      children: l(`div`, {
                        className: `framer-11cnkhk`,
                        "data-framer-name": `EndingText`,
                        children: [
                          o(x, {
                            breakpoint: E,
                            overrides: {
                              cW_6pQo5p: {
                                children: o(c, {
                                  children: o(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWxpZ2h0`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `25px`,
                                      "--framer-font-weight": `300`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                    },
                                    children: `prefer a visual summary?`,
                                  }),
                                }),
                              },
                            },
                            children: o(b, {
                              __fromCanvasComponent: !0,
                              children: o(c, {
                                children: o(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWxpZ2h0`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `50px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                  },
                                  children: `prefer a visual summary?`,
                                }),
                              }),
                              className: `framer-1rpqknc`,
                              "data-framer-name": `EndingText`,
                              fonts: [`FS;Outfit-light`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          o(pe, {
                            links: [
                              { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `eAldQdI30` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(x, {
                                breakpoint: E,
                                overrides: {
                                  cW_6pQo5p: { y: (_?.y || 0) + 0 + 8932.3 + 0 + 25 + 135 },
                                  vU_gVGWK9: { y: (_?.y || 0) + 0 + 9299 + 0 + 50 + 260 },
                                },
                                children: o(D, {
                                  height: 54,
                                  y: (_?.y || 0) + 0 + 9782 + 0 + 50 + 260,
                                  children: o(S, {
                                    className: `framer-vat503-container`,
                                    nodeId: `Id44ZGbKD`,
                                    scopeId: `ZgFmrycH0`,
                                    children: o(x, {
                                      breakpoint: E,
                                      overrides: {
                                        cW_6pQo5p: { JQPbxOZrF: e[2] },
                                        vU_gVGWK9: { JQPbxOZrF: e[1] },
                                      },
                                      children: o(U, {
                                        Gh9QOfeLM: `back to overview`,
                                        height: `100%`,
                                        id: `Id44ZGbKD`,
                                        JQPbxOZrF: e[0],
                                        layoutId: `Id44ZGbKD`,
                                        variant: Y(`OUeB3QJig`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                    o(d.div, {
                      className: `framer-1c6f6m`,
                      "data-framer-name": `IndexFooter`,
                      id: I,
                      layout: A,
                      ref: R,
                      children: o(x, {
                        breakpoint: E,
                        overrides: {
                          cW_6pQo5p: { y: (_?.y || 0) + 0 + 9196.3 + 100 + 220 },
                          vU_gVGWK9: { y: (_?.y || 0) + 0 + 9713 + 100 + 220 },
                        },
                        children: o(D, {
                          height: 360,
                          width: `calc(${_?.width || `100vw`} - 48px)`,
                          y: (_?.y || 0) + 0 + 10196 + 100 + 220,
                          children: o(S, {
                            className: `framer-1chlc2w-container`,
                            nodeId: `pVv53W1Ug`,
                            rendersWithMotion: !0,
                            scopeId: `ZgFmrycH0`,
                            children: o(x, {
                              breakpoint: E,
                              overrides: {
                                cW_6pQo5p: {
                                  __framer__targets: [{ ref: R, target: `nOKgs1SEl` }],
                                  variant: Y(`GVYGZcCCV`),
                                },
                                vU_gVGWK9: {
                                  __framer__targets: [{ ref: R, target: `dgixlhc1H` }],
                                  variant: Y(`H6h6fviq3`),
                                },
                              },
                              children: o(lt, {
                                __framer__animateOnce: !1,
                                __framer__targets: [{ ref: R, target: `XolEYst5Z` }],
                                __framer__threshold: 0,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `pVv53W1Ug`,
                                layoutId: `pVv53W1Ug`,
                                style: { width: `100%` },
                                variant: Y(`ZRUlqdzB5`),
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
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-JJaGr.framer-1085hvv, .framer-JJaGr .framer-1085hvv { display: block; }`,
        `.framer-JJaGr.framer-1h0sfqq { --selection-background-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01) /* {"name":"Orange"} */; --selection-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-JJaGr .framer-8qmz50-container { flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,
        `.framer-JJaGr .framer-mjxqut-container { bottom: 0px; flex: none; height: 64px; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; z-index: 3; }`,
        `.framer-JJaGr .framer-3j5854-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-JJaGr .framer-3zda5q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: visible; padding: 90px 50px 5px 50px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-q05sql-container, .framer-JJaGr .framer-vat503-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-JJaGr .framer-1dm10f7, .framer-JJaGr .framer-1wupr8i, .framer-JJaGr .framer-dxcont, .framer-JJaGr .framer-1nkdgoh, .framer-JJaGr .framer-1h7heh8, .framer-JJaGr .framer-1xgn8qr, .framer-JJaGr .framer-18embw0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 50%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-1lq074t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 20px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-w97l0r, .framer-JJaGr .framer-crbllo { border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JJaGr .framer-13xftsf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 120px 50px 120px 50px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-11vony6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; }`,
        `.framer-JJaGr .framer-1xfo7dp, .framer-JJaGr .framer-yv0zb5, .framer-JJaGr .framer-wq7m2l, .framer-JJaGr .framer-t1938q, .framer-JJaGr .framer-1ibr06r, .framer-JJaGr .framer-1p93cby { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JJaGr .framer-1pma423 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-vgn37r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 120px 50px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-5aqoud { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-kgowp, .framer-JJaGr .framer-bkiqj5 { --border-bottom-width: 1px; --border-color: var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, #e0e0e0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JJaGr .framer-qjypw4, .framer-JJaGr .framer-1ytix9h { flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-JJaGr .framer-lrzrva, .framer-JJaGr .framer-1gkh1m7, .framer-JJaGr .framer-clyzlr, .framer-JJaGr .framer-uli3c6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-w9vj54, .framer-JJaGr .framer-ucua4t { align-content: center; align-items: center; background-color: var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, #e60719); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 80px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JJaGr .framer-dtos25, .framer-JJaGr .framer-p0cjaa, .framer-JJaGr .framer-x4b3na { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 992px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-o1gr7i, .framer-JJaGr .framer-ua8sr5, .framer-JJaGr .framer-nkgoia, .framer-JJaGr .framer-1h13dtg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 52%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-rpthjz, .framer-JJaGr .framer-zxf1xt, .framer-JJaGr .framer-1q045ei, .framer-JJaGr .framer-ra9vw8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1wu91c6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1vhjlvw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 600px; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1r84fs4 { align-content: center; align-items: center; background-color: #f4f4f4; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JJaGr .framer-14lqyir-container { flex: 1 0 0px; height: auto; pointer-events: none; position: relative; width: 1px; }`,
        `.framer-JJaGr .framer-piyt0y-container { flex: none; height: auto; position: absolute; right: 24px; top: 24px; width: auto; z-index: 1; }`,
        `.framer-JJaGr .framer-153kcnd { align-content: center; align-items: center; background-color: var(--token-83c826f9-daba-4d6f-97cc-fac808f5d79a, #e60719); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JJaGr .framer-ywfq8n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 70px 0px 70px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-17dokvx, .framer-JJaGr .framer-1o81np9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-1q0nhe6, .framer-JJaGr .framer-1t3i2vg, .framer-JJaGr .framer-th3k0e, .framer-JJaGr .framer-wdd02p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1eyjxe5-container, .framer-JJaGr .framer-13sw7sc-container, .framer-JJaGr .framer-1cr3435-container, .framer-JJaGr .framer-fnek5e-container, .framer-JJaGr .framer-12w8rhd-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 113px); pointer-events: none; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1p82twn, .framer-JJaGr .framer-1b161xq { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 80px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JJaGr .framer-1sfhcma { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1gkqj41-container { flex: none; height: auto; left: 49px; position: absolute; top: 48px; width: auto; }`,
        `.framer-JJaGr .framer-b6rdqs { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 992px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-oa6gyb-container { flex: none; height: auto; position: absolute; right: 52px; top: 48px; width: auto; z-index: 1; }`,
        `.framer-JJaGr .framer-16yxjdb, .framer-JJaGr .framer-1u4p3d2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px 24px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-lzq8t1, .framer-JJaGr .framer-krrqbo { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-JJaGr .framer-dog3os, .framer-JJaGr .framer-iomzrj { aspect-ratio: 1.0070175438596491 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 199px); overflow: visible; pointer-events: none; position: relative; width: 1px; }`,
        `.framer-JJaGr .framer-1n18az3-container { flex: none; height: auto; left: 20px; position: absolute; top: 20px; width: auto; z-index: 1; }`,
        `.framer-JJaGr .framer-1p2vcw2, .framer-JJaGr .framer-q95nzf { aspect-ratio: 1.0052631578947369 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 199px); overflow: visible; pointer-events: none; position: relative; width: 1px; }`,
        `.framer-JJaGr .framer-e0yrwp-container { flex: none; height: auto; position: absolute; right: 20px; top: 20px; width: auto; z-index: 1; }`,
        `.framer-JJaGr .framer-1dapu9g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 150px 50px 100px 50px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-4ewn14, .framer-JJaGr .framer-18nye2n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 43%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-z3mxuy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 220px 50px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-ds5gzs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 50%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-vyg7z3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1jyehxl-container { flex: 1 0 0px; height: auto; max-width: 1440px; position: relative; width: 1px; }`,
        `.framer-JJaGr .framer-d3dgr7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 120px 50px 120px 50px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-srq323 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 60%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-1x31uou { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-JJaGr .framer-1mc6o1q { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-11cnkhk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 50px; position: relative; width: 1px; }`,
        `.framer-JJaGr .framer-1rpqknc { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JJaGr .framer-1c6f6m { align-content: center; align-items: center; background-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 24px 100px 24px; position: relative; width: 100%; }`,
        `.framer-JJaGr .framer-1chlc2w-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Ue,
        ...ke,
        ...Oe,
        `.framer-JJaGr[data-selection="true"] * ::selection, .framer-JJaGr [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-JJaGr[data-border="true"]::after, .framer-JJaGr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-JJaGr.framer-1h0sfqq { width: 810px; } .framer-JJaGr .framer-1dm10f7, .framer-JJaGr .framer-1wupr8i, .framer-JJaGr .framer-dxcont, .framer-JJaGr .framer-o1gr7i, .framer-JJaGr .framer-ua8sr5, .framer-JJaGr .framer-nkgoia, .framer-JJaGr .framer-1h13dtg, .framer-JJaGr .framer-4ewn14, .framer-JJaGr .framer-18nye2n { width: 60%; } .framer-JJaGr .framer-13xftsf { padding: 100px 50px 100px 50px; } .framer-JJaGr .framer-vgn37r { padding: 10px 50px 120px 50px; } .framer-JJaGr .framer-dtos25 { gap: 60px; } .framer-JJaGr .framer-1vhjlvw { align-content: center; align-items: center; gap: 25px; height: 400px; } .framer-JJaGr .framer-piyt0y-container { right: 22px; top: 22px; } .framer-JJaGr .framer-153kcnd { gap: 15px; } .framer-JJaGr .framer-ywfq8n { gap: 40px; padding: 30px; } .framer-JJaGr .framer-1gkqj41-container { left: 44px; top: 44px; width: 200px; } .framer-JJaGr .framer-oa6gyb-container { right: 44px; top: 44px; width: 200px; } .framer-JJaGr .framer-1dapu9g { padding: 125px 50px 100px 50px; } .framer-JJaGr .framer-z3mxuy { padding: 0px 50px 180px 50px; } .framer-JJaGr .framer-srq323 { width: 70%; }}`,
        `@media (max-width: 809.98px) { .framer-JJaGr.framer-1h0sfqq { width: 390px; } .framer-JJaGr .framer-8qmz50-container { height: auto; } .framer-JJaGr .framer-mjxqut-container { height: 50px; } .framer-JJaGr .framer-3zda5q { padding: 90px 24px 5px 24px; } .framer-JJaGr .framer-1dm10f7 { max-width: 500px; width: 100%; } .framer-JJaGr .framer-1lq074t, .framer-JJaGr .framer-lrzrva, .framer-JJaGr .framer-1wu91c6, .framer-JJaGr .framer-1gkh1m7, .framer-JJaGr .framer-1sfhcma, .framer-JJaGr .framer-clyzlr { padding: 10px 10px 0px 10px; } .framer-JJaGr .framer-13xftsf { align-content: flex-end; align-items: flex-end; flex-direction: column; padding: 60px 50px 30px 50px; } .framer-JJaGr .framer-11vony6, .framer-JJaGr .framer-1nkdgoh, .framer-JJaGr .framer-1h7heh8, .framer-JJaGr .framer-1xgn8qr, .framer-JJaGr .framer-18embw0 { width: 70%; } .framer-JJaGr .framer-1xfo7dp, .framer-JJaGr .framer-1p93cby { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-JJaGr .framer-vgn37r { padding: 60px 24px 100px 24px; } .framer-JJaGr .framer-1wupr8i, .framer-JJaGr .framer-dxcont, .framer-JJaGr .framer-o1gr7i, .framer-JJaGr .framer-ua8sr5, .framer-JJaGr .framer-nkgoia, .framer-JJaGr .framer-1h13dtg, .framer-JJaGr .framer-4ewn14, .framer-JJaGr .framer-18nye2n, .framer-JJaGr .framer-ds5gzs, .framer-JJaGr .framer-srq323 { width: 100%; } .framer-JJaGr .framer-5aqoud { flex-direction: column; gap: 10px; padding: 0px 10px 0px 10px; } .framer-JJaGr .framer-kgowp, .framer-JJaGr .framer-bkiqj5, .framer-JJaGr .framer-1jyehxl-container { flex: none; width: 100%; } .framer-JJaGr .framer-w9vj54, .framer-JJaGr .framer-1p82twn, .framer-JJaGr .framer-ucua4t, .framer-JJaGr .framer-1b161xq { padding: 24px; } .framer-JJaGr .framer-dtos25 { gap: 25px; } .framer-JJaGr .framer-rpthjz, .framer-JJaGr .framer-zxf1xt, .framer-JJaGr .framer-1q045ei, .framer-JJaGr .framer-ra9vw8 { gap: 0px; justify-content: center; } .framer-JJaGr .framer-yv0zb5, .framer-JJaGr .framer-wq7m2l, .framer-JJaGr .framer-t1938q, .framer-JJaGr .framer-1ibr06r { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-JJaGr .framer-1vhjlvw { align-content: center; align-items: center; flex-direction: column; gap: 10px; padding: 10px 10px 0px 10px; } .framer-JJaGr .framer-1r84fs4 { height: 1px; width: 100%; } .framer-JJaGr .framer-153kcnd { flex: none; gap: 15px; height: min-content; padding: 24px; width: 100%; } .framer-JJaGr .framer-ywfq8n { gap: 20px; padding: 10px; } .framer-JJaGr .framer-1q0nhe6, .framer-JJaGr .framer-1t3i2vg, .framer-JJaGr .framer-th3k0e, .framer-JJaGr .framer-wdd02p { flex-direction: column; padding: 10px 10px 0px 10px; } .framer-JJaGr .framer-p0cjaa, .framer-JJaGr .framer-b6rdqs, .framer-JJaGr .framer-x4b3na { gap: 30px; } .framer-JJaGr .framer-1gkqj41-container { left: 22px; top: 22px; width: 200px; } .framer-JJaGr .framer-oa6gyb-container { right: 22px; top: 22px; width: 200px; } .framer-JJaGr .framer-uli3c6 { padding: 24px 10px 0px 10px; } .framer-JJaGr .framer-16yxjdb, .framer-JJaGr .framer-1u4p3d2 { gap: 10px; padding: 10px 10px 0px 10px; } .framer-JJaGr .framer-1n18az3-container { left: 10px; top: 10px; } .framer-JJaGr .framer-e0yrwp-container { right: 10px; top: 10px; } .framer-JJaGr .framer-1dapu9g { padding: 80px 24px 60px 24px; } .framer-JJaGr .framer-z3mxuy { align-content: flex-end; align-items: flex-end; flex-direction: column; padding: 0px 50px 80px 50px; } .framer-JJaGr .framer-vyg7z3 { flex-direction: column; } .framer-JJaGr .framer-d3dgr7 { flex-direction: column; padding: 80px 24px 80px 24px; } .framer-JJaGr .framer-11cnkhk { padding: 25px 24px 50px 24px; }}`,
      ],
      `framer-JJaGr`
    )),
    (St = Q),
    (Q.displayName = `Case Study / Cs Leveling Up Rev Illimité`),
    (Q.defaultProps = { height: 13404, width: 1200 }),
    fe(
      Q,
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
              url: `../../assets/misc/QWBFHLNJNNJC3X2PA4WN6Q2H5G7OG6MX.woff2`,
              weight: `900`,
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
            {
              cssFamilyName: `EB Garamond`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `EB Garamond`,
              url: `https://fonts.gstatic.com/s/ebgaramond/v32/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7diR49_WamXgXFI.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/W7JHARPQSG6P4YAUJKIMUM6JNAX2RFW3.woff2`,
              weight: `300`,
            },
          ],
        },
        ...Ke,
        ...qe,
        ...Je,
        ...Ye,
        ...Ze,
        ...$e,
        ...at,
        ...st,
        ...ct,
        ...ut,
        ...j(He),
        ...j(je),
        ...j(Ae),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          g(L, {}, t),
          g(B, {}, t),
          g(K, {}, t),
          g(G, {}, t),
          g(W, {}, t),
          g(U, {}, t),
          g(N, {}, t),
        ])
      ),
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerZgFmrycH0`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vU_gVGWK9":{"layout":["fixed","auto"]},"cW_6pQo5p":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"zdtEVNMr8":{"pattern":":zdtEVNMr8","name":"top"},"jAfeVstFp":{"pattern":":jAfeVstFp","name":"workherovideo"},"UvGvRcRqz":{"pattern":":UvGvRcRqz","name":"indexfooter"}}`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `13404`,
            framerContractVersion: `1`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, St as default, pt as queryParamNames };
//# sourceMappingURL=Tcp9y-Q5p-BDK7loAw8jUK2XZgKbBa8YpkUhTTC85WU.CBBG4hFP.mjs.map
