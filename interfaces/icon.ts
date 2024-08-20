import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  variant: "solid" | "outline";
}
