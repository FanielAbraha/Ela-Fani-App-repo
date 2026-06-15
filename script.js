function changeColor() {

  const colors = [
    "lightblue",
    "lightgreen",
    "lightyellow",
    "pink",
    "lavender",
    "orange",
    "black",
    "red"
  ];


  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];
}