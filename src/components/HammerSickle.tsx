import * as React from "react";
import { JSX } from "react/jsx-runtime";

const HammerSickle = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 480 480"
    {...props}
  >
    <path color={"white"} d="M216.8 70.048c-29.755 4.165-57.809 15.744-81.802 33.764-8.676 6.515-28.108 25.257-27.642 26.657.152.456 7.289 6.722 15.86 13.925l15.584 13.095 7.524-7.573c20.766-20.901 44.759-33.083 74.876-38.016 9.322-1.528 30.995-1.285 40.8.455 41.019 7.283 75.308 32.074 94.668 68.445 22.007 41.343 20.143 92.221-4.827 131.758-1.751 2.773-3.42 5.042-3.708 5.042-.288 0-11.415-10.887-24.727-24.193l-24.203-24.194L284.4 284l-14.803 14.787 24.601 24.65 24.602 24.651-2.4 1.996c-1.32 1.098-4.87 3.458-7.89 5.244C275.256 375 236.598 379.677 200.8 368.36c-24.703-7.81-44.634-21.42-64.992-44.381l-4.593-5.179-25.206 25.194-25.206 25.194 14.989 15.004 14.989 15.005 10.41-10.362 10.409-10.362 3.2 2.462c19.658 15.122 46.51 27.178 71.694 32.189 47.375 9.426 96.046-1.256 135.906-29.828l6.8-4.875 48.597 48.584 48.597 48.584L461.2 460.8l14.806-14.789-48.795-48.806-48.794-48.805 6.043-8.8c3.324-4.84 8.524-13.84 11.555-20 23.947-48.658 24.231-104.345.781-152.8-8.308-17.166-17.39-30.283-30.396-43.901-26.228-27.464-59.078-45.081-96.613-51.815-12.421-2.228-40.544-2.778-52.987-1.036m-1.805 146.557L190.4 241.21 215.2 266l24.8 24.79L264.8 266l24.8-24.79-24.595-24.605C251.478 203.072 240.225 192 240 192c-.225 0-11.478 11.072-25.005 24.605m-186.8 184.4C14.888 414.318 4 425.57 4 426.01c0 .44 10.98 11.775 24.4 25.19l24.4 24.39 24.8-24.79 24.8-24.79-24.595-24.605C64.278 387.872 53.025 376.8 52.8 376.8c-.225 0-11.298 10.892-24.605 24.205"/>
  </svg>
);
export default HammerSickle;