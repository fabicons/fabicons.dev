import { SVGProps, RefAttributes, ForwardRefExoticComponent } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  strokeWidth?: number | string
  absoluteStrokeWidth?: boolean
}

export type IconComponentType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>
