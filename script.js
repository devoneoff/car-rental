document.getElementById('main-action').onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

function myFunction(imgs) {
    var expandedImg = document.getElementById('expandedImg');
    var imgText = document.getElementById('imgtext');
    expandedImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandedImg.parentElement.style.display = "block";
}
