<template>
  <div class="card" style="width: 18rem">
    <div class="card-body d-grid">
      <h5 class="card-title">{{ note.titre }}</h5>
      <p class="card-text">{{ note.contenu }}</p>
      <div class="mt-auto d-flex justify-content-between">
        <router-link class="nav-link" :to="'/updatenote/' + note.id">
          <a href="#" class="btn btn-success">Update Note</a>
        </router-link>
        <a href="#" class="btn btn-danger" @click="showDeleteModal"
          >Delete Note</a
        >
      </div>
    </div>
  </div>

  <!-- Bootstrap Modal -->
  <div
    class="modal {{showModal ? d-block : ''}}"
    tabindex="-1"
    v-if="showModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm Deletion</h5>
          <button
            type="button"
            class="btn-close"
            @click="hideDeleteModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete this note?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="hideDeleteModal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-danger" @click="deleteNote">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { prop } from "vue-class-component";

export default {
  props: {
    note: {},
    parentData: Boolean,
  },

  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showDeleteModal() {
      this.showModal = true;
    },
    hideDeleteModal() {
      this.showModal = false;
    },
    deleteNote() {
      prop.parentData = true;
      let notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes = notes.filter((n) => n.id !== this.note.id);
      localStorage.setItem("notes", JSON.stringify(notes));

      this.showModal = false;
      this.$emit("reload");
    },
  },
};
</script>

<style></style>
