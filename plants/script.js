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
const pricesHeader = document.querySelectorAll('.prices-selection-list');


console.log(pricesMenu)

pricesMenu.forEach(function(elem) {
    elem.addEventListener('click', function (e) {
        if (!e.target.classList.contains('panel-button')) {
            if (elem.classList.contains('show')) {
                elem.classList.remove('show')
            } else {
                pricesMenu.forEach(function(item) {
                    item.classList.remove('show')
                })
                elem.classList.add('show')
            }

        } 
    })
})

// pricesHeader.forEach(item => {
//     item.addEventListener('click', removeToggle)
// })

// function removeToggle() {
//     // this.closest(pricesMenu).classList.remove('show')
//     console.log('ELEM')
// }



// DROP MENU

let selectHeader = document.querySelectorAll('.contacts-selection-header');
let selectItem = document.querySelectorAll('.contacts-selection-item');
let cityCard = document.querySelector('.contacts-city-card');


selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
});

function selectToggle() {
    this.parentElement.classList.toggle('drop-menu');
}

function selectChoose() {
    let text = this.innerText,
    currentText = this.closest('.contacts-selection').querySelector('.contacts-selection-current'),
    select = this.closest('.contacts-selection');

    // Change text with click
    currentText.innerText = text;
    if (currentText.innerText = 'Canandaigua, NY') {
        document.querySelector('.city').innerText = text;
        document.querySelector('.phone').innerText = '+1 585 393 0001';
        document.querySelector('.office').innerText = '151 Charlotte Street';
    } if (currentText.innerText = 'New York City') {
        document.querySelector('.city').innerText = text;
        document.querySelector('.phone').innerText = '+1 880 055 5353';
        document.querySelector('.office').innerText = '19 Oxford street';
    } if (currentText.innerText = 'Yonkers, NY') {
        document.querySelector('.city').innerText = text;
        document.querySelector('.phone').innerText = '+1 999 278 1933';
        document.querySelector('.office').innerText = "178  St.Eugene's Street";
    } if (currentText.innerText = 'Sherrill, NY') {
        document.querySelector('.city').innerText = text;
        document.querySelector('.phone').innerText = '+1 383 298 1344';
        document.querySelector('.office').innerText = "8 Megan's Fox Street";
    }

    // closing menu 
    select.classList.remove('drop-menu');
    
    //Change menu color
    select.style.background = "#C1E698";
    select.style.boxShadow = "none";
    select.style.border = "1px 1px 0px 1px solid #D6E7D2";

    // Open city card menu

    cityCard.classList.add('open')
}

alert('Привет, дай мне пожалуйста один день на доработку, буду очень благодарен ♥♥♥')











// pricesMenu.forEach(el => {
//     el.addEventListener('click', (e) => {
//         const self = e.currentTarget;
//         self.classList.toggle('show')

//         if (!self.classList.contains('show')) {
//             console.log('yes')
            
//         }
//     })
// })




// function hasClass(element, className) {
//     var rx = new RegExp('(?:^| )' + className + '(?: |$)');
//     return rx.test(element.className);
// }

// pricesMenu.addEventListener('click', function)

// pricesMenu.forEach(function(item) => {
//     if (item)
// })


// const serviceButton = document.getElementById('service-button-gardeners')

// function handleClick (event) {
//     this.
//     }


// serviceButton.addEventListener('click', handleClick)



