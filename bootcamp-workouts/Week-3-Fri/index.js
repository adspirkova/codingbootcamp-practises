

const showMessage = () => {
    document.getElementById('textel').setAttribute('class', 'show');
    
};

const hideMessage = () => {
    document.getElementById('textel').setAttribute('class', 'hide');
    
};


document.addEventListener('DOMContentLoaded', () => {
        const hover = document.querySelector('#image'); /* Selecting DOM element with id image */
        hover.addEventListener("mouseenter", showMessage);
}); 


document.addEventListener('DOMContentLoaded', () => {
    const hover = document.querySelector('#image');
    hover.addEventListener("mouseleave", hideMessage); /* Assigning function hide to event listener */
    
}); 







