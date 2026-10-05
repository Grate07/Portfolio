const glow = document.querySelector(".cursor-glow");
let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;

window.addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; });
function animateGlow(){
  gx += (mx-gx)*0.08; gy += (my-gy)*0.08;
  if(glow) glow.style.left = gx+"px", glow.style.top = gy+"px";
  requestAnimationFrame(animateGlow);
}
animateGlow();

const revealItems = document.querySelectorAll(".section, .intro-note, .featured-project, .project-row, .community-card");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
revealItems.forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(18px)";
  el.style.transition="opacity .7s ease, transform .7s ease";
  observer.observe(el);
});
const style = document.createElement("style");
style.textContent = ".is-visible{opacity:1!important;transform:none!important}";
document.head.appendChild(style);

document.getElementById("year").textContent = new Date().getFullYear();

const copy = document.getElementById("copyDiscord");
const status = document.getElementById("copyStatus");
copy?.addEventListener("click", async ()=>{
  const id = "1462759224877518919";
  try{
    await navigator.clipboard.writeText(id);
    status.textContent = "Discord ID copied.";
  }catch{
    status.textContent = id;
  }
  setTimeout(()=>status.textContent="",2200);
});
