import { FunctionComponent } from 'react';

import * as allIcons from './icons';
import { IconProps as DynamicIconProps } from '../../commons/interfaces/icon';

export const IconNames = [
  'EyeIcon',
] as const;

export type IconName = typeof IconNames[number];

export interface IconProps extends DynamicIconProps {
  name: IconName;
}

export const Icon: FunctionComponent<IconProps> = ({
  name,
  size = 24,
  className,
  style = {},
}) => {
  const DynamicIcon = (
    allIcons as { [key: string]: FunctionComponent<DynamicIconProps> }
  )[name];

  return (
    <DynamicIcon size={size} className={className} style={style}></DynamicIcon>
  );
};
