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
  o as l,
} from "./react.Bb_yyrg0.mjs";
import { $ as u, Q as d, T as f, Z as p, a as m, r as h, t as g } from "./motion.Dq3vMtKA.mjs";
import {
  A as _,
  G as v,
  T as y,
  _ as b,
  _t as x,
  gt as S,
  lt as C,
  nt as w,
  r as T,
  w as E,
  x as D,
} from "./framer.cs1Z8Vda.mjs";
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    (l(),
      v(),
      g(),
      r(),
      (O = `framer-q7S2Q`),
      (k = { S4ii7uLlb: `framer-v-nadly0` }),
      (A = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (j = ({ value: e, children: r }) => {
        let i = t(m),
          a = e ?? i.transition,
          s = n(() => ({ ...i, transition: a }), [JSON.stringify(a)]);
        return o(m.Provider, { value: s, children: r });
      }),
      (M = f.create(c)),
      (N = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (P = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (F = x(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            s = a(),
            { activeLocale: c, setLocale: l } = C();
          w();
          let { style: u, className: d, layoutId: p, variant: m, ...g } = N(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: T,
              isLoading: E,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = S({ defaultVariant: `S4ii7uLlb`, ref: r, variant: m, variantClassNames: k }),
            R = P(e, L),
            z = _(O);
          return o(h, {
            id: p ?? s,
            children: o(M, {
              animate: L,
              initial: !1,
              children: o(j, {
                value: A,
                children: o(f.div, {
                  ...g,
                  ...x,
                  className: _(z, `framer-nadly0`, d, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: R,
                  layoutId: `S4ii7uLlb`,
                  ref: r,
                  style: { ...u },
                  children: o(D, {
                    className: `framer-awy161`,
                    "data-framer-name": `*`,
                    layoutDependency: R,
                    layoutId: `YeZaNPJC3`,
                    requiresOverflowVisible: !1,
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.45 14.66" overflow="visible"><g><path d="M 6.2 14.66 L 6.17 9.28 L 1.99 12.33 L 0 8.56 L 4.9 6.92 L 0.82 3.91 L 3.83 0.86 L 6.78 4.97 L 8.43 0 L 12.23 2.02 L 9.18 6.27 L 14.45 6.3 L 13.76 10.51 L 8.79 8.83 L 10.4 13.97 L 6.19 14.66 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></g></svg>`,
                    withExternalLayout: !0,
                    children: o(D, {
                      className: `framer-kirxpy`,
                      layoutDependency: R,
                      layoutId: `H1I_Q7j22`,
                      requiresOverflowVisible: !1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.45 14.66" overflow="visible"><path d="M 6.2 14.66 L 6.17 9.28 L 1.99 12.33 L 0 8.56 L 4.9 6.92 L 0.82 3.91 L 3.83 0.86 L 6.78 4.97 L 8.43 0 L 12.23 2.02 L 9.18 6.27 L 14.45 6.3 L 13.76 10.51 L 8.79 8.83 L 10.4 13.97 L 6.19 14.66 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-q7S2Q.framer-tfwl9s, .framer-q7S2Q .framer-tfwl9s { display: block; }`,
          `.framer-q7S2Q.framer-nadly0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 16px; }`,
          `.framer-q7S2Q .framer-awy161 { height: 15px; position: relative; width: 15px; }`,
          `.framer-q7S2Q .framer-kirxpy { height: 15px; left: 0px; position: absolute; top: 0px; width: 15px; }`,
        ],
        `framer-q7S2Q`
      )),
      (I = F),
      (F.displayName = `AsteriskTag`),
      (F.defaultProps = { height: 36, width: 16 }),
      E(F, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function R(e) {
  let t = e.text,
    r = n(() => {
      let t = e.font?.fontSize;
      if (typeof t == `number`) return t;
      let n = typeof t == `string` ? parseFloat(t) : NaN;
      return Number.isFinite(n) ? n : 36;
    }, [e.font?.fontSize]),
    a = n(() => {
      let t = e.slotBaseFontSize || 36,
        n = e.slotAutoScale ? r / t : 1;
      return Math.max(0.01, (e.slotScale || 1) * n);
    }, [e.slotAutoScale, e.slotBaseFontSize, e.slotScale, r]),
    s = i(null),
    { scrollYProgress: c } = p({
      target: s,
      offset: [`start ${e.startOffset}`, `end ${e.endOffset}`],
    }),
    l = b.current() === b.canvas,
    u = n(() => {
      let n = t
          .replace(
            /<br\s*\/?>(\s*<br\s*\/?>(\s*))?/gi,
            `

`
          )
          .replace(
            /<br\s*\/?>(?!\n)/gi,
            `
`
          ),
        r = e.showSlots;
      return n
        .split(/(\[[^\]]*\]|\n+|<[^>]+>[^<]*<\/[^^>]+>|<[^>]+>|[^\s\[\]<>\n]+)/g)
        .filter(Boolean)
        .map((e, t) => {
          if (e.match(/\n+/)) return { type: `linebreak`, content: e };
          if (e.startsWith(`[`) && e.endsWith(`]`)) {
            let t = parseInt(e.slice(1, -1)) - 1;
            return r && !isNaN(t) && t >= 0
              ? { type: `slot`, index: t }
              : { type: `text`, content: e };
          }
          return e.match(/^\s+$/) ? null : { type: `text`, content: e };
        })
        .filter((e) => e != null);
    }, [t, e.showSlots]),
    d = u.length,
    f = 0;
  return o(`div`, {
    ref: s,
    style: {
      width: `100%`,
      height: `auto`,
      ...e.font,
      color: e.textColor,
      margin: 0,
      padding: 0,
      display: `flex`,
      flexWrap: `wrap`,
      alignItems: `center`,
      gap: `0.25em`,
      wordBreak: `break-word`,
    },
    children: u.map((t, n) => {
      if (t.type === `linebreak`)
        return o(`span`, { style: { flexBasis: `100%`, height: 0 } }, `break-${n}`);
      if (t.type === `slot`) {
        if (!e.showSlots) return null;
        let i = e.slots?.[t.index];
        if (!i) {
          let i = r,
            s = e.font?.lineHeight || 1.1,
            u = typeof s == `string` ? parseFloat(s) * i : s * i;
          return o(
            z,
            {
              word: ``,
              starting: n / d,
              ending: (n + 1) / d,
              startOpacity: e.startOpacity,
              endOpacity: e.endOpacity,
              progress: c,
              animationStyle: e.animationStyle,
              enableBlur: e.enableBlur,
              enableSmooth: e.enableSmooth,
              isCanvas: l,
              customFont: void 0,
              children: o(`span`, {
                style: {
                  display: `inline-flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  alignSelf: `baseline`,
                  marginLeft: e.layerGap || 0,
                  marginRight: e.layerGap || 0,
                  zoom: a,
                  backgroundColor: `rgba(136, 85, 255, 0.1)`,
                  color: `#8855FF`,
                  padding: `4px 12px`,
                  border: `1px solid #8855FF`,
                  fontSize: `14px`,
                  fontWeight: `bold`,
                  width: u,
                  height: u,
                },
                children: t.index + 1,
              }),
            },
            `slot-${n}`
          );
        }
        return o(
          z,
          {
            word: ``,
            starting: n / d,
            ending: (n + 1) / d,
            startOpacity: e.startOpacity,
            endOpacity: e.endOpacity,
            progress: c,
            animationStyle: e.animationStyle,
            enableBlur: e.enableBlur,
            enableSmooth: e.enableSmooth,
            isCanvas: l,
            customFont: void 0,
            children: o(`span`, {
              style: {
                display: `inline-flex`,
                alignItems: `center`,
                marginLeft: e.layerGap || 0,
                marginRight: e.layerGap || 0,
                zoom: a,
              },
              children: i,
            }),
          },
          `slot-${n}`
        );
      }
      let i = f;
      f++;
      let s = e.wordFonts?.find((e) => e.wordIndex === i + 1)?.font;
      return o(
        z,
        {
          word: t.content,
          starting: n / d,
          ending: (n + 1) / d,
          startOpacity: e.startOpacity,
          endOpacity: e.endOpacity,
          progress: c,
          animationStyle: e.animationStyle,
          enableBlur: e.enableBlur,
          enableSmooth: e.enableSmooth,
          isCanvas: l,
          customFont: s,
          children: null,
        },
        `text-${n}`
      );
    }),
  });
}
var z,
  B = e(() => {
    (l(),
      v(),
      g(),
      r(),
      (z = ({
        word: e,
        starting: t,
        ending: n,
        startOpacity: r,
        endOpacity: i,
        progress: a,
        children: s,
        animationStyle: c,
        enableBlur: l,
        enableSmooth: p,
        isCanvas: m,
        customFont: h,
      }) => {
        let g = e,
          _ = u(a, [t, n], [r, i]),
          v = u(a, [t, n], c === `slide` ? [20, 0] : [0, 0]),
          y = u(a, [t, n], l ? [10, 0] : [0, 0]),
          b = u(y, (e) => `blur(${e}px)`),
          x = { stiffness: 100, damping: 20, mass: 1 },
          S = d(_, x),
          C = d(v, x),
          w = u(d(y, x), (e) => `blur(${e}px)`),
          T = m ? 1 : p ? S : _,
          E = m ? 0 : p ? C : v,
          D = m ? `none` : p ? w : b;
        return s
          ? o(f.span, {
              style: {
                opacity: T,
                y: E,
                filter: l ? D : void 0,
                willChange: c === `slide` ? `opacity, transform` : `opacity`,
                display: `inline-flex`,
                alignItems: `center`,
                ...h,
              },
              children: s,
            })
          : o(f.span, {
              style: {
                opacity: T,
                y: E,
                filter: l ? D : void 0,
                willChange: c === `slide` ? `opacity, transform` : `opacity`,
                display: `inline`,
                ...h,
              },
              dangerouslySetInnerHTML: { __html: g },
            });
      }),
      y(R, {
        text: {
          title: `Text`,
          type: T.String,
          defaultValue: `Turn your [1] into something people truly value in less time and with more [2]`,
          displayTextArea: !0,
        },
        showSlots: {
          type: T.Boolean,
          title: `Show Slots`,
          defaultValue: !0,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        slots: {
          type: T.Array,
          title: `Slots`,
          description: `Add components to slots. Use [1], [2], etc. in text above.`,
          control: { type: T.ComponentInstance },
          defaultValue: [],
          maxCount: 10,
          hidden: (e) => !e?.showSlots,
        },
        layerGap: {
          type: T.Number,
          title: `Layer Gap`,
          defaultValue: 2,
          min: 0,
          max: 100,
          step: 1,
        },
        slotAutoScale: {
          type: T.Boolean,
          title: `Auto Slot Scale`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        slotBaseFontSize: {
          type: T.Number,
          title: `Slot Base Size`,
          defaultValue: 36,
          min: 1,
          max: 200,
          step: 1,
          hidden: (e) => !e?.slotAutoScale,
        },
        slotScale: {
          type: T.Number,
          title: `Slot Scale`,
          defaultValue: 1,
          min: 0.1,
          max: 3,
          step: 0.01,
        },
        font: {
          type: T.Font,
          title: `Default Font`,
          controls: `extended`,
          defaultValue: { fontSize: 36, variant: `Regular`, lineHeight: 1.1 },
          defaultFontType: `sans-serif`,
        },
        wordFonts: {
          type: T.Array,
          title: `Word Fonts`,
          description: `Customize font for individual words. Word 1 is the first word, Word 2 is the second, etc.`,
          control: {
            type: T.Object,
            controls: {
              wordIndex: {
                type: T.Number,
                title: `Word #`,
                defaultValue: 1,
                min: 1,
                step: 1,
                displayStepper: !0,
              },
              font: {
                type: T.Font,
                title: `Font`,
                controls: `extended`,
                defaultFontType: `sans-serif`,
              },
            },
          },
          defaultValue: [],
          maxCount: 50,
        },
        textColor: { type: T.Color, defaultValue: `#FFFFFF` },
        animationStyle: {
          type: T.Enum,
          title: `Animation`,
          options: [`fade`, `slide`],
          optionTitles: [`Fade`, `Slide`],
          defaultValue: `fade`,
          displaySegmentedControl: !0,
        },
        enableSmooth: {
          type: T.Boolean,
          title: `Smooth`,
          defaultValue: !0,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        enableBlur: {
          type: T.Boolean,
          title: `Blur`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        startOffset: {
          title: `Start Offset`,
          type: T.Number,
          defaultValue: 0.5,
          min: 0,
          max: 1,
          step: 0.01,
        },
        endOffset: {
          title: `End Offset`,
          type: T.Number,
          defaultValue: 0.5,
          min: 0,
          max: 1,
          step: 0.01,
        },
        startOpacity: {
          title: `Start Opacity`,
          type: T.Number,
          defaultValue: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        endOpacity: {
          title: `End Opacity`,
          type: T.Number,
          defaultValue: 1,
          min: 0,
          max: 1,
          step: 0.01,
        },
      }));
  });
export { L as i, B as n, I as r, R as t };
//# sourceMappingURL=ScrollText.CzCuclR_.mjs.map
