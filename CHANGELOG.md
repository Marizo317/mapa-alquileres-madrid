# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

---

## [2.0.0] - 2025-10-06

### 🎉 Fase 2 Completada

### Añadido
- ✅ **82 ubicaciones totales** mapeadas
  - 65 barrios de Madrid Capital (10 distritos completos)
  - 17 municipios del área metropolitana
- ✅ **Nuevos distritos** incluidos en Madrid Capital:
  - Centro (5 barrios)
  - Salamanca (6 barrios)
  - Retiro (6 barrios)
  - Arganzuela (7 barrios)
  - Chamartín (6 barrios)
  - Tetuán (6 barrios)
  - Chamberí (6 barrios)
  - Ciudad Lineal (9 barrios)
  - Hortaleza (8 barrios)
  - Puente de Vallecas (6 barrios)
- ✅ Campo `distrito` en cada barrio para mejor organización
- ✅ **Ventajas y desventajas** (4 de cada una) por cada ubicación
- ✅ Campo `fuente` para indicar origen de los datos
- ✅ Campo `fechaActualizacion` para trazabilidad

### Mejorado
- 📊 **Actualización de datos a 2025** de 8 fuentes oficiales:
  - Idealista, Fotocasa, Indomio, OCU, Bankinter, Properfy, Ayto. Madrid, INE
- 🎨 **Interfaz visual mejorada**:
  - Gradientes modernos en botones y paneles
  - Efecto glassmorphism en tarjetas
  - Animaciones suaves en hover
  - Sombras y profundidad mejoradas
- 🗺️ **Leyenda del mapa actualizada** con nuevos rangos de precio:
  - Verde: < €15/m² (Económico)
  - Amarillo: €15-€20/m² (Moderado)
  - Naranja: €20-€25/m² (Caro)
  - Rojo: > €25/m² (Muy caro)
- 📈 **Gráficos optimizados** para mejor legibilidad
- 🔍 **Tooltips informativos** en toda la aplicación

### Cambiado
- 🎯 Función `obtenerColorPorPrecio()` actualizada con nuevos rangos
- 📊 Estadísticas recalculadas con el dataset completo
- 🏷️ Footer actualizado: "Fase 2 Completa - 82 ubicaciones, 10 distritos"

### Documentación
- 📝 README.md completo y profesional
- 📋 CHANGELOG.md añadido
- 🔬 Metodología documentada
- 📊 Fuentes de datos referenciadas

---

## [1.0.0] - 2025-10-05

### 🚀 Lanzamiento Inicial (Fase 1)

### Añadido
- 🗺️ **Mapa interactivo** con Leaflet.js
  - Mapa de calor con colores por precio
  - Marcadores clicables con información detallada
  - Zoom y navegación fluida
- 📊 **Panel de estadísticas** en tiempo real
  - Precio medio por m² y mensual
  - Precios mínimos y máximos
  - Barrio más económico y más caro
  - Total de barrios mapeados
- 📈 **Gráficos interactivos** con Chart.js
  - Top 10 barrios más caros
  - Top 10 barrios más económicos
  - Comparativa Capital vs Área Metropolitana
  - Distribución por rangos de precio
- 🎛️ **4 vistas personalizables**:
  - Vista General (todos los barrios)
  - Solo Madrid Capital
  - Solo Área Metropolitana
  - Barrios Económicos (<€20/m²)
- 📊 **Dataset inicial**: 30 ubicaciones (20 barrios + 10 municipios)
- 🎨 **Diseño responsive**: Adaptado a móviles, tablets y escritorio

### Características Técnicas
- HTML5 semántico
- CSS3 con Grid y Flexbox
- JavaScript ES6+ vanilla (sin frameworks)
- Leaflet.js 1.9.4 para mapas
- Chart.js 4.4.0 para gráficos
- OpenStreetMap como proveedor de mapas

---

## [0.1.0] - 2025-10-04

### 🔧 Prototipo Inicial

### Añadido
- Estructura básica del proyecto
- Configuración de Visual Studio Code
- Instalación de dependencias CDN
- Mapa estático con Leaflet
- Dataset de prueba (10 ubicaciones)

---

## 🔮 Próximas Versiones Planificadas

### [3.0.0] - Fase 3: Cobertura Total (Próximamente)
- [ ] Completar 131 barrios de Madrid Capital
- [ ] Incluir 11 distritos restantes:
  - Moncloa-Aravaca, Latina, Carabanchel, Usera, Moratalaz
  - Fuencarral-El Pardo, San Blas-Canillejas, Barajas
  - Vicálvaro, Villa de Vallecas, Villaverde
- [ ] Total: **148 ubicaciones** (131 barrios + 17 municipios)

### [4.0.0] - Fase 4: Machine Learning
- [ ] Modelo de predicción de precios (Regresión)
- [ ] Clustering de barrios similares (K-Means)
- [ ] Sistema de recomendación personalizado
- [ ] Análisis de tendencias temporales

### [5.0.0] - Fase 5: Mejoras UX/UI
- [ ] Búsqueda por nombre de barrio
- [ ] Filtro por rango de precio personalizado
- [ ] Comparador de hasta 3 barrios
- [ ] Calculadora de rentabilidad
- [ ] Modo oscuro / claro
- [ ] Exportar a CSV/PDF

### [6.0.0] - Fase 6: Automatización
- [ ] Web scraping automatizado
- [ ] Actualización diaria de precios
- [ ] API REST para consumo externo
- [ ] Sistema de alertas por email

---

## Leyenda de Tipos de Cambios

- **Añadido**: Nuevas funcionalidades
- **Mejorado**: Mejoras en funcionalidades existentes
- **Cambiado**: Cambios en funcionalidades existentes
- **Obsoleto**: Funcionalidades que serán eliminadas
- **Eliminado**: Funcionalidades eliminadas
- **Corregido**: Corrección de bugs
- **Seguridad**: Cambios de seguridad

---

## Enlaces

- [Repositorio GitHub](https://github.com/tu-usuario/mapa-alquileres-madrid)
- [Demo en Vivo](https://tu-usuario.github.io/mapa-alquileres-madrid)
- [Issues](https://github.com/tu-usuario/mapa-alquileres-madrid/issues)
- [Pull Requests](https://github.com/tu-usuario/mapa-alquileres-madrid/pulls)