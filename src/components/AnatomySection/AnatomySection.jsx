import { anatomyHealthIndicators } from "../../data/anatomyHealthIndicators";
import styles from "./AnatomySection.module.css";

const AnatomySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anatomy}>
        <img
          src="/src/assets/anatomy.png"
          alt="Human anatomy illustration"
          className={styles.bodyImage}
        />
        {anatomyHealthIndicators.map((indicator, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              styles[indicator.status.toLowerCase()]
            }`}
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
            }}
          >
            {indicator.name}
          </div>
        ))}
      </div>
      <button className={styles.logButton}>Healthy Log</button>
    </div>
  );
};

export default AnatomySection;
