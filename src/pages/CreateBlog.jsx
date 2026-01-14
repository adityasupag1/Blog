import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    image: "",
    description: "",
    content: "",
  });

  const [errors, setErrors] = useState({});

  const categories = ["Technology", "Lifestyle", "Health", "Travel", "Education", "Food", "Business"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    } else if (!/^https?:\/\/.+/.test(formData.image)) {
      newErrors.image = "Enter a valid URL (http/https)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newBlog = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString(), // Add current date
    };

    setBlogs([newBlog, ...blogs]); // Add to beginning of list
    navigate("/blogs");
  };

  useEffect(()=>{
   localStorage.setItem("blogs",JSON.stringify(blogs))
  },[blogs])

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>✨ Create New Blog</h1>

        <form style={formStyle} onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div style={inputGroup}>
            <label style={labelStyle}>Blog Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter meaningful title"
              value={formData.title}
              onChange={handleChange}
              style={errors.title ? { ...inputStyle, ...errorBorder } : inputStyle}
            />
            {errors.title && <span style={errorText}>{errors.title}</span>}
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Author Name</label>
            <input
              type="text"
              name="author"
              placeholder="Who is writing?"
              value={formData.author}
              onChange={handleChange}
              style={errors.author ? { ...inputStyle, ...errorBorder } : inputStyle}
            />
            {errors.author && <span style={errorText}>{errors.author}</span>}
          </div>

          {/* Row 2 */}
          <div style={inputGroup}>
            <label style={labelStyle}>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={errors.category ? { ...inputStyle, ...errorBorder } : inputStyle}
            >
              <option value="">Select Category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <span style={errorText}>{errors.category}</span>}
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              style={errors.image ? { ...inputStyle, ...errorBorder } : inputStyle}
            />
            {errors.image && <span style={errorText}>{errors.image}</span>}
          </div>

          {/* Descriptions */}
          <div style={inputGroup}>
            <label style={labelStyle}>Short Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Brief summary of your blog..."
              value={formData.description}
              onChange={handleChange}
              style={errors.description ? { ...inputStyle, ...errorBorder } : inputStyle}
            />
            {errors.description && <span style={errorText}>{errors.description}</span>}
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Main Content</label>
            <textarea
              name="content"
              rows="8"
              placeholder="Write your amazing story here..."
              value={formData.content}
              onChange={handleChange}
              style={errors.content ? { ...inputStyle, ...errorBorder } : inputStyle}
            />
            {errors.content && <span style={errorText}>{errors.content}</span>}
          </div>

          <button type="submit" style={btnStyle}>🚀 Publish Blog</button>
        </form>
      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const pageStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(var(--overlay-bg), var(--overlay-bg)), url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
  transition: "background 0.3s",
};

const containerStyle = {
  width: "100%",
  maxWidth: "700px",
  background: "var(--card-bg)",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  backdropFilter: "blur(10px)",
  transition: "background 0.3s",
};

const titleStyle = {
  textAlign: "center",
  color: "var(--text-accent)",
  marginBottom: "30px",
  fontSize: "2.2rem",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const inputGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  color: "var(--text-main)",
  fontSize: "1rem",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  background: "rgba(255, 255, 255, 0.1)",
  color: "var(--text-main)",
  fontSize: "1rem",
  outline: "none",
  transition: "border 0.3s",
};

const errorBorder = {
  border: "1px solid #ff4d4d",
};

const errorText = {
  color: "#ff4d4d",
  fontSize: "0.85rem",
};

const btnStyle = {
  marginTop: "10px",
  padding: "15px",
  background: "var(--text-accent)",
  color: "#000",
  fontSize: "1.1rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "transform 0.2s",
};

export default CreateBlog;
