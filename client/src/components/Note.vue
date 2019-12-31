<template>
  <div class="note">
    <div class="row">
      <div class="col-md-9">
        <h1 class="text-white d-flex justify-content-start mt-5 ml-5 noteClass">
          <strong class="text-success">Bug Notes:</strong>
          <button class="btn btn-light text-dark ml-5 btn-lg">Add Note</button>
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