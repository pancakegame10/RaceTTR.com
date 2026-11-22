pages.home = () => `
<section class="hq-opening"><div class="wrap">
  <div class="hq-title">
    <div><div class="eyebrow">INDIANA · COMPETITIVE KART RACING</div>
    <h1 class="hq-tagline">Developing drivers from Instinct to Execution</h1>
    <p class="lead">2027 Race HQ</p></div>
    <div class="ttr-crest"><img src="assets/ttr-logo.jpg" alt="Troy Toney Racing crest" width="1536" height="1024"></div>
  </div>
  <div class="hq-grid">
    <article class="hq-feature">
      <div class="eyebrow">2027 SEASON</div><h2>Schedule &amp; results</h2>
      <p>Next race date and venue are pending confirmation. The Paddock is home to the team calendar, results, and race recaps.</p>
      ${link('results','View schedule &amp; results')}
    </article>
    <article class="hq-record">
      <h2>2026 results</h2>
      <p><strong>2</strong> Championships</p>
      <p><strong>35</strong> Podiums</p>
    </article>
  </div>
</div></section>
<section class="section-dark"><div class="wrap">
  <div class="race-section-heading"><h2>The starting grid</h2>${link('team','Full team page',true)}</div>
  <div class="grid race-roster">${Object.entries(teamProfiles).map(([number, driver]) =>
    teamCard(number, driver.name, driver.className)).join('')}</div>
</div></section>
<section class="race-partnership"><div class="wrap race-section-heading"><div><div class="eyebrow">2027 PARTNERSHIPS</div><h2>Partner with TTR</h2><p>Explore kart and apparel branding, driver sponsorship, or in-kind support.</p></div>${link('sponsor','Explore sponsorship')}</div></section>`;

pages['home-grid'] = pages.home;
