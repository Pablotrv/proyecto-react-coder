import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import Loading from "./Loading";
import { getProductById } from "../data/products.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((product) => {
        setItem(product);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <Loading />;

  return (
    <div className="main-content">{item && <ItemDetail item={item} />}</div>
  );
};
export default ItemDetailContainer;
