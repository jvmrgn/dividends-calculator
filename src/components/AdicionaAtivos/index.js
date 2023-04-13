import React, { useState } from 'react';
import CalculoAtivos from '../CalculoAtivos';
import style from './estiloAtivos.scss'

function AdicionaAtivos() {
  const [ativos, setAtivos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ativo = {
      nomeAtivo: form.nomeAtivo.value,
      precoCota: parseFloat(form.precoCota.value.replace(',', '.')),
      pagamentoCota: parseFloat(form.pagamentoCota.value.replace(',', '.')),
      valorInvestimento: parseFloat(form.valorInvestimento.value.replace(',', '.'))
    };
    setAtivos([...ativos, ativo]);
    form.reset();
  }

  return (
    <div>

      <div className={style.container}>
        <div className={style.conteudo}>
          <h2 className={style.titulo}>Adicionar Ativos</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome-ativo">Nome do Ativo:</label>
            <input type="text" id="nome-ativo" name="nomeAtivo" />

            <label htmlFor="preco-cota">Preço da Cota:</label>
            <input type="text" id="preco-cota" name="precoCota" />

            <label htmlFor="pagamento-cota">Dividend Yield médio mensal (%):</label>
            <input type="text" id="pagamento-cota" name="pagamentoCota" />

            <label htmlFor="valor-investimento">Valor a ser investido</label>
            <input type="text" id="valor-investimento" name="valorInvestimento" />

            <button type="submit">Adicionar</button>
          </form>

          <CalculoAtivos ativos={ativos} />

        </div>
      </div>

    </div>
  );
}

export default AdicionaAtivos;
