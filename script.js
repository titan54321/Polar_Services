// Número de WhatsApp en formato internacional (52 = México)
const WHATSAPP = "523521563476";

const waLink = (message) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

// ---------- Cotización rápida (inicio) ----------

const quick = document.getElementById("quick");
const quickBtn = document.getElementById("quick-btn");
const quickLabel = document.getElementById("quick-label");

function updateQuick() {
  // El valor ya trae su artículo: "la instalación", "el mantenimiento"
  const servicio = new FormData(quick).get("servicio");
  quickLabel.textContent = `Cotizar ${servicio.replace(/^(la|el) /, "")}`;
  quickBtn.href = waLink(`Hola Polar, me gustaría cotizar ${servicio} de un aire acondicionado.`);
}

quick.addEventListener("input", updateQuick);
quick.addEventListener("submit", (event) => event.preventDefault());

// ---------- Mensaje de cotización (contacto) ----------

const form = document.getElementById("quote");
const preview = document.getElementById("quote-text");
const button = document.getElementById("quote-btn");

function buildMessage() {
  const data = new FormData(form);
  const servicio = data.get("servicio");
  const equipo = data.get("equipo");
  const nombre = (data.get("nombre") || "").trim();

  const inicio = nombre
    ? `Hola Polar, soy ${nombre}. Me gustaría`
    : "Hola Polar, me gustaría";

  return `${inicio} cotizar ${servicio} de ${equipo}.`;
}

function update() {
  const message = buildMessage();
  preview.textContent = message;
  button.href = waLink(message);
}

form.addEventListener("input", update);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  update();
  button.click();
});

// ---------- Entrada del inicio ----------

document.documentElement.classList.add("js-reveal");
document.querySelectorAll(".reveal").forEach((el, i) => el.style.setProperty("--i", i));
requestAnimationFrame(() => requestAnimationFrame(() => {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}));

// ---------- Menú con sombra al bajar ----------

const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Año del pie de página ----------

document.getElementById("year").textContent = new Date().getFullYear();
