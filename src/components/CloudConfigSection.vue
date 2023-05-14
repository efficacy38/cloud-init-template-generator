<template>
  <div style="position: sticky; top: 0" class="border-bottom bg-white">
    <button class="btn btn-primary m-2">save this temlapte</button>
    <button class="btn btn-primary m-2" @click="$emit('toggleDisplay')">Edit as {{ displayType === DisplayEnum.GRAPHICAL ?
      "YAML" : "Graphical" }}</button>
    <div>
      {{ cloudConfig.writefiles }}
    </div>
  </div>

  <div v-if="displayType === DisplayEnum.YAML">
    <YamlEditor :cloud-config=cloudConfig />
  </div>

  <div v-if="displayType === DisplayEnum.GRAPHICAL">
    <!-- write file section  -->
    <h3 id="write-files">writefiles</h3>
    <Writefiles v-for="(item, idx) in cloudConfig['writefiles']" attr-name='writefiles' :edit-idx="idx"
      :cloud-config="cloudConfig" />

    <button class="btn btn-primary mt-2 w-100" @click="addConfig('writefiles')"> add writefiles </button>
  </div>
</template>

<script setup>
import { DisplayEnum } from "../enums.js";
import Writefiles from "./cloudConfigComponment/WritefilesSection.vue"
import YamlEditor from "../components/YamlEditor.vue";
import cloudConfigTemplate from './configTemplate.js';
</script>

<script>
export default {
  props: ['displayType'],
  methods: {
    addConfig(attr) {
      this.cloudConfig[attr].push({ ...cloudConfigTemplate[attr] });
      this.editIdx[attr]++;
    }
  },
  data() {
    return {
      editIdx: {
        writefiles: 0
      },
      cloudConfig: {
        writefiles: [cloudConfigTemplate['writefiles']]
      },

    }
  }
}
</script>

<style lang="scss" scoped></style>
