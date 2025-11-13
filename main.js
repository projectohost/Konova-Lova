const headers = document.querySelectorAll(".service-header");
const lists = document.querySelectorAll(".service-list");
let prevSelected = "";
let element = "";

lists.forEach((list) => {
  list.classList.add("hidden-block");
});

function getData(btn) {
  let targetId = btn.getAttribute("data-target");
  element = document.getElementById(targetId);

  element.classList.toggle("show-block");

  if (targetId !== prevSelected) {
    element = document.getElementById(prevSelected);
    if (element) {
      element.classList.remove("show-block");
      console.log("Успішно видалено клас для показу елементу service-list!");
    } else {
      console.log("Ще не показано жодного елменту з класом show-block!");
    }
  }

  prevSelected = targetId;
}

function openPopup(button) {
  const li = button.closest('li')
  const serviceName = li.querySelector('span').textContent
  document.getElementById('service-title').textContent = serviceName
  document.getElementById('popup-bg').style.display = 'flex'
}

function closePopup() {
  document.getElementById('popup-bg').style.display = 'none'
}

function submitForm() {
  const name = document.getElementById('name').value.trim()
  const phone = document.getElementById('phone').value.trim()

  if (name && phone) {
    closePopup()
    showMessagePopup('Дякуємо! Ми з вами зв’яжемось.')
  } else {
    showMessagePopup('Будь ласка, заповніть усі поля.', true)
  }
}

function showMessagePopup(text, isError = false) {
  const popup = document.getElementById('message-popup')
  popup.textContent = text
  popup.style.background = isError ? '#ffffff' : '#fff'
  popup.style.bottom = '30px'
  setTimeout(() => {
    popup.style.bottom = '-80px'
  }, 3000)
}
