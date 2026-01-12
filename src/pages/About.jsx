import React from "react";

const About = () => {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Profile Section */}
        <div style={profileSection}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            style={profileImage}
          />
          <h1 style={titleStyle}>Ayushi</h1>
          <p style={subtitleStyle}>Computer Science Student & Web Developer</p>
        </div>

        {/* Introduction */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>👋 About Me</h2>
          <p style={textStyle}>
            Hi there! I'm <b>Ayushi</b>, a passionate Computer Science student with a love for building interactive and beautiful web applications.
            I enjoy solving problems and turning ideas into reality using code. This blog is my creative outlet to share what I learn and build.
          </p>
        </div>

        {/* Skills & Interests */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>🚀 Skills & Interests</h2>
          <div style={skillsContainer}>
            {["React.js", "JavaScript", "HTML/CSS", "UI/UX Design", "Web Development", "Artificial Intelligence"].map((skill, index) => (
              <span key={index} style={skillTag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Purpose */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>🎯 Purpose of this Blog</h2>
          <p style={textStyle}>
            This platform serves as a space to document my journey, share tutorials, and discuss trends in technology.
            Whether you are a beginner or a pro, I hope you find something valuable here!
          </p>
        </div>

        {/* Contact */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>📫 Let's Connect</h2>
          <p style={textStyle}>Feel free to reach out to me for collaborations or just a chat!</p>

          <div style={socialLinks}>
            <a href="mailto:ayushi@example.com" style={socialBtn}>📧 Email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={socialBtn}>🐙 GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={socialBtn}>💼 LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={socialBtn}>🐦 Twitter</a>
          </div>
        </div>

        <p style={{ marginTop: "40px", fontStyle: "italic", opacity: 0.8 }}>
          “Learning never stops — keep building 🚀”
        </p>

      </div>
    </div>
  );
};

/* ---------- STYLES ---------- */

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1519681393798-2f483b8e104f?auto=format&fit=crop&w=1920&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
  color: "white",
};

const containerStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(15px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  padding: "50px",
  maxWidth: "800px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
};

const profileSection = {
  marginBottom: "30px",
};

const profileImage = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid rgba(255, 255, 255, 0.3)",
  marginBottom: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
};

const titleStyle = {
  fontSize: "2.5rem",
  margin: "0 0 10px 0",
  background: "linear-gradient(90deg, #ffdd57, #ff8a00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
};

const subtitleStyle = {
  fontSize: "1.1rem",
  opacity: 0.9,
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const sectionStyle = {
  marginTop: "40px",
  textAlign: "left",
};

const headingStyle = {
  fontSize: "1.5rem",
  marginBottom: "15px",
  color: "#ffdd57",
  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
  paddingBottom: "8px",
  display: "inline-block",
};

const textStyle = {
  fontSize: "1.05rem",
  lineHeight: "1.7",
  opacity: 0.9,
};

const skillsContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const skillTag = {
  background: "rgba(255, 255, 255, 0.15)",
  padding: "8px 15px",
  borderRadius: "20px",
  fontSize: "0.95rem",
  fontWeight: "500",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "transform 0.2s, background 0.3s",
  cursor: "default",
};

const socialLinks = {
  display: "flex",
  gap: "15px",
  marginTop: "20px",
  flexWrap: "wrap",
};

const socialBtn = {
  textDecoration: "none",
  color: "#000",
  background: "#ffdd57",
  padding: "10px 20px",
  borderRadius: "30px",
  fontWeight: "bold",
  fontSize: "0.95rem",
  transition: "transform 0.2s, background 0.3s",
  display: "inline-block",
};

export default About;
