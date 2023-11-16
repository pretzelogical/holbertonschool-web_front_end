function createElement(data) {
    const para = document.createElement("p");
    // console.log(data)
    para.textContent = data;
    document.body.append(para);
}

function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = xhr.responseText;
                // Process the response here
                console.log(JSON.parse(response).query.pages['21721040'].extract);
                createElement(JSON.parse(response).query.pages['21721040'].extract);
            } else {
                console.error('Error: ' + xhr.status);
            }
        }
    };

    xhr.send();

}

queryWikipedia();
