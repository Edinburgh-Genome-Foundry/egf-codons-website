<template lang='pug'>
footer
  .container
  p.center
    img(src='/static/imgs/logos/egf-codon-horizontal.png' width=190)
    br
    | © Edinburgh Genome Foundry, 2018 <br/>
    | The EGF is supported by the Research Councils UK and University of Edinburgh
</template>

<style scoped>
footer {
  width: 95%;
  max-width: 400px;
  margin: 2em auto;
  height: 40px;
  margin-bottom: 1em;
  padding-bottom: 1em;
  color: #999999;
  text-align: center;
}

img {
  filter: grayscale(100%);
  opacity: 0.6;
}

</style>
