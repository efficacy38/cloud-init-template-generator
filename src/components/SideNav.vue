<script setup>
import configs from "./cloud-config.js"
console.log(configs)
</script>

<script>
export default {
  data() {
    return {
      supported_setion: configs,
    }
  }
} 
</script>

<template>
  <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
    <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
    <nav class="small" id="toc">
      <ul class="list-unstyled" v-for="(sub_types, type) in supported_setion">
        <li class="my-2">
          <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false"
            :data-bs-target="'#' + type" :aria-controls="type">{{ type }}</button>
          <ul class="list-unstyled ps-3 collapse" :id="type">
            <li v-for="sub_type in sub_types">
              <a class="d-inline-flex align-items-center rounded" :href="'#' + sub_type">{{ sub_type }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bd-aside {
  scroll-margin-top: 4rem;

  a {
    padding: .1875rem .5rem;
    margin-top: .125rem;
    margin-left: .3125rem;
    color: rgba(0, 0, 0, .65);
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: rgba(0, 0, 0, .85);
    background-color: rgba(121, 82, 179, .1);
  }

  .active {
    font-weight: 600;
    color: rgba(0, 0, 0, .85);
  }

  .btn {
    padding: .25rem .5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, .65);
    border: 0;
  }

  .btn:hover,
  .btn:focus {
    color: rgba(0, 0, 0, .85);
    background-color: rgba(121, 82, 179, .1);
  }

  .btn:focus {
    box-shadow: 0 0 0 1px rgba(121, 82, 179, .7);
  }

  .btn::before {
    width: 1.25em;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform .35s ease;

    /* rtl:raw:
  transform: rotate(180deg) translateX(-2px);
  */
    transform-origin: .5em 50%;
  }

  .btn[aria-expanded="true"]::before {
    transform: rotate(90deg)
      /* rtl:ignore */
    ;
  }
}
</style>
