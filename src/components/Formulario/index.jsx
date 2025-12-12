import { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultadoImc, setResultadoImc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); // impede o carregamento do site
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        const resultadoImc = pesoNum / (alturaNum * alturaNum);
        console.log(resultadoImc);
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.tituloFormulario}>Calculadora de IMC</h1>
                <form onSubmit = {handleSubmit}>
                    <input className={styles.formInput} type="number" placeholder='Digite seu peso (Kg)' onChange={evento => setPeso(evento.target.value)} />
                    <input className={styles.formInput} type="number" placeholder='Digite sua altura' onChange={evento => setAltura(evento.target.value)} />
                    <button className={styles.formButton} type='submit'>Calcular IMC</button>
                </form>
                <div className={styles.apresentaResultado}>
                    <h3 className={styles.tituloResultado}>Seu IMC:</h3>
                    <p className={styles.resultadoImc}>0.00</p>
                    <p className={styles.classificacaoResultado}>Classificação:</p>
                </div>
            </div>
        </>
    )
}

export default Formulario