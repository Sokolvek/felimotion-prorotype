<template>
  <div>
    <div class="block blue">
      <div class="test" felimotion="top"></div>
    </div>
    <div class="block black" felimotion="left"></div>
    <div class="block aqua" felimotion="top"></div>
    <div class="block purple"></div>
    <section>
      <div class="test" felix></div>
    </section>
    <div felix></div>
    <section>
      <div class="test2" felix></div>
    </section>
    <HelloWorld />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
function felimationHandler() {
  const sections = document.querySelectorAll("section");
  const elements = document.querySelectorAll("[felimotion]");
  const animsList = new Map([
    ["top", topAnim],
    ["bottom", bottomAnim],
    ["left", leftAnim],
    ["right", rightAnim],
    ["scale", scaleAnim],
  ]);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const target = entry.target;
      target.style.position = "relative";
      // console.log(JSON.parse(target.getAttribute("felimotion")).anim)

      if (entry.isIntersecting) {
        resetStyle(target);
      } else {
        if (target.getAttribute("felimotion")[0] == "{") {
          animsList.get(JSON.parse(target.getAttribute("felimotion")).anim)(
            target
          );
          console.log("1");
        } else {
          console.log("2");
          animsList.get(target.attributes.felimotion.value)(target);
        }
        console.log("reseted");
      }
    });
  });
  elements.forEach((item) => {
    observer.observe(item);
    if (item.getAttribute("felimotion")[0] == "{") {
      animsList.get(JSON.parse(item.getAttribute("felimotion")).anim)(item);
    } else {
      animsList.get(item.attributes.felimotion.value)(item);
    }
  });

  sections.forEach(section =>{
    const elementsWithAttr = section.querySelectorAll("[felix]")
    console.log(elementsWithAttr) 
  })

  function positionController(el, posDirection) {
    const style = el.style;
    if (posDirection == "top" || posDirection == "bottom") {
      console.log("y");
      style.transform = "translateY(100%)";
    } else {
      console.log("x");
      style.transform = "translateX(100%)";
    }
    // style[posDirection] = "900px";
  }

  function topAnim(el) {
    el.style.transition = "1s ease";
    positionController(el, "top");
  }

  function bottomAnim(el) {
    el.style.transition = "2s";
    positionController(el, "bottom");
  }

  function leftAnim(el) {
    el.style.transition = "2s";
    positionController(el, "left");
  }

  function rightAnim(el) {
    el.style.transition = "1s ease";
    positionController(el, "right");
  }

  function scaleAnim(el) {
    const style = el.style;
    style.transition = "2s";
    style.transform = "scale(0.1)";
  }

  function resetStyle(el) {
    const style = el.style;
    console.log(parseInt(style.left));
    if (parseInt(style.left) > 0) {
      style.left = "0px";
    }
    if (parseInt(style.right) > 0) {
      style.right = "0px";
    }
    if (parseInt(style.bottom) > 0) {
      style.bottom = "0px";
    }
    if (parseInt(style.top) > 0) {
      style.top = "0px";
    }
    style.transform = "scale(1)";
  }
}

onMounted(() => {
  felimationHandler();
  // let el = JSON.parse(document.querySelector("[test]").getAttribute("test"));
  // console.log(el.key1)
});
</script>
<style scoped>
.block {
  height: 100svh;
}

.blue {
  background: blue;
}

.black {
  background: black;
}

.aqua {
  background: aqua;
}

.purple {
  background: purple;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
