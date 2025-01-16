document.addEventListener("DOMContentLoaded", function () {
	console.log("jocarsa | silver funcionando")
    const inputTypes = {
        text: "abc",
        number: "123",
        email: "@",
        password: "🔒",
        tel: "📞",
        url: "🌐",
        date: "📅",
    };

    // Function to initialize icons
    function initializeInputIcons() {
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

                // Insert the wrapper
                input.parentNode.insertBefore(wrapper, input);
                wrapper.appendChild(input);
                wrapper.appendChild(icon);
            }
        });
    }

    initializeInputIcons();
});

