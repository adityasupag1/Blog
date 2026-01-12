import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  // likes & comments state
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Related blogs
  const [related, setRelated] = useState([]);

  // load likes, comments & related blogs from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${id}`);
    const savedComments = localStorage.getItem(`comments-${id}`);

    if (savedLikes) setLikes(Number(savedLikes));
    if (savedComments) setComments(JSON.parse(savedComments));

    // Related blogs: 3 random blogs excluding current
    const relatedBlogs = blogs.filter(b => b.id !== Number(id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRelated(relatedBlogs);
  }, [id]);

  // like handler
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes);
  };

  // comment handler
  const handleComment = (e) => {
    e.preventDefault();
    if (!userName || !commentText) return;

    const newComment = { user: userName, text: commentText };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

    setUserName("");
    setCommentText("");
  };

  if (!blog) return <h2 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Blog not found</h2>;

  return (
    <div style={pageStyle(blog.image)}>
      {/* Back button */}
      <div style={{ marginBottom: "20px" }}>
        <Link to="/blogs" style={backBtn}>← Back to Blogs</Link>
      </div>
      <Link
        to={`/edit/${blog.id}`}
        style={{
          padding: "10px 15px",
          background: "#ffdd57",
          color: "black",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Edit Blog
      </Link>

      <div style={card}>
        <h1>{blog.title}</h1>
        <p><b>{blog.author}</b> • {blog.date}</p>
        <p style={{ marginTop: "20px" }}>{blog.content}</p>

        {/* LIKE BUTTON */}
        <button onClick={handleLike} style={likeBtn}>❤️ Like ({likes})</button>

        {/* COMMENTS */}
        <h3 style={{ marginTop: "30px" }}>Comments</h3>
        <form onSubmit={handleComment} style={form}>
          <input type="text" placeholder="Your name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <textarea placeholder="Write a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
          <button type="submit">Add Comment</button>
        </form>

        {/* COMMENT LIST */}
        {comments.map((c, i) => (
          <div key={i} style={commentBox}>
            <b>{c.user}</b>
            <p>{c.text}</p>
          </div>
        ))}

        {/* RELATED BLOGS */}
        {related.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h3 style={relatedHeading}>Related Blogs</h3>
            <div style={relatedGrid}>
              {related.map(r => (
                <Link key={r.id} to={`/blogs/${r.id}`} style={relatedCard}>
                  <img src={r.image} alt={r.title} style={relatedImg} />
                  <h4>{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */
const pageStyle = (img) => ({
  minHeight: "100vh",
  padding: "40px 20px",
  background: `linear-gradient(var(--overlay-bg), var(--overlay-bg)), url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background 0.3s",
});

const backBtn = {
  display: "inline-block",
  padding: "8px 16px",
  background: "var(--text-accent)",
  color: "#000",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  transition: "background 0.3s",
};

const card = {
  background: "var(--card-bg)",
  color: "var(--text-main)",
  padding: "40px",
  borderRadius: "15px",
  maxWidth: "800px",
  margin: "0 auto",
  transition: "background 0.3s, color 0.3s",
};

const likeBtn = { marginTop: "20px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", background: "var(--text-accent)", border: "none", borderRadius: "8px" };

const form = { display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" };

const commentBox = { background: "var(--footer-bg)", padding: "10px", borderRadius: "8px", marginTop: "10px", color: "var(--text-main)", transition: "background 0.3s, color 0.3s" };

const relatedHeading = { marginBottom: "15px", color: "var(--text-accent)" };
const relatedGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px" };
const relatedCard = { background: "var(--card-bg)", padding: "10px", borderRadius: "10px", textAlign: "center", color: "var(--text-main)", textDecoration: "none", transition: "transform 0.3s ease, background 0.3s, color 0.3s" };
const relatedImg = { width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" };

export default BlogDetails;
