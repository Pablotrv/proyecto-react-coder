const products = [
  {
    id: "1",
    name: "Mouse Logitech",
    description: "Mouse inalámbrico Logitech con alta precisión.",
    price: 65.999,
    stock: 15,
    img: "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2c-pdp/gallery/pro-x-superlight-2c-mouse-top-angle-black-gallery-1.png?v=1",
    category: "mouses",
  },
  {
    id: "2",
    name: "Mouse Razer",
    description: "Mouse Razer con iluminación RGB y alta precisión.",
    price: 98.299,
    stock: 10,
    img: "https://assets3.razerzone.com/2y2JG9RBGw3HijRRqX-7ZRsI4E4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh08%2Fh61%2F9765618188318%2Fviper-v3-pro-black-500x500.png",
    category: "mouses",
  },
  {
    id: "3",
    name: "Monitor Samsung",
    description: "Monitor Samsung de alta resolución y tamaño 24 pulgadas.",
    price: 999.999,
    stock: 8,
    img: "https://samsungar.vtexassets.com/arquivos/ids/209032-800-auto?width=800&amp;height=auto&amp;aspect=true&amp;format=webp",
    category: "monitores",
  },
  {
    id: "4",
    name: "Monitor LG",
    description:
      "Mejora tu experiencia de juego con un diseño de 3 lados prácticamente sin bordes para una vista inmersiva y una base ajustable en inclinación para ayudarlo a jugar más cómodamente.",
    price: 329.999,
    stock: 5,
    img: "https://lgear.vtexassets.com/arquivos/ids/157643-800-auto?v=638787812084400000&amp;width=800&amp;height=auto&amp;aspect=true&amp;format=webp",
    category: "monitores",
  },
  {
    id: "5",
    name: "Teclado Mecánico Corsair",
    description: "Teclado mecánico Corsair con retroiluminación RGB.",
    price: 160.299,
    stock: 12,
    img: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Gaming-Keyboards/CH-91A401A/Gallery/K65_PRO_Mini_PBT_01.webp",
    category: "teclados",
  },
  {
    id: "6",
    name: "Mouse Corsair Sabre RGB Pro",
    description:
      "Diseño ultraligero de 36 g para juegos FPS de nivel profesional",
    price: 129.999,
    stock: 10,
    img: "https://assets.corsair.com/image/upload/f_auto/q_auto/v1758648121/products/Gaming-Mice/base-sabre-v2-config/CH-931G000-WW/CH-931G000-WW_01.png",
    category: "mouses",
  },
  {
    id: "7",
    name: "Teclado Logitech G515 LIGHTSPEED TKL",
    description: "Teclado inalámbrico de perfil bajo para gaming",
    price: 129.999,
    stock: 12,
    img: "https://resource.logitechg.com/w_1600,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g515-lightspeed-tkl/gallery/g515-keyboard-white-gallery-1-us.png?v=1",
    category: "teclados",
  },
  {
    id: "8",
    name: "Monitor ROG Swift OLED PG39WCDM",
    description:
      "Monitor de juegos OLED curvo ultraancho (3440 x 1440) de 39 pulgadas con frecuencia de actualización de 240 Hz y tiempo de respuesta de 0,03 ms para juegos inmersivos",
    price: 999.999,
    stock: 5,
    img: "https://dlcdnwebimgs.asus.com/gain/FA8CBFE9-F113-43E5-91BA-ACA0C084A9D1/w717/h525/fwebp",
    category: "monitores",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = categoryId
        ? products.filter((p) => p.category === categoryId)
        : products;
      resolve(filteredProducts);
    }, 1000);
  });
};
