/* FeedBack PopUp */

if (document.querySelector(".contacts--open__modal")) {

  const feedbackOpen = document.querySelector(".contacts--open__modal");
  const feedbackPopup = document.querySelector(".feedback__modal");

  let feedbackClose = feedbackPopup.querySelector(".feedback--close__modal");
  let feedbackForm = feedbackPopup.querySelector("feedback--form__modal");
  let feedbackName = feedbackPopup.querySelector(".feedback--name__modal");
  let feedbackEmail = feedbackPopup.querySelector(".feedback--email__modal");
  let feedbackMessage = feedbackPopup.querySelector(".feedback--message__modal");
  let feedbackSubmit = feedbackPopup.querySelector(".feedback--submit__modal");

  let isNameSupport = true;
  let name = "";

  try {
    name = localStorage.getItem("name");
  } catch (err) {
    isNameSupport = false;
  }

  let isEmailSupport = true;
  let email = "";

  try {
    email = localStorage.getItem("email");
  } catch (err) {
    isEmailSupport = false;
  }

  feedbackOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("feedback--show__modal");

    if (name && email) {
      feedbackName.value = name;
      feedbackEmail.value = email;
      feedbackMessage.focus();
    } else if (name && !email) {
      feedbackName.value = name;
      feedbackEmail.focus();
    }else if (email && !name) {
      feedbackEmail.value = email;
      feedbackName.focus();
    } else {
      feedbackName.focus();
    }
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("feedback--show__modal");
    feedbackPopup.classList.remove("feedback--error__modal");
  });

  feedbackSubmit.addEventListener("click", function (evt) {
    if ( (!feedbackName.value || !feedbackEmail.value) || !feedbackMessage.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("feedback--error__modal");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("feedback--error__modal");
    } else {
      if (isNameSupport) {
        localStorage.setItem("name", feedbackName.value);
      }
      if (isEmailSupport) {
        localStorage.setItem("email", feedbackEmail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("feedback--show__modal")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("feedback--show__modal");
        feedbackPopup.classList.remove("feedback--error__modal");
      }
    }
  });

};
