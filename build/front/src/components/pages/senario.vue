<template>
  <div>
    <DataTable :value="products" responsive-layout="scroll" auto-layout="true">
      <Column field="title" header="シナリオ名" />
      <Column field="auther" header="作者" />
      <!-- TODO 大変そうなので後で <Column field="category" header="イメージ" />  -->
      <Column field="description" header="詳細" />
    </DataTable>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Senario',
  components: {
  },
  props: {
  },
  setup: () => {
    const products = ref([
      {
        title: 'サンプル',
        auther: 'noname',
        description: '詳細',
      },
      {
        title: 'サンプル2',
        auther: '詳細未記入',
      },
    ]);
    return {
      products,
    };
  },
});
</script>

<style scoped>
  .sa-ly-width{
    width: 80%;
    margin-left:auto;
    margin-right:auto;
  }
  .sa-co-width{
    width:100%
  }

</style>
