import { useState, useEffect } from "react";
import "./DolarQuote.css";

const DolarQuote = () => {
  const [dolarBlue, setDolarBlue] = useState("");

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching dollar quote");
        }
        return res.json();
      })
      .then((data) => {
        setDolarBlue(data.venta.toString());
      })
      .catch((error) => console.error("Error fetching dollar quote:", error));
  }, []);

  return (
    <div className="dolar-container">
      {dolarBlue ? (
        <p className="dolar-text">Dólar Blue: ${dolarBlue}</p>
      ) : (
        <p className="dolar-text">Cargando cotización...</p>
      )}
    </div>
  );
};

export default DolarQuote;
