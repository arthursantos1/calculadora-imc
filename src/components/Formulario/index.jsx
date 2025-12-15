import { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({onCalcular}) => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault(); // impede o recarregamento do site

        /* Pega os dados obtidos no input e transformar eles de string para números */
        const pesoNum = parseFloat(peso); 
        const alturaNum = parseFloat(altura);

        /* Verifica se os valores inserido no input são válidos e também apresenta a mensagem de erro */
        if (pesoNum <= 0 || alturaNum <= 0) {
            setErro('Por gentileza informe um valor positivo e válido');
            return;
        }

        setErro(''); // Limpa a mensagem de erro

        /* Função que está no APP que realiza o calculo do IMC */
        onCalcular(pesoNum, alturaNum);
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.tituloFormulario}>Calculadora de IMC</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="peso" className={styles.labelInput}>Peso (kg): </label>
                    <input className={styles.formInput} type="text" placeholder='Ex: 60.4'
                        required
                        id='peso'
                        onChange={evento => setPeso(evento.target.value)} />
                    <label htmlFor="altura" className={styles.labelInput}>Altura (M): </label>
                    <input className={styles.formInput} type="text" placeholder='Ex: 1.78'
                        required
                        id='altura'
                        onChange={evento => setAltura(evento.target.value)} />
                    {erro && <p className={styles.erroMessage}>{erro}</p>} 
                    <button className={styles.formButton} type='submit'>Calcular IMC</button>
                </form>
            </div>
        </>
    )
}

export default Formulario