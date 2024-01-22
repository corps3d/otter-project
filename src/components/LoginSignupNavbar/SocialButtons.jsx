import React from "react";
import { Button } from "react-bootstrap";
import styles from "./LoginSignupNavbar.module.css"; // Import css modules stylesheet as styles

const SocialButtons = (props) => {
  const { title, logo } = props;
  return (
    <div>
      <Button className={styles.socialButtons}>
        <div>{logo}</div>
        <div style={{ fontWeight: "600", fontSize: "14px" }}>
          Continue with {title}
        </div>
      </Button>
    </div>
  );
};

export default SocialButtons;
