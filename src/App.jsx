import { useState } from 'react'

import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
  const [imc, setImc] = useState(null);

  function calculaImc(peso, altura) {
    if (peso > 0 && altura > 0) {
      const resultado = peso / (altura * altura);
      setImc(resultado.toFixed(2));
    } else {
      setImc(null);
    }
  }

  return (
    <>
      <Formulario onCalcular={calculaImc} />
      <Resultado resultadoImc={imc} />
    </>
  )
}

export default App
