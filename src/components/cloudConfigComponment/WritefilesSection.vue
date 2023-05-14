<template>
  <div class="row mb-2">
    <h5>file {{ editIdx }}</h5>
    <div class="col col-md-6">
      <div class="mb-3">
        <label class="form-label">owner/group</label>
        <input type="text" class="form-control" placeholder="ubuntu/wheel"
          v-model="cloudConfig.writefiles[editIdx].owner">

        <label class="form-label">path</label>
        <input type="text" class="form-control" placeholder="/etc/samba/smb.conf"
          v-model="cloudConfig.writefiles[editIdx].path">

        <label class="form-label">permission</label>
        <input type="text" class="form-control" placeholder="0600" v-model="cloudConfig.writefiles[editIdx].permission">
      </div>
    </div>
    <div class="col col-md-6">
      <div class="h-100 d-flex flex-column">
        <label class="form-label">Content</label>
        <textarea class="form-control d-flex flex-1 flex-grow-1" placeholder="#!/bin/bash"
          v-model="cloudConfig.writefiles[editIdx].content"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<script>
export default {
  props: ['attrName', 'cloudConfig', 'editIdx'],
  methods: {

  },
  mounted() {
    console.log(this.attrName, this.cloudConfig, this.editIdx)
  }
}
</script>

<style lang="scss" scoped></style>
