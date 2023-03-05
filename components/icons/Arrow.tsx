import { arrowIcon } from '../../styles/SharedStyles.css';

const Arrow = ({
  width = 45,
  height = 45,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={arrowIcon}
      fill="currentColor"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
      />
    </svg>
  );
};

export default Arrow;
