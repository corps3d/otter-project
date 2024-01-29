import React from "react";

const LogoutIcon = (props) => {
  const { cls } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c1061245805=""
        role="img"
        class="mat-icon notranslate mat-icon-no-color"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-logout"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          fit=""
          height="17px"
          width="17px"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className={cls}
          style={{ marginLeft: ".2rem" }}
          color="#3f4851"
        >
          <path
            d="M6 8H15.5"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M11.7 4L15.5 8L11.7 12"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7.5 1.5H3.5C1.84315 1.5 0.5 2.84315 0.5 4.5V11.5C0.5 13.1569 1.84315 14.5 3.5 14.5H7.5"
            stroke="currentColor"
            stroke-linecap="round"
          ></path>
        </svg>
      </mat-icon>
    </>
  );
};

export default LogoutIcon;
