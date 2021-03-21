<template>
  <div class="card">
    <div class="card-header">{{header}}</div>
    <div class="card-body">
        <p>{{message}}</p>
    </div>
    <div class="card-footer">{{footer}}</div>
  </div>
</template>


<script>
export default {
  setup() {},
  created() {
    console.log("Preview started");
  },
  props:{
    header: String,
    message: String,
    footer: String
  }
};
</script>


<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 180px;
  width: 180px;
  text-align: center;
  position: relative;
}
.card-header {
  background: gainsboro;
  text-align: left;
  padding-left: 2%;
}
.card-footer {
  font-size: small;
  text-align: left;
  border-style: groove;
  position: absolute;
  bottom: 0px;
}

.card-body {
  text-align: left;
  font-size: small;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>