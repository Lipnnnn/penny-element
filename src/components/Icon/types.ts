import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';

export type IconProps = FontAwesomeIconProps & {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  color?: string;
}