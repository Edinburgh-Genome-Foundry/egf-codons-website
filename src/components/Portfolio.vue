<template lang='pug'>
div
  img.title-logo(src='/static/imgs/logos/egf-codon.svg')
  h1 Software Porfolio of the <br /> Edinburgh Genome Foundry

  .category Design
  hr

  project(img='/static/imgs/logos/dnacauldron.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to simplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.

  project(img='/static/imgs/logos/dnachisel.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.
  project(img='/static/imgs/logos/goldenhinges.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.

  .category Manufacturing
  hr
  project(img='/static/imgs/logos/plateo.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.

  project(img='/static/imgs/logos/dnaweaver.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.

  project(img='/static/imgs/logos/bandwitch.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.
  .category Interfaces
  hr
  project(img='/static/imgs/logos/cab.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.

  project(img='/static/imgs/logos/flametree.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')

  .category Miscellaneous
  hr
  project(img='/static/imgs/logos/flametree.png',
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          docs='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          demo='https://github.com/Edinburgh-Genome-Foundry/Flametree',
          paper='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.

  project(img='/static/imgs/logos/bioprinter.png',
          docs='http://edinburgh-genome-foundry.github.io/bioprinter/',
          source='https://github.com/Edinburgh-Genome-Foundry/bioprinter')
   div(slot='summary').
      Python library to dsimplify file operations. Largely used at the
      EGF for the creation of zip archives in memory on web servers.
</template>

<script>
import project from './ProjectCard'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {project}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-logo {
    width: 200px;
    margin-bottom: 30px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.category {
    font-size: 25px;
    margin-top: 50px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
}

hr {
  border: 0;
  height: 1px;
  width:600px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)); }
</style>
