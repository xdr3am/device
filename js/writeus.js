var writeusLink = document.querySelector(".contacts-button");
var writeusModal = document.querySelector(".modal-writeus");
var writeusClose = document.querySelector(".close-button-writeus");
var writeusForm = document.querySelector(".modal-writeus-form");
var writeusName = document.querySelector(".modal-input-name");
var writeusEmail = document.querySelector(".modal-input-email");
var writeusText = document.querySelector(".modal-textarea");

var isStoregeSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("Name");
  storageEmail = localStorage.getItem("Email");
} catch (err) {
  isStoregeSupport = false;
}

writeusLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusModal.classList.add("modal-show");

  if (storageName, storageEmail) {
    writeusName.value = storageName;
    writeusEmail.value = storageEmail;
    writeusText.focus();
  } else {
    writeusName.focus();
  }
});

writeusClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusModal.classList.remove("modal-show");
  writeusModal.classList.remove("modal-error");
});

writeusForm.addEventListener("submit", function (evt) {
  if (!writeusName.value || !writeusEmail.value) {
    evt.preventDefault();
    writeusModal.classList.remove("modal-error");
    writeusModal.offsetWidth = writeusModal.offsetWidth;
    writeusModal.classList.add("modal-error");
  } else {
    if (isStoregeSupport) {
      localStorage.setItem("Name", writeusName.value);
      localStorage.setItem("Email", writeusEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeusModal.classList.contains("modal-show")) {
      evt.preventDefault();
      writeusModal.classList.remove("modal-show");
      writeusModal.classList.remove("modal-error");
    }
  }
});
