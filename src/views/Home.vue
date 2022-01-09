<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TheGraph />
  </div>
</template>

<script>
import TheGraph from "@/components/TheGraph.vue";

export default {
  name: "Home",
  components: {
    TheGraph,
  },
};
</script>
