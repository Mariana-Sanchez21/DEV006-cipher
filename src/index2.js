import cipher from './cipher.js';


const originalInput = document.getElementById("mensajeacifrar1");
const shiftInput = document.getElementById("numeroacifrar1");
const encryptedInput = document.getElementById("cifrado");
const botonCif = document.getElementById("cifrar2");


botonCif.addEventListener("click", function() {
  const inputValue = originalInput.value;
  const shiftValue = shiftInput.value;
  const result = cipher.encode(inputValue, parseInt(shiftValue));
  encryptedInput.value = result;
  console.log("Prueba")
});