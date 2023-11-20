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

  function addNewMember(firstName, lastName, position) {
    if (position === "before") {
      $("tbody").prepend(
        $("<tr>").append(
          $("<td>").text(firstName),
          $("<td>").text(lastName),
          $("<td>")
            .text("(x)")
            .css({ "background-color": "orange", cursor: "pointer" })
            .on("click", function () {
              $(this).parent().remove();
            })
        )
      );
      return;
    }
    $("tbody").append(
      $("<tr>").append(
        $("<td>").text(firstName),
        $("<td>").text(lastName),
        $("<td>")
          .text("(x)")
          .css({ "background-color": "orange", cursor: "pointer" })
          .on("click", function () {
            $(this).parent().remove();
          })
      )
    );
  }

  function createForm() {
    $("table").before(
      $("<form>").prepend(
        $('<input type="text" id="firstName">'),
        $('<input type="text" id="lastName">'),
        $('<select name="options" id="name-select">').append(
          $('<option value="before">').text("Before"),
          $('<option value="after">').text("After")
        ),
        $('<input type="submit" id="submit">').on(
          "click",
          function (e) {
            e.preventDefault();
            addNewMember(
              $('input[type="text"]').first().val(),
              $('input[type="text"]:nth-of-type(2)').val(),
              $("#name-select").val()
            );
          }
        )
      )
    );
  }

  createFamilyTree();
  createForm();
});
