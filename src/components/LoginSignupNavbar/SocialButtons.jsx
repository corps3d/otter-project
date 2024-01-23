import React from "react";
import { Button } from "react-bootstrap";
import styles from "./LoginSignupNavbar.module.css";

const SocialButtons = (props) => {
  const { title, logo } = props;
  return (
    <div>
      <button className={styles.socialButtons}>
        <div>{logo}</div>
        <div style={{ fontWeight: "600", fontSize: "14px", width: "180px" }}>
          Continue with {title}
        </div>
      </button>
    </div>
  );
};

export default SocialButtons;
