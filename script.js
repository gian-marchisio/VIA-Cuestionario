//NO TOCAR!!!!!!!!!

document.getElementById('submit').addEventListener('click', calculateResult);

//Funcion para calcular el resultado

function calculateResult() {
  let score = 0;
  let questions = document.querySelectorAll('.question');
  let allQuestionsAnswered = true;

  questions.forEach((question) => {
    let radios = question.querySelectorAll('input[type="radio"]');
    let selectedValue = null;

    radios.forEach((radio) => {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });

    if (selectedValue === null) {
      allQuestionsAnswered = false;
    } else {
      score += parseInt(selectedValue);
    }
  });

  if (!allQuestionsAnswered) {
    alert("¡Error! Debe responder todas las preguntas antes de calcular el resultado.");
    return;
  }

  // Calcula el resultado y muestra la ventana emergente
  let resultMessage = `Tu resultado es: ${score} / 54 puntos, mientras más puntos más de derecha eres`;

  // Agrega las condiciones para mostrar el resultado según la puntuación
  if (score <= 7) {
    resultMessage += `\nTe representa la extrema izquierda`;
  } else if (score <= 16) {
    resultMessage += `\nTe representa la izquierda`;
  } else if (score <= 24) {
    resultMessage += `\nTe representa el centro izquierda`;
  } else if (score <= 33) {
    resultMessage += `\nTe representa la centro derecha`;
  } else if (score <= 42) {
    resultMessage += `\nTe representa la derecha`;
  } else {
    resultMessage += `\nTe representa la extrema derecha`;
  }

  //Mostrar alerta con el resultado y enviar a otra pagina cuando interactuen con el boton de aceptar

  alert(resultMessage);

  setTimeout(function() {
    window.location.href = 'resume.html';
  }, 0);
}
