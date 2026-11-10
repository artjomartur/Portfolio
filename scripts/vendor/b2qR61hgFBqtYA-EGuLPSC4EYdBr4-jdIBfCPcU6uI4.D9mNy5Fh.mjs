import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as t,
  D as n,
  M as r,
  O as i,
  S as a,
  T as o,
  _ as s,
  a as c,
  c as l,
  g as u,
  h as d,
  i as f,
  j as p,
  k as m,
  l as h,
  o as g,
  s as _,
} from "./react.Bb_yyrg0.mjs";
import { T as v, a as y, n as b, r as ee, t as x } from "./motion.Dq3vMtKA.mjs";
import {
  A as S,
  B as C,
  G as w,
  M as T,
  R as E,
  S as D,
  T as O,
  _ as k,
  _t as A,
  a as j,
  at as M,
  b as N,
  c as P,
  ct as F,
  dt as I,
  f as te,
  ft as ne,
  gt as re,
  h as L,
  ht as R,
  it as ie,
  j as ae,
  l as oe,
  lt as se,
  n as ce,
  nt as le,
  pt as ue,
  r as z,
  s as de,
  st as fe,
  t as B,
  tt as pe,
  ut as me,
  v as V,
  vt as H,
  w as he,
  x as ge,
  xt as _e,
  yt as ve,
  z as U,
} from "./framer.cs1Z8Vda.mjs";
import { n as ye, t as be } from "./VideoController.D9ulu-ly.mjs";
import { n as xe, t as Se } from "./Video.CtoqTS3T.mjs";
import { n as Ce, r as we } from "./WYHwmHybk.BzsrT7_E.mjs";
function Te(
  e,
  { showYear: t, showMonth: n, showWeekday: r, showMinutes: i, showSeconds: a },
  o,
  s,
  c
) {
  let l = new Date(),
    u = !r && !n && t;
  switch (e) {
    case `date`:
      return new Intl.DateTimeFormat(c, {
        weekday: r ? `long` : void 0,
        day: u ? void 0 : `numeric`,
        month: n ? s : void 0,
        year: t ? `numeric` : void 0,
      }).format(l);
    case `time`:
      return new Intl.DateTimeFormat(c, {
        hour: `numeric`,
        minute: i ? `numeric` : void 0,
        second: a && i ? `numeric` : void 0,
        hour12: o === `12h`,
      }).format(l);
    default:
      return new Intl.DateTimeFormat(c).format(l);
  }
}
function Ee(e) {
  let {
      outputType: n,
      timeFormat: i,
      showYear: a,
      showMonth: s,
      showWeekday: c,
      showMinutes: d,
      showSeconds: f,
      monthFormat: p,
      color: h,
      font: g,
      tabularFont: _,
    } = { ...Oe, ...e },
    v = F(),
    y = m(
      () =>
        Te(
          n,
          { showYear: a, showMonth: s, showWeekday: c, showMinutes: d, showSeconds: f },
          i,
          p,
          v
        ),
      [v, p, n, d, s, f, c, a, i]
    ),
    b = o(),
    ee = m(
      (e) => {
        if (e === null) {
          clearTimeout(b.current);
          return;
        }
        let t,
          n = () => {
            let r = new Date(),
              i = new Date().setSeconds(r.getSeconds() + 1, 0) - +r;
            b.current = setTimeout(n, i);
            let a = y();
            t !== a && ((e.textContent = a), (t = a));
          };
        n();
      },
      [y]
    ),
    [x, S] = r(!1),
    C = k.current() === k.canvas;
  return (
    t(() => {
      u(() => S(!0));
    }, [C]),
    l(`p`, {
      suppressHydrationWarning: !0,
      style: {
        margin: 0,
        padding: 0,
        color: h,
        fontFamily: De,
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1,
        visibility: x ? `visible` : `hidden`,
        ...g,
        fontVariantNumeric: _ ? `tabular-nums` : `normal`,
        whiteSpace: `nowrap`,
      },
      ref: C ? void 0 : ee,
      children: y(),
    })
  );
}
var De,
  Oe,
  ke = e(() => {
    (g(),
      w(),
      a(),
      (De = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
      (Oe = {
        height: 20,
        width: 140,
        outputType: `time`,
        color: `#999`,
        timeFormat: `24h`,
        showYear: !0,
        showMonth: !0,
        showWeekday: !0,
        showMinutes: !0,
        showSeconds: !0,
        monthFormat: `long`,
        alignment: `center`,
      }),
      (Ee.displayName = `Time & Date`),
      O(Ee, {
        outputType: {
          title: `Type`,
          type: z.Enum,
          displaySegmentedControl: !0,
          options: [`date`, `time`],
          optionTitles: [`Date`, `Time`],
          defaultValue: Oe.outputType,
        },
        showWeekday: {
          title: `Day`,
          type: z.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: Oe.showWeekday,
          hidden: (e) => e.outputType !== `date`,
        },
        showMonth: {
          title: `Month`,
          type: z.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: Oe.showMonth,
          hidden: (e) => e.outputType !== `date`,
        },
        monthFormat: {
          title: `Format`,
          type: z.Enum,
          options: [`short`, `long`, `numeric`],
          optionTitles: [`Short`, `Long`, `Numeric`],
          defaultValue: Oe.monthFormat,
          hidden: (e) => e.outputType !== `date` || !e.showMonth,
        },
        showYear: {
          title: `Year`,
          type: z.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: Oe.showYear,
          hidden: (e) => e.outputType !== `date`,
        },
        timeFormat: {
          title: `Format`,
          type: z.Enum,
          options: [`12h`, `24h`],
          optionTitles: [`12h`, `24h`],
          displaySegmentedControl: !0,
          defaultValue: Oe.timeFormat,
          hidden: (e) => e.outputType !== `time`,
        },
        showMinutes: {
          title: `Minutes`,
          type: z.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: Oe.showMinutes,
          hidden: (e) => e.outputType !== `time`,
        },
        showSeconds: {
          title: `Seconds`,
          type: z.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: Oe.showSeconds,
          hidden: (e) => e.outputType !== `time` || !e.showMinutes,
        },
        font: { type: z.Font, controls: `extended` },
        tabularFont: { title: `Tabular`, type: z.Boolean, defaultValue: !0 },
        color: { type: z.Color, defaultValue: Oe.color },
      }));
  }),
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re = e(() => {
    (g(),
      w(),
      a(),
      (Ae = `var(--framer-icon-mask)`),
      (je = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Me = v.create(je)),
      (Ne = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Me, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Pe = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 6 0 C 6.552 0 7 0.448 7 1 L 7 6 C 7 6.552 6.552 7 6 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" fill="transparent" height="7px" id="uNeyiDFna" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="7px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 6 0 C 6.552 0 7 0.448 7 1 L 7 6 C 7 6.552 6.552 7 6 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" fill="transparent" height="7px" id="tCzKFE1z1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 14)" width="7px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 6 0 C 6.552 0 7 0.448 7 1 L 7 6 C 7 6.552 6.552 7 6 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" fill="transparent" height="7px" id="gHUIvqnrv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(14 3)" width="7px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 6 0 C 6.552 0 7 0.448 7 1 L 7 6 C 7 6.552 6.552 7 6 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" fill="transparent" height="7px" id="FDfjO300A" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(14 14)" width="7px"/></svg>`),
      (Fe = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Ie = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Fe(e),
            u = R(`87938747`, Pe);
          return l(Ne, {
            ...c,
            className: S(`framer-bTceh`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-bTceh { -webkit-mask: ${Ae}; aspect-ratio: 1; display: block; mask: ${Ae}; width: 24px; }`,
        ],
        `framer-bTceh`
      )),
      (Ie.displayName = `Grid 1`),
      (Le = Ie),
      O(Ie, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe = e(() => {
    (g(),
      w(),
      a(),
      (ze = `var(--framer-icon-mask)`),
      (Be = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ve = v.create(Be)),
      (He = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Ve, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Ue = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10 6 L 10 10 M 10 14.02 L 10 14 M 8.164 1.005 L 0.202 15.47 C -0.444 16.643 0.54 18 2.037 18 L 17.963 18 C 19.46 18 20.444 16.643 19.798 15.47 L 11.836 1.005 C 11.098 -0.335 8.902 -0.335 8.164 1.005 Z" fill="transparent" height="18px" id="O9Yg6wJvj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="20.000025456367908px"/></svg>`),
      (We = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Ge = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = We(e),
            u = R(`4215688087`, Ue);
          return l(He, {
            ...c,
            className: S(`framer-eAAjj`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-eAAjj { -webkit-mask: ${ze}; aspect-ratio: 1; display: block; mask: ${ze}; width: 24px; }`,
        ],
        `framer-eAAjj`
      )),
      (Ge.displayName = `Alert Error`),
      (Ke = Ge),
      O(Ge, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt = e(() => {
    (g(),
      w(),
      a(),
      (Je = `var(--framer-icon-mask)`),
      (Ye = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Xe = v.create(Ye)),
      (Ze = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Xe, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Qe = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 15 15 L 20 20 M 17.5 8.75 C 17.5 13.582 13.582 17.5 8.75 17.5 C 3.918 17.5 0 13.582 0 8.75 C 0 3.918 3.918 0 8.75 0 C 13.582 0 17.5 3.918 17.5 8.75 Z" fill="transparent" height="20px" id="CbPG375la" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      ($e = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (et = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = $e(e),
            u = R(`1945372381`, Qe);
          return l(Ze, {
            ...c,
            className: S(`framer-EEtY7`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-EEtY7 { -webkit-mask: ${Je}; aspect-ratio: 1; display: block; mask: ${Je}; width: 24px; }`,
        ],
        `framer-EEtY7`
      )),
      (et.displayName = `Search`),
      (tt = et),
      O(et, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt = e(() => {
    (g(),
      w(),
      a(),
      (rt = `var(--framer-icon-mask)`),
      (it = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (at = v.create(it)),
      (ot = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(at, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (st = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14 9 L 15 9 C 16.657 9 18 10.343 18 12 L 18 15 C 18 16.657 16.657 18 15 18 L 3 18 C 1.343 18 0 16.657 0 15 L 0 12 C 0 10.343 1.343 9 3 9 L 4 9 M 5 4 L 9 0 M 9 0 L 13 4 M 9 0 L 9 12" fill="transparent" height="18px" id="row5NtM2J" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="18px"/></svg>`),
      (ct = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (lt = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = ct(e),
            u = R(`2207828144`, st);
          return l(ot, {
            ...c,
            className: S(`framer-kdZvu`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-kdZvu { -webkit-mask: ${rt}; aspect-ratio: 1; display: block; mask: ${rt}; width: 24px; }`,
        ],
        `framer-kdZvu`
      )),
      (lt.displayName = `Upload Share Upload`),
      (ut = lt),
      O(lt, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt = e(() => {
    (g(),
      w(),
      a(),
      (ft = `var(--framer-icon-mask)`),
      (pt = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (mt = v.create(pt)),
      (ht = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(mt, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (gt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8 0 L 0 8 L 8 16" fill="transparent" height="16px" id="IigzkEdGL" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(8 4)" width="8px"/></svg>`),
      (_t = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (vt = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = _t(e),
            u = R(`562735719`, gt);
          return l(ht, {
            ...c,
            className: S(`framer-MUphw`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-MUphw { -webkit-mask: ${ft}; aspect-ratio: 1; display: block; mask: ${ft}; width: 24px; }`,
        ],
        `framer-MUphw`
      )),
      (vt.displayName = `Arrow Chevron Left`),
      (yt = vt),
      O(vt, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt = e(() => {
    (g(),
      w(),
      a(),
      (xt = `var(--framer-icon-mask)`),
      (St = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ct = v.create(St)),
      (wt = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Ct, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Tt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 4.016 4.016 L 4 4 M 0 0 L 0 9.393 L 8.051 17.444 C 8.792 18.185 9.994 18.185 10.735 17.444 L 17.444 10.735 C 18.185 9.994 18.185 8.792 17.444 8.051 L 9.393 0 Z" fill="transparent" height="18.000025px" id="B8Midt7NX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="18.000025px"/></svg>`),
      (Et = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Dt = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Et(e),
            u = R(`951106847`, Tt);
          return l(wt, {
            ...c,
            className: S(`framer-yeBos`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-yeBos { -webkit-mask: ${xt}; aspect-ratio: 1; display: block; mask: ${xt}; width: 24px; }`,
        ],
        `framer-yeBos`
      )),
      (Dt.displayName = `Tag Price Discount`),
      (Ot = Dt),
      O(Dt, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt = e(() => {
    (g(),
      w(),
      a(),
      (At = `var(--framer-icon-mask)`),
      (jt = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Mt = v.create(jt)),
      (Nt = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Mt, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Pt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 8 8 L 0 16" fill="transparent" height="16px" id="ghtrj_K1f" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(8 4)" width="8px"/></svg>`),
      (Ft = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (It = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Ft(e),
            u = R(`2736393349`, Pt);
          return l(Nt, {
            ...c,
            className: S(`framer-leVzG`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-leVzG { -webkit-mask: ${At}; aspect-ratio: 1; display: block; mask: ${At}; width: 24px; }`,
        ],
        `framer-leVzG`
      )),
      (It.displayName = `Arrow Chevron Right`),
      (Lt = It),
      O(It, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  });
function zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  W,
  Xt = e(() => {
    (g(),
      w(),
      x(),
      a(),
      (Bt = { JDZ78OwRY: { hover: !0 } }),
      (Vt = `framer-UEF78`),
      (Ht = { JDZ78OwRY: `framer-v-1wajoz1` }),
      (Ut = { bounce: 0, delay: 0, duration: 0.2, type: `spring` }),
      (Wt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Gt = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (Kt = v.create(p)),
      (qt = ({ click: e, height: t, id: n, image: r, title: i, width: a, ...o }) => ({
        ...o,
        cjUkKfSnr: e ?? o.cjUkKfSnr,
        EBsOzoAvt: r ?? o.EBsOzoAvt,
        meyCDwPZV: i ?? o.meyCDwPZV ?? `Home`,
      })),
      (Jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Yt = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se(),
            u = le(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: g,
              EBsOzoAvt: _,
              meyCDwPZV: y,
              cjUkKfSnr: b,
              ...x
            } = qt(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = re({
              defaultVariant: `JDZ78OwRY`,
              enabledGestures: Bt,
              ref: r,
              variant: g,
              variantClassNames: Ht,
            }),
            P = Jt(e, M),
            { activeVariantCallback: F, delay: I } = pe(w),
            te = F(async (...e) => {
              if ((A({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            ne = S(Vt);
          return l(ee, {
            id: m ?? i,
            children: l(Kt, {
              animate: M,
              initial: !1,
              children: l(Gt, {
                value: Ut,
                children: l(v.div, {
                  ...x,
                  ...D,
                  className: S(ne, `framer-1wajoz1`, f, T),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `JDZ78OwRY`,
                  onTap: te,
                  ref: r,
                  style: { ...d },
                  ...zt({ "JDZ78OwRY-hover": { "data-framer-name": void 0 } }, w, O),
                  children: h(v.div, {
                    className: `framer-gm90gu`,
                    layoutDependency: P,
                    layoutId: `pYgWYeuRg`,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    variants: {
                      "JDZ78OwRY-hover": {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                    },
                    ...zt({ "JDZ78OwRY-hover": { "data-border": !0 } }, w, O),
                    children: [
                      l(de, {
                        background: {
                          alt: ``,
                          fit: `fit`,
                          intrinsicHeight: 100,
                          intrinsicWidth: 100,
                          loading: C(
                            (u?.y || 0) + 0 + (((u?.height || 82) - 0 - 132) / 2 + 0 + 0) + 0 + 0
                          ),
                          pixelHeight: 100,
                          pixelWidth: 100,
                          sizes: `60px`,
                          ...Wt(_),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-1ygv0qn`,
                        "data-framer-name": `FileIcon`,
                        fitImageDimension: `height`,
                        layoutDependency: P,
                        layoutId: `hJ740AuUG`,
                        style: {
                          borderBottomLeftRadius: 3,
                          borderBottomRightRadius: 3,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                        },
                        ...zt(
                          {
                            "JDZ78OwRY-hover": {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 100,
                                intrinsicWidth: 100,
                                loading: C(
                                  (u?.y || 0) +
                                    0 +
                                    (((u?.height || 92) - 0 - 142) / 2 + 0 + 0) +
                                    5 +
                                    0
                                ),
                                pixelHeight: 100,
                                pixelWidth: 100,
                                sizes: `60px`,
                                ...Wt(_),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                          },
                          w,
                          O
                        ),
                      }),
                      l(v.div, {
                        className: `framer-aa47ih`,
                        layoutDependency: P,
                        layoutId: `sc4IHnn1o`,
                        style: {
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                        },
                        variants: {
                          "JDZ78OwRY-hover": {
                            backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                          },
                        },
                        children: l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                              },
                              children: `Home`,
                            }),
                          }),
                          className: `framer-98r4mw`,
                          fonts: [`FS;Outfit-regular`],
                          layoutDependency: P,
                          layoutId: `nVheNxMgT`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `.framer-UEF78.framer-wptqgf, .framer-UEF78 .framer-wptqgf { display: block; }`,
          `.framer-UEF78.framer-1wajoz1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-UEF78 .framer-gm90gu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-UEF78 .framer-1ygv0qn { flex: none; height: auto; max-height: 70px; min-height: 45px; overflow: visible; position: relative; width: 60px; z-index: 1; }`,
          `.framer-UEF78 .framer-aa47ih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px; position: relative; width: min-content; }`,
          `.framer-UEF78 .framer-98r4mw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 65px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-UEF78.framer-v-1wajoz1.hover .framer-gm90gu { padding: 5px; }`,
          `.framer-UEF78[data-border="true"]::after, .framer-UEF78 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UEF78`
      )),
      (W = Yt),
      (Yt.displayName = `DesktopFiles`),
      (Yt.defaultProps = { height: 82, width: 69 }),
      O(Yt, {
        EBsOzoAvt: { title: `Image`, type: z.ResponsiveImage },
        meyCDwPZV: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: z.String },
        onmeyCDwPZVChange: { changes: `meyCDwPZV`, type: z.ChangeHandler },
        cjUkKfSnr: { title: `Click`, type: z.EventHandler },
      }),
      he(
        Yt,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn = e(() => {
    (g(),
      w(),
      x(),
      a(),
      Re(),
      qe(),
      nt(),
      dt(),
      bt(),
      kt(),
      Rt(),
      Xt(),
      (Qt = E(yt)),
      ($t = E(Lt)),
      (en = E(ut)),
      (tn = E(Ot)),
      (nn = E(Le)),
      (rn = E(tt)),
      (an = E(W)),
      (on = E(Ke)),
      (sn = [`lOX7pAPbe`, `Gc55Buu22`]),
      (cn = `framer-pQPac`),
      (ln = { Gc55Buu22: `framer-v-1dawz1i`, lOX7pAPbe: `framer-v-gxtqgv` }),
      (un = { duration: 0, type: `tween` }),
      (dn = (e, t) => `translate(-50%, -50%) ${t}`),
      (fn = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (pn = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (mn = { "Variant 1": `lOX7pAPbe`, "Variant 2": `Gc55Buu22` }),
      (hn = v.create(p)),
      (gn = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        d1W1Z2nEo: e ?? i.d1W1Z2nEo,
        variant: mn[i.variant] ?? i.variant ?? `lOX7pAPbe`,
      })),
      (_n = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (vn = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se(),
            u = le(),
            { style: d, className: f, layoutId: m, variant: g, d1W1Z2nEo: _, ...y } = gn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = re({
              cycleOrder: sn,
              defaultVariant: `lOX7pAPbe`,
              ref: r,
              variant: g,
              variantClassNames: ln,
            }),
            j = _n(e, A),
            { activeVariantCallback: M, delay: P } = pe(b),
            F = M(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
            }),
            I = M(async (...e) => {
              k(`Gc55Buu22`);
            }),
            te = M(async (...e) => {
              k(`lOX7pAPbe`);
            }),
            ne = S(cn),
            L = () => b === `Gc55Buu22`;
          return l(ee, {
            id: m ?? i,
            children: l(hn, {
              animate: A,
              initial: !1,
              children: l(pn, {
                value: un,
                children: h(v.div, {
                  ...y,
                  ...w,
                  className: S(ne, `framer-gxtqgv`, f, x),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `lOX7pAPbe`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...d,
                  },
                  ...Zt({ Gc55Buu22: { "data-framer-name": `Variant 2` } }, b, T),
                  children: [
                    h(v.div, {
                      className: `framer-tkvae`,
                      "data-framer-name": `TopBar`,
                      layoutDependency: j,
                      layoutId: `cu2GgML87`,
                      children: [
                        h(v.div, {
                          className: `framer-eto4lf`,
                          "data-highlight": !0,
                          layoutDependency: j,
                          layoutId: `rhpLT1PQJ`,
                          onTap: F,
                          children: [
                            l(v.div, {
                              className: `framer-1yrclbl`,
                              layoutDependency: j,
                              layoutId: `P0jLZoURk`,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-1y30hus`,
                              layoutDependency: j,
                              layoutId: `aHAZjDkyp`,
                              style: {
                                backgroundColor: `var(--token-4277ec07-6b7c-4224-b5fc-ef6ee750288b, rgb(255, 232, 21))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-14leawq`,
                              layoutDependency: j,
                              layoutId: `yjWZfOk5O`,
                              style: {
                                backgroundColor: `var(--token-956c8e5d-f704-4307-a99c-526b9b90099b, rgb(69, 255, 8))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                          ],
                        }),
                        h(v.div, {
                          className: `framer-yzb15h`,
                          layoutDependency: j,
                          layoutId: `bgBVox7Ly`,
                          children: [
                            l(yt, {
                              animated: !0,
                              className: `framer-1yxq2b2`,
                              layoutDependency: j,
                              layoutId: `qTvXBqlTg`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                            }),
                            l(Lt, {
                              animated: !0,
                              className: `framer-15ie9mm`,
                              layoutDependency: j,
                              layoutId: `piQE0GIaU`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                            }),
                          ],
                        }),
                        l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                              },
                              children: `Trash`,
                            }),
                          }),
                          className: `framer-18rzx6m`,
                          fonts: [`FS;Outfit-regular`],
                          layoutDependency: j,
                          layoutId: `ZyFTDmued`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        h(v.div, {
                          className: `framer-1ds1gc4`,
                          layoutDependency: j,
                          layoutId: `Oo9mbKStl`,
                          children: [
                            l(ut, {
                              animated: !0,
                              className: `framer-pvhpbl`,
                              layoutDependency: j,
                              layoutId: `B2xgaXFz1`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                            }),
                            l(Ot, {
                              animated: !0,
                              className: `framer-1vofzjo`,
                              layoutDependency: j,
                              layoutId: `CjDA9fGT4`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                            }),
                            l(Le, {
                              animated: !0,
                              className: `framer-9w01ax`,
                              layoutDependency: j,
                              layoutId: `cQkwHhjtL`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                            }),
                          ],
                        }),
                        l(tt, {
                          animated: !0,
                          className: `framer-m9g1hw`,
                          layoutDependency: j,
                          layoutId: `vBy0K3KLa`,
                          style: {
                            "--1ww558a": 2,
                            "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                          },
                        }),
                      ],
                    }),
                    h(v.div, {
                      className: `framer-sxbdlg`,
                      layoutDependency: j,
                      layoutId: `qUfS8kB3R`,
                      style: {
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      },
                      children: [
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 34 + -41,
                          children: l(D, {
                            className: `framer-1u20x0a-container`,
                            layoutDependency: j,
                            layoutId: `kBb5Bll89-container`,
                            nodeId: `kBb5Bll89`,
                            rendersWithMotion: !0,
                            scopeId: `cp3ZS1V84`,
                            transformTemplate: dn,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: fn(
                                {
                                  pixelHeight: 456,
                                  pixelWidth: 457,
                                  src: `https://framerusercontent.com/images/qT6IQ5MsRJgcv8S2wvMoOGbdHZE.png?width=457&height=456`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `kBb5Bll89`,
                              layoutId: `kBb5Bll89`,
                              meyCDwPZV: `logo_from_client.docx`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 34 + -41,
                          children: l(D, {
                            className: `framer-1qmv3iv-container`,
                            layoutDependency: j,
                            layoutId: `eV34GApQG-container`,
                            nodeId: `eV34GApQG`,
                            rendersWithMotion: !0,
                            scopeId: `cp3ZS1V84`,
                            transformTemplate: dn,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: fn(
                                {
                                  pixelHeight: 1675,
                                  pixelWidth: 1680,
                                  src: `https://framerusercontent.com/images/GM8o1y2lY87OssIaK5NdyND990.png?width=1680&height=1675`,
                                  srcSet: `https://framerusercontent.com/images/GM8o1y2lY87OssIaK5NdyND990.png?scale-down-to=512&width=1680&height=1675 512w,https://framerusercontent.com/images/GM8o1y2lY87OssIaK5NdyND990.png?scale-down-to=1024&width=1680&height=1675 1024w,https://framerusercontent.com/images/GM8o1y2lY87OssIaK5NdyND990.png?width=1680&height=1675 1680w`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `eV34GApQG`,
                              layoutId: `eV34GApQG`,
                              meyCDwPZV: `Unpaid Invoices.pdf`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 34 + -41,
                          children: l(D, {
                            className: `framer-1df7enh-container`,
                            layoutDependency: j,
                            layoutId: `fNijm1ldp-container`,
                            nodeId: `fNijm1ldp`,
                            rendersWithMotion: !0,
                            scopeId: `cp3ZS1V84`,
                            transformTemplate: dn,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: fn(
                                {
                                  pixelHeight: 234,
                                  pixelWidth: 234,
                                  src: `https://framerusercontent.com/images/gaXs7V5lpeqh05mTjB4727zJFc.png?width=234&height=234`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `fNijm1ldp`,
                              layoutId: `fNijm1ldp`,
                              meyCDwPZV: `Comic Sans.ttf`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 34 + -41,
                          children: l(D, {
                            className: `framer-t6m9ur-container`,
                            layoutDependency: j,
                            layoutId: `afR7BM14t-container`,
                            nodeId: `afR7BM14t`,
                            rendersWithMotion: !0,
                            scopeId: `cp3ZS1V84`,
                            transformTemplate: dn,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: fn(
                                {
                                  pixelHeight: 465,
                                  pixelWidth: 456,
                                  src: `https://framerusercontent.com/images/kjMio8z48j7Yt1trdW15la5WcS0.png?width=456&height=465`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `afR7BM14t`,
                              layoutId: `afR7BM14t`,
                              meyCDwPZV: `Layer 1 copy 99.psd`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 34 + -41,
                          children: l(D, {
                            className: `framer-l6ue52-container`,
                            layoutDependency: j,
                            layoutId: `g9zBo6wbo-container`,
                            nodeId: `g9zBo6wbo`,
                            rendersWithMotion: !0,
                            scopeId: `cp3ZS1V84`,
                            transformTemplate: dn,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: fn(
                                {
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: `https://framerusercontent.com/images/6owKSH5eo4K2RNExIuRsZKbV3pk.png?width=512&height=512`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `g9zBo6wbo`,
                              layoutId: `g9zBo6wbo`,
                              meyCDwPZV: `whatwereyouthinking`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    L() &&
                      l(v.div, {
                        className: `framer-118lqcx`,
                        layoutDependency: j,
                        layoutId: `cVvW1VhXB`,
                        style: { backgroundColor: `rgba(0, 0, 0, 0.8)` },
                        children: h(v.div, {
                          className: `framer-ty06fk`,
                          layoutDependency: j,
                          layoutId: `n9gyDF1Gn`,
                          style: {
                            backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                          },
                          children: [
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `You are trying to open a file containing high levels of professional trauma. For your own mental health, this file is permanently locked.`,
                                }),
                              }),
                              className: `framer-e6f0dh`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: j,
                              layoutId: `wcirIfhup`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(v.div, {
                              className: `framer-lhk6u`,
                              "data-highlight": !0,
                              layoutDependency: j,
                              layoutId: `nsbXMdqt7`,
                              onTap: te,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                              },
                              children: l(N, {
                                __fromCanvasComponent: !0,
                                children: l(p, {
                                  children: l(v.p, {
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
                                    children: `I'll move on`,
                                  }),
                                }),
                                className: `framer-17ntgfw`,
                                fonts: [`FS;Outfit-medium`],
                                layoutDependency: j,
                                layoutId: `WcQiHyqmI`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(Ke, {
                              animated: !0,
                              className: `framer-1kp8280`,
                              layoutDependency: j,
                              layoutId: `vvaw3F01b`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                              },
                            }),
                          ],
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
          `.framer-pQPac.framer-qfjeob, .framer-pQPac .framer-qfjeob { display: block; }`,
          `.framer-pQPac.framer-gxtqgv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: 420px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 650px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pQPac .framer-tkvae { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 20px 0px 0px; position: relative; width: 100%; }`,
          `.framer-pQPac .framer-eto4lf { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-pQPac .framer-1yrclbl, .framer-pQPac .framer-1y30hus, .framer-pQPac .framer-14leawq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pQPac .framer-yzb15h, .framer-pQPac .framer-1ds1gc4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-pQPac .framer-1yxq2b2, .framer-pQPac .framer-15ie9mm, .framer-pQPac .framer-pvhpbl, .framer-pQPac .framer-1vofzjo, .framer-pQPac .framer-9w01ax { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-pQPac .framer-18rzx6m, .framer-pQPac .framer-17ntgfw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-pQPac .framer-m9g1hw { flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-pQPac .framer-sxbdlg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 348px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-pQPac .framer-1u20x0a-container { flex: none; height: auto; left: 19%; position: absolute; top: 31%; width: auto; z-index: 1; }`,
          `.framer-pQPac .framer-1qmv3iv-container { flex: none; height: auto; left: 31%; position: absolute; top: 56%; width: auto; z-index: 1; }`,
          `.framer-pQPac .framer-1df7enh-container { flex: none; height: auto; left: 53%; position: absolute; top: 21%; width: auto; z-index: 1; }`,
          `.framer-pQPac .framer-t6m9ur-container { flex: none; height: auto; left: 57%; position: absolute; top: 73%; width: auto; z-index: 1; }`,
          `.framer-pQPac .framer-l6ue52-container { flex: none; height: auto; left: 71%; position: absolute; top: 50%; width: auto; z-index: 1; }`,
          `.framer-pQPac .framer-118lqcx { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-pQPac .framer-ty06fk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: min-content; }`,
          `.framer-pQPac .framer-e6f0dh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 177px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-pQPac .framer-lhk6u { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; }`,
          `.framer-pQPac .framer-1kp8280 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 20px; }`,
          `.framer-pQPac.framer-v-1dawz1i .framer-e6f0dh { order: 1; }`,
          `.framer-pQPac.framer-v-1dawz1i .framer-lhk6u { order: 2; }`,
          `.framer-pQPac.framer-v-1dawz1i .framer-1kp8280 { height: var(--framer-aspect-ratio-supported, 20px); order: 0; }`,
          `.framer-pQPac[data-border="true"]::after, .framer-pQPac [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-pQPac`
      )),
      (yn = vn),
      (vn.displayName = `TrashWindow`),
      (vn.defaultProps = { height: 420, width: 650 }),
      O(vn, {
        variant: {
          options: [`lOX7pAPbe`, `Gc55Buu22`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        d1W1Z2nEo: { title: `Click`, type: z.EventHandler },
      }),
      he(
        vn,
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
            ],
          },
          ...Qt,
          ...$t,
          ...en,
          ...tn,
          ...nn,
          ...rn,
          ...an,
          ...on,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (vn.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(W, {}, t)])) }));
  });
function xn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = e(() => {
    (g(),
      w(),
      x(),
      a(),
      (Sn = [
        `zZpmdu5JO`,
        `fsqRdpUJA`,
        `efR4gOpF7`,
        `lcOI5omCn`,
        `XRD4qFYHc`,
        `EBwYMElcs`,
        `dbZ_1QjPP`,
      ]),
      (Cn = `framer-TyKa3`),
      (wn = {
        dbZ_1QjPP: `framer-v-u45b58`,
        EBwYMElcs: `framer-v-1ls8tzf`,
        efR4gOpF7: `framer-v-yd715g`,
        fsqRdpUJA: `framer-v-jq3buy`,
        lcOI5omCn: `framer-v-1jh74lu`,
        XRD4qFYHc: `framer-v-15tbjny`,
        zZpmdu5JO: `framer-v-16rg0wc`,
      }),
      (Tn = { bounce: 0.2, delay: 0, duration: 0.5, type: `spring` }),
      (En = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Dn = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (On = (e, t) => `translateX(-50%) ${t}`),
      (kn = (e, t) => `translate(-50%, -50%) ${t}`),
      (An = {
        AppClosed: `zZpmdu5JO`,
        AppOpened1: `fsqRdpUJA`,
        AppOpened2: `efR4gOpF7`,
        AppOpened3: `lcOI5omCn`,
        AppOpened4: `XRD4qFYHc`,
        AppOpened5: `EBwYMElcs`,
        AppOpened6: `dbZ_1QjPP`,
      }),
      (jn = v.create(p)),
      (Mn = ({
        height: e,
        iconClick: t,
        id: n,
        image: r,
        link: i,
        mouseEnter: a,
        title: o,
        tooltip: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Gqhb9s9cb: a ?? l.Gqhb9s9cb,
        hyis294h6: s ?? l.hyis294h6 ?? !0,
        k2dZaElG4: r ??
          l.k2dZaElG4 ?? {
            pixelHeight: 256,
            pixelWidth: 256,
            src: `https://framerusercontent.com/images/qIGoG93ybVxBWLVSNwMzymUz66o.png?width=256&height=256`,
          },
        O6iGyUsLY: i ?? l.O6iGyUsLY,
        skOprlMdR: t ?? l.skOprlMdR,
        variant: An[l.variant] ?? l.variant ?? `zZpmdu5JO`,
        vXrwEHo7K: o ?? l.vXrwEHo7K ?? `App Name`,
      })),
      (Nn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pn = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se(),
            u = le(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: g,
              k2dZaElG4: _,
              Gqhb9s9cb: y,
              vXrwEHo7K: b,
              hyis294h6: x,
              skOprlMdR: w,
              O6iGyUsLY: T,
              ...E
            } = Mn(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: P,
              setVariant: F,
              variants: ne,
            } = re({
              cycleOrder: Sn,
              defaultVariant: `zZpmdu5JO`,
              ref: r,
              variant: g,
              variantClassNames: wn,
            }),
            L = Nn(e, ne),
            { activeVariantCallback: R, delay: ie } = pe(D),
            ae = R(async (...e) => {
              await ie(() => F(`efR4gOpF7`), 300);
            }),
            oe = R(async (...e) => {
              await ie(() => F(`lcOI5omCn`), 300);
            }),
            ce = R(async (...e) => {
              await ie(() => F(`XRD4qFYHc`), 300);
            }),
            ue = R(async (...e) => {
              await ie(() => F(`EBwYMElcs`), 300);
            }),
            z = R(async (...e) => {
              await ie(() => F(`dbZ_1QjPP`), 300);
            }),
            fe = R(async (...e) => {
              if (w && (await w(...e)) === !1) return !1;
              F(`fsqRdpUJA`);
            }),
            B = R(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
            }),
            me = R(async (...e) => {
              if (w && (await w(...e)) === !1) return !1;
            });
          I(D, { EBwYMElcs: z, efR4gOpF7: oe, fsqRdpUJA: ae, lcOI5omCn: ce, XRD4qFYHc: ue });
          let V = S(Cn),
            H = () =>
              !![
                `fsqRdpUJA`,
                `efR4gOpF7`,
                `lcOI5omCn`,
                `XRD4qFYHc`,
                `EBwYMElcs`,
                `dbZ_1QjPP`,
              ].includes(D);
          return l(ee, {
            id: m ?? i,
            children: l(jn, {
              animate: ne,
              initial: !1,
              children: l(Dn, {
                value: Tn,
                children: h(v.div, {
                  ...E,
                  ...A,
                  className: S(V, `framer-16rg0wc`, f, O),
                  "data-framer-name": `AppClosed`,
                  layoutDependency: L,
                  layoutId: `zZpmdu5JO`,
                  ref: r,
                  style: { ...d },
                  ...xn(
                    {
                      dbZ_1QjPP: { "data-framer-name": `AppOpened6` },
                      EBwYMElcs: { "data-framer-name": `AppOpened5`, "data-highlight": !0 },
                      efR4gOpF7: { "data-framer-name": `AppOpened2`, "data-highlight": !0 },
                      fsqRdpUJA: { "data-framer-name": `AppOpened1`, "data-highlight": !0 },
                      lcOI5omCn: { "data-framer-name": `AppOpened3`, "data-highlight": !0 },
                      XRD4qFYHc: { "data-framer-name": `AppOpened4`, "data-highlight": !0 },
                    },
                    D,
                    j
                  ),
                  children: [
                    l(Dn, {
                      ...xn({ fsqRdpUJA: { value: Tn } }, D, j),
                      children: l(te, {
                        href: T,
                        motionChild: !0,
                        nodeId: `f7jc0S36M`,
                        openInNewTab: !0,
                        scopeId: `JE0zzCUFY`,
                        children: l(de, {
                          as: `a`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: C((u?.y || 0) + 10),
                            pixelHeight: 256,
                            pixelWidth: 256,
                            sizes: `calc(${u?.width || `100vw`} - 20px)`,
                            ...En(_),
                          },
                          className: `framer-142rwaj framer-1v88tbm`,
                          "data-highlight": !0,
                          layoutDependency: L,
                          layoutId: `f7jc0S36M`,
                          onMouseEnter: B,
                          onTap: fe,
                          ...xn(
                            {
                              dbZ_1QjPP: { onTap: me },
                              EBwYMElcs: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: C((u?.y || 0) + -22),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  sizes: `calc(${u?.width || `100vw`} - 20px)`,
                                  ...En(_),
                                },
                                onTap: me,
                              },
                              fsqRdpUJA: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: C((u?.y || 0) + -22),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  sizes: `calc(${u?.width || `100vw`} - 20px)`,
                                  ...En(_),
                                },
                                onTap: me,
                              },
                              lcOI5omCn: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: C((u?.y || 0) + -22),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  sizes: `calc(${u?.width || `100vw`} - 20px)`,
                                  ...En(_),
                                },
                                onTap: me,
                              },
                            },
                            D,
                            j
                          ),
                        }),
                      }),
                    }),
                    H() &&
                      l(Dn, {
                        ...xn({ fsqRdpUJA: { value: Tn } }, D, j),
                        children: l(v.div, {
                          className: `framer-16tj7l8`,
                          "data-framer-name": `dot`,
                          layoutDependency: L,
                          layoutId: `X7zjFPCgx`,
                          style: {
                            backgroundColor: `rgb(130, 130, 130)`,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                          },
                          transformTemplate: On,
                        }),
                      }),
                    x !== !1 &&
                      l(Dn, {
                        ...xn({ fsqRdpUJA: { value: Tn } }, D, j),
                        children: h(v.div, {
                          className: `framer-19brg63`,
                          layoutDependency: L,
                          layoutId: `n7jB3QUQI`,
                          style: {
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          transformTemplate: kn,
                          children: [
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `Figma`,
                                }),
                              }),
                              className: `framer-d2i9fs`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: L,
                              layoutId: `dnV1yrLP6`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(v.div, {
                              className: `framer-tupjgi`,
                              "data-border": !0,
                              "data-framer-name": `border`,
                              layoutDependency: L,
                              layoutId: `opiXXcu_F`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                            }),
                          ],
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
          `.framer-TyKa3.framer-1v88tbm, .framer-TyKa3 .framer-1v88tbm { display: block; }`,
          `.framer-TyKa3.framer-16rg0wc { height: 70px; overflow: visible; position: relative; width: 70px; }`,
          `.framer-TyKa3 .framer-142rwaj { bottom: 10px; cursor: pointer; flex: none; left: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 10px; text-decoration: none; top: 10px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-TyKa3 .framer-16tj7l8 { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 3px); left: 50%; overflow: visible; position: absolute; width: 3px; }`,
          `.framer-TyKa3 .framer-19brg63 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 8px 16px 8px 16px; position: absolute; top: -23%; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-TyKa3 .framer-d2i9fs { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-TyKa3 .framer-tupjgi { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-TyKa3.framer-v-jq3buy .framer-142rwaj, .framer-TyKa3.framer-v-1jh74lu .framer-142rwaj, .framer-TyKa3.framer-v-1ls8tzf .framer-142rwaj { bottom: 42px; top: -22px; }`,
          `.framer-TyKa3[data-border="true"]::after, .framer-TyKa3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-TyKa3`
      )),
      (Fn = Pn),
      (Pn.displayName = `DockIcon`),
      (Pn.defaultProps = { height: 70, width: 70 }),
      O(Pn, {
        variant: {
          options: [
            `zZpmdu5JO`,
            `fsqRdpUJA`,
            `efR4gOpF7`,
            `lcOI5omCn`,
            `XRD4qFYHc`,
            `EBwYMElcs`,
            `dbZ_1QjPP`,
          ],
          optionTitles: [
            `AppClosed`,
            `AppOpened1`,
            `AppOpened2`,
            `AppOpened3`,
            `AppOpened4`,
            `AppOpened5`,
            `AppOpened6`,
          ],
          title: `Variant`,
          type: z.Enum,
        },
        k2dZaElG4: {
          __defaultAssetReference: `data:framer/asset-reference,qIGoG93ybVxBWLVSNwMzymUz66o.png?originalFilename=lowResPngFile_4a2f1b4c5001a04f4cd2e54f7116d16c_low_res_Finder_Beta_2__Liquid_Glass_.png&width=256&height=256`,
          title: `Image`,
          type: z.ResponsiveImage,
        },
        Gqhb9s9cb: { title: `Mouse Enter`, type: z.EventHandler },
        vXrwEHo7K: {
          defaultValue: `App Name`,
          displayTextArea: !1,
          title: `Title`,
          type: z.String,
        },
        onvXrwEHo7KChange: { changes: `vXrwEHo7K`, type: z.ChangeHandler },
        hyis294h6: { defaultValue: !0, title: `Tooltip`, type: z.Boolean },
        onhyis294h6Change: { changes: `hyis294h6`, type: z.ChangeHandler },
        skOprlMdR: { title: `Icon Click`, type: z.EventHandler },
        O6iGyUsLY: { title: `Link`, type: z.Link },
      }),
      he(
        Pn,
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ln(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (g(),
      w(),
      x(),
      a(),
      In(),
      (Rn = E(Fn)),
      (zn = [
        `Qcz_TOTKQ`,
        `enEwXBaT2`,
        `r2BjXLR2N`,
        `PMEH1QA5M`,
        `nbVOQmXif`,
        `Pro5VF6qm`,
        `d7ovyU_95`,
      ]),
      (Bn = `framer-UCvNn`),
      (Vn = {
        d7ovyU_95: `framer-v-10rkda`,
        enEwXBaT2: `framer-v-sh4yrc`,
        nbVOQmXif: `framer-v-1hhiiet`,
        PMEH1QA5M: `framer-v-1nnseel`,
        Pro5VF6qm: `framer-v-1yjuei`,
        Qcz_TOTKQ: `framer-v-1f4wutp`,
        r2BjXLR2N: `framer-v-1akenwz`,
      }),
      (Hn = { bounce: 0.2, delay: 0, duration: 0.5, type: `spring` }),
      (Un = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Wn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Gn = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (Kn = {
        1: `enEwXBaT2`,
        2: `r2BjXLR2N`,
        3: `PMEH1QA5M`,
        4: `nbVOQmXif`,
        5: `Pro5VF6qm`,
        default: `Qcz_TOTKQ`,
        Phone: `d7ovyU_95`,
      }),
      (qn = v.create(p)),
      (Jn = ({
        app1Click: e,
        app2Click: t,
        app3Click: n,
        app4Click: r,
        app5Click: i,
        height: a,
        id: o,
        width: s,
        ...c
      }) => ({
        ...c,
        kwXwdiEra: e ?? c.kwXwdiEra,
        LpyGwsT4a: i ?? c.LpyGwsT4a,
        q7SRn3XCj: t ?? c.q7SRn3XCj,
        qC4svSqzl: n ?? c.qC4svSqzl,
        qUC6YOtLI: r ?? c.qUC6YOtLI,
        variant: Kn[c.variant] ?? c.variant ?? `Qcz_TOTKQ`,
      })),
      (Yn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Xn = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se(),
            u = le(),
            {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              kwXwdiEra: g,
              q7SRn3XCj: _,
              qC4svSqzl: y,
              qUC6YOtLI: b,
              LpyGwsT4a: x,
              ...C
            } = Jn(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = re({
              cycleOrder: zn,
              defaultVariant: `Qcz_TOTKQ`,
              ref: r,
              variant: m,
              variantClassNames: Vn,
            }),
            P = Yn(e, N),
            { activeVariantCallback: F, delay: I } = pe(w),
            te = F(async (...e) => {
              (j({ isHovered: !1 }), M(`Qcz_TOTKQ`));
            }),
            ne = F(async (...e) => {
              M(`enEwXBaT2`);
            }),
            L = F(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
            }),
            R = F(async (...e) => {
              M(`r2BjXLR2N`);
            }),
            ie = F(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
            }),
            ae = F(async (...e) => {
              M(`PMEH1QA5M`);
            }),
            oe = F(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
            }),
            ce = F(async (...e) => {
              M(`nbVOQmXif`);
            }),
            ue = F(async (...e) => {
              if (b && (await b(...e)) === !1) return !1;
            }),
            z = F(async (...e) => {
              M(`Pro5VF6qm`);
            }),
            de = F(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
            }),
            fe = S(Bn);
          return l(ee, {
            id: p ?? i,
            children: l(qn, {
              animate: N,
              initial: !1,
              children: l(Gn, {
                value: Hn,
                children: h(v.div, {
                  ...C,
                  ...O,
                  className: S(fe, `framer-1f4wutp`, f, T),
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `Qcz_TOTKQ`,
                  onMouseLeave: te,
                  ref: r,
                  style: { ...d },
                  ...Ln(
                    {
                      d7ovyU_95: {
                        "data-framer-name": `Phone`,
                        "data-highlight": void 0,
                        onMouseLeave: void 0,
                      },
                      enEwXBaT2: { "data-framer-name": `1` },
                      nbVOQmXif: { "data-framer-name": `4` },
                      PMEH1QA5M: { "data-framer-name": `3` },
                      Pro5VF6qm: { "data-framer-name": `5` },
                      r2BjXLR2N: { "data-framer-name": `2` },
                    },
                    w,
                    k
                  ),
                  children: [
                    l(Gn, {
                      value: Hn,
                      children: l(B, {
                        height: 70,
                        width: `70px`,
                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                        ...Ln(
                          {
                            enEwXBaT2: { width: `110px` },
                            nbVOQmXif: {
                              height: 90,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            PMEH1QA5M: {
                              height: 90,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            Pro5VF6qm: {
                              height: 90,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            r2BjXLR2N: {
                              height: 110,
                              width: `90px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110),
                            },
                          },
                          w,
                          k
                        ),
                        children: l(D, {
                          className: `framer-1m06p1e-container`,
                          layoutDependency: P,
                          layoutId: `bAoVzOk2T-container`,
                          nodeId: `bAoVzOk2T`,
                          rendersWithMotion: !0,
                          scopeId: `dmHYA4Nlz`,
                          children: l(Fn, {
                            Gqhb9s9cb: ne,
                            height: `100%`,
                            hyis294h6: !1,
                            id: `bAoVzOk2T`,
                            k2dZaElG4: Un(
                              {
                                pixelHeight: 512,
                                pixelWidth: 512,
                                src: `../../assets/images/HjXA2vQYym4IrAHCdJ11EXGYUcY.png`,
                              },
                              ``
                            ),
                            layoutId: `bAoVzOk2T`,
                            skOprlMdR: L,
                            style: { height: `100%`, width: `100%` },
                            variant: Wn(`zZpmdu5JO`),
                            vXrwEHo7K: `Chaos Folder`,
                            width: `100%`,
                            ...Ln(
                              { d7ovyU_95: { Gqhb9s9cb: void 0 }, enEwXBaT2: { hyis294h6: !0 } },
                              w,
                              k
                            ),
                          }),
                        }),
                      }),
                    }),
                    l(Gn, {
                      value: Hn,
                      children: l(B, {
                        height: 70,
                        width: `70px`,
                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                        ...Ln(
                          {
                            enEwXBaT2: { width: `90px` },
                            nbVOQmXif: {
                              height: 90,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            PMEH1QA5M: {
                              height: 110,
                              width: `90px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110),
                            },
                            Pro5VF6qm: {
                              height: 90,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            r2BjXLR2N: {
                              height: 90,
                              width: `110px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                          },
                          w,
                          k
                        ),
                        children: l(D, {
                          className: `framer-1txs9xq-container`,
                          layoutDependency: P,
                          layoutId: `cMgKhRsHp-container`,
                          nodeId: `cMgKhRsHp`,
                          rendersWithMotion: !0,
                          scopeId: `dmHYA4Nlz`,
                          children: l(Fn, {
                            Gqhb9s9cb: R,
                            height: `100%`,
                            hyis294h6: !1,
                            id: `cMgKhRsHp`,
                            k2dZaElG4: Un(
                              {
                                pixelHeight: 512,
                                pixelWidth: 512,
                                src: `../../assets/images/BKn7LAGuHVaXLdVNg4iFokKSo.png`,
                              },
                              ``
                            ),
                            layoutId: `cMgKhRsHp`,
                            skOprlMdR: ie,
                            style: { height: `100%`, width: `100%` },
                            variant: Wn(`zZpmdu5JO`),
                            vXrwEHo7K: `Reminders`,
                            width: `100%`,
                            ...Ln(
                              { d7ovyU_95: { Gqhb9s9cb: void 0 }, r2BjXLR2N: { hyis294h6: !0 } },
                              w,
                              k
                            ),
                          }),
                        }),
                      }),
                    }),
                    l(Gn, {
                      value: Hn,
                      children: l(B, {
                        height: 70,
                        width: `70px`,
                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                        ...Ln(
                          {
                            nbVOQmXif: {
                              height: 110,
                              width: `90px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110),
                            },
                            PMEH1QA5M: {
                              height: 90,
                              width: `110px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            Pro5VF6qm: {
                              height: 90,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            r2BjXLR2N: { width: `90px` },
                          },
                          w,
                          k
                        ),
                        children: l(D, {
                          className: `framer-fwhgm5-container`,
                          layoutDependency: P,
                          layoutId: `X3fb1x5g3-container`,
                          nodeId: `X3fb1x5g3`,
                          rendersWithMotion: !0,
                          scopeId: `dmHYA4Nlz`,
                          children: l(Fn, {
                            Gqhb9s9cb: ae,
                            height: `100%`,
                            hyis294h6: !1,
                            id: `X3fb1x5g3`,
                            k2dZaElG4: Un(
                              {
                                pixelHeight: 512,
                                pixelWidth: 512,
                                src: `../../assets/images/vkBHcFTGFQva3qJGTlYVQ6xX7g.png`,
                              },
                              ``
                            ),
                            layoutId: `X3fb1x5g3`,
                            skOprlMdR: oe,
                            style: { height: `100%`, width: `100%` },
                            variant: Wn(`zZpmdu5JO`),
                            vXrwEHo7K: `FaceTime`,
                            width: `100%`,
                            ...Ln(
                              { d7ovyU_95: { Gqhb9s9cb: void 0 }, PMEH1QA5M: { hyis294h6: !0 } },
                              w,
                              k
                            ),
                          }),
                        }),
                      }),
                    }),
                    l(Gn, {
                      value: Hn,
                      children: l(B, {
                        height: 70,
                        width: `70px`,
                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                        ...Ln(
                          {
                            nbVOQmXif: {
                              height: 90,
                              width: `110px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                            PMEH1QA5M: { width: `90px` },
                            Pro5VF6qm: {
                              height: 110,
                              width: `90px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 110),
                            },
                          },
                          w,
                          k
                        ),
                        children: l(D, {
                          className: `framer-1jfjvk7-container`,
                          layoutDependency: P,
                          layoutId: `BuC2iPL95-container`,
                          nodeId: `BuC2iPL95`,
                          rendersWithMotion: !0,
                          scopeId: `dmHYA4Nlz`,
                          children: l(Fn, {
                            Gqhb9s9cb: ce,
                            height: `100%`,
                            hyis294h6: !1,
                            id: `BuC2iPL95`,
                            k2dZaElG4: Un(
                              {
                                pixelHeight: 512,
                                pixelWidth: 512,
                                src: `../../assets/images/4aNAOG6Pl9OSRtlHb3HuleXy2o.png`,
                              },
                              ``
                            ),
                            layoutId: `BuC2iPL95`,
                            skOprlMdR: ue,
                            style: { height: `100%`, width: `100%` },
                            variant: Wn(`zZpmdu5JO`),
                            vXrwEHo7K: `Music`,
                            width: `100%`,
                            ...Ln(
                              { d7ovyU_95: { Gqhb9s9cb: void 0 }, nbVOQmXif: { hyis294h6: !0 } },
                              w,
                              k
                            ),
                          }),
                        }),
                      }),
                    }),
                    l(Gn, {
                      value: Hn,
                      children: l(v.div, {
                        className: `framer-1fpah09`,
                        layoutDependency: P,
                        layoutId: `PwcVrLrvY`,
                        children: l(Gn, {
                          value: Hn,
                          children: l(v.div, {
                            className: `framer-1yi7308`,
                            "data-framer-name": `divider`,
                            layoutDependency: P,
                            layoutId: `HRLxjkbuS`,
                            style: {
                              backgroundColor: `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                            },
                          }),
                        }),
                      }),
                    }),
                    l(Gn, {
                      value: Hn,
                      children: l(B, {
                        height: 70,
                        width: `70px`,
                        y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 70),
                        ...Ln(
                          {
                            nbVOQmXif: { width: `90px` },
                            Pro5VF6qm: {
                              height: 90,
                              width: `110px`,
                              y: (u?.y || 0) + 0 + ((u?.height || 70) - 0 - 90),
                            },
                          },
                          w,
                          k
                        ),
                        children: l(D, {
                          className: `framer-1deuhqd-container`,
                          layoutDependency: P,
                          layoutId: `zQR0xaSzk-container`,
                          nodeId: `zQR0xaSzk`,
                          rendersWithMotion: !0,
                          scopeId: `dmHYA4Nlz`,
                          children: l(Fn, {
                            Gqhb9s9cb: z,
                            height: `100%`,
                            hyis294h6: !1,
                            id: `zQR0xaSzk`,
                            k2dZaElG4: Un(
                              {
                                pixelHeight: 512,
                                pixelWidth: 512,
                                src: `../../assets/images/N3hFDVY2s9yve5NIaSZXdooQPg.png`,
                              },
                              ``
                            ),
                            layoutId: `zQR0xaSzk`,
                            skOprlMdR: de,
                            style: { height: `100%`, width: `100%` },
                            variant: Wn(`zZpmdu5JO`),
                            vXrwEHo7K: `Trash`,
                            width: `100%`,
                            ...Ln(
                              { d7ovyU_95: { Gqhb9s9cb: void 0 }, Pro5VF6qm: { hyis294h6: !0 } },
                              w,
                              k
                            ),
                          }),
                        }),
                      }),
                    }),
                    l(Gn, {
                      value: Hn,
                      children: l(v.div, {
                        className: `framer-hpbiwr`,
                        "data-framer-name": `dock background`,
                        layoutDependency: P,
                        layoutId: `MTe9wuRew`,
                        style: {
                          backgroundColor: `rgba(0, 0, 0, 0.29)`,
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                        },
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
          `.framer-UCvNn.framer-4eaqn4, .framer-UCvNn .framer-4eaqn4 { display: block; }`,
          `.framer-UCvNn.framer-1f4wutp { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-UCvNn .framer-1m06p1e-container { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 70px; z-index: 5; }`,
          `.framer-UCvNn .framer-1txs9xq-container { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 70px; z-index: 4; }`,
          `.framer-UCvNn .framer-fwhgm5-container { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 70px; z-index: 3; }`,
          `.framer-UCvNn .framer-1jfjvk7-container { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 70px; z-index: 2; }`,
          `.framer-UCvNn .framer-1fpah09 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 10px 0px; position: relative; width: min-content; }`,
          `.framer-UCvNn .framer-1yi7308 { flex: none; height: 46px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-UCvNn .framer-1deuhqd-container { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 70px; z-index: 1; }`,
          `.framer-UCvNn .framer-hpbiwr { bottom: -4px; flex: none; left: -4px; overflow: hidden; position: absolute; right: -10px; top: -4px; will-change: var(--framer-will-change-override, transform); z-index: 0; }`,
          `.framer-UCvNn.framer-v-sh4yrc .framer-1m06p1e-container, .framer-UCvNn.framer-v-1akenwz .framer-1txs9xq-container, .framer-UCvNn.framer-v-1nnseel .framer-fwhgm5-container, .framer-UCvNn.framer-v-1yjuei .framer-1deuhqd-container { height: var(--framer-aspect-ratio-supported, 110px); width: 110px; z-index: 2; }`,
          `.framer-UCvNn.framer-v-sh4yrc .framer-1txs9xq-container, .framer-UCvNn.framer-v-1akenwz .framer-1m06p1e-container, .framer-UCvNn.framer-v-1akenwz .framer-fwhgm5-container, .framer-UCvNn.framer-v-1nnseel .framer-1txs9xq-container, .framer-UCvNn.framer-v-1nnseel .framer-1jfjvk7-container, .framer-UCvNn.framer-v-1hhiiet .framer-fwhgm5-container, .framer-UCvNn.framer-v-1hhiiet .framer-1deuhqd-container, .framer-UCvNn.framer-v-1yjuei .framer-1jfjvk7-container { height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }`,
          `.framer-UCvNn.framer-v-1hhiiet .framer-1jfjvk7-container { height: var(--framer-aspect-ratio-supported, 110px); width: 110px; }`,
        ],
        `framer-UCvNn`
      )),
      (Zn = Xn),
      (Xn.displayName = `Dock`),
      (Xn.defaultProps = { height: 70, width: 351 }),
      O(Xn, {
        variant: {
          options: [
            `Qcz_TOTKQ`,
            `enEwXBaT2`,
            `r2BjXLR2N`,
            `PMEH1QA5M`,
            `nbVOQmXif`,
            `Pro5VF6qm`,
            `d7ovyU_95`,
          ],
          optionTitles: [`default`, `1`, `2`, `3`, `4`, `5`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
        kwXwdiEra: { title: `App 1 Click`, type: z.EventHandler },
        q7SRn3XCj: { title: `App 2 Click`, type: z.EventHandler },
        qC4svSqzl: { title: `App 3 Click`, type: z.EventHandler },
        qUC6YOtLI: { title: `App 4 Click`, type: z.EventHandler },
        LpyGwsT4a: { title: `App 5 Click`, type: z.EventHandler },
      }),
      he(Xn, [{ explicitInter: !0, fonts: [] }, ...Rn], { supportsExplicitInterCodegen: !0 }),
      (Xn.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(Fn, {}, t)])) }));
  }),
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr = e(() => {
    (g(),
      w(),
      a(),
      ($n = `var(--framer-icon-mask)`),
      (er = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (tr = v.create(er)),
      (nr = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(tr, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (rr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8 0 L 8 16 M 0 8 L 16 8" fill="transparent" height="16px" id="SStGq3XTU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(4 4)" width="16px"/></svg>`),
      (ir = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (ar = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = ir(e),
            u = R(`2934251554`, rr);
          return l(nr, {
            ...c,
            className: S(`framer-uXX7X`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-uXX7X { -webkit-mask: ${$n}; aspect-ratio: 1; display: block; mask: ${$n}; width: 24px; }`,
        ],
        `framer-uXX7X`
      )),
      (ar.displayName = `Add New Plus`),
      (or = ar),
      O(ar, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr = e(() => {
    (g(),
      w(),
      a(),
      (cr = `var(--framer-icon-mask)`),
      (lr = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ur = v.create(lr)),
      (dr = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(ur, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (fr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5 10 L 8.5 13.5 L 15 7 M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z" fill="transparent" height="20px" id="SN7OggvIf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (pr = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (mr = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = pr(e),
            u = R(`2394523606`, fr);
          return l(dr, {
            ...c,
            className: S(`framer-Fr3y6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-Fr3y6 { -webkit-mask: ${cr}; aspect-ratio: 1; display: block; mask: ${cr}; width: 24px; }`,
        ],
        `framer-Fr3y6`
      )),
      (mr.displayName = `Check Box List Circle`),
      (hr = mr),
      O(mr, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr = e(() => {
    (g(),
      w(),
      a(),
      (_r = `var(--framer-icon-mask)`),
      (vr = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (yr = v.create(vr)),
      (br = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(yr, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (xr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="xtPEt2w6q" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (Sr = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Cr = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Sr(e),
            u = R(`1922846671`, xr);
          return l(br, {
            ...c,
            className: S(`framer-gOdIk`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-gOdIk { -webkit-mask: ${_r}; aspect-ratio: 1; display: block; mask: ${_r}; width: 24px; }`,
        ],
        `framer-gOdIk`
      )),
      (Cr.displayName = `Circle Oval`),
      (wr = Cr),
      O(Cr, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  });
function Er(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br = e(() => {
    (g(),
      w(),
      x(),
      a(),
      sr(),
      qe(),
      gr(),
      Tr(),
      (Dr = E(or)),
      (Or = E(Ke)),
      (kr = [`NQqhuS1V_`, `teeDJaHPI`, `CUJNikCT7`, `NAWoao1gh`]),
      (Ar = `framer-NH0Iu`),
      (jr = {
        CUJNikCT7: `framer-v-dwqz04`,
        NAWoao1gh: `framer-v-3fzt0l`,
        NQqhuS1V_: `framer-v-1ctr9e7`,
        teeDJaHPI: `framer-v-1rfhn6j`,
      }),
      (Mr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nr = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (Pr = {
        "Variant 1": `NQqhuS1V_`,
        "Variant 2": `teeDJaHPI`,
        "Variant 3": `CUJNikCT7`,
        "Variant 4": `NAWoao1gh`,
      }),
      (Fr = v.create(p)),
      (Ir = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        d1W1Z2nEo: e ?? i.d1W1Z2nEo,
        variant: Pr[i.variant] ?? i.variant ?? `NQqhuS1V_`,
      })),
      (Lr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Rr = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se();
          le();
          let { style: u, className: d, layoutId: f, variant: m, d1W1Z2nEo: g, ..._ } = Ir(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = re({
              cycleOrder: kr,
              defaultVariant: `NQqhuS1V_`,
              ref: r,
              variant: m,
              variantClassNames: jr,
            }),
            k = Lr(e, O),
            { activeVariantCallback: A, delay: j } = pe(y),
            M = A(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
            }),
            P = A(async (...e) => {
              D(`NAWoao1gh`);
            }),
            F = A(async (...e) => {
              D(`NQqhuS1V_`);
            }),
            I = A(async (...e) => {
              D(`teeDJaHPI`);
            }),
            te = A(async (...e) => {
              D(`CUJNikCT7`);
            }),
            ne = S(Ar),
            L = () => y === `NAWoao1gh`;
          return l(ee, {
            id: f ?? i,
            children: l(Fr, {
              animate: O,
              initial: !1,
              children: l(Nr, {
                value: Mr,
                children: h(v.div, {
                  ..._,
                  ...C,
                  className: S(ne, `framer-1ctr9e7`, d, b),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `NQqhuS1V_`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...u,
                  },
                  ...Er(
                    {
                      CUJNikCT7: { "data-framer-name": `Variant 3` },
                      NAWoao1gh: { "data-framer-name": `Variant 4` },
                      teeDJaHPI: { "data-framer-name": `Variant 2` },
                    },
                    y,
                    w
                  ),
                  children: [
                    h(v.div, {
                      className: `framer-j6uljn`,
                      "data-framer-name": `TopBar`,
                      layoutDependency: k,
                      layoutId: `KxMPXsOD_`,
                      children: [
                        h(v.div, {
                          className: `framer-625vgs`,
                          "data-highlight": !0,
                          layoutDependency: k,
                          layoutId: `qRUkKprZ0`,
                          onTap: M,
                          children: [
                            l(v.div, {
                              className: `framer-14admg6`,
                              layoutDependency: k,
                              layoutId: `o8LtE6TMF`,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-lb8z8o`,
                              layoutDependency: k,
                              layoutId: `Ry21AC3XH`,
                              style: {
                                backgroundColor: `var(--token-4277ec07-6b7c-4224-b5fc-ef6ee750288b, rgb(255, 232, 21))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-56w401`,
                              layoutDependency: k,
                              layoutId: `YusxfR11M`,
                              style: {
                                backgroundColor: `var(--token-956c8e5d-f704-4307-a99c-526b9b90099b, rgb(69, 255, 8))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                          ],
                        }),
                        l(v.div, {
                          className: `framer-1jqh2vp`,
                          "data-highlight": !0,
                          layoutDependency: k,
                          layoutId: `BiFJtq8WN`,
                          onTap: P,
                          children: l(or, {
                            animated: !0,
                            className: `framer-c20mqg`,
                            layoutDependency: k,
                            layoutId: `FiJN3h1za`,
                            style: {
                              "--1ww558a": 2,
                              "--4rxgx6": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                            },
                          }),
                        }),
                      ],
                    }),
                    h(v.div, {
                      className: `framer-1476lu0`,
                      layoutDependency: k,
                      layoutId: `Ncq2TQFLH`,
                      children: [
                        l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `28px`,
                                "--framer-font-weight": `500`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                              },
                              children: `Reminders`,
                            }),
                          }),
                          className: `framer-15e8m74`,
                          fonts: [`FS;Outfit-medium`],
                          layoutDependency: k,
                          layoutId: `FwG6sNAB4`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `28px`,
                                "--framer-font-weight": `500`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1)))`,
                              },
                              children: `3`,
                            }),
                          }),
                          className: `framer-kit9bs`,
                          fonts: [`FS;Outfit-medium`],
                          layoutDependency: k,
                          layoutId: `mVGxu8R7c`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    h(v.div, {
                      className: `framer-ygz1o0`,
                      layoutDependency: k,
                      layoutId: `DuP9bLWMW`,
                      children: [
                        h(v.div, {
                          className: `framer-p490e3`,
                          "data-highlight": !0,
                          layoutDependency: k,
                          layoutId: `cg4dldXA6`,
                          onTap: F,
                          style: {
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                          },
                          ...Er({ NAWoao1gh: { "data-highlight": void 0, onTap: void 0 } }, y, w),
                          children: [
                            l(oe, {
                              animated: !0,
                              className: `framer-1niix7e`,
                              Component: hr,
                              layoutDependency: k,
                              layoutId: `AoycIbn9u`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                              },
                              variants: {
                                CUJNikCT7: {
                                  "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                },
                                NAWoao1gh: {
                                  "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                },
                                teeDJaHPI: {
                                  "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                },
                              },
                              ...Er(
                                {
                                  CUJNikCT7: { Component: wr },
                                  NAWoao1gh: { Component: wr },
                                  teeDJaHPI: { Component: wr },
                                },
                                y,
                                w
                              ),
                            }),
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `sleep 8 hours`,
                                }),
                              }),
                              className: `framer-14svwgq`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: k,
                              layoutId: `BKMqb5Es7`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(v.div, {
                          className: `framer-2l23mu`,
                          "data-highlight": !0,
                          layoutDependency: k,
                          layoutId: `kXyKOkBYL`,
                          onTap: I,
                          style: {
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                          },
                          ...Er({ NAWoao1gh: { "data-highlight": void 0, onTap: void 0 } }, y, w),
                          children: [
                            l(oe, {
                              animated: !0,
                              className: `framer-1v5bxr8`,
                              Component: wr,
                              layoutDependency: k,
                              layoutId: `v0Jvqbdc5`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                              variants: {
                                teeDJaHPI: {
                                  "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                },
                              },
                              ...Er({ teeDJaHPI: { Component: hr } }, y, w),
                            }),
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `finish all projects`,
                                }),
                              }),
                              className: `framer-bpxjxx`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: k,
                              layoutId: `LMycWddbH`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        h(v.div, {
                          className: `framer-1ywg3ee`,
                          "data-highlight": !0,
                          layoutDependency: k,
                          layoutId: `fnRI0TC3N`,
                          onTap: te,
                          style: {
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                          },
                          ...Er({ NAWoao1gh: { "data-highlight": void 0, onTap: void 0 } }, y, w),
                          children: [
                            l(oe, {
                              animated: !0,
                              className: `framer-5uo6e1`,
                              Component: wr,
                              layoutDependency: k,
                              layoutId: `HxoHJ203d`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                              variants: {
                                CUJNikCT7: {
                                  "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                },
                              },
                              ...Er({ CUJNikCT7: { Component: hr } }, y, w),
                            }),
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `have free time`,
                                }),
                              }),
                              className: `framer-1gxyc2p`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: k,
                              layoutId: `t2rgyrpgO`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    L() &&
                      l(v.div, {
                        className: `framer-1squ4fu`,
                        layoutDependency: k,
                        layoutId: `e_aqkOkf9`,
                        style: { backgroundColor: `rgba(0, 0, 0, 0.8)` },
                        children: h(v.div, {
                          className: `framer-g2ywcm`,
                          layoutDependency: k,
                          layoutId: `hbahdAi7Y`,
                          style: {
                            backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                          },
                          children: [
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `System limitation: Only one priority may run at a time.`,
                                }),
                              }),
                              className: `framer-14c0ix0`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: k,
                              layoutId: `LZA_NPraV`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(v.div, {
                              className: `framer-ljrbbj`,
                              "data-highlight": !0,
                              layoutDependency: k,
                              layoutId: `LqyfJE2bL`,
                              onTap: F,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                              },
                              children: l(N, {
                                __fromCanvasComponent: !0,
                                children: l(p, {
                                  children: l(v.p, {
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
                                    children: `Got it`,
                                  }),
                                }),
                                className: `framer-1lj7kf`,
                                fonts: [`FS;Outfit-medium`],
                                layoutDependency: k,
                                layoutId: `I69y46jaR`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(Ke, {
                              animated: !0,
                              className: `framer-13dnof3`,
                              layoutDependency: k,
                              layoutId: `fuxj9VIBI`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                              },
                            }),
                          ],
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
          `.framer-NH0Iu.framer-fjab3b, .framer-NH0Iu .framer-fjab3b { display: block; }`,
          `.framer-NH0Iu.framer-1ctr9e7 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 300px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NH0Iu .framer-j6uljn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-NH0Iu .framer-625vgs { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-NH0Iu .framer-14admg6, .framer-NH0Iu .framer-lb8z8o, .framer-NH0Iu .framer-56w401 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NH0Iu .framer-1jqh2vp { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-NH0Iu .framer-c20mqg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-NH0Iu .framer-1476lu0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 15px 0px 10px 0px; position: relative; width: 100%; }`,
          `.framer-NH0Iu .framer-15e8m74, .framer-NH0Iu .framer-kit9bs, .framer-NH0Iu .framer-14svwgq, .framer-NH0Iu .framer-bpxjxx, .framer-NH0Iu .framer-1gxyc2p, .framer-NH0Iu .framer-1lj7kf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-NH0Iu .framer-ygz1o0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-NH0Iu .framer-p490e3, .framer-NH0Iu .framer-2l23mu, .framer-NH0Iu .framer-1ywg3ee { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 2px 2px 2px 12px; position: relative; width: 100%; }`,
          `.framer-NH0Iu .framer-1niix7e, .framer-NH0Iu .framer-1v5bxr8, .framer-NH0Iu .framer-5uo6e1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-NH0Iu .framer-1squ4fu { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-NH0Iu .framer-g2ywcm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: min-content; }`,
          `.framer-NH0Iu .framer-14c0ix0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 177px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-NH0Iu .framer-ljrbbj { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; }`,
          `.framer-NH0Iu .framer-13dnof3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 20px; }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-14admg6 { height: var(--framer-aspect-ratio-supported, 9px); }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-56w401 { height: var(--framer-aspect-ratio-supported, 12px); }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-p490e3, .framer-NH0Iu.framer-v-3fzt0l .framer-2l23mu, .framer-NH0Iu.framer-v-3fzt0l .framer-1ywg3ee { cursor: unset; }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-1niix7e, .framer-NH0Iu.framer-v-3fzt0l .framer-1v5bxr8, .framer-NH0Iu.framer-v-3fzt0l .framer-5uo6e1 { height: var(--framer-aspect-ratio-supported, 15px); }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-14c0ix0 { order: 1; }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-ljrbbj { order: 2; }`,
          `.framer-NH0Iu.framer-v-3fzt0l .framer-13dnof3 { order: 0; }`,
          `.framer-NH0Iu[data-border="true"]::after, .framer-NH0Iu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-NH0Iu`
      )),
      (zr = Rr),
      (Rr.displayName = `RemindersWindow`),
      (Rr.defaultProps = { height: 300, width: 360 }),
      O(Rr, {
        variant: {
          options: [`NQqhuS1V_`, `teeDJaHPI`, `CUJNikCT7`, `NAWoao1gh`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: z.Enum,
        },
        d1W1Z2nEo: { title: `Click`, type: z.EventHandler },
      }),
      he(
        Rr,
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
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Dr,
          ...Or,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr = e(() => {
    (g(),
      w(),
      a(),
      (Vr = `var(--framer-icon-mask)`),
      (Hr = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ur = v.create(Hr)),
      (Wr = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Ur, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Gr = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14.118 7 L 20 2.333 L 20 11.667 Z M 14.118 7 L 14.118 2.333 C 14.118 1.045 13.064 0 11.765 0 L 2.353 0 C 1.053 0 0 1.045 0 2.333 L 0 11.667 C 0 12.955 1.053 14 2.353 14 L 11.765 14 C 13.064 14 14.118 12.955 14.118 11.667 Z" fill="transparent" height="14px" id="ql2fvkodd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 5)" width="20.000000440979004px"/></svg>`),
      (Kr = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (qr = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Kr(e),
            u = R(`559049071`, Gr);
          return l(Wr, {
            ...c,
            className: S(`framer-1471w`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-1471w { -webkit-mask: ${Vr}; aspect-ratio: 1; display: block; mask: ${Vr}; width: 24px; }`,
        ],
        `framer-1471w`
      )),
      (qr.displayName = `Video Camera`),
      (Jr = qr),
      O(qr, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  });
function Xr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui = e(() => {
    (g(),
      w(),
      x(),
      a(),
      xe(),
      Yr(),
      (Zr = E(Jr)),
      (Qr = E(Se)),
      ($r = [`wBsPk_0zH`, `kV6b7baWo`]),
      (ei = `framer-quJHL`),
      (ti = { kV6b7baWo: `framer-v-nua1a6`, wBsPk_0zH: `framer-v-1s69uvd` }),
      (ni = { bounce: 0.2, delay: 0, duration: 0.5, type: `spring` }),
      (ri = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (ii = { "Variant 1": `wBsPk_0zH`, "Variant 2": `kV6b7baWo` }),
      (ai = v.create(p)),
      (oi = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        d1W1Z2nEo: e ?? i.d1W1Z2nEo,
        variant: ii[i.variant] ?? i.variant ?? `wBsPk_0zH`,
      })),
      (si = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ci = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se();
          le();
          let { style: u, className: d, layoutId: f, variant: m, d1W1Z2nEo: g, ..._ } = oi(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: O,
              variants: k,
            } = re({
              cycleOrder: $r,
              defaultVariant: `wBsPk_0zH`,
              ref: r,
              variant: m,
              variantClassNames: ti,
            }),
            A = si(e, k),
            { activeVariantCallback: j, delay: M } = pe(y),
            P = j(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
            }),
            F = j(async (...e) => {
              O(`kV6b7baWo`);
            }),
            I = j(async (...e) => {
              await M(() => O(`wBsPk_0zH`), 500);
            }),
            te = S(ei),
            ne = () => y !== `kV6b7baWo`,
            L = () => y === `kV6b7baWo`;
          return l(ee, {
            id: f ?? i,
            children: l(ai, {
              animate: k,
              initial: !1,
              children: l(ri, {
                value: ni,
                children: h(v.div, {
                  ..._,
                  ...C,
                  className: S(te, `framer-1s69uvd`, d, b),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `wBsPk_0zH`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...u,
                  },
                  ...Xr({ kV6b7baWo: { "data-framer-name": `Variant 2` } }, y, w),
                  children: [
                    l(v.div, {
                      className: `framer-g7oivd`,
                      "data-framer-name": `TopBar`,
                      layoutDependency: A,
                      layoutId: `qykZcq3PP`,
                      children: h(v.div, {
                        className: `framer-4n1lye`,
                        "data-highlight": !0,
                        layoutDependency: A,
                        layoutId: `R62k10mrz`,
                        onTap: P,
                        children: [
                          l(v.div, {
                            className: `framer-qaikpj`,
                            layoutDependency: A,
                            layoutId: `vtNqGfyeO`,
                            style: {
                              backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                          l(v.div, {
                            className: `framer-17mv9nm`,
                            layoutDependency: A,
                            layoutId: `cxb8_E_TL`,
                            style: {
                              backgroundColor: `var(--token-4277ec07-6b7c-4224-b5fc-ef6ee750288b, rgb(255, 232, 21))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                          l(v.div, {
                            className: `framer-eky0vf`,
                            layoutDependency: A,
                            layoutId: `H8mta4YMN`,
                            style: {
                              backgroundColor: `var(--token-956c8e5d-f704-4307-a99c-526b9b90099b, rgb(69, 255, 8))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                        ],
                      }),
                    }),
                    ne() &&
                      l(v.div, {
                        className: `framer-zwcag0`,
                        layoutDependency: A,
                        layoutId: `pFXYdu24q`,
                        children: l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `28px`,
                                "--framer-font-weight": `500`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                              },
                              children: `FaceTime`,
                            }),
                          }),
                          className: `framer-wjlcri`,
                          fonts: [`FS;Outfit-medium`],
                          layoutDependency: A,
                          layoutId: `ta1KO8Lai`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ne() &&
                      l(v.div, {
                        className: `framer-189s877`,
                        layoutDependency: A,
                        layoutId: `CeW1kJuH1`,
                        children: h(v.div, {
                          className: `framer-swf9o`,
                          "data-highlight": !0,
                          layoutDependency: A,
                          layoutId: `oPA07hXps`,
                          onTap: F,
                          style: {
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                          },
                          children: [
                            l(Jr, {
                              animated: !0,
                              className: `framer-195sy76`,
                              layoutDependency: A,
                              layoutId: `VxcrN0mde`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                              },
                            }),
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `Lord Garmadon`,
                                }),
                              }),
                              className: `framer-1jxe5ny`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: A,
                              layoutId: `wjEVABxGT`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                    L() &&
                      l(B, {
                        children: l(D, {
                          className: `framer-kfzzgf-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: A,
                          layoutId: `YpRms1FaI-container`,
                          nodeId: `YpRms1FaI`,
                          rendersWithMotion: !0,
                          scopeId: `j4rb2QKwp`,
                          children: l(Se, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `YpRms1FaI`,
                            isMixedBorderRadius: !1,
                            layoutId: `YpRms1FaI`,
                            loop: !1,
                            muted: !1,
                            objectFit: `cover`,
                            onEnd: I,
                            playing: !0,
                            poster: `https://framerusercontent.com/images/jmQ7kzdG0pvPH3mgnmqANMSKav8.png?width=408&height=800`,
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69af9372ccd38333c2cd929f/main.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
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
          `.framer-quJHL.framer-1ikkuoo, .framer-quJHL .framer-1ikkuoo { display: block; }`,
          `.framer-quJHL.framer-1s69uvd { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: 500px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-quJHL .framer-g7oivd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-quJHL .framer-4n1lye { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-quJHL .framer-qaikpj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 9px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-quJHL .framer-17mv9nm { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-quJHL .framer-eky0vf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-quJHL .framer-zwcag0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 15px 0px 10px 0px; position: relative; width: 100%; }`,
          `.framer-quJHL .framer-wjlcri, .framer-quJHL .framer-1jxe5ny { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-quJHL .framer-189s877 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-quJHL .framer-swf9o { align-content: center; align-items: center; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-quJHL .framer-195sy76 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-quJHL .framer-kfzzgf-container { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-quJHL.framer-v-nua1a6.framer-1s69uvd { width: 255px; }`,
          `.framer-quJHL[data-border="true"]::after, .framer-quJHL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-quJHL`
      )),
      (li = ci),
      (ci.displayName = `FaceTimeWindow`),
      (ci.defaultProps = { height: 500, width: 300 }),
      O(ci, {
        variant: {
          options: [`wBsPk_0zH`, `kV6b7baWo`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        d1W1Z2nEo: { title: `Click`, type: z.EventHandler },
      }),
      he(
        ci,
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
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Zr,
          ...Qr,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi = e(() => {
    (g(),
      w(),
      a(),
      (di = `var(--framer-icon-mask)`),
      (fi = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (pi = v.create(fi)),
      (mi = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(pi, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (hi = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 15.338 L 0 1.002 C 0 0.21 0.875 -0.267 1.541 0.16 L 12.692 7.329 C 13.304 7.722 13.304 8.618 12.692 9.011 L 1.541 16.18 C 0.875 16.607 0 16.129 0 15.338 Z" fill="transparent" height="16.33994957243401px" id="z_ni998EW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5 3.83)" width="13.150725000000001px"/></svg>`),
      (gi = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (_i = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = gi(e),
            u = R(`1068206357`, hi);
          return l(mi, {
            ...c,
            className: S(`framer-5ATod`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-5ATod { -webkit-mask: ${di}; aspect-ratio: 1; display: block; mask: ${di}; width: 24px; }`,
        ],
        `framer-5ATod`
      )),
      (_i.displayName = `Play`),
      (vi = _i),
      O(_i, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  }),
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi = e(() => {
    (g(),
      w(),
      a(),
      (bi = `var(--framer-icon-mask)`),
      (xi = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Si = v.create(xi)),
      (Ci = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Si, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (wi = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 15 C 4 15.552 3.552 16 3 16 L 1 16 C 0.448 16 0 15.552 0 15 Z" fill="transparent" height="16px" id="DyJid2R9F" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(6 4)" width="4px"/><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 3 0 C 3.552 0 4 0.448 4 1 L 4 15 C 4 15.552 3.552 16 3 16 L 1 16 C 0.448 16 0 15.552 0 15 Z" fill="transparent" height="16px" id="vKUdjfXl3" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(14 4)" width="4px"/></svg>`),
      (Ti = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Ei = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Ti(e),
            u = R(`3416862597`, wi);
          return l(Ci, {
            ...c,
            className: S(`framer-23C9Z`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-23C9Z { -webkit-mask: ${bi}; aspect-ratio: 1; display: block; mask: ${bi}; width: 24px; }`,
        ],
        `framer-23C9Z`
      )),
      (Ei.displayName = `Pause`),
      (Di = Ei),
      O(Ei, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  });
function ki(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi = e(() => {
    (g(),
      w(),
      x(),
      a(),
      yi(),
      Oi(),
      xe(),
      (Ai = E(Se)),
      (ji = _e(ve(D))),
      (Mi = [`xDClrel0Q`, `T6HAS0B0T`]),
      (Ni = `framer-xYL1x`),
      (Pi = { T6HAS0B0T: `framer-v-ge72v4`, xDClrel0Q: `framer-v-1gm4r00` }),
      (Fi = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (Ii = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Li = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ri = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (zi = { "Variant 1": `xDClrel0Q`, "Variant 2": `T6HAS0B0T` }),
      (Bi = v.create(p)),
      (Vi = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        d1W1Z2nEo: e ?? i.d1W1Z2nEo,
        variant: zi[i.variant] ?? i.variant ?? `xDClrel0Q`,
      })),
      (Hi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ui = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se();
          le();
          let { style: u, className: d, layoutId: f, variant: m, d1W1Z2nEo: g, ..._ } = Vi(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = re({
              cycleOrder: Mi,
              defaultVariant: `xDClrel0Q`,
              ref: r,
              variant: m,
              variantClassNames: Pi,
            }),
            k = Hi(e, O),
            { activeVariantCallback: A, delay: j } = pe(y),
            M = A(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
            }),
            P = A(async (...e) => {
              D(`T6HAS0B0T`);
            }),
            F = A(async (...e) => {
              D(`xDClrel0Q`);
            }),
            I = S(Ni);
          return l(ee, {
            id: f ?? i,
            children: l(Bi, {
              animate: O,
              initial: !1,
              children: l(Ri, {
                value: Fi,
                children: h(v.div, {
                  ..._,
                  ...C,
                  className: S(I, `framer-1gm4r00`, d, b),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `xDClrel0Q`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...u,
                  },
                  ...ki({ T6HAS0B0T: { "data-framer-name": `Variant 2` } }, y, w),
                  children: [
                    l(v.div, {
                      className: `framer-8sz5sn`,
                      "data-framer-name": `TopBar`,
                      layoutDependency: k,
                      layoutId: `lLYWzcpHS`,
                      children: h(v.div, {
                        className: `framer-w3l1pq`,
                        "data-highlight": !0,
                        layoutDependency: k,
                        layoutId: `OCHCXAUJY`,
                        onTap: M,
                        children: [
                          l(v.div, {
                            className: `framer-x628iy`,
                            layoutDependency: k,
                            layoutId: `PfmowbQeb`,
                            style: {
                              backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                          l(v.div, {
                            className: `framer-flg8bq`,
                            layoutDependency: k,
                            layoutId: `kZ9PYYsCG`,
                            style: {
                              backgroundColor: `var(--token-4277ec07-6b7c-4224-b5fc-ef6ee750288b, rgb(255, 232, 21))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                          l(v.div, {
                            className: `framer-1abldij`,
                            layoutDependency: k,
                            layoutId: `ZtlRQyKmi`,
                            style: {
                              backgroundColor: `var(--token-956c8e5d-f704-4307-a99c-526b9b90099b, rgb(69, 255, 8))`,
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          }),
                        ],
                      }),
                    }),
                    l(v.div, {
                      className: `framer-1siw8vn`,
                      layoutDependency: k,
                      layoutId: `Q2bEcApX_`,
                      children: l(N, {
                        __fromCanvasComponent: !0,
                        children: l(p, {
                          children: l(v.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                              "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                              "--framer-font-size": `28px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `0.9em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                            },
                            children: `Music`,
                          }),
                        }),
                        className: `framer-192ntvu`,
                        fonts: [`FS;Outfit-medium`],
                        layoutDependency: k,
                        layoutId: `cdSD4GnxW`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    l(v.div, {
                      className: `framer-1f6dqjm`,
                      "data-framer-name": `Disc`,
                      "data-highlight": !0,
                      layoutDependency: k,
                      layoutId: `E48nL4UUs`,
                      onTap: P,
                      ...ki({ T6HAS0B0T: { onTap: F } }, y, w),
                      children: l(B, {
                        children: l(ji, {
                          className: `framer-12spi9k-container`,
                          "data-framer-appear-id": `12spi9k`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `uEzGk8JXS-container`,
                          nodeId: `uEzGk8JXS`,
                          rendersWithMotion: !0,
                          scopeId: `jf7skDccw`,
                          ...ki(
                            {
                              T6HAS0B0T: {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Ii,
                                initial: Li,
                                optimized: !0,
                              },
                            },
                            y,
                            w
                          ),
                          children: l(Se, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `uEzGk8JXS`,
                            isMixedBorderRadius: !1,
                            layoutId: `uEzGk8JXS`,
                            loop: !0,
                            muted: !1,
                            objectFit: `cover`,
                            playing: !1,
                            poster: `https://framerusercontent.com/images/9fAv9Ja3LqQBTSwkuN7SZLCEo.png?width=1080&height=1080`,
                            posterEnabled: !0,
                            srcType: `URL`,
                            srcUrl: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69b3dd2cdc37184fc77a23ec/main.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 29,
                            width: `100%`,
                            ...ki({ T6HAS0B0T: { playing: !0 } }, y, w),
                          }),
                        }),
                      }),
                    }),
                    h(v.div, {
                      className: `framer-qajce`,
                      "data-highlight": !0,
                      layoutDependency: k,
                      layoutId: `fRqsByGS2`,
                      onTap: P,
                      style: {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      },
                      ...ki({ T6HAS0B0T: { onTap: F } }, y, w),
                      children: [
                        l(oe, {
                          animated: !0,
                          className: `framer-13smdry`,
                          Component: vi,
                          layoutDependency: k,
                          layoutId: `nRUoT2ZNQ`,
                          style: {
                            "--1ww558a": 2,
                            "--4rxgx6": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                          },
                          ...ki({ T6HAS0B0T: { Component: Di } }, y, w),
                        }),
                        l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-line-height": `1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                              },
                              children: `Play`,
                            }),
                          }),
                          className: `framer-1pnwgze`,
                          fonts: [`FS;Outfit-regular`],
                          layoutDependency: k,
                          layoutId: `el3Zm2yqZ`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...ki(
                            {
                              T6HAS0B0T: {
                                children: l(p, {
                                  children: l(v.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                    },
                                    children: `Pause`,
                                  }),
                                }),
                              },
                            },
                            y,
                            w
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-xYL1x.framer-fys6yb, .framer-xYL1x .framer-fys6yb { display: block; }`,
          `.framer-xYL1x.framer-1gm4r00 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: 520px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xYL1x .framer-8sz5sn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-xYL1x .framer-w3l1pq { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-xYL1x .framer-x628iy { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 9px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xYL1x .framer-flg8bq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xYL1x .framer-1abldij { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xYL1x .framer-1siw8vn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 15px 0px 10px 0px; position: relative; width: 100%; }`,
          `.framer-xYL1x .framer-192ntvu, .framer-xYL1x .framer-1pnwgze { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-xYL1x .framer-1f6dqjm { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 320px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 320px; }`,
          `.framer-xYL1x .framer-12spi9k-container { flex: 1 0 0px; height: 100%; pointer-events: none; position: relative; width: 1px; }`,
          `.framer-xYL1x .framer-qajce { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: 100%; }`,
          `.framer-xYL1x .framer-13smdry { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-xYL1x[data-border="true"]::after, .framer-xYL1x [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-xYL1x`
      )),
      (Wi = Ui),
      (Ui.displayName = `MusicPlayerWindow`),
      (Ui.defaultProps = { height: 520, width: 320 }),
      O(Ui, {
        variant: {
          options: [`xDClrel0Q`, `T6HAS0B0T`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        d1W1Z2nEo: { title: `Click`, type: z.EventHandler },
      }),
      he(
        Ui,
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
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Ai,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea = e(() => {
    (g(),
      w(),
      a(),
      (Ki = `var(--framer-icon-mask)`),
      (qi = d(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ji = v.create(qi)),
      (Yi = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Ji, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (Xi = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 18 L 6 6 M 0 6 L 18 6 M 2 18 L 16 18 C 17.105 18 18 17.105 18 16 L 18 2 C 18 0.895 17.105 0 16 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 16 C 0 17.105 0.895 18 2 18 Z" fill="transparent" height="18px" id="QaZWWF3Mk" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="18px"/></svg>`),
      (Zi = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Qi = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Zi(e),
            u = R(`686113218`, Xi);
          return l(Yi, {
            ...c,
            className: S(`framer-oWbUh`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-oWbUh { -webkit-mask: ${Ki}; aspect-ratio: 1; display: block; mask: ${Ki}; width: 24px; }`,
        ],
        `framer-oWbUh`
      )),
      (Qi.displayName = `Table Panel Window Sidebar`),
      ($i = Qi),
      O(Qi, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: z.Number,
        },
      }));
  });
function ta(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya = e(() => {
    (g(),
      w(),
      x(),
      a(),
      Re(),
      qe(),
      ea(),
      Xt(),
      (na = E(Le)),
      (ra = E($i)),
      (ia = E(W)),
      (aa = E(Ke)),
      (oa = [`YfTtg7FAg`, `DgW46swHw`]),
      (sa = `framer-LOLJx`),
      (ca = { DgW46swHw: `framer-v-1cxleid`, YfTtg7FAg: `framer-v-tbiifn` }),
      (la = { duration: 0, type: `tween` }),
      (ua = (e, t) => `translate(-50%, -50%) ${t}`),
      (da = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (fa = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (pa = { "Variant 1": `YfTtg7FAg`, "Variant 2": `DgW46swHw` }),
      (ma = v.create(p)),
      (ha = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        d1W1Z2nEo: e ?? i.d1W1Z2nEo,
        variant: pa[i.variant] ?? i.variant ?? `YfTtg7FAg`,
      })),
      (ga = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_a = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se(),
            u = le(),
            { style: d, className: f, layoutId: m, variant: g, d1W1Z2nEo: _, ...y } = ha(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = re({
              cycleOrder: oa,
              defaultVariant: `YfTtg7FAg`,
              ref: r,
              variant: g,
              variantClassNames: ca,
            }),
            j = ga(e, A),
            { activeVariantCallback: M, delay: P } = pe(b),
            F = M(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
            }),
            I = M(async (...e) => {
              k(`DgW46swHw`);
            }),
            te = M(async (...e) => {
              k(`YfTtg7FAg`);
            }),
            ne = S(sa),
            L = () => b === `DgW46swHw`;
          return l(ee, {
            id: m ?? i,
            children: l(ma, {
              animate: A,
              initial: !1,
              children: l(fa, {
                value: la,
                children: h(v.div, {
                  ...y,
                  ...w,
                  className: S(ne, `framer-tbiifn`, f, x),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `YfTtg7FAg`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...d,
                  },
                  ...ta({ DgW46swHw: { "data-framer-name": `Variant 2` } }, b, T),
                  children: [
                    h(v.div, {
                      className: `framer-tv9x22`,
                      "data-framer-name": `TopBar`,
                      layoutDependency: j,
                      layoutId: `CtyXxNfDG`,
                      children: [
                        h(v.div, {
                          className: `framer-1gpf188`,
                          "data-highlight": !0,
                          layoutDependency: j,
                          layoutId: `KxGUU3bR0`,
                          onTap: F,
                          children: [
                            l(v.div, {
                              className: `framer-8gvluv`,
                              layoutDependency: j,
                              layoutId: `c4jdU9yUI`,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-1au23zx`,
                              layoutDependency: j,
                              layoutId: `NOnsu4_dx`,
                              style: {
                                backgroundColor: `var(--token-4277ec07-6b7c-4224-b5fc-ef6ee750288b, rgb(255, 232, 21))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-z562l8`,
                              layoutDependency: j,
                              layoutId: `scgAv17PL`,
                              style: {
                                backgroundColor: `var(--token-956c8e5d-f704-4307-a99c-526b9b90099b, rgb(69, 255, 8))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                          ],
                        }),
                        h(v.div, {
                          className: `framer-wet8z3`,
                          layoutDependency: j,
                          layoutId: `yIbUs3KoY`,
                          children: [
                            l(Le, {
                              animated: !0,
                              className: `framer-1dnhb85`,
                              layoutDependency: j,
                              layoutId: `muNbipKQc`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                              },
                            }),
                            l(v.div, {
                              className: `framer-8wztdj`,
                              layoutDependency: j,
                              layoutId: `QaqmYIXPd`,
                              style: {
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                              },
                              children: l($i, {
                                animated: !0,
                                className: `framer-1sxa2in`,
                                layoutDependency: j,
                                layoutId: `Y5nqP3NWW`,
                                style: {
                                  "--1ww558a": 2,
                                  "--4rxgx6": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(N, {
                      __fromCanvasComponent: !0,
                      children: l(p, {
                        children: l(v.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `26px`,
                            "--framer-font-weight": `500`,
                            "--framer-line-height": `0.9em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                          },
                          children: `Chaos Folder`,
                        }),
                      }),
                      className: `framer-1nrdnjp`,
                      fonts: [`FS;Outfit-medium`],
                      layoutDependency: j,
                      layoutId: `h1C21Pn0B`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    h(v.div, {
                      className: `framer-12e6d7k`,
                      layoutDependency: j,
                      layoutId: `YFUIPD6nA`,
                      style: {
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      },
                      children: [
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 61.4 + 49.0862,
                          children: l(D, {
                            className: `framer-bzc4to-container`,
                            layoutDependency: j,
                            layoutId: `UtqHWtAI_-container`,
                            nodeId: `UtqHWtAI_`,
                            rendersWithMotion: !0,
                            scopeId: `ji9JLsIn_`,
                            transformTemplate: ua,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: da(
                                {
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: `https://framerusercontent.com/images/6owKSH5eo4K2RNExIuRsZKbV3pk.png?width=512&height=512`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `UtqHWtAI_`,
                              layoutId: `UtqHWtAI_`,
                              meyCDwPZV: `final`,
                              width: `100%`,
                              ...ta({ DgW46swHw: { cjUkKfSnr: void 0 } }, b, T),
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 61.4 + 163.8276,
                          children: l(D, {
                            className: `framer-1atn2il-container`,
                            layoutDependency: j,
                            layoutId: `QA1yHs5gC-container`,
                            nodeId: `QA1yHs5gC`,
                            rendersWithMotion: !0,
                            scopeId: `ji9JLsIn_`,
                            transformTemplate: ua,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: da(
                                {
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: `https://framerusercontent.com/images/6owKSH5eo4K2RNExIuRsZKbV3pk.png?width=512&height=512`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `QA1yHs5gC`,
                              layoutId: `QA1yHs5gC`,
                              meyCDwPZV: `final_final`,
                              width: `100%`,
                              ...ta({ DgW46swHw: { cjUkKfSnr: void 0 } }, b, T),
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 61.4 + 80.3793,
                          children: l(D, {
                            className: `framer-u7yofp-container`,
                            layoutDependency: j,
                            layoutId: `SbgD_DY2y-container`,
                            nodeId: `SbgD_DY2y`,
                            rendersWithMotion: !0,
                            scopeId: `ji9JLsIn_`,
                            transformTemplate: ua,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: da(
                                {
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: `https://framerusercontent.com/images/Qm4fkSB8lLcTm0d5hjNy8B4.png?width=512&height=512`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `SbgD_DY2y`,
                              layoutId: `SbgD_DY2y`,
                              meyCDwPZV: `FINAL FINAL_1`,
                              width: `100%`,
                              ...ta({ DgW46swHw: { cjUkKfSnr: void 0 } }, b, T),
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 61.4 + 217.8793,
                          children: l(D, {
                            className: `framer-192pwfm-container`,
                            layoutDependency: j,
                            layoutId: `dovM3YkeT-container`,
                            nodeId: `dovM3YkeT`,
                            rendersWithMotion: !0,
                            scopeId: `ji9JLsIn_`,
                            transformTemplate: ua,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: da(
                                {
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: `https://framerusercontent.com/images/6owKSH5eo4K2RNExIuRsZKbV3pk.png?width=512&height=512`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `dovM3YkeT`,
                              layoutId: `dovM3YkeT`,
                              meyCDwPZV: `FINAL USE THIS`,
                              width: `100%`,
                              ...ta({ DgW46swHw: { cjUkKfSnr: void 0 } }, b, T),
                            }),
                          }),
                        }),
                        l(B, {
                          height: 82,
                          y: (u?.y || 0) + 15 + 61.4 + 42.4483,
                          children: l(D, {
                            className: `framer-xbll49-container`,
                            layoutDependency: j,
                            layoutId: `vpGx1yr7T-container`,
                            nodeId: `vpGx1yr7T`,
                            rendersWithMotion: !0,
                            scopeId: `ji9JLsIn_`,
                            transformTemplate: ua,
                            children: l(W, {
                              cjUkKfSnr: I,
                              EBsOzoAvt: da(
                                {
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  src: `https://framerusercontent.com/images/WmNUiuZsn1JcB1Eds2lri2wmoM.png?width=512&height=512`,
                                },
                                ``
                              ),
                              height: `100%`,
                              id: `vpGx1yr7T`,
                              layoutId: `vpGx1yr7T`,
                              meyCDwPZV: `FINAL REAL THIS ONE`,
                              width: `100%`,
                              ...ta({ DgW46swHw: { cjUkKfSnr: void 0 } }, b, T),
                            }),
                          }),
                        }),
                      ],
                    }),
                    L() &&
                      l(v.div, {
                        className: `framer-dap11g`,
                        layoutDependency: j,
                        layoutId: `Q3IWEboQV`,
                        style: { backgroundColor: `rgba(0, 0, 0, 0.8)` },
                        children: h(v.div, {
                          className: `framer-1kbakfh`,
                          layoutDependency: j,
                          layoutId: `UUoPJETlB`,
                          style: {
                            backgroundColor: `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                          },
                          children: [
                            l(N, {
                              __fromCanvasComponent: !0,
                              children: l(p, {
                                children: l(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                                  },
                                  children: `This item could not be opened. No backup was found. Consider this a reminder for next time.`,
                                }),
                              }),
                              className: `framer-zi1rp1`,
                              fonts: [`FS;Outfit-regular`],
                              layoutDependency: j,
                              layoutId: `zzJDHTMB4`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(v.div, {
                              className: `framer-lwjgq3`,
                              "data-highlight": !0,
                              layoutDependency: j,
                              layoutId: `BEWly5_2Q`,
                              onTap: te,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                              },
                              children: l(N, {
                                __fromCanvasComponent: !0,
                                children: l(p, {
                                  children: l(v.p, {
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
                                    children: `I'll back up my files`,
                                  }),
                                }),
                                className: `framer-8ygdo2`,
                                fonts: [`FS;Outfit-medium`],
                                layoutDependency: j,
                                layoutId: `uuTzIri7k`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(Ke, {
                              animated: !0,
                              className: `framer-12lfv54`,
                              layoutDependency: j,
                              layoutId: `xgbJIt_95`,
                              style: {
                                "--1ww558a": 2,
                                "--4rxgx6": `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                              },
                            }),
                          ],
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
          `.framer-LOLJx.framer-1c8frz5, .framer-LOLJx .framer-1c8frz5 { display: block; }`,
          `.framer-LOLJx.framer-tbiifn { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 420px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 650px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-LOLJx .framer-tv9x22 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 0px 0px; position: relative; width: 100%; }`,
          `.framer-LOLJx .framer-1gpf188 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 0px 3px 0px; position: relative; width: min-content; }`,
          `.framer-LOLJx .framer-8gvluv, .framer-LOLJx .framer-1au23zx, .framer-LOLJx .framer-z562l8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-LOLJx .framer-wet8z3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-LOLJx .framer-1dnhb85, .framer-LOLJx .framer-1sxa2in { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 15px); position: relative; width: 15px; }`,
          `.framer-LOLJx .framer-8wztdj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-LOLJx .framer-1nrdnjp, .framer-LOLJx .framer-8ygdo2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-LOLJx .framer-12e6d7k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 330px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-LOLJx .framer-bzc4to-container { flex: none; height: auto; left: 15%; position: absolute; top: 27%; width: auto; z-index: 1; }`,
          `.framer-LOLJx .framer-1atn2il-container { flex: none; height: auto; left: 35%; position: absolute; top: 62%; width: auto; z-index: 1; }`,
          `.framer-LOLJx .framer-u7yofp-container { flex: none; height: auto; left: 55%; position: absolute; top: 37%; width: auto; z-index: 1; }`,
          `.framer-LOLJx .framer-192pwfm-container { flex: none; height: auto; left: 69%; position: absolute; top: 78%; width: auto; z-index: 1; }`,
          `.framer-LOLJx .framer-xbll49-container { flex: none; height: auto; left: 80%; position: absolute; top: 25%; width: auto; z-index: 1; }`,
          `.framer-LOLJx .framer-dap11g { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-LOLJx .framer-1kbakfh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: min-content; }`,
          `.framer-LOLJx .framer-zi1rp1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 177px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-LOLJx .framer-lwjgq3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; }`,
          `.framer-LOLJx .framer-12lfv54 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 20px; }`,
          `.framer-LOLJx.framer-v-1cxleid .framer-zi1rp1 { order: 1; }`,
          `.framer-LOLJx.framer-v-1cxleid .framer-lwjgq3 { order: 2; }`,
          `.framer-LOLJx.framer-v-1cxleid .framer-12lfv54 { height: var(--framer-aspect-ratio-supported, 20px); order: 0; }`,
          `.framer-LOLJx[data-border="true"]::after, .framer-LOLJx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-LOLJx`
      )),
      (va = _a),
      (_a.displayName = `FinderWindow`),
      (_a.defaultProps = { height: 420, width: 650 }),
      O(_a, {
        variant: {
          options: [`YfTtg7FAg`, `DgW46swHw`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        d1W1Z2nEo: { title: `Click`, type: z.EventHandler },
      }),
      he(
        _a,
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
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
                weight: `400`,
              },
            ],
          },
          ...na,
          ...ra,
          ...ia,
          ...aa,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (_a.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(W, {}, t)])) }));
  });
function ba(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa = e(() => {
    (g(),
      w(),
      x(),
      a(),
      xe(),
      be(),
      (xa = E(Se)),
      (Sa = H(Se, { nodeId: `zkplzOWxm`, override: ye, scopeId: `M80JrISSh` })),
      (Ca = [`zfAHqHAvv`, `ki3ZDVtI_`]),
      (wa = `framer-bvcRH`),
      (Ta = { ki3ZDVtI_: `framer-v-52i9yu`, zfAHqHAvv: `framer-v-119eam1` }),
      (Ea = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Da = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Oa = ({ value: e, children: t }) => {
        let r = n(y),
          a = e ?? r.transition,
          o = i(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return l(y.Provider, { value: o, children: t });
      }),
      (ka = { ImagePreview: `zfAHqHAvv`, VideoPreview: `ki3ZDVtI_` }),
      (Aa = v.create(p)),
      (ja = ({ click: e, height: t, id: n, image: r, title: i, uRL: a, width: o, ...s }) => ({
        ...s,
        d1W1Z2nEo: e ?? s.d1W1Z2nEo,
        LqzKT3mID: r ?? s.LqzKT3mID,
        SmNXbmvHw: i ?? s.SmNXbmvHw ?? `Finder`,
        variant: ka[s.variant] ?? s.variant ?? `zfAHqHAvv`,
        XHP_D_gpm:
          a ??
          s.XHP_D_gpm ??
          `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
      })),
      (Ma = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Na = A(
        d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = s(),
            { activeLocale: a, setLocale: c } = se(),
            u = le(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: g,
              d1W1Z2nEo: _,
              LqzKT3mID: y,
              SmNXbmvHw: b,
              XHP_D_gpm: x,
              ...w
            } = ja(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: j,
              setGestureState: M,
              setVariant: P,
              variants: F,
            } = re({
              cycleOrder: Ca,
              defaultVariant: `zfAHqHAvv`,
              ref: r,
              variant: g,
              variantClassNames: Ta,
            }),
            I = Ma(e, F),
            { activeVariantCallback: te, delay: ne } = pe(T),
            L = te(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
            }),
            R = S(wa),
            ie = () => T === `ki3ZDVtI_`,
            ae = () => T !== `ki3ZDVtI_`;
          return l(ee, {
            id: m ?? i,
            children: l(Aa, {
              animate: F,
              initial: !1,
              children: l(Oa, {
                value: Ea,
                children: h(v.div, {
                  ...w,
                  ...k,
                  className: S(R, `framer-119eam1`, f, E),
                  "data-border": !0,
                  "data-framer-name": `ImagePreview`,
                  layoutDependency: I,
                  layoutId: `zfAHqHAvv`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, rgb(224, 224, 224))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.25)`,
                    ...d,
                  },
                  ...ba({ ki3ZDVtI_: { "data-framer-name": `VideoPreview` } }, T, A),
                  children: [
                    h(v.div, {
                      className: `framer-1rv5f62`,
                      "data-framer-name": `TopBar`,
                      layoutDependency: I,
                      layoutId: `OSPg1CKm6`,
                      children: [
                        h(v.div, {
                          className: `framer-1wvosua`,
                          "data-highlight": !0,
                          layoutDependency: I,
                          layoutId: `BJ4v81qjC`,
                          onTap: L,
                          children: [
                            l(v.div, {
                              className: `framer-m6hti`,
                              layoutDependency: I,
                              layoutId: `PIQFwJ6RR`,
                              style: {
                                backgroundColor: `var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-1n3ju82`,
                              layoutDependency: I,
                              layoutId: `yOpe92iA8`,
                              style: {
                                backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                            l(v.div, {
                              className: `framer-juj874`,
                              layoutDependency: I,
                              layoutId: `azp_bDTF4`,
                              style: {
                                backgroundColor: `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            }),
                          ],
                        }),
                        l(N, {
                          __fromCanvasComponent: !0,
                          children: l(p, {
                            children: l(v.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-line-height": `0.9em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0)))`,
                              },
                              children: `Finder`,
                            }),
                          }),
                          className: `framer-1i6xcna`,
                          fonts: [`FS;Outfit-regular`],
                          layoutDependency: I,
                          layoutId: `cRpe33AFs`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    ie() &&
                      l(B, {
                        children: l(D, {
                          className: `framer-rdmq7k-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: I,
                          layoutId: `zkplzOWxm-container`,
                          nodeId: `zkplzOWxm`,
                          rendersWithMotion: !0,
                          scopeId: `M80JrISSh`,
                          children: l(Sa, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 10,
                            bottomLeftRadius: 10,
                            bottomRightRadius: 10,
                            controls: !1,
                            height: `100%`,
                            id: `zkplzOWxm`,
                            isMixedBorderRadius: !1,
                            layoutId: `zkplzOWxm`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !1,
                            posterEnabled: !1,
                            srcType: `URL`,
                            srcUrl: x,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 10,
                            topRightRadius: 10,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    ae() &&
                      l(de, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: C((u?.y || 0) + 15 + 23.5),
                          sizes: `calc(${u?.width || `100vw`} - 30px)`,
                          ...Da(y),
                        },
                        className: `framer-409bn5`,
                        layoutDependency: I,
                        layoutId: `rZVv93bLV`,
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-bvcRH.framer-g6kmkg, .framer-bvcRH .framer-g6kmkg { display: block; }`,
          `.framer-bvcRH.framer-119eam1 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 290px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: relative; width: 272px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bvcRH .framer-1rv5f62 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-bvcRH .framer-1wvosua { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-bvcRH .framer-m6hti { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 9px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bvcRH .framer-1n3ju82 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bvcRH .framer-juj874 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-bvcRH .framer-1i6xcna { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-bvcRH .framer-rdmq7k-container { flex: 1 0 0px; height: 1px; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-bvcRH .framer-409bn5 { flex: 1 0 0px; height: 1px; overflow: visible; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-bvcRH[data-border="true"]::after, .framer-bvcRH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-bvcRH`
      )),
      (Pa = Na),
      (Na.displayName = `PreviewWindow`),
      (Na.defaultProps = { height: 290, width: 272 }),
      O(Na, {
        variant: {
          options: [`zfAHqHAvv`, `ki3ZDVtI_`],
          optionTitles: [`ImagePreview`, `VideoPreview`],
          title: `Variant`,
          type: z.Enum,
        },
        d1W1Z2nEo: { title: `Click`, type: z.EventHandler },
        LqzKT3mID: { title: `Image`, type: z.ResponsiveImage },
        SmNXbmvHw: { defaultValue: `Finder`, displayTextArea: !1, title: `Title`, type: z.String },
        onSmNXbmvHwChange: { changes: `SmNXbmvHw`, type: z.ChangeHandler },
        XHP_D_gpm: {
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          title: `URL`,
          type: z.String,
        },
        onXHP_D_gpmChange: { changes: `XHP_D_gpm`, type: z.ChangeHandler },
      }),
      he(
        Na,
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
            ],
          },
          ...xa,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ia,
  La,
  Ra,
  za = e(() => {
    (w(),
      ae.loadFonts([]),
      (Ia = [{ explicitInter: !0, fonts: [] }]),
      (La = [
        `.framer-BfVve .framer-styles-preset-dm8fks:not(.rich-text-wrapper), .framer-BfVve .framer-styles-preset-dm8fks.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-719539a8-6a95-451c-b70a-9eb0af988635, #0b1dff); --framer-link-text-background-corner-shape: superellipse(1); }`,
      ]),
      (Ra = `framer-BfVve`));
  }),
  Ba,
  Va,
  G,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  K,
  q,
  ao,
  oo,
  so,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo;
e(() => {
  (g(),
    w(),
    x(),
    a(),
    c(),
    ke(),
    xe(),
    bn(),
    Qn(),
    Br(),
    ui(),
    Gi(),
    ya(),
    Fa(),
    Xt(),
    za(),
    Ce(),
    (Ba = E(W)),
    (Va = E(Pa)),
    (G = ve(ce)),
    (Ha = E(Se)),
    (Ua = ve(v.div)),
    (Wa = E(Ee)),
    (Ga = _e(v.div)),
    (Ka = E(Zn)),
    (qa = E(yn)),
    (Ja = E(va)),
    (Ya = E(zr)),
    (Xa = E(Wi)),
    (Za = E(li)),
    (Qa = _e(ce)),
    ($a = {
      ORSX89pZv: `(min-width: 1200px)`,
      ub82kkJIc: `(min-width: 810px) and (max-width: 1199.98px)`,
      zwc6wwqjo: `(max-width: 809.98px)`,
    }),
    (eo = () => typeof document < `u`),
    (to = []),
    (no = `framer-8LSFF`),
    (ro = {
      ORSX89pZv: `framer-v-rzj0w1`,
      ub82kkJIc: `framer-v-17k9m0c`,
      zwc6wwqjo: `framer-v-15fwv7k`,
    }),
    (io = (e, t, n) => (e && t ? `position` : n)),
    (K = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: `inertia` }),
    (q = (e) => e.preventDefault()),
    (ao = (e, t) => `translate(-50%, -50%) ${t}`),
    (oo = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (so = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (J = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.5,
      skewX: 0,
      skewY: 0,
      transition: so,
      x: 0,
      y: 0,
    }),
    (Y = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: so,
      x: 0,
      y: 0,
    }),
    (X = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.5,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    ($ = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = ne({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (co = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.5, duration: 0.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (lo = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -25,
    }),
    (uo = {
      opacity: 1,
      rotate: 90,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: so,
    }),
    (fo = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (po = (e, t) => `translateY(-50%) ${t}`),
    (mo = { Desktop: `ORSX89pZv`, Phone: `zwc6wwqjo`, Tablet: `ub82kkJIc` }),
    (ho = ({ value: e }) =>
      fe()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (go = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: mo[r.variant] ?? r.variant ?? `ORSX89pZv`,
    })),
    (_o = A(
      d(function (e, t) {
        let r = o(null),
          a = t ?? r,
          c = s(),
          { activeLocale: u, setLocale: d } = se(),
          m = le(),
          { style: g, className: x, layoutId: w, variant: T, ...E } = go(e);
        me(i(() => we({}, u), [u]));
        let [D, O] = M(T, $a, !1),
          { activeVariantCallback: k, delay: A } = pe(void 0),
          F = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          I = ({ overlay: e }) =>
            k(async (...t) => {
              e.hide();
            }),
          ne = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          re = ({ overlay: e }) =>
            k(async (...t) => {
              e.hide();
            }),
          R = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          ae = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          oe = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          z = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          fe = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          H = S(no, Ra),
          he = n(j)?.isLayoutTemplate,
          _e = io(he, !!n(y)?.transition?.layout),
          ve = ue(`OyVf6qF81`),
          U = o(null),
          ye = () => (eo() ? D !== `zwc6wwqjo` : !0);
        return (
          ie({}),
          l(j.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: mo,
              primaryVariantId: `ORSX89pZv`,
              variantClassNames: ro,
            },
            children: h(ee, {
              id: w ?? c,
              children: [
                l(ho, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(v.div, {
                  ...E,
                  className: S(H, `framer-rzj0w1`, x),
                  ref: a,
                  style: { ...g },
                  children: l(L, {
                    breakpoint: D,
                    overrides: {
                      zwc6wwqjo: {
                        background: {
                          alt: ``,
                          backgroundSize: 0.6,
                          fit: `tile`,
                          intrinsicHeight: 1938,
                          intrinsicWidth: 3444,
                          loading: C((m?.y || 0) + 0 + 0),
                          pixelHeight: 1938,
                          pixelWidth: 3444,
                          positionX: `center`,
                          positionY: `center`,
                          sizes: m?.width || `100vw`,
                          src: `../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-40190e.jpg`,
                          srcSet: `../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-1df764.jpg 512w,../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-bada2b.jpg 1024w,../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA.jpg 2048w,../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-40190e.jpg 3444w`,
                        },
                      },
                    },
                    children: h(de, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 1938,
                        intrinsicWidth: 3444,
                        loading: C((m?.y || 0) + 0 + 0),
                        pixelHeight: 1938,
                        pixelWidth: 3444,
                        positionX: `center`,
                        positionY: `center`,
                        sizes: m?.width || `100vw`,
                        src: `../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-40190e.jpg`,
                        srcSet: `../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-1df764.jpg 512w,../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-bada2b.jpg 1024w,../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA.jpg 2048w,../../assets/images/hgNmKfRPeHqlrN0vENw1gw4wXA-40190e.jpg 3444w`,
                      },
                      className: `framer-r0orxq`,
                      "data-framer-name": `Desk`,
                      id: ve,
                      layout: _e,
                      ref: U,
                      children: [
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 434.9259 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 333.4076 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 402.4994,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1xwzxzu-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `1xwzxzu`,
                                    nodeId: `iovAvc26l`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 100,
                                            pixelWidth: 100,
                                            src: `../../assets/images/9wOFWrQGVxJzMXcPZuQobyXiM.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `iovAvc26l`,
                                        layoutId: `iovAvc26l`,
                                        meyCDwPZV: `RenderModule.jpg`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `1xwzxzu`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-yoks13`),
                                                        "data-framer-portal-id": `1xwzxzu`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `G__dFRrmA`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `364px` } },
                                                      children: l(B, {
                                                        width: `477px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-1a6g6qj-container`
                                                          ),
                                                          "data-framer-portal-id": `1xwzxzu`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `GBeNeT1vU`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `GBeNeT1vU`,
                                                            layoutId: `GBeNeT1vU`,
                                                            LqzKT3mID: oo(
                                                              {
                                                                pixelHeight: 950,
                                                                pixelWidth: 950,
                                                                src: `https://framerusercontent.com/images/71Q9NsSufg1sLVnzscvQ8vkvWY.jpg?width=950&height=950`,
                                                                srcSet: `https://framerusercontent.com/images/71Q9NsSufg1sLVnzscvQ8vkvWY.jpg?scale-down-to=512&width=950&height=950 512w,https://framerusercontent.com/images/71Q9NsSufg1sLVnzscvQ8vkvWY.jpg?width=950&height=950 950w`,
                                                              },
                                                              ``
                                                            ),
                                                            SmNXbmvHw: `RenderModule.jpg`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`zfAHqHAvv`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 634 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 674.6398 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 581.1142,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-yfas3n-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `yfas3n`,
                                    nodeId: `yTESJ11IQ`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 90,
                                            pixelWidth: 100,
                                            src: `../../assets/images/X8myVwtMo16ZEsQelWClzF74xPw.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `yTESJ11IQ`,
                                        layoutId: `yTESJ11IQ`,
                                        meyCDwPZV: `Potato.mp4`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `yfas3n`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-1c3vl95`),
                                                        "data-framer-portal-id": `yfas3n`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `hZrwcf8E6`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `358px` } },
                                                      children: l(B, {
                                                        width: `469px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-1vfezeu-container`
                                                          ),
                                                          "data-framer-portal-id": `yfas3n`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `ohUS_8vwp`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `ohUS_8vwp`,
                                                            layoutId: `ohUS_8vwp`,
                                                            SmNXbmvHw: `Potato.mp4`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`ki3ZDVtI_`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69a9f46ebb772793aaf7a83a/main.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: { zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 525.3507 } },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 527.6513,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-18oevky-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `18oevky`,
                                    nodeId: `Ix17tQO7w`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 50,
                                            pixelWidth: 100,
                                            src: `../../assets/images/5mZU8QfD43IH1oX4kuDcGYBDNCM.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `Ix17tQO7w`,
                                        layoutId: `Ix17tQO7w`,
                                        meyCDwPZV: `UberRide.mp4`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `18oevky`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-19m1j1d`),
                                                        "data-framer-portal-id": `18oevky`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `Fil1uFLXp`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `355px` } },
                                                      children: l(B, {
                                                        width: `626px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-1iz3for-container`
                                                          ),
                                                          "data-framer-portal-id": `18oevky`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `DzjYbaQti`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `DzjYbaQti`,
                                                            layoutId: `DzjYbaQti`,
                                                            SmNXbmvHw: `UberRide.mp4`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`ki3ZDVtI_`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69a9fac88b86e9ed048dc6a9/main.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 539.5556 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 595.2559 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 542.2321,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-y7hke7-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `y7hke7`,
                                    nodeId: `DTZ7S5JlG`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 100,
                                            pixelWidth: 100,
                                            src: `../../assets/images/8qIPmYi49ztFkAtaqMoUOA5gZ90.png`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `DTZ7S5JlG`,
                                        layoutId: `DTZ7S5JlG`,
                                        meyCDwPZV: `Z08.gif`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `y7hke7`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-1af126e`),
                                                        "data-framer-portal-id": `y7hke7`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `NIgqOu6kn`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `355px` } },
                                                      children: l(B, {
                                                        width: `434px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-1muqyk-container`
                                                          ),
                                                          "data-framer-portal-id": `y7hke7`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `qrDaugAUv`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `qrDaugAUv`,
                                                            layoutId: `qrDaugAUv`,
                                                            SmNXbmvHw: `Z08.gif`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`ki3ZDVtI_`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69a9fa2d06a15537d02fed26/main.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 309 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 277.7204 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 380.6282,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-daz19c-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `daz19c`,
                                    nodeId: `aGzFO6HWE`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 200,
                                            pixelWidth: 200,
                                            src: `../../assets/images/hUcPxBgIpauMuzlmdEcZWvFiQMU.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `aGzFO6HWE`,
                                        layoutId: `aGzFO6HWE`,
                                        meyCDwPZV: `ByteEvents.gif`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `daz19c`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-1c251jm`),
                                                        "data-framer-portal-id": `daz19c`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `ELpDQyUvh`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `370px` } },
                                                      children: l(B, {
                                                        width: `400px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-14znb7e-container`
                                                          ),
                                                          "data-framer-portal-id": `daz19c`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `WNyARVYEv`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `WNyARVYEv`,
                                                            layoutId: `WNyARVYEv`,
                                                            SmNXbmvHw: `ByteEvents.gif`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`ki3ZDVtI_`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69aa10228b86e9ed048f6cf6/main.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 451.5926 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 384.3555 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 441.3815,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-uk34uj-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `uk34uj`,
                                    nodeId: `tmQhpWGAA`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 100,
                                            pixelWidth: 94,
                                            src: `../../assets/images/Spt7teMP6KDHT08iHgXYdOgs.png`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `tmQhpWGAA`,
                                        layoutId: `tmQhpWGAA`,
                                        meyCDwPZV: `R02.gif`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `uk34uj`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-1bbzg45`),
                                                        "data-framer-portal-id": `uk34uj`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `iAr2mOCNZ`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `341px` } },
                                                      children: l(B, {
                                                        width: `391px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-1s3ofnc-container`
                                                          ),
                                                          "data-framer-portal-id": `uk34uj`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `MYXMXNFXU`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `MYXMXNFXU`,
                                                            layoutId: `MYXMXNFXU`,
                                                            SmNXbmvHw: `R02.gif`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`ki3ZDVtI_`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69a9fa2d06a15537d02fed24/main.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 563.6296 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 560.8957 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 511.8554,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-b9qdyj-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `b9qdyj`,
                                    nodeId: `VjH7ZKjzV`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 100,
                                            pixelWidth: 70,
                                            src: `../../assets/images/tns9BIsxi9ZPfJlYFmiaiglW50.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `VjH7ZKjzV`,
                                        layoutId: `VjH7ZKjzV`,
                                        meyCDwPZV: `PanicCrew.jpg`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `b9qdyj`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-p2njaq`),
                                                        "data-framer-portal-id": `b9qdyj`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `bp_wMyepW`
                                                    ),
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: { zwc6wwqjo: { width: `357px` } },
                                                      children: l(B, {
                                                        width: `383px`,
                                                        children: l(G, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(
                                                            H,
                                                            `framer-dpcghp-container`
                                                          ),
                                                          "data-framer-portal-id": `b9qdyj`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          inComponentSlot: !0,
                                                          initial: X,
                                                          nodeId: `Wvhh4aVtL`,
                                                          onMouseDown: q,
                                                          rendersWithMotion: !0,
                                                          scopeId: `WYHwmHybk`,
                                                          children: l(Pa, {
                                                            d1W1Z2nEo: I({ overlay: e }),
                                                            height: `100%`,
                                                            id: `Wvhh4aVtL`,
                                                            layoutId: `Wvhh4aVtL`,
                                                            LqzKT3mID: oo(
                                                              {
                                                                pixelHeight: 1024,
                                                                pixelWidth: 720,
                                                                src: `https://framerusercontent.com/images/aTb5iJYWuEKEdywgm7rBPvOxouY.jpg?width=720&height=1024`,
                                                                srcSet: `https://framerusercontent.com/images/aTb5iJYWuEKEdywgm7rBPvOxouY.jpg?width=720&height=1024 720w`,
                                                              },
                                                              ``
                                                            ),
                                                            SmNXbmvHw: `PanicCrew.jpg`,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            variant: Z(`zfAHqHAvv`),
                                                            width: `100%`,
                                                            XHP_D_gpm: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l(_, {
                              children: l(L, {
                                breakpoint: D,
                                overrides: {
                                  ub82kkJIc: { y: (m?.y || 0) + 0 + 0 + 293.2593 },
                                  zwc6wwqjo: { y: (m?.y || 0) + 0 + 0 + 175.8246 },
                                },
                                children: l(B, {
                                  height: 82,
                                  y: (m?.y || 0) + 0 + 0 + 319.8748,
                                  children: h(G, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-6lxmpk-container`,
                                    drag: !0,
                                    dragConstraints: U,
                                    dragMomentum: !1,
                                    dragTransition: K,
                                    id: `6lxmpk`,
                                    nodeId: `udWXBo9Dz`,
                                    onMouseDown: q,
                                    rendersWithMotion: !0,
                                    scopeId: `WYHwmHybk`,
                                    transformTemplate: ao,
                                    children: [
                                      l(W, {
                                        cjUkKfSnr: F({ overlay: e }),
                                        EBsOzoAvt: oo(
                                          {
                                            pixelHeight: 100,
                                            pixelWidth: 68,
                                            src: `../../assets/images/iDpKtY2oV6OvljhJW4kHNQGjI.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `udWXBo9Dz`,
                                        layoutId: `udWXBo9Dz`,
                                        meyCDwPZV: `PurpleCat.jpg`,
                                        width: `100%`,
                                      }),
                                      l(b, {
                                        children:
                                          e.visible &&
                                          l(_, {
                                            children: f(
                                              l(P, {
                                                triggerId: `6lxmpk`,
                                                children: h(V, {
                                                  children: [
                                                    l(
                                                      v.div,
                                                      {
                                                        animate: {
                                                          opacity: 1,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.5, 0, 0.88, 0.77],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        className: S(H, `framer-1g1obsm`),
                                                        "data-framer-portal-id": `6lxmpk`,
                                                        exit: {
                                                          opacity: 0,
                                                          transition: {
                                                            delay: 0,
                                                            duration: 0,
                                                            ease: [0.12, 0.23, 0.5, 1],
                                                            type: `tween`,
                                                          },
                                                        },
                                                        initial: { opacity: 0 },
                                                      },
                                                      `Z4mD2r77j`
                                                    ),
                                                    l(B, {
                                                      width: `359px`,
                                                      children: l(G, {
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        animate: Y,
                                                        className: S(H, `framer-1f29b0d-container`),
                                                        "data-framer-portal-id": `6lxmpk`,
                                                        drag: !0,
                                                        dragConstraints: U,
                                                        dragMomentum: !1,
                                                        dragTransition: K,
                                                        exit: J,
                                                        inComponentSlot: !0,
                                                        initial: X,
                                                        nodeId: `MJFO1oEkv`,
                                                        onMouseDown: q,
                                                        rendersWithMotion: !0,
                                                        scopeId: `WYHwmHybk`,
                                                        children: l(Pa, {
                                                          d1W1Z2nEo: I({ overlay: e }),
                                                          height: `100%`,
                                                          id: `MJFO1oEkv`,
                                                          layoutId: `MJFO1oEkv`,
                                                          LqzKT3mID: oo(
                                                            {
                                                              pixelHeight: 1024,
                                                              pixelWidth: 696,
                                                              src: `https://framerusercontent.com/images/beILxXTkahv31zwUpmpFiGQQHY.jpg?width=696&height=1024`,
                                                              srcSet: `https://framerusercontent.com/images/beILxXTkahv31zwUpmpFiGQQHY.jpg?width=696&height=1024 696w`,
                                                            },
                                                            ``
                                                          ),
                                                          SmNXbmvHw: `PurpleCat.jpg`,
                                                          style: { height: `100%`, width: `100%` },
                                                          variant: Z(`zfAHqHAvv`),
                                                          width: `100%`,
                                                          XHP_D_gpm: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              Q()
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        }),
                        h(Ga, {
                          animate: co,
                          className: `framer-15x0axu`,
                          "data-framer-appear-id": `15x0axu`,
                          "data-framer-name": `Top`,
                          initial: lo,
                          optimized: !0,
                          children: [
                            h(`div`, {
                              className: `framer-18sfg84`,
                              children: [
                                l($, {
                                  blockDocumentScrolling: !1,
                                  dismissWithEsc: !1,
                                  children: (e) =>
                                    l(_, {
                                      children: h(v.div, {
                                        className: `framer-1fugj6e`,
                                        "data-framer-name": `Asterisk`,
                                        id: `1fugj6e`,
                                        onTap: ne({ overlay: e }),
                                        whileHover: uo,
                                        children: [
                                          l(ge, {
                                            className: `framer-xfbgwm`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.864 12.27" overflow="visible"><path d="M 5.083 12.264 L 5.058 7.76 L 1.63 10.315 L 0 7.161 L 4.021 5.785 L 0.674 3.262 L 3.147 0.714 L 5.564 4.154 L 6.913 0 L 10.035 1.695 L 7.537 5.25 L 11.864 5.282 L 11.302 8.805 L 7.231 7.397 L 8.555 11.697 L 5.095 12.27 Z" fill="var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(b, {
                                            children:
                                              e.visible &&
                                              l(_, {
                                                children: f(
                                                  l(P, {
                                                    triggerId: `1fugj6e`,
                                                    children: h(V, {
                                                      children: [
                                                        l(
                                                          v.div,
                                                          {
                                                            animate: {
                                                              opacity: 1,
                                                              transition: {
                                                                delay: 0,
                                                                duration: 0,
                                                                ease: [0.5, 0, 0.88, 0.77],
                                                                type: `tween`,
                                                              },
                                                            },
                                                            className: S(H, `framer-16vhrbl`),
                                                            "data-framer-portal-id": `1fugj6e`,
                                                            exit: {
                                                              opacity: 0,
                                                              transition: {
                                                                delay: 0,
                                                                duration: 0,
                                                                ease: [0.12, 0.23, 0.5, 1],
                                                                type: `tween`,
                                                              },
                                                            },
                                                            initial: { opacity: 0 },
                                                          },
                                                          `BTWDAFSDe`
                                                        ),
                                                        h(Ua, {
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          animate: Y,
                                                          className: S(H, `framer-f5euuw`),
                                                          "data-border": !0,
                                                          "data-framer-name": `MainInfoWindow`,
                                                          "data-framer-portal-id": `1fugj6e`,
                                                          drag: !0,
                                                          dragConstraints: U,
                                                          dragMomentum: !1,
                                                          dragTransition: K,
                                                          exit: J,
                                                          initial: X,
                                                          onMouseDown: q,
                                                          children: [
                                                            l(`div`, {
                                                              className: `framer-v5bzdb`,
                                                              "data-framer-name": `TopBar`,
                                                              children: h(v.div, {
                                                                className: `framer-d7p9p0`,
                                                                onTap: re({ overlay: e }),
                                                                children: [
                                                                  l(`div`, {
                                                                    className: `framer-c885tp`,
                                                                  }),
                                                                  l(`div`, {
                                                                    className: `framer-s80hjo`,
                                                                  }),
                                                                  l(`div`, {
                                                                    className: `framer-1gqnb2x`,
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                            l(B, {
                                                              children: l(ce, {
                                                                className: `framer-1fxx63-container`,
                                                                isAuthoredByUser: !0,
                                                                isModuleExternal: !0,
                                                                nodeId: `RvyOwSPmK`,
                                                                scopeId: `WYHwmHybk`,
                                                                children: l(Se, {
                                                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                  borderRadius: 15,
                                                                  bottomLeftRadius: 15,
                                                                  bottomRightRadius: 15,
                                                                  controls: !1,
                                                                  height: `100%`,
                                                                  id: `RvyOwSPmK`,
                                                                  isMixedBorderRadius: !1,
                                                                  layoutId: `RvyOwSPmK`,
                                                                  loop: !0,
                                                                  muted: !0,
                                                                  objectFit: `cover`,
                                                                  playing: !0,
                                                                  posterEnabled: !1,
                                                                  srcType: `URL`,
                                                                  srcUrl: `https://video.gumlet.io/69a9abbd06a15537d02701a5/69a9fac88b86e9ed048dc6ab/main.mp4`,
                                                                  startTime: 0,
                                                                  style: { width: `100%` },
                                                                  topLeftRadius: 15,
                                                                  topRightRadius: 15,
                                                                  volume: 25,
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                            h(`div`, {
                                                              className: `framer-1nlxrr3`,
                                                              children: [
                                                                l(N, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: l(p, {
                                                                    children: h(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                        "--framer-font-size": `20px`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-line-height": `1em`,
                                                                        "--framer-text-alignment": `center`,
                                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                      },
                                                                      children: [
                                                                        `Lab `,
                                                                        l(`span`, {
                                                                          style: {
                                                                            "--font-selector": `R0Y7RUIgR2FyYW1vbmQtNjAwaXRhbGlj`,
                                                                            "--framer-font-family": `"EB Garamond", "EB Garamond Placeholder", serif`,
                                                                            "--framer-font-style": `italic`,
                                                                            "--framer-font-weight": `600`,
                                                                          },
                                                                          children: `Pro`,
                                                                        }),
                                                                      ],
                                                                    }),
                                                                  }),
                                                                  className: `framer-7nf7c1`,
                                                                  fonts: [
                                                                    `FS;Outfit-medium`,
                                                                    `GF;EB Garamond-600italic`,
                                                                  ],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                                l(N, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: l(p, {
                                                                    children: l(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                        "--framer-font-size": `13px`,
                                                                        "--framer-line-height": `1em`,
                                                                        "--framer-text-alignment": `center`,
                                                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                      },
                                                                      children: ` for experiments and side quests`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-5awhov`,
                                                                  fonts: [`FS;Outfit-regular`],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              ],
                                                            }),
                                                            h(`div`, {
                                                              className: `framer-ofznos`,
                                                              children: [
                                                                h(`div`, {
                                                                  className: `framer-w2rbpb`,
                                                                  children: [
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                          },
                                                                          children: `Chip`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-18vxokx`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                          },
                                                                          children: `Memory`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-cc5pnp`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                          },
                                                                          children: `Storage Usage`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-hv59n2`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                          },
                                                                          children: `Serial Number`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-15smj83`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                          },
                                                                          children: `Warranty`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-xkof0p`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                                                          },
                                                                          children: `Version`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-11etmpm`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  ],
                                                                }),
                                                                h(`div`, {
                                                                  className: `framer-ry4ibl`,
                                                                  children: [
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                          },
                                                                          children: `Potato Chip 1`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-wc2sku`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                          },
                                                                          children: `128 GB (insufficient)`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-ysyr7v`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                          },
                                                                          children: `99% (mostly memes)`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1lhi9a5`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                          },
                                                                          children: `PR0-CR45-T1N8`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1u03vgu`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                          },
                                                                          children: `Void since 2020`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1yyc4k7`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    l(N, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: l(p, {
                                                                        children: l(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                            "--framer-font-size": `11px`,
                                                                            "--framer-line-height": `0.9em`,
                                                                            "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                          },
                                                                          children: `Tomato OS 1.0`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-ox0xvr`,
                                                                      fonts: [`FS;Outfit-regular`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            l(`div`, {
                                                              className: `framer-rsbmo0`,
                                                              children: l(N, {
                                                                __fromCanvasComponent: !0,
                                                                children: h(p, {
                                                                  children: [
                                                                    l(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                        "--framer-font-size": `11px`,
                                                                        "--framer-line-height": `1em`,
                                                                        "--framer-text-alignment": `center`,
                                                                        "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                      },
                                                                      children: `© 2026 Artjom Becker`,
                                                                    }),
                                                                    l(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--font-selector": `RlM7T3V0Zml0LXJlZ3VsYXI=`,
                                                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                                                        "--framer-font-size": `11px`,
                                                                        "--framer-line-height": `1em`,
                                                                        "--framer-text-alignment": `center`,
                                                                        "--framer-text-color": `var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, rgb(171, 171, 171))`,
                                                                      },
                                                                      children: `All Rights Reserved.`,
                                                                    }),
                                                                  ],
                                                                }),
                                                                className: `framer-3uep3r`,
                                                                fonts: [`FS;Outfit-regular`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  Q()
                                                ),
                                              }),
                                          }),
                                        ],
                                      }),
                                    }),
                                }),
                                l(N, {
                                  __fromCanvasComponent: !0,
                                  children: l(p, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: l(te, {
                                        href: { webPageId: `KMvorioYR` },
                                        motionChild: !0,
                                        nodeId: `Op2KLQCVM`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `WYHwmHybk`,
                                        smoothScroll: !1,
                                        children: l(v.a, {
                                          className: `framer-styles-preset-dm8fks`,
                                          "data-styles-preset": `bo2pmA1Vv`,
                                          children: `Home`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-pucyao`,
                                  fonts: [`FS;Outfit-medium`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(N, {
                                  __fromCanvasComponent: !0,
                                  children: l(p, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: l(te, {
                                        href: { webPageId: `vjUZoXgWM` },
                                        motionChild: !0,
                                        nodeId: `CRLFUEebY`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `WYHwmHybk`,
                                        smoothScroll: !1,
                                        children: l(v.a, {
                                          className: `framer-styles-preset-dm8fks`,
                                          "data-styles-preset": `bo2pmA1Vv`,
                                          children: `Work`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-16pbjko`,
                                  fonts: [`FS;Outfit-medium`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(N, {
                                  __fromCanvasComponent: !0,
                                  children: l(p, {
                                    children: l(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7T3V0Zml0LW1lZGl1bQ==`,
                                        "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-color": `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                      },
                                      children: l(te, {
                                        href: { webPageId: `JerseRN6g` },
                                        motionChild: !0,
                                        nodeId: `Ho8FOTggw`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `WYHwmHybk`,
                                        smoothScroll: !1,
                                        children: l(v.a, {
                                          className: `framer-styles-preset-dm8fks`,
                                          "data-styles-preset": `bo2pmA1Vv`,
                                          children: `About`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-juk2l6`,
                                  fonts: [`FS;Outfit-medium`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            h(`div`, {
                              className: `framer-1b8o42y`,
                              children: [
                                ye() &&
                                  l(de, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 18,
                                      intrinsicWidth: 23,
                                      loading: C((m?.y || 0) + 0 + 0 + 0 + -85.5 + 94.5),
                                      pixelHeight: 35,
                                      pixelWidth: 46,
                                      sizes: `15px`,
                                      src: `../../assets/images/YUpOglYuvpayJHdWhtaCnCZqg4.png`,
                                    },
                                    className: `framer-10mto0w hidden-15fwv7k`,
                                    "data-framer-name": `Sound`,
                                  }),
                                ye() &&
                                  l(de, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 17,
                                      intrinsicWidth: 23,
                                      loading: C((m?.y || 0) + 0 + 0 + 0 + -85.5 + 94.5),
                                      pixelHeight: 33,
                                      pixelWidth: 45,
                                      sizes: `15px`,
                                      src: `../../assets/images/jFT5kHll4Dyx1jEOPjrS4iQCHgI.png`,
                                    },
                                    className: `framer-w7h4go hidden-15fwv7k`,
                                    "data-framer-name": `Wifi`,
                                  }),
                                ye() &&
                                  l(de, {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 19,
                                      intrinsicWidth: 19,
                                      loading: C((m?.y || 0) + 0 + 0 + 0 + -85.5 + 94.5),
                                      pixelHeight: 38,
                                      pixelWidth: 38,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `12px`,
                                      src: `../../assets/images/Ib69FdSqZGRCaIQ0fyGCwbQjntQ.png`,
                                    },
                                    className: `framer-1tu8ek3 hidden-15fwv7k`,
                                    "data-framer-name": `Control`,
                                  }),
                                h(`div`, {
                                  className: `framer-w0e0m4`,
                                  children: [
                                    l(B, {
                                      children: l(ce, {
                                        className: `framer-1towkbt-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `qy8sx0N_8`,
                                        scopeId: `WYHwmHybk`,
                                        children: l(Ee, {
                                          color: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                          font: {
                                            fontFamily: `"Outfit", "Outfit Placeholder", sans-serif`,
                                            fontSize: `13px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `0.9em`,
                                          },
                                          height: `100%`,
                                          id: `qy8sx0N_8`,
                                          layoutId: `qy8sx0N_8`,
                                          monthFormat: `short`,
                                          outputType: `date`,
                                          showMinutes: !0,
                                          showMonth: !0,
                                          showSeconds: !0,
                                          showWeekday: !1,
                                          showYear: !1,
                                          tabularFont: !1,
                                          timeFormat: `24h`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    l(B, {
                                      children: l(ce, {
                                        className: `framer-m59p21-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `bg7NWRQTi`,
                                        scopeId: `WYHwmHybk`,
                                        children: l(Ee, {
                                          color: `var(--token-2d91bfb1-1bb0-467e-bf37-8ef020f4f815, rgb(0, 0, 0))`,
                                          font: {
                                            fontFamily: `"Outfit", "Outfit Placeholder", sans-serif`,
                                            fontSize: `13px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `0.9em`,
                                          },
                                          height: `100%`,
                                          id: `bg7NWRQTi`,
                                          layoutId: `bg7NWRQTi`,
                                          monthFormat: `short`,
                                          outputType: `time`,
                                          showMinutes: !0,
                                          showMonth: !0,
                                          showSeconds: !1,
                                          showWeekday: !0,
                                          showYear: !1,
                                          tabularFont: !1,
                                          timeFormat: `12h`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        l($, {
                          blockDocumentScrolling: !1,
                          dismissWithEsc: !1,
                          children: (e) =>
                            l($, {
                              blockDocumentScrolling: !1,
                              dismissWithEsc: !1,
                              children: (t) =>
                                l($, {
                                  blockDocumentScrolling: !1,
                                  dismissWithEsc: !1,
                                  children: (n) =>
                                    l($, {
                                      blockDocumentScrolling: !1,
                                      dismissWithEsc: !1,
                                      children: (r) =>
                                        l($, {
                                          blockDocumentScrolling: !1,
                                          dismissWithEsc: !1,
                                          children: (i) =>
                                            l(_, {
                                              children: l(B, {
                                                height: 70,
                                                y: (m?.y || 0) + 0 + 0 + 24 + 882,
                                                children: h(Qa, {
                                                  animate: co,
                                                  className: `framer-pt82p-container`,
                                                  "data-framer-appear-id": `pt82p`,
                                                  id: `pt82p`,
                                                  initial: fo,
                                                  nodeId: `T07EJgcIR`,
                                                  optimized: !0,
                                                  rendersWithMotion: !0,
                                                  scopeId: `WYHwmHybk`,
                                                  children: [
                                                    l(L, {
                                                      breakpoint: D,
                                                      overrides: {
                                                        zwc6wwqjo: { variant: Z(`d7ovyU_95`) },
                                                      },
                                                      children: l(Zn, {
                                                        height: `100%`,
                                                        id: `T07EJgcIR`,
                                                        kwXwdiEra: R({ overlay: i }),
                                                        layoutId: `T07EJgcIR`,
                                                        LpyGwsT4a: fe({ overlay: e }),
                                                        q7SRn3XCj: ae({ overlay: r }),
                                                        qC4svSqzl: oe({ overlay: n }),
                                                        qUC6YOtLI: z({ overlay: t }),
                                                        style: { height: `100%` },
                                                        variant: Z(`Qcz_TOTKQ`),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                    l(b, {
                                                      children:
                                                        e.visible &&
                                                        l(_, {
                                                          children: f(
                                                            l(P, {
                                                              triggerId: `pt82p`,
                                                              children: h(V, {
                                                                children: [
                                                                  l(
                                                                    v.div,
                                                                    {
                                                                      animate: {
                                                                        opacity: 1,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0.3,
                                                                          ease: [
                                                                            0.5, 0, 0.88, 0.77,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      className: S(
                                                                        H,
                                                                        `framer-16jkahn`
                                                                      ),
                                                                      "data-framer-name": `Trash`,
                                                                      "data-framer-portal-id": `pt82p`,
                                                                      exit: {
                                                                        opacity: 0,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0.3,
                                                                          ease: [
                                                                            0.12, 0.23, 0.5, 1,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      initial: { opacity: 0 },
                                                                    },
                                                                    `BDxCCst4H`
                                                                  ),
                                                                  l(L, {
                                                                    breakpoint: D,
                                                                    overrides: {
                                                                      zwc6wwqjo: { width: `367px` },
                                                                    },
                                                                    children: l(B, {
                                                                      children: l(L, {
                                                                        breakpoint: D,
                                                                        overrides: {
                                                                          zwc6wwqjo: {
                                                                            transformTemplate:
                                                                              void 0,
                                                                          },
                                                                        },
                                                                        children: l(G, {
                                                                          __perspectiveFX: !1,
                                                                          __targetOpacity: 1,
                                                                          animate: Y,
                                                                          className: S(
                                                                            H,
                                                                            `framer-1r44h9b-container`
                                                                          ),
                                                                          "data-framer-portal-id": `pt82p`,
                                                                          drag: !0,
                                                                          dragConstraints: U,
                                                                          dragMomentum: !1,
                                                                          dragTransition: K,
                                                                          exit: J,
                                                                          inComponentSlot: !0,
                                                                          initial: X,
                                                                          nodeId: `RkHrHZtZR`,
                                                                          onMouseDown: q,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `WYHwmHybk`,
                                                                          transformTemplate: po,
                                                                          children: l(L, {
                                                                            breakpoint: D,
                                                                            overrides: {
                                                                              zwc6wwqjo: {
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                              },
                                                                            },
                                                                            children: l(yn, {
                                                                              d1W1Z2nEo: I({
                                                                                overlay: e,
                                                                              }),
                                                                              height: `100%`,
                                                                              id: `RkHrHZtZR`,
                                                                              layoutId: `RkHrHZtZR`,
                                                                              variant:
                                                                                Z(`lOX7pAPbe`),
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
                                                            Q()
                                                          ),
                                                        }),
                                                    }),
                                                    l(b, {
                                                      children:
                                                        i.visible &&
                                                        l(_, {
                                                          children: f(
                                                            l(P, {
                                                              triggerId: `pt82p`,
                                                              children: h(V, {
                                                                children: [
                                                                  l(
                                                                    v.div,
                                                                    {
                                                                      animate: {
                                                                        opacity: 1,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0.3,
                                                                          ease: [
                                                                            0.5, 0, 0.88, 0.77,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      className: S(
                                                                        H,
                                                                        `framer-1o0on7t`
                                                                      ),
                                                                      "data-framer-name": `Finder`,
                                                                      "data-framer-portal-id": `pt82p`,
                                                                      exit: {
                                                                        opacity: 0,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0.3,
                                                                          ease: [
                                                                            0.12, 0.23, 0.5, 1,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      initial: { opacity: 0 },
                                                                    },
                                                                    `v_TIAUDiq`
                                                                  ),
                                                                  l(L, {
                                                                    breakpoint: D,
                                                                    overrides: {
                                                                      zwc6wwqjo: { width: `367px` },
                                                                    },
                                                                    children: l(B, {
                                                                      children: l(G, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: Y,
                                                                        className: S(
                                                                          H,
                                                                          `framer-zr9fg3-container`
                                                                        ),
                                                                        "data-framer-portal-id": `pt82p`,
                                                                        drag: !0,
                                                                        dragConstraints: U,
                                                                        dragMomentum: !1,
                                                                        dragTransition: K,
                                                                        exit: J,
                                                                        inComponentSlot: !0,
                                                                        initial: X,
                                                                        nodeId: `vllvNnWuH`,
                                                                        onMouseDown: q,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `WYHwmHybk`,
                                                                        children: l(L, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            zwc6wwqjo: {
                                                                              style: {
                                                                                height: `100%`,
                                                                                width: `100%`,
                                                                              },
                                                                            },
                                                                          },
                                                                          children: l(va, {
                                                                            d1W1Z2nEo: I({
                                                                              overlay: i,
                                                                            }),
                                                                            height: `100%`,
                                                                            id: `vllvNnWuH`,
                                                                            layoutId: `vllvNnWuH`,
                                                                            variant: Z(`YfTtg7FAg`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                            Q()
                                                          ),
                                                        }),
                                                    }),
                                                    l(b, {
                                                      children:
                                                        r.visible &&
                                                        l(_, {
                                                          children: f(
                                                            l(P, {
                                                              triggerId: `pt82p`,
                                                              children: h(V, {
                                                                children: [
                                                                  l(
                                                                    v.div,
                                                                    {
                                                                      animate: {
                                                                        opacity: 1,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0.3,
                                                                          ease: [
                                                                            0.5, 0, 0.88, 0.77,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      className: S(
                                                                        H,
                                                                        `framer-zrw1n9`
                                                                      ),
                                                                      "data-framer-name": `Reminders`,
                                                                      "data-framer-portal-id": `pt82p`,
                                                                      exit: {
                                                                        opacity: 0,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0.3,
                                                                          ease: [
                                                                            0.12, 0.23, 0.5, 1,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      initial: { opacity: 0 },
                                                                    },
                                                                    `Zjihbg6TA`
                                                                  ),
                                                                  l(B, {
                                                                    children: l(L, {
                                                                      breakpoint: D,
                                                                      overrides: {
                                                                        zwc6wwqjo: {
                                                                          transformTemplate: ao,
                                                                        },
                                                                      },
                                                                      children: l(G, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: Y,
                                                                        className: S(
                                                                          H,
                                                                          `framer-1c4pw1n-container`
                                                                        ),
                                                                        "data-framer-portal-id": `pt82p`,
                                                                        drag: !0,
                                                                        dragConstraints: U,
                                                                        dragMomentum: !1,
                                                                        dragTransition: K,
                                                                        exit: J,
                                                                        inComponentSlot: !0,
                                                                        initial: X,
                                                                        nodeId: `m3stmBVLF`,
                                                                        onMouseDown: q,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `WYHwmHybk`,
                                                                        children: l(zr, {
                                                                          d1W1Z2nEo: I({
                                                                            overlay: r,
                                                                          }),
                                                                          height: `100%`,
                                                                          id: `m3stmBVLF`,
                                                                          layoutId: `m3stmBVLF`,
                                                                          variant: Z(`NQqhuS1V_`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                            Q()
                                                          ),
                                                        }),
                                                    }),
                                                    l(b, {
                                                      children:
                                                        t.visible &&
                                                        l(_, {
                                                          children: f(
                                                            l(P, {
                                                              triggerId: `pt82p`,
                                                              children: h(V, {
                                                                children: [
                                                                  l(
                                                                    v.div,
                                                                    {
                                                                      animate: {
                                                                        opacity: 1,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0,
                                                                          ease: [
                                                                            0.5, 0, 0.88, 0.77,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      className: S(
                                                                        H,
                                                                        `framer-1u2x6po`
                                                                      ),
                                                                      "data-framer-name": `Music`,
                                                                      "data-framer-portal-id": `pt82p`,
                                                                      exit: {
                                                                        opacity: 0,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0,
                                                                          ease: [
                                                                            0.12, 0.23, 0.5, 1,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      initial: { opacity: 0 },
                                                                    },
                                                                    `Fq3nVG9lw`
                                                                  ),
                                                                  l(B, {
                                                                    children: l(L, {
                                                                      breakpoint: D,
                                                                      overrides: {
                                                                        zwc6wwqjo: {
                                                                          transformTemplate: ao,
                                                                        },
                                                                      },
                                                                      children: l(G, {
                                                                        __perspectiveFX: !1,
                                                                        __targetOpacity: 1,
                                                                        animate: Y,
                                                                        className: S(
                                                                          H,
                                                                          `framer-vzqrpg-container`
                                                                        ),
                                                                        "data-framer-portal-id": `pt82p`,
                                                                        drag: !0,
                                                                        dragConstraints: U,
                                                                        dragMomentum: !1,
                                                                        dragTransition: K,
                                                                        exit: J,
                                                                        inComponentSlot: !0,
                                                                        initial: X,
                                                                        nodeId: `eRY2hlL4U`,
                                                                        onMouseDown: q,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `WYHwmHybk`,
                                                                        children: l(Wi, {
                                                                          d1W1Z2nEo: I({
                                                                            overlay: t,
                                                                          }),
                                                                          height: `100%`,
                                                                          id: `eRY2hlL4U`,
                                                                          layoutId: `eRY2hlL4U`,
                                                                          variant: Z(`xDClrel0Q`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                            Q()
                                                          ),
                                                        }),
                                                    }),
                                                    l(b, {
                                                      children:
                                                        n.visible &&
                                                        l(_, {
                                                          children: f(
                                                            l(P, {
                                                              triggerId: `pt82p`,
                                                              children: h(V, {
                                                                children: [
                                                                  l(
                                                                    v.div,
                                                                    {
                                                                      animate: {
                                                                        opacity: 1,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0,
                                                                          ease: [
                                                                            0.5, 0, 0.88, 0.77,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      className: S(
                                                                        H,
                                                                        `framer-1dnds9h`
                                                                      ),
                                                                      "data-framer-name": `FaceTime`,
                                                                      "data-framer-portal-id": `pt82p`,
                                                                      exit: {
                                                                        opacity: 0,
                                                                        transition: {
                                                                          delay: 0,
                                                                          duration: 0,
                                                                          ease: [
                                                                            0.12, 0.23, 0.5, 1,
                                                                          ],
                                                                          type: `tween`,
                                                                        },
                                                                      },
                                                                      initial: { opacity: 0 },
                                                                    },
                                                                    `dDCfnUL7q`
                                                                  ),
                                                                  l(B, {
                                                                    children: l(G, {
                                                                      __perspectiveFX: !1,
                                                                      __targetOpacity: 1,
                                                                      animate: Y,
                                                                      className: S(
                                                                        H,
                                                                        `framer-1k4swv9-container`
                                                                      ),
                                                                      "data-framer-portal-id": `pt82p`,
                                                                      drag: !0,
                                                                      dragConstraints: U,
                                                                      dragMomentum: !1,
                                                                      dragTransition: K,
                                                                      exit: J,
                                                                      inComponentSlot: !0,
                                                                      initial: X,
                                                                      nodeId: `VrGVo3HR9`,
                                                                      onMouseDown: q,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `WYHwmHybk`,
                                                                      transformTemplate: ao,
                                                                      children: l(li, {
                                                                        d1W1Z2nEo: I({
                                                                          overlay: n,
                                                                        }),
                                                                        height: `100%`,
                                                                        id: `VrGVo3HR9`,
                                                                        layoutId: `VrGVo3HR9`,
                                                                        variant: Z(`wBsPk_0zH`),
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                            Q()
                                                          ),
                                                        }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-8LSFF.framer-5n4tve, .framer-8LSFF .framer-5n4tve { display: block; }`,
        `.framer-8LSFF.framer-rzj0w1 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-8LSFF .framer-r0orxq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-8LSFF .framer-1xwzxzu-container { flex: none; height: auto; left: 34%; position: absolute; top: 44%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-yoks13, .framer-8LSFF.framer-1c3vl95, .framer-8LSFF.framer-19m1j1d, .framer-8LSFF.framer-1af126e, .framer-8LSFF.framer-1c251jm, .framer-8LSFF.framer-1bbzg45, .framer-8LSFF.framer-p2njaq, .framer-8LSFF.framer-1g1obsm, .framer-8LSFF.framer-16vhrbl, .framer-8LSFF.framer-16jkahn, .framer-8LSFF.framer-1o0on7t, .framer-8LSFF.framer-zrw1n9, .framer-8LSFF.framer-1u2x6po, .framer-8LSFF.framer-1dnds9h { inset: 0px; position: fixed; user-select: none; z-index: -1; }`,
        `.framer-8LSFF.framer-1a6g6qj-container { flex: none; height: 498px; left: 166px; position: fixed; top: 112px; width: 477px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-yfas3n-container { flex: none; height: auto; left: 52%; position: absolute; top: 62%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-1vfezeu-container { bottom: 127px; flex: none; height: 499px; position: fixed; right: 82px; width: 469px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-18oevky-container { flex: none; height: auto; left: 45%; position: absolute; top: 57%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-1iz3for-container { flex: none; height: 353px; left: 108px; position: fixed; top: 108px; width: 626px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-y7hke7-container { flex: none; height: auto; left: 35%; position: absolute; top: 58%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-1muqyk-container { bottom: 139px; flex: none; height: 391px; left: calc(53.33333333333336% - 434px / 2); position: fixed; width: 434px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-daz19c-container { flex: none; height: auto; left: 67%; position: absolute; top: 42%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-14znb7e-container { flex: none; height: 400px; left: calc(47.50000000000002% - 400px / 2); position: fixed; top: 96px; width: 400px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-uk34uj-container { flex: none; height: auto; left: 40%; position: absolute; top: 48%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-1s3ofnc-container { flex: none; height: 403px; left: calc(58.416666666666686% - 391px / 2); position: fixed; top: 53px; width: 391px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-b9qdyj-container { flex: none; height: auto; left: 65%; position: absolute; top: 55%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-dpcghp-container { flex: none; height: 463px; position: fixed; right: 188px; top: 61px; width: 383px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-6lxmpk-container { flex: none; height: auto; left: 40%; position: absolute; top: 36%; transform: translate(-50%, -50%); width: auto; z-index: 0; }`,
        `.framer-8LSFF.framer-1f29b0d-container { flex: none; height: 501px; left: calc(55.25000000000002% - 359px / 2); position: fixed; top: calc(46.29404617253951% - 501px / 2); width: 359px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-15x0axu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 25px; justify-content: space-between; left: 0px; overflow: visible; padding: 16px 24px 12px 24px; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-8LSFF .framer-18sfg84 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 29px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-8LSFF .framer-1fugj6e { align-content: center; align-items: center; aspect-ratio: 1 / 1; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 11px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 12px; will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-8LSFF .framer-xfbgwm { height: 13px; position: relative; width: 12px; }`,
        `.framer-8LSFF.framer-f5euuw { --border-bottom-width: 1px; --border-color: var(--token-e5a511bf-849c-4ac6-b942-175c537ace13, #e0e0e0); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-1817a4ee-7f17-4390-8058-441b60ee74e3, #fafafa); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 420px; justify-content: flex-start; left: calc(50.00000000000002% - 270px / 2); overflow: var(--overflow-clip-fallback, clip); padding: 15px; position: fixed; top: calc(50.06075334143381% - 420px / 2); width: 270px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF .framer-v5bzdb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-8LSFF .framer-d7p9p0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-8LSFF .framer-c885tp { aspect-ratio: 1 / 1; background-color: var(--token-09add85e-6c81-465f-8c44-0591b81a82be, #fe3c01); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: var(--framer-aspect-ratio-supported, 9px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-8LSFF .framer-s80hjo { aspect-ratio: 1 / 1; background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, #ababab); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-8LSFF .framer-1gqnb2x { aspect-ratio: 1 / 1; background-color: var(--token-01c07c7e-a9ae-45ca-a79a-cc49e2fa5e89, #ababab); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: var(--framer-aspect-ratio-supported, 12px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-8LSFF .framer-1fxx63-container { flex: none; height: auto; pointer-events: none; position: relative; width: 129px; }`,
        `.framer-8LSFF .framer-1nlxrr3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-8LSFF .framer-7nf7c1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 237px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-8LSFF .framer-5awhov { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 237px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-8LSFF .framer-ofznos { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 0px 15px; position: relative; width: 100%; }`,
        `.framer-8LSFF .framer-w2rbpb { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-8LSFF .framer-18vxokx, .framer-8LSFF .framer-cc5pnp, .framer-8LSFF .framer-hv59n2, .framer-8LSFF .framer-15smj83, .framer-8LSFF .framer-xkof0p, .framer-8LSFF .framer-11etmpm, .framer-8LSFF .framer-wc2sku, .framer-8LSFF .framer-ysyr7v, .framer-8LSFF .framer-1lhi9a5, .framer-8LSFF .framer-1u03vgu, .framer-8LSFF .framer-1yyc4k7, .framer-8LSFF .framer-ox0xvr, .framer-8LSFF .framer-3uep3r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-8LSFF .framer-ry4ibl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-8LSFF .framer-rsbmo0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 25px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-8LSFF .framer-pucyao, .framer-8LSFF .framer-16pbjko, .framer-8LSFF .framer-juk2l6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-8LSFF .framer-1b8o42y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-8LSFF .framer-10mto0w, .framer-8LSFF .framer-w7h4go { flex: none; height: 11px; overflow: visible; position: relative; width: 15px; }`,
        `.framer-8LSFF .framer-1tu8ek3 { flex: none; height: 11px; overflow: visible; position: relative; width: 12px; }`,
        `.framer-8LSFF .framer-w0e0m4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-8LSFF .framer-1towkbt-container, .framer-8LSFF .framer-m59p21-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-8LSFF .framer-pt82p-container { flex: none; height: 70px; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-8LSFF.framer-1r44h9b-container { flex: none; height: auto; position: fixed; right: 80px; top: 50%; transform: translateY(-50%); width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF.framer-zr9fg3-container { bottom: 142px; flex: none; height: auto; left: 90px; position: fixed; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF.framer-1c4pw1n-container { flex: none; height: auto; position: fixed; right: 157px; top: 99px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF.framer-vzqrpg-container { flex: none; height: auto; left: 309px; position: fixed; top: 86px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-8LSFF.framer-1k4swv9-container { flex: none; height: auto; left: 50%; position: fixed; top: 44%; transform: translate(-50%, -50%); width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        ...La,
        `.framer-8LSFF[data-border="true"]::after, .framer-8LSFF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-8LSFF.framer-rzj0w1 { width: 810px; } .framer-8LSFF .framer-1xwzxzu-container { left: 21%; top: 48%; } .framer-8LSFF .framer-yfas3n-container { left: 53%; top: 68%; } .framer-8LSFF .framer-y7hke7-container { left: 30%; top: 58%; } .framer-8LSFF .framer-daz19c-container { left: 77%; top: 35%; } .framer-8LSFF .framer-uk34uj-container { left: 34%; top: 49%; } .framer-8LSFF .framer-b9qdyj-container { left: 79%; top: 60%; } .framer-8LSFF .framer-6lxmpk-container { left: 38%; top: 33%; }}`,
        `@media (max-width: 809.98px) { .framer-8LSFF.framer-rzj0w1 { width: 390px; } .framer-8LSFF .framer-1xwzxzu-container { left: 23%; top: 37%; } .framer-8LSFF.framer-1a6g6qj-container { height: 380px; left: calc(50.00000000000002% - 364px / 2); top: calc(50.1184834123223% - 380px / 2); width: 364px; } .framer-8LSFF .framer-yfas3n-container { left: 50%; top: 72%; } .framer-8LSFF.framer-1vfezeu-container { bottom: unset; height: 433px; left: calc(50.00000000000002% - 358px / 2); right: unset; top: calc(45.26066350710903% - 433px / 2); width: 358px; } .framer-8LSFF .framer-18oevky-container { left: 42%; top: 57%; } .framer-8LSFF.framer-1iz3for-container { left: calc(50.00000000000002% - 355px / 2); top: calc(34.12322274881519% - 353px / 2); width: 355px; } .framer-8LSFF .framer-y7hke7-container { left: 24%; top: 64%; } .framer-8LSFF.framer-1muqyk-container { bottom: unset; left: calc(50.00000000000002% - 355px / 2); top: calc(50.00000000000002% - 391px / 2); width: 355px; } .framer-8LSFF .framer-daz19c-container { left: 74%; top: 32%; } .framer-8LSFF.framer-14znb7e-container { left: unset; right: 10px; top: 142px; width: 370px; } .framer-8LSFF .framer-uk34uj-container { left: 40%; top: 43%; } .framer-8LSFF.framer-1s3ofnc-container { height: 351px; left: calc(50.00000000000002% - 341px / 2); top: calc(33.175355450236985% - 351px / 2); width: 341px; } .framer-8LSFF .framer-b9qdyj-container { left: 76%; top: 60%; } .framer-8LSFF.framer-dpcghp-container { height: 432px; left: calc(50.00000000000002% - 357px / 2); right: unset; top: calc(51.89573459715642% - 432px / 2); width: 357px; } .framer-8LSFF .framer-6lxmpk-container { left: 40%; top: 22%; } .framer-8LSFF.framer-1f29b0d-container { left: calc(50.00000000000002% - 359px / 2); top: calc(47.03791469194315% - 501px / 2); } .framer-8LSFF.framer-1r44h9b-container { height: 420px; left: calc(50.00000000000002% - 367px / 2); right: unset; top: calc(45.26066350710903% - 420px / 2); transform: unset; width: 367px; } .framer-8LSFF.framer-zr9fg3-container { bottom: unset; height: 420px; left: calc(50.00000000000002% - 367px / 2); top: calc(47.63033175355452% - 420px / 2); width: 367px; } .framer-8LSFF.framer-1c4pw1n-container { left: 50%; right: unset; top: 45%; transform: translate(-50%, -50%); } .framer-8LSFF.framer-vzqrpg-container { left: 50%; top: 50%; transform: translate(-50%, -50%); } .framer-8LSFF.framer-1k4swv9-container { top: 45%; }}`,
      ],
      `framer-8LSFF`
    )),
    (vo = _o),
    (_o.displayName = `About`),
    (_o.defaultProps = { height: 823, width: 1200 }),
    he(
      _o,
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
            {
              cssFamilyName: `EB Garamond`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `EB Garamond`,
              url: `https://fonts.gstatic.com/s/ebgaramond/v32/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7diR49_WamXgXFI.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Outfit`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Outfit`,
              url: `../../assets/misc/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Ba,
        ...Va,
        ...Ha,
        ...Wa,
        ...Ka,
        ...qa,
        ...Ja,
        ...Ya,
        ...Xa,
        ...Za,
        ...U(Ia),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (_o.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          T(W, {}, t),
          T(Pa, {}, t),
          T(Zn, {}, t),
          T(yn, {}, t),
          T(va, {}, t),
          T(zr, {}, t),
          T(Wi, {}, t),
          T(li, {}, t),
        ])
      ),
    }),
    (yo = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerWYHwmHybk`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ub82kkJIc":{"layout":["fixed","auto"]},"zwc6wwqjo":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `823`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"OyVf6qF81":{"pattern":":OyVf6qF81","name":"top"}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { yo as __FramerMetadata__, vo as default, to as queryParamNames };
//# sourceMappingURL=b2qR61hgFBqtYA-EGuLPSC4EYdBr4-jdIBfCPcU6uI4.D9mNy5Fh.mjs.map
