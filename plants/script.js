document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-burger").addEventListener("click", function() {
        document.querySelector("body").classList.toggle("open")
    });
    document.getElementById("header-nav-link-1").addEventListener("click", function() {
        document.querySelector("body").classList.toggle("open")
    });
    document.getElementById("header-nav-link-2").addEventListener("click", function() {
        document.querySelector("body").classList.toggle("open")
    });
    document.getElementById("header-nav-link-3").addEventListener("click", function() {
        document.querySelector("body").classList.toggle("open")
    });
    document.getElementById("header-nav-link-4").addEventListener("click", function() {
        document.querySelector("body").classList.toggle("open")
    });
    document.getElementById("header-nav-link-5").addEventListener("click", function() {
        document.querySelector("body").classList.toggle("open")
    });
});


// ACCORDION


const pricesMenu = document.querySelectorAll(".prices-selection-item");

console.log(pricesMenu)

pricesMenu.forEach(function(item) {
    item.addEventListener('click', function (e) {
        item.classList.remove('show')

        pricesMenu.forEach(function(item) {
            item.classList.remove('show')
            e.target.closest('.prices-selection-item').classList.add('show')
        })
    })
})

function hasClass(element, className) {
    var rx = new RegExp('(?:^| )' + className + '(?: |$)');
    return rx.test(element.className);
}

pricesMenu.addEventListener('click', function)

// pricesMenu.forEach(function(item) => {
//     if (item)
// })


// const serviceButton = document.getElementById('service-button-gardeners')

// function handleClick (event) {
//     this.
//     }


// serviceButton.addEventListener('click', handleClick)



