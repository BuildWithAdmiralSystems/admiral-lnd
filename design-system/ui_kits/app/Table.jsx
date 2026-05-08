// node-mirror: /Tables/Table-1
const Table = ({ rows, onRowClick }) => {
  const [sortBy, setSortBy] = React.useState('updated');
  return (
    <div className="ad-table-wrap">
      <div className="ad-table-head">
        <div className="ad-table-head__text">
          <p className="ad-table-title">Voyages</p>
          <p className="ad-table-sub">{rows.length} active across the fleet</p>
        </div>
        <div className="ad-table-actions">
          <div className="ad-search ad-search--sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            <input placeholder="Search voyages" />
          </div>
          <button className="btn btn--secondary btn--sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
            Filter
          </button>
        </div>
      </div>
      <div className="ad-table-scroll">
      <table className="ad-table">
        <thead>
          <tr>
            <th><label className="ad-check"><input type="checkbox" /></label></th>
            <th>Voyage</th>
            <th>Vessel</th>
            <th>Status</th>
            <th>Captain</th>
            <th>ETA</th>
            <th onClick={() => setSortBy('updated')} className="is-sortable">
              Updated
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 10l5-5 5 5M7 14l5 5 5-5"/></svg>
            </th>
            <th aria-label=""></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} onClick={() => onRowClick && onRowClick(r)}>
              <td><label className="ad-check"><input type="checkbox" /></label></td>
              <td>
                <p className="ad-cell-strong">{r.name}</p>
                <p className="ad-cell-muted">{r.id}</p>
              </td>
              <td>{r.vessel}</td>
              <td>
                <span className={`ad-pill ad-pill--${r.statusKey}`}>
                  <span className="ad-pill__dot"></span>{r.status}
                </span>
              </td>
              <td>
                <div className="ad-cell-avatar">
                  <span className="ad-avatar ad-avatar--sm">{r.initials}</span>
                  {r.captain}
                </div>
              </td>
              <td>{r.eta}</td>
              <td className="ad-cell-muted">{r.updated}</td>
              <td>
                <button aria-label="More" className="ad-icon-btn ad-icon-btn--ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="ad-table-foot">
        <span className="ad-cell-muted">Page 1 of 4</span>
        <div style={{display:'flex', gap: 8}}>
          <button className="btn btn--secondary btn--sm">Previous</button>
          <button className="btn btn--secondary btn--sm">Next</button>
        </div>
      </div>
    </div>
  );
};

window.Table = Table;
