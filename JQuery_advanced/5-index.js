$(function () {
  function createFamilyTree() {
    $("body").append(
      $("<table>").append(
        $("<thead>").append(
          $("<tr>").append(
            $("<th>").text("Firstname"),
            $("<th>").text("Lastname")
          )
        ),
        $("<tbody>")
      )
    );
  }

  function addNewMember(firstName, lastName) {
    $("tbody").append(
      $("<tr>").append(
        $("<td>").text(firstName),
        $("<td>").text(lastName),
        $("<td>").text("(x)")
          .css({ "background-color": "orange", "cursor": "pointer" })
          .on("click", function () {
            $(this).parent().remove();
          })
      )
    );
  }
  createFamilyTree();
  addNewMember("Guillame", "Salva");
  addNewMember("Arielle", "Snizt");
  addNewMember("Fanette", "Snizt");
  addNewMember("Gerard", "Snizt");
  addNewMember("Victor", "Salva");
});
