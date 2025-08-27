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
