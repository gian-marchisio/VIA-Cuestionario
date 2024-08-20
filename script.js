// Función para calcular el resultado del cuestionario
function calculateResult() {
    let score = 0;
    let questions = document.querySelectorAll('.question');
  
    questions.forEach((question) => {
      let radios = question.querySelectorAll('input[type="radio"]');
      let selectedValue = null;
  
      radios.forEach((radio) => {
        if (radio.checked) {
          selectedValue = radio.value;
        }
      });
  
      if (selectedValue !== null) {
        score += parseInt(selectedValue);
      }
    });
  
    let result = document.getElementById('result');
    result.innerHTML = `Tu resultado es: ${score} / 24 puntos, mientras mas puntos más de derecha eres`;
  
    // Mostrar el resultado solo si se han respondido todas las preguntas
    if (score > -24 || score <= -15) {
      alert("Te representa la izquierda");
    } else if (score > -14 || score <= -5) {
      alert("Te representa la centro izquierda");
    } else if (score > -4 || score <= 4) {
      alert("Te representa el centro");
    } else if (score > 5 || score <= 14) {
      alert("Te representa la centro derecha");
    } else {
      alert("Te representa la derecha");
    }

  }
  
  // Función para resetear el cuestionario
  function resetQuiz() {
    let questions = document.querySelectorAll('.question');
  
    questions.forEach((question) => {
      let radios = question.querySelectorAll('input[type="radio"]');
  
      radios.forEach((radio) => {
        radio.checked = false;
      });
    });
  
    let result = document.getElementById('result');
    result.style.display = 'none';
  }
  
  // Agregar eventos a los botones de submit y reset
  document.getElementById('submit').addEventListener('click', calculateResult);
  document.getElementById('reset').addEventListener('click', resetQuiz);