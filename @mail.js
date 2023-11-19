function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showMessage(message, color) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.style.marginTop = '20px';
    messageElement.style.fontSize = '25px';
  
    const form = document.querySelector('.form__footer');
    form.appendChild(messageElement);
  
    setTimeout(() => {
      messageElement.style.opacity = '0';
      messageElement.style.transition = 'opacity 0.5s ease';
  
      setTimeout(() => {
        form.removeChild(messageElement);
      }, 500);
    }, 3000);
  }
  
  function handleClick() {
    const input = document.querySelector('.footer__search input');
    const email = input.value;
    if (email === "") { 
        showMessage('Введите данные!', 'orange'); 
    } else if (isValidEmail(email)) { 
        localStorage.setItem('email', email); 
        showMessage('Спасибо за подписку!', 'green'); 
    } else { showMessage('Проверьте введенный адрес!', 'red'); 
    }
  }
  
  const button = document.querySelector('.footer__search-button');
  button.addEventListener('click', handleClick); 
