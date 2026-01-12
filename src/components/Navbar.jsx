import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyBlog</div>

      <div style={styles.navContainer}>
        <ul style={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.active } : styles.link
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.active } : styles.link
              }
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/create"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.active } : styles.link
              }
            >
              Create
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.active } : styles.link
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} style={styles.themeBtn}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "var(--nav-bg)", // Use variable
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "background 0.3s",
  },

  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "var(--text-accent)",
  },

  navContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0,
    padding: 0,
  },

  link: {
    textDecoration: "none",
    color: "var(--nav-text)", // Use variable
    fontSize: "1.1rem",
    paddingBottom: "4px",
    borderBottom: "2px solid transparent",
    transition: "0.3s",
  },

  active: {
    color: "var(--text-accent)",
    borderBottom: "2px solid var(--text-accent)",
  },

  themeBtn: {
    background: "transparent",
    border: "none",
    color: "var(--text-accent)",
    fontSize: "1.2rem",
    cursor: "pointer",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Navbar;
