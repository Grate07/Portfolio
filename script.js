const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

function copyDiscord(event) {
  event.preventDefault();
  const note = document.getElementById("copy-note");
  const username = "YOUR_DISCORD_USERNAME";
  navigator.clipboard?.writeText(username).then(() => {
    note.textContent = "Discord username copied — replace it in script.js with your real username.";
  }).catch(() => {
    note.textContent = "Replace the Discord link with your real profile.";
  });
}
