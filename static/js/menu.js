
const links = [...document.getElementsByClassName("menu--link")];

const contents = [...document.getElementsByClassName("menu--content")];
const menuLength = links.length - 1;

let tempLink;

const showMenu = function (index, indexLinks) {
  let menuListblocks = [...document.getElementsByClassName("menu-p")];
  let currentMenuBlocks = [];
  menuListblocks.forEach((e, i) => {
    if (e.getAttribute("data-id") == index) {
      
      currentMenuBlocks.push(e);
    }
  });

  const TLMENU = gsap.timeline();

  TLMENU.fromTo(
    contents[index],
    { autoAlpha: 0, display: "none", x: 2000 },
    {
      autoAlpha: 1,
      display: "grid",
      x: 000,
      duration: 1.5,
      // ease: "elastic.out(0.5, 0.3)",
    }
  ).fromTo(
    currentMenuBlocks,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.5,
    }
  );
  //   .fromTo(links[indexLinks], { scaleX: 1.6 }, {scaleX:1})
};

const hideMenuContent = function () {
  const TLHIDE = gsap.timeline();

  TLHIDE.fromTo(
    contents,
    { autoAlpha: 1, display: "block" },
    { autoAlpha: 0, display: "none", duration: 0.02 }
  );
};

const hideMenuLink = function (index) {
  const TLHIDELINK = gsap.timeline();

  TLHIDELINK.fromTo(
    links[index],
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 2.5 }
  );
};

links.forEach((element, index) => {
  let indexOfContent = Math.abs(index - menuLength);
  let linksPosition = links.indexOf(element);

  if (index === menuLength) {
    contents[0].classList.add("active");
  }

  element.addEventListener("click", function () {
    contents[0].classList.remove("active");

    element.classList.add('menu--link--hide');

    for (let i = 0; i < links.length; i++) {
      if (i != linksPosition) {
        hideMenuContent();
        links[i].classList.remove('menu--link--hide');
      }
      if (i > linksPosition) {
        hideMenuLink(i);
      }
    }

    showMenu(indexOfContent, linksPosition);
  });
});
