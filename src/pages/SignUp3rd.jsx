import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupNavbar from "../components/LoginSignupNavbar/LoginSignupNavbar";
import styles from "../components/LoginSignupNavbar/LoginSignupNavbar.module.css";
import Chat from "../components/LoginSignupNavbar/Chat";
const SignUp3rd = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  }, []);
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <LoginSignupNavbar />
      <Chat />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div
            className="col-md-4 px-5"
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className={styles.signup3rdMain}>
              <div className={styles.upperText}>
                <p className={styles.signupThirdHeading}>Almost Done!</p>
                <p className={styles.signupThirdHeading}>4m left</p>
              </div>
              <div className={styles.bar}></div>
            </div>
            <p className="mt-3 text-secondary">
              We are processing your file and it will be ready very soon!
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp3rd;
