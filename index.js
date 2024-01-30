let questionButtons = document.getElementsByClassName("questionButton");
let questionAnswers = document.getElementsByClassName("FAQAnswer");
let formErrorMessage = document.getElementsByClassName("formErrorText")[0];
let formButton = document.getElementById("formButton");
let contactInputEmailWrapper = document.getElementById("contactInputEmail");  

// error and success styling removed on click outside the input for user accommodation
function focusOutMail(){
    formErrorMessage.style.display = 'none'
    contactInputEmailWrapper.style.outline ='none'
}

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
      contactInputEmailWrapper.style.outline = "2px solid #eb5757";
      formButton.classList.add("formDisabledButton");
    } else {
      formErrorMessage.style.display = "none";
      contactInputEmailWrapper.style.outline = "2px solid #0eac00";
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
