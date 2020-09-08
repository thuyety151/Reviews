const openBtn=document.querySelector(".open-btn");
const closeBtn=document.querySelector(".close-btn");
const modalContent=document.querySelector(".modal-content");

openBtn.addEventListener("click",function(){
    modalContent.classList.toggle("show-modal-content");
});
closeBtn.addEventListener("click",function(){
    modalContent.classList.remove("show-modal-content");
});