// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


let height = window.innerHeight;
let width = window.innerWidth;

let souradniceX = "0px";
let souradniceY = "0px";
let panacek = document.querySelector('#panacek');
panacek.style.left = souradniceX;
panacek.style.top = souradniceY;


document.onkeydown = movePanacek;

function moveRight() {
  if (parseInt(souradniceX) <= width) {
    souradniceX = parseInt(souradniceX) + 5 + "px";
    panacek.style.left = souradniceX;
  }
}

function moveLeft() {
  if (parseInt(souradniceX) >= 5) {
    souradniceX = (parseInt(souradniceX)) - 5 + "px";
    panacek.style.left = souradniceX;
  }
}

function moveUp() { 
  if (parseInt(souradniceY) >= 5) {
  souradniceY = (parseInt(souradniceY)) - 5 + "px";
  panacek.style.top = souradniceY;
  }
}

function moveDown() {
  if (parseInt(souradniceY) <= height) {
  souradniceY = (parseInt(souradniceY)) + 5 + "px";
  panacek.style.top = souradniceY;
  }
}

function movePanacek(event) {
  let x = event.key;
  if (x === "ArrowRight") {
    moveRight();
  } else if (x === "ArrowLeft") {
    moveLeft();
  } else if (x === "ArrowUp") {
    moveUp();
  } else if (x === "ArrowDown") {
    moveDown();
  } else
    return
  }


  let mince = document.querySelector('#mince');
  let MinceX = "0px";
  let MinceY = "0px";
  mince.style.left = MinceX;
  mince.style.top = MinceY;

  function presunMinci() {
    y = Math.random () * width
    z = Math.random () * height
    MinceX = parseInt(MinceX) + y + "px";
    MinceY = parseInt(MinceY) + z + "px";
    mince.style.left = MinceX;
    mince.style.top = MinceY;
  }

