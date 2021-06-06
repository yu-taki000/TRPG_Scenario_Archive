<template>
  <h1>login</h1>
  testLoginMessage
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  props: {
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>
