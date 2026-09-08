/* ============================================================
   Security 360 — mockup interactivity
   ============================================================ */

/* ---------------------------------------------------------- *
 * 1. Icon library (inline SVG strings, injected by data-icon)
 * ---------------------------------------------------------- */
const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5S6 4 9 4s5 1.5 5 1.5v14S12 18 9 18s-5 1.5-5 1.5z"/><path d="M14 5.5S16 4 19 4s5 1.5 5 1.5"/><path d="M14 5.5v14s1.7-1 3.5-1.3"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4.5" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><path d="M8.5 12h7M8.5 16h7"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 5 13.5h5.5L11 21l8-11h-5.5z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.8 20c0-3.4 2.8-5.7 6.2-5.7s6.2 2.3 6.2 5.7"/><circle cx="17.5" cy="8.5" r="2.4"/><path d="M15.7 14.5c2.7.3 4.8 2.3 4.8 5.5"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10"/><path d="M4 7h6M14 7h6"/><path d="M4 7 1.5 12.5a2.7 2.7 0 0 0 5 0z"/><path d="M20 7l-2.5 5.5a2.7 2.7 0 0 0 5 0z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/><path d="M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8 12 4l10 4-10 4z"/><path d="M6 10.5v4.5c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M21 8v6.5"/></svg>',
  'chevron-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  'chevron-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M9.3 9.3a2.7 2.7 0 1 1 3.9 2.4c-.9.5-1.2 1-1.2 2.1"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r=".6" fill="currentColor" stroke="none"/></svg>',
  'info-solid': '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><rect x="11" y="10" width="2" height="7" fill="#0c1930"/><rect x="11" y="6.5" width="2" height="2" fill="#0c1930"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 9.5 18 20 6"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v5"/><circle cx="12" cy="16.3" r=".6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="9.5"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 21h22z"/><rect x="11" y="9" width="2" height="6" fill="#0c1930"/><rect x="11" y="16.5" width="2" height="2" fill="#0c1930"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z"/><path d="M8.5 12l2.3 2.3L15.5 10"/></svg>',
  dots: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>',
  'clipboard-sm': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4.5" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><path d="M8.5 12h7M8.5 16h7"/></svg>',
  triangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 2 20h20z"/><path d="M12 9.5v5"/><circle cx="12" cy="17" r=".5" fill="currentColor" stroke="none"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9.5 12 4l5 5.5"/><path d="M12 4.5V15"/><path d="M4.5 15.5V18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.5"/></svg>',
  userplus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9.5" cy="8.5" r="3.3"/><path d="M3 20c0-3.4 2.9-5.8 6.5-5.8s6.5 2.4 6.5 5.8"/><path d="M18.5 8v5M16 10.5h5"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z"/><path d="M14 3.5V8h4"/><path d="M8.5 13h7M8.5 16.5h7"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};

function injectIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

/* ---------------------------------------------------------- *
 * 2. Toast helper
 * ---------------------------------------------------------- */
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ---------------------------------------------------------- *
 * 3. Tooltip helper (for info buttons)
 * ---------------------------------------------------------- */
function setupTooltips() {
  const tip = document.getElementById('tooltip');
  document.querySelectorAll('[data-tip]').forEach(el => {
    const show = () => {
      tip.textContent = el.getAttribute('data-tip');
      const rect = el.getBoundingClientRect();
      tip.style.left = Math.min(rect.left, window.innerWidth - 260) + 'px';
      tip.style.top = (rect.bottom + 8) + 'px';
      tip.classList.add('show');
    };
    const hide = () => tip.classList.remove('show');
    el.addEventListener('mouseenter', show);
    el.addEventListener('mouseleave', hide);
    el.addEventListener('click', (e) => { e.preventDefault(); show(); setTimeout(hide, 3000); });
  });
}

/* ---------------------------------------------------------- *
 * 4. Gauge renderer (semi-circle SVG gauge)
 *    mode: 'zones'    -> static 4-colour scale + marker dot at value
 *    mode: 'progress' -> single-colour progress arc over a grey track
 * ---------------------------------------------------------- */
function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}
function arcPath(cx, cy, r, startAngle, endAngle) {
  const start = polar(cx, cy, r, startAngle);
  const end = polar(cx, cy, r, endAngle);
  const largeArc = Math.abs(startAngle - endAngle) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function renderGauge(containerId, value, opts) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const cx = 100, cy = 100, r = 80, sw = 16;
  const valueAngle = 180 - (value / 100) * 180;

  let inner = '';

  if (opts.mode === 'zones') {
    const zoneColors = opts.zoneColors || ['#22c55e', '#eab308', '#f97316', '#ef4444'];
    const bounds = [180, 135, 90, 45, 0];
    for (let i = 0; i < 4; i++) {
      inner += `<path d="${arcPath(cx, cy, r, bounds[i], bounds[i + 1])}" fill="none" stroke="${zoneColors[i]}" stroke-width="${sw}" stroke-linecap="round" opacity="0.9"/>`;
    }
    // marker dot at current value
    const marker = polar(cx, cy, r, valueAngle);
    inner += `<circle cx="${marker.x}" cy="${marker.y}" r="9" fill="#0c1930" stroke="#fff" stroke-width="3"/>`;
  } else {
    const trackColor = opts.trackColor || '#16283f';
    const fillColor = opts.fillColor || '#3fc1ff';
    inner += `<path d="${arcPath(cx, cy, r, 180, 0)}" fill="none" stroke="${trackColor}" stroke-width="${sw}" stroke-linecap="round"/>`;
    inner += `<path class="gauge-fill" d="${arcPath(cx, cy, r, 180, 0)}" fill="none" stroke="${fillColor}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }

  el.innerHTML = `<svg viewBox="0 0 200 105">${inner}</svg>`;

  if (opts.mode !== 'zones') {
    const path = el.querySelector('.gauge-fill');
    const len = Math.PI * r; // semicircle length
    path.style.strokeDasharray = `${len} ${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.style.transition = 'stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = `${len - (len * value) / 100}`;
      });
    });
  }
}

/* ---------------------------------------------------------- *
 * 5. Sparkline renderer
 * ---------------------------------------------------------- */
function renderSparkline(svgId, data, color) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  const w = 120, h = 32, pad = 3;
  const min = Math.min(...data), max = Math.max(...data);
  const span = (max - min) || 1;
  const step = (w - pad * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / span) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');
  svg.innerHTML = `
    <polyline points="${points}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    ${data.map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - ((v - min) / span) * (h - pad * 2);
      return i === data.length - 1
        ? `<circle cx="${x}" cy="${y}" r="3" fill="${color}"/>`
        : '';
    }).join('')}
  `;
}

/* ---------------------------------------------------------- *
 * 6. Risk heat map
 * ---------------------------------------------------------- */
const HEATMAP_LIKELIHOOD = ['Very High', 'High', 'Medium', 'Low', 'Very Low'];
const HEATMAP_IMPACT = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
// rank 5..1 for likelihood rows (top to bottom), rank 1..5 for impact columns
const CELL_COLORS = ['#14532d', '#1c7a3c', '#3f9140', '#6ea838', '#a8b23a', '#d4a017', '#e08325', '#e2621f', '#d63a2b', '#b91c1c'];

const HEATMAP_BUBBLES = {
  'High|Medium': { count: 2, outline: false },
  'High|High': { count: 6, outline: false },
  'High|Very High': { count: 5, outline: false },
  'Medium|High': { count: 5, outline: false },
  'Low|Low': { count: 4, outline: true },
  'Low|Medium': { count: 7, outline: true },
};

function renderHeatmap(likelihoodOrder = 'desc', impactOrder = 'asc') {
  const grid = document.getElementById('heatmapGrid');
  if (!grid) return;

  const rows = likelihoodOrder === 'desc' ? HEATMAP_LIKELIHOOD : [...HEATMAP_LIKELIHOOD].reverse();
  const cols = impactOrder === 'asc' ? HEATMAP_IMPACT : [...HEATMAP_IMPACT].reverse();

  let html = '';
  rows.forEach((rowLabel) => {
    html += `<div class="hm-rowlabel">${rowLabel}</div>`;
    cols.forEach((colLabel) => {
      const likelihoodRank = 5 - HEATMAP_LIKELIHOOD.indexOf(rowLabel); // Very High=5 ... Very Low=1
      const impactRank = HEATMAP_IMPACT.indexOf(colLabel) + 1; // Very Low=1 ... Very High=5
      const sum = likelihoodRank + impactRank; // 2..10
      const color = CELL_COLORS[sum - 2];
      const bubbleKey = `${rowLabel}|${colLabel}`;
      const bubble = HEATMAP_BUBBLES[bubbleKey];
      html += `<div class="hm-cell" style="background:${color}" data-likelihood="${rowLabel}" data-impact="${colLabel}" data-count="${bubble ? bubble.count : 0}">`;
      if (bubble) {
        html += `<span class="hm-bubble${bubble.outline ? ' outline' : ''}">${bubble.count}</span>`;
      }
      html += `</div>`;
    });
  });
  // bottom axis label row (empty corner + column labels)
  html += `<div></div>`;
  cols.forEach(c => { html += `<div class="hm-collabel">${c}</div>`; });

  grid.innerHTML = html;

  grid.querySelectorAll('.hm-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const l = cell.getAttribute('data-likelihood');
      const i = cell.getAttribute('data-impact');
      const c = cell.getAttribute('data-count');
      showToast(`Likelihood: ${l} · Impact: ${i} · ${c > 0 ? c + ' risk(s) logged' : 'No risks logged'}`);
    });
  });
}

/* ---------------------------------------------------------- *
 * 7. Chart.js — Supplier donut & Threat trends line chart
 * ---------------------------------------------------------- */
function setupCharts() {
  if (typeof Chart === 'undefined') return;

  Chart.defaults.color = '#9fb0c9';
  Chart.defaults.font.family = "'Segoe UI', sans-serif";

  const donutCtx = document.getElementById('supplierDonut');
  if (donutCtx) {
    new Chart(donutCtx, {
      type: 'doughnut',
      data: {
        labels: ['High Risk', 'Medium Risk', 'Low Risk'],
        datasets: [{
          data: [12, 28, 32],
          backgroundColor: ['#ef4444', '#f97316', '#22c55e'],
          borderColor: '#0c1930',
          borderWidth: 3,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: '72%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0a1425',
            borderColor: '#1b2c48',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.parsed} suppliers`,
            },
          },
        },
        animation: { animateRotate: true, duration: 900 },
      },
    });
  }

  const trendsCtx = document.getElementById('trendsChart');
  if (trendsCtx) {
    const labels = ['Apr 24', 'May 1', 'May 8', 'May 15', 'May 22'];
    const expand = (arr) => {
      // interpolate to give a denser line similar to the design (weekly + mid points)
      const out = [];
      for (let i = 0; i < arr.length - 1; i++) {
        out.push(arr[i]);
        out.push(Math.round((arr[i] + arr[i + 1]) / 2 + (Math.random() * 6 - 3)));
      }
      out.push(arr[arr.length - 1]);
      return out;
    };
    const denseLabels = ['Apr 24', '', 'May 1', '', 'May 8', '', 'May 15', '', 'May 22'];
    const malware = expand([40, 55, 62, 78, 88]);
    const phishing = expand([32, 38, 45, 48, 60]);
    const vulns = expand([12, 18, 20, 32, 48]);

    new Chart(trendsCtx, {
      type: 'line',
      data: {
        labels: denseLabels,
        datasets: [
          { label: 'Malware', data: malware, borderColor: '#ef4444', backgroundColor: '#ef4444', tension: 0.35, pointRadius: 3, borderWidth: 2 },
          { label: 'Phishing', data: phishing, borderColor: '#eab308', backgroundColor: '#eab308', tension: 0.35, pointRadius: 3, borderWidth: 2 },
          { label: 'Vulnerabilities', data: vulns, borderColor: '#3b82f6', backgroundColor: '#3b82f6', tension: 0.35, pointRadius: 3, borderWidth: 2 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'bottom',
            labels: { usePointStyle: true, boxWidth: 8, padding: 16 },
          },
          tooltip: {
            backgroundColor: '#0a1425',
            borderColor: '#1b2c48',
            borderWidth: 1,
            padding: 10,
          },
        },
        scales: {
          y: {
            min: 0, max: 100,
            grid: { color: '#16273f' },
            ticks: { stepSize: 25 },
          },
          x: {
            grid: { display: false },
          },
        },
      },
    });
  }
}

/* ---------------------------------------------------------- *
 * 8. Dropdown panels (notifications / help / user menu)
 * ---------------------------------------------------------- */
function setupDropdowns() {
  const panels = {
    notifBtn: document.getElementById('notifPanel'),
    helpBtn: document.getElementById('helpPanel'),
    userBlock: document.getElementById('userPanel'),
  };

  function closeAll(except) {
    Object.values(panels).forEach(p => { if (p !== except) p.classList.remove('open'); });
  }

  Object.entries(panels).forEach(([btnId, panel]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !panel.classList.contains('open');
      closeAll(panel);
      panel.classList.toggle('open', willOpen);
      if (btnId === 'notifBtn' && willOpen) {
        document.getElementById('notifBadge').classList.add('hidden');
      }
    });
  });

  document.addEventListener('click', () => closeAll(null));
  document.querySelectorAll('.dropdown-panel').forEach(p => {
    p.addEventListener('click', (e) => e.stopPropagation());
  });

  document.querySelectorAll('#userPanel .dropdown-link').forEach(link => {
    link.addEventListener('click', () => {
      showToast(`${link.textContent} clicked`);
      closeAll(null);
    });
  });
}

/* ---------------------------------------------------------- *
 * 9. Sidebar nav + collapse
 * ---------------------------------------------------------- */
function setupSidebar() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const label = item.querySelector('.nav-label').textContent;
      if (item.getAttribute('data-nav') !== 'home') {
        showToast(`${label}: section not built in this mockup`);
      }
    });
  });

  const collapseBtn = document.getElementById('collapseBtn');
  collapseBtn.addEventListener('click', () => {
    document.querySelector('.app').classList.toggle('collapsed');
  });
}

/* ---------------------------------------------------------- *
 * 10. Generic toast / navigation links + quick actions
 * ---------------------------------------------------------- */
function setupToastTriggers() {
  document.querySelectorAll('[data-toast]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (el.tagName === 'A') e.preventDefault();
      showToast(el.getAttribute('data-toast'));
    });
  });
}

/* ---------------------------------------------------------- *
 * 11. Heat map filter dropdowns
 * ---------------------------------------------------------- */
function setupHeatmapFilters() {
  const likSel = document.getElementById('likelihoodOrder');
  const impSel = document.getElementById('impactOrder');
  const update = () => renderHeatmap(likSel.value, impSel.value);
  likSel.addEventListener('change', update);
  impSel.addEventListener('change', update);
}

/* ---------------------------------------------------------- *
 * 12. Init
 * ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.app') || (() => {
    // wrap body content in .app if not present (safety no-op; index.html already has it)
  })();

  injectIcons();
  setupTooltips();
  setupDropdowns();
  setupSidebar();
  setupToastTriggers();
  setupHeatmapFilters();

  renderGauge('gaugeRisk', 58, { mode: 'zones', zoneColors: ['#22c55e', '#eab308', '#f97316', '#ef4444'] });
  renderGauge('gaugeMaturity', 67, { mode: 'progress', trackColor: '#16283f', fillColor: '#3fc1ff' });

  renderSparkline('sparkRisk', [46, 50, 48, 53, 51, 55, 58], '#22c55e');
  renderSparkline('sparkMaturity', [58, 60, 59, 63, 65, 64, 67], '#3fc1ff');

  renderHeatmap('desc', 'asc');
  setupCharts();
});
