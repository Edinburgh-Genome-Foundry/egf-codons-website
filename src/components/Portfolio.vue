<template lang='pug'>
div
  img.title-logo(src='/static/imgs/logos/egf-codon.svg')
  h1 The Software Suite of the <br /> Edinburgh Genome Foundry

  p.
    The <a target='_blank' href='http://genomefoundry.org/#/'>Genome Foundry</a>
    is an academic facility running a highly automated robotic setup for DNA
    automation. The software team develops computational libraries
    and web applications for DNA Assembly, Lab Automation, and
    Synthetic Biology.
  p
    :markdown-it


      Most of our software is open-source and released
      [on Github](https://github.com/Edinburgh-Genome-Foundry). This page
      gathers some of our projects for [DNA Design](#design),
      [Manufacturing](#manufacturing), [Interfaces](#interfaces), [etc.](#other)


  .category(id='design') Interfaces <hr>

  project(title="EGF CUBA",
          subtitle="Web Collection of Useful Biology Apps",
          img='/static/imgs/logos/cuba.png',
          website='http://cuba.genomefoundry.org')
    div(slot='summary').
      Collection of publicly available one-page applications for DNA assembly
      and synthetic biology: restriction digest design, cloning simulation,
      sequence optimization, and more.


  .category(id='design') Design <hr>



  project(title="DNA CHISEL",
          subtitle="A versatile sequence optimizer",
          img='/static/imgs/logos/dnachisel.png',
          source='https://github.com/Edinburgh-Genome-Foundry/DnaChisel',
          docs='https://edinburgh-genome-foundry.github.io/DnaChisel/index.html',
          demo='http://cuba.genomefoundry.org/#/sculpt-a-sequence')
    div(slot='summary').
      Python library to optimize a sequence's nucleotides with respect to
      constraints and objectives. DNA Chisel allows to provide specifications as
      Genbank features, and to define new constraints or objectives via scripts.

  project(img='/static/imgs/logos/dfv.png',
          title="DNA Features Viewer",
          subtitle="Display DNA features from Genbank etc.",
          source='https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer',
          docs='https://edinburgh-genome-foundry.github.io/DnaFeaturesViewer')
    div(slot='summary').
      Customizable library to produce plots of sequence annotations (e.g. from
      Genbank). Easily customizable to highlight or hide certain features, it
      can produce figures or simple web-based interactive plots.

  project(img='/static/imgs/logos/caravagene.png',
          title="CARAVEGENE",
          subtitle="PDF plots of genetic assemblies"
          source='https://github.com/Edinburgh-Genome-Foundry/Caravagene')
    div(slot='summary').
      Python library for generating PDF reports of DNA assembly plots. The renderer
      uses HTML/CSS, allowing for good esthetics in many scenarios. Allows for
      various annotations and highlighting. Used at the Foundry to communicate
      design ideas with customers.

  project(img='/static/imgs/logos/visual-sbol-css.png',
          title="Visual SBOL CSS",
          subtitle="The super-easy way to plot SBOL constructs in webpages",
          source='https://github.com/Edinburgh-Genome-Foundry/SBOL-Visual-CSS',
          docs='https://edinburgh-genome-foundry.github.io/SBOL-Visual-CSS/',
          demo='https://edinburgh-genome-foundry.github.io/SBOL-Visual-CSS/examples/drag_and_drop_construct_editor.html')
    div(slot='summary').
      CSS library for displaying DNA constructs using the visual SBOL notation.
      Small and self-contained, it can be used in webpages, emails, HTML-based
      PDF reports, etc.


  .category(id='manufacturing', name='manufacturing') Manufacturing <hr>



  project(title="DNA CAULDRON",
          subtitle="A cloning simulator for synthetic biology",
          img='/static/imgs/logos/dnacauldron.png',
          source='https://github.com/Edinburgh-Genome-Foundry/DnaCauldron',
          docs='https://edinburgh-genome-foundry.github.io/DnaCauldron/',
          demo='http://cuba.genomefoundry.org/#/simulate_gg_assemblies')
    div(slot='summary').
      Python library to simulate restriction-based assembly operations
      (Golden Gate, BASIC). Supports simple and combinatorial assemblies, and
      conserves annotations in the final sequence. Also enables the autoselection
      of parts connectors.

  project(img='/static/imgs/logos/plateo.png',
          title="PLATEO",
          subtitle="Parsers and simulations for lab automation"
          source='https://github.com/Edinburgh-Genome-Foundry/Plateo',
          docs='https://edinburgh-genome-foundry.github.io/Plateo/')
    div(slot='summary').
      Plateo is a Python library to implements parsers and file generators to
      interface with many robots for biolab automation. Read microplate
      information (including experimental data) from many file formats, write
      reports, generate and simulate picklists.

  project(img='/static/imgs/logos/geneblocks.png',
          title="GENEBLOCKS",
          subtitle="Find common segments between DNA sequences"
          source='https://github.com/Edinburgh-Genome-Foundry/Geneblocks')
    div(slot='summary').
      Python library for locating which segments are common to a set of sequences.
      Used in various project to optimize BLAST, cloning strategies, or simply
      for making sense of unannotated sequences.

  project(img='/static/imgs/logos/taskpacker.png',
          title="TASKPACKER",
          subtitle="A generic scheduler for Python"
          source='https://github.com/Edinburgh-Genome-Foundry/TaskPacker',
          docs='https://edinburgh-genome-foundry.github.io/Taskpacker/')
    div(slot='summary').
      Python project to model tasks and processes and optimize the schedules of
      repetitive processes in order to predict factory throughputs.

  project(img='/static/imgs/logos/bandwagon.png',
          title="BANDWAGON",
          subtitle="Simulate and display gel simulations",
          source='https://github.com/Edinburgh-Genome-Foundry/Bandwagon',
          docs='https://edinburgh-genome-foundry.github.io/Bandwagon',
          demo='http://cuba.genomefoundry.org/#/predict-digests')
    div(slot='summary').
      Python library to simulate DNA digestion by restriction enzymes and plot
      digestion patterns. Useful for prediciting experimental results or for
      displaying results from digital fragment analyzers.

  .category Misc. libraries <hr>

  project(img='/static/imgs/logos/proglog.png',
          title="Proglog",
          subtitle="A versatile progress logger for Python",
          docs='http://edinburgh-genome-foundry.github.io/proglog/',
          source='https://github.com/Edinburgh-Genome-Foundry/proglog')
   div(slot='summary').
     Proglog is used as a unified progress logger in most computational
     projects of the EGF. It enables to display progress in console error bars,
     HTML error bars for the IPython notebook, or to send progress data to
     distant servers.

  project(img='/static/imgs/logos/flametree.png',
          title="Flametree",
          subtitle="Zip and folder operations made easy",
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to simplify file operations, in particular when zip archives
      are involved. Largely used on the EGF web servers for the creation of zip
      archives <i>in memory</i>.

  project(img='/static/imgs/logos/bioprinter.png',
          title="Bioprinter",
          subtitle="Print pictures using colored micro-organisms !",
          docs='http://edinburgh-genome-foundry.github.io/bioprinter/',
          source='https://github.com/Edinburgh-Genome-Foundry/bioprinter')
   div(slot='summary').

  .category Other Repos <hr>

  p
    :markdown-it
      - [The sources of the EGF website](https://github.com/Edinburgh-Genome-Foundry/egf-website-vue.js). Written using Vue.JS.

      - [Web slides about the EGF](https://github.com/Edinburgh-Genome-Foundry/egf-slides). Come see what we do !

      - [Codon usage tables](https://github.com/Edinburgh-Genome-Foundry/codon-usage-tables). Always practical to have these at hand.

      - [Scripts to download the iGEM database](https://github.com/Edinburgh-Genome-Foundry/igem-registry-downloader). Useful until the iGEM API gets updated.

  //- .category Collaborations <hr>

  myfooter

</template>

<script>
import project from './ProjectCard'
import myfooter from './Footer'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {project, myfooter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-logo {
    width: 200px;
    margin-bottom: 30px;
}

p {
  text-align: left;
}

h1 {
  margin-bottom: 2em;
}
h1, h2 {
  font-weight: normal;
}



a {
  color: #4287b9;
}

.category {
    font-size: 25px;
    margin-top: 100px;
    margin-bottom: 50px;
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
