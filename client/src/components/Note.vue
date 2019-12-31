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
            <tr>
              <th scope="row" class="text-dark">Mike DiLulo</th>
              <td
                class="text-dark noteContent"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias necessitatibus, cupiditate explicabo fugit ex nobis quam earum nulla mollitia, consectetur sed. Facilis quaerat vel suscipit sed placeat voluptatem dolores sequi nisi tempora, in eos hic rerum temporibus recusandae veritatis!</td>
              <td class="text-dark dateContent">2019-12-31T01:30:13.101Z</td>
              <td>
                <button class="btn btn-danger">Delete Note</button>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-dark">Mike DiLulo</th>
              <td
                class="text-dark noteContent"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias necessitatibus, cupiditate explicabo fugit ex nobis quam earum nulla mollitia, consectetur sed. Facilis quaerat vel suscipit sed placeat voluptatem dolores sequi nisi tempora, in eos hic rerum temporibus recusandae veritatis!</td>
              <td class="text-dark dateContent">2019-12-31T01:30:13.101Z</td>
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
            <form>
              <div class="form-group">
                <label for="note-reportedBy" class="col-form-label">Reported By:</label>
                <input type="text" class="form-control" id="note-reportedBy" />
              </div>
              <div class="form-group">
                <label for="note-description" class="col-form-label">Note Description:</label>
                <textarea class="form-control" id="note-description"></textarea>
              </div>
              <button type="button" class="btn btn-primary d-flex mr-auto">Create Note</button>
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
  name: "note"
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