import React from "react";
import styles from "./RightSideInner.module.css";
import "../Sidebar/Sidebar.css";
const Highlights = ({ value, display }) => {
  return (
    <div className={styles.mainTakeaways} style={{ display: display }}>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Highlights;
