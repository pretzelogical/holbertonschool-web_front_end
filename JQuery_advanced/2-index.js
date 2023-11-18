$(function () {
    const htmlData = "<table><thead><tr><th>Firstname</th><th>Lastname</th></tr></thead><tbody><tr><td>Guillame</td><td>Salva</td></tr><tr><td>Paulette</td><td>Salva</td></tr><tr><td>Antione</td><td>Salva</td></tr></tbody></table>";
    function createFamilyTree() {
       $('body').append($(htmlData));
    }
    createFamilyTree();
})
