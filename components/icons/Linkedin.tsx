import { textColor } from "../../styles/vars.css";

const Linkedin = ({
  width = 35,
  height = 35,
}: React.SVGProps<SVGSetElement>): JSX.Element => {
  return (
    <svg
      fill="none"
      stroke={textColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height={height}
      width={width}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4 z" />
    </svg>
  );
};

export default Linkedin;
