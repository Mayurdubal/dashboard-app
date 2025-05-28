import { calendarAppointments } from "../../data/calendarAppointments";
import styles from "./CalendarView.module.css";

const CalendarView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.week}>THIS WEEK</span>
        <span className={styles.month}>October 2021</span>
        <div className={styles.nav}>
          <button>⬅️</button>
          <button>➡️</button>
        </div>
      </div>
      <div className={styles.days}>
        {calendarAppointments.map((day, index) => (
          <div key={index} className={styles.day}>
            <span className={styles.dayName}>{day.day}</span>
            <span className={styles.date}>{day.date}</span>
            {day.appointments.map((appt, idx) => (
              <div key={idx} className={styles.appointment}>
                {appt.time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
