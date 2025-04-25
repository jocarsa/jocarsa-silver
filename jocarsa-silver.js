// ─────────────────────────────────────────────────────────────────────────
// Initialize Bootstrap-style groups WITH tooltips preserved
console.log("jocarsa | silver funcionando");

const inputTypes = {
  text:   "abc",
  number: "123",
  email:  "@",
  password:"🔒",
  tel:    "📞",
  url:    "🌐",
  date:   "📅",
  search: "🔎"
};

const inputTooltips = {
  text:   "Introduce texto.",
  number: "Introduce un número.",
  email:  "Introduce un correo electrónico.",
  password:"Introduce una contraseña.",
  tel:    "Introduce un número de teléfono.",
  url:    "Introduce una dirección URL.",
  date:   "Introduce una fecha.",
  search: "Introduce un término de búsqueda."
};

function initializeInputGroups() {
  document.querySelectorAll("input").forEach(input => {
    const type = input.getAttribute("type");
    if (!inputTypes[type]) return;

    // 1. Create the flex-container
    const group = document.createElement("div");
    group.className = "jocarsa-silver-input-group";

    // 2. Create the prepend label (icon)
    const prepend = document.createElement("span");
    prepend.className = "jocarsa-silver-input-group-prepend";
    prepend.textContent = inputTypes[type];

    // 3. Preserve tooltip
    input.setAttribute("title", inputTooltips[type]);

    // 4. Re-parent into the new group
    input.parentNode.insertBefore(group, input);
    group.appendChild(prepend);
    group.appendChild(input);
  });
}

initializeInputGroups();

