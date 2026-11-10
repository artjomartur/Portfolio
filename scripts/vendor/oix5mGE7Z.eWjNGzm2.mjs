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
import { T as d, a as f, r as p, t as m } from "./motion.Dq3vMtKA.mjs";
import {
  A as h,
  G as g,
  T as _,
  _t as v,
  b as y,
  gt as b,
  ht as x,
  l as S,
  lt as C,
  nt as w,
  r as T,
  w as E,
} from "./framer.cs1Z8Vda.mjs";
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F = e(() => {
    (u(),
      g(),
      r(),
      (D = `var(--framer-icon-mask)`),
      (O = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (k = d.create(O)),
      (A = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(k, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (j = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10 4.02 L 10 4 M 10 8 L 10 16 M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z" fill="transparent" height="20px" id="MOlRZP19_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (M = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (N = v(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = M(e),
            u = x(`2187526720`, j);
          return o(A, {
            ...l,
            className: h(`framer-kYvnf`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-kYvnf { -webkit-mask: ${D}; aspect-ratio: 1; display: block; mask: ${D}; width: 24px; }`,
        ],
        `framer-kYvnf`
      )),
      (N.displayName = `Info`),
      (P = N),
      _(N, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: T.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: T.Number,
        },
      }));
  });
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X = e(() => {
    (u(),
      g(),
      m(),
      r(),
      F(),
      (L = { goY3o_wgq: { hover: !0 }, k1f99Z3n8: { hover: !0 }, LNzaPJAUG: { hover: !0 } }),
      (R = [`k1f99Z3n8`, `goY3o_wgq`, `LNzaPJAUG`]),
      (z = `framer-Wu5B7`),
      (B = {
        goY3o_wgq: `framer-v-cmys3j`,
        k1f99Z3n8: `framer-v-1wtosky`,
        LNzaPJAUG: `framer-v-q09w7v`,
      }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: r }) => {
        let i = t(f),
          a = e ?? i.transition,
          s = n(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return o(f.Provider, { value: s, children: r });
      }),
      (U = { Desktop: `k1f99Z3n8`, Phone: `LNzaPJAUG`, Tablet: `goY3o_wgq` }),
      (W = d.create(c)),
      (G = { Center: `center`, End: `flex-end`, Start: `flex-start` }),
      (K = ({
        align: e,
        buttonColor: t,
        height: n,
        icon: r,
        iconColor: i,
        id: a,
        text: o,
        width: s,
        ...c
      }) => ({
        ...c,
        bXhAdK6t9:
          i ?? c.bXhAdK6t9 ?? `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
        GhS_QCI5B:
          t ??
          c.GhS_QCI5B ??
          `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
        pcPg6wHxb: G[e] ?? e ?? c.pcPg6wHxb ?? `center`,
        U8o9Wh7JU: r ?? c.U8o9Wh7JU ?? P,
        variant: U[c.variant] ?? c.variant ?? `k1f99Z3n8`,
        wQLyK_Ukb: o ?? c.wQLyK_Ukb ?? `Type infomation here`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = v(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            s = a(),
            { activeLocale: u, setLocale: f } = C();
          w();
          let {
              style: m,
              className: g,
              layoutId: _,
              variant: v,
              wQLyK_Ukb: x,
              pcPg6wHxb: T,
              U8o9Wh7JU: E,
              bXhAdK6t9: D,
              GhS_QCI5B: O,
              ...k
            } = K(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: F,
              setGestureState: U,
              setVariant: G,
              variants: J,
            } = b({
              cycleOrder: R,
              defaultVariant: `k1f99Z3n8`,
              enabledGestures: L,
              ref: r,
              variant: v,
              variantClassNames: B,
            }),
            Y = q(e, J),
            X = h(z);
          return o(p, {
            id: _ ?? s,
            children: o(W, {
              animate: J,
              initial: !1,
              children: o(H, {
                value: V,
                children: l(d.div, {
                  ...k,
                  ...N,
                  className: h(X, `framer-1wtosky`, g, j),
                  "data-framer-name": `Desktop`,
                  layoutDependency: Y,
                  layoutId: `k1f99Z3n8`,
                  ref: r,
                  style: { "--8no1iv": T, ...m },
                  ...I(
                    {
                      "goY3o_wgq-hover": { "data-framer-name": void 0 },
                      "k1f99Z3n8-hover": { "data-framer-name": void 0 },
                      "LNzaPJAUG-hover": { "data-framer-name": void 0 },
                      goY3o_wgq: { "data-framer-name": `Tablet` },
                      LNzaPJAUG: { "data-framer-name": `Phone` },
                    },
                    A,
                    P
                  ),
                  children: [
                    o(d.div, {
                      className: `framer-iajiiy`,
                      layoutDependency: Y,
                      layoutId: `UTYPSsf4T`,
                      style: {
                        backgroundColor: O,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                      },
                      variants: {
                        LNzaPJAUG: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                      },
                      children: o(S, {
                        animated: !0,
                        className: `framer-oo8mr5`,
                        Component: E,
                        layoutDependency: Y,
                        layoutId: `HvtkFgrfT`,
                        style: { "--1ww558a": 2, "--4rxgx6": D },
                      }),
                    }),
                    o(d.div, {
                      className: `framer-1madkd4`,
                      layoutDependency: Y,
                      layoutId: `ozFZAdFMl`,
                      style: {
                        backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        opacity: 0,
                      },
                      variants: {
                        "goY3o_wgq-hover": { opacity: 1 },
                        "k1f99Z3n8-hover": { opacity: 1 },
                        "LNzaPJAUG-hover": { opacity: 1 },
                      },
                      children: o(y, {
                        __fromCanvasComponent: !0,
                        children: o(c, {
                          children: o(d.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                              "--framer-font-size": `15px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `1em`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                            },
                            children: `Type infomation here`,
                          }),
                        }),
                        className: `framer-w8kb6u`,
                        fonts: [`FS;Outfit-medium`],
                        layoutDependency: Y,
                        layoutId: `D3164AFux`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        },
                        text: x,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...I(
                          {
                            goY3o_wgq: {
                              children: o(c, {
                                children: o(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Type infomation here`,
                                }),
                              }),
                            },
                            LNzaPJAUG: {
                              children: o(c, {
                                children: o(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Type infomation here`,
                                }),
                              }),
                            },
                          },
                          A,
                          P
                        ),
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
          `.framer-Wu5B7.framer-1lh4lwa, .framer-Wu5B7 .framer-1lh4lwa { display: block; }`,
          `.framer-Wu5B7.framer-1wtosky { align-content: var(--8no1iv); align-items: var(--8no1iv); cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 150px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 200px; }`,
          `.framer-Wu5B7 .framer-iajiiy { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 50px); justify-content: center; overflow: visible; padding: 5px; position: relative; width: 50px; }`,
          `.framer-Wu5B7 .framer-oo8mr5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }`,
          `.framer-Wu5B7 .framer-1madkd4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: 100%; }`,
          `.framer-Wu5B7 .framer-w8kb6u { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-Wu5B7.framer-v-cmys3j .framer-iajiiy { height: var(--framer-aspect-ratio-supported, 38px); width: 38px; }`,
          `.framer-Wu5B7.framer-v-cmys3j .framer-oo8mr5 { height: var(--framer-aspect-ratio-supported, 24px); width: 24px; }`,
          `.framer-Wu5B7.framer-v-q09w7v .framer-iajiiy { height: var(--framer-aspect-ratio-supported, 30px); width: 30px; }`,
          `.framer-Wu5B7.framer-v-q09w7v .framer-oo8mr5, .framer-Wu5B7.framer-v-cmys3j.hover .framer-oo8mr5 { height: var(--framer-aspect-ratio-supported, 20px); width: 20px; }`,
          `.framer-Wu5B7.framer-v-1wtosky.hover .framer-iajiiy { height: var(--framer-aspect-ratio-supported, 45px); width: 45px; }`,
          `.framer-Wu5B7.framer-v-1wtosky.hover .framer-oo8mr5 { height: var(--framer-aspect-ratio-supported, 29px); width: 29px; }`,
          `.framer-Wu5B7.framer-v-cmys3j.hover .framer-iajiiy { height: var(--framer-aspect-ratio-supported, 32px); width: 32px; }`,
          `.framer-Wu5B7.framer-v-q09w7v.hover .framer-iajiiy { height: var(--framer-aspect-ratio-supported, 26px); width: 26px; }`,
          `.framer-Wu5B7.framer-v-q09w7v.hover .framer-oo8mr5 { height: var(--framer-aspect-ratio-supported, 16px); width: 16px; }`,
        ],
        `framer-Wu5B7`
      )),
      (Y = J),
      (J.displayName = `ToolTip`),
      (J.defaultProps = { height: 150, width: 200 }),
      _(J, {
        variant: {
          options: [`k1f99Z3n8`, `goY3o_wgq`, `LNzaPJAUG`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
        wQLyK_Ukb: {
          defaultValue: `Type infomation here`,
          displayTextArea: !0,
          title: `Text`,
          type: T.String,
        },
        onwQLyK_UkbChange: { changes: `wQLyK_Ukb`, type: T.ChangeHandler },
        pcPg6wHxb: {
          defaultValue: `center`,
          options: [`flex-start`, `center`, `flex-end`],
          optionTitles: [`Start`, `Center`, `End`],
          title: `Align`,
          type: T.Enum,
        },
        U8o9Wh7JU: {
          defaultValue: {
            identifier: `module:a056Wryg1pooKOLcEfQX/mj2SBC3E4WCDKVGD0JFt/v5AimOj2Q.js:default`,
            moduleId: `a056Wryg1pooKOLcEfQX`,
          },
          setModuleId: `E1vFg1A6wcWAGuFi9Hz1`,
          title: `Icon`,
          type: T.VectorSetItem,
        },
        bXhAdK6t9: {
          defaultValue: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)) /* {"name":"Orange"} */`,
          title: `IconColor`,
          type: T.Color,
        },
        GhS_QCI5B: {
          defaultValue: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `ButtonColor`,
          type: T.Color,
        },
      }),
      E(
        J,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { P as i, Y as n, F as r, X as t };
//# sourceMappingURL=oix5mGE7Z.eWjNGzm2.mjs.map
