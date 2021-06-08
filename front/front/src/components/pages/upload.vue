<template>
  <div class="p-fluid sa-ly-width">
    <div class="p-field">
      <span class="p-float-label">
        <InputText
          id="inputtext"
          v-model="value"
          type="text"
        />
        <label for="inputtext">シナリオ名</label>
      </span>
    </div>
    <div class="p-field">
      <span class="p-float-label">
        <Textarea
          id="textarea"
          v-model="value2"
          :autoResize="true"
        />
        <label for="textarea">シナリオの説明</label>
      </span>
    </div>
  </div>
  <div>
    <div class="p-grid">
      <div class="p-col">
        <FileUpload
          name="preInfo"
          chooseLabel="公開情報"
          url="./upload"
          mode="basic"
          accept="image/*"
          :maxFileSize="10000000"
          :fileLimit="1"
        />
      </div>
      <div class="p-col">
        <FileUpload
          name="senarioData"
          chooseLabel="シナリオ(zip)"
          url="./upload"
          mode="basic"
          accept=".zip"
          :maxFileSize="10000000"
          :fileLimit="1"
        />
      </div>
      <div class="p-col">
        <Button label="投稿" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Upload',
  components: {
  },
  props: {
  },
  setup: () => {
    const value = ref('');
    const value2 = ref('');

    return {
      value, value2,
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

</style>
