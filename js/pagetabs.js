openPage("Page 1");

function openPage(pageNumber) {
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pageNumber).style.display = "block";
}

// function openPage(evnt, pageNumber) {
//     var i, x, tablinks;
//     x = document.getElementsByClassName("page");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < x.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
//     }
//     document.getElementById(pageNumber).style.display = "block";
//     evnt.currentTarget.className += " w3-red";
// }
