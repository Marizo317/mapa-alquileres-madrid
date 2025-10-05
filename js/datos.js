// ============================================================================
// DATASET: PRECIOS DE ALQUILER EN MADRID Y ÁREA METROPOLITANA 2025
// ============================================================================
// Fuentes: Idealista, Fotocasa, Indomio, OCU, Bankinter, Properfy
// Fecha de actualización: Enero-Agosto 2025
// Metodología: Recopilación de datos de 8 fuentes oficiales verificadas
// ============================================================================

const barriosMadrid = [
    // ========================================================================
    // MADRID CAPITAL - ZONA CENTRO (PREMIUM)
    // ========================================================================
    {
        id: 1,
        nombre: "Salamanca",
        lat: 40.4312,
        lng: -3.6773,
        zona: "Capital",
        subzona: "Centro",
        precioMedio: 2064,
        precioM2: 25.8,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Febrero 2025",
        ventajas: [
            "Barrio de lujo con tiendas exclusivas",
            "Excelente conectividad con metro",
            "Zona segura y tranquila",
            "Gran oferta cultural y gastronómica"
        ],
        desventajas: [
            "Precios muy elevados",
            "Poco ambiente nocturno",
            "Tráfico denso",
            "Estacionamiento complicado"
        ]
    },
    {
        id: 2,
        nombre: "Chamberí",
        lat: 40.4378,
        lng: -3.7025,
        zona: "Capital",
        subzona: "Centro",
        precioMedio: 2000,
        precioM2: 25.0,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Febrero 2025",
        ventajas: [
            "Barrio con mucho encanto",
            "Mercado de Vallehermoso renovado",
            "Buena conexión de transporte",
            "Ambiente familiar y cosmopolita"
        ],
        desventajas: [
            "Precios en aumento constante",
            "Calles estrechas",
            "Pocas zonas verdes",
            "Alta densidad de población"
        ]
    },
    {
        id: 3,
        nombre: "Centro",
        lat: 40.4168,
        lng: -3.7038,
        zona: "Capital",
        subzona: "Centro",
        precioMedio: 2056,
        precioM2: 25.7,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Agosto 2025",
        ventajas: [
            "Corazón de Madrid",
            "Máxima oferta cultural",
            "Todos los servicios disponibles",
            "Vida nocturna intensa"
        ],
        desventajas: [
            "Muy turístico",
            "Ruidoso 24/7",
            "Edificios antiguos sin ascensor",
            "Precios prohibitivos"
        ]
    },
    {
        id: 4,
        nombre: "Chamartín",
        lat: 40.4651,
        lng: -3.6779,
        zona: "Capital",
        subzona: "Norte",
        precioMedio: 1696,
        precioM2: 21.2,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Marzo 2025",
        ventajas: [
            "Zona de negocios moderna",
            "Estación de tren principal",
            "Torres empresariales",
            "Buena infraestructura"
        ],
        desventajas: [
            "Poco ambiente residencial",
            "Distancias largas a pie",
            "Zona muy corporativa",
            "Precios altos"
        ]
    },
    {
        id: 5,
        nombre: "Retiro",
        lat: 40.4153,
        lng: -3.6824,
        zona: "Capital",
        subzona: "Centro-Este",
        precioMedio: 1712,
        precioM2: 21.4,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Junto al Parque del Retiro",
            "Zona muy tranquila",
            "Edificios señoriales",
            "Alta calidad de vida"
        ],
        desventajas: [
            "Precios elevados",
            "Poco comercio de proximidad",
            "Zona muy residencial y silenciosa",
            "Edificios antiguos"
        ]
    },

    // ========================================================================
    // MADRID CAPITAL - ZONA MEDIA-ALTA
    // ========================================================================
    {
        id: 6,
        nombre: "Arganzuela",
        lat: 40.3983,
        lng: -3.6979,
        zona: "Capital",
        subzona: "Sur-Centro",
        precioMedio: 1616,
        precioM2: 20.2,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Abril 2025",
        ventajas: [
            "Madrid Río cercano",
            "Matadero Madrid (cultura)",
            "Bien comunicado",
            "Barrio en transformación"
        ],
        desventajas: [
            "Algunas zonas en obras",
            "Precio en alza",
            "Pocas zonas comerciales grandes",
            "Tráfico en hora punta"
        ]
    },
    {
        id: 7,
        nombre: "Tetuán",
        lat: 40.4559,
        lng: -3.6963,
        zona: "Capital",
        subzona: "Norte",
        precioMedio: 1688,
        precioM2: 21.1,
        metrosCuadrados: 80,
        fuente: "Indomio",
        fechaActualizacion: "Agosto 2025",
        ventajas: [
            "Muy bien comunicado",
            "Comercio multicultural",
            "Precios más accesibles que centro",
            "Ambiente diverso"
        ],
        desventajas: [
            "Algunas calles ruidosas",
            "Densidad alta",
            "Pocas zonas verdes",
            "Gentrificación en proceso"
        ]
    },
    {
        id: 8,
        nombre: "Moncloa-Aravaca",
        lat: 40.4357,
        lng: -3.7273,
        zona: "Capital",
        subzona: "Oeste",
        precioMedio: 1704,
        precioM2: 21.3,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Junio 2025",
        ventajas: [
            "Casa de Campo cercana",
            "Universidad Complutense",
            "Ambiente universitario",
            "Zonas residenciales tranquilas"
        ],
        desventajas: [
            "Lejos del centro en algunas zonas",
            "Mucho tráfico universitario",
            "Precios variables según zona",
            "Transporte limitado en Aravaca"
        ]
    },

    // ========================================================================
    // MADRID CAPITAL - ZONA MEDIA
    // ========================================================================
    {
        id: 9,
        nombre: "Ciudad Lineal",
        lat: 40.4462,
        lng: -3.6486,
        zona: "Capital",
        subzona: "Este",
        precioMedio: 1416,
        precioM2: 17.7,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Mayo 2025",
        ventajas: [
            "Buena conexión de metro",
            "Precio razonable",
            "Barrio familiar",
            "Comercio de barrio"
        ],
        desventajas: [
            "Lejos del centro",
            "Pocas zonas de ocio",
            "Edificios de los 60-70",
            "Poco ambiente nocturno"
        ]
    },
    {
        id: 10,
        nombre: "Latina",
        lat: 40.3915,
        lng: -3.7453,
        zona: "Capital",
        subzona: "Suroeste",
        precioMedio: 1376,
        precioM2: 17.2,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Barrio castizo con encanto",
            "Fiestas populares (La Paloma)",
            "Precio accesible",
            "Bien comunicado"
        ],
        desventajas: [
            "Algunas zonas antiguas",
            "Tráfico denso",
            "Calles estrechas",
            "Pocos espacios verdes"
        ]
    },
    {
        id: 11,
        nombre: "San Blas",
        lat: 40.4302,
        lng: -3.6091,
        zona: "Capital",
        subzona: "Este",
        precioMedio: 1424,
        precioM2: 17.8,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Marzo 2025",
        ventajas: [
            "Precio competitivo",
            "Parque Juan Carlos I cercano",
            "Ifema a 10 minutos",
            "Barrio tranquilo"
        ],
        desventajas: [
            "Lejos del centro",
            "Poco comercio grande",
            "Transporte limitado en algunas zonas",
            "Poca vida nocturna"
        ]
    },

    // ========================================================================
    // MADRID CAPITAL - ZONA ECONÓMICA
    // ========================================================================
    {
        id: 12,
        nombre: "Hortaleza",
        lat: 40.4706,
        lng: -3.6408,
        zona: "Capital",
        subzona: "Norte",
        precioMedio: 1344,
        precioM2: 16.8,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Agosto 2025",
        ventajas: [
            "Zona en crecimiento",
            "Buena relación calidad-precio",
            "Nuevas construcciones",
            "Ambiente joven"
        ],
        desventajas: [
            "Lejos del centro",
            "Metro limitado en algunas zonas",
            "Poco comercio tradicional",
            "Obras en expansión"
        ]
    },
    {
        id: 13,
        nombre: "Fuencarral-El Pardo",
        lat: 40.4976,
        lng: -3.7125,
        zona: "Capital",
        subzona: "Norte",
        precioMedio: 1320,
        precioM2: 16.5,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Junio 2025",
        ventajas: [
            "Zonas verdes amplias",
            "Monte de El Pardo",
            "Barrios nuevos y modernos",
            "Precio atractivo"
        ],
        desventajas: [
            "Muy extenso y disperso",
            "Transporte limitado en El Pardo",
            "Lejos del centro urbano",
            "Servicios dispersos"
        ]
    },
    {
        id: 14,
        nombre: "Carabanchel",
        lat: 40.3820,
        lng: -3.7419,
        zona: "Capital",
        subzona: "Sur",
        precioMedio: 1288,
        precioM2: 16.1,
        metrosCuadrados: 80,
        fuente: "OCU",
        fechaActualizacion: "Junio 2025",
        ventajas: [
            "Precio muy competitivo",
            "Bien comunicado con metro",
            "Parque de las Cruces",
            "Comercio de barrio"
        ],
        desventajas: [
            "Imagen social negativa",
            "Algunas zonas antiguas",
            "Pocos espacios culturales",
            "Edificios antiguos"
        ]
    },
    {
        id: 15,
        nombre: "Usera",
        lat: 40.3870,
        lng: -3.7024,
        zona: "Capital",
        subzona: "Sur",
        precioMedio: 1376,
        precioM2: 17.2,
        metrosCuadrados: 80,
        fuente: "Bankinter",
        fechaActualizacion: "Agosto 2025",
        ventajas: [
            "Mayor crecimiento 2025 (+21.5%)",
            "Precio asequible",
            "Multicultural y diverso",
            "Mejorando infraestructuras"
        ],
        desventajas: [
            "Históricamente menos valorado",
            "Pocas zonas verdes",
            "Servicios básicos",
            "Gentrificación incipiente"
        ]
    },
    {
        id: 16,
        nombre: "Puente de Vallecas",
        lat: 40.3970,
        lng: -3.6652,
        zona: "Capital",
        subzona: "Sureste",
        precioMedio: 1360,
        precioM2: 17.0,
        metrosCuadrados: 80,
        fuente: "Bankinter",
        fechaActualizacion: "Agosto 2025",
        ventajas: [
            "Fuerte crecimiento (+18.8%)",
            "Precio económico",
            "Barrio con identidad",
            "Mejoras urbanísticas"
        ],
        desventajas: [
            "Percepción social",
            "Lejos de zonas premium",
            "Densidad muy alta",
            "Edificios antiguos"
        ]
    },
    {
        id: 17,
        nombre: "Moratalaz",
        lat: 40.4079,
        lng: -3.6455,
        zona: "Capital",
        subzona: "Este",
        precioMedio: 1200,
        precioM2: 15.0,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Precio muy asequible",
            "Barrio residencial tranquilo",
            "Cerro del Tío Pío (vistas)",
            "Buena conexión de metro"
        ],
        desventajas: [
            "Lejos del centro",
            "Poco ocio y cultura",
            "Edificios de los 70",
            "Pocas zonas comerciales"
        ]
    },
    {
        id: 18,
        nombre: "Villa de Vallecas",
        lat: 40.3790,
        lng: -3.6122,
        zona: "Capital",
        subzona: "Sureste",
        precioMedio: 1200,
        precioM2: 15.0,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Mayo 2025",
        ventajas: [
            "Más económico de Madrid capital",
            "Barrio nuevo y planificado",
            "Parque Forestal de Entrevías",
            "Construcciones modernas"
        ],
        desventajas: [
            "Muy alejado del centro",
            "Solo línea 1 de metro",
            "Pocos servicios consolidados",
            "Sensación de periferia"
        ]
    },
    {
        id: 19,
        nombre: "Villaverde",
        lat: 40.3470,
        lng: -3.7058,
        zona: "Capital",
        subzona: "Sur",
        precioMedio: 1200,
        precioM2: 15.0,
        metrosCuadrados: 80,
        fuente: "Fotocasa",
        fechaActualizacion: "Agosto 2025",
        ventajas: [
            "Precio muy bajo",
            "Cercanías y metro",
            "En proceso de renovación",
            "Espacios industriales reconvertidos"
        ],
        desventajas: [
            "Zona industrial histórica",
            "Lejos del centro",
            "Imagen poco atractiva",
            "Servicios limitados"
        ]
    },
    {
        id: 20,
        nombre: "Vicálvaro",
        lat: 40.4026,
        lng: -3.6047,
        zona: "Capital",
        subzona: "Este",
        precioMedio: 1136,
        precioM2: 14.2,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Abril 2025",
        ventajas: [
            "El más barato de Madrid",
            "Campus universitario URJC",
            "Ensanche de Vallecas en desarrollo",
            "Precio imbatible"
        ],
        desventajas: [
            "Muy alejado del centro",
            "Transporte limitado",
            "Pocas opciones de ocio",
            "En desarrollo urbanístico"
        ]
    },

    // ========================================================================
    // ÁREA METROPOLITANA - ZONA OESTE (PREMIUM)
    // ========================================================================
    {
        id: 21,
        nombre: "Pozuelo de Alarcón",
        lat: 40.4353,
        lng: -3.8124,
        zona: "Periferia",
        subzona: "Oeste",
        precioMedio: 2484,
        precioM2: 17.6,
        metrosCuadrados: 141,
        fuente: "Properfy",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Zona premium de alto poder adquisitivo",
            "Colegios internacionales",
            "Casas unifamiliares y chalets",
            "Muy seguro"
        ],
        desventajas: [
            "Precio muy elevado",
            "Dependiente del coche",
            "Lejos del centro de Madrid",
            "Metro limitado"
        ]
    },
    {
        id: 22,
        nombre: "Boadilla del Monte",
        lat: 40.4032,
        lng: -3.8770,
        zona: "Periferia",
        subzona: "Oeste",
        precioMedio: 2430,
        precioM2: 16.0,
        metrosCuadrados: 152,
        fuente: "Properfy",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Urbanizaciones de calidad",
            "Ambiente familiar",
            "Zonas verdes amplias",
            "Buena calidad de vida"
        ],
        desventajas: [
            "Sin metro",
            "Totalmente dependiente del coche",
            "Precio elevado",
            "Alejado de Madrid"
        ]
    },
    {
        id: 23,
        nombre: "Majadahonda",
        lat: 40.4730,
        lng: -3.8720,
        zona: "Periferia",
        subzona: "Oeste",
        precioMedio: 2170,
        precioM2: 15.6,
        metrosCuadrados: 139,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Nivel de vida alto",
            "Centros comerciales grandes",
            "Instalaciones deportivas",
            "Buena oferta educativa"
        ],
        desventajas: [
            "Sin metro directo",
            "Coche imprescindible",
            "Tráfico en hora punta",
            "Precio alto"
        ]
    },
    {
        id: 24,
        nombre: "Las Rozas",
        lat: 40.4925,
        lng: -3.8738,
        zona: "Periferia",
        subzona: "Oeste",
        precioMedio: 1621,
        precioM2: 15.0,
        metrosCuadrados: 108,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Abril 2025",
        ventajas: [
            "Centro comercial Las Rozas Village",
            "Cercanías directo a Madrid",
            "Entorno residencial tranquilo",
            "Buena conectividad A-6"
        ],
        desventajas: [
            "Sin metro",
            "Coche necesario",
            "Tráfico A-6",
            "Lejos del centro"
        ]
    },

    // ========================================================================
    // ÁREA METROPOLITANA - ZONA NORTE
    // ========================================================================
    {
        id: 25,
        nombre: "Alcobendas",
        lat: 40.5478,
        lng: -3.6410,
        zona: "Periferia",
        subzona: "Norte",
        precioMedio: 1510,
        precioM2: 18.9,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Metro directo (L10)",
            "Zona empresarial importante",
            "La Moraleja cercana",
            "Servicios de calidad"
        ],
        desventajas: [
            "Precio en alza",
            "Mucho tráfico laboral",
            "Zona muy corporativa",
            "Pocas zonas de ocio"
        ]
    },
    {
        id: 26,
        nombre: "San Sebastián de los Reyes",
        lat: 40.5525,
        lng: -3.6254,
        zona: "Periferia",
        subzona: "Norte",
        precioMedio: 1500,
        precioM2: 18.75,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Metro (L10)",
            "Micropolix (ciudad infantil)",
            "Centro comercial Plaza Norte 2",
            "Precio razonable"
        ],
        desventajas: [
            "Lejos del centro de Madrid",
            "Polígonos industriales",
            "Ambiente poco urbano",
            "Dependencia del transporte"
        ]
    },
    {
        id: 27,
        nombre: "La Moraleja",
        lat: 40.5122,
        lng: -3.6398,
        zona: "Periferia",
        subzona: "Norte",
        precioMedio: 1664,
        precioM2: 20.8,
        metrosCuadrados: 80,
        fuente: "Idealista",
        fechaActualizacion: "Marzo 2025",
        ventajas: [
            "Zona exclusiva",
            "Urbanizaciones de lujo",
            "Seguridad máxima",
            "Prestigio social"
        ],
        desventajas: [
            "Precio muy elevado",
            "Pocas viviendas en alquiler",
            "Dependiente del coche",
            "Aislamiento social"
        ]
    },

    // ========================================================================
    // ÁREA METROPOLITANA - ZONA SUR (ECONÓMICA)
    // ========================================================================
    {
        id: 28,
        nombre: "Getafe",
        lat: 40.3057,
        lng: -3.7327,
        zona: "Periferia",
        subzona: "Sur",
        precioMedio: 1498,
        precioM2: 18.7,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Abril 2025",
        ventajas: [
            "Metro y Cercanías",
            "Universidad Carlos III",
            "Hospital universitario",
            "Precio competitivo"
        ],
        desventajas: [
            "Lejos del centro de Madrid",
            "Imagen industrial",
            "Base aérea cercana",
            "Pocos espacios verdes"
        ]
    },
    {
        id: 29,
        nombre: "Leganés",
        lat: 40.3272,
        lng: -3.7636,
        zona: "Periferia",
        subzona: "Sur",
        precioMedio: 1194,
        precioM2: 14.9,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Precio asequible",
            "Metro directo (L12)",
            "Universidad Carlos III",
            "Parquesur cercano"
        ],
        desventajas: [
            "Zona industrial predominante",
            "Lejos del centro",
            "Pocas opciones culturales",
            "Imagen poco atractiva"
        ]
    },
    {
        id: 30,
        nombre: "Alcorcón",
        lat: 40.3458,
        lng: -3.8242,
        zona: "Periferia",
        subzona: "Sur",
        precioMedio: 1105,
        precioM2: 13.8,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Precio muy económico",
            "Metro (L10, L12)",
            "Tres Aguas (centro comercial)",
            "Hospital Fundación Alcorcón"
        ],
        desventajas: [
            "Densidad muy alta",
            "Pocas zonas verdes",
            "Bloques de pisos monótonos",
            "Lejos del centro"
        ]
    },
    {
        id: 31,
        nombre: "Móstoles",
        lat: 40.3225,
        lng: -3.8651,
        zona: "Periferia",
        subzona: "Sur",
        precioMedio: 1097,
        precioM2: 13.7,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Uno de los más baratos",
            "Metro (L12)",
            "Hospital Universitario",
            "URJC campus"
        ],
        desventajas: [
            "Muy alejado",
            "Densidad excesiva",
            "Pocas zonas de ocio",
            "Imagen deteriorada"
        ]
    },
    {
        id: 32,
        nombre: "Fuenlabrada",
        lat: 40.2842,
        lng: -3.7947,
        zona: "Periferia",
        subzona: "Sur",
        precioMedio: 1157,
        precioM2: 14.5,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Precio competitivo",
            "Metro directo (L12)",
            "Cercanías a Atocha",
            "Servicios básicos completos"
        ],
        desventajas: [
            "Lejos de Madrid centro",
            "Pocos atractivos culturales",
            "Zona dormitorio",
            "Pocas zonas verdes"
        ]
    },
    {
        id: 33,
        nombre: "Parla",
        lat: 40.2370,
        lng: -3.7703,
        zona: "Periferia",
        subzona: "Sur",
        precioMedio: 1000,
        precioM2: 12.35,
        metrosCuadrados: 81,
        fuente: "Madrid Actual",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Precio más bajo del área sur",
            "Cercanías directo",
            "Parque Natural El Bosque",
            "Oferta municipal activa"
        ],
        desventajas: [
            "Muy alejado (21 km centro)",
            "Sin metro",
            "Imagen social negativa",
            "Servicios limitados"
        ]
    },

    // ========================================================================
    // ÁREA METROPOLITANA - ZONA ESTE (ECONÓMICA)
    // ========================================================================
    {
        id: 34,
        nombre: "Alcalá de Henares",
        lat: 40.4818,
        lng: -3.3643,
        zona: "Periferia",
        subzona: "Este",
        precioMedio: 1082,
        precioM2: 13.5,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Abril 2025",
        ventajas: [
            "Patrimonio UNESCO",
            "Universidad histórica",
            "Cercanías frecuente",
            "Precio muy asequible"
        ],
        desventajas: [
            "Muy lejos (35 km)",
            "Sin metro",
            "Tiempo de desplazamiento alto",
            "Limitado para trabajo en Madrid"
        ]
    },
    {
        id: 35,
        nombre: "Torrejón de Ardoz",
        lat: 40.4557,
        lng: -3.4766,
        zona: "Periferia",
        subzona: "Este",
        precioMedio: 1000,
        precioM2: 12.5,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Precio muy económico",
            "Metro directo (L7 extendida)",
            "Parque Europa",
            "Base aérea (empleo)"
        ],
        desventajas: [
            "Lejos del centro (20 km)",
            "Ruido de aviones",
            "Pocas opciones culturales",
            "Ambiente limitado"
        ]
    },
    {
        id: 36,
        nombre: "Coslada",
        lat: 40.4209,
        lng: -3.5606,
        zona: "Periferia",
        subzona: "Este",
        precioMedio: 920,
        precioM2: 11.5,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "Muy económico",
            "Metro L7",
            "Cercanías",
            "Conectado con corredor Henares"
        ],
        desventajas: [
            "Zona industrial dominante",
            "Pocos espacios de ocio",
            "Imagen poco atractiva",
            "Lejos del centro"
        ]
    },
    {
        id: 37,
        nombre: "San Fernando de Henares",
        lat: 40.4240,
        lng: -3.5351,
        zona: "Periferia",
        subzona: "Este",
        precioMedio: 880,
        precioM2: 11.0,
        metrosCuadrados: 80,
        fuente: "Noticias para Municipios",
        fechaActualizacion: "Julio 2025",
        ventajas: [
            "El más barato del área metropolitana",
            "Cercanías",
            "Precio imbatible",
            "Potencial inversión"
        ],
        desventajas: [
            "Muy lejos y poco conocido",
            "Sin metro",
            "Pocas opciones de servicios",
            "Zona industrial"
        ]
    }
];

// ============================================================================
// METADATOS Y CONFIGURACIÓN
// ============================================================================
const configuracionMapa = {
    centroMadrid: {
        lat: 40.4168,
        lng: -3.7038
    },
    zoomInicial: 11,
    zoomMaximo: 18,
    zoomMinimo: 10,
    radioCobertura: 20000, // 20km desde el centro
    
    // Nuevos rangos de precios 2025 (actualizados con datos reales)
    rangosPrecio: {
        muyBajo: { min: 0, max: 1200, color: '#22c55e', label: 'Muy Económico' },
        bajo: { min: 1200, max: 1400, color: '#84cc16', label: 'Económico' },
        medio: { min: 1400, max: 1600, color: '#eab308', label: 'Medio' },
        medioAlto: { min: 1600, max: 1800, color: '#f97316', label: 'Medio-Alto' },
        alto: { min: 1800, max: Infinity, color: '#ef4444', label: 'Alto/Premium' }
    },
    
    fuentesDatos: [
        { nombre: 'Idealista', periodo: 'Enero-Agosto 2025', tipo: 'Principal' },
        { nombre: 'Fotocasa', periodo: 'Abril-Agosto 2025', tipo: 'Índice Inmobiliario' },
        { nombre: 'Indomio', periodo: 'Agosto 2025', tipo: 'Portal Inmobiliario' },
        { nombre: 'Noticias para Municipios', periodo: 'Abril-Julio 2025', tipo: 'Medios' },
        { nombre: 'Properfy', periodo: 'Julio 2025', tipo: 'Análisis Mercado' },
        { nombre: 'OCU', periodo: 'Junio 2025', tipo: 'Estudio Consumidores' },
        { nombre: 'Bankinter', periodo: 'Agosto 2025', tipo: 'Informe Financiero' },
        { nombre: 'Madrid Actual', periodo: 'Julio 2025', tipo: 'Medios Locales' }
    ],
    
    ultimaActualizacion: '2025-08-30',
    version: '2.0.0',
    autor: 'Proyecto Data Science - Universidad'
};

// ============================================================================
// FUNCIONES DE UTILIDAD
// ============================================================================

/**
 * Obtiene el color correspondiente según el precio del alquiler
 * Rangos actualizados con datos reales de 2025
 */
function obtenerColorPorPrecio(precio) {
    const rangos = configuracionMapa.rangosPrecio;
    
    if (precio < rangos.muyBajo.max) return rangos.muyBajo.color;
    if (precio < rangos.bajo.max) return rangos.bajo.color;
    if (precio < rangos.medio.max) return rangos.medio.color;
    if (precio < rangos.medioAlto.max) return rangos.medioAlto.color;
    return rangos.alto.color;
}

/**
 * Obtiene estadísticas básicas del dataset
 */
function obtenerEstadisticasGenerales() {
    const precios = barriosMadrid.map(b => b.precioMedio);
    const preciosM2 = barriosMadrid.map(b => b.precioM2);
    
    return {
        totalUbicaciones: barriosMadrid.length,
        precioMedio: (precios.reduce((a, b) => a + b, 0) / precios.length).toFixed(2),
        precioMinimo: Math.min(...precios),
        precioMaximo: Math.max(...precios),
        precioM2Medio: (preciosM2.reduce((a, b) => a + b, 0) / preciosM2.length).toFixed(2),
        precioM2Minimo: Math.min(...preciosM2).toFixed(2),
        precioM2Maximo: Math.max(...preciosM2).toFixed(2)
    };
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        barriosMadrid,
        configuracionMapa,
        obtenerColorPorPrecio,
        obtenerEstadisticasGenerales
    };
}