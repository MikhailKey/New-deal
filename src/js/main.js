function getElement(classCSS) {
    return document.querySelector(classCSS);
}

function getElements(classCSS) {
    return document.querySelectorAll(classCSS);
}

function showModal(...args) 
{    
    let modalButton = getElements(args[0]),
        body = document.querySelector(args[1]),
        arrowLeave = getElements(args[2]);
        

    modalButton.forEach((button) => 
    {
        let title = getElement(args[3]),
            text = getElement(args[4]);
        button.addEventListener('click', function() 
            {
            title.innerHTML = this.getAttribute('data-title');
            text.innerHTML = this.getAttribute('data-content');
            body.classList.add('modal__active');
            });
    })  

    arrowLeave.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('modal__active');
        });
    })
}

function showServiceModal(...args) 
{
    let openButton = getElements(args[0]),
        body = document.querySelector(args[1]),
        arrowLeaves = getElements(args[2]),
        title = getElement(args[3]),
        text = getElement(args[4]); 
    openButton.forEach(function(button) 
    {
        if (!button.innerHTML.includes('Выкуп долгов')) 
        {
            button.addEventListener('click', function() 
            {
                title.innerHTML = this.getAttribute('data-title');
                text.innerHTML = this.getAttribute('data-content');
                body.classList.add('service-modal__active');
            });
        }
    })

    arrowLeaves.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('service-modal__active');
        })
    })
}
//контакты
function showContacts(...args) 
{
    let contactsButton = getElement(args[0]),
        body = document.querySelector(args[1]),
        closeButton = getElements(args[2]);
    contactsButton.addEventListener('click', function() 
    {
        body.classList.add('modal-contacts-window__active');
    });
    closeButton.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('modal-contacts-window__active');
        })
    })
}
function showServiceDebt(...args)
{
    let debtButton = getElement(args[0]),
        body = document.querySelector(args[1]),
        closeButton = getElements(args[2]);
    debtButton.addEventListener('click', function() 
    {
        body.classList.add('service-modal-debt__active');
    });
    closeButton.forEach(function(arrow) {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('service-modal-debt__active');
        })
    })
}
function showPopup(...args) 
{
    let popupButton = getElement(args[0]),
    body = document.querySelector(args[1]),
    closeButton = getElement(args[2]);

    popupButton.addEventListener('click', function () 
    {
        body.classList.add('popup-callback__active');
    })
    closeButton.addEventListener('click', function () 
    {
        body.classList.remove('popup-callback__active');
    })
}
function attachFile(...args) 
{
    let inputs = document.querySelectorAll(args[0]);
    Array.prototype.forEach.call(inputs, function(input){
    let label	 = input.previousElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function(e){
    let fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
		if( fileName )
      label.innerHTML = fileName;
    else
      label.innerHTML = labelVal;
	});
});
}


showModal('.modal-info', 'body', '.modal-arrow__close', '.modal-title', '.modal-arrow__close');
showServiceModal('.dot-wrap', 'body ', '.service-modal-arrow__close', '.service-modal-title', '.service-modal-text');
showContacts('.modal-contacts', 'body', '.modal-contacts__close');
showServiceDebt('.dot-debt', 'body', '.service-debt-arrow__close');
showPopup('.callback', 'body', '.popup-callback-close');
attachFile('.service-modal-footer__add-file input');


