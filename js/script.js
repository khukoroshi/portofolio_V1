import { cubicBezier, smoothScroll } from "./script_utils.js";

// daftar section yang perlu dimuat lewat loadHTML
const sections = ["header", "home", "about", "experient", "work", "footer"];
let loaded = new Set();

// easing
const easeInOut = cubicBezier(0, 0.42, 0.58, 1);
const custom = cubicBezier(0.68, -0.55, 0.27, 1.55);

// let toggleTheme; // supaya bisa dipakai lintas section




/** =====================
 * Header (efek scroll + nav aktif + smooth scroll + popup)
 ====================== */
const mainHeader = document.getElementById("main-header");

  // efek scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    mainHeader.classList.add("scrolled");
  } else {
    mainHeader.classList.remove("scrolled");
  }
});

// nav + smooth scroll
const navLinks = mainHeader.querySelectorAll("a[href^='#']");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    const target = document.querySelector(link.getAttribute("href"));
    if (target) smoothScroll(target, 800, custom);
  });
});

// humberger menu
const hamburgerMenu = document.getElementById('hMenu');
const navButtons = document.querySelector('#main-header .btn-head');
if(hamburgerMenu && navButtons){
  hamburgerMenu.addEventListener('change', () => {
    navButtons.classList.toggle('active', hamburgerMenu.checked);
  });
}

// pop-up contact
const btnContact = document.getElementById("btnPopCon");
const pContact = document.getElementById("pop-con");
const btnClose = document.getElementById("btnClosePopCon");
// klik tombol
btnContact.addEventListener("click", () =>{
  pContact.style.display = "flex";
  setTimeout(() => pContact.classList.add("show"), 10);
});
// btnContact.onclick = function(){
// }
btnClose.addEventListener("click", () =>{
  pContact.classList.remove("show");
  setTimeout(() => pContact.style.display = "none", 400);
});
// klik tombol close
// btnClose.onclick = function(){
// }
// klik body pContact
const pFuture = document.getElementById("futurePopUp");
// toggleTheme simpan di variabel global
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () =>{
  pFuture.style.display = "flex";
  setTimeout(() => pFuture.classList.add("show"), 10);
});
window.onclick = function(event){
  if(event.target == pContact){
    pContact.classList.remove("show");
    this.setTimeout(() => pContact.style.display = "none", 400);
  }
  if(event.target == pFuture){
    pFuture.classList.remove("show");
    this.setTimeout(() => pFuture.style.display = "none", 400);
  }
}

/** =====================
 * Home (toggle theme + animasi home)
 ====================== */
// const home = document.querySelector(".home");
// if (home && toggleTheme) {
//   toggleTheme.addEventListener("change", (event) => {
//     document.body.classList.toggle("light-theme", event.target.checked);
//     home.classList.toggle("active");
//   });
// }

/** =====================
 * About (image)
 ====================== */
const imgAbout = document.getElementById('gbr-about');
// imgAbout.preventDefault();




/** =====================
 * Experient (sidebar tab)
 ====================== */
const btnSidebar = document.querySelectorAll(".sidebar ul li");
const tabs = document.querySelectorAll(".tab");

if (btnSidebar.length && tabs.length) {
  btnSidebar.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnSidebar.forEach((b) => b.classList.remove("active"));
      tabs.forEach((tab) => {
        tab.classList.remove("active");
        tab.style.display = "none";
      });

      btn.classList.add("active");

      const target = document.getElementById(btn.dataset.tab);
      if (target) {
        target.style.display = "block";
        setTimeout(() => {
          target.classList.add("active");
        }, 10);
      }
    });
  });
}


// function allReady() {
//   return sections.every((id) => loaded.has(id));
// }

// function setupFeatures() {




//   console.log("✅ Semua fitur sudah siap!");
// }

// // dengarkan event loadHTML
// document.addEventListener("htmlLoaded", (e) => {
//   loaded.add(e.detail);
//   console.log("Loaded:", e.detail);

//   if (allReady()) {
//     setupFeatures();
//   }
// });





// import { cubicBezier, smoothScroll } from "./script_utils.js";

// let toggleTheme; // biar bisa dipakai di home
// // Definisi easing
//   const ease = cubicBezier(0, 0.25, 0.25, 1);
//   const easeIn = cubicBezier(0, 0.42, 1, 1);
//   const easeOut = cubicBezier(0, 0, 0.58, 1);
//   const easeInOut = cubicBezier(0, 0.42, 0.58, 1);
//   const custom = cubicBezier(0.68, -0.55, 0.27, 1.55);

// document.addEventListener("htmlLoaded", (e) => {
//   if (e.detail === "header") {
//     const mainHeader = document.getElementById("main-header");

//     // Efek scroll
//     window.addEventListener("scroll", () => {
//       if(window.scrollY > 50){
//         mainHeader.classList.add("scrolled");
//       }else{
//         mainHeader.classList.remove("scrolled");
//       }
//     });

  
//     // Nav active + smooth scroll
//     const navLinks = mainHeader.querySelectorAll("a[href^='#']");
//     navLinks.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         navLinks.forEach((a) => a.classList.remove("active"));
//         link.classList.add("active");

//         const target = document.querySelector(link.getAttribute("href"));
//         if (target) smoothScroll(target, 800, custom);
//       });
//     });

//     // Simpan toggleTheme
//     toggleTheme = document.getElementById("toggleTheme");
//   }

//   if (e.detail === "home" && toggleTheme) {
//     const home = document.querySelector(".home");
//     toggleTheme.addEventListener("change", (event) => {
//       document.body.classList.toggle("light-theme", event.target.checked);
//       home.classList.toggle("active");
//     });
//   }

//   if (e.detail === "experient") {
//     const btnSidebar = document.querySelectorAll(".sidebar ul li");
//     const tabs = document.querySelectorAll(".tab");

//     btnSidebar.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         btnSidebar.forEach((b) => b.classList.remove("active"));
//         tabs.forEach((tab) => {
//           tab.classList.remove("active");
//           tab.style.display = "none";
//         });

//         btn.classList.add("active");

//         const target = document.getElementById(btn.dataset.tab);
//         target.style.display = "block";

//         setTimeout(() => {
//           target.classList.add("active");
//         }, 10);
//       });
//     });
//   }
// });
