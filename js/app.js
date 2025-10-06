// ============================================================================
// APP.JS - LÓGICA PRINCIPAL DE LA APLICACIÓN
// ============================================================================
// Mapa de Alquileres Madrid 2025 - Fase 1
// 47 ubicaciones: 30 barrios + 17 municipios
// ============================================================================

// Variables globales
let mapaLeaflet = null;
let marcadores = [];
let datosFiltrados = [...barriosMadrid];
let graficoPreciosChart = null;
let graficoM2Chart = null;

// ============================================================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación...');
    console.log(`📊 Datos cargados: ${barriosMadrid.length} ubicaciones`);
    
    // Inicializar componentes
    inicializarMapa();
    inicializarFiltros();
    actualizarEstadisticas();
    renderizarLista();
    
    console.log('✅ Aplicación iniciada correctamente');
});

// ============================================================================
// SISTEMA DE PESTAÑAS (VISTAS)
// ============================================================================

function cambiarVista(vistaId) {
    console.log(`📂 Cambiando a vista: ${vistaId}`);
    
    // Desactivar todas las pestañas y vistas
    document.querySelectorAll('.pestana').forEach(btn => {
        btn.classList.remove('activa');
    });
    document.querySelectorAll('.vista').forEach(vista => {
        vista.classList.remove('activa');
    });
    
    // Activar la pestaña y vista seleccionada
    const botonActivo = document.querySelector(`[data-tab="${vistaId}"]`);
    if (botonActivo) {
        botonActivo.classList.add('activa');
    }
    
    const vistaActiva = document.getElementById(`vista-${vistaId}`);
    if (vistaActiva) {
        vistaActiva.classList.add('activa');
    }
    
    // Actualizar contenido según la vista
    if (vistaId === 'mapa' && mapaLeaflet) {
        setTimeout(() => mapaLeaflet.invalidateSize(), 100);
    } else if (vistaId === 'lista') {
        renderizarLista();
    } else if (vistaId === 'graficos') {
        inicializarGraficos();
    }
}

// ============================================================================
// MAPA INTERACTIVO CON LEAFLET
// ============================================================================

function inicializarMapa() {
    console.log('🗺️ Inicializando mapa de Leaflet...');
    
    // Crear mapa centrado en Madrid
    mapaLeaflet = L.map('mapa').setView(
        [configuracionMapa.centroMadrid.lat, configuracionMapa.centroMadrid.lng],
        configuracionMapa.zoomInicial
    );
    
    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: configuracionMapa.zoomMaximo,
        minZoom: configuracionMapa.zoomMinimo
    }).addTo(mapaLeaflet);
    
    // Añadir marcadores
    actualizarMarcadores(datosFiltrados);
    
    console.log('✅ Mapa inicializado');
}

function actualizarMarcadores(datos) {
    console.log(`📍 Actualizando marcadores: ${datos.length} ubicaciones`);
    
    // Limpiar marcadores existentes
    marcadores.forEach(marcador => mapaLeaflet.removeLayer(marcador));
    marcadores = [];
    
    // Crear nuevos marcadores
    datos.forEach(barrio => {
        const color = obtenerColorPorPrecio(barrio.precioMedio);
        
        const marcador = L.circleMarker([barrio.lat, barrio.lng], {
            radius: 8,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        });
        
        // Popup con información
        const distrito = barrio.distrito ? `<strong>Distrito:</strong> ${barrio.distrito}<br>` : '';
        const popupContent = `
            <div style="min-width: 250px; font-family: Inter, sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 1.1rem;">
                    ${barrio.nombre}
                </h3>
                ${distrito}
                <div style="background: ${color}; color: white; padding: 10px; border-radius: 8px; margin-bottom: 10px; text-align: center;">
                    <strong style="font-size: 1.4rem;">${barrio.precioMedio}€/mes</strong>
                </div>
                <table style="width: 100%; font-size: 0.9rem;">
                    <tr>
                        <td style="padding: 4px 0; color: #64748b;">Precio/m²:</td>
                        <td style="padding: 4px 0; text-align: right; font-weight: 600;">
                            ${barrio.precioM2.toFixed(1)} €/m²
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0; color: #64748b;">Tamaño:</td>
                        <td style="padding: 4px 0; text-align: right; font-weight: 600;">
                            ${barrio.metrosCuadrados} m²
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0; color: #64748b;">Zona:</td>
                        <td style="padding: 4px 0; text-align: right; font-weight: 600;">
                            ${barrio.zona}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0; color: #64748b;">Fuente:</td>
                        <td style="padding: 4px 0; text-align: right; font-style: italic; color: #3b82f6;">
                            ${barrio.fuente}
                        </td>
                    </tr>
                </table>
            </div>
        `;
        
        marcador.bindPopup(popupContent);
        marcador.addTo(mapaLeaflet);
        marcadores.push(marcador);
        
        // Efectos hover
        marcador.on('mouseover', function() {
            this.setStyle({ radius: 12, fillOpacity: 1 });
        });
        marcador.on('mouseout', function() {
            this.setStyle({ radius: 8, fillOpacity: 0.8 });
        });
    });
}

// ============================================================================
// SISTEMA DE FILTROS
// ============================================================================

function inicializarFiltros() {
    console.log('🔧 Inicializando filtros...');
    
    // Listener para el slider de precio
    const sliderPrecio = document.getElementById('precio-max');
    if (sliderPrecio) {
        sliderPrecio.addEventListener('input', function() {
            document.getElementById('precio-valor').textContent = this.value;
        });
    }
    
    // Listener para el select de ordenamiento
    const selectOrden = document.getElementById('ordenar');
    if (selectOrden) {
        selectOrden.addEventListener('change', aplicarFiltros);
    }
}

function aplicarFiltros() {
    console.log('🔍 Aplicando filtros...');
    
    const precioMax = parseInt(document.getElementById('precio-max').value);
    const ordenSeleccionado = document.getElementById('ordenar').value;
    
    // Filtrar por precio
    datosFiltrados = barriosMadrid.filter(barrio => barrio.precioMedio <= precioMax);
    
    console.log(`📊 Filtrados: ${datosFiltrados.length} de ${barriosMadrid.length}`);
    
    // Ordenar
    switch (ordenSeleccionado) {
        case 'precio-asc':
            datosFiltrados.sort((a, b) => a.precioMedio - b.precioMedio);
            break;
        case 'precio-desc':
            datosFiltrados.sort((a, b) => b.precioMedio - a.precioMedio);
            break;
        case 'nombre':
            datosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
    }
    
    // Actualizar todas las vistas
    actualizarMarcadores(datosFiltrados);
    actualizarEstadisticas();
    renderizarLista();
    
    // Si estamos en la vista de gráficos, actualizarlos
    if (document.getElementById('vista-graficos').classList.contains('activa')) {
        inicializarGraficos();
    }
}

// ============================================================================
// ESTADÍSTICAS RÁPIDAS
// ============================================================================

function actualizarEstadisticas() {
    if (datosFiltrados.length === 0) {
        document.getElementById('total-barrios').textContent = '0';
        document.getElementById('precio-medio').textContent = '0€';
        document.getElementById('mas-barato').textContent = '-';
        document.getElementById('mas-caro').textContent = '-';
        return;
    }
    
    const precios = datosFiltrados.map(d => d.precioMedio);
    const precioMedio = precios.reduce((sum, p) => sum + p, 0) / precios.length;
    
    const masBarato = datosFiltrados.reduce((min, b) => 
        b.precioMedio < min.precioMedio ? b : min
    );
    
    const masCaro = datosFiltrados.reduce((max, b) => 
        b.precioMedio > max.precioMedio ? b : max
    );
    
    document.getElementById('total-barrios').textContent = datosFiltrados.length;
    document.getElementById('precio-medio').textContent = Math.round(precioMedio) + '€';
    document.getElementById('mas-barato').textContent = `${masBarato.nombre} (${masBarato.precioMedio}€)`;
    document.getElementById('mas-caro').textContent = `${masCaro.nombre} (${masCaro.precioMedio}€)`;
    
    console.log(`📈 Estadísticas actualizadas: ${datosFiltrados.length} barrios`);
}

// ============================================================================
// VISTA LISTA DE BARRIOS
// ============================================================================

function renderizarLista() {
    const contenedor = document.getElementById('lista-barrios');
    
    if (!contenedor) return;
    
    if (datosFiltrados.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #64748b;">
                <h3>❌ No se encontraron resultados</h3>
                <p>Prueba ajustando los filtros</p>
            </div>
        `;
        return;
    }
    
    // Actualizar contador si existe
    const contador = document.getElementById('resultado-count');
    if (contador) {
        contador.textContent = `${datosFiltrados.length} resultados`;
    }
    
    contenedor.innerHTML = '';
    
    datosFiltrados.forEach(barrio => {
        const card = document.createElement('div');
        card.className = 'barrio-card';
        card.style.cssText = `
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            transition: all 0.3s ease;
            cursor: pointer;
        `;
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                <h3 style="margin: 0; color: #1e293b; font-size: 1.3rem;">${barrio.nombre}</h3>
                <span style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                    ${barrio.zona}
                </span>
            </div>
            
            ${barrio.distrito ? `<p style="color: #64748b; margin-bottom: 10px; font-size: 0.9rem;">📍 Distrito: ${barrio.distrito}</p>` : ''}
            
            <div style="background: ${obtenerColorPorPrecio(barrio.precioMedio)}; color: white; padding: 15px; border-radius: 10px; margin-bottom: 15px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 800; margin-bottom: 5px;">${barrio.precioMedio}€</div>
                <div style="font-size: 0.9rem; opacity: 0.95;">al mes</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
                <div>
                    <div style="color: #64748b; font-size: 0.85rem;">Precio/m²</div>
                    <div style="font-weight: 600; color: #1e293b;">${barrio.precioM2.toFixed(1)} €/m²</div>
                </div>
                <div>
                    <div style="color: #64748b; font-size: 0.85rem;">Tamaño</div>
                    <div style="font-weight: 600; color: #1e293b;">${barrio.metrosCuadrados} m²</div>
                </div>
                <div>
                    <div style="color: #64748b; font-size: 0.85rem;">Fuente</div>
                    <div style="font-weight: 600; color: #3b82f6; font-size: 0.9rem;">${barrio.fuente}</div>
                </div>
                <div>
                    <div style="color: #64748b; font-size: 0.85rem;">Actualizado</div>
                    <div style="font-weight: 600; color: #1e293b; font-size: 0.9rem;">${barrio.fechaActualizacion}</div>
                </div>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #22c55e; font-size: 1rem; margin-bottom: 8px; display: flex; align-items: center; gap: 5px;">
                    ✅ Ventajas
                </h4>
                <ul style="margin: 0; padding-left: 20px; color: #64748b; font-size: 0.9rem;">
                    ${barrio.ventajas.slice(0, 3).map(v => `<li style="margin-bottom: 4px;">${v}</li>`).join('')}
                </ul>
            </div>
            
            <div>
                <h4 style="color: #ef4444; font-size: 1rem; margin-bottom: 8px; display: flex; align-items: center; gap: 5px;">
                    ⚠️ Desventajas
                </h4>
                <ul style="margin: 0; padding-left: 20px; color: #64748b; font-size: 0.9rem;">
                    ${barrio.desventajas.slice(0, 3).map(d => `<li style="margin-bottom: 4px;">${d}</li>`).join('')}
                </ul>
            </div>
        `;
        
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
        
        contenedor.appendChild(card);
    });
    
    console.log(`📋 Lista renderizada: ${datosFiltrados.length} cards`);
}

// ============================================================================
// GRÁFICOS CON CHART.JS
// ============================================================================

function inicializarGraficos() {
    console.log('📊 Inicializando gráficos...');
    
    crearGraficoPreciosComparativa();
    crearGraficoM2();
}

function crearGraficoPreciosComparativa() {
    const canvas = document.getElementById('grafico-precios');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (graficoPreciosChart) {
        graficoPreciosChart.destroy();
    }
    
    // Tomar top 10 más caros y más baratos
    const ordenados = [...datosFiltrados].sort((a, b) => b.precioMedio - a.precioMedio);
    const top10 = ordenados.slice(0, 10);
    
    graficoPreciosChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top10.map(b => b.nombre),
            datasets: [{
                label: 'Precio medio (€/mes)',
                data: top10.map(b => b.precioMedio),
                backgroundColor: top10.map(b => obtenerColorPorPrecio(b.precioMedio) + 'CC'),
                borderColor: top10.map(b => obtenerColorPorPrecio(b.precioMedio)),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '€/mes';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '€';
                        }
                    }
                }
            }
        }
    });
    
    console.log('✅ Gráfico de precios creado');
}

function crearGraficoM2() {
    const canvas = document.getElementById('grafico-m2');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (graficoM2Chart) {
        graficoM2Chart.destroy();
    }
    
    // Tomar top 10 más caros por m²
    const ordenadosM2 = [...datosFiltrados].sort((a, b) => b.precioM2 - a.precioM2);
    const top10M2 = ordenadosM2.slice(0, 10);
    
    graficoM2Chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top10M2.map(b => b.nombre),
            datasets: [{
                label: 'Precio por m² (€/m²)',
                data: top10M2.map(b => b.precioM2),
                backgroundColor: '#8b5cf6CC',
                borderColor: '#8b5cf6',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toFixed(1) + '€/m²';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toFixed(1) + '€/m²';
                        }
                    }
                }
            }
        }
    });
    
    console.log('✅ Gráfico de €/m² creado');
}

// ============================================================================
// LOGS Y DEBUGGING
// ============================================================================

console.log(`
🏠 MAPA DE ALQUILERES MADRID 2025 - FASE 1
==========================================
📊 Total ubicaciones: ${barriosMadrid.length}
🏛️ Madrid Capital: ${barriosMadrid.filter(b => b.zona === 'Capital').length} barrios
🌳 Área Metropolitana: ${barriosMadrid.filter(b => b.zona === 'Periferia').length} municipios
📅 Última actualización: Agosto 2025
🎯 Versión: 2.0.0-fase1
`);