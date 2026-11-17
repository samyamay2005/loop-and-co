import logo from "../assets/Logo.png";
import { brand } from "../content";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <img className="hero-logo" src={logo} alt={`${brand.name} — ${brand.tagline}`} />
    </header>
  );
}