(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [337],
  {
    7880: function (e, r, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/work",
        function () {
          return a(4742);
        },
      ]);
    },
    1353: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return h;
        },
      });
      var n = a(5893),
        s = a(1664),
        l = a.n(s),
        i = a(7294),
        o = a(1739),
        c = a.n(o),
        t = [
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
        d = a(6760),
        m = a(1475),
        u = a(1184);
      let k = (e) => {
        let { onlyActive: r, title: a } = e,
          s = (0, i.useRef)(null),
          o = (0, i.useRef)(!1);
        return (0, n.jsxs)("div", {
          className: c().work,
          ref: s,
          "data-rainbow": !0,
          children: [
            (0, n.jsx)(d.h, {
              onEnter() {
                s.current &&
                  !o.current &&
                  ((o.current = !0), (0, m.Z)(s.current));
              },
            }),
            (0, n.jsx)("div", {
              className: c().label,
              children: a || "Our work",
            }),
            (0, n.jsx)("ul", {
              className: c().table,
              children: t
                .filter((e) => !r || e.url)
                .map((e) =>
                  e.url
                    ? (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsxs)(l(), {
                            href: e.url,
                            children: [
                              (0, n.jsx)("i", {}),
                              (0, n.jsx)("strong", {
                                className: c().title,
                                children: e.name,
                              }),
                              (0, n.jsx)("span", {
                                className: c().year,
                                children: e.year,
                              }),
                            ],
                          }),
                        },
                        e.url
                      )
                    : (0, n.jsxs)(
                        "li",
                        {
                          className: c().nolink,
                          children: [
                            (0, n.jsx)("strong", {
                              className: c().title,
                              children: e.name,
                            }),
                            (0, n.jsx)("span", {
                              className: c().year,
                              children: e.year,
                            }),
                          ],
                        },
                        e.name
                      )
                ),
            }),
            (0, n.jsxs)("div", {
              className: c().hiring,
              children: [
                (0, n.jsx)("h2", { children: "We’re hiring!" }),
                (0, n.jsxs)("ul", {
                  children: [
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(l(), {
                        href: "/careers/developer",
                        onClick: () => (0, u.Z)("careers"),
                        children: "Developer / Architect",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(l(), {
                        href: "/careers/creative-developer",
                        onClick: () => (0, u.Z)("careers"),
                        children: "Creative Developer / Animator",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(l(), {
                        href: "/careers/ux",
                        onClick: () => (0, u.Z)("careers"),
                        children: "UX-designer",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(l(), {
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
      var h = k;
    },
    4742: function (e, r, a) {
      "use strict";
      a.r(r);
      var n = a(5893),
        s = a(4019),
        l = a(1353),
        i = a(7041),
        o = a.n(i);
      let c = () =>
        (0, n.jsxs)("div", {
          className: o().work,
          children: [
            (0, n.jsx)(s.Z, { title: "Our work", slug: "work" }),
            (0, n.jsx)(l.Z, {}),
          ],
        });
      r.default = c;
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
    7041: function (e) {
      e.exports = {
        work: "work_work__e3XVv",
        facts: "work_facts__iDR37",
        photocredits: "work_photocredits__RrEME",
        blackvideo: "work_blackvideo__vDcHK",
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7880));
    }),
      (_N_E = e.O());
  },
]);
