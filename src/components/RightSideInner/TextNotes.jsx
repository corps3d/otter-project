import React from "react";
import styles from "./RightSideInner.module.css";
import "../Sidebar/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const TextNotes = ({ display }) => {
  return (
    <>
      <div className={styles.mainTakeaways} style={{ display: display }}>
        <div>
          <p>Text Notes</p>
        </div>
        <div
          style={{
            height: "75vh",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div className={`input ${styles.textBox}`}>
            <input type="text" placeholder="Message user or @otter" />
            <FontAwesomeIcon icon={faPaperPlane} color="grey" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextNotes;
