<template>
  <div class="container p-5" v-if="note.id">
    <div class="form-row">
      <div class="col mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Titre"
          v-model="note.titre"
        />
      </div>
      <div class="col mb-3">
        <textarea
          class="form-control"
          placeholder="Contenu de la note"
          v-model="note.contenu"
        ></textarea>
      </div>
    </div>
    <div class="col">
      <button class="btn btn-primary" @click="updateNote">Update note</button>
    </div>
    <div v-if="successMessage" class="alert alert-success mt-3">
      {{ successMessage }}
    </div>
  </div>
  <div class="alert alert-danger" v-else>Note not found</div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      note: {
        titre: null,
        contenu: null,
      },
      notes: [],
      successMessage: null,
    };
  },
  methods: {
    updateNote() {
      const noteIndex = this.notes.findIndex(
        (note) => note.id === Number(this.id)
      );

      if (noteIndex !== -1) {
        this.notes[noteIndex] = { ...this.note, id: Number(this.id) };
        localStorage.setItem("notes", JSON.stringify(this.notes));
        this.successMessage = "Note updated successfully!";
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      }
    },
    getNote() {
      this.note = this.notes.find((item) => item.id === parseInt(this.id)) || {
        titre: "",
        contenu: "",
      };
    },
    initialize() {
      const storedNotes = JSON.parse(localStorage.getItem("notes"));
      this.notes = Array.isArray(storedNotes) ? storedNotes : [];
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.initialize();
    this.getNote();
  },
};
</script>

<style></style>
