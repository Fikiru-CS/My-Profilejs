import Image from "next/image";
export default function Home() {
  return (
    <main className="container">
      <section className="hero">
  <Image
    src="/images/profile.jpg"
    alt="Fikiru Tamiru"
    width={140}
    height={140}
    className="profile-img"
  />
  <h1>Fikiru Tamiru</h1>
  <p>Computer Science Student & Developer</p>
  <p>Next.js • PostgreSQL • JavaScript • React • CSS • HTML</p>
</section>


      <section className="projects">
        <h2>Selected Projects</h2>

        {/* E-Commerce */}
        <div className="project-card">
  <Image
    src="/images/ecommerce.jpg"
    alt="E-Commerce Project"
    width={400}
    height={220}
    className="project-img"
  />
  <h3>E-Commerce Website</h3>
  <p>...</p>
  <span className="tech">Next.js • React • Tailwind CSS • Stripe</span>
</div>


        {/* Student Management */}
        <div className="project-card">
  <Image
    src="/images/student.jpg"
    alt="Student Management System"
    width={400}
    height={220}
    className="project-img"
  />
  <h3>Student Management System</h3>
  <p>...</p>
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
}  );
}
