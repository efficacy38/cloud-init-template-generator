<template>
  <div class="row align-items-stretch h-100 vw-100">
    <div class="col-10 bg-white">

      <div class="row">
        <div class="col-3">
          <button class="btn btn-primary m-2">add a temlapte</button>
        </div>
        <div class="mt-2 col-9">
          <h2 class="">Current View/Edited Template</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="m-2 p-2 card shadow left-side">
            <h4 class="pb-2 border-bottom">Saved templates</h4>
          </div>
        </div>
        <div class="col-9">
          <div class="m-2 p-2 card shadow left-side">
            <CloudConfigSection @toggle-display="toggleDisplay" :display-type="displayType" />
          </div>
        </div>

      </div>
    </div>

    <div class="col-2 h-100">
      <div style="position: sticky; top: 0">
        <SideNav />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNav from "../components/SideNav.vue"
import CloudConfigSection from "../components/CloudConfigSection.vue";
import { DisplayEnum } from "../enums.js";
</script>

<script>
export default {
  data() {
    return {
      displayType: DisplayEnum.GRAPHICAL,
      editType: 0
    }
  },
  methods: {
    toggleDisplay() {
      if (this.displayType === DisplayEnum.GRAPHICAL)
        this.displayType = DisplayEnum.YAML;
      else
        this.displayType = DisplayEnum.GRAPHICAL;
    }
  }
}
</script>
