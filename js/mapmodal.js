var mapLink = document.querySelector(".map-image");
var mapModal = document.querySelector(".modal-map");
var mapClose = document.querySelector(".close-button-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});