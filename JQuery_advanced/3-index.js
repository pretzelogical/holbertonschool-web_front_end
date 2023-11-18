$(function () {
  function createFamilyTree() {
    $("body").append(
      $("<table>").append(

        $("<thead>")
          .append($("<tr>"))
          .append($("<th>").text("Firstname"), $("<th>").text("Lastname")
          ),

        $("<tbody>").append(
          $("<tr>").append($("<td>").text("Guillame"), $("<td>").text("Salva")),
          $("<tr>").append($("<td>").text("Paullette"), $("<td>").text("Salva")),
          $("<tr>").append($("<td>").text("Antoine"), $("<td>").text("Salva")),
        ),

      )
    );
  }
  createFamilyTree();
});
