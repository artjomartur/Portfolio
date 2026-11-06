import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  D as n,
  I as r,
  L as i,
  M as a,
  N as o,
  P as s,
  R as c,
  _ as l,
  a as u,
  h as d,
  i as f,
  j as p,
  m,
  n as h,
  p as g,
  r as _,
  t as v,
  u as y,
  x as b,
} from "./react.D20wc1Tc.mjs";
import {
  $ as x,
  At as S,
  G as C,
  J as w,
  K as T,
  X as E,
  _ as D,
  at as O,
  d as k,
  gt as A,
  h as j,
  it as M,
  kt as N,
  q as P,
  s as F,
  st as I,
  tt as L,
  ut as R,
  v as z,
  xt as B,
} from "./framer.DLo72eib.mjs";
async function V({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: l,
  contentLocaleId: u,
  shouldResolveInitialRouteContentState: m = !1,
}) {
  let h = W[e].page.preload();
  (O({
    checkServerSideRouter: !1,
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    M(q));
  let g = y(D, {
    children: y(k, {
      children: y(z, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: r,
        routes: W,
        collectionUtils: K,
        framerSiteId: q,
        notFoundPage: w(() => import("./26_dmwB_ze1CEXS2N0B1FEBcq0Vpqk4fzJi1PccIB8A.DiUwhzZA.mjs")),
        isReducedMotion: void 0,
        localeId: i,
        locales: G,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://myos.framer.website`,
        EditorBar:
          c === void 0
            ? void 0
            : (() => {
                if (Y) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return w(async () => {
                  c.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: R, useLocaleInfo: A, useRouter: B },
                    react: {
                      createElement: y,
                      Fragment: o,
                      memo: d,
                      useCallback: p,
                      useEffect: a,
                      useRef: n,
                      useState: s,
                      useLayoutEffect: b,
                    },
                    "react-dom": { createPortal: f },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new j(
          () => import("./2c8s8WF1AwLn8X-1lAl6grCst0nhmT0FvoRtCn3K9Cc.wFUEeHC7.mjs")
        ),
        initialCollectionItemId: l,
        initialContentLocaleIdOverride: u,
      }),
    }),
    value: { routes: {} },
  });
  return (await h, g);
}
function H() {
  J && c.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
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
    H(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (a = d.contentLocaleId),
        (o = d.pathVariables),
        (s = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = x(W, r)));
    else {
      x(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = C(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let f = V({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    c !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          l = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: q,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await S({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (N(`framer-rewrite-breakpoints`, () => {
          (L(u), c.__framer_onRewriteBreakpoints?.(u));
        }),
        (Y ? (e) => e() : l)(() => {
          (E(), I(), v(t, p, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y;
e(() => {
  if (
    (r(),
    P(),
    t(),
    u(),
    h(),
    (W = {
      augiA20Il: {
        elements: {},
        page: w(() => import("./KYBaa_i78h2urv6K9sJZNWqQ6kgx3FVbnx01P4195Qk.BLdDJXzD.mjs")),
        path: `/`,
      },
      x_ez6ywFs: {
        elements: {},
        page: w(() => import("./26_dmwB_ze1CEXS2N0B1FEBcq0Vpqk4fzJi1PccIB8A.DiUwhzZA.mjs")),
        path: `/404`,
      },
    }),
    (G = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {}),
    (q = `7cc52e964aaa4270f686fdbd0186a2b4a277fb5b81abe149d17becaaeef2a577`),
    (J = typeof document < `u`),
    (Y = J && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
    J)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      y(F, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (c.__framer_events = c.__framer_events || []),
      T());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.BIaQZkv_.mjs.map
