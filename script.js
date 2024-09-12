document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del botón de envío
  calculateResult();
});

function calculateResult() {
  let score1 = 0;
  let score2 = 0;
  let questions = document.querySelectorAll('.question');
  let allQuestionsAnswered = true;

  questions.forEach((question) => {
      // Encontrar el radio button seleccionado en la pregunta actual
      let selectedRadio = question.querySelector('input[type="radio"]:checked');
      
      if (selectedRadio) {
          // Si hay un radio seleccionado, obtenemos los valores
          let selectedValue1 = selectedRadio.getAttribute('data-value1') - 12 * 6;
          let selectedValue2 = selectedRadio.getAttribute('data-value2') - 8 * 6;

          // Convierte los valores a números (0 si no se pueden convertir)
          score1 += parseInt(selectedValue1) || 0;
          score2 += parseInt(selectedValue2) || 0;
      } else {
          // Si no hay ningún radio seleccionado, marcamos que falta una respuesta
          allQuestionsAnswered = false;
      }
  });

  if (!allQuestionsAnswered) {
      alert("¡Error! Debe responder todas las preguntas antes de calcular el resultado.");
      return;
  }

  // Guarda las puntuaciones en localStorage
  localStorage.setItem('puntos1', score1);
  localStorage.setItem('puntos2', score2);

  // Calcula el resultado
  let resultMessage = 'Tus resultados:<br>';

  // Agrega las condiciones para mostrar el resultado según la puntuación
  if (score1 <= -48) {
      resultMessage += '<br>Te representa la extrema izquierda.<br>';
  } else if (score1 <= -32) {
      resultMessage += '<br>Te representa la izquierda.<br>';
  } else if (score1 <= -16) {
      resultMessage += '<br>Te representa el centro izquierda.<br>';
  } else if (score1 <= 0) {
      resultMessage += '<br>Te representa el centro<br>'
  } else if (score1 >= 33) {
      resultMessage += '<br>Te representa la extrema derecha.<br>';
  } else if (score1 >= 17) {
      resultMessage += '<br>Te representa la derecha.<br>';
  } else if (score1 >= 1) {
      resultMessage += '<br>Te representa el centro derecha.<br>';
  } else {
      resultMessage += '<br>Error<br>';
  }

  if (score2 <= -16) {
      resultMessage += '<br>En el diagrama de Nolan te representa el totalitarismo.<br>';
  } else if (score2 >= 16) {
      resultMessage += '<br>En el diagrama de Nolan te representa el liberalismo.<br>';
  } else {
      resultMessage += '<br>En el diagrama de Nolan te representa el liberalismo.<br>';
  }

  // Guarda el mensaje del resultado en localStorage
  localStorage.setItem('resultMessage', resultMessage);

  // Redirige a la página de resultados
  window.location.href = 'resume.html';
}
