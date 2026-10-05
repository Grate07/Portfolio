const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 25, 180)}ms`;
  observer.observe(element);
});

const cursor = document.querySelector(".cursor");

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll("a, button, .build-card, .project-row").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.width = "34px";
      cursor.style.height = "34px";
      cursor.style.background = "rgba(255,255,255,.08)";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      cursor.style.background = "transparent";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

function showNotice(event, message) {
  event.preventDefault();
  showToast(message);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

async function copyDiscordId() {
  const id = "1462759224877518919";
  const status = document.getElementById("copy-status");

  try {
    await navigator.clipboard.writeText(id);
    status.textContent = "Discord ID copied.";
    showToast("Discord ID copied.");
  } catch {
    status.textContent = id;
    showToast("Copy isn't available here — select the ID manually.");
  }

  setTimeout(() => {
    status.textContent = id;
  }, 2200);
}

const hero = document.querySelector(".hero");
const logo = document.querySelector(".visual-logo");

if (hero && logo && window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    logo.style.setProperty("--mx", `${x * 8}px`);
    logo.style.setProperty("--my", `${y * 8}px`);
  });

  hero.addEventListener("pointerleave", () => {
    logo.style.setProperty("--mx", "0px");
    logo.style.setProperty("--my", "0px");
  });
}
