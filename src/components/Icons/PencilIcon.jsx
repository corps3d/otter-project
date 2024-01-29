import React from "react";

const PencilIcon = (props) => {
  const { cls, oc, style, width } = props;
  return (
    <>
      <mat-icon
        role="img"
        svgicon="highlight-icon-3_0"
        className={`mat-icon notranslate mat-icon-no-color ${cls}`}
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="highlight-icon-3_0"
        onClick={oc}
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
          className={cls}
          onClick={oc}
          style={style}
        >
          <path
            d="M8.20361 13.6415L-2.95639e-05 13.6327V15.5046H7.14427L8.20361 13.6415Z"
            fill="#C3EDDE"
          ></path>
          <path
            d="M14.191 2.44337L9.36932 1.15139C8.0009 3.65423 6.74975 5.91274 5.61485 7.92804C7.33551 9.57749 7.85357 11.6326 7.3822 13.3917L9.79306 14.0377C10.2646 12.2779 11.8962 10.7988 14.0542 10.1894C14.0424 7.98716 14.0889 5.40518 14.191 2.44337Z"
            fill="#C3EDDE"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.93124 0.911876C9.04188 0.709563 9.27653 0.609152 9.49927 0.668803L14.2943 1.95294C14.5214 2.00045 14.6914 2.20182 14.6914 2.44233V2.443C14.6914 2.45039 14.6912 2.45776 14.6909 2.46511C14.5891 5.42073 14.5434 7.99372 14.5548 10.1857C14.556 10.4104 14.4071 10.6084 14.1908 10.6695C12.1576 11.2438 10.6916 12.617 10.2768 14.1663C10.2425 14.2944 10.1587 14.4036 10.0438 14.47C9.92895 14.5363 9.79244 14.5542 9.66433 14.5199L7.2536 13.8736C6.98691 13.8021 6.82866 13.528 6.9001 13.2613C7.31966 11.695 6.87227 9.82359 5.26936 8.28803C5.10449 8.13009 5.06755 7.88053 5.1796 7.6816C6.31343 5.66852 7.56374 3.41244 8.93124 0.911876ZM13.6782 2.8232L9.62001 1.73638C8.39779 3.96876 7.27005 6.00394 6.23632 7.84282C7.71826 9.41036 8.2659 11.3047 7.97278 13.0311L9.46565 13.4313C10.0967 11.7867 11.6274 10.4635 13.5534 9.81973C13.5488 7.79365 13.5908 5.46141 13.6782 2.8232Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.1636 10.5079L5.36169 8.14948L5.62051 7.18355L14.4224 9.54201L14.1636 10.5079Z"
            fill="currentColor"
          ></path>
          <path
            d="M7.93521 13.5901L7.5127 15.1355H8.87355L9.23049 13.9011L7.93521 13.5901Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.67746 13.1538L9.68634 13.6361L9.14752 15.4995H7.03613L7.67746 13.1538ZM8.1936 14.0264L7.98989 14.7715H8.6002L8.77528 14.1661L8.1936 14.0264Z"
            fill="currentColor"
          ></path>
        </svg>
      </mat-icon>
    </>
  );
};

export default PencilIcon;
