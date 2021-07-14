<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //Muestras
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La importancia de investigar en el mundo del trabajo
    img.mb-5(src="@/assets/curso/img3.jpg", alt="Texto que describa la imagen")
    #t_1_1.titulo-segundo
      h2 1.1  ¿Por qué investigar?
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img4.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 
          b La investigación es el eje fundamental para todo proceso de creación, ideación e innovación, ofrece las bases para el pensamiento creativo y la solución de problemas 
          |en cualquier ámbito de la vida y del trabajo. Ser competitivo en el mundo laboral, identificar oportunidades y desarrollar habilidades de pensamiento requiere de una gran curiosidad, ganas de aprender, vivir y emprender hacia nuevos horizontes. 
          br
          br
          |Un proyecto de investigación formativa 
          b es una herramienta que ayuda al desarrollo de habilidades para la solución creativa de problemas.  
          |Entender cómo a partir de la búsqueda sistemática de información y la estructuración metodológica del proyecto se fomentan nuevas oportunidades para el aprendizaje y el mundo laboral.
    br 
    br 
    #t_1_2.titulo-segundo
      h2 1.2  La investigación en el SENA
    .row.mb-5 
      .col-lg-5
        h4 El SENA desde su creación ha realizado ejercicios de investigación aplicada en sus procesos de formación, según lo establecido en el Estatuto de Formación Profesional.
      .col-lg-7
        p El objetivo de la investigación en los procesos de formación se enfoca en resolver problemas prácticos, a partir de información primaria o secundaria, análisis de investigaciones y/o desarrollos experimentales que permitan encontrar una solución óptima a los problemas identificados.
    .row
      .col-lg-4
        img(src="@/assets/curso/img5.svg", alt="Texto que describa la imagen")
      .col-lg-8
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          p En la formación profesional, la competencia 
            b “orientar investigación formativa según referentes técnicos”, 
            | tiene como objetivo que el aprendiz pueda adquirir fundamentos metodológicos en investigación, facilitando así el desarrollo del   proyecto formativo y el aprendizaje por proyectos. 
            b Desde esta perspectiva la investigación es la base del aprendizaje, 
            |nos enseña métodos para organizar el pensamiento, facilita la comprensión de la información, permite descubrir nuevos conocimientos necesarios para el mundo laboral y personal.



























</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
