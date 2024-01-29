import React from "react";

const FoldersIcon = (props) => {
  const { margin } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c181372000=""
        role="img"
        svgicon="otter-folder-new"
        class="mat-icon notranslate mat-icon-no-color menu-icons second-menu-icons hidden-icons lastOne"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-folder-new"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          fit=""
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          style={{ marginLeft: margin }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H6.46164C7.56621 1 8.46164 1.89543 8.46164 3V4.21877H17C18.1046 4.21877 19 5.1142 19 6.21877V15Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>
      </mat-icon>
    </>
  );
};

export default FoldersIcon;
