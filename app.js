let service_item = document.querySelectorAll(".service__item");
let service_wrapper = document.querySelectorAll(".service__wrapper")

function addTab(arr){

  arr.forEach(element => {
    
    element.addEventListener("click", e => {
      console.log(e.target.getAttribute("data-id"));
      
      let clicked = e.target.getAttribute("data-id");

      service_wrapper.forEach(function(el){
        el.classList.remove("show")
      })

      document.querySelector(`#${clicked}`).classList.add("show")
    })

      
  });
}

addTab(service_item);