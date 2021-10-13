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


//  team modal:

let hover_text = document.querySelectorAll(".hover__text");

hover_text.forEach (card => {
  card.addEventListener("click", event =>{
    document.querySelector(".modal").classList.add("on")
    console.log(event.target.parentElement.previousElementSibling.src);
    console.log(event.target.parentElement.nextElementSibling.textContent);
    console.log(event.target.parentElement.nextElementSibling.nextElementSibling.textContent);
    
    let img_src = event.target.parentElement.previousElementSibling.src;
    let name_content = event.target.parentElement.nextElementSibling.textContent;
    let position_content = event.target.parentElement.nextElementSibling.nextElementSibling.textContent;

    // let img_src = event.target.previousElementSibling.src ;
    // let name_content = event.target.previousElementSibling;
    // console.log(name_content);
    document.querySelector(".modal__body .left img").src = img_src;
    document.querySelector(".modal__body .right .right__title").textContent = name_content;
    document.querySelector(".modal__body .right .right__subtitle").textContent = position_content;


  })
})

document.querySelector(".close_btn").addEventListener("click", e =>{
  document.querySelector(".modal").classList.remove("on")

})