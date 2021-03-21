<template>
<div>
  <div class="hello">
    <p>{{msg}}</p>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
