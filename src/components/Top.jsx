import React from "react";
import topStyles from "./Top.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
const Top = () => {
  return (
    <div className={topStyles.main}>
      <div>
        <FontAwesomeIcon icon={faCircleInfo} className={topStyles.icons} />
        <strong>You have no imports left.</strong>
      </div>
      <div>
        Upgrade to <strong>Otter Business</strong> for unlimited imports.
      </div>
      <div>
        <button>Upgrade</button>
      </div>
    </div>
  );
};

export default Top;
