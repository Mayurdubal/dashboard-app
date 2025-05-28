import { sidebarLinks } from "../../data/sidebarLinks";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Healthcare.</div>
      <h3 className={styles.heading}>General</h3>
      <nav className={styles.nav}>
        {sidebarLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={`${styles.navLink} ${link.active ? styles.active : ""}`}
          >
            <span className={styles.icon}>{link.icon}</span>
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
