<template>
  <div class="card">
    <button v-on:click.prevent="clickButton" v-if="addWish">Add +</button>

    <form v-if="!addWish" v-on:submit.prevent="checkForm">
      <input class="header" type="text" placeholder="Header" v-model="header"/><br />
      <textarea class="message" type="textarea" placeholder="Message" v-model="message"/><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  setup() {},
  created() {
    console.log("Preview started");
  },
  data() {
    return {
      header:'',
      message:'',
      addWish: true,
    };
  },
  methods: {
    clickButton() {
      console.log(this.addWish);
      this.addWish = false;
    },
    checkForm: function () {
        console.log(this.header);
        console.log(this.message);
        let currentDate = new Date().toLocaleString();
        let wishData = {
          header: this.header,
          message: this.message,
          date: currentDate
        }
        this.addActionWish(wishData)
        this.header = '';
        this.message = '';
        this.addWish = true;
    },
    ...mapActions([
        'addActionWish'
    ]
    )
  },
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 180px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font-size: 25px;
  color: darkslategrey;
}
.message {
    height: 100px;
    width: 150px;
}
.header {
    width: 150px;
    height: 20px;
}
/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>