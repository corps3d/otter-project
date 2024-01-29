import React from "react";

const CopyIcon = ({ cls, width, style }) => {
  return (
    <span
      role="img"
      className={`mat-icon notranslate mat-icon-no-color ng-star-inserted ${cls}`}
      aria-hidden="true"
      data-mat-icon-type="svg"
      data-mat-icon-name="context-icon-copy"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 19"
        fit=""
        width={width ? width : "16px"}
        height={width ? width : "16px"}
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        color="#3f4851"
        style={style}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeWidth="1.25"
          transform="translate(0 1)"
        >
          <rect width="11.75" height="11.75" x=".625" y="5.625" rx="3"></rect>
          <path
            strokeLinecap="round"
            d="M5.586 2.82C5.586 1 6.386 0 8 0h7c1.462 0 2.534 1.001 2.534 2.53v6.952c0 1.656-1.072 2.523-2.534 2.523"
          ></path>
        </g>
      </svg>
    </span>
  );
};

export default CopyIcon;
