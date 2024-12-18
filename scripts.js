let divdes = document.querySelector(".img1");
let button = document.querySelector(".button");
let animation = document.querySelector(".animation");
button.addEventListener("click", () => {
  setTimeout(() => {
    divdes.classList.add("animation");
  }, 10);
  divdes.classList.remove("animation");
  let randomNr = Math.floor(Math.random() * 6) + 1;
  console.log(randomNr);

  switch (randomNr) {
    case 1:
      divdes.src = "dés1.jpg";
      break;
    case 2:
      divdes.src = "dés2.jpg";
      break;
    case 3:
      divdes.src = "dés3.jpg";
      break;
    case 4:
      divdes.src = "dés4.jpg";
      break;
    case 5:
      divdes.src = "dés5.jpg";
      break;
    case 6:
      divdes.src = "dés6.jpg";
      break;
  }
});
