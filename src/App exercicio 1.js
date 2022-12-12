import React from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b)

  return (
    <div>
      <ul>
        <li>Nome: {luana.cliente}</li>
        <li>Idade: {luana.idade}</li>
        <li>Situação: <a href="/" style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'ativa' : 'inativa'}</a></li>
        <li>Total de gastos: {total}</li>
        {total > 10000 && <p>Você está gastando muito</p>}
      </ul>
    </div>
  )
};

export default App;
