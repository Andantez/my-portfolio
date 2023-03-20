import Header from '../Header';
import Footer from '../Footer';
import { lora, merriweather } from '../../lib/fonts';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <style jsx global>{`
        html {
          --ff-heading: ${lora.style.fontFamily};
          --ff-text: ${merriweather.style.fontFamily};
        }
      `}</style>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
