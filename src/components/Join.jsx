import { brand, join } from "../content";

export default function Join() {
  return (
    <section className="section join" id="join">
      <h2>{join.title}</h2>
      <div className="section-body">
        <p className="join-text">{join.text}</p>
        <ul className="contact">
          <li>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </li>
          <li>
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
              Instagram {brand.instagram}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}