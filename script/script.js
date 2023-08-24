const contant = document.querySelectorAll(".cotant-list");
const level = document.querySelector(".level-list");
const about = document.querySelector(".about-list");

contant[0].onmouseenter = () => {
  about.classList.add("show-list");
  contant[0].onmouseleave = () => {
    about.classList.remove("show-list");
  };
};

const level2Hover = document.querySelector(".level-2");
const levelup = document.querySelector(".level-up");
contant[1].onmouseenter = () => {
  level.classList.add("show-level-list");
  contant[1].onmouseleave = () => {
    level.classList.remove("show-level-list");
  };
  level2Hover.onmouseenter = () => {
    levelup.classList.add("show-level-up");
    level2Hover.onmouseleave = () => {
      levelup.classList.remove("show-level-up");
    };
  };
};

// -------------------hader-----------------

const menu = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    menu.classList.add("menu-width-100");
  } else {
    menu.classList.remove("menu-width-100");
  }
});

// -----------------slide--------------
const next = document.querySelector("#next-slider");
const prive = document.querySelector("#prv-slider");
const commetns = document.querySelectorAll(".comment");

let i = 0;

(function changeMove() {
  for (let d = 0; d < commetns.length; d++) {
    commetns[d].classList.remove("show-block");
  }
  i = (i + 1) % commetns.length;
  commetns[i].classList.add("show-block");
  setTimeout(changeMove, 4000);
})();

next.addEventListener("click", () => {
  slider("next");
});
prive.addEventListener("click", () => {
  slider("prv");
});

function slider(name) {
  for (let d = 0; d < commetns.length; d++) {
    commetns[d].classList.remove("show-block");
  }
  if (name === "next") {
    if (i <= commetns.length) {
      i++;
      if (i >= commetns.length) {
        i = 0;
      }
    }
  } else if (name === "prv") {
    if (i === 0) {
      i = commetns.length - 1;
    } else {
      i--;
    }
  }
  commetns[i].classList.add("show-block");
}
