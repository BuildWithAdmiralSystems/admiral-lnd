// node-mirror: /Feature---Text-Left/Feature-1
const FeatureGrid = () => {
  const items = [
    {
      title: 'A single source of tokens',
      body: 'Every color, type style, radius, and shadow lives in one CSS file. Edit once, propagate everywhere.',
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>),
    },
    {
      title: 'Component library, vetted',
      body: 'Buttons, inputs, modals, tables, and shells — all reviewed against the Style Guide.',
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>),
    },
    {
      title: 'Handover standard',
      body: 'Designers and engineers share the same vocabulary, the same names, the same source of truth.',
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
    },
    {
      title: 'Light & dark, ready',
      body: 'Every surface has been considered on both canvases — the dark hero gradient and the bright workspace.',
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg>),
    },
    {
      title: 'Built for handoff',
      body: 'Pixel-precise Figma frames mirror live React. No guessing, no drift.',
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 4v16"/></svg>),
    },
    {
      title: 'Iterates with you',
      body: 'New patterns get folded back in — versioned, named, and documented.',
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>),
    },
  ];
  return (
    <section className="ad-section ad-features">
      <div className="ad-features__head">
        <p className="ad-eyebrow">Why Starboard</p>
        <h2 className="ad-features__heading">Designed once. Used everywhere.</h2>
        <p className="ad-features__sub">A vetted set of patterns that flex from the marketing site to the product, without losing the brand on the way.</p>
      </div>
      <div className="ad-features__grid">
        {items.map((it) => (
          <article key={it.title} className="ad-feature">
            <div className="ad-feature__icon">{it.icon}</div>
            <h3 className="ad-feature__title">{it.title}</h3>
            <p className="ad-feature__body">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

window.FeatureGrid = FeatureGrid;
