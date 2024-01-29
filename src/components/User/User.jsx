import React from "react";
import userStyles from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import UserImage from "../../assets/person.png";
const User = (props) => {
  const { display, margin } = props;
  return (
    <div
      className={userStyles.wrapper}
      style={{ display: display, marginLeft: margin }}
    >
      <h2 className={userStyles.mainHeading}>General</h2>
      <div className={userStyles.userCard}>
        <div className={userStyles.top}>
          <div>Profile</div>
          <a href="#">Edit</a>
        </div>
        <div className={userStyles.data}>
          <img src={UserImage} alt="UserImage" />
          <div>Overrated is overrated</div>
        </div>
        <div className={userStyles.mainDataFlex}>
          <div className={userStyles.dataFlex}>
            <div className={userStyles.detailItems}>
              <p>Email</p>
              <p>hammas@gmail.com</p>
            </div>
            <div className={userStyles.detailItems}>
              <p>Role</p>
              <p>Select Role</p>
            </div>
          </div>
          <div className={userStyles.dataFlex}>
            <div className={userStyles.detailItems}>
              <p>Password</p>
              <p>hammas@gomez.com</p>
            </div>
            <div className={userStyles.detailItems}>
              <p>Department</p>
              <p>CS</p>
            </div>
          </div>
        </div>
      </div>
      <div className={userStyles.moreDetails}>
        <MoreDetails title="Manage vocabulary" value="Names of people." />
        <MoreDetails
          title="Refer & earn"
          value="Give 1-month Pro Lite* to your friends."
        />
        <MoreDetails
          title="Tutorials"
          value="Learn more about how to user otter."
        />
        <MoreDetails title="Help Center" value="Frequently asked questions." />
        <MoreDetails
          title="Delete Account"
          value="Delete your account and all account data."
        />
      </div>
      <div className={userStyles.bottom}>
        <p>Version 3.41.0-240102 - de40e0fd</p>
        <p>By using Otter you agree to the</p>
        <p>Terms of Service and Privacy Policy</p>
      </div>
    </div>
  );
};

export default User;
const MoreDetails = (props) => {
  const { title, value } = props;
  return (
    <>
      <div className={userStyles.dataFlex2}>
        <div>{title}</div>
        <div className={userStyles.mainDetailsInner}>
          <div>{value}</div>
          <FontAwesomeIcon icon={faChevronRight} className="toggle" />
        </div>
      </div>
    </>
  );
};
