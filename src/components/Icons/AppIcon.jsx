import React from "react";

const AppIcon = (props) => {
  const { marginRight, marginLeft } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c181372000=""
        role="img"
        class="mat-icon notranslate mat-icon-no-color ng-star-inserted"
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-apps"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          viewBox="0 0 18 18"
          fit=""
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          style={{
            marginRight: marginRight,
            marginLeft: marginLeft,
          }}
        >
          <g fill="currentColor" fill-rule="evenodd">
            <rect width="4" height="4" rx="1"></rect>
            <rect width="4" height="4" x="7" rx="1"></rect>
            <rect width="4" height="4" x="14" rx="1"></rect>
            <rect width="4" height="4" y="7" rx="1"></rect>
            <rect width="4" height="4" x="7" y="7" rx="1"></rect>
            <rect width="4" height="4" x="14" y="7" rx="1"></rect>
            <rect width="4" height="4" y="14" rx="1"></rect>
            <rect width="4" height="4" x="7" y="14" rx="1"></rect>
            <rect width="4" height="4" x="14" y="14" rx="1"></rect>
          </g>
        </svg>
      </mat-icon>
    </>
  );
};

export default AppIcon;
