/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BowlChopsticksFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BowlChopsticksFilledIcon(props: BowlChopsticksFilledIconProps) {
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
          "M20 10a2 2 0 012 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V20a2 2 0 01-1.85 1.995L16 22H8a2 2 0 01-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 12.5V12a2 2 0 012-2h16zm-1.071-3.997a1 1 0 11.142 1.994l-14 1a1 1 0 11-.142-1.994l14-1zm-.139-4.981a1 1 0 11.42 1.956l-14 3a1 1 0 11-.42-1.956l14-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BowlChopsticksFilledIcon;
/* prettier-ignore-end */
