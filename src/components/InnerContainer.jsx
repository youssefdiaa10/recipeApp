import styles from "./innerContainer.module.css";

function InnerContainer({ children }) {
  return (
    <>
      <div className={styles.innerContainer}>{children}</div>
    </>
  );
}

export default InnerContainer;
