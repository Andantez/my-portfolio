import { modalContainer } from "./AboutMeModal.css";

type MoreAboutMeProps = {
  handleClick: () => void;
};
const AboutMeModal = ({ handleClick }: MoreAboutMeProps) => {
  return (
    <div className={modalContainer}>
      <h1>More About Me</h1>
      <button onClick={handleClick}>CLOSE</button>
    </div>
  );
};

export default AboutMeModal;
