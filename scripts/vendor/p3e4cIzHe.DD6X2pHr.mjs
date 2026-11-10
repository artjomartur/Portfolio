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
  R as _,
  T as v,
  _t as y,
  b,
  f as x,
  gt as S,
  lt as C,
  nt as w,
  r as T,
  w as E,
} from "./framer.cs1Z8Vda.mjs";
import { l as D, u as O } from "./yk6i18qEx.CnQf8P0b.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
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
  V,
  H,
  U = e(() => {
    (u(),
      g(),
      m(),
      r(),
      O(),
      (A = _(D)),
      (j = { Irv2y1gkW: { hover: !0 } }),
      (M = [`Irv2y1gkW`, `QN7SoHE9a`, `whH09Af37`]),
      (N = `framer-Jh0ik`),
      (P = {
        Irv2y1gkW: `framer-v-157c2d4`,
        QN7SoHE9a: `framer-v-hmfji`,
        whH09Af37: `framer-v-3vlj8w`,
      }),
      (F = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (I = ({ value: e, children: r }) => {
        let i = t(f),
          a = e ?? i.transition,
          s = n(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return o(f.Provider, { value: s, children: r });
      }),
      (L = { Desktop: `Irv2y1gkW`, Phone: `whH09Af37`, Tablet: `QN7SoHE9a` }),
      (R = d.create(c)),
      (z = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        fe8fJLFAK: n ?? a.fe8fJLFAK,
        Pwy_evt22: r ?? a.Pwy_evt22 ?? `next / The Rev Playground!`,
        variant: L[a.variant] ?? a.variant ?? `Irv2y1gkW`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = y(
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
              fe8fJLFAK: y,
              Pwy_evt22: T,
              ...E
            } = z(e),
            {
              baseVariant: O,
              classNames: A,
              clearLoadingGesture: L,
              gestureHandlers: V,
              gestureVariant: H,
              isLoading: U,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = S({
              cycleOrder: M,
              defaultVariant: `Irv2y1gkW`,
              enabledGestures: j,
              ref: r,
              variant: v,
              variantClassNames: P,
            }),
            q = B(e, K),
            J = h(N);
          return o(p, {
            id: _ ?? s,
            children: o(R, {
              animate: K,
              initial: !1,
              children: o(I, {
                value: F,
                children: o(x, {
                  href: y,
                  motionChild: !0,
                  nodeId: `Irv2y1gkW`,
                  openInNewTab: !1,
                  scopeId: `p3e4cIzHe`,
                  children: l(d.a, {
                    ...E,
                    ...V,
                    className: `${h(J, `framer-157c2d4`, g, A)} framer-1uzpole`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: q,
                    layoutId: `Irv2y1gkW`,
                    ref: r,
                    style: { ...m },
                    ...k(
                      {
                        "Irv2y1gkW-hover": { "data-framer-name": void 0 },
                        QN7SoHE9a: { "data-framer-name": `Tablet` },
                        whH09Af37: { "data-framer-name": `Phone` },
                      },
                      O,
                      H
                    ),
                    children: [
                      o(b, {
                        __fromCanvasComponent: !0,
                        children: o(c, {
                          children: o(d.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                              "--framer-font-size": `50px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.04em`,
                              "--framer-line-height": `1em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                            },
                            children: `next / The Rev Playground!`,
                          }),
                        }),
                        className: `framer-11u609t`,
                        fonts: [`FS;Outfit-medium`],
                        layoutDependency: q,
                        layoutId: `ICBudn7pP`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        },
                        text: T,
                        variants: {
                          "Irv2y1gkW-hover": {
                            "--extracted-r6o4lv": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...k(
                          {
                            "Irv2y1gkW-hover": {
                              children: o(c, {
                                children: o(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `50px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                                  },
                                  children: `next / The Rev Playground!`,
                                }),
                              }),
                            },
                            QN7SoHE9a: {
                              children: o(c, {
                                children: o(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `40px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `next / The Rev Playground!`,
                                }),
                              }),
                            },
                            whH09Af37: {
                              children: o(c, {
                                children: o(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `25px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `next / The Rev Playground!`,
                                }),
                              }),
                            },
                          },
                          O,
                          H
                        ),
                      }),
                      o(d.div, {
                        className: `framer-442dh5`,
                        layoutDependency: q,
                        layoutId: `JVOf9G8zK`,
                        style: {
                          backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        variants: {
                          "Irv2y1gkW-hover": {
                            backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                          },
                          whH09Af37: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                        },
                        children: o(D, {
                          animated: !0,
                          className: `framer-17zj8qz`,
                          layoutDependency: q,
                          layoutId: `zQsSHKY7P`,
                          style: {
                            "--1ww558a": 2,
                            "--4rxgx6": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                          },
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
          `.framer-Jh0ik.framer-1uzpole, .framer-Jh0ik .framer-1uzpole { display: block; }`,
          `.framer-Jh0ik.framer-157c2d4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 50px; position: relative; text-decoration: none; width: 1200px; }`,
          `.framer-Jh0ik .framer-11u609t { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Jh0ik .framer-442dh5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Jh0ik .framer-17zj8qz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-Jh0ik.framer-v-hmfji.framer-157c2d4 { cursor: unset; }`,
          `.framer-Jh0ik.framer-v-hmfji .framer-442dh5 { gap: 5px; padding: 8px; }`,
          `.framer-Jh0ik.framer-v-hmfji .framer-17zj8qz { height: var(--framer-aspect-ratio-supported, 18px); width: 18px; }`,
          `.framer-Jh0ik.framer-v-3vlj8w.framer-157c2d4 { cursor: unset; padding: 50px 24px 50px 24px; }`,
          `.framer-Jh0ik.framer-v-3vlj8w .framer-442dh5 { gap: 8px; }`,
          `.framer-Jh0ik.framer-v-3vlj8w .framer-17zj8qz { height: var(--framer-aspect-ratio-supported, 13px); width: 13px; }`,
        ],
        `framer-Jh0ik`
      )),
      (H = V),
      (V.displayName = `NextProjectFooter`),
      (V.defaultProps = { height: 150, width: 1200 }),
      v(V, {
        variant: {
          options: [`Irv2y1gkW`, `QN7SoHE9a`, `whH09Af37`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
        fe8fJLFAK: { title: `Link`, type: T.Link },
        Pwy_evt22: {
          defaultValue: `next / The Rev Playground!`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onPwy_evt22Change: { changes: `Pwy_evt22`, type: T.ChangeHandler },
      }),
      E(
        V,
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
          ...A,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { H as n, U as t };
//# sourceMappingURL=p3e4cIzHe.DD6X2pHr.mjs.map
