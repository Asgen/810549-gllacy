  var link = document.querySelector(".map-button");

  var popup = document.querySelector(".modal-wrapper");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("modal-form");
  var login = popup.querySelector("[name=modal-name]");
  var email = popup.querySelector("[name=email]");

  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	popup.classList.add("modal-show");

  	if (storage) {
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
  	if (evt.keyCode === 27) {
    	evt.preventDefault();
    	if (popup.classList.contains("modal-show")) {
      	popup.classList.remove("modal-show");
      }
    }
  });