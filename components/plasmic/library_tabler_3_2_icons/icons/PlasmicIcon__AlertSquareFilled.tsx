/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertSquareFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlertSquareFilledIcon(props: AlertSquareFilledIconProps) {
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
          "M19 2a3 3 0 012.995 2.824L22 5v14a3 3 0 01-2.824 2.995L19 22H5a3 3 0 01-2.995-2.824L2 19V5a3 3 0 012.824-2.995L5 2h14zm-6.99 13l-.127.007a1 1 0 000 1.986L12 17l.127-.007a1 1 0 000-1.986L12.01 15zM12 7a1 1 0 00-.993.883L11 8v4l.007.117a1 1 0 001.986 0L13 12V8l-.007-.117A1 1 0 0012 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlertSquareFilledIcon;
/* prettier-ignore-end */
