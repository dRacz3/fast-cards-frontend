<template>
  <div class="home">
    <RegisterLogin msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterLogin from "@/components/RegisterLogin.vue";

export default {
  name: "Home",
  components: {
    RegisterLogin
  }
};
</script>
