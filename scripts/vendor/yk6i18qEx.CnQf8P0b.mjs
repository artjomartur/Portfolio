import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as t,
  D as n,
  F as r,
  L as i,
  O as a,
  S as o,
  T as s,
  _ as c,
  c as l,
  h as u,
  j as d,
  l as f,
  o as p,
} from "./react.Bb_yyrg0.mjs";
import { T as m, a as h, r as g, t as _ } from "./motion.Dq3vMtKA.mjs";
import {
  A as v,
  G as y,
  T as b,
  _t as x,
  b as S,
  f as C,
  gt as w,
  ht as T,
  j as E,
  l as D,
  lt as O,
  nt as k,
  r as A,
  tt as ee,
  w as j,
  x as M,
  yt as N,
  z as P,
} from "./framer.cs1Z8Vda.mjs";
function F(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var I,
  L,
  R,
  z,
  B,
  V,
  te = e(() => {
    (r(),
      (I = class {
        constructor() {
          ((this.isRunning = !1),
            (this.value = 0),
            (this.from = 0),
            (this.to = 0),
            (this.duration = 0),
            (this.currentTime = 0));
        }
        advance(e) {
          var t;
          if (!this.isRunning) return;
          let n = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let t = F(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            let r = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = (function (e, t, n, r) {
                  return (function (e, t, n) {
                    return (1 - n) * e + n * t;
                  })(e, t, 1 - Math.exp(-n * r));
                })(this.value, this.to, 60 * this.lerp, e)),
                Math.round(this.value) === this.to && ((this.value = this.to), (n = !0)))
              : ((this.value = this.to), (n = !0));
          (n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (L = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.width = 0),
            (this.height = 0),
            (this.scrollWidth = 0),
            (this.scrollHeight = 0),
            (this.resize = () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            (this.onWrapperResize = () => {
              this.wrapper === i
                ? ((this.width = i.innerWidth), (this.height = i.innerHeight))
                : this.wrapper instanceof HTMLElement &&
                  ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              this.wrapper === i
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : this.wrapper instanceof HTMLElement &&
                  ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === i
                ? i.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          var e, t;
          ((e = this.wrapperResizeObserver) == null || e.disconnect(),
            (t = this.contentResizeObserver) == null || t.disconnect(),
            i.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (R = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          var n;
          return (
            ((n = this.events[e]) != null && n.push(t)) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (z = 100 / 6),
      (B = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.lastDelta = { x: 0, y: 0 }),
            (this.windowWidth = 0),
            (this.windowHeight = 0),
            (this.onTouchStart = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            (this.onTouchMove = (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - (this.touchStart?.x ?? 0)) * this.touchMultiplier,
                i = -(n - (this.touchStart?.y ?? 0)) * this.touchMultiplier;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: r, y: i }),
                this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
            }),
            (this.onTouchEnd = (e) => {
              this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e,
              });
            }),
            (this.onWheel = (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e;
              ((t *= r === 1 ? z : r === 2 ? this.windowWidth : 1),
                (n *= r === 1 ? z : r === 2 ? this.windowHeight : 1),
                (t *= this.wheelMultiplier),
                (n *= this.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            (this.onWindowResize = () => {
              ((this.windowWidth = i.innerWidth), (this.windowHeight = i.innerHeight));
            }),
            (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new R()),
            i.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            i.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel),
            this.element.removeEventListener(`touchstart`, this.onTouchStart),
            this.element.removeEventListener(`touchmove`, this.onTouchMove),
            this.element.removeEventListener(`touchend`, this.onTouchEnd));
        }
      }),
      (V = class {
        constructor({
          wrapper: e = i,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: a = !0,
          syncTouch: o = !1,
          syncTouchLerp: s = 0.075,
          touchInertiaMultiplier: c = 35,
          duration: l,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = 0.1,
          infinite: f = !1,
          orientation: p = `vertical`,
          gestureOrientation: m = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v,
          virtualScroll: y,
          __experimental__naiveDimensions: b = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.userData = {}),
            (this.lastVelocity = 0),
            (this.velocity = 0),
            (this.direction = 0),
            (this.onPointerDown = (e) => {
              e.button === 1 && this.reset();
            }),
            (this.onVirtualScroll = (e) => {
              if (
                typeof this.options.virtualScroll == `function` &&
                !1 === this.options.virtualScroll(e)
              )
                return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if (
                (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey)
              )
                return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                ((this.isTouching = r.type === `touchstart` || r.type === `touchmove`),
                this.options.syncTouch &&
                  i &&
                  r.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let o = t === 0 && n === 0,
                s =
                  (this.options.gestureOrientation === `vertical` && n === 0) ||
                  (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent;
              if (
                c.find(
                  (e) =>
                    e instanceof Element &&
                    ((typeof l == `function` && l?.(e)) ||
                      e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                      (i && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                      (a && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                      (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`)))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void r.preventDefault();
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              r.preventDefault();
              let u = n;
              this.options.gestureOrientation === `both`
                ? (u = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (u = t);
              let d = i && this.options.syncTouch,
                f = i && r.type === `touchend` && Math.abs(u) > 5;
              (f && (u = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + u,
                  Object.assign(
                    { programmatic: !1 },
                    d
                      ? { lerp: f ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (i.lenisVersion = `1.1.9`),
            (e && e !== document.documentElement && e !== document.body) || (e = i),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: a,
              syncTouch: o,
              syncTouchLerp: s,
              touchInertiaMultiplier: c,
              duration: l,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: m,
              orientation: p,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              virtualScroll: y,
              __experimental__naiveDimensions: b,
            }),
            (this.animate = new I()),
            (this.emitter = new R()),
            (this.dimensions = new L({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1),
            (this.virtualScroll = new B(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: a = this.options.duration,
            easing: o = this.options.easing,
            lerp: s = this.options.lerp,
            onStart: c,
            onComplete: l,
            force: u = !1,
            programmatic: d = !0,
            userData: f = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
            else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e instanceof HTMLElement && e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== i) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (
              typeof e == `number` &&
              ((e += t),
              (e = Math.round(e)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (e = F(0, e, this.limit)),
              e !== this.targetScroll)
            ) {
              if (((this.userData = f), n))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  l?.(this),
                  void (this.userData = {})
                );
              (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: a,
                  easing: o,
                  lerp: s,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this.__preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              delete this.__preventNextNativeScrollEvent;
            }));
        }
        get rootElement() {
          return this.options.wrapper === i ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function ne(e) {
  let { intensity: n } = e,
    r = s(null);
  return (
    t(() => {
      if (r.current)
        try {
          r.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [r]),
    t(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            n = t && t.style && t.style.overflow === `hidden`;
          r.current && (e || n ? r.current.stop() : r.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, n;
      try {
        ((t = new MutationObserver(e)),
          (n = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            n.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), n && n.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    t(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = i.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    t(() => {
      try {
        if (typeof V != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        r.current = new V({ duration: (n || 10) / 10 });
        let e = (t) => {
            if (r.current)
              try {
                (r.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          t = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(t), r.current))
            try {
              (r.current.destroy(), (r.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [n]),
    t(() => {
      try {
        if (!document || !r.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(i.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  a = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = i.getComputedStyle(e).scrollMarginTop;
                      a = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: a, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, n) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                r.current && t && r.current.scrollTo(t, { offset: -(n || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          n = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && n[t] && e.addEventListener(`click`, n[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && n[t] && e.removeEventListener(`click`, n[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [r]),
    l(`div`, { style: e.style })
  );
}
var H,
  re,
  ie = e(() => {
    (r(),
      p(),
      y(),
      te(),
      o(),
      (H = x(
        ne,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (re = H),
      (H.displayName = `Smooth Scroll`),
      b(H, {
        intensity: {
          title: `Intensity`,
          type: A.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  });
function ae(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var oe,
  se,
  ce,
  U,
  W,
  le,
  ue,
  de,
  fe,
  G,
  pe,
  me = e(() => {
    (p(),
      y(),
      _(),
      o(),
      (oe = [`ZRUlqdzB5`, `XolEYst5Z`, `GVYGZcCCV`, `nOKgs1SEl`, `H6h6fviq3`, `dgixlhc1H`]),
      (se = `framer-ntqkk`),
      (ce = {
        dgixlhc1H: `framer-v-k3mkki`,
        GVYGZcCCV: `framer-v-1sec14z`,
        H6h6fviq3: `framer-v-1pa687j`,
        nOKgs1SEl: `framer-v-175hg0z`,
        XolEYst5Z: `framer-v-12fbzkm`,
        ZRUlqdzB5: `framer-v-nqp7i`,
      }),
      (U = { bounce: 0, delay: 0, duration: 0.2, type: `spring` }),
      (W = ({ value: e, children: t }) => {
        let r = n(h),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (le = {
        "Desktop 2": `XolEYst5Z`,
        "Phone 2": `nOKgs1SEl`,
        "Tablet 2": `dgixlhc1H`,
        Desktop: `ZRUlqdzB5`,
        Phone: `GVYGZcCCV`,
        Tablet: `H6h6fviq3`,
      }),
      (ue = m.create(d)),
      (de = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: le[r.variant] ?? r.variant ?? `ZRUlqdzB5`,
      })),
      (fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = x(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = O();
          k();
          let { style: u, className: p, layoutId: h, variant: _, ...y } = de(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: A,
              setVariant: ee,
              variants: j,
            } = w({
              cycleOrder: oe,
              defaultVariant: `ZRUlqdzB5`,
              ref: r,
              variant: _,
              variantClassNames: ce,
            }),
            M = fe(e, j),
            N = v(se);
          return l(g, {
            id: h ?? i,
            children: l(ue, {
              animate: j,
              initial: !1,
              children: l(W, {
                value: U,
                children: l(m.div, {
                  ...y,
                  ...T,
                  className: v(N, `framer-nqp7i`, p, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `ZRUlqdzB5`,
                  ref: r,
                  style: { ...u },
                  ...ae(
                    {
                      dgixlhc1H: { "data-framer-name": `Tablet 2` },
                      GVYGZcCCV: { "data-framer-name": `Phone` },
                      H6h6fviq3: { "data-framer-name": `Tablet` },
                      nOKgs1SEl: { "data-framer-name": `Phone 2` },
                      XolEYst5Z: { "data-framer-name": `Desktop 2` },
                    },
                    b,
                    E
                  ),
                  children: l(W, {
                    value: U,
                    children: l(S, {
                      __fromCanvasComponent: !0,
                      children: f(d, {
                        children: [
                          l(m.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                              "--framer-font-family": `"Outfit", sans-serif`,
                              "--framer-font-size": `200px`,
                              "--framer-font-weight": `900`,
                              "--framer-line-height": `180px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                            },
                            children: `AB*`,
                          }),
                          l(m.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                              "--framer-font-family": `"Outfit", sans-serif`,
                              "--framer-font-size": `200px`,
                              "--framer-font-weight": `900`,
                              "--framer-line-height": `180px`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-2gxw0f, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                            },
                            children: `/26`,
                          }),
                        ],
                      }),
                      className: `framer-xubtra`,
                      fonts: [`FS;Outfit-black`],
                      layoutDependency: M,
                      layoutId: `MgLS3vKmR`,
                      style: {
                        "--extracted-2gxw0f": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...ae(
                        {
                          dgixlhc1H: {
                            children: f(d, {
                              children: [
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `120px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `110px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Artjom`,
                                }),
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `120px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `110px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `/2026`,
                                }),
                              ],
                            }),
                          },
                          GVYGZcCCV: {
                            children: f(d, {
                              children: [
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `90px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-line-height": `80px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `AB*`,
                                }),
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `90px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-line-height": `80px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `/26`,
                                }),
                              ],
                            }),
                          },
                          H6h6fviq3: {
                            children: f(d, {
                              children: [
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `120px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-line-height": `110px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `AB*`,
                                }),
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `120px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-line-height": `110px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `/26`,
                                }),
                              ],
                            }),
                          },
                          nOKgs1SEl: {
                            children: f(d, {
                              children: [
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `90px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `80px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Artjom`,
                                }),
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `90px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `80px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `/2026`,
                                }),
                              ],
                            }),
                          },
                          XolEYst5Z: {
                            children: f(d, {
                              children: [
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `200px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `180px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `Artjom`,
                                }),
                                l(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7T3V0Zml0LWJsYWNr`,
                                    "--framer-font-family": `"Outfit", sans-serif`,
                                    "--framer-font-size": `200px`,
                                    "--framer-font-weight": `900`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `180px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                  },
                                  children: `/2026`,
                                }),
                              ],
                            }),
                          },
                        },
                        b,
                        E
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ntqkk.framer-1vmrbr, .framer-ntqkk .framer-1vmrbr { display: block; }`,
          `.framer-ntqkk.framer-nqp7i { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-ntqkk .framer-xubtra { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-ntqkk`
      )),
      (pe = G),
      (G.displayName = `FooterText`),
      (G.defaultProps = { height: 360, width: 376 }),
      b(G, {
        variant: {
          options: [`ZRUlqdzB5`, `XolEYst5Z`, `GVYGZcCCV`, `nOKgs1SEl`, `H6h6fviq3`, `dgixlhc1H`],
          optionTitles: [`Desktop`, `Desktop 2`, `Phone`, `Phone 2`, `Tablet`, `Tablet 2`],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      j(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/QWBFHLNJNNJC3X2PA4WN6Q2H5G7OG6MX.woff2`,
                weight: `900`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  K,
  he,
  ge,
  _e,
  ve,
  ye,
  q,
  be,
  xe = e(() => {
    (p(),
      y(),
      o(),
      (K = `var(--framer-icon-mask)`),
      (he = u(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ge = m.create(he)),
      (_e = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(ge, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (ve = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 13 0 L 0 13 M 13 0 L 3 0 M 13 0 L 13 10" fill="transparent" height="13px" id="DzL2VWb89" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5.5 5.5)" width="13px"/></svg>`),
      (ye = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (q = x(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = ye(e),
            u = T(`132019778`, ve);
          return l(_e, {
            ...c,
            className: v(`framer-faZej`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-faZej { -webkit-mask: ${K}; aspect-ratio: 1; display: block; mask: ${K}; width: 24px; }`,
        ],
        `framer-faZej`
      )),
      (q.displayName = `Arrow Top Right`),
      (be = q),
      b(q, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: A.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: A.Number,
        },
      }));
  }),
  Se,
  Ce,
  we,
  Te = e(() => {
    (y(),
      E.loadFonts([]),
      (Se = [{ explicitInter: !0, fonts: [] }]),
      (Ce = [
        `.framer-nAvIP .framer-styles-preset-1oxs5d7:not(.rich-text-wrapper), .framer-nAvIP .framer-styles-preset-1oxs5d7.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-4277ec07-6b7c-4224-b5fc-ef6ee750288b, #ffe815); --framer-link-hover-text-decoration: underline; --framer-link-hover-text-decoration-skip-ink: none; --framer-link-hover-text-decoration-style: solid; --framer-link-hover-text-decoration-thickness: 8px; --framer-link-text-background-corner-shape: superellipse(1); }`,
      ]),
      (we = `framer-nAvIP`));
  });
function Ee(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  J,
  Ie,
  Le = e(() => {
    (p(),
      y(),
      _(),
      o(),
      Te(),
      (De = [`YN2PiCfKL`, `dL0KB8uoX`, `A3DEEFWfS`, `iw4ulhat6`]),
      (Oe = `framer-8xGg9`),
      (ke = {
        A3DEEFWfS: `framer-v-fm8gwf`,
        dL0KB8uoX: `framer-v-skduoy`,
        iw4ulhat6: `framer-v-1bjxm2m`,
        YN2PiCfKL: `framer-v-14p5yj2`,
      }),
      (Ae = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (je = ({ value: e, children: t }) => {
        let r = n(h),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (Me = {
        Desktop_Pink: `dL0KB8uoX`,
        Desktop: `YN2PiCfKL`,
        Phone_Pink: `iw4ulhat6`,
        Phone: `A3DEEFWfS`,
      }),
      (Ne = m.create(d)),
      (Pe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Me[r.variant] ?? r.variant ?? `YN2PiCfKL`,
      })),
      (Fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = x(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = O();
          k();
          let { style: u, className: p, layoutId: h, variant: _, ...y } = Pe(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: A,
              setGestureState: ee,
              setVariant: j,
              variants: M,
            } = w({
              cycleOrder: De,
              defaultVariant: `YN2PiCfKL`,
              ref: r,
              variant: _,
              variantClassNames: ke,
            }),
            N = Fe(e, M),
            P = v(Oe, we);
          return l(g, {
            id: h ?? i,
            children: l(Ne, {
              animate: M,
              initial: !1,
              children: l(je, {
                value: Ae,
                children: f(m.nav, {
                  ...y,
                  ...E,
                  className: v(P, `framer-14p5yj2`, p, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
                  layoutId: `YN2PiCfKL`,
                  ref: r,
                  style: { ...u },
                  ...Ee(
                    {
                      A3DEEFWfS: { "data-framer-name": `Phone` },
                      dL0KB8uoX: { "data-framer-name": `Desktop_Pink` },
                      iw4ulhat6: { "data-framer-name": `Phone_Pink` },
                    },
                    b,
                    D
                  ),
                  children: [
                    l(S, {
                      __fromCanvasComponent: !0,
                      children: l(d, {
                        children: l(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `29px`,
                            "--framer-font-weight": `700`,
                            "--framer-letter-spacing": `0px`,
                            "--framer-line-height": `2em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: l(C, {
                            href: { webPageId: `JerseRN6g` },
                            motionChild: !0,
                            nodeId: `oNG6wgiOm`,
                            openInNewTab: !1,
                            relValues: [],
                            scopeId: `MC7n1vjD0`,
                            smoothScroll: !1,
                            children: l(m.a, {
                              className: `framer-styles-preset-1oxs5d7`,
                              "data-styles-preset": `EZslgxeys`,
                              children: `about`,
                            }),
                          }),
                        }),
                      }),
                      className: `framer-1e12rvl`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: N,
                      layoutId: `oNG6wgiOm`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      variants: {
                        dL0KB8uoX: { "--extracted-r6o4lv": `rgb(255, 117, 246)` },
                        iw4ulhat6: {
                          "--extracted-r6o4lv": `var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ee(
                        {
                          A3DEEFWfS: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `JerseRN6g` },
                                  motionChild: !0,
                                  nodeId: `oNG6wgiOm`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `MC7n1vjD0`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `about`,
                                  }),
                                }),
                              }),
                            }),
                          },
                          dL0KB8uoX: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `29px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 117, 246))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `JerseRN6g` },
                                  motionChild: !0,
                                  nodeId: `oNG6wgiOm`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `MC7n1vjD0`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `about`,
                                  }),
                                }),
                              }),
                            }),
                          },
                          iw4ulhat6: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `JerseRN6g` },
                                  motionChild: !0,
                                  nodeId: `oNG6wgiOm`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `MC7n1vjD0`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `about`,
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        b,
                        D
                      ),
                    }),
                    l(S, {
                      __fromCanvasComponent: !0,
                      children: l(d, {
                        children: l(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `29px`,
                            "--framer-font-weight": `700`,
                            "--framer-letter-spacing": `0px`,
                            "--framer-line-height": `2em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: l(C, {
                            href: { webPageId: `WYHwmHybk` },
                            motionChild: !0,
                            nodeId: `oJPLok_nd`,
                            openInNewTab: !1,
                            relValues: [],
                            scopeId: `MC7n1vjD0`,
                            smoothScroll: !1,
                            children: l(m.a, {
                              className: `framer-styles-preset-1oxs5d7`,
                              "data-styles-preset": `EZslgxeys`,
                              children: `lab`,
                            }),
                          }),
                        }),
                      }),
                      className: `framer-1ta6nko`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: N,
                      layoutId: `oJPLok_nd`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      variants: {
                        dL0KB8uoX: { "--extracted-r6o4lv": `rgb(255, 117, 246)` },
                        iw4ulhat6: {
                          "--extracted-r6o4lv": `var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ee(
                        {
                          A3DEEFWfS: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `WYHwmHybk` },
                                  motionChild: !0,
                                  nodeId: `oJPLok_nd`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `MC7n1vjD0`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `lab`,
                                  }),
                                }),
                              }),
                            }),
                          },
                          dL0KB8uoX: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `29px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 117, 246))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `WYHwmHybk` },
                                  motionChild: !0,
                                  nodeId: `oJPLok_nd`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `MC7n1vjD0`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `lab`,
                                  }),
                                }),
                              }),
                            }),
                          },
                          iw4ulhat6: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `WYHwmHybk` },
                                  motionChild: !0,
                                  nodeId: `oJPLok_nd`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `MC7n1vjD0`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `lab`,
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        b,
                        D
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-8xGg9.framer-dp8zx1, .framer-8xGg9 .framer-dp8zx1 { display: block; }`,
          `.framer-8xGg9.framer-14p5yj2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 64px; justify-content: space-between; mix-blend-mode: difference; overflow: visible; padding: 0px 50px 15px 50px; position: relative; width: 1200px; }`,
          `.framer-8xGg9 .framer-1e12rvl, .framer-8xGg9 .framer-1ta6nko { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8xGg9.framer-v-fm8gwf.framer-14p5yj2, .framer-8xGg9.framer-v-1bjxm2m.framer-14p5yj2 { padding: 0px 24px 10px 24px; width: 390px; }`,
          ...Ce,
        ],
        `framer-8xGg9`
      )),
      (Ie = J),
      (J.displayName = `NavigationBot`),
      (J.defaultProps = { height: 64, width: 1200 }),
      b(J, {
        variant: {
          options: [`YN2PiCfKL`, `dL0KB8uoX`, `A3DEEFWfS`, `iw4ulhat6`],
          optionTitles: [`Desktop`, `Desktop_Pink`, `Phone`, `Phone_Pink`],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      j(
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
                url: `../../assets/misc/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2`,
                weight: `700`,
              },
            ],
          },
          ...P(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  Y,
  We,
  Ge = e(() => {
    (p(),
      y(),
      o(),
      (Re = `var(--framer-icon-mask)`),
      (ze = u(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Be = m.create(ze)),
      (Ve = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(Be, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (He = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14 14 L 17 17 M 16 10 L 20 10 M 6 6 L 3 3 M 14 6 L 17 3 M 6 14 L 3 17 M 0 10 L 4 10 M 10 0 L 10 4 M 10 16 L 10 20" fill="transparent" height="20px" id="jpL_8PIsz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (Ue = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Y = x(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Ue(e),
            u = T(`245652042`, He);
          return l(Ve, {
            ...c,
            className: v(`framer-xKQV0`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-xKQV0 { -webkit-mask: ${Re}; aspect-ratio: 1; display: block; mask: ${Re}; width: 24px; }`,
        ],
        `framer-xKQV0`
      )),
      (Y.displayName = `Loading Spinner`),
      (We = Y),
      b(Y, {
        CRY1Fpez4: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: A.Color },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: A.Number,
        },
      }));
  });
function Ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  X,
  $e,
  et,
  tt,
  nt,
  rt,
  Z,
  it,
  at = e(() => {
    (p(),
      y(),
      _(),
      o(),
      xe(),
      Ge(),
      (qe = {
        ddmNZILe2: { pressed: !0 },
        EI0WZtA8z: { pressed: !0 },
        KaZbXU7Hw: { pressed: !0 },
        T2APWzmIm: { pressed: !0 },
        ymH31qajX: { pressed: !0 },
      }),
      (Je = [`KaZbXU7Hw`, `T2APWzmIm`, `EI0WZtA8z`, `ymH31qajX`, `ddmNZILe2`]),
      (Ye = `framer-BbbZ5`),
      (Xe = {
        ddmNZILe2: `framer-v-1i3x78b`,
        EI0WZtA8z: `framer-v-wj57av`,
        KaZbXU7Hw: `framer-v-1o9f18v`,
        T2APWzmIm: `framer-v-kzdvn4`,
        ymH31qajX: `framer-v-1x4u4tp`,
      }),
      (Ze = { duration: 0, type: `tween` }),
      (Qe = (e, t) => `translateY(-50%) ${t}`),
      (X = (e, t) => `translate(-50%, -50%) ${t}`),
      ($e = ({ value: e, children: t }) => {
        let r = n(h),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (et = {
        Default: `KaZbXU7Hw`,
        dragCursor: `ddmNZILe2`,
        enterCursor: `T2APWzmIm`,
        homeCursor: `ymH31qajX`,
        playCursor: `EI0WZtA8z`,
      }),
      (tt = m.create(d)),
      (nt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: et[r.variant] ?? r.variant ?? `KaZbXU7Hw`,
      })),
      (rt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = x(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = O();
          k();
          let { style: u, className: p, layoutId: h, variant: _, ...y } = nt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: A,
              setGestureState: ee,
              setVariant: j,
              variants: N,
            } = w({
              cycleOrder: Je,
              defaultVariant: `KaZbXU7Hw`,
              enabledGestures: qe,
              ref: r,
              variant: _,
              variantClassNames: Xe,
            }),
            P = rt(e, N),
            F = v(Ye);
          return l(g, {
            id: h ?? i,
            children: l(tt, {
              animate: N,
              initial: !1,
              children: l($e, {
                value: Ze,
                children: f(m.div, {
                  ...y,
                  ...T,
                  className: v(F, `framer-1o9f18v`, p, x),
                  "data-framer-name": `Default`,
                  layoutDependency: P,
                  layoutId: `KaZbXU7Hw`,
                  ref: r,
                  style: { ...u },
                  ...Ke(
                    {
                      "ddmNZILe2-pressed": { "data-framer-name": void 0 },
                      "EI0WZtA8z-pressed": { "data-framer-name": void 0 },
                      "KaZbXU7Hw-pressed": { "data-framer-name": void 0 },
                      "T2APWzmIm-pressed": { "data-framer-name": void 0 },
                      "ymH31qajX-pressed": { "data-framer-name": void 0 },
                      ddmNZILe2: { "data-framer-name": `dragCursor` },
                      EI0WZtA8z: { "data-framer-name": `playCursor` },
                      T2APWzmIm: { "data-framer-name": `enterCursor` },
                      ymH31qajX: { "data-framer-name": `homeCursor` },
                    },
                    b,
                    E
                  ),
                  children: [
                    l(M, {
                      className: `framer-11hn3g7`,
                      layoutDependency: P,
                      layoutId: `strQgKML8`,
                      requiresOverflowVisible: !1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                      withExternalLayout: !0,
                      ...Ke(
                        {
                          "ddmNZILe2-pressed": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 45" overflow="visible"><path d="M 22.5 0 C 34.926 0 45 10.074 45 22.5 C 45 34.926 34.926 45 22.5 45 C 10.074 45 0 34.926 0 22.5 C 0 10.074 10.074 0 22.5 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          "EI0WZtA8z-pressed": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 45" overflow="visible"><path d="M 22.5 0 C 34.926 0 45 10.074 45 22.5 C 45 34.926 34.926 45 22.5 45 C 10.074 45 0 34.926 0 22.5 C 0 10.074 10.074 0 22.5 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          "KaZbXU7Hw-pressed": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 Z" fill="rgb(255, 255, 255)" opacity="0"></path></svg>`,
                          },
                          "T2APWzmIm-pressed": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 45" overflow="visible"><path d="M 22.5 0 C 34.926 0 45 10.074 45 22.5 C 45 34.926 34.926 45 22.5 45 C 10.074 45 0 34.926 0 22.5 C 0 10.074 10.074 0 22.5 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          "ymH31qajX-pressed": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 45" overflow="visible"><path d="M 22.5 0 C 34.926 0 45 10.074 45 22.5 C 45 34.926 34.926 45 22.5 45 C 10.074 45 0 34.926 0 22.5 C 0 10.074 10.074 0 22.5 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          ddmNZILe2: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" overflow="visible"><path d="M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          EI0WZtA8z: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" overflow="visible"><path d="M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          T2APWzmIm: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" overflow="visible"><path d="M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                          ymH31qajX: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" overflow="visible"><path d="M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z" fill="var(--token-09add85e-6c81-465f-8c44-0591b81a82be, rgb(254, 60, 1))"></path></svg>`,
                          },
                        },
                        b,
                        E
                      ),
                    }),
                    l(S, {
                      __fromCanvasComponent: !0,
                      children: l(d, {
                        children: l(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `700`,
                            "--framer-line-height": `1em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: `▶`,
                        }),
                      }),
                      className: `framer-5igaz6`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: P,
                      layoutId: `N2O3WU1hm`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0,
                      },
                      transformTemplate: Qe,
                      variants: { EI0WZtA8z: { opacity: 1 } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(S, {
                      __fromCanvasComponent: !0,
                      children: l(d, {
                        children: l(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `700`,
                            "--framer-line-height": `1em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: `drag`,
                        }),
                      }),
                      className: `framer-wul58`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: P,
                      layoutId: `TA7fNZ42N`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0,
                      },
                      transformTemplate: X,
                      variants: { ddmNZILe2: { opacity: 1 } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(S, {
                      __fromCanvasComponent: !0,
                      children: l(d, {
                        children: l(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `700`,
                            "--framer-line-height": `1em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: `home`,
                        }),
                      }),
                      className: `framer-1mo76rg`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: P,
                      layoutId: `cfiDOW9uX`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 0,
                      },
                      transformTemplate: X,
                      variants: { ymH31qajX: { opacity: 1 } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(D, {
                      animated: !0,
                      className: `framer-1r94lix`,
                      Component: We,
                      layoutDependency: P,
                      layoutId: `xmLsejM0n`,
                      style: {
                        "--1ww558a": 3,
                        "--4rxgx6": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        opacity: 0,
                      },
                      transformTemplate: X,
                      variants: {
                        "KaZbXU7Hw-pressed": { "--1ww558a": 2, opacity: 1 },
                        T2APWzmIm: { opacity: 1 },
                      },
                      ...Ke({ T2APWzmIm: { Component: be } }, b, E),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-BbbZ5.framer-1jkb5r9, .framer-BbbZ5 .framer-1jkb5r9 { display: block; }`,
          `.framer-BbbZ5.framer-1o9f18v { cursor: pointer; height: 60px; mix-blend-mode: difference; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 60px; }`,
          `.framer-BbbZ5 .framer-11hn3g7 { height: 15px; left: 23px; position: absolute; top: 23px; width: 15px; }`,
          `.framer-BbbZ5 .framer-5igaz6 { flex: none; height: auto; left: 26px; position: absolute; top: 52%; white-space: pre; width: auto; }`,
          `.framer-BbbZ5 .framer-wul58, .framer-BbbZ5 .framer-1mo76rg { flex: none; height: auto; left: 50%; position: absolute; top: 48%; white-space: pre; width: auto; }`,
          `.framer-BbbZ5 .framer-1r94lix { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; width: 24px; }`,
          `.framer-BbbZ5.framer-v-kzdvn4.framer-1o9f18v, .framer-BbbZ5.framer-v-wj57av.framer-1o9f18v, .framer-BbbZ5.framer-v-1x4u4tp.framer-1o9f18v, .framer-BbbZ5.framer-v-1i3x78b.framer-1o9f18v, .framer-BbbZ5.framer-v-1i3x78b.pressed.framer-1o9f18v, .framer-BbbZ5.framer-v-1x4u4tp.pressed.framer-1o9f18v, .framer-BbbZ5.framer-v-wj57av.pressed.framer-1o9f18v, .framer-BbbZ5.framer-v-kzdvn4.pressed.framer-1o9f18v { mix-blend-mode: unset; }`,
          `.framer-BbbZ5.framer-v-kzdvn4 .framer-11hn3g7, .framer-BbbZ5.framer-v-wj57av .framer-11hn3g7, .framer-BbbZ5.framer-v-1x4u4tp .framer-11hn3g7, .framer-BbbZ5.framer-v-1i3x78b .framer-11hn3g7 { height: 56px; left: 2px; top: 2px; width: 56px; }`,
          `.framer-BbbZ5.framer-v-kzdvn4 .framer-5igaz6, .framer-BbbZ5.framer-v-kzdvn4 .framer-wul58, .framer-BbbZ5.framer-v-kzdvn4 .framer-1mo76rg { top: 50%; }`,
          `.framer-BbbZ5.framer-v-1i3x78b.pressed .framer-11hn3g7, .framer-BbbZ5.framer-v-1x4u4tp.pressed .framer-11hn3g7, .framer-BbbZ5.framer-v-wj57av.pressed .framer-11hn3g7, .framer-BbbZ5.framer-v-kzdvn4.pressed .framer-11hn3g7 { height: 45px; left: 8px; top: 8px; width: 45px; }`,
          `.framer-BbbZ5.framer-v-1o9f18v.pressed .framer-1r94lix { height: var(--framer-aspect-ratio-supported, 28px); width: 28px; }`,
        ],
        `framer-BbbZ5`
      )),
      (it = Z),
      (Z.displayName = `Cursor`),
      (Z.defaultProps = { height: 60, width: 60 }),
      b(Z, {
        variant: {
          options: [`KaZbXU7Hw`, `T2APWzmIm`, `EI0WZtA8z`, `ymH31qajX`, `ddmNZILe2`],
          optionTitles: [`Default`, `enterCursor`, `playCursor`, `homeCursor`, `dragCursor`],
          title: `Variant`,
          type: A.Enum,
        },
      }),
      j(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  $,
  gt,
  _t = e(() => {
    (p(),
      y(),
      _(),
      o(),
      Te(),
      (ot = N(m.div)),
      (st = [`PJQL26TjW`, `yAuW89ZY2`, `jm7dtRG0L`, `WgEhqFyTq`]),
      (ct = `framer-QK7R8`),
      (lt = {
        jm7dtRG0L: `framer-v-hvwqga`,
        PJQL26TjW: `framer-v-18pgsk2`,
        WgEhqFyTq: `framer-v-a393b6`,
        yAuW89ZY2: `framer-v-twpuhr`,
      }),
      (ut = { bounce: 0, delay: 0, duration: 0.5, type: `spring` }),
      (dt = ({ value: e, children: t }) => {
        let r = n(h),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(h.Provider, { value: o, children: t });
      }),
      (ft = {
        Desktop_Pink: `jm7dtRG0L`,
        Desktop: `PJQL26TjW`,
        Phone_Pink: `WgEhqFyTq`,
        Phone: `yAuW89ZY2`,
      }),
      (pt = m.create(d)),
      (mt = ({ click: e, cursor: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        dHsy3xrhB: t ?? a.dHsy3xrhB,
        qH7I3P9bl: e ?? a.qH7I3P9bl,
        variant: ft[a.variant] ?? a.variant ?? `PJQL26TjW`,
      })),
      (ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = x(
        u(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = O();
          k();
          let {
              style: u,
              className: p,
              layoutId: h,
              variant: _,
              dHsy3xrhB: y,
              qH7I3P9bl: b,
              ...x
            } = mt(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: N,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = w({
              cycleOrder: st,
              defaultVariant: `PJQL26TjW`,
              ref: r,
              variant: _,
              variantClassNames: lt,
            }),
            L = ht(e, I),
            { activeVariantCallback: R, delay: z } = ee(T),
            B = R(async (...e) => {
              if ((P({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            V = v(ct, we);
          return l(g, {
            id: h ?? i,
            children: l(pt, {
              animate: I,
              initial: !1,
              children: l(dt, {
                value: ut,
                children: f(m.nav, {
                  ...x,
                  ...A,
                  className: v(V, `framer-18pgsk2`, p, E),
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: L,
                  layoutId: `PJQL26TjW`,
                  onTap: B,
                  ref: r,
                  style: { ...u },
                  ...Q(
                    {
                      jm7dtRG0L: { "data-framer-name": `Desktop_Pink` },
                      WgEhqFyTq: { "data-framer-name": `Phone_Pink` },
                      yAuW89ZY2: { "data-framer-name": `Phone` },
                    },
                    T,
                    j
                  ),
                  children: [
                    l(C, {
                      href: { webPageId: `KMvorioYR` },
                      motionChild: !0,
                      nodeId: `t8MzRzk_u`,
                      openInNewTab: !1,
                      scopeId: `yk6i18qEx`,
                      children: l(m.a, {
                        className: `framer-zakoz0 framer-6w2tvt`,
                        "data-framer-cursor": y,
                        "data-framer-name": `Logo`,
                        layoutDependency: L,
                        layoutId: `t8MzRzk_u`,
                        children: l(S, {
                          __fromCanvasComponent: !0,
                          children: l(d, {
                            children: l(m.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7T3V0Zml0LWV4dHJhYm9sZA==`,
                                "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                "--framer-font-size": `30px`,
                                "--framer-font-weight": `800`,
                                "--framer-letter-spacing": `0.7px`,
                                "--framer-line-height": `2em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                              },
                              children: `AB`,
                            }),
                          }),
                          className: `framer-1ipfg4g`,
                          fonts: [`FS;Outfit-extrabold`],
                          layoutDependency: L,
                          layoutId: `pnl5Kmc39`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          variants: {
                            jm7dtRG0L: {
                              "--extracted-r6o4lv": `var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))`,
                            },
                            WgEhqFyTq: {
                              "--extracted-r6o4lv": `var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Q(
                            {
                              jm7dtRG0L: {
                                children: l(d, {
                                  children: l(m.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWV4dHJhYm9sZA==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `30px`,
                                      "--framer-font-weight": `800`,
                                      "--framer-letter-spacing": `0.7px`,
                                      "--framer-line-height": `2em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246)))`,
                                    },
                                    children: `AB`,
                                  }),
                                }),
                              },
                              WgEhqFyTq: {
                                children: l(d, {
                                  children: l(m.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWV4dHJhYm9sZA==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `25px`,
                                      "--framer-font-weight": `800`,
                                      "--framer-letter-spacing": `0.7px`,
                                      "--framer-line-height": `2em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246)))`,
                                    },
                                    children: `AB`,
                                  }),
                                }),
                              },
                              yAuW89ZY2: {
                                children: l(d, {
                                  children: l(m.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7T3V0Zml0LWV4dHJhYm9sZA==`,
                                      "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                      "--framer-font-size": `25px`,
                                      "--framer-font-weight": `800`,
                                      "--framer-letter-spacing": `0.7px`,
                                      "--framer-line-height": `2em`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                    },
                                    children: `AB`,
                                  }),
                                }),
                              },
                            },
                            T,
                            j
                          ),
                        }),
                      }),
                    }),
                    l(ot, {
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
                            y: 0,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 720,
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
                      __framer__transformTrigger: `onScroll`,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-3glozl`,
                      "data-framer-name": `Asterisk`,
                      layoutDependency: L,
                      layoutId: `MEHZbZGFW`,
                      children: l(M, {
                        className: `framer-1hndy06`,
                        layoutDependency: L,
                        layoutId: `t21nYbmjg`,
                        requiresOverflowVisible: !1,
                        style: { rotate: -17 },
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.853 13.293" overflow="visible"><path d="M 5.507 13.286 L 5.479 8.406 L 1.766 11.174 L 0 7.758 L 4.357 6.267 L 0.731 3.534 L 3.409 0.773 L 6.027 4.5 L 7.489 0 L 10.871 1.836 L 8.165 5.687 L 12.853 5.722 L 12.244 9.538 L 7.834 8.013 L 9.268 12.672 L 5.52 13.293 Z" fill="var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))"></path></svg>`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            jm7dtRG0L: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.853 13.293" overflow="visible"><path d="M 5.507 13.286 L 5.479 8.406 L 1.766 11.174 L 0 7.758 L 4.357 6.267 L 0.731 3.534 L 3.409 0.773 L 6.027 4.5 L 7.489 0 L 10.871 1.836 L 8.165 5.687 L 12.853 5.722 L 12.244 9.538 L 7.834 8.013 L 9.268 12.672 L 5.52 13.293 Z" fill="var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))"></path></svg>`,
                            },
                            WgEhqFyTq: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.876 11.248" overflow="visible"><path d="M 4.659 11.242 L 4.636 7.113 L 1.494 9.455 L 0 6.564 L 3.686 5.303 L 0.618 2.99 L 2.885 0.654 L 5.1 3.808 L 6.337 0 L 9.199 1.553 L 6.909 4.812 L 10.876 4.841 L 10.361 8.071 L 6.628 6.78 L 7.842 10.722 L 4.671 11.248 Z" fill="var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))"></path></svg>`,
                            },
                            yAuW89ZY2: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.876 11.248" overflow="visible"><path d="M 4.659 11.242 L 4.636 7.113 L 1.494 9.455 L 0 6.564 L 3.686 5.303 L 0.618 2.99 L 2.885 0.654 L 5.1 3.808 L 6.337 0 L 9.199 1.553 L 6.909 4.812 L 10.876 4.841 L 10.361 8.071 L 6.628 6.78 L 7.842 10.722 L 4.671 11.248 Z" fill="var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))"></path></svg>`,
                            },
                          },
                          T,
                          j
                        ),
                      }),
                    }),
                    l(S, {
                      __fromCanvasComponent: !0,
                      children: l(d, {
                        children: l(m.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                            "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                            "--framer-font-size": `30px`,
                            "--framer-font-weight": `700`,
                            "--framer-letter-spacing": `0px`,
                            "--framer-line-height": `2em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                          },
                          children: l(C, {
                            href: { webPageId: `vjUZoXgWM` },
                            motionChild: !0,
                            nodeId: `J8wAd4rDb`,
                            openInNewTab: !1,
                            relValues: [],
                            scopeId: `yk6i18qEx`,
                            smoothScroll: !1,
                            children: l(m.a, {
                              className: `framer-styles-preset-1oxs5d7`,
                              "data-styles-preset": `EZslgxeys`,
                              children: `work`,
                            }),
                          }),
                        }),
                      }),
                      className: `framer-1tqmegq`,
                      fonts: [`FS;Outfit-bold`],
                      layoutDependency: L,
                      layoutId: `J8wAd4rDb`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      variants: {
                        jm7dtRG0L: {
                          "--extracted-r6o4lv": `var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))`,
                        },
                        WgEhqFyTq: {
                          "--extracted-r6o4lv": `var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Q(
                        {
                          jm7dtRG0L: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `30px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `vjUZoXgWM` },
                                  motionChild: !0,
                                  nodeId: `J8wAd4rDb`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `yk6i18qEx`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `work`,
                                  }),
                                }),
                              }),
                            }),
                          },
                          WgEhqFyTq: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `25px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69b47068-34df-4637-ad97-4a2db9998be9, rgb(255, 117, 246)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `vjUZoXgWM` },
                                  motionChild: !0,
                                  nodeId: `J8wAd4rDb`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `yk6i18qEx`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `work`,
                                  }),
                                }),
                              }),
                            }),
                          },
                          yAuW89ZY2: {
                            children: l(d, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7T3V0Zml0LWJvbGQ=`,
                                  "--framer-font-family": `"Outfit", "Outfit Placeholder", sans-serif`,
                                  "--framer-font-size": `25px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(255, 255, 255)))`,
                                },
                                children: l(C, {
                                  href: { webPageId: `vjUZoXgWM` },
                                  motionChild: !0,
                                  nodeId: `J8wAd4rDb`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `yk6i18qEx`,
                                  smoothScroll: !1,
                                  children: l(m.a, {
                                    className: `framer-styles-preset-1oxs5d7`,
                                    "data-styles-preset": `EZslgxeys`,
                                    children: `work`,
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        T,
                        j
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QK7R8.framer-6w2tvt, .framer-QK7R8 .framer-6w2tvt { display: block; }`,
          `.framer-QK7R8.framer-18pgsk2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: 64px; justify-content: space-between; overflow: visible; padding: 15px 50px 0px 50px; position: relative; width: 1200px; }`,
          `.framer-QK7R8 .framer-zakoz0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 20px 0px 0px; position: relative; text-decoration: none; width: min-content; z-index: 1; }`,
          `.framer-QK7R8 .framer-1ipfg4g, .framer-QK7R8 .framer-1tqmegq { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-QK7R8 .framer-3glozl { align-content: center; align-items: center; aspect-ratio: 0.9411764705882353 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 19px); justify-content: center; left: 80px; overflow: visible; padding: 0px; position: absolute; top: 25px; width: 18px; z-index: 0; }`,
          `.framer-QK7R8 .framer-1hndy06 { height: 14px; position: relative; width: 13px; }`,
          `.framer-QK7R8.framer-v-twpuhr.framer-18pgsk2, .framer-QK7R8.framer-v-a393b6.framer-18pgsk2 { height: 50px; padding: 10px 24px 0px 24px; width: 390px; }`,
          `.framer-QK7R8.framer-v-twpuhr .framer-3glozl, .framer-QK7R8.framer-v-a393b6 .framer-3glozl { left: 47px; top: 16px; }`,
          `.framer-QK7R8.framer-v-twpuhr .framer-1hndy06, .framer-QK7R8.framer-v-a393b6 .framer-1hndy06 { height: 11px; width: 11px; }`,
          ...Ce,
        ],
        `framer-QK7R8`
      )),
      (gt = $),
      ($.displayName = `Navigation`),
      ($.defaultProps = { height: 64, width: 1200 }),
      b($, {
        variant: {
          options: [`PJQL26TjW`, `yAuW89ZY2`, `jm7dtRG0L`, `WgEhqFyTq`],
          optionTitles: [`Desktop`, `Phone`, `Desktop_Pink`, `Phone_Pink`],
          title: `Variant`,
          type: A.Enum,
        },
        dHsy3xrhB: { title: `Cursor`, type: A.CustomCursor },
        qH7I3P9bl: { title: `Click`, type: A.EventHandler },
      }),
      j(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Outfit`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Outfit`,
                url: `../../assets/misc/H5PDA446U7YOJH5A6HXMFOX33XDBMWB5.woff2`,
                weight: `800`,
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
          ...P(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export {
  We as a,
  Le as c,
  pe as d,
  me as f,
  it as i,
  be as l,
  ie as m,
  gt as n,
  Ge as o,
  re as p,
  at as r,
  Ie as s,
  _t as t,
  xe as u,
};
//# sourceMappingURL=yk6i18qEx.CnQf8P0b.mjs.map
