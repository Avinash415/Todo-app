"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="container" style={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={styles.title}
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={styles.subtitle}
      >
        We are passionate about building modern, fast and user-friendly web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={styles.card}
      >
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          To create simple, elegant, and efficient tools that make everyday tasks easier.
          This Todo App is designed to be lightweight, responsive, and enjoyable to use.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={styles.card}
      >
        <h2 style={styles.sectionTitle}>Technology Stack</h2>
        <ul style={styles.list}>
          <li>⚡ Next.js 13</li>
          <li>🎨 Custom Responsive CSS</li>
          <li>🎥 Framer Motion Animations</li>
          <li>🌗 Dark/Light Mode Support</li>
          <li>📱 100% Mobile Responsive</li>
        </ul>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: { marginTop: 30 },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 18,
    color: "var(--text)",
  },
  card: {
    background: "var(--card)",
    padding: 25,
    borderRadius: 12,
    marginBottom: 25,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  text: {
    lineHeight: "1.6",
    fontSize: 16,
  },
  list: {
    paddingLeft: 20,
    lineHeight: "1.8",
    fontSize: 16,
  },
};
