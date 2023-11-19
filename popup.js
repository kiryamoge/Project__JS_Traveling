const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.header-button');
const closePopupButton = document.querySelector('.close-popup');
const submitButton = document.querySelector('.popup button[type="submit"]');
const nameInput = document.querySelector('.popup input[name="name"]');
const telInput = document.querySelector('.popup input[name="tel"]');
const messageTextarea = document.querySelector('.popup textarea[name="message"]');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  });
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});

submitButton.addEventListener('click', (e) => {
  if (nameInput.value.trim() === '') {
    e.preventDefault();
    nameInput.style.borderColor = 'red';
    nameInput.placeholder = 'Пожалуйста, заполните это поле!';
  } else {
    nameInput.style.borderColor = '';
    nameInput.placeholder = 'Ваше имя';
  }

  if (telInput.value.trim() === '') {
    e.preventDefault();
    telInput.style.borderColor = 'red';
    telInput.placeholder = 'Пожалуйста, заполните это поле!';
  } else if (/[^+0-9]/.test(telInput.value.trim())) {
    e.preventDefault();
    telInput.style.borderColor = 'red';
    telInput.value = '';
    telInput.placeholder = 'Нельзя использовать буквы!';
  } else {
    telInput.style.borderColor = '';
    telInput.placeholder = 'Ваш телефон';
  }

  if (messageTextarea.value.trim() === '') {
    e.preventDefault();
    messageTextarea.style.borderColor = 'red';
    messageTextarea.placeholder = 'Пожалуйста, заполните это поле!';
  } else {
    messageTextarea.style.borderColor = '';
    messageTextarea.placeholder = 'Ваше сообщение';
  }
});



