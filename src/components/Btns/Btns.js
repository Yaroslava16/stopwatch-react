import styles from "./Btns.module.css";

const Btn = ({ children, onBtnClick }) => {
  return (
    <button className={styles.Btn} type="text" onClick={onBtnClick}>
      {children}
    </button>
  );
};

export default Btn;
