/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandKickstarterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandKickstarterIcon(props: BrandKickstarterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 9l2.975-4.65C14.59 3.45 15.38 3 16.352 3c.79 0 1.474.286 2.054.858.576.574.866 1.256.866 2.054 0 .588-.153 1.109-.46 1.559L16 11.5l3.465 4.912c.356.46.535 1 .535 1.613a2.919 2.919 0 01-.843 2.098c-.561.584-1.242.877-2.04.877-.876 0-1.545-.29-2-.87l-4.112-5.697V17.5c0 .876-.313 1.69-.611 2.175C9.851 20.558 9.044 21 8.005 21c-.944 0-1.753-.327-2.271-.974-.486-.6-.729-1.392-.729-2.38V6.275c0-.934.247-1.706.74-2.313C6.257 3.321 7.092 3 8.005 3c.868 0 1.821.321 2.4.962.323.356.515.714.6 1.08.052.224 0 .643 0 1.26V9H11z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandKickstarterIcon;
/* prettier-ignore-end */
