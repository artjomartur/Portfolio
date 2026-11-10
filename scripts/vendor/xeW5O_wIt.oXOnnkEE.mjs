import { n as e, t } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  D as n,
  O as r,
  S as i,
  T as a,
  _ as o,
  c as s,
  h as c,
  j as l,
  l as u,
  o as d,
} from "./react.Bb_yyrg0.mjs";
import { T as f, a as p, r as ee, t as te } from "./motion.Dq3vMtKA.mjs";
import {
  A as m,
  G as h,
  R as g,
  S as ne,
  T as _,
  _t as v,
  gt as re,
  ht as y,
  l as ie,
  lt as ae,
  nt as oe,
  r as b,
  t as se,
  tt as ce,
  w as le,
} from "./framer.cs1Z8Vda.mjs";
import { n as x, t as ue } from "./Video.CtoqTS3T.mjs";
var S,
  de,
  C,
  w,
  T,
  E,
  D,
  O,
  k = t(() => {
    (d(),
      h(),
      i(),
      (S = `var(--framer-icon-mask)`),
      (de = c(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (C = f.create(de)),
      (w = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(C, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (T = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 20 20 M 4.713 4.723 C 1.665 6.795 0 10 0 10 C 0 10 3.636 17 10 17 C 12.05 17 13.817 16.273 15.271 15.288 M 9 3.058 C 9.325 3.02 9.659 3 10 3 C 16.364 3 20 10 20 10 C 20 10 19.308 11.332 18 12.834 M 12 12.236 C 11.469 12.711 10.768 13 10 13 C 8.343 13 7 11.657 7 10 C 7 9.176 7.332 8.43 7.869 7.888" fill="transparent" height="20px" id="WPAlL9RKJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (E = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (D = v(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: c,
              ...l
            } = E(e),
            u = y(`2097567520`, T);
          return s(w, {
            ...l,
            className: m(`framer-CLIIH`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-CLIIH { -webkit-mask: ${S}; aspect-ratio: 1; display: block; mask: ${S}; width: 24px; }`,
        ],
        `framer-CLIIH`
      )),
      (D.displayName = `Eye Password Off`),
      (O = D),
      _(D, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: b.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: b.Number,
        },
      }));
  }),
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  fe = t(() => {
    (d(),
      h(),
      i(),
      (A = `var(--framer-icon-mask)`),
      (j = c(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (M = f.create(j)),
      (N = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(M, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (P = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 8 C 0 8 4 0 11 0 C 18 0 22 8 22 8" fill="transparent" height="8px" id="i1gQjUeG5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(1 4)" width="22px"/><path d="M 0 0 C 0 0 4 8 11 8 C 18 8 22 0 22 0" fill="transparent" height="8px" id="Z46WJCsiS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(1 12)" width="22px"/><path d="M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z" fill="transparent" height="6px" id="JCy6NQxG9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(9 9)" width="6px"/></svg>`),
      (F = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (I = v(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: c,
              ...l
            } = F(e),
            u = y(`743045950`, P);
          return s(N, {
            ...l,
            className: m(`framer-TQmuP`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-TQmuP { -webkit-mask: ${A}; aspect-ratio: 1; display: block; mask: ${A}; width: 24px; }`,
        ],
        `framer-TQmuP`
      )),
      (I.displayName = `Eye Password`),
      (L = I),
      _(I, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: b.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: b.Number,
        },
      }));
  }),
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  pe = t(() => {
    (d(),
      h(),
      i(),
      (R = `var(--framer-icon-mask)`),
      (z = c(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (B = f.create(z)),
      (V = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(B, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (H = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 15 6.354 C 15.622 7.059 16 7.986 16 9 C 16 10.014 15.622 10.941 15 11.646 M 19 5 C 19.622 6.066 20 7.466 20 9 C 20 10.534 19.622 11.934 19 13 M 1 5 L 6 5 L 12 0 L 12 18 L 6 13 L 1 13 C 0.448 13 0 12.552 0 12 L 0 6 C 0 5.448 0.448 5 1 5 Z" fill="transparent" height="18px" id="uUj3ViwJ5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="20px"/></svg>`),
      (U = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (W = v(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: c,
              ...l
            } = U(e),
            u = y(`1399849053`, H);
          return s(V, {
            ...l,
            className: m(`framer-UUlKg`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-UUlKg { -webkit-mask: ${R}; aspect-ratio: 1; display: block; mask: ${R}; width: 24px; }`,
        ],
        `framer-UUlKg`
      )),
      (W.displayName = `Volume Up`),
      (G = W),
      _(W, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: b.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: b.Number,
        },
      }));
  }),
  K,
  me,
  q,
  he,
  ge,
  _e,
  J,
  ve,
  ye = t(() => {
    (d(),
      h(),
      i(),
      (K = `var(--framer-icon-mask)`),
      (me = c(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (q = f.create(me)),
      (he = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(q, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (ge = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 15 6.354 C 15.622 7.059 16 7.986 16 9 C 16 9.345 15.956 9.68 15.874 10 M 19 5 C 19.622 6.066 20 7.466 20 9 C 20 10.534 19.622 11.934 19 13 M 2 5 L 1 5 C 0.448 5 0 5.448 0 6 L 0 12 C 0 12.552 0.448 13 1 13 L 6 13 L 12 18 L 12 15 M 8.4 3 L 12 0 L 12 6.5" fill="transparent" height="18px" id="mteC0zuxS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="20px"/><path d="M 0 0 L 18 18" fill="transparent" height="18px" id="fsfH4_5px" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="18px"/></svg>`),
      (_e = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (J = v(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: c,
              ...l
            } = _e(e),
            u = y(`1321455516`, ge);
          return s(he, {
            ...l,
            className: m(`framer-UPSyl`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-UPSyl { -webkit-mask: ${K}; aspect-ratio: 1; display: block; mask: ${K}; width: 24px; }`,
        ],
        `framer-UPSyl`
      )),
      (J.displayName = `Volume Off Mute 2`),
      (ve = J),
      _(J, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: b.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: b.Number,
        },
      }));
  }),
  be = e({ __FramerMetadata__: () => $, default: () => Q });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  X,
  De,
  Oe,
  ke,
  Ae,
  Z,
  Q,
  $,
  je = t(() => {
    (d(),
      h(),
      te(),
      i(),
      pe(),
      x(),
      ye(),
      (xe = g(ue)),
      (Se = [`Za219bCfj`, `Wq6OvRGns`]),
      (Ce = `framer-vTwTa`),
      (we = { Wq6OvRGns: `framer-v-1o8bmj4`, Za219bCfj: `framer-v-1min9qq` }),
      (Te = { duration: 0, type: `tween` }),
      (Ee = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (X = ({ value: e, children: t }) => {
        let i = n(p),
          a = e ?? i.transition,
          o = r(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (De = { "Variant 1": `Za219bCfj`, "Variant 2": `Wq6OvRGns` }),
      (Oe = f.create(l)),
      (ke = ({ height: e, id: t, uRL: n, videoPoster: r, width: i, ...a }) => ({
        ...a,
        do5IOia6s:
          n ??
          a.do5IOia6s ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
        variant: De[a.variant] ?? a.variant ?? `Za219bCfj`,
        XonygEowy: r ?? a.XonygEowy,
      })),
      (Ae = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = v(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = o(),
            { activeLocale: c, setLocale: l } = ae();
          oe();
          let {
              style: d,
              className: p,
              layoutId: te,
              variant: h,
              do5IOia6s: g,
              XonygEowy: _,
              ...v
            } = ke(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: le,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: de,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = re({
              cycleOrder: Se,
              defaultVariant: `Za219bCfj`,
              ref: r,
              variant: h,
              variantClassNames: we,
            }),
            E = Ae(e, T),
            { activeVariantCallback: D, delay: O } = ce(y),
            k = D(async (...e) => {
              (C({ isPressed: !1 }), w(`Wq6OvRGns`));
            }),
            A = D(async (...e) => {
              (C({ isPressed: !1 }), w(`Za219bCfj`));
            }),
            j = m(Ce);
          return s(ee, {
            id: te ?? i,
            children: s(Oe, {
              animate: T,
              initial: !1,
              children: s(X, {
                value: Te,
                children: u(f.div, {
                  ...v,
                  ...x,
                  className: m(j, `framer-1min9qq`, p, b),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: E,
                  layoutId: `Za219bCfj`,
                  onTap: k,
                  ref: r,
                  style: { ...d },
                  ...Y({ Wq6OvRGns: { "data-framer-name": `Variant 2`, onTap: A } }, y, S),
                  children: [
                    s(f.div, {
                      className: `framer-1i7aofq`,
                      layoutDependency: E,
                      layoutId: `F0UPq6Sa0`,
                      style: {
                        backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                      },
                      children: s(ie, {
                        animated: !0,
                        className: `framer-nzciix`,
                        Component: ve,
                        layoutDependency: E,
                        layoutId: `L0qdXAfMi`,
                        style: {
                          "--1ww558a": 2,
                          "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                        },
                        ...Y({ Wq6OvRGns: { Component: G } }, y, S),
                      }),
                    }),
                    s(se, {
                      children: s(ne, {
                        className: `framer-1cjx03k-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: E,
                        layoutId: `jxNl14MEl-container`,
                        nodeId: `jxNl14MEl`,
                        rendersWithMotion: !0,
                        scopeId: `xeW5O_wIt`,
                        children: s(ue, {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderRadius: 15,
                          bottomLeftRadius: 15,
                          bottomRightRadius: 15,
                          controls: !1,
                          height: `100%`,
                          id: `jxNl14MEl`,
                          isMixedBorderRadius: !1,
                          layoutId: `jxNl14MEl`,
                          loop: !0,
                          muted: !0,
                          objectFit: `cover`,
                          playing: !1,
                          poster: Ee(_),
                          posterEnabled: !0,
                          srcType: `URL`,
                          srcUrl: g,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 15,
                          topRightRadius: 15,
                          volume: 25,
                          width: `100%`,
                          ...Y({ Wq6OvRGns: { muted: !1, volume: 50 } }, y, S),
                        }),
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
          `.framer-vTwTa.framer-hm7okr, .framer-vTwTa .framer-hm7okr { display: block; }`,
          `.framer-vTwTa.framer-1min9qq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1152px; }`,
          `.framer-vTwTa .framer-1i7aofq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 18px; position: absolute; right: 20px; top: 20px; width: min-content; z-index: 1; }`,
          `.framer-vTwTa .framer-nzciix { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); position: relative; width: 20px; }`,
          `.framer-vTwTa .framer-1cjx03k-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 113px); pointer-events: none; position: relative; width: 100%; }`,
        ],
        `framer-vTwTa`
      )),
      (Q = Z),
      (Z.displayName = `VideoWithMuteControl`),
      (Z.defaultProps = { height: 648, width: 1152 }),
      _(Z, {
        variant: {
          options: [`Za219bCfj`, `Wq6OvRGns`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: b.Enum,
        },
        do5IOia6s: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          title: `URL`,
          type: b.String,
        },
        ondo5IOia6sChange: { changes: `do5IOia6s`, type: b.ChangeHandler },
        XonygEowy: { title: `VideoPoster`, type: b.ResponsiveImage },
      }),
      le(Z, [{ explicitInter: !0, fonts: [] }, ...xe], { supportsExplicitInterCodegen: !0 }),
      ($ = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerxeW5O_wIt`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `648`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1152`,
              framerComponentViewportWidth: `true`,
              framerVariables: `{"do5IOia6s":"uRL","XonygEowy":"videoPoster"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Wq6OvRGns":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { L as a, fe as i, Q as n, O as o, be as r, k as s, je as t };
//# sourceMappingURL=xeW5O_wIt.oXOnnkEE.mjs.map
