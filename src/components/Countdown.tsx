import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


const Countdown: React.FC = () => {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return <>

    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          className={styles.countdownButton}
          disabled
        >
          Ciclo encerrado
          <span><img src="icons/check_circle.svg" alt="Ciclo encerrado" /></span>
        </button>
      ) : (
        <>
          {(isActive && !hasFinished) ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <span></span>
            </button>

          ) : (

            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
              <span><img src="icons/play_arrow.svg" alt="Iniciar ciclo" /></span>
            </button>
          )}
        </>
      )}


    </div>
  </>;
}

export default Countdown;