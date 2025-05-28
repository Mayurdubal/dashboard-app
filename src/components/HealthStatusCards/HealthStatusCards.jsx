import { healthStatusData } from "../../data/healthStatusData";
import styles from "./HealthStatusCards.module.css";

const HealthStatusCards = () => {
  return (
    <div className={styles.container}>
      {healthStatusData.map((card, index) => (
        <div key={index} className={styles.card}>
          <h4 className={styles.title}>{card.title}</h4>
          <p className={styles.time}>{card.time}</p>
          <p className={styles.doctor}>{card.doctor}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
