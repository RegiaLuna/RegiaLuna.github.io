// primeiro desafio 
document.getElementById('confirmButton').addEventListener('click', function() {
    var userInput = document.getElementById('formGroupExampleInput').value;
    if (userInput.toLowerCase() === 'cavalo') {
      var modal1 = new bootstrap.Modal(document.getElementById('exampleModal'));
      var modal2 = new bootstrap.Modal(document.getElementById('secondModal'));
      modal1.hide();
      
      setTimeout(function() {
        document.getElementById('exampleModal').remove(); // Remove o primeiro modal do DOM
        var backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove(); // Remove o backdrop do primeiro modal
        }
        modal2.show();
      }, 500); // Aguarde a animação de ocultação do modal
    } else {
      alert('Resposta incorreta, tente novamente.');
    }
  });

  document.getElementById('continueButton').addEventListener('click', function() {
    window.location.href = 'desafio2.html';
  });

  document.getElementById('secondModal').addEventListener('hidden.bs.modal', function () {
    window.location.href = 'desafio2.html';
  });

