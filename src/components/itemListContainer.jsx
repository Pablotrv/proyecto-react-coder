import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";
import Loading from "./Loading";

// const getProducts = (categoryId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const filteredProducts = categoryId
//         ? products.filter((p) => p.category === categoryId)
//         : products;
//       resolve(filteredProducts);
//     }, 1000);
//   });
// };

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(categoryId)
      .then((response) => {
        setItems(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <Loading />;

  return (
    <Container className="mt-4 main-content">
      <h2>{categoryId ? `Categoría: ${categoryId}` : greeting}</h2>
      <ItemList products={items} />
    </Container>
  );
};

export default ItemListContainer;
