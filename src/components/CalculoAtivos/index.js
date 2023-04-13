import React from 'react';
import style from './ativos.scss'

function CalculoAtivos(props) {
  const { ativos } = props;

  if (!ativos) {
    return <div></div>;
  }

  const valorTotalAtivos = ativos.reduce((total, ativo) => {
    const valorAtivo = ativo.precoCota * ativo.quantiaCotas;
    return total + valorAtivo;
  }, 0);

  return (
    <div>
      <h2>Cálculo dos Ativos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do Ativo</th>
            <th>Preço da Cota</th>
            <th>Dividend Yield</th>
            <th>Valor Investido por Mês</th>
            <th>Quantidade de Cotas</th>
            <th>Valor Total de Dividendos</th>
          </tr>
        </thead>
        <tbody>
          {ativos.map((ativo, index) => {
            const quantiaCotas = parseInt(ativo.valorInvestimento / ativo.precoCota);
            const valorDividendos = (ativo.precoCota * (ativo.pagamentoCota / 100) * quantiaCotas).toFixed(2);

            return (
              <tr key={index}>
                <td>{ativo.nomeAtivo}</td>
                <td>{ativo.precoCota}</td>
                <td>{ativo.pagamentoCota}</td>
                <td>{ativo.valorInvestimento}</td>
                <td>{quantiaCotas}</td>
                <td>{valorDividendos}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CalculoAtivos;