<template>
  <div>
    <md-toolbar>
      <h3 class="md-title">Adding cards</h3>
    </md-toolbar>
    <add-white-card></add-white-card>
    <add-black-card></add-black-card>
  </div>
</template>

<script>
import AddWhiteCard from "@/components/CardAdding/AddWhiteCard.vue";
import AddBlackCard from "@/components/CardAdding/AddBlackCard.vue";

export default {
  data: () => ({}),
  components: {
    "add-white-card": AddWhiteCard,
    "add-black-card": AddBlackCard,
  },
};
</script>

<style>
</style>