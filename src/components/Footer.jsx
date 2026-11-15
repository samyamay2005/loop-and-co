import { brand } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 {brand.name}</span>
      <span>{brand.tagline}</span>
    </footer>
  );
}