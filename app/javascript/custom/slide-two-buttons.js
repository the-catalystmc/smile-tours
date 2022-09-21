const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nextBtn[i].addEventListener('click', () => {
//         console.log('next')
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         console.log('pre')
//         item.scrollLeft -= containerWidth;

//     })
// });


// window.onload = function next(item, i) {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nextBtn[i].addEventListener('click', () => {
//         console.log('next')
//         item.scrollLeft += containerWidth;
//     })
// }

