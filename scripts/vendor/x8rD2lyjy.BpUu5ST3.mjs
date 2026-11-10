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
  f as b,
  gt as x,
  lt as S,
  nt as C,
  r as w,
  w as T,
} from "./framer.cs1Z8Vda.mjs";
function E(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z = e(() => {
    (u(),
      g(),
      m(),
      r(),
      (D = { OUeB3QJig: { hover: !0 }, VTUwhOpvn: { hover: !0 } }),
      (O = [`VTUwhOpvn`, `ZT6lwoK2R`, `OUeB3QJig`]),
      (k = `framer-uuZ6c`),
      (A = {
        OUeB3QJig: `framer-v-asdsv1`,
        VTUwhOpvn: `framer-v-13z9j1f`,
        ZT6lwoK2R: `framer-v-1taqofe`,
      }),
      (j = { damping: 40, delay: 0, mass: 1, stiffness: 350, type: `spring` }),
      (M = ({ value: e, children: r }) => {
        let i = t(f),
          a = e ?? i.transition,
          s = n(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return o(f.Provider, { value: s, children: r });
      }),
      (N = { "Secondary White": `OUeB3QJig`, Primary: `VTUwhOpvn`, Secondary: `ZT6lwoK2R` }),
      (P = d.create(c)),
      (F = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        Gh9QOfeLM: r ?? a.Gh9QOfeLM ?? `view all work`,
        JQPbxOZrF: n ?? a.JQPbxOZrF,
        variant: N[a.variant] ?? a.variant ?? `VTUwhOpvn`,
      })),
      (I = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (L = v(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            s = a(),
            { activeLocale: u, setLocale: f } = S();
          C();
          let {
              style: m,
              className: g,
              layoutId: _,
              variant: v,
              Gh9QOfeLM: w,
              JQPbxOZrF: T,
              ...N
            } = F(e),
            {
              baseVariant: L,
              classNames: R,
              clearLoadingGesture: z,
              gestureHandlers: B,
              gestureVariant: V,
              isLoading: H,
              setGestureState: U,
              setVariant: W,
              variants: G,
            } = x({
              cycleOrder: O,
              defaultVariant: `VTUwhOpvn`,
              enabledGestures: D,
              ref: r,
              variant: v,
              variantClassNames: A,
            }),
            K = I(e, G),
            q = h(k);
          return o(p, {
            id: _ ?? s,
            children: o(P, {
              animate: G,
              initial: !1,
              children: o(M, {
                value: j,
                children: o(b, {
                  href: T,
                  motionChild: !0,
                  nodeId: `VTUwhOpvn`,
                  openInNewTab: !1,
                  scopeId: `x8rD2lyjy`,
                  smoothScroll: !0,
                  children: l(d.a, {
                    ...N,
                    ...B,
                    className: `${h(q, `framer-13z9j1f`, g, R)} framer-ah3snu`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: K,
                    layoutId: `VTUwhOpvn`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `3px`,
                      "--border-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                      "--border-left-width": `3px`,
                      "--border-right-width": `3px`,
                      "--border-style": `solid`,
                      "--border-top-width": `3px`,
                      borderBottomLeftRadius: 28,
                      borderBottomRightRadius: 28,
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                      ...m,
                    },
                    variants: {
                      "OUeB3QJig-hover": {
                        "--border-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                      },
                      "VTUwhOpvn-hover": {
                        "--border-color": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                      },
                      OUeB3QJig: {
                        "--border-bottom-width": `2px`,
                        "--border-color": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--border-left-width": `2px`,
                        "--border-right-width": `2px`,
                        "--border-top-width": `2px`,
                        borderBottomLeftRadius: 23,
                        borderBottomRightRadius: 23,
                        borderTopLeftRadius: 23,
                        borderTopRightRadius: 23,
                      },
                      ZT6lwoK2R: {
                        "--border-bottom-width": `2px`,
                        "--border-left-width": `2px`,
                        "--border-right-width": `2px`,
                        "--border-top-width": `2px`,
                        borderBottomLeftRadius: 23,
                        borderBottomRightRadius: 23,
                        borderTopLeftRadius: 23,
                        borderTopRightRadius: 23,
                      },
                    },
                    ...E(
                      {
                        "OUeB3QJig-hover": { "data-framer-name": void 0 },
                        "VTUwhOpvn-hover": { "data-framer-name": void 0 },
                        OUeB3QJig: { "data-framer-name": `Secondary White` },
                        ZT6lwoK2R: { "data-framer-name": `Secondary` },
                      },
                      L,
                      V
                    ),
                    children: [
                      o(d.div, {
                        className: `framer-136loqc`,
                        layoutDependency: K,
                        layoutId: `t05baU2z0`,
                        children: o(y, {
                          __fromCanvasComponent: !0,
                          children: o(c, {
                            children: o(d.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `25px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `0px`,
                                "--framer-line-height": `50px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                              },
                              children: `view all work`,
                            }),
                          }),
                          className: `framer-7fgmlk`,
                          fonts: [`FS;Outfit-medium`],
                          layoutDependency: K,
                          layoutId: `iUHFNL9zo`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: w,
                          variants: {
                            "OUeB3QJig-hover": {
                              "--extracted-r6o4lv": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                            },
                            "VTUwhOpvn-hover": {
                              "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            },
                            OUeB3QJig: {
                              "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...E(
                            {
                              "OUeB3QJig-hover": {
                                children: o(c, {
                                  children: o(d.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-line-height": `32px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                                    },
                                    children: `view all work`,
                                  }),
                                }),
                              },
                              "VTUwhOpvn-hover": {
                                children: o(c, {
                                  children: o(d.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `25px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-line-height": `50px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                    },
                                    children: `yes, there’s more`,
                                  }),
                                }),
                                text: void 0,
                              },
                              OUeB3QJig: {
                                children: o(c, {
                                  children: o(d.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-line-height": `32px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                    },
                                    children: `view all work`,
                                  }),
                                }),
                              },
                              ZT6lwoK2R: {
                                children: o(c, {
                                  children: o(d.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `0px`,
                                      "--framer-line-height": `32px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                    },
                                    children: `view all work`,
                                  }),
                                }),
                              },
                            },
                            L,
                            V
                          ),
                        }),
                      }),
                      o(d.div, {
                        className: `framer-10x5798`,
                        "data-framer-name": `Filler`,
                        layoutDependency: K,
                        layoutId: `wv2WHvJAF`,
                        style: {
                          backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                        },
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
          `.framer-uuZ6c.framer-ah3snu, .framer-uuZ6c .framer-ah3snu { display: block; }`,
          `.framer-uuZ6c.framer-13z9j1f { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-uuZ6c .framer-136loqc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 25px 4px 25px; position: relative; width: min-content; }`,
          `.framer-uuZ6c .framer-7fgmlk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-uuZ6c .framer-10x5798 { flex: none; height: 6px; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(115.90909090909093% - 6px / 2); }`,
          `.framer-uuZ6c.framer-v-1taqofe.framer-13z9j1f { cursor: unset; padding: 5px 5px 4px 5px; }`,
          `.framer-uuZ6c.framer-v-1taqofe .framer-136loqc, .framer-uuZ6c.framer-v-asdsv1 .framer-136loqc { padding: 0px 12px 2px 12px; }`,
          `.framer-uuZ6c.framer-v-asdsv1.framer-13z9j1f { padding: 5px 5px 4px 5px; }`,
          `.framer-uuZ6c.framer-v-13z9j1f.hover .framer-136loqc { order: 0; z-index: 1; }`,
          `.framer-uuZ6c.framer-v-13z9j1f.hover .framer-10x5798 { height: 186px; order: 1; top: calc(115.90909090909093% - 186px / 2); z-index: 0; }`,
          `.framer-uuZ6c[data-border="true"]::after, .framer-uuZ6c [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-uuZ6c`
      )),
      (R = L),
      (L.displayName = `Primary Button`),
      (L.defaultProps = { height: 54, width: 192 }),
      _(L, {
        variant: {
          options: [`VTUwhOpvn`, `ZT6lwoK2R`, `OUeB3QJig`],
          optionTitles: [`Primary`, `Secondary`, `Secondary White`],
          title: `Variant`,
          type: w.Enum,
        },
        Gh9QOfeLM: {
          defaultValue: `view all work`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onGh9QOfeLMChange: { changes: `Gh9QOfeLM`, type: w.ChangeHandler },
        JQPbxOZrF: { title: `Link`, type: w.Link },
      }),
      T(
        L,
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
export { R as n, z as t };
//# sourceMappingURL=x8rD2lyjy.BpUu5ST3.mjs.map
