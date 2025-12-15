import styles from './Resultado.module.css';

const Resultado = () => {
    
    return (
    <>
        <div className={styles.apresentaResultado}>
            <h3 className={styles.tituloResultado}>Seu IMC:</h3>
            <p className={styles.resultadoImc}>0.00</p>
            <p className={styles.classificacaoResultado}>Classificação:</p>
        </div>
    </>
    )
}

export default Resultado