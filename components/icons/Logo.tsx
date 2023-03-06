import { textColor } from '../../styles/vars.css';
const Logo = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 3100 2313"
      width="40"
      height="40"
    >
      <path
        fill="none"
        stroke={textColor}
        strokeWidth="187.5"
        d="M1119.79 93.75L286.456 1135.42l666.667 1083.33M1748.96 93.75l1256.31 2125-1256.31-2125zM1011.46 1010.42l733.334-916.667M1536.46 1302.08h916.667"
      ></path>
      <path
        fill="none"
        stroke={textColor}
        strokeWidth="72.92"
        d="M36.458 1118.54L900.061 52.08M1727.18 427.083l408.957 708.334M2340.45 1493.84l418.527 724.91M536.458 1156.25l666.667 1062.5"
      ></path>
    </svg>
  );
};

export default Logo;
