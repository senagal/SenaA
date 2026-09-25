export default function FadeInSection({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
