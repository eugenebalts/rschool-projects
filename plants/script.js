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

let contactsData = [
    {
        city: 'Canandaigua, NY',
        phone: '+1 585 393 0001', 
        adress: "151 Charlotte Street"
    },
    {
        city: 'New York City',
        phone: '+1 212 456 0002', 
        adress: "9 East 91 Street"
    },
    {
        city: 'Yonkers, NY',
        phone: '+1 914 678 0003', 
        adress: "511 Warburton Ave"
    },
    {
        city: 'Sherrill, NY',
        phone: '+1 315 908 0004', 
        adress: "14 WEST Noyses BLVD"
    }
];



contactsData.forEach(item => {
    let div = document.createElement('div');
    div.innerText = item.city;
    div.classList.add('contacts-selection-item');

    div.addEventListener('click', (e) => {
        document.querySelector('.city').innerText = item.city;
        document.querySelector('.phone').innerText = item.phone;
        document.querySelector('.office').innerText = item.adress;

        let currentText = e.target.closest('.contacts-selection').querySelector('.contacts-selection-current'),
        select = e.target.closest('.contacts-selection');

        currentText.innerText = item.city;
        // Change text with click
    
        // closing menu 
        select.classList.remove('drop-menu');
        
        //Change menu color
        select.style.background = "#C1E698";
        select.style.boxShadow = "none";
        select.style.border = "1px 1px 0px 1px solid #D6E7D2";
    
        // Open city card menu
    
        cityCard.classList.add('open')
        
        document.querySelector('.contacts-city-card-button').setAttribute('href', `tel: ${item.phone}`)

    })

    document.querySelector('.contacts-selection-body').append(div)
})




selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
});

function selectToggle() {
    this.parentElement.classList.toggle('drop-menu');
}


// BLUR CARDS

let serviceItem = document.querySelectorAll('.service-item');
let gardensButton = document.querySelector('.service-button.gardens');
let lawnButton = document.querySelector('.service-button.lawn');
let plantingButton = document.querySelector('.service-button.planting');
let allButtons = document.querySelectorAll('.service-button');
console.log(allButtons)


allButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        alert('с этим заданием я не справился, но очень хотел бы разобраться. Если есть желание помочь, наведи в комментариях на верный путь пожалуйста, буду ооочень благодарен!) Знаю, что скорее через массивы надо делать, но никак не могу сообразить')
        event.target.classList.toggle('active')
        serviceItem.forEach(item => {
            //ОДИНОЧНОЕ НАЖАТИЕ
            if (event.target.classList.contains('gardens')) {
                if (!item.classList.contains('gardens')) {
                    item.classList.toggle('blur')
                }
            }

            if (event.target.classList.contains('lawn')) {
                if (!item.classList.contains('lawn')) {
                    item.classList.toggle('blur')
                }
            }

            if (event.target.classList.contains('planting')) {
                if (!item.classList.contains('planting')) {
                    item.classList.toggle('blur')
                }
            }

            // 2 КНОПКИ

            // if (event.target.classList.contains('gardens')) {
            //     if (button.classList.contains('active') && item.classList.contains('lawn')) {
            //         item.classList.toggle('blur')
            //     } else if (event.target.classList.contains('gardens')) {
            //         if (!item.classList.contains('gardens')) {
            //             item.classList.toggle('blur')
            //         }
            //     }
            // } 


        })


    })


})


// 

// alert('Привет, дай мне пожалуйста один день на доработку, буду очень благодарен ♥♥♥')











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



