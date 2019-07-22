function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

       var divs = document.getElementById("colors");
    for (i = 0; i < colors.length; i++) {
        var oneDiv = document.createElement("div");
        oneDiv.className = "choice";
        oneDiv.style.backgroundColor = colors[i];
        oneDiv.addEventListener("click", oneDivClicked);
        divs.appendChild(oneDiv);
    }
}

function oneDivClicked() {
    var color = this.style.backgroundColor;
    var sel = document.getElementById("selected");
    sel.style.backgroundColor = color;
    sel.innerHTML = color;
}


window.onload = function () {
    initGrid();
}
