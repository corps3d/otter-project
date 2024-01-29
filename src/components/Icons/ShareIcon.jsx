import React from "react";

const ShareIcon = ({ cls, width, style, color }) => {
  return (
    <span
      role="img"
      className={`mat-icon notranslate mat-icon-no-color ng-star-inserted ${cls}`}
      aria-hidden="true"
      data-mat-icon-type="svg"
      data-mat-icon-name="icon-social-share"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "16px"}
        height={width ? width : "16px"}
        viewBox="0 0 18 20"
        fit=""
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        color={color ? color : "#3f4851"}
        style={style}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(1 1)"
        >
          <circle cx="13.102" cy="2.62" r="2.62"></circle>
          <circle cx="2.62" cy="8.735" r="2.62"></circle>
          <circle cx="13.102" cy="14.85" r="2.62"></circle>
          <path d="M4.883 10.054l5.966 3.477M10.84 3.94L4.883 7.415"></path>
        </g>
      </svg>
    </span>
  );
};

export default ShareIcon;
