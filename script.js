// Número de WhatsApp en formato internacional (52 = México)
const WHATSAPP = "523521563476";

const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// En local se ven los espacios de fotos pendientes; ?publicado muestra la página como en internet
const isLocal = ["localhost", "127.0.0.1", ""].includes(location.hostname)
  && !new URLSearchParams(location.search).has("publicado");

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

// ---------- Menú a pantalla completa ----------

const menu = document.getElementById("menu");
const toggles = [...document.querySelectorAll(".menu-toggle")];
const menuClose = menu.querySelector(".menu-close");
let lastToggle = null;

menu.querySelectorAll(".menu-links li").forEach((li, k) => li.querySelector("a").style.setProperty("--k", k));

function openMenu(trigger) {
  lastToggle = trigger;
  menu.hidden = false;
  document.body.classList.add("menu-is-open");
  toggles.forEach((t) => t.setAttribute("aria-expanded", "true"));
  void menu.offsetWidth; // aplica el estado cerrado antes de animar la apertura
  menu.classList.add("is-open");
  menuClose.focus({ preventScroll: true });
}

function closeMenu({ restoreFocus = true } = {}) {
  if (menu.hidden) return;
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-is-open");
  toggles.forEach((t) => t.setAttribute("aria-expanded", "false"));
  setTimeout(() => { menu.hidden = true; }, reduceMotion ? 0 : 520);
  if (restoreFocus && lastToggle) lastToggle.focus({ preventScroll: true });
}

toggles.forEach((t) => t.addEventListener("click", () => openMenu(t)));
menuClose.addEventListener("click", () => closeMenu());
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu({ restoreFocus: false });
});

document.addEventListener("keydown", (event) => {
  if (menu.hidden) return;
  if (event.key === "Escape") closeMenu();
  // El foco no sale del menú mientras está abierto
  if (event.key === "Tab") {
    const items = [...menu.querySelectorAll("a, button")];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

// ---------- Barra fija, sección activa y foto de servicios: se calculan con el scroll ----------

const bar = document.getElementById("bar");
const hero = document.querySelector(".hero");
const closers = [document.getElementById("contacto"), document.querySelector(".footer")];
const barLinks = [...bar.querySelectorAll(".bar-links a")];

const storyItems = [...document.querySelectorAll(".story-item")];
const storyPics = [...document.querySelectorAll(".story-pics img")];
const storyCount = document.querySelector(".story-count");
let activeService = -1;

storyItems.forEach((item) => {
  item.querySelectorAll(".story-points li").forEach((li, k) => li.style.setProperty("--k", k));
});

function showService(i) {
  if (i === activeService) return;
  activeService = i;
  storyItems.forEach((el, k) => {
    el.classList.toggle("is-active", k === i);
    if (k === i) el.classList.add("is-seen");
  });
  storyPics.forEach((el, k) => el.classList.toggle("is-on", k === i));
  const title = storyItems[i].querySelector(".story-title").textContent;
  storyCount.textContent = `${title}, ${i + 1} de ${storyItems.length}`;
}

// El elemento cuyo tramo cruza la línea a media pantalla
function atMiddle(elements) {
  const mid = window.innerHeight * 0.5;
  let found = -1;
  elements.forEach((el, k) => {
    if (el && !el.classList.contains("is-hidden") && el.getBoundingClientRect().top <= mid) found = k;
  });
  return found;
}

function onScrollUi() {
  const pastHero = hero.getBoundingClientRect().bottom < 80;
  const atCloser = closers.some((el) => el.getBoundingClientRect().top < window.innerHeight * 0.85);
  bar.classList.toggle("is-shown", pastHero && !atCloser);

  const sections = barLinks.map((a) => document.querySelector(a.getAttribute("href")));
  const current = atMiddle(sections);
  barLinks.forEach((a, k) => a.setAttribute("aria-current", String(k === current)));

  const service = atMiddle(storyItems);
  showService(Math.max(service, 0));
}

// ---------- Trabajos realizados: fotos desde assets/trabajos/fotos.json ----------

const gallery = document.querySelector("[data-gallery]");
const grid = document.getElementById("works-grid");
const SAMPLE = ["Instalación de minisplit", "Minisplit en recámara", "Unidad exterior en azotea", "Mantenimiento de equipo",
  "Instalación en local", "Equipo de ventana", "Tubería y aislamiento", "Equipo listo y enfriando"];

function addWork(text, src, k) {
  const li = document.createElement("li");
  li.className = "work";
  li.style.setProperty("--k", k % 4);
  li.innerHTML = '<figure><div class="work-frame"></div><figcaption></figcaption></figure>';
  li.querySelector("figcaption").textContent = text;
  if (src) {
    const img = document.createElement("img");
    Object.assign(img, { src, alt: text, loading: "lazy", width: 1200, height: 1500 });
    li.querySelector(".work-frame").append(img);
  } else {
    li.classList.add("is-empty");
  }
  grid.append(li);
  watch(li);
}

function hideGallery() {
  gallery.classList.add("is-hidden");
  document.querySelectorAll('[data-nav="trabajos"]').forEach((el) => el.classList.add("is-hidden"));
}

fetch("assets/trabajos/fotos.json", { cache: "no-cache" })
  .then((r) => (r.ok ? r.json() : { fotos: [] }))
  .catch(() => ({ fotos: [] }))
  .then(({ fotos = [] }) => {
    if (fotos.length) fotos.forEach((f, k) => addWork(f.texto || "", `assets/trabajos/${f.archivo}`, k));
    else if (isLocal) SAMPLE.forEach((t, k) => addWork(t, null, k));
    else hideGallery();
    revealPassed();
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
const resultNum = document.getElementById("result-big");
const resultLine = document.getElementById("result-line");
const sizerBtn = document.getElementById("sizer-btn");
const meter = [...document.querySelectorAll(".meter i")];
let lastStep = 1;

meter.forEach((i, k) => i.style.setProperty("--k", k));

// La cifra nueva entra desde abajo (o desde arriba si baja la capacidad)
function rollTo(text, up) {
  resultNum.textContent = text;
  if (reduceMotion || !resultNum.animate) return;
  const from = up ? 45 : -45;
  resultNum.animate(
    [{ transform: `translateY(${from}%)`, opacity: 0 }, { transform: "none", opacity: 1 }],
    { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
  );
}

function updateSizer() {
  const cuarto = sizer.querySelector('input[name="cuarto"]:checked');
  const medida = sizer.querySelector('input[name="medida"]:checked');
  const step = Math.min(Number(medida.dataset.step) + Number(cuarto.dataset.extra), SIZES.length - 1);
  const size = SIZES[step];
  const last = step === SIZES.length - 1;

  if (step !== lastStep) rollTo(size.big, step > lastStep);
  lastStep = step;

  meter.forEach((i, k) => i.classList.toggle("is-on", k <= step));
  resultLine.textContent = last
    ? `Equipo de ${size.tons}: ${size.btu}`
    : `Minisplit de ${size.tons}, ${size.btu}`;

  const equipo = last ? "un equipo de más de 2 toneladas" : `un minisplit de ${size.tons} (${size.btu})`;
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

document.querySelectorAll(".extras-list .line").forEach((li, k) => li.style.setProperty("--k", k));

const risers = [...document.querySelectorAll(".rise, .extras-list .line")];
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

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      reveal(entry.target);
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -10% 0px" })
  : null;

function watch(el) {
  risers.push(el);
  observer?.observe(el);
}

risers.forEach((el) => observer?.observe(el));

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { revealPassed(); onScrollUi(); ticking = false; });
}, { passive: true });
window.addEventListener("resize", onScrollUi);
window.addEventListener("hashchange", () => { revealPassed(); onScrollUi(); });
window.addEventListener("load", () => { revealPassed(); onScrollUi(); });
revealPassed();
onScrollUi();

// ---------- Año del pie de página ----------

document.getElementById("year").textContent = new Date().getFullYear();
