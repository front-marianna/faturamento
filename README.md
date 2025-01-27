# Faturamento
```
function analisarFaturamento(faturamentoMensal) {
  // Verificação se o array tem conteúdo
  if (faturamentoMensal.length === 0) {
    return {
      menorValor: null,
      maiorValor: null,
      diasAcimaDaMedia: 0,
    };
  }

  // Calculo da soma do faturamento
  const somaTotal = faturamentoMensal.reduce((acc, valor) => acc + valor, 0);

  // Calculo da média mensal
  const mediaMensal = somaTotal / faturamentoMensal.length;

  let menorValor = faturamentoMensal[0];
  let maiorValor = faturamentoMensal[0];
  let diasAcimaDaMedia = 0;

  for (let i = 0; i < faturamentoMensal.length; i++) {
    const valorDia = faturamentoMensal[i];

    if (valorDia < menorValor) {
      menorValor = valorDia;
    }

    if (valorDia > maiorValor) {
      maiorValor = valorDia;
    }

    if (valorDia > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {menorValor, maiorValor, diasAcimaDaMedia};
}

```

Exemplo de uso:
```
const faturamentoDiario = [1000, 2000, 1500, 3000, 2500];
const resultado = analisarFaturamento(faturamentoDiario);

console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
```
