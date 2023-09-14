<template>
  <div class="container text-center">
    <input
      class="form-control mr-sm-2 flex-grow-0 mt-5"
      type="search"
      placeholder="Search note"
      aria-label="Search"
      v-model="searchQuery"
    />
    <div class="row row-custom">
      <NoteItem
        v-for="note in selectedNotes.slice().reverse()"
        :key="note.id"
        :note="note"
        @reload="initialize()"
      />
    </div>
  </div>
</template>
<script lang="ts">
import NotesMock from "../json/notes_mock.json";
import { defineComponent } from "vue";
import NoteItem from "@/views/components/NoteItem.vue";

export default defineComponent({
  data() {
    return {
      notes: NotesMock,
      searchQuery: "",
    };
  },
  methods: {
    initialize() {
      let data = JSON.parse(localStorage.getItem("notes"));
      if (!data || data.length === 0) {
        data = this.notes;
        localStorage.setItem("notes", JSON.stringify(data));
      } else {
        this.notes = data;
      }
    },
  },
  components: {
    NoteItem,
  },
  computed: {
    selectedNotes() {
      if (this.searchQuery !== "") {
        const lowerCaseSearchQuery = this.searchQuery.toLowerCase(); // Convert search query to lowercase

        return this.notes.filter((note) =>
          note.titre.toLowerCase().includes(lowerCaseSearchQuery)
        );
      }
      return this.notes;
    },
  },
  created() {
    this.initialize();
  },
});
</script>
<style scoped>
.row-custom {
  gap: 10px;
  justify-content: center;
  padding-top: 25px;
}
</style>
