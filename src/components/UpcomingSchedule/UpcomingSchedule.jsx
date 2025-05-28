import { upcomingAppointments } from "../../data/upcomingAppointments";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import styles from "./UpcomingSchedule.module.css";

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>THE UPCOMING SCHEDULE</h3>
      {upcomingAppointments.map((appt, index) => (
        <SimpleAppointmentCard key={index} {...appt} />
      ))}
    </div>
  );
};

export default UpcomingSchedule;
