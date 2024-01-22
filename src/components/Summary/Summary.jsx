import React from "react";
import styles from "./Summary.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  return (
    <div className={styles.summaryMain}>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatum quaerat, quos odio eligendi dolorum officiis. Quae animi
          minus consectetur quaerat quidem ipsam exercitationem est molestias,
          ducimus minima assumenda eos.
        </p>
      </div>
      <div className={styles.actionItems}>
        <div className={styles.actionItemText}>Action Items</div>
        <div>
          <FontAwesomeIcon icon={faEllipsis} className={styles.summaryIcons} />
        </div>
      </div>
      <div>
        <Checkbox items="Hola Bros" />
        <Checkbox items="How are you?" />
        <Checkbox items="What's going on?" />
        <Checkbox items="What's up?" />
        <Checkbox items="Lets start party." />
      </div>
    </div>
  );
};

export default Summary;

const Checkbox = (props) => {
  const { items } = props;
  return (
    <div className={styles.checkMain}>
      <input type="checkbox" />
      <span className={styles.checkSpan}>{items}</span>
    </div>
  );
};
