import Header from '../Header';
import Footer from '../Footer';
import { lora, merriweather } from '../../lib/fonts';
import Canvas from '../Canvas';
import useWindowWidth from '../../lib/hooks/useWindowWidth';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const { windowWidth } = useWindowWidth();

  const isBreakpointActive = windowWidth >= 1024;
  return (
    <>
      <style jsx global>{`
        html {
          --ff-heading: ${lora.style.fontFamily};
          --ff-text: ${merriweather.style.fontFamily};
        }
      `}</style>
      <Header />
      {isBreakpointActive && <Canvas />}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
