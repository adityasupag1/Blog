import { Link } from "react-router-dom";
import "./Home.css";

const latestBlogs = [
  {
    id: 1,
    title: "AI in Everyday Life",
    desc: "How artificial intelligence is changing our daily routine.",
  },
  {
    id: 2,
    title: "Web Development Trends",
    desc: "Latest trends every web developer should know.",
  },
  {
    id: 3,
    title: "Healthy Lifestyle",
    desc: "Simple habits to stay healthy and productive.",
  },
];

const Home = () => {
  return (
    <div className="home">

      {/* HEADER */}
      <header className="home-header">
        <div className="logo">📝 LIFE HACKER </div>
        <h1>Welcome to LIFE HACKER Website</h1>
        <p>Read • Write • Explore Ideas</p>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>Hi, I’m Ayushi 👋</h2>
        <p>
          I’m a Computer Science student and blogger.
          I write blogs on technology, lifestyle, learning and more.
        </p>
      </section>

      {/* LATEST BLOGS */}
      <section className="latest-blogs">
        <h2>Latest Blogs</h2>

        <div className="blog-preview">
          {latestBlogs.map((blog) => (
            <div key={blog.id} className="preview-card">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>

              <Link to="/blogs" className="read-more">
                Explore Blogs →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 MyBlog | All Rights Reserved</p>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </footer>

    </div>
  );
};

export default Home;
