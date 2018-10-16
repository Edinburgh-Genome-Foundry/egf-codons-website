<template lang='pug'>
div
  github-corners(repo="Edinburgh-Genome-Foundry" bg-color='#514ec5')
  img.title-logo(src='/static/imgs/logos/egf-codon.svg')
  h1 The Software Suite of the <br /> Edinburgh Genome Foundry
  weblinks(emailSubject='[EGF-Codons] Feedback on the EGF software'
           tweetMessage='EGF Codons: free software for DNA design, assembly, and more.',
           tweetUrl='https://edinburgh-genome-foundry.github.io/',
           tweetHashtags='synbio, software')

  p.
    The <a target='_blank' href='http://genomefoundry.org/'>Genome Foundry</a>
    is an academic facility running a highly automated robotic setup for DNA
    assembly automation. The software team develops computational libraries
    and web applications for DNA design and assembly, Lab Automation, and more.
    Most of our software is open-source and released
    <a target='_blank' href='https://github.com/Edinburgh-Genome-Foundry'>on Github</a>.

  .alert
    h3 We're hiring !
    p.
      An exciting opportunity for a computational biologist or software
      engineer to take part in cutting edge biotech projects and learn new skills
      in DNA design and synthetic biology automation!
    
    p(style='text-align: center')
      a(href="https://www.vacancies.ed.ac.uk/pls/corehrrecruit/erq_jobspec_version_4.jobspec?p_id=045604") Apply

  .header-links
    h3 Categories
    a(href='#design') Design
    a(href='#build') Build
    a(href='#other') Generic software
    a(href='#collaborations') Collaborations


  .category(id='design') Design <hr>



  project(title="DNA CHISEL",
          subtitle="A versatile sequence optimizer",
          img='/static/imgs/logos/dnachisel.png',
          source='https://github.com/Edinburgh-Genome-Foundry/DnaChisel',
          docs='https://edinburgh-genome-foundry.github.io/DnaChisel/index.html',
          demo='https://cuba.genomefoundry.org/sculpt-a-sequence'
          :githubStars="{repo: 'dnachisel'}"
          )
    div(slot='summary').
      Python library to optimize a sequence's nucleotides with respect to
      constraints and objectives. DNA Chisel allows to provide specifications as
      Genbank features, and to define new constraints or objectives via scripts.

  project(title="Golden Hinges",
          subtitle="Restriction overhang designer",
          img='/static/imgs/logos/goldenhinges.png',
          source='https://github.com/Edinburgh-Genome-Foundry/GoldenHinges',
          docs='https://edinburgh-genome-foundry.github.io/GoldenHinges/index.html',
          demo='https://cuba.genomefoundry.org/design-overhangs')
    div(slot='summary').
      Python library to find collections of compatible overhangs for Type-2S
      restriction-based assembly, or decompose
      a DNA sequence into fragments with compatible overhangs for scar-less
      DNA assembly. Can also suggest minimal edits in the sequence to allow
      such assembly.


  project(img='/static/imgs/logos/dfv.png',
          title="DNA Features Viewer",
          subtitle="Display DNA features from Genbank etc.",
          :githubStars="{repo: 'DnaFeaturesViewer'}",
          source='https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer')
    div(slot='summary').
      Customizable library to produce plots of sequence annotations (e.g. from
      Genbank). Easily customizable to highlight or hide certain features, it
      can produce figures or simple web-based interactive plots.

  project(img='/static/imgs/logos/caravagene.png',
          title="CARAVAGENE",
          subtitle="PDF plots of genetic assemblies"
          source='https://github.com/Edinburgh-Genome-Foundry/Caravagene',
          docs='https://edinburgh-genome-foundry.github.io/Caravagene/',
          demo='https://cuba.genomefoundry.org/sketch_constructs',
          :githubStars="{repo: 'Caravagene'}")
    div(slot='summary').
      Python library for generating PDF reports of DNA assembly plots. The renderer
      uses HTML/CSS, allowing for good esthetics in many scenarios. Allows for
      various annotations and highlighting. Used at the Foundry to communicate
      design ideas with customers.

  project(img='/static/imgs/logos/visual-sbol-css.png',
          title="Visual SBOL CSS",
          subtitle="Super-easy construct plotting for the web",
          source='https://github.com/Edinburgh-Genome-Foundry/SBOL-Visual-CSS',
          docs='https://edinburgh-genome-foundry.github.io/SBOL-Visual-CSS/',
          demo='https://edinburgh-genome-foundry.github.io/SBOL-Visual-CSS/examples/drag_and_drop_construct_editor.html')
    div(slot='summary').
      CSS library for displaying DNA constructs using the visual SBOL notation.
      Small and self-contained, it can be used in webpages, emails, HTML-based
      PDF reports, etc.

  project(img='/static/imgs/logos/crazydoc.png',
          title="CrazyDoc",
          subtitle="Read sequences from .docx files",
          source='https://github.com/Edinburgh-Genome-Foundry/crazydoc',
          :githubStars="{repo: 'crazydoc'}",
          demo='https://cuba.genomefoundry.org/convert_sequence_files')
    div(slot='summary').
      Python library to parse the most common sequence annotation format: the
      colorful Microsoft Word document.

  project(img='/static/imgs/logos/dab.png',
          title="DAB",
          subtitle="Assembly design portal of the EGF",
          source='https://github.com/Edinburgh-Genome-Foundry/dab',
          website='https://dab.genomefoundry.org')
    div(slot='summary').
      EGF Design-And-Build makes it easy to discover the assembly standards
      supported by the EGF (EMMA, MoClo, etc.), understand the options of each
      standard, browse catalog of parts and (soon) domesticate and manage parts.

  project(img='/static/imgs/logos/genedom.png',
          title="Genedom",
          source='https://github.com/Edinburgh-Genome-Foundry/genedom',
          subtitle="Automated parts domestication")
    div(slot='summary').
      Genedom (in development) provides sequence optimizers for different
      assembly standards, routines for batch domestication and PDF reports
      for final verification and traceability.

  project(img='/static/imgs/logos/screepy.png',
          title="Screepy",
          subtitle="Screening out the creepy")
    div(slot='summary').
      Screepy provides a framework to run multiple pathogenicity tests on DNA
      sequences prior to synthesis, and compile the screen results in extensive
      reports for traceability. The code is not public (but you can ask us about it !)

  project(img='/static/imgs/logos/sequenticon.png',
          title="Sequenticon",
          :githubStars="{repo: 'sequenticon'}",
          source='https://github.com/Edinburgh-Genome-Foundry/sequenticon',
          demo='https://cuba.genomefoundry.org/render-sequenticons'
          subtitle="Visual identifiers for DNA sequences")
    div(slot='summary').
      Sequenticon provides #[a(href="https://en.wikipedia.org/wiki/Identicon") identicons]
      for DNA sequences, to quickly check accross project reports whether two mentionned
      genetic parts have exactly the same sequence.


  .category(id='build', name='manufacturing') Build <hr>

  project(title="DNA Cauldron",
          subtitle="A cloning simulator for synthetic biology",
          img='/static/imgs/logos/dnacauldron.png',
          :githubStars="{repo: 'DnaCauldron'}",
          source='https://github.com/Edinburgh-Genome-Foundry/DnaCauldron',
          docs='https://edinburgh-genome-foundry.github.io/DnaCauldron/',
          demo='https://cuba.genomefoundry.org/simulate_gg_assemblies')
    div(slot='summary').
      Python library to simulate restriction-based assembly operations
      (Golden Gate, BASIC). Supports simple and combinatorial assemblies, and
      conserves annotations in the final sequence. Also enables the autoselection
      of parts connectors.

  project(title="DNA Weaver",
          subtitle="A route planner for DNA assembly",
          img='/static/imgs/logos/dnaweaver.png',
          demo='https://dnaweaver.genomefoundry.org',
          source='https://github.com/Edinburgh-Genome-Foundry/DnaWeaver')
    div(slot='summary').
      DNA Weaver computes optimal assembly strategies for long sequences of
      arbitrary DNA. It supports several assembly methods (Golden Gate assembly,
      Type-2S restriction enzymes, etc.) and can compare several sources of DNA
      such as commercial providers or constructs. Most awesome library on this page.

  project(title="BandWitch",
          subtitle="Restriction digests assistant",
          img='/static/imgs/logos/bandwitch.png',
          source='https://github.com/Edinburgh-Genome-Foundry/BandWitch',
          docs='https://edinburgh-genome-foundry.github.io/BandWitch/',
          demo='https://cuba.genomefoundry.org/select_digestions')
    div(slot='summary').
      Python library to automatically select the best enzymes to either validate
      or identify a batch of genetic assemblies. Also provides report generation
      for the validation or identification of assemblies from fragment analyzis
      data

  project(img='/static/imgs/logos/plateo.png',
          title="Plateo",
          subtitle="Parsers and simulators for lab automation"
          source='https://github.com/Edinburgh-Genome-Foundry/Plateo',
          docs='https://edinburgh-genome-foundry.github.io/Plateo/',
          :githubStars="{repo: 'Plateo'}")
    div(slot='summary').
      Plateo is a Python library to implements parsers and file generators to
      interface with many robots for biolab automation. Read microplate
      information (including experimental data) from many file formats, write
      reports, generate and simulate picklists.

  project(img='/static/imgs/logos/primavera.png',
          title="Primavera",
          subtitle="Primer-based verification assistant",
          source='https://github.com/Edinburgh-Genome-Foundry/Primavera',
          :githubStars="{repo: 'primavera'}",
          docs='https://edinburgh-genome-foundry.github.io/Primavera/'
          demo='https://cuba.genomefoundry.org/select_primers')
    div(slot='summary').
      Python library for primer selection and data analysis for assembly
      verification. Primavera can suggest an optimal set of primers to]
      sequence-verify a multi-part construct at all junctions. It can
      also consolidate a batch of sequencing reads into a per-construct report.

  project(img='/static/imgs/logos/geneblocks.png',
          title="Geneblocks",
          subtitle="Find common segments between DNA sequences"
          demo='https://cuba.genomefoundry.org/find-common-blocks'
          source='https://github.com/Edinburgh-Genome-Foundry/Geneblocks')
    div(slot='summary').
      Python library for either locating common segments between a set of sequences,
      or highlighting differences between 2 sequences. Used in various project
      to optimize BLAST, cloning strategies, or simply for making sense of
      unannotated sequences.

  project(img='/static/imgs/logos/bandwagon.png',
          title="BandWagon",
          subtitle="Band patterns plotter and simulator",
          source='https://github.com/Edinburgh-Genome-Foundry/Bandwagon',
          docs='https://edinburgh-genome-foundry.github.io/BandWagon/',
          demo='https://cuba.genomefoundry.org/predict-digestions')
    div(slot='summary').
      Python library to simulate DNA digestion by restriction enzymes and plot
      digestion patterns. Useful for prediciting experimental results or for
      displaying results from digital fragment analyzers.


  project(title="EGF CUBA",
          subtitle="Web Collection of Useful Bio Apps",
          img='/static/imgs/logos/cuba.png',
          source='https://github.com/Edinburgh-Genome-Foundry/CUBA',
          website='https://cuba.genomefoundry.org')
    div(slot='summary').
      Collection of publicly available one-page applications for DNA assembly
      and synthetic biology: restriction digest design, cloning simulation,
      sequence optimization, and more.

  project(img='/static/imgs/logos/smart_ass.png',
          title="Smart Assembly",
          website='https://smartass.genomefoundry.org',
          subtitle="Web apps for Foundry operators")
    div(slot='summary').
      Collection of tailor-made web apps to help the Foundry operators through
      DNA assembly projects: automatic
      picklist generation, enzyme selection, and sequence validation for batches
      of DNA assemblies, communication between computers, parts repository browsing,
      etc. The website is not public (but you can ask us for a demo !).

  project(img='/static/imgs/logos/file_manager.png',
          title="The EGF File Manager",
          subtitle="Because USB sticks are not fun")
    div(slot='summary').
      Server configuration to transmit files between personal computers, web
      applications, and the Foundry's robots, in a traceable and secure way.
      This project is not currently public (ask us about it !).

  project(img='/static/imgs/logos/taskpacker.png',
          title="TaskPacker",
          subtitle="A generic scheduler for Python"
          source='https://github.com/Edinburgh-Genome-Foundry/TaskPacker',
          docs='https://edinburgh-genome-foundry.github.io/Taskpacker/',
          :githubStars="{repo: 'Taskpacker'}")
    div(slot='summary').
      Python project to model tasks and processes and optimize the schedules of
      repetitive processes in order to predict factory throughputs.

  project(img='/static/imgs/logos/saboteurs.png',
          title="Saboteurs",
          subtitle="Indentify faulty genetic parts",
          source='https://github.com/Edinburgh-Genome-Foundry/saboteurs')
    div(slot='summary').
      Simple library to identify genetic parts associated with assembly failure
      (and therefore possibly corrupted) based on statistical evidence.

  project(img='/static/imgs/logos/icebreaker.png',
          title="Icebreaker",
          subtitle="Python interface to JBEI ICE",
          source='https://github.com/Edinburgh-Genome-Foundry/icebreaker',
          docs='https://edinburgh-genome-foundry.github.io/icebreaker')
    div(slot='summary').
      Provides a Python client to manage parts and samples in an instance of the
      #[a(href='https://github.com/JBEI/ice') JBEI ICE] parts repository system.
      Makes it easy to open different sessions under
      different identities, cache results, mass-import or export data, etc.

  .category(id='other') Generic Software <hr>

  project(img='/static/imgs/logos/proglog.png',
          title="Proglog",
          subtitle="A versatile progress logger for Python",
          :githubStars="{repo: 'proglog'}",
          source='https://github.com/Edinburgh-Genome-Foundry/proglog')
   div(slot='summary').
     Proglog is used as a unified progress logger in most computational
     projects of the EGF. It enables to display progress in console error bars,
     HTML error bars for the IPython notebook, or to send progress data to
     distant servers.

  project(img='/static/imgs/logos/flametree.png',
          title="Flametree",
          subtitle="Zip and folder operations made easy",
          :githubStars="{repo: 'Flametree'}",
          source='https://github.com/Edinburgh-Genome-Foundry/Flametree')
    div(slot='summary').
      Python library to simplify file operations, in particular when zip archives
      are involved. Largely used on the EGF web servers for the creation of zip
      archives <i>in memory</i>.

  project(img='/static/imgs/logos/cab.png',
          title="CAB",
          subtitle="A friendly boilerplate for computational apps",
          source='https://github.com/Edinburgh-Genome-Foundry/CAB')
   div(slot='summary').
     CAB provides an easy way to deploy websites where users can fill
     a form and get computational jobs done, and is used accross several EGF
     websites (CUBA, SmartAss. EGF-DAB). Built with VueJS on the frontend, Python/Django
     on the backend, and Docker for integration.

  project(img='/static/imgs/logos/pdf_reports.png',
           title="PDF Reports",
           subtitle="Easy and clean PDF reports generation",
           source='https://github.com/Edinburgh-Genome-Foundry/pdf_reports',
           :githubStars="{repo: 'pdf_reports'}",
           docs='http://edinburgh-genome-foundry.github.io/pdf_reports/')
    div(slot='summary').
      Python module to generate PDF reports using Pug templates, an the
      Semantic UI CSS framework.

  project(img='/static/imgs/logos/bioprinter.png',
          title="BioPrinter",
          subtitle="Print pictures using colored micro-organisms !",
          docs='http://edinburgh-genome-foundry.github.io/bioprinter/',
          source='https://github.com/Edinburgh-Genome-Foundry/bioprinter')
   div(slot='summary').
     Python module to <i>print</i> living art pictures using pigmented yeast or
     bacteria. After an original project by Mike Shen (Boeke Lab).

  project(title="Other Github repositories",
          subtitle="...too small to have a logo")

    div.other-repos(slot='summary')
      :markdown-it

        [EGF software slideshows and other documents](https://github.com/Edinburgh-Genome-Foundry/egf-shared-documents).

        [Web slides about the EGF](https://github.com/Edinburgh-Genome-Foundry/egf-slides)

        [Coder-friendly codon usage tables](https://github.com/Edinburgh-Genome-Foundry/codon-usage-tables).

        [Scripts to download the iGEM database](https://github.com/Edinburgh-Genome-Foundry/igem-registry-downloader).

        [Overhang annealing data for Python (from Potapov 2018)](https://github.com/Edinburgh-Genome-Foundry/tatapov).

  .category(id='collaborations') Collaborations <hr>

  project(img='/static/imgs/logos/leaf_lims.png',
          title="LEAF LIMS",
          subtitle="A LIMS for Synthetic Biology",
          docs='https://leaflims.github.io/',
          source='https://github.com/LeafLIMS/LeafLIMS',
          paper='http://pubs.acs.org/doi/abs/10.1021/acssynbio.7b00212')
    div(slot='summary').
      This Synbio-focused Laboratory information Management System was developed
      by GeneMill (Liverpool) in collaboration with the Earlham Institute and the
      Edinburgh Genome Foundry, who provided initial input and testing.

  project(img='/static/imgs/logos/genetic_constructor.png',
         title="Autodesk Genetic Constructor",
         subtitle="A web-based toolkit for synthetic biology",
         website='https://geneticconstructor.lifesciences.autodesk.com/',
         paper='http://pubs.acs.org/doi/full/10.1021/acssynbio.7b00236')
    div(slot='summary').
      This sequence designer with modern features such as nested constructs,
      templates, and the possibility to browse external part repositories, was started in 2015 as a
      collaboration between Autodesk and the EGF. We provided initial input in
      specifications, software design, and a web API to order directly
      from the EGF via Genetic Constructor.

  myfooter
</template>

<script>
import project from './ProjectCard'
import myfooter from './Footer'
import weblinks from './WebLinks'

export default {
  name: 'hello',
  data () {
  },
  components: {project, myfooter, weblinks}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.title-logo {
    width: 200px;
    margin-bottom: 30px;
}
.header-links {
  margin-top: 2em;
  margin-bottom: 3em;
  h3 {
    margin-bottom: 2em
  }

  a {
    text-align: center;
    color: grey;
    text-decoration: none;
    font-size: 1.1em;
    padding-top: -2em;
    margin-left: 4%;
    margin-right: 4%;
    &:hover { color: black}
  }
}

p {
  text-align: left;
}

h1 {

}
h1, h2 {
  font-weight: normal;
}



a {
  color: #4542be;
  text-decoration: none;
  font-weight: 700;

}
.other-repos p {
    text-align: center;
}
.other-repos p a {
  color: black;
  font-weight: normal;
  text-decoration: none;
  padding-left: 1.2em;
    background: url('/static/imgs/icons/source.svg') no-repeat left;
}

.other-repos p a:hover {
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
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.alert {
  // border: 5px solid #e9e6fa;
  // background: #fdfdff;
  padding: 1.5em;
  border-radius: 0.2em;
  h3 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
  }
  margin: 3em;
  box-shadow: 0 1px 6px rgba(45, 47, 53, 0.16), 0 3px 6px rgba(66, 66, 104, 0.23);
}
</style>
