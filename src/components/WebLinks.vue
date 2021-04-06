<template lang='pug'>
.weblinks-bar
  a.tweet(v-if='tweetMessage', :href='twitterHref' target='blank_') <img src='/static/imgs/icons/twitter.svg'> {{tweetText}}
  a.email(v-if='emailSubject', :href='emailHref')  <img src='/static/imgs/icons/email.svg'> Send feedback
</template>


<script>
export default {
  name: 'web-links',
  props: {
    emailSubject: {default: () => null},
    tweetMessage: {default: () => null},
    tweetUrl: {default: () => ''},
    tweetHashtags: {default: ''},
    tweetText: {default: 'Tweet'}
  },
  data: {
  },
  computed: {
    emailHref: function () {
      return ('mailto:egf-software@ed.ac.uk?' +
              '&body=Hello EGF team !' +
              '&subject=' + this.emailSubject)
    },
    twitterHref: function () {
      return ('https://twitter.com/intent/tweet?' +
              'hashtags=' + this.tweetHashtags +
              '&text=' + this.tweetMessage +
              '&url=' + this.tweetUrl +
              '&via=EdinGenFoundry')
    }
  }
}
</script>

<style lang='scss' scoped>
.weblinks-bar {
  text-align: center;
  margin-top: 2em;
  margin-bottom: 2em;
  a {
    font-size: 1em;
    display: inline-block;
    text-decoration: none;
    color: #888;
    &:not(:first-child) {
      margin-left: 2em;
    }
    &:hover {
      color: black;
      img {
        opacity: 1
      }
    }
  }
  img {
    height: 1.1em;
    margin-bottom: -0.2em;
    margin-right: 0.2em;
    opacity: 0.6
  }
}
</style>
https://twitter.com/intent/tweet?hashtags=demo&original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Hello%20world&tw_p=tweetbutton&url=https%3A%2F%2Fexample.com%2Ffoo&via=twitterdev
