<template>
<div class="preview">
    <h2>Oz-Box</h2>
    <ul>
        <li v-for="item in items" :key="item.date">
            <card
              v-bind:header="item.header"
              v-bind:message="item.message"
              v-bind:footer="item.date" 
            />
        </li>

        <li>
            <add-card-button />
        </li>
    </ul>
</div>
    
</template>


<script>
import Card from './Card.vue';
import AddCardButton from './AddCardButton.vue';

export default ({
    setup() {
    },
    components: {
        Card,
        AddCardButton
    },
    created() {
        console.log("Preview started");
    },
    props: {
        items: Array,
    }
})
</script>


<style scoped>
  li {
    list-style: none;
    float: left;
    margin: 20px;
  }
</style>