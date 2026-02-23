// Shared brief template generator
// Each brief page includes this, then calls renderBrief(data)

function renderBrief(d) {
  document.title = `CRO Brief — ${d.company} | Agentra Lead Intelligence`;
  document.getElementById('brief').innerHTML = `
  <div class="cover">
    <div class="brand">AGENTRA LEAD INTELLIGENCE</div>
    <h1>${d.company}</h1>
    <div class="subtitle">Executive CRO Briefing — RapidScale Opportunity Assessment</div>
    <div class="date">Prepared: ${d.date} · Confidential</div>
  </div>

  <div class="section">
    <h2>Executive Summary</h2>
    <p>${d.execSummary}</p>
    <div class="highlight-box">
      <div class="highlight-item"><span class="hl-label">Priority Score</span><span class="hl-value">${d.score}/10</span></div>
      <div class="highlight-item"><span class="hl-label">Est. Revenue</span><span class="hl-value">${d.estRevenue}</span></div>
      <div class="highlight-item"><span class="hl-label">Est. ARR Potential</span><span class="hl-value">${d.arrPotential}</span></div>
      <div class="highlight-item"><span class="hl-label">Lead Service</span><span class="hl-value">${d.leadService}</span></div>
    </div>
  </div>

  <div class="section">
    <h2>Company Profile</h2>
    <table class="profile-table">
      ${d.profile.map(r=>`<tr><td class="key">${r[0]}</td><td>${r[1]}</td></tr>`).join('')}
    </table>
  </div>

  <div class="section">
    <h2>Why This Is a High-Value Target</h2>
    ${d.whyHighValue.map(item=>`
      <div class="reason">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <h2>Key Stakeholders</h2>
    <div class="stakeholders">
      ${d.stakeholders.map(s=>`
        <div class="stakeholder-card">
          <div class="sh-name">${s.name}</div>
          <div class="sh-title">${s.title}</div>
          <div class="sh-relevance">${s.relevance}</div>
          ${s.linkedin?`<a href="${s.linkedin}" target="_blank" class="sh-link">LinkedIn →</a>`:''}
        </div>
      `).join('')}
    </div>
  </div>

  <div class="section">
    <h2>Why CRO / C-Level Engagement Is Required</h2>
    <p>${d.whyCRO}</p>
    <ul>
      ${d.croReasons.map(r=>`<li>${r}</li>`).join('')}
    </ul>
  </div>

  <div class="section">
    <h2>RapidScale Service Mapping</h2>
    <table class="service-table">
      <tr><th>Service</th><th>Application</th><th>Est. Annual Value</th></tr>
      ${d.services.map(s=>`<tr><td>${s.name}</td><td>${s.application}</td><td>${s.value}</td></tr>`).join('')}
    </table>
    <div class="total-row">Total Estimated ARR: <strong>${d.arrPotential}</strong></div>
  </div>

  <div class="section">
    <h2>Intelligence Sources</h2>
    <ul class="sources">
      ${d.sources.map(s=>`<li><strong>${s.type}:</strong> ${s.detail}</li>`).join('')}
    </ul>
  </div>

  <div class="section">
    <h2>Recommended Approach</h2>
    <div class="approach">
      <div class="approach-step"><span class="step-num">1</span><div><strong>${d.approach[0].title}</strong><p>${d.approach[0].detail}</p></div></div>
      <div class="approach-step"><span class="step-num">2</span><div><strong>${d.approach[1].title}</strong><p>${d.approach[1].detail}</p></div></div>
      <div class="approach-step"><span class="step-num">3</span><div><strong>${d.approach[2].title}</strong><p>${d.approach[2].detail}</p></div></div>
    </div>
  </div>

  <div class="section">
    <h2>The Hook</h2>
    <blockquote>${d.hook}</blockquote>
  </div>

  <div class="footer">
    <p>Prepared by Agentra Lead Intelligence System for RapidScale · ${d.date}</p>
    <p>Confidential — For internal use only</p>
  </div>
  `;
}
