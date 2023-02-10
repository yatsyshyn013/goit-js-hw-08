import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';


const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', onInput);
refs.form.addEventListener('input', throttle(onInput, 500));

populateInput();


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEY);
    console.log(formData);
};

function onInput(evt) {
    // const message = formData;
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(KEY, JSON.stringify(formData));
};

function populateInput() {
    // const savedMessage = localStorage.getItem(KEY);
    const parsedMessage = JSON.parse(localStorage.getItem(KEY));


    if (parsedMessage) {
        // console.log(savedMessage);
        // console.log(dataMessage);
        refs.input.value = parsedMessage.email;
        refs.textarea.value = parsedMessage.message;
    };
};