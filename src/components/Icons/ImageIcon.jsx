import React from "react";

const ImageIcon = (props) => {
  const { cls, style, width, color } = props;
  return (
    <>
      <mat-icon
        role="img"
        svgicon="add-photo-icon-3_0"
        className={`mat-icon notranslate mat-icon-no-color ${cls}`}
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="add-photo-icon-3_0"
      >
        <svg
          width={width ? width : "16px"}
          height={width ? width : "16px"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          fit=""
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          color={color}
          style={style}
        >
          <path
            d="M12.7 1H2.3C1.58203 1 1 1.58203 1 2.3V12.7C1 13.418 1.58203 14 2.3 14H12.7C13.418 14 14 13.418 14 12.7V2.3C14 1.58203 13.418 1 12.7 1Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.9001 6.19998C5.61807 6.19998 6.2001 5.61795 6.2001 4.89998C6.2001 4.18201 5.61807 3.59998 4.9001 3.59998C4.18213 3.59998 3.6001 4.18201 3.6001 4.89998C3.6001 5.61795 4.18213 6.19998 4.9001 6.19998Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.0003 9.7457L10.344 6.19995L2.30029 14"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </mat-icon>
    </>
  );
};

export default ImageIcon;
