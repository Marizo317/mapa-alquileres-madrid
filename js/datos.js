// DATOS DE BARRIOS DE MADRID
// Estos son datos simulados para el proyecto educativo

const barriosMadrid = [
    {
        id: 1,
        nombre: "Salamanca",
        lat: 40.4317,
        lng: -3.6787,
        precioMedio: 1450,
        precioM2: 18.5,
        metrosCuadrados: 78,
        descripcion: "Barrio elegante y exclusivo",
        ventajas: ["Excelente transporte", "Zona segura", "Comercios de lujo"],
        desventajas: ["Precio elevado", "Mucho tráfico"]
    },
    {
        id: 2,
        nombre: "Chamberí",
        lat: 40.4378,
        lng: -3.7036,
        precioMedio: 1380,
        precioM2: 17.8,
        metrosCuadrados: 77,
        descripcion: "Zona residencial con encanto",
        ventajas: ["Bien comunicado", "Ambiente tranquilo", "Muchos servicios"],
        desventajas: ["Precio alto", "Pocas zonas verdes"]
    },
    {
        id: 3,
        nombre: "Centro",
        lat: 40.4168,
        lng: -3.7038,
        precioMedio: 1350,
        precioM2: 17.2,
        metrosCuadrados: 78,
        descripcion: "Corazón de Madrid",
        ventajas: ["Vida cultural", "Transporte excelente", "Ocio variado"],
        desventajas: ["Ruidoso", "Turístico", "Caro"]
    },
    {
        id: 4,
        nombre: "Retiro",
        lat: 40.4153,
        lng: -3.6824,
        precioMedio: 1420,
        precioM2: 18.2,
        metrosCuadrados: 78,
        descripcion: "Junto al parque del Retiro",
        ventajas: ["Parque cercano", "Zona tranquila", "Bien comunicado"],
        desventajas: ["Precio elevado", "Poco comercio local"]
    },
    {
        id: 5,
        nombre: "Chamartín",
        lat: 40.4650,
        lng: -3.6777,
        precioMedio: 1400,
        precioM2: 17.9,
        metrosCuadrados: 78,
        descripcion: "Zona empresarial moderna",
        ventajas: ["Oficinas cercanas", "Moderno", "Buena conexión"],
        desventajas: ["Poco ambiente nocturno", "Caro"]
    },
    {
        id: 6,
        nombre: "Arganzuela",
        lat: 40.3983,
        lng: -3.6960,
        precioMedio: 1150,
        precioM2: 14.5,
        metrosCuadrados: 79,
        descripcion: "Barrio en desarrollo",
        ventajas: ["Precio moderado", "Río cercano", "Transporte"],
        desventajas: ["Lejos del centro", "Menos servicios"]
    },
    {
        id: 7,
        nombre: "Tetuán",
        lat: 40.4595,
        lng: -3.6986,
        precioMedio: 1100,
        precioM2: 13.8,
        metrosCuadrados: 79,
        descripcion: "Barrio multicultural",
        ventajas: ["Buen precio", "Diverso", "Comercio local"],
        desventajas: ["Zonas antiguas", "Menos seguro"]
    },
    {
        id: 8,
        nombre: "Moncloa-Aravaca",
        lat: 40.4377,
        lng: -3.7278,
        precioMedio: 1250,
        precioM2: 15.8,
        metrosCuadrados: 79,
        descripcion: "Zona universitaria",
        ventajas: ["Ambiente joven", "Casa de Campo", "Universidades"],
        desventajas: ["Ruidoso por estudiantes", "Lejos de metro"]
    },
    {
        id: 9,
        nombre: "Latina",
        lat: 40.3926,
        lng: -3.7298,
        precioMedio: 950,
        precioM2: 12.0,
        metrosCuadrados: 79,
        descripcion: "Barrio popular y animado",
        ventajas: ["Precio asequible", "Vida local", "Comercio variado"],
        desventajas: ["Edificios antiguos", "Pocas zonas verdes"]
    },
    {
        id: 10,
        nombre: "Carabanchel",
        lat: 40.3808,
        lng: -3.7467,
        precioMedio: 850,
        precioM2: 10.8,
        metrosCuadrados: 78,
        descripcion: "Zona económica",
        ventajas: ["Muy económico", "Parques", "En expansión"],
        desventajas: ["Lejos del centro", "Menos transporte"]
    },
    {
        id: 11,
        nombre: "Usera",
        lat: 40.3874,
        lng: -3.7027,
        precioMedio: 800,
        precioM2: 10.2,
        metrosCuadrados: 78,
        descripcion: "Barrio asequible",
        ventajas: ["Precio bajo", "Comunidad activa", "Metro cercano"],
        desventajas: ["Edificios viejos", "Lejos del centro"]
    },
    {
        id: 12,
        nombre: "Puente de Vallecas",
        lat: 40.3900,
        lng: -3.6586,
        precioMedio: 850,
        precioM2: 10.5,
        metrosCuadrados: 81,
        descripcion: "Zona residencial económica",
        ventajas: ["Económico", "Bien comunicado", "Comercio local"],
        desventajas: ["Lejos del centro", "Antiguo"]
    },
    {
        id: 13,
        nombre: "Moratalaz",
        lat: 40.4079,
        lng: -3.6453,
        precioMedio: 900,
        precioM2: 11.2,
        metrosCuadrados: 80,
        descripcion: "Barrio familiar",
        ventajas: ["Familiar", "Parques", "Tranquilo"],
        desventajas: ["Lejos", "Poco ocio nocturno"]
    },
    {
        id: 14,
        nombre: "Ciudad Lineal",
        lat: 40.4420,
        lng: -3.6500,
        precioMedio: 950,
        precioM2: 12.0,
        metrosCuadrados: 79,
        descripcion: "Barrio extenso y variado",
        ventajas: ["Precio razonable", "Transporte", "Servicios"],
        desventajas: ["Muy extenso", "Algunas zonas antiguas"]
    },
    {
        id: 15,
        nombre: "Hortaleza",
        lat: 40.4700,
        lng: -3.6400,
        precioMedio: 1050,
        precioM2: 13.2,
        metrosCuadrados: 79,
        descripcion: "Zona de crecimiento",
        ventajas: ["Nuevas construcciones", "Aeropuerto cercano", "Moderno"],
        desventajas: ["Lejos del centro", "Poco ambiente"]
    },
    {
        id: 16,
        nombre: "Villaverde",
        lat: 40.3472,
        lng: -3.7050,
        precioMedio: 750,
        precioM2: 9.8,
        metrosCuadrados: 76,
        descripcion: "Zona muy económica",
        ventajas: ["Muy barato", "En desarrollo", "Espacioso"],
        desventajas: ["Muy lejos", "Pocas conexiones"]
    }
];

// Función para obtener todos los barrios
function obtenerBarrios() {
    return barriosMadrid;
}

// Función para obtener un barrio por ID
function obtenerBarrioPorId(id) {
    return barriosMadrid.find(barrio => barrio.id === id);
}

// Función para calcular estadísticas
function calcularEstadisticas() {
    const precios = barriosMadrid.map(b => b.precioMedio);
    
    return {
        total: barriosMadrid.length,
        precioMedio: Math.round(precios.reduce((a, b) => a + b, 0) / precios.length),
        precioMin: Math.min(...precios),
        precioMax: Math.max(...precios),
        barrioMasBarato: barriosMadrid.find(b => b.precioMedio === Math.min(...precios)),
        barrioMasCaro: barriosMadrid.find(b => b.precioMedio === Math.max(...precios))
    };
}

// Función para filtrar barrios por precio máximo
function filtrarPorPrecio(precioMaximo) {
    return barriosMadrid.filter(barrio => barrio.precioMedio <= precioMaximo);
}

// Función para ordenar barrios
function ordenarBarrios(criterio) {
    const copia = [...barriosMadrid];
    
    switch(criterio) {
        case 'precio-asc':
            return copia.sort((a, b) => a.precioMedio - b.precioMedio);
        case 'precio-desc':
            return copia.sort((a, b) => b.precioMedio - a.precioMedio);
        case 'nombre':
            return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
        default:
            return copia;
    }
}

console.log('✅ Datos cargados:', barriosMadrid.length, 'barrios');