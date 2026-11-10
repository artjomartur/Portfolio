import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as t,
  M as n,
  O as r,
  S as i,
  T as a,
  c as o,
  k as s,
  m as c,
  o as l,
} from "./react.Bb_yyrg0.mjs";
import { B as u, C as d, t as f } from "./motion.Dq3vMtKA.mjs";
import { G as p, T as m, _ as h, ot as g, r as _ } from "./framer.cs1Z8Vda.mjs";
import {
  a as ee,
  c as v,
  d as y,
  f as te,
  i as b,
  o as x,
  p as S,
  r as ne,
  s as C,
} from "./VideoController.D9ulu-ly.mjs";
function w(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function T(e) {
  return o(M, { ...w(e) });
}
function E(e) {
  let t = g(),
    n = a(!1),
    r = a(!1),
    i = s((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: s(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: s(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: i,
    isPlaying: r,
  };
}
function re({ playingProp: e, muted: t, loop: r, playsinline: i, controls: a }) {
  let [o] = n(e),
    [s, c] = n(!1);
  e !== o && !s && c(!0);
  let l = o && t && r && i && !a && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function D(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function O(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(D).join(` `);
}
var k,
  A,
  j,
  M,
  N,
  P = e(() => {
    (l(),
      p(),
      f(),
      ne(),
      i(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((k ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((A ||= {})),
      (j = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (M = c(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: i,
            srcFile: s = ``,
            posterEnabled: c = !1,
            controls: l = !1,
            playing: f = !0,
            loop: p = !0,
            muted: m = !0,
            playsinline: g = !0,
            restartOnEnter: _ = !1,
            objectFit: b = `cover`,
            backgroundColor: S = `rgba(0,0,0,0)`,
            radius: ne = 0,
            volume: w = 25,
            startTime: T = 0,
            poster: D,
            playing: O,
            progress: k,
            onSeeked: A,
            onPause: M,
            onPlay: N,
            onEnd: P,
            onClick: F,
            onMouseEnter: ie,
            onMouseLeave: I,
            onMouseDown: ae,
            onMouseUp: L,
          } = e,
          R = a(),
          z = v(),
          B = a(null),
          V = a(null),
          H = x(),
          U = C(),
          W = H || U === h.export,
          G = ee(e),
          K = W
            ? `no-autoplay`
            : re({ playingProp: O, muted: m, loop: p, playsinline: g, controls: l }),
          q = W ? !0 : u(R),
          oe = W ? !1 : u(R, { margin: `10%`, once: !0 }),
          J = T === 100 ? 99.9 : T,
          { play: Y, pause: X, setProgress: Z, isPlaying: Q } = E(R);
        (t(() => {
          W || (K !== `on-viewport` && (O ? Y() : X()));
        }, [K, O]),
          t(() => {
            W || (q && O && K !== `no-autoplay` && Y(), K === `on-viewport` && X());
          }, [K, q, O]),
          t(() => {
            !H || D || c || J || !R.current || (R.current.currentTime = 0.01);
          }, [c, D, J]));
        let $ = a(!1);
        (t(() => {
          if (!$.current) {
            $.current = !0;
            return;
          }
          Z(((d(k) ? k.get() : (k ?? 0) * 0.01) ?? 0) || (J ?? 0) / 100);
        }, [J, s, i, k]),
          t(() => {
            if (d(k)) return k.on(`change`, (e) => Z(e));
          }, [k]),
          y(() => {
            B.current !== null && R.current && ((!V && p) || !B.current) && Y();
          }),
          te(() => {
            R.current && ((V.current = R.current.ended), (B.current = R.current.paused), X());
          }));
        let se = r(() => {
          if (n === `URL`) return i + ``;
          if (n === `Upload`) return s + ``;
        }, [n, s, i, J]);
        return (
          t(() => {
            z && R.current && K === `on-mount` && setTimeout(() => Y(), 50);
          }, []),
          t(() => {
            R.current && !m && (R.current.volume = (w ?? 0) / 100);
          }, [w]),
          o(`video`, {
            onClick: F,
            onMouseEnter: ie,
            onMouseLeave: I,
            onMouseDown: ae,
            onMouseUp: L,
            src: se,
            loop: p,
            ref: R,
            onSeeked: (e) => A?.(e),
            onPause: (e) => M?.(e),
            onPlay: (e) => N?.(e),
            onEnded: (e) => P?.(e),
            autoPlay: Q.current || K === `on-mount` || (O && K === `on-viewport` && q),
            preload: Q.current
              ? `auto`
              : W && !D
                ? `metadata`
                : K !== `on-mount` && !oe
                  ? `none`
                  : `metadata`,
            poster:
              c && !s && i === j
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : c && D
                  ? D
                  : void 0,
            onLoadedData: () => {
              let e = R.current;
              e &&
                (e.currentTime < 0.3 && J > 0 && Z((J ?? 0) * 0.01),
                (Q.current || K === `on-mount` || (O && K === `on-viewport` && q)) && Y());
            },
            controls: l,
            muted: W ? !0 : m,
            playsInline: g,
            style: {
              cursor: F ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: G,
              display: `block`,
              objectFit: b,
              backgroundColor: S,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (T.displayName = `Video`),
      (N = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      m(T, {
        srcType: {
          type: _.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: _.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: _.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: _.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...b,
        posterEnabled: {
          type: _.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: _.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: _.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: _.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: _.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: _.Enum, title: `Fit`, options: N, optionTitles: N.map(O) },
        controls: {
          type: _.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: _.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: _.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: _.EventHandler },
        onSeeked: { type: _.EventHandler },
        onPause: { type: _.EventHandler },
        onPlay: { type: _.EventHandler },
        ...S,
      }));
  });
export { P as n, T as t };
//# sourceMappingURL=Video.CtoqTS3T.mjs.map
