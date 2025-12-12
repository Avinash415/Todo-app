"use client";

import { motion } from "framer-motion";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

export default function HeroSection() {
  return (
    <div style={styles.pageWrapper}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          Get More Done with AviTodo ⚡
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={styles.subtext}
        >
          Your personal task manager built with Next.js — organized, elegant,
          fast, and distraction-free.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.btn}
          onClick={() => (window.location.href = "/todo")}
        >
          Start Your Tasks →
        </motion.button>
      </section>

      {/* SECTION SPACERS */}
      <div style={styles.sectionGap} />

      <AboutSection />

      <div style={styles.sectionGap} />

      <ContactSection />

      <Footer />
    </div>
  );
}

const styles = {
  pageWrapper: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  hero: {
    flex: 1,
    padding: "100px 20px 80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  /* Added a clean modern gap between sections */
  sectionGap: {
    height: "120px", // You can increase to 150px if you want more gap
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  subtext: {
    fontSize: "20px",
    maxWidth: "700px",
    marginBottom: "40px",
    color: "var(--textSecondary)",
    lineHeight: "1.6",
  },

  btn: {
    padding: "14px 40px",
    fontSize: "18px",
    background: "linear-gradient(135deg, #000 0%, #333 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
};

/* Responsive styling */
styles["@media (max-width: 768px)"] = {
  title: {
    fontSize: "34px",
  },
  subtext: {
    fontSize: "16px",
    maxWidth: "90%",
  },
  btn: {
    fontSize: "16px",
    padding: "12px 32px",
  },
  sectionGap: {
    height: "80px",
  },
};
