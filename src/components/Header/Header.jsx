import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.actions}>
        <span className={styles.icon}>🔔</span>
        <span className={styles.icon}>👤</span>
        <button className={styles.addButton}>+</button>
      </div>
    </header>
  );
};

export default Header;
