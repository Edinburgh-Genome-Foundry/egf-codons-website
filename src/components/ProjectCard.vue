<template lang="pug">
.project-div
  
  img.project-logo(:src='img')
  h3.title(v-if='title') {{ title }}
  h4.subtitle(v-if='title') {{ subtitle }}
  //- .gh-button
    //- a.github-button(v-if='githubStars' :href="githubStars" data-show-count="true" aria-label="Star this project on GitHub") Star
  

  .links
    a.website(v-if='website', :href='website', target='_blank') Website
    a.demo(v-if='demo', :href='demo', target='_blank') Demo
    a.paper(v-if='paper', :href='paper', target='_blank') Paper
    a.docs(v-if='docs', :href='docs', target='_blank') Docs
    a.source(v-if='source', :href='source', target='_blank') Source
    span.github-stars(v-if='githubStars')
      iframe(:src="`https://ghbtns.com/github-btn.html?user=${githubStars.user || 'edinburgh-genome-foundry'}&repo=${githubStars.repo}&type=star&count=true&size=small`" frameborder="0" scrolling="0" width="90px" height="30px")
    
  p.summary
    slot(name='summary')
</template>

<script>
export default {
  props: {
    img: null,
    title: null,
    subtitle: null,
    source: null,
    docs: null,
    demo: null,
    paper: null,
    website: null,
    githubStars: null
  }
}
</script>

<style scoped>

.project-div {
  display:block;
  margin: 30px auto 60px;
  width: 450px;
  max-width: 90%;
}

img.project-logo {
    display: block;
    margin: 0 auto;
    max-width: 90%;
    max-height: 100px;
}
.links {
  max-width: 90%;
  margin: 0 auto;
}

.links a {
    display: inline-block;
    height: 20px;
    font-size:16px;
    text-decoration: none;
    color: black;
    text-align: left;
    padding-left: 20px;
    margin-left: 20px;
}
.links a:first-child {
  margin-left: 0;
}

.links a:hover {
  color: #555;
}

h3.title {
  font-size: 28px;
  margin-bottom: 0px;
}

h4.subtitle {
  margin-top: 0;
  font-size: 18px;
}

.summary {
  text-align: justify;
}
a.demo {
    background: url('/static/imgs/icons/demo.svg') no-repeat left;
}
a.paper {
    background: url('/static/imgs/icons/paper.svg') no-repeat left;
}
a.docs {
    background: url('/static/imgs/icons/docs.svg') no-repeat left;
}
a.source {
    background: url(/static/imgs/icons/source.svg) no-repeat left;
}

a.website {
    background: url(/static/imgs/icons/demo.svg) no-repeat left;
}

.github-stars {
  vertical-align: top;
  display: inline-block;
  margin-left: 20px;
  height: 10px;
  /* margin-bottom: -15px; */
  /* position: absolute; */
  /* transform: translate(-50%); */
  /* left: 50%; */
  
  /* margin-top: 5px; */
  /* margin-bottom: 1em; */
  /* text-align: center; */
}

</style>
