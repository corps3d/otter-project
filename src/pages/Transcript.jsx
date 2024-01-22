import React, { useState, useRef } from "react";
import styles from "../components/Summary/Summary.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
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
} from "@fortawesome/free-solid-svg-icons";
import transcriptStyles from "./Transcript.module.css";
import Person from "../assets/person.png";
import Person1 from "../assets/otter.png";
import Person2 from "../assets/microsoft.png";
import AudioMusic from "../assets/295.mp3";
const Transcript = (props) => {
  const { width } = props;
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);

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
    const { duration } = audioRef.current;
    const dragTime = (e.target.value / 100) * duration;
    setCurrentTime(dragTime);
    audioRef.current.currentTime = dragTime;
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
      <TranscriptItem />
      <TranscriptItem />
      <TranscriptItem />
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
            <input
              type="range"
              value={(currentTime / audioRef.current?.duration) * 100 || 0}
              onChange={dragHandler}
            />
            <span>{formatTime(audioRef.current?.duration)}</span>
          </div>
          <div className={transcriptStyles.controls}>
            <div className={transcriptStyles.controlsMain}>
              <div>
                <button
                  onClick={() => skipTime(-5)}
                  className={transcriptStyles.audioControls}
                >
                  <FontAwesomeIcon
                    icon={faBackward}
                    className={transcriptStyles.playPauseIcons}
                  />
                </button>

                <button
                  onClick={playPauseHandler}
                  className={transcriptStyles.audioControls}
                >
                  {isPlaying ? (
                    <>
                      <FontAwesomeIcon
                        icon={faPause}
                        className={transcriptStyles.playPauseIcons}
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className={transcriptStyles.playPauseIcons}
                      />
                    </>
                  )}
                </button>
                <button
                  onClick={() => skipTime(+5)}
                  className={transcriptStyles.audioControls}
                >
                  <FontAwesomeIcon
                    icon={faForward}
                    className={transcriptStyles.playPauseIcons}
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => speedChangeHandler(1)}
                  className={transcriptStyles.audioControls}
                >
                  1x
                </button>
                <button
                  onClick={() => speedChangeHandler(2)}
                  className={transcriptStyles.audioControls}
                >
                  2x
                </button>
                <button
                  onClick={() => speedChangeHandler(3)}
                  className={transcriptStyles.audioControls}
                >
                  3x
                </button>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPencil}
                className={transcriptStyles.hoverIcons}
              />
              <FontAwesomeIcon
                icon={faPager}
                className={transcriptStyles.hoverIcons}
              />
              <FontAwesomeIcon
                icon={faImage}
                className={transcriptStyles.hoverIcons}
              />
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
  );
};

export default Transcript;
const TranscriptItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut possimus unde laborum accusantium molestias temporibus autem, magnam dolorem sit deserunt at, odio sapiente magni necessitatibus natus eos quidem soluta ex?"
  );

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditFinish = () => {
    setIsEditing(false);
    // You can save the edited content to your state or perform any necessary actions.
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
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditFinish();
    }
  };

  return (
    <>
      <div className={transcriptStyles.trasncriptItem}>
        <div className={transcriptStyles.top}>
          <div
            className={transcriptStyles.user}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={selectedUser.image} alt="user" />
            <div className={transcriptStyles.name}>{selectedUser.name}</div>
            {isOpen && (
              <div className={transcriptStyles.dropdown}>
                {users.map((user) => (
                  <div
                    key={user.name}
                    onClick={() => handleUserClick(user)}
                    className={transcriptStyles.dropdownItems}
                  >
                    <img
                      src={user.image}
                      alt={user.name}
                      className={transcriptStyles.dropdownImage}
                    />
                    {user.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={transcriptStyles.time}>0:00</div>
        </div>
        <div className={transcriptStyles.paragraph}>
          {isEditing ? (
            <textarea
              rows={Math.max(3, Math.ceil(editedContent.length / 50))}
              value={editedContent}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleEditFinish}
              style={{ width: "100%" }}
            />
          ) : (
            editedContent
          )}
        </div>
        <div className={transcriptStyles.hover}>
          <FontAwesomeIcon
            icon={faFaceSmile}
            className={transcriptStyles.hoverIcons}
          />
          <FontAwesomeIcon
            icon={faPencil}
            className={transcriptStyles.hoverIcons}
            onClick={handleEditStart}
          />
          <FontAwesomeIcon
            icon={faMessage}
            className={transcriptStyles.hoverIcons}
          />
          <FontAwesomeIcon
            icon={faPager}
            className={transcriptStyles.hoverIcons}
          />
          <FontAwesomeIcon
            icon={faShareNodes}
            className={transcriptStyles.hoverIcons}
          />
        </div>
      </div>
    </>
  );
};
