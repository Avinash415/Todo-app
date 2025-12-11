"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.body.className = isDark ? "dark" : "light";
  }, []);

  const toggleDark = () => {
    const newMode = !dark;
    setDark(newMode);
    document.body.className = newMode ? "dark" : "light";
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <div className="logo"><Link href="/" className="link">🌤 AviTodo</Link></div>

      <div className={`links ${showMenu ? "show" : ""}`}>
        <Link href="/" className="link">Home</Link>
        <Link href="/todo" className="link">Todo</Link>
        <Link href="/about" className="link">About</Link>
        <Link href="/contact" className="link">Contact</Link>

        <button className="btn" onClick={toggleDark}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <button className="menuBtn" onClick={() => setShowMenu(!showMenu)}>
        ≡
      </button>
    </nav>
  );
}
