import React from "react";
import homeStyles from "./Conversations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
const Conversations = (props) => {
  const { margin, display } = props;
  return (
    <>
      <div
        className={homeStyles.main}
        style={{ marginLeft: margin, display: display }}
      >
        <h3 style={{ marginTop: "2.5rem" }}>All Conversations</h3>
        <HomeContent />
        <HomeContent />
        <HomeContent />
      </div>
    </>
  );
};

export default Conversations;
const HomeContent = () => {
  return (
    <div style={{ marginBottom: "2rem" }} className={homeStyles.homeMain}>
      <p className={homeStyles.date}>Dec, 2023</p>
      <div className={homeStyles.inner}>
        <p className={homeStyles.title}>Overrated is overrated</p>
        <div className={homeStyles.flex}>
          <p>11am</p>
          <p>10 min</p>
          <p>overrated is overrated</p>
        </div>
        <div className={homeStyles.flex}>
          <p className={homeStyles.normal}>Hola Fellows</p>
          <p>00:00</p>
        </div>
      </div>
      <div className={homeStyles.mainPencil}>
        <FontAwesomeIcon icon={faPencil} className={homeStyles.pencil} />1
      </div>
    </div>
  );
};
