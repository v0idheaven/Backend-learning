
function Home() {

  return (
    <div className="landing-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <span className="hero-badge">Cartoon Hub</span>
          <h1>Welcome to your friendliest auth playground.</h1>
          <p>Fast, cheerful sign-in for people who love bold colors, clear steps, and a playful first impression.</p>
          <div className="hero-actions">
            <a href="/login" className="cta-button">Get started</a>
            <button type="button" className="secondary-button">See how it works</button>
          </div>
        </div>

        <div className="hero-art">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="character">
            <div className="character-head" />
            <div className="character-body" />
            <div className="character-hand left" />
            <div className="character-hand right" />
            <div className="character-smile" />
          </div>
          <div className="sparkle sparkle-1" />
          <div className="sparkle sparkle-2" />
        </div>
      </div>

      <div className="features-grid">
        <article className="feature-card">
          <div className="feature-emoji">✨</div>
          <h2>Easy onboarding</h2>
          <p>Friendly flows with gentle guidance make sign-in feel quick and welcoming.</p>
        </article>

        <article className="feature-card">
          <div className="feature-emoji">🛡️</div>
          <h2>Secure access</h2>
          <p>Built with security patterns that protect users without slowing them down.</p>
        </article>

        <article className="feature-card">
          <div className="feature-emoji">🎨</div>
          <h2>Playful style</h2>
          <p>Cartoon-inspired visuals and bright accents make your first impression memorable.</p>
        </article>
      </div>
    </div>
  )
}

export default Home