import { textColor } from "../../styles/vars.css";

const Framer = ({
  width = 35,
  height = 35,
}: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={textColor}
    >
      <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"></path>
    </svg>
  );
};

export default Framer;
