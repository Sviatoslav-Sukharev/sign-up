const regExpDict = {
  email: /^[^@]+@[^@.]+\.[^@]+$/,
  password: /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{8,}/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
};

function isValid(input) {
  const regExp = regExpDict[input.name];
  if(regExp === undefined) {
    if(input.value) return true;
    else return false;
  }
  return regExp.test(input.value);
}

export default isValid;