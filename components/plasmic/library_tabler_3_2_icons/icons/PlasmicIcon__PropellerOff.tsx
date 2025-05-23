/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PropellerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PropellerOffIcon(props: PropellerOffIconProps) {
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
          "M10.448 10.432a3 3 0 104.106 4.143m-.282-4.303c.66-1.459 1.058-2.888 1.198-4.286C15.69 4.356 14.708 3 12 3c-1.94 0-3 .696-3.355 1.69m.697 4.653c.145.384.309.77.491 1.157m3.336 6.251c.97 1.395 2.057 2.523 3.257 3.386 1.02.789 2.265.853 3.408-.288m1.479-2.493c.492-1.634-.19-2.726-1.416-3.229a12.78 12.78 0 00-2.65-.852"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.664 13c-1.693.143-3.213.52-4.56 1.128-1.522.623-2.206 2.153-.852 4.498s3.02 2.517 4.321 1.512c1.2-.863 2.287-1.991 3.258-3.386M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PropellerOffIcon;
/* prettier-ignore-end */
