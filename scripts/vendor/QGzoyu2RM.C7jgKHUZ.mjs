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
import { T as f, a as p, r as ee, t as m } from "./motion.Dq3vMtKA.mjs";
import {
  A as h,
  B as g,
  G as _,
  R as v,
  S as te,
  T as y,
  _t as b,
  b as x,
  f as ne,
  gt as re,
  ht as S,
  lt as ie,
  nt as ae,
  r as C,
  s as oe,
  t as w,
  w as T,
  yt as E,
} from "./framer.cs1Z8Vda.mjs";
import { l as D, u as O } from "./yk6i18qEx.CnQf8P0b.mjs";
import { n as k, t as A } from "./Video.CtoqTS3T.mjs";
var j,
  M,
  N,
  se,
  ce,
  P,
  F,
  I,
  L = t(() => {
    (d(),
      _(),
      i(),
      (j = `var(--framer-icon-mask)`),
      (M = c(function (e, t) {
        return s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (N = f.create(M)),
      (se = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? s(N, { ...a, layoutId: r, ref: t, children: i })
          : s(`svg`, { ...a, ref: t, children: i });
      })),
      (ce = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 14 M 0 14 L 14 0" fill="transparent" height="14px" id="Bllog1548" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5 5)" width="14px"/></svg>`),
      (P = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (F = b(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: c,
              ...l
            } = P(e),
            u = S(`1358249524`, ce);
          return s(se, {
            ...l,
            className: h(`framer-WaVd3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: s(`use`, { href: u }),
          });
        }),
        [
          `.framer-WaVd3 { -webkit-mask: ${j}; aspect-ratio: 1; display: block; mask: ${j}; width: 24px; }`,
        ],
        `framer-WaVd3`
      )),
      (F.displayName = `X Close Delete`),
      (I = F),
      y(F, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: C.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: C.Number,
        },
      }));
  });
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  le,
  ue,
  de,
  fe,
  pe,
  J,
  me,
  he = t(() => {
    (d(),
      _(),
      m(),
      i(),
      O(),
      (z = v(D)),
      (B = E(f.a)),
      (V = { eUYo2gsWO: { hover: !0 } }),
      (H = [`eUYo2gsWO`, `C2qNZZEgm`, `QHpQrO7Yv`]),
      (U = `framer-wjFwy`),
      (W = {
        C2qNZZEgm: `framer-v-ant9zh`,
        eUYo2gsWO: `framer-v-y2nbd9`,
        QHpQrO7Yv: `framer-v-h57emv`,
      }),
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (q = (e, t) => `translate(-50%, -50%) ${t}`),
      (le = ({ value: e, children: t }) => {
        let i = n(p),
          a = e ?? i.transition,
          o = r(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (ue = { Desktop: `eUYo2gsWO`, Phone: `C2qNZZEgm`, Tablet: `QHpQrO7Yv` }),
      (de = f.create(l)),
      (fe = ({
        caseStudy: e,
        category: t,
        clientName: n,
        height: r,
        id: i,
        imageFile: a,
        link: o,
        projectTitle: s,
        width: c,
        ...l
      }) => ({
        ...l,
        a4Op4GMGU: n ?? l.a4Op4GMGU ?? `Client Name`,
        d90GarC1x: e ?? l.d90GarC1x ?? !0,
        K46KcvR9i: a ?? l.K46KcvR9i,
        LgdGA4U0Z: t ?? l.LgdGA4U0Z ?? `Art Direction`,
        variant: ue[l.variant] ?? l.variant ?? `eUYo2gsWO`,
        y4zHDIvQS: o ?? l.y4zHDIvQS,
        Zsl7YX1CQ: s ?? l.Zsl7YX1CQ ?? `Project Title`,
      })),
      (pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = b(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = o(),
            { activeLocale: c, setLocale: d } = ie(),
            p = ae(),
            {
              style: m,
              className: _,
              layoutId: v,
              variant: te,
              Zsl7YX1CQ: y,
              a4Op4GMGU: b,
              LgdGA4U0Z: S,
              y4zHDIvQS: C,
              K46KcvR9i: w,
              d90GarC1x: T,
              ...E
            } = fe(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: se,
              setVariant: ce,
              variants: P,
            } = re({
              cycleOrder: H,
              defaultVariant: `eUYo2gsWO`,
              enabledGestures: V,
              ref: r,
              variant: te,
              variantClassNames: W,
            }),
            F = pe(e, P),
            I = h(U),
            L = () => O !== `C2qNZZEgm`;
          return s(ee, {
            id: v ?? i,
            children: s(de, {
              animate: P,
              initial: !1,
              children: s(le, {
                value: G,
                children: s(ne, {
                  href: C,
                  motionChild: !0,
                  nodeId: `eUYo2gsWO`,
                  openInNewTab: !1,
                  scopeId: `kN2shlanO`,
                  smoothScroll: !0,
                  children: u(B, {
                    ...E,
                    ...j,
                    __framer__spring: {
                      bounce: 0.2,
                      damping: 60,
                      delay: 0,
                      duration: 0.5,
                      durationBasedSpring: !0,
                      ease: [0.44, 0, 0.56, 1],
                      mass: 1,
                      stagger: 0,
                      stiffness: 500,
                      type: `spring`,
                    },
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 74,
                        },
                      },
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                    ],
                    __framer__transformTrigger: `onInView`,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${h(I, `framer-y2nbd9`, _, k)} framer-d83ulm`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: F,
                    layoutId: `eUYo2gsWO`,
                    ref: r,
                    style: { ...m },
                    ...R(
                      {
                        "eUYo2gsWO-hover": { "data-framer-name": void 0 },
                        C2qNZZEgm: {
                          __framer__styleTransformEffectEnabled: void 0,
                          "data-framer-name": `Phone`,
                        },
                        QHpQrO7Yv: { "data-framer-name": `Tablet` },
                      },
                      O,
                      M
                    ),
                    children: [
                      s(oe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: g((p?.y || 0) + 30),
                          sizes: `calc((${p?.width || `100vw`} - 200px) * 0.598)`,
                          ...K(w),
                        },
                        className: `framer-12d699z`,
                        layoutDependency: F,
                        layoutId: `nqKK96gBf`,
                        style: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                        ...R(
                          {
                            "eUYo2gsWO-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: g((p?.y || 0) + 30),
                                sizes: `calc((${p?.width || `100vw`} - 200px) * 0.6)`,
                                ...K(w),
                              },
                            },
                            C2qNZZEgm: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: g((p?.y || 0) + 30),
                                sizes: `calc((${p?.width || `100vw`} - 32px) * 0.598)`,
                                ...K(w),
                              },
                            },
                            QHpQrO7Yv: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: g((p?.y || 0) + 30),
                                sizes: `calc((${p?.width || `100vw`} - 100px) * 0.598)`,
                                ...K(w),
                              },
                            },
                          },
                          O,
                          M
                        ),
                      }),
                      u(f.div, {
                        className: `framer-p9t8yt`,
                        layoutDependency: F,
                        layoutId: `QFu0ZtRMS`,
                        children: [
                          u(f.div, {
                            className: `framer-7kst0x`,
                            "data-framer-name": `TopText`,
                            layoutDependency: F,
                            layoutId: `S_HzsDiiS`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(l, {
                                  children: s(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `26px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                    },
                                    children: `Project Title`,
                                  }),
                                }),
                                className: `framer-1hxq9b5`,
                                fonts: [`FS;Outfit-semibold`],
                                layoutDependency: F,
                                layoutId: `xWmteyKFK`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: y,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...R(
                                  {
                                    C2qNZZEgm: {
                                      children: s(l, {
                                        children: s(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                          },
                                          children: `Project Title`,
                                        }),
                                      }),
                                    },
                                  },
                                  O,
                                  M
                                ),
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(l, {
                                  children: s(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                    },
                                    children: `Client Name`,
                                  }),
                                }),
                                className: `framer-16k9qkk`,
                                fonts: [`FS;Outfit-medium`],
                                layoutDependency: F,
                                layoutId: `Jd7TAUUn3`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: b,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...R(
                                  {
                                    C2qNZZEgm: {
                                      children: s(l, {
                                        children: s(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                            "--framer-font-size": `11px`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                          },
                                          children: `Client Name`,
                                        }),
                                      }),
                                      fonts: [`FS;Outfit-regular`],
                                    },
                                  },
                                  O,
                                  M
                                ),
                              }),
                            ],
                          }),
                          u(f.div, {
                            className: `framer-1nhmnxy`,
                            "data-framer-name": `Bottom`,
                            layoutDependency: F,
                            layoutId: `LvE93iuk3`,
                            children: [
                              L() &&
                                s(x, {
                                  __fromCanvasComponent: !0,
                                  children: s(l, {
                                    children: s(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171)))`,
                                      },
                                      children: `Art Direction`,
                                    }),
                                  }),
                                  className: `framer-4pa5yi`,
                                  fonts: [`FS;Outfit-medium`],
                                  layoutDependency: F,
                                  layoutId: `fuZQoOsTh`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: S,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              u(f.div, {
                                className: `framer-1d00lls`,
                                "data-framer-name": `Round Button`,
                                layoutDependency: F,
                                layoutId: `KAiPJzPTY`,
                                style: {
                                  backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                                variants: {
                                  "eUYo2gsWO-hover": {
                                    backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                    borderBottomLeftRadius: 25,
                                    borderBottomRightRadius: 25,
                                    borderTopLeftRadius: 25,
                                    borderTopRightRadius: 25,
                                  },
                                },
                                children: [
                                  s(x, {
                                    __fromCanvasComponent: !0,
                                    children: s(l, {
                                      children: s(f.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `32px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                        },
                                        children: `  `,
                                      }),
                                    }),
                                    className: `framer-xuob7z`,
                                    fonts: [`FS;Outfit-bold`],
                                    layoutDependency: F,
                                    layoutId: `o785ZoC20`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      opacity: 0,
                                    },
                                    transformTemplate: q,
                                    variants: { "eUYo2gsWO-hover": { opacity: 1 } },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...R(
                                      {
                                        "eUYo2gsWO-hover": {
                                          children: s(l, {
                                            children: s(f.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `32px`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                              },
                                              children: `enter`,
                                            }),
                                          }),
                                        },
                                      },
                                      O,
                                      M
                                    ),
                                  }),
                                  s(D, {
                                    animated: !0,
                                    className: `framer-1lplm6z`,
                                    layoutDependency: F,
                                    layoutId: `UJVp6MKZ2`,
                                    style: {
                                      "--1ww558a": 2,
                                      "--4rxgx6": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      opacity: 1,
                                    },
                                    transformTemplate: q,
                                    variants: { "eUYo2gsWO-hover": { opacity: 0 } },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      T !== !1 &&
                        s(f.div, {
                          className: `framer-1dta2um`,
                          "data-framer-name": `CSTag`,
                          layoutDependency: F,
                          layoutId: `xs2iEwhgu`,
                          style: {
                            backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            opacity: 0.8,
                          },
                          children: s(x, {
                            __fromCanvasComponent: !0,
                            children: s(l, {
                              children: s(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `13px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: `Case Study`,
                              }),
                            }),
                            className: `framer-1twwoon`,
                            "data-framer-name": `Case Study`,
                            fonts: [`FS;Outfit-medium`],
                            layoutDependency: F,
                            layoutId: `JmARgEW4X`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...R(
                              {
                                C2qNZZEgm: {
                                  children: s(l, {
                                    children: s(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `11px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                      },
                                      children: `Case Study`,
                                    }),
                                  }),
                                },
                              },
                              O,
                              M
                            ),
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
          `.framer-wjFwy.framer-d83ulm, .framer-wjFwy .framer-d83ulm { display: block; }`,
          `.framer-wjFwy.framer-y2nbd9 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px 100px 15px 100px; position: relative; text-decoration: none; width: 1200px; }`,
          `.framer-wjFwy .framer-12d699z { aspect-ratio: 1.6611111111111112 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 360px); pointer-events: none; position: relative; width: 60%; }`,
          `.framer-wjFwy .framer-p9t8yt { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-wjFwy .framer-7kst0x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-wjFwy .framer-1hxq9b5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-wjFwy .framer-16k9qkk, .framer-wjFwy .framer-4pa5yi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-wjFwy .framer-1nhmnxy { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-wjFwy .framer-1d00lls { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-wjFwy .framer-xuob7z { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-wjFwy .framer-1lplm6z { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; position: absolute; top: 50%; width: 16px; z-index: 1; }`,
          `.framer-wjFwy .framer-1dta2um { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 120px; overflow: hidden; padding: 12px 10px 12px 10px; position: absolute; top: 49px; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-wjFwy .framer-1twwoon { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-wjFwy.framer-v-ant9zh.framer-y2nbd9 { cursor: unset; gap: 15px; padding: 30px 16px 15px 16px; width: 342px; }`,
          `.framer-wjFwy.framer-v-ant9zh .framer-12d699z { aspect-ratio: 1.434108527131783 / 1; height: var(--framer-aspect-ratio-supported, 139px); }`,
          `.framer-wjFwy.framer-v-ant9zh .framer-1hxq9b5 { width: 100%; }`,
          `.framer-wjFwy.framer-v-ant9zh .framer-16k9qkk { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-wjFwy.framer-v-ant9zh .framer-1nhmnxy { gap: 10px; justify-content: flex-end; }`,
          `.framer-wjFwy.framer-v-ant9zh .framer-1lplm6z { height: var(--framer-aspect-ratio-supported, 24px); }`,
          `.framer-wjFwy.framer-v-ant9zh .framer-1dta2um { left: 24px; top: 38px; }`,
          `.framer-wjFwy.framer-v-h57emv.framer-y2nbd9 { cursor: unset; padding: 30px 50px 15px 50px; }`,
          `.framer-wjFwy.framer-v-h57emv .framer-12d699z { height: var(--framer-aspect-ratio-supported, 396px); }`,
          `.framer-wjFwy.framer-v-h57emv .framer-1dta2um { left: 67px; top: 45px; }`,
          `.framer-wjFwy.framer-v-y2nbd9.hover .framer-12d699z { aspect-ratio: 1.6620498614958448 / 1; height: var(--framer-aspect-ratio-supported, 361px); width: 60%; }`,
          `.framer-wjFwy.framer-v-y2nbd9.hover .framer-1d00lls { height: 45px; width: 94px; }`,
        ],
        `framer-wjFwy`
      )),
      (me = J),
      (J.displayName = `ImageWorkList`),
      (J.defaultProps = { height: 405, width: 1200 }),
      y(J, {
        variant: {
          options: [`eUYo2gsWO`, `C2qNZZEgm`, `QHpQrO7Yv`],
          optionTitles: [`Desktop`, `Phone`, `Tablet`],
          title: `Variant`,
          type: C.Enum,
        },
        Zsl7YX1CQ: {
          defaultValue: `Project Title`,
          displayTextArea: !0,
          title: `ProjectTitle`,
          type: C.String,
        },
        onZsl7YX1CQChange: { changes: `Zsl7YX1CQ`, type: C.ChangeHandler },
        a4Op4GMGU: {
          defaultValue: `Client Name`,
          displayTextArea: !1,
          title: `ClientName`,
          type: C.String,
        },
        ona4Op4GMGUChange: { changes: `a4Op4GMGU`, type: C.ChangeHandler },
        LgdGA4U0Z: {
          defaultValue: `Art Direction`,
          displayTextArea: !0,
          title: `Category`,
          type: C.String,
        },
        onLgdGA4U0ZChange: { changes: `LgdGA4U0Z`, type: C.ChangeHandler },
        y4zHDIvQS: { title: `Link`, type: C.Link },
        K46KcvR9i: { title: `ImageFile`, type: C.ResponsiveImage },
        d90GarC1x: { defaultValue: !0, title: `Case Study`, type: C.Boolean },
        ond90GarC1xChange: { changes: `d90GarC1x`, type: C.ChangeHandler },
      }),
      T(
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
          ...z,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ge = e({ __FramerMetadata__: () => Ae, default: () => $ });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  X,
  Ee,
  Z,
  De,
  Oe,
  ke,
  Q,
  $,
  Ae,
  je = t(() => {
    (d(),
      _(),
      m(),
      i(),
      O(),
      k(),
      (_e = v(A)),
      (ve = v(D)),
      (ye = E(f.a)),
      (be = { vM0nzArsA: { hover: !0 } }),
      (xe = [`vM0nzArsA`, `NNrysK8nr`, `dkfzYjcx_`]),
      (Se = `framer-NBEA8`),
      (Ce = {
        dkfzYjcx_: `framer-v-mjk2u8`,
        NNrysK8nr: `framer-v-1rg8r74`,
        vM0nzArsA: `framer-v-nm40qz`,
      }),
      (we = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Te = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (X = (e, t) => `translate(-50%, -50%) ${t}`),
      (Ee = ({ value: e, children: t }) => {
        let i = n(p),
          a = e ?? i.transition,
          o = r(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (Z = { Desktop: `vM0nzArsA`, Phone: `NNrysK8nr`, Tablet: `dkfzYjcx_` }),
      (De = f.create(l)),
      (Oe = ({
        caseStudy: e,
        category: t,
        clientName: n,
        height: r,
        id: i,
        link: a,
        posterImage: o,
        projectTitle: s,
        videoURL: c,
        width: l,
        ...u
      }) => ({
        ...u,
        a4Op4GMGU: n ?? u.a4Op4GMGU ?? `Client Name`,
        Fb5Stv0oc: o ?? u.Fb5Stv0oc,
        LgdGA4U0Z: t ?? u.LgdGA4U0Z ?? `Art Direction`,
        m75mHruIi: e ?? u.m75mHruIi ?? !0,
        tkjUg1GHk:
          c ??
          u.tkjUg1GHk ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
        variant: Z[u.variant] ?? u.variant ?? `vM0nzArsA`,
        y4zHDIvQS: a ?? u.y4zHDIvQS,
        Zsl7YX1CQ: s ?? u.Zsl7YX1CQ ?? `Project Title`,
      })),
      (ke = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = b(
        c(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = o(),
            { activeLocale: c, setLocale: d } = ie();
          ae();
          let {
              style: p,
              className: m,
              layoutId: g,
              variant: _,
              Zsl7YX1CQ: v,
              a4Op4GMGU: y,
              LgdGA4U0Z: b,
              y4zHDIvQS: S,
              m75mHruIi: C,
              Fb5Stv0oc: oe,
              tkjUg1GHk: T,
              ...E
            } = Oe(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: se,
              setGestureState: ce,
              setVariant: P,
              variants: F,
            } = re({
              cycleOrder: xe,
              defaultVariant: `vM0nzArsA`,
              enabledGestures: be,
              ref: r,
              variant: _,
              variantClassNames: Ce,
            }),
            I = ke(e, F),
            L = h(Se),
            R = () => O !== `NNrysK8nr`;
          return s(ee, {
            id: g ?? i,
            children: s(De, {
              animate: F,
              initial: !1,
              children: s(Ee, {
                value: we,
                children: s(ne, {
                  href: S,
                  motionChild: !0,
                  nodeId: `vM0nzArsA`,
                  openInNewTab: !1,
                  scopeId: `QGzoyu2RM`,
                  smoothScroll: !0,
                  children: u(ye, {
                    ...E,
                    ...M,
                    __framer__spring: {
                      bounce: 0.2,
                      damping: 60,
                      delay: 0,
                      duration: 0.5,
                      durationBasedSpring: !0,
                      ease: [0.44, 0, 0.56, 1],
                      mass: 1,
                      stagger: 0,
                      stiffness: 500,
                      type: `spring`,
                    },
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 70,
                        },
                      },
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                    ],
                    __framer__transformTrigger: `onInView`,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${h(L, `framer-nm40qz`, m, k)} framer-e4g43l`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: I,
                    layoutId: `vM0nzArsA`,
                    ref: r,
                    style: { ...p },
                    ...Y(
                      {
                        "vM0nzArsA-hover": { "data-framer-name": void 0 },
                        dkfzYjcx_: { "data-framer-name": `Tablet` },
                        NNrysK8nr: {
                          __framer__styleTransformEffectEnabled: void 0,
                          "data-framer-name": `Phone`,
                        },
                      },
                      O,
                      N
                    ),
                    children: [
                      s(w, {
                        children: s(te, {
                          className: `framer-sqx1i5-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: I,
                          layoutId: `clWOleJNy-container`,
                          nodeId: `clWOleJNy`,
                          rendersWithMotion: !0,
                          scopeId: `QGzoyu2RM`,
                          children: s(A, {
                            backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                            borderRadius: 20,
                            bottomLeftRadius: 20,
                            bottomRightRadius: 20,
                            controls: !1,
                            height: `100%`,
                            id: `clWOleJNy`,
                            isMixedBorderRadius: !1,
                            layoutId: `clWOleJNy`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !1,
                            poster: Te(oe),
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: T,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 20,
                            topRightRadius: 20,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                      u(f.div, {
                        className: `framer-1mi4yzt`,
                        layoutDependency: I,
                        layoutId: `hODbhvn4q`,
                        children: [
                          u(f.div, {
                            className: `framer-1orha5d`,
                            "data-framer-name": `TopText`,
                            layoutDependency: I,
                            layoutId: `QFiIZl4uT`,
                            children: [
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(l, {
                                  children: s(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `26px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                    },
                                    children: `Project Title`,
                                  }),
                                }),
                                className: `framer-1cxf5kj`,
                                fonts: [`FS;Outfit-semibold`],
                                layoutDependency: I,
                                layoutId: `COZblYIjp`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Y(
                                  {
                                    NNrysK8nr: {
                                      children: s(l, {
                                        children: s(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXNlbWlib2xk`,
                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                          },
                                          children: `Project Title`,
                                        }),
                                      }),
                                    },
                                  },
                                  O,
                                  N
                                ),
                              }),
                              s(x, {
                                __fromCanvasComponent: !0,
                                children: s(l, {
                                  children: s(f.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                    },
                                    children: `Client Name`,
                                  }),
                                }),
                                className: `framer-pt2s91`,
                                fonts: [`FS;Outfit-medium`],
                                layoutDependency: I,
                                layoutId: `x91wKK098`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: y,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Y(
                                  {
                                    NNrysK8nr: {
                                      children: s(l, {
                                        children: s(f.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                            "--framer-font-size": `11px`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                          },
                                          children: `Client Name`,
                                        }),
                                      }),
                                      fonts: [`FS;Outfit-regular`],
                                    },
                                  },
                                  O,
                                  N
                                ),
                              }),
                            ],
                          }),
                          u(f.div, {
                            className: `framer-1fq4m4s`,
                            "data-framer-name": `Bottom`,
                            layoutDependency: I,
                            layoutId: `ZpHeSWT1w`,
                            children: [
                              R() &&
                                s(x, {
                                  __fromCanvasComponent: !0,
                                  children: s(l, {
                                    children: s(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171)))`,
                                      },
                                      children: `Art Direction`,
                                    }),
                                  }),
                                  className: `framer-1f0ldjx`,
                                  fonts: [`FS;Outfit-medium`],
                                  layoutDependency: I,
                                  layoutId: `pCgslirzN`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: b,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              u(f.div, {
                                className: `framer-1jqns3`,
                                "data-framer-name": `Round Button`,
                                layoutDependency: I,
                                layoutId: `Fa0aB5r4Q`,
                                style: {
                                  backgroundColor: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                                variants: {
                                  "vM0nzArsA-hover": {
                                    backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                    borderBottomLeftRadius: 25,
                                    borderBottomRightRadius: 25,
                                    borderTopLeftRadius: 25,
                                    borderTopRightRadius: 25,
                                  },
                                },
                                children: [
                                  s(x, {
                                    __fromCanvasComponent: !0,
                                    children: s(l, {
                                      children: s(f.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                          "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `0px`,
                                          "--framer-line-height": `32px`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                        },
                                        children: `  `,
                                      }),
                                    }),
                                    className: `framer-lvnd48`,
                                    fonts: [`FS;Outfit-bold`],
                                    layoutDependency: I,
                                    layoutId: `SArppKHXn`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      opacity: 0,
                                    },
                                    transformTemplate: X,
                                    variants: { "vM0nzArsA-hover": { opacity: 1 } },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Y(
                                      {
                                        "vM0nzArsA-hover": {
                                          children: s(l, {
                                            children: s(f.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `32px`,
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                              },
                                              children: `enter`,
                                            }),
                                          }),
                                        },
                                      },
                                      O,
                                      N
                                    ),
                                  }),
                                  s(D, {
                                    animated: !0,
                                    className: `framer-1suv7oj`,
                                    layoutDependency: I,
                                    layoutId: `jgVvyPiZ0`,
                                    style: {
                                      "--1ww558a": 2,
                                      "--4rxgx6": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                      opacity: 1,
                                    },
                                    transformTemplate: X,
                                    variants: { "vM0nzArsA-hover": { opacity: 0 } },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      C !== !1 &&
                        s(f.div, {
                          className: `framer-7coepb`,
                          "data-framer-name": `CSTag`,
                          layoutDependency: I,
                          layoutId: `hjYiz3GSD`,
                          style: {
                            backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            opacity: 0.8,
                          },
                          children: s(x, {
                            __fromCanvasComponent: !0,
                            children: s(l, {
                              children: s(f.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `13px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: `Case Study`,
                              }),
                            }),
                            className: `framer-1qlb06a`,
                            "data-framer-name": `Case Study`,
                            fonts: [`FS;Outfit-medium`],
                            layoutDependency: I,
                            layoutId: `xMJYvgzL8`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                NNrysK8nr: {
                                  children: s(l, {
                                    children: s(f.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `11px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                      },
                                      children: `Case Study`,
                                    }),
                                  }),
                                },
                              },
                              O,
                              N
                            ),
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
          `.framer-NBEA8.framer-e4g43l, .framer-NBEA8 .framer-e4g43l { display: block; }`,
          `.framer-NBEA8.framer-nm40qz { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px 100px 15px 100px; position: relative; text-decoration: none; width: 1200px; }`,
          `.framer-NBEA8 .framer-sqx1i5-container { aspect-ratio: 1.6666666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 120px); pointer-events: none; position: relative; width: 60%; }`,
          `.framer-NBEA8 .framer-1mi4yzt { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-NBEA8 .framer-1orha5d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-NBEA8 .framer-1cxf5kj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 70%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-NBEA8 .framer-pt2s91, .framer-NBEA8 .framer-1f0ldjx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-NBEA8 .framer-1fq4m4s { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-NBEA8 .framer-1jqns3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NBEA8 .framer-lvnd48 { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-NBEA8 .framer-1suv7oj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; width: 16px; z-index: 1; }`,
          `.framer-NBEA8 .framer-7coepb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 120px; overflow: hidden; padding: 12px 10px 12px 10px; position: absolute; top: 49px; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NBEA8 .framer-1qlb06a { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-NBEA8.framer-v-1rg8r74.framer-nm40qz { cursor: unset; gap: 15px; padding: 30px 16px 15px 16px; width: 342px; }`,
          `.framer-NBEA8.framer-v-1rg8r74 .framer-sqx1i5-container { aspect-ratio: 1.441860465116279 / 1; height: var(--framer-aspect-ratio-supported, 139px); }`,
          `.framer-NBEA8.framer-v-1rg8r74 .framer-1cxf5kj { width: 100%; }`,
          `.framer-NBEA8.framer-v-1rg8r74 .framer-pt2s91 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-NBEA8.framer-v-1rg8r74 .framer-1fq4m4s { gap: 10px; justify-content: flex-end; }`,
          `.framer-NBEA8.framer-v-1rg8r74 .framer-7coepb { left: 24px; top: 38px; }`,
          `.framer-NBEA8.framer-v-mjk2u8.framer-nm40qz { cursor: unset; padding: 30px 50px 15px 50px; }`,
          `.framer-NBEA8.framer-v-mjk2u8 .framer-7coepb { left: 67px; top: 45px; }`,
          `.framer-NBEA8.framer-v-nm40qz.hover .framer-1jqns3 { height: 45px; width: 94px; }`,
        ],
        `framer-NBEA8`
      )),
      ($ = Q),
      (Q.displayName = `VideoWorkList`),
      (Q.defaultProps = { height: 405, width: 1200 }),
      y(Q, {
        variant: {
          options: [`vM0nzArsA`, `NNrysK8nr`, `dkfzYjcx_`],
          optionTitles: [`Desktop`, `Phone`, `Tablet`],
          title: `Variant`,
          type: C.Enum,
        },
        Zsl7YX1CQ: {
          defaultValue: `Project Title`,
          displayTextArea: !0,
          title: `ProjectTitle`,
          type: C.String,
        },
        onZsl7YX1CQChange: { changes: `Zsl7YX1CQ`, type: C.ChangeHandler },
        a4Op4GMGU: {
          defaultValue: `Client Name`,
          displayTextArea: !1,
          title: `ClientName`,
          type: C.String,
        },
        ona4Op4GMGUChange: { changes: `a4Op4GMGU`, type: C.ChangeHandler },
        LgdGA4U0Z: {
          defaultValue: `Art Direction`,
          displayTextArea: !0,
          title: `Category`,
          type: C.String,
        },
        onLgdGA4U0ZChange: { changes: `LgdGA4U0Z`, type: C.ChangeHandler },
        y4zHDIvQS: { title: `Link`, type: C.Link },
        m75mHruIi: { defaultValue: !0, title: `Case Study`, type: C.Boolean },
        onm75mHruIiChange: { changes: `m75mHruIi`, type: C.ChangeHandler },
        Fb5Stv0oc: { title: `PosterImage`, type: C.ResponsiveImage },
        tkjUg1GHk: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          title: `VideoURL`,
          type: C.String,
        },
        ontkjUg1GHkChange: { changes: `tkjUg1GHk`, type: C.ChangeHandler },
      }),
      T(
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
          ..._e,
          ...ve,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ae = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerQGzoyu2RM`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerVariables: `{"Zsl7YX1CQ":"projectTitle","a4Op4GMGU":"clientName","LgdGA4U0Z":"category","y4zHDIvQS":"link","m75mHruIi":"caseStudy","Fb5Stv0oc":"posterImage","tkjUg1GHk":"videoURL"}`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"NNrysK8nr":{"layout":["fixed","auto"]},"dkfzYjcx_":{"layout":["fixed","auto"]},"ZGXV6O_1G":{"layout":["fixed","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `405`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1200`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { me as a, he as i, ge as n, L as o, je as r, I as s, $ as t };
//# sourceMappingURL=QGzoyu2RM.C7jgKHUZ.mjs.map
