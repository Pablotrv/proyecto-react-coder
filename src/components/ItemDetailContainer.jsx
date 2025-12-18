import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import Loading from "./Loading";
import { getProductByIdFromFirebase } from "../data/products.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    console.log("ItemDetailContainer: Fetching item with URL ID:", itemId);
    getProductByIdFromFirebase(itemId)
      .then((product) => {
        console.log("ItemDetailContainer: Product fetched:", product);
        setItem(product);
      })
      .catch((err) => {
        console.error("ItemDetailContainer: Error fetching product:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <Loading />;

  return (
    <div className="main-content">
      {/* 
        Añadimos una comprobación. Si el item no se encuentra después de cargar, 
        mostramos un mensaje de error en lugar de intentar renderizar ItemDetail con un valor nulo,
        lo que causaba la página en blanco.
      */}
      {item ? <ItemDetail item={item} /> : <h2>Producto no encontrado</h2>}
    </div>
  );
};
export default ItemDetailContainer;
