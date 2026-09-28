const modal=document.getElementById("videoModal");
const player=document.getElementById("player");
const modalTitle=document.getElementById("modalTitle");
const closeModal=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true");player.src=""};
document.querySelectorAll(".video-card").forEach(card=>{
  card.querySelector(".video-thumb").addEventListener("click",()=>{
    const id=card.dataset.video;
    player.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    modalTitle.textContent=card.dataset.title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});
document.getElementById("closeModal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
