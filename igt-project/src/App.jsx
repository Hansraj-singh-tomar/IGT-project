import "./App.css";
import PopularCourse from "./pages/Popular course section/PopularCourse";
import Tutorial from "./pages/Tutorial section/Tutorial";
import Header from "./pages/header/Header";
import HowWorks from "./pages/how it works section/HowWorks";
import Footer from "./pages/footer/Footer";
import ReadySection from "./pages/ready section/ReadySection";
import HelpSection from "./pages/help section/HelpSection";
// import Plan from "./pages/plan section/Plan";

function App() {
  return (
    <div className="App">
      <Header />
      <Tutorial />
      <PopularCourse />
      <HowWorks />
      {/* <Plan /> */}
      <HelpSection />
      <ReadySection />
      <Footer />
    </div>
  );
}

export default App;
