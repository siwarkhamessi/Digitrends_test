<template>
  <div class="container p-5">
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
      <button class="btn btn-primary" @click="addNote">Ajouter note</button>
    </div>
    <div v-if="successMessage" class="alert alert-success mt-3">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {
        titre: null,
        contenu: null,
      },
      successMessage: null,
    };
  },
  methods: {
    addNote() {
      let data = JSON.parse(localStorage.getItem("notes")) || [];
      let id = data.length === 0 ? 1 : data[data.length - 1].id + 1;

      let newNote = {
        id: id,
        titre: this.note.titre,
        contenu: this.note.contenu,
      };

      data.push(newNote);
      localStorage.setItem("notes", JSON.stringify(data));

      this.note.titre = null;
      this.note.contenu = null;

      this.successMessage = "Note ajoutée avec succès !";
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    },
  },
};
</script>

<style></style>
