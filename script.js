/**
 * Функция для запуска таймера на 1 час.
 * Таймер отсчитывает время в формате "часы:минуты:секунды" и выводит его в консоль каждую секунду.
 * Когда таймер достигает нуля, он останавливается и выводит сообщение "Timer finished!".
 */
// Функция для запуска таймера на 1 час
function startOneHourTimer() {
    let timer = 3600; // 1 час в секундах
    const interval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(interval);
            console.log("Timer finished!");
        } else {
            timer--;
            // const hours = Math.floor(timer / 3600);
            const minutes = Math.floor((timer % 3600) / 60);
            const seconds = timer % 60;
            // console.log(`${minutes}m ${seconds}s`);
        }
    }, 1000);
}

// Start the timer
startOneHourTimer();



function generateRandomDigits() {
    let digits = "";
    for (let i = 0; i < 9; i++) {
      digits += Math.floor(Math.random() * 10);
    }
    return digits;
  }

  const p = document.getElementById('result');
  // Добавляем сгенерированные цифры к уже существующему тексту
  p.innerHTML += '<strong>' + generateRandomDigits() + '</strong>';

document.addEventListener("DOMContentLoaded", function () {
    let loadTime = new Date();
    loadTime.setMinutes(loadTime.getMinutes() - 20); // Уменьшаем время на 20 минут
    
    let formattedDate = loadTime.toLocaleDateString();
    let formattedTime = loadTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    let dateElement = document.getElementById("data-p");
    let timeElement = document.getElementById("taim-p");
    
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    if (timeElement) {
        timeElement.textContent = formattedTime;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Устанавливаем время отсчета в 40 минут (в секундах)
    let countdownTime = 40 * 60;
    const display = document.getElementById("p2");
    
    function updateTimer() {
        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        countdownTime--;
        if (countdownTime < 0) {
            countdownTime = 40 * 60;
        }
        setTimeout(updateTimer, 1000);
    }
    
    updateTimer();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker зарегистрирован!'))
        .catch(err => console.error('Ошибка:', err));
}
