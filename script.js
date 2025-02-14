document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        let menu = document.getElementById("menu");
        menu.classList.toggle("open");
    }

    function copyCardNumber() {
        let cardNumber = "4323347367338214";
        navigator.clipboard.writeText(cardNumber).then(() => {
            let message = document.getElementById("donate-message");
            message.style.display = "block";
            setTimeout(() => {
                message.style.display = "none";
            }, 3000);
        });
    }

    function searchText() {
        let query = document.getElementById("searchInput").value.toLowerCase();
        let elements = document.querySelectorAll("section, header, p, h2");
        let found = false;

        elements.forEach(element => {
            let text = element.textContent.toLowerCase();
            if (text.includes(query) && query.length > 0) {
                element.style.backgroundColor = "rgba(0, 255, 0, 0.3)"; // Подсветка
                if (!found) { // Прокручиваем к первому совпадению
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                    found = true;
                }
            } else {
                element.style.backgroundColor = "transparent"; // Убираем подсветку
            }
        });
    }

    // Делаем функции доступными в глобальной области
    window.toggleMenu = toggleMenu;
    window.copyCardNumber = copyCardNumber;
    window.searchText = searchText;
});