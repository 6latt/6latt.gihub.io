"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [924],
  {
    9924: function (t, e, i) {
      i.d(e, {
        E: function () {
          return r8;
        },
      });
      var n,
        r,
        s,
        o,
        a,
        l = i(7294);
      let u = (0, l.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        h = (0, l.createContext)({}),
        d = (0, l.createContext)(null),
        c = "undefined" != typeof document,
        p = c ? l.useLayoutEffect : l.useEffect,
        m = (0, l.createContext)({ strict: !1 });
      function f(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function v(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function g(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let y = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function x(t) {
        return g(t.animate) || y.some((e) => v(t[e]));
      }
      function b(t) {
        return Boolean(x(t) || t.variants);
      }
      function w(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let V = (t) => ({ isEnabled: (e) => t.some((t) => !!e[t]) }),
        A = {
          measureLayout: V(["layout", "layoutId", "drag"]),
          animation: V([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: V(["exit"]),
          drag: V(["drag", "dragControls"]),
          focus: V(["whileFocus"]),
          hover: V(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: V(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: V(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: V(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function T(t) {
        let e = (0, l.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      let P = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        E = 1,
        S = (0, l.createContext)({});
      class C extends l.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: t, props: e } = this.props;
          return t && t.setProps(e), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      let M = (0, l.createContext)({}),
        k = Symbol.for("motionComponentSymbol"),
        B = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function D(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (B.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let R = {},
        L = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        F = new Set(L);
      function j(t, { layout: e, layoutId: i }) {
        return (
          F.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!R[t] || "opacity" === t))
        );
      }
      let I = (t) => !!(null == t ? void 0 : t.getVelocity),
        O = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        U = (t, e) => L.indexOf(t) - L.indexOf(e);
      function N(t) {
        return t.startsWith("--");
      }
      let $ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        z = (t, e, i) => Math.min(Math.max(i, t), e),
        W = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        H = { ...W, transform: (t) => z(0, 1, t) },
        Y = { ...W, default: 1 },
        X = (t) => Math.round(1e5 * t) / 1e5,
        G = /(-)?([\d]*\.?[\d])+/g,
        q =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Z =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function _(t) {
        return "string" == typeof t;
      }
      let K = (t) => ({
          test: (e) => _(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        J = K("deg"),
        Q = K("%"),
        tt = K("px"),
        te = K("vh"),
        ti = K("vw"),
        tn = {
          ...Q,
          parse: (t) => Q.parse(t) / 100,
          transform: (t) => Q.transform(100 * t),
        },
        tr = { ...W, transform: Math.round },
        ts = {
          borderWidth: tt,
          borderTopWidth: tt,
          borderRightWidth: tt,
          borderBottomWidth: tt,
          borderLeftWidth: tt,
          borderRadius: tt,
          radius: tt,
          borderTopLeftRadius: tt,
          borderTopRightRadius: tt,
          borderBottomRightRadius: tt,
          borderBottomLeftRadius: tt,
          width: tt,
          maxWidth: tt,
          height: tt,
          maxHeight: tt,
          size: tt,
          top: tt,
          right: tt,
          bottom: tt,
          left: tt,
          padding: tt,
          paddingTop: tt,
          paddingRight: tt,
          paddingBottom: tt,
          paddingLeft: tt,
          margin: tt,
          marginTop: tt,
          marginRight: tt,
          marginBottom: tt,
          marginLeft: tt,
          rotate: J,
          rotateX: J,
          rotateY: J,
          rotateZ: J,
          scale: Y,
          scaleX: Y,
          scaleY: Y,
          scaleZ: Y,
          skew: J,
          skewX: J,
          skewY: J,
          distance: tt,
          translateX: tt,
          translateY: tt,
          translateZ: tt,
          x: tt,
          y: tt,
          z: tt,
          perspective: tt,
          transformPerspective: tt,
          opacity: H,
          originX: tn,
          originY: tn,
          originZ: tt,
          zIndex: tr,
          fillOpacity: H,
          strokeOpacity: H,
          numOctaves: tr,
        };
      function to(t, e, i, n) {
        let {
          style: r,
          vars: s,
          transform: o,
          transformKeys: a,
          transformOrigin: l,
        } = t;
        a.length = 0;
        let u = !1,
          h = !1,
          d = !0;
        for (let c in e) {
          let p = e[c];
          if (N(c)) {
            s[c] = p;
            continue;
          }
          let m = ts[c],
            f = $(p, m);
          if (F.has(c)) {
            if (((u = !0), (o[c] = f), a.push(c), !d)) continue;
            p !== (m.default || 0) && (d = !1);
          } else c.startsWith("origin") ? ((h = !0), (l[c] = f)) : (r[c] = f);
        }
        if (
          (!e.transform &&
            (u || n
              ? (r.transform = (function (
                  { transform: t, transformKeys: e },
                  {
                    enableHardwareAcceleration: i = !0,
                    allowTransformNone: n = !0,
                  },
                  r,
                  s
                ) {
                  let o = "";
                  for (let a of (e.sort(U), e)) o += `${O[a] || a}(${t[a]}) `;
                  return (
                    i && !t.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    s ? (o = s(t, r ? "" : o)) : n && r && (o = "none"),
                    o
                  );
                })(t, i, d, n))
              : r.transform && (r.transform = "none")),
          h)
        ) {
          let { originX: v = "50%", originY: g = "50%", originZ: y = 0 } = l;
          r.transformOrigin = `${v} ${g} ${y}`;
        }
      }
      let ta = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      });
      function tl(t, e, i) {
        for (let n in e) I(e[n]) || j(n, i) || (t[n] = e[n]);
      }
      function tu(t, e, i) {
        let n = {},
          r = (function (t, e, i) {
            let n = t.style || {},
              r = {};
            return (
              tl(r, n, t),
              Object.assign(
                r,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, l.useMemo)(() => {
                    let n = ta();
                    return (
                      to(n, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(r) : r
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          (n.style = r),
          n
        );
      }
      let th = new Set([
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);
      function td(t) {
        return th.has(t);
      }
      let tc = (t) => !td(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (tc = (t) => (t.startsWith("on") ? !td(t) : n(t)));
      } catch (tp) {}
      function tm(t, e, i) {
        return "string" == typeof t ? t : tt.transform(e + i * t);
      }
      let tf = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tv = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tg(
        t,
        {
          attrX: e,
          attrY: i,
          originX: n,
          originY: r,
          pathLength: s,
          pathSpacing: o = 1,
          pathOffset: a = 0,
          ...l
        },
        u,
        h,
        d
      ) {
        if ((to(t, l, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = tm(e, t.x, t.width),
                r = tm(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== s &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? tf : tv;
              t[s.offset] = tt.transform(-n);
              let o = tt.transform(e),
                a = tt.transform(i);
              t[s.array] = `${o} ${a}`;
            })(c, s, o, a, !1);
      }
      let ty = () => ({ ...ta(), attrs: {} }),
        tx = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tb(t, e, i, n) {
        let r = (0, l.useMemo)(() => {
          let i = ty();
          return (
            tg(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              tx(n),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let s = {};
          tl(s, t.style, t), (r.style = { ...s, ...r.style });
        }
        return r;
      }
      let tw = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tV(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let tA = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tT(t, e, i, n) {
        for (let r in (tV(t, e, void 0, n), e.attrs))
          t.setAttribute(tA.has(r) ? r : tw(r), e.attrs[r]);
      }
      function tP(t) {
        let { style: e } = t,
          i = {};
        for (let n in e) (I(e[n]) || j(n, t)) && (i[n] = e[n]);
        return i;
      }
      function tE(t) {
        let e = tP(t);
        for (let i in t)
          if (I(t[i])) {
            let n = "x" === i || "y" === i ? "attr" + i.toUpperCase() : i;
            e[n] = t[i];
          }
        return e;
      }
      function tS(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      let tC = (t) => Array.isArray(t),
        tM = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        tk = (t) => (tC(t) ? t[t.length - 1] || 0 : t);
      function tB(t) {
        let e = I(t) ? t.get() : t;
        return tM(e) ? e.toValue() : e;
      }
      let tD = (t) => (e, i) => {
          let n = (0, l.useContext)(h),
            r = (0, l.useContext)(d),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                r,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t);
                    for (let o in s) r[o] = tB(s[o]);
                    let { initial: a, animate: l } = t,
                      u = x(t),
                      h = b(t);
                    e &&
                      h &&
                      !u &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let d = !!i && !1 === i.initial;
                    d = d || !1 === a;
                    let c = d ? l : a;
                    if (c && "boolean" != typeof c && !g(c)) {
                      let p = Array.isArray(c) ? c : [c];
                      p.forEach((e) => {
                        let i = tS(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: s, ...o } = i;
                        for (let a in o) {
                          let l = o[a];
                          if (Array.isArray(l)) {
                            let u = d ? l.length - 1 : 0;
                            l = l[u];
                          }
                          null !== l && (r[a] = l);
                        }
                        for (let h in n) r[h] = n[h];
                      });
                    }
                    return r;
                  })(n, r, s, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(n, t, o)), o;
              })(t, e, n, r);
          return i ? s() : T(s);
        },
        tR = {
          useVisualState: tD({
            scrapeMotionValuesFromProps: tE,
            createRenderState: ty,
            onMount(t, e, { renderState: i, latestValues: n }) {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (r) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tg(
                i,
                n,
                { enableHardwareAcceleration: !1 },
                tx(e.tagName),
                t.transformTemplate
              ),
                tT(e, i);
            },
          }),
        },
        tL = {
          useVisualState: tD({
            scrapeMotionValuesFromProps: tP,
            createRenderState: ta,
          }),
        };
      function tF(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function tj(t, e, i, n) {
        (0, l.useEffect)(() => {
          let r = t.current;
          if (i && r) return tF(r, e, i, n);
        }, [t, e, i, n]);
      }
      ((r = o || (o = {})).Animate = "animate"),
        (r.Hover = "whileHover"),
        (r.Tap = "whileTap"),
        (r.Drag = "whileDrag"),
        (r.Focus = "whileFocus"),
        (r.InView = "whileInView"),
        (r.Exit = "exit");
      let tI = (t) => !1 !== t.isPrimary;
      function tO(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tU = (t, e = !1) => {
        let i = (e) => t(e, tO(e));
        return e ? (t) => tI(t) && i(t) : i;
      };
      function tN(t, e, i, n) {
        return tF(t, e, tU(i, "pointerdown" === e), n);
      }
      function t$(t, e, i, n) {
        return tj(t, e, i && tU(i, "pointerdown" === e), n);
      }
      function tz(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let tW = tz("dragHorizontal"),
        tH = tz("dragVertical");
      function tY(t) {
        let e = !1;
        if ("y" === t) e = tH();
        else if ("x" === t) e = tW();
        else {
          let i = tW(),
            n = tH();
          i && n
            ? (e = () => {
                i(), n();
              })
            : (i && i(), n && n());
        }
        return e;
      }
      function tX() {
        let t = tY(!0);
        return !t || (t(), !1);
      }
      function tG(t, e, i) {
        return (n, r) => {
          !(!("pen" !== n.type && "touch" !== n.type) || tX()) &&
            (t.animationState && t.animationState.setActive(o.Hover, e),
            i && i(n, r));
        };
      }
      let tq = (t, e) => !!e && (t === e || tq(t, e.parentElement));
      function tZ(t) {
        return (0, l.useEffect)(() => () => t(), []);
      }
      let t_ = (t, e) => (i) => e(t(i)),
        tK = (...t) => t.reduce(t_);
      var tJ = i(3454);
      let tQ = (void 0 === tJ || tJ.env, "production"),
        t0 = new Set(),
        t1 = new WeakMap(),
        t5 = new WeakMap(),
        t2 = (t) => {
          let e = t1.get(t.target);
          e && e(t);
        },
        t3 = (t) => {
          t.forEach(t2);
        },
        t9 = { some: 0, all: 1 };
      function t4(
        t,
        e,
        i,
        { root: n, margin: r, amount: s = "some", once: a }
      ) {
        (0, l.useEffect)(() => {
          if (!t || !i.current) return;
          let l = {
              root: null == n ? void 0 : n.current,
              rootMargin: r,
              threshold: "number" == typeof s ? s : t9[s],
            },
            u = (t) => {
              let { isIntersecting: n } = t;
              if (
                e.isInView === n ||
                ((e.isInView = n), a && !n && e.hasEnteredView)
              )
                return;
              n && (e.hasEnteredView = !0),
                i.animationState && i.animationState.setActive(o.InView, n);
              let r = i.getProps(),
                s = n ? r.onViewportEnter : r.onViewportLeave;
              s && s(t);
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              t5.has(i) || t5.set(i, {});
              let n = t5.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(t3, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              t1.set(t, i),
              n.observe(t),
              () => {
                t1.delete(t), n.unobserve(t);
              }
            );
          })(i.current, l, u);
        }, [t, n, r, s]);
      }
      function t6(t, e, i, { fallback: n = !0 }) {
        (0, l.useEffect)(() => {
          if (t && n) {
            if ("production" !== tQ) {
              var r, s;
              (r =
                "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                t0.has(r) || (console.warn(r), s && console.warn(s), t0.add(r));
            }
            requestAnimationFrame(() => {
              e.hasEnteredView = !0;
              let { onViewportEnter: t } = i.getProps();
              t && t(null),
                i.animationState && i.animationState.setActive(o.InView, !0);
            });
          }
        }, [t]);
      }
      let t7 = (t) => (e) => (t(e), null),
        t8 = {
          inView: t7(function ({
            visualElement: t,
            whileInView: e,
            onViewportEnter: i,
            onViewportLeave: n,
            viewport: r = {},
          }) {
            let s = (0, l.useRef)({ hasEnteredView: !1, isInView: !1 }),
              o = Boolean(e || i || n);
            r.once && s.current.hasEnteredView && (o = !1);
            let a = "undefined" == typeof IntersectionObserver ? t6 : t4;
            a(o, s.current, t, r);
          }),
          tap: t7(function ({
            onTap: t,
            onTapStart: e,
            onTapCancel: i,
            whileTap: n,
            visualElement: r,
          }) {
            let s = (0, l.useRef)(!1),
              a = (0, l.useRef)(null),
              u = { passive: !(e || t || i || m) };
            function h() {
              a.current && a.current(), (a.current = null);
            }
            function d() {
              return (
                h(),
                (s.current = !1),
                r.animationState && r.animationState.setActive(o.Tap, !1),
                !tX()
              );
            }
            function c(e, n) {
              d() && (tq(r.current, e.target) ? t && t(e, n) : i && i(e, n));
            }
            function p(t, e) {
              d() && i && i(t, e);
            }
            function m(t, i) {
              h(),
                !s.current &&
                  ((s.current = !0),
                  (a.current = tK(
                    tN(window, "pointerup", c, u),
                    tN(window, "pointercancel", p, u)
                  )),
                  r.animationState && r.animationState.setActive(o.Tap, !0),
                  e && e(t, i));
            }
            t$(r, "pointerdown", t || e || i || n ? m : void 0, u), tZ(h);
          }),
          focus: t7(function ({ whileFocus: t, visualElement: e }) {
            let { animationState: i } = e,
              n = () => {
                i && i.setActive(o.Focus, !0);
              },
              r = () => {
                i && i.setActive(o.Focus, !1);
              };
            tj(e, "focus", t ? n : void 0), tj(e, "blur", t ? r : void 0);
          }),
          hover: t7(function ({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: i,
            visualElement: n,
          }) {
            t$(n, "pointerenter", t || i ? tG(n, !0, t) : void 0, {
              passive: !t,
            }),
              t$(n, "pointerleave", e || i ? tG(n, !1, e) : void 0, {
                passive: !e,
              });
          }),
        };
      function et() {
        let t = (0, l.useContext)(d);
        if (null === t) return [!0, null];
        let { isPresent: e, onExitComplete: i, register: n } = t,
          r = (0, l.useId)();
        (0, l.useEffect)(() => n(r), []);
        let s = () => i && i(r);
        return !e && i ? [!1, s] : [!0];
      }
      function ee(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let ei = (t) => /^\-?\d*\.?\d+$/.test(t),
        en = (t) => /^0[^.\s]+$/.test(t),
        er = { delta: 0, timestamp: 0 },
        es = (1 / 60) * 1e3,
        eo =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        ea =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(eo()), es),
        el = !0,
        eu = !1,
        eh = !1,
        ed = ["read", "update", "preRender", "render", "postRender"],
        ec = ed.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                i = [],
                n = 0,
                r = !1,
                s = !1,
                o = new WeakSet(),
                a = {
                  schedule(t, s = !1, a = !1) {
                    let l = a && r,
                      u = l ? e : i;
                    return (
                      s && o.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && r && (n = e.length)),
                      t
                    );
                  },
                  cancel(t) {
                    let e = i.indexOf(t);
                    -1 !== e && i.splice(e, 1), o.delete(t);
                  },
                  process(l) {
                    if (r) {
                      s = !0;
                      return;
                    }
                    if (
                      ((r = !0),
                      ([e, i] = [i, e]),
                      (i.length = 0),
                      (n = e.length))
                    )
                      for (let u = 0; u < n; u++) {
                        let h = e[u];
                        h(l), o.has(h) && (a.schedule(h), t());
                      }
                    (r = !1), s && ((s = !1), a.process(l));
                  },
                };
              return a;
            })(() => (eu = !0))),
            t
          ),
          {}
        ),
        ep = ed.reduce((t, e) => {
          let i = ec[e];
          return (
            (t[e] = (t, e = !1, n = !1) => (eu || ey(), i.schedule(t, e, n))), t
          );
        }, {}),
        em = ed.reduce((t, e) => ((t[e] = ec[e].cancel), t), {}),
        ef = ed.reduce((t, e) => ((t[e] = () => ec[e].process(er)), t), {}),
        ev = (t) => ec[t].process(er),
        eg = (t) => {
          (eu = !1),
            (er.delta = el ? es : Math.max(Math.min(t - er.timestamp, 40), 1)),
            (er.timestamp = t),
            (eh = !0),
            ed.forEach(ev),
            (eh = !1),
            eu && ((el = !1), ea(eg));
        },
        ey = () => {
          (eu = !0), (el = !0), eh || ea(eg);
        };
      function ex(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function eb(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class ew {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return ex(this.subscriptions, t), () => eb(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let s = this.subscriptions[r];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      function eV(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      let eA = (t) => !isNaN(parseFloat(t));
      class eT {
        constructor(t, e = {}) {
          (this.version = "8.0.1"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: n } = er;
              this.lastUpdated !== n &&
                ((this.timeDelta = i),
                (this.lastUpdated = n),
                ep.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              ep.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = eA(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ew()), this.events[t].add(e)
          );
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t) {
          this.passiveEffect = t;
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? eV(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.stopAnimation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.stopAnimation &&
            (this.stopAnimation(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.clearListeners(), this.stop();
        }
      }
      function eP(t, e) {
        return new eT(t, e);
      }
      let eE = (t, e) => (i) =>
          Boolean(
            (_(i) && Z.test(i) && i.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eS = (t, e, i) => (n) => {
          if (!_(n)) return n;
          let [r, s, o, a] = n.match(G);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eC = (t) => z(0, 255, t),
        eM = { ...W, transform: (t) => Math.round(eC(t)) },
        ek = {
          test: eE("rgb", "red"),
          parse: eS("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            eM.transform(t) +
            ", " +
            eM.transform(e) +
            ", " +
            eM.transform(i) +
            ", " +
            X(H.transform(n)) +
            ")",
        },
        eB = {
          test: eE("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: ek.transform,
        },
        eD = {
          test: eE("hsl", "hue"),
          parse: eS("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Q.transform(X(e)) +
            ", " +
            Q.transform(X(i)) +
            ", " +
            X(H.transform(n)) +
            ")",
        },
        eR = {
          test: (t) => ek.test(t) || eB.test(t) || eD.test(t),
          parse: (t) =>
            ek.test(t) ? ek.parse(t) : eD.test(t) ? eD.parse(t) : eB.parse(t),
          transform: (t) =>
            _(t)
              ? t
              : t.hasOwnProperty("red")
              ? ek.transform(t)
              : eD.transform(t),
        },
        eL = "${c}",
        eF = "${n}";
      function ej(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          i = 0,
          n = 0,
          r = t.match(q);
        r &&
          ((i = r.length), (t = t.replace(q, eL)), e.push(...r.map(eR.parse)));
        let s = t.match(G);
        return (
          s &&
            ((n = s.length), (t = t.replace(G, eF)), e.push(...s.map(W.parse))),
          { values: e, numColors: i, numNumbers: n, tokenised: t }
        );
      }
      function eI(t) {
        return ej(t).values;
      }
      function eO(t) {
        let { values: e, numColors: i, tokenised: n } = ej(t),
          r = e.length;
        return (t) => {
          let e = n;
          for (let s = 0; s < r; s++)
            e = e.replace(
              s < i ? eL : eF,
              s < i ? eR.transform(t[s]) : X(t[s])
            );
          return e;
        };
      }
      let eU = (t) => ("number" == typeof t ? 0 : t),
        eN = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              _(t) &&
              ((null === (e = t.match(G)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(q)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eI,
          createTransformer: eO,
          getAnimatableNone: function (t) {
            let e = eI(t),
              i = eO(t);
            return i(e.map(eU));
          },
        },
        e$ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ez(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(G) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = e$.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let eW = /([a-z-]*)\(.*?\)/g,
        eH = {
          ...eN,
          getAnimatableNone(t) {
            let e = t.match(eW);
            return e ? e.map(ez).join(" ") : t;
          },
        },
        eY = {
          ...ts,
          color: eR,
          backgroundColor: eR,
          outlineColor: eR,
          fill: eR,
          stroke: eR,
          borderColor: eR,
          borderTopColor: eR,
          borderRightColor: eR,
          borderBottomColor: eR,
          borderLeftColor: eR,
          filter: eH,
          WebkitFilter: eH,
        },
        eX = (t) => eY[t];
      function eG(t, e) {
        var i;
        let n = eX(t);
        return (
          n !== eH && (n = eN),
          null === (i = n.getAnimatableNone) || void 0 === i
            ? void 0
            : i.call(n, e)
        );
      }
      let eq = (t) => (e) => e.test(t),
        eZ = [
          W,
          tt,
          Q,
          J,
          ti,
          te,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        e_ = (t) => eZ.find(eq(t)),
        eK = [...eZ, eR, eN],
        eJ = (t) => eK.find(eq(t));
      function eQ(t, e, i) {
        let n = t.getProps();
        return tS(
          n,
          e,
          void 0 !== i ? i : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      function e0(t) {
        return Boolean(I(t) && t.add);
      }
      let e1 = (t, e) => `${t}: ${e}`,
        e5 = "data-" + tw("framerAppearId");
      var e2 = function () {},
        e3 = function () {};
      let e9 = (t) => 1e3 * t,
        e4 = { current: !1 },
        e6 = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        e7 = (t) => (e) => 1 - t(1 - e),
        e8 = (t) => t * t,
        it = e7(e8),
        ie = e6(e8),
        ii = (t, e, i) => -i * t + i * e + t;
      function ir(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let is = (t, e, i) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        io = [eB, ek, eD],
        ia = (t) => io.find((e) => e.test(t));
      function il(t) {
        let e = ia(t);
        e3(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eD &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let a = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - a;
                (r = ir(l, a, t + 1 / 3)),
                  (s = ir(l, a, t)),
                  (o = ir(l, a, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let iu = (t, e) => {
        let i = il(t),
          n = il(e),
          r = { ...i };
        return (t) => (
          (r.red = is(i.red, n.red, t)),
          (r.green = is(i.green, n.green, t)),
          (r.blue = is(i.blue, n.blue, t)),
          (r.alpha = ii(i.alpha, n.alpha, t)),
          ek.transform(r)
        );
      };
      function ih(t, e) {
        return "number" == typeof t
          ? (i) => ii(t, e, i)
          : eR.test(t)
          ? iu(t, e)
          : ip(t, e);
      }
      let id = (t, e) => {
          let i = [...t],
            n = i.length,
            r = t.map((t, i) => ih(t, e[i]));
          return (t) => {
            for (let e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        },
        ic = (t, e) => {
          let i = { ...t, ...e },
            n = {};
          for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (n[r] = ih(t[r], e[r]));
          return (t) => {
            for (let e in n) i[e] = n[e](t);
            return i;
          };
        },
        ip = (t, e) => {
          let i = eN.createTransformer(e),
            n = ej(t),
            r = ej(e),
            s = n.numColors === r.numColors && n.numNumbers >= r.numNumbers;
          return s
            ? tK(id(n.values, r.values), i)
            : (e2(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (i) => `${i > 0 ? e : t}`);
        },
        im = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        iv = (t, e) => (i) => ii(t, e, i);
      function ig(t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
        let s = t.length;
        e3(
          s === e.length,
          "Both input and output ranges must be the same length"
        ),
          e3(
            !n || !Array.isArray(n) || n.length === s - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, i) {
            let n = [],
              r =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return eR.test(t) ? iu : ip;
                  else if (Array.isArray(t)) return id;
                  else if ("object" == typeof t) return ic;
                  return iv;
                })(t[0]),
              s = t.length - 1;
            for (let o = 0; o < s; o++) {
              let a = r(t[o], t[o + 1]);
              if (e) {
                let l = Array.isArray(e) ? e[o] : e;
                a = tK(l, a);
              }
              n.push(a);
            }
            return n;
          })(e, n, r),
          a = o.length,
          l = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = im(t[i], t[i + 1], e);
            return o[i](n);
          };
        return i ? (e) => l(z(t[0], t[s - 1], e)) : l;
      }
      let iy = (t) => t,
        ix = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function ib(t, e, i, n) {
        if (t === e && i === n) return iy;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = ix((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ix(r(t), e, n));
      }
      let iw = (t) => 1 - Math.sin(Math.acos(t)),
        iV = e7(iw),
        iA = e6(iV),
        iT = ib(0.33, 1.53, 0.69, 0.99),
        iP = e7(iT),
        iE = e6(iP),
        iS = (t) =>
          (t *= 2) < 1 ? 0.5 * iP(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        iC = {
          linear: iy,
          easeIn: e8,
          easeInOut: ie,
          easeOut: it,
          circIn: iw,
          circInOut: iA,
          circOut: iV,
          backIn: iP,
          backInOut: iE,
          backOut: iT,
          anticipate: iS,
        },
        iM = (t) => {
          if (Array.isArray(t)) {
            e3(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return ib(e, i, n, r);
          }
          return "string" == typeof t
            ? (e3(void 0 !== iC[t], `Invalid easing type '${t}'`), iC[t])
            : t;
        },
        ik = (t) => Array.isArray(t) && "number" != typeof t[0];
      function iB({ keyframes: t, ease: e = ie, times: i, duration: n = 300 }) {
        t = [...t];
        let r = iB[0],
          s = ik(e) ? e.map(iM) : iM(e),
          o = { done: !1, value: r },
          a = (
            i && i.length === iB.length
              ? i
              : (function (t) {
                  let e = t.length;
                  return t.map((t, i) => (0 !== i ? i / (e - 1) : 0));
                })(t)
          ).map((t) => t * n);
        function l() {
          var e;
          return ig(a, t, {
            ease: Array.isArray(s)
              ? s
              : (e = t).map(() => s || ie).splice(0, e.length - 1),
          });
        }
        let u = l();
        return {
          next: (t) => ((o.value = u(t)), (o.done = t >= n), o),
          flipTarget() {
            t.reverse(), (u = l());
          },
        };
      }
      function iD(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let iR = ["duration", "bounce"],
        iL = ["stiffness", "damping", "mass"];
      function iF(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ij({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: i = 0.01,
        ...n
      }) {
        let r = t[0],
          s = t[t.length - 1],
          o = { done: !1, value: r },
          {
            stiffness: a,
            damping: l,
            mass: u,
            velocity: h,
            duration: d,
            isResolvedFromDuration: c,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!iF(t, iL) && iF(t, iR)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                e2(t <= 1e4, "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = z(0.05, 1, o)),
                  (t = z(0.01, 10, t / 1e3)),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t,
                          s = iD(e, o);
                        return 0.001 - ((n - i) / s) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o,
                          s = n * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = iD(Math.pow(e, 2), o),
                          u = -r(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((s * i + i - a) * Math.exp(-s))) / l;
                      }))
                    : ((r = (e) => {
                        let n = Math.exp(-e * t),
                          r = (e - i) * t + 1;
                        return -0.001 + n * r;
                      }),
                      (s = (e) => {
                        let n = Math.exp(-e * t),
                          r = (i - e) * (t * t);
                        return n * r;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let n = i;
                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                    return n;
                  })(r, s, a);
                if (((t *= 1e3), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let u = Math.pow(l, 2) * n;
                  return {
                    stiffness: u,
                    damping: 2 * o * Math.sqrt(n * u),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(n),
          p = iI,
          m = h ? -(h / 1e3) : 0,
          f = l / (2 * Math.sqrt(a * u));
        function v() {
          let t = s - r,
            e = Math.sqrt(a / u) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(s - r) / 100, 0.4)), f < 1)
          ) {
            let n = iD(e, f);
            p = (i) =>
              s -
              Math.exp(-f * e * i) *
                (((m + f * e * t) / n) * Math.sin(n * i) + t * Math.cos(n * i));
          } else if (1 === f)
            p = (i) => s - Math.exp(-e * i) * (t + (m + e * t) * i);
          else {
            let o = e * Math.sqrt(f * f - 1);
            p = (i) => {
              let n = Math.min(o * i, 300);
              return (
                s -
                (Math.exp(-f * e * i) *
                  ((m + f * e * t) * Math.sinh(n) + o * t * Math.cosh(n))) /
                  o
              );
            };
          }
        }
        return (
          v(),
          {
            next(t) {
              let n = p(t);
              if (c) o.done = t >= d;
              else {
                let r = m;
                if (0 !== t) {
                  if (f < 1) {
                    let a = Math.max(0, t - 5);
                    r = eV(n - p(a), t - a);
                  } else r = 0;
                }
                let l = Math.abs(r) <= e,
                  u = Math.abs(s - n) <= i;
                o.done = l && u;
              }
              return (o.value = o.done ? s : n), o;
            },
            flipTarget() {
              (m = -m), ([r, s] = [s, r]), v();
            },
          }
        );
      }
      ij.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let iI = (t) => 0,
        iO = {
          decay: function ({
            keyframes: t = [0],
            velocity: e = 0,
            power: i = 0.8,
            timeConstant: n = 350,
            restDelta: r = 0.5,
            modifyTarget: s,
          }) {
            let o = t[0],
              a = { done: !1, value: o },
              l = i * e,
              u = o + l,
              h = void 0 === s ? u : s(u);
            return (
              h !== u && (l = h - o),
              {
                next(t) {
                  let e = -l * Math.exp(-t / n);
                  return (
                    (a.done = !(e > r || e < -r)),
                    (a.value = a.done ? h : h + e),
                    a
                  );
                },
                flipTarget() {},
              }
            );
          },
          keyframes: iB,
          tween: iB,
          spring: ij,
        };
      function iU(t, e, i = 0) {
        return t - e - i;
      }
      let iN = (t) => {
        let e = ({ delta: e }) => t(e);
        return { start: () => ep.update(e, !0), stop: () => em.update(e) };
      };
      function i$({
        duration: t,
        driver: e = iN,
        elapsed: i = 0,
        repeat: n = 0,
        repeatType: r = "loop",
        repeatDelay: s = 0,
        keyframes: o,
        autoplay: a = !0,
        onPlay: l,
        onStop: u,
        onComplete: h,
        onRepeat: d,
        onUpdate: c,
        type: p = "keyframes",
        ...m
      }) {
        var f;
        let v, g, y;
        let x = 0,
          b = t,
          w = !1,
          V = !0,
          A = iO[o.length > 2 ? "keyframes" : p],
          T = o[0],
          P = o[o.length - 1];
        (null === (f = A.needsInterpolation) || void 0 === f
          ? void 0
          : f.call(A, T, P)) &&
          ((y = ig([0, 100], [T, P], { clamp: !1 })), (o = [0, 100]));
        let E = A({ ...m, duration: t, keyframes: o });
        return (
          a &&
            (l && l(),
            (v = e(function (t) {
              if ((V || (t = -t), (i += t), !w)) {
                let e = E.next(Math.max(0, i));
                (g = e.value), y && (g = y(g)), (w = V ? e.done : i <= 0);
              }
              if ((c && c(g), w)) {
                if ((0 === x && (b = void 0 !== b ? b : i), x < n)) {
                  var o, a;
                  (o = i),
                    (a = b),
                    (V ? o >= a + s : o <= -s) &&
                      (x++,
                      "reverse" === r
                        ? (i = (function (t, e = 0, i = 0, n = !0) {
                            return n ? iU(e + -t, e, i) : e - (t - e) + i;
                          })(i, b, s, (V = x % 2 == 0)))
                        : ((i = iU(i, b, s)), "mirror" === r && E.flipTarget()),
                      (w = !1),
                      d && d());
                } else v.stop(), h && h();
              }
            })).start()),
          {
            stop() {
              u && u(), v.stop();
            },
            sample: (t) => E.next(Math.max(0, t)),
          }
        );
      }
      let iz = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        iW = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iz([0, 0.65, 0.55, 1]),
          circOut: iz([0.55, 0, 1, 0.45]),
          backIn: iz([0.31, 0.01, 0.66, -0.59]),
          backOut: iz([0.33, 1.53, 0.69, 0.99]),
        };
      function iH(t, e) {
        let i = performance.now(),
          n = ({ timestamp: r }) => {
            let s = r - i;
            s >= e && (em.read(n), t(s - e));
          };
        return ep.read(n, !0), () => em.read(n);
      }
      let iY = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        iX = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        iG = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        iq = { type: "keyframes", duration: 0.8 },
        iZ = {
          x: iY,
          y: iY,
          z: iY,
          rotate: iY,
          rotateX: iY,
          rotateY: iY,
          rotateZ: iY,
          scaleX: iX,
          scaleY: iX,
          scale: iX,
          opacity: iG,
          backgroundColor: iG,
          color: iG,
          default: iX,
        },
        i_ = (t, { keyframes: e }) => {
          if (e.length > 2) return iq;
          {
            let i = iZ[t] || iZ.default;
            return i(e[1]);
          }
        },
        iK = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e && eN.test(e) && !e.startsWith("url("))
          );
      function iJ(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function iQ(t) {
        return "number" == typeof t ? 0 : eG("", t);
      }
      function i0(t, e) {
        return t[e] || t.default || t;
      }
      let i1 = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        i5 = {},
        i2 = {};
      for (let i3 in i1)
        i2[i3] = () => (void 0 === i5[i3] && (i5[i3] = i1[i3]()), i5[i3]);
      let i9 = new Set(["opacity"]),
        i4 =
          (t, e, i, n = {}) =>
          (r) => {
            let s = i0(n, t) || {},
              o = s.delay || n.delay || 0,
              { elapsed: a = 0 } = n;
            a -= e9(o);
            let l = (function (t, e, i, n) {
                let r = iK(e, i),
                  s = void 0 !== n.from ? n.from : t.get();
                return ("none" === s && r && "string" == typeof i
                  ? (s = eG(e, i))
                  : iJ(s) && "string" == typeof i
                  ? (s = iQ(i))
                  : !Array.isArray(i) &&
                    iJ(i) &&
                    "string" == typeof s &&
                    (i = iQ(s)),
                Array.isArray(i))
                  ? (null === i[0] && (i[0] = s), i)
                  : [s, i];
              })(e, t, i, s),
              u = l[0],
              h = l[l.length - 1],
              d = iK(t, u),
              c = iK(t, h);
            e2(
              d === c,
              `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
            );
            let p = {
              keyframes: l,
              velocity: e.getVelocity(),
              ...s,
              elapsed: a,
              onUpdate(t) {
                e.set(t), s.onUpdate && s.onUpdate(t);
              },
              onComplete() {
                r(), s.onComplete && s.onComplete();
              },
            };
            if (!d || !c || e4.current || !1 === s.type)
              return (function ({
                keyframes: t,
                elapsed: e,
                onUpdate: i,
                onComplete: n,
              }) {
                let r = () => (i && i(t[t.length - 1]), n && n(), () => {});
                return e ? iH(r, -e) : r();
              })(p);
            if ("inertia" === s.type) {
              let m = (function ({
                keyframes: t,
                velocity: e = 0,
                min: i,
                max: n,
                power: r = 0.8,
                timeConstant: s = 750,
                bounceStiffness: o = 500,
                bounceDamping: a = 10,
                restDelta: l = 1,
                modifyTarget: u,
                driver: h,
                onUpdate: d,
                onComplete: c,
                onStop: p,
              }) {
                let m;
                let f = t[0];
                function v(t) {
                  return (void 0 !== i && t < i) || (void 0 !== n && t > n);
                }
                function g(t) {
                  return void 0 === i
                    ? n
                    : void 0 === n
                    ? i
                    : Math.abs(i - t) < Math.abs(n - t)
                    ? i
                    : n;
                }
                function y(t) {
                  null == m || m.stop(),
                    (m = i$({
                      keyframes: [0, 1],
                      velocity: 0,
                      ...t,
                      driver: h,
                      onUpdate(e) {
                        var i;
                        null == d || d(e),
                          null === (i = t.onUpdate) ||
                            void 0 === i ||
                            i.call(t, e);
                      },
                      onComplete: c,
                      onStop: p,
                    }));
                }
                function x(t) {
                  y({
                    type: "spring",
                    stiffness: o,
                    damping: a,
                    restDelta: l,
                    ...t,
                  });
                }
                if (v(f)) x({ velocity: e, keyframes: [f, g(f)] });
                else {
                  let b,
                    w,
                    V = r * e + f;
                  void 0 !== u && (V = u(V));
                  let A = g(V),
                    T = A === i ? -1 : 1,
                    P = (t) => {
                      (b = w),
                        (w = t),
                        (e = eV(t - b, er.delta)),
                        ((1 === T && t > A) || (-1 === T && t < A)) &&
                          x({ keyframes: [t, A], velocity: e });
                    };
                  y({
                    type: "decay",
                    keyframes: [f, 0],
                    velocity: e,
                    timeConstant: s,
                    power: r,
                    restDelta: l,
                    modifyTarget: u,
                    onUpdate: v(V) ? P : void 0,
                  });
                }
                return { stop: () => (null == m ? void 0 : m.stop()) };
              })(p);
              return () => m.stop();
            }
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(s) && (p = { ...p, ...i_(t, p) }),
              p.duration && (p.duration = e9(p.duration)),
              p.repeatDelay && (p.repeatDelay = e9(p.repeatDelay));
            let f = e.owner,
              v = f && f.current,
              g =
                i2.waapi() &&
                i9.has(t) &&
                !p.repeatDelay &&
                "mirror" !== p.repeatType &&
                0 !== p.damping &&
                f &&
                v instanceof HTMLElement &&
                !f.getProps().onUpdate;
            if (g)
              return (function (t, e, { onUpdate: i, onComplete: n, ...r }) {
                var s;
                let {
                  keyframes: o,
                  duration: a = 0.3,
                  elapsed: l = 0,
                  ease: u,
                } = r;
                if (
                  "spring" === r.type ||
                  !(
                    !(s = r.ease) ||
                    Array.isArray(s) ||
                    ("string" == typeof s && iW[s])
                  )
                ) {
                  let h = i$(r),
                    d = { done: !1, value: o[0] },
                    c = [],
                    p = 0;
                  for (; !d.done; ) c.push((d = h.sample(p)).value), (p += 10);
                  (o = c), (a = p - 10), (u = "linear");
                }
                let m = (function (
                  t,
                  e,
                  i,
                  {
                    delay: n = 0,
                    duration: r,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  return t.animate(
                    { [e]: i, offset: l },
                    {
                      delay: n,
                      duration: r,
                      easing: (function (t) {
                        if (t) return Array.isArray(t) ? iz(t) : iW[t];
                      })(a),
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    }
                  );
                })(t.owner.current, e, o, {
                  ...r,
                  delay: -l,
                  duration: a,
                  ease: u,
                });
                return (
                  (m.onfinish = () => {
                    t.set(o[o.length - 1]), n && n();
                  }),
                  () => {
                    let { currentTime: e } = m;
                    if (e) {
                      let i = i$(r);
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    ep.update(() => m.cancel());
                  }
                );
              })(e, t, p);
            {
              let y = i$(p);
              return () => y.stop();
            }
          };
      function i6(t, e, i = {}) {
        var n;
        let r = eQ(t, e, i.custom),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => i7(t, r, i) : () => Promise.resolve(),
          a = (
            null === (n = t.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? (n = 0) => {
                let {
                  delayChildren: r = 0,
                  staggerChildren: o,
                  staggerDirection: a,
                } = s;
                return (function (t, e, i = 0, n = 0, r = 1, s) {
                  let o = [],
                    a = (t.variantChildren.size - 1) * n,
                    l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                  return (
                    Array.from(t.variantChildren)
                      .sort(i8)
                      .forEach((t, n) => {
                        o.push(
                          i6(t, e, { ...s, delay: i + l(n) }).then(() =>
                            t.notify("AnimationComplete", e)
                          )
                        );
                      }),
                    Promise.all(o)
                  );
                })(t, e, r + n, o, a, i);
              }
            : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [u, h] = "beforeChildren" === l ? [o, a] : [a, o];
          return u().then(h);
        }
      }
      function i7(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = t.makeTargetAnimatable(e),
          u = t.getValue("willChange");
        n && (o = n);
        let h = [],
          d =
            r &&
            (null === (s = t.animationState) || void 0 === s
              ? void 0
              : s.getState()[r]);
        for (let c in l) {
          let p = t.getValue(c),
            m = l[c];
          if (
            !p ||
            void 0 === m ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(d, c))
          )
            continue;
          let f = { delay: i, elapsed: 0, ...o };
          if (
            (t.shouldReduceMotion &&
              F.has(c) &&
              (f = { ...f, type: !1, delay: 0 }),
            !p.hasAnimated)
          ) {
            let v = t.getProps()[e5];
            v &&
              (f.elapsed = (function (t, e) {
                let { MotionAppearAnimations: i } = window,
                  n = e1(t, F.has(e) ? "transform" : e),
                  r = i && i.get(n);
                return r
                  ? (ep.render(() => {
                      try {
                        r.cancel(), i.delete(n);
                      } catch (t) {}
                    }),
                    r.currentTime || 0)
                  : 0;
              })(v, c));
          }
          let g = p.start(i4(c, p, m, f));
          e0(u) && (u.add(c), (g = g.then(() => u.remove(c)))), h.push(g);
        }
        return Promise.all(h).then(() => {
          a &&
            (function (t, e) {
              let i = eQ(t, e),
                {
                  transitionEnd: n = {},
                  transition: r = {},
                  ...s
                } = i ? t.makeTargetAnimatable(i, !1) : {};
              for (let o in (s = { ...s, ...n })) {
                var a;
                let l = tk(s[o]);
                (a = o),
                  t.hasValue(a) ? t.getValue(a).set(l) : t.addValue(a, eP(l));
              }
            })(t, a);
        });
      }
      function i8(t, e) {
        return t.sortNodePosition(e);
      }
      let nt = [o.Animate, o.InView, o.Focus, o.Hover, o.Tap, o.Drag, o.Exit],
        ne = [...nt].reverse(),
        ni = nt.length;
      function nn(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let nr = {
          animation: t7(({ visualElement: t, animate: e }) => {
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if (
                            (t.notify("AnimationStart", e), Array.isArray(e))
                          ) {
                            let r = e.map((e) => i6(t, e, i));
                            n = Promise.all(r);
                          } else if ("string" == typeof e) n = i6(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? eQ(t, e, i.custom) : e;
                            n = i7(t, s, i);
                          }
                          return n.then(() => t.notify("AnimationComplete", e));
                        })(t, e, i)
                      )
                    ),
                  i = {
                    [o.Animate]: nn(!0),
                    [o.InView]: nn(),
                    [o.Hover]: nn(),
                    [o.Tap]: nn(),
                    [o.Drag]: nn(),
                    [o.Focus]: nn(),
                    [o.Exit]: nn(),
                  },
                  n = !0,
                  r = (e, i) => {
                    let n = eQ(t, i);
                    if (n) {
                      let { transition: r, transitionEnd: s, ...o } = n;
                      e = { ...e, ...o, ...s };
                    }
                    return e;
                  };
                function s(s, o) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    h = new Set(),
                    d = {},
                    c = 1 / 0;
                  for (let p = 0; p < ni; p++) {
                    var m;
                    let f = ne[p],
                      y = i[f],
                      x = void 0 !== a[f] ? a[f] : l[f],
                      b = v(x),
                      w = f === o ? y.isActive : null;
                    !1 === w && (c = p);
                    let V = x === l[f] && x !== a[f] && b;
                    if (
                      (V && n && t.manuallyAnimateOnMount && (V = !1),
                      (y.protectedKeys = { ...d }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        g(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let A =
                        ((m = y.prevProp),
                        "string" == typeof x
                          ? x !== m
                          : !!Array.isArray(x) && !ee(x, m)),
                      T =
                        A || (f === o && y.isActive && !V && b) || (p > c && b),
                      P = Array.isArray(x) ? x : [x],
                      E = P.reduce(r, {});
                    !1 === w && (E = {});
                    let { prevResolvedValues: S = {} } = y,
                      C = { ...S, ...E },
                      M = (t) => {
                        (T = !0), h.delete(t), (y.needsAnimating[t] = !0);
                      };
                    for (let k in C) {
                      let B = E[k],
                        D = S[k];
                      d.hasOwnProperty(k) ||
                        (B !== D
                          ? tC(B) && tC(D)
                            ? !ee(B, D) || A
                              ? M(k)
                              : (y.protectedKeys[k] = !0)
                            : void 0 !== B
                            ? M(k)
                            : h.add(k)
                          : void 0 !== B && h.has(k)
                          ? M(k)
                          : (y.protectedKeys[k] = !0));
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = E),
                      y.isActive && (d = { ...d, ...E }),
                      n && t.blockInitialAnimation && (T = !1),
                      T &&
                        !V &&
                        u.push(
                          ...P.map((t) => ({
                            animation: t,
                            options: { type: f, ...s },
                          }))
                        );
                  }
                  if (h.size) {
                    let R = {};
                    h.forEach((e) => {
                      let i = t.getBaseTarget(e);
                      void 0 !== i && (R[e] = i);
                    }),
                      u.push({ animation: R });
                  }
                  let L = Boolean(u.length);
                  return (
                    n &&
                      !1 === a.initial &&
                      !t.manuallyAnimateOnMount &&
                      (L = !1),
                    (n = !1),
                    L ? e(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n, r) {
                    var o;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let a = s(r, e);
                    for (let l in i) i[l].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t)),
              g(e) && (0, l.useEffect)(() => e.subscribe(t), [e]);
          }),
          exit: t7((t) => {
            let { custom: e, visualElement: i } = t,
              [n, r] = et(),
              s = (0, l.useContext)(d);
            (0, l.useEffect)(() => {
              i.isPresent = n;
              let t =
                i.animationState &&
                i.animationState.setActive(o.Exit, !n, {
                  custom: (s && s.custom) || e,
                });
              t && !n && t.then(r);
            }, [n]);
          }),
        },
        ns = (t, e) => Math.abs(t - e);
      class no {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = nu(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = ns(t.x, e.x),
                      n = ns(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = er;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = na(e, this.transformPagePoint)),
                ep.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let { onEnd: i, onSessionEnd: n } = this.handlers,
                r = nu(na(e, this.transformPagePoint), this.history);
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            !tI(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let n = tO(t),
            r = na(n, this.transformPagePoint),
            { point: s } = r,
            { timestamp: o } = er;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, nu(r, this.history)),
            (this.removeListeners = tK(
              tN(window, "pointermove", this.handlePointerMove),
              tN(window, "pointerup", this.handlePointerUp),
              tN(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            em.update(this.updatePoint);
        }
      }
      function na(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function nl(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function nu({ point: t }, e) {
        return {
          point: t,
          delta: nl(t, nh(e)),
          offset: nl(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = nh(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > e9(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (r.timestamp - n.timestamp) / 1e3;
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function nh(t) {
        return t[t.length - 1];
      }
      function nd(t) {
        return t.max - t.min;
      }
      function nc(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function np(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = ii(e.min, e.max, t.origin)),
          (t.scale = nd(i) / nd(e)),
          (nc(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = ii(i.min, i.max, t.origin) - t.originPoint),
          (nc(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function nm(t, e, i, n) {
        np(t.x, e.x, i.x, null == n ? void 0 : n.originX),
          np(t.y, e.y, i.y, null == n ? void 0 : n.originY);
      }
      function nf(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + nd(e));
      }
      function nv(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + nd(e));
      }
      function ng(t, e, i) {
        nv(t.x, e.x, i.x), nv(t.y, e.y, i.y);
      }
      function ny(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function nx(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function nb(t, e, i) {
        return { min: nw(t, e), max: nw(t, i) };
      }
      function nw(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let nV = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        nA = () => ({ x: nV(), y: nV() }),
        nT = () => ({ min: 0, max: 0 }),
        nP = () => ({ x: nT(), y: nT() });
      function nE(t) {
        return [t("x"), t("y")];
      }
      function nS({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function nC(t) {
        return void 0 === t || 1 === t;
      }
      function nM({ scale: t, scaleX: e, scaleY: i }) {
        return !nC(t) || !nC(e) || !nC(i);
      }
      function nk(t) {
        return nM(t) || nB(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function nB(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function nD(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function nR(t, e = 0, i = 1, n, r) {
        (t.min = nD(t.min, e, i, n, r)), (t.max = nD(t.max, e, i, n, r));
      }
      function nL(t, { x: e, y: i }) {
        nR(t.x, e.translate, e.scale, e.originPoint),
          nR(t.y, i.translate, i.scale, i.originPoint);
      }
      function nF(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function nj(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nI(t, e, [i, n, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = ii(t.min, t.max, s);
        nR(t, e[i], e[n], o, e.scale);
      }
      let nO = ["x", "scaleX", "originX"],
        nU = ["y", "scaleY", "originY"];
      function nN(t, e) {
        nI(t.x, e, nO), nI(t.y, e, nU);
      }
      function n$(t, e) {
        return nS(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let nz = new WeakMap();
      class nW {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = nP()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          if (!1 === this.visualElement.isPresent) return;
          let i = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tO(t, "page").point);
            },
            n = (t, e) => {
              var i;
              let {
                drag: n,
                dragPropagation: r,
                onDragStart: s,
              } = this.getProps();
              (!n ||
                r ||
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = tY(n)),
                this.openGlobalLock)) &&
                ((this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                nE((t) => {
                  var e, i;
                  let n = this.getAxisMotionValue(t).get() || 0;
                  if (Q.test(n)) {
                    let r =
                      null ===
                        (i =
                          null === (e = this.visualElement.projection) ||
                          void 0 === e
                            ? void 0
                            : e.layout) || void 0 === i
                        ? void 0
                        : i.layoutBox[t];
                    if (r) {
                      let s = nd(r);
                      n = s * (parseFloat(n) / 100);
                    }
                  }
                  this.originPoint[t] = n;
                }),
                null == s || s(t, e),
                null === (i = this.visualElement.animationState) ||
                  void 0 === i ||
                  i.setActive(o.Drag, !0));
            },
            r = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: r,
                onDrag: s,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    (null == r || r(this.currentDirection));
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                null == s || s(t, e);
            },
            s = (t, e) => this.stop(t, e);
          this.panSession = new no(
            t,
            { onSessionStart: i, onStart: n, onMove: r, onSessionEnd: s },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          null == r || r(t, e);
        }
        cancel() {
          var t, e;
          (this.isDragging = !1),
            this.visualElement.projection &&
              (this.visualElement.projection.isAnimationBlocked = !1),
            null === (t = this.panSession) || void 0 === t || t.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            null === (e = this.visualElement.animationState) ||
              void 0 === e ||
              e.setActive(o.Drag, !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nH(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? ii(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? ii(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            n = this.constraints;
          t && f(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: ny(t.x, i, r), y: ny(t.y, e, n) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: nb(t, "left", "right"), y: nb(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nE((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !f(e)) return !1;
          let n = e.current;
          e3(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = n$(t, i),
                { scroll: r } = e;
              return r && (nj(n.x, r.offset.x), nj(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: nx((t = r.layout.layoutBox).x, s.x), y: nx(t.y, s.y) };
          if (i) {
            let a = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!a), a && (o = nS(a));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = nE((o) => {
              if (!nH(o, e, this.currentDirection)) return;
              let l = (null == a ? void 0 : a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(i4(t, i, 0, e));
        }
        stopAnimation() {
          nE((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          var e;
          let i = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps()[i];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (null === (e = this.visualElement.getProps().initial) ||
              void 0 === e
                ? void 0
                : e[t]) || 0
            )
          );
        }
        snapToCursor(t) {
          nE((e) => {
            let { drag: i } = this.getProps();
            if (!nH(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: s, max: o } = n.layout.layoutBox[e];
              r.set(t[e] - ii(s, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: i } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!f(i) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          nE((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  n = nd(t),
                  r = nd(e);
                return (
                  r > n
                    ? (i = im(e.min, e.max - n, t.min))
                    : n > r && (i = im(t.min, t.max - r, e.min)),
                  z(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
            null === (t = n.root) || void 0 === t || t.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            nE((t) => {
              if (!nH(t, e, null)) return;
              let i = this.getAxisMotionValue(t),
                { min: n, max: s } = this.constraints[t];
              i.set(ii(n, s, r[t]));
            });
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          nz.set(this.visualElement, this);
          let e = this.visualElement.current,
            i = tN(e, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            n = () => {
              let { dragConstraints: t } = this.getProps();
              f(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            s = r.addEventListener("measure", n);
          r &&
            !r.layout &&
            (null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout()),
            n();
          let o = tF(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (nE((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), i(), s(), null == a || a();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function nH(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let nY = {
        pan: t7(function ({
          onPan: t,
          onPanStart: e,
          onPanEnd: i,
          onPanSessionStart: n,
          visualElement: r,
        }) {
          let s = (0, l.useRef)(null),
            { transformPagePoint: o } = (0, l.useContext)(u),
            a = {
              onSessionStart: n,
              onStart: e,
              onMove: t,
              onEnd(t, e) {
                (s.current = null), i && i(t, e);
              },
            };
          (0, l.useEffect)(() => {
            null !== s.current && s.current.updateHandlers(a);
          }),
            t$(
              r,
              "pointerdown",
              (t || e || i || n) &&
                function (t) {
                  s.current = new no(t, a, { transformPagePoint: o });
                }
            ),
            tZ(() => s.current && s.current.end());
        }),
        drag: t7(function (t) {
          let { dragControls: e, visualElement: i } = t,
            n = T(() => new nW(i));
          (0, l.useEffect)(() => e && e.subscribe(n), [n, e]),
            (0, l.useEffect)(() => n.addListeners(), [n]);
        }),
      };
      function nX(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      let nG = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function nq(t, e, i = 1) {
        e3(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, r] = (function (t) {
          let e = nG.exec(t);
          if (!e) return [,];
          let [, i, n] = e;
          return [i, n];
        })(t);
        if (!n) return;
        let s = window.getComputedStyle(e).getPropertyValue(n);
        return s ? s.trim() : nX(r) ? nq(r, e, i + 1) : r;
      }
      let nZ = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        n_ = (t) => nZ.has(t),
        nK = (t) => Object.keys(t).some(n_),
        nJ = (t, e) => {
          t.set(e, !1), t.set(e);
        },
        nQ = (t) => t === W || t === tt;
      ((s = a || (a = {})).width = "width"),
        (s.height = "height"),
        (s.left = "left"),
        (s.right = "right"),
        (s.top = "top"),
        (s.bottom = "bottom");
      let n0 = (t, e) => parseFloat(t.split(", ")[e]),
        n1 =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r) return n0(r[1], e);
            {
              let s = n.match(/^matrix\((.+)\)$/);
              return s ? n0(s[1], t) : 0;
            }
          },
        n5 = new Set(["x", "y", "z"]),
        n2 = L.filter((t) => !n5.has(t)),
        n3 = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: n1(4, 13),
          y: n1(5, 14),
        },
        n9 = (t, e, i) => {
          let n = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = n3[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let n = e.getValue(i);
              nJ(n, a[i]), (t[i] = n3[i](l, s));
            }),
            t
          );
        },
        n4 = (t, e, i = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let r = Object.keys(e).filter(n_),
            s = [],
            o = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l;
              let u = t.getValue(r);
              if (!t.hasValue(r)) return;
              let h = i[r],
                d = e_(h),
                c = e[r];
              if (tC(c)) {
                let p = c.length,
                  m = null === c[0] ? 1 : 0;
                d = e_((h = c[m]));
                for (let f = m; f < p; f++)
                  l
                    ? e3(
                        e_(c[f]) === l,
                        "All keyframes must be of the same type"
                      )
                    : e3(
                        (l = e_(c[f])) === d || (nQ(d) && nQ(l)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else l = e_(c);
              if (d !== l) {
                if (nQ(d) && nQ(l)) {
                  let v = u.get();
                  "string" == typeof v && u.set(parseFloat(v)),
                    "string" == typeof c
                      ? (e[r] = parseFloat(c))
                      : Array.isArray(c) &&
                        l === tt &&
                        (e[r] = c.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === c)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[r] = d.transform(c))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            n2.forEach((i) => {
                              let n = t.getValue(i);
                              void 0 !== n &&
                                (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(r),
                      (n[r] = void 0 !== n[r] ? n[r] : e[r]),
                      nJ(u, c));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: n };
          {
            let l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              u = n9(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              c && null !== l && window.scrollTo({ top: l }),
              { target: u, transitionEnd: n }
            );
          }
        },
        n6 = (t, e, i, n) => {
          var r, s;
          let o = (function (t, { ...e }, i) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: i };
            for (let r in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!nX(e)) return;
              let i = nq(e, n);
              i && t.set(i);
            }),
            e)) {
              let s = e[r];
              if (!nX(s)) continue;
              let o = nq(s, n);
              o && ((e[r] = o), i && void 0 === i[r] && (i[r] = s));
            }
            return { target: e, transitionEnd: i };
          })(t, e, n);
          return (
            (e = o.target),
            (n = o.transitionEnd),
            (r = e),
            (s = n),
            nK(r) ? n4(t, r, i, s) : { target: r, transitionEnd: s }
          );
        },
        n7 = { current: null },
        n8 = { current: !1 },
        rt = Object.keys(A),
        re = rt.length,
        ri = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "Unmount",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rn {
        constructor(
          { parent: t, props: e, reducedMotionConfig: i, visualState: n },
          r = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => ep.render(this.render, !1, !0));
          let { latestValues: s, renderState: o } = n;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = e.initial ? { ...s } : {}),
            (this.renderState = o),
            (this.parent = t),
            (this.props = e),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = r),
            (this.isControllingVariants = x(e)),
            (this.isVariantNode = b(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: a, ...l } = this.scrapeMotionValuesFromProps(e);
          for (let u in l) {
            let h = l[u];
            void 0 !== s[u] && I(h) && (h.set(s[u], !1), e0(a) && a.add(u));
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {};
        }
        mount(t) {
          var e;
          (this.current = t),
            this.projection && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n8.current ||
              (function () {
                if (((n8.current = !0), c)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (n7.current = t.matches);
                    t.addListener(e), e();
                  } else n7.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || n7.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props);
        }
        unmount() {
          var t, e, i;
          for (let n in (null === (t = this.projection) ||
            void 0 === t ||
            t.unmount(),
          em.update(this.notifyUpdate),
          em.render(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          null === (e = this.removeFromVariantTree) ||
            void 0 === e ||
            e.call(this),
          null === (i = this.parent) || void 0 === i || i.children.delete(this),
          this.events))
            this.events[n].clear();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = F.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && ep.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, i, n, r, s) {
          let o = [];
          "production" !== tQ &&
            i &&
            e &&
            e3(
              !1,
              "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
            );
          for (let a = 0; a < re; a++) {
            let u = rt[a],
              { isEnabled: h, Component: d } = A[u];
            h(t) &&
              d &&
              o.push(
                (0, l.createElement)(d, { key: u, ...t, visualElement: this })
              );
          }
          if (!this.projection && r) {
            this.projection = new r(
              n,
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: c,
              layout: p,
              drag: m,
              dragConstraints: v,
              layoutScroll: g,
            } = t;
            this.projection.setOptions({
              layoutId: c,
              layout: p,
              alwaysMeasureLayout: Boolean(m) || (v && f(v)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof p ? p : "both",
              initialPromotionConfig: s,
              layoutScroll: g,
            });
          }
          return o;
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : nP();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.props = t);
          for (let e = 0; e < ri.length; e++) {
            let i = ri[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if (I(s)) t.addValue(r, s), e0(n) && n.add(r);
              else if (I(o))
                t.addValue(r, eP(s, { owner: t })), e0(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let a = t.getValue(r);
                  a.hasAnimated || a.set(s);
                } else {
                  let l = t.getStaticValue(r);
                  t.addValue(r, eP(void 0 !== l ? l : s));
                }
              }
            }
            for (let u in i) void 0 === e[u] && t.removeValue(u);
            return e;
          })(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e
            ? void 0
            : e[t];
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode
            ? this
            : null === (t = this.parent) || void 0 === t
            ? void 0
            : t.getClosestVariantNode();
        }
        getVariantContext(t = !1) {
          var e, i;
          if (t)
            return null === (e = this.parent) || void 0 === e
              ? void 0
              : e.getVariantContext();
          if (!this.isControllingVariants) {
            let n =
              (null === (i = this.parent) || void 0 === i
                ? void 0
                : i.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (n.initial = this.props.initial),
              n
            );
          }
          let r = {};
          for (let s = 0; s < rs; s++) {
            let o = rr[s],
              a = this.props[o];
            (v(a) || !1 === a) && (r[o] = a);
          }
          return r;
        }
        addVariantChild(t) {
          var e;
          let i = this.getClosestVariantNode();
          if (i)
            return (
              null === (e = i.variantChildren) || void 0 === e || e.add(t),
              () => i.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()),
            this.bindToMotionValue(t, e);
        }
        removeValue(t) {
          var e;
          this.values.delete(t),
            null === (e = this.valueSubscriptions.get(t)) ||
              void 0 === e ||
              e(),
            this.valueSubscriptions.delete(t),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = eP(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            n =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tS(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || I(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ew()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          var i;
          null === (i = this.events[t]) || void 0 === i || i.notify(...e);
        }
      }
      let rr = ["initial", ...nt],
        rs = rr.length;
      class ro extends rn {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          var i;
          return null === (i = t.style) || void 0 === i ? void 0 : i[e];
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: n },
          r
        ) {
          let s = (function (t, e, i) {
            var n;
            let r = {};
            for (let s in t) {
              let o = (function (t, e) {
                if (!e) return;
                let i = e[t] || e.default || e;
                return i.from;
              })(s, e);
              r[s] =
                void 0 !== o
                  ? o
                  : null === (n = i.getValue(s)) || void 0 === n
                  ? void 0
                  : n.get();
            }
            return r;
          })(i, t || {}, this);
          if ((n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r)) {
            !(function (t, e, i) {
              var n, r;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let l = s[a],
                    u = e[l],
                    h = null;
                  Array.isArray(u) && (h = u[0]),
                    null === h &&
                      (h =
                        null !==
                          (r =
                            null !== (n = i[l]) && void 0 !== n
                              ? n
                              : t.readValue(l)) && void 0 !== r
                          ? r
                          : e[l]),
                    null != h &&
                      ("string" == typeof h && (ei(h) || en(h))
                        ? (h = parseFloat(h))
                        : !eJ(h) && eN.test(u) && (h = eG(l, u)),
                      t.addValue(l, eP(h, { owner: t })),
                      void 0 === i[l] && (i[l] = h),
                      null !== h && t.setBaseTarget(l, h));
                }
            })(this, i, s);
            let o = n6(this, i, s, e);
            (e = o.transitionEnd), (i = o.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class ra extends ro {
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            let i = eX(e);
            return (i && i.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              r = (N(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return n$(t, e);
        }
        build(t, e, i, n) {
          to(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t) {
          return tP(t);
        }
        renderInstance(t, e, i, n) {
          tV(t, e, i, n);
        }
      }
      class rl extends ro {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          var i;
          return F.has(e)
            ? (null === (i = eX(e)) || void 0 === i ? void 0 : i.default) || 0
            : ((e = tA.has(e) ? e : tw(e)), t.getAttribute(e));
        }
        measureInstanceViewportBox() {
          return nP();
        }
        scrapeMotionValuesFromProps(t) {
          return tE(t);
        }
        build(t, e, i, n) {
          tg(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          tT(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = tx(t.tagName)), super.mount(t);
        }
      }
      let ru = (t, e) =>
        D(t)
          ? new rl(e, { enableHardwareAcceleration: !1 })
          : new ra(e, { enableHardwareAcceleration: !0 });
      function rh(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rd = {
          correct(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tt.test(t)) return t;
              t = parseFloat(t);
            }
            let i = rh(t, e.target.x),
              n = rh(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        rc = "_$css";
      class rp extends l.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(R, rm),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (P.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    ep.postRender(() => {
                      var t;
                      (null === (t = s.getStack()) || void 0 === t
                        ? void 0
                        : t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            !t.currentAnimation && t.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            (null == e ? void 0 : e.group) && e.group.remove(n),
            (null == i ? void 0 : i.deregister) && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          null == t || t();
        }
        render() {
          return null;
        }
      }
      let rm = {
          borderRadius: {
            ...rd,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rd,
          borderTopRightRadius: rd,
          borderBottomLeftRadius: rd,
          borderBottomRightRadius: rd,
          boxShadow: {
            correct(t, { treeScale: e, projectionDelta: i }) {
              let n = t,
                r = t.includes("var("),
                s = [];
              r && (t = t.replace(nG, (t) => (s.push(t), rc)));
              let o = eN.parse(t);
              if (o.length > 5) return n;
              let a = eN.createTransformer(t),
                l = "number" != typeof o[0] ? 1 : 0,
                u = i.x.scale * e.x,
                h = i.y.scale * e.y;
              (o[0 + l] /= u), (o[1 + l] /= h);
              let d = ii(u, h, 0.5);
              "number" == typeof o[2 + l] && (o[2 + l] /= d),
                "number" == typeof o[3 + l] && (o[3 + l] /= d);
              let c = a(o);
              if (r) {
                let p = 0;
                c = c.replace(rc, () => {
                  let t = s[p];
                  return p++, t;
                });
              }
              return c;
            },
          },
        },
        rf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rv = rf.length,
        rg = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ry = (t) => "number" == typeof t || tt.test(t);
      function rx(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rb = rV(0, 0.5, iV),
        rw = rV(0.5, 0.95, iy);
      function rV(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(im(t, e, n)));
      }
      function rA(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rT(t, e) {
        rA(t.x, e.x), rA(t.y, e.y);
      }
      function rP(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function rE(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (Q.test(e)) {
            e = parseFloat(e);
            let a = ii(o.min, o.max, e / 100);
            e = a - o.min;
          }
          if ("number" != typeof e) return;
          let l = ii(s.min, s.max, n);
          t === s && (l -= e),
            (t.min = rP(t.min, e, i, l, r)),
            (t.max = rP(t.max, e, i, l, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let rS = ["x", "scaleX", "originX"],
        rC = ["y", "scaleY", "originY"];
      function rM(t, e, i, n) {
        rE(t.x, e, rS, null == i ? void 0 : i.x, null == n ? void 0 : n.x),
          rE(t.y, e, rC, null == i ? void 0 : i.y, null == n ? void 0 : n.y);
      }
      function rk(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rB(t) {
        return rk(t.x) && rk(t.y);
      }
      function rD(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function rR(t) {
        return nd(t.x) / nd(t.y);
      }
      class rL {
        constructor() {
          this.members = [];
        }
        add(t) {
          ex(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (eb(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let n = i; n >= 0; n--) {
            let r = this.members[n];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          var i;
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              (null === (i = t.root) || void 0 === i ? void 0 : i.isUpdating) &&
                (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            var e, i, n, r, s;
            null === (i = (e = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(e),
              null ===
                (s =
                  null === (n = t.resumingFrom) || void 0 === n
                    ? void 0
                    : (r = n.options).onExitComplete) ||
                void 0 === s ||
                s.call(r);
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rF(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: o, rotateX: a, rotateY: l } = i;
          o && (n += `rotate(${o}deg) `),
            a && (n += `rotateX(${a}deg) `),
            l && (n += `rotateY(${l}deg) `);
        }
        let u = t.x.scale * e.x,
          h = t.y.scale * e.y;
        return (1 !== u || 1 !== h) && (n += `scale(${u}, ${h})`), n || "none";
      }
      let rj = (t, e) => t.depth - e.depth;
      class rI {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          ex(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          eb(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rj),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let rO = ["", "X", "Y", "Z"],
        rU = 0;
      function rN({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t, i = {}, n = null == e ? void 0 : e()) {
            (this.id = rU++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(rW),
                  this.nodes.forEach(rq),
                  this.nodes.forEach(rZ);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = i),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (let r = 0; r < this.path.length; r++)
              this.path[r].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rI());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new ew()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            null == i || i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e);
          }
          mount(e, i = !1) {
            var n;
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: s, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              null === (n = this.parent) ||
                void 0 === n ||
                n.children.add(this),
              this.elementId && this.root.potentialNodes.delete(this.elementId),
              i && (s || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let a;
              let l = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  a && a(),
                  (a = iH(l, 250)),
                  P.hasAnimatedSinceResize &&
                    ((P.hasAnimatedSinceResize = !1), this.nodes.forEach(rG));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                o &&
                (r || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    var r, s, a, l, u;
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let h =
                        null !==
                          (s =
                            null !== (r = this.options.transition) &&
                            void 0 !== r
                              ? r
                              : o.getDefaultTransition()) && void 0 !== s
                          ? s
                          : r1,
                      {
                        onLayoutAnimationStart: d,
                        onLayoutAnimationComplete: c,
                      } = o.getProps(),
                      p = !this.targetLayout || !rD(this.targetLayout, n) || i,
                      m = !e && i;
                    if (
                      (null === (a = this.resumeFrom) || void 0 === a
                        ? void 0
                        : a.instance) ||
                      m ||
                      (e && (p || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, m);
                      let f = { ...i0(h, "layout"), onPlay: d, onComplete: c };
                      o.shouldReduceMotion && ((f.delay = 0), (f.type = !1)),
                        this.startAnimation(f);
                    } else
                      e || 0 !== this.animationProgress || rG(this),
                        this.isLead() &&
                          (null === (u = (l = this.options).onExitComplete) ||
                            void 0 === u ||
                            u.call(l));
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (t = this.getStack()) || void 0 === t || t.remove(this),
              null === (e = this.parent) ||
                void 0 === e ||
                e.children.delete(this),
              (this.instance = void 0),
              em.preRender(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            var t;
            return (
              this.isAnimationBlocked ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            var t;
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              null === (t = this.nodes) || void 0 === t || t.forEach(r_),
              this.animationId++);
          }
          willUpdate(t = !0) {
            var e, i, n;
            if (this.root.isUpdateBlocked()) {
              null === (i = (e = this.options).onExitComplete) ||
                void 0 === i ||
                i.call(e);
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let r = 0; r < this.path.length; r++) {
              let s = this.path[r];
              (s.shouldResetTransform = !0), s.updateScroll("snapshot");
            }
            let { layoutId: o, layout: a } = this.options;
            if (void 0 === o && !a) return;
            let l =
              null === (n = this.options.visualElement) || void 0 === n
                ? void 0
                : n.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              null == l ? void 0 : l(this.latestValues, "")),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rY);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(r5), this.potentialNodes.clear()),
              this.nodes.forEach(rX),
              this.nodes.forEach(r$),
              this.nodes.forEach(rz),
              this.clearAllSnapshots(),
              ef.update(),
              ef.preRender(),
              ef.render());
          }
          clearAllSnapshots() {
            this.nodes.forEach(rH), this.sharedNodes.forEach(rK);
          }
          scheduleUpdateProjection() {
            ep.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            ep.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            var t;
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let i = this.path[e];
                i.updateScroll();
              }
            let n = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = nP()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox),
              null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.notify(
                  "LayoutMeasure",
                  this.layout.layoutBox,
                  null == n ? void 0 : n.layoutBox
                );
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            var t;
            if (!r) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              i = this.projectionDelta && !rB(this.projectionDelta),
              n =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate,
              s = null == n ? void 0 : n(this.latestValues, ""),
              o = s !== this.prevTransformTemplateValue;
            e &&
              (i || nk(this.latestValues) || o) &&
              (r(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              r2((e = n).x),
              r2(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return nP();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (nj(e.x, i.offset.x), nj(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = nP();
            rT(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  rT(e, t);
                  let { scroll: o } = this.root;
                  o && (nj(e.x, -o.offset.x), nj(e.y, -o.offset.y));
                }
                nj(e.x, r.offset.x), nj(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = nP();
            rT(i, t);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                nN(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                nk(r.latestValues) && nN(i, r.latestValues);
            }
            return nk(this.latestValues) && nN(i, this.latestValues), i;
          }
          removeTransform(t) {
            var e;
            let i = nP();
            rT(i, t);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n];
              if (!r.instance || !nk(r.latestValues)) continue;
              nM(r.latestValues) && r.updateSnapshot();
              let s = nP(),
                o = r.measurePageBox();
              rT(s, o),
                rM(
                  i,
                  r.latestValues,
                  null === (e = r.snapshot) || void 0 === e
                    ? void 0
                    : e.layoutBox,
                  s
                );
            }
            return nk(this.latestValues) && rM(i, this.latestValues), i;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              (this.isProjectionDirty = !0),
              this.root.scheduleUpdateProjection();
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          resolveTargetDelta() {
            var t, e, i, n;
            let r = this.getLead();
            if (
              (this.isProjectionDirty ||
                (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
            )
              return;
            let { layout: s, layoutId: o } = this.options;
            if (this.layout && (s || o)) {
              if (!this.targetDelta && !this.relativeTarget) {
                let a = this.getClosestProjectingParent();
                a && a.layout
                  ? ((this.relativeParent = a),
                    (this.relativeTarget = nP()),
                    (this.relativeTargetOrigin = nP()),
                    ng(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      a.layout.layoutBox
                    ),
                    rT(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (
                (this.relativeTarget || this.targetDelta) &&
                ((this.target ||
                  ((this.target = nP()), (this.targetWithTransforms = nP())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target))
                  ? ((e = this.target),
                    (i = this.relativeTarget),
                    (n = this.relativeParent.target),
                    nf(e.x, i.x, n.x),
                    nf(e.y, i.y, n.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox
                        ))
                      : rT(this.target, this.layout.layoutBox),
                    nL(this.target, this.targetDelta))
                  : rT(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let l = this.getClosestProjectingParent();
                l &&
                Boolean(l.resumingFrom) === Boolean(this.resumingFrom) &&
                !l.options.layoutScroll &&
                l.target
                  ? ((this.relativeParent = l),
                    (this.relativeTarget = nP()),
                    (this.relativeTargetOrigin = nP()),
                    ng(this.relativeTargetOrigin, this.target, l.target),
                    rT(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                nM(this.parent.latestValues) ||
                nB(this.parent.latestValues)
              )
            )
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          calcProjection() {
            var t;
            let { isProjectionDirty: e, isTransformDirty: i } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            let n = this.getLead(),
              r = Boolean(this.resumingFrom) || this !== n,
              s = !0;
            if ((e && (s = !1), r && i && (s = !1), s)) return;
            let { layout: o, layoutId: a } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(o || a))
            )
              return;
            rT(this.layoutCorrected, this.layout.layoutBox),
              (function (t, e, i, n = !1) {
                var r, s;
                let o, a;
                let l = i.length;
                if (l) {
                  e.x = e.y = 1;
                  for (let u = 0; u < l; u++)
                    (a = (o = i[u]).projectionDelta),
                      (null ===
                        (s =
                          null === (r = o.instance) || void 0 === r
                            ? void 0
                            : r.style) || void 0 === s
                        ? void 0
                        : s.display) !== "contents" &&
                        (n &&
                          o.options.layoutScroll &&
                          o.scroll &&
                          o !== o.root &&
                          nN(t, {
                            x: -o.scroll.offset.x,
                            y: -o.scroll.offset.y,
                          }),
                        a && ((e.x *= a.x.scale), (e.y *= a.y.scale), nL(t, a)),
                        n && nk(o.latestValues) && nN(t, o.latestValues));
                  (e.x = nF(e.x)), (e.y = nF(e.y));
                }
              })(this.layoutCorrected, this.treeScale, this.path, r);
            let { target: l } = n;
            if (!l) return;
            this.projectionDelta ||
              ((this.projectionDelta = nA()),
              (this.projectionDeltaWithTransform = nA()));
            let u = this.treeScale.x,
              h = this.treeScale.y,
              d = this.projectionTransform;
            nm(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = rF(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== d ||
                this.treeScale.x !== u ||
                this.treeScale.y !== h) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e, i, n;
            null === (i = (e = this.options).scheduleRender) ||
              void 0 === i ||
              i.call(e),
              t &&
                (null === (n = this.getStack()) ||
                  void 0 === n ||
                  n.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            var i, n;
            let r = this.snapshot,
              s = (null == r ? void 0 : r.latestValues) || {},
              o = { ...this.latestValues },
              a = nA();
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let l = nP(),
              u =
                (null == r ? void 0 : r.source) !==
                (null === (i = this.layout) || void 0 === i
                  ? void 0
                  : i.source),
              h =
                1 >=
                ((null === (n = this.getStack()) || void 0 === n
                  ? void 0
                  : n.members.length) || 0),
              d = Boolean(
                u && !h && !0 === this.options.crossfade && !this.path.some(r0)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var i, n, r;
                let c = e / 1e3;
                rJ(a.x, t.x, c),
                  rJ(a.y, t.y, c),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    (null === (i = this.relativeParent) || void 0 === i
                      ? void 0
                      : i.layout) &&
                    (ng(
                      l,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (n = this.relativeTarget),
                    (r = this.relativeTargetOrigin),
                    rQ(n.x, r.x, l.x, c),
                    rQ(n.y, r.y, l.y, c)),
                  u &&
                    ((this.animationValues = o),
                    (function (t, e, i, n, r, s) {
                      r
                        ? ((t.opacity = ii(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            rb(n)
                          )),
                          (t.opacityExit = ii(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            rw(n)
                          )))
                        : s &&
                          (t.opacity = ii(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            n
                          ));
                      for (let o = 0; o < rv; o++) {
                        let a = `border${rf[o]}Radius`,
                          l = rx(e, a),
                          u = rx(i, a);
                        if (void 0 === l && void 0 === u) continue;
                        l || (l = 0), u || (u = 0);
                        let h = 0 === l || 0 === u || ry(l) === ry(u);
                        h
                          ? ((t[a] = Math.max(ii(rg(l), rg(u), n), 0)),
                            (Q.test(u) || Q.test(l)) && (t[a] += "%"))
                          : (t[a] = u);
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = ii(e.rotate || 0, i.rotate || 0, n));
                    })(o, s, this.latestValues, c, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = c);
              }),
              this.mixTargetDelta(0);
          }
          startAnimation(t) {
            var e, i;
            this.notifyListeners("animationStart"),
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
              this.resumingFrom &&
                (null === (i = this.resumingFrom.currentAnimation) ||
                  void 0 === i ||
                  i.stop()),
              this.pendingAnimation &&
                (em.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = ep.update(() => {
                (P.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i = {}) {
                    let n = I(t) ? t : eP(t);
                    return (
                      n.start(i4("", n, 1e3, i)),
                      {
                        stop: () => n.stop(),
                        isAnimating: () => n.isAnimating(),
                      }
                    );
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      var i;
                      this.mixTargetDelta(e),
                        null === (i = t.onUpdate) ||
                          void 0 === i ||
                          i.call(t, e);
                    },
                    onComplete: () => {
                      var e;
                      null === (e = t.onComplete) || void 0 === e || e.call(t),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            var t;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (t = this.getStack()) ||
                void 0 === t ||
                t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            var t;
            this.currentAnimation &&
              (null === (t = this.mixTargetDelta) ||
                void 0 === t ||
                t.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                r3(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || nP();
                let s = nd(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + s);
                let o = nd(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + o);
              }
              rT(e, i),
                nN(e, r),
                nm(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            var i, n, r;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rL());
            let s = this.sharedNodes.get(t);
            s.add(e),
              e.promote({
                transition:
                  null === (i = e.options.initialPromotionConfig) ||
                  void 0 === i
                    ? void 0
                    : i.transition,
                preserveFollowOpacity:
                  null ===
                    (r =
                      null === (n = e.options.initialPromotionConfig) ||
                      void 0 === n
                        ? void 0
                        : n.shouldPreserveFollowOpacity) || void 0 === r
                    ? void 0
                    : r.call(n, e),
              });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let r = 0; r < rO.length; r++) {
              let s = "rotate" + rO[r];
              i[s] && ((n[s] = i[s]), t.setStaticValue(s, 0));
            }
            for (let o in (null == t || t.render(), n))
              t.setStaticValue(o, n[o]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i, n;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return { visibility: "hidden" };
            r.visibility = "";
            let s =
              null === (e = this.options.visualElement) || void 0 === e
                ? void 0
                : e.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tB(t.pointerEvents) || ""),
                (r.transform = s ? s(this.latestValues, "") : "none"),
                r
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let a = {};
              return (
                this.options.layoutId &&
                  ((a.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (a.pointerEvents = tB(t.pointerEvents) || "")),
                this.hasProjected &&
                  !nk(this.latestValues) &&
                  ((a.transform = s ? s({}, "") : "none"),
                  (this.hasProjected = !1)),
                a
              );
            }
            let l = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rF(
                this.projectionDeltaWithTransform,
                this.treeScale,
                l
              )),
              s && (r.transform = s(l, r.transform));
            let { x: u, y: h } = this.projectionDelta;
            for (let d in ((r.transformOrigin = `${100 * u.origin}% ${
              100 * h.origin
            }% 0`),
            o.animationValues
              ? (r.opacity =
                  o === this
                    ? null !==
                        (n =
                          null !== (i = l.opacity) && void 0 !== i
                            ? i
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : l.opacityExit)
              : (r.opacity =
                  o === this
                    ? void 0 !== l.opacity
                      ? l.opacity
                      : ""
                    : void 0 !== l.opacityExit
                    ? l.opacityExit
                    : 0),
            R)) {
              if (void 0 === l[d]) continue;
              let { correct: c, applyTo: p } = R[d],
                m = c(l[d], o);
              if (p) {
                let f = p.length;
                for (let v = 0; v < f; v++) r[p[v]] = m;
              } else r[d] = m;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  o === this ? tB(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rY),
              this.root.sharedNodes.clear();
          }
        };
      }
      function r$(t) {
        t.updateLayout();
      }
      function rz(t) {
        var e, i, n;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: s, measuredBox: o } = t.layout,
            { animationType: a } = t.options,
            l = r.source !== t.layout.source;
          "size" === a
            ? nE((t) => {
                let e = l ? r.measuredBox[t] : r.layoutBox[t],
                  i = nd(e);
                (e.min = s[t].min), (e.max = e.min + i);
              })
            : r3(a, r.layoutBox, s) &&
              nE((t) => {
                let e = l ? r.measuredBox[t] : r.layoutBox[t],
                  i = nd(s[t]);
                e.max = e.min + i;
              });
          let u = nA();
          nm(u, s, r.layoutBox);
          let h = nA();
          l
            ? nm(h, t.applyTransform(o, !0), r.measuredBox)
            : nm(h, s, r.layoutBox);
          let d = !rB(u),
            c = !1;
          if (!t.resumeFrom) {
            let p = t.getClosestProjectingParent();
            if (p && !p.resumeFrom) {
              let { snapshot: m, layout: f } = p;
              if (m && f) {
                let v = nP();
                ng(v, r.layoutBox, m.layoutBox);
                let g = nP();
                ng(g, s, f.layoutBox), rD(v, g) || (c = !0);
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: r,
            delta: h,
            layoutDelta: u,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: c,
          });
        } else
          t.isLead() &&
            (null === (n = (i = t.options).onExitComplete) ||
              void 0 === n ||
              n.call(i));
        t.options.transition = void 0;
      }
      function rW(t) {
        t.isProjectionDirty ||
          (t.isProjectionDirty = Boolean(
            t.parent && t.parent.isProjectionDirty
          )),
          t.isTransformDirty ||
            (t.isTransformDirty = Boolean(
              t.parent && t.parent.isTransformDirty
            ));
      }
      function rH(t) {
        t.clearSnapshot();
      }
      function rY(t) {
        t.clearMeasurements();
      }
      function rX(t) {
        let { visualElement: e } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function rG(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function rq(t) {
        t.resolveTargetDelta();
      }
      function rZ(t) {
        t.calcProjection();
      }
      function r_(t) {
        t.resetRotation();
      }
      function rK(t) {
        t.removeLeadSnapshot();
      }
      function rJ(t, e, i) {
        (t.translate = ii(e.translate, 0, i)),
          (t.scale = ii(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rQ(t, e, i, n) {
        (t.min = ii(e.min, i.min, n)), (t.max = ii(e.max, i.max, n));
      }
      function r0(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let r1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function r5(t, e) {
        let i = t.root;
        for (let n = t.path.length - 1; n >= 0; n--)
          if (Boolean(t.path[n].instance)) {
            i = t.path[n];
            break;
          }
        let r = i && i !== t.root ? i.instance : document,
          s = r.querySelector(`[data-projection-id="${e}"]`);
        s && t.mount(s, !0);
      }
      function r2(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function r3(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !nc(rR(e), rR(i), 0.2))
        );
      }
      let r9 = rN({
          attachResizeListener: (t, e) => tF(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        r4 = { current: void 0 },
        r6 = rN({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent() {
            if (!r4.current) {
              let t = new r9(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (r4.current = t);
            }
            return r4.current;
          },
          resetTransform(t, e) {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        }),
        r7 = {
          ...nr,
          ...t8,
          ...nY,
          measureLayout: function (t) {
            let [e, i] = et(),
              n = (0, l.useContext)(S);
            return l.createElement(rp, {
              ...t,
              layoutGroup: n,
              switchLayoutGroup: (0, l.useContext)(M),
              isPresent: e,
              safeToRemove: i,
            });
          },
        },
        r8 = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              projectionNodeConstructor: i,
              useRender: n,
              useVisualState: r,
              Component: s,
            }) {
              t &&
                (function (t) {
                  for (let e in t)
                    "projectionNodeConstructor" === e
                      ? (A.projectionNodeConstructor = t[e])
                      : (A[e].Component = t[e]);
                })(t);
              let o = (0, l.forwardRef)(function (o, a) {
                var g, y;
                let b = {
                    ...(0, l.useContext)(u),
                    ...o,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, l.useContext)(S).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(o),
                  },
                  { isStatic: V } = b,
                  k = null,
                  B = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (x(t)) {
                        let { initial: i, animate: n } = t;
                        return {
                          initial: !1 === i || v(i) ? i : void 0,
                          animate: v(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(h));
                    return (0, l.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [w(e), w(i)]
                    );
                  })(o),
                  D = V
                    ? void 0
                    : T(() => {
                        if (P.hasEverUpdated) return E++;
                      }),
                  R = r(o, V);
                if (!V && c) {
                  B.visualElement = (function (t, e, i, n) {
                    let r = (0, l.useContext)(h).visualElement,
                      s = (0, l.useContext)(m),
                      o = (0, l.useContext)(d),
                      a = (0, l.useContext)(u).reducedMotion,
                      c = (0, l.useRef)();
                    (n = n || s.renderer),
                      !c.current &&
                        n &&
                        (c.current = n(t, {
                          visualState: e,
                          parent: r,
                          props: i,
                          presenceId: o ? o.id : void 0,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: a,
                        }));
                    let f = c.current;
                    return (
                      p(() => {
                        f && f.render();
                      }),
                      p(() => {
                        f &&
                          f.animationState &&
                          f.animationState.animateChanges();
                      }),
                      p(() => () => f && f.notify("Unmount"), []),
                      f
                    );
                  })(s, R, b, e);
                  let L = (0, l.useContext)(m).strict,
                    F = (0, l.useContext)(M);
                  B.visualElement &&
                    (k = B.visualElement.loadFeatures(
                      b,
                      L,
                      t,
                      D,
                      i || A.projectionNodeConstructor,
                      F
                    ));
                }
                return l.createElement(
                  C,
                  { visualElement: B.visualElement, props: b },
                  k,
                  l.createElement(
                    h.Provider,
                    { value: B },
                    n(
                      s,
                      o,
                      D,
                      ((g = B.visualElement),
                      (y = a),
                      (0, l.useCallback)(
                        (t) => {
                          t && R.mount && R.mount(t),
                            g && (t ? g.mount(t) : g.unmount()),
                            y &&
                              ("function" == typeof y
                                ? y(t)
                                : f(y) && (y.current = t));
                        },
                        [g]
                      )),
                      R,
                      V,
                      B.visualElement
                    )
                  )
                );
              });
              return (o[k] = s), o;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n, r) {
            let s = D(t) ? tR : tL;
            return {
              ...s,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, n, r, { latestValues: s }, o) => {
                  let a = D(e) ? tb : tu,
                    u = a(i, s, o, e),
                    h = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        (tc(r) ||
                          (!0 === i && td(r)) ||
                          (!e && !td(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    d = { ...h, ...u, ref: r };
                  return (
                    n && (d["data-projection-id"] = n),
                    (0, l.createElement)(e, d)
                  );
                };
                return e;
              })(e),
              createVisualElement: n,
              projectionNodeConstructor: r,
              Component: t,
            };
          })(t, e, r7, ru, r6)
        );
    },
  },
]);
