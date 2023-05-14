<template>
  <div class="editor w-100">
    <div class="line-numbers">
      <span v-for="index in lineCounts" :key="index"></span>
    </div>
    <textarea v-model="data" disabled="true"></textarea>
  </div>
</template>

<script setup>
import yaml from "js-yaml";
</script>
<script>
export default {
  props: ['cloudConfig'],
  data() {
    return {
      contents: "",
    }
  },
  methods: {
  },
  computed: {
    data() {
      return yaml.dump(this.cloudConfig)
    },
    lineCounts() {
      return this.data.split('\n').length;
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  display: inline-flex;
  gap: 10px;
  font-family: monospace;
  line-height: 21px;
  background: #282a3a;
  border-radius: 2px;
  padding: 20px 10px;
}

textarea {
  line-height: 21px;
  overflow-y: hidden;
  padding: 0;
  border: 0;
  background: #282a3a;
  color: #FFF;
  min-width: 500px;
  outline: none;
  resize: none;
  tab-size: 4;
}

.line-numbers {
  width: 20px;
  text-align: right;
}

.line-numbers span {
  counter-increment: linenumber;
}

.line-numbers span::before {
  content: counter(linenumber);
  display: block;
  color: #506882;
}
</style>
