(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(7660);
        },
      ]);
    },
    8976: function (e, r) {
      "use strict";
      r.Z = {
        src: "/_next/static/media/SHIRT.3443994d.jpg",
        height: 1995,
        width: 1995,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAgEAABAwQCAwAAAAAAAAAAAAABAAIDBBEUIQYTIkFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALZwGjhr6LFazFZOJZO2xJit5An3sN+bRERJ/9k=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    1922: function (e, r, n) {
      "use strict";
      var s = n(5893),
        A = n(5675),
        t = n.n(A),
        a = n(7294),
        i = n(274),
        c = n.n(i),
        l = n(313),
        o = n(2674),
        d = n(6760);
      let u = (e) => new Promise((r) => setTimeout(r, e)),
        h = [],
        m = (e) => {
          let {
              src: r,
              immediate: n = !1,
              sizes: A,
              alwaysText: i = !1,
              onLoadingComplete: m,
            } = e,
            [g, x] = (0, a.useState)(h.includes(r.src)),
            w = (0, a.useRef)(null),
            j = (0, a.useRef)(null),
            f = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            v = (0, a.useRef)(null),
            O = (0, a.useRef)(null),
            z = (0, a.useRef)((e) => e / 12),
            _ = (0, a.useRef)(null),
            p = (0, a.useRef)(null),
            B = (0, a.useRef)(null),
            [k, b] = (0, a.useState)({}),
            C = (0, a.useRef)(!1),
            y = (0, a.useRef)(n),
            D = (e) => {
              w.current && (w.current.innerHTML = e);
            },
            { textMode: N, rainbowMode: I } = (0, o.Z)(),
            Q = (0, a.useCallback)(() => {
              if (
                f.current &&
                j.current &&
                _.current &&
                p.current &&
                B.current &&
                E.current
              ) {
                let { width: e, height: r } = j.current.getBoundingClientRect();
                if (!e || !r) {
                  console.warn("Width or height is zero in the image wrapper");
                  return;
                }
                let n =
                  N || i
                    ? Math.ceil(r / window._lineHeight) * window._lineHeight
                    : r;
                (j.current.style.paddingBottom = "".concat((n / e) * 100, "%")),
                  (f.current.style.width = "".concat(e, "px")),
                  (f.current.style.height = "".concat(n, "px")),
                  (_.current.width = z.current(e)),
                  (_.current.height = z.current(n)),
                  (f.current.width = e),
                  (f.current.height = n),
                  p.current.drawImage(
                    O.current,
                    0,
                    0,
                    z.current(e),
                    z.current(n)
                  ),
                  N || i
                    ? (B.current.ctx.drawImage(_.current, 0, 0, e, n),
                      D(B.current.getChars()))
                    : ((E.current.imageSmoothingEnabled = !1),
                      (E.current.webkitImageSmoothingEnabled = !1),
                      E.current.drawImage(_.current, 0, 0, e, n));
              }
            }, [O, N]);
          (0, a.useEffect)(() => {
            f.current &&
              ((E.current = f.current.getContext("2d")),
              (E.current.webkitImageSmoothingEnabled = !1),
              (E.current.imageSmoothingEnabled = !1));
          }, []),
            (0, a.useEffect)(() => {
              if (
                v.current &&
                j.current &&
                ((!B.current && !_.current) || N || i)
              ) {
                var e, r;
                (B.current = (0, l.ZP)(w.current)),
                  (_.current = document.createElement("canvas")),
                  (p.current = _.current.getContext("2d")),
                  (O.current = v.current),
                  E.current && (E.current.imageSmoothingEnabled = !1),
                  window.addEventListener("resize", Q),
                  (
                    null === (e = v.current) || void 0 === e
                      ? void 0
                      : e.complete
                  )
                    ? Q()
                    : null === (r = v.current) ||
                      void 0 === r ||
                      r.addEventListener("load", Q);
              }
              return () => {
                window.removeEventListener("resize", Q);
              };
            }, [Q, N]);
          let R = async () => {
              if (j.current) {
                let e = j.current.querySelector("img");
                if (e) {
                  if (((O.current = e), N || h.includes(r.src))) N && Q();
                  else
                    for (let n = 16; n > 0; n -= 3)
                      await u(40), (z.current = (e) => e / n), Q();
                  x(!0), h.push(r.src);
                }
              }
              m && m();
            },
            S = "/_next/image?url=".concat(
              encodeURIComponent(r.src),
              "&w=64&q=20"
            ),
            L = {};
          return (
            A && (L.sizes = A),
            (0, a.useEffect)(() => {
              b(N && I ? { "data-rainbow": !0 } : {});
            }, [I, N]),
            (0, s.jsxs)("div", {
              className: [
                c().wrapper,
                g ? c().loaded : "",
                N || i ? c().textMode : "",
              ].join(" "),
              ref: j,
              style: {
                paddingBottom: "".concat((r.height / r.width) * 100, "%"),
              },
              ...k,
              children: [
                (0, s.jsx)(d.h, {
                  onEnter() {
                    (y.current = !0), C.current && R();
                  },
                }),
                (0, s.jsx)(t(), {
                  src: r,
                  alt: "",
                  onLoadingComplete() {
                    (C.current = !0), y.current && R();
                  },
                  ...L,
                }),
                (0, s.jsxs)("div", {
                  className: c().loader,
                  children: [
                    (0, s.jsx)("img", { src: S, ref: v, alt: "", width: "64" }),
                    (0, s.jsx)("canvas", { ref: f }),
                  ],
                }),
                (0, s.jsx)("div", { className: c().letters, ref: w }),
              ],
            })
          );
        };
      r.Z = m;
    },
    1353: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return m;
        },
      });
      var s = n(5893),
        A = n(1664),
        t = n.n(A),
        a = n(7294),
        i = n(1739),
        c = n.n(i),
        l = [
          { name: "Nudie Jeans", url: "/work/nudie-jeans", year: "2010-" },
          { name: "All Blues", url: "/work/all-blues", year: "2020-" },
          { name: "Majblomman", url: "/work/majblomman", year: "2018-2022" },
          { name: "Hyper Island", year: "2022" },
          { name: "Icebug", year: "2022-" },
          { name: "Eton Shirts", url: "/work/eton-shirts", year: "2019-2022" },
          { name: "Emma S", url: "/work/emmas", year: "2021-" },
          { name: "Beyond Medals", year: "2021-" },
          { name: "Forsman & Bodenfors", year: "2013-" },
          { name: "Sweet SKTBS\xae", year: "2022-" },
          { name: "Globen Lighting", year: "2022-" },
          { name: "Rosendal Garden Party", year: "2021-" },
          { name: "Hunkydory", year: "2019-2021", url: "/work/hunkydory" },
          { name: "Odd Molly", year: "2019-2021" },
          { name: "Socksss", year: "2021-", url: "/work/socksss" },
          { name: "Telia", year: "2020" },
          { name: "Selected Brands", year: "2019-2020" },
          { name: "G\xf6teborgsOperan", year: "2009-2022" },
          { name: "Bzzt!", year: "2017-2020" },
          { name: "Acos", year: "2018-2020" },
          { name: "Rubn", year: "2017-2018" },
          { name: "Kungliga Biblioteket", year: "2007-2015" },
          { name: "Artilleriet", year: "2011-2015" },
          { name: "Gr\xf6na G\xe5rdar", year: "2010-2014" },
          { name: "G\xf6teborgs Konstmuseum", year: "2017" },
          { name: "Sveriges Radio", year: "2013" },
          { name: "National\xadencyklopedin", year: "2009-2010" },
          { name: "Sj\xf6r\xe4ddnings\xads\xe4llskapet", year: "2010-2015" },
        ],
        o = n(6760),
        d = n(1475),
        u = n(1184);
      let h = (e) => {
        let { onlyActive: r, title: n } = e,
          A = (0, a.useRef)(null),
          i = (0, a.useRef)(!1);
        return (0, s.jsxs)("div", {
          className: c().work,
          ref: A,
          "data-rainbow": !0,
          children: [
            (0, s.jsx)(o.h, {
              onEnter() {
                A.current &&
                  !i.current &&
                  ((i.current = !0), (0, d.Z)(A.current));
              },
            }),
            (0, s.jsx)("div", {
              className: c().label,
              children: n || "Our work",
            }),
            (0, s.jsx)("ul", {
              className: c().table,
              children: l
                .filter((e) => !r || e.url)
                .map((e) =>
                  e.url
                    ? (0, s.jsx)(
                        "li",
                        {
                          children: (0, s.jsxs)(t(), {
                            href: e.url,
                            children: [
                              (0, s.jsx)("i", {}),
                              (0, s.jsx)("strong", {
                                className: c().title,
                                children: e.name,
                              }),
                              (0, s.jsx)("span", {
                                className: c().year,
                                children: e.year,
                              }),
                            ],
                          }),
                        },
                        e.url
                      )
                    : (0, s.jsxs)(
                        "li",
                        {
                          className: c().nolink,
                          children: [
                            (0, s.jsx)("strong", {
                              className: c().title,
                              children: e.name,
                            }),
                            (0, s.jsx)("span", {
                              className: c().year,
                              children: e.year,
                            }),
                          ],
                        },
                        e.name
                      )
                ),
            }),
            (0, s.jsxs)("div", {
              className: c().hiring,
              children: [
                (0, s.jsx)("h2", { children: "We’re hiring!" }),
                (0, s.jsxs)("ul", {
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(t(), {
                        href: "/careers/developer",
                        onClick: () => (0, u.Z)("careers"),
                        children: "Developer / Architect",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(t(), {
                        href: "/careers/creative-developer",
                        onClick: () => (0, u.Z)("careers"),
                        children: "Creative Developer / Animator",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(t(), {
                        href: "/careers/ux",
                        onClick: () => (0, u.Z)("careers"),
                        children: "UX-designer",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(t(), {
                        href: "/careers/internships",
                        onClick: () => (0, u.Z)("careers"),
                        children: "Internships",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var m = h;
    },
    7660: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return z;
          },
        });
      var s = n(5893),
        A = n(1922),
        t = n(7294),
        a = n(8893),
        i = n.n(a),
        c = n(830),
        l = n.n(c),
        o = n(1664),
        d = n.n(o),
        u = n(1353),
        h = {
          src: "/_next/static/media/s2.33b4bcef.jpg",
          height: 1382,
          width: 1382,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAwACAwAAAAAAAAAAAAABAgAEEQUhAxKB/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAaEQACAgMAAAAAAAAAAAAAAAABAgCxAwQR/9oADAMBAAIRAxEAPwCWxz/KUrz10uM/gVvcF8LlNwDQOu9+RERCYVdQTcmvsOh4KE//2Q==",
          blurWidth: 8,
          blurHeight: 8,
        },
        m = {
          src: "/_next/static/media/emmas.d8063787.jpg",
          height: 1478,
          width: 1478,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBQEBAQAAAAAAAAAAAAADAAECBBEhBmH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAMAwEAAhEDEQA/AJyZyi8uOrGhKZ6ZdKxBbGDO79fnd36iIhAa1DeF/9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/i10.a5ad53c5.jpg",
          height: 2e3,
          width: 2e3,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAgEAABBAEEAwAAAAAAAAAAAAADAAECEQQFBhIhMUJh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABgRAQADAQAAAAAAAAAAAAAAAAIAAREh/9oADAMBAAIRAxEAPwCptZ2+KRcmOUOB8YnE9P3Jneqr2r54pERCTXYiW5P/2Q==",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = n(8976),
        w = n(4019),
        j = n(1184),
        f = n(1106),
        E = n.n(f);
      let v = (e) => {
        let { children: r } = e,
          [n, A] = (0, t.useState)(0),
          a = (0, t.useRef)(),
          i = (0, t.useRef)(null),
          c = (0, t.useRef)(null),
          [l, o] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            let e = i.current,
              n = 0;
            if (c.current) {
              let { width: t } = c.current.getBoundingClientRect();
              n = Math.ceil((t + 5) / window._charWidth);
            }
            Date.now();
            let l = () => {
              A((e) => {
                let r = e + 1;
                return r >= n ? 0 : r;
              }),
                Date.now(),
                clearTimeout(a.current),
                (a.current = setTimeout(l, 300));
            };
            clearTimeout(a.current), (a.current = setTimeout(l, 300));
            let d = () => {
                "ontouchstart" in window ||
                  (clearTimeout(a.current), (a.current = setTimeout(l, 300)));
              },
              u = () => {
                "ontouchstart" in window || clearTimeout(a.current);
              };
            return (
              o(
                Array.from(Array(7)).map(() =>
                  (0, s.jsxs)(s.Fragment, { children: [r, "\xa0"] })
                )
              ),
              e &&
                (e.addEventListener("mouseenter", u),
                e.addEventListener("mouseleave", d),
                e.addEventListener("mousemove", u)),
              () => {
                e &&
                  (e.removeEventListener("mouseenter", u),
                  e.removeEventListener("mouseleave", d),
                  e.removeEventListener("mousemove", u)),
                  clearTimeout(a.current),
                  o(null);
              }
            );
          }, [r]),
          (0, s.jsx)("div", {
            className: E().container,
            children: (0, s.jsxs)("div", {
              ref: i,
              className: E().ticker,
              style: { marginLeft: "".concat(-n, "rem") },
              children: [
                (0, s.jsx)("span", { ref: c, children: r }),
                l ? (0, s.jsxs)("span", { children: ["\xa0", l] }) : null,
              ],
            }),
          })
        );
      };
      var O = n(1163);
      function z() {
        let [e, r] = (0, t.useState)([]),
          { push: n } = (0, O.useRouter)();
        return (
          (0, t.useEffect)(() => {
            let e = async () => {
              let e = await fetch("/api/scores/get"),
                n = await e.json();
              r(n);
            };
            e();
          }, []),
          (0, s.jsxs)("div", {
            className: i().home,
            children: [
              (0, s.jsx)(w.Z, {
                description:
                  "We design e-commerce storefronts, campaigns, brand sites and online platforms for next generation consumers.",
              }),
              (0, s.jsxs)("div", {
                className: l().row44,
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)("div", {
                      className: i().feature,
                      children: (0, s.jsxs)(d(), {
                        href: "/work/nudie-jeans",
                        onClick: () => (0, j.Z)("work"),
                        children: [
                          (0, s.jsx)(A.Z, { src: h }),
                          (0, s.jsx)("p", { children: "Case: Nudie Jeans" }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: i().feature,
                    children: [
                      (0, s.jsx)(d(), {
                        href: "/work/all-blues",
                        onClick: () => (0, j.Z)("work"),
                        children: (0, s.jsx)(A.Z, { src: g }),
                      }),
                      (0, s.jsx)("p", { children: "Case: All Blues" }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: [l().row422, i().introText].join(" "),
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)("div", {
                      className: "preamble",
                      children: (0, s.jsxs)("p", {
                        children: [
                          "We are a creative design and technology agency from Sweden, comprised of colleagues turned friends that genuinely enjoy working together.",
                          " ",
                          (0, s.jsx)(d(), {
                            href: "/about",
                            className: "more",
                            onClick: () => (0, j.Z)("about"),
                            children: "Read more",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: [l().square, "hidemobile"].join(" "),
                    children: (0, s.jsx)("div", {}),
                  }),
                  (0, s.jsx)("div", {
                    className: i().services,
                    children: (0, s.jsxs)("dl", {
                      "data-rainbow": !0,
                      children: [
                        (0, s.jsx)("dt", { children: "Services" }),
                        (0, s.jsx)("dd", {
                          children: "Headless e-commerce storefronts",
                        }),
                        (0, s.jsx)("dd", {
                          children: "Online brand design systems",
                        }),
                        (0, s.jsx)("dd", { children: "UX/UI & Design" }),
                        (0, s.jsx)("dd", { children: "Motion design" }),
                        (0, s.jsx)("dd", { children: "Creative development" }),
                        (0, s.jsx)("dd", {
                          children: "Centra & Shopify management",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(v, {
                children: [
                  (0, s.jsx)(d(), {
                    href: "https://centra.com/news/creating-premium-digital-shopping-experiences-with-aino-agency",
                    target: "_blank",
                    children:
                      "Read all about frictionless e-commerce with Aino",
                  }),
                  " • ",
                  (0, s.jsx)(d(), {
                    href: "https://instagram.com/aino.agency",
                    target: "_blank",
                    children: "Follow us on insta for more updates",
                  }),
                  " • ",
                  (0, s.jsx)(d(), {
                    href: "/careers",
                    onClick: () => (0, j.Z)("careers"),
                    children: "We’re hiring developers and designers!",
                  }),
                  " • ",
                  "Different flavors of this website are available in the footer",
                  " •",
                ],
              }),
              (0, s.jsx)("div", { className: l().space1 }),
              (0, s.jsxs)("div", {
                className: l().row422,
                children: [
                  (0, s.jsx)("div", {
                    className: i().feature,
                    children: (0, s.jsxs)(d(), {
                      href: "/work/emmas",
                      onClick: () => (0, j.Z)("work"),
                      children: [
                        (0, s.jsx)(A.Z, { src: m }),
                        (0, s.jsx)("p", { children: "Case: Emma.S" }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsxs)("div", {
                      className: i().feature,
                      children: [
                        (0, s.jsx)(d(), {
                          href: "/work/eton-shirts",
                          onClick: () => (0, j.Z)("work"),
                          children: (0, s.jsx)(A.Z, { src: x.Z }),
                        }),
                        (0, s.jsx)("p", { children: "Case: Eton Shirts" }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: l().bottom,
                    "data-rainbow": !0,
                  }),
                ],
              }),
              (0, s.jsx)("div", { className: l().space2 }),
              (0, s.jsxs)("div", {
                className: i().workContainer,
                children: [
                  e.length
                    ? (0, s.jsxs)("div", {
                        className: i().highscores,
                        "data-rainbow": !0,
                        children: [
                          (0, s.jsx)("h2", { children: "Textris highscore" }),
                          (0, s.jsx)("ul", {
                            className: l().col2,
                            children: e.map((e, r) => {
                              let { name: n, score: A } = e;
                              return (0, s.jsxs)(
                                "li",
                                {
                                  children: [
                                    (0, s.jsx)("span", { children: n }),
                                    " ",
                                    A,
                                  ],
                                },
                                "".concat(n).concat(A).concat(r)
                              );
                            }),
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => n("/game"),
                            children: "Play game →",
                          }),
                        ],
                      })
                    : null,
                  (0, s.jsx)(u.Z, {}),
                ],
              }),
            ],
          })
        );
      }
    },
    274: function (e) {
      e.exports = {
        wrapper: "Image_wrapper__CEf6Z",
        loaded: "Image_loaded__4V492",
        loader: "Image_loader__d_Pxc",
        letters: "Image_letters__VlOak",
        textMode: "Image_textMode__sZj32",
      };
    },
    1106: function (e) {
      e.exports = {
        container: "Ticker_container__LcZXO",
        ticker: "Ticker_ticker__Gy10F",
      };
    },
    1739: function (e) {
      e.exports = {
        table: "Work_table__T8PRo",
        nolink: "Work_nolink__Yewlm",
        image: "Work_image__HWSXB",
        work: "Work_work__MunoP",
        label: "Work_label__K36fA",
        hiring: "Work_hiring__CzjMH",
      };
    },
    8893: function (e) {
      e.exports = {
        home: "Home_home__caKxi",
        guide: "Home_guide__Os6sK",
        feature: "Home_feature__puGjf",
        note: "Home_note__sWWbQ",
        services: "Home_services__HvI_T",
        highscores: "Home_highscores__0wKmp",
      };
    },
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
