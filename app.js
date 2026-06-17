// ── CRITICAL MINERALS PLATFORM — APPLICATION LOGIC ──
// Rule: No content here. Reads from DB (data.js). Renders to DOM.
// Content change = edit data.js only. This file never changes for content.

// ══════════════════════════════════════════════
// STATE — single source of truth
// ══════════════════════════════════════════════
const state = {
  lang: localStorage.getItem('cmLang') || 'en',
  activeTab: 'basics',
  selectedREE: null,
  selectedMineral: null,
  selectedPlayer: null,
  scenarioInputs: {},
  modalClosed: false,
  vpIdx: 0,
  triviaIdx: 0,
  vpTimer: null,
};

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════
const t  = (obj) => obj ? (obj[state.lang] || obj.en || '') : '';
const el = (id)  => document.getElementById(id);
const src = (key) => DB.sources[key] || null;

function srcLink(key) {
  const s = src(key);
  if (!s) return '';
  return `<a href="${s.url}" target="_blank" class="src-link">${s.title} ↗</a>`;
}

function srcLinks(keys) {
  if (!keys || !keys.length) return '';
  return `<div class="src-row"><span class="src-label">${t(DB.ui.sourcesLabel)}</span>${keys.map(k => srcLink(k)).join('')}</div>`;
}

function factBox(text) {
  return `<div class="fact-box"><div class="fact-label">${t(DB.ui.factLabel)}</div><div class="fact-text">${text}</div></div>`;
}

function implBox(text) {
  return `<div class="impl-box"><div class="impl-label">${t(DB.ui.implLabel)}</div><div class="impl-text">${text}</div></div>`;
}

function inferenceBox(text) {
  return `<div class="inference-box"><span class="inference-tag">${t(DB.ui.inferenceLbl)}</span> ${text}</div>`;
}

// ══════════════════════════════════════════════
// ROUTER — switch tabs
// ══════════════════════════════════════════════
function switchTab(id, el_) {
  state.activeTab = id;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));
  if (el_) el_.classList.add('active');
  const pane = el('pane-' + id);
  if (pane) pane.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════════════════════════════
// LANGUAGE ENGINE
// ══════════════════════════════════════════════
function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('cmLang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('mr-mode', lang === 'mr');
  renderAll();
}

function toggleLanguage() {
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    setLanguage(state.lang === 'en' ? 'mr' : 'en');
    document.body.classList.remove('lang-switching');
  }, 150);
}

// ══════════════════════════════════════════════
// RENDER ALL — called on init and language change
// ══════════════════════════════════════════════
// renderAll() is defined later (canonical version calls every tab renderer).

// ══════════════════════════════════════════════
// HEADER
// ══════════════════════════════════════════════
function renderHeader() {
  const eyebrow = document.querySelector('.header-eyebrow');
  const title   = document.querySelector('.header-title');
  const sub     = document.querySelector('.header-sub');
  if (eyebrow) eyebrow.textContent = t(DB.meta.title);
  if (title)   title.textContent   = t(DB.meta.subtitle);
  if (sub)     sub.textContent     = t(DB.meta.tagline);
}

function renderLangToggle() {
  const btn = el('langToggle');
  if (btn) btn.textContent = t(DB.ui.langToggle);
}

// ══════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════
function renderNav() {
  const nav = el('tabNav');
  if (!nav) return;
  nav.innerHTML = DB.tabs.map((tab, i) =>
    `<button class="tab-btn${state.activeTab === tab.id ? ' active' : ''}"
      onclick="switchTab('${tab.id}', this)">${t(tab.label)}</button>`
  ).join('');
}

// ══════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════
function renderModal() {
  renderVP();
  renderTrivia();
  const enterBtn = document.querySelector('.modal-enter');
  const nextBtn  = document.querySelector('.modal-skip');
  const trivLbl  = document.querySelector('.modal-trivia-label');
  if (enterBtn) enterBtn.textContent = t(DB.ui.enterModal);
  if (nextBtn)  nextBtn.textContent  = t(DB.ui.nextLens);
  if (trivLbl)  trivLbl.textContent  = t(DB.ui.triviaLabel);
}

function renderVP(animate) {
  const vp    = DB.viewpoints[state.vpIdx];
  const label = el('vpLabel');
  const text  = el('vpText');
  if (!label || !text || !vp) return;
  if (animate) {
    label.style.opacity = '0';
    text.style.opacity  = '0';
    setTimeout(() => {
      label.textContent = t(vp.label);
      text.textContent  = t(vp.body);
      label.style.opacity = '1';
      text.style.opacity  = '1';
    }, 200);
  } else {
    label.textContent = t(vp.label);
    text.textContent  = t(vp.body);
  }
  // dots
  const dots = document.querySelectorAll('.vp-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === state.vpIdx));
}

function nextVP() {
  state.vpIdx = (state.vpIdx + 1) % DB.viewpoints.length;
  renderVP(true);
  resetVPTimer();
}

function resetVPTimer() {
  clearInterval(state.vpTimer);
  state.vpTimer = setInterval(nextVP, 9000);
}

function renderTrivia() {
  const idx   = state.triviaIdx;
  const item  = DB.trivia[idx % DB.trivia.length];
  const box   = el('triviaText');
  if (box) box.textContent = t(item);
}

function enterPlatform() {
  el('openingModal').style.display = 'none';
  state.modalClosed = true;
  clearInterval(state.vpTimer);
}

// ══════════════════════════════════════════════
// TAB 1 — THE BASICS
// ══════════════════════════════════════════════
function renderTab1() {
  const pane = el('pane-basics');
  if (!pane) return;
  const data = DB.tab_basics;
  let html = '';

  data.sections.forEach(sec => {
    if (sec.id === 'basics_13') {
      // REE Explorer — rendered inline at correct position (1.3, between 1.2 and 1.4)
      const L = state.lang;
      html += `<section class="section">
        <div class="sec-label">${t(sec.label)}</div>
        <div class="sec-title">${t(sec.title)}</div>
        <div class="sec-intro">${t(sec.intro)}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text2)"><div style="width:10px;height:10px;border-radius:2px;background:#BFDBFE;flex-shrink:0"></div>${L==='mr'?'हलके REE':'Light REEs'}</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text2)"><div style="width:10px;height:10px;border-radius:2px;background:#FECACA;flex-shrink:0"></div>${L==='mr'?'जड REE':'Heavy REEs'}</div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text2)"><div style="width:10px;height:10px;border-radius:2px;background:#A7F3D0;flex-shrink:0"></div>Sc &amp; Y</div>
        </div>
        <div id="reeGrid"></div>
        <div id="reeDetail"></div>
        ${sec.globalProd ? `<div style="margin-top:16px;padding:12px 16px;background:var(--surface2);border-radius:var(--radius);display:flex;gap:16px;flex-wrap:wrap">
          <div><span style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:var(--accent)">${sec.globalProd.stat}</span><span style="font-size:11px;color:var(--muted);margin-left:8px">${t(sec.globalProd.label)}</span></div>
          <div><span style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:var(--accent)">${sec.chinaShare.stat}</span><span style="font-size:11px;color:var(--muted);margin-left:8px">${t(sec.chinaShare.label)}</span></div>
        </div>` : ''}
        ${implBox(t(sec.keyInsight))}
        ${srcLinks(sec.sources)}
      </section>`;
      return;
    }

    html += `<section class="section">
      <div class="sec-label">${t(sec.label)}</div>
      <div class="sec-title">${t(sec.title)}</div>
      <div class="sec-intro">${t(sec.intro)}</div>`;

    // Section-specific renderers
    if (sec.framework)  html += renderFramework(sec.framework);
    if (sec.matrix)     html += renderMatrix(sec.matrix);
    if (sec.insights)   html += renderInsights(sec.insights);
    if (sec.quote)      html += renderQuote(sec.quote);
    if (sec.definitions) html += renderDefinitions(sec);
    if (sec.stages)     html += renderStages(sec);
    html += srcLinks(sec.sources);
    html += `</section>`;
  });
  pane.innerHTML = html;
  renderREEGrid();
}

function renderFramework(fw) {
  return `
    <div class="framework-box">
      <div class="framework-label">${t(fw.label)}</div>
      <p class="framework-intro">${t(fw.intro)}</p>
      <div class="param-grid">
        ${fw.params.map(p => `
          <div class="param-card">
            <div class="param-name">${t(p.name)}</div>
            <div class="param-desc">${t(p.desc)}</div>
          </div>`).join('')}
      </div>
      <div class="formula-box">${t(fw.formula)}</div>
    </div>`;
}

function renderMatrix(mx) {
  const L = state.lang;
  return `
    <div class="matrix-wrap">
      <div class="matrix-title">${t(mx.label)}</div>
      <div class="matrix-grid">
        <div class="m-ay"><span>${L === 'mr' ? 'आर्थिक महत्त्व →' : 'Economic Importance →'}</span></div>
        <div class="m-cell m-hl">
          <div class="m-cell-title">${L === 'mr' ? 'निगराणी' : 'Monitor'}</div>
          <div class="m-cell-ex">${L === 'mr' ? 'उच्च महत्त्व, कमी पुरवठा धोका. उदा. लोहखनिज, तांबे.' : 'High importance, low supply risk. Diverse global sources. E.g. Iron ore, copper.'}</div>
        </div>
        <div class="m-cell m-hh">
          <div class="m-cell-title">${L === 'mr' ? '⚠ महत्त्वाचे' : '⚠ CRITICAL'}</div>
          <div class="m-cell-ex">${L === 'mr' ? 'उच्च महत्त्व + उच्च पुरवठा धोका. निओडीमियम, डिस्प्रोसियम, कोबाल्ट, गॅलियम.' : 'High importance + high supply risk. Neodymium, Dysprosium, Cobalt, Gallium.'}</div>
        </div>
        <div class="m-cell m-ll">
          <div class="m-cell-title">${L === 'mr' ? 'महत्त्वाचे नाही' : 'Not Critical'}</div>
          <div class="m-cell-ex">${L === 'mr' ? 'कमी महत्त्व, कमी पुरवठा धोका. विपुल आणि व्यापकपणे उपलब्ध.' : 'Low importance, low supply risk. Abundant and widely sourced. Limestone.'}</div>
        </div>
        <div class="m-cell m-lh">
          <div class="m-cell-title">${L === 'mr' ? 'धोरणात्मक लक्ष' : 'Strategic Watch'}</div>
          <div class="m-cell-ex">${L === 'mr' ? 'पुरवठा असुरक्षित पण मर्यादित आर्थिक प्रभाव. मागणी वाढीसाठी निरीक्षण.' : 'Supply vulnerable but limited economic impact. Monitor for demand growth.'}</div>
        </div>
        <div class="m-ax">
          <span>${L === 'mr' ? 'कमी पुरवठा धोका' : 'Low Supply Risk'}</span>
          <span>${L === 'mr' ? 'जास्त पुरवठा धोका →' : 'High Supply Risk →'}</span>
        </div>
      </div>
      <p class="matrix-note">${t(mx.note)}</p>
    </div>`;
}

function renderInsights(insights) {
  return insights.map(ins => {
    if (ins.type === 'fact')      return factBox(t(ins.text));
    if (ins.type === 'inference') return inferenceBox(t(ins.text));
    if (ins.type === 'impl')      return implBox(t(ins.text));
    return '';
  }).join('');
}

function renderQuote(q) {
  return `<div class="quote-block">
    <div class="quote-text">${t(q.text)}</div>
    <div class="quote-attrib">— ${q.attrib}</div>
    ${srcLink(q.src)}
  </div>`;
}

function renderDefinitions(sec) {
  const defs = sec.definitions;
  return `
    <div class="def-grid">
      ${defs.map(d => `
        <div class="def-card">
          <div class="def-flag">${d.flag}</div>
          <div class="def-jurisdiction">${d.jurisdiction}</div>
          <div class="def-count">${t(d.count)}</div>
          <div class="def-text">"${t(d.text)}"</div>
          <div class="def-key">${t(d.key)}</div>
          ${srcLink(d.src)}
        </div>`).join('')}
    </div>
    ${sec.tableNote ? `<p class="table-note">${t(sec.tableNote)}</p>` : ''}`;
}

function renderStages(sec) {
  const stages = sec.stages;
  return `
    <div class="stages-list">
      ${stages.map(s => `
        <div class="stage-row${s.chokepoint ? ' chokepoint' : ''}">
          <div class="stage-num">${s.num}</div>
          <div class="stage-body">
            <div class="stage-name">${t(s.name)}${s.chokepoint ? ' <span class="choke-badge">★ CHOKEPOINT</span>' : ''}</div>
            <div class="stage-desc">${t(s.desc)}</div>
            ${s.stat ? `<div class="stage-stat">${t(s.stat)}</div>` : ''}
          </div>
        </div>`).join('')}
    </div>
    ${sec.keyInsight ? implBox(t(sec.keyInsight)) : ''}`;
}

// ══════════════════════════════════════════════
// REE GRID (interactive, Tab 1)
// ══════════════════════════════════════════════
const rees = [
  {num:57,sym:'La',name:'Lanthanum',type:'light',use:'Camera lenses, hydrogen storage, NiMH batteries',producer:'China ~85%',india:'Present in Indian coastal monazite',fact:'Used in nickel-metal hydride batteries — the precursor to lithium-ion in hybrid vehicles'},
  {num:58,sym:'Ce',name:'Cerium',type:'light',use:'Catalytic converters, glass polishing, petroleum refining',producer:'China ~85%',india:'Most abundant REE in Indian monazite (~48% of REE content)',fact:"Most abundant REE — more common in Earth's crust than copper. The \"rare\" in rare earths is a misnomer."},
  {num:59,sym:'Pr',name:'Praseodymium',type:'light',use:'NdFeB permanent magnets, aircraft engines',producer:'China ~85%',india:'Present in Indian monazite',fact:'Often processed with Nd as "NdPr" — both essential for EV motors and wind turbines'},
  {num:60,sym:'Nd',name:'Neodymium',type:'light',use:'NdFeB magnets — EV motors, wind turbines, hard drives',producer:'China dominant at mining and refining',india:'Present in monazite (locked under Atomic Energy Act 1962)',fact:'Most strategically critical REE for the energy transition. No viable permanent magnet substitute exists today.'},
  {num:61,sym:'Pm',name:'Promethium',type:'light',use:'Nuclear batteries, research only',producer:'Synthetic — produced in nuclear reactors',india:'Not naturally occurring in extractable quantities',fact:'Only REE with no stable isotopes. Not commercially mined anywhere in the world.'},
  {num:62,sym:'Sm',name:'Samarium',type:'light',use:'SmCo high-temperature magnets, military systems',producer:'China ~85%',india:'Trace amounts in monazite',fact:'SmCo magnets function at higher temperatures than NdFeB — used in missiles, aircraft, extreme environments'},
  {num:63,sym:'Eu',name:'Europium',type:'light',use:'Red/blue phosphors in LED displays, banknote security',producer:'China around 90%',india:'Trace amounts',fact:'The red glow in euro banknote UV security features uses europium.'},
  {num:64,sym:'Gd',name:'Gadolinium',type:'heavy',use:'MRI contrast agents, nuclear reactor shielding',producer:'China around 90%',india:'Trace',fact:'Unusual magnetic properties make it essential for medical MRI imaging worldwide'},
  {num:65,sym:'Tb',name:'Terbium',type:'heavy',use:'NdFeB magnet additive (high-temp performance), green phosphors',producer:'China around 90%',india:'Negligible',fact:'One of 7 heavy REEs restricted by China in April 2025 — directly disrupting EV and wind turbine supply chains'},
  {num:66,sym:'Dy',name:'Dysprosium',type:'heavy',use:'NdFeB magnet additive — essential for EV motors at high temperatures',producer:'China near-monopoly on separation',india:'Negligible domestic reserves',fact:'Restricted April 2025. Manufacturers tried to substitute with holmium — China restricted that too in October 2025.'},
  {num:67,sym:'Ho',name:'Holmium',type:'heavy',use:'Powerful electromagnets, nuclear reactor control rods',producer:'China around 90%',india:'Negligible',fact:"Added to China's October 2025 export controls after manufacturers tried to use it as a substitute for dysprosium"},
  {num:68,sym:'Er',name:'Erbium',type:'heavy',use:'Fibre optic signal amplifiers, nuclear technology',producer:'China around 90%',india:'Negligible',fact:"Added to China's October 2025 expanded control list. Critical for fibre optic telecommunications."},
  {num:69,sym:'Tm',name:'Thulium',type:'heavy',use:'Portable X-ray machines, high-power lasers',producer:'China around 90%',india:'Negligible',fact:'Rarest naturally occurring REE with significant commercial use.'},
  {num:70,sym:'Yb',name:'Ytterbium',type:'heavy',use:'Fibre lasers, atomic clocks, cancer radiation therapy',producer:'China around 90%',india:'Negligible',fact:"Added to China's October 2025 expanded control list. Used in industrial fibre lasers globally."},
  {num:71,sym:'Lu',name:'Lutetium',type:'heavy',use:'PET scan detectors, targeted cancer therapy (Lu-177)',producer:'China around 90%',india:'Negligible',fact:'Most expensive REE per kilogram. Lu-177 PSMA is a breakthrough cancer treatment — supply security has direct medical implications.'},
  {num:21,sym:'Sc',name:'Scandium',type:'special',use:'Aerospace aluminium alloys, solid oxide fuel cells',producer:'China, Russia, Ukraine',india:'Limited deposits, not commercially exploited',fact:'Even 0.1–0.5% scandium dramatically strengthens aluminium alloys for aerospace and military applications'},
  {num:39,sym:'Y',name:'Yttrium',type:'special',use:'LED phosphors, superconductors, NdFeB additive, cancer treatment',producer:'China around 90%',india:'Present in Indian beach sand deposits alongside monazite',fact:'Classified as heavy REE by chemical behaviour. Restricted by China in April 2025.'}
];

function renderREEGrid() {
  const grid = el('reeGrid');
  if (!grid) return;
  grid.innerHTML = '';
  rees.forEach((r, i) => {
    const c = document.createElement('div');
    c.className = `ree-cell ${r.type}`;
    c.setAttribute('tabindex', '0');
    c.innerHTML = `<div class="ree-num">${r.num}</div><div class="ree-sym">${r.sym}</div><div class="ree-nm">${r.name}</div>`;
    c.onclick = () => showREE(i, c);
    c.onkeypress = (e) => { if (e.key === 'Enter') showREE(i, c); };
    grid.appendChild(c);
  });
}

function showREE(idx, cell) {
  document.querySelectorAll('.ree-cell').forEach(c => c.classList.remove('selected'));
  if (cell) cell.classList.add('selected');
  state.selectedREE = idx;
  const r = rees[idx];
  const panel = el('reeDetail');
  if (!panel) return;
  panel.style.display = 'block';
  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted)">${r.num}</div>
        <div style="font-size:28px;font-weight:700;color:var(--primary);font-family:'DM Serif Display',serif">${r.sym}</div>
        <div style="font-size:15px;font-weight:600;color:var(--text)">${r.name}</div>
      </div>
      <span class="ree-type-badge ${r.type}">${r.type.toUpperCase()}</span>
    </div>
    <div class="ree-detail-row"><span class="ree-detail-label">${state.lang === 'mr' ? 'काय करते' : 'What it does'}</span><span>${r.use}</span></div>
    <div class="ree-detail-row"><span class="ree-detail-label">${state.lang === 'mr' ? 'प्रमुख उत्पादक' : 'Top producer'}</span><span>${r.producer}</span></div>
    <div class="ree-detail-row"><span class="ree-detail-label">${state.lang === 'mr' ? 'भारताची स्थिती' : "India's position"}</span><span>${r.india}</span></div>
    <div class="ree-fact-box">${r.fact}</div>`;
}

// ══════════════════════════════════════════════
// TAB 8 — SCENARIO ENGINE
// ══════════════════════════════════════════════

// Initialise sliderValues from DB defaults
function initScenarioInputs() {
  if (Object.keys(state.scenarioInputs).length > 0) return; // already init
  DB.tab_scenarios.engine.drivers.forEach(d => {
    state.scenarioInputs[d.id] = d.default;
  });
}

function computeScore() {
  const drivers = DB.tab_scenarios.engine.drivers;
  let score = 0;
  drivers.forEach(d => {
    const val = state.scenarioInputs[d.id] || d.default;
    const norm = d.invert ? (10 - val) : val;
    score += (norm / 10) * d.weight * 100;
  });
  return Math.round(Math.min(100, Math.max(0, score)));
}

function getScenarioBand(score) {
  return DB.tab_scenarios.engine.bands.find(b => score >= b.min && score <= b.max)
    || DB.tab_scenarios.engine.bands[2];
}

function renderTab8() {
  const pane = el('pane-scenarios');
  if (!pane) return;
  initScenarioInputs();
  const data = DB.tab_scenarios;

  pane.innerHTML = `
    <!-- 8.0 Header -->
    <section class="section">
      <div class="sec-label">${t(data.intro.label)}</div>
      <div class="sec-title">${t(data.intro.title)}</div>
      <div class="sec-intro">${t(data.intro.body).split('\n\n').map(p => `<p style="margin:0 0 12px">${p}</p>`).join('')}</div>
      <div class="disclaimer-box">${t(DB.ui.disclaimer)}</div>
    </section>

    <!-- 8.1 Scenario Engine -->
    <section class="section">
      <div class="sec-label">${t(data.engine.label)}</div>
      <div class="sec-title">${t(data.engine.title)}</div>
      <div class="sec-intro">${state.lang==='mr'?'खाली सहा चालक समायोजित करा — परिणाम लगेच अद्यतनित होतो.':'Adjust the six drivers below. The outcome band updates in real time.'}</div>
      <div id="sliderGrid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:18px 0"></div>
      <div id="scenarioOutput" style="margin-top:20px"></div>
    </section>

    <!-- 8.2 Timeline -->
    <section class="section">
      <div class="sec-label">${t(data.timeline.label)}</div>
      <div class="sec-title">${t(data.timeline.title)}</div>
      <div class="sec-intro">${t(data.timeline.intro)}</div>
      <div id="timelineDiv"></div>
      ${srcLinks(data.timeline.sources)}
    </section>

    <!-- 8.3 What to Watch -->
    <section class="section">
      <div class="sec-label">${t(data.watch.label)}</div>
      <div class="sec-title">${t(data.watch.title)}</div>
      <div class="sec-intro">${t(data.watch.intro)}</div>
      <div id="watchGrid" style="display:flex;flex-direction:column;gap:8px;margin-top:16px"></div>
      <div style="margin-top:16px;padding:12px 16px;background:var(--surface2);border-radius:8px;font-size:11px;color:var(--muted)">
        ${state.lang === 'mr' ? 'जून 2026 पर्यंतची स्थिती. निर्देशक सार्वजनिक माहितीवर आधारित आहेत.' : 'Status as of June 2026. Indicators are based on publicly available information. Update annually.'}
      </div>
    </section>`;

  buildSliders();
  buildTimeline();
  buildWatchGrid();
  renderScenarioOutput();
}

// ── SLIDERS ──
function buildSliders() {
  const grid = el('sliderGrid');
  if (!grid) return;
  grid.innerHTML = '';
  DB.tab_scenarios.engine.drivers.forEach(d => {
    const val = state.scenarioInputs[d.id];
    const cell = document.createElement('div');
    cell.style.cssText = 'background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px';
    cell.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
        <div style="font-size:12px;font-weight:500;color:var(--text)">${t(d.label)}</div>
        <span id="val_${d.id}" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:var(--accent)">${val}</span>
      </div>
      <div style="font-size:10px;color:var(--muted);margin-bottom:10px;line-height:1.4">${t(d.tip)}</div>
      <input type="range" min="1" max="10" value="${val}"
        style="width:100%;accent-color:var(--accent);cursor:pointer"
        oninput="state.scenarioInputs['${d.id}']=+this.value;document.getElementById('val_${d.id}').textContent=this.value;renderScenarioOutput()">
      <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--muted);margin-top:5px">
        <span>${t(d.low)}</span><span>${t(d.high)}</span>
      </div>`;
    grid.appendChild(cell);
  });
}

// ── SCENARIO OUTPUT ──
function renderScenarioOutput() {
  const out = el('scenarioOutput');
  if (!out) return;
  const score = computeScore();
  const band  = getScenarioBand(score);
  const indiaVal = state.scenarioInputs['india'] || 3;
  const indiaText = indiaVal >= 7 ? t(band.indiaGood) : indiaVal <= 3 ? t(band.indiaBad) : t(band.indiaBase);

  const pct = (score / 100) * 100;
  out.innerHTML = `
    <div style="background:var(--surface);border:2px solid ${band.color};border-radius:var(--radius-lg);overflow:hidden">
      <div style="background:${band.color};padding:16px 20px;display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-size:22px;margin-bottom:4px">${band.icon}</div>
          <div style="font-family:'DM Serif Display',serif;font-size:18px;color:#fff;font-weight:400">${t(band.label)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:28px;font-weight:700;color:#fff">${score}</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.75)">${state.lang === 'mr' ? 'एकत्रित गुण' : 'Composite Score'}</div>
        </div>
      </div>
      <div style="padding:16px 20px">
        <!-- Score bar -->
        <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--muted);margin-bottom:4px">
          <span>${state.lang === 'mr' ? '० — वर्चस्व' : '0 — Dominance'}</span>
          <span>${state.lang === 'mr' ? '५० — बहुध्रुवीय' : '50 — Multipolar'}</span>
          <span>${state.lang === 'mr' ? '१०० — विलग' : '100 — Decoupled'}</span>
        </div>
        <div style="height:8px;background:var(--surface2);border-radius:4px;overflow:hidden;margin-bottom:14px">
          <div style="height:100%;width:${pct}%;background:${band.color};border-radius:4px;transition:width 0.4s ease"></div>
        </div>

        <!-- Probability -->
        <div style="font-size:11px;color:var(--muted);margin-bottom:12px;font-style:italic">${t(band.prob)}</div>

        <!-- Premise -->
        <p style="font-size:13px;color:var(--text2);line-height:1.65;margin-bottom:14px">${t(band.premise)}</p>

        <!-- What this world looks like -->
        <div style="font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px">
          ${state.lang === 'mr' ? 'हे जग कसे दिसते' : 'What this world looks like'}
        </div>
        ${band.what[state.lang] ? band.what[state.lang].map(w =>
          `<div style="display:flex;gap:7px;margin-bottom:6px">
            <span style="color:${band.color};flex-shrink:0">▸</span>
            <span style="font-size:12px;color:var(--text);line-height:1.5">${w}</span>
          </div>`).join('') : band.what.en.map(w =>
          `<div style="display:flex;gap:7px;margin-bottom:6px">
            <span style="color:${band.color};flex-shrink:0">▸</span>
            <span style="font-size:12px;color:var(--text);line-height:1.5">${w}</span>
          </div>`).join('')}

        <!-- India box -->
        <div style="background:#FFF3EE;border-left:3px solid var(--india);border-radius:0 6px 6px 0;padding:12px 16px;margin:14px 0">
          <div style="font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--india);margin-bottom:5px">
            ${state.lang === 'mr' ? 'या परिस्थितीत भारत' : 'India in this scenario'}
          </div>
          <div style="font-size:12px;color:var(--text);line-height:1.55">${indiaText}</div>
        </div>

        <!-- Early warning signals -->
        <div style="font-size:11px;color:var(--text2);line-height:1.6;border-top:1px solid var(--border);padding-top:12px">
          <div style="font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:5px">
            ${state.lang === 'mr' ? 'सुरुवातीचे इशारे' : 'Early warning signals'}
          </div>
          ${t(band.watch)}
        </div>
      </div>
    </div>`;
}

// ── TIMELINE ──
const statusConfig = {
  green: { bg: '#E1F5EE', col: '#0F6E56', dot: '#2D6A4F' },
  amber: { bg: '#FEF3E2', col: '#7A4A00', dot: '#D4A017' },
  red:   { bg: '#FDECEA', col: '#C62828', dot: '#C62828' },
};

function buildTimeline() {
  const tlDiv = el('timelineDiv');
  if (!tlDiv) return;
  tlDiv.innerHTML = '';
  DB.tab_scenarios.timeline.events.forEach(ev => {
    tlDiv.innerHTML += `
      <div style="position:relative;margin-bottom:18px;padding-bottom:18px;border-bottom:1px solid var(--border)">
        <div style="display:flex;align-items:flex-start;gap:12px">
          <div style="flex-shrink:0;width:72px;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;color:${ev.color};padding-top:3px">${ev.year}</div>
          <div>
            <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:4px">${t(ev.label)}</div>
            <div style="font-size:12px;color:var(--text2);line-height:1.6">${t(ev.text)}</div>
          </div>
        </div>
      </div>`;
  });
}

// ── WATCH GRID ──
function watchCardHtml(w) {
  const sc = statusConfig[w.status] || statusConfig.amber;
  return `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;display:grid;grid-template-columns:28px 1fr auto;gap:12px;align-items:start">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted);padding-top:2px">${String(w.num).padStart(2,'0')}</div>
        <div>
          <div style="font-size:13px;font-weight:500;color:var(--text);margin-bottom:3px">${t(w.indicator)}</div>
          <div style="font-size:11.5px;color:var(--text2);line-height:1.55;margin-bottom:5px">${t(w.detail)}</div>
          <div style="font-size:10px;color:var(--muted)">${t(w.scenario)}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;min-width:90px">
          <span style="font-size:9px;padding:3px 10px;border-radius:20px;font-weight:600;background:${sc.bg};color:${sc.col};white-space:nowrap;display:block;margin-bottom:4px">${t(w.statusLabel)}</span>
          ${w.src ? `<span style="font-size:9px;color:var(--muted)">${srcLink(w.src)}</span>` : ''}
        </div>
      </div>`;
}

function buildWatchGrid() {
  const grid = el('watchGrid');
  if (!grid) return;
  const items = DB.tab_scenarios.watch.items;
  const globalItems = items.filter(w => w.category === 'global');
  const indiaItems  = items.filter(w => w.category === 'india');

  const globalHeading = state.lang === 'mr' ? 'जागतिक निर्देशक — कोणत्या दिशेने जग जात आहे' : 'Global indicators — which way the world is moving';
  const indiaHeading  = state.lang === 'mr' ? 'भारत-विशिष्ट निर्देशक — अंमलबजावणी मानके' : 'India-specific indicators — execution benchmarks';

  const groupHtml = (heading, list) => `
    <div style="font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin:18px 0 8px">${heading}</div>
    <div style="display:flex;flex-direction:column;gap:8px">${list.map(watchCardHtml).join('')}</div>`;

  grid.innerHTML = (globalItems.length ? groupHtml(globalHeading, globalItems) : '')
                  + (indiaItems.length ? groupHtml(indiaHeading, indiaItems) : '');
}

// ══════════════════════════════════════════════
// BACK TO TOP
// ══════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const btn = el('backToTop');
  if (btn) btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});

// ══════════════════════════════════════════════
// NEWS FEED
// ══════════════════════════════════════════════
function toggleNewsPanel() {
  const panel = el('newsPanel');
  if (!panel) return;
  const isOpen = panel.style.right === '0px';
  panel.style.right = isOpen ? '-380px' : '0px';
}

async function fetchNews() {
  const btn     = el('fetchNewsBtn');
  const content = el('newsContent');
  if (!btn || !content) return;
  btn.textContent = t(DB.ui.loading);
  btn.disabled    = true;
  content.innerHTML = `<p style="color:var(--muted);font-style:italic;font-size:11px">${state.lang === 'mr' ? 'शोध घेत आहे...' : 'Searching for latest developments...'}</p>`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{
          role: 'user',
          content: `Search the web for the 5 most recent developments (last 30 days) in critical minerals policy, supply chains, or geopolitics — especially anything involving India, China, the US, or the EU. Format as a clean list with date, headline, and 1-sentence summary. Focus on verified news sources.`
        }]
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    const text = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n');

    if (!text || text.trim().length < 20) throw new Error('Empty response');

    const items = text.split('\n').filter(l => l.trim());
    content.innerHTML = items.map(line =>
      `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;color:var(--text);line-height:1.6">${line}</div>`
    ).join('');
  } catch (err) {
    content.innerHTML = `
      <div style="color:#C62828;font-size:11px;margin-bottom:12px">${state.lang === 'mr' ? 'लाइव अपडेट्स मिळवता आले नाहीत.' : 'Could not load live updates.'}<br>
      <span style="color:var(--muted);font-size:10px">${err.message}</span></div>
      <div style="background:#F0EDE6;border-radius:6px;padding:12px;font-size:11px;color:var(--text2);line-height:1.7">
        <div style="font-weight:600;color:var(--text);margin-bottom:6px">${state.lang === 'mr' ? 'सत्यापित ताज्या घडामोडी (जून 2026):' : 'Latest verified developments (June 2026):'}</div>
        <div style="margin-bottom:4px">▸ India-US Critical Minerals Framework — May 26, 2026</div>
        <div style="margin-bottom:4px">▸ Quad $20B Critical Minerals Initiative — May 26, 2026</div>
        <div style="margin-bottom:4px">▸ China Oct 2025 REE processing equipment controls active</div>
        <div style="margin-bottom:4px">▸ USGS MCS 2026: World lithium production 290,000 MT</div>
        <div style="font-size:10px;color:var(--muted);margin-top:8px">Source: NCMM Jan 2026 · MEA May 2026 · USGS MCS 2026</div>
      </div>`;
  } finally {
    btn.textContent = t(DB.ui.getUpdates);
    btn.disabled    = false;
  }
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  resetVPTimer();
  // Rotate trivia every 12s
  setInterval(() => {
    state.triviaIdx = (state.triviaIdx + 1) % DB.trivia.length;
    renderTrivia();
  }, 12000);
});

// ══════════════════════════════════════════════
// TAB 2 — WHY IT MATTERS
// ══════════════════════════════════════════════
function renderTab2() {
  const pane = el('pane-why');
  if (!pane) return;
  const d = DB.tab_why;
  let html = '';

  d.sections.forEach(sec => {
    html += `<section class="section">
      <div class="sec-label">${t(sec.label)}</div>
      <div class="sec-title">${t(sec.title)}</div>
      <div class="sec-intro">${t(sec.intro)}</div>`;

    // 2.1 demand tables
    if (sec.demandTable) {
      html += `<div class="tbl-caption">${t(sec.demandTable.caption)}</div>
        <table class="data-table"><thead><tr>
          <th>${state.lang==='mr'?'खनिज':'Mineral'}</th>
          <th>${state.lang==='mr'?'2024 वाढ':'2024 Growth'}</th>
          <th>${state.lang==='mr'?'मुख्य चालक':'Key Driver'}</th>
          <th>${state.lang==='mr'?'टीप':'Note'}</th>
        </tr></thead><tbody>
        ${sec.demandTable.rows.map(r=>`<tr>
          <td><strong>${t(r.mineral)}</strong></td>
          <td class="mono">${r.growth}</td>
          <td>${t(r.driver)}</td>
          <td class="note-cell">${t(r.note)}</td>
        </tr>`).join('')}
        </tbody></table>
        ${srcLinks([sec.demandTable.src])}`;
    }
    if (sec.callout) {
      html += `<div class="big-stat-box">
        <div class="big-stat-num">${sec.callout.stat}</div>
        <div class="big-stat-label">${t(sec.callout.label)}</div>
        ${srcLink(sec.callout.src)}
      </div>`;
    }
    if (sec.forecastTable) {
      html += `<div class="tbl-caption" style="margin-top:24px">${t(sec.forecastTable.caption)}</div>
        <table class="data-table"><thead><tr>
          <th>${state.lang==='mr'?'खनिज':'Mineral'}</th>
          <th>${state.lang==='mr'?'2040 पर्यंत वाढ':'Growth to 2040'}</th>
          <th>${state.lang==='mr'?'मुख्य चालक':'Key Driver'}</th>
          <th>${state.lang==='mr'?'टीप':'Note'}</th>
        </tr></thead><tbody>
        ${sec.forecastTable.rows.map(r=>`<tr>
          <td><strong>${t(r.mineral)}</strong></td>
          <td class="mono accent-text">${t(r.growth)}</td>
          <td>${t(r.driver)}</td>
          <td class="note-cell">${t(r.note)}</td>
        </tr>`).join('')}
        </tbody></table>
        ${srcLinks([sec.forecastTable.src])}`;
    }
    if (sec.copperBox) {
      html += `<div class="callout-box">
        <div class="callout-title">${t(sec.copperBox.title)}</div>
        ${sec.copperBox.points.map(p=>`<div class="callout-row">▸ ${t(p)}</div>`).join('')}
        ${srcLink(sec.copperBox.src)}
      </div>`;
    }
    if (sec.investmentParadox) {
      html += implBox(t(sec.investmentParadox.body));
    }

    // 2.2
    if (sec.comparisonStats) {
      html += `<div class="stat-row-grid">
        ${sec.comparisonStats.map(s=>`<div class="stat-pill">
          <div class="stat-pill-tech">${t(s.tech)}</div>
          <div class="stat-pill-val">${t(s.stat)}</div>
        </div>`).join('')}
      </div>`;
      html += implBox(t(sec.keyInsight));
    }
    if (sec.hiddenCost) {
      html += factBox(t(sec.hiddenCost.body));
    }

    // 2.3
    if (sec.aiSection) {
      const ai = sec.aiSection;
      html += `<div class="sub-section">
        <div class="sub-title">${t(ai.title)}</div>
        <p class="sub-intro">${t(ai.intro)}</p>
        <table class="data-table"><tbody>
          ${ai.stats.map(s=>`<tr>
            <td>${t(s.label)}</td>
            <td class="mono accent-text">${s.value}</td>
            <td>${s.src ? srcLink(s.src) : ''}</td>
          </tr>`).join('')}
        </tbody></table>
        <div class="india-angle-box">
          <div class="india-angle-label">🇮🇳 ${state.lang==='mr'?'भारत कोन':'India Angle'}</div>
          <div>${t(ai.indiaAngle)}</div>
        </div>
      </div>`;
    }
    if (sec.defenceSection) {
      const def = sec.defenceSection;
      html += `<div class="sub-section">
        <div class="sub-title">${t(def.title)}</div>
        <p class="sub-intro">${t(def.intro)}</p>
        <div class="stat-row-grid">
          ${def.stats.map(s=>`<div class="stat-chip">
            <div class="stat-chip-val">${s.value}</div>
            <div class="stat-chip-label">${t(s.label)}</div>
          </div>`).join('')}
        </div>
        ${srcLink(def.src)}
        <div class="india-angle-box">
          <div class="india-angle-label">🇮🇳 ${state.lang==='mr'?'भारत कोन':'India Angle'}</div>
          <div>${t(def.indiaAngle)}</div>
        </div>
      </div>`;
    }

    // 2.4
    if (sec.concStats) {
      html += `<div class="tbl-caption">${t(sec.concStats.caption)}</div>
        <table class="data-table"><tbody>
        ${sec.concStats.rows.map(r=>`<tr>
          <td>${t(r.label)}</td>
          <td class="mono accent-text" style="font-size:18px;font-weight:700">${r.value}</td>
          <td class="note-cell">${t(r.note)}</td>
        </tr>`).join('')}
        </tbody></table>
        ${srcLinks([sec.concStats.src])}`;
    }
    if (sec.nMinus1) {
      html += implBox(`<strong>${t(sec.nMinus1.title)}</strong><br>${t(sec.nMinus1.body)}`);
    }
    if (sec.exportControlsNote) {
      html += factBox(t(sec.exportControlsNote.body));
    }

    // 2.5
    if (sec.leadTimeBox) {
      const lb = sec.leadTimeBox;
      html += `<div class="lead-time-box">
        <div style="display:flex;gap:32px;flex-wrap:wrap">
          <div><div class="lead-time-stat">${lb.stat}</div><div class="lead-time-label">${t(lb.label)}</div></div>
          <div><div class="lead-time-stat" style="color:var(--india)">${lb.substat}</div><div class="lead-time-label">${t(lb.sublabel)}</div></div>
        </div>
        ${srcLink(lb.src)}
      </div>`;
    }
    if (sec.benchmarkMines) {
      const bm = sec.benchmarkMines;
      html += `<div class="lead-time-box" style="border-left:3px solid var(--accent2)">
        <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start">
          <div><div class="lead-time-stat" style="color:var(--accent2)">${bm.stat}</div><div class="lead-time-label">${t(bm.label)}</div></div>
        </div>
        <div style="font-size:12.5px;color:var(--text);line-height:1.65;margin-top:12px">${t(bm.breakdown)}</div>
        ${srcLink(bm.src)}
      </div>`;
      html += implBox(t(bm.inference));
    }
    if (sec.barriers) {
      html += `<div class="barriers-grid">
        ${sec.barriers.map(b=>`<div class="barrier-card">
          <div class="barrier-icon">${b.icon}</div>
          <div class="barrier-name">${t(b.name)}</div>
          <div class="barrier-body">${t(b.body)}</div>
        </div>`).join('')}
      </div>`;
    }
    if (sec.asymmetry) {
      html += implBox(t(sec.asymmetry));
    }

    html += srcLinks(sec.sources);
    html += `</section>`;
  });

  pane.innerHTML = html;
}

// ══════════════════════════════════════════════
// TAB 3 — THE PLAYERS
// ══════════════════════════════════════════════
function renderTab3() {
  const pane = el('pane-players');
  if (!pane) return;
  const d = DB.tab_players;

  pane.innerHTML = `
    <section class="section">
      <div class="sec-label">${state.lang === 'mr' ? '४' : '4'} — ${state.lang === 'mr' ? 'खेळाडू' : 'The Players'}</div>
      <div class="sec-title">${t(d.intro)}</div>
      <div class="sec-intro">${t(d.subIntro)}</div>
      <div id="playerBtns" style="display:flex;flex-wrap:wrap;gap:8px;margin:20px 0"></div>
      <div id="positionTags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px"></div>
      <div id="playerDetail" style="display:none"></div>
    </section>`;

  const pb = el('playerBtns');
  const pd = el('playerDetail');

  DB._rawPlayers.forEach((p) => {
    const btn = document.createElement('button');
    btn.style.cssText = 'padding:9px 16px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;border:2px solid var(--border);background:var(--surface);color:var(--text2);transition:all 0.15s;font-family:"DM Sans",sans-serif;display:flex;align-items:center;gap:6px';
    btn.innerHTML = `<span>${p.flag}</span><span>${p.name}</span>`;
    btn.onclick = () => {
      document.querySelectorAll('#playerBtns button').forEach(b => {
        b.style.background = 'var(--surface)';
        b.style.color = 'var(--text2)';
        b.style.borderColor = 'var(--border)';
      });
      btn.style.background = p.color;
      btn.style.color = '#fff';
      btn.style.borderColor = p.color;
      pd.style.display = 'block';
      showPlayerDetail(p, pd);
    };
    pb.appendChild(btn);
  });

  // Position summary tags
  const ptDiv = el('positionTags');
  if (ptDiv) {
    DB._rawPlayers.forEach(p => {
      ptDiv.innerHTML += `<div style="display:flex;align-items:center;gap:6px;background:var(--surface2);border-radius:20px;padding:4px 12px;font-size:11px;cursor:default;border:1.5px solid transparent">
        <span>${p.flag}</span>
        <span style="font-weight:500;color:var(--text)">${p.name}</span>
        <span style="color:var(--muted)">—</span>
        <span style="color:var(--text2);font-size:10px">${t(DB.tab_players.roleMap[p.id])}</span>
      </div>`;
    });
  }
}

function showPlayerDetail(p, pd) {
  const lang = state.lang;
  const role = t(DB.tab_players.roleMap[p.id]);
  const srcHtml = p.sources.map(s =>
    `<a href="${s.url}" target="_blank" class="src-link">${s.label} ↗</a>`
  ).join('');

  pd.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;margin-top:4px">
      <!-- Coloured header -->
      <div style="background:${p.color};padding:20px 24px;position:relative;overflow:hidden">
        <div style="position:absolute;right:-20px;top:-20px;width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,0.08)"></div>
        <div style="font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:4px">${role}</div>
        <div style="font-family:'DM Serif Display',serif;font-size:24px;color:#fff">${p.flag} ${p.name}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:4px">${p.position}</div>
      </div>

      <div style="padding:22px 24px">
        <!-- Overview -->
        <p style="font-size:13.5px;color:var(--text2);line-height:1.7;margin-bottom:20px">${p.overview}</p>

        <!-- Stats grid -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:20px">
          ${p.stats.map(s => `
            <div style="background:var(--surface2);border-radius:var(--radius);padding:12px 14px">
              <div style="font-size:9px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">${s.label}</div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:500;color:var(--primary);margin-bottom:2px">${s.value}</div>
              <div style="font-size:9px;color:var(--muted)">${s.src}</div>
            </div>`).join('')}
        </div>

        <!-- Strength / Vulnerability -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
          <div>
            <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#2D6A4F;margin-bottom:6px">${lang === 'mr' ? 'ताकद' : 'Strength'}</div>
            <div style="font-size:12.5px;color:var(--text);line-height:1.65">${p.strength}</div>
          </div>
          <div>
            <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#C62828;margin-bottom:6px">${lang === 'mr' ? 'असुरक्षितता' : 'Vulnerability'}</div>
            <div style="font-size:12.5px;color:var(--text);line-height:1.65">${p.vulnerability}</div>
          </div>
        </div>

        <!-- Recent moves -->
        <div style="background:#FFF8F5;border-left:3px solid var(--accent);border-radius:0 8px 8px 0;padding:12px 16px;margin-bottom:12px">
          <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--accent);margin-bottom:5px">${lang === 'mr' ? 'अलीकडील घडामोडी' : 'Recent Moves'}</div>
          <div style="font-size:12.5px;color:var(--text);line-height:1.65">${p.recent}</div>
        </div>

        <!-- India relevance -->
        <div style="background:#FFF3EE;border-left:3px solid var(--india);border-radius:0 8px 8px 0;padding:12px 16px;margin-bottom:14px">
          <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--india);margin-bottom:5px">🇮🇳 ${lang === 'mr' ? 'भारत संदर्भ' : 'India Relevance'}</div>
          <div style="font-size:12.5px;color:var(--text);line-height:1.65">${p.india}</div>
        </div>

        ${p.randPlaybook ? `
        <!-- RAND playbook timeline -->
        <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px 18px;margin-bottom:14px">
          <div style="font-size:11px;font-weight:600;color:var(--primary);margin-bottom:12px">${t(p.randPlaybook.title)}</div>
          ${p.randPlaybook.phases.map(ph => `
            <div style="display:grid;grid-template-columns:90px 1fr;gap:14px;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border)">
              <div style="font-size:11px;font-weight:700;color:#C62828">${ph.period}</div>
              <div>
                <div style="font-size:11.5px;font-weight:600;color:var(--text);margin-bottom:4px">${t(ph.label)}</div>
                <div style="font-size:11.5px;color:var(--muted);line-height:1.65">${t(ph.body)}</div>
              </div>
            </div>`).join('')}
          <div style="background:#FDECEA;border-radius:var(--radius);padding:10px 14px;font-size:11.5px;color:var(--text);line-height:1.65"><strong>${lang === 'mr' ? 'मुख्य धडा' : 'Key lesson'}:</strong> ${t(p.randPlaybook.keyLesson)}</div>
          ${srcLink(p.randPlaybook.src)}
        </div>` : ''}

        <!-- Sources -->
        <div style="border-top:1px solid var(--border);padding-top:12px;display:flex;flex-wrap:wrap;gap:6px;align-items:center">
          <span style="font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-right:4px">${lang === 'mr' ? 'स्रोत' : 'Sources'}</span>
          ${srcHtml}
        </div>
      </div>
    </div>`;

  pd.scrollIntoView({behavior: 'smooth', block: 'nearest'});
}

// ══════════════════════════════════════════════
// TAB 4 — VALUE CHAIN
// ══════════════════════════════════════════════
function renderTab4() {
  const pane = el('pane-chain');
  if (!pane) return;
  const d  = DB.tab_chain;
  const lbl = d.stageLabels;
  const L   = state.lang;

  pane.innerHTML = `
    <!-- 5.1 Five Stages -->
    <section class="section">
      <div class="sec-label">${t(d.sections[0].label)}</div>
      <div class="sec-title">${t(d.sections[0].title)}</div>
      <div class="sec-intro">${t(d.sections[0].intro)}</div>
      <div style="display:flex;flex-direction:column;gap:0;margin:18px 0" id="stageList"></div>
      <div id="stageDetail" style="display:none;margin-top:2px"></div>
    </section>

    <!-- 5.2 Midstream in Detail -->
    <section class="section">
      <div class="sec-label">${t(d.sections[1].label)}</div>
      <div class="sec-title">${t(d.sections[1].title)}</div>
      <div class="sec-intro">${t(d.sections[1].intro)}</div>
      <div class="stat-cards-grid">
        ${d.sections[1].stats.map(s => `
          <div class="stat-card">
            <div class="stat-card-val">${s.value}</div>
            <div class="stat-card-label">${t(s.label)}</div>
            ${s.src ? srcLink(s.src) : ''}
          </div>`).join('')}
      </div>
      ${implBox(`<strong>${t(d.sections[1].n1test.title)}</strong><br><br>${t(d.sections[1].n1test.body)}`)}
      ${srcLinks(d.sections[1].sources)}
    </section>

    <!-- 5.3 India Across the Chain -->
    <section class="section">
      <div class="sec-label">${L==='mr'?'५.३':'5.3'} — ${L==='mr'?'साखळीत भारत':'India Across the Chain'}</div>
      <div class="sec-title">${L==='mr'?'भारत कुठे आहे — आणि कुठे अनुपस्थित आहे':"Where India sits — and where it is absent"}</div>
      <div class="sec-intro">${L==='mr'?'सहा प्रमुख महत्त्वाच्या खनिजांसाठी, मूल्य साखळीच्या प्रत्येक टप्प्यावर भारताची वास्तविक स्थिती येथे आहे.':"For six key critical minerals, here is India's actual position at each stage of the value chain. The pattern is consistent: India has resources upstream; it is absent from processing onward."}</div>
      ${renderChainMatrix(d.sections[0].indiaMatrix)}
      ${srcLinks(d.sections[0].sources)}
    </section>

    <!-- 5.4 De-risking Toolkit -->
    <section class="section">
      <div class="sec-label">${t(d.sections[2].label)}</div>
      <div class="sec-title">${t(d.sections[2].title)}</div>
      <div class="sec-intro">${t(d.sections[2].intro)}</div>
      ${renderToolkitOverview(d.sections[2].toolkitOverview)}
      ${factBox(t(d.sections[2].honestNote))}
      ${srcLinks(d.sections[2].sources)}
    </section>

    <!-- 5.5 Investment Timeline -->
    ${renderInvestmentTimeline()}`;

  buildStageList();
}

// Renders the 5.4 "five tools at a glance" overview (five de-risking tools, one-line each)
function renderToolkitOverview(overview) {
  if (!overview) return '';
  return `
    <div class="tbl-caption" style="margin:14px 0 10px">${t(overview.title)}</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
      ${overview.items.map(item => `
        <div style="padding:10px 14px;border:1px solid var(--border);border-radius:6px;background:var(--surface)">
          <div style="font-size:13px;font-weight:500;color:var(--text);margin-bottom:3px">${t(item.name)}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.6;margin-bottom:4px">${t(item.body)}</div>
          <div style="font-size:10px;color:var(--muted);font-family:'IBM Plex Mono',monospace">${state.lang==='mr'?'अधिक पाहा':'See'}: ${item.seeAlso}</div>
        </div>`).join('')}
    </div>`;
}

function renderChainMatrix(mx) {
  if (!mx) return '';
  return `
    <div class="chain-matrix-wrap">
      <div class="tbl-caption">${t(mx.caption)}</div>
      <div style="overflow-x:auto">
        <table class="chain-matrix-tbl">
          <thead><tr>
            <th style="min-width:100px">${state.lang==='mr'?'खनिज':'Mineral'}</th>
            ${mx.stages.map(s=>`<th style="text-align:center;min-width:90px">${t(s)}</th>`).join('')}
          </tr></thead>
          <tbody>
            ${mx.minerals.map(m=>`<tr>
              <td class="chain-mineral-name">${m.name}</td>
              ${m.stages.map(s=>`<td class="chain-cell chain-${s}">
                <div style="text-align:center;font-size:9px;font-weight:600;padding:2px 0;color:${s==='present'?'#2D6A4F':s==='partial'?'#7A4A00':'#C62828'}">
                  ${s==='present'?'●':s==='partial'?'◑':'○'}
                </div>
              </td>`).join('')}
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="chain-legend">
        ${mx.legend.map(l=>`<div class="chain-legend-item">
          <div class="chain-legend-dot" style="background:${l.color}"></div>
          ${t(l.label)}
        </div>`).join('')}
      </div>
      ${implBox(t(mx.insight))}
    </div>`;
}

// Generic renderer for a "note" object: { title:{en,mr}, body:{en,mr}, src?, inference?:{en,mr} }
function renderChainNote(note) {
  if (!note) return '';
  let html = `<div style="background:var(--surface2);border-radius:6px;padding:10px 14px;margin-bottom:10px">
    <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">${t(note.title)}</div>
    <div style="font-size:12.5px;color:var(--text2);line-height:1.65">${t(note.body)}</div>
  </div>`;
  if (note.inference) {
    html += inferenceBox(t(note.inference));
  }
  return html;
}

// Renders the 🇮🇳 India-specific box for a chain stage
function renderChainIndiaSection(section) {
  if (!section) return '';
  return `<div style="background:#FFF3EE;border-left:3px solid var(--india);border-radius:0 6px 6px 0;padding:10px 14px;margin-bottom:10px">
    <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--india);margin-bottom:4px">🇮🇳 ${t(section.title)}</div>
    <div style="font-size:12.5px;color:var(--text);line-height:1.65">${t(section.body)}</div>
  </div>`;
}

function buildStageList() {
  const stageList   = el('stageList');
  const stageDetail = el('stageDetail');
  if (!stageList) return;
  const stages = DB._rawChainStages.slice(0, 5); // Stage 1 (Exploration) through Stage 5 (Manufacturing); Stage 5.5 Investment Timeline rendered separately
  const lbl    = DB.tab_chain.stageLabels;
  const L      = state.lang;

  // Stage numbering and chokepoint flag (5.0.2 Processing & Separation is the chokepoint)
  const stageNums  = ['01','02','03','04','05'];
  const chokeIndex = 2; // chain_502 -- Processing & Separation

  stages.forEach((s, i) => {
    const row = document.createElement('div');
    const isChoke = i === chokeIndex;
    const isFirst = i === 0;
    const isLast  = i === stages.length - 1;
    row.style.cssText = [
      'display:flex;align-items:center;gap:14px;padding:14px 16px',
      `border:1px solid ${isChoke ? 'var(--accent)' : 'var(--border)'}`,
      `background:${isChoke ? '#FFF8F5' : 'var(--surface)'}`,
      'cursor:pointer;transition:all 0.15s;margin-bottom:-1px',
      isFirst  ? 'border-radius:var(--radius) var(--radius) 0 0' : '',
      isLast   ? 'border-radius:0 0 var(--radius) var(--radius)' : '',
    ].filter(Boolean).join(';');

    // Use the section's own label/title for display
    const stageLabel = t(s.label); // e.g. "Stage 2 — Mining"
    const stageTitle = t(s.title);

    row.innerHTML = `
      <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:500;color:${isChoke ? 'var(--accent)' : 'var(--muted)'}">${stageNums[i]}</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:500;color:var(--text)">
          ${stageLabel}${isChoke ? ` <span style="color:var(--accent);font-size:10px;font-weight:600">${t(lbl.chokepoint)}</span>` : ''}
        </div>
        <div style="font-size:11px;color:var(--text2)">${stageTitle}</div>
      </div>
      <div style="font-size:11px;color:var(--muted)">▼</div>`;

    row.onclick = () => {
      document.querySelectorAll('#stageList > div').forEach((r, ri) => {
        r.style.background = (ri === chokeIndex) ? '#FFF8F5' : 'var(--surface)';
      });
      row.style.background = isChoke ? '#FAECE7' : 'var(--surface2)';
      stageDetail.style.display = 'block';

      // Collect the "extra note" fields -- everything that isn't a known structural key
      const knownKeys = ['id','label','title','intro','stats','indiaSection','sources'];
      const extraNotes = Object.keys(s)
        .filter(k => !knownKeys.includes(k))
        .map(k => s[k]);

      stageDetail.innerHTML = `
        <div style="background:var(--surface);border:1px solid ${isChoke ? 'var(--accent)' : 'var(--border)'};border-top:none;border-radius:0 0 var(--radius) var(--radius);padding:20px 22px">
          <div class="sec-intro" style="margin-bottom:14px">${t(s.intro)}</div>
          ${s.stats ? `<div class="stat-cards-grid" style="margin-bottom:14px">
            ${s.stats.map(st => `
              <div class="stat-card">
                <div class="stat-card-val">${st.value}</div>
                <div class="stat-card-label">${t(st.label)}</div>
                ${st.src ? srcLink(st.src) : ''}
              </div>`).join('')}
          </div>` : ''}
          ${extraNotes.map(n => renderChainNote(n)).join('')}
          ${renderChainIndiaSection(s.indiaSection)}
          ${srcLinks(s.sources)}
        </div>`;
      stageDetail.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    };
    stageList.appendChild(row);
  });
}

// ══════════════════════════════════════════════
// 5.4 — THE INVESTMENT TIMELINE (snake curve)
// ══════════════════════════════════════════════
function renderInvestmentTimeline() {
  const s = DB._rawChainStages[5]; // chain_54
  if (!s) return '';
  const sc = s.snakeCurve;

  return `
    <section class="section">
      <div class="sec-label">${t(s.label)}</div>
      <div class="sec-title">${t(s.title)}</div>
      <div class="sec-intro">${t(s.intro)}</div>

      <div class="tbl-caption" style="margin:14px 0 10px">${t(sc.caption)}</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
        ${sc.stages.map(stage => `
          <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;border:1px solid ${stage.isOrphanPeriod ? 'var(--accent)' : 'var(--border)'};border-radius:6px;background:${stage.isOrphanPeriod ? '#FFF8F5' : 'var(--surface)'}">
            <div style="min-width:90px;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;color:${stage.isOrphanPeriod ? 'var(--accent)' : 'var(--muted)'}">${t(stage.duration)}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:500;color:var(--text);margin-bottom:3px">${t(stage.name)}${stage.isOrphanPeriod ? ` <span style="color:var(--accent);font-size:10px;font-weight:600">★</span>` : ''}</div>
              <div style="font-size:12px;color:var(--text2);line-height:1.6">${t(stage.description)}</div>
            </div>
          </div>`).join('')}
      </div>

      <div style="background:var(--surface2);border-radius:6px;padding:10px 14px;margin-bottom:14px">
        <div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px">${t(sc.crossCuttingRisks.title)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          ${sc.crossCuttingRisks.items.map(item => `<div style="font-size:11.5px;color:var(--text2);background:var(--surface);border:1px solid var(--border);border-radius:4px;padding:4px 10px">${t(item)}</div>`).join('')}
        </div>
      </div>

      ${implBox(`<strong>${t(s.orphanPeriodNote.title)}</strong><br><br>${t(s.orphanPeriodNote.body)}`)}
      ${srcLinks(s.sources)}
    </section>`;
}

// ══════════════════════════════════════════════
// TAB 5 — THE MINERALS
// ══════════════════════════════════════════════

const riskColour = {'Very High':'#C62828','High':'#EF9F27','Moderate':'#2D6A4F','Moderate-High':'#D4A017'};
const posBg      = {import:'#FDECEA',partial:'#FEF3E2',locked:'#E8E4DC',dormant:'#E6F1FB',present:'#E1F5EE',reviving:'#F0FDF4'};
const posText_   = {import:'#C62828',partial:'#7A4A00',locked:'#555',dormant:'#185FA5',present:'#0F6E56',reviving:'#15803D'};
const posLabel_  = {import:'100% Import Dependent',partial:'Partial / Limited',locked:'Legally Locked',dormant:'Resources / Potential',present:'Domestic Capacity',reviving:'Reviving / Pre-Commercial'};

let currentMineralFilter = 'essential';
let selectedMineral = null;

function renderTab5() {
  const pane = el('pane-minerals');
  if (!pane) return;
  const d = DB.tab_minerals;
  pane.innerHTML = '<section class="section">' +
    '<div class="sec-label">' + t(d.label) + '</div>' +
    '<div class="sec-title">' + t(d.title) + '</div>' +
    '<div class="sec-intro">' + t(d.intro) + '</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:8px;margin:16px 0" id="mineralFilters"></div>' +
    '<div style="font-size:11px;color:var(--muted);margin-bottom:12px" id="mineralCount"></div>' +
    '<div id="mineralGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px"></div>' +
    '<div id="mineralDetail" style="display:none;margin-top:8px"></div>' +
    '</section>';
  buildMineralFilters();
  renderMineralGrid('essential');
}

function buildMineralFilters() {
  const div = el('mineralFilters');
  if (!div) return;
  const d = DB.tab_minerals;
  const filters = [
    {key:'essential', label: t(d.filters.essential)},
    {key:'all',       label: t(d.filters.all)},
    {key:'battery',   label: t(d.filters.battery)},
    {key:'semi',      label: t(d.filters.semi)},
    {key:'defence',   label: t(d.filters.defence)},
    {key:'fertilizer',label: t(d.filters.fertilizer)},
  ];
  div.innerHTML = filters.map(function(f) {
    var isActive = f.key === 'essential';
    var activeStyle = 'background:var(--primary);color:#fff;border-color:var(--primary)';
    var inactiveStyle = 'background:var(--surface);border:1px solid var(--border);color:var(--text2)';
    return '<button class="filter-btn' + (isActive?' active':'') + '" id="filter-' + f.key + '"' +
      ' onclick="setMineralFilter(\'' + f.key + '\', this)"' +
      ' style="' + (isActive?activeStyle:inactiveStyle) + ';border-radius:20px;padding:5px 14px;font-size:11px;font-weight:500;cursor:pointer;font-family:\'DM Sans\',sans-serif;transition:all 0.15s">' +
      f.label + '</button>';
  }).join('');
}

function setMineralFilter(key, btn) {
  document.querySelectorAll('#mineralFilters button').forEach(function(b) {
    b.classList.remove('active');
    b.style.background = 'var(--surface)';
    b.style.color = 'var(--text2)';
    b.style.borderColor = 'var(--border)';
  });
  if (btn) {
    btn.classList.add('active');
    btn.style.background = 'var(--primary)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--primary)';
  }
  currentMineralFilter = key;
  renderMineralGrid(key);
}

function renderMineralGrid(filter) {
  const grid    = el('mineralGrid');
  const detail  = el('mineralDetail');
  const counter = el('mineralCount');
  if (!grid) return;
  detail.style.display = 'none';
  selectedMineral = null;

  const minerals = DB._rawMinerals;
  var shown;
  if (filter === 'essential') shown = minerals.filter(function(m){ return m.essential; });
  else if (filter === 'all')   shown = minerals;
  else shown = minerals.filter(function(m){ var catKey = filter === 'semi' ? 'semiconductor' : filter; return m.cat && m.cat.includes(catKey); });

  if (counter) {
    var L = state.lang;
    var countTxt = L === 'mr'
      ? shown.length + ' खनिजे दाखवत आहे' + (filter === 'essential' ? ' — भारतासाठी १० सर्वात धोरणात्मक महत्त्वाची' : '')
      : 'Showing ' + shown.length + ' mineral' + (shown.length !== 1 ? 's' : '') + (filter === 'essential' ? ' — the 10 most strategically significant for India' : '');
    counter.textContent = countTxt;
  }

  grid.innerHTML = '';
  shown.forEach(function(m) {
    var card = document.createElement('div');
    card.style.cssText = 'background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;cursor:pointer;transition:all 0.15s;border-top:3px solid ' + (riskColour[m.risk]||'#888');
    card.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">' +
        '<div>' +
          '<span style="font-family:\'DM Serif Display\',serif;font-size:20px;color:var(--primary);margin-right:6px">' + m.sym + '</span>' +
          '<span style="font-size:12px;font-weight:500;color:var(--text)">' + m.name + '</span>' +
        '</div>' +
        (m.essential ? '<span style="font-size:9px;background:#E6F1FB;color:#185FA5;padding:2px 8px;border-radius:10px;font-weight:600">Essential 10</span>' : '') +
      '</div>' +
      '<div style="font-size:10px;margin-bottom:6px">' +
        '<span style="padding:2px 8px;border-radius:10px;font-size:9px;font-weight:600;background:' + (posBg[m.indiaPosTag]||'#eee') + ';color:' + (posText_[m.indiaPosTag]||'#333') + '">' +
          (state.lang === 'mr' ? t(DB.tab_minerals.posLabels[posLabel_[m.indiaPosTag]] || {en:posLabel_[m.indiaPosTag]||m.indiaPos, mr:posLabel_[m.indiaPosTag]||m.indiaPos}) : (posLabel_[m.indiaPosTag]||m.indiaPos)) +
        '</span>' +
      '</div>' +
      '<div style="font-size:11px;color:var(--text2);line-height:1.5">' + m.use.substring(0,80) + (m.use.length>80?'…':'') + '</div>';
    card.onclick = function(){ showMineral(m, card); };
    card.onmouseenter = function(){ if(selectedMineral!==m){ card.style.boxShadow='0 4px 14px rgba(0,0,0,0.06)'; } };
    card.onmouseleave = function(){ if(selectedMineral!==m){ card.style.boxShadow='none'; } };
    grid.appendChild(card);
  });
}

function showMineral(m, card) {
  document.querySelectorAll('#mineralGrid > div').forEach(function(c){
    c.style.borderColor='var(--border)'; c.style.boxShadow='none';
  });
  if (card) {
    card.style.borderColor = riskColour[m.risk]||'var(--accent)';
    card.style.boxShadow = '0 4px 16px rgba(0,0,0,0.09)';
  }
  selectedMineral = m;
  var d = el('mineralDetail');
  if (!d) return;
  d.style.display = 'block';
  var L = state.lang;
  var dl = DB.tab_minerals.detailLabels;
  var siHtml = m.stratImpl
    ? '<div class="impl-box"><div class="impl-label">' + t(dl.stratImpl) + '</div><div class="impl-text">' + m.stratImpl + '</div></div>'
    : '';

  d.innerHTML =
    '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden">' +
      '<div style="background:var(--primary);padding:18px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">' +
        '<div style="display:flex;align-items:baseline;gap:12px">' +
          '<span style="font-family:\'DM Serif Display\',serif;font-size:32px;color:#fff">' + m.sym + '</span>' +
          '<span style="font-size:18px;font-weight:500;color:rgba(255,255,255,0.9)">' + m.name + '</span>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
          '<span style="font-size:10px;padding:3px 10px;border-radius:20px;font-weight:600;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.85)">' + t(dl.supplyRisk) + ' ' + m.risk + '</span>' +
          '<span style="font-size:10px;padding:3px 10px;border-radius:20px;font-weight:600;background:' + (posBg[m.indiaPosTag]||'#eee') + ';color:' + (posText_[m.indiaPosTag]||'#333') + '">' + (posLabel_[m.indiaPosTag]||m.indiaPos) + '</span>' +
        '</div>' +
      '</div>' +
      '<div style="padding:20px 24px">' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">' +
          '<div><div style="font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:5px">' + t(dl.whatItDoes) + '</div><div style="font-size:13px;color:var(--text);line-height:1.65">' + m.use + '</div></div>' +
          '<div><div style="font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:5px">' + t(dl.globalProd) + '</div><div style="font-size:13px;color:var(--text);line-height:1.65">' + m.globalProd + '</div></div>' +
        '</div>' +
        '<div style="background:#FFF3EE;border-left:3px solid var(--india);border-radius:0 6px 6px 0;padding:10px 14px;margin-bottom:12px">' +
          '<div style="font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--india);margin-bottom:4px">🇮🇳 ' + t(dl.indiaPos) + '</div>' +
          '<div style="font-size:13px;color:var(--text);line-height:1.65">' + m.indiaDetail + '</div>' +
        '</div>' +
        siHtml +
        '<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:4px">' +
          (m.sources && m.sources.length
            ? m.sources.map(function(s){ return '<a href="' + s.url + '" target="_blank" class="src-link" style="display:inline-block;margin-right:10px;margin-bottom:4px">' + s.label + ' ↗</a>'; }).join('')
            : '') +
        '</div>' +
      '</div>' +
    '</div>';

  d.scrollIntoView({behavior: 'smooth', block: 'nearest'});
}


// ══════════════════════════════════════════════
// TAB 6 — THE HUMAN COST (v2)
// ══════════════════════════════════════════════
function renderTabHuman() {
  var pane = el('pane-human');
  if (!pane) return;
  var d = DB.tab_human;
  var L = state.lang;

  var html = '<section class="section">' +
    '<div class="sec-label">' + t(d.label) + '</div>' +
    '<div class="sec-title">' + t(d.title) + '</div>' +
    '<div class="sec-intro">' + t(d.intro) + '</div>' +
    '</section>';

  d.sections.forEach(function(sec) {
    html += '<section class="section">' +
      '<div class="sec-label">' + t(sec.label) + '</div>' +
      '<div class="sec-title">' + t(sec.title) + '</div>' +
      '<div class="sec-intro">' + t(sec.intro) + '</div>';

    // 6.1 — Geography of cost
    if (sec.waterStress) {
      var ws = sec.waterStress;
      html += '<div class="lead-time-box" style="border-left:3px solid #C62828">' +
        '<div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap">' +
        '<div class="lead-time-stat" style="color:#C62828">' + ws.stat + '</div>' +
        '<div class="lead-time-label" style="flex:1;min-width:200px">' + t(ws.label) + '</div>' +
        '</div>' + srcLink(ws.src) + '</div>';
    }
    if (sec.waterStressDetail) {
      var wsd = sec.waterStressDetail;
      html += '<div style="background:var(--surface2);border-radius:6px;padding:10px 14px;margin:10px 0">' +
        '<div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">' + t(wsd.title) + '</div>' +
        '<div style="font-size:12.5px;color:var(--text2);line-height:1.65">' + t(wsd.body) + '</div>' +
        srcLink(wsd.src) +
        '</div>';
    }
    if (sec.keyInsight) html += implBox(t(sec.keyInsight));

    // 6.2 — Case studies
    if (sec.cases) {
      sec.cases.forEach(function(c) {
        html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;margin:16px 0">' +
          '<div style="background:' + c.color + ';padding:12px 18px">' +
            '<div style="font-size:13px;color:#fff;font-weight:600">' + t(c.location) + '</div>' +
          '</div>' +
          '<div style="padding:16px 18px">' +
            '<div style="font-size:12.5px;color:var(--text);line-height:1.7">' + t(c.body) + '</div>' +
            '<div class="impl-box" style="margin-top:12px"><div class="impl-label">[OUR INFERENCE]</div><div class="impl-text">' + t(c.inference) + '</div></div>' +
            srcLinks(c.sources) +
          '</div></div>';
      });
    }

    // 6.3 — Recycling tensions
    if (sec.tensions) {
      sec.tensions.forEach(function(tn) {
        html += '<div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--accent2);border-radius:0 var(--radius) var(--radius) 0;padding:16px 18px;margin:12px 0">' +
          '<div style="font-size:12px;font-weight:600;color:var(--primary);margin-bottom:8px">' + t(tn.title) + '</div>' +
          '<div style="font-size:12.5px;color:var(--text);line-height:1.7">' + t(tn.body) + '</div>' +
          srcLink(tn.src) + '</div>';
      });
    }
    if (sec.recyclingStats) {
      var rs = sec.recyclingStats;
      html += '<div style="margin:16px 0">' +
        '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--primary);margin-bottom:10px">' + t(rs.caption) + '</div>' +
        '<div style="display:flex;flex-direction:column;gap:6px">';
      rs.rows.forEach(function(row) {
        html += '<div style="display:grid;grid-template-columns:1fr 70px 60px 1fr;gap:12px;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:10px 14px">' +
          '<div style="font-size:12.5px;font-weight:500">' + t(row.mineral) + '</div>' +
          '<div style="text-align:center;font-size:15px;font-weight:700;color:var(--secondary)">' + row.reduction + '</div>' +
          '<div style="text-align:center;font-size:11px;color:var(--muted)">' + row.timeline + '</div>' +
          '<div style="font-size:11px;color:var(--muted)">' + t(row.note) + '</div></div>';
      });
      html += '</div>' + srcLink(rs.src) + '</div>';
    }
    if (sec.riofrancos2023) {
      var rf = sec.riofrancos2023;
      html += '<div style="background:#F0F7F4;border:1px solid var(--border);border-radius:var(--radius-lg);padding:18px;margin:16px 0">' +
        '<div style="font-size:12px;font-weight:600;color:var(--secondary);margin-bottom:10px">' + t(rf.title) + '</div>' +
        '<div style="font-size:12.5px;color:var(--text);line-height:1.7;margin-bottom:14px">' + t(rf.finding) + '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-bottom:12px">';
      rf.keyStats.forEach(function(s) {
        html += '<div class="stat-card"><div class="stat-card-val" style="font-size:22px">' + s.stat + '</div><div class="stat-card-label">' + t(s.label) + '</div></div>';
      });
      html += '</div>' + implBox(t(rf.inference)) + srcLink(rf.src) + '</div>';
    }
    if (sec.recyclingConstraint) html += factBox(t(sec.recyclingConstraint));
    if (sec.policyLeversNote) {
      var pln = sec.policyLeversNote;
      html += '<div style="background:var(--surface2);border-radius:6px;padding:10px 14px;margin:10px 0">' +
        '<div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">' + t(pln.title) + '</div>' +
        '<div style="font-size:12.5px;color:var(--text2);line-height:1.65">' + t(pln.body) + '</div>' +
        srcLink(pln.src) +
        '</div>';
      if (pln.inference) html += inferenceBox(t(pln.inference));
    }

    // 6.4 — Responsible mining challenges
    if (sec.challenges) {
      sec.challenges.forEach(function(ch) {
        html += '<div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid #4A148C;border-radius:0 var(--radius) var(--radius) 0;padding:16px 18px;margin:12px 0">' +
          '<div style="font-size:12px;font-weight:600;color:#4A148C;margin-bottom:8px">' + t(ch.title) + '</div>' +
          '<div style="font-size:12.5px;color:var(--text);line-height:1.7">' + t(ch.body) + '</div>' +
          srcLink(ch.src) + '</div>';
      });
    }
    if (sec.commercialRiskNote) {
      var crn = sec.commercialRiskNote;
      html += '<div style="background:var(--surface2);border-radius:6px;padding:10px 14px;margin:12px 0">' +
        '<div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px">' + t(crn.title) + '</div>' +
        '<div style="font-size:12.5px;color:var(--text2);line-height:1.65">' + t(crn.body) + '</div>' +
        srcLinks(crn.sources) +
        '</div>';
    }
    if (sec.frameworks) {
      var fw = sec.frameworks;
      html += '<div style="margin:16px 0">' +
        '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:var(--primary);margin-bottom:10px">' + t(fw.label) + '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">';
      fw.items.forEach(function(item) {
        html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px">' +
          '<div style="font-size:12px;font-weight:600;color:var(--primary);margin-bottom:6px">' + item.name + '</div>' +
          '<div style="font-size:11.5px;color:var(--muted);line-height:1.6">' + t(item.scope) + '</div></div>';
      });
      html += '</div>';
      html += factBox(t(fw.gap));
      html += '</div>';
    }

    // 6.5 — Scorecard
    if (sec.scorecard) {
      var severityConfig = {
        high:   { bg: '#FDECEA', col: '#C62828', label: L === 'mr' ? 'उच्च' : 'High' },
        medium: { bg: '#FEF3E2', col: '#7A4A00', label: L === 'mr' ? 'मध्यम' : 'Medium' },
        low:    { bg: '#F0F7F4', col: '#2D6A4F', label: L === 'mr' ? 'कमी' : 'Low' }
      };
      html += '<div style="display:flex;flex-direction:column;gap:6px;margin:16px 0">';
      sec.scorecard.forEach(function(row) {
        var sc = severityConfig[row.severity] || severityConfig.medium;
        html += '<div style="display:grid;grid-template-columns:1fr 80px 1fr;gap:12px;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:10px 14px">' +
          '<div style="font-size:12.5px;font-weight:500;color:var(--text)">' + t(row.issue) + '</div>' +
          '<div style="text-align:center"><span style="font-size:9px;font-weight:700;padding:3px 10px;border-radius:20px;background:' + sc.bg + ';color:' + sc.col + '">' + sc.label + '</span></div>' +
          '<div style="font-size:11px;color:var(--muted)">' + t(row.note) + '</div></div>';
      });
      html += '</div>';
    }
    if (sec.closingInsight) html += implBox(t(sec.closingInsight));
    if (sec.sources && !sec.cases) html += srcLinks(sec.sources);

    html += '</section>';
  });

  pane.innerHTML = html;
}

// ══════════════════════════════════════════════
// TAB 6 — THE TOOLKIT
// ══════════════════════════════════════════════
function renderTab6() {
  const pane = el('pane-toolkit');
  if (!pane) return;
  const d = DB.tab_toolkit;

  pane.innerHTML = '<section class="section">' +
    '<div class="sec-label">' + t(d.label) + '</div>' +
    '<div class="sec-title">' + t(d.title) + '</div>' +
    '<div class="sec-intro">' + t(d.intro) + '</div>' +
    '<div id="toolkitBtns" style="display:flex;flex-wrap:wrap;gap:8px;margin:20px 0"></div>' +
    '<div id="toolkitDetail" style="display:none;margin-top:4px"></div>' +
    '</section>';

  var tkBtns   = el('toolkitBtns');
  var tkDetail = el('toolkitDetail');
  var tools    = DB._rawToolkit;

  tools.forEach(function(tool) {
    var btn = document.createElement('button');
    btn.style.cssText = 'padding:9px 16px;border-radius:8px;font-size:12px;font-weight:500;cursor:pointer;border:1.5px solid var(--border);background:var(--surface);color:var(--text2);transition:all 0.15s;font-family:"DM Sans",sans-serif;display:flex;align-items:center;gap:6px';
    var name = t(DB.tab_toolkit.toolNames[tool.name] || {en: tool.name, mr: tool.name});
    btn.innerHTML = tool.icon + ' ' + name;
    btn.onclick = function() {
      document.querySelectorAll('#toolkitBtns button').forEach(function(b) {
        b.style.background = 'var(--surface)';
        b.style.color = 'var(--text2)';
        b.style.borderColor = 'var(--border)';
      });
      btn.style.background = 'var(--primary)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--primary)';
      tkDetail.style.display = 'block';
      showTool(tool, tkDetail);
    };
    tkBtns.appendChild(btn);
  });
}

function showTool(tool, tkDetail) {
  var L    = state.lang;
  var name = t(DB.tab_toolkit.toolNames[tool.name] || {en: tool.name, mr: tool.name});

  var prosHtml = tool.pros.map(function(p) {
    return '<div style="display:flex;gap:8px;margin-bottom:5px">' +
      '<span style="color:var(--secondary);flex-shrink:0">✓</span>' +
      '<span style="font-size:12.5px;color:var(--text);line-height:1.55">' + p + '</span></div>';
  }).join('');

  var consHtml = tool.cons.map(function(p) {
    return '<div style="display:flex;gap:8px;margin-bottom:5px">' +
      '<span style="color:#C62828;flex-shrink:0">✗</span>' +
      '<span style="font-size:12.5px;color:var(--text);line-height:1.55">' + p + '</span></div>';
  }).join('');

  function outcomeStyle(o) {
    var good = ['Partial success','Most successful','Most developed','Most operational','Advanced framework','Established','Major success','Pioneering'];
    var warn = ['Partial','Early stage','Aspirational','Early','Rapidly building','Framework stage'];
    if (good.some(function(g){ return o.startsWith(g); })) return {bg:'#E1F5EE',col:'#0F6E56'};
    if (warn.some(function(w){ return o.startsWith(w); })) return {bg:'#FEF3E2',col:'#7A4A00'};
    return {bg:'#FDECEA',col:'#C62828'};
  }

  var casesHtml = tool.cases.map(function(cs) {
    var st = outcomeStyle(cs.outcome);
    return '<div style="border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-bottom:8px">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">' +
        '<span style="font-size:12px;font-weight:500;color:var(--text)">' + cs.country + '</span>' +
        '<span style="font-size:9px;padding:2px 8px;border-radius:10px;font-weight:600;background:' + st.bg + ';color:' + st.col + '">' + cs.outcome + '</span>' +
      '</div>' +
      '<div style="font-size:12px;color:var(--text2);line-height:1.55">' + cs.text + '</div>' +
    '</div>';
  }).join('');

  var worksLabel  = L === 'mr' ? 'का काम करते' : 'Works because';
  var failsLabel  = L === 'mr' ? 'का अपयश' : 'Fails because';
  var casesLabel  = L === 'mr' ? 'देश केस स्टडी' : 'Country case studies';
  var indiaLabel  = L === 'mr' ? 'भारत मूल्यमापन' : 'India Assessment';

  tkDetail.innerHTML =
    '<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden">' +
      '<div style="background:var(--primary);padding:18px 24px">' +
        '<div style="font-size:24px;margin-bottom:4px">' + tool.icon + '</div>' +
        '<div style="font-family:\'DM Serif Display\',serif;font-size:22px;color:#fff;margin-bottom:2px">' + name + '</div>' +
        '<div style="font-size:12px;color:rgba(255,255,255,0.55)">' + tool.sub + '</div>' +
      '</div>' +
      '<div style="padding:22px 24px">' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px">' +
          '<div><div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--secondary);margin-bottom:8px">' + worksLabel + '</div>' + prosHtml + '</div>' +
          '<div><div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#C62828;margin-bottom:8px">' + failsLabel + '</div>' + consHtml + '</div>' +
        '</div>' +
        '<div style="margin-bottom:16px"><div style="font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:10px">' + casesLabel + '</div>' + casesHtml + '</div>' +
        '<div class="impl-box"><div class="impl-label">' + indiaLabel + '</div><div class="impl-text">' + tool.india + '</div></div>' +
        (tool.bankability ? (
          '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px 18px;margin:14px 0">' +
            '<div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px">' + (state.lang === 'mr' ? 'बँकेबिलिटी फ्रेमवर्क (PIIE 2026)' : 'The Bankability Framework (PIIE 2026)') + '</div>' +
            '<div style="font-size:12px;color:var(--text);line-height:1.7;margin-bottom:10px">' + t(tool.bankability.body) + '</div>' +
            '<div style="background:#FDECEA;border-radius:var(--radius);padding:10px 14px;font-size:11.5px;line-height:1.65;margin-bottom:10px"><strong>' + (state.lang === 'mr' ? 'चीनी मॉडेल' : 'The China contrast') + ':</strong> ' + t(tool.bankability.chinaContrast) + '</div>' +
            '<div class="impl-box"><div class="impl-label">🇮🇳</div><div class="impl-text">' + t(tool.bankability.indiaAngle) + '</div></div>' +
            srcLink(tool.bankability.src) +
          '</div>') : '') +
        (tool.leapfrog ? (
          '<div style="background:#F0F7F4;border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px 18px;margin:14px 0">' +
            '<div style="font-size:11px;font-weight:700;color:var(--secondary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px">' + t(tool.leapfrog.title) + '</div>' +
            '<div style="font-size:12px;color:var(--text);line-height:1.7;margin-bottom:10px">' + t(tool.leapfrog.body) + '</div>' +
            '<div class="impl-box"><div class="impl-label">🇮🇳</div><div class="impl-text">' + t(tool.leapfrog.indiaAngle) + '</div></div>' +
            srcLink(tool.leapfrog.src) +
          '</div>') : '') +
        '<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:12px">' +
          '<span style="font-size:11px;color:var(--muted)">' + tool.src + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';

  tkDetail.scrollIntoView({behavior: 'smooth', block: 'nearest'});
}

// ══════════════════════════════════════════════
// TAB 7 — INDIA'S MOVE
// ══════════════════════════════════════════════
function renderTab7() {
  const pane = el('pane-india');
  if (!pane) return;
  const d = DB.tab_india;
  const alliances = DB._rawAlliances;
  const constraints = DB._rawConstraints;
  const conditions = DB._rawConditions;

  let html = `
    <section class="section">
      <div class="sec-label">${t(d.label)}</div>
      <div class="sec-title">${t(d.title)}</div>
      <div class="sec-intro">${state.lang==='mr'?'भारताकडे जगातील ४थे/५वे सर्वात मोठे REE साठे आहेत आणि १००% लिथियम, कोबाल्ट, निकेल आयात आहे. हे अंतर भूगर्भशास्त्रीय नाही — ते धोरणात्मक आहे.':"India holds the 4th/5th largest REE reserves globally and imports 100% of its lithium, cobalt, and nickel. The gap is not geological — it is a policy choice. This tab maps what India has, what it lacks, and what the current window of opportunity looks like."}</div>`;

  // Scorecard
  html += `<div class="scorecard-wrap">
    <div class="scorecard-title">${t(d.scorecardLabel)}</div>
    <div class="scorecard-grid">
      ${d.scorecard.map(row=>`
        <div class="scorecard-row">
          <div class="scorecard-area">${t(row.area)}</div>
          <div class="scorecard-bars">
            ${[1,2,3,4,5].map(n=>`<div class="scorecard-bar ${n<=row.score?'filled':''}" style="${n<=row.score?`background:${row.score>=4?'var(--secondary)':row.score>=3?'var(--accent2)':'var(--accent)'}`:''}"></div>`).join('')}
          </div>
          <div class="scorecard-note">${t(row.note)}</div>
        </div>`).join('')}
    </div>
  </div>`;

  html += `</section>`;

  // Resources section
  html += `<section class="section">
    <div class="sec-label">${state.lang==='mr'?'८.१':'8.1'} — ${state.lang==='mr'?'भारताकडे काय आहे':'What India Has'}</div>
    <div class="sec-title">${state.lang==='mr'?'भूगर्भीय हात':'The geological hand'}</div>
    <div class="sec-intro">${state.lang==='mr'?'भारताकडे जगातील ४थे/५वे सर्वात मोठे REE साठे आहेत आणि महत्त्वपूर्ण ग्रॅफाइट, गॅलियम, टायटॅनियम संसाधने आहेत.':'India holds the 4th/5th largest REE reserves globally plus significant graphite, gallium, and titanium resources. NCMM has committed ₹34,300 crore through FY2031 to convert this endowment into supply chain position.'}</div>
    <div class="resources-grid">
      ${d.resources.map(r=>`<div class="resource-card">
        <div class="resource-mineral">${t(r.mineral)}</div>
        <div class="resource-stat">${r.stat}</div>
        <div class="resource-note">${t(r.note)}</div>
        ${srcLink(r.src)}
      </div>`).join('')}
    </div>
    ${factBox(t(d.thoriumTrap.body))}
  </section>`;

  // Alliances
  html += `<section class="section">
    <div class="sec-label">${state.lang==='mr'?'८.२':'8.2'} — ${state.lang==='mr'?'आघाडी आर्किटेक्चर':'Alliance Architecture'}</div>
    <div class="sec-title">${state.lang==='mr'?'भारताच्या भागीदारी — चौकटी बांधल्या, अंमलबजावणी पेंडिंग':"India's partnerships — frameworks built, execution pending"}</div>
    <div class="sec-intro">${t(d.allianceInsight.body)}</div>
    <div class="alliances-grid">
      ${alliances.map(a=>`<div class="alliance-card">
        <div class="alliance-name">${a.name}</div>
        <div class="alliance-date">${a.date}</div>
        <div class="alliance-parties">${a.parties}</div>
        <div class="alliance-detail">${a.detail}</div>
      </div>`).join('')}
    </div>
    ${srcLinks(['mea_india_us_2026','ncmm_2026','reddy_kotasthane_ht'])}
  </section>`;

  // Constraints
  html += `<section class="section">
    <div class="sec-label">${state.lang==='mr'?'८.३':'8.3'} — ${state.lang==='mr'?'अडसर':'The Constraints'}</div>
    <div class="sec-title">${state.lang==='mr'?'भारताची संभावना पुरवठा साखळीत का रूपांतरित होत नाही':"Why India's potential has not converted into supply chain position"}</div>
    <div class="sec-intro">${state.lang==='mr'?'खाली दिलेले चार अडसर भारताची भूगर्भीय संभावना आणि पुरवठा साखळीतील स्थान यांच्यातील अंतर स्पष्ट करतात.':'Four structural constraints explain the gap between India\'s geological potential and its supply chain position.'}</div>
    <div class="constraints-grid">
      ${constraints.map(con=>`<div class="constraint-card severity-${con.severity.toLowerCase()}">
        <div class="constraint-severity">${con.severity}</div>
        <div class="constraint-title">${con.title}</div>
        <div class="constraint-text">${con.text}</div>
      </div>`).join('')}
    </div>
  </section>`;

  // Conditions
  html += `<section class="section">
    <div class="sec-label">${state.lang==='mr'?'८.४':'8.4'} — ${state.lang==='mr'?'रेड्डी-कोतस्थाने चौकट':'The Reddy-Kotasthane Framework'}</div>
    <div class="sec-title">${state.lang==='mr'?'कार्यक्षम कराराासाठी पाच अटी':'Five conditions for a deal that actually works'}</div>
    <div class="sec-intro">${t(d.conditionIntro.body)}</div>
    <div class="conditions-grid">
      ${conditions.map(con=>`<div class="condition-card">
        <div class="condition-num">${con.num}</div>
        <div class="condition-title">${con.title}</div>
        <div class="condition-text">${con.text}</div>
      </div>`).join('')}
    </div>
    ${srcLinks([d.conditionIntro.src])}
  </section>`;

  pane.innerHTML = html;
}

// ══════════════════════════════════════════════
// ══════════════════════════════════════════════
// Canonical renderAll — calls all 9 tab renderers in order
function renderAll() {
  renderHeader();
  renderNav();
  renderModal();
  renderLangToggle();
  renderTab1();
  renderTab2();
  renderTab3();
  renderTab4();
  renderTab5();
  renderTabHuman();
  renderTab6();
  renderTab7();
  renderTab8();
}
