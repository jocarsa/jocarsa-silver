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
};

const inputTooltips = {
    text: "Introduce texto.",
    number: "Introduce un número.",
    email: "Introduce un correo electrónico.",
    password: "Introduce una contraseña.",
    tel: "Introduce un número de teléfono.",
    url: "Introduce una dirección URL.",
    date: "Introduce una fecha.",
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

            // Create the label element
            const label = document.createElement("span");
            label.className = "jocarsa-silver-input-label";
            label.textContent = inputTooltips[type];

            // Add tooltip as a title attribute
            input.setAttribute("title", inputTooltips[type]);

            // Insert the wrapper
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(label);
            wrapper.appendChild(input);
        }
    });
}

initializeInputIconsAndTooltips();

