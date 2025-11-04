import Container from "react-bootstrap/Container";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-4 main-content">
      <h2>{greeting}</h2>
      <p>Aquí se mostrarán nuestros productos próximamente.</p>
    </Container>
  );
};

export default ItemListContainer;
