import React from "react";
import ChatImage from "../../assets/chat.png";
import styles from "../../components/LoginSignupNavbar/LoginSignupNavbar.module.css";
const Chat = () => {
  return (
    <div className={styles.Chat}>
      <img src={ChatImage} alt="chat" />
    </div>
  );
};

export default Chat;
