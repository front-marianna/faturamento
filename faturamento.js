const fs = require('fs');

async function analisarFaturamento(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const dados = JSON.parse(data);

    const somaTotal = dados.reduce((acc, item) => acc + item.valor, 0);
    const mediaMensal = somaTotal / dados.length;
    const menorValor = Math.min(...dados.map(item => item.valor).filter(valor => valor > 0));
    const maiorValor = Math.max(...dados.map(item => item.valor));
    const diasAcimaDaMedia = dados.filter(item => item.valor > mediaMensal).length;

    return {
      menorValor, maiorValor, diasAcimaDaMedia, mediaMensal};
  } catch (error) {
    console.error('Erro ao processar os dados:', error);
    return null;
  }
}

const filePath = 'dados.json'; 

analisarFaturamento(filePath)
  .then(resultado => {
    if (resultado) {
      console.log('Menor valor de faturamento:', resultado.menorValor);
      console.log('Maior valor de faturamento:', resultado.maiorValor);
      console.log('Média mensal:', resultado.mediaMensal);
      console.log('Dias com faturamento acima da média:', resultado.diasAcimaDaMedia);
    } else {
      console.log('Erro ao processar os dados.');
    }
  });