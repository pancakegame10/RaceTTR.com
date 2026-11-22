pages.contact = () => {
  const query = new URLSearchParams(location.hash.split('?')[1]);
  const number = query.get('driver');
  const topic = query.get('type');
  const driver = query.get('type') === 'sponsor' && Object.hasOwn(teamProfiles, number)
    ? teamProfiles[number] : null;
  return hero('CONTACT TROY TONEY RACING','Let’s start a conversation.','Sponsorship, driver development, or your first step into karting—connect with TTR.')+`<section><div class="wrap"><div class="grid two"><div><div class="eyebrow">CONNECT WITH TTR</div>${driver ? `<h2>Sponsor ${driver.name}</h2><p>Mention kart #${number} and ${driver.className} when you contact TTR.</p>` : '<h2>YOUR NEXT STEP<br><em>STARTS HERE.</em></h2>'}<p><a href="mailto:TroyToneyRacing@yahoo.com">TroyToneyRacing@yahoo.com</a></p><p><a href="tel:+15742183106">574-218-3106</a> · <a href="tel:+13175903538">317-590-3538</a></p></div><div class="card"><h3>What would you like to discuss?</h3><p><strong>Sponsorship:</strong> Tell us about your business, goals, and the type of partnership you have in mind.</p><p><strong>Driver interest:</strong> Share your class, experience, and racing goals. A parent or guardian should make contact for a minor.</p><p><strong>Team support:</strong> Ask about coaching, equipment, race-day support, and current availability.</p></div></div></div></section><section class="section-dark"><div class="wrap"><h2>Contact the team</h2><form class="contact-form ttr-refined-form" id="contact-form" action="https://formspree.io/f/xnppknpn" method="POST">
          <input type="hidden" name="_subject" value="New Troy Toney Racing website inquiry">
          <div class="ttr-field-row">
            <div class="field"><label for="name">Name *</label><input type="text" id="name" name="name" autocomplete="name" placeholder="Your name" required></div>
            <div class="field"><label for="email">Email *</label><input type="email" id="email" name="email" autocomplete="email" placeholder="you@example.com" required></div>
          </div>
          <div class="ttr-field-row">
            <div class="field"><label for="company">Company <span class="ttr-optional">(optional)</span></label><input type="text" id="company" name="company" autocomplete="organization" placeholder="Company or organization"></div>
            <div class="field"><label for="reason">What's this about?</label><select id="reason" name="reason"><option value="Sponsorship" ${topic === "sponsor" ? "selected" : ""}>Sponsorship</option><option value="Services" ${topic === "services" ? "selected" : ""}>Services</option><option value="Volunteering" ${topic === "volunteer" ? "selected" : ""}>Volunteering</option><option value="Joining the team">Joining the team</option><option value="Something else">Something else</option></select></div>
          </div>
          <div class="field"><label for="message">Message *</label><textarea id="message" name="message" rows="6" placeholder="Tell us how we can help..." required></textarea></div>
          ${driver ? `<input type="hidden" name="driver" value="${driver.name} #${number}">` : ""}<button type="submit" id="submit-button" class="btn btn-primary ttr-submit">Send message</button>
          <p id="form-status" role="status" aria-live="polite" class="ttr-form-status"></p>
        </form></div></section>`;};
