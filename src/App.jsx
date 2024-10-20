import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

import Navbar from "./components/Navbar.jsx";
import WhoWeAre from "./components/Pages/WhoWeAre/WhoWeAre.jsx";
import Culture from "./components/Pages/WhoWeAre/Culture.jsx";
import DiversityInclusion from "./components/Pages/WhoWeAre/DiversityInclusion.jsx";
import JoinOurTeam from "./components/Pages/WhoWeAre/JoinOurTeam.jsx";
import LeaderShip from "./components/Pages/WhoWeAre/LeaderShip.jsx";
import OurOffices from "./components/Pages/WhoWeAre/OurOffices";
import WhatWeDo from "./components/Pages/WhatWeDo/WhatWeDo.jsx";
import CreativeStaffing from "./components/Pages/WhatWeDo/CreativeStaffing.jsx";
import DigitalMarketingStaffing from "./components/Pages/WhatWeDo/DigitalMarketingStaffing.jsx";
import ItTech from "./components/Pages/WhatWeDo/ItTech.jsx";
import Talent from "./components/Pages/Talent/Talent.jsx";
import FindAJob from "./components/Pages/Talent/FindAJob.jsx";
import GetHired from "./components/Pages/Talent/GetHired.jsx";
import HireTalent from "./components/Pages/Talent/HireTalent.jsx";
import Insights from "./components/Pages/Insights/Insights.jsx";
import Bolg from "./components/Pages/Insights/Bolg.jsx";
import HiringGuides from "./components/Pages/Insights/HiringGuides.jsx";
import SalaryGuide from "./components/Pages/Insights/SalaryGuide.jsx";
import InTheNews from "./components/Pages/Insights/InTheNews.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/who-we-are" element={<WhoWeAre />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route
            exact
            path="/diversity-inclusion"
            element={<DiversityInclusion />}
          />
          <Route exact path="/join-our-team" element={<JoinOurTeam />} />
          <Route exact path="/leadership" element={<LeaderShip />} />

          <Route exact path="/our-offices" element={<OurOffices />} />
          <Route exact path="/what-we-do" element={<WhatWeDo />} />
          <Route
            exact
            path="/creative-staffing"
            element={<CreativeStaffing />}
          />
          <Route
            exact
            path="/digital-marketing-staffing"
            element={<DigitalMarketingStaffing />}
          />
          <Route exact path="/it-tech" element={<ItTech />} />
          <Route exact path="/talent" element={<Talent />} />
          <Route exact path="/find-a-job" element={<FindAJob />} />
          <Route exact path="/get-hired" element={<GetHired />} />
          <Route exact path="/hire-talent" element={<HireTalent />} />
          <Route exact path="/insights" element={<Insights />} />
          <Route exact path="/blogs" element={<Bolg />} />
          <Route exact path="/hiring-guides" element={<HiringGuides />} />
          <Route exact path="/salary-guide" element={<SalaryGuide />} />
          <Route exact path="/in-the-news" element={<InTheNews />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
