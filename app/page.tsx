export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Fikiru Tamiru</h1>
        <p>Computer Science Student & Developer</p>
        <p>Next.js • PostgreSQL • JavaScript • React • CSS •HTML</p>
      </section>

      <section className="projects">
        <h2>Selected Projects</h2>

        {/* E-Commerce */}
        <div className="project-card">
          <h3>E-Commerce Website</h3>
          <p>
            A responsive online store with product listings, shopping cart,
            checkout, and user authentication using Next.js and Tailwind CSS.
          </p>
          <span className="tech">Next.js • React • Tailwind CSS • Stripe</span>
        </div>

        {/* Student Management */}
        <div className="project-card">
          <h3>Student Management System</h3>
          <p>
            A dashboard for managing student data, courses, and attendance
            — built with a clean UI and structured logic.
          </p>
          <span className="tech">React • PostgreSQL • Express • REST API</span>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: fikiru@email.com</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Fikiru-CS" target="_blank">
            github.com/yourusername
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/fikiru-tamiru-06370037a/" target="_blank">
            linkedin.com/in/fikiru-tamiru-06370037a/
          </a>
        </p>
      </section>
    </main>
  );
}
