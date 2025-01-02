import React from "react";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Mail, Code } from "lucide-react";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        margin: 0,
        padding: 0,
      }}
    >
      <header
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#282c34",
          color: "white",
        }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Suyog Manandhar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Developer | Passionate about Building Scalable Web
          Applications
        </motion.p>
      </header>

      <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            Hi! I'm Suyog Manandhar, a full stack developer with a passion for
            creating seamless and intuitive user experiences. I enjoy working
            with the latest technologies to build robust, scalable applications.
          </p>
        </motion.section>

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>SongType.com</strong>: A music recommendation system
              leveraging AI to provide personalized music experiences.
            </li>
            <li>
              <strong>Portfolio Site</strong>: A showcase of my skills and
              projects, created using React, Framer Motion, and Lucide React.
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me via email or connect with me on
            LinkedIn and GitHub.
          </p>
          <div style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
            <a href="mailto:suyog@example.com" style={{ color: "#555" }}>
              <Mail />
            </a>
            <a
              href="https://github.com/suyogmanandhar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#555" }}
            >
              <GitHub />
            </a>
            <a
              href="https://linkedin.com/in/suyogmanandhar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#555" }}
            >
              <LinkedIn />
            </a>
          </div>
        </motion.section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#282c34",
          color: "white",
          marginTop: "20px",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © 2025 Suyog Manandhar. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;
