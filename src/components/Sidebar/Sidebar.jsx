import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // Make sure to have your CSS in Dashboard.css
import Logo from "../../assets/otter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faPlus,
  faMagnifyingGlass,
  faFolder,
  faEllipsisVertical,
  faBars,
  faX,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../../components/Summary/Summary.module.css";
import Person from "../../assets/person.png";
import Summary from "../Summary/Summary";
import WorkshopIcon from "../WorkshopIcon";
import Transcript from "../../pages/Transcript";
import Accordian from "../Accordian";
import User from "../User/User";
import Subscription from "../Subscription/Subscription";
import HomePage from "../HomePage/HomePage";
import SidebarIcon from "../SidebarIcon";
import Top from "../Top";
import Conversations from "../Conversations/Conversations";
import HomeIcon from "../Icons/HomeIcon";
import AllConversationIcon from "../Icons/AllConversationIcon";
import AppIcon from "../Icons/AppIcon";
import ChannelsIcon from "../Icons/ChannelsIcon";
import DMIcon from "../Icons/DMIcon";
import FoldersIcon from "../Icons/FoldersIcon";
import BellIcon from "../Icons/BellIcon";
import LockIcon from "../Icons/LockIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import SingleConversation from "../Conversations/SingleConversation";
import DropdownToggle from "../DropdownToggle/DropdownToggle";
import SummaryIcon from "../Icons/SummaryIcon";
import TakeawaysIcon from "../Icons/TakeawaysIcon";
import TextNotesIcon from "../Icons/TextnotesIcon";
import PencilIcon from "../Icons/PencilIcon";
import CommentIcon from "../Icons/CommentIcon";
import ActionItemsIcon from "../Icons/ActionItemsIcon";
import Chat from "../Chat";
import Takeaways from "../RightSideInner/Takeaways";
import TextNotes from "../RightSideInner/TextNotes";
import Highlights from "../RightSideInner/Highlights";
import ClockIcon from "../Icons/ClockIcon";
import ImageIcon from "../Icons/ImageIcon";
import CopyIcon from "../Icons/CopyIcon";
import LinkIcon from "../Icons/LinkIcon";
import SettingIcon from "../Icons/SettingIcon";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("chat");
  const [page, setPage] = useState("summary");
  const [mainPage, setMainPage] = useState("conservation");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);
  const [head, setHead] = useState("My Recordings");
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPModalOpen, setIsPModalOpen] = useState(false);
  const [rightSideInner, setRightSideInner] = useState("summary");
  const [showShareModal, setShowShareModal] = useState(false);
  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false);
  };

  const setPMainPage = () => {
    setIsPModalOpen(!isPModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsRightSidebarOpen(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addValue = () => {
    if (inputValue.trim() !== "") {
      setValues((prevValues) => [...prevValues, inputValue]);
      setInputValue("");
      closeModal();
    }
  };
  return (
    <>
      <div className="body">
        <Top />
        <nav className={`sidebar ${isSidebarOpen ? "" : "close"}`}>
          <div
            className="itemAllSidebar"
            style={{ display: isMobile && !isSidebarOpen ? "none" : "" }}
          >
            <header>
              <div className="image-text">
                <span className="image">
                  <img src={Logo} alt="logo" />
                </span>

                <div className="text logo-text">
                  <BellIcon />
                </div>
                <div
                  onClick={toggleSidebar}
                  style={{ display: !isSidebarOpen && "none" }}
                  className="x-icon"
                >
                  <FontAwesomeIcon icon={faX} color="#000" />
                </div>
              </div>
              <div onClick={toggleSidebar} className="first-toggle">
                <SidebarIcon cls={"toggle"} />
              </div>
            </header>

            <div className="menu-bar">
              <div className="top-content">
                <div>
                  <div className="account" onClick={() => setPMainPage()}>
                    <div className="person">
                      <img
                        src={Person}
                        alt="person"
                        style={{ width: "50px", borderRadius: "50%" }}
                      />
                      <div className="person-details">
                        <p style={{ fontSize: "1rem" }}>Selena Gomez</p>
                        <p style={{ fontSize: ".75rem" }}>selena@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  {isPModalOpen && (
                    <div className="pmodal">
                      <div
                        className="person-pmodal"
                        onClick={() => {
                          setMainPage("account");
                          setIsPModalOpen(!isPModalOpen);
                        }}
                        style={{
                          cursor: "pointer",
                          borderBottom: "1px solid lightgrey",
                          padding: ".5rem 0",
                        }}
                      >
                        <img
                          src={Person}
                          alt="person"
                          style={{ width: "50px", borderRadius: "50%" }}
                        />
                        <div className="person-details">
                          <p style={{ fontSize: "1rem" }}>Selena Gomez</p>
                          <p style={{ fontSize: ".75rem" }}>selena@gmail.com</p>
                          <p style={{ color: "#126fd6", fontWeight: "600" }}>
                            Upgrade Plan
                          </p>
                        </div>
                      </div>
                      <div
                        className="account-option"
                        onClick={() => {
                          setMainPage("account");
                          setIsPModalOpen(!isPModalOpen);
                        }}
                      >
                        <HomeIcon cls="menu-icons" />
                        Account Settings
                      </div>
                      <div className="logout-option">
                        <LogoutIcon cls="menu-icons" />
                        Logout
                      </div>
                    </div>
                  )}
                </div>

                <div className="line"></div>
                <div className="workshops">
                  <div className="person person-second">
                    <WorkshopIcon />
                    <div className="workshop-details">
                      <p style={{ fontSize: ".9rem" }}>Create Workshop</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu">
                <ul className="menu-links">
                  <li
                    className={`nav-link ${!isSidebarOpen && "dFlex"}`}
                    onClick={() => setMainPage("home")}
                  >
                    <a href="#">
                      <HomeIcon margin={isSidebarOpen && ".25rem"} />
                      <span className="text nav-text">Home</span>
                    </a>
                  </li>
                  <li
                    className={`nav-link ${!isSidebarOpen && "dFlex"}`}
                    onClick={() => setMainPage("singleConservation")}
                  >
                    <a href="#">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/parakeet-line/48/overview-pages-2.png"
                        alt="overview-pages-2"
                        style={{
                          marginRight: isSidebarOpen && ".25rem",
                        }}
                      />
                      <span
                        className="text nav-text"
                        style={{ marginTop: "0" }}
                      >
                        My Conservations
                      </span>
                    </a>
                  </li>
                  <li
                    className={`nav-link ${!isSidebarOpen && "dFlex"}`}
                    onClick={() => setMainPage("allConversations")}
                  >
                    <a href="#">
                      <AllConversationIcon margin={isSidebarOpen && ".25rem"} />
                      <span className="text nav-text">All Conservations</span>
                    </a>
                  </li>
                  <li className={`nav-link ${!isSidebarOpen && "dFlex"}`}>
                    <a href="#">
                      <AppIcon
                        marginRight={isSidebarOpen && ".35rem"}
                        marginLeft={isSidebarOpen && ".25rem"}
                      />
                      <span className="text nav-text">App</span>
                    </a>
                  </li>
                  <li className={`nav-link ${!isSidebarOpen && "dFlex"}`}>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: isSidebarOpen && ".25rem",
                        }}
                      />
                      <span className="text nav-text">More</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu">
                <ul className="menu-links">
                  <li className="nav-link">
                    <ChannelsIcon margin={isSidebarOpen && "-0.5rem"} />
                    <a href="#" className="second-list">
                      <span className="text nav-text">Channels</span>
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="menu-icons second-menu-icons"
                        />
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="menu-icons second-menu-icons"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="nav-link">
                    <DMIcon margin={isSidebarOpen && "-0.5rem"} />
                    <a href="#" className="second-list">
                      <span className="text nav-text">Direct Messages</span>
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="menu-icons second-menu-icons"
                        />
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="menu-icons second-menu-icons"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="nav-link">
                    <FoldersIcon margin={isSidebarOpen && "-0.5rem"} />
                    <a href="#" className="second-list">
                      <span className="text nav-text">Folders</span>
                      <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="menu-icons second-menu-icons"
                          onClick={openModal}
                        />
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="menu-icons second-menu-icons"
                        />
                      </div>
                    </a>
                  </li>
                  <div>
                    <ul className="folderlist">
                      {values.map((folder, index) => (
                        <div key={index}>
                          <FontAwesomeIcon
                            icon={faFolder}
                            className="folder-icon"
                          />
                          {folder}
                        </div>
                      ))}
                    </ul>
                  </div>
                </ul>
                <Modal show={isModalOpen} onHide={closeModal} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Folder</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="folderName">
                        <Form.Label>Folder Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter folder name"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={addValue}>
                      Add Folder
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="line"></div>
              <div className="bottom-content">
                <p>Basic (Free)</p>
                <div className="line-main"></div>
                <p>1 of 300 monthly minutes used</p>
                <button onClick={() => setMainPage("upgrade")}>
                  Get Otter Pro
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* new  */}
        <div
          className="navbar"
          style={{
            marginLeft: isSidebarOpen && !isMobile && "250px",
            width: isSidebarOpen ? "84%" : isMobile ? "100%" : "",
          }}
        >
          <div className="main-ham">
            <div className="hamburger" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} color="#102741" />
            </div>
            <div className="h3">{head}</div>
          </div>
          <div className="navbar-right">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="pencil-tooltip">Private to only me</Tooltip>
              }
            >
              <button className="share" onClick={handleShareClick}>
                <LockIcon />
                <span>Share</span>
              </button>
            </OverlayTrigger>
            <Modal
              show={showShareModal}
              onHide={handleCloseShareModal}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                  Share
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                className="delete-modal-body"
                style={{ width: "100%", padding: "1.5rem " }}
              >
                <div className="delete-modal-top">
                  <div>
                    <input type="text" placeholder="Add names or emails." />
                  </div>
                  <div>
                    <select name="Collaborator" id="txt">
                      <option value="Collaborator">Collaborator</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  </div>
                </div>
                <div className="delete-modal-bottom">
                  <div>
                    <div className="account">
                      <div className="person">
                        <img
                          src={Person}
                          alt="person"
                          style={{ width: "50px", borderRadius: "50%" }}
                        />
                        <div className="person-details">
                          <p style={{ fontSize: "1rem" }}>Selena Gomez</p>
                          <p style={{ fontSize: ".75rem" }}>selena@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>Owner</div>
                </div>
              </Modal.Body>
              <Modal.Footer
                className="d-flex flex-column justify-content-between"
                style={{ padding: "0.5rem 1.25rem" }}
              >
                <div className="modal-bottom-top">
                  <div className="modal-bottom-top-inner">
                    <div>
                      <LockIcon />
                    </div>
                    <div>Restricted</div>
                    <div style={{ marginLeft: ".25rem" }}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                  <div>Only added people and channels can access</div>
                </div>
                <div className="modal-bottom-bottom">
                  <div>
                    <div className="link-icon-btn">
                      <div>
                        <LinkIcon />
                      </div>
                      <div>Copylink</div>
                    </div>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <SettingIcon />
                  </div>
                </div>
              </Modal.Footer>
            </Modal>
            <DropdownToggle />

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="pencil-tooltip">Search</Tooltip>}
            >
              <div>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="nav-right-icon"
                  color="#102741"
                  style={{ marginLeft: "-2.5rem" }}
                />
              </div>
            </OverlayTrigger>
          </div>
        </div>
        {mainPage === "account" ? (
          <>
            <section
              className="home"
              style={{
                marginTop: "50px",
                display: isSidebarOpen && isMobile ? "none" : "",
              }}
            >
              <User margin={isMobile && !isSidebarOpen ? "-25%" : 0} />
            </section>
          </>
        ) : mainPage === "conservation" ? (
          <section
            className="home"
            style={{
              width:
                isRightSidebarOpen && isSidebarOpen
                  ? "60%"
                  : isRightSidebarOpen
                  ? "70%"
                  : isMobile && !isSidebarOpen
                  ? "90%"
                  : "",

              display: isMobile && isSidebarOpen ? "none" : "",
              marginLeft: isMobile && !isSidebarOpen ? "-10%" : "",
            }}
          >
            <div className={styles.summaryMain}>
              <div>
                <h3>Overrated Meetings</h3>
              </div>
              <div className={styles.descriptionMain}>
                <div>
                  <img
                    src={Person}
                    alt="person"
                    className={styles.personImage}
                  />
                  <span>Overrated</span>
                </div>
                <div>Dec-26 at 11:01 AM -11:31 AM</div>
                <div>
                  <ClockIcon
                    width="12px"
                    style={{ marginBottom: ".15rem", marginRight: ".25rem" }}
                  />
                  00:10
                </div>
                <div>
                  <ImageIcon
                    width="12px"
                    style={{ marginBottom: ".15rem", marginRight: ".25rem" }}
                    color="#5f7282"
                  />
                  20 Screenshots
                </div>
                <div>
                  <CopyIcon
                    width="12px"
                    style={{ marginBottom: ".15rem", marginRight: ".25rem" }}
                  />
                  Copy Summary
                </div>
              </div>
              <div>
                <h4>Share with</h4>
              </div>
              <div className={styles.links}>
                <span
                  onClick={() => setPage("summary")}
                  style={{
                    borderBottom: page === "summary" && "3px solid #126fd6",
                    color: page === "summary" && "#126fd6",
                  }}
                >
                  Summary
                </span>
                <span
                  onClick={() => setPage("transcript")}
                  style={{
                    borderBottom: page === "transcript" && "3px solid #126fd6",
                    color: page === "transcript" && "#126fd6",
                  }}
                >
                  Transcript
                </span>
              </div>
              {page === "summary" && <Summary />}
              {page === "transcript" && (
                <Transcript
                  width={
                    isRightSidebarOpen && isSidebarOpen
                      ? "55%"
                      : isRightSidebarOpen
                      ? "65%"
                      : ""
                  }
                />
              )}
            </div>
          </section>
        ) : mainPage === "upgrade" ? (
          <Subscription
            margin={isSidebarOpen ? "15%" : !isSidebarOpen ? "5%" : ""}
            display={isMobile && isSidebarOpen ? "none" : ""}
            marginTop={isMobile ? "3rem" : "7rem"}
          />
        ) : mainPage === "home" ? (
          <div>
            <HomePage
              margin={
                isSidebarOpen
                  ? "17%"
                  : !isSidebarOpen
                  ? "6%"
                  : !isSidebarOpen && isMobile
                  ? "0px !important"
                  : ""
              }
              display={isMobile && isSidebarOpen ? "none" : ""}
            />
          </div>
        ) : mainPage === "allConversations" ? (
          <SingleConversation
            margin={
              isSidebarOpen
                ? "250px"
                : !isSidebarOpen && !isMobile
                ? "85px"
                : isMobile
                ? "5px"
                : ""
            }
            display={isMobile && isSidebarOpen ? "none" : ""}
            padding={isMobile && "0"}
            value="singleConservation"
            click={() => setMainPage("conservation")}
            item="All"
          />
        ) : mainPage === "singleConservation" ? (
          <SingleConversation
            margin={
              isSidebarOpen
                ? "250px"
                : !isSidebarOpen && !isMobile
                ? "85px"
                : isMobile
                ? "5px"
                : ""
            }
            display={isMobile && isSidebarOpen ? "none" : ""}
            padding={isMobile && "0"}
            value="singleConservation"
            click={() => setMainPage("conservation")}
            item="My"
          />
        ) : (
          ""
        )}

        <nav
          className={`sidebar2 ${isRightSidebarOpen ? "" : "close"}`}
          style={{
            width: isMobile ? "80%" : "",
            display:
              mainPage === "account" ||
              mainPage === "upgrade" ||
              mainPage === "home" ||
              mainPage === "allConversations" ||
              mainPage === "singleConservation"
                ? "none"
                : "",
          }}
        >
          <div className="mainSidebar2">
            <header>
              <div onClick={toggleRightSidebar}>
                <SidebarIcon cls={"toggle"} />
              </div>
            </header>
            {rightSideInner === "summary" ? (
              <div
                className="links"
                style={{ display: !isRightSidebarOpen && "none" }}
              >
                <span
                  onClick={() => setActiveSection("chat")}
                  style={{
                    borderBottom:
                      activeSection === "chat" && "3px solid #126fd6",
                    color: activeSection === "chat" && "#126fd6",
                  }}
                >
                  Chat
                </span>
                <span
                  onClick={() => setActiveSection("outline")}
                  style={{
                    borderBottom:
                      activeSection === "outline" && "3px solid #126fd6",
                    color: activeSection === "outline" && "#126fd6",
                  }}
                >
                  Outline
                </span>
                <span
                  onClick={() => setActiveSection("comments")}
                  style={{
                    borderBottom:
                      activeSection === "comments" && "3px solid #126fd6",
                    color: activeSection === "comments" && "#126fd6",
                    display: page === "summary" && "none",
                  }}
                >
                  Comments
                </span>
              </div>
            ) : rightSideInner === "takeaways" ? (
              <>
                <Takeaways display={!isRightSidebarOpen && "none"} />
              </>
            ) : rightSideInner === "textnotes" ? (
              <>
                <TextNotes display={!isRightSidebarOpen && "none"} />
              </>
            ) : rightSideInner === "highlights" ? (
              <Highlights
                value={"Highlights"}
                display={!isRightSidebarOpen && "none"}
              />
            ) : rightSideInner === "comments" ? (
              <Highlights
                value="Comments"
                display={!isRightSidebarOpen && "none"}
              />
            ) : rightSideInner === "actionitems" ? (
              <Highlights
                value="Action Items"
                display={!isRightSidebarOpen && "none"}
              />
            ) : (
              ""
            )}
            {rightSideInner === "summary" && (
              <>
                {activeSection === "chat" && (
                  <Chat display={!isRightSidebarOpen && "none"} />
                )}
                {activeSection === "outline" && (
                  <Accordian display={!isRightSidebarOpen && "none"} />
                )}
                {activeSection === "comments" && <div></div>}
              </>
            )}
          </div>
          <div className="sidebar2-side">
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="pencil-tooltip">Summary</Tooltip>}
            >
              <div
                className="sidebar2-side-icon"
                onClick={() => setRightSideInner("summary")}
              >
                <SummaryIcon />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="pencil-tooltip">Takeaways</Tooltip>}
            >
              <div
                className="sidebar2-side-icon"
                onClick={() => setRightSideInner("takeaways")}
              >
                <TakeawaysIcon />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="pencil-tooltip">Text Notes</Tooltip>}
            >
              <div
                className="sidebar2-side-icon"
                onClick={() => setRightSideInner("textnotes")}
              >
                <TextNotesIcon />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="pencil-tooltip">Highlights</Tooltip>}
            >
              <div
                className="sidebar2-side-icon"
                onClick={() => setRightSideInner("highlights")}
              >
                <PencilIcon width="20px" />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="pencil-tooltip">Comments</Tooltip>}
            >
              <div
                className="sidebar2-side-icon"
                onClick={() => setRightSideInner("comments")}
              >
                <CommentIcon width="20px" />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="pencil-tooltip">Action Items</Tooltip>}
            >
              <div
                className="sidebar2-side-icon"
                onClick={() => setRightSideInner("actionitems")}
              >
                <ActionItemsIcon />
              </div>
            </OverlayTrigger>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
