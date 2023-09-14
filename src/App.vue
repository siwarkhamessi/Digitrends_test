<template>
  <NavbarTest />
  <router-view />
</template>
<script>
import NavbarTest from "@/views/Navbar-test.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { NavbarTest },
});
</script>
