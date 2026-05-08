// Generic Dialog wrapper — alternate vetted pattern at 560 wide.
const Dialog = ({ title, body, danger, primary = 'Confirm', secondary = 'Cancel', onPrimary, onSecondary, icon }) => (
  <div className={`ad-dialog ${danger ? 'ad-dialog--danger' : ''}`} role="dialog" aria-modal="true">
    <div className="ad-dialog__icon">{icon}</div>
    <button className="ad-ann__close" aria-label="Close" onClick={onSecondary}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <div className="ad-dialog__body">
      <h2 className="ad-dialog__title">{title}</h2>
      <p className="ad-dialog__copy">{body}</p>
    </div>
    <div className="ad-dialog__actions">
      <button className="btn btn--secondary" onClick={onSecondary}>{secondary}</button>
      <button className={danger ? 'btn btn--danger' : 'btn btn--primary'} onClick={onPrimary}>{primary}</button>
    </div>
  </div>
);

window.Dialog = Dialog;
