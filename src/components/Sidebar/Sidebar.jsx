import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // Make sure to have your CSS in Dashboard.css
import Logo from "../../assets/otter.png";
import { IoMdNotifications } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBook,
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
  faGear,
  faImage,
  faKeyboard,
  faTurnDown,
  faDownload,
  faTrash,
  faEllipsisVertical,
  faRightFromBracket,
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

  const [isPModalOpen, setIsPModalOpen] = useState(false);

  const setPMainPage = () => {
    setIsPModalOpen(!isPModalOpen);
  };

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
                    <div className="account-option" onClick={() => {
                        setMainPage("account");
                        setIsPModalOpen(!isPModalOpen);
                      }}>
                      <FontAwesomeIcon icon={faHome} className="menu-icons" />
                      Account Settings
                    </div>
                    <div className="logout-option">
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="menu-icons"
                      />
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
                <li className={`nav-link ${!isSidebarOpen && 'dFlex'}`} onClick={() => setMainPage("home")}>
                  <a href="#">
                    <mat-icon
                      _ngcontent-otter-web-c181372000=""
                      role="img"
                      class="mat-icon notranslate mat-icon-no-color ng-star-inserted"
                      aria-hidden="true"
                      data-mat-icon-type="svg"
                      data-mat-icon-name="otter-home"
                    >
                      <svg
                        viewBox="0 2 24 22"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fit=""
                        height="20px"
                        width="20px"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        style={{ marginRight: isSidebarOpen && ".25rem" }}
                      >
                        <path d="M8.25,22.25 L8.25,17 C8.25,14.9289322 9.92893219,13.25 12,13.25 C14.0710678,13.25 15.75,14.9289322 15.75,17 L15.75,22.25 L16,22.25 C18.2191251,22.25 19.25,21.0129501 19.25,19 L19.25,13 C19.25,12.5857864 19.5857864,12.25 20,12.25 C20.4142136,12.25 20.75,12.5857864 20.75,13 L20.75,19 C20.75,21.7870499 19.1142083,23.75 16,23.75 L8,23.75 C5.66842097,23.75 3.25,21.9552014 3.25,19 L3.25,13 C3.25,12.5857864 3.58578644,12.25 4,12.25 C4.41421356,12.25 4.75,12.5857864 4.75,13 L4.75,19 C4.75,21.0133447 6.41634465,22.25 8,22.25 L8.25,22.25 Z M9.75,22.25 L14.25,22.25 L14.25,17 C14.25,15.7573593 13.2426407,14.75 12,14.75 C10.7573593,14.75 9.75,15.7573593 9.75,17 L9.75,22.25 Z M23.4749283,10.419532 C23.795512,10.6818277 23.8427637,11.1543447 23.580468,11.4749283 C23.3181723,11.795512 22.8456553,11.8427637 22.5250717,11.580468 L13.424785,4.13477891 C12.5959618,3.45665081 11.4040382,3.45665081 10.575215,4.13477891 L1.47492834,11.580468 C1.15434473,11.8427637 0.681827707,11.795512 0.419532026,11.4749283 C0.157236345,11.1543447 0.204488047,10.6818277 0.525071657,10.419532 L9.62535829,2.97384297 C11.0067303,1.84362946 12.9932697,1.84362946 14.3746417,2.97384297 L23.4749283,10.419532 Z"></path>
                      </svg>
                    </mat-icon>
                    <span className="text nav-text">Home</span>
                  </a>
                </li>
                <li
                  className={`nav-link ${!isSidebarOpen && 'dFlex'}`}
                  onClick={() => setMainPage("conservation")}
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
                    <span className="text nav-text" style={{ marginTop: "0" }}>
                      My Conservations
                    </span>
                  </a>
                </li>
                <li
                  className={`nav-link ${!isSidebarOpen && 'dFlex'}`}
                  onClick={() => setMainPage("allConversations")}
                >
                  <a href="#">
                    <mat-icon
                      _ngcontent-otter-web-c181372000=""
                      role="img"
                      class="mat-icon notranslate mat-icon-no-color ng-star-inserted"
                      aria-hidden="true"
                      data-mat-icon-type="svg"
                      data-mat-icon-name="otter-all-conversations"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                        fit=""
                        height="20px"
                        width="20px"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        style={{ marginRight: isSidebarOpen && ".25rem" }}
                      >
                        <g fill="currentColor" fill-rule="nonzero">
                          <path
                            id="a"
                            d="M20.75 15a.75.75 0 1 1 1.5 0v3c0 2.787-1.636 4.75-4.75 4.75h-8c-2.332 0-4.75-1.795-4.75-4.75v-3a.75.75 0 1 1 1.5 0v3c0 2.013 1.666 3.25 3.25 3.25h8c2.22 0 3.25-1.237 3.25-3.25v-3zm-14.5 0a.75.75 0 1 1-1.5 0V9c0-2.787 1.636-4.75 4.75-4.75h8c2.332 0 4.75 1.795 4.75 4.75a.75.75 0 1 1-1.5 0c0-2.013-1.666-3.25-3.25-3.25h-8C7.28 5.75 6.25 6.987 6.25 9v6zm.25 4.75c-2.332 0-4.75-1.795-4.75-4.75v-3a.75.75 0 1 1 1.5 0v3c0 2.013 1.77 3 2.595 3l.655 1.75zM3.25 12a.75.75 0 1 1-1.5 0V6c0-2.787 1.636-4.75 4.75-4.75h8c2.332 0 4.75 1.795 4.75 4.75 0 .414-1.427-.4-1.427-.815 0-1.185-1.74-2.435-3.323-2.435h-8C4.28 2.75 3.25 3.987 3.25 6v6zm6.116.75c-.34 0-.616-.336-.616-.75s.276-.75.616-.75h8.216c.34 0 .616.336.616.75s-.276.75-.616.75H9.366zm0 3c-.34 0-.616-.336-.616-.75s.276-.75.616-.75h8.216c.34 0 .616.336.616.75s-.276.75-.616.75H9.366zm0 3c-.34 0-.616-.336-.616-.75s.276-.75.616-.75h5.751c.34 0 .616.336.616.75s-.276.75-.616.75h-5.75zm0-9c-.34 0-.616-.336-.616-.75s.276-.75.616-.75h8.216c.34 0 .616.336.616.75s-.276.75-.616.75H9.366z"
                          ></path>
                        </g>
                      </svg>
                    </mat-icon>
                    <span className="text nav-text">All Conservations</span>
                  </a>
                </li>
                <li className={`nav-link ${!isSidebarOpen && 'dFlex'}`}>
                  <a href="#">
                    <mat-icon
                      _ngcontent-otter-web-c181372000=""
                      role="img"
                      class="mat-icon notranslate mat-icon-no-color ng-star-inserted"
                      aria-hidden="true"
                      data-mat-icon-type="svg"
                      data-mat-icon-name="otter-apps"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 18 18"
                        fit=""
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        style={{ marginRight: isSidebarOpen && ".35rem", marginLeft: isSidebarOpen && ".25rem" }}
                      >
                        <g fill="currentColor" fill-rule="evenodd">
                          <rect width="4" height="4" rx="1"></rect>
                          <rect width="4" height="4" x="7" rx="1"></rect>
                          <rect width="4" height="4" x="14" rx="1"></rect>
                          <rect width="4" height="4" y="7" rx="1"></rect>
                          <rect width="4" height="4" x="7" y="7" rx="1"></rect>
                          <rect width="4" height="4" x="14" y="7" rx="1"></rect>
                          <rect width="4" height="4" y="14" rx="1"></rect>
                          <rect width="4" height="4" x="7" y="14" rx="1"></rect>
                          <rect
                            width="4"
                            height="4"
                            x="14"
                            y="14"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </mat-icon>
                    <span className="text nav-text">App</span>
                  </a>
                </li>
                <li className={`nav-link ${!isSidebarOpen && 'dFlex'}`}>
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
                  <mat-icon
                    _ngcontent-otter-web-c181372000=""
                    role="img"
                    svgicon="otter-group"
                    class="mat-icon notranslate mat-icon-no-color menu-icons second-menu-icons hidden-icons lastOne"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="otter-group"
                  >
                    <svg
                      viewBox="0 0 23 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fit=""
                      height="20px"
                      width="20px"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      style={{ marginLeft: isSidebarOpen && "-0.5rem" }}
                    >
                      <g transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)">
                        <path d="M11.75,3 C11.75,2.58578644 12.0857864,2.25 12.5,2.25 C12.9142136,2.25 13.25,2.58578644 13.25,3 L13.25,8.4 C13.25,10.9226456 12.0867535,12.75 9.75,12.75 L7.71296296,12.75 L4.25,12.75 C2.49469598,12.75 0.75,11.0549856 0.75,8.4 L0.75,3 C0.75,2.58578644 1.08578644,2.25 1.5,2.25 C1.91421356,2.25 2.25,2.58578644 2.25,3 L2.25,8.4 C2.25,10.2167059 3.31358039,11.25 4.25,11.25 L9.75,11.25 C11.0799131,11.25 11.75,10.1973544 11.75,8.4 L11.75,3 Z M21.75,3 C21.75,2.58578644 22.0857864,2.25 22.5,2.25 C22.9142136,2.25 23.25,2.58578644 23.25,3 L23.25,8.4 C23.25,10.9226456 22.0867535,12.75 19.75,12.75 L14.5,12.75 C14.0857864,12.75 13.75,12.4142136 13.75,12 C13.75,11.5857864 14.0857864,11.25 14.5,11.25 L19.75,11.25 C21.0799131,11.25 21.75,10.1973544 21.75,8.4 L21.75,3 Z M17.5,20.25 C18.7426407,20.25 19.75,19.2426407 19.75,18 C19.75,16.7573593 18.7426407,15.75 17.5,15.75 C16.2573593,15.75 15.25,16.7573593 15.25,18 C15.25,19.2426407 16.2573593,20.25 17.5,20.25 Z M17.5,21.75 C15.4289322,21.75 13.75,20.0710678 13.75,18 C13.75,15.9289322 15.4289322,14.25 17.5,14.25 C19.5710678,14.25 21.25,15.9289322 21.25,18 C21.25,20.0710678 19.5710678,21.75 17.5,21.75 Z M6.5,20.25 C7.74264069,20.25 8.75,19.2426407 8.75,18 C8.75,16.7573593 7.74264069,15.75 6.5,15.75 C5.25735931,15.75 4.25,16.7573593 4.25,18 C4.25,19.2426407 5.25735931,20.25 6.5,20.25 Z M6.5,21.75 C4.42893219,21.75 2.75,20.0710678 2.75,18 C2.75,15.9289322 4.42893219,14.25 6.5,14.25 C8.57106781,14.25 10.25,15.9289322 10.25,18 C10.25,20.0710678 8.57106781,21.75 6.5,21.75 Z"></path>
                      </g>
                    </svg>
                  </mat-icon>
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
                  <mat-icon
                    _ngcontent-otter-web-c181372000=""
                    role="img"
                    svgicon="icon-dm"
                    class="mat-icon notranslate mat-icon-no-color menu-icons second-menu-icons hidden-icons lastOne"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="icon-dm"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      style={{ marginLeft: isSidebarOpen && "-0.5rem" }}
                    >
                      <path
                        d="M1.36052 12.8455C1.36047 6.15021 6.51073 1 13.206 1C19.9013 1 25.0515 6.15021 25.0515 12.8455C25.0515 19.5408 19.9013 24.691 13.206 24.691C9.60086 24.691 7.54077 23.1459 7.54077 23.1459L2.30688 24.6295C1.73908 24.7905 1.21644 24.2629 1.38273 23.6967L2.90558 18.5107C2.90558 18.5107 1.36054 16.4506 1.36052 12.8455Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M1.68675 22.6515C1.32626 23.6815 2.25327 24.7116 3.38642 24.3202"
                        stroke="currentColor"
                        stroke-width="1.5"
                      ></path>
                      <line
                        x1="13.1835"
                        y1="5.35515"
                        x2="13.1835"
                        y2="20.3358"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></line>
                      <line
                        x1="16.7886"
                        y1="8.44528"
                        x2="16.7886"
                        y2="17.2457"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></line>
                      <line
                        x1="9.57825"
                        y1="8.44528"
                        x2="9.57825"
                        y2="17.2457"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></line>
                      <line
                        x1="20.3938"
                        y1="11.5354"
                        x2="20.3938"
                        y2="14.1556"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></line>
                      <line
                        x1="5.97314"
                        y1="11.5354"
                        x2="5.97314"
                        y2="14.1556"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></line>
                    </svg>
                  </mat-icon>
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
                  <mat-icon
                    _ngcontent-otter-web-c181372000=""
                    role="img"
                    svgicon="otter-folder-new"
                    class="mat-icon notranslate mat-icon-no-color menu-icons second-menu-icons hidden-icons lastOne"
                    aria-hidden="true"
                    data-mat-icon-type="svg"
                    data-mat-icon-name="otter-folder-new"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      fit=""
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                      style={{ marginLeft: isSidebarOpen && "-0.5rem" }}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19 15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H6.46164C7.56621 1 8.46164 1.89543 8.46164 3V4.21877H17C18.1046 4.21877 19 5.1142 19 6.21877V15Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </mat-icon>
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
                        style={{ marginLeft: "-1.5rem" }}
                      />
                    </OverlayTrigger>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ marginLeft: isRightSidebarOpen && "-6.5rem" }}
                  >
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
                      style={{ marginLeft: "-2.5rem" }}
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
