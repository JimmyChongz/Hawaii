let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 690) {
        header.style.backgroundColor = "#DEB887";
        header.style.color = "white";
        document.querySelectorAll("header nav ul li a").forEach( e => {
            e.style.color = "white";
        })
    } else {
        header.style = "";
        document.querySelectorAll("header nav ul li a").forEach( e => {
            e.style.color = "#09777D";
        })
    }
})