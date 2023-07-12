import { modalContainer } from './MoreAboutMe.css';
type MoreAboutMeProps = {
  handleClick: () => void;
};
const MoreAboutMe = ({ handleClick }: MoreAboutMeProps) => {
  return (
    <div className={modalContainer}>
      <h1>More About Me</h1>
      <button onClick={handleClick}>CLOSE</button>
    </div>
  );
};

export default MoreAboutMe;
