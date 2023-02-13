(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3454: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(7663);
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(3915);
        },
      ]);
    },
    227: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, o) {
          {
            let a = n(2554).normalizeLocalePath,
              i = n(4643).detectDomainLocale,
              l = t || a(e, r).detectedLocale,
              s = i(o, void 0, l);
            if (s) {
              let c = "http".concat(s.http ? "" : "s", "://"),
                u = l === s.defaultLocale ? "" : "/".concat(l);
              return ""
                .concat(c)
                .concat(s.domain)
                .concat("")
                .concat(u)
                .concat(e);
            }
            return !1;
          }
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1551: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2648).Z,
        o = n(7273).Z,
        a = r(n(7294)),
        i = n(1003),
        l = n(7795),
        s = n(4465),
        c = n(2692),
        u = n(8245),
        d = n(9246),
        p = n(227),
        h = n(3468);
      let f = new Set();
      function m(e, t, n, r) {
        if (i.isLocalURL(t)) {
          if (!r.bypassPrefetchedCheck) {
            let o =
                void 0 !== r.locale
                  ? r.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              a = t + "%" + n + "%" + o;
            if (f.has(a)) return;
            f.add(a);
          }
          Promise.resolve(e.prefetch(t, n, r)).catch((e) => {});
        }
      }
      function v(e) {
        return "string" == typeof e ? e : l.formatUrl(e);
      }
      let g = a.default.forwardRef(function (e, t) {
        let n, r;
        let {
            href: l,
            as: f,
            children: g,
            prefetch: y,
            passHref: w,
            replace: _,
            shallow: C,
            scroll: x,
            locale: b,
            onClick: T,
            onMouseEnter: E,
            onTouchStart: M,
            legacyBehavior: k = !1,
          } = e,
          j = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = g),
          k &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = a.default.createElement("a", null, n));
        let N = !1 !== y,
          H = a.default.useContext(c.RouterContext),
          S = a.default.useContext(u.AppRouterContext),
          G = null != H ? H : S,
          O = !H,
          { href: L, as: A } = a.default.useMemo(() => {
            if (!H) {
              let e = v(l);
              return { href: e, as: f ? v(f) : e };
            }
            let [t, n] = i.resolveHref(H, l, !0);
            return { href: t, as: f ? i.resolveHref(H, f) : n || t };
          }, [H, l, f]),
          P = a.default.useRef(L),
          D = a.default.useRef(A);
        k && (r = a.default.Children.only(n));
        let I = k ? r && "object" == typeof r && r.ref : t,
          [V, Z, B] = d.useIntersection({ rootMargin: "200px" }),
          W = a.default.useCallback(
            (e) => {
              (D.current !== A || P.current !== L) &&
                (B(), (D.current = A), (P.current = L)),
                V(e),
                I &&
                  ("function" == typeof I
                    ? I(e)
                    : "object" == typeof I && (I.current = e));
            },
            [A, I, L, B, V]
          );
        a.default.useEffect(() => {
          G && Z && N && m(G, L, A, { locale: b });
        }, [A, L, Z, b, N, null == H ? void 0 : H.locale, G]);
        let R = {
          ref: W,
          onClick(e) {
            k || "function" != typeof T || T(e),
              k &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              G &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, l, s, c, u, d) {
                  let { nodeName: p } = e.currentTarget,
                    h = "A" === p.toUpperCase();
                  if (
                    h &&
                    ((function (e) {
                      let { target: t } = e.currentTarget;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !i.isLocalURL(n))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, r, {
                          shallow: l,
                          locale: c,
                          scroll: s,
                        })
                      : t[o ? "replace" : "push"](r || n, {
                          forceOptimisticNavigation: !d,
                        });
                  };
                  u ? a.default.startTransition(f) : f();
                })(e, G, L, A, _, C, x, b, O, N);
          },
          onMouseEnter(e) {
            k || "function" != typeof E || E(e),
              k &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              G &&
                (N || !O) &&
                m(G, L, A, {
                  locale: b,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            k || "function" != typeof M || M(e),
              k &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              G &&
                (N || !O) &&
                m(G, L, A, {
                  locale: b,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!k || w || ("a" === r.type && !("href" in r.props))) {
          let F = void 0 !== b ? b : null == H ? void 0 : H.locale,
            U =
              (null == H ? void 0 : H.isLocaleDomain) &&
              p.getDomainLocale(
                A,
                F,
                null == H ? void 0 : H.locales,
                null == H ? void 0 : H.domainLocales
              );
          R.href =
            U ||
            h.addBasePath(
              s.addLocale(A, F, null == H ? void 0 : H.defaultLocale)
            );
        }
        return k
          ? a.default.cloneElement(r, R)
          : a.default.createElement("a", Object.assign({}, j, R), n);
      });
      (t.default = g),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2554: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeLocalePath = void 0);
      let r = (e, t) => n(4769).normalizeLocalePath(e, t);
      (t.normalizeLocalePath = r),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9246: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: n, disabled: s } = e,
            c = s || !a,
            [u, d] = r.useState(!1),
            [p, h] = r.useState(null);
          r.useEffect(() => {
            if (a) {
              if (!c && !u && p && p.tagName) {
                let e = (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = l.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = i.get(r))) return t;
                    let o = new Map(),
                      a = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            n = e.isIntersecting || e.intersectionRatio > 0;
                          t && n && t(n);
                        });
                      }, e);
                    return (
                      (t = { id: n, observer: a, elements: o }),
                      l.push(n),
                      i.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), i.delete(r);
                        let t = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        t > -1 && l.splice(t, 1);
                      }
                    }
                  );
                })(p, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
                return e;
              }
            } else if (!u) {
              let r = o.requestIdleCallback(() => d(!0));
              return () => o.cancelIdleCallback(r);
            }
          }, [p, c, n, t, u]);
          let f = r.useCallback(() => {
            d(!1);
          }, []);
          return [h, u, f];
        });
      var r = n(7294),
        o = n(4686);
      let a = "function" == typeof IntersectionObserver,
        i = new Map(),
        l = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4019: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = n(5893),
        o = n(7294),
        a = n(9008),
        i = n.n(a);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var s = ["keyOverride"],
        c = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        u = function (e, t, n) {
          void 0 === t && (t = []);
          var r = void 0 === n ? {} : n,
            a = r.defaultWidth,
            i = r.defaultHeight;
          return t.reduce(function (t, n, r) {
            return (
              t.push(
                o.createElement("meta", {
                  key: "og:" + e + ":0" + r,
                  property: "og:" + e,
                  content: n.url,
                })
              ),
              n.alt &&
                t.push(
                  o.createElement("meta", {
                    key: "og:" + e + ":alt0" + r,
                    property: "og:" + e + ":alt",
                    content: n.alt,
                  })
                ),
              n.secureUrl &&
                t.push(
                  o.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + r,
                    property: "og:" + e + ":secure_url",
                    content: n.secureUrl.toString(),
                  })
                ),
              n.type &&
                t.push(
                  o.createElement("meta", {
                    key: "og:" + e + ":type0" + r,
                    property: "og:" + e + ":type",
                    content: n.type.toString(),
                  })
                ),
              n.width
                ? t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":width0" + r,
                      property: "og:" + e + ":width",
                      content: n.width.toString(),
                    })
                  )
                : a &&
                  t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":width0" + r,
                      property: "og:" + e + ":width",
                      content: a.toString(),
                    })
                  ),
              n.height
                ? t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":height" + r,
                      property: "og:" + e + ":height",
                      content: n.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    o.createElement("meta", {
                      key: "og:" + e + ":height" + r,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        d = function (e) {
          var t,
            n,
            r,
            a,
            i,
            d = [];
          e.titleTemplate && (c.templateTitle = e.titleTemplate);
          var p = "";
          e.title
            ? ((p = e.title),
              c.templateTitle &&
                (p = c.templateTitle.replace(/%s/g, function () {
                  return p;
                })))
            : e.defaultTitle && (p = e.defaultTitle),
            p && d.push(o.createElement("title", { key: "title" }, p));
          var h = e.noindex || c.noindex || e.dangerouslySetAllPagesToNoIndex,
            f = e.nofollow || c.nofollow || e.dangerouslySetAllPagesToNoFollow,
            m = "";
          if (e.robotsProps) {
            var v = e.robotsProps,
              g = v.nosnippet,
              y = v.maxSnippet,
              w = v.maxImagePreview,
              _ = v.maxVideoPreview,
              C = v.noarchive,
              x = v.noimageindex,
              b = v.notranslate,
              T = v.unavailableAfter;
            m =
              (g ? ",nosnippet" : "") +
              (y ? ",max-snippet:" + y : "") +
              (w ? ",max-image-preview:" + w : "") +
              (C ? ",noarchive" : "") +
              (T ? ",unavailable_after:" + T : "") +
              (x ? ",noimageindex" : "") +
              (_ ? ",max-video-preview:" + _ : "") +
              (b ? ",notranslate" : "");
          }
          if (
            (h || f
              ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0),
                d.push(
                  o.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (h ? "noindex" : "index") +
                      "," +
                      (f ? "nofollow" : "follow") +
                      m,
                  })
                ))
              : d.push(
                  o.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + m,
                  })
                ),
            e.description &&
              d.push(
                o.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.themeColor &&
              d.push(
                o.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                })
              ),
            e.mobileAlternate &&
              d.push(
                o.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                d.push(
                  o.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                d.push(
                  o.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                d.push(
                  o.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                d.push(
                  o.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              d.push(
                o.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || p) &&
              d.push(
                o.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (a = e.openGraph) ? void 0 : a.title) || p,
                })
              ),
            ((null != (n = e.openGraph) && n.description) || e.description) &&
              d.push(
                o.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (i = e.openGraph) ? void 0 : i.description) ||
                    e.description,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                d.push(
                  o.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var E = e.openGraph.type.toLowerCase();
              d.push(
                o.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: E,
                })
              ),
                "profile" === E && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      d.push(
                        o.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      d.push(
                        o.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      d.push(
                        o.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      d.push(
                        o.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === E && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      d.push(
                        o.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      d.push(
                        o.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === E && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      d.push(
                        o.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      d.push(
                        o.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      d.push(
                        o.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      d.push(
                        o.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === E ||
                      "video.episode" === E ||
                      "video.tv_show" === E ||
                      "video.other" === E) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          d.push(
                            o.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            d.push(
                              o.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      d.push(
                        o.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      d.push(
                        o.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        d.push(
                          o.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      d.push(
                        o.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                d.push.apply(
                  d,
                  u("image", e.openGraph.images, {
                    defaultWidth: c.defaultOpenGraphImageWidth,
                    defaultHeight: c.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                d.push.apply(
                  d,
                  u("video", e.openGraph.videos, {
                    defaultWidth: c.defaultOpenGraphVideoWidth,
                    defaultHeight: c.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                d.push.apply(d, u("audio", e.openGraph.audio)),
              e.openGraph.locale &&
                d.push(
                  o.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                d.push(
                  o.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              d.push(
                o.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  n,
                  r = e.keyOverride,
                  a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = {},
                      a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                      (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                  })(e, s);
                d.push(
                  o.createElement(
                    "meta",
                    l(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (n = null != r ? r : a.name)
                              ? n
                              : a.property)
                            ? t
                            : a.httpEquiv),
                      },
                      a
                    )
                  )
                );
              }),
            null != (r = e.additionalLinkTags) &&
              r.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                d.push(
                  o.createElement(
                    "link",
                    l(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                );
              }),
            d
          );
        },
        p = function (e) {
          return o.createElement(i(), null, d(e));
        },
        h = function (e) {
          var t = e.title,
            n = e.themeColor,
            r = e.noindex,
            a = void 0 !== r && r,
            i = e.nofollow,
            l = e.robotsProps,
            s = e.description,
            c = e.canonical,
            u = e.openGraph,
            h = e.facebook,
            f = e.twitter,
            m = e.additionalMetaTags,
            v = e.titleTemplate,
            g = e.defaultTitle,
            y = e.mobileAlternate,
            w = e.languageAlternates,
            _ = e.additionalLinkTags,
            C = e.useAppDir;
          return o.createElement(
            o.Fragment,
            null,
            void 0 !== C && C
              ? d({
                  title: t,
                  themeColor: n,
                  noindex: a,
                  nofollow: i,
                  robotsProps: l,
                  description: s,
                  canonical: c,
                  facebook: h,
                  openGraph: u,
                  additionalMetaTags: m,
                  twitter: f,
                  titleTemplate: v,
                  defaultTitle: g,
                  mobileAlternate: y,
                  languageAlternates: w,
                  additionalLinkTags: _,
                })
              : o.createElement(p, {
                  title: t,
                  themeColor: n,
                  noindex: a,
                  nofollow: i,
                  robotsProps: l,
                  description: s,
                  canonical: c,
                  facebook: h,
                  openGraph: u,
                  additionalMetaTags: m,
                  twitter: f,
                  titleTemplate: v,
                  defaultTitle: g,
                  mobileAlternate: y,
                  languageAlternates: w,
                  additionalLinkTags: _,
                })
          );
        };
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            })
          ).join("") +
          "]",
        "g"
      );
      let f = (e) => {
          let { title: t, description: n, slug: r } = e,
            o = t
              ? "".concat(t, " — Aino")
              : "Aino — Design and Technology Agency",
            a = r ? "https://aino.agency/".concat(r) : "https://aino.agency",
            i = {
              title: o,
              canonical: a,
              openGraph: {
                url: a,
                title: o,
                type: "website",
                images: [
                  {
                    url: "https://aino.agency/aino.jpg",
                    width: 1200,
                    height: 627,
                    alt: "Aino — Design and Technology Agency",
                    type: "image/jpg",
                  },
                  {
                    url: "https://aino.agency/aino-square.jpg",
                    width: 1024,
                    height: 1024,
                    alt: "Aino — Design and Technology Agency",
                    type: "image/jpg",
                  },
                ],
              },
              siteName: "Aino",
              additionalLinkTags: [
                {
                  rel: "apple-touch-icon",
                  href: "/apple-touch-icon.png",
                  sizes: "180x180",
                },
                { rel: "manifest", href: "/site.webmanifest" },
              ],
              additionalMetaTags: [{ name: "theme-color", content: "#161615" }],
            };
          return n && ((i.description = n), (i.openGraph.description = n)), i;
        },
        m = (e) => {
          let { title: t, slug: n, description: o } = e;
          return (0, r.jsx)(h, { ...f({ title: t, slug: n, description: o }) });
        };
      var v = m;
    },
    6868: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(7294),
        a = n(1102),
        i = n.n(a),
        l = n(11);
      let s = '<span class="'.concat(i().square, ' nofade"></span>'),
        c = (0, o.forwardRef)((e, t) => {
          let { children: n, onComplete: a, animate: c = !0, inverted: u } = e,
            [d, p] = (0, o.useState)(!1),
            h = (0, o.useRef)(null);
          if ("string" != typeof n)
            throw Error("TerminalText children can only be text");
          let f = (0, o.useRef)(!1),
            m = (0, o.useRef)(null),
            v = (e) => {
              h.current && (h.current.innerHTML = e.join(""));
            };
          return ((0, o.useImperativeHandle)(t, () => ({
            clear() {
              h.current && ((h.current.innerHTML = ""), p(!1));
            },
            async start() {
              if (d) return;
              f.current = !1;
              let e = n.split(""),
                t = !0;
              p(!0);
              for (let r = 0; r < 2; r++)
                v([
                  "\xa0",
                  t ? s : "",
                  ...e.map((e) =>
                    "\\" === e
                      ? "<br />"
                      : " " === e || "-" === e
                      ? " "
                      : "\xa0"
                  ),
                ]),
                  (t = !t),
                  (m.current = await (0, l.Z)(400));
              for (let o = 0; o <= n.length && !f.current; o++) {
                m.current = await (0, l.Z)(40);
                let i = e.map((e, t) =>
                  "\\" === e
                    ? "<br />"
                    : t < o
                    ? e
                    : " " === e || "-" === e
                    ? " "
                    : "\xa0"
                );
                o < n.length && i.splice(o + 1, 0, s), v([...i, "\xa0"]);
              }
              for (let c = 0; c < 2 && !f.current; c++)
                v([
                  ...e.map((e) => ("\\" === e ? "<br />" : e)),
                  "\xa0",
                  t ? s : "",
                ]),
                  (t = !t),
                  (m.current = await (0, l.Z)(400));
              v([...e.map((e) => ("\\" === e ? "<br />" : e)), "\xa0"]),
                a && a();
            },
          })),
          (0, o.useEffect)(
            () => () => {
              clearTimeout(m.current), (f.current = !0);
            },
            []
          ),
          c)
            ? (0, r.jsx)("span", {
                ref: h,
                className: [
                  i().text,
                  d ? i().started : "",
                  u ? i().inverted : "",
                ].join(" "),
                children: n,
              })
            : (0, r.jsx)("span", {
                ref: h,
                className: [i().text, i().started, u ? i().inverted : ""].join(
                  " "
                ),
                children: n
                  .split("")
                  .map((e) => ("\\" === e ? (0, r.jsx)("br", {}, "br") : e)),
              });
        });
      (c.displayName = "TerminalText"), (t.Z = c);
    },
    3915: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return et;
          },
        });
      var r = n(5893),
        o = n(9008),
        a = n.n(o),
        i = n(7294),
        l = n(1664),
        s = n.n(l),
        c = n(6760),
        u = n(1475);
      let d = (e) => {
        let { hideClass: t } = e,
          n = t ? { className: t } : {};
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 1453 220",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M50.7093 158.603C42.2563 158.603 34.1083 156.793 26.2566 153.181C18.4049 149.569 12.0695 144.286 7.24169 137.349C2.4139 130.412 0 122.126 0 112.473C0 101.42 2.56204 92.5766 7.69484 85.9443C12.8276 79.3121 19.8166 74.29 28.6705 70.8694C37.5243 67.4575 47.1799 65.0466 57.6459 63.6366L78.4734 61.2257C82.4995 60.6251 85.7151 59.7721 88.129 58.6667C90.5429 57.5614 92.2509 56.1514 93.2618 54.4454C94.264 52.7395 94.7694 50.581 94.7694 47.9611C94.7694 43.1393 92.7564 38.8657 88.7303 35.1492C84.7042 31.4327 78.9702 29.5701 71.528 29.5701C66.0902 29.5701 61.3147 30.5797 57.1928 32.5816C53.0622 34.5922 49.8465 37.3077 47.5285 40.7196C45.2105 44.1402 43.7551 48.4572 43.1539 53.6882H3.01519C3.81692 43.4352 7.04126 34.2962 12.6795 26.254C18.309 18.2204 25.9603 11.9885 35.6159 7.55829C45.2802 3.14548 56.6438 0.926025 69.7241 0.926025C84.8175 0.926025 97.0874 3.48493 106.551 8.61144C116.006 13.738 122.9 21.171 127.231 30.9192C131.553 40.6674 133.723 52.4784 133.723 66.3435V153.172H97.2007V147.445C97.2007 145.034 97.3489 142.675 97.6539 140.36C97.9589 138.054 98.3075 135.686 98.7083 133.275C94.6823 140.508 88.7913 146.54 81.0529 151.362C73.3058 156.184 63.1883 158.595 50.718 158.595L50.7093 158.603ZM61.8812 129.959C68.3211 129.959 74.1075 128.558 79.2403 125.738C84.3731 122.927 88.3992 118.958 91.3185 113.831C94.2291 108.705 95.6931 102.83 95.6931 96.1974V81.1224C94.2814 82.3323 92.2684 83.3854 89.654 84.2906C87.0397 85.1958 83.4145 86.1532 78.7872 87.1542L67.319 89.2605C61.8899 90.2701 57.0011 91.6714 52.6787 93.4818C48.3477 95.2922 45.0797 97.5551 42.8663 100.262C40.6528 102.978 39.5461 106.442 39.5461 110.663C39.5461 116.895 41.7073 121.665 46.0383 124.981C50.3607 128.297 55.6503 129.951 61.8899 129.951L61.8812 129.959Z",
            }),
            (0, r.jsx)("path", {
              d: "M166.274 6.05273H146.658V36.8031V122.422V153.181H185.899V122.422V6.05273H166.274Z",
            }),
            (0, r.jsx)("path", {
              d: "M200.903 153.181V6.05245H239.839V12.0842C239.839 14.0947 239.787 16.3055 239.691 18.7164C239.586 21.1274 239.333 23.6427 238.933 26.2539C241.747 21.6322 245.12 17.4109 249.041 13.5899C252.963 9.77766 257.843 6.70524 263.682 4.39004C269.52 2.08354 276.361 0.917236 284.204 0.917236C295.071 0.917236 304.378 3.32818 312.125 8.15876C319.872 12.9806 325.754 19.8131 329.781 28.6561C333.807 37.4991 335.82 47.9523 335.82 60.007V153.163H296.884V66.0475C296.884 59.0148 295.829 52.9831 293.712 47.961C291.603 42.939 288.579 39.0223 284.657 36.2023C280.736 33.391 275.952 31.9809 270.322 31.9809C264.283 31.9809 259.046 33.4867 254.627 36.5069C250.2 39.5184 246.671 43.6962 244.065 49.0142C241.451 54.3409 240.144 60.3204 240.144 66.9526V153.181H200.903V153.181Z",
            }),
            (0, r.jsx)("path", {
              d: "M420.775 158.603C405.882 158.603 392.705 155.487 381.229 149.255C369.76 143.023 360.75 134.085 354.214 122.422C347.669 110.767 344.401 96.5976 344.401 79.9125C344.401 67.8491 346.31 56.952 350.135 47.2038C353.952 37.4556 359.242 29.1696 365.987 22.3285C372.723 15.496 380.723 10.2216 389.987 6.49635C399.241 2.77984 409.507 0.917236 420.775 0.917236C435.668 0.917236 448.844 4.13763 460.321 10.5697C471.789 17.0018 480.791 26.1494 487.335 38.0039C493.871 49.8672 497.148 63.8367 497.148 79.9125C497.148 95.9884 493.871 110.767 487.335 122.422C480.791 134.076 471.789 143.023 460.321 149.255C448.852 155.487 435.668 158.603 420.775 158.603V158.603ZM420.775 128.149C427.816 128.149 434.099 126.243 439.641 122.422C445.175 118.609 449.497 113.074 452.617 105.841C455.737 98.6082 457.297 89.9654 457.297 79.9125C457.297 69.8597 455.737 61.2169 452.617 53.984C449.497 46.7512 445.219 41.2766 439.789 37.5514C434.36 33.8348 428.016 31.9722 420.775 31.9722C413.533 31.9722 407.137 33.8348 401.603 37.5514C396.069 41.2766 391.738 46.7512 388.618 53.984C385.499 61.2169 383.939 69.8684 383.939 79.9125C383.939 89.9567 385.499 98.6082 388.618 105.841C391.738 113.074 396.017 118.609 401.446 122.422C406.875 126.243 413.315 128.149 420.766 128.149H420.775Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M502.844 153.181V111H545.898V153.181H502.844Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M607.503 158.603C599.05 158.603 590.902 156.793 583.05 153.181C575.198 149.569 568.863 144.286 564.035 137.349C559.207 130.412 556.793 122.126 556.793 112.473C556.793 101.42 559.356 92.5766 564.488 85.9443C569.621 79.3121 576.61 74.29 585.464 70.8694C594.318 67.4575 603.973 65.0466 614.439 63.6366L635.267 61.2257C639.293 60.6251 642.509 59.7721 644.922 58.6667C647.336 57.5614 649.044 56.1514 650.055 54.4454C651.057 52.7395 651.563 50.581 651.563 47.9611C651.563 43.1393 649.55 38.8657 645.524 35.1492C641.498 31.4327 635.764 29.5701 628.321 29.5701C622.884 29.5701 618.108 30.5797 613.986 32.5816C609.856 34.5922 606.64 37.3077 604.322 40.7196C602.004 44.1402 600.549 48.4572 599.947 53.6882H559.8C560.602 43.4352 563.826 34.2962 569.464 26.254C575.094 18.2204 582.745 11.9885 592.401 7.55829C602.065 3.13678 613.429 0.926025 626.509 0.926025C641.602 0.926025 653.872 3.48493 663.336 8.61144C672.791 13.738 679.684 21.171 684.015 30.9192C688.338 40.6674 690.508 52.4784 690.508 66.3435V153.172H653.985V147.445C653.985 145.034 654.134 142.675 654.439 140.36C654.744 138.054 655.092 135.686 655.493 133.275C651.467 140.508 645.576 146.54 637.838 151.362C630.091 156.184 619.973 158.595 607.503 158.595V158.603ZM618.675 129.959C625.115 129.959 630.901 128.558 636.034 125.738C641.167 122.927 645.193 118.958 648.112 113.831C651.023 108.705 652.487 102.83 652.487 96.1974V81.1224C651.075 82.3323 649.062 83.3854 646.447 84.2906C643.833 85.1958 640.208 86.1532 635.581 87.1542L624.112 89.2605C618.683 90.2701 613.795 91.6714 609.472 93.4818C605.141 95.2922 601.873 97.5551 599.66 100.262C597.446 102.978 596.34 106.442 596.34 110.663C596.34 116.895 598.501 121.665 602.832 124.981C607.154 128.297 612.444 129.951 618.683 129.951L618.675 129.959Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M775.654 219.808C760.961 219.808 748.491 217.441 738.225 212.723C727.96 207.997 720.117 201.269 714.679 192.522C709.25 183.775 706.531 173.774 706.531 162.52H746.373C746.774 170.963 749.545 177.543 754.669 182.269C759.802 186.986 767.096 189.354 776.551 189.354C786.006 189.354 794.102 186.638 800.847 181.216C807.583 175.793 810.956 167.751 810.956 157.098V141.718C810.956 138.306 811.052 135.19 811.261 132.37C811.461 129.559 811.662 126.643 811.862 123.632C809.248 128.053 805.823 132.126 801.597 135.843C797.37 139.568 792.394 142.475 786.651 144.582C780.917 146.697 774.225 147.75 766.582 147.75C754.103 147.75 742.887 144.886 732.927 139.159C722.966 133.432 715.115 125.094 709.38 114.136C703.646 103.186 700.779 89.8697 700.779 74.1856C700.779 62.7314 702.592 52.4349 706.208 43.2872C709.834 34.1396 714.661 26.4541 720.7 20.2223C726.74 13.9904 733.58 9.22071 741.223 5.90457C748.866 2.58844 756.813 0.926025 765.066 0.926025C773.318 0.926025 780.464 2.0314 786.494 4.24216C792.534 6.45291 797.614 9.42089 801.736 13.1374C805.858 16.8626 809.23 21.2319 811.845 26.254C811.644 23.6428 811.435 21.2319 811.243 19.0211C811.043 16.8104 810.938 14.3994 810.938 11.7883V6.05254H850.179V147.454C850.179 163.73 847.06 177.247 840.82 188.005C834.581 198.754 825.823 206.744 814.555 211.975C803.278 217.197 790.303 219.817 775.619 219.817L775.654 219.808ZM777.161 116.703C782.39 116.703 787.218 115.65 791.653 113.535C796.08 111.429 799.906 108.513 803.122 104.797C806.337 101.08 808.856 96.6587 810.668 91.5321C812.481 86.4056 813.387 80.6263 813.387 74.1943C813.387 65.9518 811.827 58.6668 808.708 52.3391C805.588 46.0028 801.309 41.0329 795.88 37.4122C790.451 33.7914 784.211 31.9897 777.161 31.9897C770.111 31.9897 763.828 33.8001 758.295 37.4122C752.761 41.0329 748.43 46.0028 745.31 52.3391C742.19 58.6755 740.63 65.9605 740.63 74.1943C740.63 82.428 742.19 89.774 745.31 96.2061C748.43 102.638 752.752 107.66 758.295 111.281C763.828 114.902 770.111 116.703 777.161 116.703V116.703Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M935.448 158.603C920.555 158.603 907.423 155.539 896.059 149.403C884.687 143.276 875.781 134.285 869.349 122.422C862.909 110.567 859.685 96.1886 859.685 79.312C859.685 63.8367 862.901 50.1718 869.349 38.3086C875.789 26.4541 884.643 17.2542 895.911 10.7177C907.179 4.18985 919.954 0.917236 934.246 0.917236C949.54 0.917236 962.515 4.18985 973.182 10.7177C983.848 17.2542 991.996 26.4976 997.634 38.4565C1003.26 50.4155 1006.09 64.533 1006.09 80.8177V88.9557H899.536C899.736 96.3975 901.349 103.082 904.364 109C907.379 114.928 911.553 119.654 916.895 123.17C922.228 126.687 928.416 128.445 935.457 128.445C943.1 128.445 949.74 126.391 955.378 122.265C961.008 118.148 964.432 112.369 965.644 104.927H1005.19C1004.18 114.98 1000.76 124.067 994.933 132.213C989.094 140.351 981.094 146.792 970.933 151.51C960.772 156.227 948.947 158.594 935.466 158.594L935.448 158.603ZM899.222 61.8261H965.931C965.931 52.1824 963.012 44.3925 957.173 38.4652C951.335 32.538 943.588 29.57 933.932 29.57C927.692 29.57 922.054 30.98 917.026 33.7913C911.998 36.6113 907.972 40.4236 904.957 45.2455C901.941 50.0674 900.024 55.6029 899.222 61.8261Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M1017.03 153.181V6.05245H1055.97V12.0842C1055.97 14.0947 1055.91 16.3055 1055.82 18.7164C1055.71 21.1274 1055.46 23.6427 1055.06 26.2539C1057.87 21.6322 1061.25 17.4109 1065.17 13.5899C1069.09 9.77766 1073.97 6.70524 1079.81 4.39004C1085.65 2.08354 1092.49 0.917236 1100.34 0.917236C1111.21 0.917236 1120.51 3.32818 1128.26 8.15876C1136.01 12.9806 1141.89 19.8131 1145.92 28.6561C1149.94 37.4991 1151.96 47.9523 1151.96 60.007V153.163H1113.02V66.0475C1113.02 59.0148 1111.97 52.9831 1109.85 47.961C1107.73 42.939 1104.71 39.0223 1100.79 36.2023C1096.87 33.391 1092.09 31.9809 1086.46 31.9809C1080.42 31.9809 1075.19 33.4867 1070.76 36.5069C1066.34 39.5184 1062.81 43.6962 1060.2 49.0142C1057.59 54.3409 1056.28 60.3204 1056.28 66.9526V153.181H1017.04H1017.03Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M1235.69 158.603C1220.2 158.603 1206.81 155.383 1195.54 148.96C1184.28 142.527 1175.62 133.432 1169.58 121.673C1163.54 109.914 1160.53 95.797 1160.53 79.3121C1160.53 67.2487 1162.53 56.3516 1166.57 46.6033C1170.59 36.8551 1176.07 28.5692 1183.02 21.728C1189.97 14.8956 1198.11 9.71682 1207.47 6.2005C1216.83 2.68418 1226.84 0.926025 1237.5 0.926025C1252 0.926025 1264.37 3.6416 1274.64 9.06404C1284.9 14.4865 1292.8 21.8325 1298.33 31.0758C1303.86 40.3192 1307.24 50.6767 1308.45 62.1308H1268.6C1268.2 54.0973 1265.48 47.0559 1260.46 41.0242C1255.42 34.9925 1247.88 31.981 1237.82 31.981C1232.58 31.981 1227.75 32.9384 1223.32 34.8446C1218.9 36.7594 1214.92 39.7709 1211.4 43.8878C1207.88 48.0134 1205.16 53.0354 1203.26 58.9627C1201.34 64.8899 1200.39 71.7746 1200.39 79.6167C1200.39 89.069 1201.95 97.4594 1205.07 104.788C1208.19 112.125 1212.46 117.852 1217.9 121.969C1223.32 126.086 1229.67 128.149 1236.91 128.149C1247.58 128.149 1255.58 124.937 1260.91 118.505C1266.24 112.073 1269.31 104.64 1270.12 96.1974H1309.96C1308.15 108.861 1304.23 119.863 1298.19 129.211C1292.15 138.559 1283.95 145.791 1273.59 150.918C1263.22 156.044 1250.59 158.603 1235.71 158.603H1235.69Z",
            }),
            (0, r.jsx)("path", {
              ...n,
              d: "M1329.86 219.808C1325.43 219.808 1321.66 219.556 1318.54 219.051C1315.42 218.546 1312.85 217.893 1310.84 217.093V186.342C1312.24 186.543 1313.96 186.838 1315.97 187.248C1317.99 187.648 1320.3 187.848 1322.92 187.848C1329.16 187.848 1334.89 185.986 1340.12 182.269C1345.35 178.552 1350.18 170.763 1354.61 158.908L1357.33 151.971L1300.58 6.05273H1344.65L1374.22 97.4074C1375.22 100.628 1376.13 103.587 1376.94 106.303C1377.74 109.018 1378.55 112.186 1379.35 115.798C1379.96 112.178 1380.66 109.018 1381.46 106.303C1382.27 103.587 1383.08 100.628 1383.88 97.4074L1412.25 6.05273H1453L1392.33 169.762C1388.5 180.415 1383.93 189.458 1378.6 196.891C1373.26 204.324 1366.68 210.008 1358.82 213.925C1350.97 217.841 1341.32 219.808 1329.85 219.808H1329.86Z",
            }),
          ],
        });
      };
      var p = n(5125),
        h = n.n(p),
        f = n(1163),
        m = n.n(f);
      let v = {
          a: ["4"],
          e: ["3"],
          o: ["#", "*"],
          s: ["5", "$"],
          g: ["6"],
          i: ["1"],
        },
        g = (e) => {
          if ("A" === e.target.nodeName) {
            let t = e.target.innerText;
            if (
              !t.trim() ||
              !e.target.firstChild ||
              e.target.firstChild.nodeType !== Node.TEXT_NODE
            )
              return;
            e.target.setAttribute("data-text", t);
            let n = [
              ...t.matchAll(/e/gi),
              ...t.matchAll(/g/gi),
              ...t.matchAll(/i/gi),
              ...t.matchAll(/o/gi),
              ...t.matchAll(/s/gi),
              ...t.matchAll(/a/gi),
            ];
            n
              .sort(() => 0.5 - Math.random())
              .slice(0, 1 + Math.floor(2 * Math.random()))
              .forEach((e) => {
                t = t.split("");
                let n = v[e[0].toLowerCase()];
                t.splice(e.index, 1, n[Math.floor(Math.random() * n.length)]),
                  (t = t.join(""));
              }),
              (e.target.innerText = t);
          }
        },
        y = (e) => {
          if ("A" === e.target.nodeName) {
            let t = e.target.getAttribute("data-text");
            t && (e.target.innerText = t);
          }
        };
      var w =
          /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
        _ =
          /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,
        C = /[^-+\dA-Z]/g,
        x = {
          default: "ddd mmm dd yyyy HH:MM:ss",
          shortDate: "m/d/yy",
          paddedShortDate: "mm/dd/yyyy",
          mediumDate: "mmm d, yyyy",
          longDate: "mmmm d, yyyy",
          fullDate: "dddd, mmmm d, yyyy",
          shortTime: "h:MM TT",
          mediumTime: "h:MM:ss TT",
          longTime: "h:MM:ss TT Z",
          isoDate: "yyyy-mm-dd",
          isoTime: "HH:MM:ss",
          isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
        },
        b = {
          dayNames: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          monthNames: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
        },
        T = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, "0");
        },
        E = function (e) {
          var t = e.y,
            n = e.m,
            r = e.d,
            o = e._,
            a = e.dayName,
            i = e.short,
            l = void 0 !== i && i,
            s = new Date(),
            c = new Date();
          c.setDate(c[o + "Date"]() - 1);
          var u = new Date();
          return (u.setDate(u[o + "Date"]() + 1),
          s[o + "FullYear"]() === t &&
            s[o + "Month"]() === n &&
            s[o + "Date"]() === r)
            ? l
              ? "Tdy"
              : "Today"
            : c[o + "FullYear"]() === t &&
              c[o + "Month"]() === n &&
              c[o + "Date"]() === r
            ? l
              ? "Ysd"
              : "Yesterday"
            : u[o + "FullYear"]() === t &&
              u[o + "Month"]() === n &&
              u[o + "Date"]() === r
            ? l
              ? "Tmw"
              : "Tomorrow"
            : a;
        },
        M = function (e) {
          var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
          t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3);
          var n = new Date(t.getFullYear(), 0, 4);
          n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
          var r = t.getTimezoneOffset() - n.getTimezoneOffset();
          return (
            t.setHours(t.getHours() - r), 1 + Math.floor((t - n) / (864e5 * 7))
          );
        },
        k = function (e) {
          var t = e.getDay();
          return 0 === t && (t = 7), t;
        };
      let j = (function () {
          let e, t, n, r;
          function o() {
            (e = null), (r = 0);
          }
          return (
            o(),
            function () {
              return (
                (t = window.scrollY),
                null != e && (r = t - e),
                (e = t),
                clearTimeout(n),
                (n = setTimeout(o, 50)),
                r
              );
            }
          );
        })(),
        N = () =>
          (function (e, t, n, r) {
            if (
              (1 != arguments.length ||
                "string" != typeof e ||
                /\d/.test(e) ||
                ((t = e), (e = void 0)),
              (e = e || 0 === e ? e : new Date()) instanceof Date ||
                (e = new Date(e)),
              isNaN(e))
            )
              throw TypeError("Invalid date");
            var o = (t = String(x[t] || t || x.default)).slice(0, 4);
            ("UTC:" === o || "GMT:" === o) &&
              ((t = t.slice(4)), (n = !0), "GMT:" === o && (r = !0));
            var a = function () {
                return n ? "getUTC" : "get";
              },
              i = function () {
                return e[a() + "Date"]();
              },
              l = function () {
                return e[a() + "Day"]();
              },
              s = function () {
                return e[a() + "Month"]();
              },
              c = function () {
                return e[a() + "FullYear"]();
              },
              u = function () {
                return e[a() + "Hours"]();
              },
              d = function () {
                return e[a() + "Minutes"]();
              },
              p = function () {
                return e[a() + "Seconds"]();
              },
              h = function () {
                return e[a() + "Milliseconds"]();
              },
              f = function () {
                return n ? 0 : e.getTimezoneOffset();
              },
              m = function () {
                return M(e);
              },
              v = {
                d: function () {
                  return i();
                },
                dd: function () {
                  return T(i());
                },
                ddd: function () {
                  return b.dayNames[l()];
                },
                DDD: function () {
                  return E({
                    y: c(),
                    m: s(),
                    d: i(),
                    _: a(),
                    dayName: b.dayNames[l()],
                    short: !0,
                  });
                },
                dddd: function () {
                  return b.dayNames[l() + 7];
                },
                DDDD: function () {
                  return E({
                    y: c(),
                    m: s(),
                    d: i(),
                    _: a(),
                    dayName: b.dayNames[l() + 7],
                  });
                },
                m: function () {
                  return s() + 1;
                },
                mm: function () {
                  return T(s() + 1);
                },
                mmm: function () {
                  return b.monthNames[s()];
                },
                mmmm: function () {
                  return b.monthNames[s() + 12];
                },
                yy: function () {
                  return String(c()).slice(2);
                },
                yyyy: function () {
                  return T(c(), 4);
                },
                h: function () {
                  return u() % 12 || 12;
                },
                hh: function () {
                  return T(u() % 12 || 12);
                },
                H: function () {
                  return u();
                },
                HH: function () {
                  return T(u());
                },
                M: function () {
                  return d();
                },
                MM: function () {
                  return T(d());
                },
                s: function () {
                  return p();
                },
                ss: function () {
                  return T(p());
                },
                l: function () {
                  return T(h(), 3);
                },
                L: function () {
                  return T(Math.floor(h() / 10));
                },
                t: function () {
                  return 12 > u() ? b.timeNames[0] : b.timeNames[1];
                },
                tt: function () {
                  return 12 > u() ? b.timeNames[2] : b.timeNames[3];
                },
                T: function () {
                  return 12 > u() ? b.timeNames[4] : b.timeNames[5];
                },
                TT: function () {
                  return 12 > u() ? b.timeNames[6] : b.timeNames[7];
                },
                Z: function () {
                  return r
                    ? "GMT"
                    : n
                    ? "UTC"
                    : (String(e).match(_) || [""])
                        .pop()
                        .replace(C, "")
                        .replace(/GMT\+0000/g, "UTC");
                },
                o: function () {
                  return (
                    (f() > 0 ? "-" : "+") +
                    T(
                      100 * Math.floor(Math.abs(f()) / 60) +
                        (Math.abs(f()) % 60),
                      4
                    )
                  );
                },
                p: function () {
                  return (
                    (f() > 0 ? "-" : "+") +
                    T(Math.floor(Math.abs(f()) / 60), 2) +
                    ":" +
                    T(Math.floor(Math.abs(f()) % 60), 2)
                  );
                },
                S: function () {
                  return ["th", "st", "nd", "rd"][
                    i() % 10 > 3
                      ? 0
                      : (((i() % 100) - (i() % 10) != 10) * i()) % 10
                  ];
                },
                W: function () {
                  return m();
                },
                WW: function () {
                  return T(m());
                },
                N: function () {
                  return k(e);
                },
              };
            return t.replace(w, function (e) {
              return e in v ? v[e]() : e.slice(1, e.length - 1);
            });
          })(new Date(), "dddd HH:MM:ss"),
        H = () => {
          let [e, t] = (0, i.useState)(N()),
            n = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                clearTimeout(n.current),
                  (n.current = setTimeout(() => {
                    t(N()), setTimeout(e, 50);
                  }, 50));
              };
              return (
                e(),
                () => {
                  clearTimeout(n.current);
                }
              );
            }),
            (0, r.jsx)("div", { className: h().time, children: e })
          );
        },
        S = (e) => {
          let { firstRender: t } = e,
            n = (0, i.useRef)(null),
            o = (0, i.useRef)(!1),
            [a, l] = (0, i.useState)({}),
            [p, f] = (0, i.useState)(!1),
            [v, w] = (0, i.useState)(!1),
            [_, C] = (0, i.useState)(!1),
            [x, b] = (0, i.useState)(!1),
            [T, E] = (0, i.useState)(!0),
            M = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            let e = () => {
              setTimeout(() => {
                b(!1),
                  setTimeout(() => {
                    f(!1);
                  }, 0);
              }, 50);
            };
            return (
              m().events.on("routeChangeStart", e),
              () => {
                m().events.off("routeChangeStart", e);
              }
            );
          }, []);
          let k = (e) => {
              if ("A" === e.target.nodeName) {
                var t;
                let {
                    top: n,
                    width: r,
                    height: o,
                  } = e.currentTarget.getBoundingClientRect(),
                  a =
                    null === (t = e.target.getAttribute("href")) || void 0 === t
                      ? void 0
                      : t.split("/")[1];
                innerWidth > 767 ||
                "about" === a ||
                "work" === a ||
                "BUTTON" === e.target.nodeName
                  ? l({
                      top: "".concat(
                        ((e.pageY - window.scrollY - n) / o) * 100,
                        "%"
                      ),
                      left: "".concat((e.pageX / r) * 100, "%"),
                      opacity: 1,
                    })
                  : innerWidth < 767 &&
                    l({ top: "-100px", left: "-100px", opacity: 1 });
              }
            },
            N = (e) => {
              var t;
              "A" === e.target.nodeName &&
                (null === (t = e.target.getAttribute("href")) || void 0 === t
                  ? void 0
                  : t.split("/")[1]) !== "work" &&
                l({ top: "-100px", left: "-100px", opacity: 1 });
            };
          (0, i.useEffect)(() => {
            let e = (e) => {
              let t = document.getElementById("intro"),
                n = 0.1 * innerWidth;
              t && t.offsetHeight && (n += innerHeight - 50);
              let r = j();
              window.scrollY > n ? E(!1) : E(!0),
                window.scrollY < 20
                  ? w(!1)
                  : r < -10 &&
                    window.scrollY <
                      document.documentElement.scrollHeight - innerHeight - 40
                  ? w(!0)
                  : r > 10 && w(!1);
            };
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []);
          let S = () => {
            let e = document.getElementById("dot");
            p
              ? (f(!1), b(!1), e && (e.style.opacity = "1"))
              : (f(!0),
                requestAnimationFrame(() => {
                  b(!0);
                }),
                e && (e.style.opacity = "0"));
          };
          return (0, r.jsxs)("header", {
            className: [
              h().header,
              v ? h().scrollUp : "",
              p ? h().mobileOpen : "",
              x ? h().tick : "",
              T ? h().aboveFold : "",
            ].join(" "),
            children: [
              (0, r.jsxs)("div", {
                className: h().content,
                children: [
                  (0, r.jsx)("div", {
                    ref: M,
                    className: h().logo,
                    children: (0, r.jsx)(s(), {
                      href: "/",
                      onClick: () => l({ top: -100, left: -100 }),
                      children: (0, r.jsx)(d, { hideClass: h().agency }),
                    }),
                  }),
                  (0, r.jsxs)("menu", {
                    className: h().menu,
                    onMouseDown: k,
                    onMouseOver: g,
                    onMouseOut: y,
                    ref: n,
                    children: [
                      (0, r.jsx)(c.h, {
                        topOffset: -100,
                        onEnter() {
                          n.current &&
                            !o.current &&
                            ((o.current = !0),
                            setTimeout(() => {
                              C(!0);
                            }, 200),
                            (0, u.Z)(n.current));
                        },
                      }),
                      (0, r.jsxs)("div", {
                        className: h().div1,
                        children: [
                          (0, r.jsxs)(s(), {
                            href: "/",
                            className: h().startpage,
                            children: [
                              "Design & technology ",
                              (0, r.jsx)("br", {}),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            style: {
                              transition: "opacity 400ms ease",
                              opacity: _ ? 1 : 0,
                            },
                            children: _ ? (0, r.jsx)(H, {}) : null,
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: h().div2,
                        children: [
                          (0, r.jsx)(s(), {
                            href: "/work",
                            className: h().work,
                            children: "Work",
                          }),
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)(s(), {
                            href: "/e-commerce",
                            className: h().ecom,
                            children: "E-commerce",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: h().div4,
                        children: [
                          (0, r.jsx)(s(), {
                            href: "/about",
                            className: h().about,
                            children: "About",
                          }),
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)(s(), {
                            href: "/studio-life",
                            className: h().studio,
                            children: "Studio life",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: h().div5,
                        children: [
                          (0, r.jsx)(s(), {
                            href: "/careers",
                            className: h().careers,
                            children: "Careers",
                          }),
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)(s(), {
                            href: "/contact",
                            className: h().contact,
                            children: "Contact",
                          }),
                        ],
                      }),
                      (0, r.jsx)("button", {
                        className: h().openMenu,
                        onClick: S,
                        children: p ? "Close" : "Menu",
                      }),
                      (0, r.jsx)("div", {
                        className: h().dot,
                        id: "dot",
                        style: a,
                      }),
                    ],
                  }),
                ],
              }),
              p
                ? (0, r.jsx)("button", { className: h().backdrop, onClick: S })
                : null,
              p
                ? (0, r.jsx)("div", {
                    className: [h().mobileMenu].join(" "),
                    children: (0, r.jsxs)("div", {
                      className: h().mobileLinks,
                      onMouseDown: N,
                      children: [
                        (0, r.jsx)(s(), {
                          href: "/e-commerce",
                          children: "E-commerce",
                        }),
                        (0, r.jsx)(s(), { href: "/about", children: "About" }),
                        (0, r.jsx)(s(), {
                          href: "/studio-life",
                          children: "Studio life",
                        }),
                        (0, r.jsx)(s(), {
                          href: "/careers",
                          children: "Careers",
                        }),
                        (0, r.jsx)(s(), {
                          href: "/contact",
                          children: "Contact",
                        }),
                        (0, r.jsx)(s(), { href: "/", children: "/Index" }),
                      ],
                    }),
                  })
                : null,
            ],
          });
        };
      var G = n(1727),
        O = n.n(G),
        L = n(313),
        A = n(6868),
        P = n(9402),
        D = n(3372);
      let I =
        "MNBWQR8gGD6SHO9EKUA50qdPbXp24C3ZmIVFhkwae1jloiYTfunyJtsL7xczv+=r!/;\"*_~:,-'\xb7\xa0".slice(
          10
        );
      var V = n(4276);
      async function Z(e) {
        return new Promise((t, n) => {
          let r = new Image();
          (r.src = e),
            r.complete
              ? t(r)
              : ((r.onload = () => t(r)), (r.onerror = () => n(r)));
        });
      }
      let B = (e) => {
        let { svgFile: t, storyText: o, onComplete: a } = e,
          l = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          c = (0, i.useRef)(null),
          u = (0, i.useRef)(null),
          d = (0, i.useRef)(null);
        (0, i.useRef)(0);
        let [p, h] = (0, i.useState)(!1),
          f = (0, i.useRef)(!1),
          m = (e) => {
            s.current && (s.current.innerHTML = e);
          },
          v = () => {
            f.current ||
              ((f.current = !0),
              h(!0),
              (document.body.style.opacity = "0"),
              requestAnimationFrame(() => {
                (document.body.style.transition = "opacity 400ms ease-out"),
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("scroll"));
                  }, 100),
                  (document.body.style.opacity = "1");
              }));
          };
        return (
          (0, i.useEffect)(() => {
            let e;
            let r = innerHeight,
              o = innerWidth,
              a = "ontouchstart" in window,
              i = async () => {
                let i = await n.e(737).then(n.bind(n, 9477)),
                  d = await Z(t);
                if (l.current) {
                  var p, h, f, g, y, w, _;
                  let C = (0, L.ZP)(l.current),
                    x = new i.PerspectiveCamera(100, o / r, 0.5, 50);
                  x.position.z = 2;
                  let b = new i.Scene(),
                    T = new i.TorusGeometry(10, 5, 30, 100, 6.2),
                    E = new i.MeshNormalMaterial(),
                    M = new i.Mesh(T, E);
                  b.add(M);
                  let k = new i.WebGLRenderer({ antialias: !0 });
                  k.setClearColor(15987699, 1);
                  let j = () => {
                    (o = innerWidth), (r = innerHeight);
                    let e = o - 2 * window._charWidth,
                      t = r - 2 * window._charWidth;
                    k.setSize(e, t);
                  };
                  j(), l.current.appendChild(k.domElement);
                  let N = 0,
                    H = Date.now(),
                    S = { x: 0, y: 0 },
                    G = 0,
                    O = 0;
                  null === (p = c.current) ||
                    void 0 === p ||
                    p.addEventListener("mousemove", (e) => {
                      let t = e.pageX / o,
                        n = e.pageY / r;
                      (S.x = t), (S.y = n);
                    }),
                    null === (h = c.current) ||
                      void 0 === h ||
                      h.addEventListener("wheel", (e) => {
                        let { deltaX: t } = e;
                        G = t / 3;
                      });
                  let A = 0,
                    P = Date.now(),
                    D = !1,
                    I = 0,
                    B = 0,
                    W = 0;
                  null === (f = c.current) ||
                    void 0 === f ||
                    f.addEventListener("touchstart", (e) => {
                      (A = e.touches[0].pageX),
                        (B = e.touches[0].pageY),
                        (P = Date.now()),
                        (D = !0);
                    }),
                    null === (g = c.current) ||
                      void 0 === g ||
                      g.addEventListener("touchmove", (e) => {
                        let t = Date.now(),
                          n = t - P,
                          r = e.touches[0].pageX,
                          o = r - A;
                        (W = e.touches[0].pageY - B),
                          Math.abs(o) > 10 &&
                            (e.preventDefault(),
                            (O += o),
                            (I = Math.round((o / n) * n)),
                            (A = r),
                            (P = t));
                      }),
                    null === (y = c.current) ||
                      void 0 === y ||
                      y.addEventListener("touchend", (e) => {
                        100 > Math.abs(W) && (G = -I), (D = !1);
                      }),
                    s.current && (s.current.style.opacity = "1");
                  let R = Math.floor(4e4 * Math.random());
                  null === (w = s.current) ||
                    void 0 === w ||
                    w.appendChild(C.ctx.canvas);
                  let F = 0.1,
                    U = 0.1,
                    z = 0,
                    q = 0;
                  (document.documentElement.style.overscrollBehaviorX = "none"),
                    (document.body.style.overscrollBehaviorX = "none");
                  let Q = 0,
                    Y = (e) => {
                      let t = Date.now(),
                        n = t - H;
                      (M.rotation.y = (e + R) / 4e3 + (F - 0.5) * 2),
                        (M.rotation.x = (e + R) / 4e3 + (U - 0.5) * 2),
                        (F += (S.x - F) / 100),
                        (U += (S.y - U) / 100);
                      let { canvas: r } = k.getContext();
                      if (
                        (j(),
                        (C.ctx.globalCompositeOperation = "source-over"),
                        k.render(b, x),
                        C.ctx.drawImage(r, 0, 0, r.width, r.height),
                        d.complete)
                      ) {
                        Q ||
                          (Q = Math.max(
                            r.width / d.width,
                            r.height / (d.height / 1.5)
                          )),
                          (C.ctx.globalCompositeOperation = "destination-in");
                        let o = d.width * Q;
                        d.height;
                        let i = r.width / 2;
                        if (
                          (O || (O = i),
                          D || (O -= n / 8),
                          (G /= a ? 1.04 : 1.08),
                          O > i && G < 0)
                        ) {
                          let l = (O - i) / i;
                          G *= 1 - l;
                        }
                        (O -= G) < -o && (O = r.width),
                          C.ctx.drawImage(
                            d,
                            O,
                            -(r.height / 30),
                            o,
                            d.height * Q
                          ),
                          S.x &&
                            S.y &&
                            (z && q
                              ? ((z += (S.x - z) / 15), (q += (S.y - q) / 15))
                              : ((z = S.x), (q = S.y)));
                      }
                      let s = C.getChars(),
                        c =
                          Math.floor(q * window._rows) * (window._cols + 1) +
                          Math.floor(z * window._cols),
                        u = s.split("");
                      z && q && u.splice(c - 2, 5, "c", "l", "i", "c", "k"),
                        a &&
                          u.splice(
                            0,
                            15,
                            "T",
                            "a",
                            "p",
                            "\xa0",
                            "t",
                            "o",
                            "\xa0",
                            "c",
                            "o",
                            "n",
                            "t",
                            "i",
                            "n",
                            "u",
                            "e"
                          ),
                        m(u.join("")),
                        (N += t - H),
                        (H = t);
                    };
                  k.setAnimationLoop(Y);
                  let J = () => {
                      var t, n;
                      if (
                        (e(),
                        null === (t = c.current) ||
                          void 0 === t ||
                          t.removeEventListener("click", J),
                        null === (n = c.current) ||
                          void 0 === n ||
                          n.addEventListener("click", v),
                        s.current)
                      ) {
                        let r = window._cols - 1,
                          o = window._rows + 1,
                          {
                            update: a,
                            createPoint: i,
                            getText: l,
                          } = (0, V.Z)({
                            width: r,
                            height: o,
                            gravity: { y: 3, x: 0 },
                          }),
                          d = 0,
                          p = 0,
                          h = s.current.innerHTML.replace(/\&nbsp;/g, " ");
                        h.split("").forEach((e, t) => {
                          /\s/.test(e) ||
                            i({
                              x: p / r,
                              y: d / o,
                              value: e,
                              xForce: -0.12,
                              mass: 0.8,
                            }),
                            p++,
                            "\n" === e && (d++, (p = 0));
                        });
                        let f = Date.now(),
                          g = () => {
                            requestAnimationFrame(g);
                            let e = Date.now();
                            a(e - f), m(l()), (f = e);
                          };
                        setTimeout(() => {
                          u.current.start();
                        }, 500),
                          g();
                      }
                    },
                    X = a ? "orientationchange" : "resize";
                  window.addEventListener(X, j),
                    null === (_ = c.current) ||
                      void 0 === _ ||
                      _.addEventListener("click", J),
                    (e = () => {
                      if (
                        ((document.documentElement.style.overscrollBehaviorX =
                          "auto"),
                        (document.body.style.overscrollBehaviorX = "auto"),
                        b && M && k && C)
                      ) {
                        var e, t;
                        k.clear(), k.dispose(), b.remove(M), C.destroy();
                        let n = k.getContext();
                        (null == n
                          ? void 0
                          : null === (e = n.canvas) || void 0 === e
                          ? void 0
                          : e.parentNode) &&
                          n.canvas.parentNode.removeChild(n.canvas),
                          window.removeEventListener(X, j),
                          null === (t = c.current) ||
                            void 0 === t ||
                            t.removeEventListener("click", J);
                      }
                    });
                }
              };
            return (
              i(),
              () => {
                e && e();
              }
            );
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className: [O().intro, p ? O().hide : ""].join(" "),
                ref: c,
                id: "intro",
                children: [
                  (0, r.jsx)("div", { ref: l, className: O().blob }),
                  (0, r.jsx)("div", { ref: s, className: O().code }),
                  (0, r.jsx)("div", {
                    className: O().story,
                    ref: d,
                    children: (0, r.jsx)(A.Z, {
                      inverted: !0,
                      onComplete() {
                        !(function (e) {
                          let t,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            r = [],
                            o = [];
                          try {
                            let a = document.createTreeWalker(
                              e,
                              NodeFilter.SHOW_TEXT,
                              null
                            );
                            for (; (t = a.nextNode()); ) {
                              var i, l;
                              (null === (i = t.parentNode) || void 0 === i
                                ? void 0
                                : i.nodeName) === "SCRIPT" ||
                                (null === (l = t.parentElement) || void 0 === l
                                  ? void 0
                                  : l.classList.contains("nofade")) ||
                                (r.push(t), o.push(t.nodeValue || ""));
                            }
                          } catch (s) {}
                          requestAnimationFrame(() => {
                            (0, P.Z)({
                              duration: 1e3,
                              easing: D.Z.linear,
                              onFrame(e) {
                                r.forEach((t, n) => {
                                  let a = t.nodeValue
                                    .split("")
                                    .map((t, a) => {
                                      let i = 0.2 + ((n + 1) / r.length) * 0.8,
                                        l = Math.min(1, e / i),
                                        s = I[Math.ceil(l * (I.length - 1))];
                                      return " " === t ||
                                        "\xa0" == t ||
                                        "-" === o[n].charAt(a)
                                        ? t
                                        : l >= 0.99
                                        ? "\xa0"
                                        : s;
                                    })
                                    .join("");
                                  t.nodeValue = a;
                                });
                              },
                              onComplete() {
                                r.forEach((e, t) => {
                                  let n = e.nodeValue
                                    .split("")
                                    .map((e) =>
                                      " " === e || "-" === e ? " " : "\xa0"
                                    )
                                    .join("");
                                  e.nodeValue = n;
                                }),
                                  n && n.onComplete && n.onComplete();
                              },
                            });
                          });
                        })(d.current, {
                          onComplete() {
                            d.current && window.scrollY < 10 && (a ? a() : v());
                          },
                        });
                      },
                      ref: u,
                      children: o,
                    }),
                  }),
                ],
              }),
              p ? null : (0, r.jsx)("div", { className: O().spacer }),
            ],
          })
        );
      };
      n(3700);
      var W = n(2674),
        R = n(830),
        F = n.n(R),
        U = n(4024),
        z = n.n(U),
        q = n(11),
        Q = n(1184);
      let Y = () => {
        let [e, t] = (0, i.useState)(!1),
          [n, o] = (0, i.useState)(!1),
          {
            textMode: a,
            darkMode: l,
            setTextMode: c,
            setDarkMode: u,
            rainbowMode: d,
            setRainbowMode: p,
          } = (0, W.Z)();
        return (
          (0, i.useEffect)(() => {
            let e = l && a;
            t(e);
            let n = async () => {
              for (let e = 0; e < 6; e++) await (0, q.Z)(100), o((e) => !e);
            };
            e && n();
          }, [l, a]),
          (0, r.jsxs)("footer", {
            className: z().container,
            onMouseOver: g,
            onMouseOut: y,
            children: [
              (0, r.jsx)("div", { className: F().space1 }),
              (0, r.jsxs)("div", {
                className: [F().row2222, z().grid].join(" "),
                "data-rainbow": !0,
                children: [
                  (0, r.jsx)("div", {
                    children: (0, r.jsxs)(s(), {
                      href: "/",
                      onClick: () => (0, Q.Z)(null),
                      children: [
                        "Aino Aktiebolag ",
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)("span", {
                          className: "hidemobile",
                          children: [
                            "Design & Technology ",
                            (0, r.jsx)("br", {}),
                          ],
                        }),
                        "Gothenburg",
                        (0, r.jsx)("span", {
                          className: "hidemobile",
                          children: ",",
                        }),
                        " ",
                        (0, r.jsx)("span", {
                          className: "hidedesktop",
                          children: (0, r.jsx)("br", {}),
                        }),
                        "Sweden",
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      "New Business ",
                      (0, r.jsx)("br", {}),
                      "Julie Nord ",
                      (0, r.jsx)("br", {}),
                      (0, r.jsx)("a", {
                        href: "mailto:julie@aino.agency",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "julie@aino.agency",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      "Follow ",
                      (0, r.jsx)("br", {}),
                      (0, r.jsx)("a", {
                        href: "https://instagram.com/aino.agency",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Instagram",
                      }),
                      " ",
                      (0, r.jsx)("br", {}),
                      (0, r.jsx)("a", {
                        href: "https://linkedin.com/company/aino",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "LinkedIn",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsxs)("button", {
                        onClick() {
                          c(!a), a && p(!1);
                        },
                        children: [
                          "Text mode:",
                          " ",
                          (0, r.jsx)("span", {
                            suppressHydrationWarning: !0,
                            className: a ? z().on : "",
                            children: a ? "on" : "off",
                          }),
                        ],
                      }),
                      (0, r.jsx)("br", {}),
                      (0, r.jsxs)("button", {
                        onClick() {
                          u(!l), l && p(!1);
                        },
                        children: [
                          "Dark mode:",
                          " ",
                          (0, r.jsx)("span", {
                            suppressHydrationWarning: !0,
                            className: l ? z().on : "",
                            children: l ? "on" : "off",
                          }),
                        ],
                      }),
                      (0, r.jsx)("br", {}),
                      e
                        ? (0, r.jsxs)("button", {
                            onClick() {
                              p(!d);
                            },
                            style: n ? { opacity: 0 } : {},
                            children: [
                              "Rainbow mode:",
                              " ",
                              (0, r.jsx)("span", {
                                suppressHydrationWarning: !0,
                                className: d ? z().on : "",
                                children: d ? "on" : "off",
                              }),
                            ],
                          })
                        : (0, r.jsx)(s(), {
                            href: "/privacy",
                            children: "Privacy policy",
                          }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var J = n(8424),
        X = n(4019),
        K =
          (n(3454),
          () => {
            window.va ||
              (window.va = function (...e) {
                (window.vaq = window.vaq || []).push(e);
              });
          }),
        $ = (e = { debug: !0 }) => {
          var t;
          if (!("undefined" != typeof window)) return;
          let n = (function (e = "auto") {
            return "auto" === e ? "production" : e;
          })(e.mode);
          K(),
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          let r =
            "development" === n
              ? "https://cdn.vercel-insights.com/v1/script.debug.js"
              : "/_vercel/insights/script.js";
          if (document.head.querySelector(`script[src*="${r}"]`)) return;
          let o = document.createElement("script");
          (o.src = r),
            (o.defer = !0),
            "development" === n &&
              !1 === e.debug &&
              o.setAttribute("data-debug", "false"),
            document.head.appendChild(o);
        };
      function ee({ beforeSend: e, debug: t = !0, mode: n = "auto" }) {
        return (
          (0, i.useEffect)(() => {
            $({ beforeSend: e, debug: t, mode: n });
          }, [e, t, n]),
          null
        );
      }
      function et(e) {
        var t;
        let { Component: n, pageProps: o } = e,
          [l, s] = (0, i.useState)(!0),
          c = null !== (t = n.getLayout) && void 0 !== t ? t : (e) => e;
        (0, i.useEffect)(() => {
          let e = (e) => {
            s(!1);
          };
          return (
            m().events.on("routeChangeStart", e),
            () => {
              m().events.off("routeChangeStart", e);
            }
          );
        }, []),
          (0, i.useEffect)(
            () => (
              m().beforePopState((e) => {
                let { as: t } = e;
                if (t !== m().asPath) {
                  let n = t.split("/")[1];
                  (0, Q.Z)(n);
                }
                return !0;
              }),
              () => {
                m().beforePopState(() => !0);
              }
            ),
            []
          );
        let { pathname: u } = (0, f.useRouter)(),
          d = "/404" === u;
        return d
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(a(), {
                  children: (0, r.jsx)("script", { src: "/aino.js" }),
                }),
                (0, r.jsx)(X.Z, {}),
                (0, r.jsx)("div", {
                  id: "aino",
                  children: (0, r.jsx)(B, {
                    storyText: "P4ge not found :(\\Redirecting to startpage...",
                    svgFile: "/404.svg",
                    onComplete() {
                      m().replace("/");
                    },
                  }),
                }),
              ],
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(J.Z, {
                  children: [
                    (0, r.jsx)(a(), {
                      children: (0, r.jsx)("script", { src: "/aino.js" }),
                    }),
                    (0, r.jsx)(X.Z, {}),
                    n.getLayout
                      ? c((0, r.jsx)(n, { ...o }))
                      : (0, r.jsxs)("div", {
                          id: "aino",
                          "data-page": u.split("/")[1],
                          children: [
                            l
                              ? (0, r.jsx)(B, {
                                  storyText: "AINO AGENCY",
                                  svgFile: d ? "/404.svg" : "/aino-white.svg",
                                })
                              : null,
                            (0, r.jsx)(S, { firstRender: l }),
                            (0, r.jsx)(n, { ...o }),
                            (0, r.jsx)(Y, {}),
                          ],
                        }),
                  ],
                }),
                (0, r.jsx)(ee, {}),
              ],
            });
      }
    },
    8424: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var r = n(5893),
        o = n(7294);
      let a = (0, o.createContext)(null),
        i = (e, t) => {
          "undefined" != typeof localStorage &&
            (t ? localStorage.setItem(e, "1") : localStorage.setItem(e, "0"));
        },
        l = (e) =>
          "undefined" != typeof localStorage && "1" === localStorage.getItem(e),
        s = !1;
      {
        let c = window.matchMedia("(prefers-color-scheme: dark)");
        s = c.matches;
      }
      let u = (e) => {
        let { children: t } = e,
          n = !1;
        "undefined" != typeof localStorage &&
          null === localStorage.getItem("darkmode") &&
          s &&
          (n = !0);
        let [c, u] = (0, o.useState)(l("textmode")),
          [d, p] = (0, o.useState)(l("darkmode") || n),
          [h, f] = (0, o.useState)(l("rainbowmode")),
          m = (e) => {
            let t = document.documentElement;
            e
              ? (t.classList.add("darkmode"), i("darkmode", !0), p(!0))
              : (t.classList.remove("darkmode"), i("darkmode", !1), p(!1));
          };
        return (
          (0, o.useEffect)(() => {
            let e = document.documentElement;
            h
              ? (e.classList.add("rainbowmode"), i("rainbowmode", !0))
              : (e.classList.remove("rainbowmode"),
                l("rainbowmode") && i("rainbowmode", !1)),
              c
                ? (e.classList.add("textmode"), i("textmode", !0))
                : (e.classList.remove("textmode"),
                  l("textmode") && i("textmode", !1));
          }, [h, c]),
          (0, r.jsx)(a.Provider, {
            value: {
              textMode: c,
              setTextMode: u,
              darkMode: d,
              setDarkMode: m,
              rainbowMode: h,
              setRainbowMode: f,
            },
            children: t,
          })
        );
      };
      t.Z = u;
    },
    2674: function (e, t, n) {
      "use strict";
      var r = n(7294),
        o = n(8424);
      let a = () => (0, r.useContext)(o.J);
      t.Z = a;
    },
    9402: function (e, t, n) {
      "use strict";
      var r = n(3372);
      let o = (e) => {
        let {
            duration: t,
            easing: n = r.Z.outQuart,
            onFrame: o,
            onComplete: a,
            onStart: i,
          } = e,
          l = !1,
          s = Date.now();
        return (
          !(function e() {
            if (!l) {
              let r = Date.now() - s;
              0 == r && i && i(),
                r > t ? a && a() : o && (o(n(r / t)), requestAnimationFrame(e));
            }
          })(),
          {
            stop() {
              l = !0;
            },
          }
        );
      };
      t.Z = o;
    },
    313: function (e, t, n) {
      "use strict";
      n.d(t, {
        GO: function () {
          return r;
        },
        MJ: function () {
          return o;
        },
        ZP: function () {
          return i;
        },
      });
      let r = (e) => {
          let { r: t, g: n, b: r } = e;
          return 0.21 * t + 0.72 * n + 0.07 * r;
        },
        o = "NNN@O$0A869#452I3=7+1/:-\xb7`\xa0",
        a = (e) => o[Math.ceil(((o.length - 1) * e) / 255)];
      function i(e) {
        let t = 0,
          n = 0;
        e = e || document.body;
        let o = document.createElement("canvas"),
          i = document.createElement("canvas"),
          l = o.getContext("2d"),
          s = i.getContext("2d"),
          c = () => {
            if (e) {
              let r = e.getBoundingClientRect();
              (t = r.width), (n = r.height);
            } else (t = window.innerWidth), (n = window.innerHeight);
            let a = window._charWidth,
              l = window._charHeight;
            (o.width = t),
              (o.height = n),
              (i.width = Math.floor((t + 5) / a)),
              (i.height = Math.floor((n + 8) / l));
          },
          u = "ontouchstart" in window ? "orientationchange" : "resize";
        window.addEventListener(u, c), c();
        let d = "",
          p = () => {
            s.clearRect(0, 0, i.width, i.height),
              (s.fillStyle = "#fff"),
              s.fillRect(0, 0, i.width, i.height);
            try {
              s.drawImage(o, 0, 0, i.width, i.height);
              let e = s.getImageData(0, 0, i.width, i.height);
              d = "";
              for (let t = 0; t < e.data.length; t += 4) {
                let [n, l, c] = e.data.slice(t, t + 3),
                  u = r({ r: n, g: l, b: c }),
                  p = (t / 4 + 1) % i.width == 0;
                d += "".concat(a(u)).concat(p ? "\n" : "");
              }
            } catch (h) {}
            return d;
          },
          h = () => {
            window.removeEventListener("resize", c);
          };
        return {
          getChars: p,
          getWidth: () => t,
          getHeight: () => n,
          ctx: l,
          destroy: h,
          resize: c,
        };
      }
    },
    1184: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      let r = {
        contact: [47.5134, 77.6078],
        careers: [11.2872, 78.3905],
        work: [22.0512, 26.8814],
        "e-commerce": [80.978, 30.7131],
        about: [14.5509, 64.5121],
        "studio-life": [83.5329, 66.7164],
      };
      function o(e) {
        let t = document.getElementById("dot");
        if (null === e) {
          t && ((t.style.top = "-100px"), (t.style.left = "-100px"));
          return;
        }
        let n = r[e];
        innerWidth < 768 && t
          ? "about" === e
            ? ((t.style.top = "10.7238%"), (t.style.left = "20.1425%"))
            : "work" === e
            ? ((t.style.top = "20.4238%"), (t.style.left = "8.3342%"))
            : ((t.style.top = "-100px"), (t.style.left = "-100px"))
          : n && t
          ? ((t.style.top = "".concat(n[0], "%")),
            (t.style.left = "".concat(n[1], "%")))
          : t && ((t.style.top = "-100px"), (t.style.left = "-100px"));
      }
    },
    3372: function (e, t) {
      "use strict";
      t.Z = {
        linear: function (e) {
          return e;
        },
        inQuad: function (e) {
          return e * e;
        },
        outQuad: function (e) {
          return e * (2 - e);
        },
        inOutQuad: function (e) {
          return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
        },
        inCubic: function (e) {
          return e * e * e;
        },
        outCubic: function (e) {
          return --e * e * e + 1;
        },
        inOutCubic: function (e) {
          return e < 0.5
            ? 4 * e * e * e
            : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
        },
        inQuart: function (e) {
          return e * e * e * e;
        },
        outQuart: function (e) {
          return 1 - --e * e * e * e;
        },
        inOutQuart: function (e) {
          return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
        },
        inQuint: function (e) {
          return e * e * e * e * e;
        },
        outQuint: function (e) {
          return 1 + --e * e * e * e * e;
        },
        inOutQuint: function (e) {
          return e < 0.5
            ? 16 * e * e * e * e * e
            : 1 + 16 * --e * e * e * e * e;
        },
        inSine: function (e) {
          return -1 * Math.cos((e / 1) * (0.5 * Math.PI)) + 1;
        },
        outSine: function (e) {
          return Math.sin((e / 1) * (0.5 * Math.PI));
        },
        inOutSine: function (e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        },
        inExpo: function (e) {
          return 0 == e ? 0 : Math.pow(2, 10 * (e - 1));
        },
        outExpo: function (e) {
          return 1 == e ? 1 : -Math.pow(2, -10 * e) + 1;
        },
        inOutExpo: function (e) {
          return 0 == e
            ? 0
            : 1 == e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        },
        inCirc: function (e) {
          return -1 * (Math.sqrt(1 - e * e) - 1);
        },
        outCirc: function (e) {
          return Math.sqrt(1 - (e -= 1) * e);
        },
        inOutCirc: function (e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
        inElastic: function (e) {
          var t = 1.70158;
          let n = 0,
            r = 1;
          if (0 == e) return 0;
          if (1 == e) return 1;
          if ((n || (n = 0.3), r < 1)) {
            r = 1;
            var t = n / 4;
          } else var t = (n / (2 * Math.PI)) * Math.asin(1 / r);
          return -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          );
        },
        outElastic: function (e) {
          var t = 1.70158;
          let n = 0,
            r = 1;
          if (0 == e) return 0;
          if (1 == e) return 1;
          if ((n || (n = 0.3), r < 1)) {
            r = 1;
            var t = n / 4;
          } else var t = (n / (2 * Math.PI)) * Math.asin(1 / r);
          return (
            r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1
          );
        },
        inOutElastic: function (e) {
          var t = 1.70158;
          let n = 0,
            r = 1;
          if (0 == e) return 0;
          if (2 == (e /= 0.5)) return 1;
          if ((n || (n = 0.3 * 1.5), r < 1)) {
            r = 1;
            var t = n / 4;
          } else var t = (n / (2 * Math.PI)) * Math.asin(1 / r);
          return e < 1
            ? -0.5 *
                (r *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
                1;
        },
        inBounce: function (e) {
          return 1 - this.outBounce(1 - e);
        },
        outBounce: function (e) {
          return (e /= 1) < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        },
        inOutBounce: function (e) {
          return e < 0.5
            ? 0.5 * this.inBounce(2 * e)
            : 0.5 * this.outBounce(2 * e - 1) + 0.5;
        },
      };
    },
    4276: function (e, t, n) {
      "use strict";
      function r(e) {
        let { width: t, height: n, gravity: r = { x: 0, y: 4 } } = e,
          o = [],
          a = [],
          i = (e) => {
            r = e;
          },
          l = (e) => ({
            x: Math.round(t * e.pos.x),
            y: Math.round(n * e.pos.y),
          }),
          s = (e) => {
            let { x: t, y: n } = l(e);
            a[n] || (a[n] = []), (a[n][t] = e);
          },
          c = () => {
            a = [];
          },
          u = (e) => {
            let {
                x: t,
                y: n,
                value: r,
                mass: a = 0.5,
                xForce: i = 0,
                yForce: l = 0,
              } = e,
              c = (Math.random() - 0.5) / 1e3;
            (t += c), (n += c);
            let u = {
              pos: { x: t, y: n },
              originalPos: { x: t, y: n },
              vel: { x: i, y: l },
              mass: a,
              value: r,
              index: o.length,
            };
            return o.push(u), s(u), u;
          },
          d = (e) => {
            c();
            let t = e / 1e3;
            for (let n = 0; n < o.length; n++) {
              let i = o[n];
              i.index = n;
              let s =
                  (-0.235 * i.vel.x * i.vel.x * i.vel.x) / Math.abs(i.vel.x),
                u = (-0.235 * i.vel.y * i.vel.y * i.vel.y) / Math.abs(i.vel.y);
              (s = isNaN(s) ? 0 : s), (u = isNaN(u) ? 0 : u);
              let d = r.x + s / i.mass,
                p = r.y + u / i.mass;
              (i.vel.x += d * t),
                (i.vel.y += p * t),
                (i.pos.x += i.vel.x * t),
                (i.pos.y += i.vel.y * t),
                i.pos.y >= 1 && ((i.pos.y = 1), (i.vel.y *= -0.6)),
                i.pos.x >= 1 && ((i.pos.x = 1), (i.vel.x *= -0.6)),
                i.pos.y <= 0 && ((i.pos.y = 0), (i.vel.y *= -0.6)),
                i.pos.x <= 0 && ((i.pos.x = 0), (i.vel.x *= -0.6)),
                0.001 > Math.abs(i.vel.x) && (i.vel.x = 0),
                0.001 > Math.abs(i.vel.y) && (i.vel.y = 0);
              let { x: h, y: f } = l(i);
              if (a[f]) {
                if (a[f][h] && a[f][h].index !== i.index) {
                  let m = a[f][h],
                    v = { x: m.pos.x - i.pos.x, y: m.pos.y - i.pos.y },
                    g = Math.sqrt(
                      (m.pos.x - i.pos.x) * (m.pos.x - i.pos.x) +
                        (m.pos.y - i.pos.y) * (m.pos.y - i.pos.y)
                    ),
                    y = { x: v.x / g, y: v.y / g },
                    w = { x: i.vel.x - m.vel.x, y: i.vel.y - m.vel.y },
                    _ = w.x * y.x + w.y * y.y;
                  if (_ >= 0) {
                    let C = (2 * _) / (i.mass + m.mass);
                    (i.vel.x -= C * m.mass * y.x),
                      (i.vel.y -= C * m.mass * y.y),
                      (m.vel.x += C * i.mass * y.x),
                      (m.vel.y += C * i.mass * y.y);
                  }
                }
              } else a[f] = [];
              a[f][h] = i;
            }
          },
          p = () => {
            let e = "";
            for (let r = 0; r < n; r++) {
              for (let o = 0; o < t; o++) {
                var i;
                e +=
                  (a[r] &&
                    (null === (i = a[r][o]) || void 0 === i
                      ? void 0
                      : i.value)) ||
                  "\xa0";
              }
              e += "\n";
            }
            return e;
          };
        return {
          createPoint: u,
          getText: p,
          update: d,
          setGrid: s,
          cleanGrid: c,
          setGravity: i,
          getGrid: () => a,
          getData: () => o,
        };
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    1475: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(9402),
        o = n(3372);
      let a =
        "MNBWQR8gGD6SHO9EKUA50qdPbXp24C3ZmIVFhkwae1jloiYTfunyJtsL7xczv+=r!/;\"*_~:,-'\xb7\xa0".slice(
          10
        );
      function i(e, t) {
        let n;
        let i = [],
          l = [];
        try {
          let s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null);
          for (; (n = s.nextNode()); ) {
            var c, u;
            (null === (c = n.parentNode) || void 0 === c
              ? void 0
              : c.nodeName) === "SCRIPT" ||
              (null === (u = n.parentElement) || void 0 === u
                ? void 0
                : u.classList.contains("bigtext")) ||
              (i.push(n), l.push(n.nodeValue || ""));
          }
        } catch (d) {}
        requestAnimationFrame(() => {
          (0, r.Z)({
            duration: (null == t ? void 0 : t.duration) || 1200,
            easing: o.Z.linear,
            onFrame(e) {
              i.forEach((t, n) => {
                let r = t.nodeValue
                  .split("")
                  .map((t, r) => {
                    let o = 0.2 + ((n + 1) / i.length) * 0.8,
                      s = Math.min(1, e / o),
                      c = a[Math.floor((1 - s) * (a.length - 1))];
                    return " " === t || "-" === t || "\n" === t || s >= 0.99
                      ? l[n].charAt(r)
                      : c;
                  })
                  .join("");
                t.nodeValue = r;
              });
            },
            onComplete() {
              i.forEach((e, t) => {
                e.nodeValue = l[t];
              }),
                t && t.onComplete && t.onComplete();
            },
          });
        });
      }
    },
    11: function (e, t, n) {
      "use strict";
      function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3700: function () {},
    4024: function (e) {
      e.exports = {
        container: "Footer_container__Vebor",
        newsticker: "Footer_newsticker__P1uue",
        grid: "Footer_grid__S1b_W",
      };
    },
    5125: function (e) {
      e.exports = {
        header: "Header_header__NLhag",
        scrollUp: "Header_scrollUp__AfJxh",
        aboveFold: "Header_aboveFold__SvXmh",
        logo: "Header_logo__SAQTw",
        agency: "Header_agency__iMWyG",
        openMenu: "Header_openMenu__PAQOS",
        work: "Header_work__D3iVQ",
        about: "Header_about__PMRt2",
        content: "Header_content___w3_k",
        mobileOpen: "Header_mobileOpen__Ws0Gx",
        menu: "Header_menu__SvLc0",
        mobileLinks: "Header_mobileLinks__lWIBf",
        time: "Header_time__2nfoA",
        div1: "Header_div1__3QEsq",
        div2: "Header_div2__b1tO_",
        div3: "Header_div3__Da3DF",
        div4: "Header_div4__J6q20",
        div5: "Header_div5__1hrd3",
        startpage: "Header_startpage__7J1D8",
        ecom: "Header_ecom__wIl_y",
        careers: "Header_careers__O47fA",
        studio: "Header_studio__lb3OO",
        contact: "Header_contact__EkQLY",
        dot: "Header_dot__vReMn",
        backdrop: "Header_backdrop__J8Hnw",
        mobileMenu: "Header_mobileMenu__3k2cW",
        tick: "Header_tick__nkA3w",
      };
    },
    1727: function (e) {
      e.exports = {
        intro: "Intro_intro__L24QA",
        spacer: "Intro_spacer__N9H_Q",
        code: "Intro_code__gvfDX",
        blob: "Intro_blob__QrtNg",
        story: "Intro_story__j5zUd",
        hide: "Intro_hide__c9dQm",
      };
    },
    1102: function (e) {
      e.exports = {
        square: "TerminalText_square__fUl8o",
        text: "TerminalText_text___meIH",
        started: "TerminalText_started__FXB5Z",
        inverted: "TerminalText_inverted__lnyUw",
      };
    },
    830: function (e) {
      e.exports = {
        col2: "grid_col2__RaBpf",
        col3: "grid_col3__i3NB1",
        col4: "grid_col4__8IUeh",
        row26: "grid_row26__9_OOe",
        row242: "grid_row242__S1uCN",
        row44: "grid_row44__pTEFc",
        row422: "grid_row422__DBRLF",
        row2222: "grid_row2222__CzVWr",
        row233: "grid_row233__GhQny",
        row1313: "grid_row1313__nzkv_",
        row224: "grid_row224__OKmJv",
        row1322: "grid_row1322__4nAyM",
        row53: "grid_row53__W6nHn",
        row35: "grid_row35__td20L",
        row314: "grid_row314__RiBar",
        row62: "grid_row62__3N8Cn",
        row413: "grid_row413__vMDAO",
        row134: "grid_row134__WEHUv",
        row12221: "grid_row12221__FrPtw",
        row1421: "grid_row1421__1PhDI",
        space1: "grid_space1__9cJBp",
        space2: "grid_space2__xPBQP",
        space3: "grid_space3__OX_Gb",
        remspace: "grid_remspace__AP_Vg",
        bottom: "grid_bottom__e1HzC",
        topbottom: "grid_topbottom__k6oAR",
        square: "grid_square__4JOdq",
      };
    },
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                o = (e.exports = {});
              function a() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function l(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                  t = a;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (r) {
                  n = i;
                }
              })();
              var s = [],
                c = !1,
                u = -1;
              function d() {
                c &&
                  r &&
                  ((c = !1),
                  r.length ? (s = r.concat(s)) : (u = -1),
                  s.length && p());
              }
              function p() {
                if (!c) {
                  var e = l(d);
                  c = !0;
                  for (var t = s.length; t; ) {
                    for (r = s, s = []; ++u < t; ) r && r[u].run();
                    (u = -1), (t = s.length);
                  }
                  (r = null),
                    (c = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === i || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (r) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function f() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                s.push(new h(e, t)), 1 !== s.length || c || l(p);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = f),
                (o.addListener = f),
                (o.once = f),
                (o.off = f),
                (o.removeListener = f),
                (o.removeAllListeners = f),
                (o.emit = f),
                (o.prependListener = f),
                (o.prependOnceListener = f),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var a = (n[e] = { exports: {} }),
            i = !0;
          try {
            t[e](a, a.exports, r), (i = !1);
          } finally {
            i && delete n[e];
          }
          return a.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    9008: function (e, t, n) {
      e.exports = n(3121);
    },
    1664: function (e, t, n) {
      e.exports = n(1551);
    },
    1163: function (e, t, n) {
      e.exports = n(880);
    },
    9921: function (e, t) {
      "use strict";
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        s = Symbol.for("react.context"),
        c = Symbol.for("react.server_context"),
        u = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.suspense_list"),
        h = Symbol.for("react.memo"),
        f = Symbol.for("react.lazy");
      Symbol.for("react.offscreen"),
        Symbol.for("react.module.reference"),
        (t.isForwardRef = function (e) {
          return (
            (function (e) {
              if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                  case n:
                    switch ((e = e.type)) {
                      case o:
                      case i:
                      case a:
                      case d:
                      case p:
                        return e;
                      default:
                        switch ((e = e && e.$$typeof)) {
                          case c:
                          case s:
                          case u:
                          case f:
                          case h:
                          case l:
                            return e;
                          default:
                            return t;
                        }
                    }
                  case r:
                    return t;
                }
              }
            })(e) === u
          );
        });
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    6760: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      n.d(t, {
        h: function () {
          return x;
        },
      });
      var o,
        a = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        i = void 0;
      function l(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function s(e) {
        (this.target = e), (this.events = {});
      }
      (s.prototype.getEventHandlers = function (e, t) {
        var n =
          String(e) +
          " " +
          String(
            t
              ? !0 === t
                ? 100
                : (t.capture << 0) + (t.passive << 1) + (t.once << 2)
              : 0
          );
        return (
          this.events[n] ||
            ((this.events[n] = { handlers: [], handleEvent: void 0 }),
            (this.events[n].nextHandlers = this.events[n].handlers)),
          this.events[n]
        );
      }),
        (s.prototype.handleEvent = function (e, t, n) {
          var r = this.getEventHandlers(e, t);
          (r.handlers = r.nextHandlers),
            r.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (s.prototype.add = function (e, t, n) {
          var r = this,
            o = this.getEventHandlers(e, n);
          l(o),
            0 === o.nextHandlers.length &&
              ((o.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, o.handleEvent, n)),
            o.nextHandlers.push(t);
          var a = !0;
          return function () {
            if (a) {
              (a = !1), l(o);
              var i = o.nextHandlers.indexOf(t);
              o.nextHandlers.splice(i, 1),
                0 === o.nextHandlers.length &&
                  (r.target &&
                    r.target.removeEventListener(e, o.handleEvent, n),
                  (o.handleEvent = void 0));
            }
          };
        });
      var c = "__consolidated_events_handlers__";
      function u(e, t, n, r) {
        e[c] || (e[c] = new s(e));
        var o = r
          ? (void 0 === i &&
              (i = (function () {
                if (
                  !a ||
                  !window.addEventListener ||
                  !window.removeEventListener ||
                  !Object.defineProperty
                )
                  return !1;
                var e = !1;
                try {
                  var t = Object.defineProperty({}, "passive", {
                      get: function () {
                        e = !0;
                      },
                    }),
                    n = function () {};
                  window.addEventListener("testPassiveEventSupport", n, t),
                    window.removeEventListener("testPassiveEventSupport", n, t);
                } catch (r) {}
                return e;
              })()),
            i)
            ? r
            : !!r.capture
          : void 0;
        return e[c].add(t, n, o);
      }
      var d = n(7294),
        p = n(9864);
      function h(e, t) {
        var n =
          !isNaN(parseFloat(e)) && isFinite(e)
            ? parseFloat(e)
            : "px" === e.slice(-2)
            ? parseFloat(e.slice(0, -2))
            : void 0;
        if ("number" == typeof n) return n;
        var r = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        if ("number" == typeof r) return r * t;
      }
      var f = "above",
        m = "inside",
        v = "below",
        g = "invisible";
      function y(e) {
        return "string" == typeof e.type;
      }
      var w = [];
      function _(e) {
        w.push(e),
          o ||
            (o = setTimeout(function () {
              var e;
              for (o = null; (e = w.shift()); ) e();
            }, 0));
        var t = !0;
        return function () {
          if (t) {
            t = !1;
            var n = w.indexOf(e);
            -1 !== n &&
              (w.splice(n, 1), !w.length && o && (clearTimeout(o), (o = null)));
          }
        };
      }
      var C = "undefined" != typeof window,
        x = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).refElement = function (e) {
                n._ref = e;
              }),
              n
            );
          }
          ((o = t).prototype = Object.create(e.prototype)),
            (o.prototype.constructor = o),
            r(o, e);
          var o,
            a = t.prototype;
          return (
            (a.componentDidMount = function () {
              var e = this;
              C &&
                (this.cancelOnNextTick = _(function () {
                  e.cancelOnNextTick = null;
                  var t = e.props,
                    n = t.children;
                  t.debug,
                    (function (e, t) {
                      if (e && !y(e) && !t)
                        throw Error(
                          "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info."
                        );
                    })(n, e._ref),
                    (e._handleScroll = e._handleScroll.bind(e)),
                    (e.scrollableAncestor = e._findScrollableAncestor()),
                    (e.scrollEventListenerUnsubscribe = u(
                      e.scrollableAncestor,
                      "scroll",
                      e._handleScroll,
                      { passive: !0 }
                    )),
                    (e.resizeEventListenerUnsubscribe = u(
                      window,
                      "resize",
                      e._handleScroll,
                      { passive: !0 }
                    )),
                    e._handleScroll(null);
                }));
            }),
            (a.componentDidUpdate = function () {
              var e = this;
              C &&
                this.scrollableAncestor &&
                !this.cancelOnNextTick &&
                (this.cancelOnNextTick = _(function () {
                  (e.cancelOnNextTick = null), e._handleScroll(null);
                }));
            }),
            (a.componentWillUnmount = function () {
              C &&
                (this.scrollEventListenerUnsubscribe &&
                  this.scrollEventListenerUnsubscribe(),
                this.resizeEventListenerUnsubscribe &&
                  this.resizeEventListenerUnsubscribe(),
                this.cancelOnNextTick && this.cancelOnNextTick());
            }),
            (a._findScrollableAncestor = function () {
              var e = this.props,
                t = e.horizontal,
                r = e.scrollableAncestor;
              if (r) return "window" === r ? n.g.window : r;
              for (
                var o = this._ref;
                o.parentNode && (o = o.parentNode) !== document.body;

              ) {
                var a = window.getComputedStyle(o),
                  i =
                    (t
                      ? a.getPropertyValue("overflow-x")
                      : a.getPropertyValue("overflow-y")) ||
                    a.getPropertyValue("overflow");
                if ("auto" === i || "scroll" === i || "overlay" === i) return o;
              }
              return window;
            }),
            (a._handleScroll = function (e) {
              if (this._ref) {
                var t = this._getBounds(),
                  n =
                    t.viewportBottom - t.viewportTop == 0
                      ? g
                      : (t.viewportTop <= t.waypointTop &&
                          t.waypointTop <= t.viewportBottom) ||
                        (t.viewportTop <= t.waypointBottom &&
                          t.waypointBottom <= t.viewportBottom) ||
                        (t.waypointTop <= t.viewportTop &&
                          t.viewportBottom <= t.waypointBottom)
                      ? m
                      : t.viewportBottom < t.waypointTop
                      ? v
                      : t.waypointTop < t.viewportTop
                      ? f
                      : g,
                  r = this._previousPosition,
                  o = this.props,
                  a = (o.debug, o.onPositionChange),
                  i = o.onEnter,
                  l = o.onLeave,
                  s = o.fireOnRapidScroll;
                if (((this._previousPosition = n), r !== n)) {
                  var c = {
                    currentPosition: n,
                    previousPosition: r,
                    event: e,
                    waypointTop: t.waypointTop,
                    waypointBottom: t.waypointBottom,
                    viewportTop: t.viewportTop,
                    viewportBottom: t.viewportBottom,
                  };
                  a.call(this, c),
                    n === m ? i.call(this, c) : r === m && l.call(this, c),
                    s &&
                      ((r === v && n === f) || (r === f && n === v)) &&
                      (i.call(this, {
                        currentPosition: m,
                        previousPosition: r,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }),
                      l.call(this, {
                        currentPosition: n,
                        previousPosition: m,
                        event: e,
                        waypointTop: t.waypointTop,
                        waypointBottom: t.waypointBottom,
                        viewportTop: t.viewportTop,
                        viewportBottom: t.viewportBottom,
                      }));
                }
              }
            }),
            (a._getBounds = function () {
              var e,
                t,
                n = this.props,
                r = n.horizontal;
              n.debug;
              var o = this._ref.getBoundingClientRect(),
                a = o.left,
                i = o.top,
                l = o.right,
                s = o.bottom;
              this.scrollableAncestor === window
                ? ((e = r ? window.innerWidth : window.innerHeight), (t = 0))
                : ((e = r
                    ? this.scrollableAncestor.offsetWidth
                    : this.scrollableAncestor.offsetHeight),
                  (t = r
                    ? this.scrollableAncestor.getBoundingClientRect().left
                    : this.scrollableAncestor.getBoundingClientRect().top));
              var c = this.props,
                u = c.bottomOffset,
                d = h(c.topOffset, e),
                p = h(u, e),
                f = t + e;
              return {
                waypointTop: r ? a : i,
                waypointBottom: r ? l : s,
                viewportTop: t + d,
                viewportBottom: f - p,
              };
            }),
            (a.render = function () {
              var e = this,
                t = this.props.children;
              return t
                ? y(t) || (0, p.isForwardRef)(t)
                  ? d.cloneElement(t, {
                      ref: function (n) {
                        e.refElement(n),
                          t.ref &&
                            ("function" == typeof t.ref
                              ? t.ref(n)
                              : (t.ref.current = n));
                      },
                    })
                  : d.cloneElement(t, { innerRef: this.refElement })
                : d.createElement("span", {
                    ref: this.refElement,
                    style: { fontSize: 0 },
                  });
            }),
            t
          );
        })(d.PureComponent);
      (x.above = f),
        (x.below = v),
        (x.inside = m),
        (x.invisible = g),
        (x.defaultProps = {
          debug: !1,
          scrollableAncestor: void 0,
          children: void 0,
          topOffset: "0px",
          bottomOffset: "0px",
          horizontal: !1,
          onEnter: function () {},
          onLeave: function () {},
          onPositionChange: function () {},
          fireOnRapidScroll: !0,
        }),
        (x.displayName = "Waypoint");
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(880);
    }),
      (_N_E = e.O());
  },
]);
