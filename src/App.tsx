import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import arrow from "./assets/leftarrow.png";

import { levels, calculateImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite seu dados");
    }
  };

  const handleBackButton  = () => {
    setToShow(null)
    setHeightField(0);
    setWeightField(0)
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={200} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>
            IMC é a sigla para índice de Massa Corpórea. Pârametro adotado pela
            OMS (Organização Mundial de Saúde) para calcular o peso ideal de
            cada pessoa
          </p>
          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.currentTarget.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em Kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.currentTarget.value))}
            disabled={toShow ? true : false}
          />

          <button className={styles.button} disabled={toShow ? true : false} onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((level, index) => (
                <GridItem key={index} data={level} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={arrow} alt="" width={30}/>
              </div>
              <GridItem  data={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
