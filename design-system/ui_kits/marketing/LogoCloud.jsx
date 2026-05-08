// node-mirror: /Logos/Logos-1
const LogoCloud = () => {
  const logos = ['Devhaus', 'Northwind', 'Helix', 'Bayline', 'Marlin & Co', 'Atlasy'];
  return (
    <section className="ad-section">
      <p className="ad-eyebrow">Trusted by teams that ship</p>
      <div className="ad-logos">
        {logos.map((name) => (
          <div key={name} className="ad-logos__item">{name}</div>
        ))}
      </div>
    </section>
  );
};

window.LogoCloud = LogoCloud;
