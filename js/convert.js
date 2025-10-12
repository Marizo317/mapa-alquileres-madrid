// convert.js
const fs = require("fs");

// Importamos los datos
const { barriosMadrid } = require("./datos.js");

// Convertimos arrays a texto legible
const clean = barriosMadrid.map(b => ({
  id: b.id,
  nombre: b.nombre,
  distrito: b.distrito,
  lat: b.lat,
  lng: b.lng,
  zona: b.zona,
  subzona: b.subzona,
  precioMedio: b.precioMedio,
  precioM2: b.precioM2,
  metrosCuadrados: b.metrosCuadrados,
  fuente: b.fuente,
  fechaActualizacion: b.fechaActualizacion,
  ventajas: Array.isArray(b.ventajas) ? b.ventajas.join(" | ") : "",
  desventajas: Array.isArray(b.desventajas) ? b.desventajas.join(" | ") : "",
}));

// Creamos el CSV
const headers = Object.keys(clean[0]);
const rows = clean.map(obj =>
  headers.map(h => `"${String(obj[h] ?? "").replace(/"/g, '""')}"`).join(",")
);
const csv = [headers.join(","), ...rows].join("\n");

fs.writeFileSync("barriosMadrid.csv", csv, "utf8");
console.log("✅ Archivo CSV generado: barriosMadrid.csv");