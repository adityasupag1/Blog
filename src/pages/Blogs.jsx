import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ----------------- Top constant blogs -----------------
const blogs = [
  { id: 1, title: "AI in Everyday Life", desc: "How artificial intelligence is changing our daily life.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60", category: "Tech" },
  { id: 2, title: "Web Development Trends", desc: "Latest trends every web developer should know.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", category: "Education" },
  { id: 3, title: "React Tips for Beginners", desc: "Best practices to write clean React code.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee", category: "Tech" },
  { id: 4, title: "Healthy Lifestyle", desc: "Simple habits for a healthy and happy life.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", category: "Lifestyle" },
  { id: 5, title: "Mental Health Matters", desc: "Why mental health is equally important.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9", category: "Lifestyle" },
  { id: 6, title: "Learning JavaScript", desc: "Tips to master JavaScript faster.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", category: "Education" },
  { id: 7, title: "Travel on Budget", desc: "Explore the world without spending much.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", category: "Lifestyle" },
  { id: 8, title: "Productivity Hacks", desc: "Work smart and manage time effectively.", image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58", category: "Education" },
];

// ----------------- Blogs Component -----------------
const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const [selectedCategory, setSelectedCategory] = useState("All");


 useEffect(() => {
  const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  const storedIds = new Set(storedBlogs.map(b => b.id));

  const uniqueDummyBlogs = blogs.filter(
    b => !storedIds.has(b.id)
  );

  const mergedBlogs = [...storedBlogs, ...uniqueDummyBlogs];

  setBlogList(mergedBlogs);
}, []);



  // Filter by search
  const filteredBlogs = blogList.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "All" || blog.category === selectedCategory)
  );


  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Latest Blogs</h1>
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        {["All", "Tech", "Lifestyle", "Education"].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              margin: "0 8px",
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              background: selectedCategory === cat ? "#ffdd57" : "#333",
              color: selectedCategory === cat ? "#000" : "#fff",
            }}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Search Input */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search blog by title"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          style={styles.searchInput}
        />
      </div>

      {/* Blogs Grid */}
      <div style={styles.grid}>
        {currentBlogs.map(blog => (
          <div
            key={blog.id}
            style={{
              ...styles.card,
              transform: hovered === blog.id ? "translateY(-10px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(blog.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={blog.image} alt={blog.title} style={styles.image} />
            <h3>{blog.title}</h3>
            <p>{blog.description || blog.desc}</p>
            <Link to={`/blogs/${blog.id}`} style={styles.btn}>Read More</Link>
            <Link
              to={`/edit/${blog.id}`}
              style={{
                marginLeft: "10px",
                color: "#ffdd57",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Edit
            </Link>

          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div style={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              ...styles.pageBtn,
              background: currentPage === i + 1 ? "var(--text-accent)" : "#222",
              color: currentPage === i + 1 ? "#000" : "#fff",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

// ----------------- Styles -----------------
const styles = {
  page: {
    minHeight: "100vh",
    padding: "50px 20px",
    background: "linear-gradient(var(--overlay-bg), var(--overlay-bg)), url(https://images.unsplash.com/photo-1503264116251-35a269479413)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "var(--text-main)",
    transition: "background 0.3s, color 0.3s",
  },
  heading: { textAlign: "center", fontSize: "3rem", marginBottom: "30px", textShadow: "2px 2px 8px rgba(0,0,0,0.5)", color: "var(--text-accent)" },
  searchInput: { padding: "10px", width: "90%", maxWidth: "400px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
  grid: {
    display: "grid",
    gap: "25px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: { background: "var(--card-bg)", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", transition: "transform 0.3s ease, background 0.3s" },
  image: { width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" },
  btn: { display: "inline-block", marginTop: "10px", padding: "8px 18px", background: "var(--text-accent)", color: "#000", textDecoration: "none", borderRadius: "20px", fontWeight: "bold" },
  pagination: { marginTop: "20px", textAlign: "center" },
  pageBtn: { margin: "0 5px", padding: "8px 12px", border: "none", borderRadius: "6px", cursor: "pointer" },
};

export default Blogs;
