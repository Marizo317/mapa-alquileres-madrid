// ============================================================================
// MÓDULO DE ANÁLISIS ESTADÍSTICO AVANZADO
// ============================================================================
// Funciones para análisis descriptivo, inferencial y exploratorio de datos
// Aplicado al mercado inmobiliario de Madrid 2025
// ============================================================================

/**
 * Calcula estadísticas descriptivas básicas
 */
function calcularEstadisticasBasicas(datos) {
    const valores = datos.map(d => d.precioMedio).sort((a, b) => a - b);
    const n = valores.length;
    
    // Media aritmética
    const media = valores.reduce((sum, val) => sum + val, 0) / n;
    
    // Mediana (Q2)
    const mediana = n % 2 === 0
        ? (valores[n / 2 - 1] + valores[n / 2]) / 2
        : valores[Math.floor(n / 2)];
    
    // Moda (valor más frecuente)
    const frecuencias = {};
    valores.forEach(val => {
        frecuencias[val] = (frecuencias[val] || 0) + 1;
    });
    const maxFrecuencia = Math.max(...Object.values(frecuencias));
    const modas = Object.keys(frecuencias)
        .filter(key => frecuencias[key] === maxFrecuencia)
        .map(Number);
    
    // Rango
    const minimo = Math.min(...valores);
    const maximo = Math.max(...valores);
    const rango = maximo - minimo;
    
    return {
        n,
        media: parseFloat(media.toFixed(2)),
        mediana: parseFloat(mediana.toFixed(2)),
        moda: modas.length === valores.length ? 'Sin moda' : modas.join(', '),
        minimo,
        maximo,
        rango
    };
}

/**
 * Calcula medidas de dispersión
 */
function calcularDispersion(datos) {
    const valores = datos.map(d => d.precioMedio);
    const n = valores.length;
    const media = valores.reduce((sum, val) => sum + val, 0) / n;
    
    // Varianza
    const varianza = valores.reduce((sum, val) => {
        return sum + Math.pow(val - media, 2);
    }, 0) / n;
    
    // Desviación estándar
    const desviacionEstandar = Math.sqrt(varianza);
    
    // Coeficiente de variación (CV)
    const coeficienteVariacion = (desviacionEstandar / media) * 100;
    
    // Error estándar de la media
    const errorEstandar = desviacionEstandar / Math.sqrt(n);
    
    return {
        varianza: parseFloat(varianza.toFixed(2)),
        desviacionEstandar: parseFloat(desviacionEstandar.toFixed(2)),
        coeficienteVariacion: parseFloat(coeficienteVariacion.toFixed(2)),
        errorEstandar: parseFloat(errorEstandar.toFixed(2))
    };
}

/**
 * Calcula percentiles y cuartiles
 */
function calcularPercentiles(datos) {
    const valores = datos.map(d => d.precioMedio).sort((a, b) => a - b);
    const n = valores.length;
    
    function percentil(p) {
        const index = (p / 100) * (n - 1);
        const lower = Math.floor(index);
        const upper = Math.ceil(index);
        const weight = index - lower;
        
        return valores[lower] * (1 - weight) + valores[upper] * weight;
    }
    
    const Q1 = percentil(25);
    const Q2 = percentil(50); // Mediana
    const Q3 = percentil(75);
    const IQR = Q3 - Q1; // Rango intercuartílico
    
    // Percentiles adicionales
    const P10 = percentil(10);
    const P90 = percentil(90);
    const P95 = percentil(95);
    
    return {
        Q1: parseFloat(Q1.toFixed(2)),
        Q2: parseFloat(Q2.toFixed(2)),
        Q3: parseFloat(Q3.toFixed(2)),
        IQR: parseFloat(IQR.toFixed(2)),
        P10: parseFloat(P10.toFixed(2)),
        P90: parseFloat(P90.toFixed(2)),
        P95: parseFloat(P95.toFixed(2))
    };
}

/**
 * Detecta valores atípicos (outliers) usando el método IQR
 */
function detectarOutliers(datos) {
    const valores = datos.map(d => ({ 
        nombre: d.nombre, 
        precio: d.precioMedio 
    }));
    
    const percentiles = calcularPercentiles(datos);
    const limiteInferior = percentiles.Q1 - 1.5 * percentiles.IQR;
    const limiteSuperior = percentiles.Q3 + 1.5 * percentiles.IQR;
    
    const outliersInferiores = valores.filter(v => v.precio < limiteInferior);
    const outliersSuperiores = valores.filter(v => v.precio > limiteSuperior);
    
    return {
        limiteInferior: parseFloat(limiteInferior.toFixed(2)),
        limiteSuperior: parseFloat(limiteSuperior.toFixed(2)),
        outliersInferiores,
        outliersSuperiores,
        totalOutliers: outliersInferiores.length + outliersSuperiores.length
    };
}

/**
 * Calcula la distribución de frecuencias
 */
function calcularDistribucionFrecuencias(datos, numIntervalos = 6) {
    const valores = datos.map(d => d.precioMedio).sort((a, b) => a - b);
    const minimo = Math.min(...valores);
    const maximo = Math.max(...valores);
    const amplitud = (maximo - minimo) / numIntervalos;
    
    const intervalos = [];
    for (let i = 0; i < numIntervalos; i++) {
        const limiteInf = minimo + i * amplitud;
        const limiteSup = minimo + (i + 1) * amplitud;
        
        const frecuencia = valores.filter(v => 
            v >= limiteInf && (i === numIntervalos - 1 ? v <= limiteSup : v < limiteSup)
        ).length;
        
        const frecuenciaRelativa = (frecuencia / valores.length) * 100;
        
        intervalos.push({
            limiteInferior: parseFloat(limiteInf.toFixed(0)),
            limiteSuperior: parseFloat(limiteSup.toFixed(0)),
            frecuencia,
            frecuenciaRelativa: parseFloat(frecuenciaRelativa.toFixed(2)),
            marcaClase: parseFloat(((limiteInf + limiteSup) / 2).toFixed(0))
        });
    }
    
    return intervalos;
}

/**
 * Calcula correlación de Pearson entre dos variables
 */
function calcularCorrelacion(datos, var1, var2) {
    const n = datos.length;
    
    const x = datos.map(d => d[var1]);
    const y = datos.map(d => d[var2]);
    
    const mediaX = x.reduce((sum, val) => sum + val, 0) / n;
    const mediaY = y.reduce((sum, val) => sum + val, 0) / n;
    
    let numerador = 0;
    let denominadorX = 0;
    let denominadorY = 0;
    
    for (let i = 0; i < n; i++) {
        const dx = x[i] - mediaX;
        const dy = y[i] - mediaY;
        
        numerador += dx * dy;
        denominadorX += dx * dx;
        denominadorY += dy * dy;
    }
    
    const correlacion = numerador / Math.sqrt(denominadorX * denominadorY);
    
    return {
        valor: parseFloat(correlacion.toFixed(4)),
        interpretacion: interpretarCorrelacion(correlacion),
        fuerza: clasificarFuerzaCorrelacion(correlacion)
    };
}

/**
 * Interpreta el valor de correlación
 */
function interpretarCorrelacion(r) {
    const absR = Math.abs(r);
    const direccion = r > 0 ? 'positiva' : 'negativa';
    
    if (absR < 0.3) return `Correlación ${direccion} débil`;
    if (absR < 0.7) return `Correlación ${direccion} moderada`;
    return `Correlación ${direccion} fuerte`;
}

/**
 * Clasifica la fuerza de la correlación
 */
function clasificarFuerzaCorrelacion(r) {
    const absR = Math.abs(r);
    
    if (absR < 0.3) return 'débil';
    if (absR < 0.5) return 'moderada';
    if (absR < 0.7) return 'considerable';
    if (absR < 0.9) return 'fuerte';
    return 'muy fuerte';
}

/**
 * Análisis por zonas geográficas
 */
function analizarPorZona(datos) {
    const zonas = {};
    
    datos.forEach(d => {
        const zona = d.subzona || d.zona;
        if (!zonas[zona]) {
            zonas[zona] = {
                barrios: [],
                precios: []
            };
        }
        zonas[zona].barrios.push(d.nombre);
        zonas[zona].precios.push(d.precioMedio);
    });
    
    const resultados = {};
    
    Object.keys(zonas).forEach(zona => {
        const precios = zonas[zona].precios;
        const n = precios.length;
        const media = precios.reduce((sum, p) => sum + p, 0) / n;
        
        resultados[zona] = {
            numBarrios: n,
            barrios: zonas[zona].barrios,
            precioMedio: parseFloat(media.toFixed(2)),
            precioMinimo: Math.min(...precios),
            precioMaximo: Math.max(...precios)
        };
    });
    
    return resultados;
}

/**
 * Análisis de precio por metro cuadrado
 */
function analizarPrecioM2(datos) {
    const preciosM2 = datos.map(d => d.precioM2).sort((a, b) => a - b);
    const n = preciosM2.length;
    
    const media = preciosM2.reduce((sum, val) => sum + val, 0) / n;
    const mediana = n % 2 === 0
        ? (preciosM2[n / 2 - 1] + preciosM2[n / 2]) / 2
        : preciosM2[Math.floor(n / 2)];
    
    // Top 5 más caros y más baratos por m²
    const ordenados = datos
        .map(d => ({ nombre: d.nombre, precioM2: d.precioM2 }))
        .sort((a, b) => b.precioM2 - a.precioM2);
    
    return {
        mediaM2: parseFloat(media.toFixed(2)),
        medianaM2: parseFloat(mediana.toFixed(2)),
        minimoM2: Math.min(...preciosM2),
        maximoM2: Math.max(...preciosM2),
        top5Caros: ordenados.slice(0, 5),
        top5Baratos: ordenados.slice(-5).reverse()
    };
}

/**
 * Calcula índice de oportunidad (relación calidad-precio)
 */
function calcularIndiceOportunidad(datos) {
    // Normalizar precios (0-100, donde 0 es más caro)
    const precios = datos.map(d => d.precioMedio);
    const minPrecio = Math.min(...precios);
    const maxPrecio = Math.max(...precios);
    
    return datos.map(d => {
        const precioNormalizado = 100 - ((d.precioMedio - minPrecio) / (maxPrecio - minPrecio)) * 100;
        
        // Bonus por zona (Capital = -10, Periferia = +10)
        const bonusZona = d.zona === 'Capital' ? -10 : 10;
        
        // Índice final (0-100)
        const indice = Math.max(0, Math.min(100, precioNormalizado + bonusZona));
        
        return {
            nombre: d.nombre,
            indice: parseFloat(indice.toFixed(2)),
            categoria: categorizarOportunidad(indice)
        };
    }).sort((a, b) => b.indice - a.indice);
}

/**
 * Categoriza el índice de oportunidad
 */
function categorizarOportunidad(indice) {
    if (indice >= 80) return 'Excelente oportunidad';
    if (indice >= 60) return 'Buena oportunidad';
    if (indice >= 40) return 'Oportunidad moderada';
    if (indice >= 20) return 'Oportunidad limitada';
    return 'Baja oportunidad';
}

/**
 * Análisis comparativo Capital vs Periferia
 */
function compararCapitalPeriferia(datos) {
    const capital = datos.filter(d => d.zona === 'Capital');
    const periferia = datos.filter(d => d.zona === 'Periferia');
    
    const preciosCapital = capital.map(d => d.precioMedio);
    const preciosPeriferia = periferia.map(d => d.precioMedio);
    
    const mediaCapital = preciosCapital.reduce((s, p) => s + p, 0) / preciosCapital.length;
    const mediaPeriferia = preciosPeriferia.reduce((s, p) => s + p, 0) / preciosPeriferia.length;
    
    const diferencia = mediaCapital - mediaPeriferia;
    const porcentajeDiferencia = ((diferencia / mediaPeriferia) * 100);
    
    return {
        capital: {
            numBarrios: capital.length,
            precioMedio: parseFloat(mediaCapital.toFixed(2)),
            precioMinimo: Math.min(...preciosCapital),
            precioMaximo: Math.max(...preciosCapital)
        },
        periferia: {
            numBarrios: periferia.length,
            precioMedio: parseFloat(mediaPeriferia.toFixed(2)),
            precioMinimo: Math.min(...preciosPeriferia),
            precioMaximo: Math.max(...preciosPeriferia)
        },
        diferencia: {
            absoluta: parseFloat(diferencia.toFixed(2)),
            porcentual: parseFloat(porcentajeDiferencia.toFixed(2))
        }
    };
}

/**
 * Genera resumen estadístico completo
 */
function generarResumenCompleto(datos) {
    return {
        basicas: calcularEstadisticasBasicas(datos),
        dispersion: calcularDispersion(datos),
        percentiles: calcularPercentiles(datos),
        outliers: detectarOutliers(datos),
        distribucion: calcularDistribucionFrecuencias(datos),
        precioM2: analizarPrecioM2(datos),
        porZona: analizarPorZona(datos),
        comparativa: compararCapitalPeriferia(datos),
        oportunidades: calcularIndiceOportunidad(datos).slice(0, 10)
    };
}

/**
 * Formatea número con separadores de miles
 */
function formatearNumero(numero) {
    return numero.toLocaleString('es-ES', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

/**
 * Formatea precio en euros
 */
function formatearPrecio(precio) {
    return `${formatearNumero(precio)} €`;
}

// Exportar funciones
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calcularEstadisticasBasicas,
        calcularDispersion,
        calcularPercentiles,
        detectarOutliers,
        calcularDistribucionFrecuencias,
        calcularCorrelacion,
        analizarPorZona,
        analizarPrecioM2,
        calcularIndiceOportunidad,
        compararCapitalPeriferia,
        generarResumenCompleto,
        formatearNumero,
        formatearPrecio
    };
}