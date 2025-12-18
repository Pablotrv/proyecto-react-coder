import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { productsData } from "../data/products-data.js";

export const seedProducts = async () => {
  try {
    console.log("🚀 Iniciando carga de productos a Firebase...");

    const productsRef = collection(db, "products");

    for (const product of productsData) {
      await addDoc(productsRef, product);
      console.log(`✅ Producto "${product.name}" agregado con éxito`);
    }

    console.log("🎉 ¡Todos los productos fueron subidos correctamente!");
    alert("¡Productos subidos a Firebase exitosamente!");
  } catch (error) {
    console.error("❌ Error al subir productos:", error);
    alert("Error al subir productos. Revisa la consola.");
  }
};
