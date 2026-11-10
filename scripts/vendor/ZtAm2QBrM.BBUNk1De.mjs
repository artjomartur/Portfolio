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
  o as l,
} from "./react.Bb_yyrg0.mjs";
import { T as u, a as d, r as f, t as p } from "./motion.Dq3vMtKA.mjs";
import {
  A as m,
  G as h,
  T as g,
  _t as _,
  b as v,
  dt as y,
  f as b,
  gt as x,
  j as S,
  lt as C,
  nt as w,
  r as T,
  tt as E,
  w as D,
} from "./framer.cs1Z8Vda.mjs";
function O(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V = e(() => {
    (l(),
      h(),
      p(),
      r(),
      (k = { a5Phnc8u3: { hover: !0 } }),
      (A = [`tEfwcToIF`, `LROrPwHm5`, `a5Phnc8u3`, `EN1TpzyTd`]),
      (j = `framer-qAxyi`),
      (M = {
        a5Phnc8u3: `framer-v-1tuyl44`,
        EN1TpzyTd: `framer-v-ki39og`,
        LROrPwHm5: `framer-v-1etdjbl`,
        tEfwcToIF: `framer-v-1b43a1q`,
      }),
      (N = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (P = ({ value: e, children: r }) => {
        let i = t(d),
          a = e ?? i.transition,
          s = n(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return o(d.Provider, { value: s, children: r });
      }),
      (F = {
        Desktop_FinalState: `a5Phnc8u3`,
        Desktop: `tEfwcToIF`,
        Phone_FinalState: `EN1TpzyTd`,
        Phone: `LROrPwHm5`,
      }),
      (I = u.create(c)),
      (L = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        ksVXL1JYm: n ?? i.ksVXL1JYm,
        variant: F[i.variant] ?? i.variant ?? `tEfwcToIF`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = _(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            s = a(),
            { activeLocale: l, setLocale: d } = C();
          w();
          let { style: p, className: h, layoutId: g, variant: _, ksVXL1JYm: S, ...T } = L(e),
            {
              baseVariant: D,
              classNames: F,
              clearLoadingGesture: z,
              gestureHandlers: B,
              gestureVariant: V,
              isLoading: H,
              setGestureState: U,
              setVariant: W,
              variants: G,
            } = x({
              cycleOrder: A,
              defaultVariant: `tEfwcToIF`,
              enabledGestures: k,
              ref: r,
              variant: _,
              variantClassNames: M,
            }),
            K = R(e, G),
            { activeVariantCallback: q, delay: J } = E(D);
          y(D, {
            default: q(async (...e) => {
              await J(() => W(`a5Phnc8u3`), 800);
            }),
            EN1TpzyTd: void 0,
            LROrPwHm5: q(async (...e) => {
              await J(() => W(`EN1TpzyTd`), 1200);
            }),
          });
          let Y = m(j);
          return o(f, {
            id: g ?? s,
            children: o(I, {
              animate: G,
              initial: !1,
              children: o(P, {
                value: N,
                children: o(b, {
                  href: S,
                  motionChild: !0,
                  nodeId: `tEfwcToIF`,
                  openInNewTab: !1,
                  scopeId: `sMt0VDlkY`,
                  children: o(u.a, {
                    ...T,
                    ...B,
                    className: `${m(Y, `framer-1b43a1q`, h, F)} framer-p9bpye`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    layoutDependency: K,
                    layoutId: `tEfwcToIF`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                      borderBottomLeftRadius: 35,
                      borderBottomRightRadius: 35,
                      borderTopLeftRadius: 35,
                      borderTopRightRadius: 35,
                      ...p,
                    },
                    variants: {
                      "a5Phnc8u3-hover": {
                        backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                      },
                      a5Phnc8u3: {
                        backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                      },
                      EN1TpzyTd: {
                        backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                      },
                      LROrPwHm5: {
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                      },
                    },
                    ...O(
                      {
                        "a5Phnc8u3-hover": { "data-framer-name": void 0 },
                        a5Phnc8u3: { "data-framer-name": `Desktop_FinalState` },
                        EN1TpzyTd: {
                          "data-framer-name": `Phone_FinalState`,
                          "data-highlight": void 0,
                        },
                        LROrPwHm5: { "data-framer-name": `Phone` },
                      },
                      D,
                      V
                    ),
                    children: o(v, {
                      __fromCanvasComponent: !0,
                      children: o(c, {
                        children: o(u.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `15px`,
                            "--framer-font-weight": `600`,
                            "--framer-line-height": `1em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: `back to overview`,
                        }),
                      }),
                      className: `framer-13114f`,
                      fonts: [`FS;Outfit-semibold`],
                      layoutDependency: K,
                      layoutId: `EXpwmjVoM`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...O(
                        {
                          "a5Phnc8u3-hover": {
                            children: o(c, {
                              children: o(u.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: `back to overview`,
                              }),
                            }),
                          },
                          a5Phnc8u3: {
                            children: o(c, {
                              children: o(u.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: `case study`,
                              }),
                            }),
                          },
                          EN1TpzyTd: {
                            children: o(c, {
                              children: o(u.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: `case study`,
                              }),
                            }),
                            fonts: [`FS;Outfit-medium`],
                          },
                          LROrPwHm5: {
                            children: o(c, {
                              children: o(u.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: `back to overview`,
                              }),
                            }),
                            fonts: [`FS;Outfit-medium`],
                          },
                        },
                        D,
                        V
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qAxyi.framer-p9bpye, .framer-qAxyi .framer-p9bpye { display: block; }`,
          `.framer-qAxyi.framer-1b43a1q { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 67px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-qAxyi .framer-13114f { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-qAxyi.framer-v-1etdjbl.framer-1b43a1q, .framer-qAxyi.framer-v-ki39og.framer-1b43a1q { height: 46px; padding: 12px; }`,
          `.framer-qAxyi.framer-v-1etdjbl .framer-13114f, .framer-qAxyi.framer-v-ki39og .framer-13114f { order: 0; }`,
          `.framer-qAxyi.framer-v-1tuyl44.framer-1b43a1q { cursor: pointer; }`,
        ],
        `framer-qAxyi`
      )),
      (B = z),
      (z.displayName = `CaseStudyButton`),
      (z.defaultProps = { height: 67, width: 154 }),
      g(z, {
        variant: {
          options: [`tEfwcToIF`, `LROrPwHm5`, `a5Phnc8u3`, `EN1TpzyTd`],
          optionTitles: [`Desktop`, `Phone`, `Desktop_FinalState`, `Phone_FinalState`],
          title: `Variant`,
          type: T.Enum,
        },
        ksVXL1JYm: { title: `Link`, type: T.Link },
      }),
      D(
        z,
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
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/3JX43FCBGINLH25MK4NSVCHCDXUSMHUE.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  H,
  U,
  W,
  G = e(() => {
    (h(),
      S.loadFonts([`FS;Outfit-regular`, `FS;Outfit-bold`]),
      (H = [
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
              url: `../../assets/misc/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (U = [
        `.framer-rxYNm .framer-styles-preset-15rjf4m:not(.rich-text-wrapper), .framer-rxYNm .framer-styles-preset-15rjf4m.rich-text-wrapper h6 { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (W = `framer-rxYNm`));
  }),
  K,
  q,
  J,
  Y = e(() => {
    (h(),
      S.loadFonts([`FS;Outfit-medium`, `FS;Outfit-bold`]),
      (K = [
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
      ]),
      (q = [
        `.framer-q7IQ5 .framer-styles-preset-5lkxto:not(.rich-text-wrapper), .framer-q7IQ5 .framer-styles-preset-5lkxto.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (J = `framer-q7IQ5`));
  });
export { W as a, G as c, Y as i, V as l, q as n, U as o, K as r, H as s, J as t, B as u };
//# sourceMappingURL=ZtAm2QBrM.BBUNk1De.mjs.map
