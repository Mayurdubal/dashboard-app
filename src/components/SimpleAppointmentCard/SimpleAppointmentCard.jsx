import styles from "./SimpleAppointmentCard.module.css";

const SimpleAppointmentCard = ({ day, title, time, icon }) => {
  return (
    <div className={styles.card}>
      <span className={styles.day}>{day}</span>
      <div className={styles.details}>
        <span className={styles.title}>{title}</span>
        <span className={styles.time}>{time}</span>
      </div>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
