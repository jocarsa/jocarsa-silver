// Updated JavaScript for Jocarsa Silver
console.log("jocarsa | silver funcionando");

const inputTypes = {
    text: "abc",
    number: "123",
    email: "@",
    password: "🔒",
    tel: "📞",
    url: "🌐",
    date: "📅",
    search: "🔎",
};

const inputTooltips = {
    text: "Introduce texto.",
    number: "Introduce un número.",
    email: "Introduce un correo electrónico.",
    password: "Introduce una contraseña.",
    tel: "Introduce un número de teléfono.",
    url: "Introduce una dirección URL.",
    date: "Introduce una fecha.",
    search: "Introduce un término de búsqueda.",
};

// Function to initialize icons and tooltips
function initializeInputIconsAndTooltips() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        const type = input.getAttribute("type");
        if (inputTypes[type]) {
            // Wrap input with a container
            const wrapper = document.createElement("div");
            wrapper.className = "jocarsa-silver-input-wrapper";

            // Create the icon element
            const icon = document.createElement("span");
            icon.className = "jocarsa-silver-input-icon";
            icon.textContent = inputTypes[type];

            // Add tooltip as a title attribute
            input.setAttribute("title", inputTooltips[type]);

            // Insert the wrapper
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(icon);
        }
    });
}

initializeInputIconsAndTooltips();

