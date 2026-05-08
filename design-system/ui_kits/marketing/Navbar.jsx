const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = ['Product', 'Solutions', 'Pricing', 'Customers', 'Resources'];
  return (
    <header className="ad-nav">
      <div className="ad-nav__inner">
        <a className="ad-nav__brand" href="#" aria-label="Admiral">
          <img src="../../assets/admiral-wordmark-color.png" alt="Admiral Systems" />
        </a>
        <nav className="ad-nav__links" aria-label="Primary">
          {links.map((l) => (<a key={l} href="#" className="ad-nav__link">{l}</a>))}
        </nav>
        <div className="ad-nav__actions">
          <a href="#" className="ad-nav__signin">Sign in</a>
          <button className="btn btn--primary btn--sm">Get started</button>
        </div>
        <button className="ad-nav__menu" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="ad-nav__sheet">
          {links.map((l) => (<a key={l} href="#" className="ad-nav__link">{l}</a>))}
          <a href="#" className="ad-nav__signin">Sign in</a>
          <button className="btn btn--primary">Get started</button>
        </div>
      )}
    </header>
  );
};

window.Navbar = Navbar;
