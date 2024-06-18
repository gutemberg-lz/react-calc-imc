import { Level } from "../../helpers/imc";
import styles from "./Griditem.module.css";
import downImage from "../../assets/down.png";
import upImage from "../../assets/up.png";

type Props = {
  data: Level;
};
export const GridItem = ({ data }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img
          width={30}
          src={data.icon === "up" ? upImage : downImage}
          alt="img"
        />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>
      {data.yourImc && (
        <div className={styles.yourImc}>
          Seu Imc é de {data.yourImc.toFixed(1)} kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          Imc está entre <strong>{data.imc[0]}</strong> e{" "}
          <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
