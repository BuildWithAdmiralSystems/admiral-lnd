// node-mirror: /Announcement/external/Announcement
// Vetted modal: 430 wide, white surface, 32 padding, 250-tall image,
// title, supporting copy, 5-dot pagination, Primary + Secondary buttons.

const Announcement = ({
  variant = 'light',         // 'light' | 'dark'
  title = 'Modal title',
  body = 'Copy that provides context about what is being shown in the modal. Give specific instruction if needed and tie messaging to what users value.',
  primary = 'Get started',
  secondary = 'Skip',
  step = 0,
  steps = 5,
  onPrimary, onSecondary, onClose,
  image,                     // optional <img> src or React node
}) => {
  const isDark = variant === 'dark';
  return (
    <div className={`ad-ann ${isDark ? 'ad-ann--dark' : ''}`} role="dialog" aria-modal="true" aria-labelledby="ad-ann-title">
      <button className="ad-ann__close" aria-label="Close" onClick={onClose}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <div className="ad-ann__image">
        {image || <div className="ad-ann__image-fallback" aria-hidden="true"></div>}
      </div>
      <div className="ad-ann__body">
        <h2 id="ad-ann-title" className="ad-ann__title">{title}</h2>
        <p className="ad-ann__copy">{body}</p>
      </div>
      <div className="ad-ann__pager" role="tablist" aria-label="Pagination">
        {Array.from({length: steps}).map((_, i) => (
          <span key={i} className={`ad-ann__dot ${i === step ? 'is-active' : ''}`} role="tab" aria-selected={i === step}></span>
        ))}
      </div>
      <div className="ad-ann__actions">
        <button className="btn btn--secondary btn--block" onClick={onSecondary}>{secondary}</button>
        <button className="btn btn--primary btn--block" onClick={onPrimary}>{primary}</button>
      </div>
    </div>
  );
};

window.Announcement = Announcement;
