var lu = Object.defineProperty;
var _i = (n) => {
  throw TypeError(n);
};
var su = (n, e, t) => e in n ? lu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ke = (n, e, t) => su(n, typeof e != "symbol" ? e + "" : e, t), ou = (n, e, t) => e.has(n) || _i("Cannot " + t);
var vi = (n, e, t) => e.has(n) ? _i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var br = (n, e, t) => (ou(n, e, "access private method"), t);
const {
  SvelteComponent: uu,
  assign: cu,
  children: hu,
  claim_element: mu,
  create_slot: du,
  detach: bi,
  element: fu,
  get_all_dirty_from_scope: pu,
  get_slot_changes: gu,
  get_spread_update: _u,
  init: vu,
  insert_hydration: bu,
  safe_not_equal: yu,
  set_dynamic_element_data: yi,
  set_style: Ge,
  toggle_class: ft,
  transition_in: us,
  transition_out: cs,
  update_slot_base: wu
} = window.__gradio__svelte__internal;
function xu(n) {
  let e, t, r;
  const a = (
    /*#slots*/
    n[22].default
  ), i = du(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      n[10]
    ) },
    { id: (
      /*elem_id*/
      n[5]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[6].join(" ") + " svelte-1ezsyiy"
    }
  ], s = {};
  for (let o = 0; o < l.length; o += 1)
    s = cu(s, l[o]);
  return {
    c() {
      e = fu(
        /*tag*/
        n[18]
      ), i && i.c(), this.h();
    },
    l(o) {
      e = mu(
        o,
        /*tag*/
        (n[18] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0
        }
      );
      var h = hu(e);
      i && i.l(h), h.forEach(bi), this.h();
    },
    h() {
      yi(
        /*tag*/
        n[18]
      )(e, s), ft(
        e,
        "hidden",
        /*visible*/
        n[13] === !1
      ), ft(
        e,
        "padded",
        /*padding*/
        n[9]
      ), ft(
        e,
        "flex",
        /*flex*/
        n[0]
      ), ft(
        e,
        "border_focus",
        /*border_mode*/
        n[8] === "focus"
      ), ft(
        e,
        "border_contrast",
        /*border_mode*/
        n[8] === "contrast"
      ), ft(e, "hide-container", !/*explicit_call*/
      n[11] && !/*container*/
      n[12]), Ge(
        e,
        "height",
        /*get_dimension*/
        n[19](
          /*height*/
          n[1]
        )
      ), Ge(
        e,
        "min-height",
        /*get_dimension*/
        n[19](
          /*min_height*/
          n[2]
        )
      ), Ge(
        e,
        "max-height",
        /*get_dimension*/
        n[19](
          /*max_height*/
          n[3]
        )
      ), Ge(e, "width", typeof /*width*/
      n[4] == "number" ? `calc(min(${/*width*/
      n[4]}px, 100%))` : (
        /*get_dimension*/
        n[19](
          /*width*/
          n[4]
        )
      )), Ge(
        e,
        "border-style",
        /*variant*/
        n[7]
      ), Ge(
        e,
        "overflow",
        /*allow_overflow*/
        n[14] ? (
          /*overflow_behavior*/
          n[15]
        ) : "hidden"
      ), Ge(
        e,
        "flex-grow",
        /*scale*/
        n[16]
      ), Ge(e, "min-width", `calc(min(${/*min_width*/
      n[17]}px, 100%))`), Ge(e, "border-width", "var(--block-border-width)");
    },
    m(o, h) {
      bu(o, e, h), i && i.m(e, null), r = !0;
    },
    p(o, h) {
      i && i.p && (!r || h & /*$$scope*/
      2097152) && wu(
        i,
        a,
        o,
        /*$$scope*/
        o[21],
        r ? gu(
          a,
          /*$$scope*/
          o[21],
          h,
          null
        ) : pu(
          /*$$scope*/
          o[21]
        ),
        null
      ), yi(
        /*tag*/
        o[18]
      )(e, s = _u(l, [
        (!r || h & /*test_id*/
        1024) && { "data-testid": (
          /*test_id*/
          o[10]
        ) },
        (!r || h & /*elem_id*/
        32) && { id: (
          /*elem_id*/
          o[5]
        ) },
        (!r || h & /*elem_classes*/
        64 && t !== (t = "block " + /*elem_classes*/
        o[6].join(" ") + " svelte-1ezsyiy")) && { class: t }
      ])), ft(
        e,
        "hidden",
        /*visible*/
        o[13] === !1
      ), ft(
        e,
        "padded",
        /*padding*/
        o[9]
      ), ft(
        e,
        "flex",
        /*flex*/
        o[0]
      ), ft(
        e,
        "border_focus",
        /*border_mode*/
        o[8] === "focus"
      ), ft(
        e,
        "border_contrast",
        /*border_mode*/
        o[8] === "contrast"
      ), ft(e, "hide-container", !/*explicit_call*/
      o[11] && !/*container*/
      o[12]), h & /*height*/
      2 && Ge(
        e,
        "height",
        /*get_dimension*/
        o[19](
          /*height*/
          o[1]
        )
      ), h & /*min_height*/
      4 && Ge(
        e,
        "min-height",
        /*get_dimension*/
        o[19](
          /*min_height*/
          o[2]
        )
      ), h & /*max_height*/
      8 && Ge(
        e,
        "max-height",
        /*get_dimension*/
        o[19](
          /*max_height*/
          o[3]
        )
      ), h & /*width*/
      16 && Ge(e, "width", typeof /*width*/
      o[4] == "number" ? `calc(min(${/*width*/
      o[4]}px, 100%))` : (
        /*get_dimension*/
        o[19](
          /*width*/
          o[4]
        )
      )), h & /*variant*/
      128 && Ge(
        e,
        "border-style",
        /*variant*/
        o[7]
      ), h & /*allow_overflow, overflow_behavior*/
      49152 && Ge(
        e,
        "overflow",
        /*allow_overflow*/
        o[14] ? (
          /*overflow_behavior*/
          o[15]
        ) : "hidden"
      ), h & /*scale*/
      65536 && Ge(
        e,
        "flex-grow",
        /*scale*/
        o[16]
      ), h & /*min_width*/
      131072 && Ge(e, "min-width", `calc(min(${/*min_width*/
      o[17]}px, 100%))`);
    },
    i(o) {
      r || (us(i, o), r = !0);
    },
    o(o) {
      cs(i, o), r = !1;
    },
    d(o) {
      o && bi(e), i && i.d(o);
    }
  };
}
function ku(n) {
  let e, t = (
    /*tag*/
    n[18] && xu(n)
  );
  return {
    c() {
      t && t.c();
    },
    l(r) {
      t && t.l(r);
    },
    m(r, a) {
      t && t.m(r, a), e = !0;
    },
    p(r, [a]) {
      /*tag*/
      r[18] && t.p(r, a);
    },
    i(r) {
      e || (us(t, r), e = !0);
    },
    o(r) {
      cs(t, r), e = !1;
    },
    d(r) {
      t && t.d(r);
    }
  };
}
function Du(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { height: i = void 0 } = e, { min_height: l = void 0 } = e, { max_height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: h = "" } = e, { elem_classes: d = [] } = e, { variant: p = "solid" } = e, { border_mode: g = "base" } = e, { padding: _ = !0 } = e, { type: E = "normal" } = e, { test_id: C = void 0 } = e, { explicit_call: $ = !1 } = e, { container: F = !0 } = e, { visible: w = !0 } = e, { allow_overflow: v = !0 } = e, { overflow_behavior: x = "auto" } = e, { scale: S = null } = e, { min_width: T = 0 } = e, { flex: M = !1 } = e;
  w || (M = !1);
  let L = E === "fieldset" ? "fieldset" : "div";
  const z = (B) => {
    if (B !== void 0) {
      if (typeof B == "number")
        return B + "px";
      if (typeof B == "string")
        return B;
    }
  };
  return n.$$set = (B) => {
    "height" in B && t(1, i = B.height), "min_height" in B && t(2, l = B.min_height), "max_height" in B && t(3, s = B.max_height), "width" in B && t(4, o = B.width), "elem_id" in B && t(5, h = B.elem_id), "elem_classes" in B && t(6, d = B.elem_classes), "variant" in B && t(7, p = B.variant), "border_mode" in B && t(8, g = B.border_mode), "padding" in B && t(9, _ = B.padding), "type" in B && t(20, E = B.type), "test_id" in B && t(10, C = B.test_id), "explicit_call" in B && t(11, $ = B.explicit_call), "container" in B && t(12, F = B.container), "visible" in B && t(13, w = B.visible), "allow_overflow" in B && t(14, v = B.allow_overflow), "overflow_behavior" in B && t(15, x = B.overflow_behavior), "scale" in B && t(16, S = B.scale), "min_width" in B && t(17, T = B.min_width), "flex" in B && t(0, M = B.flex), "$$scope" in B && t(21, a = B.$$scope);
  }, [
    M,
    i,
    l,
    s,
    o,
    h,
    d,
    p,
    g,
    _,
    C,
    $,
    F,
    w,
    v,
    x,
    S,
    T,
    L,
    z,
    E,
    a,
    r
  ];
}
class Su extends uu {
  constructor(e) {
    super(), vu(this, e, Du, ku, yu, {
      height: 1,
      min_height: 2,
      max_height: 3,
      width: 4,
      elem_id: 5,
      elem_classes: 6,
      variant: 7,
      border_mode: 8,
      padding: 9,
      type: 20,
      test_id: 10,
      explicit_call: 11,
      container: 12,
      visible: 13,
      allow_overflow: 14,
      overflow_behavior: 15,
      scale: 16,
      min_width: 17,
      flex: 0
    });
  }
}
const Au = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], wi = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Au.reduce(
  (n, { color: e, primary: t, secondary: r }) => ({
    ...n,
    [e]: {
      primary: wi[e][t],
      secondary: wi[e][r]
    }
  }),
  {}
);
const {
  SvelteComponent: Pd,
  append_hydration: Hd,
  attr: Ud,
  children: Gd,
  claim_svg_element: Vd,
  detach: Wd,
  init: jd,
  insert_hydration: Xd,
  noop: Yd,
  safe_not_equal: Zd,
  svg_element: Kd
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qd,
  append_hydration: Jd,
  attr: e2,
  children: t2,
  claim_svg_element: r2,
  detach: n2,
  init: a2,
  insert_hydration: i2,
  noop: l2,
  safe_not_equal: s2,
  svg_element: o2
} = window.__gradio__svelte__internal, {
  SvelteComponent: u2,
  append_hydration: c2,
  attr: h2,
  children: m2,
  claim_svg_element: d2,
  detach: f2,
  init: p2,
  insert_hydration: g2,
  noop: _2,
  safe_not_equal: v2,
  svg_element: b2
} = window.__gradio__svelte__internal, {
  SvelteComponent: y2,
  append_hydration: w2,
  attr: x2,
  children: k2,
  claim_svg_element: D2,
  detach: S2,
  init: A2,
  insert_hydration: $2,
  noop: E2,
  safe_not_equal: F2,
  svg_element: C2
} = window.__gradio__svelte__internal, {
  SvelteComponent: T2,
  append_hydration: M2,
  attr: z2,
  children: B2,
  claim_svg_element: N2,
  detach: q2,
  init: R2,
  insert_hydration: I2,
  noop: L2,
  safe_not_equal: O2,
  svg_element: P2
} = window.__gradio__svelte__internal, {
  SvelteComponent: H2,
  append_hydration: U2,
  attr: G2,
  children: V2,
  claim_svg_element: W2,
  detach: j2,
  init: X2,
  insert_hydration: Y2,
  noop: Z2,
  safe_not_equal: K2,
  svg_element: Q2
} = window.__gradio__svelte__internal, {
  SvelteComponent: J2,
  append_hydration: ef,
  attr: tf,
  children: rf,
  claim_svg_element: nf,
  detach: af,
  init: lf,
  insert_hydration: sf,
  noop: of,
  safe_not_equal: uf,
  svg_element: cf
} = window.__gradio__svelte__internal, {
  SvelteComponent: hf,
  append_hydration: mf,
  attr: df,
  children: ff,
  claim_svg_element: pf,
  detach: gf,
  init: _f,
  insert_hydration: vf,
  noop: bf,
  safe_not_equal: yf,
  svg_element: wf
} = window.__gradio__svelte__internal, {
  SvelteComponent: xf,
  append_hydration: kf,
  attr: Df,
  children: Sf,
  claim_svg_element: Af,
  detach: $f,
  init: Ef,
  insert_hydration: Ff,
  noop: Cf,
  safe_not_equal: Tf,
  svg_element: Mf
} = window.__gradio__svelte__internal, {
  SvelteComponent: zf,
  append_hydration: Bf,
  attr: Nf,
  children: qf,
  claim_svg_element: Rf,
  detach: If,
  init: Lf,
  insert_hydration: Of,
  noop: Pf,
  safe_not_equal: Hf,
  svg_element: Uf
} = window.__gradio__svelte__internal, {
  SvelteComponent: $u,
  append_hydration: Dn,
  attr: At,
  children: yr,
  claim_svg_element: wr,
  detach: X0,
  init: Eu,
  insert_hydration: Fu,
  noop: Sn,
  safe_not_equal: Cu,
  set_style: Rt,
  svg_element: xr
} = window.__gradio__svelte__internal;
function Tu(n) {
  let e, t, r, a;
  return {
    c() {
      e = xr("svg"), t = xr("g"), r = xr("path"), a = xr("path"), this.h();
    },
    l(i) {
      e = wr(i, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "xml:space": !0,
        stroke: !0,
        style: !0
      });
      var l = yr(e);
      t = wr(l, "g", { transform: !0 });
      var s = yr(t);
      r = wr(s, "path", { d: !0, style: !0 }), yr(r).forEach(X0), s.forEach(X0), a = wr(l, "path", { d: !0, style: !0 }), yr(a).forEach(X0), l.forEach(X0), this.h();
    },
    h() {
      At(r, "d", "M18,6L6.087,17.913"), Rt(r, "fill", "none"), Rt(r, "fill-rule", "nonzero"), Rt(r, "stroke-width", "2px"), At(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), At(a, "d", "M4.364,4.364L19.636,19.636"), Rt(a, "fill", "none"), Rt(a, "fill-rule", "nonzero"), Rt(a, "stroke-width", "2px"), At(e, "width", "100%"), At(e, "height", "100%"), At(e, "viewBox", "0 0 24 24"), At(e, "version", "1.1"), At(e, "xmlns", "http://www.w3.org/2000/svg"), At(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), At(e, "xml:space", "preserve"), At(e, "stroke", "currentColor"), Rt(e, "fill-rule", "evenodd"), Rt(e, "clip-rule", "evenodd"), Rt(e, "stroke-linecap", "round"), Rt(e, "stroke-linejoin", "round");
    },
    m(i, l) {
      Fu(i, e, l), Dn(e, t), Dn(t, r), Dn(e, a);
    },
    p: Sn,
    i: Sn,
    o: Sn,
    d(i) {
      i && X0(e);
    }
  };
}
class Mu extends $u {
  constructor(e) {
    super(), Eu(this, e, null, Tu, Cu, {});
  }
}
const {
  SvelteComponent: Gf,
  append_hydration: Vf,
  attr: Wf,
  children: jf,
  claim_svg_element: Xf,
  detach: Yf,
  init: Zf,
  insert_hydration: Kf,
  noop: Qf,
  safe_not_equal: Jf,
  svg_element: ep
} = window.__gradio__svelte__internal, {
  SvelteComponent: tp,
  append_hydration: rp,
  attr: np,
  children: ap,
  claim_svg_element: ip,
  detach: lp,
  init: sp,
  insert_hydration: op,
  noop: up,
  safe_not_equal: cp,
  svg_element: hp
} = window.__gradio__svelte__internal, {
  SvelteComponent: mp,
  append_hydration: dp,
  attr: fp,
  children: pp,
  claim_svg_element: gp,
  detach: _p,
  init: vp,
  insert_hydration: bp,
  noop: yp,
  safe_not_equal: wp,
  svg_element: xp
} = window.__gradio__svelte__internal, {
  SvelteComponent: kp,
  append_hydration: Dp,
  attr: Sp,
  children: Ap,
  claim_svg_element: $p,
  detach: Ep,
  init: Fp,
  insert_hydration: Cp,
  noop: Tp,
  safe_not_equal: Mp,
  svg_element: zp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bp,
  append_hydration: Np,
  attr: qp,
  children: Rp,
  claim_svg_element: Ip,
  detach: Lp,
  init: Op,
  insert_hydration: Pp,
  noop: Hp,
  safe_not_equal: Up,
  svg_element: Gp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vp,
  append_hydration: Wp,
  attr: jp,
  children: Xp,
  claim_svg_element: Yp,
  detach: Zp,
  init: Kp,
  insert_hydration: Qp,
  noop: Jp,
  safe_not_equal: e5,
  svg_element: t5
} = window.__gradio__svelte__internal, {
  SvelteComponent: r5,
  append_hydration: n5,
  attr: a5,
  children: i5,
  claim_svg_element: l5,
  detach: s5,
  init: o5,
  insert_hydration: u5,
  noop: c5,
  safe_not_equal: h5,
  svg_element: m5
} = window.__gradio__svelte__internal, {
  SvelteComponent: d5,
  append_hydration: f5,
  attr: p5,
  children: g5,
  claim_svg_element: _5,
  detach: v5,
  init: b5,
  insert_hydration: y5,
  noop: w5,
  safe_not_equal: x5,
  svg_element: k5
} = window.__gradio__svelte__internal, {
  SvelteComponent: D5,
  append_hydration: S5,
  attr: A5,
  children: $5,
  claim_svg_element: E5,
  detach: F5,
  init: C5,
  insert_hydration: T5,
  noop: M5,
  safe_not_equal: z5,
  svg_element: B5
} = window.__gradio__svelte__internal, {
  SvelteComponent: N5,
  append_hydration: q5,
  attr: R5,
  children: I5,
  claim_svg_element: L5,
  detach: O5,
  init: P5,
  insert_hydration: H5,
  noop: U5,
  safe_not_equal: G5,
  svg_element: V5
} = window.__gradio__svelte__internal, {
  SvelteComponent: W5,
  append_hydration: j5,
  attr: X5,
  children: Y5,
  claim_svg_element: Z5,
  detach: K5,
  init: Q5,
  insert_hydration: J5,
  noop: e3,
  safe_not_equal: t3,
  svg_element: r3
} = window.__gradio__svelte__internal, {
  SvelteComponent: n3,
  append_hydration: a3,
  attr: i3,
  children: l3,
  claim_svg_element: s3,
  detach: o3,
  init: u3,
  insert_hydration: c3,
  noop: h3,
  safe_not_equal: m3,
  svg_element: d3
} = window.__gradio__svelte__internal, {
  SvelteComponent: f3,
  append_hydration: p3,
  attr: g3,
  children: _3,
  claim_svg_element: v3,
  detach: b3,
  init: y3,
  insert_hydration: w3,
  noop: x3,
  safe_not_equal: k3,
  svg_element: D3
} = window.__gradio__svelte__internal, {
  SvelteComponent: S3,
  append_hydration: A3,
  attr: $3,
  children: E3,
  claim_svg_element: F3,
  detach: C3,
  init: T3,
  insert_hydration: M3,
  noop: z3,
  safe_not_equal: B3,
  svg_element: N3
} = window.__gradio__svelte__internal, {
  SvelteComponent: q3,
  append_hydration: R3,
  attr: I3,
  children: L3,
  claim_svg_element: O3,
  detach: P3,
  init: H3,
  insert_hydration: U3,
  noop: G3,
  safe_not_equal: V3,
  svg_element: W3
} = window.__gradio__svelte__internal, {
  SvelteComponent: j3,
  append_hydration: X3,
  attr: Y3,
  children: Z3,
  claim_svg_element: K3,
  detach: Q3,
  init: J3,
  insert_hydration: e6,
  noop: t6,
  safe_not_equal: r6,
  svg_element: n6
} = window.__gradio__svelte__internal, {
  SvelteComponent: a6,
  append_hydration: i6,
  attr: l6,
  children: s6,
  claim_svg_element: o6,
  detach: u6,
  init: c6,
  insert_hydration: h6,
  noop: m6,
  safe_not_equal: d6,
  svg_element: f6
} = window.__gradio__svelte__internal, {
  SvelteComponent: p6,
  append_hydration: g6,
  attr: _6,
  children: v6,
  claim_svg_element: b6,
  detach: y6,
  init: w6,
  insert_hydration: x6,
  noop: k6,
  safe_not_equal: D6,
  svg_element: S6
} = window.__gradio__svelte__internal, {
  SvelteComponent: A6,
  append_hydration: $6,
  attr: E6,
  children: F6,
  claim_svg_element: C6,
  detach: T6,
  init: M6,
  insert_hydration: z6,
  noop: B6,
  safe_not_equal: N6,
  svg_element: q6
} = window.__gradio__svelte__internal, {
  SvelteComponent: R6,
  append_hydration: I6,
  attr: L6,
  children: O6,
  claim_svg_element: P6,
  detach: H6,
  init: U6,
  insert_hydration: G6,
  noop: V6,
  safe_not_equal: W6,
  svg_element: j6
} = window.__gradio__svelte__internal, {
  SvelteComponent: X6,
  append_hydration: Y6,
  attr: Z6,
  children: K6,
  claim_svg_element: Q6,
  detach: J6,
  init: e7,
  insert_hydration: t7,
  noop: r7,
  safe_not_equal: n7,
  svg_element: a7
} = window.__gradio__svelte__internal, {
  SvelteComponent: i7,
  append_hydration: l7,
  attr: s7,
  children: o7,
  claim_svg_element: u7,
  detach: c7,
  init: h7,
  insert_hydration: m7,
  noop: d7,
  safe_not_equal: f7,
  svg_element: p7
} = window.__gradio__svelte__internal, {
  SvelteComponent: g7,
  append_hydration: _7,
  attr: v7,
  children: b7,
  claim_svg_element: y7,
  detach: w7,
  init: x7,
  insert_hydration: k7,
  noop: D7,
  safe_not_equal: S7,
  svg_element: A7
} = window.__gradio__svelte__internal, {
  SvelteComponent: $7,
  append_hydration: E7,
  attr: F7,
  children: C7,
  claim_svg_element: T7,
  detach: M7,
  init: z7,
  insert_hydration: B7,
  noop: N7,
  safe_not_equal: q7,
  svg_element: R7
} = window.__gradio__svelte__internal, {
  SvelteComponent: I7,
  append_hydration: L7,
  attr: O7,
  children: P7,
  claim_svg_element: H7,
  detach: U7,
  init: G7,
  insert_hydration: V7,
  noop: W7,
  safe_not_equal: j7,
  svg_element: X7
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y7,
  append_hydration: Z7,
  attr: K7,
  children: Q7,
  claim_svg_element: J7,
  detach: e8,
  init: t8,
  insert_hydration: r8,
  noop: n8,
  safe_not_equal: a8,
  svg_element: i8
} = window.__gradio__svelte__internal, {
  SvelteComponent: l8,
  append_hydration: s8,
  attr: o8,
  children: u8,
  claim_svg_element: c8,
  detach: h8,
  init: m8,
  insert_hydration: d8,
  noop: f8,
  safe_not_equal: p8,
  svg_element: g8
} = window.__gradio__svelte__internal, {
  SvelteComponent: _8,
  append_hydration: v8,
  attr: b8,
  children: y8,
  claim_svg_element: w8,
  detach: x8,
  init: k8,
  insert_hydration: D8,
  noop: S8,
  safe_not_equal: A8,
  svg_element: $8
} = window.__gradio__svelte__internal, {
  SvelteComponent: E8,
  append_hydration: F8,
  attr: C8,
  children: T8,
  claim_svg_element: M8,
  detach: z8,
  init: B8,
  insert_hydration: N8,
  noop: q8,
  safe_not_equal: R8,
  svg_element: I8
} = window.__gradio__svelte__internal, {
  SvelteComponent: L8,
  append_hydration: O8,
  attr: P8,
  children: H8,
  claim_svg_element: U8,
  detach: G8,
  init: V8,
  insert_hydration: W8,
  noop: j8,
  safe_not_equal: X8,
  set_style: Y8,
  svg_element: Z8
} = window.__gradio__svelte__internal, {
  SvelteComponent: K8,
  append_hydration: Q8,
  attr: J8,
  children: eg,
  claim_svg_element: tg,
  detach: rg,
  init: ng,
  insert_hydration: ag,
  noop: ig,
  safe_not_equal: lg,
  svg_element: sg
} = window.__gradio__svelte__internal, {
  SvelteComponent: og,
  append_hydration: ug,
  attr: cg,
  children: hg,
  claim_svg_element: mg,
  detach: dg,
  init: fg,
  insert_hydration: pg,
  noop: gg,
  safe_not_equal: _g,
  svg_element: vg
} = window.__gradio__svelte__internal, {
  SvelteComponent: bg,
  append_hydration: yg,
  attr: wg,
  children: xg,
  claim_svg_element: kg,
  detach: Dg,
  init: Sg,
  insert_hydration: Ag,
  noop: $g,
  safe_not_equal: Eg,
  svg_element: Fg
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cg,
  append_hydration: Tg,
  attr: Mg,
  children: zg,
  claim_svg_element: Bg,
  detach: Ng,
  init: qg,
  insert_hydration: Rg,
  noop: Ig,
  safe_not_equal: Lg,
  svg_element: Og
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pg,
  append_hydration: Hg,
  attr: Ug,
  children: Gg,
  claim_svg_element: Vg,
  detach: Wg,
  init: jg,
  insert_hydration: Xg,
  noop: Yg,
  safe_not_equal: Zg,
  svg_element: Kg
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qg,
  append_hydration: Jg,
  attr: e9,
  children: t9,
  claim_svg_element: r9,
  detach: n9,
  init: a9,
  insert_hydration: i9,
  noop: l9,
  safe_not_equal: s9,
  svg_element: o9
} = window.__gradio__svelte__internal, {
  SvelteComponent: u9,
  append_hydration: c9,
  attr: h9,
  children: m9,
  claim_svg_element: d9,
  detach: f9,
  init: p9,
  insert_hydration: g9,
  noop: _9,
  safe_not_equal: v9,
  svg_element: b9
} = window.__gradio__svelte__internal, {
  SvelteComponent: y9,
  append_hydration: w9,
  attr: x9,
  children: k9,
  claim_svg_element: D9,
  detach: S9,
  init: A9,
  insert_hydration: $9,
  noop: E9,
  safe_not_equal: F9,
  svg_element: C9
} = window.__gradio__svelte__internal, {
  SvelteComponent: T9,
  append_hydration: M9,
  attr: z9,
  children: B9,
  claim_svg_element: N9,
  claim_text: q9,
  detach: R9,
  init: I9,
  insert_hydration: L9,
  noop: O9,
  safe_not_equal: P9,
  svg_element: H9,
  text: U9
} = window.__gradio__svelte__internal, {
  SvelteComponent: G9,
  append_hydration: V9,
  attr: W9,
  children: j9,
  claim_svg_element: X9,
  detach: Y9,
  init: Z9,
  insert_hydration: K9,
  noop: Q9,
  safe_not_equal: J9,
  svg_element: e_
} = window.__gradio__svelte__internal, {
  SvelteComponent: t_,
  append_hydration: r_,
  attr: n_,
  children: a_,
  claim_svg_element: i_,
  detach: l_,
  init: s_,
  insert_hydration: o_,
  noop: u_,
  safe_not_equal: c_,
  svg_element: h_
} = window.__gradio__svelte__internal, {
  SvelteComponent: m_,
  append_hydration: d_,
  attr: f_,
  children: p_,
  claim_svg_element: g_,
  detach: __,
  init: v_,
  insert_hydration: b_,
  noop: y_,
  safe_not_equal: w_,
  svg_element: x_
} = window.__gradio__svelte__internal, {
  SvelteComponent: k_,
  append_hydration: D_,
  attr: S_,
  children: A_,
  claim_svg_element: $_,
  detach: E_,
  init: F_,
  insert_hydration: C_,
  noop: T_,
  safe_not_equal: M_,
  svg_element: z_
} = window.__gradio__svelte__internal, {
  SvelteComponent: B_,
  append_hydration: N_,
  attr: q_,
  children: R_,
  claim_svg_element: I_,
  detach: L_,
  init: O_,
  insert_hydration: P_,
  noop: H_,
  safe_not_equal: U_,
  svg_element: G_
} = window.__gradio__svelte__internal, {
  SvelteComponent: V_,
  append_hydration: W_,
  attr: j_,
  children: X_,
  claim_svg_element: Y_,
  claim_text: Z_,
  detach: K_,
  init: Q_,
  insert_hydration: J_,
  noop: ev,
  safe_not_equal: tv,
  svg_element: rv,
  text: nv
} = window.__gradio__svelte__internal, {
  SvelteComponent: av,
  append_hydration: iv,
  attr: lv,
  children: sv,
  claim_svg_element: ov,
  claim_text: uv,
  detach: cv,
  init: hv,
  insert_hydration: mv,
  noop: dv,
  safe_not_equal: fv,
  svg_element: pv,
  text: gv
} = window.__gradio__svelte__internal, {
  SvelteComponent: _v,
  append_hydration: vv,
  attr: bv,
  children: yv,
  claim_svg_element: wv,
  claim_text: xv,
  detach: kv,
  init: Dv,
  insert_hydration: Sv,
  noop: Av,
  safe_not_equal: $v,
  svg_element: Ev,
  text: Fv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cv,
  append_hydration: Tv,
  attr: Mv,
  children: zv,
  claim_svg_element: Bv,
  detach: Nv,
  init: qv,
  insert_hydration: Rv,
  noop: Iv,
  safe_not_equal: Lv,
  svg_element: Ov
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pv,
  append_hydration: Hv,
  attr: Uv,
  children: Gv,
  claim_svg_element: Vv,
  detach: Wv,
  init: jv,
  insert_hydration: Xv,
  noop: Yv,
  safe_not_equal: Zv,
  svg_element: Kv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qv,
  append_hydration: Jv,
  attr: eb,
  children: tb,
  claim_svg_element: rb,
  detach: nb,
  init: ab,
  insert_hydration: ib,
  noop: lb,
  safe_not_equal: sb,
  svg_element: ob
} = window.__gradio__svelte__internal, {
  SvelteComponent: ub,
  append_hydration: cb,
  attr: hb,
  children: mb,
  claim_svg_element: db,
  detach: fb,
  init: pb,
  insert_hydration: gb,
  noop: _b,
  safe_not_equal: vb,
  svg_element: bb
} = window.__gradio__svelte__internal, {
  SvelteComponent: yb,
  append_hydration: wb,
  attr: xb,
  children: kb,
  claim_svg_element: Db,
  detach: Sb,
  init: Ab,
  insert_hydration: $b,
  noop: Eb,
  safe_not_equal: Fb,
  svg_element: Cb
} = window.__gradio__svelte__internal;
class ct {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new ct(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class yt {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new yt(t, ct.range(this, e));
  }
}
class R {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + e, a, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var s = l.lexer.input;
      a = l.start, i = l.end, a === s.length ? r += " at end of input: " : r += " at position " + (a + 1) + ": ";
      var o = s.slice(a, i).replace(/[^]/g, "$&̲"), h;
      a > 15 ? h = "…" + s.slice(a - 15, a) : h = s.slice(0, a);
      var d;
      i + 15 < s.length ? d = s.slice(i, i + 15) + "…" : d = s.slice(i), r += h + o + d;
    }
    var p = new Error(r);
    return p.name = "ParseError", p.__proto__ = R.prototype, p.position = a, a != null && i != null && (p.length = i - a), p.rawMessage = e, p;
  }
}
R.prototype.__proto__ = Error.prototype;
var zu = function(e, t) {
  return e.indexOf(t) !== -1;
}, Bu = function(e, t) {
  return e === void 0 ? t : e;
}, Nu = /([A-Z])/g, qu = function(e) {
  return e.replace(Nu, "-$1").toLowerCase();
}, Ru = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Iu = /[&><"']/g;
function Lu(n) {
  return String(n).replace(Iu, (e) => Ru[e]);
}
var hs = function n(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? n(e.body[0]) : e : e.type === "font" ? n(e.body) : e;
}, Ou = function(e) {
  var t = hs(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Pu = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Hu = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, J = {
  contains: zu,
  deflt: Bu,
  escape: Lu,
  hyphenate: qu,
  getBaseElem: hs,
  isCharacterBox: Ou,
  protocolFromUrl: Hu
}, Ur = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (n) => "#" + n
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (n, e) => (e.push(n), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (n) => Math.max(0, n),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (n) => Math.max(0, n),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (n) => Math.max(0, n),
    cli: "-e, --max-expand <n>",
    cliProcessor: (n) => n === "Infinity" ? 1 / 0 : parseInt(n)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function Uu(n) {
  if (n.default)
    return n.default;
  var e = n.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Aa {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Ur)
      if (Ur.hasOwnProperty(t)) {
        var r = Ur[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : Uu(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, r) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, t, r)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new R("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, r) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, r);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = J.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!r;
  }
}
class f0 {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Pt[Gu[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Pt[Vu[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Pt[Wu[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Pt[ju[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Pt[Xu[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Pt[Yu[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var $a = 0, Qr = 1, O0 = 2, o0 = 3, or = 4, _t = 5, H0 = 6, Ke = 7, Pt = [new f0($a, 0, !1), new f0(Qr, 0, !0), new f0(O0, 1, !1), new f0(o0, 1, !0), new f0(or, 2, !1), new f0(_t, 2, !0), new f0(H0, 3, !1), new f0(Ke, 3, !0)], Gu = [or, _t, or, _t, H0, Ke, H0, Ke], Vu = [_t, _t, _t, _t, Ke, Ke, Ke, Ke], Wu = [O0, o0, or, _t, H0, Ke, H0, Ke], ju = [o0, o0, _t, _t, Ke, Ke, Ke, Ke], Xu = [Qr, Qr, o0, o0, _t, _t, Ke, Ke], Yu = [$a, Qr, O0, o0, O0, o0, O0, o0], re = {
  DISPLAY: Pt[$a],
  TEXT: Pt[O0],
  SCRIPT: Pt[or],
  SCRIPTSCRIPT: Pt[H0]
}, Kn = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function Zu(n) {
  for (var e = 0; e < Kn.length; e++)
    for (var t = Kn[e], r = 0; r < t.blocks.length; r++) {
      var a = t.blocks[r];
      if (n >= a[0] && n <= a[1])
        return t.name;
    }
  return null;
}
var Gr = [];
Kn.forEach((n) => n.blocks.forEach((e) => Gr.push(...e)));
function ms(n) {
  for (var e = 0; e < Gr.length; e += 2)
    if (n >= Gr[e] && n <= Gr[e + 1])
      return !0;
  return !1;
}
var q0 = 80, Ku = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Qu = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Ju = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, e1 = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, t1 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, r1 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, n1 = function(e, t, r) {
  var a = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, a1 = function(e, t, r) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = Ku(t, q0);
      break;
    case "sqrtSize1":
      a = Qu(t, q0);
      break;
    case "sqrtSize2":
      a = Ju(t, q0);
      break;
    case "sqrtSize3":
      a = e1(t, q0);
      break;
    case "sqrtSize4":
      a = t1(t, q0);
      break;
    case "sqrtTall":
      a = n1(t, q0, r);
  }
  return a;
}, i1 = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, xi = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, l1 = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class cr {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return J.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var Ht = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, kr = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, ki = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function s1(n, e) {
  Ht[n] = e;
}
function Ea(n, e, t) {
  if (!Ht[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = n.charCodeAt(0), a = Ht[e][r];
  if (!a && n[0] in ki && (r = ki[n[0]].charCodeAt(0), a = Ht[e][r]), !a && t === "text" && ms(r) && (a = Ht[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var An = {};
function o1(n) {
  var e;
  if (n >= 5 ? e = 0 : n >= 3 ? e = 1 : e = 2, !An[e]) {
    var t = An[e] = {
      cssEmPerMu: kr.quad[e] / 18
    };
    for (var r in kr)
      kr.hasOwnProperty(r) && (t[r] = kr[r][e]);
  }
  return An[e];
}
var u1 = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], Di = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], Si = function(e, t) {
  return t.size < 2 ? e : u1[e - 1][t.size - 1];
};
class s0 {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || s0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Di[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return new s0(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Si(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Di[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Si(s0.BASESIZE, e);
    return this.size === t && this.textSize === s0.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== s0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + s0.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = o1(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
s0.BASESIZE = 6;
var Qn = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, c1 = {
  ex: !0,
  em: !0,
  mu: !0
}, ds = function(e) {
  return typeof e != "string" && (e = e.unit), e in Qn || e in c1 || e === "ex";
}, Te = function(e, t) {
  var r;
  if (e.unit in Qn)
    r = Qn[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      r = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = a.fontMetrics().quad;
    else
      throw new R("Invalid unit: '" + e.unit + "'");
    a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, H = function(e) {
  return +e.toFixed(4) + "em";
}, b0 = function(e) {
  return e.filter((t) => t).join(" ");
}, fs = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, ps = function(e) {
  var t = document.createElement(e);
  t.className = b0(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, h1 = /[\s"'>/=\x00-\x1f]/, gs = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + J.escape(b0(this.classes)) + '"');
  var r = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (r += J.hyphenate(a) + ":" + this.style[a] + ";");
  r && (t += ' style="' + J.escape(r) + '"');
  for (var i in this.attributes)
    if (this.attributes.hasOwnProperty(i)) {
      if (h1.test(i))
        throw new R("Invalid attribute name '" + i + "'");
      t += " " + i + '="' + J.escape(this.attributes[i]) + '"';
    }
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class hr {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, fs.call(this, e, r, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return J.contains(this.classes, e);
  }
  toNode() {
    return ps.call(this, "span");
  }
  toMarkup() {
    return gs.call(this, "span");
  }
}
class Fa {
  constructor(e, t, r, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, fs.call(this, t, a), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return J.contains(this.classes, e);
  }
  toNode() {
    return ps.call(this, "a");
  }
  toMarkup() {
    return gs.call(this, "a");
  }
}
class m1 {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return J.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + J.escape(this.src) + '"' + (' alt="' + J.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += J.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + J.escape(t) + '"'), e += "'/>", e;
  }
}
var d1 = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class wt {
  constructor(e, t, r, a, i, l, s, o) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = a || 0, this.skew = i || 0, this.width = l || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0;
    var h = Zu(this.text.charCodeAt(0));
    h && this.classes.push(h + "_fallback"), /[îïíì]/.test(this.text) && (this.text = d1[this.text]);
  }
  hasClass(e) {
    return J.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = H(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = b0(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += J.escape(b0(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (r += J.hyphenate(a) + ":" + this.style[a] + ";");
    r && (e = !0, t += ' style="' + J.escape(r) + '"');
    var i = J.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class c0 {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + J.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class y0 {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", xi[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + J.escape(this.alternate) + '"/>' : '<path d="' + J.escape(xi[this.pathName]) + '"/>';
  }
}
class Jn {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + J.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Ai(n) {
  if (n instanceof wt)
    return n;
  throw new Error("Expected symbolNode but got " + String(n) + ".");
}
function f1(n) {
  if (n instanceof hr)
    return n;
  throw new Error("Expected span<HtmlDomNode> but got " + String(n) + ".");
}
var p1 = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, g1 = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, we = {
  math: {},
  text: {}
};
function u(n, e, t, r, a, i) {
  we[n][a] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (we[n][r] = we[n][a]);
}
var c = "math", N = "text", m = "main", b = "ams", $e = "accent-token", j = "bin", et = "close", U0 = "inner", te = "mathord", Re = "op-token", dt = "open", on = "punct", y = "rel", d0 = "spacing", k = "textord";
u(c, m, y, "≡", "\\equiv", !0);
u(c, m, y, "≺", "\\prec", !0);
u(c, m, y, "≻", "\\succ", !0);
u(c, m, y, "∼", "\\sim", !0);
u(c, m, y, "⊥", "\\perp");
u(c, m, y, "⪯", "\\preceq", !0);
u(c, m, y, "⪰", "\\succeq", !0);
u(c, m, y, "≃", "\\simeq", !0);
u(c, m, y, "∣", "\\mid", !0);
u(c, m, y, "≪", "\\ll", !0);
u(c, m, y, "≫", "\\gg", !0);
u(c, m, y, "≍", "\\asymp", !0);
u(c, m, y, "∥", "\\parallel");
u(c, m, y, "⋈", "\\bowtie", !0);
u(c, m, y, "⌣", "\\smile", !0);
u(c, m, y, "⊑", "\\sqsubseteq", !0);
u(c, m, y, "⊒", "\\sqsupseteq", !0);
u(c, m, y, "≐", "\\doteq", !0);
u(c, m, y, "⌢", "\\frown", !0);
u(c, m, y, "∋", "\\ni", !0);
u(c, m, y, "∝", "\\propto", !0);
u(c, m, y, "⊢", "\\vdash", !0);
u(c, m, y, "⊣", "\\dashv", !0);
u(c, m, y, "∋", "\\owns");
u(c, m, on, ".", "\\ldotp");
u(c, m, on, "⋅", "\\cdotp");
u(c, m, k, "#", "\\#");
u(N, m, k, "#", "\\#");
u(c, m, k, "&", "\\&");
u(N, m, k, "&", "\\&");
u(c, m, k, "ℵ", "\\aleph", !0);
u(c, m, k, "∀", "\\forall", !0);
u(c, m, k, "ℏ", "\\hbar", !0);
u(c, m, k, "∃", "\\exists", !0);
u(c, m, k, "∇", "\\nabla", !0);
u(c, m, k, "♭", "\\flat", !0);
u(c, m, k, "ℓ", "\\ell", !0);
u(c, m, k, "♮", "\\natural", !0);
u(c, m, k, "♣", "\\clubsuit", !0);
u(c, m, k, "℘", "\\wp", !0);
u(c, m, k, "♯", "\\sharp", !0);
u(c, m, k, "♢", "\\diamondsuit", !0);
u(c, m, k, "ℜ", "\\Re", !0);
u(c, m, k, "♡", "\\heartsuit", !0);
u(c, m, k, "ℑ", "\\Im", !0);
u(c, m, k, "♠", "\\spadesuit", !0);
u(c, m, k, "§", "\\S", !0);
u(N, m, k, "§", "\\S");
u(c, m, k, "¶", "\\P", !0);
u(N, m, k, "¶", "\\P");
u(c, m, k, "†", "\\dag");
u(N, m, k, "†", "\\dag");
u(N, m, k, "†", "\\textdagger");
u(c, m, k, "‡", "\\ddag");
u(N, m, k, "‡", "\\ddag");
u(N, m, k, "‡", "\\textdaggerdbl");
u(c, m, et, "⎱", "\\rmoustache", !0);
u(c, m, dt, "⎰", "\\lmoustache", !0);
u(c, m, et, "⟯", "\\rgroup", !0);
u(c, m, dt, "⟮", "\\lgroup", !0);
u(c, m, j, "∓", "\\mp", !0);
u(c, m, j, "⊖", "\\ominus", !0);
u(c, m, j, "⊎", "\\uplus", !0);
u(c, m, j, "⊓", "\\sqcap", !0);
u(c, m, j, "∗", "\\ast");
u(c, m, j, "⊔", "\\sqcup", !0);
u(c, m, j, "◯", "\\bigcirc", !0);
u(c, m, j, "∙", "\\bullet", !0);
u(c, m, j, "‡", "\\ddagger");
u(c, m, j, "≀", "\\wr", !0);
u(c, m, j, "⨿", "\\amalg");
u(c, m, j, "&", "\\And");
u(c, m, y, "⟵", "\\longleftarrow", !0);
u(c, m, y, "⇐", "\\Leftarrow", !0);
u(c, m, y, "⟸", "\\Longleftarrow", !0);
u(c, m, y, "⟶", "\\longrightarrow", !0);
u(c, m, y, "⇒", "\\Rightarrow", !0);
u(c, m, y, "⟹", "\\Longrightarrow", !0);
u(c, m, y, "↔", "\\leftrightarrow", !0);
u(c, m, y, "⟷", "\\longleftrightarrow", !0);
u(c, m, y, "⇔", "\\Leftrightarrow", !0);
u(c, m, y, "⟺", "\\Longleftrightarrow", !0);
u(c, m, y, "↦", "\\mapsto", !0);
u(c, m, y, "⟼", "\\longmapsto", !0);
u(c, m, y, "↗", "\\nearrow", !0);
u(c, m, y, "↩", "\\hookleftarrow", !0);
u(c, m, y, "↪", "\\hookrightarrow", !0);
u(c, m, y, "↘", "\\searrow", !0);
u(c, m, y, "↼", "\\leftharpoonup", !0);
u(c, m, y, "⇀", "\\rightharpoonup", !0);
u(c, m, y, "↙", "\\swarrow", !0);
u(c, m, y, "↽", "\\leftharpoondown", !0);
u(c, m, y, "⇁", "\\rightharpoondown", !0);
u(c, m, y, "↖", "\\nwarrow", !0);
u(c, m, y, "⇌", "\\rightleftharpoons", !0);
u(c, b, y, "≮", "\\nless", !0);
u(c, b, y, "", "\\@nleqslant");
u(c, b, y, "", "\\@nleqq");
u(c, b, y, "⪇", "\\lneq", !0);
u(c, b, y, "≨", "\\lneqq", !0);
u(c, b, y, "", "\\@lvertneqq");
u(c, b, y, "⋦", "\\lnsim", !0);
u(c, b, y, "⪉", "\\lnapprox", !0);
u(c, b, y, "⊀", "\\nprec", !0);
u(c, b, y, "⋠", "\\npreceq", !0);
u(c, b, y, "⋨", "\\precnsim", !0);
u(c, b, y, "⪹", "\\precnapprox", !0);
u(c, b, y, "≁", "\\nsim", !0);
u(c, b, y, "", "\\@nshortmid");
u(c, b, y, "∤", "\\nmid", !0);
u(c, b, y, "⊬", "\\nvdash", !0);
u(c, b, y, "⊭", "\\nvDash", !0);
u(c, b, y, "⋪", "\\ntriangleleft");
u(c, b, y, "⋬", "\\ntrianglelefteq", !0);
u(c, b, y, "⊊", "\\subsetneq", !0);
u(c, b, y, "", "\\@varsubsetneq");
u(c, b, y, "⫋", "\\subsetneqq", !0);
u(c, b, y, "", "\\@varsubsetneqq");
u(c, b, y, "≯", "\\ngtr", !0);
u(c, b, y, "", "\\@ngeqslant");
u(c, b, y, "", "\\@ngeqq");
u(c, b, y, "⪈", "\\gneq", !0);
u(c, b, y, "≩", "\\gneqq", !0);
u(c, b, y, "", "\\@gvertneqq");
u(c, b, y, "⋧", "\\gnsim", !0);
u(c, b, y, "⪊", "\\gnapprox", !0);
u(c, b, y, "⊁", "\\nsucc", !0);
u(c, b, y, "⋡", "\\nsucceq", !0);
u(c, b, y, "⋩", "\\succnsim", !0);
u(c, b, y, "⪺", "\\succnapprox", !0);
u(c, b, y, "≆", "\\ncong", !0);
u(c, b, y, "", "\\@nshortparallel");
u(c, b, y, "∦", "\\nparallel", !0);
u(c, b, y, "⊯", "\\nVDash", !0);
u(c, b, y, "⋫", "\\ntriangleright");
u(c, b, y, "⋭", "\\ntrianglerighteq", !0);
u(c, b, y, "", "\\@nsupseteqq");
u(c, b, y, "⊋", "\\supsetneq", !0);
u(c, b, y, "", "\\@varsupsetneq");
u(c, b, y, "⫌", "\\supsetneqq", !0);
u(c, b, y, "", "\\@varsupsetneqq");
u(c, b, y, "⊮", "\\nVdash", !0);
u(c, b, y, "⪵", "\\precneqq", !0);
u(c, b, y, "⪶", "\\succneqq", !0);
u(c, b, y, "", "\\@nsubseteqq");
u(c, b, j, "⊴", "\\unlhd");
u(c, b, j, "⊵", "\\unrhd");
u(c, b, y, "↚", "\\nleftarrow", !0);
u(c, b, y, "↛", "\\nrightarrow", !0);
u(c, b, y, "⇍", "\\nLeftarrow", !0);
u(c, b, y, "⇏", "\\nRightarrow", !0);
u(c, b, y, "↮", "\\nleftrightarrow", !0);
u(c, b, y, "⇎", "\\nLeftrightarrow", !0);
u(c, b, y, "△", "\\vartriangle");
u(c, b, k, "ℏ", "\\hslash");
u(c, b, k, "▽", "\\triangledown");
u(c, b, k, "◊", "\\lozenge");
u(c, b, k, "Ⓢ", "\\circledS");
u(c, b, k, "®", "\\circledR");
u(N, b, k, "®", "\\circledR");
u(c, b, k, "∡", "\\measuredangle", !0);
u(c, b, k, "∄", "\\nexists");
u(c, b, k, "℧", "\\mho");
u(c, b, k, "Ⅎ", "\\Finv", !0);
u(c, b, k, "⅁", "\\Game", !0);
u(c, b, k, "‵", "\\backprime");
u(c, b, k, "▲", "\\blacktriangle");
u(c, b, k, "▼", "\\blacktriangledown");
u(c, b, k, "■", "\\blacksquare");
u(c, b, k, "⧫", "\\blacklozenge");
u(c, b, k, "★", "\\bigstar");
u(c, b, k, "∢", "\\sphericalangle", !0);
u(c, b, k, "∁", "\\complement", !0);
u(c, b, k, "ð", "\\eth", !0);
u(N, m, k, "ð", "ð");
u(c, b, k, "╱", "\\diagup");
u(c, b, k, "╲", "\\diagdown");
u(c, b, k, "□", "\\square");
u(c, b, k, "□", "\\Box");
u(c, b, k, "◊", "\\Diamond");
u(c, b, k, "¥", "\\yen", !0);
u(N, b, k, "¥", "\\yen", !0);
u(c, b, k, "✓", "\\checkmark", !0);
u(N, b, k, "✓", "\\checkmark");
u(c, b, k, "ℶ", "\\beth", !0);
u(c, b, k, "ℸ", "\\daleth", !0);
u(c, b, k, "ℷ", "\\gimel", !0);
u(c, b, k, "ϝ", "\\digamma", !0);
u(c, b, k, "ϰ", "\\varkappa");
u(c, b, dt, "┌", "\\@ulcorner", !0);
u(c, b, et, "┐", "\\@urcorner", !0);
u(c, b, dt, "└", "\\@llcorner", !0);
u(c, b, et, "┘", "\\@lrcorner", !0);
u(c, b, y, "≦", "\\leqq", !0);
u(c, b, y, "⩽", "\\leqslant", !0);
u(c, b, y, "⪕", "\\eqslantless", !0);
u(c, b, y, "≲", "\\lesssim", !0);
u(c, b, y, "⪅", "\\lessapprox", !0);
u(c, b, y, "≊", "\\approxeq", !0);
u(c, b, j, "⋖", "\\lessdot");
u(c, b, y, "⋘", "\\lll", !0);
u(c, b, y, "≶", "\\lessgtr", !0);
u(c, b, y, "⋚", "\\lesseqgtr", !0);
u(c, b, y, "⪋", "\\lesseqqgtr", !0);
u(c, b, y, "≑", "\\doteqdot");
u(c, b, y, "≓", "\\risingdotseq", !0);
u(c, b, y, "≒", "\\fallingdotseq", !0);
u(c, b, y, "∽", "\\backsim", !0);
u(c, b, y, "⋍", "\\backsimeq", !0);
u(c, b, y, "⫅", "\\subseteqq", !0);
u(c, b, y, "⋐", "\\Subset", !0);
u(c, b, y, "⊏", "\\sqsubset", !0);
u(c, b, y, "≼", "\\preccurlyeq", !0);
u(c, b, y, "⋞", "\\curlyeqprec", !0);
u(c, b, y, "≾", "\\precsim", !0);
u(c, b, y, "⪷", "\\precapprox", !0);
u(c, b, y, "⊲", "\\vartriangleleft");
u(c, b, y, "⊴", "\\trianglelefteq");
u(c, b, y, "⊨", "\\vDash", !0);
u(c, b, y, "⊪", "\\Vvdash", !0);
u(c, b, y, "⌣", "\\smallsmile");
u(c, b, y, "⌢", "\\smallfrown");
u(c, b, y, "≏", "\\bumpeq", !0);
u(c, b, y, "≎", "\\Bumpeq", !0);
u(c, b, y, "≧", "\\geqq", !0);
u(c, b, y, "⩾", "\\geqslant", !0);
u(c, b, y, "⪖", "\\eqslantgtr", !0);
u(c, b, y, "≳", "\\gtrsim", !0);
u(c, b, y, "⪆", "\\gtrapprox", !0);
u(c, b, j, "⋗", "\\gtrdot");
u(c, b, y, "⋙", "\\ggg", !0);
u(c, b, y, "≷", "\\gtrless", !0);
u(c, b, y, "⋛", "\\gtreqless", !0);
u(c, b, y, "⪌", "\\gtreqqless", !0);
u(c, b, y, "≖", "\\eqcirc", !0);
u(c, b, y, "≗", "\\circeq", !0);
u(c, b, y, "≜", "\\triangleq", !0);
u(c, b, y, "∼", "\\thicksim");
u(c, b, y, "≈", "\\thickapprox");
u(c, b, y, "⫆", "\\supseteqq", !0);
u(c, b, y, "⋑", "\\Supset", !0);
u(c, b, y, "⊐", "\\sqsupset", !0);
u(c, b, y, "≽", "\\succcurlyeq", !0);
u(c, b, y, "⋟", "\\curlyeqsucc", !0);
u(c, b, y, "≿", "\\succsim", !0);
u(c, b, y, "⪸", "\\succapprox", !0);
u(c, b, y, "⊳", "\\vartriangleright");
u(c, b, y, "⊵", "\\trianglerighteq");
u(c, b, y, "⊩", "\\Vdash", !0);
u(c, b, y, "∣", "\\shortmid");
u(c, b, y, "∥", "\\shortparallel");
u(c, b, y, "≬", "\\between", !0);
u(c, b, y, "⋔", "\\pitchfork", !0);
u(c, b, y, "∝", "\\varpropto");
u(c, b, y, "◀", "\\blacktriangleleft");
u(c, b, y, "∴", "\\therefore", !0);
u(c, b, y, "∍", "\\backepsilon");
u(c, b, y, "▶", "\\blacktriangleright");
u(c, b, y, "∵", "\\because", !0);
u(c, b, y, "⋘", "\\llless");
u(c, b, y, "⋙", "\\gggtr");
u(c, b, j, "⊲", "\\lhd");
u(c, b, j, "⊳", "\\rhd");
u(c, b, y, "≂", "\\eqsim", !0);
u(c, m, y, "⋈", "\\Join");
u(c, b, y, "≑", "\\Doteq", !0);
u(c, b, j, "∔", "\\dotplus", !0);
u(c, b, j, "∖", "\\smallsetminus");
u(c, b, j, "⋒", "\\Cap", !0);
u(c, b, j, "⋓", "\\Cup", !0);
u(c, b, j, "⩞", "\\doublebarwedge", !0);
u(c, b, j, "⊟", "\\boxminus", !0);
u(c, b, j, "⊞", "\\boxplus", !0);
u(c, b, j, "⋇", "\\divideontimes", !0);
u(c, b, j, "⋉", "\\ltimes", !0);
u(c, b, j, "⋊", "\\rtimes", !0);
u(c, b, j, "⋋", "\\leftthreetimes", !0);
u(c, b, j, "⋌", "\\rightthreetimes", !0);
u(c, b, j, "⋏", "\\curlywedge", !0);
u(c, b, j, "⋎", "\\curlyvee", !0);
u(c, b, j, "⊝", "\\circleddash", !0);
u(c, b, j, "⊛", "\\circledast", !0);
u(c, b, j, "⋅", "\\centerdot");
u(c, b, j, "⊺", "\\intercal", !0);
u(c, b, j, "⋒", "\\doublecap");
u(c, b, j, "⋓", "\\doublecup");
u(c, b, j, "⊠", "\\boxtimes", !0);
u(c, b, y, "⇢", "\\dashrightarrow", !0);
u(c, b, y, "⇠", "\\dashleftarrow", !0);
u(c, b, y, "⇇", "\\leftleftarrows", !0);
u(c, b, y, "⇆", "\\leftrightarrows", !0);
u(c, b, y, "⇚", "\\Lleftarrow", !0);
u(c, b, y, "↞", "\\twoheadleftarrow", !0);
u(c, b, y, "↢", "\\leftarrowtail", !0);
u(c, b, y, "↫", "\\looparrowleft", !0);
u(c, b, y, "⇋", "\\leftrightharpoons", !0);
u(c, b, y, "↶", "\\curvearrowleft", !0);
u(c, b, y, "↺", "\\circlearrowleft", !0);
u(c, b, y, "↰", "\\Lsh", !0);
u(c, b, y, "⇈", "\\upuparrows", !0);
u(c, b, y, "↿", "\\upharpoonleft", !0);
u(c, b, y, "⇃", "\\downharpoonleft", !0);
u(c, m, y, "⊶", "\\origof", !0);
u(c, m, y, "⊷", "\\imageof", !0);
u(c, b, y, "⊸", "\\multimap", !0);
u(c, b, y, "↭", "\\leftrightsquigarrow", !0);
u(c, b, y, "⇉", "\\rightrightarrows", !0);
u(c, b, y, "⇄", "\\rightleftarrows", !0);
u(c, b, y, "↠", "\\twoheadrightarrow", !0);
u(c, b, y, "↣", "\\rightarrowtail", !0);
u(c, b, y, "↬", "\\looparrowright", !0);
u(c, b, y, "↷", "\\curvearrowright", !0);
u(c, b, y, "↻", "\\circlearrowright", !0);
u(c, b, y, "↱", "\\Rsh", !0);
u(c, b, y, "⇊", "\\downdownarrows", !0);
u(c, b, y, "↾", "\\upharpoonright", !0);
u(c, b, y, "⇂", "\\downharpoonright", !0);
u(c, b, y, "⇝", "\\rightsquigarrow", !0);
u(c, b, y, "⇝", "\\leadsto");
u(c, b, y, "⇛", "\\Rrightarrow", !0);
u(c, b, y, "↾", "\\restriction");
u(c, m, k, "‘", "`");
u(c, m, k, "$", "\\$");
u(N, m, k, "$", "\\$");
u(N, m, k, "$", "\\textdollar");
u(c, m, k, "%", "\\%");
u(N, m, k, "%", "\\%");
u(c, m, k, "_", "\\_");
u(N, m, k, "_", "\\_");
u(N, m, k, "_", "\\textunderscore");
u(c, m, k, "∠", "\\angle", !0);
u(c, m, k, "∞", "\\infty", !0);
u(c, m, k, "′", "\\prime");
u(c, m, k, "△", "\\triangle");
u(c, m, k, "Γ", "\\Gamma", !0);
u(c, m, k, "Δ", "\\Delta", !0);
u(c, m, k, "Θ", "\\Theta", !0);
u(c, m, k, "Λ", "\\Lambda", !0);
u(c, m, k, "Ξ", "\\Xi", !0);
u(c, m, k, "Π", "\\Pi", !0);
u(c, m, k, "Σ", "\\Sigma", !0);
u(c, m, k, "Υ", "\\Upsilon", !0);
u(c, m, k, "Φ", "\\Phi", !0);
u(c, m, k, "Ψ", "\\Psi", !0);
u(c, m, k, "Ω", "\\Omega", !0);
u(c, m, k, "A", "Α");
u(c, m, k, "B", "Β");
u(c, m, k, "E", "Ε");
u(c, m, k, "Z", "Ζ");
u(c, m, k, "H", "Η");
u(c, m, k, "I", "Ι");
u(c, m, k, "K", "Κ");
u(c, m, k, "M", "Μ");
u(c, m, k, "N", "Ν");
u(c, m, k, "O", "Ο");
u(c, m, k, "P", "Ρ");
u(c, m, k, "T", "Τ");
u(c, m, k, "X", "Χ");
u(c, m, k, "¬", "\\neg", !0);
u(c, m, k, "¬", "\\lnot");
u(c, m, k, "⊤", "\\top");
u(c, m, k, "⊥", "\\bot");
u(c, m, k, "∅", "\\emptyset");
u(c, b, k, "∅", "\\varnothing");
u(c, m, te, "α", "\\alpha", !0);
u(c, m, te, "β", "\\beta", !0);
u(c, m, te, "γ", "\\gamma", !0);
u(c, m, te, "δ", "\\delta", !0);
u(c, m, te, "ϵ", "\\epsilon", !0);
u(c, m, te, "ζ", "\\zeta", !0);
u(c, m, te, "η", "\\eta", !0);
u(c, m, te, "θ", "\\theta", !0);
u(c, m, te, "ι", "\\iota", !0);
u(c, m, te, "κ", "\\kappa", !0);
u(c, m, te, "λ", "\\lambda", !0);
u(c, m, te, "μ", "\\mu", !0);
u(c, m, te, "ν", "\\nu", !0);
u(c, m, te, "ξ", "\\xi", !0);
u(c, m, te, "ο", "\\omicron", !0);
u(c, m, te, "π", "\\pi", !0);
u(c, m, te, "ρ", "\\rho", !0);
u(c, m, te, "σ", "\\sigma", !0);
u(c, m, te, "τ", "\\tau", !0);
u(c, m, te, "υ", "\\upsilon", !0);
u(c, m, te, "ϕ", "\\phi", !0);
u(c, m, te, "χ", "\\chi", !0);
u(c, m, te, "ψ", "\\psi", !0);
u(c, m, te, "ω", "\\omega", !0);
u(c, m, te, "ε", "\\varepsilon", !0);
u(c, m, te, "ϑ", "\\vartheta", !0);
u(c, m, te, "ϖ", "\\varpi", !0);
u(c, m, te, "ϱ", "\\varrho", !0);
u(c, m, te, "ς", "\\varsigma", !0);
u(c, m, te, "φ", "\\varphi", !0);
u(c, m, j, "∗", "*", !0);
u(c, m, j, "+", "+");
u(c, m, j, "−", "-", !0);
u(c, m, j, "⋅", "\\cdot", !0);
u(c, m, j, "∘", "\\circ", !0);
u(c, m, j, "÷", "\\div", !0);
u(c, m, j, "±", "\\pm", !0);
u(c, m, j, "×", "\\times", !0);
u(c, m, j, "∩", "\\cap", !0);
u(c, m, j, "∪", "\\cup", !0);
u(c, m, j, "∖", "\\setminus", !0);
u(c, m, j, "∧", "\\land");
u(c, m, j, "∨", "\\lor");
u(c, m, j, "∧", "\\wedge", !0);
u(c, m, j, "∨", "\\vee", !0);
u(c, m, k, "√", "\\surd");
u(c, m, dt, "⟨", "\\langle", !0);
u(c, m, dt, "∣", "\\lvert");
u(c, m, dt, "∥", "\\lVert");
u(c, m, et, "?", "?");
u(c, m, et, "!", "!");
u(c, m, et, "⟩", "\\rangle", !0);
u(c, m, et, "∣", "\\rvert");
u(c, m, et, "∥", "\\rVert");
u(c, m, y, "=", "=");
u(c, m, y, ":", ":");
u(c, m, y, "≈", "\\approx", !0);
u(c, m, y, "≅", "\\cong", !0);
u(c, m, y, "≥", "\\ge");
u(c, m, y, "≥", "\\geq", !0);
u(c, m, y, "←", "\\gets");
u(c, m, y, ">", "\\gt", !0);
u(c, m, y, "∈", "\\in", !0);
u(c, m, y, "", "\\@not");
u(c, m, y, "⊂", "\\subset", !0);
u(c, m, y, "⊃", "\\supset", !0);
u(c, m, y, "⊆", "\\subseteq", !0);
u(c, m, y, "⊇", "\\supseteq", !0);
u(c, b, y, "⊈", "\\nsubseteq", !0);
u(c, b, y, "⊉", "\\nsupseteq", !0);
u(c, m, y, "⊨", "\\models");
u(c, m, y, "←", "\\leftarrow", !0);
u(c, m, y, "≤", "\\le");
u(c, m, y, "≤", "\\leq", !0);
u(c, m, y, "<", "\\lt", !0);
u(c, m, y, "→", "\\rightarrow", !0);
u(c, m, y, "→", "\\to");
u(c, b, y, "≱", "\\ngeq", !0);
u(c, b, y, "≰", "\\nleq", !0);
u(c, m, d0, " ", "\\ ");
u(c, m, d0, " ", "\\space");
u(c, m, d0, " ", "\\nobreakspace");
u(N, m, d0, " ", "\\ ");
u(N, m, d0, " ", " ");
u(N, m, d0, " ", "\\space");
u(N, m, d0, " ", "\\nobreakspace");
u(c, m, d0, null, "\\nobreak");
u(c, m, d0, null, "\\allowbreak");
u(c, m, on, ",", ",");
u(c, m, on, ";", ";");
u(c, b, j, "⊼", "\\barwedge", !0);
u(c, b, j, "⊻", "\\veebar", !0);
u(c, m, j, "⊙", "\\odot", !0);
u(c, m, j, "⊕", "\\oplus", !0);
u(c, m, j, "⊗", "\\otimes", !0);
u(c, m, k, "∂", "\\partial", !0);
u(c, m, j, "⊘", "\\oslash", !0);
u(c, b, j, "⊚", "\\circledcirc", !0);
u(c, b, j, "⊡", "\\boxdot", !0);
u(c, m, j, "△", "\\bigtriangleup");
u(c, m, j, "▽", "\\bigtriangledown");
u(c, m, j, "†", "\\dagger");
u(c, m, j, "⋄", "\\diamond");
u(c, m, j, "⋆", "\\star");
u(c, m, j, "◃", "\\triangleleft");
u(c, m, j, "▹", "\\triangleright");
u(c, m, dt, "{", "\\{");
u(N, m, k, "{", "\\{");
u(N, m, k, "{", "\\textbraceleft");
u(c, m, et, "}", "\\}");
u(N, m, k, "}", "\\}");
u(N, m, k, "}", "\\textbraceright");
u(c, m, dt, "{", "\\lbrace");
u(c, m, et, "}", "\\rbrace");
u(c, m, dt, "[", "\\lbrack", !0);
u(N, m, k, "[", "\\lbrack", !0);
u(c, m, et, "]", "\\rbrack", !0);
u(N, m, k, "]", "\\rbrack", !0);
u(c, m, dt, "(", "\\lparen", !0);
u(c, m, et, ")", "\\rparen", !0);
u(N, m, k, "<", "\\textless", !0);
u(N, m, k, ">", "\\textgreater", !0);
u(c, m, dt, "⌊", "\\lfloor", !0);
u(c, m, et, "⌋", "\\rfloor", !0);
u(c, m, dt, "⌈", "\\lceil", !0);
u(c, m, et, "⌉", "\\rceil", !0);
u(c, m, k, "\\", "\\backslash");
u(c, m, k, "∣", "|");
u(c, m, k, "∣", "\\vert");
u(N, m, k, "|", "\\textbar", !0);
u(c, m, k, "∥", "\\|");
u(c, m, k, "∥", "\\Vert");
u(N, m, k, "∥", "\\textbardbl");
u(N, m, k, "~", "\\textasciitilde");
u(N, m, k, "\\", "\\textbackslash");
u(N, m, k, "^", "\\textasciicircum");
u(c, m, y, "↑", "\\uparrow", !0);
u(c, m, y, "⇑", "\\Uparrow", !0);
u(c, m, y, "↓", "\\downarrow", !0);
u(c, m, y, "⇓", "\\Downarrow", !0);
u(c, m, y, "↕", "\\updownarrow", !0);
u(c, m, y, "⇕", "\\Updownarrow", !0);
u(c, m, Re, "∐", "\\coprod");
u(c, m, Re, "⋁", "\\bigvee");
u(c, m, Re, "⋀", "\\bigwedge");
u(c, m, Re, "⨄", "\\biguplus");
u(c, m, Re, "⋂", "\\bigcap");
u(c, m, Re, "⋃", "\\bigcup");
u(c, m, Re, "∫", "\\int");
u(c, m, Re, "∫", "\\intop");
u(c, m, Re, "∬", "\\iint");
u(c, m, Re, "∭", "\\iiint");
u(c, m, Re, "∏", "\\prod");
u(c, m, Re, "∑", "\\sum");
u(c, m, Re, "⨂", "\\bigotimes");
u(c, m, Re, "⨁", "\\bigoplus");
u(c, m, Re, "⨀", "\\bigodot");
u(c, m, Re, "∮", "\\oint");
u(c, m, Re, "∯", "\\oiint");
u(c, m, Re, "∰", "\\oiiint");
u(c, m, Re, "⨆", "\\bigsqcup");
u(c, m, Re, "∫", "\\smallint");
u(N, m, U0, "…", "\\textellipsis");
u(c, m, U0, "…", "\\mathellipsis");
u(N, m, U0, "…", "\\ldots", !0);
u(c, m, U0, "…", "\\ldots", !0);
u(c, m, U0, "⋯", "\\@cdots", !0);
u(c, m, U0, "⋱", "\\ddots", !0);
u(c, m, k, "⋮", "\\varvdots");
u(N, m, k, "⋮", "\\varvdots");
u(c, m, $e, "ˊ", "\\acute");
u(c, m, $e, "ˋ", "\\grave");
u(c, m, $e, "¨", "\\ddot");
u(c, m, $e, "~", "\\tilde");
u(c, m, $e, "ˉ", "\\bar");
u(c, m, $e, "˘", "\\breve");
u(c, m, $e, "ˇ", "\\check");
u(c, m, $e, "^", "\\hat");
u(c, m, $e, "⃗", "\\vec");
u(c, m, $e, "˙", "\\dot");
u(c, m, $e, "˚", "\\mathring");
u(c, m, te, "", "\\@imath");
u(c, m, te, "", "\\@jmath");
u(c, m, k, "ı", "ı");
u(c, m, k, "ȷ", "ȷ");
u(N, m, k, "ı", "\\i", !0);
u(N, m, k, "ȷ", "\\j", !0);
u(N, m, k, "ß", "\\ss", !0);
u(N, m, k, "æ", "\\ae", !0);
u(N, m, k, "œ", "\\oe", !0);
u(N, m, k, "ø", "\\o", !0);
u(N, m, k, "Æ", "\\AE", !0);
u(N, m, k, "Œ", "\\OE", !0);
u(N, m, k, "Ø", "\\O", !0);
u(N, m, $e, "ˊ", "\\'");
u(N, m, $e, "ˋ", "\\`");
u(N, m, $e, "ˆ", "\\^");
u(N, m, $e, "˜", "\\~");
u(N, m, $e, "ˉ", "\\=");
u(N, m, $e, "˘", "\\u");
u(N, m, $e, "˙", "\\.");
u(N, m, $e, "¸", "\\c");
u(N, m, $e, "˚", "\\r");
u(N, m, $e, "ˇ", "\\v");
u(N, m, $e, "¨", '\\"');
u(N, m, $e, "˝", "\\H");
u(N, m, $e, "◯", "\\textcircled");
var _s = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
u(N, m, k, "–", "--", !0);
u(N, m, k, "–", "\\textendash");
u(N, m, k, "—", "---", !0);
u(N, m, k, "—", "\\textemdash");
u(N, m, k, "‘", "`", !0);
u(N, m, k, "‘", "\\textquoteleft");
u(N, m, k, "’", "'", !0);
u(N, m, k, "’", "\\textquoteright");
u(N, m, k, "“", "``", !0);
u(N, m, k, "“", "\\textquotedblleft");
u(N, m, k, "”", "''", !0);
u(N, m, k, "”", "\\textquotedblright");
u(c, m, k, "°", "\\degree", !0);
u(N, m, k, "°", "\\degree");
u(N, m, k, "°", "\\textdegree", !0);
u(c, m, k, "£", "\\pounds");
u(c, m, k, "£", "\\mathsterling", !0);
u(N, m, k, "£", "\\pounds");
u(N, m, k, "£", "\\textsterling", !0);
u(c, b, k, "✠", "\\maltese");
u(N, b, k, "✠", "\\maltese");
var $i = '0123456789/@."';
for (var $n = 0; $n < $i.length; $n++) {
  var Ei = $i.charAt($n);
  u(c, m, k, Ei, Ei);
}
var Fi = '0123456789!@*()-=+";:?/.,';
for (var En = 0; En < Fi.length; En++) {
  var Ci = Fi.charAt(En);
  u(N, m, k, Ci, Ci);
}
var Jr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Fn = 0; Fn < Jr.length; Fn++) {
  var Dr = Jr.charAt(Fn);
  u(c, m, te, Dr, Dr), u(N, m, k, Dr, Dr);
}
u(c, b, k, "C", "ℂ");
u(N, b, k, "C", "ℂ");
u(c, b, k, "H", "ℍ");
u(N, b, k, "H", "ℍ");
u(c, b, k, "N", "ℕ");
u(N, b, k, "N", "ℕ");
u(c, b, k, "P", "ℙ");
u(N, b, k, "P", "ℙ");
u(c, b, k, "Q", "ℚ");
u(N, b, k, "Q", "ℚ");
u(c, b, k, "R", "ℝ");
u(N, b, k, "R", "ℝ");
u(c, b, k, "Z", "ℤ");
u(N, b, k, "Z", "ℤ");
u(c, m, te, "h", "ℎ");
u(N, m, te, "h", "ℎ");
var ne = "";
for (var Xe = 0; Xe < Jr.length; Xe++) {
  var Be = Jr.charAt(Xe);
  ne = String.fromCharCode(55349, 56320 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56372 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56424 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56580 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56684 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56736 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56788 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56840 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56944 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), Xe < 26 && (ne = String.fromCharCode(55349, 56632 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne), ne = String.fromCharCode(55349, 56476 + Xe), u(c, m, te, Be, ne), u(N, m, k, Be, ne));
}
ne = "𝕜";
u(c, m, te, "k", ne);
u(N, m, k, "k", ne);
for (var k0 = 0; k0 < 10; k0++) {
  var p0 = k0.toString();
  ne = String.fromCharCode(55349, 57294 + k0), u(c, m, te, p0, ne), u(N, m, k, p0, ne), ne = String.fromCharCode(55349, 57314 + k0), u(c, m, te, p0, ne), u(N, m, k, p0, ne), ne = String.fromCharCode(55349, 57324 + k0), u(c, m, te, p0, ne), u(N, m, k, p0, ne), ne = String.fromCharCode(55349, 57334 + k0), u(c, m, te, p0, ne), u(N, m, k, p0, ne);
}
var ea = "ÐÞþ";
for (var Cn = 0; Cn < ea.length; Cn++) {
  var Sr = ea.charAt(Cn);
  u(c, m, te, Sr, Sr), u(N, m, k, Sr, Sr);
}
var Ar = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Ti = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], _1 = function(e, t) {
  var r = e.charCodeAt(0), a = e.charCodeAt(1), i = (r - 55296) * 1024 + (a - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var s = Math.floor((i - 119808) / 26);
    return [Ar[s][2], Ar[s][l]];
  } else if (120782 <= i && i <= 120831) {
    var o = Math.floor((i - 120782) / 10);
    return [Ti[o][2], Ti[o][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [Ar[0][2], Ar[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new R("Unsupported character: " + e);
  }
}, un = function(e, t, r) {
  return we[r][e] && we[r][e].replace && (e = we[r][e].replace), {
    value: e,
    metrics: Ea(e, t, r)
  };
}, Tt = function(e, t, r, a, i) {
  var l = un(e, t, r), s = l.metrics;
  e = l.value;
  var o;
  if (s) {
    var h = s.italic;
    (r === "text" || a && a.font === "mathit") && (h = 0), o = new wt(e, s.height, s.depth, h, s.skew, s.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), o = new wt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    o.maxFontSize = a.sizeMultiplier, a.style.isTight() && o.classes.push("mtight");
    var d = a.getColor();
    d && (o.style.color = d);
  }
  return o;
}, v1 = function(e, t, r, a) {
  return a === void 0 && (a = []), r.font === "boldsymbol" && un(e, "Main-Bold", t).metrics ? Tt(e, "Main-Bold", t, r, a.concat(["mathbf"])) : e === "\\" || we[t][e].font === "main" ? Tt(e, "Main-Regular", t, r, a) : Tt(e, "AMS-Regular", t, r, a.concat(["amsrm"]));
}, b1 = function(e, t, r, a, i) {
  return i !== "textord" && un(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, y1 = function(e, t, r) {
  var a = e.mode, i = e.text, l = ["mord"], s = a === "math" || a === "text" && t.font, o = s ? t.font : t.fontFamily, h = "", d = "";
  if (i.charCodeAt(0) === 55349 && ([h, d] = _1(i, a)), h.length > 0)
    return Tt(i, h, a, t, l.concat(d));
  if (o) {
    var p, g;
    if (o === "boldsymbol") {
      var _ = b1(i, a, t, l, r);
      p = _.fontName, g = [_.fontClass];
    } else s ? (p = ys[o].fontName, g = [o]) : (p = $r(o, t.fontWeight, t.fontShape), g = [o, t.fontWeight, t.fontShape]);
    if (un(i, p, a).metrics)
      return Tt(i, p, a, t, l.concat(g));
    if (_s.hasOwnProperty(i) && p.slice(0, 10) === "Typewriter") {
      for (var E = [], C = 0; C < i.length; C++)
        E.push(Tt(i[C], p, a, t, l.concat(g)));
      return bs(E);
    }
  }
  if (r === "mathord")
    return Tt(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var $ = we[a][i] && we[a][i].font;
    if ($ === "ams") {
      var F = $r("amsrm", t.fontWeight, t.fontShape);
      return Tt(i, F, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if ($ === "main" || !$) {
      var w = $r("textrm", t.fontWeight, t.fontShape);
      return Tt(i, w, a, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var v = $r($, t.fontWeight, t.fontShape);
      return Tt(i, v, a, t, l.concat(v, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, w1 = (n, e) => {
  if (b0(n.classes) !== b0(e.classes) || n.skew !== e.skew || n.maxFontSize !== e.maxFontSize)
    return !1;
  if (n.classes.length === 1) {
    var t = n.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var r in n.style)
    if (n.style.hasOwnProperty(r) && n.style[r] !== e.style[r])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && n.style[a] !== e.style[a])
      return !1;
  return !0;
}, x1 = (n) => {
  for (var e = 0; e < n.length - 1; e++) {
    var t = n[e], r = n[e + 1];
    t instanceof wt && r instanceof wt && w1(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, n.splice(e + 1, 1), e--);
  }
  return n;
}, Ca = function(e) {
  for (var t = 0, r = 0, a = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > a && (a = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = a;
}, it = function(e, t, r, a) {
  var i = new hr(e, t, r, a);
  return Ca(i), i;
}, vs = (n, e, t, r) => new hr(n, e, t, r), k1 = function(e, t, r) {
  var a = it([e], [], t);
  return a.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = H(a.height), a.maxFontSize = 1, a;
}, D1 = function(e, t, r, a) {
  var i = new Fa(e, t, r, a);
  return Ca(i), i;
}, bs = function(e) {
  var t = new cr(e);
  return Ca(t), t;
}, S1 = function(e, t) {
  return e instanceof cr ? it([], [e], t) : e;
}, A1 = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, l = 1; l < t.length; l++) {
      var s = -t[l].shift - i - t[l].elem.depth, o = s - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + s, r.push({
        type: "kern",
        size: o
      }), r.push(t[l]);
    }
    return {
      children: r,
      depth: a
    };
  }
  var h;
  if (e.positionType === "top") {
    for (var d = e.positionData, p = 0; p < e.children.length; p++) {
      var g = e.children[p];
      d -= g.type === "kern" ? g.size : g.elem.height + g.elem.depth;
    }
    h = d;
  } else if (e.positionType === "bottom")
    h = -e.positionData;
  else {
    var _ = e.children[0];
    if (_.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      h = -_.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      h = -_.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: h
  };
}, $1 = function(e, t) {
  for (var {
    children: r,
    depth: a
  } = A1(e), i = 0, l = 0; l < r.length; l++) {
    var s = r[l];
    if (s.type === "elem") {
      var o = s.elem;
      i = Math.max(i, o.maxFontSize, o.height);
    }
  }
  i += 2;
  var h = it(["pstrut"], []);
  h.style.height = H(i);
  for (var d = [], p = a, g = a, _ = a, E = 0; E < r.length; E++) {
    var C = r[E];
    if (C.type === "kern")
      _ += C.size;
    else {
      var $ = C.elem, F = C.wrapperClasses || [], w = C.wrapperStyle || {}, v = it(F, [h, $], void 0, w);
      v.style.top = H(-i - _ - $.depth), C.marginLeft && (v.style.marginLeft = C.marginLeft), C.marginRight && (v.style.marginRight = C.marginRight), d.push(v), _ += $.height + $.depth;
    }
    p = Math.min(p, _), g = Math.max(g, _);
  }
  var x = it(["vlist"], d);
  x.style.height = H(g);
  var S;
  if (p < 0) {
    var T = it([], []), M = it(["vlist"], [T]);
    M.style.height = H(-p);
    var L = it(["vlist-s"], [new wt("​")]);
    S = [it(["vlist-r"], [x, L]), it(["vlist-r"], [M])];
  } else
    S = [it(["vlist-r"], [x])];
  var z = it(["vlist-t"], S);
  return S.length === 2 && z.classes.push("vlist-t2"), z.height = g, z.depth = -p, z;
}, E1 = (n, e) => {
  var t = it(["mspace"], [], e), r = Te(n, e);
  return t.style.marginRight = H(r), t;
}, $r = function(e, t, r) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && r === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, ys = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, ws = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, F1 = function(e, t) {
  var [r, a, i] = ws[e], l = new y0(r), s = new c0([l], {
    width: H(a),
    height: H(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + H(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), o = vs(["overlay"], [s], t);
  return o.height = i, o.style.height = H(i), o.style.width = H(a), o;
}, A = {
  fontMap: ys,
  makeSymbol: Tt,
  mathsym: v1,
  makeSpan: it,
  makeSvgSpan: vs,
  makeLineSpan: k1,
  makeAnchor: D1,
  makeFragment: bs,
  wrapFragment: S1,
  makeVList: $1,
  makeOrd: y1,
  makeGlue: E1,
  staticSvg: F1,
  svgData: ws,
  tryCombineChars: x1
}, Ce = {
  number: 3,
  unit: "mu"
}, D0 = {
  number: 4,
  unit: "mu"
}, a0 = {
  number: 5,
  unit: "mu"
}, C1 = {
  mord: {
    mop: Ce,
    mbin: D0,
    mrel: a0,
    minner: Ce
  },
  mop: {
    mord: Ce,
    mop: Ce,
    mrel: a0,
    minner: Ce
  },
  mbin: {
    mord: D0,
    mop: D0,
    mopen: D0,
    minner: D0
  },
  mrel: {
    mord: a0,
    mop: a0,
    mopen: a0,
    minner: a0
  },
  mopen: {},
  mclose: {
    mop: Ce,
    mbin: D0,
    mrel: a0,
    minner: Ce
  },
  mpunct: {
    mord: Ce,
    mop: Ce,
    mrel: a0,
    mopen: Ce,
    mclose: Ce,
    mpunct: Ce,
    minner: Ce
  },
  minner: {
    mord: Ce,
    mop: Ce,
    mbin: D0,
    mrel: a0,
    mopen: Ce,
    mpunct: Ce,
    minner: Ce
  }
}, T1 = {
  mord: {
    mop: Ce
  },
  mop: {
    mord: Ce,
    mop: Ce
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Ce
  },
  mpunct: {},
  minner: {
    mop: Ce
  }
}, xs = {}, en = {}, tn = {};
function G(n) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = n, s = {
    type: e,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: a
  }, o = 0; o < t.length; ++o)
    xs[t[o]] = s;
  e && (i && (en[e] = i), l && (tn[e] = l));
}
function F0(n) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = n;
  G({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: r
  });
}
var rn = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, qe = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, h0 = A.makeSpan, M1 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], z1 = ["rightmost", "mrel", "mclose", "mpunct"], B1 = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
}, N1 = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Pe = function(e, t, r, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var s = de(e[l], t);
    if (s instanceof cr) {
      var o = s.children;
      i.push(...o);
    } else
      i.push(s);
  }
  if (A.tryCombineChars(i), !r)
    return i;
  var h = t;
  if (e.length === 1) {
    var d = e[0];
    d.type === "sizing" ? h = t.havingSize(d.size) : d.type === "styling" && (h = t.havingStyle(B1[d.style]));
  }
  var p = h0([a[0] || "leftmost"], [], t), g = h0([a[1] || "rightmost"], [], t), _ = r === "root";
  return Mi(i, (E, C) => {
    var $ = C.classes[0], F = E.classes[0];
    $ === "mbin" && J.contains(z1, F) ? C.classes[0] = "mord" : F === "mbin" && J.contains(M1, $) && (E.classes[0] = "mord");
  }, {
    node: p
  }, g, _), Mi(i, (E, C) => {
    var $ = ta(C), F = ta(E), w = $ && F ? E.hasClass("mtight") ? T1[$][F] : C1[$][F] : null;
    if (w)
      return A.makeGlue(w, h);
  }, {
    node: p
  }, g, _), i;
}, Mi = function n(e, t, r, a, i) {
  a && e.push(a);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], o = ks(s);
    if (o) {
      n(o.children, t, r, null, i);
      continue;
    }
    var h = !s.hasClass("mspace");
    if (h) {
      var d = t(s, r.node);
      d && (r.insertAfter ? r.insertAfter(d) : (e.unshift(d), l++));
    }
    h ? r.node = s : i && s.hasClass("newline") && (r.node = h0(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((p) => (g) => {
      e.splice(p + 1, 0, g), l++;
    })(l);
  }
  a && e.pop();
}, ks = function(e) {
  return e instanceof cr || e instanceof Fa || e instanceof hr && e.hasClass("enclosing") ? e : null;
}, q1 = function n(e, t) {
  var r = ks(e);
  if (r) {
    var a = r.children;
    if (a.length) {
      if (t === "right")
        return n(a[a.length - 1], "right");
      if (t === "left")
        return n(a[0], "left");
    }
  }
  return e;
}, ta = function(e, t) {
  return e ? (t && (e = q1(e, t)), N1[e.classes[0]] || null) : null;
}, ur = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return h0(t.concat(r));
}, de = function(e, t, r) {
  if (!e)
    return h0();
  if (en[e.type]) {
    var a = en[e.type](e, t);
    if (r && t.size !== r.size) {
      a = h0(t.sizingClasses(r), [a], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new R("Got group of unknown type: '" + e.type + "'");
};
function Er(n, e) {
  var t = h0(["base"], n, e), r = h0(["strut"]);
  return r.style.height = H(t.height + t.depth), t.depth && (r.style.verticalAlign = H(-t.depth)), t.children.unshift(r), t;
}
function ra(n, e) {
  var t = null;
  n.length === 1 && n[0].type === "tag" && (t = n[0].tag, n = n[0].body);
  var r = Pe(n, e, "root"), a;
  r.length === 2 && r[1].hasClass("tag") && (a = r.pop());
  for (var i = [], l = [], s = 0; s < r.length; s++)
    if (l.push(r[s]), r[s].hasClass("mbin") || r[s].hasClass("mrel") || r[s].hasClass("allowbreak")) {
      for (var o = !1; s < r.length - 1 && r[s + 1].hasClass("mspace") && !r[s + 1].hasClass("newline"); )
        s++, l.push(r[s]), r[s].hasClass("nobreak") && (o = !0);
      o || (i.push(Er(l, e)), l = []);
    } else r[s].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(Er(l, e)), l = []), i.push(r[s]));
  l.length > 0 && i.push(Er(l, e));
  var h;
  t ? (h = Er(Pe(t, e, !0)), h.classes = ["tag"], i.push(h)) : a && i.push(a);
  var d = h0(["katex-html"], i);
  if (d.setAttribute("aria-hidden", "true"), h) {
    var p = h.children[0];
    p.style.height = H(d.height + d.depth), d.depth && (p.style.verticalAlign = H(-d.depth));
  }
  return d;
}
function Ds(n) {
  return new cr(n);
}
class mt {
  constructor(e, t, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = b0(this.classes));
    for (var r = 0; r < this.children.length; r++)
      if (this.children[r] instanceof Ut && this.children[r + 1] instanceof Ut) {
        for (var a = this.children[r].toText() + this.children[++r].toText(); this.children[r + 1] instanceof Ut; )
          a += this.children[++r].toText();
        e.appendChild(new Ut(a).toNode());
      } else
        e.appendChild(this.children[r].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += J.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + J.escape(b0(this.classes)) + '"'), e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Ut {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return J.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class R1 {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", H(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + H(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var q = {
  MathNode: mt,
  TextNode: Ut,
  SpaceNode: R1,
  newDocumentFragment: Ds
}, xt = function(e, t, r) {
  return we[t][e] && we[t][e].replace && e.charCodeAt(0) !== 55349 && !(_s.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = we[t][e].replace), new q.TextNode(e);
}, Ta = function(e) {
  return e.length === 1 ? e[0] : new q.MathNode("mrow", e);
}, Ma = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var r = t.font;
  if (!r || r === "mathnormal")
    return null;
  var a = e.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathsfit")
    return "sans-serif-italic";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var i = e.text;
  if (J.contains(["\\imath", "\\jmath"], i))
    return null;
  we[a][i] && we[a][i].replace && (i = we[a][i].replace);
  var l = A.fontMap[r].fontName;
  return Ea(i, l, a) ? A.fontMap[r].variant : null;
};
function Tn(n) {
  if (!n)
    return !1;
  if (n.type === "mi" && n.children.length === 1) {
    var e = n.children[0];
    return e instanceof Ut && e.text === ".";
  } else if (n.type === "mo" && n.children.length === 1 && n.getAttribute("separator") === "true" && n.getAttribute("lspace") === "0em" && n.getAttribute("rspace") === "0em") {
    var t = n.children[0];
    return t instanceof Ut && t.text === ",";
  } else
    return !1;
}
var lt = function(e, t, r) {
  if (e.length === 1) {
    var a = be(e[0], t);
    return r && a instanceof mt && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], l, s = 0; s < e.length; s++) {
    var o = be(e[s], t);
    if (o instanceof mt && l instanceof mt) {
      if (o.type === "mtext" && l.type === "mtext" && o.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (Tn(o) && l.type === "mn") {
        l.children.push(...o.children);
        continue;
      } else if (o.type === "mn" && Tn(l))
        o.children = [...l.children, ...o.children], i.pop();
      else if ((o.type === "msup" || o.type === "msub") && o.children.length >= 1 && (l.type === "mn" || Tn(l))) {
        var h = o.children[0];
        h instanceof mt && h.type === "mn" && (h.children = [...l.children, ...h.children], i.pop());
      } else if (l.type === "mi" && l.children.length === 1) {
        var d = l.children[0];
        if (d instanceof Ut && d.text === "̸" && (o.type === "mo" || o.type === "mi" || o.type === "mn")) {
          var p = o.children[0];
          p instanceof Ut && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), i.pop());
        }
      }
    }
    i.push(o), l = o;
  }
  return i;
}, w0 = function(e, t, r) {
  return Ta(lt(e, t, r));
}, be = function(e, t) {
  if (!e)
    return new q.MathNode("mrow");
  if (tn[e.type]) {
    var r = tn[e.type](e, t);
    return r;
  } else
    throw new R("Got group of unknown type: '" + e.type + "'");
};
function zi(n, e, t, r, a) {
  var i = lt(n, t), l;
  i.length === 1 && i[0] instanceof mt && J.contains(["mrow", "mtable"], i[0].type) ? l = i[0] : l = new q.MathNode("mrow", i);
  var s = new q.MathNode("annotation", [new q.TextNode(e)]);
  s.setAttribute("encoding", "application/x-tex");
  var o = new q.MathNode("semantics", [l, s]), h = new q.MathNode("math", [o]);
  h.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && h.setAttribute("display", "block");
  var d = a ? "katex" : "katex-mathml";
  return A.makeSpan([d], [h]);
}
var Ss = function(e) {
  return new s0({
    style: e.displayMode ? re.DISPLAY : re.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, As = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = A.makeSpan(r, [e]);
  }
  return e;
}, I1 = function(e, t, r) {
  var a = Ss(r), i;
  if (r.output === "mathml")
    return zi(e, t, a, r.displayMode, !0);
  if (r.output === "html") {
    var l = ra(e, a);
    i = A.makeSpan(["katex"], [l]);
  } else {
    var s = zi(e, t, a, r.displayMode, !1), o = ra(e, a);
    i = A.makeSpan(["katex"], [s, o]);
  }
  return As(i, r);
}, L1 = function(e, t, r) {
  var a = Ss(r), i = ra(e, a), l = A.makeSpan(["katex"], [i]);
  return As(l, r);
}, O1 = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, P1 = function(e) {
  var t = new q.MathNode("mo", [new q.TextNode(O1[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, H1 = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, U1 = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, G1 = function(e, t) {
  function r() {
    var s = 4e5, o = e.label.slice(1);
    if (J.contains(["widehat", "widecheck", "widetilde", "utilde"], o)) {
      var h = e, d = U1(h.base), p, g, _;
      if (d > 5)
        o === "widehat" || o === "widecheck" ? (p = 420, s = 2364, _ = 0.42, g = o + "4") : (p = 312, s = 2340, _ = 0.34, g = "tilde4");
      else {
        var E = [1, 1, 2, 2, 3, 3][d];
        o === "widehat" || o === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][E], p = [0, 239, 300, 360, 420][E], _ = [0, 0.24, 0.3, 0.3, 0.36, 0.42][E], g = o + E) : (s = [0, 600, 1033, 2339, 2340][E], p = [0, 260, 286, 306, 312][E], _ = [0, 0.26, 0.286, 0.3, 0.306, 0.34][E], g = "tilde" + E);
      }
      var C = new y0(g), $ = new c0([C], {
        width: "100%",
        height: H(_),
        viewBox: "0 0 " + s + " " + p,
        preserveAspectRatio: "none"
      });
      return {
        span: A.makeSvgSpan([], [$], t),
        minWidth: 0,
        height: _
      };
    } else {
      var F = [], w = H1[o], [v, x, S] = w, T = S / 1e3, M = v.length, L, z;
      if (M === 1) {
        var B = w[3];
        L = ["hide-tail"], z = [B];
      } else if (M === 2)
        L = ["halfarrow-left", "halfarrow-right"], z = ["xMinYMin", "xMaxYMin"];
      else if (M === 3)
        L = ["brace-left", "brace-center", "brace-right"], z = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + M + " children.");
      for (var W = 0; W < M; W++) {
        var V = new y0(v[W]), le = new c0([V], {
          width: "400em",
          height: H(T),
          viewBox: "0 0 " + s + " " + S,
          preserveAspectRatio: z[W] + " slice"
        }), X = A.makeSvgSpan([L[W]], [le], t);
        if (M === 1)
          return {
            span: X,
            minWidth: x,
            height: T
          };
        X.style.height = H(T), F.push(X);
      }
      return {
        span: A.makeSpan(["stretchy"], F, t),
        minWidth: x,
        height: T
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: l
  } = r();
  return a.height = l, a.style.height = H(l), i > 0 && (a.style.minWidth = H(i)), a;
}, V1 = function(e, t, r, a, i) {
  var l, s = e.height + e.depth + r + a;
  if (/fbox|color|angl/.test(t)) {
    if (l = A.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var o = i.color && i.getColor();
      o && (l.style.borderColor = o);
    }
  } else {
    var h = [];
    /^[bx]cancel$/.test(t) && h.push(new Jn({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && h.push(new Jn({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var d = new c0(h, {
      width: "100%",
      height: H(s)
    });
    l = A.makeSvgSpan([], [d], i);
  }
  return l.height = s, l.style.height = H(s), l;
}, m0 = {
  encloseSpan: V1,
  mathMLnode: P1,
  svgSpan: G1
};
function se(n, e) {
  if (!n || n.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (n ? "node of type " + n.type : String(n)));
  return n;
}
function za(n) {
  var e = cn(n);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (n ? "node of type " + n.type : String(n)));
  return e;
}
function cn(n) {
  return n && (n.type === "atom" || g1.hasOwnProperty(n.type)) ? n : null;
}
var Ba = (n, e) => {
  var t, r, a;
  n && n.type === "supsub" ? (r = se(n.base, "accent"), t = r.base, n.base = t, a = f1(de(n, e)), n.base = r) : (r = se(n, "accent"), t = r.base);
  var i = de(t, e.havingCrampedStyle()), l = r.isShifty && J.isCharacterBox(t), s = 0;
  if (l) {
    var o = J.getBaseElem(t), h = de(o, e.havingCrampedStyle());
    s = Ai(h).skew;
  }
  var d = r.label === "\\c", p = d ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), g;
  if (r.isStretchy)
    g = m0.svgSpan(r, e), g = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: g,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + H(2 * s) + ")",
          marginLeft: H(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var _, E;
    r.label === "\\vec" ? (_ = A.staticSvg("vec", e), E = A.svgData.vec[1]) : (_ = A.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), _ = Ai(_), _.italic = 0, E = _.width, d && (p += _.depth)), g = A.makeSpan(["accent-body"], [_]);
    var C = r.label === "\\textcircled";
    C && (g.classes.push("accent-full"), p = i.height);
    var $ = s;
    C || ($ -= E / 2), g.style.left = H($), r.label === "\\textcircled" && (g.style.top = ".2em"), g = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -p
      }, {
        type: "elem",
        elem: g
      }]
    }, e);
  }
  var F = A.makeSpan(["mord", "accent"], [g], e);
  return a ? (a.children[0] = F, a.height = Math.max(F.height, a.height), a.classes[0] = "mord", a) : F;
}, $s = (n, e) => {
  var t = n.isStretchy ? m0.mathMLnode(n.label) : new q.MathNode("mo", [xt(n.label, n.mode)]), r = new q.MathNode("mover", [be(n.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, W1 = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((n) => "\\" + n).join("|"));
G({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var t = rn(e[0]), r = !W1.test(n.funcName), a = !r || n.funcName === "\\widehat" || n.funcName === "\\widetilde" || n.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: n.parser.mode,
      label: n.funcName,
      isStretchy: r,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Ba,
  mathmlBuilder: $s
});
G({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = e[0], r = n.parser.mode;
    return r === "math" && (n.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + n.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: n.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Ba,
  mathmlBuilder: $s
});
G({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: r,
      base: a
    };
  },
  htmlBuilder: (n, e) => {
    var t = de(n.base, e), r = m0.svgSpan(n, e), a = n.label === "\\utilde" ? 0.12 : 0, i = A.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return A.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = m0.mathMLnode(n.label), r = new q.MathNode("munder", [be(n.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var Fr = (n) => {
  var e = new q.MathNode("mpadded", n ? [n] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
G({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n;
    return {
      type: "xArrow",
      mode: r.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(n, e) {
    var t = e.style, r = e.havingStyle(t.sup()), a = A.wrapFragment(de(n.body, r, e), e), i = n.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    n.below && (r = e.havingStyle(t.sub()), l = A.wrapFragment(de(n.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var s = m0.svgSpan(n, e), o = -e.fontMetrics().axisHeight + 0.5 * s.height, h = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (a.depth > 0.25 || n.label === "\\xleftequilibrium") && (h -= a.depth);
    var d;
    if (l) {
      var p = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      d = A.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: h
        }, {
          type: "elem",
          elem: s,
          shift: o
        }, {
          type: "elem",
          elem: l,
          shift: p
        }]
      }, e);
    } else
      d = A.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: h
        }, {
          type: "elem",
          elem: s,
          shift: o
        }]
      }, e);
    return d.children[0].children[0].children[1].classes.push("svg-align"), A.makeSpan(["mrel", "x-arrow"], [d], e);
  },
  mathmlBuilder(n, e) {
    var t = m0.mathMLnode(n.label);
    t.setAttribute("minsize", n.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (n.body) {
      var a = Fr(be(n.body, e));
      if (n.below) {
        var i = Fr(be(n.below, e));
        r = new q.MathNode("munderover", [t, i, a]);
      } else
        r = new q.MathNode("mover", [t, a]);
    } else if (n.below) {
      var l = Fr(be(n.below, e));
      r = new q.MathNode("munder", [t, l]);
    } else
      r = Fr(), r = new q.MathNode("mover", [t, r]);
    return r;
  }
});
var j1 = A.makeSpan;
function Es(n, e) {
  var t = Pe(n.body, e, !0);
  return j1([n.mclass], t, e);
}
function Fs(n, e) {
  var t, r = lt(n.body, e);
  return n.mclass === "minner" ? t = new q.MathNode("mpadded", r) : n.mclass === "mord" ? n.isCharacterBox ? (t = r[0], t.type = "mi") : t = new q.MathNode("mi", r) : (n.isCharacterBox ? (t = r[0], t.type = "mo") : t = new q.MathNode("mo", r), n.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : n.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : n.mclass === "mopen" || n.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : n.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
G({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: qe(a),
      isCharacterBox: J.isCharacterBox(a)
    };
  },
  htmlBuilder: Es,
  mathmlBuilder: Fs
});
var hn = (n) => {
  var e = n.type === "ordgroup" && n.body.length ? n.body[0] : n;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
G({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: hn(e[0]),
      body: qe(e[1]),
      isCharacterBox: J.isCharacterBox(e[1])
    };
  }
});
G({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[1], i = e[0], l;
    r !== "\\stackrel" ? l = hn(a) : l = "mrel";
    var s = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: qe(a)
    }, o = {
      type: "supsub",
      mode: i.mode,
      base: s,
      sup: r === "\\underset" ? null : i,
      sub: r === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [o],
      isCharacterBox: J.isCharacterBox(o)
    };
  },
  htmlBuilder: Es,
  mathmlBuilder: Fs
});
G({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: hn(e[0]),
      body: qe(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = Pe(n.body, e, !0), r = A.makeSpan([n.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(n, e) {
    var t = lt(n.body, e), r = new q.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var X1 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Bi = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ni = (n) => n.type === "textord" && n.text === "@", Y1 = (n, e) => (n.type === "mathord" || n.type === "atom") && n.text === e;
function Z1(n, e, t) {
  var r = X1[n];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(r, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [i], []), s = t.callFunction("\\\\cdright", [e[1]], []), o = {
        type: "ordgroup",
        mode: "math",
        body: [a, l, s]
      };
      return t.callFunction("\\\\cdparent", [o], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var h = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [h], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function K1(n) {
  var e = [];
  for (n.gullet.beginGroup(), n.gullet.macros.set("\\cr", "\\\\\\relax"), n.gullet.beginGroup(); ; ) {
    e.push(n.parseExpression(!1, "\\\\")), n.gullet.endGroup(), n.gullet.beginGroup();
    var t = n.fetch().text;
    if (t === "&" || t === "\\\\")
      n.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new R("Expected \\\\ or \\cr or \\end", n.nextToken);
  }
  for (var r = [], a = [r], i = 0; i < e.length; i++) {
    for (var l = e[i], s = Bi(), o = 0; o < l.length; o++)
      if (!Ni(l[o]))
        s.body.push(l[o]);
      else {
        r.push(s), o += 1;
        var h = za(l[o]).text, d = new Array(2);
        if (d[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, d[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(h) > -1)) if ("<>AV".indexOf(h) > -1)
          for (var p = 0; p < 2; p++) {
            for (var g = !0, _ = o + 1; _ < l.length; _++) {
              if (Y1(l[_], h)) {
                g = !1, o = _;
                break;
              }
              if (Ni(l[_]))
                throw new R("Missing a " + h + " character to complete a CD arrow.", l[_]);
              d[p].body.push(l[_]);
            }
            if (g)
              throw new R("Missing a " + h + " character to complete a CD arrow.", l[o]);
          }
        else
          throw new R('Expected one of "<>AV=|." after @', l[o]);
        var E = Z1(h, d, n), C = {
          type: "styling",
          body: [E],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(C), s = Bi();
      }
    i % 2 === 0 ? r.push(s) : r.shift(), r = [], a.push(r);
  }
  n.gullet.endGroup(), n.gullet.endGroup();
  var $ = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: $,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
G({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: r.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = e.havingStyle(e.style.sup()), r = A.wrapFragment(de(n.label, t, e), e);
    return r.classes.push("cd-label-" + n.side), r.style.bottom = H(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mrow", [be(n.label, e)]);
    return t = new q.MathNode("mpadded", [t]), t.setAttribute("width", "0"), n.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new q.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
G({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = A.wrapFragment(de(n.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(n, e) {
    return new q.MathNode("mrow", [be(n.fragment, e)]);
  }
});
G({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    for (var {
      parser: t
    } = n, r = se(e[0], "ordgroup"), a = r.body, i = "", l = 0; l < a.length; l++) {
      var s = se(a[l], "textord");
      i += s.text;
    }
    var o = parseInt(i), h;
    if (isNaN(o))
      throw new R("\\@char has non-numeric argument " + i);
    if (o < 0 || o >= 1114111)
      throw new R("\\@char with invalid code point " + i);
    return o <= 65535 ? h = String.fromCharCode(o) : (o -= 65536, h = String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: h
    };
  }
});
var Cs = (n, e) => {
  var t = Pe(n.body, e.withColor(n.color), !1);
  return A.makeFragment(t);
}, Ts = (n, e) => {
  var t = lt(n.body, e.withColor(n.color)), r = new q.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", n.color), r;
};
G({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = se(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: qe(a)
    };
  },
  htmlBuilder: Cs,
  mathmlBuilder: Ts
});
G({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(n, e) {
    var {
      parser: t,
      breakOnTokenText: r
    } = n, a = se(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Cs,
  mathmlBuilder: Ts
});
G({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, i = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: i,
      size: a && se(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(n, e) {
    var t = A.makeSpan(["mspace"], [], e);
    return n.newLine && (t.classes.push("newline"), n.size && (t.style.marginTop = H(Te(n.size, e)))), t;
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mspace");
    return n.newLine && (t.setAttribute("linebreak", "newline"), n.size && t.setAttribute("height", H(Te(n.size, e)))), t;
  }
});
var na = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Ms = (n) => {
  var e = n.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new R("Expected a control sequence", n);
  return e;
}, Q1 = (n) => {
  var e = n.gullet.popToken();
  return e.text === "=" && (e = n.gullet.popToken(), e.text === " " && (e = n.gullet.popToken())), e;
}, zs = (n, e, t, r) => {
  var a = n.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !n.gullet.isExpandable(t.text)
  }), n.gullet.macros.set(e, a, r);
};
G({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    e.consumeSpaces();
    var r = e.fetch();
    if (na[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = na[r.text]), se(e.parseFunction(), "internal");
    throw new R("Invalid token after macro prefix", r);
  }
});
G({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = e.gullet.popToken(), a = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new R("Expected a control sequence", r);
    for (var i = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new R('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new R('Argument number "' + r.text + '" out of order');
        i++, s.push([]);
      } else {
        if (r.text === "EOF")
          throw new R("Expected a macro definition");
        s[i].push(r.text);
      }
    var {
      tokens: o
    } = e.gullet.consumeArg();
    return l && o.unshift(l), (t === "\\edef" || t === "\\xdef") && (o = e.gullet.expandTokens(o), o.reverse()), e.gullet.macros.set(a, {
      tokens: o,
      numArgs: i,
      delimiters: s
    }, t === na[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
G({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = Ms(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = Q1(e);
    return zs(e, r, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
G({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = Ms(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return zs(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var tr = function(e, t, r) {
  var a = we.math[e] && we.math[e].replace, i = Ea(a || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Na = function(e, t, r, a) {
  var i = r.havingBaseStyle(t), l = A.makeSpan(a.concat(i.sizingClasses(r)), [e], r), s = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = i.sizeMultiplier, l;
}, Bs = function(e, t, r) {
  var a = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = H(i), e.height -= i, e.depth += i;
}, J1 = function(e, t, r, a, i, l) {
  var s = A.makeSymbol(e, "Main-Regular", i, a), o = Na(s, t, a, l);
  return r && Bs(o, a, t), o;
}, ec = function(e, t, r, a) {
  return A.makeSymbol(e, "Size" + t + "-Regular", r, a);
}, Ns = function(e, t, r, a, i, l) {
  var s = ec(e, t, i, a), o = Na(A.makeSpan(["delimsizing", "size" + t], [s], a), re.TEXT, a, l);
  return r && Bs(o, a, re.TEXT), o;
}, Mn = function(e, t, r) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = A.makeSpan(["delimsizinginner", a], [A.makeSpan([], [A.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, zn = function(e, t, r) {
  var a = Ht["Size4-Regular"][e.charCodeAt(0)] ? Ht["Size4-Regular"][e.charCodeAt(0)][4] : Ht["Size1-Regular"][e.charCodeAt(0)][4], i = new y0("inner", i1(e, Math.round(1e3 * t))), l = new c0([i], {
    width: H(a),
    height: H(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + H(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = A.makeSvgSpan([], [l], r);
  return s.height = t, s.style.height = H(t), s.style.width = H(a), {
    type: "elem",
    elem: s
  };
}, aa = 8e-3, Cr = {
  type: "kern",
  size: -1 * aa
}, tc = ["|", "\\lvert", "\\rvert", "\\vert"], rc = ["\\|", "\\lVert", "\\rVert", "\\Vert"], qs = function(e, t, r, a, i, l) {
  var s, o, h, d, p = "", g = 0;
  s = h = d = e, o = null;
  var _ = "Size1-Regular";
  e === "\\uparrow" ? h = d = "⏐" : e === "\\Uparrow" ? h = d = "‖" : e === "\\downarrow" ? s = h = "⏐" : e === "\\Downarrow" ? s = h = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", h = "⏐", d = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", h = "‖", d = "\\Downarrow") : J.contains(tc, e) ? (h = "∣", p = "vert", g = 333) : J.contains(rc, e) ? (h = "∥", p = "doublevert", g = 556) : e === "[" || e === "\\lbrack" ? (s = "⎡", h = "⎢", d = "⎣", _ = "Size4-Regular", p = "lbrack", g = 667) : e === "]" || e === "\\rbrack" ? (s = "⎤", h = "⎥", d = "⎦", _ = "Size4-Regular", p = "rbrack", g = 667) : e === "\\lfloor" || e === "⌊" ? (h = s = "⎢", d = "⎣", _ = "Size4-Regular", p = "lfloor", g = 667) : e === "\\lceil" || e === "⌈" ? (s = "⎡", h = d = "⎢", _ = "Size4-Regular", p = "lceil", g = 667) : e === "\\rfloor" || e === "⌋" ? (h = s = "⎥", d = "⎦", _ = "Size4-Regular", p = "rfloor", g = 667) : e === "\\rceil" || e === "⌉" ? (s = "⎤", h = d = "⎥", _ = "Size4-Regular", p = "rceil", g = 667) : e === "(" || e === "\\lparen" ? (s = "⎛", h = "⎜", d = "⎝", _ = "Size4-Regular", p = "lparen", g = 875) : e === ")" || e === "\\rparen" ? (s = "⎞", h = "⎟", d = "⎠", _ = "Size4-Regular", p = "rparen", g = 875) : e === "\\{" || e === "\\lbrace" ? (s = "⎧", o = "⎨", d = "⎩", h = "⎪", _ = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", o = "⎬", d = "⎭", h = "⎪", _ = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", d = "⎩", h = "⎪", _ = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", d = "⎭", h = "⎪", _ = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", d = "⎭", h = "⎪", _ = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", d = "⎩", h = "⎪", _ = "Size4-Regular");
  var E = tr(s, _, i), C = E.height + E.depth, $ = tr(h, _, i), F = $.height + $.depth, w = tr(d, _, i), v = w.height + w.depth, x = 0, S = 1;
  if (o !== null) {
    var T = tr(o, _, i);
    x = T.height + T.depth, S = 2;
  }
  var M = C + v + x, L = Math.max(0, Math.ceil((t - M) / (S * F))), z = M + L * S * F, B = a.fontMetrics().axisHeight;
  r && (B *= a.sizeMultiplier);
  var W = z / 2 - B, V = [];
  if (p.length > 0) {
    var le = z - C - v, X = Math.round(z * 1e3), ge = l1(p, Math.round(le * 1e3)), pe = new y0(p, ge), ce = (g / 1e3).toFixed(3) + "em", he = (X / 1e3).toFixed(3) + "em", xe = new c0([pe], {
      width: ce,
      height: he,
      viewBox: "0 0 " + g + " " + X
    }), fe = A.makeSvgSpan([], [xe], a);
    fe.height = X / 1e3, fe.style.width = ce, fe.style.height = he, V.push({
      type: "elem",
      elem: fe
    });
  } else {
    if (V.push(Mn(d, _, i)), V.push(Cr), o === null) {
      var ae = z - C - v + 2 * aa;
      V.push(zn(h, ae, a));
    } else {
      var P = (z - C - v - x) / 2 + 2 * aa;
      V.push(zn(h, P, a)), V.push(Cr), V.push(Mn(o, _, i)), V.push(Cr), V.push(zn(h, P, a));
    }
    V.push(Cr), V.push(Mn(s, _, i));
  }
  var Z = a.havingBaseStyle(re.TEXT), Ne = A.makeVList({
    positionType: "bottom",
    positionData: W,
    children: V
  }, Z);
  return Na(A.makeSpan(["delimsizing", "mult"], [Ne], Z), re.TEXT, a, l);
}, Bn = 80, Nn = 0.08, qn = function(e, t, r, a, i) {
  var l = a1(e, a, r), s = new y0(e, l), o = new c0([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: H(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return A.makeSvgSpan(["hide-tail"], [o], i);
}, nc = function(e, t) {
  var r = t.havingBaseSizing(), a = Os("\\surd", e * r.sizeMultiplier, Ls, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, o = 0, h = 0, d = 0, p;
  return a.type === "small" ? (d = 1e3 + 1e3 * l + Bn, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), o = (1 + l + Nn) / i, h = (1 + l) / i, s = qn("sqrtMain", o, d, l, t), s.style.minWidth = "0.853em", p = 0.833 / i) : a.type === "large" ? (d = (1e3 + Bn) * ar[a.size], h = (ar[a.size] + l) / i, o = (ar[a.size] + l + Nn) / i, s = qn("sqrtSize" + a.size, o, d, l, t), s.style.minWidth = "1.02em", p = 1 / i) : (o = e + l + Nn, h = e + l, d = Math.floor(1e3 * e + l) + Bn, s = qn("sqrtTall", o, d, l, t), s.style.minWidth = "0.742em", p = 1.056), s.height = h, s.style.height = H(o), {
    span: s,
    advanceWidth: p,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Rs = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], ac = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Is = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], ar = [0, 1.2, 1.8, 2.4, 3], ic = function(e, t, r, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), J.contains(Rs, e) || J.contains(Is, e))
    return Ns(e, t, !1, r, a, i);
  if (J.contains(ac, e))
    return qs(e, ar[t], !1, r, a, i);
  throw new R("Illegal delimiter: '" + e + "'");
}, lc = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], sc = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "stack"
}], Ls = [{
  type: "small",
  style: re.SCRIPTSCRIPT
}, {
  type: "small",
  style: re.SCRIPT
}, {
  type: "small",
  style: re.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], oc = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Os = function(e, t, r, a) {
  for (var i = Math.min(2, 3 - a.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var s = tr(e, oc(r[l]), "math"), o = s.height + s.depth;
    if (r[l].type === "small") {
      var h = a.havingBaseStyle(r[l].style);
      o *= h.sizeMultiplier;
    }
    if (o > t)
      return r[l];
  }
  return r[r.length - 1];
}, Ps = function(e, t, r, a, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  J.contains(Is, e) ? s = lc : J.contains(Rs, e) ? s = Ls : s = sc;
  var o = Os(e, t, s, a);
  return o.type === "small" ? J1(e, o.style, r, a, i, l) : o.type === "large" ? Ns(e, o.size, r, a, i, l) : qs(e, t, r, a, i, l);
}, uc = function(e, t, r, a, i, l) {
  var s = a.fontMetrics().axisHeight * a.sizeMultiplier, o = 901, h = 5 / a.fontMetrics().ptPerEm, d = Math.max(t - s, r + s), p = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    d / 500 * o,
    2 * d - h
  );
  return Ps(e, p, !0, a, i, l);
}, u0 = {
  sqrtImage: nc,
  sizedDelim: ic,
  sizeToMaxHeight: ar,
  customSizedDelim: Ps,
  leftRightDelim: uc
}, qi = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, cc = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function mn(n, e) {
  var t = cn(n);
  if (t && J.contains(cc, t.text))
    return t;
  throw t ? new R("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", n) : new R("Invalid delimiter type '" + n.type + "'", n);
}
G({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (n, e) => {
    var t = mn(e[0], n);
    return {
      type: "delimsizing",
      mode: n.parser.mode,
      size: qi[n.funcName].size,
      mclass: qi[n.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => n.delim === "." ? A.makeSpan([n.mclass]) : u0.sizedDelim(n.delim, n.size, e, n.mode, [n.mclass]),
  mathmlBuilder: (n) => {
    var e = [];
    n.delim !== "." && e.push(xt(n.delim, n.mode));
    var t = new q.MathNode("mo", e);
    n.mclass === "mopen" || n.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = H(u0.sizeToMaxHeight[n.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function Ri(n) {
  if (!n.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
G({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = n.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new R("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: n.parser.mode,
      delim: mn(e[0], n).text,
      color: t
      // undefined if not set via \color
    };
  }
});
G({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = mn(e[0], n), r = n.parser;
    ++r.leftrightDepth;
    var a = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = se(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (n, e) => {
    Ri(n);
    for (var t = Pe(n.body, e, !0, ["mopen", "mclose"]), r = 0, a = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), a = Math.max(t[l].depth, a));
    r *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var s;
    if (n.left === "." ? s = ur(e, ["mopen"]) : s = u0.leftRightDelim(n.left, r, a, e, n.mode, ["mopen"]), t.unshift(s), i)
      for (var o = 1; o < t.length; o++) {
        var h = t[o], d = h.isMiddle;
        d && (t[o] = u0.leftRightDelim(d.delim, r, a, d.options, n.mode, []));
      }
    var p;
    if (n.right === ".")
      p = ur(e, ["mclose"]);
    else {
      var g = n.rightColor ? e.withColor(n.rightColor) : e;
      p = u0.leftRightDelim(n.right, r, a, g, n.mode, ["mclose"]);
    }
    return t.push(p), A.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (n, e) => {
    Ri(n);
    var t = lt(n.body, e);
    if (n.left !== ".") {
      var r = new q.MathNode("mo", [xt(n.left, n.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (n.right !== ".") {
      var a = new q.MathNode("mo", [xt(n.right, n.mode)]);
      a.setAttribute("fence", "true"), n.rightColor && a.setAttribute("mathcolor", n.rightColor), t.push(a);
    }
    return Ta(t);
  }
});
G({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var t = mn(e[0], n);
    if (!n.parser.leftrightDepth)
      throw new R("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: n.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    if (n.delim === ".")
      t = ur(e, []);
    else {
      t = u0.sizedDelim(n.delim, 1, e, n.mode, []);
      var r = {
        delim: n.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (n, e) => {
    var t = n.delim === "\\vert" || n.delim === "|" ? xt("|", "text") : xt(n.delim, n.mode), r = new q.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var qa = (n, e) => {
  var t = A.wrapFragment(de(n.body, e), e), r = n.label.slice(1), a = e.sizeMultiplier, i, l = 0, s = J.isCharacterBox(n.body);
  if (r === "sout")
    i = A.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var o = Te({
      number: 0.6,
      unit: "pt"
    }, e), h = Te({
      number: 0.35,
      unit: "ex"
    }, e), d = e.havingBaseSizing();
    a = a / d.sizeMultiplier;
    var p = t.height + t.depth + o + h;
    t.style.paddingLeft = H(p / 2 + o);
    var g = Math.floor(1e3 * p * a), _ = r1(g), E = new c0([new y0("phase", _)], {
      width: "400em",
      height: H(g / 1e3),
      viewBox: "0 0 400000 " + g,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = A.makeSvgSpan(["hide-tail"], [E], e), i.style.height = H(p), l = t.depth + o + h;
  } else {
    /cancel/.test(r) ? s || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var C = 0, $ = 0, F = 0;
    /box/.test(r) ? (F = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), C = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : F), $ = C) : r === "angl" ? (F = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), C = 4 * F, $ = Math.max(0, 0.25 - t.depth)) : (C = s ? 0.2 : 0, $ = C), i = m0.encloseSpan(t, r, C, $, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = H(F)) : r === "angl" && F !== 0.049 && (i.style.borderTopWidth = H(F), i.style.borderRightWidth = H(F)), l = t.depth + $, n.backgroundColor && (i.style.backgroundColor = n.backgroundColor, n.borderColor && (i.style.borderColor = n.borderColor));
  }
  var w;
  if (n.backgroundColor)
    w = A.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var v = /cancel|phase/.test(r) ? ["svg-align"] : [];
    w = A.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: l,
          wrapperClasses: v
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (w.height = t.height, w.depth = t.depth), /cancel/.test(r) && !s ? A.makeSpan(["mord", "cancel-lap"], [w], e) : A.makeSpan(["mord"], [w], e);
}, Ra = (n, e) => {
  var t = 0, r = new q.MathNode(n.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [be(n.body, e)]);
  switch (n.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * t + "pt"), r.setAttribute("height", "+" + 2 * t + "pt"), r.setAttribute("lspace", t + "pt"), r.setAttribute("voffset", t + "pt"), n.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + a + "em solid " + String(n.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return n.backgroundColor && r.setAttribute("mathbackground", n.backgroundColor), r;
};
G({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n, i = se(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: qa,
  mathmlBuilder: Ra
});
G({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(n, e, t) {
    var {
      parser: r,
      funcName: a
    } = n, i = se(e[0], "color-token").color, l = se(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: s
    };
  },
  htmlBuilder: qa,
  mathmlBuilder: Ra
});
G({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
G({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: r,
      body: a
    };
  },
  htmlBuilder: qa,
  mathmlBuilder: Ra
});
G({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Hs = {};
function Zt(n) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: l
  } = n, s = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, o = 0; o < t.length; ++o)
    Hs[t[o]] = s;
  i && (en[e] = i), l && (tn[e] = l);
}
var Us = {};
function f(n, e) {
  Us[n] = e;
}
function Ii(n) {
  var e = [];
  n.consumeSpaces();
  var t = n.fetch().text;
  for (t === "\\relax" && (n.consume(), n.consumeSpaces(), t = n.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    n.consume(), e.push(t === "\\hdashline"), n.consumeSpaces(), t = n.fetch().text;
  return e;
}
var dn = (n) => {
  var e = n.parser.settings;
  if (!e.displayMode)
    throw new R("{" + n.envName + "} can be used only in display mode.");
};
function Ia(n) {
  if (n.indexOf("ed") === -1)
    return n.indexOf("*") === -1;
}
function x0(n, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: s,
    autoTag: o,
    singleRow: h,
    emptySingleRow: d,
    maxNumCols: p,
    leqno: g
  } = e;
  if (n.gullet.beginGroup(), h || n.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var _ = n.gullet.expandMacroAsText("\\arraystretch");
    if (_ == null)
      l = 1;
    else if (l = parseFloat(_), !l || l < 0)
      throw new R("Invalid \\arraystretch: " + _);
  }
  n.gullet.beginGroup();
  var E = [], C = [E], $ = [], F = [], w = o != null ? [] : void 0;
  function v() {
    o && n.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function x() {
    w && (n.gullet.macros.get("\\df@tag") ? (w.push(n.subparse([new yt("\\df@tag")])), n.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!o && n.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (v(), F.push(Ii(n)); ; ) {
    var S = n.parseExpression(!1, h ? "\\end" : "\\\\");
    n.gullet.endGroup(), n.gullet.beginGroup(), S = {
      type: "ordgroup",
      mode: n.mode,
      body: S
    }, t && (S = {
      type: "styling",
      mode: n.mode,
      style: t,
      body: [S]
    }), E.push(S);
    var T = n.fetch().text;
    if (T === "&") {
      if (p && E.length === p) {
        if (h || s)
          throw new R("Too many tab characters: &", n.nextToken);
        n.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      n.consume();
    } else if (T === "\\end") {
      x(), E.length === 1 && S.type === "styling" && S.body[0].body.length === 0 && (C.length > 1 || !d) && C.pop(), F.length < C.length + 1 && F.push([]);
      break;
    } else if (T === "\\\\") {
      n.consume();
      var M = void 0;
      n.gullet.future().text !== " " && (M = n.parseSizeGroup(!0)), $.push(M ? M.value : null), x(), F.push(Ii(n)), E = [], C.push(E), v();
    } else
      throw new R("Expected & or \\\\ or \\cr or \\end", n.nextToken);
  }
  return n.gullet.endGroup(), n.gullet.endGroup(), {
    type: "array",
    mode: n.mode,
    addJot: a,
    arraystretch: l,
    body: C,
    cols: i,
    rowGaps: $,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: F,
    colSeparationType: s,
    tags: w,
    leqno: g
  };
}
function La(n) {
  return n.slice(0, 1) === "d" ? "display" : "text";
}
var Kt = function(e, t) {
  var r, a, i = e.body.length, l = e.hLinesBeforeRow, s = 0, o = new Array(i), h = [], d = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), p = 1 / t.fontMetrics().ptPerEm, g = 5 * p;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var _ = t.havingStyle(re.SCRIPT).sizeMultiplier;
    g = 0.2778 * (_ / t.sizeMultiplier);
  }
  var E = e.colSeparationType === "CD" ? Te({
    number: 3,
    unit: "ex"
  }, t) : 12 * p, C = 3 * p, $ = e.arraystretch * E, F = 0.7 * $, w = 0.3 * $, v = 0;
  function x(Jt) {
    for (var e0 = 0; e0 < Jt.length; ++e0)
      e0 > 0 && (v += 0.25), h.push({
        pos: v,
        isDashed: Jt[e0]
      });
  }
  for (x(l[0]), r = 0; r < e.body.length; ++r) {
    var S = e.body[r], T = F, M = w;
    s < S.length && (s = S.length);
    var L = new Array(S.length);
    for (a = 0; a < S.length; ++a) {
      var z = de(S[a], t);
      M < z.depth && (M = z.depth), T < z.height && (T = z.height), L[a] = z;
    }
    var B = e.rowGaps[r], W = 0;
    B && (W = Te(B, t), W > 0 && (W += w, M < W && (M = W), W = 0)), e.addJot && (M += C), L.height = T, L.depth = M, v += T, L.pos = v, v += M + W, o[r] = L, x(l[r + 1]);
  }
  var V = v / 2 + t.fontMetrics().axisHeight, le = e.cols || [], X = [], ge, pe, ce = [];
  if (e.tags && e.tags.some((Jt) => Jt))
    for (r = 0; r < i; ++r) {
      var he = o[r], xe = he.pos - V, fe = e.tags[r], ae = void 0;
      fe === !0 ? ae = A.makeSpan(["eqn-num"], [], t) : fe === !1 ? ae = A.makeSpan([], [], t) : ae = A.makeSpan([], Pe(fe, t, !0), t), ae.depth = he.depth, ae.height = he.height, ce.push({
        type: "elem",
        elem: ae,
        shift: xe
      });
    }
  for (
    a = 0, pe = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < s || pe < le.length;
    ++a, ++pe
  ) {
    for (var P = le[pe] || {}, Z = !0; P.type === "separator"; ) {
      if (Z || (ge = A.makeSpan(["arraycolsep"], []), ge.style.width = H(t.fontMetrics().doubleRuleSep), X.push(ge)), P.separator === "|" || P.separator === ":") {
        var Ne = P.separator === "|" ? "solid" : "dashed", O = A.makeSpan(["vertical-separator"], [], t);
        O.style.height = H(v), O.style.borderRightWidth = H(d), O.style.borderRightStyle = Ne, O.style.margin = "0 " + H(-d / 2);
        var Ie = v - V;
        Ie && (O.style.verticalAlign = H(-Ie)), X.push(O);
      } else
        throw new R("Invalid separator type: " + P.separator);
      pe++, P = le[pe] || {}, Z = !1;
    }
    if (!(a >= s)) {
      var De = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (De = J.deflt(P.pregap, g), De !== 0 && (ge = A.makeSpan(["arraycolsep"], []), ge.style.width = H(De), X.push(ge)));
      var U = [];
      for (r = 0; r < i; ++r) {
        var ee = o[r], Se = ee[a];
        if (Se) {
          var ye = ee.pos - V;
          Se.depth = ee.depth, Se.height = ee.height, U.push({
            type: "elem",
            elem: Se,
            shift: ye
          });
        }
      }
      U = A.makeVList({
        positionType: "individualShift",
        children: U
      }, t), U = A.makeSpan(["col-align-" + (P.align || "c")], [U]), X.push(U), (a < s - 1 || e.hskipBeforeAndAfter) && (De = J.deflt(P.postgap, g), De !== 0 && (ge = A.makeSpan(["arraycolsep"], []), ge.style.width = H(De), X.push(ge)));
    }
  }
  if (o = A.makeSpan(["mtable"], X), h.length > 0) {
    for (var je = A.makeLineSpan("hline", t, d), Le = A.makeLineSpan("hdashline", t, d), He = [{
      type: "elem",
      elem: o,
      shift: 0
    }]; h.length > 0; ) {
      var Ee = h.pop(), st = Ee.pos - V;
      Ee.isDashed ? He.push({
        type: "elem",
        elem: Le,
        shift: st
      }) : He.push({
        type: "elem",
        elem: je,
        shift: st
      });
    }
    o = A.makeVList({
      positionType: "individualShift",
      children: He
    }, t);
  }
  if (ce.length === 0)
    return A.makeSpan(["mord"], [o], t);
  var Nt = A.makeVList({
    positionType: "individualShift",
    children: ce
  }, t);
  return Nt = A.makeSpan(["tag"], [Nt], t), A.makeFragment([o, Nt]);
}, hc = {
  c: "center ",
  l: "left ",
  r: "right "
}, Qt = function(e, t) {
  for (var r = [], a = new q.MathNode("mtd", [], ["mtr-glue"]), i = new q.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], o = [], h = 0; h < s.length; h++)
      o.push(new q.MathNode("mtd", [be(s[h], t)]));
    e.tags && e.tags[l] && (o.unshift(a), o.push(a), e.leqno ? o.unshift(i) : o.push(i)), r.push(new q.MathNode("mtr", o));
  }
  var d = new q.MathNode("mtable", r), p = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  d.setAttribute("rowspacing", H(p));
  var g = "", _ = "";
  if (e.cols && e.cols.length > 0) {
    var E = e.cols, C = "", $ = !1, F = 0, w = E.length;
    E[0].type === "separator" && (g += "top ", F = 1), E[E.length - 1].type === "separator" && (g += "bottom ", w -= 1);
    for (var v = F; v < w; v++)
      E[v].type === "align" ? (_ += hc[E[v].align], $ && (C += "none "), $ = !0) : E[v].type === "separator" && $ && (C += E[v].separator === "|" ? "solid " : "dashed ", $ = !1);
    d.setAttribute("columnalign", _.trim()), /[sd]/.test(C) && d.setAttribute("columnlines", C.trim());
  }
  if (e.colSeparationType === "align") {
    for (var x = e.cols || [], S = "", T = 1; T < x.length; T++)
      S += T % 2 ? "0em " : "1em ";
    d.setAttribute("columnspacing", S.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? d.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? d.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? d.setAttribute("columnspacing", "0.5em") : d.setAttribute("columnspacing", "1em");
  var M = "", L = e.hLinesBeforeRow;
  g += L[0].length > 0 ? "left " : "", g += L[L.length - 1].length > 0 ? "right " : "";
  for (var z = 1; z < L.length - 1; z++)
    M += L[z].length === 0 ? "none " : L[z][0] ? "dashed " : "solid ";
  return /[sd]/.test(M) && d.setAttribute("rowlines", M.trim()), g !== "" && (d = new q.MathNode("menclose", [d]), d.setAttribute("notation", g.trim())), e.arraystretch && e.arraystretch < 1 && (d = new q.MathNode("mstyle", [d]), d.setAttribute("scriptlevel", "1")), d;
}, Gs = function(e, t) {
  e.envName.indexOf("ed") === -1 && dn(e);
  var r = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = x0(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : Ia(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s, o = 0, h = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var d = "", p = 0; p < t[0].body.length; p++) {
      var g = se(t[0].body[p], "textord");
      d += g.text;
    }
    s = Number(d), o = s * 2;
  }
  var _ = !o;
  l.body.forEach(function(F) {
    for (var w = 1; w < F.length; w += 2) {
      var v = se(F[w], "styling"), x = se(v.body[0], "ordgroup");
      x.body.unshift(h);
    }
    if (_)
      o < F.length && (o = F.length);
    else {
      var S = F.length / 2;
      if (s < S)
        throw new R("Too many math in a row: " + ("expected " + s + ", but got " + S), F[0]);
    }
  });
  for (var E = 0; E < o; ++E) {
    var C = "r", $ = 0;
    E % 2 === 1 ? C = "l" : E > 0 && _ && ($ = 1), r[E] = {
      type: "align",
      align: C,
      pregap: $,
      postgap: 0
    };
  }
  return l.colSeparationType = _ ? "align" : "alignat", l;
};
Zt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = cn(e[0]), r = t ? [e[0]] : se(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = za(l), o = s.text;
      if ("lcr".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      if (o === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (o === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new R("Unknown column alignment: " + o, l);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return x0(n.parser, i, La(n.envName));
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[n.envName.replace("*", "")], t = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (n.envName.charAt(n.envName.length - 1) === "*") {
      var a = n.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new R("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = x0(n.parser, r, La(n.envName)), l = Math.max(0, ...i.body.map((s) => s.length));
    return i.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: n.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 0.5
    }, t = x0(n.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var t = cn(e[0]), r = t ? [e[0]] : se(e[0], "ordgroup").body, a = r.map(function(l) {
      var s = za(l), o = s.text;
      if ("lc".indexOf(o) !== -1)
        return {
          type: "align",
          align: o
        };
      throw new R("Unknown column alignment: " + o, l);
    });
    if (a.length > 1)
      throw new R("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = x0(n.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new R("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = x0(n.parser, e, La(n.envName));
    return {
      type: "leftright",
      mode: n.mode,
      body: [t],
      left: n.envName.indexOf("r") > -1 ? "." : "\\{",
      right: n.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Gs,
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    J.contains(["gather", "gather*"], n.envName) && dn(n);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Ia(n.envName),
      emptySingleRow: !0,
      leqno: n.parser.settings.leqno
    };
    return x0(n.parser, e, "display");
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Gs,
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(n) {
    dn(n);
    var e = {
      autoTag: Ia(n.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: n.parser.settings.leqno
    };
    return x0(n.parser, e, "display");
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
Zt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(n) {
    return dn(n), K1(n.parser);
  },
  htmlBuilder: Kt,
  mathmlBuilder: Qt
});
f("\\nonumber", "\\gdef\\@eqnsw{0}");
f("\\notag", "\\nonumber");
G({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(n, e) {
    throw new R(n.funcName + " valid only within array environment");
  }
});
var Li = Hs;
G({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    if (a.type !== "ordgroup")
      throw new R("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += se(a.body[l], "textord").text;
    if (r === "\\begin") {
      if (!Li.hasOwnProperty(i))
        throw new R("No such environment: " + i, a);
      var s = Li[i], {
        args: o,
        optArgs: h
      } = t.parseArguments("\\begin{" + i + "}", s), d = {
        mode: t.mode,
        envName: i,
        parser: t
      }, p = s.handler(d, o, h);
      t.expect("\\end", !1);
      var g = t.nextToken, _ = se(t.parseFunction(), "environment");
      if (_.name !== i)
        throw new R("Mismatch: \\begin{" + i + "} matched by \\end{" + _.name + "}", g);
      return p;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var Vs = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return de(n.body, r);
}, Ws = (n, e) => {
  var t = n.font, r = e.withFont(t);
  return be(n.body, r);
}, Oi = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
G({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = rn(e[0]), i = r;
    return i in Oi && (i = Oi[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Vs,
  mathmlBuilder: Ws
});
G({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0], a = J.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: hn(r),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: a
    };
  }
});
G({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r,
      breakOnTokenText: a
    } = n, {
      mode: i
    } = t, l = t.parseExpression(!0, a), s = "math" + r.slice(1);
    return {
      type: "font",
      mode: i,
      font: s,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: Vs,
  mathmlBuilder: Ws
});
var js = (n, e) => {
  var t = e;
  return n === "display" ? t = t.id >= re.SCRIPT.id ? t.text() : re.DISPLAY : n === "text" && t.size === re.DISPLAY.size ? t = re.TEXT : n === "script" ? t = re.SCRIPT : n === "scriptscript" && (t = re.SCRIPTSCRIPT), t;
}, Oa = (n, e) => {
  var t = js(n.size, e.style), r = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = de(n.numer, i, e);
  if (n.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, o = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < o ? o : l.depth;
  }
  i = e.havingStyle(a);
  var h = de(n.denom, i, e), d, p, g;
  n.hasBarLine ? (n.barSize ? (p = Te(n.barSize, e), d = A.makeLineSpan("frac-line", e, p)) : d = A.makeLineSpan("frac-line", e), p = d.height, g = d.height) : (d = null, p = 0, g = e.fontMetrics().defaultRuleThickness);
  var _, E, C;
  t.size === re.DISPLAY.size || n.size === "display" ? (_ = e.fontMetrics().num1, p > 0 ? E = 3 * g : E = 7 * g, C = e.fontMetrics().denom1) : (p > 0 ? (_ = e.fontMetrics().num2, E = g) : (_ = e.fontMetrics().num3, E = 3 * g), C = e.fontMetrics().denom2);
  var $;
  if (d) {
    var w = e.fontMetrics().axisHeight;
    _ - l.depth - (w + 0.5 * p) < E && (_ += E - (_ - l.depth - (w + 0.5 * p))), w - 0.5 * p - (h.height - C) < E && (C += E - (w - 0.5 * p - (h.height - C)));
    var v = -(w - 0.5 * p);
    $ = A.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: h,
        shift: C
      }, {
        type: "elem",
        elem: d,
        shift: v
      }, {
        type: "elem",
        elem: l,
        shift: -_
      }]
    }, e);
  } else {
    var F = _ - l.depth - (h.height - C);
    F < E && (_ += 0.5 * (E - F), C += 0.5 * (E - F)), $ = A.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: h,
        shift: C
      }, {
        type: "elem",
        elem: l,
        shift: -_
      }]
    }, e);
  }
  i = e.havingStyle(t), $.height *= i.sizeMultiplier / e.sizeMultiplier, $.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var x;
  t.size === re.DISPLAY.size ? x = e.fontMetrics().delim1 : t.size === re.SCRIPTSCRIPT.size ? x = e.havingStyle(re.SCRIPT).fontMetrics().delim2 : x = e.fontMetrics().delim2;
  var S, T;
  return n.leftDelim == null ? S = ur(e, ["mopen"]) : S = u0.customSizedDelim(n.leftDelim, x, !0, e.havingStyle(t), n.mode, ["mopen"]), n.continued ? T = A.makeSpan([]) : n.rightDelim == null ? T = ur(e, ["mclose"]) : T = u0.customSizedDelim(n.rightDelim, x, !0, e.havingStyle(t), n.mode, ["mclose"]), A.makeSpan(["mord"].concat(i.sizingClasses(e)), [S, A.makeSpan(["mfrac"], [$]), T], e);
}, Pa = (n, e) => {
  var t = new q.MathNode("mfrac", [be(n.numer, e), be(n.denom, e)]);
  if (!n.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (n.barSize) {
    var r = Te(n.barSize, e);
    t.setAttribute("linethickness", H(r));
  }
  var a = js(n.size, e.style);
  if (a.size !== e.style.size) {
    t = new q.MathNode("mstyle", [t]);
    var i = a.size === re.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (n.leftDelim != null || n.rightDelim != null) {
    var l = [];
    if (n.leftDelim != null) {
      var s = new q.MathNode("mo", [new q.TextNode(n.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), n.rightDelim != null) {
      var o = new q.MathNode("mo", [new q.TextNode(n.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    return Ta(l);
  }
  return t;
};
G({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = e[1], l, s = null, o = null, h = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, s = "(", o = ")";
        break;
      case "\\\\bracefrac":
        l = !1, s = "\\{", o = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, s = "[", o = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        h = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        h = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: l,
      leftDelim: s,
      rightDelim: o,
      size: h,
      barSize: null
    };
  },
  htmlBuilder: Oa,
  mathmlBuilder: Pa
});
G({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
G({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t,
      token: r
    } = n, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: r
    };
  }
});
var Pi = ["display", "text", "script", "scriptscript"], Hi = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
G({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = e[4], a = e[5], i = rn(e[0]), l = i.type === "atom" && i.family === "open" ? Hi(i.text) : null, s = rn(e[1]), o = s.type === "atom" && s.family === "close" ? Hi(s.text) : null, h = se(e[2], "size"), d, p = null;
    h.isBlank ? d = !0 : (p = h.value, d = p.number > 0);
    var g = "auto", _ = e[3];
    if (_.type === "ordgroup") {
      if (_.body.length > 0) {
        var E = se(_.body[0], "textord");
        g = Pi[Number(E.text)];
      }
    } else
      _ = se(_, "textord"), g = Pi[Number(_.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: a,
      continued: !1,
      hasBarLine: d,
      barSize: p,
      leftDelim: l,
      rightDelim: o,
      size: g
    };
  },
  htmlBuilder: Oa,
  mathmlBuilder: Pa
});
G({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r,
      token: a
    } = n;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: se(e[0], "size").value,
      token: a
    };
  }
});
G({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0], i = Pu(se(e[1], "infix").size), l = e[2], s = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: l,
      continued: !1,
      hasBarLine: s,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: Oa,
  mathmlBuilder: Pa
});
var Xs = (n, e) => {
  var t = e.style, r, a;
  n.type === "supsub" ? (r = n.sup ? de(n.sup, e.havingStyle(t.sup()), e) : de(n.sub, e.havingStyle(t.sub()), e), a = se(n.base, "horizBrace")) : a = se(n, "horizBrace");
  var i = de(a.base, e.havingBaseStyle(re.DISPLAY)), l = m0.svgSpan(a, e), s;
  if (a.isOver ? (s = A.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = A.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), s.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var o = A.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
    a.isOver ? s = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, e) : s = A.makeVList({
      positionType: "bottom",
      positionData: o.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: o
      }]
    }, e);
  }
  return A.makeSpan(["mord", a.isOver ? "mover" : "munder"], [s], e);
}, mc = (n, e) => {
  var t = m0.mathMLnode(n.label);
  return new q.MathNode(n.isOver ? "mover" : "munder", [be(n.base, e), t]);
};
G({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: e[0]
    };
  },
  htmlBuilder: Xs,
  mathmlBuilder: mc
});
G({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[1], a = se(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: qe(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (n, e) => {
    var t = Pe(n.body, e, !1);
    return A.makeAnchor(n.href, [], t, e);
  },
  mathmlBuilder: (n, e) => {
    var t = w0(n.body, e);
    return t instanceof mt || (t = new mt("mrow", [t])), t.setAttribute("href", n.href), t;
  }
});
G({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = se(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < r.length; i++) {
      var l = r[i];
      l === "~" && (l = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var s = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: qe(s)
    };
  }
});
G({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "hbox",
      mode: t.mode,
      body: qe(e[0])
    };
  },
  htmlBuilder(n, e) {
    var t = Pe(n.body, e, !1);
    return A.makeFragment(t);
  },
  mathmlBuilder(n, e) {
    return new q.MathNode("mrow", lt(n.body, e));
  }
});
G({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r,
      token: a
    } = n, i = se(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var s, o = {};
    switch (r) {
      case "\\htmlClass":
        o.class = i, s = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        o.id = i, s = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        o.style = i, s = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var h = i.split(","), d = 0; d < h.length; d++) {
          var p = h[d].split("=");
          if (p.length !== 2)
            throw new R("Error parsing key-value for \\htmlData");
          o["data-" + p[0].trim()] = p[1].trim();
        }
        s = {
          command: "\\htmlData",
          attributes: o
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(s) ? {
      type: "html",
      mode: t.mode,
      attributes: o,
      body: qe(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (n, e) => {
    var t = Pe(n.body, e, !1), r = ["enclosing"];
    n.attributes.class && r.push(...n.attributes.class.trim().split(/\s+/));
    var a = A.makeSpan(r, t, e);
    for (var i in n.attributes)
      i !== "class" && n.attributes.hasOwnProperty(i) && a.setAttribute(i, n.attributes[i]);
    return a;
  },
  mathmlBuilder: (n, e) => w0(n.body, e)
});
G({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: qe(e[0]),
      mathml: qe(e[1])
    };
  },
  htmlBuilder: (n, e) => {
    var t = Pe(n.html, e, !1);
    return A.makeFragment(t);
  },
  mathmlBuilder: (n, e) => w0(n.mathml, e)
});
var Rn = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new R("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!ds(r))
    throw new R("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
G({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (n, e, t) => {
    var {
      parser: r
    } = n, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, s = "";
    if (t[0])
      for (var o = se(t[0], "raw").string, h = o.split(","), d = 0; d < h.length; d++) {
        var p = h[d].split("=");
        if (p.length === 2) {
          var g = p[1].trim();
          switch (p[0].trim()) {
            case "alt":
              s = g;
              break;
            case "width":
              a = Rn(g);
              break;
            case "height":
              i = Rn(g);
              break;
            case "totalheight":
              l = Rn(g);
              break;
            default:
              throw new R("Invalid key: '" + p[0] + "' in \\includegraphics.");
          }
        }
      }
    var _ = se(e[0], "url").url;
    return s === "" && (s = _, s = s.replace(/^.*[\\/]/, ""), s = s.substring(0, s.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: _
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: s,
      width: a,
      height: i,
      totalheight: l,
      src: _
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (n, e) => {
    var t = Te(n.height, e), r = 0;
    n.totalheight.number > 0 && (r = Te(n.totalheight, e) - t);
    var a = 0;
    n.width.number > 0 && (a = Te(n.width, e));
    var i = {
      height: H(t + r)
    };
    a > 0 && (i.width = H(a)), r > 0 && (i.verticalAlign = H(-r));
    var l = new m1(n.src, n.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (n, e) => {
    var t = new q.MathNode("mglyph", []);
    t.setAttribute("alt", n.alt);
    var r = Te(n.height, e), a = 0;
    if (n.totalheight.number > 0 && (a = Te(n.totalheight, e) - r, t.setAttribute("valign", H(-a))), t.setAttribute("height", H(r + a)), n.width.number > 0) {
      var i = Te(n.width, e);
      t.setAttribute("width", H(i));
    }
    return t.setAttribute("src", n.src), t;
  }
});
G({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = se(e[0], "size");
    if (t.settings.strict) {
      var i = r[1] === "m", l = a.value.unit === "mu";
      i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(n, e) {
    return A.makeGlue(n.dimension, e);
  },
  mathmlBuilder(n, e) {
    var t = Te(n.dimension, e);
    return new q.SpaceNode(t);
  }
});
G({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: r.slice(5),
      body: a
    };
  },
  htmlBuilder: (n, e) => {
    var t;
    n.alignment === "clap" ? (t = A.makeSpan([], [de(n.body, e)]), t = A.makeSpan(["inner"], [t], e)) : t = A.makeSpan(["inner"], [de(n.body, e)]);
    var r = A.makeSpan(["fix"], []), a = A.makeSpan([n.alignment], [t, r], e), i = A.makeSpan(["strut"]);
    return i.style.height = H(a.height + a.depth), a.depth && (i.style.verticalAlign = H(-a.depth)), a.children.unshift(i), a = A.makeSpan(["thinbox"], [a], e), A.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new q.MathNode("mpadded", [be(n.body, e)]);
    if (n.alignment !== "rlap") {
      var r = n.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
G({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    var {
      funcName: t,
      parser: r
    } = n, a = r.mode;
    r.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", l = r.parseExpression(!1, i);
    return r.expect(i), r.switchMode(a), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: l
    };
  }
});
G({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(n, e) {
    throw new R("Mismatched " + n.funcName);
  }
});
var Ui = (n, e) => {
  switch (e.style.size) {
    case re.DISPLAY.size:
      return n.display;
    case re.TEXT.size:
      return n.text;
    case re.SCRIPT.size:
      return n.script;
    case re.SCRIPTSCRIPT.size:
      return n.scriptscript;
    default:
      return n.text;
  }
};
G({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: qe(e[0]),
      text: qe(e[1]),
      script: qe(e[2]),
      scriptscript: qe(e[3])
    };
  },
  htmlBuilder: (n, e) => {
    var t = Ui(n, e), r = Pe(t, e, !1);
    return A.makeFragment(r);
  },
  mathmlBuilder: (n, e) => {
    var t = Ui(n, e);
    return w0(t, e);
  }
});
var Ys = (n, e, t, r, a, i, l) => {
  n = A.makeSpan([], [n]);
  var s = t && J.isCharacterBox(t), o, h;
  if (e) {
    var d = de(e, r.havingStyle(a.sup()), r);
    h = {
      elem: d,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - d.depth)
    };
  }
  if (t) {
    var p = de(t, r.havingStyle(a.sub()), r);
    o = {
      elem: p,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - p.height)
    };
  }
  var g;
  if (h && o) {
    var _ = r.fontMetrics().bigOpSpacing5 + o.elem.height + o.elem.depth + o.kern + n.depth + l;
    g = A.makeVList({
      positionType: "bottom",
      positionData: _,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: H(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: h.kern
      }, {
        type: "elem",
        elem: h.elem,
        marginLeft: H(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (o) {
    var E = n.height - l;
    g = A.makeVList({
      positionType: "top",
      positionData: E,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: o.elem,
        marginLeft: H(-i)
      }, {
        type: "kern",
        size: o.kern
      }, {
        type: "elem",
        elem: n
      }]
    }, r);
  } else if (h) {
    var C = n.depth + l;
    g = A.makeVList({
      positionType: "bottom",
      positionData: C,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: h.kern
      }, {
        type: "elem",
        elem: h.elem,
        marginLeft: H(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return n;
  var $ = [g];
  if (o && i !== 0 && !s) {
    var F = A.makeSpan(["mspace"], [], r);
    F.style.marginRight = H(i), $.unshift(F);
  }
  return A.makeSpan(["mop", "op-limits"], $, r);
}, Zs = ["\\smallint"], G0 = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = se(n.base, "op"), a = !0) : i = se(n, "op");
  var l = e.style, s = !1;
  l.size === re.DISPLAY.size && i.symbol && !J.contains(Zs, i.name) && (s = !0);
  var o;
  if (i.symbol) {
    var h = s ? "Size2-Regular" : "Size1-Regular", d = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (d = i.name.slice(1), i.name = d === "oiint" ? "\\iint" : "\\iiint"), o = A.makeSymbol(i.name, h, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), d.length > 0) {
      var p = o.italic, g = A.staticSvg(d + "Size" + (s ? "2" : "1"), e);
      o = A.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: o,
          shift: 0
        }, {
          type: "elem",
          elem: g,
          shift: s ? 0.08 : 0
        }]
      }, e), i.name = "\\" + d, o.classes.unshift("mop"), o.italic = p;
    }
  } else if (i.body) {
    var _ = Pe(i.body, e, !0);
    _.length === 1 && _[0] instanceof wt ? (o = _[0], o.classes[0] = "mop") : o = A.makeSpan(["mop"], _, e);
  } else {
    for (var E = [], C = 1; C < i.name.length; C++)
      E.push(A.mathsym(i.name[C], i.mode, e));
    o = A.makeSpan(["mop"], E, e);
  }
  var $ = 0, F = 0;
  return (o instanceof wt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && ($ = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight, F = o.italic), a ? Ys(o, t, r, e, l, F, $) : ($ && (o.style.position = "relative", o.style.top = H($)), o);
}, mr = (n, e) => {
  var t;
  if (n.symbol)
    t = new mt("mo", [xt(n.name, n.mode)]), J.contains(Zs, n.name) && t.setAttribute("largeop", "false");
  else if (n.body)
    t = new mt("mo", lt(n.body, e));
  else {
    t = new mt("mi", [new Ut(n.name.slice(1))]);
    var r = new mt("mo", [xt("⁡", "text")]);
    n.parentIsSupSub ? t = new mt("mrow", [t, r]) : t = Ds([t, r]);
  }
  return t;
}, dc = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
G({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = r;
    return a.length === 1 && (a = dc[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: G0,
  mathmlBuilder: mr
});
G({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: qe(r)
    };
  },
  htmlBuilder: G0,
  mathmlBuilder: mr
});
var fc = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
G({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: G0,
  mathmlBuilder: mr
});
G({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: G0,
  mathmlBuilder: mr
});
G({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(n) {
    var {
      parser: e,
      funcName: t
    } = n, r = t;
    return r.length === 1 && (r = fc[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: G0,
  mathmlBuilder: mr
});
var Ks = (n, e) => {
  var t, r, a = !1, i;
  n.type === "supsub" ? (t = n.sup, r = n.sub, i = se(n.base, "operatorname"), a = !0) : i = se(n, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var s = i.body.map((p) => {
      var g = p.text;
      return typeof g == "string" ? {
        type: "textord",
        mode: p.mode,
        text: g
      } : p;
    }), o = Pe(s, e.withFont("mathrm"), !0), h = 0; h < o.length; h++) {
      var d = o[h];
      d instanceof wt && (d.text = d.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = A.makeSpan(["mop"], o, e);
  } else
    l = A.makeSpan(["mop"], [], e);
  return a ? Ys(l, t, r, e, e.style, 0, 0) : l;
}, pc = (n, e) => {
  for (var t = lt(n.body, e.withFont("mathrm")), r = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof q.SpaceNode)) if (i instanceof q.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof q.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var s = t.map((d) => d.toText()).join("");
    t = [new q.TextNode(s)];
  }
  var o = new q.MathNode("mi", t);
  o.setAttribute("mathvariant", "normal");
  var h = new q.MathNode("mo", [xt("⁡", "text")]);
  return n.parentIsSupSub ? new q.MathNode("mrow", [o, h]) : q.newDocumentFragment([o, h]);
};
G({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (n, e) => {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: qe(a),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Ks,
  mathmlBuilder: pc
});
f("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
F0({
  type: "ordgroup",
  htmlBuilder(n, e) {
    return n.semisimple ? A.makeFragment(Pe(n.body, e, !1)) : A.makeSpan(["mord"], Pe(n.body, e, !0), e);
  },
  mathmlBuilder(n, e) {
    return w0(n.body, e, !0);
  }
});
G({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder(n, e) {
    var t = de(n.body, e.havingCrampedStyle()), r = A.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return A.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mo", [new q.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new q.MathNode("mover", [be(n.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
G({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: qe(r)
    };
  },
  htmlBuilder: (n, e) => {
    var t = Pe(n.body, e.withPhantom(), !1);
    return A.makeFragment(t);
  },
  mathmlBuilder: (n, e) => {
    var t = lt(n.body, e);
    return new q.MathNode("mphantom", t);
  }
});
G({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (n, e) => {
    var t = A.makeSpan([], [de(n.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), A.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (n, e) => {
    var t = lt(qe(n.body), e), r = new q.MathNode("mphantom", t), a = new q.MathNode("mpadded", [r]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
G({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      parser: t
    } = n, r = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (n, e) => {
    var t = A.makeSpan(["inner"], [de(n.body, e.withPhantom())]), r = A.makeSpan(["fix"], []);
    return A.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (n, e) => {
    var t = lt(qe(n.body), e), r = new q.MathNode("mphantom", t), a = new q.MathNode("mpadded", [r]);
    return a.setAttribute("width", "0px"), a;
  }
});
G({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n, r = se(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: a
    };
  },
  htmlBuilder(n, e) {
    var t = de(n.body, e), r = Te(n.dy, e);
    return A.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mpadded", [be(n.body, e)]), r = n.dy.number + n.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
G({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInArgument: !0
  },
  handler(n) {
    var {
      parser: e
    } = n;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
G({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"]
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = t[0], i = se(e[0], "size"), l = se(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: a && se(a, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(n, e) {
    var t = A.makeSpan(["mord", "rule"], [], e), r = Te(n.width, e), a = Te(n.height, e), i = n.shift ? Te(n.shift, e) : 0;
    return t.style.borderRightWidth = H(r), t.style.borderTopWidth = H(a), t.style.bottom = H(i), t.width = r, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(n, e) {
    var t = Te(n.width, e), r = Te(n.height, e), a = n.shift ? Te(n.shift, e) : 0, i = e.color && e.getColor() || "black", l = new q.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", H(t)), l.setAttribute("height", H(r));
    var s = new q.MathNode("mpadded", [l]);
    return a >= 0 ? s.setAttribute("height", H(a)) : (s.setAttribute("height", H(a)), s.setAttribute("depth", H(-a))), s.setAttribute("voffset", H(a)), s;
  }
});
function Qs(n, e, t) {
  for (var r = Pe(n, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= a, r[i].depth *= a;
  }
  return A.makeFragment(r);
}
var Gi = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], gc = (n, e) => {
  var t = e.havingSize(n.size);
  return Qs(n.body, t, e);
};
G({
  type: "sizing",
  names: Gi,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (n, e) => {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: Gi.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: gc,
  mathmlBuilder: (n, e) => {
    var t = e.havingSize(n.size), r = lt(n.body, t), a = new q.MathNode("mstyle", r);
    return a.setAttribute("mathsize", H(t.sizeMultiplier)), a;
  }
});
G({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (n, e, t) => {
    var {
      parser: r
    } = n, a = !1, i = !1, l = t[0] && se(t[0], "ordgroup");
    if (l)
      for (var s = "", o = 0; o < l.body.length; ++o) {
        var h = l.body[o];
        if (s = h.text, s === "t")
          a = !0;
        else if (s === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var d = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: d,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (n, e) => {
    var t = A.makeSpan([], [de(n.body, e)]);
    if (!n.smashHeight && !n.smashDepth)
      return t;
    if (n.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (n.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return A.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (n, e) => {
    var t = new q.MathNode("mpadded", [be(n.body, e)]);
    return n.smashHeight && t.setAttribute("height", "0px"), n.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
G({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(n, e, t) {
    var {
      parser: r
    } = n, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(n, e) {
    var t = de(n.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = A.wrapFragment(t, e);
    var r = e.fontMetrics(), a = r.defaultRuleThickness, i = a;
    e.style.id < re.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4, s = t.height + t.depth + l + a, {
      span: o,
      ruleWidth: h,
      advanceWidth: d
    } = u0.sqrtImage(s, e), p = o.height - h;
    p > t.height + t.depth + l && (l = (l + p - t.height - t.depth) / 2);
    var g = o.height - t.height - l - h;
    t.style.paddingLeft = H(d);
    var _ = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + g)
      }, {
        type: "elem",
        elem: o
      }, {
        type: "kern",
        size: h
      }]
    }, e);
    if (n.index) {
      var E = e.havingStyle(re.SCRIPTSCRIPT), C = de(n.index, E, e), $ = 0.6 * (_.height - _.depth), F = A.makeVList({
        positionType: "shift",
        positionData: -$,
        children: [{
          type: "elem",
          elem: C
        }]
      }, e), w = A.makeSpan(["root"], [F]);
      return A.makeSpan(["mord", "sqrt"], [w, _], e);
    } else
      return A.makeSpan(["mord", "sqrt"], [_], e);
  },
  mathmlBuilder(n, e) {
    var {
      body: t,
      index: r
    } = n;
    return r ? new q.MathNode("mroot", [be(t, e), be(r, e)]) : new q.MathNode("msqrt", [be(t, e)]);
  }
});
var Vi = {
  display: re.DISPLAY,
  text: re.TEXT,
  script: re.SCRIPT,
  scriptscript: re.SCRIPTSCRIPT
};
G({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(n, e) {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: a
    } = n, i = a.parseExpression(!0, t), l = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: i
    };
  },
  htmlBuilder(n, e) {
    var t = Vi[n.style], r = e.havingStyle(t).withFont("");
    return Qs(n.body, r, e);
  },
  mathmlBuilder(n, e) {
    var t = Vi[n.style], r = e.havingStyle(t), a = lt(n.body, r), i = new q.MathNode("mstyle", a), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[n.style];
    return i.setAttribute("scriptlevel", s[0]), i.setAttribute("displaystyle", s[1]), i;
  }
});
var _c = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var a = r.limits && (t.style.size === re.DISPLAY.size || r.alwaysHandleSupSub);
      return a ? G0 : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === re.DISPLAY.size || r.limits);
      return i ? Ks : null;
    } else {
      if (r.type === "accent")
        return J.isCharacterBox(r.base) ? Ba : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? Xs : null;
      } else
        return null;
    }
  else return null;
};
F0({
  type: "supsub",
  htmlBuilder(n, e) {
    var t = _c(n, e);
    if (t)
      return t(n, e);
    var {
      base: r,
      sup: a,
      sub: i
    } = n, l = de(r, e), s, o, h = e.fontMetrics(), d = 0, p = 0, g = r && J.isCharacterBox(r);
    if (a) {
      var _ = e.havingStyle(e.style.sup());
      s = de(a, _, e), g || (d = l.height - _.fontMetrics().supDrop * _.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var E = e.havingStyle(e.style.sub());
      o = de(i, E, e), g || (p = l.depth + E.fontMetrics().subDrop * E.sizeMultiplier / e.sizeMultiplier);
    }
    var C;
    e.style === re.DISPLAY ? C = h.sup1 : e.style.cramped ? C = h.sup3 : C = h.sup2;
    var $ = e.sizeMultiplier, F = H(0.5 / h.ptPerEm / $), w = null;
    if (o) {
      var v = n.base && n.base.type === "op" && n.base.name && (n.base.name === "\\oiint" || n.base.name === "\\oiiint");
      (l instanceof wt || v) && (w = H(-l.italic));
    }
    var x;
    if (s && o) {
      d = Math.max(d, C, s.depth + 0.25 * h.xHeight), p = Math.max(p, h.sub2);
      var S = h.defaultRuleThickness, T = 4 * S;
      if (d - s.depth - (o.height - p) < T) {
        p = T - (d - s.depth) + o.height;
        var M = 0.8 * h.xHeight - (d - s.depth);
        M > 0 && (d += M, p -= M);
      }
      var L = [{
        type: "elem",
        elem: o,
        shift: p,
        marginRight: F,
        marginLeft: w
      }, {
        type: "elem",
        elem: s,
        shift: -d,
        marginRight: F
      }];
      x = A.makeVList({
        positionType: "individualShift",
        children: L
      }, e);
    } else if (o) {
      p = Math.max(p, h.sub1, o.height - 0.8 * h.xHeight);
      var z = [{
        type: "elem",
        elem: o,
        marginLeft: w,
        marginRight: F
      }];
      x = A.makeVList({
        positionType: "shift",
        positionData: p,
        children: z
      }, e);
    } else if (s)
      d = Math.max(d, C, s.depth + 0.25 * h.xHeight), x = A.makeVList({
        positionType: "shift",
        positionData: -d,
        children: [{
          type: "elem",
          elem: s,
          marginRight: F
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var B = ta(l, "right") || "mord";
    return A.makeSpan([B], [l, A.makeSpan(["msupsub"], [x])], e);
  },
  mathmlBuilder(n, e) {
    var t = !1, r, a;
    n.base && n.base.type === "horizBrace" && (a = !!n.sup, a === n.base.isOver && (t = !0, r = n.base.isOver)), n.base && (n.base.type === "op" || n.base.type === "operatorname") && (n.base.parentIsSupSub = !0);
    var i = [be(n.base, e)];
    n.sub && i.push(be(n.sub, e)), n.sup && i.push(be(n.sup, e));
    var l;
    if (t)
      l = r ? "mover" : "munder";
    else if (n.sub)
      if (n.sup) {
        var h = n.base;
        h && h.type === "op" && h.limits && e.style === re.DISPLAY || h && h.type === "operatorname" && h.alwaysHandleSupSub && (e.style === re.DISPLAY || h.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var o = n.base;
        o && o.type === "op" && o.limits && (e.style === re.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === re.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = n.base;
      s && s.type === "op" && s.limits && (e.style === re.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === re.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new q.MathNode(l, i);
  }
});
F0({
  type: "atom",
  htmlBuilder(n, e) {
    return A.mathsym(n.text, n.mode, e, ["m" + n.family]);
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mo", [xt(n.text, n.mode)]);
    if (n.family === "bin") {
      var r = Ma(n, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else n.family === "punct" ? t.setAttribute("separator", "true") : (n.family === "open" || n.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Js = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
F0({
  type: "mathord",
  htmlBuilder(n, e) {
    return A.makeOrd(n, e, "mathord");
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mi", [xt(n.text, n.mode, e)]), r = Ma(n, e) || "italic";
    return r !== Js[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
F0({
  type: "textord",
  htmlBuilder(n, e) {
    return A.makeOrd(n, e, "textord");
  },
  mathmlBuilder(n, e) {
    var t = xt(n.text, n.mode, e), r = Ma(n, e) || "normal", a;
    return n.mode === "text" ? a = new q.MathNode("mtext", [t]) : /[0-9]/.test(n.text) ? a = new q.MathNode("mn", [t]) : n.text === "\\prime" ? a = new q.MathNode("mo", [t]) : a = new q.MathNode("mi", [t]), r !== Js[a.type] && a.setAttribute("mathvariant", r), a;
  }
});
var In = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Ln = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
F0({
  type: "spacing",
  htmlBuilder(n, e) {
    if (Ln.hasOwnProperty(n.text)) {
      var t = Ln[n.text].className || "";
      if (n.mode === "text") {
        var r = A.makeOrd(n, e, "textord");
        return r.classes.push(t), r;
      } else
        return A.makeSpan(["mspace", t], [A.mathsym(n.text, n.mode, e)], e);
    } else {
      if (In.hasOwnProperty(n.text))
        return A.makeSpan(["mspace", In[n.text]], [], e);
      throw new R('Unknown type of space "' + n.text + '"');
    }
  },
  mathmlBuilder(n, e) {
    var t;
    if (Ln.hasOwnProperty(n.text))
      t = new q.MathNode("mtext", [new q.TextNode(" ")]);
    else {
      if (In.hasOwnProperty(n.text))
        return new q.MathNode("mspace");
      throw new R('Unknown type of space "' + n.text + '"');
    }
    return t;
  }
});
var Wi = () => {
  var n = new q.MathNode("mtd", []);
  return n.setAttribute("width", "50%"), n;
};
F0({
  type: "tag",
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mtable", [new q.MathNode("mtr", [Wi(), new q.MathNode("mtd", [w0(n.body, e)]), Wi(), new q.MathNode("mtd", [w0(n.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var ji = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, Xi = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, vc = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Yi = (n, e) => {
  var t = n.font;
  if (t) {
    if (ji[t])
      return e.withTextFontFamily(ji[t]);
    if (Xi[t])
      return e.withTextFontWeight(Xi[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(vc[t]);
};
G({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t,
      funcName: r
    } = n, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: qe(a),
      font: r
    };
  },
  htmlBuilder(n, e) {
    var t = Yi(n, e), r = Pe(n.body, t, !0);
    return A.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(n, e) {
    var t = Yi(n, e);
    return w0(n.body, t);
  }
});
G({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = de(n.body, e), r = A.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = A.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return A.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(n, e) {
    var t = new q.MathNode("mo", [new q.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new q.MathNode("munder", [be(n.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
G({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(n, e) {
    var {
      parser: t
    } = n;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(n, e) {
    var t = de(n.body, e), r = e.fontMetrics().axisHeight, a = 0.5 * (t.height - r - (t.depth + r));
    return A.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(n, e) {
    return new q.MathNode("mpadded", [be(n.body, e)], ["vcenter"]);
  }
});
G({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(n, e, t) {
    throw new R("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(n, e) {
    for (var t = Zi(n), r = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(A.makeSymbol(l, "Typewriter-Regular", n.mode, a, ["mord", "texttt"]));
    }
    return A.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), A.tryCombineChars(r), a);
  },
  mathmlBuilder(n, e) {
    var t = new q.TextNode(Zi(n)), r = new q.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var Zi = (n) => n.body.replace(/ /g, n.star ? "␣" : " "), _0 = xs, eo = `[ \r
	]`, bc = "\\\\[a-zA-Z@]+", yc = "\\\\[^\uD800-\uDFFF]", wc = "(" + bc + ")" + eo + "*", xc = `\\\\(
|[ \r	]+
?)[ \r	]*`, ia = "[̀-ͯ]", kc = new RegExp(ia + "+$"), Dc = "(" + eo + "+)|" + // whitespace
(xc + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(ia + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(ia + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + wc) + // \macroName + spaces
("|" + yc + ")");
class Ki {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(Dc, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new yt("EOF", new ct(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new R("Unexpected character: '" + e[t] + "'", new yt(e[t], new ct(this, t, t + 1)));
    var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new yt(a, new ct(this, t, this.tokenRegex.lastIndex));
  }
}
class Sc {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new R("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, r) {
    if (r === void 0 && (r = !1), r) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var Ac = Us;
f("\\noexpand", function(n) {
  var e = n.popToken();
  return n.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
f("\\expandafter", function(n) {
  var e = n.popToken();
  return n.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
f("\\@firstoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
f("\\@secondoftwo", function(n) {
  var e = n.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
f("\\@ifnextchar", function(n) {
  var e = n.consumeArgs(3);
  n.consumeSpaces();
  var t = n.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
f("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
f("\\TextOrMath", function(n) {
  var e = n.consumeArgs(2);
  return n.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var Qi = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
f("\\char", function(n) {
  var e = n.popToken(), t, r = "";
  if (e.text === "'")
    t = 8, e = n.popToken();
  else if (e.text === '"')
    t = 16, e = n.popToken();
  else if (e.text === "`")
    if (e = n.popToken(), e.text[0] === "\\")
      r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new R("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = Qi[e.text], r == null || r >= t)
      throw new R("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Qi[n.future().text]) != null && a < t; )
      r *= t, r += a, n.popToken();
  }
  return "\\@char{" + r + "}";
});
var Ha = (n, e, t, r) => {
  var a = n.consumeArg().tokens;
  if (a.length !== 1)
    throw new R("\\newcommand's first argument must be a macro name");
  var i = a[0].text, l = n.isDefined(i);
  if (l && !e)
    throw new R("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!l && !t)
    throw new R("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var s = 0;
  if (a = n.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var o = "", h = n.expandNextToken(); h.text !== "]" && h.text !== "EOF"; )
      o += h.text, h = n.expandNextToken();
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new R("Invalid number of arguments: " + o);
    s = parseInt(o), a = n.consumeArg().tokens;
  }
  return l && r || n.macros.set(i, {
    tokens: a,
    numArgs: s
  }), "";
};
f("\\newcommand", (n) => Ha(n, !1, !0, !1));
f("\\renewcommand", (n) => Ha(n, !0, !1, !1));
f("\\providecommand", (n) => Ha(n, !0, !0, !0));
f("\\message", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
f("\\errmessage", (n) => {
  var e = n.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
f("\\show", (n) => {
  var e = n.popToken(), t = e.text;
  return console.log(e, n.macros.get(t), _0[t], we.math[t], we.text[t]), "";
});
f("\\bgroup", "{");
f("\\egroup", "}");
f("~", "\\nobreakspace");
f("\\lq", "`");
f("\\rq", "'");
f("\\aa", "\\r a");
f("\\AA", "\\r A");
f("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
f("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
f("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
f("ℬ", "\\mathscr{B}");
f("ℰ", "\\mathscr{E}");
f("ℱ", "\\mathscr{F}");
f("ℋ", "\\mathscr{H}");
f("ℐ", "\\mathscr{I}");
f("ℒ", "\\mathscr{L}");
f("ℳ", "\\mathscr{M}");
f("ℛ", "\\mathscr{R}");
f("ℭ", "\\mathfrak{C}");
f("ℌ", "\\mathfrak{H}");
f("ℨ", "\\mathfrak{Z}");
f("\\Bbbk", "\\Bbb{k}");
f("·", "\\cdotp");
f("\\llap", "\\mathllap{\\textrm{#1}}");
f("\\rlap", "\\mathrlap{\\textrm{#1}}");
f("\\clap", "\\mathclap{\\textrm{#1}}");
f("\\mathstrut", "\\vphantom{(}");
f("\\underbar", "\\underline{\\text{#1}}");
f("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
f("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
f("\\ne", "\\neq");
f("≠", "\\neq");
f("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
f("∉", "\\notin");
f("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
f("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
f("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
f("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
f("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
f("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
f("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
f("⟂", "\\perp");
f("‼", "\\mathclose{!\\mkern-0.8mu!}");
f("∌", "\\notni");
f("⌜", "\\ulcorner");
f("⌝", "\\urcorner");
f("⌞", "\\llcorner");
f("⌟", "\\lrcorner");
f("©", "\\copyright");
f("®", "\\textregistered");
f("️", "\\textregistered");
f("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
f("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
f("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
f("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
f("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
f("⋮", "\\vdots");
f("\\varGamma", "\\mathit{\\Gamma}");
f("\\varDelta", "\\mathit{\\Delta}");
f("\\varTheta", "\\mathit{\\Theta}");
f("\\varLambda", "\\mathit{\\Lambda}");
f("\\varXi", "\\mathit{\\Xi}");
f("\\varPi", "\\mathit{\\Pi}");
f("\\varSigma", "\\mathit{\\Sigma}");
f("\\varUpsilon", "\\mathit{\\Upsilon}");
f("\\varPhi", "\\mathit{\\Phi}");
f("\\varPsi", "\\mathit{\\Psi}");
f("\\varOmega", "\\mathit{\\Omega}");
f("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
f("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
f("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
f("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
f("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
f("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
f("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
f("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var Ji = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
f("\\dots", function(n) {
  var e = "\\dotso", t = n.expandAfterFuture().text;
  return t in Ji ? e = Ji[t] : (t.slice(0, 4) === "\\not" || t in we.math && J.contains(["bin", "rel"], we.math[t].group)) && (e = "\\dotsb"), e;
});
var Ua = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
f("\\dotso", function(n) {
  var e = n.future().text;
  return e in Ua ? "\\ldots\\," : "\\ldots";
});
f("\\dotsc", function(n) {
  var e = n.future().text;
  return e in Ua && e !== "," ? "\\ldots\\," : "\\ldots";
});
f("\\cdots", function(n) {
  var e = n.future().text;
  return e in Ua ? "\\@cdots\\," : "\\@cdots";
});
f("\\dotsb", "\\cdots");
f("\\dotsm", "\\cdots");
f("\\dotsi", "\\!\\cdots");
f("\\dotsx", "\\ldots\\,");
f("\\DOTSI", "\\relax");
f("\\DOTSB", "\\relax");
f("\\DOTSX", "\\relax");
f("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
f("\\,", "\\tmspace+{3mu}{.1667em}");
f("\\thinspace", "\\,");
f("\\>", "\\mskip{4mu}");
f("\\:", "\\tmspace+{4mu}{.2222em}");
f("\\medspace", "\\:");
f("\\;", "\\tmspace+{5mu}{.2777em}");
f("\\thickspace", "\\;");
f("\\!", "\\tmspace-{3mu}{.1667em}");
f("\\negthinspace", "\\!");
f("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
f("\\negthickspace", "\\tmspace-{5mu}{.277em}");
f("\\enspace", "\\kern.5em ");
f("\\enskip", "\\hskip.5em\\relax");
f("\\quad", "\\hskip1em\\relax");
f("\\qquad", "\\hskip2em\\relax");
f("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
f("\\tag@paren", "\\tag@literal{({#1})}");
f("\\tag@literal", (n) => {
  if (n.macros.get("\\df@tag"))
    throw new R("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
f("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
f("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
f("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
f("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
f("\\newline", "\\\\\\relax");
f("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var to = H(Ht["Main-Regular"][84][1] - 0.7 * Ht["Main-Regular"][65][1]);
f("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + to + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
f("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + to + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
f("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
f("\\@hspace", "\\hskip #1\\relax");
f("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
f("\\ordinarycolon", ":");
f("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
f("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
f("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
f("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
f("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
f("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
f("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
f("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
f("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
f("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
f("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
f("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
f("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
f("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
f("∷", "\\dblcolon");
f("∹", "\\eqcolon");
f("≔", "\\coloneqq");
f("≕", "\\eqqcolon");
f("⩴", "\\Coloneqq");
f("\\ratio", "\\vcentcolon");
f("\\coloncolon", "\\dblcolon");
f("\\colonequals", "\\coloneqq");
f("\\coloncolonequals", "\\Coloneqq");
f("\\equalscolon", "\\eqqcolon");
f("\\equalscoloncolon", "\\Eqqcolon");
f("\\colonminus", "\\coloneq");
f("\\coloncolonminus", "\\Coloneq");
f("\\minuscolon", "\\eqcolon");
f("\\minuscoloncolon", "\\Eqcolon");
f("\\coloncolonapprox", "\\Colonapprox");
f("\\coloncolonsim", "\\Colonsim");
f("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
f("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
f("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
f("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
f("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
f("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
f("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
f("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
f("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
f("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
f("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
f("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
f("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
f("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
f("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
f("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
f("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
f("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
f("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
f("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
f("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
f("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
f("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
f("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
f("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
f("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
f("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
f("\\imath", "\\html@mathml{\\@imath}{ı}");
f("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
f("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
f("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
f("⟦", "\\llbracket");
f("⟧", "\\rrbracket");
f("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
f("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
f("⦃", "\\lBrace");
f("⦄", "\\rBrace");
f("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
f("⦵", "\\minuso");
f("\\darr", "\\downarrow");
f("\\dArr", "\\Downarrow");
f("\\Darr", "\\Downarrow");
f("\\lang", "\\langle");
f("\\rang", "\\rangle");
f("\\uarr", "\\uparrow");
f("\\uArr", "\\Uparrow");
f("\\Uarr", "\\Uparrow");
f("\\N", "\\mathbb{N}");
f("\\R", "\\mathbb{R}");
f("\\Z", "\\mathbb{Z}");
f("\\alef", "\\aleph");
f("\\alefsym", "\\aleph");
f("\\Alpha", "\\mathrm{A}");
f("\\Beta", "\\mathrm{B}");
f("\\bull", "\\bullet");
f("\\Chi", "\\mathrm{X}");
f("\\clubs", "\\clubsuit");
f("\\cnums", "\\mathbb{C}");
f("\\Complex", "\\mathbb{C}");
f("\\Dagger", "\\ddagger");
f("\\diamonds", "\\diamondsuit");
f("\\empty", "\\emptyset");
f("\\Epsilon", "\\mathrm{E}");
f("\\Eta", "\\mathrm{H}");
f("\\exist", "\\exists");
f("\\harr", "\\leftrightarrow");
f("\\hArr", "\\Leftrightarrow");
f("\\Harr", "\\Leftrightarrow");
f("\\hearts", "\\heartsuit");
f("\\image", "\\Im");
f("\\infin", "\\infty");
f("\\Iota", "\\mathrm{I}");
f("\\isin", "\\in");
f("\\Kappa", "\\mathrm{K}");
f("\\larr", "\\leftarrow");
f("\\lArr", "\\Leftarrow");
f("\\Larr", "\\Leftarrow");
f("\\lrarr", "\\leftrightarrow");
f("\\lrArr", "\\Leftrightarrow");
f("\\Lrarr", "\\Leftrightarrow");
f("\\Mu", "\\mathrm{M}");
f("\\natnums", "\\mathbb{N}");
f("\\Nu", "\\mathrm{N}");
f("\\Omicron", "\\mathrm{O}");
f("\\plusmn", "\\pm");
f("\\rarr", "\\rightarrow");
f("\\rArr", "\\Rightarrow");
f("\\Rarr", "\\Rightarrow");
f("\\real", "\\Re");
f("\\reals", "\\mathbb{R}");
f("\\Reals", "\\mathbb{R}");
f("\\Rho", "\\mathrm{P}");
f("\\sdot", "\\cdot");
f("\\sect", "\\S");
f("\\spades", "\\spadesuit");
f("\\sub", "\\subset");
f("\\sube", "\\subseteq");
f("\\supe", "\\supseteq");
f("\\Tau", "\\mathrm{T}");
f("\\thetasym", "\\vartheta");
f("\\weierp", "\\wp");
f("\\Zeta", "\\mathrm{Z}");
f("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
f("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
f("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
f("\\bra", "\\mathinner{\\langle{#1}|}");
f("\\ket", "\\mathinner{|{#1}\\rangle}");
f("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
f("\\Bra", "\\left\\langle#1\\right|");
f("\\Ket", "\\left|#1\\right\\rangle");
var ro = (n) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var o = (p) => (g) => {
    n && (g.macros.set("|", l), a.length && g.macros.set("\\|", s));
    var _ = p;
    if (!p && a.length) {
      var E = g.future();
      E.text === "|" && (g.popToken(), _ = !0);
    }
    return {
      tokens: _ ? a : r,
      numArgs: 0
    };
  };
  e.macros.set("|", o(!1)), a.length && e.macros.set("\\|", o(!0));
  var h = e.consumeArg().tokens, d = e.expandTokens([
    ...i,
    ...h,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: d.reverse(),
    numArgs: 0
  };
};
f("\\bra@ket", ro(!1));
f("\\bra@set", ro(!0));
f("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
f("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
f("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
f("\\angln", "{\\angl n}");
f("\\blue", "\\textcolor{##6495ed}{#1}");
f("\\orange", "\\textcolor{##ffa500}{#1}");
f("\\pink", "\\textcolor{##ff00af}{#1}");
f("\\red", "\\textcolor{##df0030}{#1}");
f("\\green", "\\textcolor{##28ae7b}{#1}");
f("\\gray", "\\textcolor{gray}{#1}");
f("\\purple", "\\textcolor{##9d38bd}{#1}");
f("\\blueA", "\\textcolor{##ccfaff}{#1}");
f("\\blueB", "\\textcolor{##80f6ff}{#1}");
f("\\blueC", "\\textcolor{##63d9ea}{#1}");
f("\\blueD", "\\textcolor{##11accd}{#1}");
f("\\blueE", "\\textcolor{##0c7f99}{#1}");
f("\\tealA", "\\textcolor{##94fff5}{#1}");
f("\\tealB", "\\textcolor{##26edd5}{#1}");
f("\\tealC", "\\textcolor{##01d1c1}{#1}");
f("\\tealD", "\\textcolor{##01a995}{#1}");
f("\\tealE", "\\textcolor{##208170}{#1}");
f("\\greenA", "\\textcolor{##b6ffb0}{#1}");
f("\\greenB", "\\textcolor{##8af281}{#1}");
f("\\greenC", "\\textcolor{##74cf70}{#1}");
f("\\greenD", "\\textcolor{##1fab54}{#1}");
f("\\greenE", "\\textcolor{##0d923f}{#1}");
f("\\goldA", "\\textcolor{##ffd0a9}{#1}");
f("\\goldB", "\\textcolor{##ffbb71}{#1}");
f("\\goldC", "\\textcolor{##ff9c39}{#1}");
f("\\goldD", "\\textcolor{##e07d10}{#1}");
f("\\goldE", "\\textcolor{##a75a05}{#1}");
f("\\redA", "\\textcolor{##fca9a9}{#1}");
f("\\redB", "\\textcolor{##ff8482}{#1}");
f("\\redC", "\\textcolor{##f9685d}{#1}");
f("\\redD", "\\textcolor{##e84d39}{#1}");
f("\\redE", "\\textcolor{##bc2612}{#1}");
f("\\maroonA", "\\textcolor{##ffbde0}{#1}");
f("\\maroonB", "\\textcolor{##ff92c6}{#1}");
f("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
f("\\maroonD", "\\textcolor{##ca337c}{#1}");
f("\\maroonE", "\\textcolor{##9e034e}{#1}");
f("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
f("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
f("\\purpleC", "\\textcolor{##aa87ff}{#1}");
f("\\purpleD", "\\textcolor{##7854ab}{#1}");
f("\\purpleE", "\\textcolor{##543b78}{#1}");
f("\\mintA", "\\textcolor{##f5f9e8}{#1}");
f("\\mintB", "\\textcolor{##edf2df}{#1}");
f("\\mintC", "\\textcolor{##e0e5cc}{#1}");
f("\\grayA", "\\textcolor{##f6f7f7}{#1}");
f("\\grayB", "\\textcolor{##f0f1f2}{#1}");
f("\\grayC", "\\textcolor{##e3e5e6}{#1}");
f("\\grayD", "\\textcolor{##d6d8da}{#1}");
f("\\grayE", "\\textcolor{##babec2}{#1}");
f("\\grayF", "\\textcolor{##888d93}{#1}");
f("\\grayG", "\\textcolor{##626569}{#1}");
f("\\grayH", "\\textcolor{##3b3e40}{#1}");
f("\\grayI", "\\textcolor{##21242c}{#1}");
f("\\kaBlue", "\\textcolor{##314453}{#1}");
f("\\kaGreen", "\\textcolor{##71B307}{#1}");
var no = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class $c {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Sc(Ac, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Ki(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, r, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: a,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: t,
        end: r
      } = this.consumeArg());
    return this.pushToken(new yt("EOF", r.loc)), this.pushTokens(a), t.range(r, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], r = e && e.length > 0;
    r || this.consumeSpaces();
    var a = this.future(), i, l = 0, s = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++l;
      else if (i.text === "}") {
        if (--l, l === -1)
          throw new R("Extra }", i);
      } else if (i.text === "EOF")
        throw new R("Unexpected end of input in a macro argument, expected '" + (e && r ? e[s] : "}") + "'", i);
      if (e && r)
        if ((l === 0 || l === 1 && e[s] === "{") && i.text === e[s]) {
          if (++s, s === e.length) {
            t.splice(-s, s);
            break;
          }
        } else
          s = 0;
    } while (l !== 0 || r);
    return a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new R("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], a = 0; a < r.length; a++) {
        var i = this.popToken();
        if (r[a] !== i.text)
          throw new R("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], s = 0; s < e; s++)
      l.push(this.consumeArg(t && t[s + 1]).tokens);
    return l;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new R("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), r = t.text, a = t.noexpand ? null : this._getExpansion(r);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && r[0] === "\\" && !this.isDefined(r))
        throw new R("Undefined control sequence: " + r);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, l = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var s = i.length - 1; s >= 0; --s) {
        var o = i[s];
        if (o.text === "#") {
          if (s === 0)
            throw new R("Incomplete placeholder at end of macro body", o);
          if (o = i[--s], o.text === "#")
            i.splice(s + 1, 1);
          else if (/^[1-9]$/.test(o.text))
            i.splice(s, 2, ...l[+o.text - 1]);
          else
            throw new R("Not a valid argument number", o);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new yt(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], r = this.stack.length;
    for (this.pushTokens(e); this.stack.length > r; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), t.push(a);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var r = this.lexer.catcodes[e];
      if (r != null && r !== 13)
        return;
    }
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var l = a.replace(/##/g, ""); l.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var s = new Ki(a, this.settings), o = [], h = s.lex(); h.text !== "EOF"; )
        o.push(h), h = s.lex();
      o.reverse();
      var d = {
        tokens: o,
        numArgs: i
      };
      return d;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || _0.hasOwnProperty(e) || we.math.hasOwnProperty(e) || we.text.hasOwnProperty(e) || no.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : _0.hasOwnProperty(e) && !_0[e].primitive;
  }
}
var el = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Tr = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), On = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, tl = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class fn {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new $c(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new R("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new yt("}")), this.gullet.pushTokens(e);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (fn.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && _0[a.text] && _0[a.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      r.push(i);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, r, a = 0; a < e.length; a++)
      if (e[a].type === "infix") {
        if (t !== -1)
          throw new R("only one infix operator per group", e[a].token);
        t = a, r = e[a].replaceWith;
      }
    if (t !== -1 && r) {
      var i, l, s = e.slice(0, t), o = e.slice(t + 1);
      s.length === 1 && s[0].type === "ordgroup" ? i = s[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      }, o.length === 1 && o[0].type === "ordgroup" ? l = o[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: o
      };
      var h;
      return r === "\\\\abovefrac" ? h = this.callFunction(r, [i, e[t], l], []) : h = this.callFunction(r, [i, l], []), [h];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), r = t.text;
    this.consume(), this.consumeSpaces();
    var a;
    do {
      var i;
      a = this.parseGroup(e);
    } while (((i = a) == null ? void 0 : i.type) === "internal");
    if (!a)
      throw new R("Expected group after '" + r + "'", t);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text")
      return t;
    for (var r, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new R("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new R("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new R("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new R("Double superscript", i);
        var s = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, o = [s];
        for (this.consume(); this.fetch().text === "'"; )
          o.push(s), this.consume();
        this.fetch().text === "^" && o.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: o
        };
      } else if (Tr[i.text]) {
        var h = el.test(i.text), d = [];
        for (d.push(new yt(Tr[i.text])), this.consume(); ; ) {
          var p = this.fetch().text;
          if (!Tr[p] || el.test(p) !== h)
            break;
          d.unshift(new yt(Tr[p])), this.consume();
        }
        var g = this.subparse(d);
        h ? a = {
          type: "ordgroup",
          mode: "math",
          body: g
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: g
        };
      } else
        break;
    }
    return r || a ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: r,
      sub: a
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var r = this.fetch(), a = r.text, i = _0[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new R("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new R("Can't use function '" + a + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new R("Can't use function '" + a + "' in math mode", r);
    var {
      args: l,
      optArgs: s
    } = this.parseArguments(a, i);
    return this.callFunction(a, l, s, r, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, r, a, i) {
    var l = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, s = _0[e];
    if (s && s.handler)
      return s.handler(l, t, r);
    throw new R("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var r = t.numArgs + t.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var a = [], i = [], l = 0; l < r; l++) {
      var s = t.argTypes && t.argTypes[l], o = l < t.numOptionalArgs;
      (t.primitive && s == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && i[0] == null) && (s = "primitive");
      var h = this.parseGroupOfType("argument to '" + e + "'", s, o);
      if (o)
        i.push(h);
      else if (h != null)
        a.push(h);
      else
        throw new R("Null argument, please report this as a bug");
    }
    return {
      args: a,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, r) {
    switch (t) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, t);
      case "hbox": {
        var a = this.parseArgumentGroup(r, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", r);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new R("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new R("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new R("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      a += i.text, this.consume();
    return this.consume(), r.text = a, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var r = this.fetch(), a = r, i = "", l; (l = this.fetch()).text !== "EOF" && e.test(i + l.text); )
      a = l, i += a.text, this.consume();
    if (i === "")
      throw new R("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!r)
      throw new R("Invalid color: '" + t.text + "'", t);
    var a = r[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, r = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", r = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a)
      throw new R("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!ds(i))
      throw new R("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: i
    };
    return t && this.switchMode(a), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var r = this.fetch(), a = r.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var l = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var s = this.parseExpression(!1, l), o = this.fetch();
      this.expect(l), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: ct.range(r, o),
        body: s,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !no.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new R("Undefined control sequence: " + a, r);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, r = 0; r < t; ++r) {
      var a = e[r], i = a.text;
      i === "-" && e[r + 1].text === "-" && (r + 1 < t && e[r + 2].text === "-" ? (e.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: ct.range(a, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: ct.range(a, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: ct.range(a, e[r + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var r = t.slice(5), a = r.charAt(0) === "*";
      if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new R(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: a
      };
    }
    tl.hasOwnProperty(t[0]) && !we[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = tl[t[0]] + t.slice(1));
    var i = kc.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (we[this.mode][t]) {
      this.settings.strict && this.mode === "math" && ea.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var s = we[this.mode][t].group, o = ct.range(e), h;
      if (p1.hasOwnProperty(s)) {
        var d = s;
        h = {
          type: "atom",
          mode: this.mode,
          family: d,
          loc: o,
          text: t
        };
      } else
        h = {
          type: s,
          mode: this.mode,
          loc: o,
          text: t
        };
      l = h;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (ms(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: ct.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var p = 0; p < i[0].length; p++) {
        var g = i[0][p];
        if (!On[g])
          throw new R("Unknown accent ' " + g + "'", e);
        var _ = On[g][this.mode] || On[g].text;
        if (!_)
          throw new R("Accent " + g + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: ct.range(e),
          label: _,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
fn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Ga = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new fn(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var a = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new R("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: r.subparse([new yt("\\df@tag")])
    }];
  }
  return a;
}, ao = function(e, t, r) {
  t.textContent = "";
  var a = Va(e, r).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), ao = function() {
  throw new R("KaTeX doesn't work in quirks mode.");
});
var Ec = function(e, t) {
  var r = Va(e, t).toMarkup();
  return r;
}, Fc = function(e, t) {
  var r = new Aa(t);
  return Ga(e, r);
}, io = function(e, t, r) {
  if (r.throwOnError || !(e instanceof R))
    throw e;
  var a = A.makeSpan(["katex-error"], [new wt(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a;
}, Va = function(e, t) {
  var r = new Aa(t);
  try {
    var a = Ga(e, r);
    return I1(a, e, r);
  } catch (i) {
    return io(i, e, r);
  }
}, Cc = function(e, t) {
  var r = new Aa(t);
  try {
    var a = Ga(e, r);
    return L1(a, e, r);
  } catch (i) {
    return io(i, e, r);
  }
}, Tc = "0.16.22", Mc = {
  Span: hr,
  Anchor: Fa,
  SymbolNode: wt,
  SvgNode: c0,
  PathNode: y0,
  LineNode: Jn
}, rl = {
  /**
   * Current KaTeX version
   */
  version: Tc,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: ao,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: Ec,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: R,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Ur,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: Fc,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Va,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: Cc,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: s1,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: u,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: G,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: f,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: Mc
}, zc = function(e, t, r) {
  for (var a = r, i = 0, l = e.length; a < t.length; ) {
    var s = t[a];
    if (i <= 0 && t.slice(a, a + l) === e)
      return a;
    s === "\\" ? a++ : s === "{" ? i++ : s === "}" && i--, a++;
  }
  return -1;
}, Bc = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, Nc = /^\\begin{/, qc = function(e, t) {
  for (var r, a = [], i = new RegExp("(" + t.map((h) => Bc(h.left)).join("|") + ")"); r = e.search(i), r !== -1; ) {
    r > 0 && (a.push({
      type: "text",
      data: e.slice(0, r)
    }), e = e.slice(r));
    var l = t.findIndex((h) => e.startsWith(h.left));
    if (r = zc(t[l].right, e, t[l].left.length), r === -1)
      break;
    var s = e.slice(0, r + t[l].right.length), o = Nc.test(s) ? s : e.slice(t[l].left.length, r);
    a.push({
      type: "math",
      data: o,
      rawData: s,
      display: t[l].display
    }), e = e.slice(r + t[l].right.length);
  }
  return e !== "" && a.push({
    type: "text",
    data: e
  }), a;
}, Rc = function(e, t) {
  var r = qc(e, t.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var a = document.createDocumentFragment(), i = 0; i < r.length; i++)
    if (r[i].type === "text")
      a.appendChild(document.createTextNode(r[i].data));
    else {
      var l = document.createElement("span"), s = r[i].data;
      t.displayMode = r[i].display;
      try {
        t.preProcess && (s = t.preProcess(s)), rl.render(s, l, t);
      } catch (o) {
        if (!(o instanceof rl.ParseError))
          throw o;
        t.errorCallback("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", o), a.appendChild(document.createTextNode(r[i].rawData));
        continue;
      }
      a.appendChild(l);
    }
  return a;
}, Ic = function n(e, t) {
  for (var r = 0; r < e.childNodes.length; r++) {
    var a = e.childNodes[r];
    if (a.nodeType === 3) {
      for (var i = a.textContent, l = a.nextSibling, s = 0; l && l.nodeType === Node.TEXT_NODE; )
        i += l.textContent, l = l.nextSibling, s++;
      var o = Rc(i, t);
      if (o) {
        for (var h = 0; h < s; h++)
          a.nextSibling.remove();
        r += o.childNodes.length - 1, e.replaceChild(o, a);
      } else
        r += s;
    } else a.nodeType === 1 && function() {
      var d = " " + a.className + " ", p = t.ignoredTags.indexOf(a.nodeName.toLowerCase()) === -1 && t.ignoredClasses.every((g) => d.indexOf(" " + g + " ") === -1);
      p && n(a, t);
    }();
  }
}, Lc = function(e, t) {
  if (!e)
    throw new Error("No element provided to render");
  var r = {};
  for (var a in t)
    t.hasOwnProperty(a) && (r[a] = t[a]);
  r.delimiters = r.delimiters || [
    {
      left: "$$",
      right: "$$",
      display: !0
    },
    {
      left: "\\(",
      right: "\\)",
      display: !1
    },
    // LaTeX uses $…$, but it ruins the display of normal `$` in text:
    // {left: "$", right: "$", display: false},
    // $ must come after $$
    // Render AMS environments even if outside $$…$$ delimiters.
    {
      left: "\\begin{equation}",
      right: "\\end{equation}",
      display: !0
    },
    {
      left: "\\begin{align}",
      right: "\\end{align}",
      display: !0
    },
    {
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
      display: !0
    },
    {
      left: "\\begin{gather}",
      right: "\\end{gather}",
      display: !0
    },
    {
      left: "\\begin{CD}",
      right: "\\end{CD}",
      display: !0
    },
    {
      left: "\\[",
      right: "\\]",
      display: !0
    }
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, Ic(e, r);
};
function Wa() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let C0 = Wa();
function lo(n) {
  C0 = n;
}
const so = /[&<>"']/, Oc = new RegExp(so.source, "g"), oo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Pc = new RegExp(oo.source, "g"), Hc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, nl = (n) => Hc[n];
function ht(n, e) {
  if (e) {
    if (so.test(n))
      return n.replace(Oc, nl);
  } else if (oo.test(n))
    return n.replace(Pc, nl);
  return n;
}
const Uc = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Gc(n) {
  return n.replace(Uc, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Vc = /(^|[^\[])\^/g;
function ve(n, e) {
  let t = typeof n == "string" ? n : n.source;
  e = e || "";
  const r = {
    replace: (a, i) => {
      let l = typeof i == "string" ? i : i.source;
      return l = l.replace(Vc, "$1"), t = t.replace(a, l), r;
    },
    getRegex: () => new RegExp(t, e)
  };
  return r;
}
function al(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const ir = { exec: () => null };
function il(n, e) {
  const t = n.replace(/\|/g, (i, l, s) => {
    let o = !1, h = l;
    for (; --h >= 0 && s[h] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), r = t.split(/ \|/);
  let a = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; a < r.length; a++)
    r[a] = r[a].trim().replace(/\\\|/g, "|");
  return r;
}
function Mr(n, e, t) {
  const r = n.length;
  if (r === 0)
    return "";
  let a = 0;
  for (; a < r && n.charAt(r - a - 1) === e; )
    a++;
  return n.slice(0, r - a);
}
function Wc(n, e) {
  if (n.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < n.length; r++)
    if (n[r] === "\\")
      r++;
    else if (n[r] === e[0])
      t++;
    else if (n[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function ll(n, e, t, r) {
  const a = e.href, i = e.title ? ht(e.title) : null, l = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const s = {
      type: "link",
      raw: t,
      href: a,
      title: i,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, s;
  }
  return {
    type: "image",
    raw: t,
    href: a,
    title: i,
    text: ht(l)
  };
}
function jc(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const r = t[1];
  return e.split(`
`).map((a) => {
    const i = a.match(/^\s+/);
    if (i === null)
      return a;
    const [l] = i;
    return l.length >= r.length ? a.slice(r.length) : a;
  }).join(`
`);
}
class nn {
  // set by the lexer
  constructor(e) {
    ke(this, "options");
    ke(this, "rules");
    // set by the lexer
    ke(this, "lexer");
    this.options = e || C0;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : Mr(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], a = jc(r, t[3] || "");
      return {
        type: "code",
        raw: r,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: a
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const a = Mr(r, "#");
        (this.options.pedantic || !a || / $/.test(a)) && (r = a.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      r = Mr(r.replace(/^ *>[ \t]?/gm, ""), `
`);
      const a = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(r);
      return this.lexer.state.top = a, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const a = r.length > 1, i = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = a ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = a ? r : "[*+-]");
      const l = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let s = "", o = "", h = !1;
      for (; e; ) {
        let d = !1;
        if (!(t = l.exec(e)) || this.rules.block.hr.test(e))
          break;
        s = t[0], e = e.substring(s.length);
        let p = t[2].split(`
`, 1)[0].replace(/^\t+/, (F) => " ".repeat(3 * F.length)), g = e.split(`
`, 1)[0], _ = 0;
        this.options.pedantic ? (_ = 2, o = p.trimStart()) : (_ = t[2].search(/[^ ]/), _ = _ > 4 ? 1 : _, o = p.slice(_), _ += t[1].length);
        let E = !1;
        if (!p && /^ *$/.test(g) && (s += g + `
`, e = e.substring(g.length + 1), d = !0), !d) {
          const F = new RegExp(`^ {0,${Math.min(3, _ - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), w = new RegExp(`^ {0,${Math.min(3, _ - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), v = new RegExp(`^ {0,${Math.min(3, _ - 1)}}(?:\`\`\`|~~~)`), x = new RegExp(`^ {0,${Math.min(3, _ - 1)}}#`);
          for (; e; ) {
            const S = e.split(`
`, 1)[0];
            if (g = S, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), v.test(g) || x.test(g) || F.test(g) || w.test(e))
              break;
            if (g.search(/[^ ]/) >= _ || !g.trim())
              o += `
` + g.slice(_);
            else {
              if (E || p.search(/[^ ]/) >= 4 || v.test(p) || x.test(p) || w.test(p))
                break;
              o += `
` + g;
            }
            !E && !g.trim() && (E = !0), s += S + `
`, e = e.substring(S.length + 1), p = g.slice(_);
          }
        }
        i.loose || (h ? i.loose = !0 : /\n *\n *$/.test(s) && (h = !0));
        let C = null, $;
        this.options.gfm && (C = /^\[[ xX]\] /.exec(o), C && ($ = C[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), i.items.push({
          type: "list_item",
          raw: s,
          task: !!C,
          checked: $,
          loose: !1,
          text: o,
          tokens: []
        }), i.raw += s;
      }
      i.items[i.items.length - 1].raw = s.trimEnd(), i.items[i.items.length - 1].text = o.trimEnd(), i.raw = i.raw.trimEnd();
      for (let d = 0; d < i.items.length; d++)
        if (this.lexer.state.top = !1, i.items[d].tokens = this.lexer.blockTokens(i.items[d].text, []), !i.loose) {
          const p = i.items[d].tokens.filter((_) => _.type === "space"), g = p.length > 0 && p.some((_) => /\n.*\n/.test(_.raw));
          i.loose = g;
        }
      if (i.loose)
        for (let d = 0; d < i.items.length; d++)
          i.items[d].loose = !0;
      return i;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), a = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: r,
        raw: t[0],
        href: a,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const r = il(t[1]), a = t[2].replace(/^\||\| *$/g, "").split("|"), i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], l = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === a.length) {
      for (const s of a)
        /^ *-+: *$/.test(s) ? l.align.push("right") : /^ *:-+: *$/.test(s) ? l.align.push("center") : /^ *:-+ *$/.test(s) ? l.align.push("left") : l.align.push(null);
      for (const s of r)
        l.header.push({
          text: s,
          tokens: this.lexer.inline(s)
        });
      for (const s of i)
        l.rows.push(il(s, l.header.length).map((o) => ({
          text: o,
          tokens: this.lexer.inline(o)
        })));
      return l;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: ht(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const l = Mr(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = Wc(t[2], "()");
        if (l > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let a = t[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
        l && (a = l[1], i = l[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return a = a.trim(), /^</.test(a) && (this.options.pedantic && !/>$/.test(r) ? a = a.slice(1) : a = a.slice(1, -1)), ll(t, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const a = (r[2] || r[1]).replace(/\s+/g, " "), i = t[a.toLowerCase()];
      if (!i) {
        const l = r[0].charAt(0);
        return {
          type: "text",
          raw: l,
          text: l
        };
      }
      return ll(r, i, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(a[1] || a[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const l = [...a[0]].length - 1;
      let s, o, h = l, d = 0;
      const p = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + l); (a = p.exec(t)) != null; ) {
        if (s = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !s)
          continue;
        if (o = [...s].length, a[3] || a[4]) {
          h += o;
          continue;
        } else if ((a[5] || a[6]) && l % 3 && !((l + o) % 3)) {
          d += o;
          continue;
        }
        if (h -= o, h > 0)
          continue;
        o = Math.min(o, o + h + d);
        const g = [...a[0]][0].length, _ = e.slice(0, l + a.index + g + o);
        if (Math.min(l, o) % 2) {
          const C = _.slice(1, -1);
          return {
            type: "em",
            raw: _,
            text: C,
            tokens: this.lexer.inlineTokens(C)
          };
        }
        const E = _.slice(2, -2);
        return {
          type: "strong",
          raw: _,
          text: E,
          tokens: this.lexer.inlineTokens(E)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const a = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return a && i && (r = r.substring(1, r.length - 1)), r = ht(r, !0), {
        type: "codespan",
        raw: t[0],
        text: r
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, a;
      return t[2] === "@" ? (r = ht(t[1]), a = "mailto:" + r) : (r = ht(t[1]), a = r), {
        type: "link",
        raw: t[0],
        text: r,
        href: a,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e) {
    var r;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let a, i;
      if (t[2] === "@")
        a = ht(t[0]), i = "mailto:" + a;
      else {
        let l;
        do
          l = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (l !== t[0]);
        a = ht(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: a,
        href: i,
        tokens: [
          {
            type: "text",
            raw: a,
            text: a
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = ht(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const Xc = /^(?: *(?:\n|$))+/, Yc = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Zc = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, dr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Kc = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, uo = /(?:[*+-]|\d{1,9}[.)])/, co = ve(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, uo).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), ja = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Qc = /^[^\n]+/, Xa = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Jc = ve(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Xa).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), eh = ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, uo).getRegex(), pn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ya = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, th = ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Ya).replace("tag", pn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ho = ve(ja).replace("hr", dr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pn).getRegex(), rh = ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ho).getRegex(), Za = {
  blockquote: rh,
  code: Yc,
  def: Jc,
  fences: Zc,
  heading: Kc,
  hr: dr,
  html: th,
  lheading: co,
  list: eh,
  newline: Xc,
  paragraph: ho,
  table: ir,
  text: Qc
}, sl = ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", dr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pn).getRegex(), nh = {
  ...Za,
  table: sl,
  paragraph: ve(ja).replace("hr", dr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", sl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pn).getRegex()
}, ah = {
  ...Za,
  html: ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ya).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: ir,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ve(ja).replace("hr", dr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", co).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, mo = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ih = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, fo = /^( {2,}|\\)\n(?!\s*$)/, lh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, fr = "\\p{P}\\p{S}", sh = ve(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, fr).getRegex(), oh = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, uh = ve(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, fr).getRegex(), ch = ve("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, fr).getRegex(), hh = ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, fr).getRegex(), mh = ve(/\\([punct])/, "gu").replace(/punct/g, fr).getRegex(), dh = ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), fh = ve(Ya).replace("(?:-->|$)", "-->").getRegex(), ph = ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", fh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), an = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, gh = ve(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", an).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), po = ve(/^!?\[(label)\]\[(ref)\]/).replace("label", an).replace("ref", Xa).getRegex(), go = ve(/^!?\[(ref)\](?:\[\])?/).replace("ref", Xa).getRegex(), _h = ve("reflink|nolink(?!\\()", "g").replace("reflink", po).replace("nolink", go).getRegex(), Ka = {
  _backpedal: ir,
  // only used for GFM url
  anyPunctuation: mh,
  autolink: dh,
  blockSkip: oh,
  br: fo,
  code: ih,
  del: ir,
  emStrongLDelim: uh,
  emStrongRDelimAst: ch,
  emStrongRDelimUnd: hh,
  escape: mo,
  link: gh,
  nolink: go,
  punctuation: sh,
  reflink: po,
  reflinkSearch: _h,
  tag: ph,
  text: lh,
  url: ir
}, vh = {
  ...Ka,
  link: ve(/^!?\[(label)\]\((.*?)\)/).replace("label", an).getRegex(),
  reflink: ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", an).getRegex()
}, la = {
  ...Ka,
  escape: ve(mo).replace("])", "~|])").getRegex(),
  url: ve(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, bh = {
  ...la,
  br: ve(fo).replace("{2,}", "*").getRegex(),
  text: ve(la.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, zr = {
  normal: Za,
  gfm: nh,
  pedantic: ah
}, Y0 = {
  normal: Ka,
  gfm: la,
  breaks: bh,
  pedantic: vh
};
class Gt {
  constructor(e) {
    ke(this, "tokens");
    ke(this, "options");
    ke(this, "state");
    ke(this, "tokenizer");
    ke(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || C0, this.options.tokenizer = this.options.tokenizer || new nn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: zr.normal,
      inline: Y0.normal
    };
    this.options.pedantic ? (t.block = zr.pedantic, t.inline = Y0.pedantic) : this.options.gfm && (t.block = zr.gfm, this.options.breaks ? t.inline = Y0.breaks : t.inline = Y0.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: zr,
      inline: Y0
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new Gt(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new Gt(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (s, o, h) => o + "    ".repeat(h.length));
    let r, a, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && (a.type === "paragraph" || a.type === "text") ? (a.raw += `
` + r.raw, a.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let s = 1 / 0;
          const o = e.slice(1);
          let h;
          this.options.extensions.startBlock.forEach((d) => {
            h = d.call({ lexer: this }, o), typeof h == "number" && h >= 0 && (s = Math.min(s, h));
          }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          a = t[t.length - 1], l && a.type === "paragraph" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r), l = i.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && a.type === "text" ? (a.raw += `
` + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : t.push(r);
          continue;
        }
        if (e) {
          const s = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(s);
            break;
          } else
            throw new Error(s);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let r, a, i, l = e, s, o, h;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          d.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, s.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (h = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (r = d.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), a = t[t.length - 1], a && r.type === "text" && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, l, h)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const p = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((_) => {
            g = _.call({ lexer: this }, p), typeof g == "number" && g >= 0 && (d = Math.min(d, g));
          }), d < 1 / 0 && d >= 0 && (i = e.substring(0, d + 1));
        }
        if (r = this.tokenizer.inlineText(i)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (h = r.raw.slice(-1)), o = !0, a = t[t.length - 1], a && a.type === "text" ? (a.raw += r.raw, a.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const d = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(d);
            break;
          } else
            throw new Error(d);
        }
      }
    return t;
  }
}
class ln {
  constructor(e) {
    ke(this, "options");
    this.options = e || C0;
  }
  code(e, t, r) {
    var i;
    const a = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0];
    return e = e.replace(/\n$/, "") + `
`, a ? '<pre><code class="language-' + ht(a) + '">' + (r ? e : ht(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : ht(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    const a = t ? "ol" : "ul", i = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + i + `>
` + e + "</" + a + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    const a = al(e);
    if (a === null)
      return r;
    e = a;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + t + '"'), i += ">" + r + "</a>", i;
  }
  image(e, t, r) {
    const a = al(e);
    if (a === null)
      return r;
    e = a;
    let i = `<img src="${e}" alt="${r}"`;
    return t && (i += ` title="${t}"`), i += ">", i;
  }
  text(e) {
    return e;
  }
}
class Qa {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class Vt {
  constructor(e) {
    ke(this, "options");
    ke(this, "renderer");
    ke(this, "textRenderer");
    this.options = e || C0, this.options.renderer = this.options.renderer || new ln(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Qa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Vt(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Vt(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = i, s = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (s !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          r += s || "";
          continue;
        }
      }
      switch (i.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const l = i;
          r += this.renderer.heading(this.parseInline(l.tokens), l.depth, Gc(this.parseInline(l.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const l = i;
          r += this.renderer.code(l.text, l.lang, !!l.escaped);
          continue;
        }
        case "table": {
          const l = i;
          let s = "", o = "";
          for (let d = 0; d < l.header.length; d++)
            o += this.renderer.tablecell(this.parseInline(l.header[d].tokens), { header: !0, align: l.align[d] });
          s += this.renderer.tablerow(o);
          let h = "";
          for (let d = 0; d < l.rows.length; d++) {
            const p = l.rows[d];
            o = "";
            for (let g = 0; g < p.length; g++)
              o += this.renderer.tablecell(this.parseInline(p[g].tokens), { header: !1, align: l.align[g] });
            h += this.renderer.tablerow(o);
          }
          r += this.renderer.table(s, h);
          continue;
        }
        case "blockquote": {
          const l = i, s = this.parse(l.tokens);
          r += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          const l = i, s = l.ordered, o = l.start, h = l.loose;
          let d = "";
          for (let p = 0; p < l.items.length; p++) {
            const g = l.items[p], _ = g.checked, E = g.task;
            let C = "";
            if (g.task) {
              const $ = this.renderer.checkbox(!!_);
              h ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = $ + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = $ + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: $ + " "
              }) : C += $ + " ";
            }
            C += this.parse(g.tokens, h), d += this.renderer.listitem(C, E, !!_);
          }
          r += this.renderer.list(d, s, o);
          continue;
        }
        case "html": {
          const l = i;
          r += this.renderer.html(l.text, l.block);
          continue;
        }
        case "paragraph": {
          const l = i;
          r += this.renderer.paragraph(this.parseInline(l.tokens));
          continue;
        }
        case "text": {
          let l = i, s = l.tokens ? this.parseInline(l.tokens) : l.text;
          for (; a + 1 < e.length && e[a + 1].type === "text"; )
            l = e[++a], s += `
` + (l.tokens ? this.parseInline(l.tokens) : l.text);
          r += t ? this.renderer.paragraph(s) : s;
          continue;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
        const l = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          r += l || "";
          continue;
        }
      }
      switch (i.type) {
        case "escape": {
          const l = i;
          r += t.text(l.text);
          break;
        }
        case "html": {
          const l = i;
          r += t.html(l.text);
          break;
        }
        case "link": {
          const l = i;
          r += t.link(l.href, l.title, this.parseInline(l.tokens, t));
          break;
        }
        case "image": {
          const l = i;
          r += t.image(l.href, l.title, l.text);
          break;
        }
        case "strong": {
          const l = i;
          r += t.strong(this.parseInline(l.tokens, t));
          break;
        }
        case "em": {
          const l = i;
          r += t.em(this.parseInline(l.tokens, t));
          break;
        }
        case "codespan": {
          const l = i;
          r += t.codespan(l.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          const l = i;
          r += t.del(this.parseInline(l.tokens, t));
          break;
        }
        case "text": {
          const l = i;
          r += t.text(l.text);
          break;
        }
        default: {
          const l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return r;
  }
}
class lr {
  constructor(e) {
    ke(this, "options");
    this.options = e || C0;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
ke(lr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var E0, sa, vo;
class _o {
  constructor(...e) {
    vi(this, E0);
    ke(this, "defaults", Wa());
    ke(this, "options", this.setOptions);
    ke(this, "parse", br(this, E0, sa).call(this, Gt.lex, Vt.parse));
    ke(this, "parseInline", br(this, E0, sa).call(this, Gt.lexInline, Vt.parseInline));
    ke(this, "Parser", Vt);
    ke(this, "Renderer", ln);
    ke(this, "TextRenderer", Qa);
    ke(this, "Lexer", Gt);
    ke(this, "Tokenizer", nn);
    ke(this, "Hooks", lr);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var a, i;
    let r = [];
    for (const l of e)
      switch (r = r.concat(t.call(this, l)), l.type) {
        case "table": {
          const s = l;
          for (const o of s.header)
            r = r.concat(this.walkTokens(o.tokens, t));
          for (const o of s.rows)
            for (const h of o)
              r = r.concat(this.walkTokens(h.tokens, t));
          break;
        }
        case "list": {
          const s = l;
          r = r.concat(this.walkTokens(s.items, t));
          break;
        }
        default: {
          const s = l;
          (i = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && i[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            const h = s[o].flat(1 / 0);
            r = r.concat(this.walkTokens(h, t));
          }) : s.tokens && (r = r.concat(this.walkTokens(s.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      const a = { ...r };
      if (a.async = this.defaults.async || a.async || !1, r.extensions && (r.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const l = t.renderers[i.name];
          l ? t.renderers[i.name] = function(...s) {
            let o = i.renderer.apply(this, s);
            return o === !1 && (o = l.apply(this, s)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const l = t[i.level];
          l ? l.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), a.extensions = t), r.renderer) {
        const i = this.defaults.renderer || new ln(this.defaults);
        for (const l in r.renderer) {
          if (!(l in i))
            throw new Error(`renderer '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.renderer[s], h = i[s];
          i[s] = (...d) => {
            let p = o.apply(i, d);
            return p === !1 && (p = h.apply(i, d)), p || "";
          };
        }
        a.renderer = i;
      }
      if (r.tokenizer) {
        const i = this.defaults.tokenizer || new nn(this.defaults);
        for (const l in r.tokenizer) {
          if (!(l in i))
            throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l))
            continue;
          const s = l, o = r.tokenizer[s], h = i[s];
          i[s] = (...d) => {
            let p = o.apply(i, d);
            return p === !1 && (p = h.apply(i, d)), p;
          };
        }
        a.tokenizer = i;
      }
      if (r.hooks) {
        const i = this.defaults.hooks || new lr();
        for (const l in r.hooks) {
          if (!(l in i))
            throw new Error(`hook '${l}' does not exist`);
          if (l === "options")
            continue;
          const s = l, o = r.hooks[s], h = i[s];
          lr.passThroughHooks.has(l) ? i[s] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(i, d)).then((g) => h.call(i, g));
            const p = o.call(i, d);
            return h.call(i, p);
          } : i[s] = (...d) => {
            let p = o.apply(i, d);
            return p === !1 && (p = h.apply(i, d)), p;
          };
        }
        a.hooks = i;
      }
      if (r.walkTokens) {
        const i = this.defaults.walkTokens, l = r.walkTokens;
        a.walkTokens = function(s) {
          let o = [];
          return o.push(l.call(this, s)), i && (o = o.concat(i.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return Gt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return Vt.parse(e, t ?? this.defaults);
  }
}
E0 = new WeakSet(), sa = function(e, t) {
  return (r, a) => {
    const i = { ...a }, l = { ...this.defaults, ...i };
    this.defaults.async === !0 && i.async === !1 && (l.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), l.async = !0);
    const s = br(this, E0, vo).call(this, !!l.silent, !!l.async);
    if (typeof r > "u" || r === null)
      return s(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (l.hooks && (l.hooks.options = l), l.async)
      return Promise.resolve(l.hooks ? l.hooks.preprocess(r) : r).then((o) => e(o, l)).then((o) => l.hooks ? l.hooks.processAllTokens(o) : o).then((o) => l.walkTokens ? Promise.all(this.walkTokens(o, l.walkTokens)).then(() => o) : o).then((o) => t(o, l)).then((o) => l.hooks ? l.hooks.postprocess(o) : o).catch(s);
    try {
      l.hooks && (r = l.hooks.preprocess(r));
      let o = e(r, l);
      l.hooks && (o = l.hooks.processAllTokens(o)), l.walkTokens && this.walkTokens(o, l.walkTokens);
      let h = t(o, l);
      return l.hooks && (h = l.hooks.postprocess(h)), h;
    } catch (o) {
      return s(o);
    }
  };
}, vo = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const a = "<p>An error occurred:</p><pre>" + ht(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(a) : a;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const $0 = new _o();
function _e(n, e) {
  return $0.parse(n, e);
}
_e.options = _e.setOptions = function(n) {
  return $0.setOptions(n), _e.defaults = $0.defaults, lo(_e.defaults), _e;
};
_e.getDefaults = Wa;
_e.defaults = C0;
_e.use = function(...n) {
  return $0.use(...n), _e.defaults = $0.defaults, lo(_e.defaults), _e;
};
_e.walkTokens = function(n, e) {
  return $0.walkTokens(n, e);
};
_e.parseInline = $0.parseInline;
_e.Parser = Vt;
_e.parser = Vt.parse;
_e.Renderer = ln;
_e.TextRenderer = Qa;
_e.Lexer = Gt;
_e.lexer = Gt.lex;
_e.Tokenizer = nn;
_e.Hooks = lr;
_e.parse = _e;
_e.options;
_e.setOptions;
_e.use;
_e.walkTokens;
_e.parseInline;
Vt.parse;
Gt.lex;
function yh(n) {
  if (typeof n == "function" && (n = {
    highlight: n
  }), !n || typeof n.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof n.langPrefix != "string" && (n.langPrefix = "language-"), typeof n.emptyLangClass != "string" && (n.emptyLangClass = ""), {
    async: !!n.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = ol(e.lang);
      if (n.async)
        return Promise.resolve(n.highlight(e.text, t, e.lang || "")).then(ul(e));
      const r = n.highlight(e.text, t, e.lang || "");
      if (r instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      ul(e)(r);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, r) {
        typeof e == "object" && (r = e.escaped, t = e.lang, e = e.text);
        const a = ol(t), i = a ? n.langPrefix + hl(a) : n.emptyLangClass, l = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${l}>${r ? e : hl(e, !0)}
</code></pre>`;
      }
    }
  };
}
function ol(n) {
  return (n || "").match(/\S*/)[0];
}
function ul(n) {
  return (e) => {
    typeof e == "string" && e !== n.text && (n.escaped = !0, n.text = e);
  };
}
const bo = /[&<>"']/, wh = new RegExp(bo.source, "g"), yo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, xh = new RegExp(yo.source, "g"), kh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, cl = (n) => kh[n];
function hl(n, e) {
  if (e) {
    if (bo.test(n))
      return n.replace(wh, cl);
  } else if (yo.test(n))
    return n.replace(xh, cl);
  return n;
}
const Dh = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Sh = Object.hasOwnProperty;
class gn {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(e, t) {
    const r = this;
    let a = Ah(e, t === !0);
    const i = a;
    for (; Sh.call(r.occurrences, a); )
      r.occurrences[i]++, a = i + "-" + r.occurrences[i];
    return r.occurrences[a] = 0, a;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Ah(n, e) {
  return typeof n != "string" ? "" : (e || (n = n.toLowerCase()), n.replace(Dh, "").replace(/ /g, "-"));
}
let wo = new gn(), xo = [];
function $h({ prefix: n = "", globalSlugs: e = !1 } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(t) {
        return e || Eh(), t;
      }
    },
    renderer: {
      heading(t, r, a) {
        a = a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const i = `${n}${wo.slug(a)}`, l = { level: r, text: t, id: i };
        return xo.push(l), `<h${r} id="${i}">${t}</h${r}>
`;
      }
    }
  };
}
function Eh() {
  xo = [], wo = new gn();
}
var ml = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ko = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, l = {}, s = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function w(v) {
          return v instanceof o ? new o(v.type, w(v.content), v.alias) : Array.isArray(v) ? v.map(w) : v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(w) {
          return Object.prototype.toString.call(w).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(w) {
          return w.__id || Object.defineProperty(w, "__id", { value: ++i }), w.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function w(v, x) {
          x = x || {};
          var S, T;
          switch (s.util.type(v)) {
            case "Object":
              if (T = s.util.objId(v), x[T])
                return x[T];
              S = /** @type {Record<string, any>} */
              {}, x[T] = S;
              for (var M in v)
                v.hasOwnProperty(M) && (S[M] = w(v[M], x));
              return (
                /** @type {any} */
                S
              );
            case "Array":
              return T = s.util.objId(v), x[T] ? x[T] : (S = [], x[T] = S, /** @type {Array} */
              /** @type {any} */
              v.forEach(function(L, z) {
                S[z] = w(L, x);
              }), /** @type {any} */
              S);
            default:
              return v;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(w) {
          for (; w; ) {
            var v = a.exec(w.className);
            if (v)
              return v[1].toLowerCase();
            w = w.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(w, v) {
          w.className = w.className.replace(RegExp(a, "gi"), ""), w.classList.add("language-" + v);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (S) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
            if (w) {
              var v = document.getElementsByTagName("script");
              for (var x in v)
                if (v[x].src == w)
                  return v[x];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(w, v, x) {
          for (var S = "no-" + v; w; ) {
            var T = w.classList;
            if (T.contains(v))
              return !0;
            if (T.contains(S))
              return !1;
            w = w.parentElement;
          }
          return !!x;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: l,
        plaintext: l,
        text: l,
        txt: l,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(w, v) {
          var x = s.util.clone(s.languages[w]);
          for (var S in v)
            x[S] = v[S];
          return x;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(w, v, x, S) {
          S = S || /** @type {any} */
          s.languages;
          var T = S[w], M = {};
          for (var L in T)
            if (T.hasOwnProperty(L)) {
              if (L == v)
                for (var z in x)
                  x.hasOwnProperty(z) && (M[z] = x[z]);
              x.hasOwnProperty(L) || (M[L] = T[L]);
            }
          var B = S[w];
          return S[w] = M, s.languages.DFS(s.languages, function(W, V) {
            V === B && W != w && (this[W] = M);
          }), M;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(v, x, S, T) {
          T = T || {};
          var M = s.util.objId;
          for (var L in v)
            if (v.hasOwnProperty(L)) {
              x.call(v, L, v[L], S || L);
              var z = v[L], B = s.util.type(z);
              B === "Object" && !T[M(z)] ? (T[M(z)] = !0, w(z, x, null, T)) : B === "Array" && !T[M(z)] && (T[M(z)] = !0, w(z, x, L, T));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(w, v) {
        s.highlightAllUnder(document, w, v);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(w, v, x) {
        var S = {
          callback: x,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        s.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), s.hooks.run("before-all-elements-highlight", S);
        for (var T = 0, M; M = S.elements[T++]; )
          s.highlightElement(M, v === !0, S.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(w, v, x) {
        var S = s.util.getLanguage(w), T = s.languages[S];
        s.util.setLanguage(w, S);
        var M = w.parentElement;
        M && M.nodeName.toLowerCase() === "pre" && s.util.setLanguage(M, S);
        var L = w.textContent, z = {
          element: w,
          language: S,
          grammar: T,
          code: L
        };
        function B(V) {
          z.highlightedCode = V, s.hooks.run("before-insert", z), z.element.innerHTML = z.highlightedCode, s.hooks.run("after-highlight", z), s.hooks.run("complete", z), x && x.call(z.element);
        }
        if (s.hooks.run("before-sanity-check", z), M = z.element.parentElement, M && M.nodeName.toLowerCase() === "pre" && !M.hasAttribute("tabindex") && M.setAttribute("tabindex", "0"), !z.code) {
          s.hooks.run("complete", z), x && x.call(z.element);
          return;
        }
        if (s.hooks.run("before-highlight", z), !z.grammar) {
          B(s.util.encode(z.code));
          return;
        }
        if (v && r.Worker) {
          var W = new Worker(s.filename);
          W.onmessage = function(V) {
            B(V.data);
          }, W.postMessage(JSON.stringify({
            language: z.language,
            code: z.code,
            immediateClose: !0
          }));
        } else
          B(s.highlight(z.code, z.grammar, z.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(w, v, x) {
        var S = {
          code: w,
          grammar: v,
          language: x
        };
        if (s.hooks.run("before-tokenize", S), !S.grammar)
          throw new Error('The language "' + S.language + '" has no grammar.');
        return S.tokens = s.tokenize(S.code, S.grammar), s.hooks.run("after-tokenize", S), o.stringify(s.util.encode(S.tokens), S.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(w, v) {
        var x = v.rest;
        if (x) {
          for (var S in x)
            v[S] = x[S];
          delete v.rest;
        }
        var T = new p();
        return g(T, T.head, w), d(w, T, v, T.head, 0), E(T);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(w, v) {
          var x = s.hooks.all;
          x[w] = x[w] || [], x[w].push(v);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(w, v) {
          var x = s.hooks.all[w];
          if (!(!x || !x.length))
            for (var S = 0, T; T = x[S++]; )
              T(v);
        }
      },
      Token: o
    };
    r.Prism = s;
    function o(w, v, x, S) {
      this.type = w, this.content = v, this.alias = x, this.length = (S || "").length | 0;
    }
    o.stringify = function w(v, x) {
      if (typeof v == "string")
        return v;
      if (Array.isArray(v)) {
        var S = "";
        return v.forEach(function(B) {
          S += w(B, x);
        }), S;
      }
      var T = {
        type: v.type,
        content: w(v.content, x),
        tag: "span",
        classes: ["token", v.type],
        attributes: {},
        language: x
      }, M = v.alias;
      M && (Array.isArray(M) ? Array.prototype.push.apply(T.classes, M) : T.classes.push(M)), s.hooks.run("wrap", T);
      var L = "";
      for (var z in T.attributes)
        L += " " + z + '="' + (T.attributes[z] || "").replace(/"/g, "&quot;") + '"';
      return "<" + T.tag + ' class="' + T.classes.join(" ") + '"' + L + ">" + T.content + "</" + T.tag + ">";
    };
    function h(w, v, x, S) {
      w.lastIndex = v;
      var T = w.exec(x);
      if (T && S && T[1]) {
        var M = T[1].length;
        T.index += M, T[0] = T[0].slice(M);
      }
      return T;
    }
    function d(w, v, x, S, T, M) {
      for (var L in x)
        if (!(!x.hasOwnProperty(L) || !x[L])) {
          var z = x[L];
          z = Array.isArray(z) ? z : [z];
          for (var B = 0; B < z.length; ++B) {
            if (M && M.cause == L + "," + B)
              return;
            var W = z[B], V = W.inside, le = !!W.lookbehind, X = !!W.greedy, ge = W.alias;
            if (X && !W.pattern.global) {
              var pe = W.pattern.toString().match(/[imsuy]*$/)[0];
              W.pattern = RegExp(W.pattern.source, pe + "g");
            }
            for (var ce = W.pattern || W, he = S.next, xe = T; he !== v.tail && !(M && xe >= M.reach); xe += he.value.length, he = he.next) {
              var fe = he.value;
              if (v.length > w.length)
                return;
              if (!(fe instanceof o)) {
                var ae = 1, P;
                if (X) {
                  if (P = h(ce, xe, w, le), !P || P.index >= w.length)
                    break;
                  var Ie = P.index, Z = P.index + P[0].length, Ne = xe;
                  for (Ne += he.value.length; Ie >= Ne; )
                    he = he.next, Ne += he.value.length;
                  if (Ne -= he.value.length, xe = Ne, he.value instanceof o)
                    continue;
                  for (var O = he; O !== v.tail && (Ne < Z || typeof O.value == "string"); O = O.next)
                    ae++, Ne += O.value.length;
                  ae--, fe = w.slice(xe, Ne), P.index -= xe;
                } else if (P = h(ce, 0, fe, le), !P)
                  continue;
                var Ie = P.index, De = P[0], U = fe.slice(0, Ie), ee = fe.slice(Ie + De.length), Se = xe + fe.length;
                M && Se > M.reach && (M.reach = Se);
                var ye = he.prev;
                U && (ye = g(v, ye, U), xe += U.length), _(v, ye, ae);
                var je = new o(L, V ? s.tokenize(De, V) : De, ge, De);
                if (he = g(v, ye, je), ee && g(v, he, ee), ae > 1) {
                  var Le = {
                    cause: L + "," + B,
                    reach: Se
                  };
                  d(w, v, x, he.prev, xe, Le), M && Le.reach > M.reach && (M.reach = Le.reach);
                }
              }
            }
          }
        }
    }
    function p() {
      var w = { value: null, prev: null, next: null }, v = { value: null, prev: w, next: null };
      w.next = v, this.head = w, this.tail = v, this.length = 0;
    }
    function g(w, v, x) {
      var S = v.next, T = { value: x, prev: v, next: S };
      return v.next = T, S.prev = T, w.length++, T;
    }
    function _(w, v, x) {
      for (var S = v.next, T = 0; T < x && S !== w.tail; T++)
        S = S.next;
      v.next = S, S.prev = v, w.length -= T;
    }
    function E(w) {
      for (var v = [], x = w.head.next; x !== w.tail; )
        v.push(x.value), x = x.next;
      return v;
    }
    if (!r.document)
      return r.addEventListener && (s.disableWorkerMessageHandler || r.addEventListener("message", function(w) {
        var v = JSON.parse(w.data), x = v.language, S = v.code, T = v.immediateClose;
        r.postMessage(s.highlight(S, s.languages[x], x)), T && r.close();
      }, !1)), s;
    var C = s.util.currentScript();
    C && (s.filename = C.src, C.hasAttribute("data-manual") && (s.manual = !0));
    function $() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var F = document.readyState;
      F === "loading" || F === "interactive" && C && C.defer ? document.addEventListener("DOMContentLoaded", $) : window.requestAnimationFrame ? window.requestAnimationFrame($) : window.setTimeout($, 16);
    }
    return s;
  }(e);
  n.exports && (n.exports = t), typeof ml < "u" && (ml.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(a, i) {
      var l = {};
      l["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: l
        }
      };
      s["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var o = {};
      o[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: s
      }, t.languages.insertBefore("markup", "cdata", o);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, a) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [a, "language-" + a],
                inside: t.languages[a]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var i = r.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", a = function(C, $) {
      return "✖ Error " + C + " while fetching file: " + $;
    }, i = "✖ Error: File does not exist or is empty", l = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, s = "data-src-status", o = "loading", h = "loaded", d = "failed", p = "pre[data-src]:not([" + s + '="' + h + '"]):not([' + s + '="' + o + '"])';
    function g(C, $, F) {
      var w = new XMLHttpRequest();
      w.open("GET", C, !0), w.onreadystatechange = function() {
        w.readyState == 4 && (w.status < 400 && w.responseText ? $(w.responseText) : w.status >= 400 ? F(a(w.status, w.statusText)) : F(i));
      }, w.send(null);
    }
    function _(C) {
      var $ = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C || "");
      if ($) {
        var F = Number($[1]), w = $[2], v = $[3];
        return w ? v ? [F, Number(v)] : [F, void 0] : [F, F];
      }
    }
    t.hooks.add("before-highlightall", function(C) {
      C.selector += ", " + p;
    }), t.hooks.add("before-sanity-check", function(C) {
      var $ = (
        /** @type {HTMLPreElement} */
        C.element
      );
      if ($.matches(p)) {
        C.code = "", $.setAttribute(s, o);
        var F = $.appendChild(document.createElement("CODE"));
        F.textContent = r;
        var w = $.getAttribute("data-src"), v = C.language;
        if (v === "none") {
          var x = (/\.(\w+)$/.exec(w) || [, "none"])[1];
          v = l[x] || x;
        }
        t.util.setLanguage(F, v), t.util.setLanguage($, v);
        var S = t.plugins.autoloader;
        S && S.loadLanguages(v), g(
          w,
          function(T) {
            $.setAttribute(s, h);
            var M = _($.getAttribute("data-range"));
            if (M) {
              var L = T.split(/\r\n?|\n/g), z = M[0], B = M[1] == null ? L.length : M[1];
              z < 0 && (z += L.length), z = Math.max(0, Math.min(z - 1, L.length)), B < 0 && (B += L.length), B = Math.max(0, Math.min(B, L.length)), T = L.slice(z, B).join(`
`), $.hasAttribute("data-start") || $.setAttribute("data-start", String(z + 1));
            }
            F.textContent = T, t.highlightElement(F);
          },
          function(T) {
            $.setAttribute(s, d), F.textContent = T;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function($) {
        for (var F = ($ || document).querySelectorAll(p), w = 0, v; v = F[w++]; )
          t.highlightElement(v);
      }
    };
    var E = !1;
    t.fileHighlight = function() {
      E || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), E = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(ko);
var Pn = ko.exports;
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(n) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
      alias: "regex"
    }
  };
  n.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, n.languages.tex = n.languages.latex, n.languages.context = n.languages.latex;
})(Prism);
(function(n) {
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + e),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  n.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: r.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, t.inside = n.languages.bash;
  for (var a = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], i = r.variable[1].inside, l = 0; l < a.length; l++)
    i[a[l]] = n.languages.bash[a[l]];
  n.languages.sh = n.languages.bash, n.languages.shell = n.languages.bash;
})(Prism);
const Fh = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', Ch = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" color="currentColor" aria-hidden="true" aria-label="Copy" stroke-width="1.3" width="15" height="15">
  <path fill="currentColor" d="M12.728 4.545v8.182H4.545V4.545zm0 -0.909H4.545a0.909 0.909 0 0 0 -0.909 0.909v8.182a0.909 0.909 0 0 0 0.909 0.909h8.182a0.909 0.909 0 0 0 0.909 -0.909V4.545a0.909 0.909 0 0 0 -0.909 -0.909"/>
  <path fill="currentColor" d="M1.818 8.182H0.909V1.818a0.909 0.909 0 0 1 0.909 -0.909h6.364v0.909H1.818Z"/>
</svg>

`, Th = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" aria-label="Copied" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="m13.813 4.781 -7.438 7.438 -3.188 -3.188"/>
</svg>
`, dl = `<button title="copy" class="copy_code_button">
  <span class="copy-text">${Ch}</span>
  <span class="check">${Th}</span>
</button>`, Do = /[&<>"']/, Mh = new RegExp(Do.source, "g"), So = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, zh = new RegExp(So.source, "g"), Bh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, fl = (n) => Bh[n] || "";
function Hn(n, e) {
  if (e) {
    if (Do.test(n))
      return n.replace(Mh, fl);
  } else if (So.test(n))
    return n.replace(zh, fl);
  return n;
}
function Nh(n) {
  const e = n.map((t) => ({
    start: new RegExp(t.left.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")),
    end: new RegExp(t.right.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
  }));
  return {
    name: "latex",
    level: "block",
    start(t) {
      for (const r of e) {
        const a = t.match(r.start);
        if (a)
          return a.index;
      }
      return -1;
    },
    tokenizer(t, r) {
      for (const a of e) {
        const i = new RegExp(
          `${a.start.source}([\\s\\S]+?)${a.end.source}`
        ).exec(t);
        if (i)
          return {
            type: "latex",
            raw: i[0],
            text: i[1].trim()
          };
      }
    },
    renderer(t) {
      return `<div class="latex-block">${t.text}</div>`;
    }
  };
}
const qh = {
  code(n, e, t) {
    var a;
    const r = ((a = (e ?? "").match(/\S*/)) == null ? void 0 : a[0]) ?? "";
    return n = n.replace(/\n$/, "") + `
`, r ? '<div class="code_wrap">' + dl + '<pre><code class="language-' + Hn(r) + '">' + (t ? n : Hn(n, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + dl + "<pre><code>" + (t ? n : Hn(n, !0)) + `</code></pre></div>
`;
  }
}, Rh = new gn();
function Ih({
  header_links: n,
  line_breaks: e,
  latex_delimiters: t
}) {
  const r = new _o();
  r.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: e
    },
    yh({
      highlight: (i, l) => Pn.languages[l] ? Pn.highlight(i, Pn.languages[l], l) : i
    }),
    { renderer: qh }
  ), n && (r.use($h()), r.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(i) {
          const l = i.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), s = "h" + Rh.slug(l), o = i.depth, h = this.parser.parseInline(i.tokens);
          return `<h${o} id="${s}"><a class="md-header-anchor" href="#${s}">${Fh}</a>${h}</h${o}>
`;
        }
      }
    ]
  }));
  const a = Nh(t);
  return r.use({
    extensions: [a]
  }), r;
}
const oa = (n) => JSON.parse(JSON.stringify(n)), Lh = (n) => n.nodeType === 1, Oh = (n) => sm.has(n.tagName), Ph = (n) => "action" in n, Hh = (n) => n.tagName === "IFRAME", Uh = (n) => "formAction" in n, Gh = (n) => "protocol" in n, Br = /* @__PURE__ */ (() => {
  const n = /^(?:\w+script|data):/i;
  return (e) => n.test(e);
})(), Vh = /* @__PURE__ */ (() => {
  const n = /(?:script|data):/i;
  return (e) => n.test(e);
})(), Wh = (n) => {
  const e = {};
  for (let t = 0, r = n.length; t < r; t++) {
    const a = n[t];
    for (const i in a)
      e[i] ? e[i] = e[i].concat(a[i]) : e[i] = a[i];
  }
  return e;
}, Ao = (n, e) => {
  let t = n.firstChild;
  for (; t; ) {
    const r = t.nextSibling;
    Lh(t) && (e(t, n), t.parentNode && Ao(t, e)), t = r;
  }
}, jh = (n, e) => {
  const t = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = t.nextNode(); ) {
    const a = r.parentNode;
    a && e(r, a);
  }
}, Xh = (n, e) => !!globalThis.document && !!globalThis.document.createNodeIterator ? jh(n, e) : Ao(n, e), $o = [
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "popup",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "section",
  "select",
  "selectmenu",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
], Yh = [
  "basefont",
  "command",
  "data",
  "iframe",
  "image",
  "plaintext",
  "portal",
  "slot",
  // 'template', //TODO: Not exactly correct to never allow this, too strict
  "textarea",
  "title",
  "xmp"
], Zh = /* @__PURE__ */ new Set([
  ...$o,
  ...Yh
]), Eo = [
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern",
  /* FILTERS */
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
], Kh = [
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "fedropshadow",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
], Qh = /* @__PURE__ */ new Set([
  ...Eo,
  ...Kh
]), Fo = [
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover"
], Jh = [
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
], em = /* @__PURE__ */ new Set([
  ...Fo,
  ...Jh
]), tm = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], rm = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], nm = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
], Bt = {
  HTML: "http://www.w3.org/1999/xhtml",
  SVG: "http://www.w3.org/2000/svg",
  MATH: "http://www.w3.org/1998/Math/MathML"
}, am = {
  [Bt.HTML]: Zh,
  [Bt.SVG]: Qh,
  [Bt.MATH]: em
}, im = {
  [Bt.HTML]: "html",
  [Bt.SVG]: "svg",
  [Bt.MATH]: "math"
}, lm = {
  [Bt.HTML]: "",
  [Bt.SVG]: "svg:",
  [Bt.MATH]: "math:"
}, sm = /* @__PURE__ */ new Set([
  "A",
  "AREA",
  "BUTTON",
  "FORM",
  "IFRAME",
  "INPUT"
]), Co = {
  allowComments: !0,
  allowCustomElements: !1,
  allowUnknownMarkup: !1,
  allowElements: [
    ...$o,
    ...Eo.map((n) => `svg:${n}`),
    ...Fo.map((n) => `math:${n}`)
  ],
  allowAttributes: Wh([
    Object.fromEntries(tm.map((n) => [n, ["*"]])),
    Object.fromEntries(rm.map((n) => [n, ["svg:*"]])),
    Object.fromEntries(nm.map((n) => [n, ["math:*"]]))
  ])
};
var Un = function(n, e, t, r, a) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? n !== e || !a : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? a.call(n, t) : a ? a.value = t : e.set(n, t), t;
}, S0 = function(n, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? n !== e || !r : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(n) : r ? r.value : e.get(n);
}, g0, Vr, Wr;
class To {
  /* CONSTRUCTOR */
  constructor(e = {}) {
    g0.set(this, void 0), Vr.set(this, void 0), Wr.set(this, void 0), this.getConfiguration = () => oa(S0(this, g0, "f")), this.sanitize = (d) => {
      const p = S0(this, Vr, "f"), g = S0(this, Wr, "f");
      return Xh(d, (_, E) => {
        const C = _.namespaceURI || Bt.HTML, $ = E.namespaceURI || Bt.HTML, F = am[C], w = im[C], v = lm[C], x = _.tagName.toLowerCase(), S = `${v}${x}`, M = `${v}*`;
        if (!F.has(x) || !p.has(S) || C !== $ && x !== w)
          E.removeChild(_);
        else {
          const L = _.getAttributeNames(), z = L.length;
          if (z) {
            for (let B = 0; B < z; B++) {
              const W = L[B], V = g[W];
              (!V || !V.has(M) && !V.has(S)) && _.removeAttribute(W);
            }
            if (Oh(_))
              if (Gh(_)) {
                const B = _.getAttribute("href");
                B && Vh(B) && Br(_.protocol) && _.removeAttribute("href");
              } else Ph(_) ? Br(_.action) && _.removeAttribute("action") : Uh(_) ? Br(_.formAction) && _.removeAttribute("formaction") : Hh(_) && (Br(_.src) && _.removeAttribute("formaction"), _.setAttribute("sandbox", "allow-scripts"));
          }
        }
      }), d;
    }, this.sanitizeFor = (d, p) => {
      throw new Error('"sanitizeFor" is not implemented yet');
    };
    const { allowComments: t, allowCustomElements: r, allowUnknownMarkup: a, blockElements: i, dropElements: l, dropAttributes: s } = e;
    if (t === !1)
      throw new Error('A false "allowComments" is not supported yet');
    if (r)
      throw new Error('A true "allowCustomElements" is not supported yet');
    if (a)
      throw new Error('A true "allowUnknownMarkup" is not supported yet');
    if (i)
      throw new Error('"blockElements" is not supported yet, use "allowElements" instead');
    if (l)
      throw new Error('"dropElements" is not supported yet, use "allowElements" instead');
    if (s)
      throw new Error('"dropAttributes" is not supported yet, use "allowAttributes" instead');
    Un(this, g0, oa(Co), "f");
    const { allowElements: o, allowAttributes: h } = e;
    o && (S0(this, g0, "f").allowElements = e.allowElements), h && (S0(this, g0, "f").allowAttributes = e.allowAttributes), Un(this, Vr, new Set(S0(this, g0, "f").allowElements), "f"), Un(this, Wr, Object.fromEntries(Object.entries(S0(this, g0, "f").allowAttributes || {}).map(([d, p]) => [d, new Set(p)])), "f");
  }
}
g0 = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap();
To.getDefaultConfiguration = () => oa(Co);
const om = (n, e) => {
  try {
    return !!n && new URL(n).origin !== new URL(e).origin;
  } catch {
    return !1;
  }
};
function pl(n, e) {
  const t = new To(), r = new DOMParser().parseFromString(n, "text/html");
  return Mo(r.body, "A", (a) => {
    a instanceof HTMLElement && "target" in a && om(a.getAttribute("href"), e) && (a.setAttribute("target", "_blank"), a.setAttribute("rel", "noopener noreferrer"));
  }), t.sanitize(r).body.innerHTML;
}
function Mo(n, e, t) {
  n && (n.nodeName === e || typeof e == "function") && t(n);
  const r = (n == null ? void 0 : n.childNodes) || [];
  for (let a = 0; a < r.length; a++)
    Mo(r[a], e, t);
}
const {
  HtmlTagHydration: um,
  SvelteComponent: cm,
  attr: hm,
  binding_callbacks: mm,
  children: dm,
  claim_element: fm,
  claim_html_tag: pm,
  detach: gl,
  element: gm,
  init: _m,
  insert_hydration: vm,
  noop: _l,
  safe_not_equal: bm,
  toggle_class: Nr
} = window.__gradio__svelte__internal, { afterUpdate: ym } = window.__gradio__svelte__internal;
function wm(n) {
  let e, t;
  return {
    c() {
      e = gm("span"), t = new um(!1), this.h();
    },
    l(r) {
      e = fm(r, "SPAN", { class: !0 });
      var a = dm(e);
      t = pm(a, !1), a.forEach(gl), this.h();
    },
    h() {
      t.a = null, hm(e, "class", "md svelte-1m32c2s"), Nr(
        e,
        "chatbot",
        /*chatbot*/
        n[0]
      ), Nr(
        e,
        "prose",
        /*render_markdown*/
        n[1]
      );
    },
    m(r, a) {
      vm(r, e, a), t.m(
        /*html*/
        n[3],
        e
      ), n[10](e);
    },
    p(r, [a]) {
      a & /*html*/
      8 && t.p(
        /*html*/
        r[3]
      ), a & /*chatbot*/
      1 && Nr(
        e,
        "chatbot",
        /*chatbot*/
        r[0]
      ), a & /*render_markdown*/
      2 && Nr(
        e,
        "prose",
        /*render_markdown*/
        r[1]
      );
    },
    i: _l,
    o: _l,
    d(r) {
      r && gl(e), n[10](null);
    }
  };
}
function vl(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function xm(n, e, t) {
  var r = this && this.__awaiter || function(w, v, x, S) {
    function T(M) {
      return M instanceof x ? M : new x(function(L) {
        L(M);
      });
    }
    return new (x || (x = Promise))(function(M, L) {
      function z(V) {
        try {
          W(S.next(V));
        } catch (le) {
          L(le);
        }
      }
      function B(V) {
        try {
          W(S.throw(V));
        } catch (le) {
          L(le);
        }
      }
      function W(V) {
        V.done ? M(V.value) : T(V.value).then(z, B);
      }
      W((S = S.apply(w, v || [])).next());
    });
  };
  let { chatbot: a = !0 } = e, { message: i } = e, { sanitize_html: l = !0 } = e, { latex_delimiters: s = [] } = e, { render_markdown: o = !0 } = e, { line_breaks: h = !0 } = e, { header_links: d = !1 } = e, { root: p } = e, g, _;
  const E = Ih({
    header_links: d,
    line_breaks: h,
    latex_delimiters: s
  });
  function C(w) {
    let v = w;
    if (o) {
      const x = [];
      s.forEach((S, T) => {
        const M = vl(S.left), L = vl(S.right), z = new RegExp(`${M}([\\s\\S]+?)${L}`, "g");
        v = v.replace(z, (B, W) => (x.push(B), `%%%LATEX_BLOCK_${x.length - 1}%%%`));
      }), v = E.parse(v), v = v.replace(/%%%LATEX_BLOCK_(\d+)%%%/g, (S, T) => x[parseInt(T, 10)]);
    }
    return l && pl && (v = pl(v, p)), v;
  }
  function $(w) {
    return r(this, void 0, void 0, function* () {
      s.length > 0 && w && s.some((x) => w.includes(x.left) && w.includes(x.right)) && Lc(g, {
        delimiters: s,
        throwOnError: !1
      });
    });
  }
  ym(() => r(void 0, void 0, void 0, function* () {
    g && document.body.contains(g) ? yield $(i) : console.error("Element is not in the DOM");
  }));
  function F(w) {
    mm[w ? "unshift" : "push"](() => {
      g = w, t(2, g);
    });
  }
  return n.$$set = (w) => {
    "chatbot" in w && t(0, a = w.chatbot), "message" in w && t(4, i = w.message), "sanitize_html" in w && t(5, l = w.sanitize_html), "latex_delimiters" in w && t(6, s = w.latex_delimiters), "render_markdown" in w && t(1, o = w.render_markdown), "line_breaks" in w && t(7, h = w.line_breaks), "header_links" in w && t(8, d = w.header_links), "root" in w && t(9, p = w.root);
  }, n.$$.update = () => {
    n.$$.dirty & /*message*/
    16 && (i && i.trim() ? t(3, _ = C(i)) : t(3, _ = ""));
  }, [
    a,
    o,
    g,
    _,
    i,
    l,
    s,
    h,
    d,
    p,
    F
  ];
}
class km extends cm {
  constructor(e) {
    super(), _m(this, e, xm, wm, bm, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7,
      header_links: 8,
      root: 9
    });
  }
}
const {
  SvelteComponent: Tb,
  action_destroyer: Mb,
  append_hydration: zb,
  attr: Bb,
  check_outros: Nb,
  children: qb,
  claim_component: Rb,
  claim_element: Ib,
  claim_space: Lb,
  create_component: Ob,
  destroy_component: Pb,
  detach: Hb,
  element: Ub,
  group_outros: Gb,
  init: Vb,
  insert_hydration: Wb,
  mount_component: jb,
  safe_not_equal: Xb,
  set_style: Yb,
  space: Zb,
  toggle_class: Kb,
  transition_in: Qb,
  transition_out: Jb
} = window.__gradio__svelte__internal, { createEventDispatcher: ey } = window.__gradio__svelte__internal;
function jr() {
}
function Dm(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const zo = typeof window < "u";
let bl = zo ? () => window.performance.now() : () => Date.now(), Bo = zo ? (n) => requestAnimationFrame(n) : jr;
const P0 = /* @__PURE__ */ new Set();
function No(n) {
  P0.forEach((e) => {
    e.c(n) || (P0.delete(e), e.f());
  }), P0.size !== 0 && Bo(No);
}
function Sm(n) {
  let e;
  return P0.size === 0 && Bo(No), {
    promise: new Promise((t) => {
      P0.add(e = { c: n, f: t });
    }),
    abort() {
      P0.delete(e);
    }
  };
}
const R0 = [];
function Am(n, e = jr) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if (Dm(n, s) && (n = s, t)) {
      const o = !R0.length;
      for (const h of r)
        h[1](), R0.push(h, n);
      if (o) {
        for (let h = 0; h < R0.length; h += 2)
          R0[h][0](R0[h + 1]);
        R0.length = 0;
      }
    }
  }
  function i(s) {
    a(s(n));
  }
  function l(s, o = jr) {
    const h = [s, o];
    return r.add(h), r.size === 1 && (t = e(a, i) || jr), s(n), () => {
      r.delete(h), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function yl(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function ua(n, e, t, r) {
  if (typeof t == "number" || yl(t)) {
    const a = r - t, i = (t - e) / (n.dt || 1 / 60), l = n.opts.stiffness * a, s = n.opts.damping * i, o = (l - s) * n.inv_mass, h = (i + o) * n.dt;
    return Math.abs(h) < n.opts.precision && Math.abs(a) < n.opts.precision ? r : (n.settled = !1, yl(t) ? new Date(t.getTime() + h) : t + h);
  } else {
    if (Array.isArray(t))
      return t.map(
        (a, i) => ua(n, e[i], t[i], r[i])
      );
    if (typeof t == "object") {
      const a = {};
      for (const i in t)
        a[i] = ua(n, e[i], t[i], r[i]);
      return a;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function wl(n, e = {}) {
  const t = Am(n), { stiffness: r = 0.15, damping: a = 0.8, precision: i = 0.01 } = e;
  let l, s, o, h = n, d = n, p = 1, g = 0, _ = !1;
  function E($, F = {}) {
    d = $;
    const w = o = {};
    return n == null || F.hard || C.stiffness >= 1 && C.damping >= 1 ? (_ = !0, l = bl(), h = $, t.set(n = d), Promise.resolve()) : (F.soft && (g = 1 / ((F.soft === !0 ? 0.5 : +F.soft) * 60), p = 0), s || (l = bl(), _ = !1, s = Sm((v) => {
      if (_)
        return _ = !1, s = null, !1;
      p = Math.min(p + g, 1);
      const x = {
        inv_mass: p,
        opts: C,
        settled: !0,
        dt: (v - l) * 60 / 1e3
      }, S = ua(x, h, n, d);
      return l = v, h = n, t.set(n = S), x.settled && (s = null), !x.settled;
    })), new Promise((v) => {
      s.promise.then(() => {
        w === o && v();
      });
    }));
  }
  const C = {
    set: E,
    update: ($, F) => E($(d, n), F),
    subscribe: t.subscribe,
    stiffness: r,
    damping: a,
    precision: i
  };
  return C;
}
const {
  SvelteComponent: ty,
  append_hydration: ry,
  attr: ny,
  children: ay,
  claim_element: iy,
  claim_svg_element: ly,
  component_subscribe: sy,
  detach: oy,
  element: uy,
  init: cy,
  insert_hydration: hy,
  noop: my,
  safe_not_equal: dy,
  set_style: fy,
  svg_element: py,
  toggle_class: gy
} = window.__gradio__svelte__internal, { onMount: _y } = window.__gradio__svelte__internal, {
  SvelteComponent: vy,
  append_hydration: by,
  assign: yy,
  attr: wy,
  binding_callbacks: xy,
  children: ky,
  claim_element: Dy,
  claim_space: Sy,
  claim_svg_element: Ay,
  create_slot: $y,
  detach: Ey,
  element: Fy,
  get_all_dirty_from_scope: Cy,
  get_slot_changes: Ty,
  get_spread_update: My,
  init: zy,
  insert_hydration: By,
  listen: Ny,
  noop: qy,
  safe_not_equal: Ry,
  set_dynamic_element_data: Iy,
  set_style: Ly,
  space: Oy,
  svg_element: Py,
  toggle_class: Hy,
  transition_in: Uy,
  transition_out: Gy,
  update_slot_base: Vy
} = window.__gradio__svelte__internal;
new gn();
const {
  HtmlTagHydration: Wy,
  SvelteComponent: jy,
  attr: Xy,
  binding_callbacks: Yy,
  children: Zy,
  claim_element: Ky,
  claim_html_tag: Qy,
  detach: Jy,
  element: ew,
  init: tw,
  insert_hydration: rw,
  noop: nw,
  safe_not_equal: aw,
  toggle_class: iw
} = window.__gradio__svelte__internal, { afterUpdate: lw } = window.__gradio__svelte__internal, {
  SvelteComponent: sw,
  attr: ow,
  children: uw,
  claim_component: cw,
  claim_element: hw,
  create_component: mw,
  destroy_component: dw,
  detach: fw,
  element: pw,
  init: gw,
  insert_hydration: _w,
  mount_component: vw,
  safe_not_equal: bw,
  transition_in: yw,
  transition_out: ww
} = window.__gradio__svelte__internal, {
  SvelteComponent: xw,
  attr: kw,
  check_outros: Dw,
  children: Sw,
  claim_component: Aw,
  claim_element: $w,
  claim_space: Ew,
  create_component: Fw,
  create_slot: Cw,
  destroy_component: Tw,
  detach: Mw,
  element: zw,
  empty: Bw,
  get_all_dirty_from_scope: Nw,
  get_slot_changes: qw,
  group_outros: Rw,
  init: Iw,
  insert_hydration: Lw,
  mount_component: Ow,
  safe_not_equal: Pw,
  space: Hw,
  toggle_class: Uw,
  transition_in: Gw,
  transition_out: Vw,
  update_slot_base: Ww
} = window.__gradio__svelte__internal, {
  SvelteComponent: jw,
  append_hydration: Xw,
  attr: Yw,
  children: Zw,
  claim_component: Kw,
  claim_element: Qw,
  claim_space: Jw,
  claim_text: ex,
  create_component: tx,
  destroy_component: rx,
  detach: nx,
  element: ax,
  init: ix,
  insert_hydration: lx,
  mount_component: sx,
  safe_not_equal: ox,
  set_data: ux,
  space: cx,
  text: hx,
  toggle_class: mx,
  transition_in: dx,
  transition_out: fx
} = window.__gradio__svelte__internal, {
  SvelteComponent: px,
  append_hydration: gx,
  attr: _x,
  bubble: vx,
  check_outros: bx,
  children: yx,
  claim_component: wx,
  claim_element: xx,
  claim_space: kx,
  claim_text: Dx,
  construct_svelte_component: Sx,
  create_component: Ax,
  create_slot: $x,
  destroy_component: Ex,
  detach: Fx,
  element: Cx,
  get_all_dirty_from_scope: Tx,
  get_slot_changes: Mx,
  group_outros: zx,
  init: Bx,
  insert_hydration: Nx,
  listen: qx,
  mount_component: Rx,
  safe_not_equal: Ix,
  set_data: Lx,
  set_style: Ox,
  space: Px,
  text: Hx,
  toggle_class: Ux,
  transition_in: Gx,
  transition_out: Vx,
  update_slot_base: Wx
} = window.__gradio__svelte__internal, {
  SvelteComponent: jx,
  append_hydration: Xx,
  attr: Yx,
  binding_callbacks: Zx,
  children: Kx,
  claim_element: Qx,
  create_slot: Jx,
  detach: ek,
  element: tk,
  get_all_dirty_from_scope: rk,
  get_slot_changes: nk,
  init: ak,
  insert_hydration: ik,
  safe_not_equal: lk,
  toggle_class: sk,
  transition_in: ok,
  transition_out: uk,
  update_slot_base: ck
} = window.__gradio__svelte__internal, {
  SvelteComponent: hk,
  claim_component: mk,
  create_component: dk,
  destroy_component: fk,
  init: pk,
  mount_component: gk,
  safe_not_equal: _k,
  transition_in: vk,
  transition_out: bk
} = window.__gradio__svelte__internal, { createEventDispatcher: yk } = window.__gradio__svelte__internal, {
  SvelteComponent: wk,
  append_hydration: xk,
  attr: kk,
  check_outros: Dk,
  children: Sk,
  claim_component: Ak,
  claim_element: $k,
  claim_space: Ek,
  claim_text: Fk,
  create_component: Ck,
  destroy_component: Tk,
  detach: Mk,
  element: zk,
  empty: Bk,
  group_outros: Nk,
  init: qk,
  insert_hydration: Rk,
  mount_component: Ik,
  safe_not_equal: Lk,
  set_data: Ok,
  space: Pk,
  text: Hk,
  toggle_class: Uk,
  transition_in: Gk,
  transition_out: Vk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wk,
  attr: jk,
  children: Xk,
  claim_element: Yk,
  create_slot: Zk,
  detach: Kk,
  element: Qk,
  get_all_dirty_from_scope: Jk,
  get_slot_changes: eD,
  init: tD,
  insert_hydration: rD,
  safe_not_equal: nD,
  toggle_class: aD,
  transition_in: iD,
  transition_out: lD,
  update_slot_base: sD
} = window.__gradio__svelte__internal, {
  SvelteComponent: oD,
  append_hydration: uD,
  attr: cD,
  check_outros: hD,
  children: mD,
  claim_component: dD,
  claim_element: fD,
  claim_space: pD,
  create_component: gD,
  destroy_component: _D,
  detach: vD,
  element: bD,
  empty: yD,
  group_outros: wD,
  init: xD,
  insert_hydration: kD,
  listen: DD,
  mount_component: SD,
  safe_not_equal: AD,
  space: $D,
  toggle_class: ED,
  transition_in: FD,
  transition_out: CD
} = window.__gradio__svelte__internal, {
  SvelteComponent: TD,
  attr: MD,
  children: zD,
  claim_element: BD,
  create_slot: ND,
  detach: qD,
  element: RD,
  get_all_dirty_from_scope: ID,
  get_slot_changes: LD,
  init: OD,
  insert_hydration: PD,
  null_to_empty: HD,
  safe_not_equal: UD,
  transition_in: GD,
  transition_out: VD,
  update_slot_base: WD
} = window.__gradio__svelte__internal, {
  SvelteComponent: jD,
  check_outros: XD,
  claim_component: YD,
  claim_space: ZD,
  create_component: KD,
  destroy_component: QD,
  detach: JD,
  empty: eS,
  group_outros: tS,
  init: rS,
  insert_hydration: nS,
  mount_component: aS,
  noop: iS,
  safe_not_equal: lS,
  space: sS,
  transition_in: oS,
  transition_out: uS
} = window.__gradio__svelte__internal, { onMount: cS, createEventDispatcher: hS } = window.__gradio__svelte__internal, {
  SvelteComponent: mS,
  append_hydration: dS,
  attr: fS,
  binding_callbacks: pS,
  check_outros: gS,
  children: _S,
  claim_component: vS,
  claim_element: bS,
  claim_space: yS,
  claim_text: wS,
  create_component: xS,
  create_slot: kS,
  destroy_component: DS,
  destroy_each: SS,
  detach: AS,
  element: $S,
  empty: ES,
  ensure_array_like: FS,
  get_all_dirty_from_scope: CS,
  get_slot_changes: TS,
  group_outros: MS,
  init: zS,
  insert_hydration: BS,
  mount_component: NS,
  noop: qS,
  safe_not_equal: RS,
  set_data: IS,
  set_style: LS,
  space: OS,
  text: PS,
  toggle_class: HS,
  transition_in: US,
  transition_out: GS,
  update_slot_base: VS
} = window.__gradio__svelte__internal, { tick: WS } = window.__gradio__svelte__internal, { onDestroy: jS } = window.__gradio__svelte__internal, { createEventDispatcher: XS } = window.__gradio__svelte__internal;
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: qo,
  setPrototypeOf: xl,
  isFrozen: $m,
  getPrototypeOf: Em,
  getOwnPropertyDescriptor: Fm
} = Object;
let {
  freeze: Qe,
  seal: kt,
  create: Ro
} = Object, {
  apply: ca,
  construct: ha
} = typeof Reflect < "u" && Reflect;
Qe || (Qe = function(e) {
  return e;
});
kt || (kt = function(e) {
  return e;
});
ca || (ca = function(e, t, r) {
  return e.apply(t, r);
});
ha || (ha = function(e, t) {
  return new e(...t);
});
const qr = Je(Array.prototype.forEach), Cm = Je(Array.prototype.lastIndexOf), kl = Je(Array.prototype.pop), Z0 = Je(Array.prototype.push), Tm = Je(Array.prototype.splice), Xr = Je(String.prototype.toLowerCase), Gn = Je(String.prototype.toString), Dl = Je(String.prototype.match), K0 = Je(String.prototype.replace), Mm = Je(String.prototype.indexOf), zm = Je(String.prototype.trim), Ct = Je(Object.prototype.hasOwnProperty), Ye = Je(RegExp.prototype.test), Q0 = Bm(TypeError);
function Je(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      r[a - 1] = arguments[a];
    return ca(n, e, r);
  };
}
function Bm(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return ha(n, t);
  };
}
function oe(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xr;
  xl && xl(n, null);
  let r = e.length;
  for (; r--; ) {
    let a = e[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && ($m(e) || (e[r] = i), a = i);
    }
    n[a] = !0;
  }
  return n;
}
function Nm(n) {
  for (let e = 0; e < n.length; e++)
    Ct(n, e) || (n[e] = null);
  return n;
}
function i0(n) {
  const e = Ro(null);
  for (const [t, r] of qo(n))
    Ct(n, t) && (Array.isArray(r) ? e[t] = Nm(r) : r && typeof r == "object" && r.constructor === Object ? e[t] = i0(r) : e[t] = r);
  return e;
}
function J0(n, e) {
  for (; n !== null; ) {
    const r = Fm(n, e);
    if (r) {
      if (r.get)
        return Je(r.get);
      if (typeof r.value == "function")
        return Je(r.value);
    }
    n = Em(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Sl = Qe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Vn = Qe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Wn = Qe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qm = Qe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), jn = Qe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Rm = Qe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Al = Qe(["#text"]), $l = Qe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Xn = Qe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), El = Qe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Rr = Qe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Im = kt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Lm = kt(/<%[\w\W]*|[\w\W]*%>/gm), Om = kt(/\$\{[\w\W]*/gm), Pm = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Hm = kt(/^aria-[\-\w]+$/), Io = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Um = kt(/^(?:\w+script|data):/i), Gm = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lo = kt(/^html$/i), Vm = kt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Fl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Hm,
  ATTR_WHITESPACE: Gm,
  CUSTOM_ELEMENT: Vm,
  DATA_ATTR: Pm,
  DOCTYPE_NAME: Lo,
  ERB_EXPR: Lm,
  IS_ALLOWED_URI: Io,
  IS_SCRIPT_OR_DATA: Um,
  MUSTACHE_EXPR: Im,
  TMPLIT_EXPR: Om
});
const er = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Wm = function() {
  return typeof window > "u" ? null : window;
}, jm = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (r = t.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Cl = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Oo() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wm();
  const e = (K) => Oo(K);
  if (e.version = "3.2.6", e.removed = [], !n || !n.document || n.document.nodeType !== er.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const r = t, a = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: s,
    Element: o,
    NodeFilter: h,
    NamedNodeMap: d = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: g,
    trustedTypes: _
  } = n, E = o.prototype, C = J0(E, "cloneNode"), $ = J0(E, "remove"), F = J0(E, "nextSibling"), w = J0(E, "childNodes"), v = J0(E, "parentNode");
  if (typeof l == "function") {
    const K = t.createElement("template");
    K.content && K.content.ownerDocument && (t = K.content.ownerDocument);
  }
  let x, S = "";
  const {
    implementation: T,
    createNodeIterator: M,
    createDocumentFragment: L,
    getElementsByTagName: z
  } = t, {
    importNode: B
  } = r;
  let W = Cl();
  e.isSupported = typeof qo == "function" && typeof v == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: V,
    ERB_EXPR: le,
    TMPLIT_EXPR: X,
    DATA_ATTR: ge,
    ARIA_ATTR: pe,
    IS_SCRIPT_OR_DATA: ce,
    ATTR_WHITESPACE: he,
    CUSTOM_ELEMENT: xe
  } = Fl;
  let {
    IS_ALLOWED_URI: fe
  } = Fl, ae = null;
  const P = oe({}, [...Sl, ...Vn, ...Wn, ...jn, ...Al]);
  let Z = null;
  const Ne = oe({}, [...$l, ...Xn, ...El, ...Rr]);
  let O = Object.seal(Ro(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ie = null, De = null, U = !0, ee = !0, Se = !1, ye = !0, je = !1, Le = !0, He = !1, Ee = !1, st = !1, Nt = !1, Jt = !1, e0 = !1, Ja = !0, ei = !1;
  const Qo = "user-content-";
  let _n = !0, V0 = !1, T0 = {}, M0 = null;
  const ti = oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ri = null;
  const ni = oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let vn = null;
  const ai = oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pr = "http://www.w3.org/1998/Math/MathML", gr = "http://www.w3.org/2000/svg", t0 = "http://www.w3.org/1999/xhtml";
  let z0 = t0, bn = !1, yn = null;
  const Jo = oe({}, [pr, gr, t0], Gn);
  let _r = oe({}, ["mi", "mo", "mn", "ms", "mtext"]), vr = oe({}, ["annotation-xml"]);
  const eu = oe({}, ["title", "style", "font", "a", "script"]);
  let W0 = null;
  const tu = ["application/xhtml+xml", "text/html"], ru = "text/html";
  let Ue = null, B0 = null;
  const nu = t.createElement("form"), ii = function(D) {
    return D instanceof RegExp || D instanceof Function;
  }, wn = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(B0 && B0 === D)) {
      if ((!D || typeof D != "object") && (D = {}), D = i0(D), W0 = // eslint-disable-next-line unicorn/prefer-includes
      tu.indexOf(D.PARSER_MEDIA_TYPE) === -1 ? ru : D.PARSER_MEDIA_TYPE, Ue = W0 === "application/xhtml+xml" ? Gn : Xr, ae = Ct(D, "ALLOWED_TAGS") ? oe({}, D.ALLOWED_TAGS, Ue) : P, Z = Ct(D, "ALLOWED_ATTR") ? oe({}, D.ALLOWED_ATTR, Ue) : Ne, yn = Ct(D, "ALLOWED_NAMESPACES") ? oe({}, D.ALLOWED_NAMESPACES, Gn) : Jo, vn = Ct(D, "ADD_URI_SAFE_ATTR") ? oe(i0(ai), D.ADD_URI_SAFE_ATTR, Ue) : ai, ri = Ct(D, "ADD_DATA_URI_TAGS") ? oe(i0(ni), D.ADD_DATA_URI_TAGS, Ue) : ni, M0 = Ct(D, "FORBID_CONTENTS") ? oe({}, D.FORBID_CONTENTS, Ue) : ti, Ie = Ct(D, "FORBID_TAGS") ? oe({}, D.FORBID_TAGS, Ue) : i0({}), De = Ct(D, "FORBID_ATTR") ? oe({}, D.FORBID_ATTR, Ue) : i0({}), T0 = Ct(D, "USE_PROFILES") ? D.USE_PROFILES : !1, U = D.ALLOW_ARIA_ATTR !== !1, ee = D.ALLOW_DATA_ATTR !== !1, Se = D.ALLOW_UNKNOWN_PROTOCOLS || !1, ye = D.ALLOW_SELF_CLOSE_IN_ATTR !== !1, je = D.SAFE_FOR_TEMPLATES || !1, Le = D.SAFE_FOR_XML !== !1, He = D.WHOLE_DOCUMENT || !1, Nt = D.RETURN_DOM || !1, Jt = D.RETURN_DOM_FRAGMENT || !1, e0 = D.RETURN_TRUSTED_TYPE || !1, st = D.FORCE_BODY || !1, Ja = D.SANITIZE_DOM !== !1, ei = D.SANITIZE_NAMED_PROPS || !1, _n = D.KEEP_CONTENT !== !1, V0 = D.IN_PLACE || !1, fe = D.ALLOWED_URI_REGEXP || Io, z0 = D.NAMESPACE || t0, _r = D.MATHML_TEXT_INTEGRATION_POINTS || _r, vr = D.HTML_INTEGRATION_POINTS || vr, O = D.CUSTOM_ELEMENT_HANDLING || {}, D.CUSTOM_ELEMENT_HANDLING && ii(D.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (O.tagNameCheck = D.CUSTOM_ELEMENT_HANDLING.tagNameCheck), D.CUSTOM_ELEMENT_HANDLING && ii(D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (O.attributeNameCheck = D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), D.CUSTOM_ELEMENT_HANDLING && typeof D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), je && (ee = !1), Jt && (Nt = !0), T0 && (ae = oe({}, Al), Z = [], T0.html === !0 && (oe(ae, Sl), oe(Z, $l)), T0.svg === !0 && (oe(ae, Vn), oe(Z, Xn), oe(Z, Rr)), T0.svgFilters === !0 && (oe(ae, Wn), oe(Z, Xn), oe(Z, Rr)), T0.mathMl === !0 && (oe(ae, jn), oe(Z, El), oe(Z, Rr))), D.ADD_TAGS && (ae === P && (ae = i0(ae)), oe(ae, D.ADD_TAGS, Ue)), D.ADD_ATTR && (Z === Ne && (Z = i0(Z)), oe(Z, D.ADD_ATTR, Ue)), D.ADD_URI_SAFE_ATTR && oe(vn, D.ADD_URI_SAFE_ATTR, Ue), D.FORBID_CONTENTS && (M0 === ti && (M0 = i0(M0)), oe(M0, D.FORBID_CONTENTS, Ue)), _n && (ae["#text"] = !0), He && oe(ae, ["html", "head", "body"]), ae.table && (oe(ae, ["tbody"]), delete Ie.tbody), D.TRUSTED_TYPES_POLICY) {
        if (typeof D.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Q0('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof D.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Q0('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = D.TRUSTED_TYPES_POLICY, S = x.createHTML("");
      } else
        x === void 0 && (x = jm(_, a)), x !== null && typeof S == "string" && (S = x.createHTML(""));
      Qe && Qe(D), B0 = D;
    }
  }, li = oe({}, [...Vn, ...Wn, ...qm]), si = oe({}, [...jn, ...Rm]), au = function(D) {
    let I = v(D);
    (!I || !I.tagName) && (I = {
      namespaceURI: z0,
      tagName: "template"
    });
    const Y = Xr(D.tagName), Ae = Xr(I.tagName);
    return yn[D.namespaceURI] ? D.namespaceURI === gr ? I.namespaceURI === t0 ? Y === "svg" : I.namespaceURI === pr ? Y === "svg" && (Ae === "annotation-xml" || _r[Ae]) : !!li[Y] : D.namespaceURI === pr ? I.namespaceURI === t0 ? Y === "math" : I.namespaceURI === gr ? Y === "math" && vr[Ae] : !!si[Y] : D.namespaceURI === t0 ? I.namespaceURI === gr && !vr[Ae] || I.namespaceURI === pr && !_r[Ae] ? !1 : !si[Y] && (eu[Y] || !li[Y]) : !!(W0 === "application/xhtml+xml" && yn[D.namespaceURI]) : !1;
  }, qt = function(D) {
    Z0(e.removed, {
      element: D
    });
    try {
      v(D).removeChild(D);
    } catch {
      $(D);
    }
  }, N0 = function(D, I) {
    try {
      Z0(e.removed, {
        attribute: I.getAttributeNode(D),
        from: I
      });
    } catch {
      Z0(e.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(D), D === "is")
      if (Nt || Jt)
        try {
          qt(I);
        } catch {
        }
      else
        try {
          I.setAttribute(D, "");
        } catch {
        }
  }, oi = function(D) {
    let I = null, Y = null;
    if (st)
      D = "<remove></remove>" + D;
    else {
      const Oe = Dl(D, /^[\r\n\t ]+/);
      Y = Oe && Oe[0];
    }
    W0 === "application/xhtml+xml" && z0 === t0 && (D = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + D + "</body></html>");
    const Ae = x ? x.createHTML(D) : D;
    if (z0 === t0)
      try {
        I = new g().parseFromString(Ae, W0);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = T.createDocument(z0, "template", null);
      try {
        I.documentElement.innerHTML = bn ? S : Ae;
      } catch {
      }
    }
    const Ve = I.body || I.documentElement;
    return D && Y && Ve.insertBefore(t.createTextNode(Y), Ve.childNodes[0] || null), z0 === t0 ? z.call(I, He ? "html" : "body")[0] : He ? I.documentElement : Ve;
  }, ui = function(D) {
    return M.call(
      D.ownerDocument || D,
      D,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, xn = function(D) {
    return D instanceof p && (typeof D.nodeName != "string" || typeof D.textContent != "string" || typeof D.removeChild != "function" || !(D.attributes instanceof d) || typeof D.removeAttribute != "function" || typeof D.setAttribute != "function" || typeof D.namespaceURI != "string" || typeof D.insertBefore != "function" || typeof D.hasChildNodes != "function");
  }, ci = function(D) {
    return typeof s == "function" && D instanceof s;
  };
  function r0(K, D, I) {
    qr(K, (Y) => {
      Y.call(e, D, I, B0);
    });
  }
  const hi = function(D) {
    let I = null;
    if (r0(W.beforeSanitizeElements, D, null), xn(D))
      return qt(D), !0;
    const Y = Ue(D.nodeName);
    if (r0(W.uponSanitizeElement, D, {
      tagName: Y,
      allowedTags: ae
    }), Le && D.hasChildNodes() && !ci(D.firstElementChild) && Ye(/<[/\w!]/g, D.innerHTML) && Ye(/<[/\w!]/g, D.textContent) || D.nodeType === er.progressingInstruction || Le && D.nodeType === er.comment && Ye(/<[/\w]/g, D.data))
      return qt(D), !0;
    if (!ae[Y] || Ie[Y]) {
      if (!Ie[Y] && di(Y) && (O.tagNameCheck instanceof RegExp && Ye(O.tagNameCheck, Y) || O.tagNameCheck instanceof Function && O.tagNameCheck(Y)))
        return !1;
      if (_n && !M0[Y]) {
        const Ae = v(D) || D.parentNode, Ve = w(D) || D.childNodes;
        if (Ve && Ae) {
          const Oe = Ve.length;
          for (let tt = Oe - 1; tt >= 0; --tt) {
            const n0 = C(Ve[tt], !0);
            n0.__removalCount = (D.__removalCount || 0) + 1, Ae.insertBefore(n0, F(D));
          }
        }
      }
      return qt(D), !0;
    }
    return D instanceof o && !au(D) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && Ye(/<\/no(script|embed|frames)/i, D.innerHTML) ? (qt(D), !0) : (je && D.nodeType === er.text && (I = D.textContent, qr([V, le, X], (Ae) => {
      I = K0(I, Ae, " ");
    }), D.textContent !== I && (Z0(e.removed, {
      element: D.cloneNode()
    }), D.textContent = I)), r0(W.afterSanitizeElements, D, null), !1);
  }, mi = function(D, I, Y) {
    if (Ja && (I === "id" || I === "name") && (Y in t || Y in nu))
      return !1;
    if (!(ee && !De[I] && Ye(ge, I))) {
      if (!(U && Ye(pe, I))) {
        if (!Z[I] || De[I]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(di(D) && (O.tagNameCheck instanceof RegExp && Ye(O.tagNameCheck, D) || O.tagNameCheck instanceof Function && O.tagNameCheck(D)) && (O.attributeNameCheck instanceof RegExp && Ye(O.attributeNameCheck, I) || O.attributeNameCheck instanceof Function && O.attributeNameCheck(I)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            I === "is" && O.allowCustomizedBuiltInElements && (O.tagNameCheck instanceof RegExp && Ye(O.tagNameCheck, Y) || O.tagNameCheck instanceof Function && O.tagNameCheck(Y)))
          ) return !1;
        } else if (!vn[I]) {
          if (!Ye(fe, K0(Y, he, ""))) {
            if (!((I === "src" || I === "xlink:href" || I === "href") && D !== "script" && Mm(Y, "data:") === 0 && ri[D])) {
              if (!(Se && !Ye(ce, K0(Y, he, "")))) {
                if (Y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, di = function(D) {
    return D !== "annotation-xml" && Dl(D, xe);
  }, fi = function(D) {
    r0(W.beforeSanitizeAttributes, D, null);
    const {
      attributes: I
    } = D;
    if (!I || xn(D))
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z,
      forceKeepAttr: void 0
    };
    let Ae = I.length;
    for (; Ae--; ) {
      const Ve = I[Ae], {
        name: Oe,
        namespaceURI: tt,
        value: n0
      } = Ve, j0 = Ue(Oe), kn = n0;
      let We = Oe === "value" ? kn : zm(kn);
      if (Y.attrName = j0, Y.attrValue = We, Y.keepAttr = !0, Y.forceKeepAttr = void 0, r0(W.uponSanitizeAttribute, D, Y), We = Y.attrValue, ei && (j0 === "id" || j0 === "name") && (N0(Oe, D), We = Qo + We), Le && Ye(/((--!?|])>)|<\/(style|title)/i, We)) {
        N0(Oe, D);
        continue;
      }
      if (Y.forceKeepAttr)
        continue;
      if (!Y.keepAttr) {
        N0(Oe, D);
        continue;
      }
      if (!ye && Ye(/\/>/i, We)) {
        N0(Oe, D);
        continue;
      }
      je && qr([V, le, X], (gi) => {
        We = K0(We, gi, " ");
      });
      const pi = Ue(D.nodeName);
      if (!mi(pi, j0, We)) {
        N0(Oe, D);
        continue;
      }
      if (x && typeof _ == "object" && typeof _.getAttributeType == "function" && !tt)
        switch (_.getAttributeType(pi, j0)) {
          case "TrustedHTML": {
            We = x.createHTML(We);
            break;
          }
          case "TrustedScriptURL": {
            We = x.createScriptURL(We);
            break;
          }
        }
      if (We !== kn)
        try {
          tt ? D.setAttributeNS(tt, Oe, We) : D.setAttribute(Oe, We), xn(D) ? qt(D) : kl(e.removed);
        } catch {
          N0(Oe, D);
        }
    }
    r0(W.afterSanitizeAttributes, D, null);
  }, iu = function K(D) {
    let I = null;
    const Y = ui(D);
    for (r0(W.beforeSanitizeShadowDOM, D, null); I = Y.nextNode(); )
      r0(W.uponSanitizeShadowNode, I, null), hi(I), fi(I), I.content instanceof i && K(I.content);
    r0(W.afterSanitizeShadowDOM, D, null);
  };
  return e.sanitize = function(K) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, Y = null, Ae = null, Ve = null;
    if (bn = !K, bn && (K = "<!-->"), typeof K != "string" && !ci(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw Q0("dirty is not a string, aborting");
      } else
        throw Q0("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Ee || wn(D), e.removed = [], typeof K == "string" && (V0 = !1), V0) {
      if (K.nodeName) {
        const n0 = Ue(K.nodeName);
        if (!ae[n0] || Ie[n0])
          throw Q0("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof s)
      I = oi("<!---->"), Y = I.ownerDocument.importNode(K, !0), Y.nodeType === er.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? I = Y : I.appendChild(Y);
    else {
      if (!Nt && !je && !He && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return x && e0 ? x.createHTML(K) : K;
      if (I = oi(K), !I)
        return Nt ? null : e0 ? S : "";
    }
    I && st && qt(I.firstChild);
    const Oe = ui(V0 ? K : I);
    for (; Ae = Oe.nextNode(); )
      hi(Ae), fi(Ae), Ae.content instanceof i && iu(Ae.content);
    if (V0)
      return K;
    if (Nt) {
      if (Jt)
        for (Ve = L.call(I.ownerDocument); I.firstChild; )
          Ve.appendChild(I.firstChild);
      else
        Ve = I;
      return (Z.shadowroot || Z.shadowrootmode) && (Ve = B.call(r, Ve, !0)), Ve;
    }
    let tt = He ? I.outerHTML : I.innerHTML;
    return He && ae["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Ye(Lo, I.ownerDocument.doctype.name) && (tt = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + tt), je && qr([V, le, X], (n0) => {
      tt = K0(tt, n0, " ");
    }), x && e0 ? x.createHTML(tt) : tt;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wn(K), Ee = !0;
  }, e.clearConfig = function() {
    B0 = null, Ee = !1;
  }, e.isValidAttribute = function(K, D, I) {
    B0 || wn({});
    const Y = Ue(K), Ae = Ue(D);
    return mi(Y, Ae, I);
  }, e.addHook = function(K, D) {
    typeof D == "function" && Z0(W[K], D);
  }, e.removeHook = function(K, D) {
    if (D !== void 0) {
      const I = Cm(W[K], D);
      return I === -1 ? void 0 : Tm(W[K], I, 1)[0];
    }
    return kl(W[K]);
  }, e.removeHooks = function(K) {
    W[K] = [];
  }, e.removeAllHooks = function() {
    W = Cl();
  }, e;
}
Oo();
const {
  HtmlTagHydration: YS,
  SvelteComponent: ZS,
  add_render_callback: KS,
  append_hydration: QS,
  attr: JS,
  bubble: eA,
  check_outros: tA,
  children: rA,
  claim_component: nA,
  claim_element: aA,
  claim_html_tag: iA,
  claim_space: lA,
  claim_text: sA,
  create_component: oA,
  create_in_transition: uA,
  create_out_transition: cA,
  destroy_component: hA,
  detach: mA,
  element: dA,
  get_svelte_dataset: fA,
  group_outros: pA,
  init: gA,
  insert_hydration: _A,
  listen: vA,
  mount_component: bA,
  run_all: yA,
  safe_not_equal: wA,
  set_data: xA,
  space: kA,
  stop_propagation: DA,
  text: SA,
  toggle_class: AA,
  transition_in: $A,
  transition_out: EA
} = window.__gradio__svelte__internal, { createEventDispatcher: FA, onMount: CA } = window.__gradio__svelte__internal, {
  SvelteComponent: TA,
  append_hydration: MA,
  attr: zA,
  bubble: BA,
  check_outros: NA,
  children: qA,
  claim_component: RA,
  claim_element: IA,
  claim_space: LA,
  create_animation: OA,
  create_component: PA,
  destroy_component: HA,
  detach: UA,
  element: GA,
  ensure_array_like: VA,
  fix_and_outro_and_destroy_block: WA,
  fix_position: jA,
  group_outros: XA,
  init: YA,
  insert_hydration: ZA,
  mount_component: KA,
  noop: QA,
  safe_not_equal: JA,
  set_style: e$,
  space: t$,
  transition_in: r$,
  transition_out: n$,
  update_keyed_each: a$
} = window.__gradio__svelte__internal, {
  SvelteComponent: i$,
  attr: l$,
  children: s$,
  claim_element: o$,
  detach: u$,
  element: c$,
  empty: h$,
  init: m$,
  insert_hydration: d$,
  noop: f$,
  safe_not_equal: p$,
  set_style: g$
} = window.__gradio__svelte__internal, {
  SvelteComponent: _$,
  attr: v$,
  children: b$,
  claim_component: y$,
  claim_element: w$,
  create_component: x$,
  destroy_component: k$,
  detach: D$,
  element: S$,
  init: A$,
  insert_hydration: $$,
  mount_component: E$,
  safe_not_equal: F$,
  toggle_class: C$,
  transition_in: T$,
  transition_out: M$
} = window.__gradio__svelte__internal, {
  SvelteComponent: z$,
  assign: B$,
  attr: N$,
  children: q$,
  claim_component: R$,
  claim_element: I$,
  claim_space: L$,
  create_component: O$,
  destroy_component: P$,
  detach: H$,
  element: U$,
  get_spread_object: G$,
  get_spread_update: V$,
  init: W$,
  insert_hydration: j$,
  mount_component: X$,
  safe_not_equal: Y$,
  space: Z$,
  toggle_class: K$,
  transition_in: Q$,
  transition_out: J$
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xm,
  attr: Ym,
  children: Zm,
  claim_component: Km,
  claim_element: Qm,
  create_component: Jm,
  destroy_component: e4,
  detach: Tl,
  element: t4,
  init: r4,
  insert_hydration: n4,
  mount_component: a4,
  safe_not_equal: i4,
  transition_in: l4,
  transition_out: s4
} = window.__gradio__svelte__internal;
function o4(n) {
  let e, t, r;
  return t = new km({
    props: {
      root: (
        /*root*/
        n[1]
      ),
      message: (
        /*info*/
        n[0]
      ),
      sanitize_html: !0
    }
  }), {
    c() {
      e = t4("div"), Jm(t.$$.fragment), this.h();
    },
    l(a) {
      e = Qm(a, "DIV", { class: !0 });
      var i = Zm(e);
      Km(t.$$.fragment, i), i.forEach(Tl), this.h();
    },
    h() {
      Ym(e, "class", "svelte-1hnfib2");
    },
    m(a, i) {
      n4(a, e, i), a4(t, e, null), r = !0;
    },
    p(a, [i]) {
      const l = {};
      i & /*root*/
      2 && (l.root = /*root*/
      a[1]), i & /*info*/
      1 && (l.message = /*info*/
      a[0]), t.$set(l);
    },
    i(a) {
      r || (l4(t.$$.fragment, a), r = !0);
    },
    o(a) {
      s4(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Tl(e), e4(t);
    }
  };
}
function u4(n, e, t) {
  let { info: r } = e, { root: a } = e;
  return n.$$set = (i) => {
    "info" in i && t(0, r = i.info), "root" in i && t(1, a = i.root);
  }, [r, a];
}
class c4 extends Xm {
  constructor(e) {
    super(), r4(this, e, u4, o4, i4, { info: 0, root: 1 });
  }
}
const {
  SvelteComponent: h4,
  attr: Ml,
  check_outros: m4,
  children: d4,
  claim_component: f4,
  claim_element: p4,
  claim_space: g4,
  create_component: _4,
  create_slot: v4,
  destroy_component: b4,
  detach: Ir,
  element: y4,
  empty: zl,
  get_all_dirty_from_scope: w4,
  get_slot_changes: x4,
  group_outros: k4,
  init: D4,
  insert_hydration: Yn,
  mount_component: S4,
  safe_not_equal: A4,
  space: $4,
  toggle_class: I0,
  transition_in: rr,
  transition_out: Yr,
  update_slot_base: E4
} = window.__gradio__svelte__internal;
function Bl(n) {
  let e, t;
  return e = new c4({
    props: {
      root: (
        /*root*/
        n[2]
      ),
      info: (
        /*info*/
        n[1]
      )
    }
  }), {
    c() {
      _4(e.$$.fragment);
    },
    l(r) {
      f4(e.$$.fragment, r);
    },
    m(r, a) {
      S4(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a & /*root*/
      4 && (i.root = /*root*/
      r[2]), a & /*info*/
      2 && (i.info = /*info*/
      r[1]), e.$set(i);
    },
    i(r) {
      t || (rr(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Yr(e.$$.fragment, r), t = !1;
    },
    d(r) {
      b4(e, r);
    }
  };
}
function F4(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[4].default
  ), l = v4(
    i,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let s = (
    /*info*/
    n[1] && Bl(n)
  );
  return {
    c() {
      e = y4("span"), l && l.c(), t = $4(), s && s.c(), r = zl(), this.h();
    },
    l(o) {
      e = p4(o, "SPAN", { "data-testid": !0, class: !0 });
      var h = d4(e);
      l && l.l(h), h.forEach(Ir), t = g4(o), s && s.l(o), r = zl(), this.h();
    },
    h() {
      Ml(e, "data-testid", "block-info"), Ml(e, "class", "svelte-22c38v"), I0(e, "sr-only", !/*show_label*/
      n[0]), I0(e, "hide", !/*show_label*/
      n[0]), I0(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(o, h) {
      Yn(o, e, h), l && l.m(e, null), Yn(o, t, h), s && s.m(o, h), Yn(o, r, h), a = !0;
    },
    p(o, [h]) {
      l && l.p && (!a || h & /*$$scope*/
      8) && E4(
        l,
        i,
        o,
        /*$$scope*/
        o[3],
        a ? x4(
          i,
          /*$$scope*/
          o[3],
          h,
          null
        ) : w4(
          /*$$scope*/
          o[3]
        ),
        null
      ), (!a || h & /*show_label*/
      1) && I0(e, "sr-only", !/*show_label*/
      o[0]), (!a || h & /*show_label*/
      1) && I0(e, "hide", !/*show_label*/
      o[0]), (!a || h & /*info*/
      2) && I0(
        e,
        "has-info",
        /*info*/
        o[1] != null
      ), /*info*/
      o[1] ? s ? (s.p(o, h), h & /*info*/
      2 && rr(s, 1)) : (s = Bl(o), s.c(), rr(s, 1), s.m(r.parentNode, r)) : s && (k4(), Yr(s, 1, 1, () => {
        s = null;
      }), m4());
    },
    i(o) {
      a || (rr(l, o), rr(s), a = !0);
    },
    o(o) {
      Yr(l, o), Yr(s), a = !1;
    },
    d(o) {
      o && (Ir(e), Ir(t), Ir(r)), l && l.d(o), s && s.d(o);
    }
  };
}
function C4(n, e, t) {
  let { $$slots: r = {}, $$scope: a } = e, { show_label: i = !0 } = e, { info: l = void 0 } = e, { root: s } = e;
  return n.$$set = (o) => {
    "show_label" in o && t(0, i = o.show_label), "info" in o && t(1, l = o.info), "root" in o && t(2, s = o.root), "$$scope" in o && t(3, a = o.$$scope);
  }, [i, l, s, a, r];
}
class T4 extends h4 {
  constructor(e) {
    super(), D4(this, e, C4, F4, A4, { show_label: 0, info: 1, root: 2 });
  }
}
const {
  SvelteComponent: eE,
  append_hydration: tE,
  attr: rE,
  children: nE,
  claim_component: aE,
  claim_element: iE,
  claim_space: lE,
  claim_text: sE,
  create_component: oE,
  destroy_component: uE,
  detach: cE,
  element: hE,
  init: mE,
  insert_hydration: dE,
  mount_component: fE,
  safe_not_equal: pE,
  set_data: gE,
  space: _E,
  text: vE,
  toggle_class: bE,
  transition_in: yE,
  transition_out: wE
} = window.__gradio__svelte__internal, {
  SvelteComponent: M4,
  append_hydration: ma,
  attr: l0,
  bubble: z4,
  check_outros: B4,
  children: da,
  claim_component: N4,
  claim_element: fa,
  claim_space: q4,
  claim_text: R4,
  construct_svelte_component: Nl,
  create_component: ql,
  destroy_component: Rl,
  detach: sr,
  element: pa,
  group_outros: I4,
  init: L4,
  insert_hydration: Po,
  listen: O4,
  mount_component: Il,
  safe_not_equal: P4,
  set_data: H4,
  set_style: Lr,
  space: U4,
  text: G4,
  toggle_class: rt,
  transition_in: Ll,
  transition_out: Ol
} = window.__gradio__svelte__internal;
function Pl(n) {
  let e, t;
  return {
    c() {
      e = pa("span"), t = G4(
        /*label*/
        n[1]
      ), this.h();
    },
    l(r) {
      e = fa(r, "SPAN", { class: !0 });
      var a = da(e);
      t = R4(
        a,
        /*label*/
        n[1]
      ), a.forEach(sr), this.h();
    },
    h() {
      l0(e, "class", "svelte-vk34kx");
    },
    m(r, a) {
      Po(r, e, a), ma(e, t);
    },
    p(r, a) {
      a & /*label*/
      2 && H4(
        t,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && sr(e);
    }
  };
}
function V4(n) {
  let e, t, r, a, i, l, s, o = (
    /*show_label*/
    n[2] && Pl(n)
  );
  var h = (
    /*Icon*/
    n[0]
  );
  function d(p, g) {
    return {};
  }
  return h && (a = Nl(h, d())), {
    c() {
      e = pa("button"), o && o.c(), t = U4(), r = pa("div"), a && ql(a.$$.fragment), this.h();
    },
    l(p) {
      e = fa(p, "BUTTON", {
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0,
        class: !0
      });
      var g = da(e);
      o && o.l(g), t = q4(g), r = fa(g, "DIV", { class: !0 });
      var _ = da(r);
      a && N4(a.$$.fragment, _), _.forEach(sr), g.forEach(sr), this.h();
    },
    h() {
      l0(r, "class", "svelte-vk34kx"), rt(
        r,
        "small",
        /*size*/
        n[4] === "small"
      ), rt(
        r,
        "large",
        /*size*/
        n[4] === "large"
      ), rt(
        r,
        "medium",
        /*size*/
        n[4] === "medium"
      ), e.disabled = /*disabled*/
      n[7], l0(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), l0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), l0(
        e,
        "title",
        /*label*/
        n[1]
      ), l0(e, "class", "svelte-vk34kx"), rt(
        e,
        "pending",
        /*pending*/
        n[3]
      ), rt(
        e,
        "padded",
        /*padded*/
        n[5]
      ), rt(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), rt(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), Lr(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[11] ? (
        /*_color*/
        n[11]
      ) : "var(--block-label-text-color)"), Lr(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      ));
    },
    m(p, g) {
      Po(p, e, g), o && o.m(e, null), ma(e, t), ma(e, r), a && Il(a, r, null), i = !0, l || (s = O4(
        e,
        "click",
        /*click_handler*/
        n[13]
      ), l = !0);
    },
    p(p, [g]) {
      if (/*show_label*/
      p[2] ? o ? o.p(p, g) : (o = Pl(p), o.c(), o.m(e, t)) : o && (o.d(1), o = null), g & /*Icon*/
      1 && h !== (h = /*Icon*/
      p[0])) {
        if (a) {
          I4();
          const _ = a;
          Ol(_.$$.fragment, 1, 0, () => {
            Rl(_, 1);
          }), B4();
        }
        h ? (a = Nl(h, d()), ql(a.$$.fragment), Ll(a.$$.fragment, 1), Il(a, r, null)) : a = null;
      }
      (!i || g & /*size*/
      16) && rt(
        r,
        "small",
        /*size*/
        p[4] === "small"
      ), (!i || g & /*size*/
      16) && rt(
        r,
        "large",
        /*size*/
        p[4] === "large"
      ), (!i || g & /*size*/
      16) && rt(
        r,
        "medium",
        /*size*/
        p[4] === "medium"
      ), (!i || g & /*disabled*/
      128) && (e.disabled = /*disabled*/
      p[7]), (!i || g & /*label*/
      2) && l0(
        e,
        "aria-label",
        /*label*/
        p[1]
      ), (!i || g & /*hasPopup*/
      256) && l0(
        e,
        "aria-haspopup",
        /*hasPopup*/
        p[8]
      ), (!i || g & /*label*/
      2) && l0(
        e,
        "title",
        /*label*/
        p[1]
      ), (!i || g & /*pending*/
      8) && rt(
        e,
        "pending",
        /*pending*/
        p[3]
      ), (!i || g & /*padded*/
      32) && rt(
        e,
        "padded",
        /*padded*/
        p[5]
      ), (!i || g & /*highlight*/
      64) && rt(
        e,
        "highlight",
        /*highlight*/
        p[6]
      ), (!i || g & /*transparent*/
      512) && rt(
        e,
        "transparent",
        /*transparent*/
        p[9]
      ), g & /*disabled, _color*/
      2176 && Lr(e, "color", !/*disabled*/
      p[7] && /*_color*/
      p[11] ? (
        /*_color*/
        p[11]
      ) : "var(--block-label-text-color)"), g & /*disabled, background*/
      1152 && Lr(e, "--bg-color", /*disabled*/
      p[7] ? "auto" : (
        /*background*/
        p[10]
      ));
    },
    i(p) {
      i || (a && Ll(a.$$.fragment, p), i = !0);
    },
    o(p) {
      a && Ol(a.$$.fragment, p), i = !1;
    },
    d(p) {
      p && sr(e), o && o.d(), a && Rl(a), l = !1, s();
    }
  };
}
function W4(n, e, t) {
  let r, { Icon: a } = e, { label: i = "" } = e, { show_label: l = !1 } = e, { pending: s = !1 } = e, { size: o = "small" } = e, { padded: h = !0 } = e, { highlight: d = !1 } = e, { disabled: p = !1 } = e, { hasPopup: g = !1 } = e, { color: _ = "var(--block-label-text-color)" } = e, { transparent: E = !1 } = e, { background: C = "var(--block-background-fill)" } = e;
  function $(F) {
    z4.call(this, n, F);
  }
  return n.$$set = (F) => {
    "Icon" in F && t(0, a = F.Icon), "label" in F && t(1, i = F.label), "show_label" in F && t(2, l = F.show_label), "pending" in F && t(3, s = F.pending), "size" in F && t(4, o = F.size), "padded" in F && t(5, h = F.padded), "highlight" in F && t(6, d = F.highlight), "disabled" in F && t(7, p = F.disabled), "hasPopup" in F && t(8, g = F.hasPopup), "color" in F && t(12, _ = F.color), "transparent" in F && t(9, E = F.transparent), "background" in F && t(10, C = F.background);
  }, n.$$.update = () => {
    n.$$.dirty & /*highlight, color*/
    4160 && t(11, r = d ? "var(--color-accent)" : _);
  }, [
    a,
    i,
    l,
    s,
    o,
    h,
    d,
    p,
    g,
    E,
    C,
    r,
    _,
    $
  ];
}
class j4 extends M4 {
  constructor(e) {
    super(), L4(this, e, W4, V4, P4, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: xE,
  append_hydration: kE,
  attr: DE,
  binding_callbacks: SE,
  children: AE,
  claim_element: $E,
  create_slot: EE,
  detach: FE,
  element: CE,
  get_all_dirty_from_scope: TE,
  get_slot_changes: ME,
  init: zE,
  insert_hydration: BE,
  safe_not_equal: NE,
  toggle_class: qE,
  transition_in: RE,
  transition_out: IE,
  update_slot_base: LE
} = window.__gradio__svelte__internal, {
  SvelteComponent: OE,
  claim_component: PE,
  create_component: HE,
  destroy_component: UE,
  init: GE,
  mount_component: VE,
  safe_not_equal: WE,
  transition_in: jE,
  transition_out: XE
} = window.__gradio__svelte__internal, { createEventDispatcher: YE } = window.__gradio__svelte__internal, {
  SvelteComponent: ZE,
  append_hydration: KE,
  attr: QE,
  check_outros: JE,
  children: eF,
  claim_component: tF,
  claim_element: rF,
  claim_space: nF,
  claim_text: aF,
  create_component: iF,
  destroy_component: lF,
  detach: sF,
  element: oF,
  empty: uF,
  group_outros: cF,
  init: hF,
  insert_hydration: mF,
  mount_component: dF,
  safe_not_equal: fF,
  set_data: pF,
  space: gF,
  text: _F,
  toggle_class: vF,
  transition_in: bF,
  transition_out: yF
} = window.__gradio__svelte__internal, {
  SvelteComponent: wF,
  attr: xF,
  children: kF,
  claim_element: DF,
  create_slot: SF,
  detach: AF,
  element: $F,
  get_all_dirty_from_scope: EF,
  get_slot_changes: FF,
  init: CF,
  insert_hydration: TF,
  safe_not_equal: MF,
  toggle_class: zF,
  transition_in: BF,
  transition_out: NF,
  update_slot_base: qF
} = window.__gradio__svelte__internal, {
  SvelteComponent: RF,
  append_hydration: IF,
  attr: LF,
  check_outros: OF,
  children: PF,
  claim_component: HF,
  claim_element: UF,
  claim_space: GF,
  create_component: VF,
  destroy_component: WF,
  detach: jF,
  element: XF,
  empty: YF,
  group_outros: ZF,
  init: KF,
  insert_hydration: QF,
  listen: JF,
  mount_component: eC,
  safe_not_equal: tC,
  space: rC,
  toggle_class: nC,
  transition_in: aC,
  transition_out: iC
} = window.__gradio__svelte__internal, {
  SvelteComponent: lC,
  attr: sC,
  children: oC,
  claim_element: uC,
  create_slot: cC,
  detach: hC,
  element: mC,
  get_all_dirty_from_scope: dC,
  get_slot_changes: fC,
  init: pC,
  insert_hydration: gC,
  null_to_empty: _C,
  safe_not_equal: vC,
  transition_in: bC,
  transition_out: yC,
  update_slot_base: wC
} = window.__gradio__svelte__internal;
function L0(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let r = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + r;
}
const {
  SvelteComponent: X4,
  append_hydration: $t,
  attr: me,
  children: pt,
  claim_element: Y4,
  claim_svg_element: Et,
  component_subscribe: Hl,
  detach: ot,
  element: Z4,
  init: K4,
  insert_hydration: Q4,
  noop: Ul,
  safe_not_equal: J4,
  set_style: Or,
  svg_element: Ft,
  toggle_class: Gl
} = window.__gradio__svelte__internal, { onMount: ed } = window.__gradio__svelte__internal;
function td(n) {
  let e, t, r, a, i, l, s, o, h, d, p, g;
  return {
    c() {
      e = Z4("div"), t = Ft("svg"), r = Ft("g"), a = Ft("path"), i = Ft("path"), l = Ft("path"), s = Ft("path"), o = Ft("g"), h = Ft("path"), d = Ft("path"), p = Ft("path"), g = Ft("path"), this.h();
    },
    l(_) {
      e = Y4(_, "DIV", { class: !0 });
      var E = pt(e);
      t = Et(E, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var C = pt(t);
      r = Et(C, "g", { style: !0 });
      var $ = pt(r);
      a = Et($, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), pt(a).forEach(ot), i = Et($, "path", { d: !0, fill: !0, class: !0 }), pt(i).forEach(ot), l = Et($, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), pt(l).forEach(ot), s = Et($, "path", { d: !0, fill: !0, class: !0 }), pt(s).forEach(ot), $.forEach(ot), o = Et(C, "g", { style: !0 });
      var F = pt(o);
      h = Et(F, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), pt(h).forEach(ot), d = Et(F, "path", { d: !0, fill: !0, class: !0 }), pt(d).forEach(ot), p = Et(F, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), pt(p).forEach(ot), g = Et(F, "path", { d: !0, fill: !0, class: !0 }), pt(g).forEach(ot), F.forEach(ot), C.forEach(ot), E.forEach(ot), this.h();
    },
    h() {
      me(a, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), me(a, "fill", "#FF7C00"), me(a, "fill-opacity", "0.4"), me(a, "class", "svelte-43sxxs"), me(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), me(i, "fill", "#FF7C00"), me(i, "class", "svelte-43sxxs"), me(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), me(l, "fill", "#FF7C00"), me(l, "fill-opacity", "0.4"), me(l, "class", "svelte-43sxxs"), me(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), me(s, "fill", "#FF7C00"), me(s, "class", "svelte-43sxxs"), Or(r, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), me(h, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), me(h, "fill", "#FF7C00"), me(h, "fill-opacity", "0.4"), me(h, "class", "svelte-43sxxs"), me(d, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), me(d, "fill", "#FF7C00"), me(d, "class", "svelte-43sxxs"), me(p, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), me(p, "fill", "#FF7C00"), me(p, "fill-opacity", "0.4"), me(p, "class", "svelte-43sxxs"), me(g, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), me(g, "fill", "#FF7C00"), me(g, "class", "svelte-43sxxs"), Or(o, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), me(t, "viewBox", "-1200 -1200 3000 3000"), me(t, "fill", "none"), me(t, "xmlns", "http://www.w3.org/2000/svg"), me(t, "class", "svelte-43sxxs"), me(e, "class", "svelte-43sxxs"), Gl(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(_, E) {
      Q4(_, e, E), $t(e, t), $t(t, r), $t(r, a), $t(r, i), $t(r, l), $t(r, s), $t(t, o), $t(o, h), $t(o, d), $t(o, p), $t(o, g);
    },
    p(_, [E]) {
      E & /*$top*/
      2 && Or(r, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), E & /*$bottom*/
      4 && Or(o, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), E & /*margin*/
      1 && Gl(
        e,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: Ul,
    o: Ul,
    d(_) {
      _ && ot(e);
    }
  };
}
function rd(n, e, t) {
  let r, a;
  var i = this && this.__awaiter || function(_, E, C, $) {
    function F(w) {
      return w instanceof C ? w : new C(function(v) {
        v(w);
      });
    }
    return new (C || (C = Promise))(function(w, v) {
      function x(M) {
        try {
          T($.next(M));
        } catch (L) {
          v(L);
        }
      }
      function S(M) {
        try {
          T($.throw(M));
        } catch (L) {
          v(L);
        }
      }
      function T(M) {
        M.done ? w(M.value) : F(M.value).then(x, S);
      }
      T(($ = $.apply(_, E || [])).next());
    });
  };
  let { margin: l = !0 } = e;
  const s = wl([0, 0]);
  Hl(n, s, (_) => t(1, r = _));
  const o = wl([0, 0]);
  Hl(n, o, (_) => t(2, a = _));
  let h;
  function d() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 140]), o.set([-125, -140])]), yield Promise.all([s.set([-125, 140]), o.set([125, -140])]), yield Promise.all([s.set([-125, 0]), o.set([125, -0])]), yield Promise.all([s.set([125, 0]), o.set([-125, 0])]);
    });
  }
  function p() {
    return i(this, void 0, void 0, function* () {
      yield d(), h || p();
    });
  }
  function g() {
    return i(this, void 0, void 0, function* () {
      yield Promise.all([s.set([125, 0]), o.set([-125, 0])]), p();
    });
  }
  return ed(() => (g(), () => h = !0)), n.$$set = (_) => {
    "margin" in _ && t(0, l = _.margin);
  }, [l, r, a, s, o];
}
class nd extends X4 {
  constructor(e) {
    super(), K4(this, e, rd, td, J4, { margin: 0 });
  }
}
const {
  SvelteComponent: ad,
  append_hydration: A0,
  attr: zt,
  binding_callbacks: Vl,
  check_outros: ga,
  children: Wt,
  claim_component: Ho,
  claim_element: jt,
  claim_space: vt,
  claim_text: Me,
  create_component: Uo,
  create_slot: Go,
  destroy_component: Vo,
  destroy_each: Wo,
  detach: Q,
  element: Xt,
  empty: Dt,
  ensure_array_like: sn,
  get_all_dirty_from_scope: jo,
  get_slot_changes: Xo,
  group_outros: _a,
  init: id,
  insert_hydration: ie,
  mount_component: Yo,
  noop: va,
  safe_not_equal: ld,
  set_data: St,
  set_style: v0,
  space: bt,
  text: ze,
  toggle_class: gt,
  transition_in: Mt,
  transition_out: Yt,
  update_slot_base: Zo
} = window.__gradio__svelte__internal, { tick: sd } = window.__gradio__svelte__internal, { onDestroy: od } = window.__gradio__svelte__internal, { createEventDispatcher: ud } = window.__gradio__svelte__internal, cd = (n) => ({}), Wl = (n) => ({}), hd = (n) => ({}), jl = (n) => ({});
function Xl(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r[43] = t, r;
}
function Yl(n, e, t) {
  const r = n.slice();
  return r[41] = e[t], r;
}
function md(n) {
  let e, t, r, a, i = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, s, o;
  t = new j4({
    props: {
      Icon: Mu,
      label: (
        /*i18n*/
        n[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    n[32]
  );
  const h = (
    /*#slots*/
    n[30].error
  ), d = Go(
    h,
    n,
    /*$$scope*/
    n[29],
    Wl
  );
  return {
    c() {
      e = Xt("div"), Uo(t.$$.fragment), r = bt(), a = Xt("span"), l = ze(i), s = bt(), d && d.c(), this.h();
    },
    l(p) {
      e = jt(p, "DIV", { class: !0 });
      var g = Wt(e);
      Ho(t.$$.fragment, g), g.forEach(Q), r = vt(p), a = jt(p, "SPAN", { class: !0 });
      var _ = Wt(a);
      l = Me(_, i), _.forEach(Q), s = vt(p), d && d.l(p), this.h();
    },
    h() {
      zt(e, "class", "clear-status svelte-17v219f"), zt(a, "class", "error svelte-17v219f");
    },
    m(p, g) {
      ie(p, e, g), Yo(t, e, null), ie(p, r, g), ie(p, a, g), A0(a, l), ie(p, s, g), d && d.m(p, g), o = !0;
    },
    p(p, g) {
      const _ = {};
      g[0] & /*i18n*/
      2 && (_.label = /*i18n*/
      p[1]("common.clear")), t.$set(_), (!o || g[0] & /*i18n*/
      2) && i !== (i = /*i18n*/
      p[1]("common.error") + "") && St(l, i), d && d.p && (!o || g[0] & /*$$scope*/
      536870912) && Zo(
        d,
        h,
        p,
        /*$$scope*/
        p[29],
        o ? Xo(
          h,
          /*$$scope*/
          p[29],
          g,
          cd
        ) : jo(
          /*$$scope*/
          p[29]
        ),
        Wl
      );
    },
    i(p) {
      o || (Mt(t.$$.fragment, p), Mt(d, p), o = !0);
    },
    o(p) {
      Yt(t.$$.fragment, p), Yt(d, p), o = !1;
    },
    d(p) {
      p && (Q(e), Q(r), Q(a), Q(s)), Vo(t), d && d.d(p);
    }
  };
}
function dd(n) {
  let e, t, r, a, i, l, s, o, h, d = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Zl(n)
  );
  function p(v, x) {
    if (
      /*progress*/
      v[7]
    ) return gd;
    if (
      /*queue_position*/
      v[2] !== null && /*queue_size*/
      v[3] !== void 0 && /*queue_position*/
      v[2] >= 0
    ) return pd;
    if (
      /*queue_position*/
      v[2] === 0
    ) return fd;
  }
  let g = p(n), _ = g && g(n), E = (
    /*timer*/
    n[5] && Jl(n)
  );
  const C = [yd, bd], $ = [];
  function F(v, x) {
    return (
      /*last_progress_level*/
      v[15] != null ? 0 : (
        /*show_progress*/
        v[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = F(n)) && (l = $[i] = C[i](n));
  let w = !/*timer*/
  n[5] && ls(n);
  return {
    c() {
      d && d.c(), e = bt(), t = Xt("div"), _ && _.c(), r = bt(), E && E.c(), a = bt(), l && l.c(), s = bt(), w && w.c(), o = Dt(), this.h();
    },
    l(v) {
      d && d.l(v), e = vt(v), t = jt(v, "DIV", { class: !0 });
      var x = Wt(t);
      _ && _.l(x), r = vt(x), E && E.l(x), x.forEach(Q), a = vt(v), l && l.l(v), s = vt(v), w && w.l(v), o = Dt(), this.h();
    },
    h() {
      zt(t, "class", "progress-text svelte-17v219f"), gt(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), gt(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(v, x) {
      d && d.m(v, x), ie(v, e, x), ie(v, t, x), _ && _.m(t, null), A0(t, r), E && E.m(t, null), ie(v, a, x), ~i && $[i].m(v, x), ie(v, s, x), w && w.m(v, x), ie(v, o, x), h = !0;
    },
    p(v, x) {
      /*variant*/
      v[8] === "default" && /*show_eta_bar*/
      v[18] && /*show_progress*/
      v[6] === "full" ? d ? d.p(v, x) : (d = Zl(v), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), g === (g = p(v)) && _ ? _.p(v, x) : (_ && _.d(1), _ = g && g(v), _ && (_.c(), _.m(t, r))), /*timer*/
      v[5] ? E ? E.p(v, x) : (E = Jl(v), E.c(), E.m(t, null)) : E && (E.d(1), E = null), (!h || x[0] & /*variant*/
      256) && gt(
        t,
        "meta-text-center",
        /*variant*/
        v[8] === "center"
      ), (!h || x[0] & /*variant*/
      256) && gt(
        t,
        "meta-text",
        /*variant*/
        v[8] === "default"
      );
      let S = i;
      i = F(v), i === S ? ~i && $[i].p(v, x) : (l && (_a(), Yt($[S], 1, 1, () => {
        $[S] = null;
      }), ga()), ~i ? (l = $[i], l ? l.p(v, x) : (l = $[i] = C[i](v), l.c()), Mt(l, 1), l.m(s.parentNode, s)) : l = null), /*timer*/
      v[5] ? w && (_a(), Yt(w, 1, 1, () => {
        w = null;
      }), ga()) : w ? (w.p(v, x), x[0] & /*timer*/
      32 && Mt(w, 1)) : (w = ls(v), w.c(), Mt(w, 1), w.m(o.parentNode, o));
    },
    i(v) {
      h || (Mt(l), Mt(w), h = !0);
    },
    o(v) {
      Yt(l), Yt(w), h = !1;
    },
    d(v) {
      v && (Q(e), Q(t), Q(a), Q(s), Q(o)), d && d.d(v), _ && _.d(), E && E.d(), ~i && $[i].d(v), w && w.d(v);
    }
  };
}
function Zl(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Xt("div"), this.h();
    },
    l(r) {
      e = jt(r, "DIV", { class: !0 }), Wt(e).forEach(Q), this.h();
    },
    h() {
      zt(e, "class", "eta-bar svelte-17v219f"), v0(e, "transform", t);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && v0(e, "transform", t);
    },
    d(r) {
      r && Q(e);
    }
  };
}
function fd(n) {
  let e;
  return {
    c() {
      e = ze("processing |");
    },
    l(t) {
      e = Me(t, "processing |");
    },
    m(t, r) {
      ie(t, e, r);
    },
    p: va,
    d(t) {
      t && Q(e);
    }
  };
}
function pd(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), r, a, i, l;
  return {
    c() {
      e = ze("queue: "), r = ze(t), a = ze("/"), i = ze(
        /*queue_size*/
        n[3]
      ), l = ze(" |");
    },
    l(s) {
      e = Me(s, "queue: "), r = Me(s, t), a = Me(s, "/"), i = Me(
        s,
        /*queue_size*/
        n[3]
      ), l = Me(s, " |");
    },
    m(s, o) {
      ie(s, e, o), ie(s, r, o), ie(s, a, o), ie(s, i, o), ie(s, l, o);
    },
    p(s, o) {
      o[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && St(r, t), o[0] & /*queue_size*/
      8 && St(
        i,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (Q(e), Q(r), Q(a), Q(i), Q(l));
    }
  };
}
function gd(n) {
  let e, t = sn(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = Ql(Yl(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Dt();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Dt();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      ie(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress*/
      128) {
        t = sn(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Yl(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = Ql(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Q(e), Wo(r, a);
    }
  };
}
function Kl(n) {
  let e, t = (
    /*p*/
    n[41].unit + ""
  ), r, a, i = " ", l;
  function s(d, p) {
    return (
      /*p*/
      d[41].length != null ? vd : _d
    );
  }
  let o = s(n), h = o(n);
  return {
    c() {
      h.c(), e = bt(), r = ze(t), a = ze(" | "), l = ze(i);
    },
    l(d) {
      h.l(d), e = vt(d), r = Me(d, t), a = Me(d, " | "), l = Me(d, i);
    },
    m(d, p) {
      h.m(d, p), ie(d, e, p), ie(d, r, p), ie(d, a, p), ie(d, l, p);
    },
    p(d, p) {
      o === (o = s(d)) && h ? h.p(d, p) : (h.d(1), h = o(d), h && (h.c(), h.m(e.parentNode, e))), p[0] & /*progress*/
      128 && t !== (t = /*p*/
      d[41].unit + "") && St(r, t);
    },
    d(d) {
      d && (Q(e), Q(r), Q(a), Q(l)), h.d(d);
    }
  };
}
function _d(n) {
  let e = L0(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ze(e);
    },
    l(r) {
      t = Me(r, e);
    },
    m(r, a) {
      ie(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = L0(
        /*p*/
        r[41].index || 0
      ) + "") && St(t, e);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function vd(n) {
  let e = L0(
    /*p*/
    n[41].index || 0
  ) + "", t, r, a = L0(
    /*p*/
    n[41].length
  ) + "", i;
  return {
    c() {
      t = ze(e), r = ze("/"), i = ze(a);
    },
    l(l) {
      t = Me(l, e), r = Me(l, "/"), i = Me(l, a);
    },
    m(l, s) {
      ie(l, t, s), ie(l, r, s), ie(l, i, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = L0(
        /*p*/
        l[41].index || 0
      ) + "") && St(t, e), s[0] & /*progress*/
      128 && a !== (a = L0(
        /*p*/
        l[41].length
      ) + "") && St(i, a);
    },
    d(l) {
      l && (Q(t), Q(r), Q(i));
    }
  };
}
function Ql(n) {
  let e, t = (
    /*p*/
    n[41].index != null && Kl(n)
  );
  return {
    c() {
      t && t.c(), e = Dt();
    },
    l(r) {
      t && t.l(r), e = Dt();
    },
    m(r, a) {
      t && t.m(r, a), ie(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].index != null ? t ? t.p(r, a) : (t = Kl(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && Q(e), t && t.d(r);
    }
  };
}
function Jl(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), r, a;
  return {
    c() {
      e = ze(
        /*formatted_timer*/
        n[20]
      ), r = ze(t), a = ze("s");
    },
    l(i) {
      e = Me(
        i,
        /*formatted_timer*/
        n[20]
      ), r = Me(i, t), a = Me(i, "s");
    },
    m(i, l) {
      ie(i, e, l), ie(i, r, l), ie(i, a, l);
    },
    p(i, l) {
      l[0] & /*formatted_timer*/
      1048576 && St(
        e,
        /*formatted_timer*/
        i[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && St(r, t);
    },
    d(i) {
      i && (Q(e), Q(r), Q(a));
    }
  };
}
function bd(n) {
  let e, t;
  return e = new nd({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Uo(e.$$.fragment);
    },
    l(r) {
      Ho(e.$$.fragment, r);
    },
    m(r, a) {
      Yo(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*variant*/
      256 && (i.margin = /*variant*/
      r[8] === "default"), e.$set(i);
    },
    i(r) {
      t || (Mt(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Yt(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Vo(e, r);
    }
  };
}
function yd(n) {
  let e, t, r, a, i, l = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && es(n)
  );
  return {
    c() {
      e = Xt("div"), t = Xt("div"), s && s.c(), r = bt(), a = Xt("div"), i = Xt("div"), this.h();
    },
    l(o) {
      e = jt(o, "DIV", { class: !0 });
      var h = Wt(e);
      t = jt(h, "DIV", { class: !0 });
      var d = Wt(t);
      s && s.l(d), d.forEach(Q), r = vt(h), a = jt(h, "DIV", { class: !0 });
      var p = Wt(a);
      i = jt(p, "DIV", { class: !0 }), Wt(i).forEach(Q), p.forEach(Q), h.forEach(Q), this.h();
    },
    h() {
      zt(t, "class", "progress-level-inner svelte-17v219f"), zt(i, "class", "progress-bar svelte-17v219f"), v0(i, "width", l), zt(a, "class", "progress-bar-wrap svelte-17v219f"), zt(e, "class", "progress-level svelte-17v219f");
    },
    m(o, h) {
      ie(o, e, h), A0(e, t), s && s.m(t, null), A0(e, r), A0(e, a), A0(a, i), n[31](i);
    },
    p(o, h) {
      /*progress*/
      o[7] != null ? s ? s.p(o, h) : (s = es(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null), h[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      o[15] * 100}%`) && v0(i, "width", l);
    },
    i: va,
    o: va,
    d(o) {
      o && Q(e), s && s.d(), n[31](null);
    }
  };
}
function es(n) {
  let e, t = sn(
    /*progress*/
    n[7]
  ), r = [];
  for (let a = 0; a < t.length; a += 1)
    r[a] = is(Xl(n, t, a));
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Dt();
    },
    l(a) {
      for (let i = 0; i < r.length; i += 1)
        r[i].l(a);
      e = Dt();
    },
    m(a, i) {
      for (let l = 0; l < r.length; l += 1)
        r[l] && r[l].m(a, i);
      ie(a, e, i);
    },
    p(a, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = sn(
          /*progress*/
          a[7]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = Xl(a, t, l);
          r[l] ? r[l].p(s, i) : (r[l] = is(s), r[l].c(), r[l].m(e.parentNode, e));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = t.length;
      }
    },
    d(a) {
      a && Q(e), Wo(r, a);
    }
  };
}
function ts(n) {
  let e, t, r, a, i = (
    /*i*/
    n[43] !== 0 && wd()
  ), l = (
    /*p*/
    n[41].desc != null && rs(n)
  ), s = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && ns()
  ), o = (
    /*progress_level*/
    n[14] != null && as(n)
  );
  return {
    c() {
      i && i.c(), e = bt(), l && l.c(), t = bt(), s && s.c(), r = bt(), o && o.c(), a = Dt();
    },
    l(h) {
      i && i.l(h), e = vt(h), l && l.l(h), t = vt(h), s && s.l(h), r = vt(h), o && o.l(h), a = Dt();
    },
    m(h, d) {
      i && i.m(h, d), ie(h, e, d), l && l.m(h, d), ie(h, t, d), s && s.m(h, d), ie(h, r, d), o && o.m(h, d), ie(h, a, d);
    },
    p(h, d) {
      /*p*/
      h[41].desc != null ? l ? l.p(h, d) : (l = rs(h), l.c(), l.m(t.parentNode, t)) : l && (l.d(1), l = null), /*p*/
      h[41].desc != null && /*progress_level*/
      h[14] && /*progress_level*/
      h[14][
        /*i*/
        h[43]
      ] != null ? s || (s = ns(), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), /*progress_level*/
      h[14] != null ? o ? o.p(h, d) : (o = as(h), o.c(), o.m(a.parentNode, a)) : o && (o.d(1), o = null);
    },
    d(h) {
      h && (Q(e), Q(t), Q(r), Q(a)), i && i.d(h), l && l.d(h), s && s.d(h), o && o.d(h);
    }
  };
}
function wd(n) {
  let e;
  return {
    c() {
      e = ze(" /");
    },
    l(t) {
      e = Me(t, " /");
    },
    m(t, r) {
      ie(t, e, r);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function rs(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = ze(e);
    },
    l(r) {
      t = Me(r, e);
    },
    m(r, a) {
      ie(r, t, a);
    },
    p(r, a) {
      a[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[41].desc + "") && St(t, e);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function ns(n) {
  let e;
  return {
    c() {
      e = ze("-");
    },
    l(t) {
      e = Me(t, "-");
    },
    m(t, r) {
      ie(t, e, r);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function as(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, r;
  return {
    c() {
      t = ze(e), r = ze("%");
    },
    l(a) {
      t = Me(a, e), r = Me(a, "%");
    },
    m(a, i) {
      ie(a, t, i), ie(a, r, i);
    },
    p(a, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (a[14][
        /*i*/
        a[43]
      ] || 0)).toFixed(1) + "") && St(t, e);
    },
    d(a) {
      a && (Q(t), Q(r));
    }
  };
}
function is(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && ts(n)
  );
  return {
    c() {
      t && t.c(), e = Dt();
    },
    l(r) {
      t && t.l(r), e = Dt();
    },
    m(r, a) {
      t && t.m(r, a), ie(r, e, a);
    },
    p(r, a) {
      /*p*/
      r[41].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[43]
      ] != null ? t ? t.p(r, a) : (t = ts(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(r) {
      r && Q(e), t && t.d(r);
    }
  };
}
function ls(n) {
  let e, t, r, a;
  const i = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), l = Go(
    i,
    n,
    /*$$scope*/
    n[29],
    jl
  );
  return {
    c() {
      e = Xt("p"), t = ze(
        /*loading_text*/
        n[9]
      ), r = bt(), l && l.c(), this.h();
    },
    l(s) {
      e = jt(s, "P", { class: !0 });
      var o = Wt(e);
      t = Me(
        o,
        /*loading_text*/
        n[9]
      ), o.forEach(Q), r = vt(s), l && l.l(s), this.h();
    },
    h() {
      zt(e, "class", "loading svelte-17v219f");
    },
    m(s, o) {
      ie(s, e, o), A0(e, t), ie(s, r, o), l && l.m(s, o), a = !0;
    },
    p(s, o) {
      (!a || o[0] & /*loading_text*/
      512) && St(
        t,
        /*loading_text*/
        s[9]
      ), l && l.p && (!a || o[0] & /*$$scope*/
      536870912) && Zo(
        l,
        i,
        s,
        /*$$scope*/
        s[29],
        a ? Xo(
          i,
          /*$$scope*/
          s[29],
          o,
          hd
        ) : jo(
          /*$$scope*/
          s[29]
        ),
        jl
      );
    },
    i(s) {
      a || (Mt(l, s), a = !0);
    },
    o(s) {
      Yt(l, s), a = !1;
    },
    d(s) {
      s && (Q(e), Q(r)), l && l.d(s);
    }
  };
}
function xd(n) {
  let e, t, r, a, i;
  const l = [dd, md], s = [];
  function o(h, d) {
    return (
      /*status*/
      h[4] === "pending" ? 0 : (
        /*status*/
        h[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = o(n)) && (r = s[t] = l[t](n)), {
    c() {
      e = Xt("div"), r && r.c(), this.h();
    },
    l(h) {
      e = jt(h, "DIV", { class: !0 });
      var d = Wt(e);
      r && r.l(d), d.forEach(Q), this.h();
    },
    h() {
      zt(e, "class", a = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-17v219f"), gt(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden" || /*status*/
      n[4] == "streaming"), gt(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), gt(
        e,
        "generating",
        /*status*/
        n[4] === "generating" && /*show_progress*/
        n[6] === "full"
      ), gt(
        e,
        "border",
        /*border*/
        n[12]
      ), v0(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), v0(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(h, d) {
      ie(h, e, d), ~t && s[t].m(e, null), n[33](e), i = !0;
    },
    p(h, d) {
      let p = t;
      t = o(h), t === p ? ~t && s[t].p(h, d) : (r && (_a(), Yt(s[p], 1, 1, () => {
        s[p] = null;
      }), ga()), ~t ? (r = s[t], r ? r.p(h, d) : (r = s[t] = l[t](h), r.c()), Mt(r, 1), r.m(e, null)) : r = null), (!i || d[0] & /*variant, show_progress*/
      320 && a !== (a = "wrap " + /*variant*/
      h[8] + " " + /*show_progress*/
      h[6] + " svelte-17v219f")) && zt(e, "class", a), (!i || d[0] & /*variant, show_progress, status, show_progress*/
      336) && gt(e, "hide", !/*status*/
      h[4] || /*status*/
      h[4] === "complete" || /*show_progress*/
      h[6] === "hidden" || /*status*/
      h[4] == "streaming"), (!i || d[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && gt(
        e,
        "translucent",
        /*variant*/
        h[8] === "center" && /*status*/
        (h[4] === "pending" || /*status*/
        h[4] === "error") || /*translucent*/
        h[11] || /*show_progress*/
        h[6] === "minimal"
      ), (!i || d[0] & /*variant, show_progress, status, show_progress*/
      336) && gt(
        e,
        "generating",
        /*status*/
        h[4] === "generating" && /*show_progress*/
        h[6] === "full"
      ), (!i || d[0] & /*variant, show_progress, border*/
      4416) && gt(
        e,
        "border",
        /*border*/
        h[12]
      ), d[0] & /*absolute*/
      1024 && v0(
        e,
        "position",
        /*absolute*/
        h[10] ? "absolute" : "static"
      ), d[0] & /*absolute*/
      1024 && v0(
        e,
        "padding",
        /*absolute*/
        h[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(h) {
      i || (Mt(r), i = !0);
    },
    o(h) {
      Yt(r), i = !1;
    },
    d(h) {
      h && Q(e), ~t && s[t].d(), n[33](null);
    }
  };
}
var kd = function(n, e, t, r) {
  function a(i) {
    return i instanceof t ? i : new t(function(l) {
      l(i);
    });
  }
  return new (t || (t = Promise))(function(i, l) {
    function s(d) {
      try {
        h(r.next(d));
      } catch (p) {
        l(p);
      }
    }
    function o(d) {
      try {
        h(r.throw(d));
      } catch (p) {
        l(p);
      }
    }
    function h(d) {
      d.done ? i(d.value) : a(d.value).then(s, o);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
let Pr = [], Zn = !1;
const Dd = typeof window < "u", Ko = Dd ? window.requestAnimationFrame : (n) => {
};
function Sd(n) {
  return kd(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Pr.push(e), !Zn) Zn = !0;
      else return;
      yield sd(), Ko(() => {
        let r = [0, 0];
        for (let a = 0; a < Pr.length; a++) {
          const l = Pr[a].getBoundingClientRect();
          (a === 0 || l.top + window.scrollY <= r[0]) && (r[0] = l.top + window.scrollY, r[1] = a);
        }
        window.scrollTo({ top: r[0] - 20, behavior: "smooth" }), Zn = !1, Pr = [];
      });
    }
  });
}
function Ad(n, e, t) {
  let r, { $$slots: a = {}, $$scope: i } = e;
  this && this.__awaiter;
  const l = ud();
  let { i18n: s } = e, { eta: o = null } = e, { queue_position: h } = e, { queue_size: d } = e, { status: p } = e, { scroll_to_output: g = !1 } = e, { timer: _ = !0 } = e, { show_progress: E = "full" } = e, { message: C = null } = e, { progress: $ = null } = e, { variant: F = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: v = !0 } = e, { translucent: x = !1 } = e, { border: S = !1 } = e, { autoscroll: T } = e, M, L = !1, z = 0, B = 0, W = null, V = null, le = 0, X = null, ge, pe = null, ce = !0;
  const he = () => {
    t(0, o = t(27, W = t(19, ae = null))), t(25, z = performance.now()), t(26, B = 0), L = !0, xe();
  };
  function xe() {
    Ko(() => {
      t(26, B = (performance.now() - z) / 1e3), L && xe();
    });
  }
  function fe() {
    t(26, B = 0), t(0, o = t(27, W = t(19, ae = null))), L && (L = !1);
  }
  od(() => {
    L && fe();
  });
  let ae = null;
  function P(O) {
    Vl[O ? "unshift" : "push"](() => {
      pe = O, t(16, pe), t(7, $), t(14, X), t(15, ge);
    });
  }
  const Z = () => {
    l("clear_status");
  };
  function Ne(O) {
    Vl[O ? "unshift" : "push"](() => {
      M = O, t(13, M);
    });
  }
  return n.$$set = (O) => {
    "i18n" in O && t(1, s = O.i18n), "eta" in O && t(0, o = O.eta), "queue_position" in O && t(2, h = O.queue_position), "queue_size" in O && t(3, d = O.queue_size), "status" in O && t(4, p = O.status), "scroll_to_output" in O && t(22, g = O.scroll_to_output), "timer" in O && t(5, _ = O.timer), "show_progress" in O && t(6, E = O.show_progress), "message" in O && t(23, C = O.message), "progress" in O && t(7, $ = O.progress), "variant" in O && t(8, F = O.variant), "loading_text" in O && t(9, w = O.loading_text), "absolute" in O && t(10, v = O.absolute), "translucent" in O && t(11, x = O.translucent), "border" in O && t(12, S = O.border), "autoscroll" in O && t(24, T = O.autoscroll), "$$scope" in O && t(29, i = O.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (o === null && t(0, o = W), o != null && W !== o && (t(28, V = (performance.now() - z) / 1e3 + o), t(19, ae = V.toFixed(1)), t(27, W = o))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, le = V === null || V <= 0 || !B ? null : Math.min(B / V, 1)), n.$$.dirty[0] & /*progress*/
    128 && $ != null && t(18, ce = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && ($ != null ? t(14, X = $.map((O) => {
      if (O.index != null && O.length != null)
        return O.index / O.length;
      if (O.progress != null)
        return O.progress;
    })) : t(14, X = null), X ? (t(15, ge = X[X.length - 1]), pe && (ge === 0 ? t(16, pe.style.transition = "0", pe) : t(16, pe.style.transition = "150ms", pe))) : t(15, ge = void 0)), n.$$.dirty[0] & /*status*/
    16 && (p === "pending" ? he() : fe()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && M && g && (p === "pending" || p === "complete") && Sd(M, T), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, r = B.toFixed(1));
  }, [
    o,
    s,
    h,
    d,
    p,
    _,
    E,
    $,
    F,
    w,
    v,
    x,
    S,
    M,
    X,
    ge,
    pe,
    le,
    ce,
    ae,
    r,
    l,
    g,
    C,
    T,
    z,
    B,
    W,
    V,
    i,
    a,
    P,
    Z,
    Ne
  ];
}
class $d extends ad {
  constructor(e) {
    super(), id(
      this,
      e,
      Ad,
      xd,
      ld,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  HtmlTagHydration: xC,
  SvelteComponent: kC,
  add_render_callback: DC,
  append_hydration: SC,
  attr: AC,
  bubble: $C,
  check_outros: EC,
  children: FC,
  claim_component: CC,
  claim_element: TC,
  claim_html_tag: MC,
  claim_space: zC,
  claim_text: BC,
  create_component: NC,
  create_in_transition: qC,
  create_out_transition: RC,
  destroy_component: IC,
  detach: LC,
  element: OC,
  get_svelte_dataset: PC,
  group_outros: HC,
  init: UC,
  insert_hydration: GC,
  listen: VC,
  mount_component: WC,
  run_all: jC,
  safe_not_equal: XC,
  set_data: YC,
  space: ZC,
  stop_propagation: KC,
  text: QC,
  toggle_class: JC,
  transition_in: eT,
  transition_out: tT
} = window.__gradio__svelte__internal, { createEventDispatcher: rT, onMount: nT } = window.__gradio__svelte__internal, {
  SvelteComponent: aT,
  append_hydration: iT,
  attr: lT,
  bubble: sT,
  check_outros: oT,
  children: uT,
  claim_component: cT,
  claim_element: hT,
  claim_space: mT,
  create_animation: dT,
  create_component: fT,
  destroy_component: pT,
  detach: gT,
  element: _T,
  ensure_array_like: vT,
  fix_and_outro_and_destroy_block: bT,
  fix_position: yT,
  group_outros: wT,
  init: xT,
  insert_hydration: kT,
  mount_component: DT,
  noop: ST,
  safe_not_equal: AT,
  set_style: $T,
  space: ET,
  transition_in: FT,
  transition_out: CT,
  update_keyed_each: TT
} = window.__gradio__svelte__internal, {
  SvelteComponent: MT,
  attr: zT,
  children: BT,
  claim_element: NT,
  detach: qT,
  element: RT,
  empty: IT,
  init: LT,
  insert_hydration: OT,
  noop: PT,
  safe_not_equal: HT,
  set_style: UT
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ed,
  append_hydration: Fe,
  assign: Fd,
  attr: ue,
  binding_callbacks: Cd,
  children: It,
  claim_component: ba,
  claim_element: nt,
  claim_space: Lt,
  claim_text: Zr,
  create_component: ya,
  destroy_component: wa,
  detach: Ze,
  element: at,
  get_spread_object: Td,
  get_spread_update: Md,
  init: zd,
  insert_hydration: nr,
  listen: ut,
  mount_component: xa,
  run_all: Bd,
  safe_not_equal: Nd,
  set_data: ka,
  set_input_value: Hr,
  space: Ot,
  text: Kr,
  to_number: ss,
  toggle_class: os,
  transition_in: Da,
  transition_out: Sa
} = window.__gradio__svelte__internal;
function qd(n) {
  let e;
  return {
    c() {
      e = Kr(
        /*label*/
        n[4]
      );
    },
    l(t) {
      e = Zr(
        t,
        /*label*/
        n[4]
      );
    },
    m(t, r) {
      nr(t, e, r);
    },
    p(t, r) {
      r[0] & /*label*/
      16 && ka(
        e,
        /*label*/
        t[4]
      );
    },
    d(t) {
      t && Ze(e);
    }
  };
}
function Rd(n) {
  let e, t, r, a, i, l, s, o, h, d, p, g, _, E, C, $, F, w, v, x, S, T = (
    /*labels*/
    n[15][
      /*minimum*/
      n[9]
    ] + ""
  ), M, L, z, B, W, V, le, X, ge, pe, ce, he, xe, fe, ae = (
    /*labels*/
    n[15][
      /*maximum*/
      n[10]
    ] + ""
  ), P, Z, Ne, O;
  const Ie = [
    { autoscroll: (
      /*gradio*/
      n[0].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[0].i18n
    ) },
    /*loading_status*/
    n[14]
  ];
  let De = {};
  for (let U = 0; U < Ie.length; U += 1)
    De = Fd(De, Ie[U]);
  return e = new $d({ props: De }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[29]
  ), i = new T4({
    props: {
      show_label: (
        /*show_label*/
        n[12]
      ),
      info: (
        /*info*/
        n[5]
      ),
      $$slots: { default: [qd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ya(e.$$.fragment), t = Ot(), r = at("div"), a = at("div"), ya(i.$$.fragment), l = Ot(), s = at("div"), o = at("input"), p = Ot(), g = at("input"), C = Ot(), $ = at("button"), F = Kr("↺"), v = Ot(), x = at("div"), S = at("span"), M = Kr(T), L = Ot(), z = at("div"), B = at("div"), W = Ot(), V = at("div"), le = Ot(), X = at("input"), pe = Ot(), ce = at("input"), xe = Ot(), fe = at("span"), P = Kr(ae), this.h();
    },
    l(U) {
      ba(e.$$.fragment, U), t = Lt(U), r = nt(U, "DIV", { class: !0 });
      var ee = It(r);
      a = nt(ee, "DIV", { class: !0 });
      var Se = It(a);
      ba(i.$$.fragment, Se), l = Lt(Se), s = nt(Se, "DIV", { class: !0 });
      var ye = It(s);
      o = nt(ye, "INPUT", {
        "aria-label": !0,
        "data-testid": !0,
        type: !0
      }), p = Lt(ye), g = nt(ye, "INPUT", {
        "aria-label": !0,
        "data-testid": !0,
        type: !0
      }), C = Lt(ye), $ = nt(ye, "BUTTON", { class: !0, "aria-label": !0 });
      var je = It($);
      F = Zr(je, "↺"), je.forEach(Ze), ye.forEach(Ze), Se.forEach(Ze), ee.forEach(Ze), v = Lt(U), x = nt(U, "DIV", { class: !0 });
      var Le = It(x);
      S = nt(Le, "SPAN", { class: !0 });
      var He = It(S);
      M = Zr(He, T), He.forEach(Ze), L = Lt(Le), z = nt(Le, "DIV", { class: !0 });
      var Ee = It(z);
      B = nt(Ee, "DIV", { class: !0 }), It(B).forEach(Ze), W = Lt(Ee), V = nt(Ee, "DIV", { class: !0, style: !0 }), It(V).forEach(Ze), le = Lt(Ee), X = nt(Ee, "INPUT", {
        type: !0,
        min: !0,
        max: !0,
        step: !0,
        class: !0
      }), pe = Lt(Ee), ce = nt(Ee, "INPUT", {
        type: !0,
        min: !0,
        max: !0,
        step: !0,
        class: !0
      }), Ee.forEach(Ze), xe = Lt(Le), fe = nt(Le, "SPAN", { class: !0 });
      var st = It(fe);
      P = Zr(st, ae), st.forEach(Ze), Le.forEach(Ze), this.h();
    },
    h() {
      ue(o, "aria-label", h = `min input for ${/*label*/
      n[4]}`), ue(o, "data-testid", "min-input"), ue(o, "type", "text"), o.readOnly = !0, o.value = /*selected_min_label*/
      n[21], o.disabled = d = !/*interactive*/
      n[13], ue(g, "aria-label", _ = `max input for ${/*label*/
      n[4]}`), ue(g, "data-testid", "max-input"), ue(g, "type", "text"), g.readOnly = !0, g.value = /*selected_max_label*/
      n[20], g.disabled = E = !/*interactive*/
      n[13], ue($, "class", "reset-button svelte-17pocne"), $.disabled = w = !/*interactive*/
      n[13], ue($, "aria-label", "Reset to default value"), ue(s, "class", "tab-like-container svelte-17pocne"), ue(a, "class", "head svelte-17pocne"), ue(r, "class", "wrap svelte-17pocne"), ue(S, "class", "min_value svelte-17pocne"), ue(B, "class", "range-bg svelte-17pocne"), ue(V, "class", "range-line svelte-17pocne"), ue(
        V,
        "style",
        /*rangeLine*/
        n[19]
      ), os(V, "disabled", !/*interactive*/
      n[13]), ue(X, "type", "range"), X.disabled = ge = !/*interactive*/
      n[13], ue(
        X,
        "min",
        /*minimum*/
        n[9]
      ), ue(
        X,
        "max",
        /*maximum*/
        n[10]
      ), ue(
        X,
        "step",
        /*step*/
        n[11]
      ), ue(X, "class", "svelte-17pocne"), ue(ce, "type", "range"), ce.disabled = he = !/*interactive*/
      n[13], ue(
        ce,
        "min",
        /*minimum*/
        n[9]
      ), ue(
        ce,
        "max",
        /*maximum*/
        n[10]
      ), ue(
        ce,
        "step",
        /*step*/
        n[11]
      ), ue(ce, "class", "svelte-17pocne"), ue(z, "class", "range-slider svelte-17pocne"), ue(fe, "class", "max_value svelte-17pocne"), ue(x, "class", "slider_input_container svelte-17pocne");
    },
    m(U, ee) {
      xa(e, U, ee), nr(U, t, ee), nr(U, r, ee), Fe(r, a), xa(i, a, null), Fe(a, l), Fe(a, s), Fe(s, o), Fe(s, p), Fe(s, g), Fe(s, C), Fe(s, $), Fe($, F), nr(U, v, ee), nr(U, x, ee), Fe(x, S), Fe(S, M), Fe(x, L), Fe(x, z), Fe(z, B), Fe(z, W), Fe(z, V), n[30](V), Fe(z, le), Fe(z, X), Hr(
        X,
        /*selected_min*/
        n[16]
      ), Fe(z, pe), Fe(z, ce), Hr(
        ce,
        /*selected_max*/
        n[17]
      ), Fe(x, xe), Fe(x, fe), Fe(fe, P), Z = !0, Ne || (O = [
        ut(
          o,
          "pointerup",
          /*handle_release*/
          n[24]
        ),
        ut(
          o,
          "blur",
          /*handle_release*/
          n[24]
        ),
        ut(
          g,
          "pointerup",
          /*handle_release*/
          n[24]
        ),
        ut(
          g,
          "blur",
          /*handle_release*/
          n[24]
        ),
        ut(
          $,
          "click",
          /*reset_value*/
          n[25]
        ),
        ut(
          X,
          "change",
          /*input2_change_input_handler*/
          n[31]
        ),
        ut(
          X,
          "input",
          /*input2_change_input_handler*/
          n[31]
        ),
        ut(
          X,
          "input",
          /*handle_min_change*/
          n[22]
        ),
        ut(
          X,
          "pointerup",
          /*handle_release*/
          n[24]
        ),
        ut(
          ce,
          "change",
          /*input3_change_input_handler*/
          n[32]
        ),
        ut(
          ce,
          "input",
          /*input3_change_input_handler*/
          n[32]
        ),
        ut(
          ce,
          "input",
          /*handle_max_change*/
          n[23]
        ),
        ut(
          ce,
          "pointerup",
          /*handle_release*/
          n[24]
        )
      ], Ne = !0);
    },
    p(U, ee) {
      const Se = ee[0] & /*gradio, loading_status*/
      16385 ? Md(Ie, [
        ee[0] & /*gradio*/
        1 && { autoscroll: (
          /*gradio*/
          U[0].autoscroll
        ) },
        ee[0] & /*gradio*/
        1 && { i18n: (
          /*gradio*/
          U[0].i18n
        ) },
        ee[0] & /*loading_status*/
        16384 && Td(
          /*loading_status*/
          U[14]
        )
      ]) : {};
      e.$set(Se);
      const ye = {};
      ee[0] & /*show_label*/
      4096 && (ye.show_label = /*show_label*/
      U[12]), ee[0] & /*info*/
      32 && (ye.info = /*info*/
      U[5]), ee[0] & /*label*/
      16 | ee[1] & /*$$scope*/
      16 && (ye.$$scope = { dirty: ee, ctx: U }), i.$set(ye), (!Z || ee[0] & /*label*/
      16 && h !== (h = `min input for ${/*label*/
      U[4]}`)) && ue(o, "aria-label", h), (!Z || ee[0] & /*selected_min_label*/
      2097152 && o.value !== /*selected_min_label*/
      U[21]) && (o.value = /*selected_min_label*/
      U[21]), (!Z || ee[0] & /*interactive*/
      8192 && d !== (d = !/*interactive*/
      U[13])) && (o.disabled = d), (!Z || ee[0] & /*label*/
      16 && _ !== (_ = `max input for ${/*label*/
      U[4]}`)) && ue(g, "aria-label", _), (!Z || ee[0] & /*selected_max_label*/
      1048576 && g.value !== /*selected_max_label*/
      U[20]) && (g.value = /*selected_max_label*/
      U[20]), (!Z || ee[0] & /*interactive*/
      8192 && E !== (E = !/*interactive*/
      U[13])) && (g.disabled = E), (!Z || ee[0] & /*interactive*/
      8192 && w !== (w = !/*interactive*/
      U[13])) && ($.disabled = w), (!Z || ee[0] & /*labels, minimum*/
      33280) && T !== (T = /*labels*/
      U[15][
        /*minimum*/
        U[9]
      ] + "") && ka(M, T), (!Z || ee[0] & /*rangeLine*/
      524288) && ue(
        V,
        "style",
        /*rangeLine*/
        U[19]
      ), (!Z || ee[0] & /*interactive*/
      8192) && os(V, "disabled", !/*interactive*/
      U[13]), (!Z || ee[0] & /*interactive*/
      8192 && ge !== (ge = !/*interactive*/
      U[13])) && (X.disabled = ge), (!Z || ee[0] & /*minimum*/
      512) && ue(
        X,
        "min",
        /*minimum*/
        U[9]
      ), (!Z || ee[0] & /*maximum*/
      1024) && ue(
        X,
        "max",
        /*maximum*/
        U[10]
      ), (!Z || ee[0] & /*step*/
      2048) && ue(
        X,
        "step",
        /*step*/
        U[11]
      ), ee[0] & /*selected_min*/
      65536 && Hr(
        X,
        /*selected_min*/
        U[16]
      ), (!Z || ee[0] & /*interactive*/
      8192 && he !== (he = !/*interactive*/
      U[13])) && (ce.disabled = he), (!Z || ee[0] & /*minimum*/
      512) && ue(
        ce,
        "min",
        /*minimum*/
        U[9]
      ), (!Z || ee[0] & /*maximum*/
      1024) && ue(
        ce,
        "max",
        /*maximum*/
        U[10]
      ), (!Z || ee[0] & /*step*/
      2048) && ue(
        ce,
        "step",
        /*step*/
        U[11]
      ), ee[0] & /*selected_max*/
      131072 && Hr(
        ce,
        /*selected_max*/
        U[17]
      ), (!Z || ee[0] & /*labels, maximum*/
      33792) && ae !== (ae = /*labels*/
      U[15][
        /*maximum*/
        U[10]
      ] + "") && ka(P, ae);
    },
    i(U) {
      Z || (Da(e.$$.fragment, U), Da(i.$$.fragment, U), Z = !0);
    },
    o(U) {
      Sa(e.$$.fragment, U), Sa(i.$$.fragment, U), Z = !1;
    },
    d(U) {
      U && (Ze(t), Ze(r), Ze(v), Ze(x)), wa(e, U), wa(i), n[30](null), Ne = !1, Bd(O);
    }
  };
}
function Id(n) {
  let e, t;
  return e = new Su({
    props: {
      visible: (
        /*visible*/
        n[3]
      ),
      elem_id: (
        /*elem_id*/
        n[1]
      ),
      elem_classes: (
        /*elem_classes*/
        n[2]
      ),
      container: (
        /*container*/
        n[6]
      ),
      scale: (
        /*scale*/
        n[7]
      ),
      min_width: (
        /*min_width*/
        n[8]
      ),
      $$slots: { default: [Rd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ya(e.$$.fragment);
    },
    l(r) {
      ba(e.$$.fragment, r);
    },
    m(r, a) {
      xa(e, r, a), t = !0;
    },
    p(r, a) {
      const i = {};
      a[0] & /*visible*/
      8 && (i.visible = /*visible*/
      r[3]), a[0] & /*elem_id*/
      2 && (i.elem_id = /*elem_id*/
      r[1]), a[0] & /*elem_classes*/
      4 && (i.elem_classes = /*elem_classes*/
      r[2]), a[0] & /*container*/
      64 && (i.container = /*container*/
      r[6]), a[0] & /*scale*/
      128 && (i.scale = /*scale*/
      r[7]), a[0] & /*min_width*/
      256 && (i.min_width = /*min_width*/
      r[8]), a[0] & /*labels, maximum, interactive, minimum, step, selected_max, selected_min, rangeLine, range_input, label, selected_max_label, selected_min_label, show_label, info, gradio, loading_status*/
      4193841 | a[1] & /*$$scope*/
      16 && (i.$$scope = { dirty: a, ctx: r }), e.$set(i);
    },
    i(r) {
      t || (Da(e.$$.fragment, r), t = !0);
    },
    o(r) {
      Sa(e.$$.fragment, r), t = !1;
    },
    d(r) {
      wa(e, r);
    }
  };
}
function Ld(n, e, t) {
  let r, a, i, { gradio: l } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: h = !0 } = e, { value: d } = e, { label: p = l.i18n("slider.slider") } = e, { info: g = void 0 } = e, { container: _ = !0 } = e, { scale: E = null } = e, { min_width: C = void 0 } = e, { minimum: $ = 0 } = e, { maximum: F = 100 } = e, { step: w } = e, { show_label: v } = e, { interactive: x } = e, { loading_status: S } = e, { value_is_output: T = !1 } = e, { labels: M = [] } = e;
  function L(P, Z) {
    t(26, d = [P, Z]), l.dispatch("change", [P, Z]), T || l.dispatch("input", [P, Z]);
  }
  function z(P) {
    t(16, le = parseFloat(P.target.value)), le > X && t(17, X = le);
  }
  function B(P) {
    t(17, X = parseFloat(P.target.value)), X < le && t(16, le = X);
  }
  function W(P) {
    l.dispatch("release", d);
  }
  let V = d, [le, X] = d, ge = d, pe;
  function ce() {
    t(16, [le, X] = ge, le, (t(17, X), t(28, V), t(26, d))), l.dispatch("change"), l.dispatch("release", d);
  }
  const he = () => l.dispatch("clear_status", S);
  function xe(P) {
    Cd[P ? "unshift" : "push"](() => {
      pe = P, t(18, pe);
    });
  }
  function fe() {
    le = ss(this.value), t(16, le), t(28, V), t(26, d);
  }
  function ae() {
    X = ss(this.value), t(17, X), t(28, V), t(26, d);
  }
  return n.$$set = (P) => {
    "gradio" in P && t(0, l = P.gradio), "elem_id" in P && t(1, s = P.elem_id), "elem_classes" in P && t(2, o = P.elem_classes), "visible" in P && t(3, h = P.visible), "value" in P && t(26, d = P.value), "label" in P && t(4, p = P.label), "info" in P && t(5, g = P.info), "container" in P && t(6, _ = P.container), "scale" in P && t(7, E = P.scale), "min_width" in P && t(8, C = P.min_width), "minimum" in P && t(9, $ = P.minimum), "maximum" in P && t(10, F = P.maximum), "step" in P && t(11, w = P.step), "show_label" in P && t(12, v = P.show_label), "interactive" in P && t(13, x = P.interactive), "loading_status" in P && t(14, S = P.loading_status), "value_is_output" in P && t(27, T = P.value_is_output), "labels" in P && t(15, M = P.labels);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*old_value, value*/
    335544320 && JSON.stringify(V) !== JSON.stringify(d) && (t(16, [le, X] = d, le, (t(17, X), t(28, V), t(26, d))), t(28, V = d)), n.$$.dirty[0] & /*labels, selected_min*/
    98304 && t(21, r = M[le]), n.$$.dirty[0] & /*labels, selected_max*/
    163840 && t(20, a = M[X]), n.$$.dirty[0] & /*selected_min, selected_max*/
    196608 && L(le, X), n.$$.dirty[0] & /*selected_min, minimum, maximum, selected_max*/
    198144 && t(19, i = `
      left: ${(le - $) / (F - $) * 100}%;
      width: ${(X - le) / (F - $) * 100}%;
    `);
  }, [
    l,
    s,
    o,
    h,
    p,
    g,
    _,
    E,
    C,
    $,
    F,
    w,
    v,
    x,
    S,
    M,
    le,
    X,
    pe,
    i,
    a,
    r,
    z,
    B,
    W,
    ce,
    d,
    T,
    V,
    he,
    xe,
    fe,
    ae
  ];
}
class GT extends Ed {
  constructor(e) {
    super(), zd(
      this,
      e,
      Ld,
      Id,
      Nd,
      {
        gradio: 0,
        elem_id: 1,
        elem_classes: 2,
        visible: 3,
        value: 26,
        label: 4,
        info: 5,
        container: 6,
        scale: 7,
        min_width: 8,
        minimum: 9,
        maximum: 10,
        step: 11,
        show_label: 12,
        interactive: 13,
        loading_status: 14,
        value_is_output: 27,
        labels: 15
      },
      null,
      [-1, -1]
    );
  }
}
export {
  GT as default
};
