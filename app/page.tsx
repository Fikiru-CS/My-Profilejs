export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">Company Logo</div>
        <h1 className="title">Ethiopian Service Facilitator</h1>
        <div className="auth-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn">Register</button>
        </div>
      </header>

      {/* Services */}
      <main className="main">
        <section className="services">
          <h2>Our Services</h2>
          <div className="service-list">
            <span>Visa Service</span>
            <span>Business Registration</span>
            <span>Legal Consulting</span>
            <span>Real Estate</span>
            <span>Tour & Travel</span>
            <span>Import / Export</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Office Locations</h3>
            <p>Bole Sub-City, Addis Ababa</p>
            <p>Kaffa Zone, Bonga, SNNPR</p>
          </div>

          <div>
            <h3>Contact Information</h3>
            <p>Email: contact@ethiofacilitator.com</p>
            <p>Phone: +251 912 345 678</p>
          </div>

          <div>
            <h3>Sponsors</h3>
            <p>Ethio Telecom</p>
            <p>Bank of Abyssinia</p>
          </div>

          <div>
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Telegram</p>
            <p>LinkedIn</p>
          </div>
        </div>

        <p className="copyright">
          © 2025 Ethiopian Service Facilitator. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
