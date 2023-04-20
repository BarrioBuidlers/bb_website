import * as React from "react";
export default function OpenSeaLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={props.width}
      height={props.height}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 512 512"
    >
      <path
        fill={props.color}
        d="M480.278 355.361H250.62v-20.639h110.43c18.824 0 31.583-19.188 24.322-36.539L267.409 16.19A26.298 26.298 0 0 0 243.091 0c-14.677 0-26.369 11.998-26.369 26.365v133.839h-15.943v-54.36a26.293 26.293 0 0 0-20.173-25.628c-11.635-2.812-23.966 2.519-29.649 13.59L39.814 310.383c-5.777 11.258 2.408 24.688 15.079 24.688h128.936c9.361 0 16.95-7.589 16.95-16.95V286.53h15.943v68.832H31.697c-19.336 0-33.299 18.655-27.824 37.216L32.12 488.34C36.229 502.27 49.244 512 63.769 512h347.7a32.959 32.959 0 0 0 27.334-14.512l65.508-96.867c13.012-19.248-.81-45.26-24.033-45.26zM250.62 63.897l99.111 236.927H250.62V63.897zm-83.739 237.277H82.643l84.237-164.147v164.147zm33.898-48.543v-58.529h15.943v58.529h-15.943zM410.989 478.1H64.441l-26.205-88.84h432.831l-60.078 88.84z"
      />
    </svg>
  );
}