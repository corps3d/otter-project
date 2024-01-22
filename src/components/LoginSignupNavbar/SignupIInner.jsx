import React, { useState } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import styles from "./LoginSignupNavbar.module.css"; // Import css modules stylesheet as styles
import SocialButtons from "./SocialButtons";
import { AppleLogo, GoogleLogo, MicrosoftLogo } from "./Logos";
import Person from "../../assets/person.png";
import Featured from "../../assets/featured1.svg";
import { Link } from "react-router-dom";
const SignupIInner = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <Form className={[styles.mainContainer, styles.mainContainer1]}>
            <h2 className={styles.heading}>Create Account</h2>
            <h2 className={styles.heading1}>
              Sync your <strong>work calendar</strong> to start using Otter
            </h2>
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
              <Link to="/upload">
                <Button
                  type="submit"
                  className={styles.SubmitButton}
                  style={{
                    backgroundColor: inputValue && "#126fd6",
                    color: inputValue && "#fff",
                  }}
                >
                  Create Account
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p className={styles.createAccount}>
                  Already have an Otter Account? <a href="#">Sign in</a>
                </p>
              </Link>
            </div>
            <div>
              <p className={styles.privacyPolicy}>
                By using Otter you agree to the <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy.</a>
              </p>
            </div>
          </Form>
        </div>
        <div className="col-md-6">
          <div className={styles.signupRight}>
            <div className="personMain">
              <div className={styles.person}>
                <img
                  src={Person}
                  alt="person"
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <div className={styles.personDetails}>
                  <p>Megan Huynh</p>
                  <p>Product Manager</p>
                </div>
              </div>
              <p className={styles.quote}>
                "Otter has really boosted my confidence in my work because now I
                know that every user interview I conduct is stored somewhere for
                me always to look back to."
              </p>
            </div>
            <div className={styles.featuredMain}>
              <p>Featured on:</p>
              <img src={Featured} alt="featured" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupIInner;
