export default {
  global: {
    componenteFormativo: 'Fundamentos de investigación',
    descripcionCurso:
      'La investigación formativa tiene como objetivo la apropiación de conocimientos técnicos y tecnológicos, para la identificación y solución de problemas   en contextos sociales y productivos del país.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La importancia de investigar en el mundo del trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Por qué investigar?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La investigación en el SENA',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El proyecto de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tema e idea de investigación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Enfoques de la investigación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El problema y la pregunta de investigación  ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Objetivos y alcance de la investigación',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Niveles de la investigación ',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Métodos de investigación ',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'La hipótesis',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Técnicas de recolección de información ',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Universo y muestra',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Conclusiones',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fuentes primarias y secundarias ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Búsqueda de información',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Informe de investigación ',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Guijosa, C. (2018). 7 habilidades necesarias para los trabajos del futuro. ',
      link:
        'https://observatorio.tec.mx/edu-news/7-habilidades-necesarias-para-los-trabajos-del-futuro ',
    },
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, C., & Baptista, P. (2014). Metodología de la Investigación. Sexta Edición. Mc Graw Hill.',
    },
    {
      referencia:
        'Pérez Rodríguez, G., García Batista, G., Nocedo de León, I., & García Inza, M. L. (2009). Metodología de la investigación educacional.',
    },
    {
      referencia:
        'Pickers, S. (2015). ¿Cómo determinar el tamaño de una muestra?  Psyma.',
    },
    {
      referencia:
        'Valero, J. A. (2002). El conocimiento: fuente y riqueza para el futuro. Economía y Desarrollo, 1(1), 99-104.',
    },
  ],
  glosario: [
    {
      termino: 'Ciencia',
      significado: 'entendimiento, inteligencia, razón natural.',
    },
    {
      termino: 'Conocimiento',
      significado:
        'conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente.',
    },
    {
      termino: 'Fenómeno',
      significado: 'indagar para descubrir algo. Investigar un hecho.',
    },
    {
      termino: 'Leyes',
      significado:
        'regla fija a la que está sometido un fenómeno de la naturaleza. Precepto dictado por la autoridad competente, en que se manda o prohíbe algo, en consonancia con la justicia y para el bien de los gobernados.',
    },
    {
      termino: 'Método',
      significado:
        'modo de decir o hacer con orden. Modo de obrar o proceder, hábito o costumbre que cada uno tiene y observa.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal.',
    },
    {
      termino: 'Paradigma',
      significado:
        'teoría o conjunto de teorías cuyo núcleo central se acepta sin cuestionar y que suministra la base y modelo para resolver problemas y avanzar en el conocimiento',
    },
  ],
  complementario: [
    {
      texto: 'Pregunta de investigación',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OJPrmBjwoQA ',
    },
    {
      texto: '¿Como determinar el universo, población y muestra?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3_tW-Cg4BSY ',
    },
    {
      texto: 'Cálculo del tamaño de la muestra',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cya4JCVPc9w ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marisol Osorio Beltrán',
        cargo: 'Líder Sennova',
        centro:
          'Centro de Formación en Diseño Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Jorge Villamizar'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
