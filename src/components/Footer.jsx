import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {year} · Proyecto de React · Anime Cards
      </p>
    </footer>
  );
}
