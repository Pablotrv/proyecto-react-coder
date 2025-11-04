import "./App.css";
import NavBar from "./components/navBar.jsx";
import ItemListContainer from "./components/itemListContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenido a nuestra tienda!"} />
    </>
  );
}

export default App;
