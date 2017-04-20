<template lang="pug">
.project-div
  img.project-logo(:src='img')
  .links
    a.demo(v-if='demo', :href='docs') Demo
    a.paper(v-if='paper', :href='docs') Paper
    a.docs(v-if='docs', :href='docs') Docs
    a.source(v-if='source', :href='source') Source
  p
    slot(name='summary')
</template>

<script>
export default {
  props: {
    img: null,
    source: null,
    docs: null,
    demo: null,
    paper: null
  }
}
</script>

<style scoped>

.project-div {
  margin: 30px auto;
  width: 450px;
  max-width: 90%;
}

img.project-logo {
    display: block;
    margin: 0 auto;
    max-width: 90%;
    max-height: 70px;
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

</style>
