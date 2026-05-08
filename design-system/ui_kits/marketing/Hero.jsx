// node-mirror: /Hero/Hero-1-Pixel/index.jsx
// Two-column hero with image left, copy right, on top of pixel-dot texture.

const Hero = () => {
  return (
    <section className="ad-hero">
      <div className="ad-hero__texture" aria-hidden="true">
        <div className="ad-hero__bleed ad-hero__bleed--a"></div>
        <div className="ad-hero__bleed ad-hero__bleed--b"></div>
      </div>
      <div className="ad-hero__container">
        <div className="ad-hero__image" role="img" aria-label="Two operators reviewing a chart on a workstation">
          <div className="ad-hero__image-inner"></div>
        </div>
        <div className="ad-hero__copy">
          <h1 className="ad-hero__heading">Steer every release to the right side of the decision.</h1>
          <p className="ad-hero__supporting">
            Starboard is Admiral's component library, style guide, and handover standard — one place for the patterns that ship our work consistently across every surface.
          </p>
          <div className="ad-hero__actions">
            <button className="btn btn--primary">Get started</button>
            <button className="btn btn--secondary">Take the tour</button>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
