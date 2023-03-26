import cipher from './cipher.js';










const originalInput2 = document.getElementById("mensajeadescifrar1");
const shiftInput2 = document.getElementById("numeroadescifrar1");
const encryptedInput2 = document.getElementById("descifrado");
const botonDescif = document.getElementById("descifrar2");
botonDescif.addEventListener("click", function() {
  const inputValue2 = originalInput2.value;
  const shiftValue2 = shiftInput2.value;
  const result2 = cipher.decode(inputValue2, parseInt(shiftValue2));
  encryptedInput2.value = result2;
  console.log("Prueba2")








});

