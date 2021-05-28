let offset = 0;
const sliderLine = document.querySelector('.slider-line');

function next(n) {
    const image_1 = document.getElementById("image_1")
    const image_2 = document.getElementById("image_2")
    const image_3 = document.getElementById("image_3")
    
    if(n === 1){
        image_1.style.display = "block"
        image_2.style.display = "none"
        image_3.style.display = "none"
    }
    if(n === 2){
        image_1.style.display = "none"
        image_2.style.display = "block"
        image_3.style.display = "none"
    }
    if(n === 3){
        image_1.style.display = "none"
        image_2.style.display = "none"
        image_3.style.display = "block"
    }

}



window.next = next
