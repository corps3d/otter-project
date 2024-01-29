import React from "react";

const ClockIcon = ({ color, style, width }) => {
  return (
    <span
      role="img"
      className="mat-icon notranslate mat-icon-no-color"
      aria-hidden="true"
      data-mat-icon-type="svg"
      data-mat-icon-name="time-fill-3.0"
    >
      <svg
        width={width ? width : "16px"}
        height={width ? width : "16px"}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        fit=""
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        style={style}
        color={color}
      >
        <path
          d="M6 11.25C8.8995 11.25 11.25 8.8995 11.25 6C11.25 3.10051 8.8995 0.75 6 0.75C3.10051 0.75 0.75 3.10051 0.75 6C0.75 8.8995 3.10051 11.25 6 11.25Z"
          stroke="#5D7284"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.25 3.75V6.86538H8.36539"
          stroke="#5D7284"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </span>
  );
};

export default ClockIcon;
