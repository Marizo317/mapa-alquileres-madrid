# 🏠 Mapa de Calor: Alquileres en Madrid

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Proyecto de Ciencia de Datos**: Herramienta interactiva de visualización y análisis estadístico del mercado inmobiliario de Madrid.

![Captura del proyecto](https://via.placeholder.com/800x400/667eea/ffffff?text=Mapa+de+Alquileres+Madrid)

## 📋 Descripción

Aplicación web interactiva para analizar el mercado de alquileres en Madrid mediante técnicas de visualización de datos y análisis estadístico. Ideal para personas que buscan mudarse, inversores inmobiliarios o estudiantes de Ciencia de Datos.

### ✨ Características Principales

- 🗺️ **Mapa interactivo** con visualización por colores según rangos de precios
- 📊 **Análisis estadístico completo**: media, mediana, desviación estándar, percentiles
- 📈 **Gráficos dinámicos**: histogramas, box plots, gráficos de barras
- ⚠️ **Detección de outliers** mediante método IQR
- 🎯 **Sistema de filtros** por precio y ordenamiento
- 📱 **Diseño responsive** adaptable a móviles y tablets

## 🚀 Demo en Vivo

🔗 [Ver Demo](https://tu-usuario.github.io/mapa-alquileres-madrid) _(Próximamente)_

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsive
- **JavaScript (Vanilla)** - Lógica de la aplicación

### Librerías
- [Leaflet.js](https://leafletjs.com/) - Mapas interactivos
- [Chart.js](https://www.chartjs.org/) - Visualización de datos
- [OpenStreetMap](https://www.openstreetmap.org/) - Capa base del mapa

## 📁 Estructura del Proyecto

```
mapa-alquileres-madrid/
│
├── index.html              # Página principal
├── README.md              # Documentación
├── LICENSE                # Licencia MIT
│
├── css/
│   └── estilos.css        # Estilos globales
│
├── js/
│   ├── app.js             # Lógica principal de la aplicación
│   ├── datos.js           # Dataset de barrios de Madrid
│   └── estadisticas.js    # Funciones estadísticas avanzadas
│
└── img/                   # Recursos gráficos (si aplica)
```

## 🎯 Funcionalidades

### 1. Visualización Geográfica
- Mapa interactivo de Madrid
- Marcadores por barrio con código de colores según precio
- Popups informativos con detalles de cada zona
- Identificación visual de outliers

### 2. Análisis Estadístico

#### Medidas de Tendencia Central
- Media aritmética
- Mediana (valor central)
- Moda (valor más frecuente)

#### Medidas de Dispersión
- Desviación estándar
- Varianza
- Coeficiente de variación
- Rango intercuartílico (IQR)

#### Análisis de Distribución
- Percentiles (Q1, Q2, Q3)
- Detección automática de outliers
- Histogramas de frecuencia
- Box plots

### 3. Filtros y Ordenamiento
- Filtro por precio máximo
- Ordenamiento ascendente/descendente
- Ordenamiento alfabético

## 💻 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (recomendado: Visual Studio Code)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/mapa-alquileres-madrid.git
```

2. **Navegar al directorio**
```bash
cd mapa-alquileres-madrid
```

3. **Abrir con Live Server** (VS Code)
   - Instalar extensión "Live Server" en VS Code
   - Clic derecho en `index.html` → "Open with Live Server"

4. **O abrir directamente**
   - Hacer doble clic en `index.html`

¡Listo! La aplicación se abrirá en tu navegador.

## 📊 Dataset

Los datos actuales son **simulados con fines educativos** e incluyen:

- 16 barrios de Madrid
- Precio medio de alquiler (€/mes)
- Precio por metro cuadrado (€/m²)
- Metros cuadrados típicos
- Coordenadas geográficas (latitud/longitud)
- Ventajas y desventajas de cada zona

### Próximas Mejoras
🔜 Integración con **web scraping** para obtener datos reales de portales inmobiliarios
🔜 Actualización automática de datos
🔜 Histórico de precios y series temporales

## 🎓 Conceptos de Ciencia de Datos Aplicados

Este proyecto implementa conceptos fundamentales de Data Science:

### Estadística Descriptiva
- Análisis univariado de distribuciones
- Cálculo de estadísticos robustos
- Identificación de valores atípicos

### Visualización de Datos
- Mapas de calor geoespaciales
- Gráficos estadísticos (histogramas, box plots)
- Dashboards interactivos

### Análisis Exploratorio de Datos (EDA)
- Inspección de distribuciones
- Detección de patrones
- Análisis de correlaciones _(próximamente)_

## 🗺️ Roadmap

### Fase 1: Análisis Estadístico ✅
- [x] Estadísticas descriptivas básicas
- [x] Visualizaciones con Chart.js
- [x] Detección de outliers
- [ ] Matriz de correlaciones
- [ ] Análisis multivariado

### Fase 2: Machine Learning 🚧
- [ ] Predicción de precios (Regresión)
- [ ] Clustering de barrios similares
- [ ] Sistema de recomendación

### Fase 3: Web Scraping 📅
- [ ] Scraping de Idealista/Fotocasa
- [ ] ETL Pipeline automatizado
- [ ] Análisis de series temporales

### Fase 4: Despliegue 📅
- [ ] Deploy en GitHub Pages
- [ ] API REST propia
- [ ] Base de datos PostgreSQL

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si quieres mejorar este proyecto:

1. Haz un **Fork** del proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Haz **commit** de tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Haz **push** a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un **Pull Request**

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Tu Nombre**
- GitHub: [@Marizo317](https://github.com/Marizo317)
- LinkedIn: [Maxim Rybas]
- Email: maxim.ribas@gmail.com

## 🙏 Agradecimientos

- [Leaflet.js](https://leafletjs.com/) por los mapas interactivos
- [Chart.js](https://www.chartjs.org/) por las visualizaciones
- [OpenStreetMap](https://www.openstreetmap.org/) por los datos cartográficos
- Comunidad de desarrolladores de código abierto

## 📚 Recursos de Aprendizaje

Si quieres aprender más sobre los conceptos aplicados:

- [Estadística Descriptiva - Khan Academy](https://www.khanacademy.org/math/statistics-probability)
- [Visualización de Datos - freeCodeCamp](https://www.freecodecamp.org/learn/data-visualization/)
- [JavaScript Moderno - javascript.info](https://javascript.info/)
- [Leaflet Tutoriales](https://leafletjs.com/examples.html)

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella!

**Fecha de última actualización:** Octubre 2024