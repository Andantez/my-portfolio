
type ProgressBarProps = {
  charactersLeft: number
}
const ProgressBar = ({charactersLeft}: ProgressBarProps) => {
  return <div>characters left {charactersLeft}</div>;
};

export default ProgressBar;
