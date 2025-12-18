import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategoryFromFirebase } from "../data/products.jsx";
import ItemList from "./ItemList.jsx";
import Loading from "./Loading.jsx";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Nuestros Productos");
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsByCategoryFromFirebase(categoryId)
      .then((data) => {
        setProducts(data);
        setTitle(
          categoryId
            ? `Productos de la categoría: ${categoryId}`
            : "Nuestros Productos"
        );
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-center my-4">{title}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
