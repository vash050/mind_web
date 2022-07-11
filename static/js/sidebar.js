let openNavBlock = document.getElementById("openNav");
let closeNavBlock = document.getElementById("closeNav");
let menuHeight = document.getElementById("mySidenav");
let breakpointMobil = window.matchMedia("(max-width:544px)");
const screenHeight = window.screen.height;

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".openNav")) {
      openNav();
    } else if (
      event.target.matches(".closeNav") ||
      !event.target.closest(".sidenav")
    ) {
      closeNav();
    }
  },
  false
);

window.addEventListener("scroll", function () {
  if (pageYOffset > screenHeight) {
    closeNavBlock.click();
  }
});

function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("mySidenav").style.zIndex = "2";
    if (breakpointMobil.matches === true) {
      
      document.getElementById("mySidenav").style.width = "100vw";
    } else {
      document.getElementById("mySidenav").style.width = "50vw";
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.opacity = "0";
    document.getElementById("mySidenav").style.zIndex = "-2";
  }
  