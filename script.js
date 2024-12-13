function calcularVolume() {
  // Obtém os valores dos campos de entrada
  const areaTelhado = parseFloat(document.getElementById("area").value);
  const precipitacaoAnual = parseFloat(
    document.getElementById("precipitacaoAnual").value
  );

  // Verifica se os valores são válidos
  if (
    isNaN(areaTelhado) ||
    isNaN(precipitacaoAnual) ||
    areaTelhado <= 0 ||
    precipitacaoAnual <= 0
  ) {
    alert(
      "Por favor, insira valores válidos para a área do telhado e a precipitação anual."
    );
    return;
  }

  // Converte a precipitação anual para metros e calcula o volume em metros cúbicos
  const alturaAguaEmMetros = precipitacaoAnual / 1000;
  const volumeEmMetrosCubicos = areaTelhado * alturaAguaEmMetros;

  // Converte o volume para litros
  const volumeEmLitros = volumeEmMetrosCubicos * 1000;

  // Exibe o resultado
  document.getElementById("resultado").textContent =
    `Volume potencial de água a ser captado anualmente: ${volumeEmLitros} litros. \n` +
    `Ou ${volumeEmMetrosCubicos}m³ de água.`;
}
