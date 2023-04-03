const INPUT_NAME_id = "formId";
const INPUT_NAME_pw = "formPw";
const INPUT_NAME_pwConfirm = "pwConfirm";
const INPUT_NAME_email = "formEmail";

const regexID = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
const regexPw = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;'"\\|,<.>/?`~-]{8,15}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.getElementById(INPUT_NAME_id).addEventListener("focusout", handleForm);
document.getElementById(INPUT_NAME_pw).addEventListener("focusout", handleForm);
document
  .getElementById(INPUT_NAME_pwConfirm)
  .addEventListener("focusout", (event) => {
    const Pw = document.getElementById(INPUT_NAME_pw).value;
    const confirmPw = event.target.value;
    const span = event.target.parentNode.children[2];

    if (Pw === "" || confirmPw === "") {
      return;
    } else if (Pw === confirmPw) {
      span.innerHTML = "비밀번호가 일치합니다";
      span.classList.remove("class__hidden");
    } else {
      span.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
      span.classList.remove("class__hidden");
    }
  });
document
  .getElementById(INPUT_NAME_email)
  .addEventListener("focusout", handleForm);

function switchRegex(name) {
  if (name === undefined || null) {
    return;
  }
  if (name === INPUT_NAME_id) {
    return regexID;
  } else if (name === INPUT_NAME_pw) {
    return regexPw;
  } else if (name === INPUT_NAME_email) {
    return regexEmail;
  }
}

function handleForm(event) {
  const name = event.target.name;
  const value = event.target.value;
  const span = event.target.parentNode.children[2];
  const spanDefault = span.innerHTML;
  if (value === "") {
    span.innerHTML = "필수 정보입니다";
    span.classList.remove("class__hidden");
  } else if (switchRegex(name).test(value)) {
    span.classList.add("class__hidden");
  } else {
    span.innerHTML = spanDefault;
    span.classList.remove("class__hidden");
  }
}
