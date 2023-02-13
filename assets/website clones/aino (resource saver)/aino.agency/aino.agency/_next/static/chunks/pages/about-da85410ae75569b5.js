(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    8318: function (e, A, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return s(9584);
        },
      ]);
    },
    1922: function (e, A, s) {
      "use strict";
      var t = s(5893),
        r = s(5675),
        n = s.n(r),
        i = s(7294),
        a = s(274),
        o = s.n(a),
        d = s(313),
        l = s(2674),
        c = s(6760);
      let h = (e) => new Promise((A) => setTimeout(A, e)),
        u = [],
        g = (e) => {
          let {
              src: A,
              immediate: s = !1,
              sizes: r,
              alwaysText: a = !1,
              onLoadingComplete: g,
            } = e,
            [m, w] = (0, i.useState)(u.includes(A.src)),
            x = (0, i.useRef)(null),
            j = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            f = (0, i.useRef)(null),
            E = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            O = (0, i.useRef)((e) => e / 12),
            v = (0, i.useRef)(null),
            b = (0, i.useRef)(null),
            B = (0, i.useRef)(null),
            [D, y] = (0, i.useState)({}),
            I = (0, i.useRef)(!1),
            C = (0, i.useRef)(s),
            Q = (e) => {
              x.current && (x.current.innerHTML = e);
            },
            { textMode: N, rainbowMode: k } = (0, l.Z)(),
            R = (0, i.useCallback)(() => {
              if (
                p.current &&
                j.current &&
                v.current &&
                b.current &&
                B.current &&
                f.current
              ) {
                let { width: e, height: A } = j.current.getBoundingClientRect();
                if (!e || !A) {
                  console.warn("Width or height is zero in the image wrapper");
                  return;
                }
                let s =
                  N || a
                    ? Math.ceil(A / window._lineHeight) * window._lineHeight
                    : A;
                (j.current.style.paddingBottom = "".concat((s / e) * 100, "%")),
                  (p.current.style.width = "".concat(e, "px")),
                  (p.current.style.height = "".concat(s, "px")),
                  (v.current.width = O.current(e)),
                  (v.current.height = O.current(s)),
                  (p.current.width = e),
                  (p.current.height = s),
                  b.current.drawImage(
                    z.current,
                    0,
                    0,
                    O.current(e),
                    O.current(s)
                  ),
                  N || a
                    ? (B.current.ctx.drawImage(v.current, 0, 0, e, s),
                      Q(B.current.getChars()))
                    : ((f.current.imageSmoothingEnabled = !1),
                      (f.current.webkitImageSmoothingEnabled = !1),
                      f.current.drawImage(v.current, 0, 0, e, s));
              }
            }, [z, N]);
          (0, i.useEffect)(() => {
            p.current &&
              ((f.current = p.current.getContext("2d")),
              (f.current.webkitImageSmoothingEnabled = !1),
              (f.current.imageSmoothingEnabled = !1));
          }, []),
            (0, i.useEffect)(() => {
              if (
                E.current &&
                j.current &&
                ((!B.current && !v.current) || N || a)
              ) {
                var e, A;
                (B.current = (0, d.ZP)(x.current)),
                  (v.current = document.createElement("canvas")),
                  (b.current = v.current.getContext("2d")),
                  (z.current = E.current),
                  f.current && (f.current.imageSmoothingEnabled = !1),
                  window.addEventListener("resize", R),
                  (
                    null === (e = E.current) || void 0 === e
                      ? void 0
                      : e.complete
                  )
                    ? R()
                    : null === (A = E.current) ||
                      void 0 === A ||
                      A.addEventListener("load", R);
              }
              return () => {
                window.removeEventListener("resize", R);
              };
            }, [R, N]);
          let _ = async () => {
              if (j.current) {
                let e = j.current.querySelector("img");
                if (e) {
                  if (((z.current = e), N || u.includes(A.src))) N && R();
                  else
                    for (let s = 16; s > 0; s -= 3)
                      await h(40), (O.current = (e) => e / s), R();
                  w(!0), u.push(A.src);
                }
              }
              g && g();
            },
            S = "/_next/image?url=".concat(
              encodeURIComponent(A.src),
              "&w=64&q=20"
            ),
            H = {};
          return (
            r && (H.sizes = r),
            (0, i.useEffect)(() => {
              y(N && k ? { "data-rainbow": !0 } : {});
            }, [k, N]),
            (0, t.jsxs)("div", {
              className: [
                o().wrapper,
                m ? o().loaded : "",
                N || a ? o().textMode : "",
              ].join(" "),
              ref: j,
              style: {
                paddingBottom: "".concat((A.height / A.width) * 100, "%"),
              },
              ...D,
              children: [
                (0, t.jsx)(c.h, {
                  onEnter() {
                    (C.current = !0), I.current && _();
                  },
                }),
                (0, t.jsx)(n(), {
                  src: A,
                  alt: "",
                  onLoadingComplete() {
                    (I.current = !0), C.current && _();
                  },
                  ...H,
                }),
                (0, t.jsxs)("div", {
                  className: o().loader,
                  children: [
                    (0, t.jsx)("img", { src: S, ref: E, alt: "", width: "64" }),
                    (0, t.jsx)("canvas", { ref: p }),
                  ],
                }),
                (0, t.jsx)("div", { className: o().letters, ref: x }),
              ],
            })
          );
        };
      A.Z = g;
    },
    9584: function (e, A, s) {
      "use strict";
      s.r(A),
        s.d(A, {
          default: function () {
            return p;
          },
        });
      var t = s(5893),
        r = s(830),
        n = s.n(r),
        i = s(7836),
        a = s.n(i),
        o = s(1922),
        d = {
          src: "/_next/static/media/i_1.b380596a.jpg",
          height: 1228,
          width: 1228,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAgEAACAgEDBQAAAAAAAAAAAAABAwACBQQGERITITLx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABgRAAIDAAAAAAAAAAAAAAAAAAARAQIh/9oADAMBAAIRAxEAPwCaty4/GYh9KaSqHMfeoYuntUHjuHq8Eknj5ERBs3glYhaf/9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = {
          src: "/_next/static/media/i_3.6aa8d03d.jpg",
          height: 1228,
          width: 1228,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDBAURITEGIlH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAQEBAQEAAAAAAAAAAAAAAAECAAMR/9oADAMBAAIRAxEAPwCh5DkbORpRw46y2rae3mScDQa0+x4Heh86JREU7ArzHnayO//Z",
          blurWidth: 8,
          blurHeight: 8,
        },
        c = {
          src: "/_next/static/media/i14.2d8c9216.jpg",
          height: 1228,
          width: 1228,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBRETBDFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAQACAwAAAAAAAAAAAAAAAAEAIQIREv/aAAwDAQACEQMRAD8AvObFWw11XKyLZsLpAJQHBpwMgdn0oiIOTK2LtKJ//9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/i_6.32600a9a.jpg",
          height: 1228,
          width: 1228,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAQMFAQAAAAAAAAAAAAABAgAEBREDByEjcYH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AKW87gWJ1FJT1ruzsOzTBCEZ5w3nyIiMhOmz/9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        u = {
          src: "/_next/static/media/i9.b42a996b.jpg",
          height: 1228,
          width: 1228,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABAwIHAAAAAAAAAAAAAAADAAECBBIFBhETFCKx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABkRAQADAQEAAAAAAAAAAAAAAAEAAgMRIf/aAAwDAQACEQMRAD8Ar81hpY4CZqms2BGHx7I69pzdrfHRERdrNU4xGQJ6T//Z",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = s(1664),
        m = s.n(g),
        w = s(4019);
      let x = [
          { url: "https://thefwa.com/cases/aino", name: "FWA Site of the day" },
          {
            url: "https://klikkentheke.com/catalogue/aino/",
            name: "Klikkentheke",
          },
          {
            url: "https://www.cssdesignawards.com/sites/aino/42800/",
            name: "CSSDA Site of the day",
          },
          {
            url: "https://godly.website/website/944-aino",
            name: "godly.website",
          },
          { url: "https://www.awwwards.com/sites/aino-1", name: "Awwwards" },
          { url: "https://minimal.gallery/", name: "minimal.gallery" },
          { url: "https://visuelle.co.uk/aino/", name: "Visuelle" },
          {
            url: "https://www.admiretheweb.com/inspiration/aino/",
            name: "Admire the Web",
          },
          { url: "https://s.muz.li/ZTNkNDZlNzRj", name: "muz.li" },
          {
            url: "https://www.instagram.com/p/CoKHJoSIJOH/",
            name: "morre.dsgn",
          },
          {
            url: "https://www.instagram.com/p/CoHVTifL4Of/",
            name: "iamcollaps",
          },
        ],
        j = () =>
          (0, t.jsxs)("div", {
            className: a().about,
            children: [
              (0, t.jsx)(w.Z, { title: "About", slug: "about" }),
              (0, t.jsx)("div", {
                className: n().row62,
                children: (0, t.jsx)("div", {
                  className: "preamble",
                  children: (0, t.jsx)("p", {
                    children:
                      "At this point in time in history, where almost everything is a generated rewrite of data, call it AI or human anxiety, people crave something real. Generating the future by computing history will quickly become boring and disposable. No greatest song was ever written using feedback programs and machine learning.",
                  }),
                }),
              }),
              (0, t.jsx)("div", { className: n().space1 }),
              (0, t.jsxs)("div", {
                className: n().row44,
                children: [
                  (0, t.jsx)("div", {}),
                  (0, t.jsx)("div", {
                    className: "text",
                    children: (0, t.jsxs)("div", {
                      className: n().col2,
                      children: [
                        (0, t.jsx)("p", {
                          children:
                            "This is why we now, more than ever, need a creative playground to express and explore human feelings that comes from within us. Brands need to position themselves above the AI race and start talking with a real voice, and people need to stay creative to make the world worth living in.",
                        }),
                        (0, t.jsx)("p", {
                          children:
                            "For us, that playground is code. With code, you can do almost anything. But the ironic truth is that most code is also generated and predetermined, based on the same false assumption that data can tell us what to do next. But we believe that there is much more to code than just doing what’s expected.",
                        }),
                        (0, t.jsx)("p", {
                          children:
                            "This is our position, between the creative forces of branding and technology. We want to explore new ideas to enhance the brand message through online interfaces, where the users actually spend time. We think and work like artists and creatives, only our tools are different and our products are used by people.",
                        }),
                        (0, t.jsx)("p", {
                          children:
                            "Inspired by many groundbreaking music artists, we strive to combine the comfortable, the uncomfortable, and the unknown to create tension and excitement in the intersection of user experience. If everyone likes it at first glance, it’s probably missing something.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: n().row2222,
                children: [
                  (0, t.jsx)("div", {}),
                  (0, t.jsxs)("div", {
                    className: "text",
                    children: [
                      (0, t.jsx)("p", {
                        children:
                          "We represent a new wave of creative agencies, built with technology in our DNA instead of middle management and outsourced developers. Thanks to the evolution of frameworks, we have the benefit to stay lean as a company while still maintaining a very high level of complexity and quality in our digital productions.",
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "So if you find yourself throwing money at a big agency and wondering who is really working on your project — we feel you. At Aino, you will get direct access to the people actually building your products, and we do that really well.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: n().row2222,
                children: [
                  (0, t.jsx)("div", { children: (0, t.jsx)(o.Z, { src: h }) }),
                  (0, t.jsx)("div", {}),
                  (0, t.jsx)("div", { children: (0, t.jsx)(o.Z, { src: l }) }),
                  (0, t.jsx)("div", { children: (0, t.jsx)(o.Z, { src: c }) }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: n().row2222,
                children: [
                  (0, t.jsx)("div", {}),
                  (0, t.jsx)("div", { children: (0, t.jsx)(o.Z, { src: d }) }),
                  (0, t.jsx)("div", {}),
                  (0, t.jsx)("div", { children: (0, t.jsx)(o.Z, { src: u }) }),
                ],
              }),
              (0, t.jsx)("div", { className: n().space2 }),
              (0, t.jsxs)("div", {
                className: n().row224,
                "data-rainbow": !0,
                children: [
                  (0, t.jsx)("div", {
                    children: (0, t.jsxs)("dl", {
                      className: a().facts,
                      children: [
                        (0, t.jsx)("dt", { children: "Platforms" }),
                        (0, t.jsx)("dd", { children: "Centra" }),
                        (0, t.jsx)("dd", { children: "Shopify" }),
                        (0, t.jsx)("dd", { children: "Google Cloud" }),
                        (0, t.jsx)("dd", { children: "Contentful" }),
                        (0, t.jsx)("dd", { children: "Storyblok" }),
                        (0, t.jsx)("dd", { children: "Vercel" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    children: (0, t.jsxs)("dl", {
                      className: a().facts,
                      children: [
                        (0, t.jsx)("dt", { children: "Tech" }),
                        (0, t.jsx)("dd", { children: "Node" }),
                        (0, t.jsx)("dd", { children: "Next" }),
                        (0, t.jsx)("dd", { children: "React" }),
                        (0, t.jsx)("dd", { children: "Redis" }),
                        (0, t.jsx)("dd", { children: "GraphQL" }),
                        (0, t.jsx)("dd", { children: "Apollo" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    children: (0, t.jsxs)("dl", {
                      className: a().facts,
                      children: [
                        (0, t.jsx)("dt", { children: "Services" }),
                        (0, t.jsx)("dd", { children: "Headless storefronts" }),
                        (0, t.jsx)("dd", { children: "Branding" }),
                        (0, t.jsx)("dd", { children: "Design systems" }),
                        (0, t.jsx)("dd", { children: "UI & UX" }),
                        (0, t.jsx)("dd", { children: "Motion design" }),
                        (0, t.jsx)("dd", { children: "Creative development" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", { className: n().space1 }),
              (0, t.jsxs)("div", {
                className: n().row26,
                children: [
                  (0, t.jsx)("div", {}),
                  (0, t.jsxs)("div", {
                    className: "preamble",
                    children: [
                      (0, t.jsx)("p", {
                        children:
                          "Our clients are brands and organizations with global ambitions to disrupt, scale, and perform online. We help them create, deploy and manage commerce storefronts, campaigns, brand sites, and online platforms for next-generation consumers.",
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          "If you feel like you are a good fit for us, please reach out to",
                          " ",
                          (0, t.jsx)("a", {
                            href: "mailto:julie@aino.agency",
                            children: "julie@aino.agency",
                          }),
                          " so we can get to know each other. But remember: we only work with nice people!",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", { className: ["", n().space2].join(" ") }),
              (0, t.jsxs)("div", {
                className: n().row224,
                children: [
                  (0, t.jsx)("div", {
                    className: "text",
                    children: (0, t.jsxs)("p", {
                      children: [
                        "Aino Aktiebolag is a Swedish company, corp no 556778-3443, founded in 2009. The name ”Aino” means ”the only one” and origins from the founder’s grandmother who immigrated from Karelia in the 1930s. Many of our projects wouldn’t be possible without our talented friends at",
                        " ",
                        (0, t.jsx)(m(), {
                          target: "_blank",
                          href: "https://oridnary.se",
                          children: "Oridnary",
                        }),
                        " ",
                        "who share our office and is a part of the family. This site is a tribute to Text. Fonts used: Diatype by Johannes Breyer & Fabian Harb. (❤︎)\xa0",
                        new Date().getFullYear(),
                        "\xa0Aino.",
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {}),
                  (0, t.jsx)("div", {
                    "data-rainbow": !0,
                    className: a().features,
                    children: (0, t.jsx)("ul", {
                      children: x.map((e) => {
                        let { url: A, name: s } = e;
                        return (0, t.jsx)(
                          "li",
                          {
                            children: (0, t.jsx)(m(), {
                              href: A,
                              target: "_blank",
                              children: s,
                            }),
                          },
                          A
                        );
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
      var p = j;
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
    7836: function (e) {
      e.exports = { about: "about_about__b62NF", facts: "about_facts__DJpzT" };
    },
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return e((e.s = 8318));
    }),
      (_N_E = e.O());
  },
]);
