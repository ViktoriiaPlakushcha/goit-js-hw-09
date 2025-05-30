let formData = {email: "", message: "",};
const storageKey = "feedback-form-state";
    
const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const textarea = form.elements.message;
form.addEventListener('input', handleInput);

function handleInput() {
    formData.email = inputEmail.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));    
}
const savedData = JSON.parse(localStorage.getItem(storageKey));
if (savedData) {
    inputEmail.value = savedData.email || "";
    textarea.value = savedData.message || "";
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    formData.email = inputEmail.value.trim();
    formData.message = textarea.value.trim();
    event.preventDefault();
    if (!inputEmail.value || !textarea.value) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);  
    localStorage.removeItem(storageKey);
    form.reset();
    formData = { email: "", message: "" };
}