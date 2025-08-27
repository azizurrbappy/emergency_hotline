// Heart Btn Functionality
const heartCounters = document.querySelectorAll('.heart-counter');
const heartBtns = document.querySelectorAll('.heart-btn');
let heartCount = 0;

for (let heartBtn of heartBtns) {
  heartBtn.addEventListener('click', function () {
    heartCount++;

    for (let heratCounter of heartCounters) {
      heratCounter.textContent = heartCount;
    }
  });
}

// Copy Button Functionality
const copyButtons = document.querySelectorAll('.copy_btn');
const copyCounters = document.querySelectorAll('.copy-counter');
let copyCount = 0;

for (let copyBtn of copyButtons) {
  copyBtn.addEventListener('click', function (e) {
    const serviceCard = e.target.closest('.service');
    const phoneNumber = serviceCard.querySelector('h2').textContent;

    navigator.clipboard.writeText(phoneNumber).then(function () {
      copyCount++;

      for (let copyCounter of copyCounters) {
        copyCounter.textContent = copyCount;
      }
    });
  });
}

// Call and Call History Functionality
const callButtons = document.querySelectorAll('.call_btn');
let coins = parseInt(document.querySelector('.coin-counter').textContent);

for (const callButton of callButtons) {
  callButton.addEventListener('click', function () {
    const card = this.closest('.service');
    const serviceSubTitle = card.querySelector('p').textContent;
    const serviceNumber = card.querySelector('h2').textContent;

    if (coins >= 0 && coins < 20) {
      return alert(
        '❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।'
      );
    }

    if (coins >= 20) {
      alert(`📞 Calling ${serviceSubTitle} Service ${serviceNumber}...`);

      coins -= 20;
      document.querySelector('.coin-counter').textContent = coins;

      // Call History ---------------------------------
      const serviceName = card.querySelector('h3').textContent;

      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const callHistory = document.createElement('div');
      callHistory.classList.add('call_history');

      const callInfo = document.createElement('div');
      callInfo.classList.add('call_info');
      callInfo.innerHTML = `
      <h5>${serviceName}</h5>
      <p>${serviceNumber}</p>
      `;

      const callTime = document.createElement('div');
      callTime.classList.add('call_time');
      callTime.innerHTML = `<p>${currentTime}</p>`;

      callHistory.appendChild(callInfo);
      callHistory.appendChild(callTime);

      document.querySelector('.aside_body').appendChild(callHistory);
    }
  });
}

document
  .querySelector('.aside_head button')
  .addEventListener('click', function () {
    document.querySelector('.aside_body').innerHTML = '';
  });
