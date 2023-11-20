$(function () {
  function createSearchForm() {
    $("body").append($('<form id="search-form">').append(
      $('<input type="text">'),
      $('<input type="submit">').on('click', function (e) {
        e.preventDefault();
        queryWikipedia($('input[type="text"]').val(), 0)
      }),
      $('<ul id="article">'),
      $('<ul id="pagination">').css({
        "list-style": "none",
        "display": "flex"
      })
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

  function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
    $("ul#pagination").empty();
    const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);
    for (let i = 0; i < numberOfPages; i++) {
      $("ul#pagination").append(
        $("<li>").text(`${i + 1}`).css({
          "cursor": "pointer",
          "margin-left": "10px",
          "font-weight": i === currentOffset ? "bold" : "normal"
        }).on("click", function () {
          queryWikipedia($('input[type="text"]').val(), i)
        })
      );
    }
  }

  function queryWikipedia(search, offset = 0) {
  // Create ajax query
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: "query",
        list: "search",
        srsearch: search,
        sroffset: offset,
        format: "json",
        origin: "*"
      },
      dataType: "json"
    }).done(function (data) {
      console.log(data);
      const articles = data.query.search;
      $("ul#article").empty();
      articles.forEach(function (article) {
        addNewArticle(article.pageid, article.title, article.snippet);
        buildPagination(data.query.searchinfo.totalhits, 10, offset);
      })
    }).catch(function (error) {
      console.log(error);
    })
  }

  createSearchForm();
});
