$(function () {
  function addPostRow(data) {
    $("body").append(
      $(`<p id="row-${data.id}">`).append(
        $("<span>").text('(delete)').on('click', () => deletePost(data.id)),
        $("<span>").text(
          `Post created with id ${data.id}, title: ${data.title}, author: ${data.author}`
        )
      )
    );
  }

  function deletePost(id) {
    $.ajax({
      url: `http://localhost:3000/posts/${id}`,
      type: "DELETE",
    })
    .done(function () {
      $(`#row-${id}`).remove();
    })
    .catch(function (error) {
      $('form').append(
        $('<p>').text('Post was not deleted')
      )
      console.log(error);
    })
  }

  function sendForm(e) {
    e.preventDefault();
    $("form").after($("<p>").text("About to send the query to the API"));
    const data = {
      author: $("input#author").val(),
      title: $("input#title").val(),
    };
    $.post("http://localhost:3000/posts", data)
      .done(function (data) {
        addPostRow(data);
      })
      .catch(function (error) {
        $("form p").text("Error sending the POST query");
      });
  }

  function buildForm() {
    $("body").append(
      $("<form>").append(
        $("<div>").append(
          $('<label for="author">').text("Author"),
          $('<input type="text" id="author" name="author">')
        ),
        $("<div>").append(
          $('<label for="title">').text("Title"),
          $('<input type="text" id="title" name="title">')
        ),
        $('<input type="submit">').on("click", sendForm)
      )
    );
  }

  function listPosts() {
    $.get("http://localhost:3000/posts")
      .done(function (data) {
        data.forEach(addPostRow);
      })
      .catch(function (error) {
        console.log(error);
        $("body").append("<p>").text("Server Error");
      });
  }

  listPosts();
  buildForm();
});
