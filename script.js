const modal=document.getElementById("videoModal");
const player=document.getElementById("player");
const localPlayer=document.getElementById("localPlayer");
const modalTitle=document.getElementById("modalTitle");
const closeModal=()=>{
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  player.src="";
  localPlayer.pause();
  localPlayer.removeAttribute("src");
  localPlayer.load();
};

document.querySelectorAll(".video-card").forEach(card=>{
  card.querySelector(".video-thumb").addEventListener("click",()=>{
    const id=card.dataset.video;
    player.style.display="block";
    localPlayer.style.display="none";
    player.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    modalTitle.textContent=card.dataset.title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});

document.querySelectorAll(".local-video-card").forEach(card=>{
  card.querySelector(".short-thumb").addEventListener("click",()=>{
    player.src="";
    player.style.display="none";
    localPlayer.style.display="block";
    localPlayer.src=card.dataset.local;
    localPlayer.currentTime=0;
    modalTitle.textContent=card.dataset.title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    localPlayer.play().catch(()=>{});
  });
});

document.getElementById("closeModal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
