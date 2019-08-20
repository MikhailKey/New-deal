//модальное окно
let modalButton = document.querySelectorAll('.modal-info'),
    modalWindow = document.querySelector('.modal'),
    arrowLeave = document.querySelectorAll('.modal-arrow__close');

for (let i=0; i<modalButton.length; i++) 
    {
        let title = document.querySelector('.modal-title'),
            text = document.querySelector('.modal-text');
            modalButton[i].addEventListener('click', function () 
        {
           title.innerHTML = this.getAttribute('data-title');
           text.innerHTML = this.getAttribute('data-content');
           modalWindow.classList.add('modal-active');
        });
    }

for (let i=0; i<arrowLeave.length; i++) {
    arrowLeave[i].addEventListener('click', function () {
        modalWindow.classList.remove('modal-active');
    });
}

//модальное окно с заявкой
let openButton = document.querySelectorAll('.dot-wrap'),
    formWindow = document.querySelector('.service-modal'),
    arrowLeaves = document.querySelectorAll('.service-modal-arrow__close'),
    addFile = document.querySelector('.service-modal-footer__add-file');
for (let i=0; i<openButton.length; i++) 
    {    
        let title = document.querySelector('.service-modal-title'),
            text = document.querySelector('.service-modal-text');   
        if (!openButton[i].innerHTML.includes('Выкуп долгов')) 
        {
            openButton[i].addEventListener('click', function() 
            {
                title.innerHTML = this.getAttribute('data-title');
                text.innerHTML = this.getAttribute('data-content');
                formWindow.classList.add('service-modal-active');
                addFile.style.display = 'none';
            });
        } 
        else 
        {
            openButton[i].addEventListener('click', function() 
            {
                title.innerHTML = this.getAttribute('data-title');
                text.innerHTML = this.getAttribute('data-content');
                formWindow.classList.add('service-modal-active');
                addFile.style.display = 'flex';
            });
        }
        openButton[i].addEventListener('mousemove', function() 
        {
            this.classList.toggle('.dot-wrap__index');
        })

    }

//контакты
let contactsLayout = `
<div class="contacts">
    <div class="contacts-item">
        <img class="contacts-item__image" src="img/hero/contacts/phone.png" alt="">
        <p class="contacts-item__info">+7 (495) 374–66–55</p>
    </div>
    <div class="contacts-item">
        <img class="contacts-item__image" src="img/hero/contacts/phone.png" alt="">
        <p class="contacts-item__info">+7 (8452) 74–66–55 </p>
    </div>
    <div class="contacts-item">
        <img class="contacts-item__message contacts-item__image" src="img/hero/contacts/message.png" alt="">
        <p class="contacts-item__info">info@dolgoved.ru</p>
    </div>				
</div>
<div class="contacts-map">
Здесь должна быть карта, но её почему-то нет
<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A620846f27cf62b0a71a587efe57c41733c6e2507ba717f27b247f25c70dbbe8b&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true"></script>
</div>
`
let contactsButton = document.querySelector('.modal-contacts');
contactsButton.addEventListener('click', function()
    {
        let title = document.querySelector('.modal-title'),
            text = document.querySelector('.modal-text'); 
            title.innerHTML = this.getAttribute('data-title');
            text.innerHTML = contactsLayout;
            modalWindow.classList.add('modal-active');
    })
//close button
for (let i=0; i<arrowLeaves.length; i++) {
    arrowLeaves[i].addEventListener('click', function () {
        formWindow.classList.remove('service-modal-active');
    })
}

//обратная связь
let popupButton = document.querySelector('.callback'),
    popupWindow = document.querySelector('.popup-callback'),
    closeButton = document.querySelector('.popup-callback-close');

popupButton.addEventListener('click', function () {
    popupWindow.style.transform = 'translateX(0%)';
})
closeButton.addEventListener('click', function () {
    popupWindow.style.transform = 'translateX(100%)';
})

//добавление файла
let inputs = document.querySelectorAll('.service-modal-footer__add-file input');
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


//мобильная версия 

