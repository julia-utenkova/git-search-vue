<template>
    <a :href="result.html_url" class="item-wrapper">
        <div class="item-heading">
            <h1>{{ result.name }}</h1>
            <span>{{ result.updated_at }}</span>
        </div>
        <hr>
        <div class="item-info">
            <p>{{ result.description }}</p>
        </div>
    </a>
</template>
<script>
export default {
  props: ['result'],
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .item {
    &-wrapper {
         display: inline-block;
         width: 100%;
         background: rgb(249, 249, 249);
         padding: 14px;
         margin-bottom: 23px;

         color: black;

    &:hover {
         text-decoration: none;
         color: black;
         background: rgb(239, 239, 239);
     }

    hr {
        margin-top: 8px;
        margin-bottom: 8px;
    }
    }

    &-heading {
    h1 {
        font-size: 24px;
        margin: 0;
    }

    span {
        font-size: 13px;
        color: grey;
    }
    }
    }
</style>
