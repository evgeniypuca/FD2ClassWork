
const form = document.forms.namedItem('form');



form?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const todo = formData.get('todo') as string;
    
        
    const output = document.querySelector('#output'); 

});



