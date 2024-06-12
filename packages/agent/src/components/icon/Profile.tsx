import { color } from '@corca-ai/design-system';

interface Props {
  color?: string;
  size?: number;
}

export function Profile({ color: c = color['main-yellow'], size = 20 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
    >
      <circle cx="21" cy="21" r="21" fill={c} />
      <mask
        id="mask0_6_522"
        maskUnits="userSpaceOnUse"
        x="9"
        y="7"
        width="26"
        height="28"
      >
        <path d="M34.4183 7.5H9.45605V34.8664H34.4183V7.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_6_522)">
        <path
          d="M34.4183 18.7779H27.0032L32.3244 13.3987L28.5865 9.61788L23.8366 14.4223V7.5H17.944V14.4223L13.194 9.61788L9.45605 13.3987L17.1538 21.1848L9.45605 28.9677L13.194 32.7486L17.944 27.9441V34.8664H23.8366V27.9441L28.5865 32.7486L32.3244 28.9677L27.0032 23.5885H34.4183V18.7779Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
