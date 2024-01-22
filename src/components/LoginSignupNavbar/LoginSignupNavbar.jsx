import React from "react";
import styles from "./LoginSignupNavbar.module.css"; // Import css modules stylesheet as styles
import Otter from "../../assets/otter.png";

const LoginSignupNavbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={Otter} alt="otter" style={{ width: "70px" }} />
    </div>
  );
};

export default LoginSignupNavbar;
