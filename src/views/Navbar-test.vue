<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link text-nowrap" to="/">My Notes</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-nowrap" to="/addnote"
          >Add Notes</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class NavbarTest extends Vue {}
</script>
