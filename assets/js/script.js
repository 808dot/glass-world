let modal = document.querySelector('#modal');
let realizationBox = document.querySelectorAll('.realization-box');
let modalImg = document.querySelectorAll('.modal-content img');

realizationBox.forEach(box => {
  box.addEventListener('click', () => {

    let boxID = box.id;
    console.log(boxID);
    loadModalImg (boxID)

    modal.showModal();
    modal.style.display = 'flex'
    
  });
});


modal.addEventListener('click', () => {
  modal.close();
  modal.style.display = 'none'
});


function loadModalImg (ID){
  modalImg.forEach((IMG, i = 1)=>{
    console.log(IMG);
    
    let imgPath = "assets/img/" + ID + "-" + i % 4 + ".jpg"
    console.log(imgPath)
    IMG.src = imgPath;
    console.log(IMG);


  });


}


let header = document.querySelector('header');
let header_padding = header.currentStyle || window.getComputedStyle(header);

console.log(header.offsetHeight);
console.log(parseInt(header_padding.paddingTop));

let root = document.querySelector(':root');
let scrool_top = parseInt(header.offsetHeight) + 2 * parseInt(header_padding.paddingTop);

root.style.setProperty('--scrool-top', scrool_top + "px");