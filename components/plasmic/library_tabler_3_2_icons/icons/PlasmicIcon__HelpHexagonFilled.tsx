/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelpHexagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelpHexagonFilledIcon(props: HelpHexagonFilledIconProps) {
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
          "M10.425 1.414a3.33 3.33 0 013.026-.097l.19.097 6.775 3.995.096.063.092.077.107.075a3.225 3.225 0 011.266 2.188l.018.202.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1-6.695-4.237a3.225 3.225 0 01-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.949-4.098zM12 15a1 1 0 00-.993.883L11 16l.007.127a1 1 0 001.986 0L13 16.01l-.007-.127A1 1 0 0012 15zm1.368-6.673a2.98 2.98 0 00-3.631.728 1 1 0 001.44 1.383l.171-.18a.98.98 0 011.11-.15 1 1 0 01-.34 1.886l-.232.012A1 1 0 0011.997 14a3 3 0 001.371-5.673z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HelpHexagonFilledIcon;
/* prettier-ignore-end */
