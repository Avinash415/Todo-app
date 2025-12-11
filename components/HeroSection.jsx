"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        Welcome to Your Modern Todo App ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={styles.subtext}
      >
        A fast, beautiful, responsive Todo App built with Next.js.
      </motion.p>

      <motion.button
        className="btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={styles.btn}
        onClick={() => (window.location.href = "/todo")}
      >
        Explore Todo →
      </motion.button>
    </section>
  );
}

const styles = {
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 18,
    color: "var(--text)",
    marginBottom: 20,
  },
  btn: { marginTop: 20 },
};
