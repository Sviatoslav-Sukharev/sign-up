import "../css/style.css";

import { form, createData } from "./views/form";
import isValid from "./helpers/validate";
import { createDanger, deleteDanger } from "./views/danger";
import notify from "./views/notifications";
import { setCities, setCountries } from "./services/api.service";
import { signUp } from "./services/api.service";

const inputs = [...form.elements].slice(0, 10);
const countrySelector = document.querySelector(".countries");

document.addEventListener("DOMContentLoaded", (e) => {
  setCountries();
});

countrySelector.addEventListener("input", (e) => {
  const country = countrySelector.querySelector(`option[value="${countrySelector.value}"]`);
  setCities(country.dataset.index);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  onFormSubmit();
});

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    deleteDanger(input);
  });
});

async function onFormSubmit() {
  const isValidForm = inputs.every((input) => {
    const isValidInput = isValid(input);
    if(!isValidInput) {
      inputs.forEach(input => deleteDanger(input));
      createDanger(input);
    }
    return isValidInput;
  });

  if(!isValidForm) return;

  try {
    const data = createData();
    console.log("data:", data);
    await signUp(data);
    form.reset();
    notify("Success! Check your e-mail.", "green");
  } catch(error) {
    console.log(error);
    notify("Error!", "red");
  }
}