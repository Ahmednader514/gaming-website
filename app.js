var icon = document.querySelector(".icon");
var links = document.querySelector(".links");

icon.addEventListener("click", function() {

    if(links.style.opacity === "1") {
        links.style.opacity = "0";
    } else {
        links.style.opacity = "1";
    }

});

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
e.preventDefault();
fetch(form.action, {
    method : "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
}).then(
    response => response.json()
).then((html) => {
    
    window.open("response.html", "blank");

});
});