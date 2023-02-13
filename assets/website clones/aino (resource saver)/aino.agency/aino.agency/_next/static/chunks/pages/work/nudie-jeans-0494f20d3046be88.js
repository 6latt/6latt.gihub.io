(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [13],
  {
    7004: function (A, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/work/nudie-jeans",
        function () {
          return r(7178);
        },
      ]);
    },
    1922: function (A, e, r) {
      "use strict";
      var s = r(5893),
        n = r(5675),
        a = r.n(n),
        i = r(7294),
        t = r(274),
        l = r.n(t),
        c = r(313),
        o = r(2674),
        d = r(6760);
      let h = (A) => new Promise((e) => setTimeout(e, A)),
        u = [],
        g = (A) => {
          let {
              src: e,
              immediate: r = !1,
              sizes: n,
              alwaysText: t = !1,
              onLoadingComplete: g,
            } = A,
            [x, m] = (0, i.useState)(u.includes(e.src)),
            E = (0, i.useRef)(null),
            j = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            O = (0, i.useRef)(null),
            B = (0, i.useRef)(null),
            f = (0, i.useRef)((A) => A / 12),
            D = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            [b, Q] = (0, i.useState)({}),
            I = (0, i.useRef)(!1),
            C = (0, i.useRef)(r),
            y = (A) => {
              E.current && (E.current.innerHTML = A);
            },
            { textMode: k, rainbowMode: _ } = (0, o.Z)(),
            N = (0, i.useCallback)(() => {
              if (
                w.current &&
                j.current &&
                D.current &&
                v.current &&
                p.current &&
                z.current
              ) {
                let { width: A, height: e } = j.current.getBoundingClientRect();
                if (!A || !e) {
                  console.warn("Width or height is zero in the image wrapper");
                  return;
                }
                let r =
                  k || t
                    ? Math.ceil(e / window._lineHeight) * window._lineHeight
                    : e;
                (j.current.style.paddingBottom = "".concat((r / A) * 100, "%")),
                  (w.current.style.width = "".concat(A, "px")),
                  (w.current.style.height = "".concat(r, "px")),
                  (D.current.width = f.current(A)),
                  (D.current.height = f.current(r)),
                  (w.current.width = A),
                  (w.current.height = r),
                  v.current.drawImage(
                    B.current,
                    0,
                    0,
                    f.current(A),
                    f.current(r)
                  ),
                  k || t
                    ? (p.current.ctx.drawImage(D.current, 0, 0, A, r),
                      y(p.current.getChars()))
                    : ((z.current.imageSmoothingEnabled = !1),
                      (z.current.webkitImageSmoothingEnabled = !1),
                      z.current.drawImage(D.current, 0, 0, A, r));
              }
            }, [B, k]);
          (0, i.useEffect)(() => {
            w.current &&
              ((z.current = w.current.getContext("2d")),
              (z.current.webkitImageSmoothingEnabled = !1),
              (z.current.imageSmoothingEnabled = !1));
          }, []),
            (0, i.useEffect)(() => {
              if (
                O.current &&
                j.current &&
                ((!p.current && !D.current) || k || t)
              ) {
                var A, e;
                (p.current = (0, c.ZP)(E.current)),
                  (D.current = document.createElement("canvas")),
                  (v.current = D.current.getContext("2d")),
                  (B.current = O.current),
                  z.current && (z.current.imageSmoothingEnabled = !1),
                  window.addEventListener("resize", N),
                  (
                    null === (A = O.current) || void 0 === A
                      ? void 0
                      : A.complete
                  )
                    ? N()
                    : null === (e = O.current) ||
                      void 0 === e ||
                      e.addEventListener("load", N);
              }
              return () => {
                window.removeEventListener("resize", N);
              };
            }, [N, k]);
          let S = async () => {
              if (j.current) {
                let A = j.current.querySelector("img");
                if (A) {
                  if (((B.current = A), k || u.includes(e.src))) k && N();
                  else
                    for (let r = 16; r > 0; r -= 3)
                      await h(40), (f.current = (A) => A / r), N();
                  m(!0), u.push(e.src);
                }
              }
              g && g();
            },
            R = "/_next/image?url=".concat(
              encodeURIComponent(e.src),
              "&w=64&q=20"
            ),
            M = {};
          return (
            n && (M.sizes = n),
            (0, i.useEffect)(() => {
              Q(k && _ ? { "data-rainbow": !0 } : {});
            }, [_, k]),
            (0, s.jsxs)("div", {
              className: [
                l().wrapper,
                x ? l().loaded : "",
                k || t ? l().textMode : "",
              ].join(" "),
              ref: j,
              style: {
                paddingBottom: "".concat((e.height / e.width) * 100, "%"),
              },
              ...b,
              children: [
                (0, s.jsx)(d.h, {
                  onEnter() {
                    (C.current = !0), I.current && S();
                  },
                }),
                (0, s.jsx)(a(), {
                  src: e,
                  alt: "",
                  onLoadingComplete() {
                    (I.current = !0), C.current && S();
                  },
                  ...M,
                }),
                (0, s.jsxs)("div", {
                  className: l().loader,
                  children: [
                    (0, s.jsx)("img", { src: R, ref: O, alt: "", width: "64" }),
                    (0, s.jsx)("canvas", { ref: w }),
                  ],
                }),
                (0, s.jsx)("div", { className: l().letters, ref: E }),
              ],
            })
          );
        };
      e.Z = g;
    },
    1353: function (A, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return g;
        },
      });
      var s = r(5893),
        n = r(1664),
        a = r.n(n),
        i = r(7294),
        t = r(1739),
        l = r.n(t),
        c = [
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
        o = r(6760),
        d = r(1475),
        h = r(1184);
      let u = (A) => {
        let { onlyActive: e, title: r } = A,
          n = (0, i.useRef)(null),
          t = (0, i.useRef)(!1);
        return (0, s.jsxs)("div", {
          className: l().work,
          ref: n,
          "data-rainbow": !0,
          children: [
            (0, s.jsx)(o.h, {
              onEnter() {
                n.current &&
                  !t.current &&
                  ((t.current = !0), (0, d.Z)(n.current));
              },
            }),
            (0, s.jsx)("div", {
              className: l().label,
              children: r || "Our work",
            }),
            (0, s.jsx)("ul", {
              className: l().table,
              children: c
                .filter((A) => !e || A.url)
                .map((A) =>
                  A.url
                    ? (0, s.jsx)(
                        "li",
                        {
                          children: (0, s.jsxs)(a(), {
                            href: A.url,
                            children: [
                              (0, s.jsx)("i", {}),
                              (0, s.jsx)("strong", {
                                className: l().title,
                                children: A.name,
                              }),
                              (0, s.jsx)("span", {
                                className: l().year,
                                children: A.year,
                              }),
                            ],
                          }),
                        },
                        A.url
                      )
                    : (0, s.jsxs)(
                        "li",
                        {
                          className: l().nolink,
                          children: [
                            (0, s.jsx)("strong", {
                              className: l().title,
                              children: A.name,
                            }),
                            (0, s.jsx)("span", {
                              className: l().year,
                              children: A.year,
                            }),
                          ],
                        },
                        A.name
                      )
                ),
            }),
            (0, s.jsxs)("div", {
              className: l().hiring,
              children: [
                (0, s.jsx)("h2", { children: "We’re hiring!" }),
                (0, s.jsxs)("ul", {
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(a(), {
                        href: "/careers/developer",
                        onClick: () => (0, h.Z)("careers"),
                        children: "Developer / Architect",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(a(), {
                        href: "/careers/creative-developer",
                        onClick: () => (0, h.Z)("careers"),
                        children: "Creative Developer / Animator",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(a(), {
                        href: "/careers/ux",
                        onClick: () => (0, h.Z)("careers"),
                        children: "UX-designer",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(a(), {
                        href: "/careers/internships",
                        onClick: () => (0, h.Z)("careers"),
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
      var g = u;
    },
    7178: function (A, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return f;
          },
        });
      var s = r(5893),
        n = r(7294),
        a = r(1922),
        i = r(830),
        t = r.n(i),
        l = r(7041),
        c = r.n(l),
        o = {
          src: "/_next/static/media/i10.71d9d23f.jpg",
          height: 1381,
          width: 1381,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAABBQEBAQAAAAAAAAAAAAABAAIDBBESITH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJr9WaW1FA9soqMYZDEGnnvcGefcCIikf//Z",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = {
          src: "/_next/static/media/i12.797e0b7e.jpg",
          height: 1381,
          width: 1381,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgIDAAAAAAAAAAAAAAABAgAEETEDBWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABgRAQADAQAAAAAAAAAAAAAAAAEAAgNR/9oADAMBAAIRAxEAPwCVctG/16h+QvaQsG3nOd+RER6WW6ck+NSuY9n/2Q==",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/s77.2ebffb3a.jpg",
          height: 1980,
          width: 1980,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBQQRITFBEv/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAABABES/9oADAMBAAIRAxEAPwCRt1d48uUJHWL2yWRERe5x4+td+ADZA659RETzIaX/2Q==",
          blurWidth: 8,
          blurHeight: 8,
        },
        u = {
          src: "/_next/static/media/i1.7ded5043.jpg",
          height: 1980,
          width: 1980,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAABAgARAzESE0H/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKOceRmtCAOwO3MqbWjdVrzcREg//9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/i2.1e747763.jpg",
          height: 1980,
          width: 1980,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAgICAwAAAAAAAAAAAAABAgADBAUGESExsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AojRyHX7EAPVnY1uUtjPZaVNadMSB378fBERFI//Z",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "/_next/static/media/d3.c29c4efe.jpg",
          height: 1980,
          width: 990,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAaEAACAwEBAAAAAAAAAAAAAAABAwACBDGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwCdarU/SCzSAXWIBffnsREMZEv/2Q==",
          blurWidth: 4,
          blurHeight: 8,
        },
        m = {
          src: "/_next/static/media/d1.23a9d8ec.jpg",
          height: 1980,
          width: 990,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAAABwEBAAAAAAAAAAAAAAAAAQIDBBETEpL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALDMZmTo4U1itFEXa1XXoAAEf//Z",
          blurWidth: 4,
          blurHeight: 8,
        },
        E = {
          src: "/_next/static/media/icons-black.5e71c813.gif",
          height: 1e3,
          width: 1e3,
        },
        j = r(1353),
        w = r(1664),
        z = r.n(w),
        O = r(4019);
      let B = () => (
        (0, n.useRef)(null),
        (0, s.jsxs)("div", {
          className: c().work,
          children: [
            (0, s.jsx)(O.Z, { title: "Nudie Jeans", slug: "work/nudie-jeans" }),
            (0, s.jsxs)("div", {
              className: t().row413,
              "data-rainbow": !0,
              children: [
                (0, s.jsx)("div", {
                  children: (0, s.jsxs)("dl", {
                    className: c().facts,
                    children: [
                      (0, s.jsx)("dt", { children: "Client" }),
                      (0, s.jsx)("dd", { children: "Nudie Jeans" }),
                      (0, s.jsx)("dt", { children: "Year" }),
                      (0, s.jsx)("dd", { children: "2010-ongoing" }),
                      (0, s.jsx)("dt", { children: "Work" }),
                      (0, s.jsx)("dd", {
                        children: (0, s.jsxs)("ul", {
                          children: [
                            (0, s.jsx)("li", { children: "E-commerce" }),
                            (0, s.jsx)("li", { children: "Centra" }),
                            (0, s.jsx)("li", { children: "UI+UX design" }),
                            (0, s.jsx)("li", { children: "Animation" }),
                            (0, s.jsx)("li", { children: "Development" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {}),
                (0, s.jsx)("div", {
                  className: t().bottom,
                  children: (0, s.jsx)(z(), {
                    href: "https://nudiejeans.com",
                    target: "_blank",
                    children: "Visit site",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: t().row44,
              children: [
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: d }) }),
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: o }) }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: t().row224,
              children: [
                (0, s.jsx)("div", { className: t().bottom }),
                (0, s.jsx)("div", {}),
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: h }) }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: t().row2222,
              children: [
                (0, s.jsx)("div", {
                  className: t().bottom,
                  children: (0, s.jsx)(a.Z, { src: E }),
                }),
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: x }) }),
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: m }) }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "quote",
              children: (0, s.jsx)("q", {
                children:
                  "Nudie Jeans is based on an idea. This idea is in turn composed of several concepts, beliefs, and a good portion of old fashioned fighting spirit.",
              }),
            }),
            (0, s.jsxs)("div", {
              className: t().row242,
              children: [
                (0, s.jsx)("div", {}),
                (0, s.jsxs)("div", {
                  className: ["text", t().col2].join(" "),
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("h2", { children: "More than jeans" }),
                        (0, s.jsx)("p", {
                          children:
                            "Nudie Jeans provides more than just jeans. With an emphasis on reuse and repair, Nudie Jeans Co. delivers and upholds a tradition that is loyal to the history and properties of the fabric.",
                        }),
                        (0, s.jsx)("p", {
                          children:
                            "Founded in Gothenburg in 2001, the Swedish denim company has won praise for its efforts to promote environmental sustainability and has played a significant part in the industry’s efforts to live in a more sustainable way thanks to its variety of jeans made from 100% organic cotton and transparent production.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("h2", { children: "Digital pioneers" }),
                        (0, s.jsx)("p", {
                          children:
                            "Aino has been an integral part of their digital journey since 2010, acting as a long-term partner and inventor of new ideas and technology. The platform has gone through several iterations and is now built around headless technology, static deployments and serverless computing.",
                        }),
                        (0, s.jsx)("p", {
                          children:
                            "We use Centra as a commerce platform together with Contentful, Algolia, Django, Google Cloud, and other services to build an exceptionally joyful experience that delivers speed and reliability across the globe.",
                        }),
                        (0, s.jsx)("h2", {
                          children: "Bridging online and physical",
                        }),
                        (0, s.jsx)("p", {
                          children:
                            "We helped Nudie make the switch to headless in 2016 and they saw an immediate average yearly growth of 24% – with a yearly revenue of 498 MSEK in 2018. Today they are a global craft jeans powerhouse that has erased the boundaries between online direct‑to‑consumer, digital wholesale, and physical retail.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: t().row242,
              children: [
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: g }) }),
                (0, s.jsx)("div", { children: (0, s.jsx)(a.Z, { src: u }) }),
              ],
            }),
            (0, s.jsx)("div", { className: t().space3 }),
            (0, s.jsx)(j.Z, { onlyActive: !0, title: "More cases" }),
          ],
        })
      );
      var f = B;
    },
    274: function (A) {
      A.exports = {
        wrapper: "Image_wrapper__CEf6Z",
        loaded: "Image_loaded__4V492",
        loader: "Image_loader__d_Pxc",
        letters: "Image_letters__VlOak",
        textMode: "Image_textMode__sZj32",
      };
    },
    1739: function (A) {
      A.exports = {
        table: "Work_table__T8PRo",
        nolink: "Work_nolink__Yewlm",
        image: "Work_image__HWSXB",
        work: "Work_work__MunoP",
        label: "Work_label__K36fA",
        hiring: "Work_hiring__CzjMH",
      };
    },
    7041: function (A) {
      A.exports = {
        work: "work_work__e3XVv",
        facts: "work_facts__iDR37",
        photocredits: "work_photocredits__RrEME",
        blackvideo: "work_blackvideo__vDcHK",
      };
    },
  },
  function (A) {
    A.O(0, [675, 774, 888, 179], function () {
      return A((A.s = 7004));
    }),
      (_N_E = A.O());
  },
]);
