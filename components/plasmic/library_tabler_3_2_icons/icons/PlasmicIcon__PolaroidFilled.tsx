/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PolaroidFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PolaroidFilledIcon(props: PolaroidFilledIconProps) {
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
          "M9.199 9.623l.108.098 3.986 3.986.094.083a1 1 0 001.403-1.403l-.083-.094-.292-.293 1.292-1.293.106-.095c.457-.38.918-.38 1.386.011l.108.098 4.502 4.503a4.003 4.003 0 01-3.596 2.77L18 18H6a4.002 4.002 0 01-3.809-2.775l5.516-5.518.106-.095c.457-.38.918-.38 1.386.011zM18 2a4 4 0 013.995 3.8L22 6v6.585l-3.293-3.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L13 10.585l-2.293-2.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 12.585V6a4 4 0 013.8-3.995L6 2h12zm-2.99 3l-.127.007a1 1 0 000 1.986L15 7l.127-.007a1 1 0 000-1.986L15.01 5zm-7 15a1 1 0 01.117 1.993L8 22a1 1 0 01-.117-1.993L8.01 20zm4 0a1 1 0 01.117 1.993L12 22a1 1 0 01-.117-1.993L12.01 20zm4 0a1 1 0 01.117 1.993L16 22a1 1 0 01-.117-1.993L16.01 20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PolaroidFilledIcon;
/* prettier-ignore-end */
