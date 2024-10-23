import * as React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

import Navbar from "./components/Navbar.jsx";
import Culture from "./components/Pages/WhoWeAre/Culture.jsx";
import JoinOurTeam from "./components/Pages/WhoWeAre/JoinOurTeam.jsx";
import WhatWeDo from "./components/Pages/WhatWeDo/WhatWeDo.jsx";
import CreativeStaffing from "./components/Pages/WhatWeDo/CreativeStaffing.jsx";
import DigitalMarketingStaffing from "./components/Pages/WhatWeDo/DigitalMarketingStaffing.jsx";
import ItTech from "./components/Pages/WhatWeDo/ItTech.jsx";
import Talent from "./components/Pages/Talent/Talent.jsx";
import Insights from "./components/Pages/Insights/Insights.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/join-our-team" element={<JoinOurTeam />} />
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
          <Route exact path="/insights" element={<Insights />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
