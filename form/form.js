//validation part

//name

let nameInput = document.getElementById("name");
let nameError = document.getElementById("err1-name");

nameInput.addEventListener("blur", function () {
  let name = nameInput.value.trim();
  if (name === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("error");
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
  }
});

//email

let emailInput = document.getElementById("email");
let emailError = document.getElementById("err2-email");

emailInput.addEventListener("blur", function () {
  let emailValue = emailInput.value.trim();
  if (emailValue === "") {
    emailError.textContent = "Email is required";
    emailInput.classList.add("error");
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Enter a valid email address";
    emailInput.classList.add("error");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
  }
});

//phone
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");

phoneInput.addEventListener("blur", function () {
  if (phoneInput.value.trim() === "") {
    phoneError.textContent = "Phone number is required.";
    phoneInput.classList.add("error");
  } else if (!phoneInput.checkValidity()) {
    phoneError.textContent = "Enter a valid phone number.";
    phoneInput.classList.add("error");
  } else {
    phoneError.textContent = "";
    phoneInput.classList.remove("error");
  }
});

//address line-1
const address1Input = document.getElementById("address1");
const address1Error = document.getElementById("address1-error");

address1Input.addEventListener("blur", function () {
  if (address1Input.value.trim() === "") {
    address1Error.textContent = "Address Line 1 is required.";
    address1Input.classList.add("error");
  } else {
    address1Error.textContent = "";
    address1Input.classList.remove("error");
  }
});

//city

const cityInput = document.getElementById("city");
const cityError = document.getElementById("city-error");

cityInput.addEventListener("blur", function () {
  if (cityInput.value.trim() === "") {
    cityError.textContent = "City is required.";
    cityInput.classList.add("error");
  } else {
    cityError.textContent = "";
    cityInput.classList.remove("error");
  }
});

//state
const stateInput = document.getElementById("state");
const stateError = document.getElementById("state-error");

stateInput.addEventListener("blur", function () {
  if (stateInput.value.trim() === "") {
    stateError.textContent = "State / Region is required.";
    stateInput.classList.add("error");
  } else {
    stateError.textContent = "";
    stateInput.classList.remove("error");
  }
});



//qualification

const qualificationSelect = document.getElementById("highest_qualification");
  const qualificationError = document.getElementById("qualification-error");

  qualificationSelect.addEventListener("blur", function () {
    if (qualificationSelect.value === "") {
      qualificationError.textContent = "Please select your qualification.";
      qualificationSelect.classList.add("error");
    } else {
      qualificationError.textContent = "";
      qualificationSelect.classList.remove("error");
    }
  });

//graduation year

 const gradYearInput = document.getElementById("gradYear");
  const gradYearError = document.getElementById("year-error");

  gradYearInput.addEventListener("blur", function () {
    const value = gradYearInput.value.trim();

    if (value === "") {
      gradYearError.textContent = "Year of graduation is required.";
      gradYearInput.classList.add("error");
    } else if (value < 1900 || value > 2100) {
      gradYearError.textContent = "Enter a valid year between 1900 and 2100.";
      gradYearInput.classList.add("error");
    } else {
      gradYearError.textContent = "";
      gradYearInput.classList.remove("error");
    }
  });


  //apply position 
   const positionSelect = document.getElementById("position");
  const positionError = document.getElementById("position-error");

  positionSelect.addEventListener("blur", function () {
    if (positionSelect.value === "") {
      positionError.textContent = "Please select a position you are applying for.";
      positionSelect.classList.add("error");
    } else {
      positionError.textContent = "";
      positionSelect.classList.remove("error");
    }
  });

  //skills
  const skillsInput = document.getElementById("skills");
const skillsError = document.getElementById("skills-error");

skillsInput.addEventListener("blur", function () {
  const value = skillsInput.value.trim();

  if (value !== "" && value.length < 2) {
    // simple friendly message
    skillsError.textContent = "Please enter at least one skill properly.";
    skillsInput.classList.add("error");
  } else {
    skillsError.textContent = "";
    skillsInput.classList.remove("error");
  }
});

  //upload file
  const resumeInput = document.getElementById("resume");
  const resumeError = document.getElementById("resume-error");

  resumeInput.addEventListener("change", function () {
    const file = resumeInput.files[0];
    if (!file) {
      resumeError.textContent = "Please upload your resume.";
      resumeInput.classList.add("error");
      return;
    }
      });

//checkbox
 const consentCheckbox = document.getElementById("consent");
  const consentError = document.getElementById("consent-error");

  consentCheckbox.addEventListener("change", function () {
    if (!consentCheckbox.checked) {
      consentError.textContent = "You must agree to proceed.";
      consentCheckbox.classList.add("error");
    } else {
      consentError.textContent = "";
      consentCheckbox.classList.remove("error");
    }
  });
  
  //submit

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const isValid = validateAllFields(); 
  if (!isValid) {
    e.preventDefault(); // stop form submission
    alert(
      "Please fill all required fields marked with an asterisk (*) and check file upload."
    );
  } else {
    alert("submitted successfully");
  }
});


//reset 
form.addEventListener("reset", function () {
  document.querySelectorAll(".error-msg").forEach(p => p.textContent = "");
  document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
});

