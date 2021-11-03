let hamburgerMenuTag = document.getElementsByClassName("hamburgerMenu")[0];
let line1 = document.getElementsByClassName("line1")[0];
let line2 = document.getElementsByClassName("line2")[0];
let line3 = document.getElementsByClassName("line3")[0];
let overlayMenu = document.getElementsByClassName("overlay")[0];
let content = document.getElementsByClassName("content")[0];
let menuList = document.getElementsByClassName("menuList")[0];

hamburgerMenuTag.addEventListener("click", () => {
  if (!hamburgerMenuTag.classList.contains("isOpened")) {
    line2.classList.add("hideLine");
    line1.classList.add("rotate1");
    line3.classList.add("rotate3");
    hamburgerMenuTag.classList.add("isOpened");
    overlayMenu.classList.add("showOverlayMenu");
    menuList.classList.add("uptoTop");
  } else {
    line2.classList.remove("hideLine");
    line1.classList.remove("rotate1");
    line3.classList.remove("rotate3");
    hamburgerMenuTag.classList.remove("isOpened");
    overlayMenu.classList.remove("showOverlayMenu");
    menuList.classList.remove("uptoTop");
  }
});
