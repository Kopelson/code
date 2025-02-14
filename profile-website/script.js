document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            
            // Remove active class from all tabs and sections
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));
            
            // Add active class to the selected tab and corresponding section
            this.classList.add("active");
            document.querySelector(`#${target}`).classList.add("active");
        });
    });

    const typedTextElement = document.getElementById("typed-text");
    const text = "Hi! I'm Ken...";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    
    typeEffect();
});