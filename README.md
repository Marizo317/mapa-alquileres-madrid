# 🗺️ Mapa de Calor: Alquileres en Madrid

[![GitHub Pages](https://img.shields.io/badge/demo-live-success)](https://Marizo317.github.io/mapa-alquileres-madrid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Fase 4](https://img.shields.io/badge/Fase-4%20En%20Progreso-orange)]()
[![Cobertura](https://img.shields.io/badge/Cobertura-100%25%20Madrid-success)]()
[![Barrios Enriquecidos](https://img.shields.io/badge/Barrios-53%2F148-blue)]()

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
- ✅ **5-8 ventajas específicas** (en proceso de enriquecimiento)
- ✅ **3-5 desventajas realistas** (en proceso de enriquecimiento)
- ✅ Fuente de datos y fecha de actualización
- ✅ Coordenadas GPS precisas

### 🎨 Interfaz de Usuario
- **Diseño responsive**: Adaptado a móviles, tablets y escritorio
- **Tema moderno**: Gradientes, glassmorphism y animaciones suaves
- **Tooltips informativos**: Ayuda contextual en toda la aplicación
- **Filtros intuitivos**: Cambio de vista con un solo click

---

## 🌐 Demo en Vivo

🚀 **[Ver Aplicación en Vivo](https://Marizo317.github.io/mapa-alquileres-madrid)**

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
Opción 2: Descargar ZIP
Click en el botón verde "Code"

Seleccionar "Download ZIP"

Descomprimir el archivo

Abrir index.html con un navegador web

Requisitos
Navegador web moderno (Chrome, Firefox, Safari, Edge)

Conexión a internet (para cargar librerías CDN y mapas)

(Opcional) Servidor local para desarrollo

🚀 Uso
Para Usuarios Finales
Explorar el mapa: Haz zoom y desplázate por Madrid

Cambiar vista: Usa los botones superiores (General, Capital, Metro, Económicos)

Ver detalles: Click en cualquier marcador para información completa

Analizar estadísticas: Revisa el panel lateral con gráficos y datos

Comparar barrios: Observa el mapa de calor para identificar zonas por color

Para Desarrolladores
javascript
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
📁 Estructura del Proyecto
text
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
│   ├── datos.js           # Dataset de barrios y municipios (148 ubicaciones)
│   ├── mapa.js            # Lógica del mapa interactivo
│   ├── graficos.js        # Generación de gráficos con Chart.js
│   └── estadisticas.js    # Cálculos estadísticos
│
├── img/
│   └── preview.png        # Captura de pantalla del proyecto
│
└── docs/
    └── METODOLOGIA.md     # Explicación detallada de la metodología
📊 Dataset
Fuentes de Datos (2025)
Los datos han sido recopilados y verificados de múltiples fuentes oficiales:

Idealista - Portal inmobiliario líder en España

Fotocasa - Plataforma de compraventa y alquiler

Indomio - Comparador de precios inmobiliarios

OCU - Organización de Consumidores y Usuarios

Bankinter - Estudios de mercado inmobiliario

Properfy - Big Data inmobiliario

Ayuntamiento de Madrid - Datos oficiales de urbanismo

INE - Instituto Nacional de Estadística

Cobertura Actual (Fase 3B - COMPLETA)
✅ 148 ubicaciones totales

✅ 131 barrios de Madrid Capital - 100% COMPLETO

✅ 21 distritos - TODOS LOS DISTRITOS DE MADRID

✅ 17 municipios área metropolitana

Estado de Enriquecimiento (Fase 4 - EN PROGRESO)
✅ 53 barrios completados con información detallada

🔄 95 barrios pendientes de enriquecimiento

📈 424 ventajas documentadas (promedio 8 por barrio)

📉 265 desventajas documentadas (promedio 5 por barrio)

Datos por Ubicación
Cada registro incluye 11 campos:

ID único

Nombre del barrio/municipio

Coordenadas GPS (lat, lng)

Zona y distrito

Precio medio mensual (€)

Precio por m² (€/m²)

Metraje medio (m²)

5-8 ventajas específicas (en proceso de enriquecimiento)

3-5 desventajas realistas (en proceso de enriquecimiento)

Fuente de datos

Fecha de actualización

🔬 Metodología
1. Recopilación de Datos
Web scraping conceptual de múltiples fuentes

Verificación cruzada entre plataformas

Actualización mensual de precios

Validación de coordenadas GPS

2. Enriquecimiento con IA (Fase 4)
javascript
// Proceso de enriquecimiento automatizado
const enriquecerBarrio = (barrio) => {
    return {
        ...barrio,
        ventajas: [
            "Ubicación privilegiada junto a puntos de interés",
            "Excelente conexión de transporte público",
            "Comercio local variado y de calidad",
            // ... 5-8 ventajas específicas
        ],
        desventajas: [
            "Precios elevados comparado con la media",
            "Tráfico intenso en horas punta",
            // ... 3-5 desventajas realistas
        ]
    };
};
3. Visualización
Mapa de calor: Colores basados en percentiles de precio

Escala cromática:

🟢 Verde: < €15/m² (Económico)

🟡 Amarillo: €15-€20/m² (Moderado)

🟠 Naranja: €20-€25/m² (Caro)

🔴 Rojo: > €25/m² (Muy caro)

4. Análisis Estadístico
Medidas de tendencia central (media, mediana)

Medidas de dispersión (rango, desviación estándar)

Análisis comparativo por zonas

Detección de outliers

Para más detalles, consulta METODOLOGIA.md

🗺️ Roadmap
✅ Fase 1: Prototipo Inicial (Completada)
Estructura HTML/CSS/JS básica

Mapa interactivo con Leaflet

Dataset inicial (30 barrios)

Gráficos con Chart.js

✅ Fase 2: Expansión de Datos (Completada)
82 ubicaciones completas

10 distritos de Madrid Capital

17 municipios área metropolitana

Datos verificados de 8 fuentes

Ventajas y desventajas por ubicación

Documentación completa

✅ Fase 3: Cobertura Total (Completada)
148 ubicaciones totales (131 barrios + 17 municipios)

21 distritos completos - 100% Madrid Capital

Datos de precios actualizados 2025

Coordenadas GPS verificadas

🔄 Fase 4: Enriquecimiento de Datos (EN PROGRESO)
53 barrios enriquecidos con información detallada

Completar enriquecimiento de 95 barrios restantes

Procesamiento por lotes de 10-15 barrios/día

Validación cruzada de información

Estandarización de formato y contenido

🔮 Fase 5: Arquitectura Técnica (PRÓXIMO)
Migración a Supabase (PostgreSQL)

API REST automática

Diseño del schema de base de datos

Testing de queries y performance

🎯 Fase 6: Algoritmo de Matching (FUTURO)
Cuestionario de perfil de usuario

Algoritmo de matching ponderado

Sistema de storytelling personalizado

Top 3 recomendaciones por usuario

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

Fork el repositorio

Crea una rama para tu feature (git checkout -b feature/nueva-funcionalidad)

Commit tus cambios (git commit -m 'Añadir nueva funcionalidad')

Push a la rama (git push origin feature/nueva-funcionalidad)

Abre un Pull Request

Ideas para Contribuir
🐛 Reportar bugs

💡 Proponer nuevas funcionalidades

📝 Mejorar documentación

🎨 Diseñar mejoras de UI/UX

📊 Añadir nuevas fuentes de datos

🌍 Traducir a otros idiomas

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

text
MIT License

Copyright (c) 2025 Marizo317

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
👨‍💻 Autor
[Marizo317]

🐙 GitHub: @Marizo317

🌐 Proyecto: Mapa Alquileres Madrid

🙏 Agradecimientos
Leaflet.js - Por su excelente librería de mapas

Chart.js - Por facilitar la visualización de datos

OpenStreetMap - Por proporcionar mapas gratuitos

Comunidad de desarrolladores - Por sus aportes y feedback

📝 Notas
Estado Actual del Proyecto
✅ Cobertura 100% completada - 148 ubicaciones mapeadas

🔄 Enriquecimiento en progreso - 53/148 barrios completados

📊 Datos actualizados 2025 - Precios verificados

🎯 Próximo objetivo - Completar enriquecimiento de base de datos

Descargo de Responsabilidad
Los precios mostrados son orientativos y pueden variar. Se recomienda verificar la información en las fuentes oficiales antes de tomar decisiones de inversión o alquiler.

<div align="center">
⭐ Si te gustó este proyecto, dale una estrella en GitHub! ⭐

Hecho con ❤️ en Madrid

</div> ``