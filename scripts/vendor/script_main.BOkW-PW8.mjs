import { t as e } from "./rolldown-runtime.p8eEpTWT.mjs";
import {
  A as t,
  F as n,
  I as r,
  L as i,
  M as a,
  S as o,
  T as s,
  a as c,
  b as l,
  g as u,
  i as d,
  j as f,
  k as p,
  m,
  n as h,
  r as g,
  t as _,
  u as v,
} from "./react.Bb_yyrg0.mjs";
import {
  G as y,
  K as b,
  Q as x,
  St as S,
  Tt as C,
  U as w,
  W as T,
  Y as E,
  Z as D,
  d as O,
  et as k,
  i as A,
  lt as j,
  m as M,
  mt as N,
  o as P,
  p as F,
  q as I,
  rt as L,
  u as R,
} from "./framer.cs1Z8Vda.mjs";
async function z({ routeId: e, pathVariables: n, localeId: r, collectionItemId: o }) {
  let c = H[e].page.preload(),
    u = v(F, {
      children: v(P, {
        children: v(O, {
          children: v(M, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: n,
            routes: H,
            collectionUtils: W,
            framerSiteId: G,
            notFoundPage: I(
              () => import("./-3mkUl0uYrqswUsQ-bcIytn1hJAsm4dltORis_zG-8g.4eRR5M_W.mjs")
            ),
            isReducedMotion: void 0,
            localeId: r,
            locales: U,
            preserveQueryParams: !0,
            siteCanonicalURL: `https://artjom-portfolio.5zm9ccr6m9.workers.dev`,
            EditorBar:
              i === void 0
                ? void 0
                : (() => {
                    if (q) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return I(async () => {
                      i.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: L, useLocaleInfo: j, useRouter: N },
                        react: {
                          createElement: v,
                          Fragment: f,
                          memo: m,
                          useCallback: p,
                          useEffect: t,
                          useRef: s,
                          useState: a,
                          useLayoutEffect: l,
                        },
                        "react-dom": { createPortal: d },
                      };
                      let { createEditorBar: e } = await import(
                        `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !1,
            loadSnippetsModule: new R(
              () => import("./4oER2ai2KoVzLjvaUPK2EPLdBSnzDtQbRCvSACjlOFk.DdfT9t0x.mjs")
            ),
            initialCollectionItemId: o,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: { routes: {} },
    });
  return (await c, u);
}
function B() {
  K && i.__framer_events.push(arguments);
}
async function V(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || i.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    B(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, s, c;
    if (e)
      ((c = JSON.parse(t.dataset.framerHydrateV2)),
        (r = c.routeId),
        (a = c.localeId),
        (o = c.pathVariables),
        (s = c.breakpoints),
        (r = D(H, r)));
    else {
      D(H, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = w(H, decodeURIComponent(location.pathname), !0, U);
        ((r = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let l = z({ routeId: r, localeId: a, pathVariables: o, collectionItemId: c?.collectionItemId });
    i !== void 0 &&
      (async () => {
        let e = H[r],
          t = U.find(({ id: e }) => (a ? e === a : e === `default`)).code,
          n = c?.collectionItemId ?? null;
        if (n === null && e?.collectionId && W) {
          let r = await W[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          i.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: G ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: i.location.href,
              hostname: i.location.hostname || null,
              pathname: i.location.pathname || null,
              hash: i.location.hash || null,
              search: i.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await C({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let d = await l;
    e
      ? (S(`framer-rewrite-breakpoints`, () => {
          (x(s), i.__framer_onRewriteBreakpoints?.(s));
        }),
        (q ? (e) => e() : u)(() => {
          (E(), k(), _(t, d, { onRecoverableError: n }));
        }))
      : g(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var H, U, W, G, K, q;
e(() => {
  if (
    (n(),
    y(),
    o(),
    c(),
    h(),
    (H = {
      KMvorioYR: {
        elements: {
          bM04fR14P: `indexfooter`,
          idZny8EYk: `top`,
          JkWXrvQQj: `whatido`,
          jT8rvFpy1: `images`,
          kbY2vMClY: `client`,
          MivpxP5Sr: `lky100`,
          MpDyUXQWv: `featured`,
          rlF1kepKG: `showreel`,
          sxn5LS4dS: `intro`,
          TX8sNigqd: `showreelmain`,
        },
        page: I(() => import("./uAy19rv68a0trw2t95x4JWErpTX4cUpjF5Bdy6nAJFw.D7I6sHch.mjs")),
        path: `/`,
      },
      vjUZoXgWM: {
        elements: {
          Fd5knT876: `top`,
          NZlZBjjyn: `showreelmain`,
          S910wOOkv: `selectedwork`,
          TM5EFM2EV: `indexfooter`,
        },
        page: I(() => import("./WoyxPdQt3duHKHWc40flJrtpvfW5BDMeySG08vpi-I8.Dptaj8ik.mjs")),
        path: `/work`,
      },
      JerseRN6g: {
        elements: { DtU2fb3Gb: `top`, NJZLbYpRT: `aboutmedetails`, POen3wtuP: `indexfooter` },
        page: I(() => import("./D0lh4E8zb0ezxPaTCd4uSTh5uhyCgccZ3ADoQt6oSKQ.BRnltetj.mjs")),
        path: `/about`,
      },
      WYHwmHybk: {
        elements: { OyVf6qF81: `top` },
        page: I(() => import("./b2qR61hgFBqtYA-EGuLPSC4EYdBr4-jdIBfCPcU6uI4.D9mNy5Fh.mjs")),
        path: `/lab`,
      },
      BQfPzQxJd: {
        elements: { BZYbUSh30: `workherovideo`, uOvuMn8mB: `indexfooter`, X2KiOONm5: `top` },
        page: I(() => import("./vDZN_ISvn_0ctw4w2HZ44PK2jpqLXeE54aHd3XbHyWc.DbREvaLP.mjs")),
        path: `/work/leveling-up-rev-illimité`,
      },
      yQH2AVVxR: {
        elements: { jQ6kaiRsU: `indexfooter`, OvzFHffPN: `top`, UhZ2I4ZFk: `workherovideo` },
        page: I(() => import("./32HlDVUoWklNJ2hP8cNMBceM6HZeWNobADv0fcVpUDo.DWhtAncc.mjs")),
        path: `/work/jinqiu-jiayuan-by-bytedance`,
      },
      Q1TLs1t8l: {
        elements: { dSLhlLBIJ: `indexfooter`, e1pb3vy8d: `workherovideo`, y7xxLGQA6: `top` },
        page: I(() => import("./j78mO5YgyZzYNyd0iZ43p08L546UEqh8B_YR1hM75RE.6Y-pNI1O.mjs")),
        path: `/work/the-rev-playground`,
      },
      eAldQdI30: {
        elements: { cdQHJrBdO: `top`, Rby3Z_YSU: `indexfooter`, ZNVm2vGcQ: `workherovideo` },
        page: I(() => import("./eQCeL-EgNtqbbLiLXuQxQwY5g1LzROjcU2sNJM3KE7I.DVDhnJiW.mjs")),
        path: `/work/sit-virtual-open-house`,
      },
      HC6lAXg5r: {
        elements: { mcJC88hwT: `top`, PDJSjvBKk: `workherovideo`, skwhMO8i4: `indexfooter` },
        page: I(() => import("./qh4RWAexM9Eh-_a5Js8_N4dkuMgQmh9jIlRzD6ql5Ss.CSmPzZ2-.mjs")),
        path: `/work/advancing-with-thermo-fisher-scientific`,
      },
      m9lVh9iu2: {
        elements: { KvZUqDoxt: `indexfooter`, uUZyukORT: `top` },
        page: I(() => import("./sxrbdkUd7C3_I0eiGAFpMjOr8I_cd5ZdoCS7_35zBZk.Dxvv5Hbc.mjs")),
        path: `/work/tsui-wah-restaurant`,
      },
      f4PIrYHTh: {
        elements: { mKpfqhoz9: `indexfooter`, VCqCRhauy: `top` },
        page: I(() => import("./anHwdefX3nxBk1exUAhj5jEpDJ5C0U449ZLgoiZfXuA.fGBCIk30.mjs")),
        path: `/work/lky100`,
      },
      m93indqJA: {
        elements: { AvT2PpWRn: `top`, gbrMHe0Bl: `indexfooter` },
        page: I(() => import("./jTd8eHwVr4g4MY-d9cB_1NYBRXqdN9KMYNdSGuajEzo.BKKPaOHi.mjs")),
        path: `/work/ranger-buddies-quest`,
      },
      KCyUwDA56: {
        elements: { fS_0cxVWT: `indexfooter`, naXzwhcrb: `top` },
        page: I(() => import("./DooSEW2qshTYU2GXOKd32m4xEVhJuvHb4SDTaXc5VXw.Egq0Yj7E.mjs")),
        path: `/work/jumbo-signatures`,
      },
      ijlwf42cr: {
        elements: { D6keZ1Wpm: `workherovideo`, PVt6rOmFi: `top`, xqVNXfHT8: `indexfooter` },
        page: I(() => import("./KlD7PR-PNUBQfNe7gXiFGeCA02IBpFNjPwzaCp-F--E.CViMXefN.mjs")),
        path: `/case-study/cs-leveling-up-rev-illimité`,
      },
      dSDNeIh6R: {
        elements: { aHAruA3CG: `workherovideo`, CcUtnhmwK: `top`, jmPStNPZ3: `indexfooter` },
        page: I(() => import("./Jb5kwfM9HZfrK9oZsoQOS7qSh61bCf0JugEMbPhv3qc.DoPpUNiU.mjs")),
        path: `/case-study/cs-jinqiu-jiayuan-by-bytedance`,
      },
      ZgFmrycH0: {
        elements: { jAfeVstFp: `workherovideo`, UvGvRcRqz: `indexfooter`, zdtEVNMr8: `top` },
        page: I(() => import("./Tcp9y-Q5p-BDK7loAw8jUK2XZgKbBa8YpkUhTTC85WU.CBBG4hFP.mjs")),
        path: `/case-study/cs-sit-virtual-open-house`,
      },
      rSZTiGLn6: {
        elements: { syATc_9HM: `workherovideo`, trrZONSzZ: `top`, v0ONkASEg: `indexfooter` },
        page: I(() => import("./pcnuWgNB4NOdYWB6gV0HJioRAYV3usFLMs9r3BWertY.BCKntAzn.mjs")),
        path: `/case-study/cs-the-rev-playground`,
      },
      tx7a9a68N: {
        elements: { Z7HKFmOQD: `indexfooter` },
        page: I(() => import("./-3mkUl0uYrqswUsQ-bcIytn1hJAsm4dltORis_zG-8g.4eRR5M_W.mjs")),
        path: `/404`,
      },
    }),
    (U = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (W = {}),
    (G = `39409819419a5f40817237d6227ab05dc6813be01624872dea2f7b2f3afb5c88`),
    (K = typeof document < `u`),
    (q = K && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(r.userAgent)),
    K)
  ) {
    ((i.__framer_importFromPackage = (e, t) => () =>
      v(A, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (i.__framer_events = i.__framer_events || []),
      T(),
      b());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? V(!0, e) : V(!1, e);
  }
})();
export { z as getPageRoot };
//# sourceMappingURL=script_main.BOkW-PW8.mjs.map
