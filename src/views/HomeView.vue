<script setup>
import SideNav from "../components/SideNav.vue"
import CloudConfigSection from "../components/CloudConfigSection.vue";
</script>

<template>
  <!-- following use grid to handle the layout -->
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
            <CloudConfigSection />
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
