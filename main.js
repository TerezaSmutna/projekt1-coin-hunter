
let height = window.innerHeight;
let width = window.innerWidth;


let mince = document.querySelector('#mince');
let minceX = "0px";
let minceY = "0px";
mince.style.left = minceX;
mince.style.top = minceY;

function presunMinci() {
  minceX = "0px";
  minceY = "0px";
  y = Math.random () * width;
  z = Math.random () * height;
  minceX = parseInt(minceX) + y + "px";
  minceY = parseInt(minceY) + z + "px"; 
  mince.style.left = minceX;
  mince.style.top = minceY;
} 

let souradniceX = "0px";
let souradniceY = "0px";
let panacek = document.querySelector('#panacek');
panacek.style.left = souradniceX;
panacek.style.top = souradniceY;

document.onkeydown = movePanacek;

function moveRight() {
  if (parseInt(souradniceX) <= width) {
    panacek.src = 'obrazky/panacek-vpravo.png';
    souradniceX = parseInt(souradniceX) + 5 + "px";
    panacek.style.left = souradniceX;
  }
}

function moveLeft() {
  if (parseInt(souradniceX) >= 5) {
    panacek.src = 'obrazky/panacek-vlevo.png';
    souradniceX = (parseInt(souradniceX)) - 5 + "px";
    panacek.style.left = souradniceX;
  }
}

function moveUp() { 
  if (parseInt(souradniceY) >= 5) {
    panacek.src = 'obrazky/panacek-nahoru.png';
    souradniceY = (parseInt(souradniceY)) - 5 + "px";
    panacek.style.top = souradniceY;
  }
}

function moveDown() {
  if (parseInt(souradniceY) <= height) {
    panacek.src = 'obrazky/panacek.png';
    souradniceY = (parseInt(souradniceY)) + 5 + "px";
    panacek.style.top = souradniceY;
  }
}

  let panacekSirka = document.getElementById("panacek").width
  let panacekVyska = document.getElementById("panacek").height
  let minceSirka = document.getElementById("mince").width
  let minceVyska = document.getElementById("mince").height

  function seberMinci () {
  let pocetBodu = document.getElementsByTagName("div")[0].innerHTML
  if ((!( parseInt(souradniceX) + panacekSirka < parseInt(minceX) || parseInt(minceX) + minceSirka < parseInt(souradniceX) || parseInt(souradniceY) + panacekVyska < parseInt(minceY) || parseInt(minceY) + minceVyska < parseInt(souradniceY))) && (pocetBodu < 4)) {
    pocetBodu = parseInt(pocetBodu) + 1;
    document.getElementsByTagName("div")[0].innerHTML = pocetBodu;
    minceHraj();
    presunMinci();
     } else if ((!( parseInt(souradniceX) + panacekSirka < parseInt(minceX) || parseInt(minceX) + minceSirka < parseInt(souradniceX) || parseInt(souradniceY) + panacekVyska < parseInt(minceY) || parseInt(minceY) + minceVyska < parseInt(souradniceY))) && (pocetBodu <5)) {
      pocetBodu = parseInt(pocetBodu) + 1;
      document.getElementsByTagName("div")[0].innerHTML = pocetBodu;
      pauseAudio();
      zahrajFanfaru();
      hlaska.textContent = 'Jsi vítěz!';
     } else return
    }

    function movePanacek(event) {
      let x = event.key;
      if (x === "ArrowRight") {
        moveRight();
        seberMinci();
      } else if (x === "ArrowLeft") {
        moveLeft();
        seberMinci();
      } else if (x === "ArrowUp") {
        moveUp();
        seberMinci();
      } else if (x === "ArrowDown") {
        moveDown(); 
        seberMinci();
      } else
        return 
    }
      
      let doprovodnaHudba = document.getElementById("hudba"); 
      function playAudio() { 
        doprovodnaHudba.play(); 
      } 

      function pauseAudio() { 
        doprovodnaHudba.pause(); 
      } 

      let zvukMince = document.getElementById("zvukmince"); 
      function minceHraj() { 
        zvukMince.play(); 
      }

      let fanfara = document.getElementById("zvukfanfara"); 
      function zahrajFanfaru() { 
        fanfara.play(); 
      }

      let hlaska = document.getElementById("zprava");

      