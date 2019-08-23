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
            
            document.addEventListener('mouseup', function (e) {
                let div = document.querySelector('.modal');
            
                if (!div.contains(e.target)) 
                {
                    body.classList.remove('modal__active');
                }
            }.bind(this));
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

    document.addEventListener('mouseup', function (e) {
        let div = document.querySelector('.service-modal');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('service-modal__active');
        }
    }.bind(this));
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
    });

    closeButton.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function() 
        {
            body.classList.remove('modal-contacts-window__active');
        })
    })

    document.addEventListener('mouseup', function (e) {
        let div = document.querySelector('.modal-contacts-window');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('modal-contacts-window__active');
        }
    }.bind(this));
}
function showServiceDebt(...args)
{
    let debtButton = document.querySelector(args[0]),
        body = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]);

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

    document.addEventListener('mouseup', function (e) {
        let div = document.querySelector('.service-modal-debt');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('service-modal-debt__active');
        }
    }.bind(this));
}
function showPopup(...args) 
{
    let popupButton = document.querySelector(args[0]),
    body = document.querySelector(args[1]),
    closeButton = document.querySelector(args[2]);

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
function ecsHide() {
    let body = document.querySelector('body').addEventListener("keypress", function(e)
    {
       if (e.keyCode === 13) 
       {
           console.log(body);
       };
    });
}
showModal('.modal-info', 'body', '.modal-arrow__close', '.modal-title', '.modal-arrow__close');
showServiceModal('.dot-wrap', 'body ', '.service-modal-arrow__close', '.service-modal-title', '.service-modal-text');
showContacts('.modal-contacts', 'body', '.modal-contacts__close');
showServiceDebt('.dot-debt', 'body', '.service-debt-arrow__close');
showPopup('.callback', 'body', '.popup-callback-close');
attachFile('.service-modal-footer__add-file input');
ecsHide();
