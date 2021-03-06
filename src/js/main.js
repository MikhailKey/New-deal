let hero = document.querySelector('.hero');

function showModal(...args) 
{    
    let modalButton = document.querySelectorAll(args[0]),
        body = document.querySelector(args[1]),
        arrowLeave = document.querySelectorAll(args[2]);
        
    modalButton.forEach((button) => 
    {
        let title = document.querySelector(args[3]),
            text = document.querySelector(args[4]);

        button.addEventListener('click', function() 
        {
            title.innerHTML = this.getAttribute('data-title');
            text.innerHTML = this.getAttribute('data-content');
            body.classList.add('modal__active');
            hero.classList.add('blur');
        });
    })  

    arrowLeave.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('modal__active');
            hero.classList.remove('blur');
        });
    })
}

function showServiceModal(...args) 
{
    let openButton = document.querySelectorAll(args[0]),
        body = document.querySelector(args[1]),
        arrowLeaves = document.querySelectorAll(args[2]),
        title = document.querySelector(args[3]),
        text = document.querySelector(args[4]); 

    openButton.forEach(function(button) 
    {
        if (!button.innerHTML.includes('Выкуп долгов')) 
        {
            button.addEventListener('click', function() 
            {
                title.innerHTML = this.getAttribute('data-title');
                text.innerHTML = this.getAttribute('data-content');
                body.classList.add('service-modal__active');
                hero.classList.add('blur');
            });
        }
    })

    arrowLeaves.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('service-modal__active');
            hero.classList.remove('blur');
        })
    })
}
//контакты
function showContacts(...args) 
{
    let contactsButton = document.querySelector(args[0]),
        body = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]);

    contactsButton.addEventListener('click', function() 
    {
        body.classList.add('modal-contacts-window__active');
        hero.classList.add('blur');
    });

    closeButton.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('modal-contacts-window__active');
            hero.classList.remove('blur');
        })
    })
}

function showServiceDebt(...args)
{
    let debtButton = document.querySelector(args[0]),
        body = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]),
        text = document.querySelector(args[3]),
        title = document.querySelector(args[4]);

    debtButton.addEventListener('click', function() 
    {
        body.classList.add('service-modal-debt__active');
        title.innerHTML = this.getAttribute('data-title');
        text.innerHTML = this.getAttribute('data-content');
        hero.classList.add('blur');
    });

    closeButton.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('service-modal-debt__active');
            hero.classList.remove('blur');
        })
    })
}

function showPopup(...args) 
{
    let popupButton = document.querySelector(args[0]),
    body = document.querySelector(args[1]),
    closeButton = document.querySelector(args[2]);

    popupButton.addEventListener('click', function () 
    {
        body.classList.add('popup-callback__active');
        hero.classList.add('blur');
    })

    closeButton.addEventListener('click', function () 
    {
        body.classList.remove('popup-callback__active');
        hero.classList.remove('blur');
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

function escHide(arg) 
{
    document.addEventListener('keydown', function(e) {
        let body = document.querySelector(arg);
        if (e.keyCode === 27) 
        {
            body.classList = '';
            hero.classList.remove('blur');
        }
    });
}

function hideModal(arg) 
{
    document.addEventListener('mouseup', function (e) 
    {
        let body = document.querySelector(arg);

            if (hero.contains(e.target)) 
            {
                body.classList = '';
                hero.classList.remove('blur');
            }
    });
}

function hidePopup(...args)
{
    document.addEventListener('mouseup', function(e)
    {
        let popupWrap = document.querySelector(args[0]),
            popupContent = document.querySelector(args[1]);
        
        if (popupWrap.contains(e.target) && !popupContent.contains(e.target))
        {
            document.body.classList.remove('popup-callback__active');
            hero.classList.remove('blur');
        }
    })
}


showModal('.modal-info', 'body', '.modal-arrow__close', '.modal-title', '.modal-text');
showServiceModal('.dot-wrap', 'body ', '.service-modal-arrow__close', '.service-modal-title', '.service-modal-text');
showContacts('.modal-contacts', 'body', '.modal-contacts__close');
showServiceDebt('.dot-debt', 'body', '.service-debt-arrow__close', '.service-modal-debt__text', '.service-modal-debt__title');
showPopup('.callback', 'body', '.popup-callback-close');
attachFile('.service-modal-footer__add-file__input');
escHide('body');
hideModal('body');
hidePopup('.popup-callback', '.popup-callback-content');

ymaps.ready(init); 
function init(){
	var myMap = new ymaps.Map("map",{center: [55.75985606898725,37.61054750000002],zoom: 12});
	myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
    var myPlacemark = new ymaps.Placemark([55.75985606898725,37.61054750000002], {}, {preset: 'twirl#blackIcon'
    })
   
    myMap.geoObjects.add(myPlacemark);	

    var myMobileMap = new ymaps.Map("map2",{center: [55.75985606898725,37.61054750000002],zoom: 12});
	myMobileMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
    var myMobilePlacemark = new ymaps.Placemark([55.75985606898725,37.61054750000002], {}, {preset: 'twirl#blackIcon'
    })
   
	myMobileMap.geoObjects.add(myMobilePlacemark);	
}
