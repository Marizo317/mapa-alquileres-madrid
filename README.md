# 🗺️ Mapa de Calor: Alquileres en Madrid

[![GitHub Pages](https://img.shields.io/badge/demo-live-success)](https://Marizo317.github.io/mapa-alquileres-madrid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Fase 3B](https://img.shields.io/badge/Fase-3B%20Completa-brightgreen)]()
[![Cobertura](https://img.shields.io/badge/Cobertura-100%25%20Madrid-success)]()

> Herramienta interactiva de visualización de datos del mercado inmobiliario de Madrid que facilita la toma de decisiones sobre alquiler e inversión mediante mapas de calor, análisis estadístico y comparativas por zonas.

![Preview del Proyecto](./img/preview.png)

---

## 📋 Índice

- [Descripción](#-descripción)
- [Características](#-características-principales)
- [Demo en Vivo](#-demo-en-vivo)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Dataset](#-dataset)
- [Metodología](#-metodología)
- [Roadmap](#-roadmap)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)
- [Autor](#-autor)

---

## 🎯 Descripción

**Mapa de Calor: Alquileres en Madrid** es una aplicación web desarrollada para ayudar a usuarios, inversores y analistas a tomar decisiones informadas sobre el mercado de alquileres en Madrid y su área metropolitana.

### Problema que resuelve
El mercado inmobiliario de Madrid es complejo y los precios varían significativamente entre barrios. Esta herramienta centraliza y visualiza datos de múltiples fuentes oficiales para facilitar:
- 🏠 Búsqueda de vivienda en alquiler
- 💰 Análisis de inversión inmobiliaria
- 📊 Investigación del mercado de alquileres
- 🎓 Estudios académicos sobre urbanismo y economía

### Objetivo del Proyecto
Proporcionar una plataforma intuitiva y gratuita que democratice el acceso a análisis del mercado inmobiliario mediante visualización de datos y estadística descriptiva.

---

## ✨ Características Principales

### 🗺️ Mapa Interactivo
- **148 ubicaciones mapeadas**: 131 barrios de Madrid capital (21 distritos) + 17 municipios del área metropolitana
- **Mapa de calor dinámico**: Visualización cromática de precios por m²
- **Marcadores informativos**: Click en cualquier punto para ver detalles completos
- **4 vistas personalizables**:
  - Vista General (todos los barrios)
  - Solo Madrid Capital
  - Solo Área Metropolitana
  - Barrios Económicos (<€20/m²)

### 📊 Análisis Estadístico
- **Estadísticas en tiempo real**:
  - Precio medio por m² y alquiler mensual
  - Precios mínimos y máximos
  - Barrio más económico y más caro
- **Gráficos interactivos**:
  - Top 10 barrios más caros
  - Top 10 barrios más económicos
  - Comparativa Capital vs Área Metropolitana
  - Distribución de precios por rangos

### 🔍 Información Detallada por Ubicación
Cada barrio/municipio incluye:
- ✅ Precio medio de alquiler mensual
- ✅ Precio por m²
- ✅ Metraje promedio de pisos
- ✅ 4 ventajas principales
- ✅ 4 desventajas a considerar
- ✅ Fuente de datos y fecha de actualización
- ✅ Coordenadas GPS precisas

### 🎨 Interfaz de Usuario
- **Diseño responsive**: Adaptado a móviles, tablets y escritorio
- **Tema moderno**: Gradientes, glassmorphism y animaciones suaves
- **Tooltips informativos**: Ayuda contextual en toda la aplicación
- **Filtros intuitivos**: Cambio de vista con un solo click

---

## 🌐 Demo en Vivo

🚀 **[Ver Aplicación en Vivo](https://tu-usuario.github.io/mapa-alquileres-madrid)**

*Nota: Reemplaza el enlace con tu URL de GitHub Pages*

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Grid, Flexbox, Variables CSS y animaciones
- **JavaScript ES6+**: Lógica de la aplicación con módulos, arrow functions, destructuring

### Visualización de Datos
- **[Leaflet.js](https://leafletjs.com/)**: Librería de mapas interactivos
- **[Chart.js](https://www.chartjs.org/)**: Gráficos dinámicos y responsivos
- **[OpenStreetMap](https://www.openstreetmap.org/)**: Proveedor de mapas base

### Herramientas de Desarrollo
- **Visual Studio Code**: IDE principal
- **Git & GitHub**: Control de versiones
- **GitHub Pages**: Hosting gratuito
- **Chrome DevTools**: Debug y optimización

### Conceptos Aplicados
- 📊 Estadística Descriptiva
- 🗺️ Análisis Geoespacial
- 📈 Visualización de Datos
- 🎨 UX/UI Design
- ♿ Accesibilidad Web

---

## 💻 Instalación

### Opción 1: Clonar el Repositorio

```bash
# Clonar el proyecto
git clone https://github.com/Marizo317/mapa-alquileres-madrid.git

# Entrar al directorio
cd mapa-alquileres-madrid

# Abrir con Live Server o cualquier servidor local
# Recomendado: extensión Live Server de VS Code
```

### Opción 2: Descargar ZIP

1. Click en el botón verde "Code"
2. Seleccionar "Download ZIP"
3. Descomprimir el archivo
4. Abrir `index.html` con un navegador web

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar librerías CDN y mapas)
- *(Opcional)* Servidor local para desarrollo

---

## 🚀 Uso

### Para Usuarios Finales

1. **Explorar el mapa**: Haz zoom y desplázate por Madrid
2. **Cambiar vista**: Usa los botones superiores (General, Capital, Metro, Económicos)
3. **Ver detalles**: Click en cualquier marcador para información completa
4. **Analizar estadísticas**: Revisa el panel lateral con gráficos y datos
5. **Comparar barrios**: Observa el mapa de calor para identificar zonas por color

### Para Desarrolladores

```javascript
// Añadir un nuevo barrio
const nuevoBarrio = {
    id: 83,
    nombre: "Nuevo Barrio",
    lat: 40.4168,
    lng: -3.7038,
    zona: "Capital",
    distrito: "Centro",
    precioMedio: 1500,
    precioM2: 20.5,
    metrosCuadrados: 73,
    fuente: "Idealista",
    fechaActualizacion: "Octubre 2025",
    ventajas: ["Ventaja 1", "Ventaja 2", "Ventaja 3", "Ventaja 4"],
    desventajas: ["Desventaja 1", "Desventaja 2", "Desventaja 3", "Desventaja 4"]
};

barriosMadrid.push(nuevoBarrio);
```

---

## 📁 Estructura del Proyecto

```
mapa-alquileres-madrid/
│
├── index.html              # Página principal
├── README.md               # Documentación (este archivo)
├── CHANGELOG.md            # Registro de cambios
├── LICENSE                 # Licencia MIT
│
├── css/
│   └── estilos.css        # Estilos principales
│
├── js/
│   ├── datos.js           # Dataset de barrios y municipios (82 ubicaciones)
│   ├── mapa.js            # Lógica del mapa interactivo
│   ├── graficos.js        # Generación de gráficos con Chart.js
│   └── estadisticas.js    # Cálculos estadísticos
│
├── img/
│   └── preview.png        # Captura de pantalla del proyecto
│
└── docs/
    └── METODOLOGIA.md     # Explicación detallada de la metodología
```

---

## 📊 Dataset

### Fuentes de Datos (2025)
Los datos han sido recopilados y verificados de múltiples fuentes oficiales:

1. **[Idealista](https://www.idealista.com)** - Portal inmobiliario líder en España
2. **[Fotocasa](https://www.fotocasa.es)** - Plataforma de compraventa y alquiler
3. **[Indomio](https://www.indomio.es)** - Comparador de precios inmobiliarios
4. **[OCU](https://www.ocu.org)** - Organización de Consumidores y Usuarios
5. **[Bankinter](https://www.bankinter.com)** - Estudios de mercado inmobiliario
6. **[Properfy](https://www.properfy.es)** - Big Data inmobiliario
7. **Ayuntamiento de Madrid** - Datos oficiales de urbanismo
8. **INE** - Instituto Nacional de Estadística

### Cobertura Actual (Fase 3B - COMPLETA)
- ✅ **148 ubicaciones totales**
- ✅ **131 barrios de Madrid Capital** - 100% COMPLETO
- ✅ **21 distritos** - TODOS LOS DISTRITOS DE MADRID
- ✅ **17 municipios área metropolitana**

### Datos por Ubicación
Cada registro incluye 11 campos:
- ID único
- Nombre del barrio/municipio
- Coordenadas GPS (lat, lng)
- Zona y distrito
- Precio medio mensual (€)
- Precio por m² (€/m²)
- Metraje medio (m²)
- 4 ventajas
- 4 desventajas
- Fuente de datos
- Fecha de actualización

---

## 🔬 Metodología

### 1. Recopilación de Datos
- Web scraping conceptual de múltiples fuentes
- Verificación cruzada entre plataformas
- Actualización mensual de precios
- Validación de coordenadas GPS

### 2. Procesamiento de Datos
```javascript
// Cálculo de estadísticas
const calcularEstadisticas = (barrios) => {
    const preciosM2 = barrios.map(b => b.precioM2);
    return {
        media: preciosM2.reduce((a, b) => a + b) / preciosM2.length,
        min: Math.min(...preciosM2),
        max: Math.max(...preciosM2),
        mediana: calcularMediana(preciosM2)
    };
};
```

### 3. Visualización
- **Mapa de calor**: Colores basados en percentiles de precio
- **Escala cromática**: 
  - 🟢 Verde: < €15/m² (Económico)
  - 🟡 Amarillo: €15-€20/m² (Moderado)
  - 🟠 Naranja: €20-€25/m² (Caro)
  - 🔴 Rojo: > €25/m² (Muy caro)

### 4. Análisis Estadístico
- Medidas de tendencia central (media, mediana)
- Medidas de dispersión (rango, desviación estándar)
- Análisis comparativo por zonas
- Detección de outliers

*Para más detalles, consulta [METODOLOGIA.md](./docs/METODOLOGIA.md)*

---

## 🗺️ Roadmap

### ✅ Fase 1: Prototipo Inicial (Completada)
- [x] Estructura HTML/CSS/JS básica
- [x] Mapa interactivo con Leaflet
- [x] Dataset inicial (30 barrios)
- [x] Gráficos con Chart.js

### ✅ Fase 2: Expansión de Datos (Completada)
- [x] 82 ubicaciones completas
- [x] 10 distritos de Madrid Capital
- [x] 17 municipios área metropolitana
- [x] Datos verificados de 8 fuentes
- [x] Ventajas y desventajas por ubicación
- [x] Documentación completa

### 🚧 Fase 3: Cobertura Total (En Progreso)
- [ ] Completar los 131 barrios de Madrid Capital
- [ ] Incluir los 11 distritos restantes
- [ ] Total: 148 ubicaciones (131 + 17)
- [ ] Actualización de estadísticas generales

### 🔮 Fase 4: Machine Learning (Futuro)
- [ ] Modelo de predicción de precios (Regresión Lineal)
- [ ] Clustering de barrios similares (K-Means)
- [ ] Sistema de recomendación personalizado
- [ ] Análisis de tendencias temporales

### 🎨 Fase 5: Mejoras UX/UI (Futuro)
- [ ] Búsqueda por nombre de barrio
- [ ] Filtro por rango de precio
- [ ] Comparador de hasta 3 barrios
- [ ] Calculadora de rentabilidad de inversión
- [ ] Modo oscuro / claro
- [ ] Exportar datos a CSV/PDF

### 🔄 Fase 6: Automatización (Futuro)
- [ ] Web scraping automatizado real
- [ ] Actualización diaria de precios
- [ ] API REST para consumo externo
- [ ] Sistema de alertas por email

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Ideas para Contribuir
- 🐛 Reportar bugs
- 💡 Proponer nuevas funcionalidades
- 📝 Mejorar documentación
- 🎨 Diseñar mejoras de UI/UX
- 📊 Añadir nuevas fuentes de datos
- 🌍 Traducir a otros idiomas

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 [Tu Nombre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Autor

**[Tu Nombre]**

- 🌐 Portfolio: [tu-portfolio.com](https://tu-portfolio.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)
- 📧 Email: tu.email@ejemplo.com

---

## 🙏 Agradecimientos

- **Leaflet.js** - Por su excelente librería de mapas
- **Chart.js** - Por facilitar la visualización de datos
- **OpenStreetMap** - Por proporcionar mapas gratuitos
- **Comunidad de desarrolladores** - Por sus aportes y feedback

---

## 📝 Notas

### Limitaciones Actuales
- Los datos se actualizan manualmente (sin web scraping automático)
- Cobertura parcial de Madrid (82 de 148 ubicaciones totales)
- Sin persistencia de datos (no hay backend)

### Descargo de Responsabilidad
Los precios mostrados son orientativos y pueden variar. Se recomienda verificar la información en las fuentes oficiales antes de tomar decisiones de inversión o alquiler.

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub! ⭐**

Hecho con ❤️ en Madrid

</div>