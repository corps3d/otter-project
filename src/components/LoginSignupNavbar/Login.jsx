import React, { useState } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import styles from "./LoginSignupNavbar.module.css"; // Import css modules stylesheet as styles
import SocialButtons from "./SocialButtons";
import { AppleLogo, GoogleLogo, MicrosoftLogo } from "./Logos";
import { Link } from "react-router-dom";
const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Form className={styles.mainContainer}>
              <h2 className={styles.heading}>Sign In</h2>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <SocialButtons title="Google" logo={<GoogleLogo />} />
                <SocialButtons title="Microsoft" logo={<MicrosoftLogo />} />
                <SocialButtons title="Apple" logo={<AppleLogo />} />
              </div>
              <div className={styles.mainLine}>
                <div className={styles.line}></div>
                <div className="text-center my-3">OR</div>
                <div className={styles.line}></div>
              </div>
              <FormGroup className="mb-3 position-relative d-flex align-items-center">
                <FormControl
                  className={styles.textBox}
                  type="email"
                  value={inputValue}
                  onChange={handleInputChange}
                  required
                />
                <p className={styles.inputTextbox}>Email</p>
              </FormGroup>
              <div className={styles.forgetPass}>
                <a href="#forgot-password">Forgot your password?</a>
              </div>
              <div style={{ width: "100%" }}>
                <Link to="/main">
                  <Button
                    type="submit"
                    className={styles.SubmitButton}
                    style={{
                      backgroundColor: inputValue && "#126fd6",
                      color: inputValue && "#fff",
                    }}
                  >
                    Sign in
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/signup">
                  <p className={styles.createAccount}>
                    or <a href="#">Create One</a>
                  </p>
                </Link>
              </div>
            </Form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
