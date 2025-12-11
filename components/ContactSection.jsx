"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="container" style={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={styles.title}
      >
        Contact Us
      </motion.h1>

      <p style={styles.subtitle}>
        Have any questions? Feel free to reach out!
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        <button type="submit" className="btn" style={{ width: "100%" }}>
          Send Message
        </button>
      </motion.form>
    </section>
  );
}

const styles = {
  wrapper: { marginTop: 30 },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 25,
    fontSize: 18,
    color: "var(--text)",
  },
  form: {
    background: "var(--card)",
    padding: 25,
    borderRadius: 12,
    maxWidth: 600,
    margin: "auto",
    boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    border: "1px solid #aaa",
    fontSize: 16,
  },
  textarea: {
    width: "100%",
    padding: 14,
    height: 120,
    borderRadius: 10,
    border: "1px solid #aaa",
    fontSize: 16,
    marginBottom: 15,
    resize: "none",
  },
};
