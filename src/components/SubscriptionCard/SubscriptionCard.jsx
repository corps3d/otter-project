import React from "react";
import styles from "../Subscription/Subscription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faWaveSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const SubscriptionCard = (props) => {
  const {
    borderTop,
    title,
    decscription,
    price,
    seats,
    minutes,
    buttonText,
    includeListHead,
  } = props;
  return (
    <div
      className={styles.cardItemMain}
      style={{ borderTop: `6px solid ${borderTop}` }}
    >
      <p>{title}</p>
      <p>{decscription}</p>
      <p>
        $<span>{price}</span>
      </p>
      <p>No credit card required</p>
      <div className={styles.iconMain}>
        <FontAwesomeIcon
          icon={faUser}
          className={styles.subscriptionCardIcon}
        />
        <p className={styles.blackText}>{seats}</p>
      </div>
      <div className={styles.iconMain}>
        <FontAwesomeIcon
          icon={faWaveSquare}
          className={styles.subscriptionCardIcon}
        />
        <p className={styles.blackText}>{minutes} minutes / month</p>
      </div>

      <button className={styles.planButton}>{buttonText}</button>
      <div className={styles.includeList}>
        <p style={{ fontSize: ".75rem" }} className="my-2">
          {includeListHead}
        </p>
        <IncludeList
          listItem="Max 3 or 5 minutes duration per transcription"
          title="Max 3 to 5 mints per transcript"
        />
        <IncludeList listItem="104 transcription languages supported" />
        <IncludeList listItem="Live recording transcription" />
        <IncludeList listItem="Audio/video file transcription" />
        <IncludeList
          listItem="Online meetings live transcription"
          title="Google Meet, Zoom, Teams etc."
        />
        <IncludeList listItem="Review, edit & share transcripts" />
        <IncludeList listItem="Sync transcripts across devices" />
        <IncludeList
          listItem="Screen recording"
          title="Record all activities on your screen."
        />
        <IncludeList
          listItem="Speaker identification"
          title="Automatically identify speakers in meeting."
        />
      </div>
    </div>
  );
};

export default SubscriptionCard;
const IncludeList = (props) => {
  const { listItem, title } = props;
  const tooltip = <Tooltip id="tooltip-top">{title}</Tooltip>;

  return (
    <div className={styles.includeListItem}>
      <FontAwesomeIcon icon={faCheck} className={styles.subscriptionCardIcon} />
      {title ? (
        <OverlayTrigger placement="top" overlay={tooltip}>
          <p
            className={styles.blackText}
            style={{
              cursor: "pointer",
              borderBottom: title && "1px dashed #000",
            }}
          >
            {listItem}
          </p>
        </OverlayTrigger>
      ) : (
        <p
          className={styles.blackText}
          style={{
            cursor: "pointer",
            borderBottom: title && "1px dashed #000",
          }}
        >
          {listItem}
        </p>
      )}
    </div>
  );
};
