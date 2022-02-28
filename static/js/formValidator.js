const userName = document.getElementById("name");
const userPhone = document.getElementById("phone");
const userMail = document.getElementById("email");

const mainForm = document.forms.main;
const mainFormEmail = mainForm.email;
const mainFormPhone = mainForm.phone;


mainForm.addEventListener("submit", function (event) {

    if (emailTest(mainFormEmail)) {
        userMail.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="main-form-error">
				Введите e-mail
			</div>`
        );
        event.preventDefault();
    };
    if (phoneTest(mainFormPhone)) {

        userPhone.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="main-form-error">
				Введите телефон
			</div>`
        );
        event.preventDefault();
    };
});

function emailTest(input) {
    if (input.value.length == 0) {
        input.value = 'no email';
    } else {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
};


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