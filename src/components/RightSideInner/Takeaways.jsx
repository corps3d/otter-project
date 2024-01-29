import React from "react";
import styles from "./RightSideInner.module.css";
import "../Sidebar/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Takeaways = ({ display }) => {
  return (
    <div className={styles.mainTakeaways} style={{ display: display }}>
      <div>
        <p>Takeaways</p>
        <p>All notes, highlights, comments, and action items</p>
      </div>
      <div>Highlight important notes or type a note below</div>
      <div className="input">
        <input type="text" placeholder="Message user or @otter" />
        <FontAwesomeIcon icon={faPaperPlane} color="grey" />
      </div>
    </div>
  );
};

export default Takeaways;
