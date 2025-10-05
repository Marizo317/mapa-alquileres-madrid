# 🏠 Mapa de Calor: Alquileres en Madrid y Área Metropolitana 2025

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)
![Data Science](https://img.shields.io/badge/Data%20Science-Project-orange.svg)

**Herramienta web interactiva para análisis del mercado inmobiliario de alquiler en Madrid con datos reales verificados de 2025**

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Fuentes de Datos](#-fuentes-de-datos-verificadas)
- [Análisis Estadístico](#-análisis-estadístico-implementado)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Autor](#-autor)

## 🎯 Descripción

Este proyecto es una aplicación web interactiva desarrollada como parte de un proyecto de **Data Science** que permite visualizar, analizar y comparar precios de alquiler en Madrid y su área metropolitana.

La aplicación combina:
- 📊 **Análisis estadístico avanzado** (estadística descriptiva, detección de outliers, percentiles)
- 🗺️ **Visualización geoespacial interactiva** con Leaflet.js
- 📈 **Gráficos dinámicos** con Chart.js
- 🎨 **Interfaz moderna y responsive**
- 📱 **100% funcional en móviles, tablets y desktop**

### ⚡ Demo en Vivo

🔗 [Ver Demo en Vivo](https://tu-usuario.github.io/mapa-alquileres-madrid) *(Reemplaza con tu URL)*

## ✨ Características

### 🗺️ Mapa Interactivo
- Visualización geográfica de 37 ubicaciones (20 barrios de Madrid + 17 municipios)
- Marcadores con código de colores según precio
- Popups informativos con datos detallados
- Zoom y navegación fluida

### 📊 Sistema de Filtros Avanzado
- **Filtro por precio**: Slider interactivo (800€ - 2600€)
- **Filtro por zona**: Capital, Periferia, Oeste, Norte, Sur, Este
- **Ordenamiento múltiple**: Por precio, alfabético, precio/m²
- Actualización dinámica en tiempo real

### 📈 Análisis Estadístico Completo
- **Estadísticas descriptivas**: Media, mediana, moda, rango
- **Medidas de dispersión**: Varianza, desviación estándar, coeficiente de variación
- **Análisis de percentiles**: Q1, Q2, Q3, P10, P90, P95, IQR
- **Detección de outliers**: Método IQR
- **Distribución de frecuencias**: Histogramas automáticos
- **Análisis por zonas geográficas**
- **Comparativa Capital vs Área Metropolitana**
- **Índice de oportunidad**: Ranking de mejores relaciones calidad-precio

### 📉 Visualización de Datos
- Gráfico de barras: Top 10 más caros/baratos
- Gráfico por zonas geográficas
- Histograma de distribución de precios
- Diseño responsive para todos los dispositivos

### 📋 Vista de Lista
- Cards con información detallada de cada ubicación
- Ventajas y desventajas de cada barrio
- Información de fuentes y fechas de actualización

## 🛠️ Tecnologías

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Grid, Flexbox, Variables, Animaciones
- **JavaScript ES6+**: Arrow functions, Destructuring, Módulos

### Librerías
- **[Leaflet.js](https://leafletjs.com/)** v1.9.4 - Mapas interactivos
- **[Chart.js](https://www.chartjs.org/)** v4.4.0 - Gráficos dinámicos
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Datos cartográficos

### Herramientas de Desarrollo
- Git & GitHub
- Visual Studio Code
- Chrome DevTools

## 📁 Estructura del Proyecto

```
mapa-alquileres-madrid/
│
├── index.html                 # Página principal
│
├── css/
│   └── estilos.css           # Estilos responsive con variables CSS
│
├── js/
│   ├── datos.js              # Dataset con 37 ubicaciones (datos reales 2025)
│   ├── estadisticas.js       # Funciones estadísticas avanzadas
│   └── app.js                # Lógica principal de la aplicación
│
├── img/                      # Recursos gráficos y capturas
│
├── README.md                 # Este archivo
├── LICENSE                   # Licencia MIT
└── .gitignore               # Archivos ignorados por Git
```

## 🚀 Instalación

### Opción 1: Clonar el Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mapa-alquileres-madrid.git

# Navegar al directorio
cd mapa-alquileres-madrid

# Abrir index.html en tu navegador
# No requiere servidor, funciona directamente con el navegador
```

### Opción 2: Descargar ZIP

1. Haz clic en el botón "Code" → "Download ZIP"
2. Extrae el archivo
3. Abre `index.html` en tu navegador

### Opción 3: Usar con Live Server (VS Code)

```bash
# Instalar la extensión Live Server en VS Code
# Clic derecho en index.html → "Open with Live Server"
```

## 💻 Uso

1. **Explora el mapa**: Haz clic en los marcadores para ver información detallada
2. **Aplica filtros**: Usa el panel lateral para filtrar por precio y zona
3. **Visualiza gráficos**: Cambia a la pestaña "Gráficos" para análisis visual
4. **Analiza estadísticas**: Revisa la pestaña "Análisis Estadístico" para métricas avanzadas
5. **Navega la lista**: Explora todos los barrios en formato de tarjetas

### Controles Principales

- **🔍 Filtro de Precio**: Arrastra el slider para ajustar el precio máximo
- **🗺️ Filtro de Zona**: Selecciona una zona específica del menú desplegable
- **📊 Ordenamiento**: Ordena los resultados por precio, alfabético o €/m²
- **🔄 Resetear**: Vuelve a los valores por defecto con un clic

## 📚 Fuentes de Datos Verificadas

Todos los datos provienen de fuentes oficiales y verificadas del mercado inmobiliario español:

| Fuente | Período | Tipo |
|--------|---------|------|
| **Idealista** | Enero-Agosto 2025 | Portal inmobiliario líder |
| **Fotocasa** | Abril-Agosto 2025 | Índice inmobiliario |
| **Indomio** | Agosto 2025 | Portal inmobiliario |
| **OCU** | Junio 2025 | Organización de Consumidores |
| **Bankinter** | Agosto 2025 | Informe financiero |
| **Properfy** | Julio 2025 | Análisis de mercado |
| **Noticias para Municipios** | Abril-Julio 2025 | Medios especializados |
| **Madrid Actual** | Julio 2025 | Medios locales |

### Metodología de Recopilación

1. **Recopilación**: Datos extraídos de 8 fuentes oficiales
2. **Verificación**: Cruce de información entre múltiples fuentes
3. **Actualización**: Última actualización: Agosto 2025
4. **Formato**: Precios medios para pisos de ~80m² (estándar del mercado)

### Cobertura Geográfica

- **Madrid Capital**: 20 distritos principales
- **Área Metropolitana**: 17 municipios clave
- **Radio de cobertura**: 20km desde el centro de Madrid

## 📊 Análisis Estadístico Implementado

### Estadísticas Descriptivas
- Media aritmética
- Mediana (Q2)
- Moda
- Mínimo, Máximo y Rango

### Medidas de Dispersión
- Varianza poblacional
- Desviación estándar
- Coeficiente de variación (CV)
- Error estándar de la media

### Análisis de Percentiles
- Cuartiles: Q1 (25%), Q2 (50%), Q3 (75%)
- Percentiles: P10, P90, P95
- Rango intercuartílico (IQR)

### Detección de Outliers
- **Método**: IQR (Interquartile Range)
- **Fórmula**: Outliers < Q1 - 1.5×IQR o > Q3 + 1.5×IQR
- Identificación automática de valores atípicos

### Distribución de Frecuencias
- Histogramas con 6 intervalos
- Frecuencias absolutas y relativas
- Marcas de clase

### Análisis Comparativo
- Por zonas geográficas (Oeste, Norte, Sur, Este)
- Capital vs Área Metropolitana
- Índice de oportunidad (relación calidad-precio)

## 📸 Capturas de Pantalla

### Vista Mapa Interactivo
![Mapa Interactivo](img/screenshot-mapa.png)

### Vista Análisis Estadístico
![Análisis Estadístico](img/screenshot-stats.png)

### Vista Gráficos
![Gráficos](img/screenshot-graficos.png)

### Vista Lista
![Lista de Barrios](img/screenshot-lista.png)

## 🗺️ Roadmap

### ✅ Fase 1: MVP Completado (Actual)
- [x] Mapa interactivo con Leaflet.js
- [x] Sistema de filtros avanzado
- [x] Análisis estadístico completo
- [x] Gráficos con Chart.js
- [x] 37 ubicaciones con datos reales 2025
- [x] Diseño responsive
- [x] Documentación completa

### 🔄 Fase 2: Machine Learning (En desarrollo)
- [ ] Modelo de predicción de precios (Regresión Lineal/Random Forest)
- [ ] Clustering de barrios similares (K-Means)
- [ ] Sistema de recomendación personalizado
- [ ] Análisis de series temporales
- [ ] Predicción de tendencias futuras

### 🔮 Fase 3: Features Avanzadas (Futuro)
- [ ] Calculadora de rentabilidad inmobiliaria (ROI)
- [ ] Comparador de zonas lado a lado
- [ ] Sistema de alertas de precio
- [ ] Análisis de correlaciones avanzado
- [ ] Web scraping automatizado
- [ ] API REST para desarrolladores
- [ ] Modo oscuro/claro
- [ ] Exportar análisis a PDF
- [ ] Dashboard personalizable

## 🤝 Contribuir

Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Áreas de Contribución Deseadas
- 🐛 Reporte de bugs
- ✨ Nuevas funcionalidades
- 📝 Mejoras en documentación
- 🎨 Mejoras en UI/UX
- 📊 Nuevas visualizaciones
- 🧪 Tests unitarios
- 🌍 Traducciones (inglés, etc.)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 [Tu Nombre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Autor

**[Tu Nombre]**
- 🎓 Estudiante de Data Science - [Universidad]
- 📧 Email: tu-email@ejemplo.com
- 💼 LinkedIn: [tu-linkedin](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- **Leaflet.js** - Por la excelente librería de mapas
- **Chart.js** - Por las herramientas de visualización
- **OpenStreetMap** - Por los datos cartográficos
- **Idealista, Fotocasa y demás** - Por los datos públicos del mercado inmobiliario
- **Comunidad de Data Science** - Por inspiración y recursos

---

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~3,500+
- **Ubicaciones analizadas**: 37
- **Fuentes de datos**: 8
- **Funciones estadísticas**: 15+
- **Gráficos implementados**: 4
- **Responsive breakpoints**: 3

---

## 💡 Para Entrevistas y Portfolio

### Aspectos Destacables

1. **Gestión de Datos Reales**: Recopilación, verificación y normalización de datos de múltiples fuentes oficiales
2. **Estadística Aplicada**: Implementación de técnicas estadísticas avanzadas (IQR, percentiles, detección de outliers)
3. **Visualización de Datos**: Mapas interactivos y gráficos dinámicos para insights
4. **Clean Code**: Código modular, documentado y mantenible
5. **UX/UI**: Interfaz intuitiva con sistema de filtros y navegación por pestañas
6. **Responsive Design**: 100% funcional en todos los dispositivos

### Tecnologías Demostradas

- Frontend Web Development (HTML5, CSS3, JavaScript ES6+)
- Data Science & Statistics
- Data Visualization (Maps & Charts)
- Version Control (Git/GitHub)
- Technical Documentation

---

⭐ **Si te ha gustado este proyecto, dale una estrella en GitHub!** ⭐

📌 **Última actualización**: Agosto 2025