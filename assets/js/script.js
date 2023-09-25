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



let windowWidth = window.innerWidth;
console.log(windowWidth);


if (windowWidth > '768'){
  const animationItemsBox = document.querySelectorAll('.about-us-box');

  const observerBox = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("The element is intersecting >");
          entry.target.style.animation = `slideTop 2s ${entry.target.dataset.delay} ease forwards`;
        } else {
            entry.target.style.animation="none";
        }
      })
    },

  )

  animationItemsBox.forEach(item => {
    observerBox.observe(item)         
  })


  const animationItemsLine = document.querySelectorAll('.line');

  const observerLine = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("The element is intersecting >");
          entry.target.style.animation = `slideBottom 2s ${entry.target.dataset.delay} ease forwards`;
        } else {
            entry.target.style.animation="none";
        }
      })
    },

  )

  animationItemsLine.forEach(item => {
    observerLine.observe(item)         
  })
}
else{
  const animationItemsBox = document.querySelectorAll('.about-us-box');

  const observerBox = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("The element is intersecting >");
          entry.target.style.animation = `slideLeft 2s  ease forwards`;
        } else {
            entry.target.style.animation="none";
        }
      })
    },

  )

  animationItemsBox.forEach(item => {
    observerBox.observe(item)         
  })


  const animationItemsLine = document.querySelectorAll('.line');

  const observerLine = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("The element is intersecting >");
          entry.target.style.animation = `slideRight 2s  ease forwards`;
        } else {
            entry.target.style.animation="none";
        }
      })
    },

  )

  animationItemsLine.forEach(item => {
    observerLine.observe(item)         
  })
}





// const callback = (entries) => {

//    entries.forEach((entry) => {
//            if (entry.isIntersecting) {
//                console.log("The element is intersecting >");
//                entry.target.style.animation = 
//                entry.target.dataset.animate;
//            } else {
//                entry.target.style.animation="none";
//            }
//        }
//    );       
// }



// let observer2 = new IntersectionObserver(callback);

// const animationItems2 = document.querySelectorAll('.about-us-box');

// animationItems2.forEach(item => {
//   observer2.observe(item)         
// })



// const callback = (entries) => {
//   //Step 4
//   // The entries variable will contain the list of
//   // elements that you are observing. When ever 
//   // intersection occurs, you need to do forEach loop 
//   // to find which one intersected. 
//   // For this we check a flag on the element called "isIntersecting"
//    entries.forEach(
//        (entry) => {
//            if (entry.isIntersecting) {
//                console.log("The element is intersecting >");
//                //If intersecting then attach keyframe animation.
//               //We do this by assigning the data attribute 
//               //we coded in the markup to the style.animation 
//               //of the element
              
//                entry.target.style.animation = 
//                entry.target.dataset.animate;
//            } else {
//                //We take of the animation if not in view
//                entry.target.style.animation="none";
//            }
//        }
//    );       
// }

// //1] Create a new intersectionObserver object, 
// //which will accept a callback function as 
// //a parameter.

// let observer = new IntersectionObserver(callback);


// //2]Select all elements that have ".animate" 
// //class.In our case we have three 
// //elements (.image,<p> and h<2>).

// const animationItems = document.querySelectorAll('.about-us-box');


//  //3]Loop through selected elements and add to the
//  //observer watch list.      

//  animationItems.forEach(item => {
//    observer.observe(item)         
// })