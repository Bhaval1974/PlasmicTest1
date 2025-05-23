/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpiralOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpiralOffIcon(props: SpiralOffIconProps) {
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
          "M10 12.057a1.9 1.9 0 00.614.743c.682.459 1.509.374 2.164-.02m1.103-2.92a3.298 3.298 0 00-1.749-2.059 3.596 3.596 0 00-.507-.195M8.24 8.24a4.154 4.154 0 00-1.347 1.646c-1.095 2.432.29 5.248 2.71 6.246 1.955.806 4.097.35 5.65-.884m1.745-2.268l.043-.103c1.36-3.343-.557-7.134-3.896-8.41-1.593-.61-3.27-.599-4.79-.113M5.776 5.762A7.574 7.574 0 003.508 8.89c-1.63 4.253.823 9.024 5.082 10.576 3.211 1.17 6.676.342 9.124-1.738m1.869-2.149A9.354 9.354 0 0021 11.063M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SpiralOffIcon;
/* prettier-ignore-end */
