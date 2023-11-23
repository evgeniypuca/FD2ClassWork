// import { COLORS } from "./colors";
// import { createElementByColor } from "./createElementByColor";

// const mainEl = document.getElementById('main');


// const coloredElements = COLORS.map((color) => createElementByColor(color));
// //плохой вариант
// // for (const coloredElement of coloredElements){
// //     mainEl?.appendChild(coloredElement);
// // }

// //получше
// // mainEl?.append(...coloredElements);
// // mainEl?.insertAdjacentElement('be')

// // отличный, дерево обновится 1 раз только.

// mainEl?.appendChild(COLORS.reduce ((fragment, color) => {
//     fragment.appendChild(createElementByColor(color));
//     return fragment;
// }, document.createDocumentFragment()));



// mainEl?.addEventListener('click', (event) => {
//     const targetEl = event.target as HTMLElement;
//     const coloredEl = targetEl.closest<HTMLElement>('[data-color]')

//     if (coloredEl) {
//         const colorValue = coloredEl.getAttribute('data-color'); 
//         coloredEl.style.setProperty('background-color', colorValue)
//     }

// })




// const spanColection = mainEl
//     // ? Array.from(mainEl.querySelectorAll('[data-color]') as NodeListOf<HTMLElement>)
//     ? Array.from(mainEl.querySelectorAll<HTMLElement>('[data-color]'))
//     : [];
// spanColection.forEach((spanEl) => {
//     const colorValue = spanEl.textContent;


//     function paintBG() {
//         if (colorValue) {
//             spanEl.style.backgroundColor = colorValue;
//         }
//     }
//     spanEl.addEventListener('click', paintBG);
// });

// const bold = mainEl?.querySelector('#b');
// bold?.addEventListener('click', () => bold.classList.add('bold')) 
//=================================================================================

const pizzaOrderForm = document.forms.namedItem('pizzaOrder');
pizzaOrderForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(pizzaOrderForm);
    const pizzaOrder = {
        pizzas: formData.getAll('pizza'),
        addons: formData.getAll('addon'),
        paymentType: formData.get('paymentType'),
        customerName: (formData.get('customerName') as string).trim(),
        shippingAdress: String(formData.get('shippingAdress')).trim(),
    };

    console.log(pizzaOrder);
    
});
