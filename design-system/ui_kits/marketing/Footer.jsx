// node-mirror: /Footers/Footer-1
const Footer = () => {
  const cols = [
    { title: 'Product', links: ['Components', 'Tokens', 'Templates', 'Changelog'] },
    { title: 'Resources', links: ['Documentation', 'Style guide', 'Brand assets', 'Status'] },
    { title: 'Company', links: ['About', 'Customers', 'Careers', 'Press kit'] },
    { title: 'Legal', links: ['Terms', 'Privacy', 'Cookies', 'DPA'] },
  ];
  return (
    <footer className="ad-footer">
      <div className="ad-footer__inner">
        <div className="ad-footer__brand">
          <img src="../../assets/admiral-wordmark-white.png" alt="Admiral Systems" />
          <p className="ad-footer__tag">The right side of every design decision.</p>
          <div className="ad-footer__socials">
            <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.2 3.8A11.9 11.9 0 0 1 3 4.7a4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.6 12 12 0 0 0 8.5 20.5c7.8 0 12-6.4 12-12v-.5A8.6 8.6 0 0 0 22 5.8z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zM7.7 8h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.31h-4.55v-7.36c0-1.76-.03-4.02-2.45-4.02-2.46 0-2.84 1.92-2.84 3.9v7.48H7.7V8z"/></svg></a>
            <a href="#" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.22.69-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg></a>
          </div>
        </div>
        <div className="ad-footer__cols">
          {cols.map((c) => (
            <div key={c.title} className="ad-footer__col">
              <p className="ad-footer__col-title">{c.title}</p>
              <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="ad-footer__bottom">
        <span>© 2026 Admiral Systems Ltd.</span>
        <span>v0.1 · Starboard</span>
      </div>
    </footer>
  );
};

window.Footer = Footer;
