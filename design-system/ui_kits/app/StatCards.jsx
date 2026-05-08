// node-mirror: /Stat-Cards/Stat-Cards-1
const StatCards = () => {
  const stats = [
    { label: 'Active voyages', value: '12', delta: '+2', up: true, hint: 'vs. last week' },
    { label: 'On-time arrivals', value: '94.2%', delta: '+1.4 pts', up: true, hint: 'rolling 30d' },
    { label: 'Avg. handover time', value: '6.4 hrs', delta: '−0.8 hrs', up: true, hint: 'vs. last week' },
    { label: 'Open incidents', value: '3', delta: '+1', up: false, hint: 'unchanged severity' },
  ];
  return (
    <div className="ad-stats">
      {stats.map((s) => (
        <div key={s.label} className="ad-stat">
          <p className="ad-stat__label">{s.label}</p>
          <p className="ad-stat__value">{s.value}</p>
          <p className={`ad-stat__delta ${s.up ? 'is-up' : 'is-down'}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {s.up ? <path d="m5 15 7-7 7 7"/> : <path d="m5 9 7 7 7-7"/>}
            </svg>
            {s.delta} <span>{s.hint}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

window.StatCards = StatCards;
