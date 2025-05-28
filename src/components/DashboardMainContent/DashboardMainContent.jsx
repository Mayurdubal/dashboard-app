import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import styles from "./DashboardMainContent.module.css";

const DashboardMainContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <AnatomySection />
        </div>
        <div className={styles.rightColumn}>
          <CalendarView />
          <div className={styles.cardsRow}>
            <HealthStatusCards />
            <UpcomingSchedule />
          </div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
