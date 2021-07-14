<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
        .titulo-principal__numero
          span 2
        h1 El proyecto de investigación
    .row.mb-5 
        .col-lg-3.col-md-4.col-sm-5
          img(src="@/assets/curso/img6.svg", alt="Texto que describa la imagen")
        .col-lg-9.col-md-8.col-sm-7
          p Un proyecto es un conjunto de ideas organizadas y planificadas que brindan respuestas a una necesidad identificada en un período de tiempo establecido. 
            b Cada proyecto establece un enfoque metodológico dependiendo de los objetivos y alcances. 
            br
            br
            |El proyecto de investigación se caracteriza porque surge de un problema y se plantea a partir de una pregunta problematizadora, o pregunta de investigación, la cual debe ser desarrollada durante la ejecución del proyecto, es muy importante identificar las etapas de un proyecto de investigación, el éxito del proyecto depende de una buena planeación, por lo tanto, es importante conocer cómo están conformadas. 
            b A continuación se relacionan cada una de sus etapas y las acciones que la comprenden. 
    h3.mb-5 Etapas de la investigación
    .row.mb-5 
      .col-lg-4
        img(src="@/assets/curso/img7.jpg", alt="Texto que describa la imagen")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Preparación de la investigación ").px-5
            .col-md-6.mb-4.mb-md-0
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Delimitación del tema
                li 
                  i.fas.fa-check
                  | Revisión de información previa
                li 
                  i.fas.fa-check
                  | Determinación del diseño teórico
                li 
                  i.fas.fa-check
                  | Elaboración del proyecto de investigación
          .row(titulo="Ejecución de la investigación")
              p Se aplican los diferentes métodos de recolección de información, tiene como finalidad, responder la pregunta de investigación planteada.
          .row(titulo="Procesamiento de la información ")
              p Su propósito es lograr la integración y valoración de la información, se caracteriza por la cuantificación, cualificación, interpretación o valoración de la información.
          .row(titulo="Redacción de informes")
              p Es el documento que recoge todo el trabajo resultado de la investigación, debe ser breve y preciso en su presentación.
    #t_2_1.titulo-segundo
      h2 2.1  Tema e idea de investigación
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img8.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 La idea de investigación en primera instancia 
          b surge de la motivación del investigador a profundizar en una temática, o en la identificación de una necesidad o problema 
          | que se pretende resolver en un campo específico del conocimiento. Una característica importante de los temas e ideas de la investigación formativa, es que buscan brindar respuestas a necesidades específicas en 
          b el contexto social y productivo desde un componente técnico y tecnológico.    
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          p La diferencia entre el tema y la idea es que el primero es amplio y multidimensional, a partir de este se concretan las ideas que se profundizan con el desarrollo de la investigación. 
            b Todo proceso investigativo requiere información primaria o secundaria que sirva como fuente de consulta o sustentación del proyecto.
    #t_2_2.titulo-segundo
      h2 2.2  Enfoques de la investigación
    p.mb-5 El enfoque es la forma metodológica cómo se aborda la idea de investigación y da respuesta a la pregunta de investigación, constituye la estrategia ampliada para abordar el problema.  Los enfoques pueden ser de carácter cualitativo cuantitativo y mixto, cada uno tiene sus propias características y finalidades dependiendo de los resultados que se pretenden obtener con la investigación. 
    ImagenInfografica.color-acento-botones.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="34.6%" y="25.5%")
        .h5.mb-2 
        p 
          b Interpreta. 
          |Describe los fenómenos a partir sus cualidades, puede utilizar algunos datos.
      .tarjeta.color-acento-contenido.p-3(x="65.6%" y="25.5%")
        .h5.mb-2 
        p 
          b Mide. 
          | Cuantifica a partir de herramientas estadísticas y matemáticas.
      .tarjeta.color-acento-contenido.p-3(x="50%" y="87%")
        .h5.mb-2 
        p 
          b Mezcla la investigacion cuantitativa y cualitativa.
    #t_2_3.titulo-segundo
      h2 2.3  El problema y la pregunta de investigación
    p.mb-5 Se concibe como problema a una falla, deficiencia, o barrera que genera afectación a una población en condiciones de tiempo y espacio. Todo proyecto surge a partir de un problema o necesidad identificada, una característica fundamental del proyecto de investigación es que el problema se plantea como pregunta de investigación y esta debe ser resuelta con el desarrollo de la investigación. 
      br
    h3 La pregunta de investigación 
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img10.svg", alt="Texto que describa la imagen")
      .col-lg-8
        h3 Características de la pregunta de investigación
        p.mb-3 La pregunta debe ser concreta en el tema a abordar, determina un alcance, identifica el problema, reconoce la población o los elementos objeto estudio, delimita un espacio y un tiempo. Ejemplo: ¿cuáles son las causas de mortalidad infantil en los niños entre 0 y 1 año del municipio de Condoto?
          br
          br
          |A partir de la pregunta se construye el fundamento metodológico, se determinan los objetivos, se establece el marco teórico, se determina el nivel y la profundidad, se caracteriza la población objeto de estudio, se determinan los métodos, técnicas e instrumentos de investigación. Antes de determinar la pregunta de investigación es importante realizar lecturas sobre el tema, identificar ideas importantes de la situación problémica, entender el contexto y delimitar la investigación. 
          br
          br
          |Para ampliar el tema puede observar el video sobre la pregunta de investigación  
        .col-lg-6
          a.anexo.mb-4.mb-lg-0(href="https://youtu.be/OJPrmBjwoQA" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. 
    #t_2_4.titulo-segundo
      h2 2.4  Objetivos y alcance de investigación
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-claro.p-5(titulo="Objetivo general")
        .row
          .col-lg-2
            img(src="@/assets/curso/img11.svg", alt="Texto que describa la imagen")
          .col-lg-10
            p.mb-3 Se denomina objetivo general al fin último de la investigación, este 
              b se construye con base en la pregunta de investigación, debe iniciar con un verbo en infinitivo, indicar el alcance, determinar las variables de operación, y brindar respuesta a la pregunta de investigación.  
              |Para entender cómo se construye el objetivo general desde la pregunta observemos el siguiente ejemplo:
            .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
                p 
                  b Identificar las causas de mortalidad infantil en los niños entre 0 y 1 año del municipio de Condoto.
      .tarjeta.color-claro.p-5(titulo="Objetivos específicos")
        .row
          .col-lg-2
            img(src="@/assets/curso/img12.svg", alt="Texto que describa la imagen")
          .col-lg-10
            p.mb-3 Los objetivos específicos, se plantean como ese conjunto de acciones que permiten cumplir con el objetivo general. Se recomienda que los objetivos específicos oscilan entre tres y cuatro objetivos. 
              b Los objetivos deben ser claros, medibles, orientados a la generación de conocimientos, coherentes con el planteamiento del problema y deben contribuir al logro de la investigación.  
              |Para mayor claridad es importante tener en cuenta el siguiente ejemplo: 
            .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
                p 
                  b Caracterizar las causas de mortalidad infantil en los niños entre 0 y 1 según informes médicos históricos registrados en el Ministerio de Salud.
    #t_2_5.titulo-segundo
      h2 2.5  Niveles de la investigación
    p.mb-5 Los niveles determinan la profundidad de la investigación, a mayor profundidad investigativa mayor complejidad y capacidad de análisis e interpretación de los datos por parte del equipo investigador. En la gráfica siguiente, se muestran las características de la investigación según su nivel de profundidad.
    h3 Niveles de la investigación
    ImagenInfografica.color-acento-botones.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img13.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="17.9%" y="32%")
        p Observa, rastrea, pregunta, indaga, compara 
      .tarjeta.color-acento-contenido.p-3(x="17.9%" y="55%")
        p Estudia minuciosamente los hechos  para analizarlos y establecer nuevas teorías
      .tarjeta.color-acento-contenido.p-3(x="17.8%" y="78.3%")
        p Requiere de  habilidades y experiencia para interpretar los hechos investigados   
      .tarjeta.color-acento-contenido.p-3(x="76.7%" y="43%")
        p Describe los hechos a partir de observar, rastrear, preguntar, indagar, comparar 
      .tarjeta.color-acento-contenido.p-3(x="76.7%" y="67%")
        p Explica de forma detallada  cada variable estudiada a partir de métodos rigurosos de análisis
      .tarjeta.color-acento-contenido.p-3(x="77.5%" y="87.8%")
        p Contrasta hipótesis, argumenta sus relaciones desde principios y teoría, demuestra nuevas teorías
    .row.justify-content-center.mb-5
      .col-lg-8 
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
                p Es importante destacar que 
                  b los objetivos de la investigación determinan su nivel de profundidad, 
                  |es una relación bidireccional, dependiendo de la profundidad se construyen los objetivos.
    #t_2_6.titulo-segundo
      h2 2.6  Métodos de investigación
    p.mb-5 El término método proviene del griego “meta-hacía, hodós-camino, el camino más adecuado hacia un fin’'. Los métodos son el conjunto de procedimientos específicos teóricos como prácticos que determinan la forma como se realizará la investigación.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          p.mb-0 
            b Tabla 2 
            |Los métodos de investigación 

        .tabla-b.color-acento-botones.mb-5
          thead
            tr.tabla-b__header
              th.text-center Métodos
              td.text-center Características
          table
            caption Referencia Tabla - Norma APA
            tr
              th Método científico 
              td Presenta un desarrollo lógico, observa, resuelve hipótesis, experimenta contrasta teorías y concluye 
            tr
              th Método experimental 
              td Se caracteriza por controlar variables, atributos y características del objeto de estudio. Ejemplo (edad, nivel educativo,) compara las variables objeto de estudio
            tr
              th Método teórico 
              td Se utiliza para abordar problemas científicos, facilita la interpretación de datos empíricos y se utiliza para la construcción de una teoría científica
            tr
              th Método estadístico 
              td Tiene como finalidad determinar una muestra estadística, realizar análisis y procesamiento de la información, realizar interpretaciones a partir de datos
            tr
              th Métodos empíricos 
              td Facilitan la lectura de la realidad desde un componente cultural, sensorial, funcionan desde la experiencia del investigador con la realidad.  Permiten la recolección de datos para validar las hipótesis 
            tr
              th Método investigación etnográfica 
              td Se caracteriza por entender el sujeto en su contexto, predomina la observación participante de carácter cualitativo, estudia los fenómenos en su estado natural, tiende hacia un enfoque sociológico, antropológico de las ciencias humanas 
            tr
              th Método hermenéutico  
              td Es un método   con un carácter social, estudia los comportamientos humanos, su nivel de análisis es cualitativo a partir de la interpretación de los hechos
            tr
              th Método fenomenológico 
              td Es un método de investigación cualitativa, estudia los fenómenos, describe e interpreta y reflexiona sobre las experiencias vividas
            tr
              th Métodos histórico 
              td Estudia la trayectoria de los acontecimientos y leyes de manera objetiva 
            tr
              th Método IAP Investigación Acción Participante
              td Es un método de carácter social, el investigador desempeña un rol activo del grupo o comunidad a intervenir contribuye a cambiar la realidad desde su participación activa como facilitador del proceso
    #t_2_7.titulo-segundo
      h2 2.7  La hipótesis
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img14.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 
          b La hipótesis es una forma de análisis a partir de una posible explicación o respuesta a un problema y debe probarse 
          | con los resultados de la investigación. Dependiendo de los niveles de investigación se plantea   la hipótesis, para investigaciones de carácter descriptivo y exploratorio no se plantea hipótesis. Si los métodos de investigación son de carácter científico, experimental o correlacional 
          b siempre se deben demostrar o demostrar la hipótesis planteada. 
          br
          br
          b El marco teórico son los conceptos desde donde se sustenta la investigación, 
          |para su construcción se debe tener en cuenta: el alcance de la pregunta de investigación, el objetivo general, los objetivos específicos y las variables de análisis según el enfoque y los métodos. Cada uno de estos elementos establecen los temas y subtemas que sustentan la investigación. Para una mayor claridad se realiza un análisis a la pregunta de investigación establecida en el numeral 2.3.
    .row.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          .row
            .col-lg-2.col-md-3.col-sm-4
              img(src="@/assets/curso/img15.svg", alt="Texto que describa la imagen")
            .col-lg-10.col-md-9.col-sm-8
              p 
                b ¿Cuáles son las causas de mortalidad infantil en los niños entre 0 y 1 año del municipio de Condoto? 
                | Según esta pregunta, podríamos establecer por ejemplo en el marco teórico los siguientes temas: Mortalidad por enfermedad, accidentalidad, violencia entre otras.  Cada uno de los conceptos mencionados tienen como finalidad sustentar la investigación desde las teorías existentes y con base en ello, se construye el marco teórico de la investigación. Para la construcción del fundamento teórico, 
                b es importante buscar en fuentes de información confiables, como bases de datos, libros, tesis, documentos técnicos especializados, autores reconocidos.
    #t_2_8.titulo-segundo
      h2 2.8  Técnicas de recolección de información
    p.mb-5 Se le denominan técnicas al conjunto de herramientas e instrumentos utilizados para recolectar la información del proceso investigativo. La selección de la técnica depende del enfoque, el nivel de profundidad, método y forma de análisis requerido para desarrollar la investigación.
    h3 Características de las técnicas de recolección datos 
    LineaTiempoD.color-acento-contenido.mb-5
        div(numero="1" titulo="Enfoque: Nivel investigativo").p-5 
          .tabla-a.color-acento-botones.mb-5 
            table
              thead
                tr.head1
                  th.p-4 Cuantitativo
                  th.p-4 Cualitativo
                  th.p-4 Mixto
              tbody
                tr
                  td 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Exploratorio
                      li 
                        i.fas.fa-check
                        |Descriptivo
                      li 
                        i.fas.fa-check
                        | Analítico 
                      li 
                        i.fas.fa-check
                        | Explicativo
                  td
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Interpretativo 

                      li 
                        i.fas.fa-check
                        | Argumentativo
                  td
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Cuali-cuantitativo
        div(numero="2" titulo="Enfoque: Método").p-5 
          .tabla-a.color-acento-botones.mb-5 
            table
              thead
                tr.head1
                  th.p-4 Cuantitativo
                  th.p-4 Cualitativo
                  th.p-4 Mixto
              tbody
                tr
                  td 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Científico 
                      li 
                        i.fas.fa-check
                        | Experimental
                      li 
                        i.fas.fa-check
                        | Correlacional 
                      li 
                        i.fas.fa-check
                        | Estadístico
                  td
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Etnográfico
                      li 
                        i.fas.fa-check
                        | Hermenéutico
                      li 
                        i.fas.fa-check
                        | Fenomenológico
                      li 
                        i.fas.fa-check
                        | Histórico 
                  td
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Cuali-cuantitativo
        div(numero="3" titulo="Enfoque: Tipo de instrumento").p-5 
          .tabla-a.color-acento-botones.mb-5 
            table
              thead
                tr.head1
                  th.p-4 Cuantitativo
                  th.p-4 Cualitativo
                  th.p-4 Mixto
              tbody
                tr
                  td 
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Encuesta 
                      li 
                        i.fas.fa-check
                        | Test 
                      li 
                        i.fas.fa-check
                        | Observaciones a partir de indicadores
                  td
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | Entrevistas
                      li 
                        i.fas.fa-check
                        | Testimonios
                      li 
                        i.fas.fa-check
                        | Observaciones (participantes)
                      li 
                        i.fas.fa-check
                        | Historias de vida 
                      li 
                        i.fas.fa-check
                        | Diarios de campo
                      li 
                        i.fas.fa-check
                        | Talleres 
                      li 
                        i.fas.fa-check
                        | Conversatorios
                  td
                    ul.lista-ul--color
                      li 
                        i.fas.fa-check
                        | En sus técnicas combina instrumentos de investigación 
    #t_2_9.titulo-segundo
      h2 2.9  Universo y muestra
    p.mb-5 El universo en estadística es la población o conjunto de elementos totales que cumplen con características especiales para estudiarse en el proyecto de investigación. El universo puede ser finito o infinito.
    .row.justify-content-center.mb-5 
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
            h2.text-center Universo finito
            p.text-center Es la población o conjunto de elementos totales que se pueden contar o medir, por ejemplo, la población de una ciudad. 
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen')
            h2.text-center Universo infinito
            p.text-center Es el conjunto de elementos que no se pueden contar o medir, por ejemplo, la cantidad de árboles de la región.
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          p Independientemente que el universo sea finito o infinito, 
            b desde la estadística se han desarrollado formas de cuantificar y calcularlos. 
            |Para profundizar en el universo y la muestra estadística profundice en el tema observando el siguiente video:
          .col-lg-7
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=3_tW-Cg4BSY" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p 
                  b Enlace web. 
                  | Youtube.com - Cómo determinar el universo, población y muestra | Metodología de la investigación
    h3 Muestra estadística
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img18.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 Es un subgrupo o parte de la población o universo que se utiliza para ser estudiado, está determinada por unos elementos comunes de análisis que permiten profundizar en la investigación. 
          b En la selección de la muestra se deben establecer parámetros y variables análisis que delimiten la población objeto de estudio, 
          | según necesidades de la investigación.
          br
          br
          |La muestra estadística se calcula con fórmulas estadísticas, existen dos tipos de fórmulas, para poblaciones finitas y poblaciones infinitas. 
          b Para profundizar en esta temática profundice el tema donde puede observar el cálculo de la muestra.
    #t_2_10.titulo-segundo
      h2 2.10  Conclusiones
    .row.mb-5 
        .col-lg-3.col-md-4.col-sm-5
          img(src="@/assets/curso/img19.svg", alt="Texto que describa la imagen")
        .col-lg-9.col-md-8.col-sm-7
          p Las conclusiones son el resultado final de la investigación, en este espacio se interpretan, comparan y analizan los datos obtenidos de la investigación. Su análisis está determinado   acorde con los objetivos y resultados planteados desde una síntesis del proyecto. De igual manera deben contener una reflexión final identificando cómo contribuye el proyecto en la generación de nuevos conocimientos en el área objeto de estudio. 




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
