// node-mirror: /Pricing/Pricing-1
const Pricing = () => {
  const [annual, setAnnual] = React.useState(true);
  const tiers = [
    { name: 'Starter', price: annual ? 0 : 0, blurb: 'For solo designers exploring the system.', features: ['1 designer seat', 'Tokens & components', 'Community support'], cta: 'Start free', kind: 'secondary' },
    { name: 'Team', price: annual ? 24 : 32, blurb: 'For product teams shipping together.', features: ['Up to 12 seats', 'Live tokens sync', 'Slack handover bot', 'Priority support'], cta: 'Choose Team', kind: 'primary', highlight: true },
    { name: 'Fleet', price: 'Talk to us', blurb: 'For org-wide rollouts and managed handover.', features: ['Unlimited seats', 'Custom themes', 'Dedicated CSM', 'SOC2 reports'], cta: 'Contact sales', kind: 'secondary' },
  ];
  return (
    <section className="ad-section ad-pricing">
      <div className="ad-features__head">
        <p className="ad-eyebrow">Pricing</p>
        <h2 className="ad-features__heading">Simple plans, sensible scale.</h2>
        <div className="ad-pricing__toggle" role="tablist">
          <button role="tab" aria-selected={!annual} className={!annual ? 'is-active' : ''} onClick={() => setAnnual(false)}>Monthly</button>
          <button role="tab" aria-selected={annual} className={annual ? 'is-active' : ''} onClick={() => setAnnual(true)}>Annual <span className="ad-pricing__save">−20%</span></button>
        </div>
      </div>
      <div className="ad-pricing__grid">
        {tiers.map((t) => (
          <article key={t.name} className={`ad-tier ${t.highlight ? 'ad-tier--highlight' : ''}`}>
            <header>
              <p className="ad-tier__name">{t.name}</p>
              <p className="ad-tier__price">
                {typeof t.price === 'number' ? <><span>${t.price}</span><small>/seat/mo</small></> : t.price}
              </p>
              <p className="ad-tier__blurb">{t.blurb}</p>
            </header>
            <ul className="ad-tier__features">
              {t.features.map((f) => (
                <li key={f}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`btn btn--${t.kind} btn--block`}>{t.cta}</button>
          </article>
        ))}
      </div>
    </section>
  );
};

window.Pricing = Pricing;
