const userName = document.getElementById("name");
const userPhone = document.getElementById("phone");
const userMail = document.getElementById("email");
const submitBtn = document.getElementById("submitButton");
const url = document.getElementById("urlForm").value;
let formData = {
    'name': null,
    'email': null,
    'phone': null
};


// let token = document.getElementsByName("csrfmiddlewaretoken")[0].value;

const mainForm = document.forms.main;
const mainFormName = mainForm.name;
const mainFormEmail = mainForm.email;
const mainFormPhone = mainForm.phone;

const TL = gsap.timeline();


// function to send data without refresh the page
function fetchpost() {
  let token = document.getElementsByName("csrfmiddlewaretoken")[0].value;

  if (emailTest(mainFormEmail)) {
    userMail.parentElement.insertAdjacentHTML(
      "beforeend",
      `<div class="main-form-error">
        				Введите e-mail
        			</div>`
    );
    return false;
  } else {
    formData['email'] = mainFormEmail.value;
    mainFormEmail.value = '';
    
  }

  if (phoneTest(mainFormPhone)) {
            userPhone.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="main-form-error">
    				Введите телефон
    			</div>`
            );
            return false;
        } else {
            formData['phone'] = mainFormPhone.value;
            mainFormPhone.value = '';
            
        };
    
        formData['name'] = mainFormName.value;
        mainFormName.value = '';
        

  // convert input data from form to json

  formData = JSON.stringify(formData);

  // sending data
  fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": token,
    },
    body: formData,
  })
    .then((res) => {
      return res.text();
    })
    //   .then((txt) => { console.log(txt); })
    .catch((err) => {
      console.log(err);
    });


    // animation for information block
    TL.fromTo(
        ".footer-form",
        { autoAlpha: 1, y: 0 },
        { autoAlpha: 0, y: -50, duration: 0.5 }
      )
        .to(
          ".timeline-form",
          { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.2 },
          "-=0.35"
        )
        .from(".form-messagesent", { autoAlpha: 0, y: 50, duration: 0.6 }, "-=0.2")
        .from(
          ".p-message",
          { autoAlpha: 0, y: 50, duration: 0.4, stagger: 0.2 },
          "-=0.25"
        )
        .to(".form-messagesent", { autoAlpha: 0, y: -50, duration: 0.6 }, 5)
        .to(
          ".p-message",
          { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.2 },
          "-=0.5"
        )
        .fromTo(
          ".footer-form",
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.1"
        )
        .from(
          ".timeline-form",
          { autoAlpha: 0, y: 50, duration: 0.4, stagger: 0.2 },
          "-=0.25"
        );
    
        submitBtn.disabled = true;
        mainFormName.disabled = true;
        mainFormPhone.disabled = true;
        mainFormEmail.disabled = true;
        return false;
}


function emailTest(input) {
    if (input.value.length == 0) {
        input.value = 'no email';
    } else {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
}

function phoneTest(input) {
  
    input.value = input.value.replace(/[-()\s]/g, "");
    let phone = input.value;
    if (phone[0] == 8) {
        phone = phone.replace('8', '7');
        input.value = phone;
    }
    if (input.value[0] !== '+') {
        input.value = "+" + input.value;
    }
    return !/^\+\d{11}$/.test(input.value);
}
