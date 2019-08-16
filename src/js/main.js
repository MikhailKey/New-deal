//политика конфиденциальности
let policyButton = document.querySelector('.hero-footer-policy__text'),
    policyWindow = document.querySelector('.modal'),
    arrowLeave = document.querySelectorAll('.modal-arrow__close');

policyButton.addEventListener('click', function () {
    policyWindow.style.transform = 'translateX(0%)';
})
for (let i=0; i<arrowLeave.length; i++) {
    arrowLeave[i].addEventListener('click', function () {
        policyWindow.style.transform = 'translateX(100%)';
    })
}


let popupButton = document.querySelector('.callback'),
    popupWindow = document.querySelector('.popup-callback'),
    closeButton = document.querySelector('.popup-callback-close');

popupButton.addEventListener('click', function () {
    popupWindow.style.display = 'block'
})
closeButton.addEventListener('click', function () {
    popupWindow.style.display = 'none';
})