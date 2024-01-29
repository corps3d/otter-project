import React from "react";

const BackwardIcon = (props) => {
  const { cls } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c2578118851=""
        role="img"
        svgicon="otter-playback-rewind"
        class="mat-icon notranslate mat-icon-no-color"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-playback-rewind"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fit=""
          height="16px"
          width="16px"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          color="#05294b"
        >
          <g fill="none" fill-rule="evenodd">
            <g stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
              <path stroke-linejoin="round" d="M1 2l1 4h4"></path>
              <path d="M2 6c1.473-2.963 4.466-5 8-5a9 9 0 1 1-8.724 11.221"></path>
            </g>
            <text
              fill="currentColor"
              font-family="AvertaStd-Bold, Averta Std"
              font-size="9"
              font-weight="bold"
              transform="translate(1 1)"
            >
              <tspan x="7" y="12">
                5
              </tspan>
            </text>
          </g>
        </svg>
      </mat-icon>
    </>
  );
};

export default BackwardIcon;
