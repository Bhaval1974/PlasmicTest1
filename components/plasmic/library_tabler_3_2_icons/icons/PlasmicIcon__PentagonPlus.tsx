/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PentagonPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PentagonPlusIcon(props: PentagonPlusIconProps) {
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
          "M12.5 21.005H7.042a1.978 1.978 0 01-1.881-1.367l-3.064-9.43a1.978 1.978 0 01.719-2.212l8.021-5.828a1.978 1.978 0 012.326 0l8.021 5.828c.694.504.984 1.397.719 2.212l-.78 2.401M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PentagonPlusIcon;
/* prettier-ignore-end */
