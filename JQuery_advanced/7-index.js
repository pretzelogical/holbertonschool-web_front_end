$(function () {
  function createSearchForm() {
    $("body").append($('<form id="search-form">').append(
      $('<input type="text">'),
      $('<input type="submit">').on('click', function (e) {
        e.preventDefault();
        queryWikipedia($('input[type="text"]').val())
      }),
      $('<ul id="article">'),
      $('<ul id="pagination">')
    ))
  }

  function addNewArticle(id, title, snippet) {
    $("ul").append(
      $("<li>").append(
        $("<p>").append(
          $("<span>").text(`${id} - `),
          $("<b>").text(`${title}`)
        ),
        $("<p>").html(`${snippet}`)
      )
    )
  }

  function queryWikipedia(search) {
  // Create ajax query
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: "query",
        list: "search",
        srsearch: search,
        format: "json",
        origin: "*"
      },
      dataType: "json"
    }).done(function (data) {
      $('ul#article').empty();
      const articles = data.query.search;
      articles.forEach(function (article) {
        addNewArticle(article.pageid, article.title, article.snippet);
      })
    }).catch(function (error) {
      console.log(error);
    })
  }

  createSearchForm();
});
