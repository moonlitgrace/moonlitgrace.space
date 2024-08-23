import { IconProps } from '@/interfaces/icon';

const PhotoIcon = ({ variant = 'outline', ...props }: IconProps) => {
  return variant === 'solid' ? (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m80 112a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"
      ></path>
    </svg>
  ) : (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8m-48-32a55.3 55.3 0 0 1-10 32h-38V32.57A56.09 56.09 0 0 1 184 88M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m-16 96a55.3 55.3 0 0 1 10-32h38v87.43A56.09 56.09 0 0 1 72 168m96 16a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"
      ></path>
    </svg>
  );
};

export default PhotoIcon;
