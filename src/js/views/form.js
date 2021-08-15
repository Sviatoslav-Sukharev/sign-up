const form = document.forms["registration"];

function initCountries(items) {
  const countrySelector = document.querySelector(".countries");
  Object.entries(items).forEach(([key, country]) => {
    const option = createOption(key, country);
    countrySelector.appendChild(option);
  });
}

function initCities(items) {
  const citySelector = document.querySelector(".cities");

  const defaultOption = document.createElement("option");
  defaultOption.setAttribute("selected", "selected");
  defaultOption.setAttribute("disabled", "disabled");
  defaultOption.setAttribute("hidden", "hidden");
  defaultOption.value = "";
  defaultOption.textContent = "City";

  citySelector.removeAttribute("disabled");
  citySelector.innerHTML = "";
  citySelector.appendChild(defaultOption);
  
  items.forEach((city, key) => {
    const option = createOption(key, city);
    citySelector.appendChild(option);
  });
}

function createOption(key, value) {
  const option = document.createElement("option");
  option.textContent = value;
  option.value = value;
  option.dataset.index = key;
  return option;
}

function createData() {
  const data = {};
  let birthDate;
  const form = document.forms["registration"];
  const inputs = [...form.elements].slice(0, 10);

  inputs.forEach((input) => {
    if(input.name !== "birthDate") {
      data[input.name] = input.value;
    } else {
      birthDate = input.value;
    }
  });

  data["country"] = data["country"].replaceAll(" ", "");
  data["city"] = data["city"].replaceAll(" ", "");
  data["country"] = data["country"].replaceAll("-", "");
  data["city"] = data["city"].replaceAll("-", "");

  data["date_of_birth_day"] = birthDate.slice(8, 10);
  data["date_of_birth_month"] = birthDate.slice(5, 7);
  data["date_of_birth_year"] = birthDate.slice(0, 4);

  return data;
}

export {form, initCountries, initCities, createData};