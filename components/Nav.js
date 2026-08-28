"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className={`nav-container glass-panel${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          SG.
        </a>
        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${open ? " open" : ""}`} style={{ alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/SenaAbdisaCV.pdf"
              download
              className="btn primary-btn"
              style={{ padding: "0.4rem 1.2rem", fontSize: "0.85rem" }}
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
