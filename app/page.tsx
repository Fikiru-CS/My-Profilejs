import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      {/* HERO with background + profile image */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
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

      {/* PROJECTS */}
      <section className="projects">
        <h2>Selected Projects</h2>

        {/* E-Commerce */}
        <div className="project-card">
          <Image
            src="/images/ecommerce.png"
            alt="E-Commerce Website"
            width={500}
            height={260}
            className="project-img"
          />
          <h3>E-Commerce Website</h3>
          <p>
            A responsive online store with product listings, shopping cart,
            checkout, and user authentication.
          </p>
          <span className="tech">
            Next.js • React • Tailwind CSS • Stripe
          </span>
        </div>

        {/* Student Management */}
        <div className="project-card">
          <Image
            src="/images/student.png"
            alt="Student Management System"
            width={500}
            height={260}
            className="project-img"
          />
          <h3>Student Management System</h3>
          <p>
            A dashboard for managing student data, courses, and attendance.
          </p>
          <span className="tech">
            React • PostgreSQL • Express • REST API
          </span>
        </div>
      </section>

      {/* CONTACT with ICON images */}
      <section className="contact">
        <h2>Contact</h2>

        <div className="contact-item">
          <Image src="/images/email.png" alt="Email" width={24} height={24} />
          <span>fikiru@email.com</span>
        </div>

        <div className="contact-item">
          <Image src="/images/github.png" alt="GitHub" width={24} height={24} />
          <a href="https://github.com/Fikiru-CS" target="_blank">
            github.com/Fikiru-CS
          </a>
        </div>

        <div className="contact-item">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <a
            href="https://linkedin.com/in/fikiru-tamiru-06370037a/"
            target="_blank"
          >
            linkedin.com/in/fikiru-tamiru
          </a>
        </div>
      </section>
    </main>
  );
}
