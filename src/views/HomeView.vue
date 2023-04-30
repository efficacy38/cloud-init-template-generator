<script setup>
import SideNav from "../components/SideNav.vue"
</script>

<template>
  <!-- following use grid to handle the layout -->
  <div class="row align-items-stretch h-100 vw-100">
    <div class="col-10 bg-white">
      <div class="m-3 p-3 card shadow left-side">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit vitae
        accusamus
        dignissimos, minus dolorem ea harum aliquam doloremque temporibus, eveniet rem alias, in placeat perferendis
        ipsam
        corrupti! Quidem, similique.
      </div>
    </div>
    <div class="col-2 h-100">
      <div class="right-side">
        <SideNav />
      </div>
    </div>
  </div>
</template>
