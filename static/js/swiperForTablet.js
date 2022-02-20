// let breakpoint = window.matchMedia('screen and (max-width:944px)');
// let breakpointMobil = window.matchMedia('(max-width:544px)');
let swiperPrice, swiperMenu, swiperProject, swiperTeam;

const enableSwiper = function () {
    swiperProject = new Swiper('.mySwiperProjects', {
        loop: true,
        slidesPerView: 1.2,
    //   centeredSlides: true,

  // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    })

    swiperTeam = new Swiper('.mySwiperTeam', {
        loop: true,
        slidesPerView: 1.7,
    //   centeredSlides: true,

  // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    })

    swiperPrice = new Swiper('.mySwiperPrice', {
        loop: true,
        slidesPerView: 1.1,
    //   centeredSlides: true,

  // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    })

    swiperMenu = new Swiper('.mySwiperMenu', {
        // Optional parameters
//   direction: 'horyzontal',
        loop: true,
        slidesPerView: 1,
//   centeredSlides: true,

  // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

  // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

  // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
};

enableSwiper();
// const breakpointChecker = function () {
//       if (breakpoint.matches === true) {
//           console.log('work');
//         document.getElementById("price").style.display = "block";
//       }
// };
// const breakpointChecker = function () {
//   if (breakpoint.matches === true) {

//       if (swiperPrice !== undefined) swiperPrice.destroy(true, true);

//       return;

//   } else if (breakpoint.matches === false) {

//       enableSwiper();
//   }

  // if (breakpointMobil.matches === false) {
  //     if (swiperEducation !== undefined) swiperEducation.destroy(true, true);

  //     return;

  // } else if (breakpointMobil.matches === true) {

  //     enableSwiperEducation();
  // }
// };


// breakpoint.addListener(breakpointChecker);
// breakpointMobil.addListener(breakpointChecker);

// breakpointChecker();
