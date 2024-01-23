import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // Make sure to have your CSS in Dashboard.css
import Logo from "../../assets/otter.png";
import { IoMdNotifications } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHome,
  faFileLines,
  faChevronUp,
  faPlus,
  faMessage,
  faEllipsis,
  faLock,
  faMagnifyingGlass,
  faPaperPlane,
  faFolder,
  faClock,
  faImage,
  faKeyboard,
  faTurnDown,
  faDownload,
  faTrash,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Form,
  Button,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
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
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("chat");
  const [page, setPage] = useState("summary");
  const [mainPage, setMainPage] = useState("conservation");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
          <header>
            <div className="image-text">
              <span className="image">
                <img src={Logo} alt="logo" />
              </span>

              <div className="text logo-text">
                <IoMdNotifications size={23} color="#126fd6" />
              </div>
            </div>
            <div onClick={toggleSidebar}>
              <SidebarIcon cls={"toggle"} />
            </div>
          </header>

          <div className="menu-bar">
            <div className="top-content">
              <div className="account">
                <div className="person" onClick={() => setMainPage("account")}>
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
                <li className="nav-link" onClick={() => setMainPage("home")}>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="menu-icons first"
                    />
                    <span className="text nav-text">Home</span>
                  </a>
                </li>
                <li
                  className="nav-link"
                  onClick={() => setMainPage("conservation")}
                >
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="menu-icons"
                    />
                    <span className="text nav-text">My Conservations</span>
                  </a>
                </li>
                <li
                  className="nav-link"
                  onClick={() => setMainPage("allConversations")}
                >
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="menu-icons"
                    />
                    <span className="text nav-text">All Conservations</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="menu-icons"
                    />
                    <span className="text nav-text">App</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className="menu-icons last"
                    />
                    <span className="text nav-text">More</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <FontAwesomeIcon
                    icon={faPerson}
                    className="menu-icons second-menu-icons hidden-icons lastOne"
                  />
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
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="menu-icons second-menu-icons hidden-icons"
                  />
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
                  <FontAwesomeIcon
                    icon={faFolder}
                    className="menu-icons second-menu-icons hidden-icons"
                  />
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
        </nav>
        {mainPage === "account" ? (
          <>
            <section className="home">
              <User />
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
                  : "",

              display:
                isMobile && (isSidebarOpen || isRightSidebarOpen)
                  ? "none"
                  : "block",
            }}
          >
            <div className="navbar">
              <div>
                <h3>My Recording Tutorial</h3>
              </div>
              <div className="navbar-right">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="pencil-tooltip">Private to only me</Tooltip>
                  }
                >
                  <button className="share">
                    <FontAwesomeIcon icon={faLock} className="share-icon" />
                    <span>Share</span>
                  </button>
                </OverlayTrigger>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ background: "transparent", border: "none" }}
                  >
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="pencil-tooltip">More</Tooltip>}
                    >
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        className="nav-right-icon"
                        color="#000"
                      />
                    </OverlayTrigger>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <div className="dropdown-items">
                        <FontAwesomeIcon
                          icon={faKeyboard}
                          className="dropdown-icons"
                          color="#000"
                        />
                        Keyboard Shortcuts
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div className="dropdown-items">
                        <FontAwesomeIcon
                          icon={faTurnDown}
                          className="dropdown-icons"
                          color="#000"
                        />
                        Move
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div className="dropdown-items">
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="dropdown-icons"
                          color="#000"
                        />
                        Export
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <div className="dropdown-items">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="dropdown-icons"
                          color="#000"
                        />
                        Delete
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="pencil-tooltip">Search</Tooltip>}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="nav-right-icon"
                      color="#000"
                    />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
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
                  <FontAwesomeIcon
                    icon={faClock}
                    className={styles.summaryIcons}
                  />
                  00:10
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faImage}
                    className={styles.summaryIcons}
                  />
                  20 Screenshots
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className={styles.summaryIcons}
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
            margin={isSidebarOpen ? "15%" : !isSidebarOpen ? "70px" : ""}
            display={isMobile && isSidebarOpen ? "none" : ""}
          />
        ) : mainPage === "home" ? (
          <HomePage
            margin={isSidebarOpen ? "17%" : !isSidebarOpen ? "90px" : ""}
            display={isMobile && isSidebarOpen ? "none" : ""}
          />
        ) : mainPage === "allConversations" ? (
          <Conversations
            margin={isSidebarOpen ? "17%" : !isSidebarOpen ? "90px" : ""}
            display={isMobile && isSidebarOpen ? "none" : ""}
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
              mainPage === "allConversations"
                ? "none"
                : "",
          }}
        >
          <header>
            <div onClick={toggleRightSidebar}>
              <SidebarIcon cls={"toggle"} />
            </div>
          </header>
          <div
            className="links"
            style={{ display: !isRightSidebarOpen && "none" }}
          >
            <span
              onClick={() => setActiveSection("chat")}
              style={{
                borderBottom: activeSection === "chat" && "3px solid #126fd6",
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
          {activeSection === "chat" && (
            <div
              className="chat"
              style={{ display: !isRightSidebarOpen && "none" }}
            >
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
          )}
          {activeSection === "outline" && <Accordian />}
          {activeSection === "comments" && <div></div>}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
