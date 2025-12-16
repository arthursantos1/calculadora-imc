import styles from './Resultado.module.css';

const Resultado = ({ resultadoImc }) => {
    let classificacao = '';
    let cor = '';

    if (resultadoImc < 18.5) {
        classificacao = "Abaixo do peso"
        cor = styles.corPesoNormal
    } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
        classificacao = "Peso normal";
        cor = styles.corPesoNormal
    } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
        classificacao = "Execesso de peso";
        cor = styles.corSobrePeso
    } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
        classificacao = "Obesidade classe 1";
        cor = styles.corObesidade
    } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
        classificacao = "Obesidade classe 2";
        cor = styles.corObesidade
    } else {
        classificacao = "Obesidade classe 3";
        cor = styles.corObesidade
    }

    return (
        <>
            {resultadoImc && (
                <div className={`${styles.apresentaResultado} ${cor}`}>
                    <h3 className={styles.tituloResultado}>Seu IMC:</h3>
                    <p className={styles.resultadoImc}>{resultadoImc}</p>
                    <p className={styles.classificacaoResultado}>Classificação: {classificacao}</p>
                </div>
            )}
        </>
    )
}

export default Resultado