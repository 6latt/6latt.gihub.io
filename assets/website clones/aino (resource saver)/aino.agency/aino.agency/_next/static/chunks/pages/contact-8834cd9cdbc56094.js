(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    3328: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return t(2777);
        },
      ]);
    },
    1529: function (e, n, t) {
      "use strict";
      var i = t(5893),
        r = t(7294),
        a = t(5384),
        s = t(7682),
        l = t.n(s);
      let c = () => {
        let [e, n] = (0, r.useState)(""),
          [t, s] = (0, r.useState)(!1),
          [c, d] = (0, r.useState)(!1),
          o = async (e) => {
            e.preventDefault(), n("");
            let t = Object.fromEntries(new FormData(e.target));
            if (/^\S+@\S+\.\S+$/.test(t.email)) {
              s(!0);
              try {
                let i = await fetch("/api/email", {
                  method: "POST",
                  body: JSON.stringify(t),
                });
                200 !== i.status ? n(i.statusText) : d(!0), s(!1);
              } catch (r) {
                n(r.message);
              } finally {
                s(!1);
              }
            } else n("Invalid email");
          };
        return (0, i.jsx)("div", {
          className: l().container,
          children: (0, i.jsxs)("div", {
            className: l().demo,
            children: [
              (0, i.jsxs)("div", {
                className: "text",
                children: [
                  (0, i.jsx)("h2", { children: "Demo time!" }),
                  (0, i.jsx)("p", {
                    children:
                      "Type your email and hit enter to get a free invitation to our headless online demo store:",
                  }),
                  t
                    ? (0, i.jsx)("div", { children: "Sending..." })
                    : c
                    ? (0, i.jsx)("div", { children: "Thanks \uD83D\uDE18" })
                    : (0, i.jsx)("form", {
                        onSubmit: o,
                        children: (0, i.jsx)(a.Z, {
                          name: "email",
                          pattern: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+",
                          placeholder: "Your email",
                          title: "We need a valid e-mail address here",
                          focus: !0,
                        }),
                      }),
                ],
              }),
              e ? (0, i.jsx)("p", { className: l().error, children: e }) : null,
            ],
          }),
        });
      };
      n.Z = c;
    },
    5384: function (e, n, t) {
      "use strict";
      var i = t(5893),
        r = t(7294),
        a = t(1158),
        s = t.n(a);
      let l = (e) => {
        let {
            onKeyDown: n,
            focus: t,
            type: a = "text",
            placeholder: l,
            name: c,
            pattern: d,
            title: o,
            inverted: u,
            maxLength: h,
            className: x,
            minLength: j,
          } = e,
          [m, p] = (0, r.useState)(""),
          [f, v] = (0, r.useState)(!1),
          [_, g] = (0, r.useState)(!0),
          [w, N] = (0, r.useState)(0),
          y = (0, r.useRef)(),
          S = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          t && v(!0);
        }, [t]);
        let T = (e) => {
          let { value: n } = e.target;
          p(n);
        };
        (0, r.useEffect)(() => {
          f && S.current
            ? (S.current.focus({ preventScroll: !0 }),
              requestAnimationFrame(() => {
                g(!0);
                let e = () => {
                  y.current = setTimeout(() => {
                    g((e) => !e), e();
                  }, 400);
                };
                clearTimeout(y.current), e(), b();
              }))
            : f || clearTimeout(y.current);
        }, [f, m]),
          (0, r.useEffect)(
            () => () => {
              clearTimeout(y.current);
            },
            []
          );
        let b = () => {
            if (S.current) {
              let { width: e } = S.current.getBoundingClientRect(),
                n = Math.round(e / window._charWidth);
              N(Math.min(n, S.current.selectionStart));
            }
          },
          D = {};
        return (
          d && (D.pattern = d),
          o && (D.title = o),
          h && (D.maxLength = h),
          j && (D.minLength = j),
          (0, i.jsxs)("span", {
            className: [s().input, u ? s().inverted : "", x || ""].join(" "),
            onClick: () => v(!0),
            children: [
              (0, i.jsx)("input", {
                ref: S,
                type: a,
                onKeyDown: n,
                onChange: T,
                onFocus: () => v(!0),
                onBlur: () => v(!1),
                onMouseUp: () => b(),
                onKeyUp: () => b(),
                placeholder: l,
                name: c,
                ...D,
                autoComplete: "off",
              }),
              f && _
                ? (0, i.jsx)("i", {
                    className: s().square,
                    style: { left: "".concat(w, "rem") },
                  })
                : null,
            ],
          })
        );
      };
      n.Z = l;
    },
    2777: function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t(5893),
        r = t(1646),
        a = t.n(r),
        s = t(830),
        l = t.n(s),
        c = t(1664),
        d = t.n(c),
        o = t(1529),
        u = t(4019);
      let h = [
          { name: "Johan", title: "Lead designer" },
          { name: "Victor", title: "Producer" },
          { name: "Karin", title: "Designer" },
          { name: "Julius", title: "Developer" },
          { name: "Jesper", title: "Developer" },
          { name: "Hanna", title: "Developer LIA" },
        ],
        x = () => {
          let e = (e) => {
              let n = e.target.getAttribute("href").replace(/^mailto:/, "");
              e.target.innerHTML = n;
            },
            n = (e) => {
              let n = e.target.innerHTML.replace(/@aino\.agency/, "");
              e.target.innerHTML = n;
            };
          return (0, i.jsxs)("div", {
            className: a().container,
            children: [
              (0, i.jsx)(u.Z, { title: "Contact", slug: "contact" }),
              (0, i.jsxs)("div", {
                className: l().row2222,
                children: [
                  (0, i.jsx)("div", {}),
                  (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                      "data-rainbow": !0,
                      children: [
                        (0, i.jsx)("h2", { children: "New Business & press" }),
                        (0, i.jsxs)("ul", {
                          children: [
                            (0, i.jsx)("li", { children: "Julie Nord" }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("a", {
                                href: "tel:+46735038510",
                                children: "T: +46 735 03 85 10",
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("a", {
                                href: "mailto:julie@aino.agency",
                                children: "E: julie@aino.agency",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                      "data-rainbow": !0,
                      children: [
                        (0, i.jsx)("h2", { children: "Partnership & tech" }),
                        (0, i.jsxs)("ul", {
                          children: [
                            (0, i.jsx)("li", { children: "David Hellsing" }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("a", {
                                href: "tel:+46735458432",
                                children: "T: +46 735 45 84 32",
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("a", {
                                href: "mailto:david@aino.agency",
                                children: "E: david@aino.agency",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: [l().space1, "hidemobile"].join(" "),
              }),
              (0, i.jsxs)("div", {
                className: l().row2222,
                children: [
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)(d(), {
                      href: "https://goo.gl/maps/AAyDk7MTFgn5KJh49",
                      target: "_blank",
                      children: (0, i.jsxs)("div", {
                        "data-rainbow": !0,
                        children: [
                          (0, i.jsx)("h2", { children: "Office HQ" }),
                          (0, i.jsxs)("ul", {
                            children: [
                              (0, i.jsx)("li", {
                                children: "Viktoriagatan 2a",
                              }),
                              (0, i.jsx)("li", { children: "S-411 25" }),
                              (0, i.jsx)("li", {
                                children: "Gothenburg, Sweden",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {}),
                  (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                      "data-rainbow": !0,
                      children: [
                        (0, i.jsx)("h2", { children: "Career & finance" }),
                        (0, i.jsxs)("ul", {
                          children: [
                            (0, i.jsx)("li", {
                              children: "Linn\xe9a Furhammar",
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("a", {
                                href: "tel:+46704972579",
                                children: "T: +46 704 97 25 79",
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("a", {
                                href: "mailto:linnea@aino.agency",
                                children: "E: linnea@aino.agency",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: l().space2 }),
              (0, i.jsxs)("div", {
                className: l().row224,
                children: [
                  (0, i.jsx)("div", { children: (0, i.jsx)(o.Z, {}) }),
                  (0, i.jsx)("div", {}),
                  (0, i.jsxs)("div", {
                    className: a().people,
                    "data-rainbow": !0,
                    children: [
                      (0, i.jsx)("h2", { children: "More great people" }),
                      (0, i.jsx)("dl", {
                        children: h.map((t) => {
                          let { name: r, title: a } = t;
                          return [
                            (0, i.jsx)(
                              "dt",
                              {
                                children: (0, i.jsx)("a", {
                                  onMouseEnter: e,
                                  onMouseLeave: n,
                                  href: "mailto:".concat(
                                    r.toLowerCase(),
                                    "@aino.agency"
                                  ),
                                  children: r,
                                }),
                              },
                              r
                            ),
                            (0, i.jsx)("dd", { children: a }, r),
                          ];
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      n.default = x;
    },
    7682: function (e) {
      e.exports = { demo: "Demo_demo__VwBvr", error: "Demo_error__Z78dO" };
    },
    1158: function (e) {
      e.exports = {
        input: "Input_input__1CJi3",
        simulator: "Input_simulator__Vv_qa",
        square: "Input_square__XOtHp",
        placeholder: "Input_placeholder__L85Tv",
        inverted: "Input_inverted__0gKqb",
      };
    },
    1646: function (e) {
      e.exports = {
        container: "contact_container__RPLW2",
        people: "contact_people__wuPsR",
        image: "contact_image___q6gM",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 3328));
    }),
      (_N_E = e.O());
  },
]);
