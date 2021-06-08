<template>
  <div class="p-fluid sa-ly-width">
    <div class="p-field p-m-4">
      <span class="p-float-label">
        <InputText
          id="inputtext"
          v-model="value"
          type="text"
        />
        <label for="inputtext">シナリオ名</label>
      </span>
    </div>
    <div class="p-field p-m-4">
      <span class="p-float-label">
        <Textarea
          id="textarea"
          v-model="value2"
          :auto-resize="true"
          class="sa-co-width"
        />
        <label for="textarea">シナリオの説明</label>
      </span>
    </div>
    <div class="p-field p-m-4 p-text-left">
      <FileUpload
        name="demo[]"
        choose-label="公開情報"
        url="./upload.php"
        :multiple="true"
        accept="image/*"
        :max-file-size="10000000"
        :show-upload-button="false"
        :show-cancel-button="false"
        :file-limit="1"
        :preview-width="200"
        @upload="onUpload"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
    </div>
    <div class="p-field p-m-4 p-text-left">
      <FileUpload
        name="senarioData"
        choose-label="シナリオ(zip)"
        url="./upload.php"
        :multiple="true"
        accept=".zip"
        :max-file-size="10000000"
        :show-upload-button="false"
        :show-cancel-button="false"
        :file-limit="1"
        :preview-width="200"
        @upload="onUpload"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
    </div>
    <div class="p-grid p-jc-end">
      <div class="p-col-2">
        <div class="box">
          <Button label="投稿" />
        </div>
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
  .sa-co-width{
    width:100%
  }

</style>
