<template>
  <div style="position: sticky; top: 0" class="border-bottom bg-white">
    <button class="btn btn-primary m-2">save this temlapte</button>
    <button class="btn btn-primary m-2">Edit as YAML</button>
    <div>
      {{ writefile }}
    </div>
  </div>

  <!-- write file section  -->
  <div class="row">
    <h3 id="write-files">write-files</h3>
    <div class="col col-md-6">
      <div class="mb-3">
        <label class="form-label">owner/group</label>
        <input type="text" class="form-control" placeholder="ubuntu/wheel" v-model="writefile.owner">

        <label class="form-label">path</label>
        <input type="text" class="form-control" placeholder="/etc/samba/smb.conf" v-model="writefile.path">

        <label class="form-label">permission</label>
        <input type="text" class="form-control" placeholder="0600" v-model="writefile.permission">
      </div>
    </div>
    <div class="col col-md-6">
      <label class="form-label">Content</label>
      <textarea class="form-control" placeholder="#!/bin/bash" v-model="writefile.content"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      writefile: {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
