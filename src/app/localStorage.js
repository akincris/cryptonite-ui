const getLSValue = (field) => localStorage.getItem(field);
const setLSValue = (field, value) => localStorage.setItem(field, value);
const clearLSValue = (field) => localStorage.removeItem(field);

export { getLSValue, setLSValue, clearLSValue };