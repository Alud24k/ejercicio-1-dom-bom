function numeroRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

function comenzarJuego() {
  const randomNumber = numeroRandom();
  console.log(randomNumber);

  document.getElementById("juegoContainer").classList.remove("d-none");
  document.getElementById("empezarBoton").classList.add("d-none");

  document.getElementById("enviarBoton").addEventListener("click", function () {
    const enviar = parseInt(document.getElementById("enviarInput").value);

    if (isNaN(enviar)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    if (enviar === randomNumber) {
      alert("¡Felicidades! ¡Adivinaste el número!");
    } else if (enviar < randomNumber) {
      alert("El número que ingresaste es menor que el número mágico.");
    } else {
      alert("El número que ingresaste es mayor que el número mágico.");
    }
  });
}

document.getElementById("empezarBoton").addEventListener("click", comenzarJuego);
