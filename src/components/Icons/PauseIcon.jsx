import React from "react";

const PauseIcon = (props) => {
  const { cls } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c2578118851=""
        role="img"
        svgicon="audio-control-pause-3_0"
        class="mat-icon notranslate mat-icon-no-color"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="audio-control-pause-3_0"
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          fit=""
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className={cls}
          color="#05294b"
        >
          <rect
            x="4"
            y="1"
            width="1.25"
            height="13.3333"
            rx="0.625"
            fill="currentColor"
          ></rect>
          <rect
            x="10.333"
            y="1"
            width="1.25"
            height="13.3333"
            rx="0.625"
            fill="currentColor"
          ></rect>
        </svg>
      </mat-icon>
    </>
  );
};

export default PauseIcon;
