import React from "react";

import Footer from "./componets/Footer";
import NavTabs from "./componets/Nav";
import Home from "./componets/Home";
import Projects from "./componets/projects";
import Resume from "./componets/Resume";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return(
     <Router>
         <div>
             <NavTabs />
             <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/projects' element={<Projects />} />
                 <Route path='/resume' element={<Resume />} />
             </Routes>
             <Footer />
         </div>
     </Router>
       
    )
}

export default App;
