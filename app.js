let service_item = document.querySelectorAll(".service__item");
let service_wrapper = document.querySelectorAll(".service__wrapper")

function addTab(arr){

  arr.forEach(element => {
    
    element.addEventListener("click", e => {
      
      
      let clicked = e.target.getAttribute("data-id");

      service_wrapper.forEach(function(el){
        el.classList.remove("show")
      })

      document.querySelector(`#${clicked}`).classList.add("show")
    })

      
  });
}

addTab(service_item);





// menu modal


let menu_modal = document.querySelector(".menu_modal")
let left__menu = document.querySelector(".left__menu") // open
let menu_modal__btn = document.querySelector(".menu_modal__btn") // x

left__menu.addEventListener("click", e =>{
  menu_modal.classList.remove("yopish_btn")

    menu_modal.classList.add("ochish")

})

menu_modal__btn.addEventListener("click", e => {
  menu_modal.classList.remove("ochish")

  menu_modal.classList.add("yopish_btn")

})