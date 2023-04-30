<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="navbar top-nav navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Cloud-init template generator</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <li class="nav-item"> -->
          <!--   <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <!-- </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scope>
.top-nav {
  background-color: #FF4500;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.15)
}
</style>
