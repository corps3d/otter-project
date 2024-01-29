import React from "react";
import "./Sidebar/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Chat = ({ display }) => {
  return (
    <div className="chat" style={{ display: display }}>
      <div className="topchat">
        <p>Message users or @otter about the conversation</p>
      </div>
      <div className="bottomchat">
        <div className="chat-message">Hello Bro! How are you?</div>
        <div className="chat-message">Hello Bro! How are you?</div>
        <div className="chat-message">Hello Bro! How are you?</div>
        <div className="input">
          <input type="text" placeholder="Message user or @otter" />
          <FontAwesomeIcon icon={faPaperPlane} color="grey" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
