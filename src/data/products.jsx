import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config.js";

// Obtener todos los productos
export const getProductsFromFirebase = async () => {
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef);

  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
};

// Obtener un producto por ID
export const getProductByIdFromFirebase = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  console.log(
    `Attempting to fetch product with ID: ${id}. Found: ${docSnap.exists()}`
  );

  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Obtener productos por categoría
export const getProductsByCategoryFromFirebase = async (categoryId) => {
  const productsRef = collection(db, "products");

  if (!categoryId) return await getProductsFromFirebase();

  const q = query(productsRef, where("category", "==", categoryId));
  const querySnapshot = await getDocs(q);

  const products = [];
  querySnapshot.forEach((doc) => {
    console.log("Firestore Doc ID (getProductsFromFirebase):", doc.id);
    console.log("Firestore Doc Data (getProductsFromFirebase):", doc.data());
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
};
