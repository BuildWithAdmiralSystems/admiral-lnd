// node-mirror: /Topbars/Topbar-1
const Topbar = ({ title, crumbs, onMenu }) => (
  <header className="ad-topbar">
    <div className="ad-topbar__left">
      <button className="ad-icon-btn ad-topbar__menu" aria-label="Open menu" onClick={onMenu}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <nav className="ad-crumbs" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={c}>
            {i > 0 && <span className="ad-crumbs__sep">/</span>}
            <a href="#" className={i === crumbs.length - 1 ? 'is-current' : ''}>{c}</a>
          </React.Fragment>
        ))}
      </nav>
    </div>
    <div className="ad-topbar__right">
      <button className="ad-icon-btn" aria-label="Help">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>
      </button>
      <button className="ad-icon-btn" aria-label="Notifications">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        <span className="ad-icon-btn__dot"></span>
      </button>
      <button className="btn btn--secondary btn--sm">Invite</button>
      <button className="btn btn--primary btn--sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
        New voyage
      </button>
    </div>
  </header>
);

window.Topbar = Topbar;
