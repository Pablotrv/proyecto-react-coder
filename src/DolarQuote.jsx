import { useState, useEffect } from "react";
import "./DolarQuote.css";

const DolarQuote = () => {
  const [dolarBlue, setDolarBlue] = useState(null);

  useEffect(() => {
    fetch("https://bluelytics.com.ar/api/v2/latest")
      .then((res) => res.json())
      .then((data) => {
        setDolarBlue(data.blue);
      })
      .catch((error) => console.error("Error fetching dollar quote:", error));
  }, []);

  return (
    <div className="dolar-container">
      {dolarBlue ? (
        <p className="dolar-text">
          Dólar Blue | Compra: ${dolarBlue.value_buy} | Venta: $
          {dolarBlue.value_sell}
        </p>
      ) : (
        <p className="dolar-text">Cargando cotización...</p>
      )}
    </div>
  );
};

export default DolarQuote;
