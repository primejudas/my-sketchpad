const btn = document.getElementById("btn");
btn.addEventListener("click", button);

function button() {
  let x = prompt("please enter number of grid maximun of 64", "64");
  grid = Math.min(64, parseInt(x));
  const cont = document.getElementById("container");
  cont.innerHTML = "";
  for (let c = 1; c <= grid; c++) {
    const column = document.createElement("div");
    column.id = "column";
    cont.append(column);

    for (let r = 1; r <= grid; r++) {
      const row = document.createElement("div");
      row.id = "row";
      column.append(row);
      row.addEventListener("dragover", function () {
        row.style.backgroundColor = "black";
      });
      const buttonred = document.getElementById("but");
      buttonred.addEventListener("click", colorred);
      function colorred() {
        row.addEventListener("dragover", function () {
          row.style.backgroundColor = "red";
        });
        row.addEventListener("click", function () {
          row.style.backgroundColor = "red";
        });
      }
      const buttonblue = document.getElementById("butt");
      buttonblue.addEventListener("click", colorblue);
      function colorblue() {
        row.addEventListener("dragover", function () {
          row.style.backgroundColor = "blue";
        });
        row.addEventListener("click", function () {
          row.style.backgroundColor = "blue";
        });
      }
      const buttongreen = document.getElementById("bott");
      buttongreen.addEventListener("click", colorgreen);
      function colorgreen() {
        row.addEventListener("dragover", function () {
          row.style.backgroundColor = "green";
        });
        row.addEventListener("click", function () {
          row.style.backgroundColor = "green";
        });
      }
      const buttonblack = document.getElementById("bot");
      buttonblack.addEventListener("click", colorblack);
      function colorblack() {
        row.addEventListener("dragover", function () {
          row.style.backgroundColor = "black";
        });
        row.addEventListener("click", function () {
          row.style.backgroundColor = "black";
        });
      }
      const buttonyel = document.getElementById("butun");
      buttonyel.addEventListener("click", coloryel);
      function coloryel() {
        row.addEventListener("dragover", function () {
          row.style.backgroundColor = "yellow";
        });
        row.addEventListener("click", function () {
          row.style.backgroundColor = "yellow";
        });
      }
      row.addEventListener("click", function () {
        row.style.backgroundColor = "black";
      });
      function erase() {
        row.addEventListener("dragover", function () {
          row.style.backgroundColor = "white";
        });
        row.addEventListener("click", function () {
          row.style.backgroundColor = "white";
        });
        // row.style.border = "0.1mm solid  rgb(131, 130, 130)";
      }

      const ers = document.getElementById("ers");
      ers.addEventListener("click", erase);
    }
  }
}
