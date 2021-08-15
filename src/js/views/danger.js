function createDanger(input) {
  input.classList.add("dangerInput");
}

function deleteDanger(input) {
  if(input.classList.contains("dangerInput")) input.classList.remove("dangerInput");
}

export {createDanger, deleteDanger};