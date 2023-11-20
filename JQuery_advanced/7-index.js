$(function () {
  function createSearchForm() {
    $("body").append($('<form id="search-form">').append(
      $('<input type="text">'),
      $('<input type="submit">').on('click', function (e) {
        e.preventDefault();
        queryWikipedia($('input[type="text"]').val())
      }),
      $('<ul>')
    ))
  }

  function addNewArticle(id, title, snippet) {
    $("ul").append(
      $("<li>").append(
        $("<p>").append(
          $("<span>").text(`${id} -`),
          $("<b>").text(`${title}`)
        ),
        $("<p>").text(`${snippet}`)
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
        origin: "https://www.mediawiki.org"
      },
      xhrFields: {
        withCredentials: true
      },
      dataType: "json"
    }).done(function (data) {
      console.log(data);
    })

  // const params = new URLSearchParams({
  //   action: "query",
  //   list: "search",
  //   srsearch: search,
  //   format: "json",
  //   origin: "https://www.mediawiki.org"
  // });

  //   const url = `https://en.wikipedia.org/w/api.php?${params}`;
  //   console.log(url);
  //   $.getJSON(url, function(data) {
  //     console.log(data);
  //   })
  }

  createSearchForm();
});
