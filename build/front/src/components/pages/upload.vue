<template>
  <div class="p-fluid sa-ly-width">
    <div class="p-field p-m-4">
      <span class="p-float-label">
        <InputText id="inputtext" v-model="scenario.scenarioName" type="text" />
        <label for="inputtext">シナリオ名</label>
      </span>
    </div>
    <div class="p-field p-m-4">
      <span class="p-float-label">
        <Textarea
          id="textarea"
          v-model="scenario.description"
          :auto-resize="true"
          class="sa-co-width"
        />
        <label for="textarea">シナリオの説明</label>
      </span>
    </div>
    <div class="p-field p-m-4 p-text-left">
      <FileUpload
        name="scenarioImage"
        choose-label="公開情報"
        :multiple="true"
        accept="image/*"
        :max-file-size="10000000"
        :show-upload-button="false"
        :show-cancel-button="false"
        :file-limit="1"
        :preview-width="200"
        @select="imageSelected"
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
        :multiple="true"
        accept=".zip"
        :max-file-size="10000000"
        :show-upload-button="false"
        :show-cancel-button="false"
        :file-limit="1"
        :preview-width="200"
        @select="zipSelected"
      >
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
    </div>
    <div class="p-grid p-jc-end">
      <div class="p-col-2">
        <div class="box">
          <Button label="投稿" @click="upload" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, inject, reactive } from "vue";
import * as authType from "/@/auth";
import * as scenarioApi from "/@/api/scenario";
import client from "/@/api/client";

const fileToDataURL = (f: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      if (!reader || !reader.result) {
        return reject("read failed");
      }
      resolve(reader.result.toString());
    };

    reader.readAsDataURL(f);
  });

export default defineComponent({
  name: "Upload",
  components: {},
  props: {},
  setup: () => {
    const auth = inject<authType.AuthPlugin>("$auth");
    const author = auth?.user?.value?.sub || "";
    const scenario = reactive({
      scenarioName: "",
      description: "",
      senarioImage: "",
      author,
    });
    const file = ref<File | null>(null);
    const imageSelected = async (e: {
      originalEvent: Event;
      files: File[];
    }) => {
      if (!e.files.length) return;
      scenario.senarioImage = await fileToDataURL(e.files[0]);
    };
    const zipSelected = async (e: { originalEvent: Event; files: File[] }) => {
      if (!e.files.length) return;
      file.value = e.files[0];
    };
    const upload = async () => {
      console.log("upload start", scenario);
      if (!file.value) {
        alert("シナリオのzipは必須です");
        return;
      }
      const scenarioId = await scenarioApi.postScenario(client, scenario);
      const zipBinary = await scenarioApi.postScenarioZip(
        client,
        scenarioId,
        file.value,
      );
      console.log(
        `upload end -> scenarioId: ${scenarioId}, zipBinary: ${zipBinary}`,
      );
    };
    return {
      scenario,
      imageSelected,
      zipSelected,
      upload,
    };
  },
});
</script>

<style scoped>
.sa-ly-width {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.sa-co-width {
  width: 100%;
}
</style>
