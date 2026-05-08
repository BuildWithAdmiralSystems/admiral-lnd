// node-mirror: /Page-Headers/Page-Header-1
const PageHeader = ({ title, sub, onNew }) => (
  <div className="ad-pageheader">
    <div className="ad-pageheader__text">
      <h1 className="ad-pageheader__title">{title}</h1>
      <p className="ad-pageheader__sub">{sub}</p>
    </div>
    <div className="ad-pageheader__actions">
      <button className="btn btn--secondary btn--sm">Export</button>
      <button className="btn btn--primary btn--sm" onClick={onNew}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
        New voyage
      </button>
    </div>
  </div>
);

window.PageHeader = PageHeader;
