var lastClickTime = 0;

function handleRowDoubleClick(row) {
    var currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
        var selected = row.cells[0].innerHTML;
        var currentURL = window.location.href;
        currentURL = currentURL.replace("table.html", "");
        var newUrl = currentURL + selected;
        window.location.href = newUrl
    }
    lastClickTime = currentTime;
}

document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll("tr");
    
    rows.forEach(function(row) {
        row.addEventListener("click", function() {
            // Remover la clase 'selected-row' de todas las filas
            rows.forEach(function(row) {
                row.classList.remove("selected-row");
            });
            
            // Agregar la clase 'selected-row' a la fila clicada
            this.classList.add("selected-row");
        });
    });
});