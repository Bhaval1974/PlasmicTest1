/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretUpFilledIcon(props: CaretUpFilledIconProps) {
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
          "M11.293 7.293a1 1 0 011.32-.083l.094.083 6 6 .083.094.054.077.054.096.017.036.027.067.032.108.01.053.01.06.004.057L19 14l-.002.059-.005.058-.009.06-.01.052-.032.108-.027.067-.07.132-.065.09-.073.081-.094.083-.077.054-.096.054-.036.017-.067.027-.108.032-.053.01-.06.01-.057.004L18 15H6c-.852 0-1.297-.986-.783-1.623l.076-.084 6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CaretUpFilledIcon;
/* prettier-ignore-end */
