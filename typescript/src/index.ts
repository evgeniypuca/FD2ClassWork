const mainEl = document.getElementById('main');
const spanColection = mainEl
    // ? Array.from(mainEl.querySelectorAll('[data-color]') as NodeListOf<HTMLElement>)
    ? Array.from(mainEl.querySelectorAll<HTMLElement>('[data-color]'))
    : [];
spanColection.forEach((spanEl) => {
    const colorValue = spanEl.textContent;


    function paintBG() {
        if (colorValue) {
            spanEl.style.backgroundColor = colorValue;
            setTimeout(() => {
                spanEl.style.removeProperty('background-color')
            }, 1000);
        }
    }
    spanEl.addEventListener('click', paintBG);
    setTimeout(() => {
        spanEl.removeEventListener('click', paintBG);
    }, 5000)

});

// const bold = mainEl?.querySelector('#b');
// bold?.addEventListener('click', () => bold.classList.add('bold')) 