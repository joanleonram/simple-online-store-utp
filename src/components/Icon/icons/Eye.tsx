import { FunctionComponent } from 'react';
import { IconProps } from '../../../commons/interfaces/icon';


const EyeIcon: FunctionComponent<IconProps> = ({
  className,
  size = 24,
  style = {},
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9999 12C15.9999 14.2091 14.209 16 11.9999 16C9.79074 16 7.99988 14.2091 7.99988 12C7.99988 9.79086 9.79074 8 11.9999 8C14.209 8 15.9999 9.79086 15.9999 12ZM13.9999 12C13.9999 13.1046 13.1044 14 11.9999 14C10.8953 14 9.99988 13.1046 9.99988 12C9.99988 10.8954 10.8953 10 11.9999 10C13.1044 10 13.9999 10.8954 13.9999 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 3C17.5914 3 22.2897 6.82432 23.6218 12C22.2897 17.1757 17.5914 21 11.9999 21C6.40836 21 1.71006 17.1757 0.37793 12C1.71006 6.82432 6.40836 3 11.9999 3ZM11.9999 19C7.52431 19 3.7312 16.0581 2.45711 12C3.7312 7.94186 7.52431 5 11.9999 5C16.4754 5 20.2686 7.94186 21.5426 12C20.2686 16.0581 16.4754 19 11.9999 19Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EyeIcon;
