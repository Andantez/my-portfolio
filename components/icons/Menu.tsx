import { textColor } from '../../styles/vars.css';

type MenuProps = {
  showModal: boolean;
};
const Menu = ({ showModal }: MenuProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 100 100"
      fill="none"
      stroke={textColor}
      strokeWidth={6}
      width={50}
      height={50}
    >
      <path d="M22.974,77l57.526,-57c8.411,-8.338 12.46,8.56 13,13.5c0.42,3.84 2.455,31.807 -13,36.5l-60.5,0" />
      <path d="M20.181,50l59.819,0" />
      <path d="M23.155,23l57.526,57c8.411,8.338 12.459,-8.56 13,-13.5c0.419,-3.84 2.454,-31.807 -13,-36.5l-60.5,-0" />
    </svg>
  );
};

export default Menu;
