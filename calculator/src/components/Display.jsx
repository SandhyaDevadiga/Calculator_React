// import styles from "../Display.module.css"
// const Display = () => {
//     return <input className={styles.display}  type="text" />
// }
// export default Display;


import styles from "../Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;