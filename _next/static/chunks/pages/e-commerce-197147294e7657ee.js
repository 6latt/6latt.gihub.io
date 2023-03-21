(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [414],
  {
    3938: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/e-commerce",
        function () {
          return s(4353);
        },
      ]);
    },
    1529: function (e, t, s) {
      "use strict";
      var n = s(5893),
        i = s(7294),
        a = s(5384),
        o = s(7682),
        r = s.n(o);
      let l = () => {
        let [e, t] = (0, i.useState)(""),
          [s, o] = (0, i.useState)(!1),
          [l, c] = (0, i.useState)(!1),
          d = async (e) => {
            e.preventDefault(), t("");
            let s = Object.fromEntries(new FormData(e.target));
            if (/^\S+@\S+\.\S+$/.test(s.email)) {
              o(!0);
              try {
                let n = await fetch("/api/email", {
                  method: "POST",
                  body: JSON.stringify(s),
                });
                200 !== n.status ? t(n.statusText) : c(!0), o(!1);
              } catch (i) {
                t(i.message);
              } finally {
                o(!1);
              }
            } else t("Invalid email");
          };
        return (0, n.jsx)("div", {
          className: r().container,
          children: (0, n.jsxs)("div", {
            className: r().demo,
            children: [
              (0, n.jsxs)("div", {
                className: "text",
                children: [
                  (0, n.jsx)("h2", { children: "Demo time!" }),
                  (0, n.jsx)("p", {
                    children:
                      "Type your email and hit enter to get a free invitation to our headless online demo store:",
                  }),
                  s
                    ? (0, n.jsx)("div", { children: "Sending..." })
                    : l
                    ? (0, n.jsx)("div", { children: "Thanks \uD83D\uDE18" })
                    : (0, n.jsx)("form", {
                        onSubmit: d,
                        children: (0, n.jsx)(a.Z, {
                          name: "email",
                          pattern: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+",
                          placeholder: "Your email",
                          title: "We need a valid e-mail address here",
                          focus: !0,
                        }),
                      }),
                ],
              }),
              e ? (0, n.jsx)("p", { className: r().error, children: e }) : null,
            ],
          }),
        });
      };
      t.Z = l;
    },
    5384: function (e, t, s) {
      "use strict";
      var n = s(5893),
        i = s(7294),
        a = s(1158),
        o = s.n(a);
      let r = (e) => {
        let {
            onKeyDown: t,
            focus: s,
            type: a = "text",
            placeholder: r,
            name: l,
            pattern: c,
            title: d,
            inverted: h,
            maxLength: m,
            className: u,
            minLength: p,
          } = e,
          [f, x] = (0, i.useState)(""),
          [v, g] = (0, i.useState)(!1),
          [j, w] = (0, i.useState)(!0),
          [b, y] = (0, i.useState)(0),
          _ = (0, i.useRef)(),
          N = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          s && g(!0);
        }, [s]);
        let k = (e) => {
          let { value: t } = e.target;
          x(t);
        };
        (0, i.useEffect)(() => {
          v && N.current
            ? (N.current.focus({ preventScroll: !0 }),
              requestAnimationFrame(() => {
                w(!0);
                let e = () => {
                  _.current = setTimeout(() => {
                    w((e) => !e), e();
                  }, 400);
                };
                clearTimeout(_.current), e(), S();
              }))
            : v || clearTimeout(_.current);
        }, [v, f]),
          (0, i.useEffect)(
            () => () => {
              clearTimeout(_.current);
            },
            []
          );
        let S = () => {
            if (N.current) {
              let { width: e } = N.current.getBoundingClientRect(),
                t = Math.round(e / window._charWidth);
              y(Math.min(t, N.current.selectionStart));
            }
          },
          C = {};
        return (
          c && (C.pattern = c),
          d && (C.title = d),
          m && (C.maxLength = m),
          p && (C.minLength = p),
          (0, n.jsxs)("span", {
            className: [o().input, h ? o().inverted : "", u || ""].join(" "),
            onClick: () => g(!0),
            children: [
              (0, n.jsx)("input", {
                ref: N,
                type: a,
                onKeyDown: t,
                onChange: k,
                onFocus: () => g(!0),
                onBlur: () => g(!1),
                onMouseUp: () => S(),
                onKeyUp: () => S(),
                placeholder: r,
                name: l,
                ...C,
                autoComplete: "off",
              }),
              v && j
                ? (0, n.jsx)("i", {
                    className: o().square,
                    style: { left: "".concat(b, "rem") },
                  })
                : null,
            ],
          })
        );
      };
      t.Z = r;
    },
    4353: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return w;
          },
        });
      var n = s(5893),
        i = s(730),
        a = s.n(i),
        o = s(830),
        r = s.n(o),
        l = s(1529),
        c = s(7294),
        d = s(9924),
        h = s(8773),
        m = s.n(h);
      let u = (e) => {
          let {
            title: t,
            children: s,
            open: i = !1,
            onClick: a,
            className: o = "",
          } = e;
          return (0, n.jsxs)("dl", {
            className: [m().item, o].join(" "),
            children: [
              (0, n.jsx)("dt", {
                className: m().title,
                children: (0, n.jsx)("button", {
                  "aria-expanded": i,
                  onClick: a,
                  className: m().titleButton,
                  children: (0, n.jsxs)("h2", {
                    children: ["[", i ? "–" : "+", "] ", t],
                  }),
                }),
              }),
              (0, n.jsx)(d.E.dd, {
                className: m().itemContent,
                animate: { height: i ? "auto" : 0 },
                initial: { height: i ? "auto" : 0 },
                transition: { ease: [0.25, 1, 0.5, 1], duration: 0.5 },
                children: s,
              }),
            ],
          });
        },
        p = (e) => {
          let { children: t, allowMultiple: s = !1, className: i } = e,
            a = [];
          c.Children.forEach(t, (e, t) => {
            (0, c.isValidElement)(e) && e.props.open && a.push(t);
          });
          let [o, r] = (0, c.useState)(a),
            l = (e) => {
              let t = o.includes(e);
              if (s) {
                let n = [...o];
                t ? n.splice(o.indexOf(e), 1) : n.push(e), r(n);
              } else r(t ? [] : [e]);
            };
          return (0, n.jsx)("div", {
            className: [i || ""].join(" "),
            children: c.Children.map(t, (e, t) => {
              if ((0, c.isValidElement)(e))
                return (0, n.jsx)(e.type, {
                  ...e.props,
                  open: o.includes(t),
                  onClick() {
                    l(t);
                  },
                });
            }),
          });
        };
      var f = s(1664),
        x = s.n(f),
        v = s(1184),
        g = s(4019);
      let j = () =>
        (0, n.jsxs)("div", {
          className: a().container,
          children: [
            (0, n.jsx)(g.Z, { title: "E-commerce", slug: "e-commerce" }),
            (0, n.jsxs)("div", {
              className: r().row242,
              children: [
                (0, n.jsx)("div", {}),
                (0, n.jsx)("div", {
                  className: "title",
                  children: (0, n.jsx)("h1", {
                    children: "The guide to e-commerce (and why we do it)",
                  }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: a().demo,
              children: (0, n.jsx)(l.Z, {}),
            }),
            (0, n.jsxs)("div", {
              className: r().row242,
              children: [
                (0, n.jsx)("div", {}),
                (0, n.jsxs)("div", {
                  className: ["text", r().col2].join(" "),
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("p", {
                        children:
                          "Companies spend millions on multi-channel campaigns that define them and what they stand for. That message typically lasts for a few months, or until fatigue kicks in. Meanwhile, people are self-willingly visiting your online store or service to evaluate the actual product. We believe this is a great opportunity to create or enhance that message in the same context, because this is how your users interact.",
                      }),
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "We believe in human connection with brand values. When embedding the brand experience into the online shopping experience, it is possible to create a seamless funnel for consumers to reach the product without losing emotional connection. We really just want to make people feel great while interacting with the brand online, and shopping is a very natural consumer incentive to explore.",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {}),
              ],
            }),
            (0, n.jsxs)("div", {
              className: r().row224,
              children: [
                (0, n.jsx)("div", {}),
                (0, n.jsx)("div", {}),
                (0, n.jsxs)("div", {
                  className: ["text", r().col2].join(" "),
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h2", { children: "The tech side" }),
                        (0, n.jsx)("p", {
                          children:
                            "The last thing you want if you have high ambitions for your brand is to be held back by technology. As a tech-oriented creative agency, we spend a lot of time solving data problems and eliminating bottlenecks for our clients. Not just because it’s fun, but it’s also important that technology gives you the ability to change and replace services, grow, scale, and invest in line with your ambitions — without getting stuck in technical debt and having to spend all your money arguing with technology.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h2", { children: "API-first" }),
                        (0, n.jsx)("p", {
                          children:
                            "Without going into deep details, our tech strategy is to compose an architecture of micro-services and platforms that are glued and stitched together in a low-code cache layer on edge before serving a global commerce storefront. For you, this means being able to pick & choose the best services for your business without lock-in or performance loss. For us, it means that we can focus on what we do best — speed, stability and total freedom in the presentation layer.",
                        }),
                        (0, n.jsx)("h2", { children: "The Aino way" }),
                        (0, n.jsx)("p", {
                          children:
                            "One of the key challenges with composable e-commerce is the ability to scale and deploy websites in a secure and fail-safe way from a diverse stack of microservices. Exposing errors or slowness to end users is very bad news for the overall brand connection and conversion. To solve this, we have developed a battle-tested publish flow for content creators that allows them to edit, preview, review, and publish changes, from any source, on global edge CDN with minimal risk and full control over what and when new content gets deployed.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "quote",
              children: (0, n.jsx)("q", {
                children:
                  "We really just want to make people feel great while interacting with the brand online, and shopping is a very natural consumer incentive to explore.",
              }),
            }),
            (0, n.jsx)("div", { className: r().space1 }),
            (0, n.jsxs)("div", {
              className: r().row2222,
              children: [
                (0, n.jsx)("div", {}),
                (0, n.jsxs)("div", {
                  className: "text",
                  children: [
                    (0, n.jsx)("h2", {
                      children: "What platform is best for me?",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "One of the most common questions we get is what platform or service is best for x needs. This is a business decision and we recommend you do extensive research before making a final call. We have tried many services and platforms over the years and landed on a few platforms that we have picked as favorites:",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: r().row242,
              children: [
                (0, n.jsx)("div", {}),
                (0, n.jsxs)(p, {
                  className: a().platforms,
                  children: [
                    (0, n.jsx)(u, {
                      title: "Centra",
                      open: !0,
                      children: (0, n.jsx)("div", {
                        className: "text",
                        children: (0, n.jsxs)("p", {
                          children: [
                            "Centra is becoming the no#1 commerce platform for established brands in Europe, thanks to a powerful market/language decoupling strategy and their excellent B2B module. We have been working closely with their team since day one as a premium partner, creating some of the most talked-about storefronts for brands on their platform.",
                            " ",
                            (0, n.jsx)(x(), {
                              className: "more",
                              href: "https://centra.com",
                              target: "_blank",
                              children: "centra.com",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(u, {
                      title: "Shopify",
                      children: (0, n.jsx)("div", {
                        className: "text",
                        children: (0, n.jsxs)("p", {
                          children: [
                            "Shopify is the world’s largest e-commerce platform, with great integrations and a simple user interface. It is especially well suited for new brands seeking insights into how their product strategy will work on a few key markets, before scaling up on a richer platform. We use Shopify as we use everything else - headless and cached on edge, for the best possible performance and scalability.",
                            " ",
                            (0, n.jsx)(x(), {
                              className: "more",
                              href: "https://shopify.com",
                              target: "_blank",
                              children: "shopify.com",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(u, {
                      title: "Contentful",
                      children: (0, n.jsx)("div", {
                        className: "text",
                        children: (0, n.jsxs)("p", {
                          children: [
                            "Contentful is our go-to CMS for e-commerce. It has strong enterprise support with multiple languages, roles, and a rich ecosystem. We like the separation between content & presentation and the open app architecture that lets us build custom merchandising tools and data models.",
                            " ",
                            (0, n.jsx)(x(), {
                              className: "more",
                              href: "https://contentful.com",
                              target: "_blank",
                              children: "contentful.com",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(u, {
                      title: "Storyblok",
                      children: (0, n.jsx)("div", {
                        className: "text",
                        children: (0, n.jsxs)("p", {
                          children: [
                            "Storyblok is another great CMS we use for smaller teams where content editors have a higher level of design knowledge and the presentation layer is more advanced and customizable.",
                            " ",
                            (0, n.jsx)(x(), {
                              className: "more",
                              href: "https://storyblok.com",
                              target: "_blank",
                              children: "storyblok.com",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(u, {
                      title: "CRM & customer clubs",
                      children: (0, n.jsx)("div", {
                        className: "text",
                        children: (0, n.jsx)("p", {
                          children:
                            "We strongly believe in building communities and customer loyalty around the e-commerce experience. We use social sign-in and custom integrations with several CRM systems into our stack, including but not limited to: Yotpo, Voyado, Rule, Mailchimp, Klayvio, Salesforce, Firebase, etc.",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", { className: r().space1 }),
            (0, n.jsx)("div", {
              className: a().mobiledemo,
              children: (0, n.jsx)(l.Z, {}),
            }),
            (0, n.jsxs)("div", {
              className: r().row422,
              children: [
                (0, n.jsx)("div", {}),
                (0, n.jsxs)("div", {
                  className: "text",
                  children: [
                    (0, n.jsx)("h2", { children: "Get in touch" }),
                    (0, n.jsx)("p", {
                      children:
                        "The best way to explore how you can build a stronger brand through e-commerce technology is to talk to us!",
                    }),
                    (0, n.jsx)("p", {
                      children: (0, n.jsx)(x(), {
                        className: "more",
                        href: "/contact",
                        onClick: () => (0, v.Z)("contact"),
                        children: "Schedule a call →",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      var w = j;
    },
    8773: function (e) {
      e.exports = { itemContent: "Accordion_itemContent__Szs17" };
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
    730: function (e) {
      e.exports = {
        demo: "e-commerce_demo__rLsEV",
        mobiledemo: "e-commerce_mobiledemo___Sx9a",
        container: "e-commerce_container__Q_AjN",
        caption: "e-commerce_caption__voAqT",
        platforms: "e-commerce_platforms__76KN8",
      };
    },
  },
  function (e) {
    e.O(0, [924, 774, 888, 179], function () {
      return e((e.s = 3938));
    }),
      (_N_E = e.O());
  },
]);
