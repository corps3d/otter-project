import React from "react";
import cross from "../assets/svgexport-2.svg";
import { TextField } from "@mui/material";
import LoginSignupNavbar from "../components/LoginSignupNavbar/LoginSignupNavbar";
// import KeyboardModal from "../components/modal/KeyboardModal";

export default function ForgetPassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <>
      {/* <KeyboardModal open={open} handleClose={handleClose} /> */}
      <LoginSignupNavbar />
      <div
        className="container mt-4 mx-auto"
        style={{
          border: "solid 1px #dddfe2",
          maxWidth: "668px",
          position: "relative",
          "@media (max-width: 767px)": {
            maxWidth: "100%",
          },
        }}
      >
        <div
          className=""
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <img src={cross} className=" cursor-pointer" alt="" />
        </div>
        <div
          className=" mx-auto p-4 bg-white"
          style={{
            maxWidth: "424px",
            "@media (max-width: 767px)": {
              maxWidth: "100%",
            },
          }}
        >
          <h2 className="my-4 text-center font-bold fs-2 text-primary">
            Forgot your password?
          </h2>
          <p className="text-start text-secondary fs-6 my-2">
            Enter your email to receive a password reset link. You may need to
            check your spam folder or unblock no-reply@otter.ai
          </p>
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic"
              label="Email"
              placeholder="Email"
              variant="outlined"
            />
          </div>
          <div className="d-grid gap-2 col-10 mx-auto mt-4">
            <button onClick={handleOpen} className="btn btn-secondary py-2">
              Send reset link
            </button>
          </div>
        </div>
        <div className="text-center my-4">
          <p className="text-muted fs-7 font-normal">
            By using Otter you agree to the{" "}
            <span className="text-primary cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-primary cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}
