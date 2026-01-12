import blogsData from "./data/blogs";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (!storedBlogs || storedBlogs.length !== blogsData.length) {
      localStorage.setItem("blogs", JSON.stringify(blogsData));
    }
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Blogs state with localStorage
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs
      ? JSON.parse(savedBlogs)
      : [
        {
          id: 1,
          title: "AI in Everyday Life",
          description: "Discover AI in daily life.",
          content: "Artificial Intelligence is changing our world rapidly.",
        },
      ];
  });

  // Save blogs to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />

        {/* Create / Edit */}
        <Route path="/create" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
