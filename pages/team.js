pages.team = () => hero('TROY TONEY RACING', 'Meet the drivers.',
  'Select a driver to view their profile, career stats, and sponsorship options.'
) + `<section class="section-dark"><div class="wrap">
  <div class="grid two team-grid">
    ${Object.entries(teamProfiles).map(([number, driver]) =>
      teamCard(number, driver.name, driver.className)).join('')}
  </div>
</div></section>`;
