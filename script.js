let selectedButton = null;
let selectedNumber = null;

function selectNumber(number) {
  // Remove a classe "selecionado" do botão anteriormente selecionado
  if (selectedButton) {
    selectedButton.classList.remove('selecionado');
  }

  // Adiciona a classe "selecionado" ao botão clicado
  const button = document.getElementById(`btn-${number}`);
  button.classList.add('selecionado');
  selectedButton = button;

  selectedNumber = number;
  
}

function submitSelection() {
    if (selectedNumber !== null) {
      // Ocultar a página de seleção
      document.getElementById('selectionPage').style.display = 'none';
  
      // Exibir a página de resultado
      document.getElementById('resultPage').style.display = 'block';
  
      // Exibir o número selecionado
      document.getElementById('selectedNumber').innerText = `You selected: ${selectedNumber} out of 5`;

    document.querySelector('.container').style.display = 'none';
  } else {
    alert('Por favor, escolha um número antes de enviar.');
  }
}









