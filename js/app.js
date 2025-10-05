// ===== VARIABLES GLOBALES =====
let mapa;
let marcadores = [];
let graficoPrecios;
let graficoM2;
let barriosFiltrados = barriosMadrid;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Aplicación iniciada');
    
    inicializarMapa();
    actualizarEstadisticas();
    actualizarFechaActualizacion();
    configurarEventos();
    
    // Mostrar vista de mapa por defecto
    cambiarVista('mapa');
});

// ===== CONFIGURAR EVENTOS =====
function configurarEventos() {
    // Actualizar el valor mostrado del slider de precio
    const sliderPrecio = document.getElementById('precio-max');
    const valorPrecio = document.getElementById('precio-valor');
    
    sliderPrecio.addEventListener('input', function() {
        valorPrecio.textContent = this.value;
    });
}

// ===== INICIALIZAR MAPA =====
function inicializarMapa() {
    console.log('🗺️ Inicializando mapa...');
    
    // Crear el mapa centrado en Madrid
    mapa = L.map('mapa').setView([40.4168, -3.7038], 11);
    
    // Añadir capa de mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(mapa);
    
    // Añadir marcadores de barrios
    agregarMarcadores(barriosMadrid);
    
    console.log('✅ Mapa inicializado');
}

// ===== AGREGAR MARCADORES AL MAPA =====
function agregarMarcadores(barrios) {
    // Limpiar marcadores anteriores
    marcadores.forEach(m => mapa.removeLayer(m));
    marcadores = [];
    
    barrios.forEach(barrio => {
        // Determinar color según precio
        const color = obtenerColorPorPrecio(barrio.precioMedio);
        
        // Crear marcador circular
        const marcador = L.circleMarker([barrio.lat, barrio.lng], {
            radius: 12,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(mapa);
        
        // Crear popup con información
        const contenidoPopup = `
            <div style="font-family: Arial; min-width: 200px;">
                <h3 style="margin: 0 0 10px 0; color: #1e293b; border-bottom: 2px solid ${color}; padding-bottom: 5px;">
                    ${barrio.nombre}
                </h3>
                <p style="margin: 5px 0; color: #64748b; font-size: 0.9em;">
                    ${barrio.descripcion}
                </p>
                <div style="margin-top: 10px;">
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span style="font-weight: bold;">Precio medio:</span>
                        <span style="color: ${color}; font-weight: bold;">${barrio.precioMedio}€</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span style="font-weight: bold;">Precio/m²:</span>
                        <span>${barrio.precioM2}€/m²</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span style="font-weight: bold;">m² típicos:</span>
                        <span>${barrio.metrosCuadrados}m²</span>
                    </div>
                </div>
                <button onclick="verDetallesBarrio(${barrio.id})" 
                        style="width: 100%; margin-top: 10px; padding: 8px; background: ${color}; 
                               color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                    Ver más detalles
                </button>
            </div>
        `;
        
        marcador.bindPopup(contenidoPopup);
        marcadores.push(marcador);
    });
}

// ===== OBTENER COLOR SEGÚN PRECIO =====
function obtenerColorPorPrecio(precio) {
    if (precio < 900) return '#22c55e';      // Verde
    if (precio < 1100) return '#84cc16';     // Verde lima
    if (precio < 1300) return '#eab308';     // Amarillo
    if (precio < 1500) return '#f97316';     // Naranja
    return '#ef4444';                         // Rojo
}

// ===== CAMBIAR ENTRE VISTAS =====
function cambiarVista(nombreVista) {
    console.log('🔄 Cambiando a vista:', nombreVista);
    
    // Ocultar todas las vistas
    document.querySelectorAll('.vista').forEach(vista => {
        vista.classList.remove('activa');
    });
    
    // Desactivar todas las pestañas
    document.querySelectorAll('.pestana').forEach(pestana => {
        pestana.classList.remove('activa');
    });
    
    // Activar vista seleccionada
    document.getElementById('vista-' + nombreVista).classList.add('activa');
    
    // Activar pestaña correspondiente
    const pestanas = document.querySelectorAll('.pestana');
    if (nombreVista === 'mapa') pestanas[0].classList.add('activa');
    if (nombreVista === 'lista') pestanas[1].classList.add('activa');
    if (nombreVista === 'graficos') pestanas[2].classList.add('activa');
    
    // Acciones específicas por vista
    if (nombreVista === 'mapa') {
        // Forzar redibujado del mapa
        setTimeout(() => mapa.invalidateSize(), 100);
    }
    
    if (nombreVista === 'lista') {
        mostrarListaBarrios(barriosFiltrados);
    }
    
    if (nombreVista === 'graficos') {
        crearGraficos();
    }
}

// ===== MOSTRAR LISTA DE BARRIOS =====
function mostrarListaBarrios(barrios) {
    const contenedor = document.getElementById('lista-barrios');
    contenedor.innerHTML = '';
    
    if (barrios.length === 0) {
        contenedor.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">No se encontraron barrios con estos filtros.</p>';
        return;
    }
    
    barrios.forEach(barrio => {
        const color = obtenerColorPorPrecio(barrio.precioMedio);
        
        const card = document.createElement('div');
        card.className = 'barrio-card';
        card.style.borderLeftColor = color;
        card.innerHTML = `
            <h3>${barrio.nombre}</h3>
            <p style="color: #64748b; margin-bottom: 0.5rem;">${barrio.descripcion}</p>
            
            <div class="barrio-info">
                <div class="info-item">
                    <span class="info-label">Precio medio</span>
                    <span class="info-value" style="color: ${color}">${barrio.precioMedio}€</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Precio/m²</span>
                    <span class="info-value">${barrio.precioM2}€</span>
                </div>
                <div class="info-item">
                    <span class="info-label">m² típicos</span>
                    <span class="info-value">${barrio.metrosCuadrados}m²</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Coste total estimado</span>
                    <span class="info-value">${Math.round(barrio.metrosCuadrados * barrio.precioM2)}€</span>
                </div>
            </div>
            
            <div style="margin-top: 1rem;">
                <strong style="color: #22c55e;">✓ Ventajas:</strong>
                <ul style="margin: 0.5rem 0; padding-left: 1.5rem; color: #64748b;">
                    ${barrio.ventajas.map(v => `<li>${v}</li>`).join('')}
                </ul>
                
                <strong style="color: #ef4444;">✗ Desventajas:</strong>
                <ul style="margin: 0.5rem 0; padding-left: 1.5rem; color: #64748b;">
                    ${barrio.desventajas.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        `;
        
        card.onclick = () => verDetallesBarrio(barrio.id);
        contenedor.appendChild(card);
    });
}

// ===== CREAR GRÁFICOS =====
function crearGraficos() {
    const barrios = barriosFiltrados.sort((a, b) => b.precioMedio - a.precioMedio);
    
    // Destruir gráficos anteriores si existen
    if (graficoPrecios) graficoPrecios.destroy();
    if (graficoM2) graficoM2.destroy();
    
    // Gráfico de precios medios
    const ctxPrecios = document.getElementById('grafico-precios').getContext('2d');
    graficoPrecios = new Chart(ctxPrecios, {
        type: 'bar',
        data: {
            labels: barrios.map(b => b.nombre),
            datasets: [{
                label: 'Precio Medio (€)',
                data: barrios.map(b => b.precioMedio),
                backgroundColor: barrios.map(b => obtenerColorPorPrecio(b.precioMedio)),
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Precio Medio de Alquiler por Barrio'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Euros (€)'
                    }
                }
            }
        }
    });
    
    // Gráfico de precio por m²
    const ctxM2 = document.getElementById('grafico-m2').getContext('2d');
    const barriosM2 = [...barriosFiltrados].sort((a, b) => b.precioM2 - a.precioM2);
    
    graficoM2 = new Chart(ctxM2, {
        type: 'bar',
        data: {
            labels: barriosM2.map(b => b.nombre),
            datasets: [{
                label: 'Precio por m² (€/m²)',
                data: barriosM2.map(b => b.precioM2),
                backgroundColor: '#3b82f6',
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Precio por Metro Cuadrado'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Euros por m² (€/m²)'
                    }
                }
            }
        }
    });
}

// ===== APLICAR FILTROS =====
function aplicarFiltros() {
    console.log('🔍 Aplicando filtros...');
    
    const precioMax = parseInt(document.getElementById('precio-max').value);
    const ordenamiento = document.getElementById('ordenar').value;
    
    // Filtrar por precio
    let barrios = filtrarPorPrecio(precioMax);
    
    // Ordenar
    barrios = ordenarBarrios(ordenamiento);
    
    // Actualizar variable global
    barriosFiltrados = barrios;
    
    // Actualizar mapa
    agregarMarcadores(barrios);
    
    // Actualizar estadísticas
    actualizarEstadisticas();
    
    // Si estamos en vista lista, actualizarla
    if (document.getElementById('vista-lista').classList.contains('activa')) {
        mostrarListaBarrios(barrios);
    }
    
    // Si estamos en vista gráficos, actualizarlos
    if (document.getElementById('vista-graficos').classList.contains('activa')) {
        crearGraficos();
    }
    
    console.log(`✅ Filtros aplicados: ${barrios.length} barrios encontrados`);
}

// ===== ACTUALIZAR ESTADÍSTICAS =====
function actualizarEstadisticas() {
    const stats = calcularEstadisticas();
    
    document.getElementById('total-barrios').textContent = barriosFiltrados.length;
    document.getElementById('precio-medio').textContent = stats.precioMedio + '€';
    document.getElementById('mas-barato').textContent = stats.barrioMasBarato.nombre + ' (' + stats.precioMin + '€)';
    document.getElementById('mas-caro').textContent = stats.barrioMasCaro.nombre + ' (' + stats.precioMax + '€)';
}

// ===== VER DETALLES DE BARRIO =====
function verDetallesBarrio(id) {
    const barrio = obtenerBarrioPorId(id);
    
    alert(`
📍 ${barrio.nombre}
    
${barrio.descripcion}

💰 Precio medio: ${barrio.precioMedio}€/mes
📏 Precio por m²: ${barrio.precioM2}€/m²
🏠 Metros cuadrados típicos: ${barrio.metrosCuadrados}m²

✅ Ventajas:
${barrio.ventajas.map(v => '  • ' + v).join('\n')}

❌ Desventajas:
${barrio.desventajas.map(d => '  • ' + d).join('\n')}
    `);
}

// ===== ACTUALIZAR FECHA =====
function actualizarFechaActualizacion() {
    const fecha = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('fecha-actualizacion').textContent = fecha;
}

console.log('✅ Aplicación cargada y lista');