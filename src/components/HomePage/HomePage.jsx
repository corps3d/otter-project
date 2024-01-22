import React from "react";
import homeStyles from "./HomePage.module.css";
const HomePage = (props) => {
  const { margin, display } = props;
  return (
    <>
      <div
        className={homeStyles.main}
        style={{ marginLeft: margin, display: display }}
      >
        <HomeContent />
        <HomeContent />
        <HomeContent />
      </div>
    </>
  );
};

export default HomePage;
const HomeContent = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p className={homeStyles.date}>Tuesday 21,Feb</p>
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
    </div>
  );
};
