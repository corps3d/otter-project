import React from "react";
import Google from "../../assets/google.png";
import Microsoft from "../../assets/microsoft.png";
import Apple from "../../assets/apple.png";

const Logos = (props) => {
  const { src, alt } = props;
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ width: "25px", height: "25px", marginRight: "3rem" }}
      />
    </>
  );
};
const GoogleLogo = () => {
  return (
    <>
      <Logos src={Google} alt="google" />
    </>
  );
};
const MicrosoftLogo = () => {
  return (
    <>
      <Logos src={Microsoft} alt="microsoft" />
    </>
  );
};
const AppleLogo = () => {
  return (
    <>
      <Logos src={Apple} alt="apple" />
    </>
  );
};

export { GoogleLogo, AppleLogo, MicrosoftLogo };
