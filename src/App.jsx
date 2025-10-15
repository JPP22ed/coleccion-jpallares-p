import { useState } from "react";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function App() {
  const [section, setSection] = useState("inicio");

  const secciones = {
    inicio: {
      titulo: "Colección J. Pallarés P",
      descripcion: `Soy Juan Pallarés, un joven coleccionista e investigador numismático que inició esta pasión gracias a la influencia de mi abuelo. Desde pequeño me transmitió su amor por la historia y las monedas antiguas, mostrándome cómo cada pieza guarda un fragmento del pasado.\n\nCon el tiempo, esta afición se convirtió en un proyecto personal de conservación e investigación histórica. Así nació la *Colección J. Pallarés P*, un archivo numismático que documenta monedas y billetes españoles desde los siglos XVII hasta el XXI, analizando su contexto, técnicas de acuñación y valor patrimonial.\n\nEste sitio web reúne todo ese trabajo: fotografías, análisis, métodos de conservación y contactos profesionales que han hecho posible este proyecto.`,
    },
    metodologia: {
      titulo: "Metodología y Conservación",
      descripcion: `Las monedas se almacenan en álbumes con hojas plásticas transparentes de compartimentos individuales y etiquetas con datos de año, denominación, ceca, material y conservación. Se utilizan bolsas zip para monedas repetidas destinadas al intercambio o venta.\n\nPara la limpieza y conservación, se emplea un dispositivo ultrasónico con líquidos no abrasivos, evitando daños en el material. Se analizan los detalles técnicos —bordes, inscripciones, relieves y errores de acuñación— mediante una lupa 15x con luz LED y ultravioleta (UV).\n\nFuentes consultadas: Numista.com, Galerías Castellonense de Filatelia y Numismática (Castellón, desde 1975), Numismática La Dobla, Verum Numismática y San Jorge Events.`,
    },
    catalogo: {
      titulo: "Catálogo General",
      descripcion: `El catálogo está organizado por períodos históricos:\n\n- **II República y Primer Franquismo (1931–1959)**: certificados de plata, billetes de 25 a 100 pesetas y monedas de 5 a 50 céntimos.\n- **Régimen de Franco (1939–1975)**: emisiones completas de 1, 5, 25, 50, 100 y 500 pesetas, incluyendo variantes, errores de acuñación y materiales diversos.\n- **Juan Carlos I y Transición (1975–2001)**: monedas conmemorativas (Expo’92, Mundial 82, FAO, etc.), emisiones de ceca M. Coronada y últimas piezas de plata.\n- **Monedas históricas anteriores**: piezas de Felipe II, Felipe V, Carlos IV y Alejandro Severo (s. III).\n\nCada moneda está documentada fotográficamente y acompañada de su descripción técnica.`,
    },
    galeria: {
      titulo: "Galería Fotográfica",
      descripcion:
        "Explora las imágenes reales de billetes, monedas y piezas históricas de la Colección J. Pallarés P. Cada fotografía ha sido tomada del álbum original y clasificada según época y denominación.",
      imagenes: Array.from({ length: 35 }, (_, i) => `./assets/img/IMG-20251014-WA00${(i + 14).toString().padStart(2, "0")}.jpg`),
    },
    contacto: {
      titulo: "Contacto",
      descripcion: "Autor: **J.P.P.**  \nCorreo: **jpp.jpp.2005@gmail.com**  \n\nProyecto desarrollado como parte del archivo académico y de investigación numismática de la *Colección J. Pallarés P*.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 p-6 flex flex-col justify-between">
      {/* Logo */}
      <div className="flex justify-center items-center mb-4">
        <motion.div
          initial={{ rotate: -5, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-md border border-gray-300"
        >
          <img
            src="/favicon.ico"
            alt="Logo Colección J. Pallarés"
            className="w-10 h-10"
          />
          <h2 className="font-semibold text-lg text-gray-800">
            Colección J. Pallarés P
          </h2>
        </motion.div>
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">{secciones[section].titulo}</h1>
        <p className="text-lg text-gray-700 whitespace-pre-line mb-6">
          {secciones[section].descripcion}
        </p>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {Object.keys(secciones).map((key) => (
            <button
              key={key}
              onClick={() => setSection(key)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                section === key
                  ? "bg-gray-300 text-gray-900 border-gray-400"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              {secciones[key].titulo}
            </button>
          ))}
        </div>

        {section === "galeria" && (
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {secciones.galeria.imagenes.map((img, i) => (
              <Zoom key={i}>
                <motion.img
                  src={img}
                  alt={`Imagen ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.03 }}
                />
              </Zoom>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Pie de página */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-10 text-center text-gray-600 text-sm"
      >
        <motion.p
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="italic"
        >
          © 2025 J.P.P — Colección J. Pallarés P | Todos los derechos reservados
        </motion.p>
      </motion.footer>
    </div>
  );
}
