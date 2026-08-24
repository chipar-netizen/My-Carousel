/* @ds-bundle: {"format":4,"namespace":"AlluraDentalDesignSystem_4aca76","components":[{"name":"SealBadge","sourcePath":"components/brand/SealBadge.jsx"},{"name":"StickyCTABar","sourcePath":"components/brand/StickyCTABar.jsx"},{"name":"TrustBadge","sourcePath":"components/brand/TrustBadge.jsx"},{"name":"WhatsAppButton","sourcePath":"components/brand/WhatsAppButton.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/SealBadge.jsx":"7e6d4cba4e55","components/brand/StickyCTABar.jsx":"75ed5c310fcb","components/brand/TrustBadge.jsx":"6c1924e62056","components/brand/WhatsAppButton.jsx":"35dc5f765a22","components/core/Button.jsx":"1c79a1218217","components/core/Card.jsx":"91adf0721b9d","components/core/Icon.jsx":"7f3f8944ac61","components/core/Tag.jsx":"27f0e3c8011d","ui_kits/website/ContactScreen.jsx":"ee7210dcd690","ui_kits/website/Footer.jsx":"8b84727da2d7","ui_kits/website/Header.jsx":"405e8ed351d0","ui_kits/website/HomeScreen.jsx":"71965e51e83a","ui_kits/website/TreatmentDetailScreen.jsx":"56339e678899","ui_kits/website/TreatmentsScreen.jsx":"fb94205eedcb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlluraDentalDesignSystem_4aca76 = window.AlluraDentalDesignSystem_4aca76 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SealBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SealBadge — the circular "stamp" badge (8 real colour variants exist as
 * image assets). Renders one of those PNGs at a chosen size. Deliberately
 * reads as a sticker/seal, not a second logo — keep it small (e.g. 34px in
 * the footer). Pass the asset src for the variant you want.
 */
function SealBadge({
  src,
  size = 96,
  alt = 'Allura Dental seal',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: 'var(--radius-round)',
      objectFit: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SealBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SealBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's three CTA treatments.
 *  • primary   : solid Brushed Gold fill, cream text; hover deepens to Deep Gold.
 *  • secondary : transparent, 1.5px charcoal/black outline.
 *  • ghost     : gold text link with a gold underline (inline CTA).
 * 4px corner radius throughout — never a rounded pill. Manrope bold.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 16px',
      font: 'var(--text-xs)'
    },
    md: {
      padding: '13px 26px',
      font: 'var(--text-sm)'
    },
    lg: {
      padding: '16px 34px',
      font: 'var(--text-body-size)'
    }
  };
  const sz = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: sz.font,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'var(--transition-base)',
    transform: active ? 'translateY(1px)' : 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: hover ? 'var(--btn-primary-bg-hover)' : 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      border: '1.5px solid transparent',
      padding: sz.padding,
      boxShadow: hover ? 'var(--shadow-hover)' : 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--btn-secondary-text)',
      border: '1.5px solid var(--btn-secondary-border)',
      padding: `calc(${sz.padding.split(' ')[0]} - 1.5px) calc(${sz.padding.split(' ')[1]} - 1.5px)`,
      boxShadow: hover ? 'var(--shadow-hover)' : 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--btn-ghost-text)',
      border: 'none',
      borderRadius: 0,
      padding: '10px 2px',
      borderBottom: '1.5px solid var(--btn-ghost-text)',
      opacity: hover ? 0.72 : 1
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's static content container. Warm-white surface, 1px
 * hairline border, 4px radius, and NO ambient shadow (the elevation rule).
 * Set interactive to allow a barely-there hover lift that signals the card
 * responds to input — the only case a card ever gets a shadow.
 */
function Card({
  interactive = false,
  as: Tag = 'div',
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-hover)' : 'none',
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Allura Dental icon set — Tier 1 functional icons, thin-stroke outline
   (1.5px), drawn on a 24×24 grid. Extracted verbatim from the brand's own
   website design guide. Default stroke is sage green (the functional icon
   colour); pass color to override, or use inside a coloured context. */
const ICONS = {
  'booking': '<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
  'hours': '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
  'check-up-tooth': '<path d="M17 2.5c4 4.5 4 10 3.5 12.5-3 1-6.5-.5-8.5-3-2 2.5-5.5 4-8.5 3C3 12.5 3 7 7 2.5c1.5 2 3 2.5 5 2.5s3.5-.5 5-2.5z"/><path d="M12 5v13"/>',
  'whitening': '<path d="M17 3.5c3.5 4 3.5 9 3 11-2.5 1-5.5-.3-7-2.5-1.5 2.2-4.5 3.5-7 2.5-.5-2 -.5-7 3-11 1.3 1.7 2.5 2.2 4 2.2s2.7-.5 4-2.2z"/><path d="M8.5 1.5l1 2M15.5 1.5l-1 2M12 .5v2.5"/>',
  'aligners': '<rect x="4" y="9" width="16" height="7" rx="3"/><path d="M4 12.5h16M8 9v7M12 9v7M16 9v7"/>',
  'fillings': '<path d="M6 4h8l4 4v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M14 4v4h4"/><circle cx="10.5" cy="14" r="2"/>',
  'crowns-and-bridges': '<path d="M4 9l3-6h10l3 6-8 12z"/><path d="M4 9h16M9.5 3l2.5 6 2.5-6"/>',
  'implants': '<path d="M12 2l6 3.5v4c0 5-3 8.5-6 10.5-3-2-6-5.5-6-10.5v-4z"/><path d="M9 10.5l2 2 4-4.5"/>',
  'family-kids': '<circle cx="8" cy="8" r="4"/><circle cx="17" cy="10" r="3"/><path d="M2 20c0-3 2.5-5 6-5s6 2 6 5M13.5 20c.3-2.3 2-4 4.5-4s4.2 1.7 4.5 4"/>',
  '3d-scan-x-ray': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M12 4v16M7 13.5h2M15 13.5h2M7 17h2M15 17h2"/>',
  'emergency': '<path d="M18 8a6 6 0 0 0-12 0c0 4-2 5-2 8h16c0-3-2-4-2-8"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0"/>',
  'treatment-plan': '<path d="M17 3l3 3-9.5 9.5-3.8 1 1-3.8L17 3z"/>',
  'payment': '<rect x="2.5" y="6" width="19" height="13" rx="2"/><line x1="2.5" y1="10" x2="21.5" y2="10"/>',
  'phone': '<path d="M20 15.5a2 2 0 0 1-2.2 2 17 17 0 0 1-7.4-2.6 16.6 16.6 0 0 1-5-5A17 17 0 0 1 3 4.7 2 2 0 0 1 5 2.5h3a1 1 0 0 1 1 .8c.1.9.4 1.8.7 2.6a1 1 0 0 1-.2 1L8.1 8.4a13 13 0 0 0 5 5l1.5-1.4a1 1 0 0 1 1-.2c.8.3 1.7.6 2.6.7a1 1 0 0 1 .8 1v3z"/>',
  'location': '<path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/>',
  'team': '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"/>',
  'reviews': '<polygon points="12 2.5 14.6 9 21.5 9.4 16 13.8 17.9 20.5 12 16.7 6.1 20.5 8 13.8 2.5 9.4 9.4 9 12 2.5"/>',
  'chat': '<path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.6L4 20z"/><path d="M8.5 10.5c.3 2 2.5 4.2 4.5 4.5"/>',
  'menu': '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  'email': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>'
};
const ICON_NAMES = Object.keys(ICONS);

/**
 * Icon — renders a brand icon by name at a given size/stroke colour.
 * Functional icons default to sage green; pass color for a specific context.
 */
function Icon({
  name,
  size = 24,
  color = 'var(--icon-functional)',
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const markup = ICONS[name];
  if (!markup) {
    if (typeof console !== 'undefined') console.warn('Icon: unknown name "' + name + '"');
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }, rest));
}
Object.assign(__ds_scope, { ICONS, ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/StickyCTABar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StickyCTABar — mobile bottom bar, weighted by function (not split evenly).
 * "Book Online" takes the Primary treatment (solid Brushed Gold, cream text)
 * because booking is the real conversion goal; "Call" stays neutral white/
 * black as the secondary path. Segments divided by a hairline; the bar's top
 * edge carries the one allowed shadow. Respects the iOS home-indicator inset.
 */
function StickyCTABar({
  bookHref = '#book',
  callHref = 'tel:0383428888',
  bookLabel = 'Book Online',
  callLabel = 'Call',
  position = 'absolute',
  style,
  ...rest
}) {
  const seg = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    padding: '15px 0',
    paddingBottom: 'calc(15px + env(safe-area-inset-bottom, 0px))',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: 'var(--text-sm)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      boxShadow: 'var(--shadow-sticky)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: bookHref,
    style: {
      ...seg,
      flex: 1.2,
      background: 'var(--brushed-gold)',
      color: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "booking",
    size: 18,
    color: "var(--warm-white)",
    strokeWidth: 1.8
  }), bookLabel), /*#__PURE__*/React.createElement("a", {
    href: callHref,
    style: {
      ...seg,
      background: 'var(--warm-white)',
      color: 'var(--pure-black)',
      borderLeft: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 18,
    color: "var(--pure-black)",
    strokeWidth: 1.8
  }), callLabel));
}
Object.assign(__ds_scope, { StickyCTABar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StickyCTABar.jsx", error: String((e && e.message) || e) }); }

// components/brand/TrustBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TrustBadge — a single item in the hero "trust badge" row: a small sage
 * outline icon beside a short reassurance line. Stack several in a flex/grid
 * row (4-up on the homepage hero).
 */
function TrustBadge({
  icon = 'check',
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WhatsAppButton — floating circular chat button, bottom-right, sitting just
 * above the sticky CTA bar. Forest Green fill with a generic chat-bubble icon
 * (deliberately NOT the WhatsApp logo, to avoid trademark use). Carries the
 * float shadow — this is an interactive element, so the shadow is allowed.
 */
function WhatsAppButton({
  href = 'https://wa.me/61404893072',
  size = 52,
  position = 'absolute',
  offsetBottom = 88,
  offsetRight = 16,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": "Chat with us on WhatsApp",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position,
      bottom: offsetBottom,
      right: offsetRight,
      width: size,
      height: size,
      borderRadius: 'var(--radius-round)',
      background: 'var(--forest-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-float)',
      transition: 'var(--transition-base)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chat",
    size: size * 0.44,
    color: "var(--warm-white)",
    strokeWidth: 1.8
  }));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small uppercase label used for category chips and eyebrow-style
 * markers (the "btag" pattern). Deep-gold text on a soft-beige field by
 * default; the sage tone reads as a quieter, on-brand alternative.
 */
function Tag({
  tone = 'gold',
  children,
  style,
  ...rest
}) {
  const tones = {
    gold: {
      background: 'var(--soft-beige)',
      color: 'var(--deep-gold)'
    },
    sage: {
      background: 'color-mix(in srgb, var(--sage-green) 14%, var(--warm-white))',
      color: 'var(--moss-olive)'
    },
    green: {
      background: 'var(--forest-green)',
      color: 'var(--warm-white)'
    },
    neutral: {
      background: 'var(--light-grey)',
      color: 'var(--ink-700)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: '9.5px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      ...(tones[tone] || tones.gold),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* Contact screen — details, hours, and a booking prompt (links to the
   Zavy360 flow rather than a lead-capture form). Exports ContactScreen. */
const {
  Icon,
  Card,
  Button
} = window.DS;
function ContactScreen() {
  const S = window.Section;
  const rows = [['location', 'Visit us', '22 Bradshaw Street, Truganina VIC 3029'], ['phone', 'Call', '03 8342 8888'], ['chat', 'WhatsApp', 'wa.me/61404893072'], ['email', 'Email', 'info@alluradental.com.au']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S, {
    bg: "var(--soft-beige)",
    style: {
      padding: 'var(--space-14) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      maxWidth: 560
    }
  }, "We\u2019d love to welcome you to the clinic")), /*#__PURE__*/React.createElement(S, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-10)'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, rows.map(([ic, t, v]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-sm)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-600)'
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hours",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "Opening hours")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-600)',
      lineHeight: 2
    }
  }, "Mon\u2013Fri: 9am \u2013 6pm", /*#__PURE__*/React.createElement("br", null), "Saturday: 9am \u2013 4pm", /*#__PURE__*/React.createElement("br", null), "Sunday: Closed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 260,
      background: 'var(--hog-bristle)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--ink-400)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location",
    size: 40,
    color: "var(--sage-green)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "Google Maps embed")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 var(--space-2)'
    }
  }, "Book online"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      color: 'var(--ink-600)',
      fontSize: 'var(--text-sm)'
    }
  }, "Booking runs through our existing Zavy360 flow \u2014 pick a time that suits you."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#book",
    style: {
      width: '100%'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "booking",
      size: 17,
      color: "var(--warm-white)",
      strokeWidth: 1.8
    })
  }, "Book an Appointment"))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Site footer — Shale-grey field, forest-green column titles, plain-black
   links (never blue), AHPRA-style verification block + small circular seal.
   Exports Footer to window. */
const {
  SealBadge
} = window.DS;
function FCol({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--forest-green)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '10px',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-3)',
      fontFamily: 'var(--font-sans)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.9,
      color: 'var(--ink-900)'
    }
  }, children));
}
function Footer() {
  const suburbs = ['Truganina', 'Williams Landing', 'Point Cook', 'Tarneit', 'Hoppers Crossing', 'Laverton', 'Wyndham Vale', 'Altona'];
  const treatments = ['Check-ups & Cleaning', 'Teeth Whitening', 'Invisalign', 'Dental Implants', 'Emergency Dentistry', 'CDBS Children\'s Dentistry'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#D7D9D6',
      color: 'var(--ink-900)',
      padding: 'var(--space-12) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/allura-horizontal.png",
    alt: "Allura Dental",
    style: {
      height: 34
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(FCol, {
    title: "Contact"
  }, "Phone: 03 8342 8888", /*#__PURE__*/React.createElement("br", null), "WhatsApp: wa.me/61404893072", /*#__PURE__*/React.createElement("br", null), "Email: info@alluradental.com.au", /*#__PURE__*/React.createElement("br", null), "22 Bradshaw Street,", /*#__PURE__*/React.createElement("br", null), "Truganina VIC 3029"), /*#__PURE__*/React.createElement(FCol, {
    title: "Opening Hours"
  }, "Mon\u2013Fri: 9am \u2013 6pm", /*#__PURE__*/React.createElement("br", null), "Saturday: 9am \u2013 4pm", /*#__PURE__*/React.createElement("br", null), "Sunday: Closed"), /*#__PURE__*/React.createElement(FCol, {
    title: "Serving"
  }, suburbs.join(' · ')), /*#__PURE__*/React.createElement(FCol, {
    title: "Treatments"
  }, treatments.map(t => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--ink-900)'
    }
  }, t)))), /*#__PURE__*/React.createElement(FCol, {
    title: "Follow"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/allura_dental",
    style: {
      color: 'var(--ink-900)'
    }
  }, "Instagram @allura_dental"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/share/1BXEyRMpmj/",
    style: {
      color: 'var(--ink-900)'
    }
  }, "Facebook @allura dental truganina"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(SealBadge, {
    src: "../../assets/badges/badge-green-fill.png",
    size: 40
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10.5px',
      color: 'var(--ink-700)',
      borderTop: '1px solid #A8ACA4',
      paddingTop: 'var(--space-3)',
      lineHeight: 1.7
    }
  }, "Allura Dental \u2014 ABN 74 984 835 963. Dental services at Allura Dental are provided under the operation of PCP Corporates Pty Ltd. CDBS (Child Dental Benefits Schedule) is a Medicare entitlement for eligible children, provided independently of any promotional offer.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Site header — sticky, warm-white, hairline bottom border on scroll.
   Desktop: Horizontal logo + full 8-item nav + phone CTA button.
   Exports Header to window. */
const {
  Button,
  Icon
} = window.DS;
const NAV = ['Home', 'About', 'Our Team', 'Treatments', 'Cost', 'Specials', 'News', 'Contact'];
function Header({
  current,
  onNav,
  scrolled
}) {
  const [open, setOpen] = React.useState(false);
  const route = label => {
    const l = label.toLowerCase();
    if (l === 'home') return 'home';
    if (l === 'treatments') return 'treatments';
    if (l === 'contact') return 'contact';
    return 'home';
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--warm-white)',
      borderBottom: scrolled ? '1px solid var(--light-grey)' : '1px solid transparent',
      transition: 'border-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 'var(--header-height)',
      padding: '0 var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/allura-horizontal.png",
    alt: "Allura Dental",
    onClick: () => onNav('home'),
    style: {
      height: 30,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, NAV.map(n => {
    const active = route(n) === current || n === 'Home' && current === 'home';
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      onClick: () => onNav(route(n)),
      style: {
        cursor: 'pointer',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-semibold)',
        color: active ? 'var(--deep-gold)' : 'var(--pure-black)'
      }
    }, n);
  }), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "tel:0383428888",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15,
      color: "var(--warm-white)",
      strokeWidth: 1.8
    })
  }, "03 8342 8888")), /*#__PURE__*/React.createElement("button", {
    className: "site-burger",
    onClick: () => setOpen(!open),
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 26,
    color: "var(--pure-black)"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "site-mnav",
    style: {
      borderTop: '1px solid var(--light-grey)',
      padding: 'var(--space-3) var(--space-6) var(--space-5)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    onClick: () => {
      onNav(route(n));
      setOpen(false);
    },
    style: {
      padding: '11px 0',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-body-size)',
      borderBottom: '1px solid var(--light-grey)',
      cursor: 'pointer'
    }
  }, n)), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#book",
    style: {
      marginTop: 'var(--space-4)',
      width: '100%'
    }
  }, "Book an Appointment")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Home screen — hero (with embedded booking CTA), $199 offer band,
   why-us grid, service areas. Exports HomeScreen to window. */
const {
  Button,
  Icon,
  Tag,
  Card,
  TrustBadge
} = window.DS;
function Section({
  children,
  bg = 'var(--warm-white)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--space-20) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, children));
}
function HomeScreen({
  onNav
}) {
  const badges = [['payment', 'All Major Health Insurers Accepted'], ['family-kids', 'CDBS Accepted — Free Kids Dental*'], ['hours', 'Interest-Free Payment Option'], ['emergency', 'Same-Day Emergency Appointments*']];
  const why = [['3d-scan-x-ray', 'See what we see', 'On-site 3D CBCT + digital X-ray imaging means you understand exactly what’s happening — nothing hidden.'], ['location', 'Purpose-built & local', 'A modern, boutique-calm clinic in Truganina with on-site parking, designed with the whole family in mind.'], ['check-up-tooth', 'Honest recommendations', 'The full range of options explained, essential to ideal. Our advice is never revenue-driven.'], ['family-kids', 'For every age', 'All-age accessible knee-break chair, CDBS for eligible kids, and gentle care for nervous patients.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    bg: "var(--soft-beige)",
    style: {
      padding: 'var(--space-20) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
      gap: 'var(--space-12)',
      alignItems: 'center'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "Modern dentistry, done differently"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--lh-tight)',
      marginBottom: 'var(--space-4)'
    }
  }, "The trusted family dentist in Truganina."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-600)',
      maxWidth: 520,
      marginBottom: 'var(--space-6)'
    }
  }, "A new-age dentistry that you can see and experience \u2014 honesty in every recommendation, quality in every treatment, and genuine care for your family."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#book",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "booking",
      size: 18,
      color: "var(--warm-white)",
      strokeWidth: 1.8
    })
  }, "Book an Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('treatments')
  }, "Explore Treatments")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3) var(--space-6)'
    }
  }, badges.map(([ic, l]) => /*#__PURE__*/React.createElement(TrustBadge, {
    key: l,
    icon: ic,
    label: l
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: 'var(--hog-bristle)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "team",
    size: 44,
    color: "var(--sage-green)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      textAlign: 'center',
      maxWidth: 220
    }
  }, "Portrait \u2014 Dr Sumaiya Pathan", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)'
    }
  }, "(real clinic photography)")))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--monument-charcoal)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green"
  }, "New Patient Offer"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--warm-white)',
      margin: 'var(--space-3) 0',
      fontSize: 'var(--text-h1)'
    }
  }, "$199 New Patient Offer"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#C9C6BF',
      marginBottom: 0
    }
  }, "Comprehensive exam, 2\xD7 X-rays, oral cancer screening, fluoride application, full-mouth clean & polish, full-mouth 3D scan, and a complimentary oral care kit.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#book"
  }, "Claim the offer"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Why Truganina families choose us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h1)'
    }
  }, "Trust, earned in every visit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 'var(--space-5)'
    }
  }, why.map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 34
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 'var(--space-4) 0 var(--space-2)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-600)',
      fontSize: 'var(--text-sm)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--soft-beige)",
    style: {
      padding: 'var(--space-14) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Serving Melbourne\u2019s west"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-700)',
      maxWidth: 800,
      margin: '0 auto',
      lineHeight: 1.8
    }
  }, "Truganina \xB7 Williams Landing \xB7 Point Cook \xB7 Tarneit \xB7 Hoppers Crossing \xB7 Laverton \xB7 Wyndham Vale \xB7 Altona"))));
}
window.HomeScreen = HomeScreen;
window.Section = Section;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TreatmentDetailScreen.jsx
try { (() => {
/* Treatment detail — the repeatable template (worked with Teeth Whitening):
   hero + trust badges, what-is-it, benefits grid, options, FAQ, disclaimer + CTA.
   Exports TreatmentDetailScreen to window. */
const {
  Icon,
  Tag,
  Card,
  Button,
  TrustBadge
} = window.DS;
function TreatmentDetailScreen({
  name = 'Teeth Whitening',
  onNav
}) {
  const S = window.Section;
  const whitening = name === 'Teeth Whitening';
  const benefits = [['whitening', 'Brighter appearance', 'Lift years of coffee, tea, and natural-ageing stains for a visibly fresher smile.'], ['hours', 'Convenient options', 'Single-visit in-clinic results, or gradual whitening from a custom take-home kit.'], ['check-up-tooth', 'Personalised care', 'Shade and suitability assessed for your teeth — not a one-size-fits-all kit.'], ['payment', 'Safe & monitored', 'Professionally supervised, using approved products at the right concentration.']];
  const faqs = [['Does whitening damage enamel?', 'Professionally supervised whitening at the correct concentration does not damage enamel. Sensitivity, if any, is usually mild and temporary.'], ['How long do results last?', 'Typically several months to a couple of years, depending on diet and habits. A take-home kit helps you top up between visits.'], ['Is it right for everyone?', 'Whitening is cosmetic and not suitable for everyone — results vary by natural tooth shade and existing restorations. Suitability is confirmed at your consultation.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S, {
    bg: "var(--soft-beige)",
    style: {
      padding: 'var(--space-14) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('treatments'),
    style: {
      cursor: 'pointer',
      fontSize: 'var(--text-sm)',
      color: 'var(--deep-gold)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\u2190 All treatments"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.8fr)',
      gap: 'var(--space-10)',
      alignItems: 'center',
      marginTop: 'var(--space-5)'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, "Cosmetic Care"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      margin: 'var(--space-3) 0'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-600)',
      marginBottom: 'var(--space-6)'
    }
  }, "At Allura Dental, we believe every smile deserves to shine. Professional teeth whitening is a safe way to refresh a smile dulled by coffee, tea, or natural ageing."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#book"
  }, "Book a consultation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3) var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "check-up-tooth",
    label: "Brighter appearance"
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "hours",
    label: "Convenient options"
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "team",
    label: "Personalised care"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: 'var(--hog-bristle)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whitening",
    size: 48,
    color: "var(--sage-green)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)'
    }
  }, "Treatment photography")))), /*#__PURE__*/React.createElement(S, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 'var(--space-8)'
    }
  }, "The benefits"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: 'var(--space-5)'
    }
  }, benefits.map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 30
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 'var(--space-3) 0 var(--space-2)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-600)',
      fontSize: 'var(--text-sm)'
    }
  }, d))))), /*#__PURE__*/React.createElement(S, {
    bg: "var(--soft-beige)"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 'var(--space-8)'
    }
  }, "Your options"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Tag, {
    tone: "green"
  }, "In-Clinic"), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 'var(--space-3) 0 var(--space-2)'
    }
  }, "In-Clinic Treatment"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-600)',
      fontSize: 'var(--text-sm)'
    }
  }, "A single visit with immediate, professionally applied results \u2014 ideal before an event or milestone.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold"
  }, "Take-Home"), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 'var(--space-3) 0 var(--space-2)'
    }
  }, "Take-Home Kit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-600)',
      fontSize: 'var(--text-sm)'
    }
  }, "Custom-fitted trays and professional gel for gradual whitening at your own pace, at home.")))), /*#__PURE__*/React.createElement(S, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)',
      marginBottom: 'var(--space-6)'
    }
  }, "Common questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, faqs.map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderBottom: '1px solid var(--light-grey)',
      padding: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-body-size)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-600)',
      fontSize: 'var(--text-sm)'
    }
  }, a))))), /*#__PURE__*/React.createElement(S, {
    bg: "var(--monument-charcoal)",
    style: {
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--warm-white)'
    }
  }, "Ready when you are"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#C9C6BF',
      margin: 0,
      fontSize: 'var(--text-sm)'
    }
  }, "Whitening is a cosmetic treatment and not suitable for everyone; results vary by natural tooth shade and existing restorations. Suitability is confirmed at your consultation.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#book"
  }, "Book an Appointment"))));
}
window.TreatmentDetailScreen = TreatmentDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TreatmentDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TreatmentsScreen.jsx
try { (() => {
/* Treatments listing — category chips + full directory grid of treatment
   cards (icon, care category, name). Clicking a card opens its detail.
   Exports TreatmentsScreen to window. */
const {
  Icon,
  Tag,
  Card,
  Button
} = window.DS;
const TREATMENTS = [['check-up-tooth', 'Preventive', 'Check-ups & Cleaning'], ['family-kids', 'Family', 'CDBS Children’s Dentistry'], ['fillings', 'Restorative', 'Tooth-Coloured Fillings'], ['crowns-and-bridges', 'Restorative', 'Crowns & Bridges'], ['implants', 'Advanced', 'Dental Implants'], ['aligners', 'Cosmetic', 'Invisalign / Clear Aligners'], ['treatment-plan', 'Advanced', 'Root Canal Therapy'], ['emergency', 'Emergency', 'Emergency Dentistry'], ['3d-scan-x-ray', 'Surgical', 'Wisdom Teeth / Extractions'], ['whitening', 'Cosmetic', 'Teeth Whitening'], ['check-up-tooth', 'Preventive', 'Sealants & Fluoride'], ['family-kids', 'Restorative', 'Gum Disease Therapy']];
function TreatmentsScreen({
  onOpen
}) {
  const S = window.Section;
  const cats = ['Family Care', 'Preventive Care', 'Restorative Care', 'Advanced Care', 'Emergency Care', 'Surgical Care', 'Cosmetic Care'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S, {
    bg: "var(--soft-beige)",
    style: {
      padding: 'var(--space-14) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Our Treatments"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      maxWidth: 620
    }
  }, "Comprehensive care for every stage of your smile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    tone: "sage"
  }, c)))), /*#__PURE__*/React.createElement(S, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--space-5)'
    }
  }, TREATMENTS.map(([ic, cat, name]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    interactive: true,
    onClick: () => onOpen(name),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 32
  }), /*#__PURE__*/React.createElement(Tag, {
    tone: "gold"
  }, cat)), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--deep-gold)',
      fontWeight: 'var(--fw-bold)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15,
    color: "var(--deep-gold)"
  })))))), /*#__PURE__*/React.createElement(S, {
    bg: "var(--forest-green)",
    style: {
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "emergency",
    size: 40,
    color: "var(--warm-white)",
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--warm-white)',
      margin: '0 0 4px'
    }
  }, "Dental emergency?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(253,252,250,0.82)',
      margin: 0,
      fontSize: 'var(--text-sm)'
    }
  }, "Don\u2019t suffer in pain \u2014 call us and we\u2019ll try to accommodate a same-day appointment."))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "tel:0383428888"
  }, "Call 03 8342 8888"))));
}
window.TreatmentsScreen = TreatmentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TreatmentsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SealBadge = __ds_scope.SealBadge;

__ds_ns.StickyCTABar = __ds_scope.StickyCTABar;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

})();
