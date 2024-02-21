import "./App.css";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import HistorySection from "./component/HistorySection";
import LastSection from "./component/LastSection";
import SectionDivider from "./component/SectionDivider";
import SectionDivider2 from "./component/SectionDivider2";

function App() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <HistorySection />
      <SectionDivider2 />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
