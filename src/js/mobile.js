function popup (...args)
{
    let callButton = document.querySelector(args[0]),
        body = document.querySelector(args[1]),
        callCloseButton = document.querySelector(args[2]);

    callButton.addEventListener('click', function()
    {
        body.classList.add('mobile-popup-callback__active');
    });

    callCloseButton.addEventListener('click', function()
    {
        body.classList.remove('mobile-popup-callback__active');
    });
}

function modalService(...args) 
{
    let openButton = document.querySelectorAll(args[0]),
        body = document.querySelector(args[1]),
        arrowLeaves = document.querySelectorAll(args[2]);

        openButton.forEach(function(button) 
        {
            let title = document.querySelector(args[3]),
                text = document.querySelector(args[4]);   

            button.addEventListener('click', function() 
            {
                title.innerHTML = this.getAttribute('data-title');
                text.innerHTML = this.getAttribute('data-content');
                body.classList.add('mobile-service__active');
            });  
        })

    arrowLeaves.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function () 
        {
            body.classList.remove('mobile-service__active');
        })
    });

    document.addEventListener('mouseup', function (e) 
    {
        let div = document.querySelector('.mobile-service');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('mobile-service__active');
        }
    }.bind(this));
}

function modal(...args) 
{
    let modalButton = document.querySelectorAll(args[0]),
        body = document.querySelector(args[1]),
        arrowLeave = document.querySelectorAll(args[2]);

    modalButton.forEach(function(button) 
    {
        let title = document.querySelector(args[3]),
            text = document.querySelector(args[4]);

        button.addEventListener('click', function () 
        {
            body.classList = '';
            title.innerHTML = this.getAttribute('data-title');
            text.innerHTML = this.getAttribute('data-content');
            body.classList.add('mobile-modal__active');
        });
    });

    arrowLeave.forEach(function(arrow) 
    {
        arrow.addEventListener('click', function () 
        {
            body.classList.remove('mobile-modal__active');
        });
    });

    document.addEventListener('mouseup', function (e) 
    {
        let div = document.querySelector('.mobile-modal');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('mobile-modal__active');
        }
    }.bind(this));
}

function modalContacts(...args) 
{
    let contactsButton = document.querySelector(args[0]),
        body = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]);
    contactsButton.addEventListener('click', function() 
    {
        body.classList.add('mobile-contacts__active');
    });

    closeButton.forEach(function(button) 
    {
        button.addEventListener('click', function() 
        {
            body.classList.remove('mobile-contacts__active');
        })
    });

    document.addEventListener('mouseup', function (e) 
    {
        let div = document.querySelector('.mobile-contacts');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('mobile-contacts__active');
        }
    }.bind(this));
}

function modalDebt(...args) 
{
    let debtButton = document.querySelector(args[0]),
        body = document.querySelector(args[1]),
        closeButton = document.querySelectorAll(args[2]),
        title = document.querySelector(args[3]),
        text = document.querySelector(args[4]); 

    debtButton.addEventListener('click', function() {
        body.classList.add('mobile-debt__active');
        title.innerHTML = this.getAttribute('data-title');
        text.innerHTML = this.getAttribute('data-content');
    });
    closeButton.forEach(function(button) 
    {
        button.addEventListener('click', function() 
        {
            body.classList.remove('mobile-debt__active');
        })
    });

    document.addEventListener('mouseup', function (e) 
    {
        let div = document.querySelector('.mobile-debt');
    
        if (!div.contains(e.target)) 
        {
            body.classList.remove('mobile-debt__active');
        }
    }.bind(this));
}
popup('.mobile-callback', 'body', '.mobile-popup-callback__close');

modalService('.navigation-item', 'body', '.mobile-service__arrow__close', '.mobile-service__title', '.mobile-service__text');

modal('.mobile-modal-link', 'body', '.mobile-modal__arrow__close', '.mobile-modal__title', '.mobile-modal__text');

modalContacts('.mobile-modal-contact', 'body', '.mobile-contacts__arrow__close');

modalDebt('.navigation-item__debt', 'body', '.mobile-debt__arrow__close', '.mobile-debt__title', '.mobile-debt__text');