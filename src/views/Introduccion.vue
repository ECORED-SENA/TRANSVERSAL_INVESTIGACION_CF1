<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La investigación formativa tiene como objetivo la apropiación de conocimientos técnicos y tecnológicos, para la identificación y solución de problemas   en contextos sociales y productivos del país. 
      br
      br
      |En el desarrollo de la competencia “Orientar investigación formativa según referentes técnicos"  se pretende integrar en el proceso formativo los componentes metodológicos para la formulación básica de proyectos de investigación, partiendo desde la identificación de un problema, la generación de ideas, el planteamiento de la pregunta de investigación, la determinación de objetivos, el reconocimiento de un marco teórico y el desarrollo metodológico para un ejercicio básico de investigación.
      br
      br
      |Desde esta perspectiva la investigación se convierte en una herramienta de aprendizaje para el aprendizaje, no solo es el componente metodológico, es una forma sistemática de organizar el pensamiento hasta convertirlo en una disciplina   que facilita la construcción de nuevos conocimientos útiles en el hacer profesional.   

    .row.mb-5 
      .col-lg-2.col-md-3.col-sm-4
        img(src="@/assets/curso/img1.svg", alt="Texto que describa la imagen")
      .col-lg-10.col-md-9.col-sm-9
        p La excelencia en el mundo laboral requiere de personas con capacidades extraordinarias, lo que significa hacer algo más de lo ordinario. Hoy además de manejar y entender las aplicaciones tecnológicas, hablar una segunda lengua, aprender conocimientos técnicos especializados y   tener una mirada global para soluciones locales, se requiere de capacidades para 
          b investigar y organizar el pensamiento con métodos de trabajo enfocados en la soluciones de problemas y creación de valor en la empresa.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color__before--contenido-claro.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left.mb-3.color__before--botones
              h4.mb-2 La formación para el presente y futuro debe integrar conocimientos básicos en ciencias, capacidad para resolver problemas, manejo de las matemáticas, comunicación y trabajo en equipo, como estrategia fundamental para desempeñarse en cualquier profesión y oficio. 
              p.mb-0 - Guijosa, 2018
              i.fas.fa-quote-right.d-flex.justify-content-end.color__before--botones
    .row
      .col-lg-4
        img(src="@/assets/curso/img2.jpg", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 Este componente formativo tiene como finalidad que el aprendiz, desarrolle capacidades argumentativas, propositivas, e interpretativas, a partir de aprender a estructurar el proyecto de investigación de acuerdo con principios y métodos sistemáticos, requeridos para la solución creativa de problemáticas identificadas en el contexto social y productivo.   
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          p Desde esta perspectiva 
            b la investigación es el eje fundamental para el desarrollo de competencias habilitadoras para las profesiones del futuro, 
            |el aprender a investigar, buscar información, organizar y gestionar conocimiento en función de resolver problemas y agregar valor en los procesos, es la realidad y necesidad del mercado actual. 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
