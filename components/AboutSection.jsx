"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section style={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={styles.title}
      >
        About AviTodo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={styles.subtitle}
      >
        AviTodo is a fast, clean, distraction-free Todo App designed to help you
        plan your day effortlessly.
      </motion.p>

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={styles.card}
      >
        <h2 style={styles.sectionTitle}>Why This App?</h2>
        <p style={styles.text}>
          Most task managers are bloated with unnecessary features.
          <br />AviTodo keeps things simple — add tasks, manage them, and stay
          productive with a clean interface and smooth experience.
        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        style={styles.card}
      >
        <h2 style={styles.sectionTitle}>Features</h2>
        <ul style={styles.list}>
          <li>✔ Add, Edit & Delete tasks instantly</li>
          <li>✔ Local storage data saving</li>
          <li>✔ Fully responsive modern UI</li>
          <li>✔ Smooth animations with Framer Motion</li>
          <li>✔ Dark & Light theme support</li>
        </ul>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={styles.card}
      >
        <h2 style={styles.sectionTitle}>Tech Behind AviTodo</h2>
        <ul style={styles.list}>
          <li>⚡ Built with Next.js 13</li>
          <li>🎨 Designed using custom responsive CSS</li>
          <li>🎬 Animations powered by Framer Motion</li>
          <li>🌓 Theme switching using LocalStorage</li>
        </ul>
      </motion.div>
    </section>
  );
}

const styles = {
  wrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px",
    marginTop: "40px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "50px",
    color: "var(--textSecondary)",
    maxWidth: "700px",
    marginInline: "auto",
    lineHeight: "1.6",
  },

  card: {
    background: "var(--card)",
    padding: "28px",
    borderRadius: "14px",
    marginBottom: "35px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "12px",
    fontWeight: "600",
  },

  text: {
    lineHeight: "1.7",
    fontSize: "16px",
    color: "var(--text)",
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.9",
    fontSize: "16px",
    color: "var(--text)",
  },
};
