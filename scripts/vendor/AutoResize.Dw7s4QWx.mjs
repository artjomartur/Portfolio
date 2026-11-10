import { n as e, t } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as n,
  D as r,
  F as i,
  L as a,
  M as o,
  O as s,
  S as c,
  T as l,
  _ as u,
  c as d,
  h as f,
  j as p,
  o as m,
} from "./react.Bb_yyrg0.mjs";
import { T as h, a as g, r as _, t as v } from "./motion.Dq3vMtKA.mjs";
import {
  A as y,
  G as b,
  T as x,
  _t as S,
  gt as C,
  lt as w,
  nt as T,
  r as E,
  w as D,
} from "./framer.cs1Z8Vda.mjs";
var O = e({ __FramerMetadata__: () => V, default: () => B });
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
  H = t(() => {
    (m(),
      b(),
      v(),
      c(),
      (A = [`lPllubKXP`, `fljSrLrRK`]),
      (j = `framer-dJ3xI`),
      (M = { fljSrLrRK: `framer-v-382j8b`, lPllubKXP: `framer-v-ssm8ng` }),
      (N = { duration: 0, type: `tween` }),
      (P = ({ value: e, children: t }) => {
        let n = r(g),
          i = e ?? n.transition,
          a = s(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return d(g.Provider, { value: a, children: t });
      }),
      (F = { "Variant 2": `fljSrLrRK`, Variant1: `lPllubKXP` }),
      (I = h.create(p)),
      (L = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: F[r.variant] ?? r.variant ?? `lPllubKXP`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = S(
        f(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: o } = w();
          T();
          let { style: s, className: c, layoutId: f, variant: p, ...m } = L(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: F,
            } = C({
              cycleOrder: A,
              defaultVariant: `lPllubKXP`,
              ref: r,
              variant: p,
              variantClassNames: M,
            }),
            z = R(e, F),
            B = y(j);
          return d(_, {
            id: f ?? i,
            children: d(I, {
              animate: F,
              initial: !1,
              children: d(P, {
                value: N,
                children: d(h.div, {
                  ...m,
                  ...x,
                  className: y(B, `framer-ssm8ng`, c, v),
                  "data-framer-name": `Variant1`,
                  layoutDependency: z,
                  layoutId: `lPllubKXP`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                    ...s,
                  },
                  variants: {
                    fljSrLrRK: {
                      backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                    },
                  },
                  ...k({ fljSrLrRK: { "data-framer-name": `Variant 2` } }, g, S),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-dJ3xI.framer-1q2371c, .framer-dJ3xI .framer-1q2371c { display: block; }`,
          `.framer-dJ3xI.framer-ssm8ng { height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
          `.framer-dJ3xI.framer-v-382j8b.framer-ssm8ng { height: 150px; }`,
        ],
        `framer-dJ3xI`
      )),
      (B = z),
      (z.displayName = `AutoResize`),
      (z.defaultProps = { height: 1, width: 1200 }),
      x(z, {
        variant: {
          options: [`lPllubKXP`, `fljSrLrRK`],
          optionTitles: [`Variant1`, `Variant 2`],
          title: `Variant`,
          type: E.Enum,
        },
      }),
      D(z, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (V = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerlU0q4iJZT`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"fljSrLrRK":{"layout":["fixed","fixed"]}}}`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `1200`,
              framerIntrinsicHeight: `1`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function U(e) {
  return (t) => {
    let [r, i] = o(`Variant 1`);
    return (
      n(() => {
        let e = () => {
          a.innerWidth >= 1455 ? i(`Variant 2`) : i(`Variant 1`);
        };
        return (e(), a.addEventListener(`resize`, e), () => a.removeEventListener(`resize`, e));
      }, []),
      d(e, { ...t, variant: r })
    );
  };
}
var W = t(() => {
  (i(), m(), c());
});
export { O as a, B as i, U as n, H as r, W as t };
//# sourceMappingURL=AutoResize.Dw7s4QWx.mjs.map
