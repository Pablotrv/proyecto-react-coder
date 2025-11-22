import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

// const getItem = (id) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const item = products.find((p) => p.id === id);
//       resolve(item);
//     }, 500);
//   });
// };

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((response) => {
        setItem(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <Loading />;

  return (
    <>{item ? <ItemDetail item={item} /> : <h2>Producto no encontrado</h2>}</>
  );
};

export default ItemDetailContainer;
