/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Number15SmallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Number15SmallIcon(props: Number15SmallIconProps) {
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
        d={"M7 10l2-2v8m4-1a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-3V8h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Number15SmallIcon;
/* prettier-ignore-end */
