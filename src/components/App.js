import "../App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../sidenav.module.css";
import PersonalData from "./PersonalData";
import Menu from "./Menu";
import Home from "./Home";
import Login from "./Login";
import GeneralData from "./GeneralData";
import Grades from "./Grades";
import ElectiveCourses from "./ElectiveCourses";
import Payments from "./Payments";
import MedicalExamination from "./MedicalExamination";
import Timetable from "./Timetable";

function App() {
  return (
    <div className="web-dziekanat-app">
      <Menu />
      {!window.location.pathname.includes("/login") && <Navbar />}
      <main className={styles.main}>
        <Routes basename="/login">
          <Route path="/login" element={<Login />} />
          <Route path="/personalData" element={<PersonalData />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/home" element={<Home />} />
          <Route path="/generalData" element={<GeneralData />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/electiveCourses" element={<ElectiveCourses />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/medicalExamination" element={<MedicalExamination />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
