export function getAllModels() {
  return [
    {
      id: 1,
      nombre: "Samsung Galaxy S24 Ultra",
      descripcion:
        'Smartphone insignia de Samsung con cámara de 200MP y pantalla AMOLED de 6.8".',
      fechaLanzamiento: "2024-02-15",
      portada:
        "https://images.pexels.com/photos/30466740/pexels-photo-30466740.jpeg",
      compania: "Samsung Electronics",
      marcas: ["Samsung", "Galaxy Series", "Android"],
    },
    {
      id: 2,
      nombre: "Apple iPhone 15 Pro Max",
      descripcion:
        "Modelo premium de Apple con chip A17 Pro y cuerpo de titanio.",
      fechaLanzamiento: "2023-09-22",
      portada:
        "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg",
      compania: "Apple Inc.",
      marcas: ["Apple", "iPhone", "iOS"],
    },
    {
      id: 3,
      nombre: "Google Pixel 8 Pro",
      descripcion: "Smartphone de Google con IA avanzada y Android puro.",
      fechaLanzamiento: "2023-10-12",
      portada: "https://m.media-amazon.com/images/I/71r0349s3cL.jpg",
      compania: "Google LLC",
      marcas: ["Google", "Pixel", "Android"],
    },
    {
      id: 4,
      nombre: "Xiaomi 14 Ultra",
      descripcion: "Cámara Leica, Snapdragon 8 Gen 3 y pantalla AMOLED.",
      fechaLanzamiento: "2024-03-20",
      portada:
        "https://http2.mlstatic.com/D_NQ_NP_682584-MLM80177121459_102024-O-xiaomi-14-ultra-16gb1tb-dual-sim-snapdragon-8-gen-3-desbloqueado.webp",
      compania: "Xiaomi Corporation",
      marcas: ["Xiaomi", "MIUI", "Android"],
    },
    {
      id: 5,
      nombre: "OnePlus 12",
      descripcion:
        "Rendimiento de gama alta con OxygenOS y carga rápida de 100W.",
      fechaLanzamiento: "2024-01-10",
      portada:
        "https://http2.mlstatic.com/D_Q_NP_895535-MLU77659423209_072024-O.webp",
      compania: "OnePlus Technology",
      marcas: ["OnePlus", "OxygenOS", "Android"],
    },
    {
      id: 6,
      nombre: "Motorola Edge 50 Pro",
      descripcion: "Gran pantalla pOLED de 144Hz y diseño elegante.",
      fechaLanzamiento: "2024-04-05",
      portada: "https://m.media-amazon.com/images/I/81FE+uJk6dL.jpg",
      compania: "Motorola Mobility",
      marcas: ["Motorola", "Edge Series", "Android"],
    },
    {
      id: 7,
      nombre: "Sony Xperia 1 VI",
      descripcion: "Cámara profesional con lente Zeiss y pantalla 4K HDR.",
      fechaLanzamiento: "2024-05-10",
      portada:
        "https://http2.mlstatic.com/D_NQ_NP_970904-MLA79714098021_102024-O.webp",
      compania: "Sony Corporation",
      marcas: ["Sony", "Xperia", "Android"],
    },
    {
      id: 8,
      nombre: "Huawei P60 Pro",
      descripcion: "Sistema fotográfico XMAGE y diseño premium.",
      fechaLanzamiento: "2023-11-18",
      portada: "https://m.media-amazon.com/images/I/71JLjRydESL.jpg",
      compania: "Huawei Technologies",
      marcas: ["Huawei", "EMUI", "Android"],
    },
    {
      id: 9,
      nombre: "Asus ROG Phone 8",
      descripcion:
        "Diseñado para gaming extremo con 165Hz y refrigeración líquida.",
      fechaLanzamiento: "2024-06-12",
      portada:
        "https://mx.static.webuy.com/product_images/Celulares/Celulares%20-%20Android/SASUR8P16512NLIBA_l.jpg",
      compania: "ASUS",
      marcas: ["ROG", "Gaming", "Android"],
    },
    {
      id: 10,
      nombre: "Oppo Find X7",
      descripcion: "Fotografía avanzada y carga ultra rápida SUPERVOOC.",
      fechaLanzamiento: "2024-02-01",
      portada:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7zd5qQecQu0AV4EnA85Nv4WM1yXNY6nAbQ&s",
      compania: "Oppo Electronics",
      marcas: ["Oppo", "ColorOS", "Android"],
    },
  ];
}

export function getModelById(id) {
  const modelos = getAllModels();
  return modelos.find((m) => m.id === Number(id));
}
