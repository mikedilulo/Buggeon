<template>
  <div class="note">
    <div class="row">
      <div class="col-md-9">
        <h1 class="text-white d-flex justify-content-start mt-5 ml-5 noteClass">
          <strong class="text-success">Bug Notes:</strong>
          <!-- NOTE MODAL BUTTON -->
          <button
            class="btn btn-light text-dark ml-5 btn-lg"
            type="button"
            data-toggle="modal"
            data-target="#noteModal"
          >Add Note</button>
        </h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-md-6">
        <table class="table bg-light">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Reported By:</th>
              <th scope="col">Note Content:</th>
              <th scope="col">Note Created:</th>
              <th scope="col">Delete Note:</th>
            </tr>
          </thead>
          <tbody>
            <tr class="note" v-for="note in note" :key="note.id">
              <th scope="row" class="text-dark">{{note.reportedBy}}</th>
              <td class="text-dark noteContent">{{note.content}}</td>
              <td class="text-dark dateContent">{{note.createdAt}}</td>
              <td>
                <button class="btn btn-danger">Delete Note</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- NOTE THIS IS THE MODAL  -->
    <div
      class="modal fade"
      id="noteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add a Note!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createNote">
              <div class="form-group">
                <label for="note-reportedBy" class="col-form-label d-flex mr-auto">Reported By:</label>
                <input
                  type="text"
                  class="form-control"
                  id="note-reportedBy"
                  v-model="newNote.reportedBy"
                  required
                />
              </div>
              <div class="form-group">
                <label
                  for="note-description"
                  class="col-form-label d-flex mr-auto"
                >Note Description:</label>
                <textarea
                  class="form-control"
                  id="note-description"
                  v-model="newNote.content"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary d-flex mr-auto">Create Note</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "note",
  mounted() {
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  data() {
    return {
      newNote: {
        content: "",
        bug: this.$route.params.id,
        reportedBy: "",
        flagged: "pending"
      }
    };
  },
  methods: {
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        content: "",
        reportedBy: "",
        bug: this.$route.params.id,
        flagged: "pending"
      };
    }
  },
  computed: {
    note() {
      return this.$store.state.note;
    }
  }
};
</script>

<style>
.noteClass {
  margin-left: 200px !important;
  margin-top: 100px !important;
  text-decoration: underline;
}
.noteContent {
  max-width: 500px !important;
}
.dateContent {
  width: 200px !important;
}
</style>