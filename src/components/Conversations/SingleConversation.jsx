import React from "react";
import homeStyles from "./Conversations.module.css";
import singleStyles from "./SingleConversation.module.css";
import DropdownToggle from "../DropdownToggle/DropdownToggle";
import CalenderIcon from "../Icons/CalenderIcon";
import ClockIcon from "../Icons/ClockIcon";
const SingleConversation = (props) => {
  const { margin, display, padding, click, value } = props;
  return (
    <>
      <div
        className={homeStyles.main}
        style={{ marginLeft: margin, display: display, padding: padding }}
      >
        <h3>My Conversations</h3>
        <p>This Week</p>
        <ConCom click={click} />
        <ConCom click={click} />
      </div>
    </>
  );
};

export default SingleConversation;
const ConCom = ({ click }) => {
  return (
    <div className={singleStyles.itemMain}>
      <div className={singleStyles.itemTop}>
        <div className={singleStyles.topInner} onClick={click}>
          <div>User Interface</div>
          <div>
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/parakeet-line/48/overview-pages-2.png"
              alt="overview-pages-2"
            />
          </div>
        </div>
        <div>
          <DropdownToggle keyboardShortcut={true}/>
        </div>
      </div>
      <div className={singleStyles.itemBottom} onClick={click}>
        <div>
          <CalenderIcon color="#5f7282" style={{ marginRight: ".25rem" }} />
          Jan 28,2024 . 12:48 PM
        </div>
        <div>
          <ClockIcon color="#5f7282" style={{ marginRight: ".25rem" }} />
          0:06
        </div>
      </div>
    </div>
  );
};
