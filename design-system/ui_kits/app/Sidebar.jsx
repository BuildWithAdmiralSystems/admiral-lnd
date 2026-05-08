// node-mirror: /Sidebars/Sidebar-1
const Sidebar = ({ active, onSelect }) => {
  const items = [
    { key: 'home', label: 'Home', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11z"/></svg>) },
    { key: 'fleet', label: 'Fleet', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 12h6"/></svg>) },
    { key: 'voyages', label: 'Voyages', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h6l3-7 3 14 3-7h3"/></svg>) },
    { key: 'reports', label: 'Reports', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 16V10M12 16V8M16 16v-4"/></svg>) },
    { key: 'crew', label: 'Crew', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15 20a4 4 0 0 1 7 0"/></svg>) },
    { key: 'settings', label: 'Settings', icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>) },
  ];
  return (
    <aside className="ad-sidebar">
      <div className="ad-sidebar__brand">
        <img src="../../assets/admiral-mark-color.png" alt="" />
        <span>Admiral</span>
      </div>
      <div className="ad-sidebar__search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input placeholder="Search" />
        <kbd>⌘K</kbd>
      </div>
      <nav className="ad-sidebar__nav">
        {items.map((it) => (
          <button key={it.key} className={`ad-sidebar__item ${active === it.key ? 'is-active' : ''}`} onClick={() => onSelect(it.key)}>
            {it.icon}
            <span>{it.label}</span>
            {it.key === 'voyages' && <span className="ad-sidebar__count">12</span>}
          </button>
        ))}
      </nav>
      <div className="ad-sidebar__upgrade">
        <p className="ad-sidebar__upgrade-title">You're on Team</p>
        <p className="ad-sidebar__upgrade-body">Add unlimited voyages with Fleet.</p>
        <button className="btn btn--primary btn--sm btn--block">Upgrade</button>
      </div>
      <div className="ad-sidebar__user">
        <div className="ad-avatar">AK</div>
        <div className="ad-sidebar__user-meta">
          <p>Alex Kestrel</p>
          <p>alex@admiral.systems</p>
        </div>
        <button aria-label="More" className="ad-sidebar__more">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="12" r="1.5" fill="currentColor"/></svg>
        </button>
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
