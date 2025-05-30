
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('message').innerHTML = 'Дякуємо за реєстрацію!';
        setTimeout(function() {
            window.location.href = '../index.html'; 
        }, 2000);
    });
document.getElementById('registration-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    firstName: document.getElementById('first-name').value.trim(),
    lastName: document.getElementById('last-name').value.trim(),
    patronymic: document.getElementById('patronymic').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    country: document.getElementById('country').value.trim(),
    city: document.getElementById('city').value.trim(),
  };

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    const messageEl = document.getElementById('message');
    if (response.ok) {
      messageEl.style.color = 'green';
      messageEl.textContent = result.message;
      e.target.reset(); // очистити форму
    } else {
      messageEl.style.color = 'red';
      messageEl.textContent = result.message || 'Помилка реєстрації';
    }
  } catch (err) {
    document.getElementById('message').textContent = 'Помилка з\'єднання з сервером';
  }
});
