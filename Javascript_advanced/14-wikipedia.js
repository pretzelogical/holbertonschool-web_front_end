function createElement(data) {
    const para = document.createElement("p");
    para.textContent = data;
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = xhr.responseText;
                // Process the response here
                console.log(response);
                createElement(response['extract']);
            } else {
                console.error('Error: ' + xhr.status);
            }
        }
    };

    xhr.send();

}

queryWikipedia();
