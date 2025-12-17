import "./App.css";
import NavBar from "./components/navBar.jsx";
import ItemListContainer from "./components/itemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import Footer from "./Footer.jsx";
import Login from "./components/Login.jsx";
import DolarQuote from "./DolarQuote.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";

// --- PASO 1: Importa la función de sembrado ---
import { seedProducts } from "./components/seedProducts.js";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <CartProvider>
          {/* 
            --- BOTÓN TEMPORAL PARA SUBIR PRODUCTOS A FIREBASE ---
            
            INSTRUCCIONES:
            1. Descomenta la línea del botón de abajo.
            2. Abre tu app en el navegador y haz clic en el botón.
            3. Revisa la consola del navegador y tu base de datos de Firestore.
            4. Una vez que los productos estén subidos, VUELVE A COMENTAR O ELIMINA EL BOTÓN.
          */}
          {/* <button onClick={seedProducts}>Subir Productos a Firebase</button> */}

          <DolarQuote />
          <NavBar />
          <main className="content-wrap">
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting="¡Bienvenido a TU tienda Gamer!" />
                }
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/404" element={<Error />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </main>
        </CartProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
