import React from 'react';

import './global.css';

import Routes from './routes';

// JSX == (JavaScript XML)
// Um componente no React e uma função que retorna html

/**
 * Variaveis comuns nao são alteradas diretamente
 * Tem que usar o useState(valor) 
 * pra criara uma variavel que pode ser alterada
 * const [variavel, funcaoQueAlteraAVariavel] = useState(valor) 
 */ 

function App() {
  return (
      <Routes />
  );
}

export default App;
