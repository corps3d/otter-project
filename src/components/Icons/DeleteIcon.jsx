import React from "react";

const DeleteIcon = (props) => {
  const { cls, width, color } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c3819746333=""
        role="img"
        class="mat-icon notranslate mat-icon-no-color"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-nav-delete-3.0"
      >
        <svg
          width={width ? width : "17px"}
          height={width ? width : "17px"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          fit=""
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className={cls}
          color={color}
        >
          <path
            d="M2 4.16699L14 4.16699"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
          ></path>
          <path
            d="M3.5127 4.72998L4.03963 13.0212C4.10656 14.0744 4.98029 14.8944 6.0356 14.8944H9.9367C10.9911 14.8944 11.8643 14.0759 11.9325 13.0237L12.47 4.72998"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
          ></path>
          <path
            d="M6.30762 6.54443L6.67919 12.0003"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
          ></path>
          <path
            d="M9.67531 6.53152L9.29174 12"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
          ></path>
          <path
            d="M4.99707 2.19232V2C4.99707 1.44772 5.44479 1 5.99707 1H9.9818C10.5341 1 10.9818 1.44772 10.9818 2V2.19232"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
          ></path>
        </svg>
      </mat-icon>
    </>
  );
};

export default DeleteIcon;
