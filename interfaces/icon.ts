import { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> { };

export interface VariantIconProps extends IconProps {
  variant: 'solid' | 'outline';
};
