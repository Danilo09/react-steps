import React from "react";
import Produto from "./Produto";
// import Forms from "./Forms";
import { Input } from "./Form/Input";
import { Select } from "./Form/Select";

const App = () => {
  const [produto, setProduto] = React.useState(null)
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)
    console.log(produtoLocal)
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      <Produto produto={produto} />
      <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </div>
  )
};

export default App;
