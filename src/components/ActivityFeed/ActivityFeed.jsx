import { activityGraphData } from "../../data/activityGraphData";
import styles from "./ActivityFeed.module.css";

const ActivityFeed = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ACTIVITY</h3>
      <p className={styles.subtitle}>3 appointments on this week</p>
      <div className={styles.graph}>
        {activityGraphData.map((data, index) => (
          <div key={index} className={styles.barContainer}>
            <div
              className={styles.bar}
              style={{
                height: `${data.height}px`,
                backgroundColor: data.color,
              }}
            ></div>
            <span className={styles.day}>{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
