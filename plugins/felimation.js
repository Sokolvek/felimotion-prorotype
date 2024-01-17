import { onUpdated } from "vue";

const animsList = new Map([
  ["top", topAnim],
  ["bottom", bottomAnim],
  ["left", leftAnim],
  ["right", rightAnim],
  ["scale", scaleAnim],
]);

function positionController(el, posDirection) {
  const style = el.style;
  style.position = "relative";
  style[posDirection] = "100%";
}

function topAnim(el) {
  el.style.transition = "2s";
  positionController(el, "top");
}

function bottomAnim(el) {
  el.style.transition = "1s";
  positionController(el, "bottom");
}

function leftAnim(el) {
  el.style.transition = "1s";
  positionController(el, "left");
}

function rightAnim(el) {
  el.style.transition = "1s";
  positionController(el, "right");
}

function scaleAnim(el) {
  const style = el.style;
  style.transition = "2s";
  style.transform = "scale(0.1)";
}

function resetStyle(el) {
  const style = el.style;
  style.left = "0";
  style.right = "0";
  style.top = "0";
  style.bottom = "0";
  style.transform = "scale(1)";
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      resetStyle(target);
      return;
    }
  });
});

export default {
  install: (app) => {
    app.directive("felimation", {
      beforeMount: (el, binding) => {
        console.log(binding.value);
        if (animsList.get(binding.value.anim)) {
          animsList.get(binding.value.anim)(el);
        }
        observer.observe(el);
      },
    });
  },
};
