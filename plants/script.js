document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
});

console.log("Самостоятельная оценка: 100 баллов\n1. Верстка валидная +10\n2. Верстка семантическая +20\n3. Верстка соответствует макету +48\n4. Требования к css +12\n5. Интерактивность +20");