import { Icon, IconProps } from '@chakra-ui/react';

const VolumeOffIcon = (props: IconProps) => {
  return (
    <Icon
      width="6"
      height="6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="22" y1="9" x2="16" y2="15"></line>
      <line x1="16" y1="9" x2="22" y2="15"></line>
    </Icon>
  );
};

export default VolumeOffIcon;
