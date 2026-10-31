// Número de WhatsApp en formato internacional (52 = México)
const WHATSAPP = "523521563476";

const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js");

// ---------- Inicio: de la calle soleada al minisplit ----------

const frames = [...document.querySelectorAll(".frame")];
let current = 0;
let timer;

function nextFrame() {
  frames[current].classList.remove("is-on");
  current = (current + 1) % frames.length;
  frames[current].classList.add("is-on");
}

function startFrames() {
  if (reduceMotion || frames.length < 2) return;
  clearInterval(timer);
  timer = setInterval(nextFrame, 6000);
}

// Pausa cuando la pestaña no se ve
document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearInterval(timer);
  else startFrames();
});

startFrames();

// ---------- Menú en el teléfono ----------

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "Cerrar" : "Menú";
}

menuToggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
menu.addEventListener("click", (event) => { if (event.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

// ---------- Servicios: la nota de cada servicio ----------

const note = document.getElementById("service-note");
const serviceItems = document.querySelectorAll(".group li");

function showNote(item) {
  serviceItems.forEach((li) => li.classList.toggle("is-active", li === item));
  note.textContent = item.dataset.note;
}

serviceItems.forEach((item) => {
  item.addEventListener("mouseenter", () => showNote(item));
  item.addEventListener("focus", () => showNote(item));
});

// ---------- Equipo: capacidad según el cuarto y la medida ----------

// Orientativo para clima caluroso; cocina y local suben un paso por el calor extra
const SIZES = [
  { big: "1 t", tons: "1 tonelada", btu: "12,000 BTU" },
  { big: "1.5 t", tons: "1.5 toneladas", btu: "18,000 BTU" },
  { big: "2 t", tons: "2 toneladas", btu: "24,000 BTU" },
  { big: "+2 t", tons: "más de 2 toneladas", btu: "lo medimos en la visita" },
];

const sizer = document.getElementById("sizer");
const resultBig = document.getElementById("result-big");
const resultLine = document.getElementById("result-line");
const sizerBtn = document.getElementById("sizer-btn");

function updateSizer() {
  const cuarto = sizer.querySelector('input[name="cuarto"]:checked');
  const medida = sizer.querySelector('input[name="medida"]:checked');
  const step = Math.min(Number(medida.dataset.step) + Number(cuarto.dataset.extra), SIZES.length - 1);
  const size = SIZES[step];

  resultBig.textContent = size.big;
  resultLine.textContent = step === SIZES.length - 1
    ? `Equipo de ${size.tons}: ${size.btu}`
    : `Minisplit de ${size.tons}, ${size.btu}`;

  if (!reduceMotion) {
    resultBig.classList.remove("is-changing");
    void resultBig.offsetWidth;
    resultBig.classList.add("is-changing");
  }

  const equipo = step === SIZES.length - 1 ? "un equipo de más de 2 toneladas" : `un minisplit de ${size.tons} (${size.btu})`;
  sizerBtn.href = waLink(`Hola Polar, me gustaría cotizar la instalación de ${equipo} para ${cuarto.value} de ${medida.value}.`);
}

sizer.addEventListener("change", updateSizer);
updateSizer();

// ---------- Cómo cotizar: acordeón ----------

const stages = [...document.querySelectorAll(".stage")];

function openStage(stage) {
  stages.forEach((s) => {
    const open = s === stage;
    s.classList.toggle("is-open", open);
    s.querySelector(".stage-tab").setAttribute("aria-expanded", String(open));
    s.querySelector(".stage-body").hidden = !open;
  });
  const body = stage.querySelector(".stage-body");
  body.setAttribute("tabindex", "-1");
  body.focus({ preventScroll: true });
}

stages.forEach((stage) => {
  stage.querySelector(".stage-tab").addEventListener("click", () => openStage(stage));
});

// ---------- Entradas al hacer scroll ----------

const risers = [...document.querySelectorAll(".rise")];
const reveal = (el) => el.classList.add("is-in");

// Muestra todo lo que ya está en pantalla o arriba de ella. Es el respaldo por si el
// observador no avisa (pestaña en segundo plano, salto con un enlace, navegador viejo).
function revealPassed() {
  const limit = window.innerHeight * 0.95;
  for (const el of risers) {
    if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < limit) reveal(el);
  }
}

// El escalonado empieza de nuevo en cada sección
document.querySelectorAll("section").forEach((section) => {
  section.querySelectorAll(".rise").forEach((el, i) => el.style.setProperty("--i", Math.min(i, 6)));
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      reveal(entry.target);
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -10% 0px" });

  risers.forEach((el) => observer.observe(el));
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { revealPassed(); ticking = false; });
}, { passive: true });
window.addEventListener("hashchange", revealPassed);
window.addEventListener("load", revealPassed);
revealPassed();

// ---------- Año del pie de página ----------

document.getElementById("year").textContent = new Date().getFullYear();
