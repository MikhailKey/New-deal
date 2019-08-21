function popup (...args){
    let callButton = document.querySelector(args[0]),
        callWindow = document.querySelector(args[1]),
        callCloseButton = document.querySelector(args[2]);

    callButton.addEventListener('click', function(){
        callWindow.style.display = 'block';
    })
    callCloseButton.addEventListener('click', function(){
        callWindow.style.display = 'none';

    })
}

function modalService(...args) {
    let openButton = document.querySelectorAll(args[0]),
    formWindow = document.querySelector(args[1]),
    arrowLeaves = document.querySelectorAll(args[2]);

for (let i=0; i<openButton.length; i++) 
{    
    let title = document.querySelector(args[3]),
        text = document.querySelector(args[4]);   

    openButton[i].addEventListener('click', function() 
    {
        title.innerHTML = this.getAttribute('data-title');
        text.innerHTML = this.getAttribute('data-content');
        formWindow.style.display = 'block';
    });       
}
//close button
for (let i=0; i<arrowLeaves.length; i++) {
    arrowLeaves[i].addEventListener('click', function () {
        formWindow.style.display = 'none';
    })
}

}

function modal(...args) 
{
    let modalButton = document.querySelectorAll(args[0]),
        modalWindow = document.querySelector(args[1]),
        arrowLeave = document.querySelectorAll(args[2]);

    for (let i=0; i<modalButton.length; i++) 
        {
            let title = document.querySelector(args[3]),
                text = document.querySelector(args[4]);
                modalButton[i].addEventListener('click', function () 
            {
            title.innerHTML = this.getAttribute('data-title');
            text.innerHTML = this.getAttribute('data-content');
            modalWindow.style.display = 'block';
            });
        }

    for (let i=0; i<arrowLeave.length; i++) {
        arrowLeave[i].addEventListener('click', function () {
            modalWindow.style.display = 'none';
        });
    }
}

function modalContacts(...args) {
    let contactsButton = document.querySelector(args[0]),
        contactsWindow = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]);
    contactsButton.addEventListener('click', function() {
        contactsWindow.style.display = 'block';
    })
    for (let i=0; i<closeButton.length; i++) {
        closeButton[i].addEventListener('click', function() {
                contactsWindow.style.display = 'none';
        })
    }
}

function modalDebt(...args) {
    let debtButton = document.querySelector(args[0]),
        debtWindow = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]),
        title = document.querySelector(args[3]),
        text = document.querySelector(args[4]); 
    debtButton.addEventListener('click', function() {
        debtWindow.style.display = 'block';
        title.innerHTML = this.getAttribute('data-title');
        text.innerHTML = this.getAttribute('data-content');
    })
    for (let i=0; i<closeButton.length; i++) {
        closeButton[i].addEventListener('click', function() {
                debtWindow.style.display = 'none';
        })
    }
}
popup('.mobile-callback', '.mobile-popup-callback', '.mobile-popup-callback__close');

modalService('.navigation-item', '.mobile-service', '.mobile-service__arrow__close', '.mobile-service__title', '.mobile-service__text');

modal('.mobile-modal-link', '.mobile-modal', '.mobile-modal__arrow__close', '.mobile-modal__title', '.mobile-modal__text');

modalContacts('.mobile-modal-contact', '.mobile-contacts', '.mobile-contacts__arrow__close');

modalDebt('.navigation-item__debt', '.mobile-debt', '.mobile-debt__arrow__close', '.mobile-debt__title', '.mobile-debt__text');