$(function () {
  function addPostRow(data) {
    $('body').append(
      $('<p>').append(
        $('<span>').text(`Post created with id ${data.id}, title: ${data.title}, author: ${data.author}`)
      )
    )
  }

  function listPosts() {
    $.get('http://localhost:3000/posts')
    .done(function (data) {
      console.log(data);
      data.forEach(addPostRow);
    })
    .catch(function (error) {
      console.log(error);
      $('body').append('<p>').text('Server Error');
    })
  }

  listPosts();
});
