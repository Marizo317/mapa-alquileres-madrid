// ============================================================================
// APLICACIÓN PRINCIPAL: MAPA DE ALQUILERES MADRID 2025
// ============================================================================

// Variables globales
let mapaLeaflet = null;
let marcadores = [];
let datosFiltrados = [...barriosMadrid];
let graficos = {};

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando aplicación...');
    
    // Inicializar componentes
    inicializarMapa();
    inicializarEventos();
    inicializarEstadisticasRapidas();
    renderizarLista();
    inicializarGraficos();
    mostrarAnalisisEstadistico();
    
    console.log('✅ Aplicación iniciada correctamente');
});

// ============================================================================
// SISTEMA DE PESTAÑAS
// ============================================================================

function inicializarEventos() {
    // Pestañas
    const botonesTabs = document.querySelectorAll('.tab-button');
    botonesTabs.forEach(boton => {
        boton.addEventListener('click', () => cambiarTab(boton.dataset.tab));
    });
    
    // Filtros
    document.getElementById('filtro-precio').addEventListener('input', aplicarFiltros);
    document.getElementById('filtro-zona').addEventListener('change', aplicarFiltros);
    document.getElementById('orden').addEventListener('change', aplicarFiltros);
    document.getElementById('resetear-filtros').addEventListener('click', resetearFiltros);
    
    // Actualizar valor del slider
    document.getElementById('filtro-precio').addEventListener('input', (e) => {
        document.getElementById('precio-valor').textContent = e.target.value + '€';
    });
}

function cambiarTab(tabId) {
    // Desactivar todas las pestañas
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Activar pestaña seleccionada
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
    
    // Actualizar mapa si es necesario
    if (tabId === 'mapa' && mapaLeaflet) {
        setTimeout(() => mapaLeaflet.invalidateSize(), 100);
    }
    
    // Actualizar gráficos si es necesario
    if (tabId === 'graficos') {
        actualizarGraficos();
    }
}

// ============================================================================
// MAPA INTERACTIVO CON LEAFLET
// ============================================================================

function inicializarMapa() {
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
}

function actualizarMarcadores(datos) {
    // Limpiar marcadores existentes
    marcadores.forEach(marcador => mapaLeaflet.removeLayer(marcador));
    marcadores = [];
    
    // Crear nuevos marcadores
    datos.forEach(barrio => {
        const color = obtenerColorPorPrecio(barrio.precioMedio);
        
        const marcador = L.circleMarker([barrio.lat, barrio.lng], {
            radius: 10,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        });
        
        // Popup con información
        const popupContent = `
            <div style="min-width: 250px;">
                <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 1.1rem;">
                    ${barrio.nombre}
                </h3>
                <div style="background: ${color}; color: white; padding: 8px; border-radius: 6px; margin-bottom: 10px;">
                    <strong style="font-size: 1.3rem;">${formatearPrecio(barrio.precioMedio)}/mes</strong>
                </div>
                <table style="width: 100%; font-size: 0.9rem;">
                    <tr>
                        <td style="padding: 4px 0; color: #64748b;">Precio/m²:</td>
                        <td style="padding: 4px 0; text-align: right; font-weight: 600;">
                            ${barrio.precioM2.toFixed(2)} €/m²
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
                            ${barrio.subzona || barrio.zona}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0; color: #64748b;">Fuente:</td>
                        <td style="padding: 4px 0; text-align: right; font-style: italic;">
                            ${barrio.fuente}
                        </td>
                    </tr>
                </table>
            </div>
        `;
        
        marcador.bindPopup(popupContent);
        marcador.addTo(mapaLeaflet);
        marcadores.push(marcador);
        
        // Efecto hover
        marcador.on('mouseover', function() {
            this.setStyle({ radius: 14, fillOpacity: 1 });
        });
        marcador.on('mouseout', function() {
            this.setStyle({ radius: 10, fillOpacity: 0.8 });
        });
    });
}

// ============================================================================
// SISTEMA DE FILTROS
// ============================================================================

function aplicarFiltros() {
    const precioMax = parseInt(document.getElementById('filtro-precio').value);
    const zonaSeleccionada = document.getElementById('filtro-zona').value;
    const ordenSeleccionado = document.getElementById('orden').value;
    
    // Filtrar por precio
    datosFiltrados = barriosMadrid.filter(barrio => barrio.precioMedio <= precioMax);
    
    // Filtrar por zona
    if (zonaSeleccionada !== 'todas') {
        datosFiltrados = datosFiltrados.filter(barrio => {
            if (zonaSeleccionada === 'Capital' || zonaSeleccionada === 'Periferia') {
                return barrio.zona === zonaSeleccionada;
            } else {
                return barrio.subzona === zonaSeleccionada;
            }
        });
    }
    
    // Ordenar
    switch (ordenSeleccionado) {
        case 'precio-asc':
            datosFiltrados.sort((a, b) => a.precioMedio - b.precioMedio);
            break;
        case 'precio-desc':
            datosFiltrados.sort((a, b) => b.precioMedio - a.precioMedio);
            break;
        case 'alfabetico':
            datosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'm2-asc':
            datosFiltrados.sort((a, b) => a.precioM2 - b.precioM2);
            break;
        case 'm2-desc':
            datosFiltrados.sort((a, b) => b.precioM2 - a.precioM2);
            break;
    }
    
    // Actualizar vista
    actualizarMarcadores(datosFiltrados);
    inicializarEstadisticasRapidas();
    renderizarLista();
    actualizarGraficos();
}

function resetearFiltros() {
    document.getElementById('filtro-precio').value = 2600;
    document.getElementById('precio-valor').textContent = '2600€';
    document.getElementById('filtro-zona').value = 'todas';
    document.getElementById('orden').value = 'precio-asc';
    
    aplicarFiltros();
}

// ============================================================================
// ESTADÍSTICAS RÁPIDAS
// ============================================================================

function inicializarEstadisticasRapidas() {
    const stats = calcularEstadisticasBasicas(datosFiltrados);
    const preciosM2 = datosFiltrados.map(d => d.precioM2);
    const mediaM2 = preciosM2.reduce((s, p) => s + p, 0) / preciosM2.length;
    
    document.getElementById('total-ubicaciones').textContent = datosFiltrados.length;
    document.getElementById('precio-medio').textContent = formatearPrecio(stats.media);
    document.getElementById('precio-minimo').textContent = formatearPrecio(stats.minimo);
    document.getElementById('precio-maximo').textContent = formatearPrecio(stats.maximo);
    document.getElementById('preciom2-medio').textContent = mediaM2.toFixed(2) + ' €/m²';
}

// ============================================================================
// VISTA LISTA DE BARRIOS
// ============================================================================

function renderizarLista() {
    const contenedor = document.getElementById('lista-barrios');
    contenedor.innerHTML = '';
    
    if (datosFiltrados.length === 0) {
        contenedor.innerHTML = `
            <div class="info-box" style="grid-column: 1 / -1;">
                <p>❌ No se encontraron resultados con los filtros aplicados.</p>
            </div>
        `;
        return;
    }
    
    datosFiltrados.forEach(barrio => {
        const card = document.createElement('div');
        card.className = 'barrio-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                <h4>${barrio.nombre}</h4>
                <span class="zona-badge">${barrio.subzona || barrio.zona}</span>
            </div>
            
            <div class="precio">${formatearPrecio(barrio.precioMedio)}/mes</div>
            
            <div class="detalles">
                <div class="detalle-item">
                    <strong>€/m²:</strong> ${barrio.precioM2.toFixed(2)} €
                </div>
                <div class="detalle-item">
                    <strong>Tamaño:</strong> ${barrio.metrosCuadrados} m²
                </div>
                <div class="detalle-item">
                    <strong>Fuente:</strong> ${barrio.fuente}
                </div>
                <div class="detalle-item">
                    <strong>Actualizado:</strong> ${barrio.fechaActualizacion}
                </div>
            </div>
            
            <div class="ventajas">
                <h5>✅ Ventajas:</h5>
                <ul>
                    ${barrio.ventajas.slice(0, 3).map(v => `<li>${v}</li>`).join('')}
                </ul>
            </div>
            
            <div class="desventajas">
                <h5>⚠️ Desventajas:</h5>
                <ul>
                    ${barrio.desventajas.slice(0, 3).map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// ============================================================================
// GRÁFICOS CON CHART.JS
// ============================================================================

function inicializarGraficos() {
    crearGraficoCaros();
    crearGraficoBaratos();
    crearGraficoZonas();
    crearGraficoHistograma();
}

function actualizarGraficos() {
    Object.values(graficos).forEach(grafico => grafico.destroy());
    graficos = {};
    inicializarGraficos();
}

function crearGraficoCaros() {
    const ctx = document.getElementById('grafico-caros').getContext('2d');
    const datos = [...datosFiltrados]
        .sort((a, b) => b.precioMedio - a.precioMedio)
        .slice(0, 10);
    
    graficos.caros = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.map(d => d.nombre),
            datasets: [{
                label: 'Precio medio (€/mes)',
                data: datos.map(d => d.precioMedio),
                backgroundColor: '#ef4444',
                borderColor: '#dc2626',
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
                        label: (context) => formatearPrecio(context.parsed.y) + '/mes'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => formatearNumero(value) + '€'
                    }
                }
            }
        }
    });
}

function crearGraficoBaratos() {
    const ctx = document.getElementById('grafico-baratos').getContext('2d');
    const datos = [...datosFiltrados]
        .sort((a, b) => a.precioMedio - b.precioMedio)
        .slice(0, 10);
    
    graficos.baratos = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datos.map(d => d.nombre),
            datasets: [{
                label: 'Precio medio (€/mes)',
                data: datos.map(d => d.precioMedio),
                backgroundColor: '#22c55e',
                borderColor: '#16a34a',
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
                        label: (context) => formatearPrecio(context.parsed.y) + '/mes'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => formatearNumero(value) + '€'
                    }
                }
            }
        }
    });
}

function crearGraficoZonas() {
    const ctx = document.getElementById('grafico-zonas').getContext('2d');
    const analisisZonas = analizarPorZona(datosFiltrados);
    
    const labels = Object.keys(analisisZonas);
    const datos = labels.map(zona => analisisZonas[zona].precioMedio);
    
    graficos.zonas = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Precio medio (€/mes)',
                data: datos,
                backgroundColor: '#3b82f6',
                borderColor: '#2563eb',
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
                        label: (context) => formatearPrecio(context.parsed.y) + '/mes'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => formatearNumero(value) + '€'
                    }
                }
            }
        }
    });
}

function crearGraficoHistograma() {
    const ctx = document.getElementById('grafico-histograma').getContext('2d');
    const distribucion = calcularDistribucionFrecuencias(datosFiltrados);
    
    graficos.histograma = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: distribucion.map(d => 
                `${formatearNumero(d.limiteInferior)} - ${formatearNumero(d.limiteSuperior)}€`
            ),
            datasets: [{
                label: 'Frecuencia',
                data: distribucion.map(d => d.frecuencia),
                backgroundColor: '#8b5cf6',
                borderColor: '#7c3aed',
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
                        label: (context) => `${context.parsed.y} barrios`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// ============================================================================
// ANÁLISIS ESTADÍSTICO COMPLETO
// ============================================================================

function mostrarAnalisisEstadistico() {
    const resumen = generarResumenCompleto(datosFiltrados);
    
    // Estadísticas básicas
    mostrarEstadisticasBasicas(resumen.basicas);
    
    // Dispersión
    mostrarDispersion(resumen.dispersion);
    
    // Percentiles
    mostrarPercentiles(resumen.percentiles);
    
    // Outliers
    mostrarOutliers(resumen.outliers);
    
    // Por zona
    mostrarAnalisisZonas(resumen.porZona);
    
    // Comparativa
    mostrarComparativa(resumen.comparativa);
    
    // Oportunidades
    mostrarOportunidades(resumen.oportunidades);
}

function mostrarEstadisticasBasicas(stats) {
    const contenedor = document.getElementById('stats-basicas');
    contenedor.innerHTML = `
        <div class="stat-card">
            <span class="stat-card-label">📊 N (Muestra)</span>
            <div class="stat-card-value">${stats.n}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📊 Media Aritmética</span>
            <div class="stat-card-value">${formatearPrecio(stats.media)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📊 Mediana (Q2)</span>
            <div class="stat-card-value">${formatearPrecio(stats.mediana)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📊 Moda</span>
            <div class="stat-card-value" style="font-size: 1.2rem;">${stats.moda}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📊 Mínimo</span>
            <div class="stat-card-value">${formatearPrecio(stats.minimo)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📊 Máximo</span>
            <div class="stat-card-value">${formatearPrecio(stats.maximo)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📊 Rango</span>
            <div class="stat-card-value">${formatearPrecio(stats.rango)}</div>
        </div>
    `;
}

function mostrarDispersion(stats) {
    const contenedor = document.getElementById('stats-dispersion');
    contenedor.innerHTML = `
        <div class="stat-card">
            <span class="stat-card-label">📏 Varianza</span>
            <div class="stat-card-value">${formatearNumero(stats.varianza)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📏 Desviación Estándar</span>
            <div class="stat-card-value">${formatearPrecio(stats.desviacionEstandar)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📏 Coef. Variación</span>
            <div class="stat-card-value">${stats.coeficienteVariacion}%</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📏 Error Estándar</span>
            <div class="stat-card-value">${formatearPrecio(stats.errorEstandar)}</div>
        </div>
    `;
}

function mostrarPercentiles(stats) {
    const contenedor = document.getElementById('stats-percentiles');
    contenedor.innerHTML = `
        <div class="stat-card">
            <span class="stat-card-label">📐 P10</span>
            <div class="stat-card-value">${formatearPrecio(stats.P10)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📐 Q1 (25%)</span>
            <div class="stat-card-value">${formatearPrecio(stats.Q1)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📐 Q2 (50% - Mediana)</span>
            <div class="stat-card-value">${formatearPrecio(stats.Q2)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📐 Q3 (75%)</span>
            <div class="stat-card-value">${formatearPrecio(stats.Q3)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📐 P90</span>
            <div class="stat-card-value">${formatearPrecio(stats.P90)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📐 P95</span>
            <div class="stat-card-value">${formatearPrecio(stats.P95)}</div>
        </div>
        <div class="stat-card">
            <span class="stat-card-label">📐 IQR (Rango Intercuartílico)</span>
            <div class="stat-card-value">${formatearPrecio(stats.IQR)}</div>
        </div>
    `;
}

function mostrarOutliers(stats) {
    const contenedor = document.getElementById('stats-outliers');
    
    let html = `
        <div class="outliers-list">
            <p><strong>Límites de detección:</strong></p>
            <p>Límite inferior: ${formatearPrecio(stats.limiteInferior)}</p>
            <p>Límite superior: ${formatearPrecio(stats.limiteSuperior)}</p>
            <p><strong>Total outliers detectados: ${stats.totalOutliers}</strong></p>
    `;
    
    if (stats.outliersSuperiores.length > 0) {
        html += `<h4 style="margin-top: 15px; color: #ef4444;">Outliers Superiores (Muy caros):</h4>`;
        stats.outliersSuperiores.forEach(o => {
            html += `<div class="outlier-item">${o.nombre}: ${formatearPrecio(o.precio)}</div>`;
        });
    }
    
    if (stats.outliersInferiores.length > 0) {
        html += `<h4 style="margin-top: 15px; color: #22c55e;">Outliers Inferiores (Muy baratos):</h4>`;
        stats.outliersInferiores.forEach(o => {
            html += `<div class="outlier-item">${o.nombre}: ${formatearPrecio(o.precio)}</div>`;
        });
    }
    
    if (stats.totalOutliers === 0) {
        html += `<p style="color: #22c55e; margin-top: 10px;">✅ No se detectaron valores atípicos</p>`;
    }
    
    html += `</div>`;
    contenedor.innerHTML = html;
}

function mostrarAnalisisZonas(zonas) {
    const contenedor = document.getElementById('stats-zonas');
    
    let html = '<div class="zona-list">';
    Object.keys(zonas).forEach(zona => {
        const datos = zonas[zona];
        html += `
            <div class="zona-item">
                <h4 style="color: #3b82f6; margin-bottom: 8px;">${zona}</h4>
                <p><strong>Barrios:</strong> ${datos.numBarrios}</p>
                <p><strong>Precio medio:</strong> ${formatearPrecio(datos.precioMedio)}</p>
                <p><strong>Rango:</strong> ${formatearPrecio(datos.precioMinimo)} - ${formatearPrecio(datos.precioMaximo)}</p>
            </div>
        `;
    });
    html += '</div>';
    contenedor.innerHTML = html;
}

function mostrarComparativa(comp) {
    const contenedor = document.getElementById('stats-comparativa');
    contenedor.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card" style="border-left-color: #ef4444;">
                <span class="stat-card-label">🏛️ Madrid Capital</span>
                <div class="stat-card-value">${formatearPrecio(comp.capital.precioMedio)}</div>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">
                    ${comp.capital.numBarrios} barrios analizados
                </p>
            </div>
            <div class="stat-card" style="border-left-color: #22c55e;">
                <span class="stat-card-label">🌳 Área Metropolitana</span>
                <div class="stat-card-value">${formatearPrecio(comp.periferia.precioMedio)}</div>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">
                    ${comp.periferia.numBarrios} municipios analizados
                </p>
            </div>
            <div class="stat-card" style="border-left-color: #8b5cf6;">
                <span class="stat-card-label">📊 Diferencia Absoluta</span>
                <div class="stat-card-value">${formatearPrecio(comp.diferencia.absoluta)}</div>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">
                    Capital más caro que periferia
                </p>
            </div>
            <div class="stat-card" style="border-left-color: #f97316;">
                <span class="stat-card-label">📊 Diferencia Porcentual</span>
                <div class="stat-card-value">${comp.diferencia.porcentual.toFixed(2)}%</div>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">
                    Más caro en capital vs periferia
                </p>
            </div>
        </div>
    `;
}

function mostrarOportunidades(oportunidades) {
    const contenedor = document.getElementById('stats-oportunidades');
    
    let html = '<div class="oportunidades-list">';
    oportunidades.forEach((op, index) => {
        const color = index < 3 ? '#22c55e' : index < 7 ? '#3b82f6' : '#f97316';
        html += `
            <div class="oportunidad-item">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong style="color: ${color};">${index + 1}. ${op.nombre}</strong>
                    <span style="background: ${color}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 0.85rem;">
                        Índice: ${op.indice}
                    </span>
                </div>
                <p style="margin-top: 4px; font-size: 0.9rem; color: #64748b;">
                    ${op.categoria}
                </p>
            </div>
        `;
    });
    html += '</div>';
    contenedor.innerHTML = html;
}

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

function formatearPrecio(precio) {
    return formatearNumero(precio) + ' €';
}

function formatearNumero(numero) {
    return numero.toLocaleString('es-ES', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// ============================================================================
// CONSOLE LOG INFORMATIVO
// ============================================================================

console.log(`
🏠 MAPA DE ALQUILERES MADRID 2025
================================
📊 Datos cargados: ${barriosMadrid.length} ubicaciones
📍 Madrid Capital: ${barriosMadrid.filter(b => b.zona === 'Capital').length} barrios
🌳 Área Metropolitana: ${barriosMadrid.filter(b => b.zona === 'Periferia').length} municipios
📅 Última actualización: Agosto 2025
🔗 Proyecto Data Science - Universidad
`);