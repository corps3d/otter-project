import React from "react";
import "./Sidebar.css"; // Make sure to have your CSS in Dashboard.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  return (
    <div className="chat" style={{ display: !isRightSidebarOpen && "none" }}>
      <div className="topchat">
        <p>Message users or @otter about the conversation</p>
      </div>
      <div className="bottomchat">
        <div className="chat-message">Hello Bro! How are you?</div>
        <div className="chat-message">Hello Bro! How are you?</div>
        <div className="chat-message">Hello Bro! How are you?</div>
        <div className="input">
          <input type="text" placeholder="Message user or @otter" />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
