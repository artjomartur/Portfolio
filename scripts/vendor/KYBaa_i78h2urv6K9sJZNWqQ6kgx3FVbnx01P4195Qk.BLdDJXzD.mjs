import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  P as s,
  R as c,
  _ as l,
  a as u,
  c as d,
  g as ee,
  i as f,
  j as p,
  k as m,
  l as h,
  o as g,
  s as _,
  v as te,
} from "./react.D20wc1Tc.mjs";
import { S as v, a as ne, n as y, r as b, t as re } from "./motion.CdKWDduH.mjs";
import {
  B as x,
  C as S,
  Dt as C,
  H as ie,
  M as w,
  O as ae,
  Ot as oe,
  P as T,
  St as E,
  T as se,
  Tt as D,
  _t as ce,
  a as O,
  b as k,
  bt as le,
  ct as ue,
  dt as de,
  et as A,
  f as fe,
  ft as pe,
  gt as me,
  ht as he,
  i as j,
  k as ge,
  lt as _e,
  mt as ve,
  n as M,
  nt as ye,
  o as N,
  p as P,
  q as F,
  rt as I,
  u as be,
  wt as L,
  y as R,
  yt as xe,
} from "./framer.DLo72eib.mjs";
import {
  A as Se,
  C as Ce,
  D as we,
  E as Te,
  M as Ee,
  O as De,
  S as Oe,
  T as z,
  _ as B,
  d as V,
  f as H,
  g as ke,
  h as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  o as U,
  p as Fe,
  s as Ie,
  u as Le,
  v as Re,
  w as ze,
  x as W,
} from "./shared-lib.BME5ZRRK.mjs";
var Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe = e(() => {
    (g(),
      F(),
      n(),
      (Be = `var(--framer-icon-mask)`),
      (Ve = ee(function (e, t) {
        return d(`svg`, { ...e, ref: t, children: e.children });
      })),
      (He = v.create(Ve)),
      (Ue = ee((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? d(He, { ...a, layoutId: r, ref: t, children: i })
          : d(`svg`, { ...a, ref: t, children: i });
      })),
      (We = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 0 12" fill="transparent" height="12px" id="qMvRy61Gj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 6)" width="12px"/><path d="M 0 0 L 12 12" fill="transparent" height="12px" id="YX0AMSC6b" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 6)" width="12px"/></svg>`),
      (Ge = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Ke = D(
        ee(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Ge(e),
            l = E(`2710857035`, We);
          return d(Ue, {
            ...c,
            className: w(`framer-RiU4T`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: d(`use`, { href: l }),
          });
        }),
        [
          `.framer-RiU4T { -webkit-mask: ${Be}; aspect-ratio: 1; display: block; mask: ${Be}; width: 24px; }`,
        ],
        `framer-RiU4T`
      )),
      (Ke.displayName = `X`),
      ge(Ke, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: N.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: N.Number,
        },
      }));
  }),
  G,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt = e(() => {
    (g(),
      F(),
      re(),
      n(),
      (G = `framer-KEDwb`),
      (Je = { q8nCgHQMF: `framer-v-14o2r58` }),
      (Ye = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Xe = ({ value: e, children: n }) => {
        let r = m(ne),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(ne.Provider, { value: a, children: n });
      }),
      (Ze = v.create(o)),
      (Qe = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        ffGBqMX3l: e ?? i.ffGBqMX3l,
      })),
      ($e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (et = D(
        ee(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: s, setLocale: c } = me();
          _e();
          let { style: l, className: u, layoutId: ee, variant: f, ffGBqMX3l: p, ...m } = Qe(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: ne,
              gestureVariant: y,
              isLoading: re,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = L({ defaultVariant: `q8nCgHQMF`, ref: i, variant: f, variantClassNames: Je }),
            ie = $e(e, C),
            { activeVariantCallback: ae, delay: oe } = ue(h),
            T = ae(async (...e) => {
              if ((x({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            E = w(G);
          return d(b, {
            id: ee ?? a,
            children: d(Ze, {
              animate: C,
              initial: !1,
              children: d(Xe, {
                value: Ye,
                children: d(v.div, {
                  ...m,
                  ...ne,
                  className: w(E, `framer-14o2r58`, u, g),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: ie,
                  layoutId: `q8nCgHQMF`,
                  onTap: T,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(230, 230, 235, 0.25)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backdropFilter: `blur(3px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.16)`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    WebkitBackdropFilter: `blur(3px)`,
                    ...l,
                  },
                  children: d(se, {
                    __fromCanvasComponent: !0,
                    children: d(o, {
                      children: d(v.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=`,
                          "--framer-font-family": `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                          "--framer-font-size": `12px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb8f85ee-5b22-4e71-ac0d-ee3888122efc, rgb(255, 255, 255)))`,
                        },
                        children: `Resume`,
                      }),
                    }),
                    className: `framer-1qahmg4`,
                    fonts: [`GF;Mona Sans-regular`],
                    layoutDependency: ie,
                    layoutId: `Z2V4ipK3h`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-fb8f85ee-5b22-4e71-ac0d-ee3888122efc, rgb(255, 255, 255))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-KEDwb.framer-14xfe2g, .framer-KEDwb .framer-14xfe2g { display: block; }`,
          `.framer-KEDwb.framer-14o2r58 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }`,
          `.framer-KEDwb .framer-1qahmg4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-KEDwb[data-border="true"]::after, .framer-KEDwb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-KEDwb`
      )),
      (et.displayName = `Resume button`),
      (et.defaultProps = { height: 22, width: 63 }),
      ge(et, { ffGBqMX3l: { title: `Click`, type: N.EventHandler } }),
      ae(
        et,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Mona Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Mona Sans`,
                url: `https://fonts.gstatic.com/s/monasans/v4/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99Y41P6zHtY.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function nt(e) {
  let [t, n] = s(!0),
    i = r(null),
    o = r(null),
    l = r(e.onClose);
  if (
    (a(() => {
      l.current = e.onClose;
    }, [e.onClose]),
    a(() => {
      let e = () => {
          o.current && (o.current.style.pointerEvents = `auto`);
        },
        t = (e) => {
          i.current && !i.current.contains(e.target) && (n(!1), l.current && l.current());
        };
      return (
        c.addEventListener(`pointerup`, e),
        c.addEventListener(`pointerdown`, t),
        () => {
          (c.removeEventListener(`pointerup`, e), c.removeEventListener(`pointerdown`, t));
        }
      );
    }, []),
    !t)
  )
    return null;
  let u = { position: `absolute`, zIndex: 10, cursor: `grab` },
    ee = () => {
      o.current && (o.current.style.pointerEvents = `none`);
    };
  return h(`div`, {
    ref: i,
    style: { ...rt, ...e.style },
    children: [
      d(`div`, { onPointerDown: ee, style: { ...u, top: 0, left: 0, right: 0, height: `48px` } }),
      d(`div`, {
        onPointerDown: ee,
        style: { ...u, bottom: 0, left: `160px`, width: `calc(100% - 160px)`, height: `48px` },
      }),
      d(`div`, {
        onPointerDown: ee,
        style: { ...u, top: `48px`, bottom: `48px`, left: 0, width: `32px` },
      }),
      d(`div`, {
        onPointerDown: ee,
        style: { ...u, top: `48px`, bottom: 0, right: 0, width: `32px` },
      }),
      d(`iframe`, {
        ref: o,
        src: e.url,
        style: it,
        allow: `fullscreen`,
        title: `Herding Cats Game`,
      }),
    ],
  });
}
var rt,
  it,
  at = e(() => {
    (i(),
      g(),
      n(),
      F(),
      (nt.defaultProps = { url: `https://herding-cats-ten.vercel.app` }),
      ge(nt, {
        url: {
          type: N.String,
          title: `Game URL`,
          defaultValue: `https://herding-cats-ten.vercel.app`,
        },
        onClose: { type: N.EventHandler, title: `On Close` },
      }),
      (rt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        overflow: `hidden`,
        borderRadius: `16px`,
        background: `#000`,
      }),
      (it = { width: `100%`, height: `100%`, border: `none` }));
  });
function ot(e) {
  let {
      followCursor: n = !1,
      showToggle: i = !0,
      showLabel: o = !0,
      rememberChoice: u = !0,
      speed: ee = 10,
      fleeDistance: f = 120,
      fleeSpeedMultiplier: m = 1.35,
      size: g = `1x`,
      zIndex: te = 999,
      cat: v = `Classic`,
      customSprite: ne = { src: ``, alt: `Custom oneko sprite sheet` },
      idleBehavior: y = `sleep`,
      catClickable: b = !0,
      labelText: re = `You like cats?`,
      labelColor: x = `#000000`,
      labelFont: S = {
        fontSize: `14px`,
        variant: `Medium`,
        letterSpacing: `-0.01em`,
        lineHeight: `1.2em`,
      },
      toggleCorner: C = `bottom-right`,
      pillBackground: ie = `#FFFFFF`,
      pillBorderColor: w = `#EEEEEE`,
      pillRadius: ae = 999,
      pillPadding: oe = `8px 10px`,
      toggleOnColor: T = `#000000`,
      toggleOffColor: E = `#CCCCCC`,
      toggleThumbColor: se = `#FFFFFF`,
      showShadow: D = !0,
      style: ce,
    } = e,
    O = he(),
    k = r(null),
    le = `neko-cat-follow-choice`,
    ue = r({ x: 0, y: 0 }),
    de = r({ x: 0, y: 0 }),
    A = r({ x: 0, y: 0 }),
    fe = r(`idle`),
    pe = r(0),
    me = r(0),
    j = r(0),
    ge = r(0),
    _e = r(0),
    ve = r(!1),
    M = r(0),
    ye = 300 * 10,
    [N, P] = s(0),
    [F, I] = s(n),
    be = t(
      () =>
        g === `0.75x`
          ? 0.75
          : g === `1.25x`
            ? 1.25
            : g === `1.5x`
              ? 1.5
              : g === `1.75x`
                ? 1.75
                : g === `2x`
                  ? 2
                  : g === `2.25x`
                    ? 2.25
                    : g === `2.5x`
                      ? 2.5
                      : g === `3x`
                        ? 3
                        : g === `4x`
                          ? 4
                          : 1,
      [g]
    ),
    L = st * be,
    R = !!ne?.src,
    xe = t(
      () => ({
        idle: [`still`],
        alert: [`alert`],
        tired: [`yawn`],
        sleeping: [`sleep1`, `sleep2`],
        scratchSelf: [`itch1`, `itch2`, `lickpaw`],
        scratchWallN: [`nscratch1`, `nscratch2`],
        scratchWallS: [`sscratch1`, `sscratch2`],
        scratchWallE: [`escratch1`, `escratch2`],
        scratchWallW: [`wscratch1`, `wscratch2`],
        N: [`nrun1`, `nrun2`],
        NE: [`nerun1`, `nerun2`],
        E: [`erun1`, `erun2`],
        SE: [`serun1`, `serun2`],
        S: [`srun1`, `srun2`],
        SW: [`swrun1`, `swrun2`],
        W: [`wrun1`, `wrun2`],
        NW: [`nwrun1`, `nwrun2`],
      }),
      []
    ),
    Se = lt[v] ?? `white`,
    Ce = p((e) => `${ut}/${Se}/${e}.gif`, [Se]);
  a(() => {
    if (R || c === void 0) return;
    let e = Object.values(xe).flat();
    Array.from(new Set(e)).forEach((e) => {
      let t = new c.Image();
      t.src = Ce(e);
    });
  }, [xe, Ce, R]);
  let we = p(() => {
      if (c === void 0) return;
      let e = k.current;
      if (!e) return;
      let t = e.getBoundingClientRect(),
        n = t.left + t.width / 2 - L / 2,
        r = t.top + t.height / 2 - L / 2;
      ((de.current = { x: n, y: r }),
        A.current.x === 0 && A.current.y === 0 && (A.current = { x: n, y: r }));
    }, [L]),
    Te = p((e, t) => {
      let n = (Math.atan2(t, e) * 180) / Math.PI;
      return n >= -22.5 && n < 22.5
        ? `E`
        : n >= 22.5 && n < 67.5
          ? `SE`
          : n >= 67.5 && n < 112.5
            ? `S`
            : n >= 112.5 && n < 157.5
              ? `SW`
              : n >= 157.5 || n < -157.5
                ? `W`
                : n >= -157.5 && n < -112.5
                  ? `NW`
                  : n >= -112.5 && n < -67.5
                    ? `N`
                    : `NE`;
    }, []);
  (a(() => {
    l(() => I(n));
  }, [n]),
    a(() => {
      F && ((ve.current = !1), (M.current = 0));
    }, [F]),
    a(() => {
      if (c === void 0 || !u) return;
      let e = c.localStorage.getItem(le);
      e !== null && l(() => I(e === `true`));
    }, [u]),
    a(() => {
      c === void 0 || !u || c.localStorage.setItem(le, String(F));
    }, [F, u]),
    a(() => {
      if (c === void 0 || O) return;
      we();
      let e = (e) => {
          ue.current = { x: e.clientX, y: e.clientY };
        },
        t = () => {
          we();
        };
      (c.addEventListener(`mousemove`, e),
        c.addEventListener(`resize`, t),
        c.addEventListener(`scroll`, t, { passive: !0 }));
      let n = c.setInterval(() => {
        j.current += 1;
        let e = F ? { x: ue.current.x - L / 2, y: ue.current.y - L / 2 } : de.current,
          t = ue.current.x - (A.current.x + L / 2),
          n = ue.current.y - (A.current.y + L / 2),
          r = Math.hypot(t, n);
        !F && r <= f
          ? ((_e.current = 4), (ve.current = !0), (M.current = 0))
          : _e.current > 0
            ? --_e.current
            : !F &&
              ve.current &&
              ((M.current += 1), M.current >= ye && ((ve.current = !1), (M.current = 0)));
        let i = Math.max(0, c.innerWidth - L),
          a = Math.max(0, c.innerHeight - L);
        if (!F && _e.current > 0) {
          let e = Math.max(1, ee * m),
            o = Math.max(1, r),
            s = -t / o,
            c = -n / o,
            l = A.current.x + s * e,
            u = A.current.y + c * e,
            d = Math.min(i, Math.max(0, l)),
            f = Math.min(a, Math.max(0, u));
          if (Math.hypot(d - A.current.x, f - A.current.y) < e * 0.25) {
            let t = { x: -c, y: s },
              n = { x: c, y: -s },
              r = {
                x: Math.min(i, Math.max(0, A.current.x + t.x * e)),
                y: Math.min(a, Math.max(0, A.current.y + t.y * e)),
              },
              o = {
                x: Math.min(i, Math.max(0, A.current.x + n.x * e)),
                y: Math.min(a, Math.max(0, A.current.y + n.y * e)),
              };
            Math.hypot(r.x - A.current.x, r.y - A.current.y) >=
            Math.hypot(o.x - A.current.x, o.y - A.current.y)
              ? ((s = t.x), (c = t.y))
              : ((s = n.x), (c = n.y));
          }
          ((A.current.x = Math.min(i, Math.max(0, A.current.x + s * e))),
            (A.current.y = Math.min(a, Math.max(0, A.current.y + c * e))),
            (fe.current = Te(s, c)),
            (pe.current = j.current % 2),
            (me.current = 0),
            (ge.current = 0));
        } else {
          !F && ve.current && (e = { x: A.current.x, y: A.current.y });
          let t = e.x - A.current.x,
            n = e.y - A.current.y,
            r = Math.hypot(t, n);
          if (r > 0.001 && r > (F ? 48 : 4)) {
            let e = Math.min(ee, r);
            ((A.current.x += (t / r) * e),
              (A.current.y += (n / r) * e),
              (A.current.x = Math.min(i, Math.max(0, A.current.x))),
              (A.current.y = Math.min(a, Math.max(0, A.current.y))),
              (fe.current = Te(t, n)),
              (pe.current = j.current % 2),
              (me.current = 0),
              (ge.current = 0));
          } else if (((me.current += 1), ge.current > 0)) {
            --ge.current;
            let e = dt[fe.current];
            pe.current = (pe.current + 1) % e.length;
          } else if (me.current < 10) ((fe.current = `idle`), (pe.current = 0));
          else if (me.current < 20) ((fe.current = `alert`), (pe.current = 0));
          else if (me.current < 30) ((fe.current = `tired`), (pe.current = 0));
          else {
            let e = Math.random();
            if (!F && y === `sit`) ((fe.current = `idle`), (ge.current = 2));
            else if (e < 0.06) ((fe.current = `scratchSelf`), (ge.current = 9));
            else if (e < 0.08) {
              let e = [`scratchWallN`, `scratchWallS`, `scratchWallE`, `scratchWallW`];
              ((fe.current = e[Math.floor(Math.random() * e.length)]), (ge.current = 6));
            } else ((fe.current = y === `sit` ? `idle` : `sleeping`), (ge.current = 12));
            ((pe.current = 0), (me.current = 20));
          }
        }
        l(() => P((e) => e + 1));
      }, 100);
      return () => {
        (c.removeEventListener(`mousemove`, e),
          c.removeEventListener(`resize`, t),
          c.removeEventListener(`scroll`, t),
          c.clearInterval(n));
      };
    }, [F, ee, Te, O, we, y, f, m, L, ye]),
    a(() => {
      c === void 0 || O || we();
    }, [F, O, we]));
  let Ee = t(() => {
      let e = dt[fe.current];
      return e[pe.current % e.length];
    }, [N]),
    De = t(() => {
      let e = xe[fe.current] ?? [`still`];
      return e[pe.current % e.length] ?? `still`;
    }, [xe, N]),
    Oe = t(() => {
      let [e, t] = Ee;
      return {
        width: L,
        height: L,
        backgroundImage: R ? `url("${ne?.src || ct}")` : `none`,
        backgroundPosition: `${e * L}px ${t * L}px`,
        backgroundSize: `${8 * L}px ${4 * L}px`,
        imageRendering: `pixelated`,
        backgroundRepeat: `no-repeat`,
        pointerEvents: b ? `auto` : `none`,
        cursor: b ? `pointer` : `default`,
        zIndex: te,
      };
    }, [Ee, R, ne, L, te, b]),
    z = t(() => ({ ...Oe, position: `fixed`, left: A.current.x, top: A.current.y }), [Oe, N]),
    B = t(() => {
      let e = { position: `fixed`, zIndex: te };
      return (
        C.includes(`top`) && (e.top = 16),
        C.includes(`bottom`) && (e.bottom = 16),
        C.includes(`left`) && (e.left = 16),
        C.includes(`right`) && (e.right = 16),
        e
      );
    }, [C, te]),
    V = p(() => {
      l(() => I((e) => !e));
    }, []),
    H = p(() => {
      b &&
        ((fe.current = Math.random() > 0.5 ? `scratchSelf` : `alert`),
        (pe.current = 0),
        (ge.current = 8),
        (me.current = 0),
        l(() => P((e) => e + 1)));
    }, [b]),
    ke = p(
      (e) => {
        (e.key === ` ` || e.key === `Enter`) && (e.preventDefault(), V());
      },
      [V]
    ),
    Ae = h(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
        gap: o ? 10 : 0,
        background: ie,
        border: `1px solid ${w}`,
        borderRadius: ae,
        padding: oe,
        boxShadow: D ? `0 10px 24px rgba(0,0,0,0.12)` : `none`,
        pointerEvents: `auto`,
        justifyContent: o ? `space-between` : `center`,
      },
      children: [
        o &&
          d(`span`, {
            style: {
              color: x,
              fontSize: S.fontSize,
              letterSpacing: S.letterSpacing,
              lineHeight: S.lineHeight,
              fontWeight: S.fontWeight,
              fontStyle: S.fontStyle,
              fontFamily: S.fontFamily,
              whiteSpace: `nowrap`,
            },
            children: re,
          }),
        d(`button`, {
          type: `button`,
          role: `switch`,
          "aria-checked": F,
          "aria-label": re,
          onClick: V,
          onKeyDown: ke,
          style: {
            width: 44,
            height: 24,
            borderRadius: 999,
            border: `none`,
            background: F ? T : E,
            position: `relative`,
            cursor: `pointer`,
            padding: 0,
            outline: `none`,
          },
          children: d(`span`, {
            "aria-hidden": !0,
            style: {
              width: 18,
              height: 18,
              borderRadius: `50%`,
              background: se,
              position: `absolute`,
              top: 3,
              left: F ? 23 : 3,
              transition: `left 0.2s ease`,
            },
          }),
        }),
      ],
    });
  return d(`div`, {
    ref: k,
    style: { position: `relative`, minWidth: L, minHeight: L, overflow: `visible`, ...ce },
    children: O
      ? h(_, {
          children: [
            R
              ? d(`div`, {
                  "aria-hidden": !b,
                  style: {
                    ...Oe,
                    position: `absolute`,
                    left: `50%`,
                    top: `50%`,
                    marginLeft: -L / 2,
                    marginTop: -L / 2,
                  },
                  onClick: H,
                })
              : d(`img`, {
                  alt: ``,
                  "aria-hidden": !b,
                  src: Ce(De),
                  style: {
                    width: L,
                    height: L,
                    imageRendering: `pixelated`,
                    position: `absolute`,
                    left: `50%`,
                    top: `50%`,
                    marginLeft: -L / 2,
                    marginTop: -L / 2,
                    pointerEvents: b ? `auto` : `none`,
                    cursor: b ? `pointer` : `default`,
                    zIndex: te,
                  },
                  onClick: H,
                }),
            i && d(`div`, { style: { ...B, pointerEvents: `none` }, children: Ae }),
          ],
        })
      : h(_, {
          children: [
            R
              ? d(`div`, {
                  "aria-hidden": !b,
                  style: z,
                  onClick: H,
                  role: b ? `button` : void 0,
                  tabIndex: b ? 0 : -1,
                  onKeyDown: (e) => {
                    b && (e.key === ` ` || e.key === `Enter`) && (e.preventDefault(), H());
                  },
                })
              : d(`img`, {
                  alt: ``,
                  "aria-hidden": !b,
                  src: Ce(De),
                  style: {
                    width: L,
                    height: L,
                    imageRendering: `pixelated`,
                    position: `fixed`,
                    left: A.current.x,
                    top: A.current.y,
                    pointerEvents: b ? `auto` : `none`,
                    cursor: b ? `pointer` : `default`,
                    zIndex: te,
                  },
                  onClick: H,
                  role: b ? `button` : void 0,
                  tabIndex: b ? 0 : -1,
                  onKeyDown: (e) => {
                    b && (e.key === ` ` || e.key === `Enter`) && (e.preventDefault(), H());
                  },
                }),
            i && d(`div`, { style: B, children: Ae }),
          ],
        }),
  });
}
var st,
  ct,
  lt,
  ut,
  dt,
  ft = e(() => {
    (i(),
      g(),
      n(),
      F(),
      (st = 32),
      (ct = `https://raw.githubusercontent.com/kyrie25/spicetify-oneko/main/assets/oneko/oneko-classic.gif`),
      (lt = {
        Classic: `white`,
        Black: `black`,
        Gray: `gray`,
        Calico: `calico`,
        Robot: `robot`,
        Peach: `peach`,
        Colourful: `colourful`,
        Earth: `earth`,
        Air: `air`,
        Water: `water`,
        Fire: `fire`,
        Spirit: `spirit`,
        Rainbow: `rainbow`,
        Silversky: `silversky`,
        Orange: `orange`,
        Ghetto: `ghetto`,
        Neon: `neon`,
        Pink: `pink`,
        Ghost: `ghost`,
        Lucky: `lucky`,
        Moka: `moka`,
        USA: `usa`,
        Rose: `rose`,
        Blue: `blue`,
        Silver: `silver`,
        Kuramecha: `kuramecha`,
        Kina: `kina`,
        Ace: `ace`,
        Spooky: `spooky`,
        Holiday: `holiday`,
        Valentine: `valentine`,
        Marmalade: `marmalade`,
        Royal: `royal`,
        Mermaid: `mermaid`,
        Socks: `socks`,
        Dave: `dave`,
        Jess: `jess`,
        Mike: `mike`,
        Lucy: `lucy`,
        Fancy: `fancy`,
      }),
      (ut = `https://webneko.net`),
      (dt = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        tired: [[-3, -2]],
        sleeping: [
          [-2, 0],
          [-2, -1],
        ],
        scratchSelf: [
          [-5, 0],
          [-6, 0],
          [-7, 0],
        ],
        scratchWallN: [
          [0, 0],
          [0, -1],
        ],
        scratchWallS: [
          [-7, -1],
          [-6, -2],
        ],
        scratchWallE: [
          [-2, -2],
          [-2, -3],
        ],
        scratchWallW: [
          [-4, 0],
          [-4, -1],
        ],
        N: [
          [-1, -2],
          [-1, -3],
        ],
        NE: [
          [0, -2],
          [0, -3],
        ],
        E: [
          [-3, 0],
          [-3, -1],
        ],
        SE: [
          [-5, -1],
          [-5, -2],
        ],
        S: [
          [-6, -3],
          [-7, -2],
        ],
        SW: [
          [-5, -3],
          [-6, -1],
        ],
        W: [
          [-4, -2],
          [-4, -3],
        ],
        NW: [
          [-1, 0],
          [-1, -1],
        ],
      }),
      ge(ot, {
        followCursor: {
          type: N.Boolean,
          title: `Follow By Default`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        showToggle: {
          type: N.Boolean,
          title: `Show Toggle`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        showLabel: {
          type: N.Boolean,
          title: `Show Label`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        rememberChoice: { type: N.Boolean, title: `Remember Choice`, defaultValue: !0 },
        speed: { type: N.Number, title: `Speed`, min: 1, max: 30, step: 1, defaultValue: 10 },
        fleeDistance: {
          type: N.Number,
          title: `Flee Distance`,
          min: 24,
          max: 400,
          step: 1,
          defaultValue: 120,
        },
        fleeSpeedMultiplier: {
          type: N.Number,
          title: `Flee Speed`,
          min: 1,
          max: 3,
          step: 0.1,
          defaultValue: 1.35,
        },
        size: {
          type: N.Enum,
          title: `Size`,
          options: [`0.75x`, `1x`, `1.25x`, `1.5x`, `1.75x`, `2x`, `2.25x`, `2.5x`, `3x`, `4x`],
          optionTitles: [
            `0.75x`,
            `1x`,
            `1.25x`,
            `1.5x`,
            `1.75x`,
            `2x`,
            `2.25x`,
            `2.5x`,
            `3x`,
            `4x`,
          ],
          defaultValue: `1x`,
        },
        zIndex: { type: N.Number, title: `Z-Index`, defaultValue: 999, step: 1 },
        cat: {
          type: N.Enum,
          title: `Cat`,
          options:
            `Classic.Black.Gray.Calico.Robot.Peach.Colourful.Earth.Air.Water.Fire.Spirit.Rainbow.Silversky.Orange.Ghetto.Neon.Pink.Ghost.Lucky.Moka.USA.Rose.Blue.Silver.Kuramecha.Kina.Ace.Spooky.Holiday.Valentine.Marmalade.Royal.Mermaid.Socks.Dave.Jess.Mike.Lucy.Fancy`.split(
              `.`
            ),
          optionTitles:
            `Classic.Black.Gray.Calico.Robot.Peach.Colourful.Earth.Air.Water.Fire.Spirit.Rainbow.Silversky.Orange.Ghetto.Neon.Pink.Ghost.Lucky.Moka.USA.Rose.Blue.Silver.Kuramecha.Kina.Ace.Spooky.Holiday.Valentine.Marmalade.Royal.Mermaid.Socks.Dave.Jess.Mike.Lucy.Fancy`.split(
              `.`
            ),
          defaultValue: `Classic`,
        },
        customSprite: {
          type: N.ResponsiveImage,
          title: `Custom Sprite`,
          description: `Optional 256×128 oneko-format sprite sheet. Overrides selected Cat skin.`,
        },
        idleBehavior: {
          type: N.Enum,
          title: `Resting`,
          options: [`sleep`, `sit`],
          optionTitles: [`Sleep`, `Sit`],
          defaultValue: `sleep`,
        },
        catClickable: {
          type: N.Boolean,
          title: `Cat Clickable`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        labelText: {
          type: N.String,
          title: `Label`,
          defaultValue: `You like cats?`,
          hidden(e) {
            return !e.showLabel;
          },
        },
        labelFont: {
          type: N.Font,
          title: `Label Font`,
          defaultValue: {
            fontSize: `14px`,
            variant: `Medium`,
            letterSpacing: `-0.01em`,
            lineHeight: `1.2em`,
          },
          controls: `extended`,
          defaultFontType: `sans-serif`,
          hidden(e) {
            return !e.showLabel;
          },
        },
        labelColor: {
          type: N.Color,
          title: `Text`,
          defaultValue: `#000000`,
          hidden(e) {
            return !e.showLabel;
          },
        },
        toggleCorner: {
          type: N.Enum,
          title: `Toggle Corner`,
          options: [`bottom-right`, `bottom-left`, `top-right`, `top-left`],
          optionTitles: [`Bottom Right`, `Bottom Left`, `Top Right`, `Top Left`],
          defaultValue: `bottom-right`,
        },
        pillBackground: { type: N.Color, title: `Pill BG`, defaultValue: `#FFFFFF` },
        pillBorderColor: { type: N.Color, title: `Pill Border`, defaultValue: `#EEEEEE` },
        pillRadius: {
          type: N.Number,
          title: `Pill Radius`,
          min: 0,
          max: 999,
          step: 1,
          defaultValue: 999,
        },
        pillPadding: { type: N.Padding, title: `Pill Padding`, defaultValue: `8px 10px` },
        toggleOnColor: { type: N.Color, title: `Toggle On`, defaultValue: `#000000` },
        toggleOffColor: { type: N.Color, title: `Toggle Off`, defaultValue: `#CCCCCC` },
        toggleThumbColor: { type: N.Color, title: `Thumb`, defaultValue: `#FFFFFF` },
        showShadow: { type: N.Boolean, title: `Pill Shadow`, defaultValue: !0 },
      }));
  });
function pt(e) {
  let {
      theme: n = `classic`,
      youtubeUrl: i = ``,
      textShadow: o = !1,
      font: u,
      ownerName: ee = `Zihan`,
      size: f = `default`,
    } = e,
    [m, g] = s([]),
    [te, v] = s(0),
    [ne, y] = s(!1),
    [b, re] = s([`main`, `music`, `allsongs`]),
    [x, S] = s(0),
    [C, ie] = s(!1),
    [w, ae] = s(!1),
    [oe, T] = s(!0),
    [E, se] = s(!1),
    [D, ce] = s(`off`),
    [O, k] = s(!1),
    [le, ue] = s(``),
    [de, A] = s(``),
    [fe, pe] = s(!1),
    [me, he] = s(``),
    [j, ge] = s(!1),
    [_e, ve] = s(0),
    [M, ye] = s(!1),
    [N, P] = s(0),
    [F, I] = s(!1),
    [be, L] = s(!1),
    [R, xe] = s(0),
    [Se, Ce] = s(!1),
    [we, Te] = s(1),
    Ee = r(null),
    [De, Oe] = s(!1),
    [z, B] = s(!1);
  r(null);
  let V = r(null),
    H = r(null),
    ke = r(null),
    Ae = r(!1),
    je = r(0),
    Me = r(null),
    Ne = r(!1),
    Pe = m[te],
    U = p(() => {
      w &&
        (C || l(() => ie(!0)),
        Me.current && clearTimeout(Me.current),
        (Me.current = c.setTimeout(() => {
          l(() => ie(!1));
        }, 3e4)));
    }, [C, w]);
  t(() => {
    switch (n) {
      case `black`:
        return {
          device: `rgba(0, 0, 0, 0.85)`,
          wheel: `rgba(38, 38, 38, 0.5)`,
          centerButton: `rgba(0, 0, 0, 0.6)`,
        };
      case `u2`:
        return {
          device: `rgba(0, 0, 0, 0.85)`,
          wheel: `rgba(185, 28, 28, 0.6)`,
          centerButton: `rgba(0, 0, 0, 0.6)`,
        };
      default:
        return {
          device: `rgba(255, 255, 255, 0.85)`,
          wheel: `rgba(209, 213, 219, 0.6)`,
          centerButton: `rgba(255, 255, 255, 0.6)`,
        };
    }
  }, [n]);
  let Fe = p((e) => {
      l(() => {
        (re(e), S(0));
      });
    }, []),
    Ie = p((e) => {
      ((Ne.current = !0),
        l(() => {
          (v(e), y(!0), Ce(!0), re([`nowplaying`]), xe((e) => e + 1));
        }));
    }, []),
    Le = p(() => {
      if (m.length === 0) return;
      let e = m.map((e, t) => t);
      for (let t = e.length - 1; t > 0; t--) {
        let n = Math.floor(Math.random() * (t + 1));
        [e[t], e[n]] = [e[n], e[t]];
      }
      l(() => {
        se(!0);
        let e = Math.floor(Math.random() * m.length);
        (v(e), (Ne.current = !0), y(!0), Ce(!0), re([`nowplaying`]), xe((e) => e + 1));
      });
    }, [m.length]),
    Re = t(() => {
      let e = new Set();
      return (
        m.forEach((t) => {
          t.artist && t.artist.trim() && e.add(t.artist.trim());
        }),
        Array.from(e).sort((e, t) => e.localeCompare(t, void 0, { sensitivity: `base` }))
      );
    }, [m]),
    ze = t(() => {
      let e = {};
      return (
        m.forEach((t, n) => {
          let r = t.artist?.trim() || `Unknown Artist`;
          (e[r] || (e[r] = []), e[r].push({ track: t, index: n }));
        }),
        e
      );
    }, [m]),
    W = p((e) => {
      let t = e.trim(),
        n = t.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
      if (n) return n[1];
      let r = t.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return r ? r[1] : /^[a-zA-Z0-9_-]{11}$/.test(t) ? t : null;
    }, []);
  (a(() => {
    if (!i || i.trim() === ``) {
      l(() => {
        g([
          {
            id: `dQw4w9WgXcQ`,
            url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
            title: `Never Gonna Give You Up`,
            artist: `Rick Astley`,
            album: `Whenever You Need Somebody`,
          },
          {
            id: `9bZkp7q19f0`,
            url: `https://www.youtube.com/watch?v=9bZkp7q19f0`,
            title: `Gangnam Style`,
            artist: `PSY`,
          },
          {
            id: `kJQP7kiw5Fk`,
            url: `https://www.youtube.com/watch?v=kJQP7kiw5Fk`,
            title: `Despacito`,
            artist: `Luis Fonsi`,
          },
        ]);
      });
      return;
    }
    let e = i
        .split(`,`)
        .map((e) => e.trim())
        .filter((e) => e.length > 0),
      t = [];
    (e.forEach((e) => {
      let n = W(e);
      n &&
        t.push({
          id: n,
          url: `https://www.youtube.com/watch?v=${n}`,
          title: `Loading...`,
          artist: `YouTube`,
        });
    }),
      t.length > 0 &&
        (l(() => {
          (g(t), v(0));
        }),
        t.forEach(async (e, t) => {
          try {
            let n = await fetch(
              `https://www.youtube.com/oembed?url=${encodeURIComponent(e.url)}&format=json`
            );
            if (n.ok) {
              let r = await n.json();
              l(() => {
                g((n) => {
                  let i = [...n];
                  return (
                    i[t] &&
                      (i[t] = {
                        ...i[t],
                        title: r.title || e.title,
                        artist: r.author_name || `YouTube`,
                      }),
                    i
                  );
                });
              });
            }
          } catch (e) {
            console.error(`Failed to fetch YouTube title:`, e);
          }
        })));
  }, [i, W]),
    a(() => {
      if (c === void 0) return;
      if (c.YT && c.YT.Player) {
        l(() => L(!0));
        return;
      }
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      (t.parentNode?.insertBefore(e, t),
        (c.onYouTubeIframeAPIReady = () => {
          (console.log(`YouTube IFrame API Ready`), l(() => L(!0)));
        }));
    }, []),
    a(
      () =>
        c === void 0 || !Pe || !be
          ? void 0
          : (l(() => {
              (ye(!1), I(!1), ve(0), P(0));
            }),
            setTimeout(() => {
              if (!(!c.YT || !c.YT.Player)) {
                if (H.current) {
                  try {
                    H.current.destroy();
                  } catch (e) {
                    console.log(`Player destroy error (safe to ignore):`, e);
                  }
                  H.current = null;
                }
                H.current = new c.YT.Player(`youtube-player-${Pe.id}`, {
                  videoId: Pe.id,
                  playerVars: {
                    autoplay: 0,
                    controls: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    fs: 0,
                    disablekb: 1,
                  },
                  events: {
                    onReady: (e) => {
                      console.log(`Player ready for:`, Pe.id);
                      let t = e.target.getDuration();
                      (l(() => {
                        (P(t), ye(!0));
                      }),
                        Ne.current &&
                          (console.log(`Auto playing track:`, Pe.id),
                          e.target.playVideo(),
                          (Ne.current = !1),
                          l(() => Ce(!1))));
                    },
                    onStateChange: (e) => {
                      (console.log(`Player state changed:`, e.data),
                        e.data === 1
                          ? (l(() => {
                              y(!0);
                            }),
                            Be())
                          : e.data === 2
                            ? (l(() => y(!1)), Ve())
                            : e.data === 0
                              ? Ue()
                              : e.data);
                    },
                  },
                });
              }
            }, 50),
            () => {
              Ve();
            }),
      [te, Pe, be, R]
    ));
  let Be = p(() => {
      (ke.current && clearInterval(ke.current),
        (ke.current = c.setInterval(() => {
          if (H.current && H.current.getCurrentTime) {
            let e = H.current.getCurrentTime();
            l(() => ve(e));
          }
        }, 100)));
    }, []),
    Ve = p(() => {
      ke.current &&= (clearInterval(ke.current), null);
    }, []);
  a(
    () => () => {
      Ve();
    },
    [Ve]
  );
  let He = p(() => {
      H.current &&
        (M
          ? ne
            ? (H.current.pauseVideo(), l(() => y(!1)))
            : (H.current.playVideo(), l(() => y(!0)))
          : console.log(`Player not ready yet`));
    }, [ne, M]),
    Ue = p(() => {
      if (m.length === 0) return;
      let e;
      if (E) {
        if (((e = Math.floor(Math.random() * m.length)), m.length > 1))
          for (; e === te;) e = Math.floor(Math.random() * m.length);
      } else if (((e = te + 1), e >= m.length))
        if (D === `all`) e = 0;
        else return;
      ((Ne.current = !0),
        l(() => {
          (v(e), y(!0), Ce(!0));
        }));
    }, [te, m.length, D, E]),
    We = p(() => {
      if (m.length === 0) return;
      let e;
      if (E) {
        if (((e = Math.floor(Math.random() * m.length)), m.length > 1))
          for (; e === te;) e = Math.floor(Math.random() * m.length);
      } else ((e = te - 1), e < 0 && (e = D === `all` ? m.length - 1 : 0));
      ((Ne.current = !0),
        l(() => {
          (v(e), y(!0), Ce(!0));
        }));
    }, [te, m.length, D, E]),
    Ge = t(() => {
      let e = {
        main: [
          { label: `Music`, action: () => Fe([`main`, `music`]) },
          { label: `Extras`, action: () => {} },
          { label: `Settings`, action: () => Fe([`main`, `settings`]) },
          { label: `Shuffle Songs`, action: () => Le() },
          {
            label: `Backlight`,
            action: () =>
              l(() => {
                let e = !C;
                (ie(e), ae(e));
              }),
          },
          ...(Pe ? [{ label: `Now Playing`, action: () => Fe([`nowplaying`]) }] : []),
        ],
        music: [
          { label: `All Songs`, action: () => Fe([`main`, `music`, `allsongs`]) },
          { label: `Artists`, action: () => Fe([`main`, `music`, `artists`]) },
        ],
        settings: [
          { label: `Shuffle: ${E ? `On` : `Off`}`, action: () => l(() => se(!E)) },
          {
            label: `Repeat: ${D === `off` ? `Off` : D === `one` ? `One` : `All`}`,
            action: () => l(() => ce(D === `off` ? `one` : D === `one` ? `all` : `off`)),
          },
          {
            label: `Backlight: ${C ? `On` : `Off`}`,
            action: () =>
              l(() => {
                let e = !C;
                (ie(e), ae(e));
              }),
          },
          { label: `LCD Filter: ${oe ? `On` : `Off`}`, action: () => l(() => T(!oe)) },
          { label: `Theme: ${n}`, action: () => {} },
          { label: `Lyrics: ${O ? `On` : `Off`}`, action: () => l(() => k(!O)) },
        ],
        allsongs: m.map((e, t) => ({ label: e.title, action: () => Ie(t) })),
        artists: Re.map((e) => ({
          label: e,
          action: () => Fe([`main`, `music`, `artists`, `artist-${e}`]),
        })),
        albums: [],
        nowplaying: [],
      };
      return (
        Re.forEach((t) => {
          let n = `artist-${t}`,
            r = ze[t] || [];
          e[n] = r.map(({ index: e }) => ({ label: m[e].title, action: () => Ie(e) }));
        }),
        e
      );
    }, [E, D, C, oe, n, O, m, Fe, Ie, Le, Re, ze, Pe]),
    Ke = b[b.length - 1],
    qe = Ge[Ke] || [],
    G = Ke === `nowplaying`,
    Je = p(() => {
      (U(), G ? l(() => I(!F)) : qe[x] && qe[x].action());
    }, [G, F, qe, x, U]),
    Ye = p(() => {
      (U(),
        G
          ? l(() => {
              (re([`main`, `music`, `allsongs`]), S(0));
            })
          : b.length > 1
            ? l(() => {
                let e = b.slice(0, -1);
                (re(e), S(0));
              })
            : Pe &&
              l(() => {
                (re([`nowplaying`]), S(0));
              }));
    }, [G, b, Pe, U]),
    Xe = p(() => {
      G ||
        (U(),
        l(() => {
          S((e) => Math.max(0, e - 1));
        }));
    }, [U, G]),
    Ze = p(() => {
      G ||
        (U(),
        l(() => {
          S((e) => Math.min(qe.length - 1, e + 1));
        }));
    }, [qe.length, U, G]),
    Qe = p(
      (e) => {
        if ((U(), G)) {
          if (H.current && H.current.seekTo) {
            let t = H.current.getCurrentTime(),
              n = Math.max(0, Math.min(N, t + (e > 0 ? 5 : -5)));
            (H.current.seekTo(n, !0), l(() => ve(n)));
          }
        } else e > 0 ? Ze() : Xe();
      },
      [G, N, Ze, Xe, U]
    );
  (a(() => {
    if (c === void 0) return;
    let e = (e) => {
      switch (e.key) {
        case `ArrowLeft`:
          (e.preventDefault(), G ? We() : Xe());
          break;
        case `ArrowRight`:
          (e.preventDefault(), G ? Ue() : Ze());
          break;
        case `ArrowUp`:
          (e.preventDefault(), G || Xe());
          break;
        case `ArrowDown`:
          (e.preventDefault(), G || Ze());
          break;
        case `Enter`:
          (e.preventDefault(), Je());
          break;
        case `Escape`:
          (e.preventDefault(), Ye());
          break;
      }
    };
    return (c.addEventListener(`keydown`, e), () => c.removeEventListener(`keydown`, e));
  }, [G, We, Ue, Xe, Ze, Je, Ye, U]),
    a(
      () => (
        U(),
        () => {
          Me.current && clearTimeout(Me.current);
        }
      ),
      [U]
    ),
    a(() => {
      if (De && !z) {
        let e = c.setTimeout(() => {
          (l(() => {
            (B(!0), ie(!0), ae(!0));
          }),
            U());
        }, 500);
        return () => c.clearTimeout(e);
      }
    }, [De, z, U]));
  let $e = p(
      (e) => {
        if (!Ae.current || !V.current) return;
        let t = V.current.getBoundingClientRect(),
          n = t.left + t.width / 2,
          r = t.top + t.height / 2,
          i = Math.atan2(e.clientY - r, e.clientX - n),
          a = i - je.current;
        (a > Math.PI && (a -= 2 * Math.PI),
          a < -Math.PI && (a += 2 * Math.PI),
          Math.abs(a) > 0.05 && (Qe(a), (je.current = i)));
      },
      [Qe, U]
    ),
    et = p(() => {
      Ae.current = !1;
    }, []),
    tt = p(
      (e) => {
        if ((U(), !V.current)) return;
        Ae.current = !0;
        let t = V.current.getBoundingClientRect(),
          n = t.left + t.width / 2,
          r = t.top + t.height / 2,
          i = Math.atan2(e.clientY - r, e.clientX - n);
        je.current = i;
        let a = (e) => $e(e),
          o = () => {
            (et(), c.removeEventListener(`mousemove`, a), c.removeEventListener(`mouseup`, o));
          };
        (c.addEventListener(`mousemove`, a), c.addEventListener(`mouseup`, o));
      },
      [U, $e, et]
    ),
    nt = p(
      (e) => {
        (U(), l(() => S(e)), qe[e] && qe[e].action());
      },
      [qe, U]
    ),
    rt = p(
      (e) =>
        `${Math.floor(e / 60)}:${Math.floor(e % 60)
          .toString()
          .padStart(2, `0`)}`,
      []
    );
  a(() => {
    let e = setInterval(() => {
      l(() => {
        Te((e) => (e >= 4 ? 1 : e + 1));
      });
    }, 1500);
    return () => clearInterval(e);
  }, []);
  let it = () =>
    h(`div`, {
      style: {
        width: 19,
        height: 10,
        border: `1px solid ${C ? `#0a3667` : `#4a4a4a`}`,
        borderRadius: 2,
        position: `relative`,
        display: `flex`,
        alignItems: `center`,
        padding: `1px`,
        gap: `1px`,
      },
      children: [
        [0, 1, 2, 3].map((e) =>
          d(
            `div`,
            {
              style: {
                flex: 1,
                height: `100%`,
                backgroundColor: e < we ? (C ? `#0a3667` : `#4a4a4a`) : `transparent`,
                transition: `background-color 0.2s ease`,
              },
            },
            e
          )
        ),
        d(`div`, {
          style: {
            position: `absolute`,
            right: -3,
            top: `50%`,
            transform: `translateY(-50%)`,
            width: 2,
            height: 4,
            backgroundColor: C ? `#0a3667` : `#4a4a4a`,
            borderRadius: `0 1px 1px 0`,
          },
        }),
      ],
    });
  a(() => {
    if (Ee.current) {
      let e = Ee.current.children[x];
      e && e.scrollIntoView({ block: `nearest`, behavior: `smooth` });
    }
  }, [x]);
  let at = f === `medium` ? 1.3 : f === `large` ? 1.6 : 1;
  return h(`div`, {
    onMouseEnter: () => Oe(!0),
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      position: `relative`,
      overflow: `visible`,
      ...e.style,
    },
    children: [
      d(`style`, {
        children: `
                .ipod-menu-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .ipod-menu-scroll::-webkit-scrollbar-track {
                    background: transparent;
                    margin: 0;
                    box-shadow: inset 1px 0 0 ${C ? `rgba(10, 54, 103, 0.5)` : `rgba(74, 74, 74, 0.5)`}, inset -1px 0 0 ${C ? `rgba(10, 54, 103, 0.5)` : `rgba(74, 74, 74, 0.5)`};
                }
                .ipod-menu-scroll::-webkit-scrollbar-thumb {
                    background: ${C ? `#0a3667` : `#4a4a4a`};
                    border-radius: 0;
                }
                .ipod-menu-scroll::-webkit-scrollbar-thumb:hover {
                    background: ${C ? `#0a3667` : `#4a4a4a`};
                }
                @keyframes loading-dot-1 {
                    0%, 100% {
                        opacity: 1;
                    }
                }
                @keyframes loading-dot-2 {
                    0%, 32.99% {
                        opacity: 0;
                    }
                    33%, 99.99% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                @keyframes loading-dot-3 {
                    0%, 65.99% {
                        opacity: 0;
                    }
                    66%, 99.99% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                .loading-dot-1 {
                    animation: loading-dot-1 1.5s infinite;
                }
                .loading-dot-2 {
                    animation: loading-dot-2 1.5s infinite;
                }
                .loading-dot-3 {
                    animation: loading-dot-3 1.5s infinite;
                }
            `,
      }),
      h(`div`, {
        style: {
          width: 200,
          height: 340,
          background:
            n === `classic`
              ? `linear-gradient(145deg, #ffffff, #f5f5f5)`
              : n === `u2`
                ? `linear-gradient(145deg, #1a1a1a, #000000)`
                : `linear-gradient(145deg, #2a2a2a, #0a0a0a)`,
          borderRadius: 20,
          padding: 15,
          display: `flex`,
          flexDirection: `column`,
          gap: 15,
          boxShadow: `
                        0 0 0 1px ${n === `classic` ? `rgba(0,0,0,0.1)` : `rgba(255,255,255,0.05)`},
                        0 2px 4px rgba(0,0,0,0.1),
                        0 8px 16px rgba(0,0,0,0.15),
                        0 16px 32px rgba(0,0,0,0.2)
                    `,
          position: `relative`,
          transform: `scale(${at})`,
          transformOrigin: `center center`,
        },
        children: [
          n === `classic` &&
            d(`div`, {
              style: {
                position: `absolute`,
                top: 0,
                left: 0,
                right: 0,
                height: `50%`,
                background: `linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
                borderRadius: `20px 20px 0 0`,
                pointerEvents: `none`,
              },
            }),
          h(`div`, {
            style: {
              width: `100%`,
              height: 140,
              background: C
                ? `linear-gradient(to bottom, #d1e8fa, #e0f0fc)`
                : `linear-gradient(to bottom, #a0a8a0, #b8c0b8)`,
              borderRadius: 8,
              padding: 0,
              position: `relative`,
              overflow: `hidden`,
              filter: `none`,
              border: `1px solid #999`,
            },
            children: [
              Pe &&
                d(`div`, {
                  style: {
                    position: `absolute`,
                    top: 20,
                    left: 0,
                    width: `100%`,
                    height: `calc(100% - 20px)`,
                    display: `block`,
                    zIndex: z && G && F ? 50 : -1,
                    pointerEvents: z && G && F ? `auto` : `none`,
                    opacity: z && G && F ? 1 : 0,
                  },
                  children: d(`div`, {
                    id: `youtube-player-${Pe.id}`,
                    style: { width: `100%`, height: `100%` },
                  }),
                }),
              h(`div`, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  flexDirection: `column`,
                  color: C ? `#0a3667` : `#2a2a2a`,
                  pointerEvents: `none`,
                  zIndex: 90,
                  opacity: +!z,
                  transition: `opacity 0.5s ease`,
                },
                children: [
                  d(`div`, {
                    style: {
                      fontSize: 28,
                      fontWeight: `bold`,
                      letterSpacing: 2,
                      color: C ? `#0a3667` : `#2a2a2a`,
                      fontFamily: `system-ui, -apple-system, sans-serif`,
                    },
                    children: ``,
                  }),
                  d(`div`, {
                    style: {
                      marginTop: 8,
                      fontSize: 12,
                      fontWeight: `bold`,
                      color: C ? `#0a3667` : `#2a2a2a`,
                      fontFamily: `system-ui, -apple-system, sans-serif`,
                    },
                    children: ee ? `${ee}'s iPod` : `iPod`,
                  }),
                ],
              }),
              d(`div`, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 7,
                  pointerEvents: `none`,
                  zIndex: 100,
                  boxShadow: `
                                inset 0 1px 3px rgba(0,0,0,0.12),
                                inset 0 0 6px rgba(0,0,0,0.06),
                                inset 0 -1px 3px rgba(0,0,0,0.06),
                                inset 1px 0 2px rgba(0,0,0,0.06),
                                inset -1px 0 2px rgba(0,0,0,0.06)
                            `,
                },
              }),
              oe &&
                h(_, {
                  children: [
                    d(`div`, {
                      style: {
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, transparent 1px, transparent 2px)`,
                        pointerEvents: `none`,
                        zIndex: 95,
                      },
                    }),
                    d(`div`, {
                      style: {
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        right: 0,
                        height: `30%`,
                        background: `linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)`,
                        pointerEvents: `none`,
                        zIndex: 96,
                      },
                    }),
                  ],
                }),
              h(`div`, {
                style: {
                  width: `100%`,
                  height: `100%`,
                  color: C ? `#0a3667` : `#2a2a2a`,
                  fontSize: 10,
                  overflow: `hidden`,
                  display: `flex`,
                  flexDirection: `column`,
                  gap: 0,
                  padding: `0`,
                  backgroundColor: C ? `#c5e0f5` : `#9ca49c`,
                  opacity: +!!z,
                  pointerEvents: z ? `auto` : `none`,
                  transition: `opacity 0.5s ease`,
                  ...u,
                },
                children: [
                  h(`div`, {
                    style: {
                      height: 20,
                      borderBottom: `1px solid ${C ? `#0a3667` : `#4a4a4a`}`,
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `space-between`,
                      padding: `0`,
                      fontSize: 10,
                      flexShrink: 0,
                      ...u,
                    },
                    children: [
                      d(`div`, {
                        style: {
                          width: 20,
                          textAlign: `left`,
                          paddingLeft: `8px`,
                          display: `flex`,
                          alignItems: `center`,
                        },
                        children: ne
                          ? d(`svg`, {
                              width: `8`,
                              height: `8`,
                              viewBox: `0 0 8 8`,
                              fill: C ? `#0a3667` : `#2a2a2a`,
                              children: d(`polygon`, { points: `0,0 8,4 0,8` }),
                            })
                          : h(`svg`, {
                              width: `8`,
                              height: `8`,
                              viewBox: `0 0 8 8`,
                              fill: C ? `#0a3667` : `#2a2a2a`,
                              children: [
                                d(`rect`, { x: `0`, y: `0`, width: `3`, height: `8` }),
                                d(`rect`, { x: `5`, y: `0`, width: `3`, height: `8` }),
                              ],
                            }),
                      }),
                      d(`div`, {
                        style: { flex: 1, textAlign: `center`, fontWeight: `bold` },
                        children: G
                          ? `Now Playing`
                          : Ke === `main`
                            ? `iPod`
                            : Ke === `music`
                              ? `Music`
                              : Ke === `allsongs`
                                ? `All Songs`
                                : Ke === `artists`
                                  ? `Artists`
                                  : Ke.startsWith(`artist-`)
                                    ? Ke.replace(`artist-`, ``)
                                    : Ke === `settings`
                                      ? `Settings`
                                      : `iPod`,
                      }),
                      d(`div`, {
                        style: {
                          width: 24,
                          display: `flex`,
                          justifyContent: `flex-end`,
                          paddingRight: `8px`,
                        },
                        children: d(it, {}),
                      }),
                    ],
                  }),
                  G && Pe
                    ? h(`div`, {
                        style: { width: `100%`, flex: 1, position: `relative` },
                        children: [
                          F &&
                            G &&
                            d(`div`, {
                              style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                width: `100%`,
                                height: `100%`,
                                pointerEvents: `auto`,
                                zIndex: 20,
                              },
                            }),
                          !M &&
                            h(`div`, {
                              style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                width: `100%`,
                                height: `100%`,
                                backgroundColor: C ? `#c5e0f5` : `#9ca49c`,
                                display: `flex`,
                                flexDirection: `column`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: 8,
                                zIndex: 15,
                              },
                              children: [
                                d(`div`, {
                                  style: {
                                    fontSize: 10,
                                    color: C ? `#0a3667` : `#2a2a2a`,
                                    textAlign: `center`,
                                    padding: `0 8px`,
                                    ...u,
                                  },
                                  children: Pe.title,
                                }),
                                d(`div`, {
                                  style: {
                                    fontSize: 8,
                                    color: C ? `#0a3667` : `#2a2a2a`,
                                    opacity: 0.7,
                                    ...u,
                                  },
                                  children: Pe.artist,
                                }),
                                h(`div`, {
                                  style: {
                                    marginTop: 8,
                                    fontSize: 10,
                                    color: C ? `#0a3667` : `#2a2a2a`,
                                    ...u,
                                  },
                                  children: [
                                    `Loading`,
                                    d(`span`, { className: `loading-dot-1`, children: `.` }),
                                    d(`span`, { className: `loading-dot-2`, children: `.` }),
                                    d(`span`, { className: `loading-dot-3`, children: `.` }),
                                  ],
                                }),
                              ],
                            }),
                          !F &&
                            M &&
                            h(`div`, {
                              style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                width: `100%`,
                                height: `100%`,
                                display: `flex`,
                                flexDirection: `column`,
                                backgroundColor: C ? `#c5e0f5` : `#9ca49c`,
                                zIndex: 10,
                              },
                              children: [
                                h(`div`, {
                                  style: {
                                    padding: `4px 8px`,
                                    fontSize: 9,
                                    backgroundColor: C ? `#c5e0f5` : `#9ca49c`,
                                    ...u,
                                  },
                                  children: [te + 1, ` of`, ` `, m.length],
                                }),
                                h(`div`, {
                                  style: {
                                    flex: 1,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    gap: 8,
                                    padding: `0 8px`,
                                    backgroundColor: C ? `#c5e0f5` : `#9ca49c`,
                                  },
                                  children: [
                                    d(`div`, {
                                      style: {
                                        fontSize: 12,
                                        fontWeight: `bold`,
                                        textAlign: `center`,
                                        color: C ? `#0a3667` : `#2a2a2a`,
                                        ...u,
                                      },
                                      children: Pe.title,
                                    }),
                                    d(`div`, {
                                      style: {
                                        fontSize: 11,
                                        textAlign: `center`,
                                        color: C ? `#0a3667` : `#2a2a2a`,
                                        ...u,
                                      },
                                      children: Pe.artist || `Unknown Artist`,
                                    }),
                                  ],
                                }),
                                h(`div`, {
                                  style: {
                                    padding: `0 8px 8px 8px`,
                                    backgroundColor: C ? `#c5e0f5` : `#9ca49c`,
                                  },
                                  children: [
                                    d(`div`, {
                                      style: {
                                        width: `100%`,
                                        height: 8,
                                        backgroundColor: `transparent`,
                                        border: `1px solid ${C ? `#0a3667` : `#4a4a4a`}`,
                                        borderRadius: 4,
                                        position: `relative`,
                                        overflow: `hidden`,
                                      },
                                      children: d(`div`, {
                                        style: {
                                          position: `absolute`,
                                          left: 0,
                                          top: 0,
                                          height: `100%`,
                                          width: N > 0 ? `${(_e / N) * 100}%` : `0%`,
                                          backgroundColor: C ? `#0a3667` : `#4a4a4a`,
                                          borderRadius: 3,
                                          transition: `width 0.1s linear`,
                                        },
                                      }),
                                    }),
                                    h(`div`, {
                                      style: {
                                        display: `flex`,
                                        justifyContent: `space-between`,
                                        marginTop: 2,
                                        fontSize: 9,
                                        color: C ? `#0a3667` : `#2a2a2a`,
                                        ...u,
                                      },
                                      children: [
                                        d(`span`, { children: rt(_e) }),
                                        h(`span`, { children: [`-`, rt(Math.max(0, N - _e))] }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      })
                    : d(`div`, {
                        ref: Ee,
                        className: `ipod-menu-scroll`,
                        style: {
                          height: `100%`,
                          overflowY: `auto`,
                          overflowX: `hidden`,
                          position: `relative`,
                        },
                        children: qe.map((e, t) =>
                          d(
                            `div`,
                            {
                              onClick: () => nt(t),
                              onMouseEnter: (e) => {
                                t !== x &&
                                  (e.currentTarget.style.backgroundColor = C
                                    ? `#c0d8f0`
                                    : `#7a827a`);
                              },
                              onMouseLeave: (e) => {
                                t !== x && (e.currentTarget.style.backgroundColor = `transparent`);
                              },
                              style: {
                                padding: `4px 8px`,
                                backgroundColor:
                                  t === x ? (C ? `#0a3667` : `#4a4a4a`) : `transparent`,
                                color:
                                  t === x ? (C ? `#c5e0f5` : `#d0d8d0`) : C ? `#0a3667` : `#2a2a2a`,
                                cursor: `pointer`,
                                fontSize: 12,
                                textShadow: o ? `1px 1px 0 rgba(0,0,0,0.15)` : `none`,
                                whiteSpace: `nowrap`,
                                overflow: `hidden`,
                                textOverflow: `ellipsis`,
                                ...u,
                              },
                              children: e.label,
                            },
                            t
                          )
                        ),
                      }),
                ],
              }),
            ],
          }),
          h(`div`, {
            ref: V,
            onMouseDown: tt,
            style: {
              width: 170,
              height: 170,
              aspectRatio: `1 / 1`,
              borderRadius: `50%`,
              background:
                n === `classic`
                  ? `linear-gradient(145deg, #e8e8e8, #d0d0d0)`
                  : n === `u2`
                    ? `linear-gradient(145deg, #c41e3a, #8b0000)`
                    : `linear-gradient(145deg, #3a3a3a, #1a1a1a)`,
              position: `relative`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              alignSelf: `center`,
              boxShadow: `
                            inset 0 0 0 1px ${n === `classic` ? `rgba(255,255,255,0.5)` : `rgba(255,255,255,0.1)`},
                            inset 0 2px 4px rgba(0,0,0,0.1),
                            0 2px 8px rgba(0,0,0,0.15)
                        `,
            },
            children: [
              d(`div`, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: `50%`,
                  background: `conic-gradient(
                                from 0deg,
                                ${n === `classic` ? `rgba(255,255,255,0.3)` : `rgba(255,255,255,0.1)`} 0deg,
                                transparent 90deg,
                                ${n === `classic` ? `rgba(0,0,0,0.1)` : `rgba(0,0,0,0.3)`} 180deg,
                                transparent 270deg,
                                ${n === `classic` ? `rgba(255,255,255,0.3)` : `rgba(255,255,255,0.1)`} 360deg
                            )`,
                  pointerEvents: `none`,
                },
              }),
              d(`button`, {
                onClick: Ye,
                style: {
                  position: `absolute`,
                  top: 15,
                  left: `50%`,
                  transform: `translateX(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: `pointer`,
                  textShadow:
                    n === `classic` ? `0 1px 0 rgba(255,255,255,0.5)` : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: d(`svg`, {
                  width: `32`,
                  height: `12`,
                  viewBox: `0 0 32 12`,
                  fill: n === `classic` ? `#666` : n === `u2` ? `#fff` : `#ccc`,
                  children: d(`text`, {
                    x: `16`,
                    y: `9`,
                    fontSize: `9`,
                    fontWeight: `bold`,
                    textAnchor: `middle`,
                    fontFamily: `system-ui, -apple-system, sans-serif`,
                    children: `MENU`,
                  }),
                }),
              }),
              d(`button`, {
                onClick: G ? Ue : () => Ze(),
                style: {
                  position: `absolute`,
                  right: 15,
                  top: `50%`,
                  transform: `translateY(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: `pointer`,
                  opacity: 1,
                  textShadow:
                    n === `classic` ? `0 1px 0 rgba(255,255,255,0.5)` : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: h(`svg`, {
                  width: `12`,
                  height: `12`,
                  viewBox: `0 0 16 16`,
                  fill: n === `classic` ? `#666` : n === `u2` ? `#fff` : `#ccc`,
                  children: [
                    d(`polygon`, { points: `0,2 6,8 0,14` }),
                    d(`polygon`, { points: `6,2 12,8 6,14` }),
                    d(`rect`, { x: `13`, y: `2`, width: `2`, height: `12` }),
                  ],
                }),
              }),
              d(`button`, {
                onClick: G
                  ? () => {
                      (U(), He());
                    }
                  : void 0,
                style: {
                  position: `absolute`,
                  bottom: 15,
                  left: `50%`,
                  transform: `translateX(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: G ? `pointer` : `default`,
                  opacity: G ? 1 : 0.5,
                  textShadow:
                    n === `classic` ? `0 1px 0 rgba(255,255,255,0.5)` : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: ne
                  ? h(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 16 16`,
                      fill: n === `classic` ? `#666` : n === `u2` ? `#fff` : `#ccc`,
                      children: [
                        d(`rect`, { x: `3`, y: `2`, width: `4`, height: `12` }),
                        d(`rect`, { x: `9`, y: `2`, width: `4`, height: `12` }),
                      ],
                    })
                  : d(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 16 16`,
                      fill: n === `classic` ? `#666` : n === `u2` ? `#fff` : `#ccc`,
                      children: d(`polygon`, { points: `4,2 14,8 4,14` }),
                    }),
              }),
              d(`button`, {
                onClick: G ? We : () => Xe(),
                style: {
                  position: `absolute`,
                  left: 15,
                  top: `50%`,
                  transform: `translateY(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: `pointer`,
                  opacity: 1,
                  textShadow:
                    n === `classic` ? `0 1px 0 rgba(255,255,255,0.5)` : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: h(`svg`, {
                  width: `12`,
                  height: `12`,
                  viewBox: `0 0 16 16`,
                  fill: n === `classic` ? `#666` : n === `u2` ? `#fff` : `#ccc`,
                  children: [
                    d(`rect`, { x: `1`, y: `2`, width: `2`, height: `12` }),
                    d(`polygon`, { points: `10,2 4,8 10,14` }),
                    d(`polygon`, { points: `16,2 10,8 16,14` }),
                  ],
                }),
              }),
              d(`button`, {
                onClick: Je,
                style: {
                  width: 60,
                  height: 60,
                  aspectRatio: `1 / 1`,
                  borderRadius: `50%`,
                  background:
                    n === `classic`
                      ? `linear-gradient(145deg, #ffffff, #f0f0f0)`
                      : n === `u2`
                        ? `linear-gradient(145deg, #2a2a2a, #0a0a0a)`
                        : `linear-gradient(145deg, #4a4a4a, #2a2a2a)`,
                  border: `none`,
                  cursor: `pointer`,
                  boxShadow: `
                                0 0 0 1px ${n === `classic` ? `rgba(0,0,0,0.1)` : `rgba(255,255,255,0.1)`},
                                0 2px 4px rgba(0,0,0,0.2),
                                inset 0 1px 0 ${n === `classic` ? `rgba(255,255,255,0.8)` : `rgba(255,255,255,0.1)`}
                            `,
                  position: `relative`,
                },
                children: d(`div`, {
                  style: {
                    position: `absolute`,
                    top: `10%`,
                    left: `10%`,
                    right: `10%`,
                    height: `40%`,
                    background:
                      n === `classic`
                        ? `linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)`
                        : `linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)`,
                    borderRadius: `50%`,
                    pointerEvents: `none`,
                  },
                }),
              }),
            ],
          }),
        ],
      }),
      de &&
        d(`div`, {
          style: {
            marginTop: 10,
            padding: `5px 10px`,
            backgroundColor: `rgba(0,0,0,0.8)`,
            color: `#fff`,
            borderRadius: 4,
            fontSize: 10,
          },
          children: de,
        }),
    ],
  });
}
var mt = e(() => {
    (i(),
      g(),
      n(),
      F(),
      ge(pt, {
        theme: {
          type: N.Enum,
          title: `Theme`,
          options: [`classic`, `black`, `u2`],
          optionTitles: [`WH`, `BLK`, `U2`],
          defaultValue: `classic`,
          displaySegmentedControl: !0,
        },
        youtubeUrl: {
          type: N.String,
          title: `YouTube URL`,
          defaultValue: ``,
          placeholder: `Enter YouTube URLs separated by commas`,
          displayTextArea: !0,
          description: `Enter multiple YouTube URLs separated by commas`,
        },
        font: {
          type: N.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: `10px`, variant: `Regular` },
        },
        textShadow: {
          type: N.Boolean,
          title: `Text Shadow`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        ownerName: {
          type: N.String,
          title: `Owner Name`,
          defaultValue: `Zihan`,
          placeholder: `Enter iPod owner name`,
          description: `Name displayed during boot animation. Created by Zihan Huang (bravohenry.com)`,
        },
        size: {
          type: N.Enum,
          title: `Size`,
          options: [`default`, `medium`, `large`],
          optionTitles: [`100%`, `130%`, `160%`],
          defaultValue: `default`,
          displaySegmentedControl: !0,
        },
      }));
  }),
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  K,
  q,
  J,
  Lt,
  Rt,
  zt,
  Bt,
  Y,
  X,
  Z,
  Q,
  $,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
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
  pn;
e(() => {
  (g(),
    F(),
    re(),
    n(),
    u(),
    Ee(),
    Se(),
    De(),
    qe(),
    Re(),
    ze(),
    ke(),
    Oe(),
    tt(),
    Pe(),
    H(),
    Le(),
    at(),
    ft(),
    mt(),
    Te(),
    U(),
    (ht = x(Fe)),
    (gt = x(Ne)),
    (_t = x(W)),
    (vt = x(V)),
    (yt = C(O)),
    (bt = oe(C(O))),
    (xt = x(pt)),
    (St = x(Ke)),
    (Ct = x(nt)),
    (wt = oe(C(v.div))),
    (Tt = x(ot)),
    (Et = x(B)),
    (Dt = x(et)),
    (Ot = x(Ce)),
    (kt = x(Ae)),
    (At = {
      n4CR8pgzs: `(max-width: 809.98px)`,
      rnq5NgttY: `(min-width: 810px) and (max-width: 1399.98px)`,
      WQLkyLRf1: `(min-width: 1400px)`,
    }),
    (jt = () => typeof document < `u`),
    (Mt = []),
    (Nt = `framer-Ono4S`),
    (Pt = {
      n4CR8pgzs: `framer-v-i6834s`,
      rnq5NgttY: `framer-v-1xtmoxo`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Ft = (e, t, n) => (e && t ? `position` : n)),
    (It = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = (e) => e.preventDefault()),
    (J = { cursor: `grabbing` }),
    (Lt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 100, delay: 3.6, mass: 0.1, stiffness: 300, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Rt = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.97,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (zt = (e, t) => `translateY(-50%) ${t}`),
    (Bt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (Y = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      transition: Bt,
      x: 0,
      y: 0,
    }),
    (X = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Bt,
      x: 0,
      y: 0,
    }),
    (Z = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.8,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Q = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    ($ = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = xe({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Vt = (e, t) => `translate(-50%, -50%) ${t}`),
    (Ht = (e, t) => `translateX(-50%) ${t}`),
    (Ut = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Wt = () => ({
      from: { alias: `Bm3g6Xiox`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 4 },
      select: [
        { collection: `Bm3g6Xiox`, name: `VwUa8S3QG`, type: `Identifier` },
        { collection: `Bm3g6Xiox`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `Bm3g6Xiox`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `Bm3g6Xiox`, name: `id`, type: `Identifier` },
      ],
    })),
    (Gt = ({ query: e, pageSize: t, children: n }) => n(le(e))),
    (Kt = () => ({
      from: { alias: `IYlNVZYvG`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `IYlNVZYvG`, name: `CCHE89_KJ`, type: `Identifier` },
        { collection: `IYlNVZYvG`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `IYlNVZYvG`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `IYlNVZYvG`, name: `id`, type: `Identifier` },
      ],
    })),
    (qt = () => ({
      from: { alias: `bfWqWuQ13`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `bfWqWuQ13`, name: `EoVZinw0n`, type: `Identifier` },
        { collection: `bfWqWuQ13`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `bfWqWuQ13`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `bfWqWuQ13`, name: `id`, type: `Identifier` },
      ],
    })),
    (Jt = () => ({
      from: { alias: `iVcJEshBC`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `iVcJEshBC`, name: `EoVZinw0n`, type: `Identifier` },
        { collection: `iVcJEshBC`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `iVcJEshBC`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `iVcJEshBC`, name: `id`, type: `Identifier` },
      ],
    })),
    (Yt = () => ({
      from: { alias: `EkH_c7cgj`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 5 },
      select: [
        { collection: `EkH_c7cgj`, name: `VwUa8S3QG`, type: `Identifier` },
        { collection: `EkH_c7cgj`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `EkH_c7cgj`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `EkH_c7cgj`, name: `id`, type: `Identifier` },
      ],
    })),
    (Xt = () => ({
      from: { alias: `R1epHv6RO`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `R1epHv6RO`, name: `VwUa8S3QG`, type: `Identifier` },
        { collection: `R1epHv6RO`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `R1epHv6RO`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `R1epHv6RO`, name: `id`, type: `Identifier` },
      ],
    })),
    (Zt = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
    (Qt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Zt,
      x: 0,
      y: 0,
    }),
    ($t = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Zt,
      x: 0,
      y: 0,
    }),
    (en = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (tn = () => ({
      from: { alias: `JadpqOjKS`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 4 },
      select: [
        { collection: `JadpqOjKS`, name: `VwUa8S3QG`, type: `Identifier` },
        { collection: `JadpqOjKS`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `JadpqOjKS`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `JadpqOjKS`, name: `id`, type: `Identifier` },
      ],
    })),
    (nn = () => ({
      from: { alias: `rmCal3yK8`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `rmCal3yK8`, name: `CCHE89_KJ`, type: `Identifier` },
        { collection: `rmCal3yK8`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `rmCal3yK8`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `rmCal3yK8`, name: `id`, type: `Identifier` },
      ],
    })),
    (rn = () => ({
      from: { alias: `cNVN87fbG`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `cNVN87fbG`, name: `EoVZinw0n`, type: `Identifier` },
        { collection: `cNVN87fbG`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `cNVN87fbG`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `cNVN87fbG`, name: `id`, type: `Identifier` },
      ],
    })),
    (an = () => ({
      from: { alias: `t8wyx87Jf`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `t8wyx87Jf`, name: `EoVZinw0n`, type: `Identifier` },
        { collection: `t8wyx87Jf`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `t8wyx87Jf`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `t8wyx87Jf`, name: `id`, type: `Identifier` },
      ],
    })),
    (on = () => ({
      from: { alias: `D_I04W5bi`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 5 },
      select: [
        { collection: `D_I04W5bi`, name: `VwUa8S3QG`, type: `Identifier` },
        { collection: `D_I04W5bi`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `D_I04W5bi`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `D_I04W5bi`, name: `id`, type: `Identifier` },
      ],
    })),
    (sn = () => ({
      from: { alias: `HWu8hax9m`, data: z, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `HWu8hax9m`, name: `VwUa8S3QG`, type: `Identifier` },
        { collection: `HWu8hax9m`, name: `jujDq9vBb`, type: `Identifier` },
        { collection: `HWu8hax9m`, name: `AXve8fDfq`, type: `Identifier` },
        { collection: `HWu8hax9m`, name: `id`, type: `Identifier` },
      ],
    })),
    (cn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Bt,
      x: 0,
      y: 0,
    }),
    (ln = { Desktop: `WQLkyLRf1`, Phone: `n4CR8pgzs`, Tablet: `rnq5NgttY` }),
    (un = ({ value: e }) =>
      ve()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (dn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: ln[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (fn = D(
      ee(function (e, n) {
        let i = r(null),
          a = n ?? i,
          o = te(),
          { activeLocale: s, setLocale: c } = me(),
          l = _e(),
          { style: u, className: ee, layoutId: p, variant: g, ...re } = dn(e);
        ce(t(() => Ie({}, s), [s]));
        let [x, C] = pe(g, At, !1),
          { activeVariantCallback: ae, delay: oe } = ue(void 0),
          T = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          E = ({ overlay: e }) =>
            ae(async (...t) => {
              e.hide();
            }),
          se = ({ overlay: e }) =>
            ae(async (...t) => {
              e.hide();
            }),
          D = ({ overlay: e }) =>
            ae(async (...t) => {
              e.hide();
            }),
          le = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          A = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          he = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          ge = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          ve = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          ye = ({ overlay: e }) =>
            ae(async (...t) => {
              e.toggle();
            }),
          N = w(Nt),
          F = m(be)?.isLayoutTemplate,
          I = !!m(ne)?.transition?.layout,
          L = Ft(F, I),
          xe = () => !jt() || x !== `n4CR8pgzs`,
          Se = () => !jt() || x !== `rnq5NgttY`,
          Te = () => !jt() || x === `n4CR8pgzs`;
        return (
          de({}),
          d(be.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: ln,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Pt,
            },
            children: h(b, {
              id: p ?? o,
              children: [
                d(un, { value: `html body { background: none; }` }),
                h(fe, {
                  ...re,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 960,
                    intrinsicWidth: 1440,
                    loading: ie(l?.y || 0),
                    pixelHeight: 960,
                    pixelWidth: 1440,
                    sizes: l?.width || `100vw`,
                    src: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg`,
                    srcSet: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-130463.jpg 512w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-21f64d.jpg 1024w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg 1440w`,
                  },
                  className: w(N, `framer-72rtr7`, ee),
                  ref: a,
                  style: { ...u },
                  children: [
                    d(v.div, {
                      className: `framer-ikr6mf`,
                      "data-framer-name": `overlay`,
                      layout: L,
                    }),
                    d(v.div, {
                      className: `framer-1ikkr7l`,
                      "data-framer-name": `Pre-Loader`,
                      layout: L,
                      children: d(k, {
                        breakpoint: x,
                        overrides: { rnq5NgttY: { width: `max(100vw, 1px)` } },
                        children: d(j, {
                          height: 1e3,
                          width: `max(102vw, 1px)`,
                          y: 0,
                          children: d(O, {
                            className: `framer-fkzdvp-container`,
                            nodeId: `tcQIalXg4`,
                            scopeId: `augiA20Il`,
                            children: d(k, {
                              breakpoint: x,
                              overrides: { n4CR8pgzs: { URqBiiyf0: 56 } },
                              children: d(Fe, {
                                AR4P0Spr8: {
                                  delay: 0,
                                  duration: 3,
                                  ease: [0.12, 0.23, 0.5, 1],
                                  type: `tween`,
                                },
                                height: `100%`,
                                id: `tcQIalXg4`,
                                IeAOvqJJC: It(
                                  {
                                    pixelHeight: 960,
                                    pixelWidth: 1440,
                                    src: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg`,
                                    srcSet: `../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-130463.jpg 512w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ-21f64d.jpg 1024w,../../assets/images/L3s1hyYqQ49leQTOTCfl0j5WMPQ.jpg 1440w`,
                                  },
                                  ``
                                ),
                                layoutId: `tcQIalXg4`,
                                style: { height: `100%`, width: `100%` },
                                URqBiiyf0: 80,
                                variant: K(`fgxFbObTD`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    h(v.div, {
                      className: `framer-1gjeq3t`,
                      "data-framer-name": `Content-wrapper`,
                      layout: L,
                      children: [
                        d(j, {
                          height: 40,
                          width: l?.width || `100vw`,
                          y: (l?.y || 0) + 0 + 0 + 0 + 0,
                          children: d(O, {
                            className: `framer-slikr0-container`,
                            nodeId: `z7hJu32bn`,
                            scopeId: `augiA20Il`,
                            children: d(k, {
                              breakpoint: x,
                              overrides: { n4CR8pgzs: { variant: K(`NoRjRtEUK`) } },
                              children: d(Ne, {
                                FXtMXmAJy: Me,
                                height: `100%`,
                                id: `z7hJu32bn`,
                                In2G2vAnT: we,
                                layoutId: `z7hJu32bn`,
                                r6axoAGvo: je,
                                style: { width: `100%` },
                                variant: K(`vM8w75LM3`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        xe() &&
                          h(`div`, {
                            className: `framer-2d1fr7 hidden-i6834s`,
                            "data-framer-name": `Desktop-icons`,
                            children: [
                              d(k, {
                                breakpoint: x,
                                overrides: { rnq5NgttY: { dismissWithEsc: !1 } },
                                children: d($, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    d(_, {
                                      children: d(k, {
                                        breakpoint: x,
                                        overrides: {
                                          rnq5NgttY: { y: (l?.y || 0) + 0 + 0 + 0 + 40 + 433.8066 },
                                        },
                                        children: d(j, {
                                          height: 106,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 40 + 836 - 136,
                                          children: d(k, {
                                            breakpoint: x,
                                            overrides: { rnq5NgttY: { transformTemplate: zt } },
                                            children: h(bt, {
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animate: Lt,
                                              className: `framer-12rwxs8-container`,
                                              "data-framer-appear-id": `12rwxs8`,
                                              "data-framer-name": `Tips`,
                                              drag: !0,
                                              dragMomentum: !1,
                                              id: `12rwxs8`,
                                              initial: Rt,
                                              name: `Tips`,
                                              nodeId: `RA2YMzvhc`,
                                              onMouseDown: q,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              whileTap: J,
                                              children: [
                                                d(W, {
                                                  FuWjfU0M0: It(
                                                    {
                                                      pixelHeight: 180,
                                                      pixelWidth: 180,
                                                      src: `../../assets/images/mpLoZ8OywwyBRHZrb96PxvZ1Is.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `RA2YMzvhc`,
                                                  layoutId: `RA2YMzvhc`,
                                                  name: `Tips`,
                                                  PnV1gLHoy: T({ overlay: e }),
                                                  tv38jHZon: `About Me`,
                                                  variant: K(`zeEfkTl__`),
                                                  width: `100%`,
                                                }),
                                                d(y, {
                                                  children:
                                                    e.visible &&
                                                    d(_, {
                                                      children: f(
                                                        d(P, {
                                                          triggerId: `12rwxs8`,
                                                          children: h(S, {
                                                            children: [
                                                              d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  rnq5NgttY: { onTap: void 0 },
                                                                },
                                                                children: d(
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
                                                                    className: w(
                                                                      N,
                                                                      `framer-134hntk`
                                                                    ),
                                                                    "data-framer-portal-id": `12rwxs8`,
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
                                                                    onTap: () => e.hide(),
                                                                  },
                                                                  `tW0n6Ep1D`
                                                                ),
                                                              }),
                                                              d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  rnq5NgttY: { width: `80vw` },
                                                                },
                                                                children: d(j, {
                                                                  width: `55vw`,
                                                                  children: d(yt, {
                                                                    __perspectiveFX: !1,
                                                                    __targetOpacity: 1,
                                                                    animate: X,
                                                                    className: w(
                                                                      N,
                                                                      `framer-103t029-container`
                                                                    ),
                                                                    "data-framer-portal-id": `12rwxs8`,
                                                                    drag: !0,
                                                                    dragMomentum: !1,
                                                                    exit: Y,
                                                                    inComponentSlot: !0,
                                                                    initial: Z,
                                                                    nodeId: `AjTGWW3jc`,
                                                                    onMouseDown: q,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `augiA20Il`,
                                                                    whileTap: J,
                                                                    children: d(V, {
                                                                      height: `100%`,
                                                                      id: `AjTGWW3jc`,
                                                                      layoutId: `AjTGWW3jc`,
                                                                      style: {
                                                                        height: `100%`,
                                                                        width: `100%`,
                                                                      },
                                                                      variant: K(`ZK_13Eyjm`),
                                                                      width: `100%`,
                                                                      XrlWiIKIe: E({ overlay: e }),
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
                                }),
                              }),
                              d(k, {
                                breakpoint: x,
                                overrides: {
                                  rnq5NgttY: { y: (l?.y || 0) + 0 + 0 + 0 + 40 + 16.5142 },
                                },
                                children: d(j, {
                                  height: 106,
                                  y: (l?.y || 0) + 0 + 0 + 0 + 40 + 41,
                                  children: d(k, {
                                    breakpoint: x,
                                    overrides: { rnq5NgttY: { transformTemplate: zt } },
                                    children: d(bt, {
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      animate: Lt,
                                      className: `framer-2bb28p-container`,
                                      "data-framer-appear-id": `2bb28p`,
                                      "data-framer-name": `Framer`,
                                      drag: !0,
                                      dragMomentum: !1,
                                      initial: Rt,
                                      name: `Framer`,
                                      nodeId: `o8IcfrBkf`,
                                      onMouseDown: q,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      whileTap: J,
                                      children: d(k, {
                                        breakpoint: x,
                                        overrides: { rnq5NgttY: { variant: K(`gDeWdU0vc`) } },
                                        children: d(W, {
                                          FuWjfU0M0: It(
                                            {
                                              pixelHeight: 2463,
                                              pixelWidth: 2478,
                                              src: `../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-a6a5aa.png`,
                                              srcSet: `../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY.png 512w,../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-7cd4a3.png 1024w,../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-f23bfe.png 2048w,../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-a6a5aa.png 2478w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `o8IcfrBkf`,
                                          layoutId: `o8IcfrBkf`,
                                          name: `Framer`,
                                          tv38jHZon: `Framer`,
                                          variant: K(`zeEfkTl__`),
                                          wdrtm9F0v: `https://www.framer.com/@talha-uxd/`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d($, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  d(_, {
                                    children: d(k, {
                                      breakpoint: x,
                                      overrides: {
                                        rnq5NgttY: { y: (l?.y || 0) + 0 + 0 + 0 + 40 + 836 - 226 },
                                      },
                                      children: d(j, {
                                        height: 106,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 40 + 126,
                                        children: h(bt, {
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          animate: Lt,
                                          className: `framer-1xri14m-container`,
                                          "data-framer-appear-id": `1xri14m`,
                                          "data-framer-name": `Music`,
                                          drag: !0,
                                          dragMomentum: !1,
                                          id: `1xri14m`,
                                          initial: Rt,
                                          name: `Music`,
                                          nodeId: `KdN8Dyksu`,
                                          onMouseDown: q,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          whileTap: J,
                                          children: [
                                            d(k, {
                                              breakpoint: x,
                                              overrides: {
                                                rnq5NgttY: {
                                                  style: { height: `100%` },
                                                  variant: K(`gDeWdU0vc`),
                                                },
                                              },
                                              children: d(W, {
                                                FuWjfU0M0: It(
                                                  {
                                                    pixelHeight: 180,
                                                    pixelWidth: 180,
                                                    src: `../../assets/images/S2dPCIKpWlDgRhbT7ZLDwM2v9s.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `KdN8Dyksu`,
                                                layoutId: `KdN8Dyksu`,
                                                name: `Music`,
                                                PnV1gLHoy: T({ overlay: e }),
                                                tv38jHZon: `Music`,
                                                variant: K(`zeEfkTl__`),
                                                width: `100%`,
                                              }),
                                            }),
                                            d(y, {
                                              children:
                                                e.visible &&
                                                d(_, {
                                                  children: f(
                                                    d(P, {
                                                      triggerId: `1xri14m`,
                                                      children: h(S, {
                                                        children: [
                                                          d(
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
                                                              className: w(N, `framer-1cs4fxf`),
                                                              "data-framer-portal-id": `1xri14m`,
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
                                                              onTap: () => e.hide(),
                                                            },
                                                            `tGvUeOGQT`
                                                          ),
                                                          h(v.div, {
                                                            className: w(N, `framer-k40he3`),
                                                            "data-framer-name": `iPod Group`,
                                                            "data-framer-portal-id": `1xri14m`,
                                                            transformTemplate: Vt,
                                                            children: [
                                                              d(j, {
                                                                children: d(yt, {
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  animate: X,
                                                                  className: `framer-bjlmf7-container`,
                                                                  "data-code-component-plugin-id": `84d4c1`,
                                                                  drag: !0,
                                                                  dragMomentum: !1,
                                                                  exit: Y,
                                                                  inComponentSlot: !0,
                                                                  initial: Z,
                                                                  isAuthoredByUser: !0,
                                                                  nodeId: `PYKR9OC4y`,
                                                                  onMouseDown: q,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `augiA20Il`,
                                                                  whileTap: J,
                                                                  children: d(pt, {
                                                                    font: {
                                                                      fontFamily: `"CUSTOMV2;Mona Sans Variable ExtraLight", sans-serif`,
                                                                      fontSize: `10px`,
                                                                      letterSpacing: `0em`,
                                                                      lineHeight: `1em`,
                                                                    },
                                                                    height: `100%`,
                                                                    id: `PYKR9OC4y`,
                                                                    layoutId: `PYKR9OC4y`,
                                                                    ownerName: `Masen James`,
                                                                    size: `default`,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    textShadow: !1,
                                                                    theme: `classic`,
                                                                    width: `100%`,
                                                                    youtubeUrl: ``,
                                                                  }),
                                                                }),
                                                              }),
                                                              d(v.button, {
                                                                animate: X,
                                                                className: `framer-1nw8fzc`,
                                                                "data-framer-name": `Close Button`,
                                                                "data-reset": `button`,
                                                                exit: Y,
                                                                initial: Z,
                                                                onTap: se({ overlay: e }),
                                                                children: d(Ke, {
                                                                  animated: !1,
                                                                  className: `framer-1n36sem`,
                                                                  JEeZYcamG: !0,
                                                                  layoutId: `X70_uFRmW`,
                                                                  P_DcoRcrY: !0,
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
                                  }),
                              }),
                              d($, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  d(_, {
                                    children: d(k, {
                                      breakpoint: x,
                                      overrides: {
                                        rnq5NgttY: { y: (l?.y || 0) + 0 + 0 + 0 + 40 + 31 },
                                      },
                                      children: d(j, {
                                        height: 106,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 40 + 50,
                                        children: d(k, {
                                          breakpoint: x,
                                          overrides: { rnq5NgttY: { transformTemplate: void 0 } },
                                          children: h(bt, {
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            animate: Lt,
                                            className: `framer-14iti09-container`,
                                            "data-framer-appear-id": `14iti09`,
                                            "data-framer-name": `Resume`,
                                            drag: !0,
                                            dragMomentum: !1,
                                            id: `14iti09`,
                                            initial: Rt,
                                            name: `Resume`,
                                            nodeId: `uqrOB2VCf`,
                                            onMouseDown: q,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            transformTemplate: Ht,
                                            whileTap: J,
                                            children: [
                                              d(k, {
                                                breakpoint: x,
                                                overrides: {
                                                  rnq5NgttY: { variant: K(`gDeWdU0vc`) },
                                                },
                                                children: d(W, {
                                                  FuWjfU0M0: It(
                                                    {
                                                      pixelHeight: 180,
                                                      pixelWidth: 180,
                                                      src: `../../assets/images/lMVci5SNdljIQS4LiI3djqZLQk.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `uqrOB2VCf`,
                                                  layoutId: `uqrOB2VCf`,
                                                  name: `Resume`,
                                                  PnV1gLHoy: T({ overlay: e }),
                                                  tv38jHZon: `Resume`,
                                                  variant: K(`zeEfkTl__`),
                                                  width: `100%`,
                                                }),
                                              }),
                                              d(y, {
                                                children:
                                                  e.visible &&
                                                  d(_, {
                                                    children: f(
                                                      d(P, {
                                                        triggerId: `14iti09`,
                                                        children: h(S, {
                                                          children: [
                                                            d(
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
                                                                className: w(N, `framer-1bg4cjo`),
                                                                "data-framer-portal-id": `14iti09`,
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
                                                                onTap: () => e.hide(),
                                                              },
                                                              `NyRp3jFX8`
                                                            ),
                                                            d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                rnq5NgttY: { width: `80vw` },
                                                              },
                                                              children: d(j, {
                                                                width: `50vw`,
                                                                children: d(yt, {
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  animate: X,
                                                                  className: w(
                                                                    N,
                                                                    `framer-zpnihu-container`
                                                                  ),
                                                                  "data-framer-portal-id": `14iti09`,
                                                                  drag: !0,
                                                                  dragMomentum: !1,
                                                                  exit: Y,
                                                                  inComponentSlot: !0,
                                                                  initial: Z,
                                                                  nodeId: `OofE1UHZj`,
                                                                  onMouseDown: q,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `augiA20Il`,
                                                                  whileTap: J,
                                                                  children: d(V, {
                                                                    height: `100%`,
                                                                    id: `OofE1UHZj`,
                                                                    layoutId: `OofE1UHZj`,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    variant: K(`FH1_m8ZUI`),
                                                                    width: `100%`,
                                                                    XrlWiIKIe: E({ overlay: e }),
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
                              }),
                              d($, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  d(_, {
                                    children: d(k, {
                                      breakpoint: x,
                                      overrides: {
                                        rnq5NgttY: {
                                          width: `calc(${l?.width || `100vw`} - 750px)`,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 40 + 84,
                                        },
                                      },
                                      children: d(j, {
                                        height: 106,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 40 + 836 - 186,
                                        children: h(bt, {
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          animate: Lt,
                                          className: `framer-1r7utb3-container`,
                                          "data-framer-appear-id": `1r7utb3`,
                                          "data-framer-name": `Game`,
                                          drag: !0,
                                          dragMomentum: !1,
                                          id: `1r7utb3`,
                                          initial: Rt,
                                          name: `Game`,
                                          nodeId: `lTgTkh1y1`,
                                          onMouseDown: q,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          whileTap: J,
                                          children: [
                                            d(k, {
                                              breakpoint: x,
                                              overrides: {
                                                rnq5NgttY: {
                                                  style: { height: `100%` },
                                                  variant: K(`gDeWdU0vc`),
                                                },
                                              },
                                              children: d(W, {
                                                FuWjfU0M0: It(
                                                  {
                                                    pixelHeight: 561,
                                                    pixelWidth: 478,
                                                    src: `../../assets/images/NBs3etFTadPxbSVNjpbB56GouU.png`,
                                                    srcSet: `../../assets/images/NBs3etFTadPxbSVNjpbB56GouU.png 478w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `lTgTkh1y1`,
                                                layoutId: `lTgTkh1y1`,
                                                name: `Game`,
                                                PnV1gLHoy: T({ overlay: e }),
                                                tv38jHZon: `Herding cats`,
                                                variant: K(`zeEfkTl__`),
                                                width: `100%`,
                                              }),
                                            }),
                                            d(y, {
                                              children:
                                                e.visible &&
                                                d(_, {
                                                  children: f(
                                                    d(P, {
                                                      triggerId: `1r7utb3`,
                                                      children: h(S, {
                                                        children: [
                                                          d(
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
                                                              className: w(N, `framer-1n4myvo`),
                                                              "data-framer-portal-id": `1r7utb3`,
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
                                                              onTap: () => e.hide(),
                                                            },
                                                            `Xk9A_IKi2`
                                                          ),
                                                          d(j, {
                                                            children: d(O, {
                                                              className: w(
                                                                N,
                                                                `framer-1te2og0-container`
                                                              ),
                                                              "data-framer-portal-id": `1r7utb3`,
                                                              inComponentSlot: !0,
                                                              isAuthoredByUser: !0,
                                                              nodeId: `Vd23bOVQd`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `augiA20Il`,
                                                              children: d(nt, {
                                                                height: `100%`,
                                                                id: `Vd23bOVQd`,
                                                                layoutId: `Vd23bOVQd`,
                                                                style: {
                                                                  height: `100%`,
                                                                  width: `100%`,
                                                                },
                                                                url: `https://herding-cats-ten.vercel.app`,
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
                              d(k, {
                                breakpoint: x,
                                overrides: { rnq5NgttY: { dismissWithEsc: !1 } },
                                children: d($, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    d(_, {
                                      children: d(k, {
                                        breakpoint: x,
                                        overrides: {
                                          rnq5NgttY: { y: (l?.y || 0) + 0 + 0 + 0 + 40 + 474.7593 },
                                        },
                                        children: d(j, {
                                          height: 106,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 40 + 836 - 132,
                                          children: d(k, {
                                            breakpoint: x,
                                            overrides: { rnq5NgttY: { transformTemplate: zt } },
                                            children: h(bt, {
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animate: Lt,
                                              className: `framer-grmyv7-container`,
                                              "data-framer-appear-id": `grmyv7`,
                                              "data-framer-name": `Movies`,
                                              drag: !0,
                                              dragMomentum: !1,
                                              id: `grmyv7`,
                                              initial: Rt,
                                              name: `Movies`,
                                              nodeId: `LCiF0OcII`,
                                              onMouseDown: q,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              whileTap: J,
                                              children: [
                                                d(k, {
                                                  breakpoint: x,
                                                  overrides: {
                                                    rnq5NgttY: {
                                                      style: { height: `100%` },
                                                      variant: K(`gDeWdU0vc`),
                                                    },
                                                  },
                                                  children: d(W, {
                                                    FuWjfU0M0: It(
                                                      {
                                                        pixelHeight: 312,
                                                        pixelWidth: 312,
                                                        src: `../../assets/images/PWuUiO2aouvctH4NNK1MNPe9o.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `LCiF0OcII`,
                                                    layoutId: `LCiF0OcII`,
                                                    name: `Movies`,
                                                    PnV1gLHoy: T({ overlay: e }),
                                                    tv38jHZon: `Interstellar`,
                                                    variant: K(`zeEfkTl__`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                d(y, {
                                                  children:
                                                    e.visible &&
                                                    d(_, {
                                                      children: f(
                                                        d(P, {
                                                          triggerId: `grmyv7`,
                                                          children: h(S, {
                                                            children: [
                                                              d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  rnq5NgttY: { onTap: void 0 },
                                                                },
                                                                children: d(
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
                                                                    className: w(
                                                                      N,
                                                                      `framer-16riirb`
                                                                    ),
                                                                    "data-framer-portal-id": `grmyv7`,
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
                                                                    onTap: () => e.hide(),
                                                                  },
                                                                  `GSRqZ8jxQ`
                                                                ),
                                                              }),
                                                              d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  rnq5NgttY: { width: `80vw` },
                                                                },
                                                                children: d(j, {
                                                                  width: `55vw`,
                                                                  children: d(yt, {
                                                                    __perspectiveFX: !1,
                                                                    __targetOpacity: 1,
                                                                    animate: X,
                                                                    className: w(
                                                                      N,
                                                                      `framer-1c96nsa-container`
                                                                    ),
                                                                    "data-framer-portal-id": `grmyv7`,
                                                                    drag: !0,
                                                                    dragMomentum: !1,
                                                                    exit: Y,
                                                                    inComponentSlot: !0,
                                                                    initial: Z,
                                                                    nodeId: `nNrqZKveg`,
                                                                    onMouseDown: q,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `augiA20Il`,
                                                                    whileTap: J,
                                                                    children: d(V, {
                                                                      height: `100%`,
                                                                      id: `nNrqZKveg`,
                                                                      layoutId: `nNrqZKveg`,
                                                                      style: {
                                                                        height: `100%`,
                                                                        width: `100%`,
                                                                      },
                                                                      variant: K(`rMHNUioxI`),
                                                                      width: `100%`,
                                                                      XrlWiIKIe: E({ overlay: e }),
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
                                }),
                              }),
                              d(k, {
                                breakpoint: x,
                                overrides: { rnq5NgttY: { transformTemplate: void 0 } },
                                children: d(wt, {
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  animate: Lt,
                                  className: `framer-qvs3hn`,
                                  "data-framer-appear-id": `qvs3hn`,
                                  drag: !0,
                                  dragMomentum: !1,
                                  initial: Rt,
                                  onMouseDown: q,
                                  optimized: !0,
                                  transformTemplate: zt,
                                  children: d(M, {
                                    children: d(Gt, {
                                      query: Wt(),
                                      children: (e, t, n) =>
                                        d(_, {
                                          children: e?.map(
                                            (
                                              { AXve8fDfq: e, id: t, jujDq9vBb: n, VwUa8S3QG: r },
                                              i
                                            ) => (
                                              (n ??= ``),
                                              (e ??= ``),
                                              d(
                                                b,
                                                {
                                                  id: `Bm3g6Xiox-${t}`,
                                                  children: d(R.Provider, {
                                                    value: { AXve8fDfq: e },
                                                    children: d(`div`, {
                                                      className: `framer-19u42p5`,
                                                      children: d($, {
                                                        blockDocumentScrolling: !0,
                                                        dismissWithEsc: !0,
                                                        children: (t) =>
                                                          d(_, {
                                                            children: d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                rnq5NgttY: {
                                                                  y:
                                                                    (l?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    40 +
                                                                    836 -
                                                                    266 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                },
                                                              },
                                                              children: d(j, {
                                                                height: 106,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  40 +
                                                                  351.8139 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                                children: h(O, {
                                                                  className: `framer-ygavp9-container`,
                                                                  id: `${e}-ygavp9`,
                                                                  nodeId: `waITZS1sm`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: [
                                                                    d(k, {
                                                                      breakpoint: x,
                                                                      overrides: {
                                                                        rnq5NgttY: {
                                                                          variant: K(`gDeWdU0vc`),
                                                                        },
                                                                      },
                                                                      children: d(W, {
                                                                        FuWjfU0M0: Ut(r),
                                                                        height: `100%`,
                                                                        id: `waITZS1sm`,
                                                                        layoutId: `waITZS1sm`,
                                                                        PnV1gLHoy: T({
                                                                          overlay: t,
                                                                        }),
                                                                        tv38jHZon: n,
                                                                        variant: K(`zeEfkTl__`),
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                    d(y, {
                                                                      children:
                                                                        t.visible &&
                                                                        d(_, {
                                                                          children: f(
                                                                            d(P, {
                                                                              triggerId: `${e}-ygavp9`,
                                                                              children: h(S, {
                                                                                children: [
                                                                                  d(
                                                                                    v.div,
                                                                                    {
                                                                                      animate: {
                                                                                        opacity: 1,
                                                                                        transition:
                                                                                          {
                                                                                            delay: 0,
                                                                                            duration: 0,
                                                                                            ease: [
                                                                                              0.5,
                                                                                              0,
                                                                                              0.88,
                                                                                              0.77,
                                                                                            ],
                                                                                            type: `tween`,
                                                                                          },
                                                                                      },
                                                                                      className: w(
                                                                                        N,
                                                                                        `framer-1yfze9w`
                                                                                      ),
                                                                                      "data-framer-portal-id": `${e}-ygavp9`,
                                                                                      exit: {
                                                                                        opacity: 0,
                                                                                        transition:
                                                                                          {
                                                                                            delay: 0,
                                                                                            duration: 0,
                                                                                            ease: [
                                                                                              0.12,
                                                                                              0.23,
                                                                                              0.5,
                                                                                              1,
                                                                                            ],
                                                                                            type: `tween`,
                                                                                          },
                                                                                      },
                                                                                      initial: {
                                                                                        opacity: 0,
                                                                                      },
                                                                                      onTap: () =>
                                                                                        t.hide(),
                                                                                    },
                                                                                    `VPCRa19gd`
                                                                                  ),
                                                                                  d(k, {
                                                                                    breakpoint: x,
                                                                                    overrides: {
                                                                                      rnq5NgttY: {
                                                                                        width: `80vw`,
                                                                                      },
                                                                                    },
                                                                                    children: d(j, {
                                                                                      width: `55vw`,
                                                                                      children: d(
                                                                                        yt,
                                                                                        {
                                                                                          __perspectiveFX:
                                                                                            !1,
                                                                                          __targetOpacity: 1,
                                                                                          animate:
                                                                                            X,
                                                                                          className:
                                                                                            w(
                                                                                              N,
                                                                                              `framer-xptj8r-container`
                                                                                            ),
                                                                                          "data-framer-portal-id": `${e}-ygavp9`,
                                                                                          drag: !0,
                                                                                          dragMomentum:
                                                                                            !1,
                                                                                          exit: Y,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          initial:
                                                                                            Z,
                                                                                          nodeId: `RH3mdoPHw`,
                                                                                          onMouseDown:
                                                                                            q,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `augiA20Il`,
                                                                                          whileTap:
                                                                                            J,
                                                                                          children:
                                                                                            d(V, {
                                                                                              height: `100%`,
                                                                                              id: `RH3mdoPHw`,
                                                                                              layoutId: `RH3mdoPHw`,
                                                                                              style:
                                                                                                {
                                                                                                  height: `100%`,
                                                                                                  width: `100%`,
                                                                                                },
                                                                                              variant:
                                                                                                K(
                                                                                                  `V4l7H5UUA`
                                                                                                ),
                                                                                              width: `100%`,
                                                                                              XrlWiIKIe:
                                                                                                E({
                                                                                                  overlay:
                                                                                                    t,
                                                                                                }),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                },
                                                t
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              }),
                              d(wt, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: Lt,
                                className: `framer-1ilsq4f`,
                                "data-framer-appear-id": `1ilsq4f`,
                                drag: !0,
                                dragMomentum: !1,
                                initial: Rt,
                                onMouseDown: q,
                                optimized: !0,
                                children: d(M, {
                                  children: d(Gt, {
                                    query: Kt(),
                                    children: (e, t, n) =>
                                      d(_, {
                                        children: e?.map(
                                          (
                                            { AXve8fDfq: e, CCHE89_KJ: t, id: n, jujDq9vBb: r },
                                            i
                                          ) => (
                                            (r ??= ``),
                                            (e ??= ``),
                                            d(
                                              b,
                                              {
                                                id: `IYlNVZYvG-${n}`,
                                                children: d(R.Provider, {
                                                  value: { AXve8fDfq: e },
                                                  children: d(`div`, {
                                                    className: `framer-1jeyzv8`,
                                                    children: d($, {
                                                      blockDocumentScrolling: !0,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        d(_, {
                                                          children: d(k, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              rnq5NgttY: {
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  40 +
                                                                  836 -
                                                                  703 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: d(j, {
                                                              height: 106,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                40 +
                                                                836 -
                                                                203 +
                                                                0 +
                                                                0 +
                                                                0,
                                                              children: h(O, {
                                                                className: `framer-1h5pmyl-container`,
                                                                id: `${e}-1h5pmyl`,
                                                                nodeId: `AdFoAM5Cm`,
                                                                scopeId: `augiA20Il`,
                                                                children: [
                                                                  d(k, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      rnq5NgttY: {
                                                                        variant: K(`gDeWdU0vc`),
                                                                      },
                                                                    },
                                                                    children: d(W, {
                                                                      FuWjfU0M0: Ut(t),
                                                                      height: `100%`,
                                                                      id: `AdFoAM5Cm`,
                                                                      layoutId: `AdFoAM5Cm`,
                                                                      PnV1gLHoy: T({ overlay: n }),
                                                                      tv38jHZon: r,
                                                                      variant: K(`zeEfkTl__`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                  d(y, {
                                                                    children:
                                                                      n.visible &&
                                                                      d(_, {
                                                                        children: f(
                                                                          d(P, {
                                                                            triggerId: `${e}-1h5pmyl`,
                                                                            children: h(S, {
                                                                              children: [
                                                                                d(
                                                                                  v.div,
                                                                                  {
                                                                                    animate: {
                                                                                      opacity: 1,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.5, 0,
                                                                                          0.88,
                                                                                          0.77,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    className: w(
                                                                                      N,
                                                                                      `framer-13dcmxe`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${e}-1h5pmyl`,
                                                                                    exit: {
                                                                                      opacity: 0,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.12,
                                                                                          0.23, 0.5,
                                                                                          1,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    initial: {
                                                                                      opacity: 0,
                                                                                    },
                                                                                    onTap: () =>
                                                                                      n.hide(),
                                                                                  },
                                                                                  `TfXX8X68v`
                                                                                ),
                                                                                d(k, {
                                                                                  breakpoint: x,
                                                                                  overrides: {
                                                                                    rnq5NgttY: {
                                                                                      width: `80vw`,
                                                                                    },
                                                                                  },
                                                                                  children: d(j, {
                                                                                    width: `55vw`,
                                                                                    children: d(
                                                                                      yt,
                                                                                      {
                                                                                        __perspectiveFX:
                                                                                          !1,
                                                                                        __targetOpacity: 1,
                                                                                        animate: X,
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-108iybm-container`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-1h5pmyl`,
                                                                                        drag: !0,
                                                                                        dragMomentum:
                                                                                          !1,
                                                                                        exit: Y,
                                                                                        inComponentSlot:
                                                                                          !0,
                                                                                        initial: Z,
                                                                                        nodeId: `fr2c6uxxX`,
                                                                                        onMouseDown:
                                                                                          q,
                                                                                        rendersWithMotion:
                                                                                          !0,
                                                                                        scopeId: `augiA20Il`,
                                                                                        whileTap: J,
                                                                                        children: d(
                                                                                          V,
                                                                                          {
                                                                                            height: `100%`,
                                                                                            id: `fr2c6uxxX`,
                                                                                            layoutId: `fr2c6uxxX`,
                                                                                            style: {
                                                                                              height: `100%`,
                                                                                              width: `100%`,
                                                                                            },
                                                                                            variant:
                                                                                              K(
                                                                                                `bxZew7k1f`
                                                                                              ),
                                                                                            width: `100%`,
                                                                                            XrlWiIKIe:
                                                                                              E({
                                                                                                overlay:
                                                                                                  n,
                                                                                              }),
                                                                                          }
                                                                                        ),
                                                                                      }
                                                                                    ),
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
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              d(wt, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: Lt,
                                className: `framer-5bywp6`,
                                "data-framer-appear-id": `5bywp6`,
                                drag: !0,
                                dragMomentum: !1,
                                initial: Rt,
                                onMouseDown: q,
                                optimized: !0,
                                children: d(M, {
                                  children: d(Gt, {
                                    query: qt(),
                                    children: (e, t, n) =>
                                      d(_, {
                                        children: e?.map(
                                          (
                                            { AXve8fDfq: e, EoVZinw0n: t, id: n, jujDq9vBb: r },
                                            i
                                          ) => (
                                            (r ??= ``),
                                            (e ??= ``),
                                            d(
                                              b,
                                              {
                                                id: `bfWqWuQ13-${n}`,
                                                children: d(R.Provider, {
                                                  value: { AXve8fDfq: e },
                                                  children: d(`div`, {
                                                    className: `framer-1enzjj7`,
                                                    children: d($, {
                                                      blockDocumentScrolling: !0,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        d(_, {
                                                          children: d(j, {
                                                            height: 106,
                                                            y:
                                                              (l?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              40 +
                                                              265 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: h(O, {
                                                              className: `framer-1invank-container`,
                                                              id: `${e}-1invank`,
                                                              nodeId: `rnqWa2gvd`,
                                                              scopeId: `augiA20Il`,
                                                              children: [
                                                                d(k, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    rnq5NgttY: {
                                                                      variant: K(`gDeWdU0vc`),
                                                                    },
                                                                  },
                                                                  children: d(W, {
                                                                    FuWjfU0M0: Ut(t),
                                                                    height: `100%`,
                                                                    id: `rnqWa2gvd`,
                                                                    layoutId: `rnqWa2gvd`,
                                                                    PnV1gLHoy: T({ overlay: n }),
                                                                    tv38jHZon: r,
                                                                    variant: K(`zeEfkTl__`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                                d(y, {
                                                                  children:
                                                                    n.visible &&
                                                                    d(_, {
                                                                      children: f(
                                                                        d(P, {
                                                                          triggerId: `${e}-1invank`,
                                                                          children: h(S, {
                                                                            children: [
                                                                              d(
                                                                                v.div,
                                                                                {
                                                                                  animate: {
                                                                                    opacity: 1,
                                                                                    transition: {
                                                                                      delay: 0,
                                                                                      duration: 0,
                                                                                      ease: [
                                                                                        0.5, 0,
                                                                                        0.88, 0.77,
                                                                                      ],
                                                                                      type: `tween`,
                                                                                    },
                                                                                  },
                                                                                  className: w(
                                                                                    N,
                                                                                    `framer-1a2198a`
                                                                                  ),
                                                                                  "data-framer-portal-id": `${e}-1invank`,
                                                                                  exit: {
                                                                                    opacity: 0,
                                                                                    transition: {
                                                                                      delay: 0,
                                                                                      duration: 0,
                                                                                      ease: [
                                                                                        0.12, 0.23,
                                                                                        0.5, 1,
                                                                                      ],
                                                                                      type: `tween`,
                                                                                    },
                                                                                  },
                                                                                  initial: {
                                                                                    opacity: 0,
                                                                                  },
                                                                                  onTap: () =>
                                                                                    n.hide(),
                                                                                },
                                                                                `SnCrdCK0N`
                                                                              ),
                                                                              d(k, {
                                                                                breakpoint: x,
                                                                                overrides: {
                                                                                  rnq5NgttY: {
                                                                                    width: `80vw`,
                                                                                  },
                                                                                },
                                                                                children: d(j, {
                                                                                  width: `55vw`,
                                                                                  children: d(yt, {
                                                                                    __perspectiveFX:
                                                                                      !1,
                                                                                    __targetOpacity: 1,
                                                                                    animate: X,
                                                                                    className: w(
                                                                                      N,
                                                                                      `framer-pjvwyg-container`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${e}-1invank`,
                                                                                    drag: !0,
                                                                                    dragMomentum:
                                                                                      !1,
                                                                                    exit: Y,
                                                                                    inComponentSlot:
                                                                                      !0,
                                                                                    initial: Z,
                                                                                    nodeId: `GHBXRt6iT`,
                                                                                    onMouseDown: q,
                                                                                    rendersWithMotion:
                                                                                      !0,
                                                                                    scopeId: `augiA20Il`,
                                                                                    whileTap: J,
                                                                                    children: d(V, {
                                                                                      height: `100%`,
                                                                                      id: `GHBXRt6iT`,
                                                                                      layoutId: `GHBXRt6iT`,
                                                                                      style: {
                                                                                        height: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      variant:
                                                                                        K(
                                                                                          `erhMUPQJh`
                                                                                        ),
                                                                                      width: `100%`,
                                                                                      XrlWiIKIe: E({
                                                                                        overlay: n,
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
                                                              ],
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              d(wt, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: Lt,
                                className: `framer-oh0idf`,
                                "data-framer-appear-id": `oh0idf`,
                                drag: !0,
                                dragMomentum: !1,
                                initial: Rt,
                                onMouseDown: q,
                                optimized: !0,
                                children: d(M, {
                                  children: d(Gt, {
                                    query: Jt(),
                                    children: (e, t, n) =>
                                      d(_, {
                                        children: e?.map(
                                          (
                                            { AXve8fDfq: e, EoVZinw0n: t, id: n, jujDq9vBb: r },
                                            i
                                          ) => (
                                            (r ??= ``),
                                            (e ??= ``),
                                            d(
                                              b,
                                              {
                                                id: `iVcJEshBC-${n}`,
                                                children: d(R.Provider, {
                                                  value: { AXve8fDfq: e },
                                                  children: d(`div`, {
                                                    className: `framer-394ces`,
                                                    children: d($, {
                                                      blockDocumentScrolling: !0,
                                                      dismissWithEsc: !0,
                                                      children: (n) =>
                                                        d(_, {
                                                          children: d(k, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              rnq5NgttY: {
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  40 +
                                                                  836 -
                                                                  186 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: d(j, {
                                                              height: 106,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                40 +
                                                                836 -
                                                                283 +
                                                                0 +
                                                                0 +
                                                                0,
                                                              children: h(O, {
                                                                className: `framer-cwolws-container`,
                                                                id: `${e}-cwolws`,
                                                                nodeId: `ZPLIIkgtc`,
                                                                scopeId: `augiA20Il`,
                                                                children: [
                                                                  d(k, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      rnq5NgttY: {
                                                                        variant: K(`gDeWdU0vc`),
                                                                      },
                                                                    },
                                                                    children: d(W, {
                                                                      FuWjfU0M0: Ut(t),
                                                                      height: `100%`,
                                                                      id: `ZPLIIkgtc`,
                                                                      layoutId: `ZPLIIkgtc`,
                                                                      PnV1gLHoy: T({ overlay: n }),
                                                                      tv38jHZon: r,
                                                                      variant: K(`zeEfkTl__`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                  d(y, {
                                                                    children:
                                                                      n.visible &&
                                                                      d(_, {
                                                                        children: f(
                                                                          d(P, {
                                                                            triggerId: `${e}-cwolws`,
                                                                            children: h(S, {
                                                                              children: [
                                                                                d(
                                                                                  v.div,
                                                                                  {
                                                                                    animate: {
                                                                                      opacity: 1,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.5, 0,
                                                                                          0.88,
                                                                                          0.77,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    className: w(
                                                                                      N,
                                                                                      `framer-1yby2w7`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${e}-cwolws`,
                                                                                    exit: {
                                                                                      opacity: 0,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.12,
                                                                                          0.23, 0.5,
                                                                                          1,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    initial: {
                                                                                      opacity: 0,
                                                                                    },
                                                                                    onTap: () =>
                                                                                      n.hide(),
                                                                                  },
                                                                                  `XjTH4Q4Kz`
                                                                                ),
                                                                                d(k, {
                                                                                  breakpoint: x,
                                                                                  overrides: {
                                                                                    rnq5NgttY: {
                                                                                      width: `80vw`,
                                                                                    },
                                                                                  },
                                                                                  children: d(j, {
                                                                                    width: `55vw`,
                                                                                    children: d(
                                                                                      yt,
                                                                                      {
                                                                                        __perspectiveFX:
                                                                                          !1,
                                                                                        __targetOpacity: 1,
                                                                                        animate: X,
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-1kdtdir-container`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-cwolws`,
                                                                                        drag: !0,
                                                                                        dragMomentum:
                                                                                          !1,
                                                                                        exit: Y,
                                                                                        inComponentSlot:
                                                                                          !0,
                                                                                        initial: Z,
                                                                                        nodeId: `jIUf6z7CF`,
                                                                                        onMouseDown:
                                                                                          q,
                                                                                        rendersWithMotion:
                                                                                          !0,
                                                                                        scopeId: `augiA20Il`,
                                                                                        whileTap: J,
                                                                                        children: d(
                                                                                          V,
                                                                                          {
                                                                                            height: `100%`,
                                                                                            id: `jIUf6z7CF`,
                                                                                            layoutId: `jIUf6z7CF`,
                                                                                            style: {
                                                                                              height: `100%`,
                                                                                              width: `100%`,
                                                                                            },
                                                                                            variant:
                                                                                              K(
                                                                                                `bN8RvVc95`
                                                                                              ),
                                                                                            width: `100%`,
                                                                                            XrlWiIKIe:
                                                                                              E({
                                                                                                overlay:
                                                                                                  n,
                                                                                              }),
                                                                                          }
                                                                                        ),
                                                                                      }
                                                                                    ),
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
                                              },
                                              n
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              d(wt, {
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: Lt,
                                className: `framer-rrlxyx`,
                                "data-framer-appear-id": `rrlxyx`,
                                drag: !0,
                                dragMomentum: !1,
                                initial: Rt,
                                onMouseDown: q,
                                optimized: !0,
                                children: d(M, {
                                  children: d(Gt, {
                                    query: Yt(),
                                    children: (e, t, n) =>
                                      d(_, {
                                        children: e?.map(
                                          (
                                            { AXve8fDfq: e, id: t, jujDq9vBb: n, VwUa8S3QG: r },
                                            i
                                          ) => (
                                            (n ??= ``),
                                            (e ??= ``),
                                            d(
                                              b,
                                              {
                                                id: `EkH_c7cgj-${t}`,
                                                children: d(R.Provider, {
                                                  value: { AXve8fDfq: e },
                                                  children: d(`div`, {
                                                    className: `framer-1ph4ayp`,
                                                    children: d($, {
                                                      blockDocumentScrolling: !0,
                                                      dismissWithEsc: !0,
                                                      children: (t) =>
                                                        d(_, {
                                                          children: d(k, {
                                                            breakpoint: x,
                                                            overrides: {
                                                              rnq5NgttY: {
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  40 +
                                                                  220 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: d(j, {
                                                              height: 106,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                40 +
                                                                127 +
                                                                0 +
                                                                0 +
                                                                0,
                                                              children: h(O, {
                                                                className: `framer-q0hz5e-container`,
                                                                id: `${e}-q0hz5e`,
                                                                nodeId: `BGDhZXN_R`,
                                                                scopeId: `augiA20Il`,
                                                                children: [
                                                                  d(k, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      rnq5NgttY: {
                                                                        variant: K(`gDeWdU0vc`),
                                                                      },
                                                                    },
                                                                    children: d(W, {
                                                                      FuWjfU0M0: Ut(r),
                                                                      height: `100%`,
                                                                      id: `BGDhZXN_R`,
                                                                      layoutId: `BGDhZXN_R`,
                                                                      PnV1gLHoy: T({ overlay: t }),
                                                                      tv38jHZon: n,
                                                                      variant: K(`zeEfkTl__`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                  d(y, {
                                                                    children:
                                                                      t.visible &&
                                                                      d(_, {
                                                                        children: f(
                                                                          d(P, {
                                                                            triggerId: `${e}-q0hz5e`,
                                                                            children: h(S, {
                                                                              children: [
                                                                                d(
                                                                                  v.div,
                                                                                  {
                                                                                    animate: {
                                                                                      opacity: 1,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.5, 0,
                                                                                          0.88,
                                                                                          0.77,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    className: w(
                                                                                      N,
                                                                                      `framer-1ifd76g`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${e}-q0hz5e`,
                                                                                    exit: {
                                                                                      opacity: 0,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.12,
                                                                                          0.23, 0.5,
                                                                                          1,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    initial: {
                                                                                      opacity: 0,
                                                                                    },
                                                                                    onTap: () =>
                                                                                      t.hide(),
                                                                                  },
                                                                                  `lgCSchtS6`
                                                                                ),
                                                                                d(k, {
                                                                                  breakpoint: x,
                                                                                  overrides: {
                                                                                    rnq5NgttY: {
                                                                                      width: `80vw`,
                                                                                    },
                                                                                  },
                                                                                  children: d(j, {
                                                                                    width: `55vw`,
                                                                                    children: d(
                                                                                      yt,
                                                                                      {
                                                                                        __perspectiveFX:
                                                                                          !1,
                                                                                        __targetOpacity: 1,
                                                                                        animate: X,
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-sztdzu-container`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-q0hz5e`,
                                                                                        drag: !0,
                                                                                        dragMomentum:
                                                                                          !1,
                                                                                        exit: Y,
                                                                                        inComponentSlot:
                                                                                          !0,
                                                                                        initial: Z,
                                                                                        nodeId: `SpnSE48Jl`,
                                                                                        onMouseDown:
                                                                                          q,
                                                                                        rendersWithMotion:
                                                                                          !0,
                                                                                        scopeId: `augiA20Il`,
                                                                                        whileTap: J,
                                                                                        children: d(
                                                                                          V,
                                                                                          {
                                                                                            height: `100%`,
                                                                                            id: `SpnSE48Jl`,
                                                                                            layoutId: `SpnSE48Jl`,
                                                                                            style: {
                                                                                              height: `100%`,
                                                                                              width: `100%`,
                                                                                            },
                                                                                            variant:
                                                                                              K(
                                                                                                `u79vWaa_Q`
                                                                                              ),
                                                                                            width: `100%`,
                                                                                            XrlWiIKIe:
                                                                                              E({
                                                                                                overlay:
                                                                                                  t,
                                                                                              }),
                                                                                          }
                                                                                        ),
                                                                                      }
                                                                                    ),
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
                                              },
                                              t
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                              Se() &&
                                d(wt, {
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  animate: Lt,
                                  className: `framer-1n9wwf4 hidden-1xtmoxo`,
                                  "data-framer-appear-id": `1n9wwf4`,
                                  drag: !0,
                                  dragMomentum: !1,
                                  initial: Rt,
                                  onMouseDown: q,
                                  optimized: !0,
                                  transformTemplate: zt,
                                  whileTap: J,
                                  children: d(M, {
                                    children: d(Gt, {
                                      query: Xt(),
                                      children: (e, t, n) =>
                                        d(_, {
                                          children: e?.map(
                                            (
                                              { AXve8fDfq: e, id: t, jujDq9vBb: n, VwUa8S3QG: r },
                                              i
                                            ) => (
                                              (n ??= ``),
                                              (e ??= ``),
                                              d(
                                                b,
                                                {
                                                  id: `R1epHv6RO-${t}`,
                                                  children: d(R.Provider, {
                                                    value: { AXve8fDfq: e },
                                                    children: d(`div`, {
                                                      className: `framer-1l34g01`,
                                                      children: d($, {
                                                        blockDocumentScrolling: !0,
                                                        dismissWithEsc: !0,
                                                        children: (t) =>
                                                          d(_, {
                                                            children: d(j, {
                                                              height: 106,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                40 +
                                                                365 +
                                                                0 +
                                                                0 +
                                                                0,
                                                              children: h(O, {
                                                                className: `framer-isfnwv-container`,
                                                                id: `${e}-isfnwv`,
                                                                nodeId: `E0XYMrhLR`,
                                                                scopeId: `augiA20Il`,
                                                                children: [
                                                                  d(W, {
                                                                    FuWjfU0M0: Ut(r),
                                                                    height: `100%`,
                                                                    id: `E0XYMrhLR`,
                                                                    layoutId: `E0XYMrhLR`,
                                                                    PnV1gLHoy: T({ overlay: t }),
                                                                    tv38jHZon: n,
                                                                    variant: K(`zeEfkTl__`),
                                                                    width: `100%`,
                                                                  }),
                                                                  d(y, {
                                                                    children:
                                                                      t.visible &&
                                                                      d(_, {
                                                                        children: f(
                                                                          d(P, {
                                                                            triggerId: `${e}-isfnwv`,
                                                                            children: h(S, {
                                                                              children: [
                                                                                d(
                                                                                  v.div,
                                                                                  {
                                                                                    animate: {
                                                                                      opacity: 1,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0.4,
                                                                                        ease: [
                                                                                          0.5, 0,
                                                                                          0.88,
                                                                                          0.77,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    className: w(
                                                                                      N,
                                                                                      `framer-101ebhz`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${e}-isfnwv`,
                                                                                    exit: {
                                                                                      opacity: 0,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0.4,
                                                                                        ease: [
                                                                                          0.12,
                                                                                          0.23, 0.5,
                                                                                          1,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    initial: {
                                                                                      opacity: 0,
                                                                                    },
                                                                                    onTap: () =>
                                                                                      t.hide(),
                                                                                  },
                                                                                  `EkkMDecnk`
                                                                                ),
                                                                                d(j, {
                                                                                  width: `55vw`,
                                                                                  children: d(yt, {
                                                                                    __perspectiveFX:
                                                                                      !1,
                                                                                    __targetOpacity: 1,
                                                                                    animate: X,
                                                                                    className: w(
                                                                                      N,
                                                                                      `framer-fivm0l-container`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${e}-isfnwv`,
                                                                                    drag: !0,
                                                                                    dragMomentum:
                                                                                      !1,
                                                                                    exit: Y,
                                                                                    inComponentSlot:
                                                                                      !0,
                                                                                    initial: Z,
                                                                                    nodeId: `CiLUhHWzH`,
                                                                                    onMouseDown: q,
                                                                                    rendersWithMotion:
                                                                                      !0,
                                                                                    scopeId: `augiA20Il`,
                                                                                    whileTap: J,
                                                                                    children: d(V, {
                                                                                      height: `100%`,
                                                                                      id: `CiLUhHWzH`,
                                                                                      layoutId: `CiLUhHWzH`,
                                                                                      style: {
                                                                                        height: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      variant:
                                                                                        K(
                                                                                          `fsf6WfCQ1`
                                                                                        ),
                                                                                      width: `100%`,
                                                                                      XrlWiIKIe: E({
                                                                                        overlay: t,
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
                                                  }),
                                                },
                                                t
                                              )
                                            )
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              d(k, {
                                breakpoint: x,
                                overrides: {
                                  rnq5NgttY: { y: (l?.y || 0) + 0 + 0 + 0 + 40 + 18.3435 },
                                },
                                children: d(j, {
                                  height: 106,
                                  y: (l?.y || 0) + 0 + 0 + 0 + 40 + 41,
                                  children: d(k, {
                                    breakpoint: x,
                                    overrides: { rnq5NgttY: { transformTemplate: zt } },
                                    children: d(bt, {
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      animate: Lt,
                                      className: `framer-1o88ibt-container`,
                                      "data-framer-appear-id": `1o88ibt`,
                                      "data-framer-name": `Framer`,
                                      drag: !0,
                                      dragMomentum: !1,
                                      initial: Rt,
                                      name: `Framer`,
                                      nodeId: `Kaw5TskyQ`,
                                      onMouseDown: q,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      whileTap: J,
                                      children: d(k, {
                                        breakpoint: x,
                                        overrides: { rnq5NgttY: { variant: K(`gDeWdU0vc`) } },
                                        children: d(W, {
                                          FuWjfU0M0: It(
                                            {
                                              pixelHeight: 180,
                                              pixelWidth: 180,
                                              src: `../../assets/images/Fa7Ks6pz00sczkXCYO8Qmz7GPA.png`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `Kaw5TskyQ`,
                                          layoutId: `Kaw5TskyQ`,
                                          name: `Framer`,
                                          tv38jHZon: `Figma`,
                                          variant: K(`zeEfkTl__`),
                                          wdrtm9F0v: `https://www.figma.com`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d(k, {
                                breakpoint: x,
                                overrides: { rnq5NgttY: { dismissWithEsc: !1 } },
                                children: d($, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    d(_, {
                                      children: d(k, {
                                        breakpoint: x,
                                        overrides: {
                                          rnq5NgttY: {
                                            width: `78px`,
                                            y: (l?.y || 0) + 0 + 0 + 0 + 40 + 388.9963,
                                          },
                                        },
                                        children: d(j, {
                                          height: 106,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 40 + 836 - 107,
                                          children: h(bt, {
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            animate: Lt,
                                            className: `framer-3jbgml-container`,
                                            "data-framer-appear-id": `3jbgml`,
                                            "data-framer-name": `Resources`,
                                            drag: !0,
                                            dragMomentum: !1,
                                            id: `3jbgml`,
                                            initial: Rt,
                                            name: `Resources`,
                                            nodeId: `ryOZ7NmOs`,
                                            onMouseDown: q,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            whileTap: J,
                                            children: [
                                              d(k, {
                                                breakpoint: x,
                                                overrides: {
                                                  rnq5NgttY: {
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: K(`gDeWdU0vc`),
                                                  },
                                                },
                                                children: d(W, {
                                                  FuWjfU0M0: It(
                                                    {
                                                      pixelHeight: 180,
                                                      pixelWidth: 180,
                                                      src: `../../assets/images/dNUl2Ob68CbdwU9wmtjvGraRyk.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `ryOZ7NmOs`,
                                                  layoutId: `ryOZ7NmOs`,
                                                  name: `Resources`,
                                                  PnV1gLHoy: T({ overlay: e }),
                                                  tv38jHZon: `Resources`,
                                                  variant: K(`zeEfkTl__`),
                                                  width: `100%`,
                                                }),
                                              }),
                                              d(y, {
                                                children:
                                                  e.visible &&
                                                  d(_, {
                                                    children: f(
                                                      d(P, {
                                                        triggerId: `3jbgml`,
                                                        children: h(S, {
                                                          children: [
                                                            d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                rnq5NgttY: { onTap: void 0 },
                                                              },
                                                              children: d(
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
                                                                  className: w(N, `framer-1iy1ziz`),
                                                                  "data-framer-portal-id": `3jbgml`,
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
                                                                  onTap: () => e.hide(),
                                                                },
                                                                `jdCENIEEa`
                                                              ),
                                                            }),
                                                            d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                rnq5NgttY: { width: `80vw` },
                                                              },
                                                              children: d(j, {
                                                                width: `50vw`,
                                                                children: d(yt, {
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  animate: X,
                                                                  className: w(
                                                                    N,
                                                                    `framer-1t0hsw0-container`
                                                                  ),
                                                                  "data-framer-portal-id": `3jbgml`,
                                                                  drag: !0,
                                                                  dragMomentum: !1,
                                                                  exit: Y,
                                                                  inComponentSlot: !0,
                                                                  initial: Z,
                                                                  nodeId: `bTINjlTEP`,
                                                                  onMouseDown: q,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `augiA20Il`,
                                                                  whileTap: J,
                                                                  children: d(V, {
                                                                    height: `100%`,
                                                                    id: `bTINjlTEP`,
                                                                    layoutId: `bTINjlTEP`,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    variant: K(`z9X7fuIiO`),
                                                                    width: `100%`,
                                                                    XrlWiIKIe: E({ overlay: e }),
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
                              }),
                              d(j, {
                                children: d(O, {
                                  className: `framer-977sz9-container`,
                                  isAuthoredByUser: !0,
                                  nodeId: `NSsDzd4Qz`,
                                  scopeId: `augiA20Il`,
                                  children: d(ot, {
                                    cat: `Lucky`,
                                    catClickable: !0,
                                    fleeDistance: 120,
                                    fleeSpeedMultiplier: 1.35,
                                    followCursor: !1,
                                    height: `100%`,
                                    id: `NSsDzd4Qz`,
                                    idleBehavior: `sleep`,
                                    labelColor: `rgb(255, 255, 255)`,
                                    labelFont: {
                                      fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                      fontSize: `14px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `-0.01em`,
                                      lineHeight: `1.2em`,
                                    },
                                    labelText: `You like cats?`,
                                    layoutId: `NSsDzd4Qz`,
                                    pillBackground: `rgba(255, 255, 255, 0.18)`,
                                    pillBorderColor: `rgba(255, 255, 255, 0.2)`,
                                    pillPadding: `6px 6px 6px 12px`,
                                    pillRadius: 999,
                                    rememberChoice: !0,
                                    showLabel: !0,
                                    showShadow: !0,
                                    showToggle: !0,
                                    size: `1.5x`,
                                    speed: 10,
                                    toggleCorner: `bottom-left`,
                                    toggleOffColor: `rgba(0, 0, 0, 0.32)`,
                                    toggleOnColor: `var(--token-34d58044-5fb0-4480-9bc8-4e91d499d8e6, rgb(0, 0, 0))`,
                                    toggleThumbColor: `rgb(255, 255, 255)`,
                                    width: `100%`,
                                    zIndex: 9,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        Te() &&
                          d(`div`, {
                            className: `framer-e4qcek hidden-72rtr7 hidden-1xtmoxo`,
                            "data-framer-name": `Mobile-Icons`,
                            children:
                              Te() &&
                              h(`div`, {
                                className: `framer-1som8tt hidden-72rtr7`,
                                "data-framer-name": `Grid`,
                                children: [
                                  d(k, {
                                    breakpoint: x,
                                    overrides: {
                                      n4CR8pgzs: {
                                        height: 106,
                                        width: `max((max(${l?.width || `100vw`}, 1px) - 20px) / 3, 50px)`,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 40 + 40 + 0 + 0,
                                      },
                                    },
                                    children: d(j, {
                                      children: d(O, {
                                        className: `framer-159j92y-container`,
                                        "data-framer-name": `Framer`,
                                        name: `Framer`,
                                        nodeId: `RD5lUuOgw`,
                                        scopeId: `augiA20Il`,
                                        children: d(W, {
                                          FuWjfU0M0: It(
                                            {
                                              pixelHeight: 2463,
                                              pixelWidth: 2478,
                                              src: `../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-a6a5aa.png`,
                                              srcSet: `../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY.png 512w,../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-7cd4a3.png 1024w,../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-f23bfe.png 2048w,../../assets/images/mZqGpzVPfXwbNcjhjFyqOoyYY-a6a5aa.png 2478w`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `RD5lUuOgw`,
                                          layoutId: `RD5lUuOgw`,
                                          name: `Framer`,
                                          style: { height: `100%`, width: `100%` },
                                          tv38jHZon: `Framer`,
                                          variant: K(`gDeWdU0vc`),
                                          wdrtm9F0v: `https://www.framer.com/@talha-uxd/?tab=marketplace`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(k, {
                                    breakpoint: x,
                                    overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                                    children: d($, {
                                      dismissWithEsc: !0,
                                      children: (e) =>
                                        d(_, {
                                          children: d(k, {
                                            breakpoint: x,
                                            overrides: {
                                              n4CR8pgzs: {
                                                height: 106,
                                                width: `max((max(${l?.width || `100vw`}, 1px) - 20px) / 3, 50px)`,
                                                y: (l?.y || 0) + 0 + 0 + 0 + 40 + 40 + 0 + 0,
                                              },
                                            },
                                            children: d(j, {
                                              children: h(O, {
                                                className: `framer-1qoeoym-container`,
                                                "data-framer-name": `Tips`,
                                                id: `1qoeoym`,
                                                name: `Tips`,
                                                nodeId: `RLxPVakhw`,
                                                scopeId: `augiA20Il`,
                                                children: [
                                                  d(W, {
                                                    FuWjfU0M0: It(
                                                      {
                                                        pixelHeight: 180,
                                                        pixelWidth: 180,
                                                        src: `../../assets/images/mpLoZ8OywwyBRHZrb96PxvZ1Is.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `RLxPVakhw`,
                                                    layoutId: `RLxPVakhw`,
                                                    name: `Tips`,
                                                    PnV1gLHoy: T({ overlay: e }),
                                                    style: { height: `100%`, width: `100%` },
                                                    tv38jHZon: `Tips`,
                                                    variant: K(`gDeWdU0vc`),
                                                    width: `100%`,
                                                  }),
                                                  d(y, {
                                                    children:
                                                      e.visible &&
                                                      d(_, {
                                                        children: f(
                                                          d(P, {
                                                            triggerId: `1qoeoym`,
                                                            children: h(S, {
                                                              children: [
                                                                d(k, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    n4CR8pgzs: { onTap: void 0 },
                                                                  },
                                                                  children: d(
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
                                                                      className: w(
                                                                        N,
                                                                        `framer-hyywli`
                                                                      ),
                                                                      "data-framer-portal-id": `1qoeoym`,
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
                                                                      onTap: () => e.hide(),
                                                                    },
                                                                    `JN4WIKX3D`
                                                                  ),
                                                                }),
                                                                d(k, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    n4CR8pgzs: { width: `100vw` },
                                                                  },
                                                                  children: d(j, {
                                                                    width: `390px`,
                                                                    children: d(k, {
                                                                      breakpoint: x,
                                                                      overrides: {
                                                                        n4CR8pgzs: {
                                                                          animate: $t,
                                                                          exit: Qt,
                                                                          initial: en,
                                                                        },
                                                                      },
                                                                      children: d(O, {
                                                                        className: w(
                                                                          N,
                                                                          `framer-133vod8-container`
                                                                        ),
                                                                        "data-framer-portal-id": `1qoeoym`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `t9ffRgpXa`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `augiA20Il`,
                                                                        children: d(k, {
                                                                          breakpoint: x,
                                                                          overrides: {
                                                                            n4CR8pgzs: {
                                                                              GlJuehv4d: D({
                                                                                overlay: e,
                                                                              }),
                                                                              style: {
                                                                                height: `100%`,
                                                                                width: `100%`,
                                                                              },
                                                                            },
                                                                          },
                                                                          children: d(B, {
                                                                            height: `100%`,
                                                                            id: `t9ffRgpXa`,
                                                                            layoutId: `t9ffRgpXa`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: K(`xFBAIpbDw`),
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
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                  d(`div`, {
                                    className: `framer-1337xyp`,
                                    children: d(M, {
                                      children: d(Gt, {
                                        query: tn(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                { AXve8fDfq: e, id: t, jujDq9vBb: n, VwUa8S3QG: r },
                                                i
                                              ) => (
                                                (n ??= ``),
                                                (e ??= ``),
                                                d(
                                                  b,
                                                  {
                                                    id: `JadpqOjKS-${t}`,
                                                    children: d(R.Provider, {
                                                      value: { AXve8fDfq: e },
                                                      children: d(`div`, {
                                                        className: `framer-fqac1x`,
                                                        children: d($, {
                                                          blockDocumentScrolling: !0,
                                                          dismissWithEsc: !1,
                                                          children: (t) =>
                                                            d(_, {
                                                              children: d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      40 +
                                                                      40 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: d(j, {
                                                                  height: 106,
                                                                  children: h(O, {
                                                                    className: `framer-1atjfyd-container`,
                                                                    id: `${e}-1atjfyd`,
                                                                    nodeId: `asvw8SpDR`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      d(W, {
                                                                        FuWjfU0M0: Ut(r),
                                                                        height: `100%`,
                                                                        id: `asvw8SpDR`,
                                                                        layoutId: `asvw8SpDR`,
                                                                        PnV1gLHoy: T({
                                                                          overlay: t,
                                                                        }),
                                                                        tv38jHZon: n,
                                                                        variant: K(`gDeWdU0vc`),
                                                                        width: `100%`,
                                                                      }),
                                                                      d(y, {
                                                                        children:
                                                                          t.visible &&
                                                                          d(_, {
                                                                            children: f(
                                                                              d(P, {
                                                                                triggerId: `${e}-1atjfyd`,
                                                                                children: h(S, {
                                                                                  children: [
                                                                                    d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-y1hw5q`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-1atjfyd`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                      },
                                                                                      `DYO8c8BjP`
                                                                                    ),
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          width: `390px`,
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className:
                                                                                                      w(
                                                                                                        N,
                                                                                                        `framer-ritq8j-container`
                                                                                                      ),
                                                                                                    "data-framer-portal-id": `${e}-1atjfyd`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `uYFO8Zz9M`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          t,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `sYvE5JIyp`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `uYFO8Zz9M`,
                                                                                                                layoutId: `uYFO8Zz9M`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `xFBAIpbDw`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  d(`div`, {
                                    className: `framer-dwufeu`,
                                    children: d(M, {
                                      children: d(Gt, {
                                        query: nn(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                { AXve8fDfq: e, CCHE89_KJ: t, id: n, jujDq9vBb: r },
                                                i
                                              ) => (
                                                (r ??= ``),
                                                (e ??= ``),
                                                d(
                                                  b,
                                                  {
                                                    id: `rmCal3yK8-${n}`,
                                                    children: d(R.Provider, {
                                                      value: { AXve8fDfq: e },
                                                      children: d(`div`, {
                                                        className: `framer-1elyjfg`,
                                                        children: d($, {
                                                          blockDocumentScrolling: !0,
                                                          dismissWithEsc: !1,
                                                          children: (n) =>
                                                            d(_, {
                                                              children: d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      40 +
                                                                      40 +
                                                                      0 +
                                                                      130 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: d(j, {
                                                                  height: 106,
                                                                  children: h(O, {
                                                                    className: `framer-1bzx5dl-container`,
                                                                    id: `${e}-1bzx5dl`,
                                                                    nodeId: `GcJVMEFqN`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      d(W, {
                                                                        FuWjfU0M0: Ut(t),
                                                                        height: `100%`,
                                                                        id: `GcJVMEFqN`,
                                                                        layoutId: `GcJVMEFqN`,
                                                                        PnV1gLHoy: T({
                                                                          overlay: n,
                                                                        }),
                                                                        tv38jHZon: r,
                                                                        variant: K(`gDeWdU0vc`),
                                                                        width: `100%`,
                                                                      }),
                                                                      d(y, {
                                                                        children:
                                                                          n.visible &&
                                                                          d(_, {
                                                                            children: f(
                                                                              d(P, {
                                                                                triggerId: `${e}-1bzx5dl`,
                                                                                children: h(S, {
                                                                                  children: [
                                                                                    d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-1mrls6c`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-1bzx5dl`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                      },
                                                                                      `IwImow_Dq`
                                                                                    ),
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          width: `390px`,
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className:
                                                                                                      w(
                                                                                                        N,
                                                                                                        `framer-1y2v4rm-container`
                                                                                                      ),
                                                                                                    "data-framer-portal-id": `${e}-1bzx5dl`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `oUmi5EPo8`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          n,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `jT_2IBWAI`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `oUmi5EPo8`,
                                                                                                                layoutId: `oUmi5EPo8`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `xFBAIpbDw`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                  },
                                                  n
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  d($, {
                                    dismissWithEsc: !0,
                                    children: (e) =>
                                      d(_, {
                                        children: d(k, {
                                          breakpoint: x,
                                          overrides: {
                                            n4CR8pgzs: {
                                              height: 106,
                                              width: `max((max(${l?.width || `100vw`}, 1px) - 20px) / 3, 50px)`,
                                              y: (l?.y || 0) + 0 + 0 + 0 + 40 + 40 + 0 + 390,
                                            },
                                          },
                                          children: d(j, {
                                            children: h(O, {
                                              className: `framer-1wjd990-container`,
                                              "data-framer-name": `Music`,
                                              id: `1wjd990`,
                                              name: `Music`,
                                              nodeId: `sJid3e9nX`,
                                              scopeId: `augiA20Il`,
                                              children: [
                                                d(W, {
                                                  FuWjfU0M0: It(
                                                    {
                                                      pixelHeight: 180,
                                                      pixelWidth: 180,
                                                      src: `../../assets/images/S2dPCIKpWlDgRhbT7ZLDwM2v9s.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `sJid3e9nX`,
                                                  layoutId: `sJid3e9nX`,
                                                  name: `Music`,
                                                  PnV1gLHoy: T({ overlay: e }),
                                                  style: { height: `100%`, width: `100%` },
                                                  tv38jHZon: `Music`,
                                                  variant: K(`gDeWdU0vc`),
                                                  width: `100%`,
                                                }),
                                                d(y, {
                                                  children:
                                                    e.visible &&
                                                    d(_, {
                                                      children: f(
                                                        d(P, {
                                                          triggerId: `1wjd990`,
                                                          children: h(S, {
                                                            children: [
                                                              d(
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
                                                                  className: w(N, `framer-v7nkox`),
                                                                  "data-framer-portal-id": `1wjd990`,
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
                                                                  onTap: () => e.hide(),
                                                                },
                                                                `YbMswwume`
                                                              ),
                                                              h(v.div, {
                                                                className: w(N, `framer-z3nv0u`),
                                                                "data-framer-name": `iPod Group`,
                                                                "data-framer-portal-id": `1wjd990`,
                                                                transformTemplate: Vt,
                                                                children: [
                                                                  d(j, {
                                                                    children: d(yt, {
                                                                      __perspectiveFX: !1,
                                                                      __targetOpacity: 1,
                                                                      animate: X,
                                                                      className: `framer-sx73r3-container`,
                                                                      "data-code-component-plugin-id": `84d4c1`,
                                                                      drag: !0,
                                                                      dragMomentum: !1,
                                                                      exit: Y,
                                                                      inComponentSlot: !0,
                                                                      initial: Z,
                                                                      isAuthoredByUser: !0,
                                                                      nodeId: `f11IpZw2V`,
                                                                      onMouseDown: q,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `augiA20Il`,
                                                                      whileTap: J,
                                                                      children: d(pt, {
                                                                        font: {
                                                                          fontFamily: `"CUSTOMV2;Mona Sans Variable ExtraLight", sans-serif`,
                                                                          fontSize: `10px`,
                                                                          letterSpacing: `0em`,
                                                                          lineHeight: `1em`,
                                                                        },
                                                                        height: `100%`,
                                                                        id: `f11IpZw2V`,
                                                                        layoutId: `f11IpZw2V`,
                                                                        ownerName: `Masen James`,
                                                                        size: `default`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        textShadow: !1,
                                                                        theme: `classic`,
                                                                        width: `100%`,
                                                                        youtubeUrl: ``,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  d(v.button, {
                                                                    animate: X,
                                                                    className: `framer-rtt1x5`,
                                                                    "data-framer-name": `Close Button`,
                                                                    "data-reset": `button`,
                                                                    exit: Y,
                                                                    initial: Z,
                                                                    onTap: se({ overlay: e }),
                                                                    children: d(Ke, {
                                                                      animated: !1,
                                                                      className: `framer-1ylufm2`,
                                                                      JEeZYcamG: !0,
                                                                      layoutId: `bS_3rNx34`,
                                                                      P_DcoRcrY: !0,
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
                                      }),
                                  }),
                                  d(`div`, {
                                    className: `framer-tgdpsi`,
                                    children: d(M, {
                                      children: d(Gt, {
                                        query: rn(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                { AXve8fDfq: e, EoVZinw0n: t, id: n, jujDq9vBb: r },
                                                i
                                              ) => (
                                                (r ??= ``),
                                                (e ??= ``),
                                                d(
                                                  b,
                                                  {
                                                    id: `cNVN87fbG-${n}`,
                                                    children: d(R.Provider, {
                                                      value: { AXve8fDfq: e },
                                                      children: d(`div`, {
                                                        className: `framer-tfmxa4`,
                                                        children: d($, {
                                                          blockDocumentScrolling: !0,
                                                          dismissWithEsc: !1,
                                                          children: (n) =>
                                                            d(_, {
                                                              children: d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      40 +
                                                                      40 +
                                                                      0 +
                                                                      130 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: d(j, {
                                                                  height: 106,
                                                                  children: h(O, {
                                                                    className: `framer-1crrx51-container`,
                                                                    id: `${e}-1crrx51`,
                                                                    nodeId: `W4nIPvJWR`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      d(k, {
                                                                        breakpoint: x,
                                                                        overrides: {
                                                                          n4CR8pgzs: {
                                                                            variant: K(`gDeWdU0vc`),
                                                                          },
                                                                        },
                                                                        children: d(W, {
                                                                          FuWjfU0M0: Ut(t),
                                                                          height: `100%`,
                                                                          id: `W4nIPvJWR`,
                                                                          layoutId: `W4nIPvJWR`,
                                                                          PnV1gLHoy: T({
                                                                            overlay: n,
                                                                          }),
                                                                          tv38jHZon: r,
                                                                          variant: K(`zeEfkTl__`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                      d(y, {
                                                                        children:
                                                                          n.visible &&
                                                                          d(_, {
                                                                            children: f(
                                                                              d(P, {
                                                                                triggerId: `${e}-1crrx51`,
                                                                                children: h(S, {
                                                                                  children: [
                                                                                    d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-16yy6ag`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-1crrx51`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                      },
                                                                                      `wgz7WtvzX`
                                                                                    ),
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          width: `390px`,
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className:
                                                                                                      w(
                                                                                                        N,
                                                                                                        `framer-fsn76h-container`
                                                                                                      ),
                                                                                                    "data-framer-portal-id": `${e}-1crrx51`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `VFZ4Ihaps`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          n,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `MoONnKBij`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `VFZ4Ihaps`,
                                                                                                                layoutId: `VFZ4Ihaps`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `xFBAIpbDw`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                  },
                                                  n
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  d(`div`, {
                                    className: `framer-cwlefm`,
                                    children: d(M, {
                                      children: d(Gt, {
                                        query: an(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                { AXve8fDfq: e, EoVZinw0n: t, id: n, jujDq9vBb: r },
                                                i
                                              ) => (
                                                (r ??= ``),
                                                (e ??= ``),
                                                d(
                                                  b,
                                                  {
                                                    id: `t8wyx87Jf-${n}`,
                                                    children: d(R.Provider, {
                                                      value: { AXve8fDfq: e },
                                                      children: d(`div`, {
                                                        className: `framer-9ls1ns`,
                                                        children: d($, {
                                                          blockDocumentScrolling: !0,
                                                          dismissWithEsc: !1,
                                                          children: (n) =>
                                                            d(_, {
                                                              children: d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      40 +
                                                                      40 +
                                                                      0 +
                                                                      130 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: d(j, {
                                                                  height: 106,
                                                                  children: h(O, {
                                                                    className: `framer-1o2a9y9-container`,
                                                                    id: `${e}-1o2a9y9`,
                                                                    nodeId: `TrQCM6b9D`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      d(k, {
                                                                        breakpoint: x,
                                                                        overrides: {
                                                                          n4CR8pgzs: {
                                                                            variant: K(`gDeWdU0vc`),
                                                                          },
                                                                        },
                                                                        children: d(W, {
                                                                          FuWjfU0M0: Ut(t),
                                                                          height: `100%`,
                                                                          id: `TrQCM6b9D`,
                                                                          layoutId: `TrQCM6b9D`,
                                                                          PnV1gLHoy: T({
                                                                            overlay: n,
                                                                          }),
                                                                          tv38jHZon: r,
                                                                          variant: K(`zeEfkTl__`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                      d(y, {
                                                                        children:
                                                                          n.visible &&
                                                                          d(_, {
                                                                            children: f(
                                                                              d(P, {
                                                                                triggerId: `${e}-1o2a9y9`,
                                                                                children: h(S, {
                                                                                  children: [
                                                                                    d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-m7vss4`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-1o2a9y9`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                      },
                                                                                      `HfwZyQy_f`
                                                                                    ),
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          width: `390px`,
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className:
                                                                                                      w(
                                                                                                        N,
                                                                                                        `framer-1vjs1sh-container`
                                                                                                      ),
                                                                                                    "data-framer-portal-id": `${e}-1o2a9y9`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `YZUjV2P_g`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          n,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `PJoCODcPw`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `YZUjV2P_g`,
                                                                                                                layoutId: `YZUjV2P_g`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `xFBAIpbDw`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                  },
                                                  n
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  d(`div`, {
                                    className: `framer-1ccq42h`,
                                    children: d(M, {
                                      children: d(Gt, {
                                        query: on(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                { AXve8fDfq: e, id: t, jujDq9vBb: n, VwUa8S3QG: r },
                                                i
                                              ) => (
                                                (n ??= ``),
                                                (e ??= ``),
                                                d(
                                                  b,
                                                  {
                                                    id: `D_I04W5bi-${t}`,
                                                    children: d(R.Provider, {
                                                      value: { AXve8fDfq: e },
                                                      children: d(`div`, {
                                                        className: `framer-1c08i0l`,
                                                        children: d($, {
                                                          blockDocumentScrolling: !0,
                                                          dismissWithEsc: !1,
                                                          children: (t) =>
                                                            d(_, {
                                                              children: d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      40 +
                                                                      40 +
                                                                      0 +
                                                                      260 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: d(j, {
                                                                  height: 106,
                                                                  children: h(O, {
                                                                    className: `framer-6jfxnf-container`,
                                                                    id: `${e}-6jfxnf`,
                                                                    nodeId: `Roq8r2ike`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      d(k, {
                                                                        breakpoint: x,
                                                                        overrides: {
                                                                          n4CR8pgzs: {
                                                                            variant: K(`gDeWdU0vc`),
                                                                          },
                                                                        },
                                                                        children: d(W, {
                                                                          FuWjfU0M0: Ut(r),
                                                                          height: `100%`,
                                                                          id: `Roq8r2ike`,
                                                                          layoutId: `Roq8r2ike`,
                                                                          PnV1gLHoy: T({
                                                                            overlay: t,
                                                                          }),
                                                                          tv38jHZon: n,
                                                                          variant: K(`zeEfkTl__`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                      d(y, {
                                                                        children:
                                                                          t.visible &&
                                                                          d(_, {
                                                                            children: f(
                                                                              d(P, {
                                                                                triggerId: `${e}-6jfxnf`,
                                                                                children: h(S, {
                                                                                  children: [
                                                                                    d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-lmejfp`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-6jfxnf`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                      },
                                                                                      `Gwz9HdIpR`
                                                                                    ),
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          width: `390px`,
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className:
                                                                                                      w(
                                                                                                        N,
                                                                                                        `framer-1akbqni-container`
                                                                                                      ),
                                                                                                    "data-framer-portal-id": `${e}-6jfxnf`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `S9_AeE1yO`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          t,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `SIhoy4QgR`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `S9_AeE1yO`,
                                                                                                                layoutId: `S9_AeE1yO`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `xFBAIpbDw`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  d($, {
                                    dismissWithEsc: !0,
                                    children: (e) =>
                                      d(_, {
                                        children: d(k, {
                                          breakpoint: x,
                                          overrides: {
                                            n4CR8pgzs: {
                                              height: 106,
                                              width: `max((max(${l?.width || `100vw`}, 1px) - 20px) / 3, 50px)`,
                                              y: (l?.y || 0) + 0 + 0 + 0 + 40 + 40 + 0 + 260,
                                            },
                                          },
                                          children: d(j, {
                                            children: h(O, {
                                              className: `framer-1pfipj9-container`,
                                              "data-framer-name": `Movies`,
                                              id: `1pfipj9`,
                                              name: `Movies`,
                                              nodeId: `ZJ8l5hwFU`,
                                              scopeId: `augiA20Il`,
                                              children: [
                                                d(W, {
                                                  FuWjfU0M0: It(
                                                    {
                                                      pixelHeight: 554,
                                                      pixelWidth: 554,
                                                      src: `../../assets/images/sXPlJD56ya7bPccebTOcaoSqJ48-faae87.png`,
                                                      srcSet: `../../assets/images/sXPlJD56ya7bPccebTOcaoSqJ48.png 512w,../../assets/images/sXPlJD56ya7bPccebTOcaoSqJ48-faae87.png 554w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `ZJ8l5hwFU`,
                                                  layoutId: `ZJ8l5hwFU`,
                                                  name: `Movies`,
                                                  PnV1gLHoy: T({ overlay: e }),
                                                  style: { height: `100%`, width: `100%` },
                                                  tv38jHZon: `Interstellar`,
                                                  variant: K(`gDeWdU0vc`),
                                                  width: `100%`,
                                                }),
                                                d(y, {
                                                  children:
                                                    e.visible &&
                                                    d(_, {
                                                      children: f(
                                                        d(P, {
                                                          triggerId: `1pfipj9`,
                                                          children: h(S, {
                                                            children: [
                                                              d(
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
                                                                  className: w(N, `framer-1ophgzs`),
                                                                  "data-framer-portal-id": `1pfipj9`,
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
                                                                  onTap: () => e.hide(),
                                                                },
                                                                `o4VPFcQnF`
                                                              ),
                                                              d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: { width: `100vw` },
                                                                },
                                                                children: d(j, {
                                                                  width: `390px`,
                                                                  children: d(k, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      n4CR8pgzs: {
                                                                        animate: $t,
                                                                        exit: Qt,
                                                                        initial: en,
                                                                      },
                                                                    },
                                                                    children: d(O, {
                                                                      className: w(
                                                                        N,
                                                                        `framer-4i47qg-container`
                                                                      ),
                                                                      "data-framer-portal-id": `1pfipj9`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `cuKvgu87b`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `augiA20Il`,
                                                                      children: d(k, {
                                                                        breakpoint: x,
                                                                        overrides: {
                                                                          n4CR8pgzs: {
                                                                            GlJuehv4d: D({
                                                                              overlay: e,
                                                                            }),
                                                                            style: {
                                                                              height: `100%`,
                                                                              width: `100%`,
                                                                            },
                                                                            variant: K(`f8S9mRU9l`),
                                                                          },
                                                                        },
                                                                        children: d(B, {
                                                                          height: `100%`,
                                                                          id: `cuKvgu87b`,
                                                                          layoutId: `cuKvgu87b`,
                                                                          style: { width: `100%` },
                                                                          variant: K(`xFBAIpbDw`),
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
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  d(`div`, {
                                    className: `framer-4ybn4b`,
                                    children: d(M, {
                                      children: d(Gt, {
                                        query: sn(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                { AXve8fDfq: e, id: t, jujDq9vBb: n, VwUa8S3QG: r },
                                                i
                                              ) => (
                                                (n ??= ``),
                                                (e ??= ``),
                                                d(
                                                  b,
                                                  {
                                                    id: `HWu8hax9m-${t}`,
                                                    children: d(R.Provider, {
                                                      value: { AXve8fDfq: e },
                                                      children: d(`div`, {
                                                        className: `framer-1pno0an`,
                                                        children: d($, {
                                                          blockDocumentScrolling: !0,
                                                          dismissWithEsc: !1,
                                                          children: (t) =>
                                                            d(_, {
                                                              children: d(k, {
                                                                breakpoint: x,
                                                                overrides: {
                                                                  n4CR8pgzs: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      40 +
                                                                      40 +
                                                                      0 +
                                                                      260 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: d(j, {
                                                                  height: 106,
                                                                  children: h(O, {
                                                                    className: `framer-zlfo0x-container`,
                                                                    id: `${e}-zlfo0x`,
                                                                    nodeId: `sHODqe3Xv`,
                                                                    scopeId: `augiA20Il`,
                                                                    children: [
                                                                      d(k, {
                                                                        breakpoint: x,
                                                                        overrides: {
                                                                          n4CR8pgzs: {
                                                                            variant: K(`gDeWdU0vc`),
                                                                          },
                                                                        },
                                                                        children: d(W, {
                                                                          FuWjfU0M0: Ut(r),
                                                                          height: `100%`,
                                                                          id: `sHODqe3Xv`,
                                                                          layoutId: `sHODqe3Xv`,
                                                                          PnV1gLHoy: T({
                                                                            overlay: t,
                                                                          }),
                                                                          tv38jHZon: n,
                                                                          variant: K(`zeEfkTl__`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                      d(y, {
                                                                        children:
                                                                          t.visible &&
                                                                          d(_, {
                                                                            children: f(
                                                                              d(P, {
                                                                                triggerId: `${e}-zlfo0x`,
                                                                                children: h(S, {
                                                                                  children: [
                                                                                    d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.4,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-15yn2k4`
                                                                                          ),
                                                                                        "data-framer-portal-id": `${e}-zlfo0x`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0.4,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                      },
                                                                                      `WNvGAcsnH`
                                                                                    ),
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          width: `390px`,
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className:
                                                                                                      w(
                                                                                                        N,
                                                                                                        `framer-2cqab1-container`
                                                                                                      ),
                                                                                                    "data-framer-portal-id": `${e}-zlfo0x`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `fbccFtSL5`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          t,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `fbccFtSL5`,
                                                                                                                layoutId: `fbccFtSL5`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `w6QT7zDIq`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                                  },
                                                  t
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                  d(k, {
                                    breakpoint: x,
                                    overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                                    children: d($, {
                                      dismissWithEsc: !0,
                                      children: (e) =>
                                        d(_, {
                                          children: d(k, {
                                            breakpoint: x,
                                            overrides: {
                                              n4CR8pgzs: {
                                                height: 106,
                                                width: `max((max(${l?.width || `100vw`}, 1px) - 20px) / 3, 50px)`,
                                                y: (l?.y || 0) + 0 + 0 + 0 + 40 + 40 + 0 + 390,
                                              },
                                            },
                                            children: d(j, {
                                              children: h(O, {
                                                className: `framer-17rmc66-container`,
                                                "data-framer-name": `Resources`,
                                                id: `17rmc66`,
                                                name: `Resources`,
                                                nodeId: `mSj054R5V`,
                                                scopeId: `augiA20Il`,
                                                children: [
                                                  d(W, {
                                                    FuWjfU0M0: It(
                                                      {
                                                        pixelHeight: 180,
                                                        pixelWidth: 180,
                                                        src: `../../assets/images/dNUl2Ob68CbdwU9wmtjvGraRyk.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `mSj054R5V`,
                                                    layoutId: `mSj054R5V`,
                                                    name: `Resources`,
                                                    PnV1gLHoy: T({ overlay: e }),
                                                    style: { height: `100%`, width: `100%` },
                                                    tv38jHZon: `Resources`,
                                                    variant: K(`gDeWdU0vc`),
                                                    width: `100%`,
                                                  }),
                                                  d(y, {
                                                    children:
                                                      e.visible &&
                                                      d(_, {
                                                        children: f(
                                                          d(P, {
                                                            triggerId: `17rmc66`,
                                                            children: h(S, {
                                                              children: [
                                                                d(k, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    n4CR8pgzs: { onTap: void 0 },
                                                                  },
                                                                  children: d(
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
                                                                      className: w(
                                                                        N,
                                                                        `framer-1421jra`
                                                                      ),
                                                                      "data-framer-portal-id": `17rmc66`,
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
                                                                      onTap: () => e.hide(),
                                                                    },
                                                                    `BlHM078VD`
                                                                  ),
                                                                }),
                                                                d(j, {
                                                                  width: `100vw`,
                                                                  children: d(k, {
                                                                    breakpoint: x,
                                                                    overrides: {
                                                                      n4CR8pgzs: {
                                                                        animate: $t,
                                                                        exit: Qt,
                                                                        initial: en,
                                                                      },
                                                                    },
                                                                    children: d(O, {
                                                                      className: w(
                                                                        N,
                                                                        `framer-ki6mc4-container`
                                                                      ),
                                                                      "data-framer-portal-id": `17rmc66`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `LyhMa1q8H`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `augiA20Il`,
                                                                      children: d(B, {
                                                                        GlJuehv4d: D({
                                                                          overlay: e,
                                                                        }),
                                                                        height: `100%`,
                                                                        id: `LyhMa1q8H`,
                                                                        layoutId: `LyhMa1q8H`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        variant: K(`ACvzUo2E_`),
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
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  }),
                                  d(k, {
                                    breakpoint: x,
                                    overrides: {
                                      n4CR8pgzs: {
                                        width: `max((max(${l?.width || `100vw`}, 1px) - 20px) / 3, 50px)`,
                                        y: (l?.y || 0) + 0 + 0 + 0 + 40 + 40 + 0 + 390,
                                      },
                                    },
                                    children: d(j, {
                                      height: 106,
                                      children: d(O, {
                                        className: `framer-14g72fg-container`,
                                        "data-framer-name": `Framer`,
                                        name: `Framer`,
                                        nodeId: `cHV_6_oZs`,
                                        scopeId: `augiA20Il`,
                                        children: d(W, {
                                          FuWjfU0M0: It(
                                            {
                                              pixelHeight: 180,
                                              pixelWidth: 180,
                                              src: `../../assets/images/Fa7Ks6pz00sczkXCYO8Qmz7GPA.png`,
                                            },
                                            ``
                                          ),
                                          height: `100%`,
                                          id: `cHV_6_oZs`,
                                          layoutId: `cHV_6_oZs`,
                                          name: `Framer`,
                                          style: { width: `100%` },
                                          tv38jHZon: `Figma`,
                                          variant: K(`gDeWdU0vc`),
                                          wdrtm9F0v: `https://www.figma.com`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          }),
                        h(`div`, {
                          className: `framer-1tfeb7x`,
                          "data-framer-name": `DockNav`,
                          children: [
                            Te() &&
                              d(k, {
                                breakpoint: x,
                                overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                                children: d($, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    d(_, {
                                      children: d(k, {
                                        breakpoint: x,
                                        overrides: {
                                          n4CR8pgzs: {
                                            height: 22,
                                            y: (l?.y || 0) + 0 + 0 + 0 + 854 + 0 + 0,
                                          },
                                        },
                                        children: d(j, {
                                          children: h(O, {
                                            className: `framer-ljmpyy-container hidden-72rtr7 hidden-1xtmoxo`,
                                            id: `ljmpyy`,
                                            nodeId: `Zzw7XhQXY`,
                                            scopeId: `augiA20Il`,
                                            children: [
                                              d(et, {
                                                ffGBqMX3l: le({ overlay: e }),
                                                height: `100%`,
                                                id: `Zzw7XhQXY`,
                                                layoutId: `Zzw7XhQXY`,
                                                width: `100%`,
                                              }),
                                              d(y, {
                                                children:
                                                  e.visible &&
                                                  d(_, {
                                                    children: f(
                                                      d(P, {
                                                        triggerId: `ljmpyy`,
                                                        children: h(S, {
                                                          children: [
                                                            d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                n4CR8pgzs: { onTap: void 0 },
                                                              },
                                                              children: d(
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
                                                                  className: w(N, `framer-ww5dmr`),
                                                                  "data-framer-portal-id": `ljmpyy`,
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
                                                                  onTap: () => e.hide(),
                                                                },
                                                                `FbcUQYcFH`
                                                              ),
                                                            }),
                                                            xe() &&
                                                              d(j, {
                                                                width: `578px`,
                                                                children: d(O, {
                                                                  className: `${w(N, `framer-9uzb6w-container`)} hidden-i6834s`,
                                                                  "data-framer-portal-id": `ljmpyy`,
                                                                  inComponentSlot: !0,
                                                                  nodeId: `xJ_0qgPw4`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `augiA20Il`,
                                                                  children: d(Ce, {
                                                                    height: `100%`,
                                                                    id: `xJ_0qgPw4`,
                                                                    layoutId: `xJ_0qgPw4`,
                                                                    style: { width: `100%` },
                                                                    variant: K(`GqStQoe42`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                n4CR8pgzs: { width: `100vw` },
                                                              },
                                                              children: d(j, {
                                                                width: `390px`,
                                                                children: d(k, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    n4CR8pgzs: {
                                                                      animate: X,
                                                                      exit: cn,
                                                                      initial: en,
                                                                    },
                                                                  },
                                                                  children: d(O, {
                                                                    className: w(
                                                                      N,
                                                                      `framer-vlefdf-container`
                                                                    ),
                                                                    "data-framer-portal-id": `ljmpyy`,
                                                                    inComponentSlot: !0,
                                                                    nodeId: `lWQobA3iA`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `augiA20Il`,
                                                                    children: d(k, {
                                                                      breakpoint: x,
                                                                      overrides: {
                                                                        n4CR8pgzs: {
                                                                          GlJuehv4d: D({
                                                                            overlay: e,
                                                                          }),
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          variant: K(`AoqONIBG8`),
                                                                        },
                                                                      },
                                                                      children: d(B, {
                                                                        height: `100%`,
                                                                        id: `lWQobA3iA`,
                                                                        layoutId: `lWQobA3iA`,
                                                                        style: { width: `100%` },
                                                                        variant: K(`MoONnKBij`),
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
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            d(k, {
                              breakpoint: x,
                              overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                              children: d($, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  d(k, {
                                    breakpoint: x,
                                    overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                                    children: d($, {
                                      dismissWithEsc: !0,
                                      children: (t) =>
                                        d(k, {
                                          breakpoint: x,
                                          overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                                          children: d($, {
                                            dismissWithEsc: !0,
                                            children: (n) =>
                                              d(k, {
                                                breakpoint: x,
                                                overrides: { n4CR8pgzs: { dismissWithEsc: !1 } },
                                                children: d($, {
                                                  dismissWithEsc: !0,
                                                  children: (r) =>
                                                    d(k, {
                                                      breakpoint: x,
                                                      overrides: {
                                                        n4CR8pgzs: { dismissWithEsc: !1 },
                                                      },
                                                      children: d($, {
                                                        dismissWithEsc: !0,
                                                        children: (i) =>
                                                          d(_, {
                                                            children: d(k, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                n4CR8pgzs: {
                                                                  y:
                                                                    (l?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    854 +
                                                                    0 +
                                                                    46,
                                                                },
                                                              },
                                                              children: d(j, {
                                                                height: 76,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  876 +
                                                                  24 +
                                                                  0,
                                                                children: h(O, {
                                                                  className: `framer-fa8ie5-container`,
                                                                  id: `fa8ie5`,
                                                                  nodeId: `S3ap5Coq6`,
                                                                  scopeId: `augiA20Il`,
                                                                  children: [
                                                                    d(k, {
                                                                      breakpoint: x,
                                                                      overrides: {
                                                                        n4CR8pgzs: {
                                                                          variant: K(`VA0wD7VMq`),
                                                                        },
                                                                      },
                                                                      children: d(Ae, {
                                                                        height: `100%`,
                                                                        id: `S3ap5Coq6`,
                                                                        layoutId: `S3ap5Coq6`,
                                                                        M_nVROFeh: A({
                                                                          overlay: i,
                                                                        }),
                                                                        mpocvNeVh: ye({
                                                                          overlay: e,
                                                                        }),
                                                                        ngqPmxnQO: ve({
                                                                          overlay: t,
                                                                        }),
                                                                        nQDhkiYgL: ge({
                                                                          overlay: n,
                                                                        }),
                                                                        SSFbg9Im0: he({
                                                                          overlay: r,
                                                                        }),
                                                                        variant: K(`DdcJUIQiX`),
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                    d(y, {
                                                                      children:
                                                                        i.visible &&
                                                                        d(_, {
                                                                          children: f(
                                                                            d(P, {
                                                                              triggerId: `fa8ie5`,
                                                                              children: h(S, {
                                                                                children: [
                                                                                  d(k, {
                                                                                    breakpoint: x,
                                                                                    overrides: {
                                                                                      n4CR8pgzs: {
                                                                                        onTap:
                                                                                          void 0,
                                                                                      },
                                                                                    },
                                                                                    children: d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-i7wfkp`
                                                                                          ),
                                                                                        "data-framer-name": `About-Overlay`,
                                                                                        "data-framer-portal-id": `fa8ie5`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          i.hide(),
                                                                                      },
                                                                                      `cry8rkjVR`
                                                                                    ),
                                                                                  }),
                                                                                  xe() &&
                                                                                    d(j, {
                                                                                      width: `55vw`,
                                                                                      children: d(
                                                                                        yt,
                                                                                        {
                                                                                          __perspectiveFX:
                                                                                            !1,
                                                                                          __targetOpacity: 1,
                                                                                          animate:
                                                                                            X,
                                                                                          className: `${w(N, `framer-iugmq5-container`)} hidden-i6834s`,
                                                                                          "data-framer-portal-id": `fa8ie5`,
                                                                                          drag: !0,
                                                                                          dragMomentum:
                                                                                            !1,
                                                                                          exit: Y,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          initial:
                                                                                            Z,
                                                                                          nodeId: `t2kUh6s61`,
                                                                                          onMouseDown:
                                                                                            q,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `augiA20Il`,
                                                                                          whileTap:
                                                                                            J,
                                                                                          children:
                                                                                            d(V, {
                                                                                              height: `100%`,
                                                                                              id: `t2kUh6s61`,
                                                                                              layoutId: `t2kUh6s61`,
                                                                                              style:
                                                                                                {
                                                                                                  height: `100%`,
                                                                                                  width: `100%`,
                                                                                                },
                                                                                              variant:
                                                                                                K(
                                                                                                  `oCi1bB4zu`
                                                                                                ),
                                                                                              width: `100%`,
                                                                                              XrlWiIKIe:
                                                                                                E({
                                                                                                  overlay:
                                                                                                    i,
                                                                                                }),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  Te() &&
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className: `${w(N, `framer-1901r0f-container`)} hidden-72rtr7 hidden-1xtmoxo`,
                                                                                                    "data-framer-portal-id": `fa8ie5`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `PH_UGwQpd`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        B,
                                                                                                        {
                                                                                                          GlJuehv4d:
                                                                                                            D(
                                                                                                              {
                                                                                                                overlay:
                                                                                                                  i,
                                                                                                              }
                                                                                                            ),
                                                                                                          height: `100%`,
                                                                                                          id: `PH_UGwQpd`,
                                                                                                          layoutId: `PH_UGwQpd`,
                                                                                                          style:
                                                                                                            {
                                                                                                              height: `100%`,
                                                                                                              width: `100%`,
                                                                                                            },
                                                                                                          variant:
                                                                                                            K(
                                                                                                              `ce12qW5OT`
                                                                                                            ),
                                                                                                          width: `100%`,
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                ],
                                                                              }),
                                                                            }),
                                                                            Q()
                                                                          ),
                                                                        }),
                                                                    }),
                                                                    d(y, {
                                                                      children:
                                                                        r.visible &&
                                                                        d(_, {
                                                                          children: f(
                                                                            d(P, {
                                                                              triggerId: `fa8ie5`,
                                                                              children: h(S, {
                                                                                children: [
                                                                                  d(k, {
                                                                                    breakpoint: x,
                                                                                    overrides: {
                                                                                      n4CR8pgzs: {
                                                                                        onTap:
                                                                                          void 0,
                                                                                      },
                                                                                    },
                                                                                    children: d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-7vnyqt`
                                                                                          ),
                                                                                        "data-framer-name": `Project-Overlay`,
                                                                                        "data-framer-portal-id": `fa8ie5`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          r.hide(),
                                                                                      },
                                                                                      `bPpKo43nk`
                                                                                    ),
                                                                                  }),
                                                                                  xe() &&
                                                                                    d(j, {
                                                                                      width: `55vw`,
                                                                                      children: d(
                                                                                        yt,
                                                                                        {
                                                                                          __perspectiveFX:
                                                                                            !1,
                                                                                          __targetOpacity: 1,
                                                                                          animate:
                                                                                            X,
                                                                                          className: `${w(N, `framer-22cczc-container`)} hidden-i6834s`,
                                                                                          "data-framer-portal-id": `fa8ie5`,
                                                                                          drag: !0,
                                                                                          dragMomentum:
                                                                                            !1,
                                                                                          exit: Y,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          initial:
                                                                                            Z,
                                                                                          nodeId: `ENrRQk1X6`,
                                                                                          onMouseDown:
                                                                                            q,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `augiA20Il`,
                                                                                          whileTap:
                                                                                            J,
                                                                                          children:
                                                                                            d(V, {
                                                                                              height: `100%`,
                                                                                              id: `ENrRQk1X6`,
                                                                                              layoutId: `ENrRQk1X6`,
                                                                                              style:
                                                                                                {
                                                                                                  height: `100%`,
                                                                                                  width: `100%`,
                                                                                                },
                                                                                              variant:
                                                                                                K(
                                                                                                  `erhMUPQJh`
                                                                                                ),
                                                                                              width: `100%`,
                                                                                              XrlWiIKIe:
                                                                                                E({
                                                                                                  overlay:
                                                                                                    r,
                                                                                                }),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  Te() &&
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className: `${w(N, `framer-m5oho8-container`)} hidden-72rtr7 hidden-1xtmoxo`,
                                                                                                    "data-framer-portal-id": `fa8ie5`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `y7CwPdBqC`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `Fd3AJA_pa`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                GlJuehv4d:
                                                                                                                  D(
                                                                                                                    {
                                                                                                                      overlay:
                                                                                                                        r,
                                                                                                                    }
                                                                                                                  ),
                                                                                                                height: `100%`,
                                                                                                                id: `y7CwPdBqC`,
                                                                                                                layoutId: `y7CwPdBqC`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    height: `100%`,
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `BizGTU2hQ`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                ],
                                                                              }),
                                                                            }),
                                                                            Q()
                                                                          ),
                                                                        }),
                                                                    }),
                                                                    d(y, {
                                                                      children:
                                                                        n.visible &&
                                                                        d(_, {
                                                                          children: f(
                                                                            d(P, {
                                                                              triggerId: `fa8ie5`,
                                                                              children: h(S, {
                                                                                children: [
                                                                                  d(k, {
                                                                                    breakpoint: x,
                                                                                    overrides: {
                                                                                      n4CR8pgzs: {
                                                                                        onTap:
                                                                                          void 0,
                                                                                      },
                                                                                    },
                                                                                    children: d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-1f5z9r5`
                                                                                          ),
                                                                                        "data-framer-name": `reel-overlay`,
                                                                                        "data-framer-portal-id": `fa8ie5`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          n.hide(),
                                                                                      },
                                                                                      `SdTytBxwJ`
                                                                                    ),
                                                                                  }),
                                                                                  xe() &&
                                                                                    d(j, {
                                                                                      width: `55vw`,
                                                                                      children: d(
                                                                                        yt,
                                                                                        {
                                                                                          __perspectiveFX:
                                                                                            !1,
                                                                                          __targetOpacity: 1,
                                                                                          animate:
                                                                                            X,
                                                                                          className: `${w(N, `framer-sokgyf-container`)} hidden-i6834s`,
                                                                                          "data-framer-portal-id": `fa8ie5`,
                                                                                          drag: !0,
                                                                                          dragMomentum:
                                                                                            !1,
                                                                                          exit: Y,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          initial:
                                                                                            Z,
                                                                                          nodeId: `nFuxGlHXn`,
                                                                                          onMouseDown:
                                                                                            q,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `augiA20Il`,
                                                                                          whileTap:
                                                                                            J,
                                                                                          children:
                                                                                            d(V, {
                                                                                              height: `100%`,
                                                                                              id: `nFuxGlHXn`,
                                                                                              layoutId: `nFuxGlHXn`,
                                                                                              style:
                                                                                                {
                                                                                                  height: `100%`,
                                                                                                  width: `100%`,
                                                                                                },
                                                                                              variant:
                                                                                                K(
                                                                                                  `OLS50c4bW`
                                                                                                ),
                                                                                              width: `100%`,
                                                                                              XrlWiIKIe:
                                                                                                E({
                                                                                                  overlay:
                                                                                                    n,
                                                                                                }),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  Te() &&
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className: `${w(N, `framer-gdq7tt-container`)} hidden-72rtr7 hidden-1xtmoxo`,
                                                                                                    "data-framer-portal-id": `fa8ie5`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `nTuyfRINh`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `k8B40ZPzd`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                GlJuehv4d:
                                                                                                                  D(
                                                                                                                    {
                                                                                                                      overlay:
                                                                                                                        n,
                                                                                                                    }
                                                                                                                  ),
                                                                                                                height: `100%`,
                                                                                                                id: `nTuyfRINh`,
                                                                                                                layoutId: `nTuyfRINh`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    height: `100%`,
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `BizGTU2hQ`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                ],
                                                                              }),
                                                                            }),
                                                                            Q()
                                                                          ),
                                                                        }),
                                                                    }),
                                                                    d(y, {
                                                                      children:
                                                                        t.visible &&
                                                                        d(_, {
                                                                          children: f(
                                                                            d(P, {
                                                                              triggerId: `fa8ie5`,
                                                                              children: h(S, {
                                                                                children: [
                                                                                  d(k, {
                                                                                    breakpoint: x,
                                                                                    overrides: {
                                                                                      n4CR8pgzs: {
                                                                                        onTap:
                                                                                          void 0,
                                                                                      },
                                                                                    },
                                                                                    children: d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-16njwiv`
                                                                                          ),
                                                                                        "data-framer-name": `Contact-Overlay`,
                                                                                        "data-framer-portal-id": `fa8ie5`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          t.hide(),
                                                                                      },
                                                                                      `EKcHU6SFO`
                                                                                    ),
                                                                                  }),
                                                                                  xe() &&
                                                                                    d(j, {
                                                                                      width: `50vw`,
                                                                                      children: d(
                                                                                        O,
                                                                                        {
                                                                                          animate:
                                                                                            X,
                                                                                          className: `${w(N, `framer-71fumc-container`)} hidden-i6834s`,
                                                                                          "data-framer-portal-id": `fa8ie5`,
                                                                                          exit: Y,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          initial:
                                                                                            Z,
                                                                                          nodeId: `qYOc0COT5`,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `augiA20Il`,
                                                                                          children:
                                                                                            d(V, {
                                                                                              height: `100%`,
                                                                                              id: `qYOc0COT5`,
                                                                                              layoutId: `qYOc0COT5`,
                                                                                              style:
                                                                                                {
                                                                                                  height: `100%`,
                                                                                                  width: `100%`,
                                                                                                },
                                                                                              variant:
                                                                                                K(
                                                                                                  `aiLuop0Fp`
                                                                                                ),
                                                                                              width: `100%`,
                                                                                              XrlWiIKIe:
                                                                                                E({
                                                                                                  overlay:
                                                                                                    t,
                                                                                                }),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  Te() &&
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className: `${w(N, `framer-5pz29n-container`)} hidden-72rtr7 hidden-1xtmoxo`,
                                                                                                    "data-framer-portal-id": `fa8ie5`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `C7gI9stwJ`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  GlJuehv4d:
                                                                                                                    D(
                                                                                                                      {
                                                                                                                        overlay:
                                                                                                                          t,
                                                                                                                      }
                                                                                                                    ),
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `BizGTU2hQ`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                height: `100%`,
                                                                                                                id: `C7gI9stwJ`,
                                                                                                                layoutId: `C7gI9stwJ`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `MoONnKBij`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                ],
                                                                              }),
                                                                            }),
                                                                            Q()
                                                                          ),
                                                                        }),
                                                                    }),
                                                                    d(y, {
                                                                      children:
                                                                        e.visible &&
                                                                        d(_, {
                                                                          children: f(
                                                                            d(P, {
                                                                              triggerId: `fa8ie5`,
                                                                              children: h(S, {
                                                                                children: [
                                                                                  d(k, {
                                                                                    breakpoint: x,
                                                                                    overrides: {
                                                                                      n4CR8pgzs: {
                                                                                        onTap:
                                                                                          void 0,
                                                                                      },
                                                                                    },
                                                                                    children: d(
                                                                                      v.div,
                                                                                      {
                                                                                        animate: {
                                                                                          opacity: 1,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.5,
                                                                                                0,
                                                                                                0.88,
                                                                                                0.77,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        className:
                                                                                          w(
                                                                                            N,
                                                                                            `framer-bxrbtv`
                                                                                          ),
                                                                                        "data-framer-name": `Gallery-Overlay`,
                                                                                        "data-framer-portal-id": `fa8ie5`,
                                                                                        exit: {
                                                                                          opacity: 0,
                                                                                          transition:
                                                                                            {
                                                                                              delay: 0,
                                                                                              duration: 0,
                                                                                              ease: [
                                                                                                0.12,
                                                                                                0.23,
                                                                                                0.5,
                                                                                                1,
                                                                                              ],
                                                                                              type: `tween`,
                                                                                            },
                                                                                        },
                                                                                        initial: {
                                                                                          opacity: 0,
                                                                                        },
                                                                                        onTap: () =>
                                                                                          e.hide(),
                                                                                      },
                                                                                      `wGGYeQYsU`
                                                                                    ),
                                                                                  }),
                                                                                  xe() &&
                                                                                    d(j, {
                                                                                      width: `55vw`,
                                                                                      children: d(
                                                                                        yt,
                                                                                        {
                                                                                          __perspectiveFX:
                                                                                            !1,
                                                                                          __targetOpacity: 1,
                                                                                          animate:
                                                                                            X,
                                                                                          className: `${w(N, `framer-15hiymd-container`)} hidden-i6834s`,
                                                                                          "data-framer-portal-id": `fa8ie5`,
                                                                                          drag: !0,
                                                                                          dragMomentum:
                                                                                            !1,
                                                                                          exit: Y,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          initial:
                                                                                            Z,
                                                                                          nodeId: `r5UMCFqBS`,
                                                                                          onMouseDown:
                                                                                            q,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `augiA20Il`,
                                                                                          whileTap:
                                                                                            J,
                                                                                          children:
                                                                                            d(V, {
                                                                                              height: `100%`,
                                                                                              id: `r5UMCFqBS`,
                                                                                              layoutId: `r5UMCFqBS`,
                                                                                              style:
                                                                                                {
                                                                                                  height: `100%`,
                                                                                                  width: `100%`,
                                                                                                },
                                                                                              variant:
                                                                                                K(
                                                                                                  `vWfdkeKCq`
                                                                                                ),
                                                                                              width: `100%`,
                                                                                              XrlWiIKIe:
                                                                                                E({
                                                                                                  overlay:
                                                                                                    e,
                                                                                                }),
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  Te() &&
                                                                                    d(k, {
                                                                                      breakpoint: x,
                                                                                      overrides: {
                                                                                        n4CR8pgzs: {
                                                                                          width: `100vw`,
                                                                                        },
                                                                                      },
                                                                                      children: d(
                                                                                        j,
                                                                                        {
                                                                                          children:
                                                                                            d(k, {
                                                                                              breakpoint:
                                                                                                x,
                                                                                              overrides:
                                                                                                {
                                                                                                  n4CR8pgzs:
                                                                                                    {
                                                                                                      animate:
                                                                                                        $t,
                                                                                                      exit: Qt,
                                                                                                      initial:
                                                                                                        en,
                                                                                                    },
                                                                                                },
                                                                                              children:
                                                                                                d(
                                                                                                  O,
                                                                                                  {
                                                                                                    className: `${w(N, `framer-1m3yol8-container`)} hidden-72rtr7 hidden-1xtmoxo`,
                                                                                                    "data-framer-portal-id": `fa8ie5`,
                                                                                                    inComponentSlot:
                                                                                                      !0,
                                                                                                    nodeId: `ajeipGYmm`,
                                                                                                    rendersWithMotion:
                                                                                                      !0,
                                                                                                    scopeId: `augiA20Il`,
                                                                                                    children:
                                                                                                      d(
                                                                                                        k,
                                                                                                        {
                                                                                                          breakpoint:
                                                                                                            x,
                                                                                                          overrides:
                                                                                                            {
                                                                                                              n4CR8pgzs:
                                                                                                                {
                                                                                                                  style:
                                                                                                                    {
                                                                                                                      height: `100%`,
                                                                                                                      width: `100%`,
                                                                                                                    },
                                                                                                                  variant:
                                                                                                                    K(
                                                                                                                      `TJfgXmN3q`
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                          children:
                                                                                                            d(
                                                                                                              B,
                                                                                                              {
                                                                                                                GlJuehv4d:
                                                                                                                  D(
                                                                                                                    {
                                                                                                                      overlay:
                                                                                                                        e,
                                                                                                                    }
                                                                                                                  ),
                                                                                                                height: `100%`,
                                                                                                                id: `ajeipGYmm`,
                                                                                                                layoutId: `ajeipGYmm`,
                                                                                                                style:
                                                                                                                  {
                                                                                                                    width: `100%`,
                                                                                                                  },
                                                                                                                variant:
                                                                                                                  K(
                                                                                                                    `MoONnKBij`
                                                                                                                  ),
                                                                                                                width: `100%`,
                                                                                                              }
                                                                                                            ),
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }),
                                                                                        }
                                                                                      ),
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
                                          }),
                                        }),
                                    }),
                                  }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Ono4S.framer-lux5qc, .framer-Ono4S .framer-lux5qc { display: block; }`,
        `.framer-Ono4S.framer-72rtr7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1400px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Ono4S .framer-ikr6mf { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%); flex: none; height: 102vh; left: calc(50.00000000000002% - 102% / 2); overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: calc(50.00000000000002% - 102vh / 2); width: 102%; z-index: 1; }`,
        `.framer-Ono4S .framer-1ikkr7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - 102% / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: fixed; top: 0px; width: 102%; z-index: 10; }`,
        `.framer-Ono4S .framer-fkzdvp-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-Ono4S .framer-1gjeq3t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ono4S .framer-slikr0-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ono4S .framer-2d1fr7 { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-Ono4S .framer-12rwxs8-container { bottom: 30px; cursor: grab; flex: none; height: auto; left: 45px; position: absolute; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-134hntk, .framer-Ono4S.framer-1bg4cjo, .framer-Ono4S.framer-1n4myvo, .framer-Ono4S.framer-16riirb, .framer-Ono4S.framer-1iy1ziz, .framer-Ono4S.framer-hyywli, .framer-Ono4S.framer-v7nkox, .framer-Ono4S.framer-1ophgzs, .framer-Ono4S.framer-1f5z9r5, .framer-Ono4S.framer-bxrbtv { inset: 0px; position: fixed; user-select: none; }`,
        `.framer-Ono4S.framer-103t029-container, .framer-Ono4S.framer-22cczc-container { cursor: grab; flex: none; height: 70%; left: calc(50.00000000000002% - 55.00000000000001% / 2); position: fixed; top: calc(50.00000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S .framer-2bb28p-container { cursor: grab; flex: none; height: auto; left: 35px; position: absolute; top: 41px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S .framer-1xri14m-container { cursor: grab; flex: none; height: auto; left: 430px; position: absolute; top: 126px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-1cs4fxf { inset: 0px; position: fixed; user-select: none; z-index: 4; }`,
        `.framer-Ono4S.framer-k40he3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; padding: 0px; position: fixed; top: 50%; transform: translate(-50%, -50%); width: min-content; z-index: 4; }`,
        `.framer-Ono4S .framer-bjlmf7-container, .framer-Ono4S .framer-sx73r3-container { cursor: grab; flex: none; height: 369px; position: relative; width: 231px; will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-Ono4S .framer-1nw8fzc, .framer-Ono4S .framer-rtt1x5 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.4); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Ono4S .framer-1n36sem, .framer-Ono4S .framer-1ylufm2 { --1m973uw: #ffffff; --js9iwy: 2; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 12px; }`,
        `.framer-Ono4S .framer-14iti09-container { cursor: grab; flex: none; height: auto; left: 50%; position: absolute; top: 50px; transform: translateX(-50%); width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-zpnihu-container { cursor: grab; flex: none; height: 70%; left: 547px; position: fixed; top: 55px; width: 50%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S .framer-1r7utb3-container { bottom: 80px; cursor: grab; flex: none; height: auto; position: absolute; right: 220px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-1te2og0-container { flex: none; height: 560px; left: calc(50.00000000000002% - 700px / 2); position: fixed; top: calc(50.00000000000002% - 560px / 2); width: 700px; z-index: 10; }`,
        `.framer-Ono4S .framer-grmyv7-container { bottom: 26px; cursor: grab; flex: none; height: auto; left: 660px; position: absolute; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-1c96nsa-container { cursor: grab; flex: none; height: 70%; left: calc(54.285714285714306% - 55.00000000000001% / 2); position: fixed; top: calc(50.00000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 6; }`,
        `.framer-Ono4S .framer-qvs3hn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 140px; padding: 0px; position: absolute; top: 48%; transform: translateY(-50%); width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S .framer-19u42p5, .framer-Ono4S .framer-1jeyzv8, .framer-Ono4S .framer-1enzjj7, .framer-Ono4S .framer-394ces, .framer-Ono4S .framer-1ph4ayp, .framer-Ono4S .framer-1l34g01, .framer-Ono4S .framer-fqac1x, .framer-Ono4S .framer-1elyjfg, .framer-Ono4S .framer-tfmxa4, .framer-Ono4S .framer-9ls1ns, .framer-Ono4S .framer-1c08i0l, .framer-Ono4S .framer-1pno0an { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ono4S .framer-ygavp9-container, .framer-Ono4S .framer-1h5pmyl-container, .framer-Ono4S .framer-1invank-container, .framer-Ono4S .framer-cwolws-container, .framer-Ono4S .framer-q0hz5e-container, .framer-Ono4S .framer-isfnwv-container, .framer-Ono4S .framer-1atjfyd-container, .framer-Ono4S .framer-1bzx5dl-container, .framer-Ono4S .framer-1crrx51-container, .framer-Ono4S .framer-1o2a9y9-container, .framer-Ono4S .framer-6jfxnf-container, .framer-Ono4S .framer-zlfo0x-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Ono4S.framer-1yfze9w, .framer-Ono4S.framer-13dcmxe, .framer-Ono4S.framer-1a2198a, .framer-Ono4S.framer-1yby2w7, .framer-Ono4S.framer-1ifd76g, .framer-Ono4S.framer-101ebhz, .framer-Ono4S.framer-i7wfkp, .framer-Ono4S.framer-7vnyqt, .framer-Ono4S.framer-16njwiv { inset: 0px; position: fixed; user-select: none; z-index: 0; }`,
        `.framer-Ono4S.framer-xptj8r-container { cursor: grab; flex: none; height: 70%; left: calc(44.75000000000002% - 55.00000000000001% / 2); position: fixed; top: calc(42.75000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S .framer-1ilsq4f { align-content: flex-start; align-items: flex-start; bottom: 97px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 350px; padding: 0px; position: absolute; width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-108iybm-container, .framer-Ono4S.framer-pjvwyg-container { cursor: grab; flex: none; height: 70%; left: calc(44.58333333333336% - 55.00000000000001% / 2); position: fixed; top: calc(48.62500000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S .framer-5bywp6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: absolute; right: 680px; top: 265px; width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S .framer-oh0idf { align-content: flex-start; align-items: flex-start; bottom: 177px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: absolute; right: 460px; width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-1kdtdir-container { cursor: grab; flex: none; height: 70%; left: calc(43.416666666666686% - 55.00000000000001% / 2); position: fixed; top: calc(56.00000000000003% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S .framer-rrlxyx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: absolute; right: 330px; top: 127px; width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-sztdzu-container { cursor: grab; flex: none; height: 70%; left: calc(58.166666666666686% - 55.00000000000001% / 2); position: fixed; top: calc(45.62500000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S .framer-1n9wwf4 { align-content: flex-start; align-items: flex-start; cursor: grab; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: absolute; right: 100px; top: 50%; transform: translateY(-50%); width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-fivm0l-container { cursor: grab; flex: none; height: 70%; left: calc(51.33333333333335% - 55.00000000000001% / 2); position: fixed; top: calc(43.62500000000003% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
        `.framer-Ono4S .framer-1o88ibt-container { cursor: grab; flex: none; height: auto; position: absolute; right: 30px; top: 41px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S .framer-3jbgml-container { bottom: 1px; cursor: grab; flex: none; height: auto; position: absolute; right: 36px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Ono4S.framer-1t0hsw0-container { cursor: grab; flex: none; height: 70%; left: calc(54.285714285714306% - 50% / 2); position: fixed; top: calc(50.00000000000002% - 70% / 2); width: 50%; will-change: var(--framer-will-change-effect-override, transform); z-index: 6; }`,
        `.framer-Ono4S .framer-977sz9-container { flex: none; height: auto; left: 697px; position: absolute; top: 423px; width: auto; }`,
        `.framer-Ono4S .framer-e4qcek { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Ono4S .framer-1som8tt { display: grid; flex: 1 0 0px; gap: 24px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ono4S .framer-159j92y-container, .framer-Ono4S .framer-1qoeoym-container, .framer-Ono4S .framer-1wjd990-container, .framer-Ono4S .framer-1pfipj9-container, .framer-Ono4S .framer-17rmc66-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ono4S.framer-133vod8-container, .framer-Ono4S.framer-4i47qg-container, .framer-Ono4S.framer-vlefdf-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 390px; }`,
        `.framer-Ono4S .framer-1337xyp, .framer-Ono4S .framer-dwufeu, .framer-Ono4S .framer-tgdpsi, .framer-Ono4S .framer-1ccq42h { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; justify-self: start; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-Ono4S.framer-y1hw5q, .framer-Ono4S.framer-1mrls6c, .framer-Ono4S.framer-16yy6ag, .framer-Ono4S.framer-m7vss4, .framer-Ono4S.framer-lmejfp, .framer-Ono4S.framer-15yn2k4 { inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-Ono4S.framer-ritq8j-container, .framer-Ono4S.framer-1y2v4rm-container, .framer-Ono4S.framer-fsn76h-container, .framer-Ono4S.framer-1vjs1sh-container, .framer-Ono4S.framer-1akbqni-container, .framer-Ono4S.framer-2cqab1-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 390px; z-index: 10; }`,
        `.framer-Ono4S.framer-z3nv0u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; padding: 0px; position: fixed; top: 50%; transform: translate(-50%, -50%); width: min-content; }`,
        `.framer-Ono4S .framer-cwlefm, .framer-Ono4S .framer-4ybn4b { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; justify-self: start; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-Ono4S.framer-1421jra, .framer-Ono4S.framer-ww5dmr { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-Ono4S.framer-ki6mc4-container, .framer-Ono4S.framer-1901r0f-container, .framer-Ono4S.framer-m5oho8-container, .framer-Ono4S.framer-gdq7tt-container { flex: none; height: 100%; left: 0px; position: fixed; top: 0px; width: 100%; z-index: 2; }`,
        `.framer-Ono4S .framer-14g72fg-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ono4S .framer-1tfeb7x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: min-content; }`,
        `.framer-Ono4S .framer-ljmpyy-container, .framer-Ono4S .framer-fa8ie5-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-Ono4S.framer-9uzb6w-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 578px; }`,
        `.framer-Ono4S.framer-iugmq5-container { cursor: grab; flex: none; height: 70%; left: 177px; position: fixed; top: calc(47.50000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S.framer-sokgyf-container { cursor: grab; flex: none; height: 70%; left: 100px; position: fixed; top: calc(48.25000000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
        `.framer-Ono4S.framer-71fumc-container { cursor: default; flex: none; height: 70%; left: calc(48.64285714285717% - 50% / 2); position: fixed; top: calc(48.12500000000002% - 70% / 2); width: 50%; will-change: var(--framer-will-change-effect-override, transform); z-index: 6; }`,
        `.framer-Ono4S.framer-5pz29n-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 390px; z-index: 0; }`,
        `.framer-Ono4S.framer-15hiymd-container { cursor: grab; flex: none; height: 70%; left: calc(48.64285714285717% - 55.00000000000001% / 2); position: fixed; top: calc(48.12500000000002% - 70% / 2); width: 55%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-Ono4S.framer-1m3yol8-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 28%; z-index: 3; }`,
        `@media (min-width: 810px) and (max-width: 1399.98px) { .framer-Ono4S.framer-72rtr7 { width: 810px; } .framer-Ono4S .framer-ikr6mf { order: 0; } .framer-Ono4S .framer-1ikkr7l { left: calc(50.00000000000002% - 100% / 2); order: 1; width: 100%; } .framer-Ono4S .framer-1gjeq3t { order: 2; } .framer-Ono4S .framer-12rwxs8-container { bottom: unset; left: 180px; top: 58%; transform: translateY(-50%); } .framer-Ono4S.framer-103t029-container { left: calc(47.53086419753089% - 80% / 2); top: calc(49.0740740740741% - 70% / 2); width: 80%; } .framer-Ono4S .framer-2bb28p-container { left: 26px; top: 8%; transform: translateY(-50%); } .framer-Ono4S .framer-1xri14m-container { bottom: 120px; height: 106px; left: 406px; top: unset; } .framer-Ono4S .framer-14iti09-container { left: 318px; top: 31px; transform: unset; } .framer-Ono4S.framer-zpnihu-container { left: calc(53.70370370370373% - 80% / 2); top: 164px; width: 80%; } .framer-Ono4S .framer-1r7utb3-container { bottom: unset; height: 106px; left: 530px; right: unset; top: 84px; width: 95px; } .framer-Ono4S.framer-1te2og0-container { top: calc(29.537037037037063% - 560px / 2); } .framer-Ono4S .framer-grmyv7-container { bottom: unset; height: 106px; left: 478px; top: 63%; transform: translateY(-50%); } .framer-Ono4S.framer-1c96nsa-container, .framer-Ono4S.framer-1t0hsw0-container { left: calc(50.00000000000002% - 80% / 2); width: 80%; } .framer-Ono4S .framer-qvs3hn { bottom: 160px; left: 60px; top: unset; transform: unset; } .framer-Ono4S.framer-xptj8r-container { left: calc(44.75000000000002% - 80% / 2); width: 80%; } .framer-Ono4S .framer-1ilsq4f { bottom: 597px; left: 88px; } .framer-Ono4S.framer-108iybm-container, .framer-Ono4S.framer-pjvwyg-container { left: calc(44.58333333333336% - 80% / 2); width: 80%; } .framer-Ono4S .framer-5bywp6 { left: 386px; right: unset; } .framer-Ono4S .framer-oh0idf { bottom: 80px; left: 664px; right: unset; width: 68px; } .framer-Ono4S.framer-1kdtdir-container { left: calc(43.416666666666686% - 80% / 2); width: 80%; } .framer-Ono4S .framer-rrlxyx { left: 642px; right: unset; top: 220px; width: 68px; } .framer-Ono4S.framer-sztdzu-container { left: calc(58.166666666666686% - 80% / 2); width: 80%; } .framer-Ono4S .framer-1o88ibt-container { right: 13px; top: 9%; transform: translateY(-50%); } .framer-Ono4S .framer-3jbgml-container { bottom: unset; height: 106px; right: 73px; top: calc(52.87037037037039% - 106px / 2); width: 78px; }}`,
        `@media (max-width: 809.98px) { .framer-Ono4S.framer-72rtr7 { width: 390px; } .framer-Ono4S .framer-ikr6mf, .framer-Ono4S .framer-159j92y-container { order: 0; } .framer-Ono4S .framer-1ikkr7l, .framer-Ono4S .framer-1qoeoym-container { order: 1; } .framer-Ono4S .framer-1gjeq3t, .framer-Ono4S .framer-1337xyp { order: 2; } .framer-Ono4S .framer-e4qcek { overflow: var(--overflow-clip-fallback, clip); } .framer-Ono4S .framer-1som8tt { height: min-content; overflow: var(--overflow-clip-fallback, clip); } .framer-Ono4S.framer-133vod8-container, .framer-Ono4S.framer-ritq8j-container, .framer-Ono4S.framer-1vjs1sh-container, .framer-Ono4S.framer-1akbqni-container, .framer-Ono4S.framer-2cqab1-container { height: 100%; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; } .framer-Ono4S.framer-y1hw5q, .framer-Ono4S.framer-1mrls6c, .framer-Ono4S.framer-16yy6ag, .framer-Ono4S.framer-m7vss4, .framer-Ono4S.framer-lmejfp, .framer-Ono4S.framer-15yn2k4 { z-index: 0; } .framer-Ono4S .framer-dwufeu { order: 3; } .framer-Ono4S.framer-1y2v4rm-container { height: 100%; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; } .framer-Ono4S .framer-1wjd990-container { order: 10; } .framer-Ono4S.framer-z3nv0u { z-index: 3; } .framer-Ono4S .framer-tgdpsi { order: 4; } .framer-Ono4S.framer-fsn76h-container, .framer-Ono4S.framer-4i47qg-container { height: 100%; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 5; } .framer-Ono4S .framer-cwlefm { height: 100%; order: 5; width: 100%; } .framer-Ono4S .framer-1ccq42h { order: 6; } .framer-Ono4S .framer-1pfipj9-container { order: 8; } .framer-Ono4S .framer-4ybn4b { height: 100%; order: 7; width: 100%; } .framer-Ono4S .framer-17rmc66-container { order: 9; } .framer-Ono4S.framer-1421jra, .framer-Ono4S.framer-ww5dmr { background-color: unset; } .framer-Ono4S.framer-ki6mc4-container { will-change: var(--framer-will-change-effect-override, transform); z-index: 6; } .framer-Ono4S .framer-14g72fg-container { order: 11; } .framer-Ono4S .framer-1tfeb7x { padding: 0px 24px 24px 24px; } .framer-Ono4S.framer-vlefdf-container { height: 100%; left: calc(50.00000000000002% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; } .framer-Ono4S .framer-fa8ie5-container { z-index: 2; } .framer-Ono4S.framer-1901r0f-container { will-change: var(--framer-will-change-effect-override, transform); } .framer-Ono4S.framer-m5oho8-container, .framer-Ono4S.framer-gdq7tt-container { will-change: var(--framer-will-change-effect-override, transform); z-index: 3; } .framer-Ono4S.framer-5pz29n-container { height: 100%; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; } .framer-Ono4S.framer-1m3yol8-container { height: 100%; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }}`,
      ],
      `framer-Ono4S`
    )),
    (fn.displayName = `Home`),
    (fn.defaultProps = { height: 800, width: 1400 }),
    ae(
      fn,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
          ],
        },
        ...ht,
        ...gt,
        ..._t,
        ...vt,
        ...xt,
        ...St,
        ...Ct,
        ...Tt,
        ...Et,
        ...Dt,
        ...Ot,
        ...kt,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (fn.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = A.get(Wt(), n, r),
          a = A.get(Kt(), n, r),
          o = A.get(qt(), n, r),
          s = A.get(Jt(), n, r),
          c = A.get(Yt(), n, r),
          l = A.get(Xt(), n, r),
          u = A.get(tn(), n, r),
          d = A.get(nn(), n, r),
          ee = A.get(rn(), n, r),
          f = A.get(an(), n, r),
          p = A.get(on(), n, r),
          m = A.get(sn(), n, r);
        return ye(
          [
            () => i.preload(),
            () => a.preload(),
            () => o.preload(),
            () => s.preload(),
            () => c.preload(),
            () => l.preload(),
            () => u.preload(),
            () => d.preload(),
            () => ee.preload(),
            () => f.preload(),
            () => p.preload(),
            () => m.preload(),
            () => T(Fe, {}, t),
            () => T(Ne, {}, t),
            () => T(W, {}, t),
            () => T(V, {}, t),
            () => T(B, {}, t),
            () => T(et, {}, t),
            () => T(Ce, {}, t),
            () => T(Ae, {}, t),
            async () =>
              ye(
                ((await I(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(V, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(V, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => o.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(V, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => s.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(V, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => c.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(V, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => l.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(V, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => u.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(B, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => d.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(B, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => ee.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(B, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => f.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(B, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => p.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(B, {}, t),
                ]),
                t
              ),
            async () =>
              ye(
                ((await I(() => m.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => T(W, {}, t),
                  () => T(B, {}, t),
                ]),
                t
              ),
          ],
          t
        );
      },
    }),
    (pn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1400`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rnq5NgttY":{"layout":["fixed","auto"]},"n4CR8pgzs":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `800`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { pn as __FramerMetadata__, fn as default, Mt as queryParamNames };
//# sourceMappingURL=KYBaa_i78h2urv6K9sJZNWqQ6kgx3FVbnx01P4195Qk.BLdDJXzD.mjs.map
