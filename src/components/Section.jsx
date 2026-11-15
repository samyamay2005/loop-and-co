// One reusable block: a title on the left, text on the right.
export default function Section({ id, title, paragraphs }) {
  return (
    <section className="section" id={id}>
      <h2>{title}</h2>
      <div className="section-body">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
}