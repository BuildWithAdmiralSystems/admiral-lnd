// Reusable dropdown / menu / select / autocomplete / combo-select
// surfaces — mirroring Figma /Combo-Select, /Autocomplete, /Form
// and the standard NavDropdown pattern from /Navbars.

// ─── primitive: a positioned popover panel ────────────────────────
const Popover = ({ open, onClose, anchorRef, align = 'start', children }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target) &&
          anchorRef?.current && !anchorRef.current.contains(e.target)) onClose?.();
    };
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open, onClose, anchorRef]);
  if (!open) return null;
  return (
    <div ref={ref} className={`ad-pop ad-pop--${align}`} role="menu">{children}</div>
  );
};

// ─── 1. Nav dropdown ────────────────────────────────────────────────
const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <div className="ad-dd">
      <button ref={ref} className={`ad-nav__link ad-dd__trigger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="menu">
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <Popover open={open} onClose={() => setOpen(false)} anchorRef={ref}>
        <ul className="ad-menu ad-menu--rich">
          {items.map((it) => (
            <li key={it.label}>
              <a href="#" className="ad-menu__item" role="menuitem">
                <span className="ad-menu__icon">{it.icon}</span>
                <span className="ad-menu__text">
                  <span className="ad-menu__title">{it.label}</span>
                  <span className="ad-menu__sub">{it.sub}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
};

// ─── 2. Action menu (kebab / overflow / context) ────────────────────
const Menu = ({ trigger, items, align = 'end' }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <div className="ad-dd">
      <span ref={ref} onClick={() => setOpen(!open)}>{trigger}</span>
      <Popover open={open} onClose={() => setOpen(false)} anchorRef={ref} align={align}>
        <ul className="ad-menu" role="menu">
          {items.map((it, i) => it === '---'
            ? <li key={i} className="ad-menu__sep" role="separator"></li>
            : (
              <li key={it.label}>
                <button className={`ad-menu__item ad-menu__item--row ${it.danger ? 'is-danger' : ''}`}
                        onClick={() => { it.onClick?.(); setOpen(false); }} role="menuitem">
                  {it.icon && <span className="ad-menu__icon ad-menu__icon--sm">{it.icon}</span>}
                  <span className="ad-menu__text">{it.label}</span>
                  {it.shortcut && <kbd>{it.shortcut}</kbd>}
                </button>
              </li>
            )
          )}
        </ul>
      </Popover>
    </div>
  );
};

// ─── 3. Select (single, with label) ────────────────────────────────
const Select = ({ label, value, onChange, options, placeholder = 'Select…' }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const selected = options.find((o) => o.value === value);
  return (
    <div className="ad-field">
      {label && <label className="ad-field__label">{label}</label>}
      <button ref={ref} className={`ad-input ad-input--select ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open}>
        <span className={selected ? 'ad-input__value' : 'ad-input__placeholder'}>
          {selected?.label ?? placeholder}
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <Popover open={open} onClose={() => setOpen(false)} anchorRef={ref}>
        <ul className="ad-menu" role="listbox">
          {options.map((o) => (
            <li key={o.value}>
              <button className={`ad-menu__item ad-menu__item--row ${o.value === value ? 'is-selected' : ''}`}
                      onClick={() => { onChange(o.value); setOpen(false); }} role="option" aria-selected={o.value === value}>
                <span className="ad-menu__text">{o.label}</span>
                {o.value === value && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-11"/></svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
};

// ─── 4. Autocomplete (typed query, filtered list) ──────────────────
const Autocomplete = ({ label, options, placeholder = 'Search…', onPick }) => {
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const filtered = q ? options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase())) : options;
  return (
    <div className="ad-field">
      {label && <label className="ad-field__label">{label}</label>}
      <div ref={ref} className={`ad-input ${open ? 'is-open' : ''}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input value={q} onChange={(e) => { setQ(e.target.value); setOpen(true); }}
               onFocus={() => setOpen(true)} placeholder={placeholder} />
      </div>
      <Popover open={open && filtered.length > 0} onClose={() => setOpen(false)} anchorRef={ref}>
        <ul className="ad-menu" role="listbox">
          {filtered.map((o) => (
            <li key={o.value}>
              <button className="ad-menu__item ad-menu__item--row"
                      onClick={() => { setQ(o.label); onPick?.(o); setOpen(false); }} role="option">
                <span className="ad-menu__text">{o.label}</span>
                {o.hint && <span className="ad-menu__hint">{o.hint}</span>}
              </button>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
};

// ─── 5. Combo-Select (multi-select tags + typeahead) ───────────────
const ComboSelect = ({ label, options, value = [], onChange, placeholder = 'Select…' }) => {
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const remaining = options.filter((o) => !value.includes(o.value) &&
                                          (!q || o.label.toLowerCase().includes(q.toLowerCase())));
  const toggle = (v) => onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  return (
    <div className="ad-field">
      {label && <label className="ad-field__label">{label}</label>}
      <div ref={ref} className={`ad-input ad-input--combo ${open ? 'is-open' : ''}`} onClick={() => setOpen(true)}>
        {value.map((v) => {
          const o = options.find((x) => x.value === v);
          return (
            <span key={v} className="ad-tag">
              {o?.label}
              <button onClick={(e) => { e.stopPropagation(); toggle(v); }} aria-label={`Remove ${o?.label}`}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </span>
          );
        })}
        <input value={q} onChange={(e) => { setQ(e.target.value); setOpen(true); }}
               placeholder={value.length === 0 ? placeholder : ''} />
      </div>
      <Popover open={open && remaining.length > 0} onClose={() => setOpen(false)} anchorRef={ref}>
        <ul className="ad-menu" role="listbox" aria-multiselectable="true">
          {remaining.map((o) => (
            <li key={o.value}>
              <button className="ad-menu__item ad-menu__item--row"
                      onClick={() => { toggle(o.value); setQ(''); }} role="option">
                <span className="ad-menu__text">{o.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
};

window.NavDropdown = NavDropdown;
window.Menu = Menu;
window.Select = Select;
window.Autocomplete = Autocomplete;
window.ComboSelect = ComboSelect;
