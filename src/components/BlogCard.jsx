import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const cardStyle = {
    background: "rgba(0,0,0,0.6)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
    transition: "transform 0.3s",
    color: "white",
    textAlign: "center"
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px"
  };

  const readMoreStyle = {
    textDecoration: "none",
    color: "#ffdd57",
    fontWeight: "bold",
    transition: "color 0.3s"
  };

  return (
    <div style={cardStyle} className="blog-card">
      {blog.image && <img src={blog.image} alt={blog.title} style={imageStyle} />}
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <Link to={`/blogs/${blog.id}`} style={readMoreStyle}>Read More</Link>

      {/* Hover effect */}
      <style>{`
        .blog-card:hover {
          transform: translateY(-5px);
        }
        .blog-card a:hover {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default BlogCard;
