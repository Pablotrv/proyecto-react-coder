import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Dirección: Av. Siempre Viva 742, Springfield</p>
      <p>&copy; {new Date().getFullYear()} - Diseñado por Pablo Trovato</p>
    </footer>
  );
};

export default Footer;
