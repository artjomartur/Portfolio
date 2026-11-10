import { n as e, t } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  D as n,
  O as r,
  S as i,
  T as a,
  _ as o,
  c as s,
  h as ee,
  j as c,
  l,
  o as u,
} from "./react.Bb_yyrg0.mjs";
import { T as d, a as f, r as te, t as p } from "./motion.Dq3vMtKA.mjs";
import {
  A as m,
  B as ne,
  G as h,
  R as g,
  S as re,
  T as _,
  _t as v,
  gt as y,
  l as ie,
  lt as ae,
  nt as oe,
  r as b,
  s as x,
  t as S,
  tt as se,
  w as C,
} from "./framer.cs1Z8Vda.mjs";
import { l as w, u as T } from "./yk6i18qEx.CnQf8P0b.mjs";
import { n as E, t as D } from "./Video.CtoqTS3T.mjs";
var O = e({ __FramerMetadata__: () => K, default: () => G });
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
  U,
  W,
  G,
  K,
  q = t(() => {
    (u(),
      h(),
      p(),
      i(),
      T(),
      E(),
      (A = g(D)),
      (j = { bUf_ZfKJS: { hover: !0 }, KXDB_9Bg6: { hover: !0 } }),
      (M = [`bUf_ZfKJS`, `KXDB_9Bg6`]),
      (N = `framer-uBEu2`),
      (P = { bUf_ZfKJS: `framer-v-bxk1sp`, KXDB_9Bg6: `framer-v-ab5etu` }),
      (F = { duration: 0, type: `tween` }),
      (I = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (L = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (R = (e, t) => `translate(-50%, -50%) ${t}`),
      (z = ({ value: e, children: t }) => {
        let i = n(f),
          a = e ?? i.transition,
          o = r(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (B = { "Variant 1": `bUf_ZfKJS`, "Variant 2": `KXDB_9Bg6` }),
      (V = d.create(c)),
      (H = ({
        buttonColor: e,
        chooseIcon1: t,
        chooseIcon2: n,
        coverImage: r,
        customizedCover: i,
        defaultBVIsibility: a,
        height: o,
        iconColor: s,
        id: ee,
        uRL: c,
        videoPoster: l,
        width: u,
        ...d
      }) => ({
        ...d,
        EXJFz2w_i: i ?? d.EXJFz2w_i,
        HFH6aper_: r ?? d.HFH6aper_,
        NkcnUcBsR: l ?? d.NkcnUcBsR,
        pFR6gGOTf: a ?? d.pFR6gGOTf,
        RMqa4oc2M: t ?? d.RMqa4oc2M ?? w,
        un47GrRTF: c ?? d.un47GrRTF,
        variant: B[d.variant] ?? d.variant ?? `bUf_ZfKJS`,
        vvn0BUdka:
          e ?? d.vvn0BUdka ?? `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255))`,
        XV6TsVptV: n ?? d.XV6TsVptV ?? w,
        zlD00AyQl:
          s ??
          d.zlD00AyQl ??
          `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = v(
        ee(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = o(),
            { activeLocale: ee, setLocale: c } = ae(),
            u = oe(),
            {
              style: f,
              className: p,
              layoutId: h,
              variant: g,
              vvn0BUdka: _,
              pFR6gGOTf: v,
              NkcnUcBsR: b,
              zlD00AyQl: C,
              RMqa4oc2M: w,
              XV6TsVptV: T,
              EXJFz2w_i: E,
              HFH6aper_: O,
              un47GrRTF: A,
              ...B
            } = H(e),
            {
              baseVariant: W,
              classNames: G,
              clearLoadingGesture: K,
              gestureHandlers: q,
              gestureVariant: J,
              isLoading: ce,
              setGestureState: Y,
              setVariant: X,
              variants: Z,
            } = y({
              cycleOrder: M,
              defaultVariant: `bUf_ZfKJS`,
              enabledGestures: j,
              ref: r,
              variant: g,
              variantClassNames: P,
            }),
            Q = U(e, Z),
            { activeVariantCallback: $, delay: le } = se(W),
            ue = $(async (...e) => {
              (Y({ isPressed: !1 }), X(`KXDB_9Bg6`));
            }),
            de = $(async (...e) => {
              (Y({ isPressed: !1 }), X(`bUf_ZfKJS`));
            }),
            fe = m(N),
            pe = (e) => (J === `KXDB_9Bg6-hover` || W === `KXDB_9Bg6` ? e : !1),
            me = (e) => ([`bUf_ZfKJS-hover`, `KXDB_9Bg6-hover`].includes(J) ? !0 : e);
          return s(te, {
            id: h ?? i,
            children: s(V, {
              animate: Z,
              initial: !1,
              children: s(z, {
                value: F,
                children: l(d.div, {
                  ...B,
                  ...q,
                  className: m(fe, `framer-bxk1sp`, p, G),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: Q,
                  layoutId: `bUf_ZfKJS`,
                  onTap: ue,
                  ref: r,
                  style: { ...f },
                  ...k(
                    {
                      "bUf_ZfKJS-hover": { "data-framer-name": void 0 },
                      "KXDB_9Bg6-hover": { "data-framer-name": void 0 },
                      KXDB_9Bg6: { "data-framer-name": `Variant 2`, onTap: de },
                    },
                    W,
                    J
                  ),
                  children: [
                    pe(E !== !1) &&
                      s(x, {
                        background: { alt: ``, fit: `fill`, ...I(O) },
                        className: `framer-urp3n5`,
                        layoutDependency: Q,
                        layoutId: `N8d9fnEjz`,
                        ...k(
                          {
                            KXDB_9Bg6: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: ne((u?.y || 0) + 0),
                                sizes: u?.width || `100vw`,
                                ...I(O),
                              },
                            },
                          },
                          W,
                          J
                        ),
                      }),
                    s(S, {
                      children: s(re, {
                        className: `framer-1bwjs3e-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: Q,
                        layoutId: `lQQ_AmJPY-container`,
                        nodeId: `lQQ_AmJPY`,
                        rendersWithMotion: !0,
                        scopeId: `jXv_GjSDx`,
                        children: s(D, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: `100%`,
                          id: `lQQ_AmJPY`,
                          isMixedBorderRadius: !1,
                          layoutId: `lQQ_AmJPY`,
                          loop: !0,
                          muted: !0,
                          objectFit: `cover`,
                          playing: !1,
                          poster: L(b),
                          posterEnabled: !0,
                          srcType: `URL`,
                          srcUrl: A,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: `100%`,
                        }),
                      }),
                    }),
                    me(v !== !1) &&
                      s(d.div, {
                        className: `framer-1qc178n`,
                        layoutDependency: Q,
                        layoutId: `NaMEamyTH`,
                        style: {
                          backgroundColor: _,
                          borderBottomLeftRadius: 32,
                          borderBottomRightRadius: 32,
                          borderTopLeftRadius: 32,
                          borderTopRightRadius: 32,
                          boxShadow: `0px 0px 3px 1px rgba(0, 0, 0, 0.3)`,
                        },
                        children: s(ie, {
                          animated: !0,
                          className: `framer-3sbhmk`,
                          Component: w,
                          layoutDependency: Q,
                          layoutId: `sgYW4fFVk`,
                          style: { "--1ww558a": 2, "--4rxgx6": C },
                          transformTemplate: R,
                          ...k({ KXDB_9Bg6: { Component: T } }, W, J),
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
          `.framer-uBEu2.framer-1ms4139, .framer-uBEu2 .framer-1ms4139 { display: block; }`,
          `.framer-uBEu2.framer-bxk1sp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 316px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 298px; }`,
          `.framer-uBEu2 .framer-urp3n5 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-uBEu2 .framer-1bwjs3e-container { flex: 1 0 0px; height: 100%; pointer-events: none; position: relative; width: 1px; z-index: 1; }`,
          `.framer-uBEu2 .framer-1qc178n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; left: calc(50.00000000000002% - 60px / 2); overflow: visible; padding: 0px 0px 0px 3px; position: absolute; top: calc(50.00000000000002% - 60px / 2); width: 60px; z-index: 2; }`,
          `.framer-uBEu2 .framer-3sbhmk { flex: none; height: var(--framer-aspect-ratio-supported, 1px); left: 50%; position: absolute; top: 50%; width: 24px; z-index: 1; }`,
          `.framer-uBEu2.framer-v-bxk1sp.hover .framer-1bwjs3e-container { order: 1; }`,
          `.framer-uBEu2.framer-v-bxk1sp.hover .framer-1qc178n { order: 0; }`,
        ],
        `framer-uBEu2`
      )),
      (G = W),
      (W.displayName = `VideoWithPlayControl`),
      (W.defaultProps = { height: 316, width: 298 }),
      _(W, {
        variant: {
          options: [`bUf_ZfKJS`, `KXDB_9Bg6`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: b.Enum,
        },
        vvn0BUdka: {
          defaultValue: `var(--token-719539a8-6a95-451c-b70a-9eb0af988635, rgb(11, 29, 255)) /* {"name":"Blue"} */`,
          title: `ButtonColor`,
          type: b.Color,
        },
        pFR6gGOTf: { defaultValue: !1, title: `DefaultBVisibility`, type: b.Boolean },
        onpFR6gGOTfChange: { changes: `pFR6gGOTf`, type: b.ChangeHandler },
        NkcnUcBsR: { title: `VideoPoster`, type: b.ResponsiveImage },
        zlD00AyQl: {
          defaultValue: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `IconColor`,
          type: b.Color,
        },
        RMqa4oc2M: {
          defaultValue: {
            identifier: `module:Ee7tnMPNLxjb4CKlYiaU/kMElE4QNJmmWe36RFgPm/Yas9PXVet.js:default`,
            moduleId: `Ee7tnMPNLxjb4CKlYiaU`,
          },
          setModuleId: `E1vFg1A6wcWAGuFi9Hz1`,
          title: `ChooseIcon1`,
          type: b.VectorSetItem,
        },
        XV6TsVptV: {
          defaultValue: {
            identifier: `module:Ee7tnMPNLxjb4CKlYiaU/kMElE4QNJmmWe36RFgPm/Yas9PXVet.js:default`,
            moduleId: `Ee7tnMPNLxjb4CKlYiaU`,
          },
          setModuleId: `E1vFg1A6wcWAGuFi9Hz1`,
          title: `ChooseIcon2`,
          type: b.VectorSetItem,
        },
        EXJFz2w_i: { defaultValue: !1, title: `CustomizedCover`, type: b.Boolean },
        onEXJFz2w_iChange: { changes: `EXJFz2w_i`, type: b.ChangeHandler },
        HFH6aper_: { title: `CoverImage`, type: b.ResponsiveImage },
        un47GrRTF: { defaultValue: ``, title: `URL`, type: b.String },
        onun47GrRTFChange: { changes: `un47GrRTF`, type: b.ChangeHandler },
      }),
      C(W, [{ explicitInter: !0, fonts: [] }, ...A], { supportsExplicitInterCodegen: !0 }),
      (K = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerjXv_GjSDx`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `298`,
              framerIntrinsicHeight: `316`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"KXDB_9Bg6":{"layout":["fixed","fixed"]},"jeivTRykd":{"layout":["fixed","fixed"]},"AEIHSREFf":{"layout":["fixed","fixed"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerVectorSets: `["E1vFg1A6wcWAGuFi9Hz1"]`,
              framerVariables: `{"vvn0BUdka":"buttonColor","pFR6gGOTf":"defaultBVIsibility","NkcnUcBsR":"videoPoster","zlD00AyQl":"iconColor","RMqa4oc2M":"chooseIcon1","XV6TsVptV":"chooseIcon2","EXJFz2w_i":"customizedCover","HFH6aper_":"coverImage","un47GrRTF":"uRL"}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { G as n, O as r, q as t };
//# sourceMappingURL=jXv_GjSDx.BsTF2j5Z.mjs.map
