<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
          
      h1 Fuentes de información
    img.mb-5(src="@/assets/curso/img20.jpg", alt="Texto que describa la imagen")
    .row.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          p.mb-0 Las fuentes de información es el conjunto de documentos y datos confiables que contienen conocimientos útiles para consultarse en el desarrollo de una investigación.
    #t_3_1.titulo-segundo
      h2 3.1  Fuentes primarias y secundarias
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img21.svg", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 
          b Las fuentes primarias son documentos que no han sido editados, reinterpretados o restructurados por otros investigadores
          |, entre los más destacados están, revistas, testimonios orales, pinturas, archivos multimedios pintura o grabaciones   de primera mano, cartas entre otras.  Sus principales características son su originalidad como evidencia directa de su autor.
          br
          br
          b Las fuentes secundarias son textos basados en fuentes primarias
          |, han sido analizados, interpretados y evaluados por otros investigadores. Algunos tipos de fuentes son críticas literarias, resúmenes, revistas con citaciones de otros textos, bibliografías entre otras.
    #t_3_2.titulo-segundo
      h2 3.2  Búsqueda de información
    .row.mb-5
      .col-lg-4
        img(src="@/assets/curso/img22.png", alt="Texto que describa la imagen")
      .col-lg-8
        p.mb-3 La búsqueda y selección de información es muy importante para sustentar la investigación. Definir los criterios de búsqueda, identificar 
          b el tipo de información que sustenta el proyecto investigativo requiere de conocimientos y habilidades para buscar información relevante. 
          br
          br
          |Saber buscar significa delimitar el tema con los conceptos relevantes que los sustenta, una vez se tiene claridad al respecto 
          b se identifican bases de datos especializadas, y material bibliográfico y cibergráfica relevante a estudiar. 
          |Para apoyar las búsquedas de información, en la biblioteca virtual del SENA, puede encontrar la más importante información a consultar según necesidad.
        .col-lg-6
                a.anexo.mb-4.mb-lg-0(href="http://biblioteca.sena.edu.co/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p 
                      b Enlace web. 
                      |Biblioteca virtual del SENA
    .row.justify-content-center.mb-5 
      .col-lg-10
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-claro.p-5(titulo="Catálogo bibliográfico")
            .row
              .col-lg-2
                img(src="@/assets/curso/img23.svg", alt="Texto que describa la imagen")
              .col-lg-10
                h4 Catálogo bibliográfico
                p.mb-3 Material bibliográfico (libros, revistas, videos, entre otros) que se encuentra en las colecciones físicas de las bibliotecas del sistema de bibliotecas.
          .tarjeta.color-claro.p-5(titulo="Bases de datos")
            .row
              .col-lg-2
                img(src="@/assets/curso/img24.svg", alt="Texto que describa la imagen")
              .col-lg-10
                h4 Bases de datos
                p.mb-3 Son recursos digitales en línea suscritos y gratuitos, en diferentes disciplinas (salud, agricultura, biología, legislatura, administración, diseño emprendimiento, entre otros) y en diferentes formatos (texto, audio, video, imagen).
          .tarjeta.color-claro.p-5(titulo="Colección SENA / Repositorio")
            .row
              .col-lg-2
                img(src="@/assets/curso/img25.svg", alt="Texto que describa la imagen")
              .col-lg-10
                h4 Colección SENA / Repositorio
                p.mb-3 Memoria documental académica e institucional del SENA, Abarca contenidos entre revistas, libros, cartillas, fotografías, videos, audios, y muchos más disponibles para su consulta.
          .tarjeta.color-claro.p-5(titulo="Portal de revista")
            .row
              .col-lg-2
                img(src="@/assets/curso/img26.svg", alt="Texto que describa la imagen")
              .col-lg-10
                h4 Portal de revista
                p.mb-3 En este portal encuentras revistas académicas y científicas del SENA, editadas y producidas desde 2010 a la fecha.
        .cajon.color-acento-botones.color--botones-claro.p-4.mb-4
          p 
            b Así mismo en Google académico se pueden encontrar las últimas publicaciones de artículos 
            |relacionados con el tema de búsqueda de su interés.     
          .col-lg-6
                a.anexo.mb-4.mb-lg-0(href="https://scholar.google.es/schhp?hl=es" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p 
                      b Enlace web. 
                      |Google Académico
    #t_3_3.titulo-segundo
      h2 3.3  Informe de investigación
    .bloque-texto-g.color--botones-claro.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/img27.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El informe de investigación es el documento donde se registra el resultado final del proyecto, 
          b lo componen, un título, resumen, introducción, marco teórico, justificación, objetivos y pregunta de investigación, metodología, resultados, discusiones, conclusiones y referencias bibliográficas. 
          |Una vez se elabora el informe se renueva el ciclo investigativo, con una nueva pregunta problematizadora que permita continuar profundizando en 
          b el tema desarrollado, o un nuevo tema de interés para el investigador.




















</template>

<script>
export default {
  name: 'Tema3',
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
