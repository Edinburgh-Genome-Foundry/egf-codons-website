# EGF Codons website

Sources of the [EGF Codons website](https://edinburgh-genome-foundry.github.io/) (software portfolio of the Edinburgh Genome Foundry).


## Setup

Make a directory that contains the *[source](https://github.com/Edinburgh-Genome-Foundry/egf-codons-website)* and the *[build](https://github.com/Edinburgh-Genome-Foundry/Edinburgh-Genome-Foundry.github.io)* git repositories. (Alternatively, set up the `dist` directory of *source* as the build repo.)


## Develop

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Deployment

The build command above updates the contents of the `dist` directory. Commit the changes of `dist` into the *build* repo, as described in the setup section above.
