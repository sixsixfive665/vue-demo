<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>row one</div>
    <slot name="first" propsValue="子组件的值"></slot>
    <div>row two</div>
    <slot name="second"></slot>
    <div>row three</div>
    <slot name="third"></slot>
    <div>row four</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    XiuxiuXiu () {},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
