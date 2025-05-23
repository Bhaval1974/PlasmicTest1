/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiaboloOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiaboloOffIcon(props: DiaboloOffIconProps) {
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
          "M4.727 4.749C4.26 5.129 4 5.553 4 6c0 1.217 1.933 2.265 4.71 2.735m4.257.243C16.929 8.8 20 7.534 20 6c0-1.657-3.582-3-8-3-1.66 0-3.202.19-4.48.514"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 6v.143a1 1 0 00.048.307L6 12l-1.964 5.67a1 1 0 00-.036.265V18c0 1.657 3.582 3 8 3 3.218 0 5.992-.712 7.262-1.74m-.211-4.227L18 12l1.952-5.55A1 1 0 0020 6.143V6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 12c0 1.105 2.686 2 6 2 .656 0 1.288-.035 1.879-.1m3.198-.834c.585-.308.923-.674.923-1.066M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DiaboloOffIcon;
/* prettier-ignore-end */
