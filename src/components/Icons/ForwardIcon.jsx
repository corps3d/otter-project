import React from "react";

const ForwardIcon = (props) => {
  const { cls } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c2578118851=""
        role="img"
        svgicon="otter-playback-fastforward"
        class="mat-icon notranslate mat-icon-no-color"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-playback-fastforward"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fit=""
          height="16px"
          width="16px"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className={cls}
          color="#05294b"
        >
          <g fill="none" fill-rule="evenodd">
            <g stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
              <path stroke-linejoin="round" d="M19 2l-1 4h-4"></path>
              <path d="M18 6c-1.473-2.963-4.466-5-8-5a9 9 0 1 0 8.724 11.221"></path>
            </g>
            <text
              fill="currentColor"
              font-family="AvertaStd-Bold, Averta Std"
              font-size="9"
              font-weight="bold"
              transform="translate(1 1)"
            >
              <tspan x="6" y="12">
                5
              </tspan>
            </text>
          </g>
        </svg>
      </mat-icon>
    </>
  );
};

export default ForwardIcon;
