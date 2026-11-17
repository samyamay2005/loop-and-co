import { useState } from "react";
import { brand, sections } from "../content";
import "./Navbar.css";

// Links are built from content.js, so new sections show up here automatically.
const links = [
  ...sections.map((s) => ({ id: s.id, label: s.title })),
  { id: "join", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // is the mobile menu open?
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={close}>
          {brand.name}
        </a>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}