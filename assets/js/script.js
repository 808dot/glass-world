let nIntervId;

function starInterv() {
    // check if an interval has already been set up
    if (!nIntervId) {
      nIntervId = setInterval(changeBlob, 100);
    }
  }

function changeBlob() {
    let homeBg = document.querySelector('.home-bg');
    console.log(homeBg);
    let x = getRandomInt(99);
    let y = getRandomInt(99);
    let z = getRandomInt(99);
    let w = getRandomInt(99);

    let borderRadiusValue = x + "% " + y + "% " + z + "% " + w + "% " + "/ " + x + "% " + y + "% " + z + "% " + w + "% ";
    console.log(borderRadiusValue);
    homeBg.style.borderRadius = borderRadiusValue;
    
}

// starInterv();
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }