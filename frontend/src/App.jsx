import React from "react";

// page imports
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PrincipalDeskPage from "./pages/PrincipalDeskPage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import NoticePage from "./pages/NoticePage";
import FaculityPage from "./pages/FaculityPage";
import GalleryPage from "./pages/GalleryPage";
import CareerPage from "./pages/CareerPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import ContactPage from "./pages/ContactPage";

//faciloties imports
import CleanHolistic from "./components/home/Facilities/List/CleanHolistic/CleanHolistic";
import Canteen from "./components/home/Facilities/List/Canteen/Canteen";
import Auditorium from "./components/home/Facilities/List/Auditorium/Auditorium";
import Cocurricular from "./components/home/Facilities/List/Cocurricular/Cocurricular";
import ComputerLab from "./components/home/Facilities/List/ComputerLab/ComputerLab";
import DedicatedTeacher from "./components/home/Facilities/List/DedicatedTeacher/DedicatedTeacher";
import DrinkingWater from "./components/home/Facilities/List/DrinkingWater/DrinkingWater";
import Hostel from "./components/home/Facilities/List/Hostel/Hostel";
import NCC from "./components/home/Facilities/List/NCC/NCC";
import ScoutNGuide from "./components/home/Facilities/List/ScoutNGuide/ScoutNGuide";
import Parking from "./components/home/Facilities/List/Parking/Parking";
import ScienceLab from "./components/home/Facilities/List/ScienceLabs/ScienceLab";
import SmartClass from "./components/home/Facilities/List/SmartClass/SmartClass";
import StudentPortal from "./pages/StudentPortal";

const App = () => {
  return (
    <div>
      <Routes>
        {/* nav button routing  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/principaldesk" element={<PrincipalDeskPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/faculity" element={<FaculityPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* facilities routing */}
        <Route path="/cleanandholistic" element={<CleanHolistic />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/Auditorium" element={<Auditorium />} />
        <Route path="/Cocurricular" element={<Cocurricular />} />
        <Route path="/ComputerLab" element={<ComputerLab />} />
        <Route path="/DedicatedTeacher" element={<DedicatedTeacher />} />
        <Route path="/DrinkingWater" element={<DrinkingWater />} />
        <Route path="/Hostel" element={<Hostel />} />
        <Route path="/NCC" element={<NCC />} />
        <Route path="/ScoutNGuide" element={<ScoutNGuide />} />
        <Route path="/Parking" element={<Parking />} />
        <Route path="/ScienceLab" element={<ScienceLab />} />
        <Route path="/SmartClass" element={<SmartClass />} />

        <Route path="/studentPortal" element={<StudentPortal />} />
      </Routes>
    </div>
  );
};

export default App;
