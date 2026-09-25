"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#projects", label: "Selected work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "Profile" },
  { href: "#certificates", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
              className="nav-cta"
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
