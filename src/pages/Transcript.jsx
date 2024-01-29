import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faPencil,
  faMessage,
  faPager,
  faShareNodes,
  faPlay,
  faPause,
  faBackward,
  faForward,
  faImage,
  faStar,
  faEllipsis,
  faArrowUp,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import transcriptStyles from "./Transcript.module.css";
import { OverlayTrigger, Tooltip, Dropdown } from "react-bootstrap";
import Person from "../assets/person.png";
import Person1 from "../assets/otter.png";
import Person2 from "../assets/microsoft.png";
import AudioMusic from "../assets/295.mp3";
import PencilIcon from "../components/Icons/PencilIcon";
import CommentIcon from "../components/Icons/CommentIcon";
import PlayIcon from "../components/Icons/PlayIcon";
import PauseIcon from "../components/Icons/PauseIcon";
import BackwardIcon from "../components/Icons/BackwardIcon";
import ForwardIcon from "../components/Icons/ForwardIcon";
import ImageIcon from "../components/Icons/ImageIcon";
import EditBtnIcon from "../components/Icons/EditBtnIcon";
import CopyIcon from "../components/Icons/CopyIcon";
import ShareIcon from "../components/Icons/ShareIcon";
const Transcript = (props) => {
  const { width } = props;
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTime, setHoveredTime] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [isChecked, setChecked] = useState(false);
  const [showHighlights, setShowHighlights] = useState(true);
  const [isEditingMode, setIsEditingMode] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditingMode(!isEditingMode);
  };
  const handleHighlightToggle = () => {
    setShowHighlights(!showHighlights);
  };
  const closeDropdown = () => {
    setShowSpeedMenu(false);
  };

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  const toggleSpeedMenu = () => {
    setShowSpeedMenu(!showSpeedMenu);
  };
  const selectSpeed = (speed) => {
    setSpeed(speed);
    audioRef.current.playbackRate = speed;
    setSelectedSpeed(speed);
    setShowSpeedMenu(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButtonThreshold = 300;

      setIsVisible(scrollY > showButtonThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleStarHover = (index) => {
    setHoveredStar(index);
  };

  const handleStarClick = (index) => {
    setSelectedStar(index);
  };

  const resetHoveredStar = () => {
    setHoveredStar(null);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playPauseHandler = () => {
    setPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const timeUpdateHandler = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  const dragHandler = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const sliderWidth = rect.width;
    const hoverPercentage = offsetX / sliderWidth;
    const { duration } = audioRef.current;
    const hoverTime = hoverPercentage * duration;

    setCurrentTime(audioRef.current.currentTime);
    setHoveredTime(hoverTime);

    // Calculate tooltip position
    const tooltipX = rect.left + offsetX;
    const tooltipY = rect.top - 30; // Adjust the tooltip position based on your styling

    setTooltipPosition({ x: tooltipX, y: tooltipY });
  };

  const speedChangeHandler = (newSpeed) => {
    setSpeed(newSpeed);
    audioRef.current.playbackRate = newSpeed;
  };
  const skipTime = (amount) => {
    const newTime = Math.max(
      0,
      Math.min(audioRef.current?.duration, currentTime + amount)
    );
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };
  return (
    <>
      <div className={transcriptStyles.editButtonMain}>
        <button onClick={handleEditButtonClick} style={{ color: "#000" }}>
          <EditBtnIcon cls={transcriptStyles.pencil} />
          {isEditingMode ? "Done" : "Edit"}
        </button>
      </div>
      <div>
        {isVisible && (
          <div
            className={transcriptStyles.scrollToTopButton}
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        )}
      </div>
      <div className={transcriptStyles.transcriptMain}>
        <div className={transcriptStyles.keywordsMain}>
          <p>Keywords</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore
            blanditiis exercitationem totam quas eveniet doloribus eos delectus,
            ullam harum veritatis quis maxime iusto iure alias, dicta aperiam
            cumque et.
          </p>
        </div>
        <div className={transcriptStyles.speakersMain}>
          <p>Speakers</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore
            blanditiis exercitationem totam quas eveniet doloribus eos delectus,
            ullam harum veritatis quis maxime iusto iure alias, dicta aperiam
            cumque et.
          </p>
        </div>
        <div className={transcriptStyles.highlightMain}>
          <div>Show Highlights</div>
          <div
            className={transcriptStyles.toggleItems}
            style={{ marginTop: "1rem" }}
          >
            <label className={transcriptStyles.toggleSwitch}>
              <input
                type="checkbox"
                checked={showHighlights}
                onChange={handleHighlightToggle}
                className={transcriptStyles.checkbox}
              />
              <span className={transcriptStyles.slider}></span>
            </label>
          </div>
        </div>
        <TranscriptItem isEditingMode={isEditingMode} />
        <TranscriptItem isEditingMode={isEditingMode} />
        <TranscriptItem isEditingMode={isEditingMode} />
        <div
          className={transcriptStyles.audioPlayerContainer}
          style={{ width: width }}
        >
          <div className={transcriptStyles.audioPlayer}>
            <audio
              ref={audioRef}
              src={AudioMusic}
              onTimeUpdate={timeUpdateHandler}
            />
            <div className={transcriptStyles.sliderMain}>
              <span>{formatTime(currentTime)}</span>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="slider-tooltip"
                    style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
                  >
                    Submarine, citizenship, workflow <br />{" "}
                    {formatTime(hoveredTime)}
                  </Tooltip>
                }
                onMouseMove={dragHandler}
              >
                <input
                  type="range"
                  value={(currentTime / audioRef.current?.duration) * 100 || 0}
                  onChange={(e) => {
                    const newPosition = parseInt(e.target.value, 10);
                    const newTime =
                      (newPosition / 100) * audioRef.current?.duration;
                    setCurrentTime(newTime);
                    audioRef.current.currentTime = newTime;
                  }}
                  className={transcriptStyles.inputRange}
                />
              </OverlayTrigger>

              <span>{formatTime(audioRef.current?.duration)}</span>
            </div>
            <div className={transcriptStyles.controls}>
              <div className={transcriptStyles.controlsMain}>
                <div>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="pencil-tooltip">Rewind 5 seconds</Tooltip>
                    }
                    className={transcriptStyles.mainControlInner}
                  >
                    <button
                      onClick={() => skipTime(-5)}
                      className={transcriptStyles.audioControls}
                    >
                      <BackwardIcon cls={transcriptStyles.playPauseIcons} />
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="pencil-tooltip">Play/Pause</Tooltip>}
                  >
                    <button
                      onClick={playPauseHandler}
                      className={transcriptStyles.audioControls}
                    >
                      {isPlaying ? (
                        <>
                          <PauseIcon cls={transcriptStyles.playPauseIcons} />
                        </>
                      ) : (
                        <>
                          <PlayIcon cls={transcriptStyles.playPauseIcons} />
                        </>
                      )}
                    </button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="pencil-tooltip">
                        Fast Forward 5 seconds
                      </Tooltip>
                    }
                  >
                    <button
                      onClick={() => skipTime(+5)}
                      className={transcriptStyles.audioControls}
                    >
                      <ForwardIcon cls={transcriptStyles.playPauseIcons} />
                    </button>
                  </OverlayTrigger>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Dropdown show={showSpeedMenu} onToggle={toggleSpeedMenu}>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-speed"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#05294b",
                      }}
                    >
                      {selectedSpeed}x
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={transcriptStyles.dropDownMain}>
                      <div className={transcriptStyles.speedDDTop}>
                        <div>Playback Options</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faX}
                            className={transcriptStyles.cross}
                            onClick={closeDropdown}
                          />
                        </div>
                      </div>
                      <div className={transcriptStyles.mid}>
                        <div>
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            className={transcriptStyles.icons}
                          />
                          <a href="#" style={{ fontWeight: "500" }}>
                            Upgrade
                          </a>
                          <strong> to unlock more playback speeds.</strong>
                        </div>
                      </div>
                      <div className={transcriptStyles.speed}>Speed</div>
                      <div className={transcriptStyles.flex}>
                        {[0.5, 1, 1.5, 2, 2.5, 3].map((speed) => (
                          <Dropdown.Item
                            key={speed}
                            onClick={() => selectSpeed(speed)}
                            style={{ color: "grey", fontWeight: "600" }}
                          >
                            {speed}x
                          </Dropdown.Item>
                        ))}
                      </div>
                      <div className={transcriptStyles.bottomDD}>
                        <div>Keep Silence</div>
                        <div className={transcriptStyles.toggleItems}>
                          <label className={transcriptStyles.toggleSwitch}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleToggle}
                              className={transcriptStyles.checkbox}
                            />
                            <span className={transcriptStyles.slider}></span>
                          </label>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="pencil-tooltip">Edit</Tooltip>}
                >
                  <div class={transcriptStyles.controlsIcons}>
                    <PencilIcon />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="pencil-tooltip">Comment</Tooltip>}
                >
                  <div class={transcriptStyles.controlsIcons}>
                    <CommentIcon color="#05294b" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="pencil-tooltip">Image</Tooltip>}
                >
                  <div class={transcriptStyles.controlsIcons}>
                    <ImageIcon color="#05294b" />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
        <div className={transcriptStyles.rating}>
          <div className={transcriptStyles.innerRating}>
            <p>Rate Transcript Quality</p>
            <div className={transcriptStyles.starIcons}>
              {[1, 2, 3, 4, 5].map((index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={`${transcriptStyles.hoverIcons} ${
                    hoveredStar !== null && index <= hoveredStar
                      ? transcriptStyles.hovered
                      : ""
                  } ${
                    selectedStar !== null && index <= selectedStar
                      ? transcriptStyles.selected
                      : ""
                  }`}
                  onMouseEnter={() => handleStarHover(index)}
                  onMouseLeave={resetHoveredStar}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transcript;
const TranscriptItem = ({ isEditingMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut possimus unde laborum accusantium molestias temporibus autem, magnam dolorem sit deserunt at, odio sapiente magni necessitatibus natus eos quidem soluta ex?"
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditFinish = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedContent(e.target.value);
  };

  const users = [
    { name: "User 1", image: Person },
    { name: "User 2", image: Person1 },
    { name: "User 3", image: Person2 },
  ];
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleEditFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEditing]);

  const handleSearchClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={transcriptStyles.trasncriptItem}>
        <div className={transcriptStyles.top}>
          <div
            className={transcriptStyles.user}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={selectedUser.image}
              alt="user"
              className={transcriptStyles.image}
            />
            <div className={transcriptStyles.name}>{selectedUser.name}</div>
            {isOpen && (
              <div className={transcriptStyles.dropdown}>
                <div className={transcriptStyles.suggestedSpeakers}>
                  Suggested Speakers
                </div>
                {users.map((user) => (
                  <div
                    className={transcriptStyles.itemsMain}
                    onClick={() => handleUserClick(user)}
                  >
                    <div
                      key={user.name}
                      className={transcriptStyles.dropdownItems}
                    >
                      <img
                        src={user.image}
                        alt={user.name}
                        className={transcriptStyles.dropdownImage}
                      />
                      {user.name}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        className={transcriptStyles.ellipsis}
                      />
                    </div>
                  </div>
                ))}
                <div className={transcriptStyles.dropdownInput}>
                  <input
                    type="text"
                    placeholder="Search"
                    onClick={handleSearchClick}
                  />
                  <button>Tag</button>
                </div>
              </div>
            )}
          </div>
          <div className={transcriptStyles.time}>0:00</div>
          <div style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faPlay}
              style={{ marginLeft: ".5rem", color: "grey" }}
            />
          </div>
        </div>
        <div className={transcriptStyles.paragraph}>
          {isEditing || isEditingMode ? (
            <textarea
              rows={Math.max(3, Math.ceil(editedContent.length / 50))}
              value={editedContent}
              onChange={handleInputChange}
              onBlur={handleEditFinish}
              style={{ width: "100%" }}
              className={transcriptStyles.textarea}
            />
          ) : (
            editedContent
          )}
        </div>
        <div className={transcriptStyles.hover}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="pencil-tooltip">Highlight</Tooltip>}
          >
            <div className={transcriptStyles.hoverMyIcons}>
              <PencilIcon oc={handleEditStart} />
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="message-tooltip">Comment</Tooltip>}
          >
            <div className={transcriptStyles.hoverMyIcons}>
              <CommentIcon />
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="pager-tooltip">Copy</Tooltip>}
          >
            <div className={transcriptStyles.hoverMyIcons}>
              <CopyIcon />
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="share-tooltip">Share</Tooltip>}
          >
            <div className={transcriptStyles.hoverMyIcons}>
              <ShareIcon />
            </div>
          </OverlayTrigger>
        </div>
      </div>
    </>
  );
};
