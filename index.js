const modal = document.querySelector("#modal")
const modalCloseBtn = document.querySelector("#modal-close-btn")
const modalInner = document.querySelector("#modal-inner")
const modalText = document.querySelector("#modal-text")
const modalForm = document.querySelector("#consent-form")
const modalFormChoiceBtns = document.querySelector("#modal-choice-btns")
const modalDeclineBtn = document.querySelector("#decline-btn")

setTimeout(() => {
  openModal()
}, 1500)

// EventListeners
modalForm.addEventListener("submit", (e) => {
  e.preventDefault()
  collectData()
})

modalDeclineBtn.addEventListener("mouseenter", () => {
  modalFormChoiceBtns.classList.toggle("modal-btns-reverse")
})

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

// Functions
function openModal() {
  modal.style.display = "inline"
}

function collectData() {
  const formData = new FormData(modalForm)
  const userName = formData.get("fullName")
  modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>
    `
  setTimeout(() => {
    document.querySelector("#upload-text").textContent = `
        Making the sale
    `
    setTimeout(() => {
      showResult(userName)
    }, 1500)
  }, 1500)
}

function showResult(fullName) {
  modalCloseBtn.removeAttribute("disabled")
  modalInner.innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
}
