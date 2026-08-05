import { Routes, Route } from "react-router-dom";
import SeniorCitizenKitPage from "./pages/SeniorCitizenKitPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaperBatPage from "./pages/PaperBatPage";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import StemKits from "./components/StemKits";
import Activities from "./components/Activities";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FunGame from "./components/FunGame";
import Services from "./components/Services";
import ATLSection from "./components/ATLSection";
import DrawBotPage from "./pages/DrawBotPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import HackathonsPage from "./pages/HackathonsPage";
import ChallengesPage from "./pages/ChallengesPage";
import ProjectsPage from "./pages/ProjectsPage";
import WinterOfCodePage from "./pages/WinterOfCodePage";
import ClassroomPage from "./pages/ClassroomPage";
import CodingForKidsPage from "./pages/CodingForKidsPage";
import ArduinoKitPage from "./pages/ArduinoKitPage";
import AboutPage from "./pages/AboutPage";
import GhostBadgePage from "./pages/GhostBadgePage";
import STEMPage from "./pages/STEMPage";   // ✅ keep only this
import DIYPage from "./pages/DIYPage";     // ✅ keep only this
import JugaadPage from "./pages/JugaadPage";
import StemKitDetailPage from "./pages/StemKitDetailPage";
import PaperPumpkinPage from "./pages/PaperPumpkinPage";
import ZapperGunPage from "./pages/ZapperGunPage";
import SnapSnackBlog from "./pages/SnapSnackBlog";
import SeniorMothersBlog from "./pages/SeniorMothersBlog";
import DroneBlog from "./pages/DroneBlog";
import IndianFlagScratchPage from "./pages/IndianFlagScratchPage";
import IndianFlagHoistingPage from "./pages/IndianFlagHoistingPage";
import PerfectCircleDrawerPage from "./pages/PerfectCircleDrawerPage";
import WhatIsSTEMPage from "./pages/WhatIsSTEMPage";
import IoTPage from "./pages/IoTPage";
import AiMlPage from "./pages/AiMlPage";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Services />
      <StemKits />
      <ATLSection />
      <Activities />
      <FunGame />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* MAIN PAGES */}
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/winter-of-code" element={<WinterOfCodePage />} />
        <Route path="/coding-for-kids" element={<CodingForKidsPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />
        <Route path="/arduino-kit" element={<ArduinoKitPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/drawbot" element={<DrawBotPage />} />
        <Route path="/ghost-badge" element={<GhostBadgePage />} />
        <Route path="/paper-bat" element={<PaperBatPage />} />
        {/* SERVICES PAGES ✅ */}
        <Route path="/stem" element={<STEMPage />} />
        <Route path="/diy" element={<DIYPage />} />
        <Route path="/iot" element={<IoTPage />} />
        
        <Route path="/jugaad" element={<JugaadPage />} />
        <Route path="/senior-mothers-blog"element={<SeniorMothersBlog />}/>
        <Route path="/ai-ml" element={<AiMlPage />} />
        
        {/* SHOP */}
        <Route path="/stem-kit" element={<StemKitDetailPage />} />
        <Route path="/robotics-kit" element={<h1>Robotics Kit Page</h1>} />
        <Route path="/ai-kit" element={<h1>AI Kit Page</h1>} />
        <Route path="/web-kit" element={<h1>Web Kit Page</h1>} />
        <Route path="/paper-pumpkin" element={<PaperPumpkinPage />} />
        <Route path="/zapper-gun" element={<ZapperGunPage />} />
        <Route path="/senior-kit" element={<SeniorCitizenKitPage />} />
        <Route path="/snap-snack-blog" element={<SnapSnackBlog />} />
        <Route path="/drone-blog" element={<DroneBlog />} />
        <Route path="/indian-flag-scratch" element={<IndianFlagScratchPage />}/>
        <Route path="/indian-flag-hoisting" element={<IndianFlagHoistingPage />}/>
        <Route path="/perfect-circle-drawer"element={<PerfectCircleDrawerPage />}/>
        <Route path="/what-is-stem"element={<WhatIsSTEMPage />}/>
        

      </Routes>

      <Footer />
    </>
  );
}

export default App;