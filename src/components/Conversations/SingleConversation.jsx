import React from "react";
import homeStyles from "./Conversations.module.css";
import singleStyles from "./SingleConversation.module.css";
import DropdownToggle from "../DropdownToggle/DropdownToggle";
import CalenderIcon from "../Icons/CalenderIcon";
import ClockIcon from "../Icons/ClockIcon";
import ShareIcon from "../Icons/ShareIcon";
import ExportIcon from "../Icons/ExportIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const SingleConversation = (props) => {
  const { margin, display, padding, click, value, item } = props;
  const [isChecked, setIsChecked] = React.useState(false);
  const [checks, setChecks] = React.useState([]);

  const checkedVal = (val) => {
    val
      ? setChecks([...checks, true])
      : setChecks(checks.slice(0, checks.length - 1));
  };

  React.useEffect(() => {
    setIsChecked(checks.length > 0);
  }, [checks]);

  React.useEffect(() => {
    console.log(checks);
  }, [checks]);

  return (
    <>
      <div
        className={homeStyles.main}
        style={{ marginLeft: margin, display: display, padding: padding }}
      >
        <h3>{item} Conversations</h3>
        {isChecked ? (
          <OptionsIcons isChecked={isChecked} setIsChecked={setIsChecked} />
        ) : (
          <p>This Week</p>
        )}
        <ConCom click={click} checkedVal={checkedVal} parentCheck={isChecked} />
        <ConCom click={click} checkedVal={checkedVal} parentCheck={isChecked} />
      </div>
    </>
  );
};

export default SingleConversation;

const ConCom = ({ click, checkedVal, parentCheck }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    isChecked && setIsChecked(parentCheck);
  }, [parentCheck]);

  return (
    <div
      className={singleStyles.itemMain}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={singleStyles.innerTopItem}>
        {(isHovered || isChecked) && (
          <div className={singleStyles.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                checkedVal(!isChecked);
                setIsChecked(!isChecked);
              }}
            />
          </div>
        )}
        <div className={singleStyles.itemMainTop}>
          <div className={singleStyles.itemTop}>
            <div className={singleStyles.block}>
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
            </div>
          </div>
          <div className={singleStyles.itemBottom} onClick={click}>
            <div>
              <CalenderIcon color="#5f7282" style={{ marginRight: ".25rem" }} />
              Jan 28, 2024 . 12:48 PM
            </div>
            <div>
              <ClockIcon color="#5f7282" style={{ marginRight: ".25rem" }} />
              0:06
            </div>
          </div>
        </div>
      </div>
      {(isHovered || isChecked) && (
        <div>
          <DropdownToggle keyboardShortcut={true} keyboard="key" />
        </div>
      )}
    </div>
  );
};

const OptionsIcons = ({ isChecked, setIsChecked }) => {
  return (
    <>
    <div className={singleStyles.optionsIconsMain}>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
      <div className={singleStyles.point}>
        <div>
          <ShareIcon color="#126fd6" width="15px" />
        </div>
        <div>Share</div>
      </div>
      <div className={singleStyles.point}>
        <div>
          <ExportIcon color="#126fd6" width="15px" />
        </div>
        <div>Export</div>
      </div>
      <div className={singleStyles.point}>
        <div>
          <DeleteIcon color="#126fd6" width="15px" />
        </div>
        <div>Delete</div>
      </div>
    </div>
    
    </>
  );
};
