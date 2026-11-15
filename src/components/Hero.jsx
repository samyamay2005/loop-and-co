import logo from "../assets/logo.png";
import { brand } from "../content";

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-logo" src={logo} alt={`${brand.name} — ${brand.tagline}`} />
    </header>
  );
}