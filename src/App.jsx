import "./App.css";
import NavBar from "./components/navBar.jsx";
import ItemListContainer from "./components/itemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Error from "./components/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Bienvenido a TU tienda Gamer!" />
          }
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
