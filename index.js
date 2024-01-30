let questionButtons = document.getElementsByClassName("questionButton");
let questionAnswers = document.getElementsByClassName("FAQAnswer");
let formErrorMessage = document.getElementsByClassName("formErrorText")[0];
let formButton = document.getElementById("formButton");

function validateForm(event) {

  let contactInputEmail = document.getElementById("contactInputEmail").value;
  let contactInputEmailTarget = event.target;
//   simple email typechecking
  let contactInputEmailTrimmed = contactInputEmailTarget.value.replace( /\s/g,"");
// eliminating white spaces from the email input for the user
  contactInputEmailTarget.value = contactInputEmailTrimmed;

  if (event.key === "Enter" || event.keyCode === 13) {
    if (!contactInputEmail.includes("@")) {
      formErrorMessage.style.display = "block";
      formButton.classList.add("formDisabledButton");
    } else {
      formErrorMessage.style.display = "none";
      formButton.classList.remove("formDisabledButton");
    }
  }
}


// simple FAQArea UX
for (let i = 0; i < questionButtons.length; i++) {
  questionButtons[i].addEventListener("click", function () {
    this.classList.toggle("FAQClickedButton");
    questionAnswers[i].classList.toggle("FAQAnswerHidden");
  });
}
