//DEPENDENCIES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//STYLING
import './App.css';

//PAGES
import Home from "./components/landing/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import PageNotFound from "./Pages/PageNotFound"


//COMPONENTS
import NavBar from './components/common/NavBar';
import Sidebar from './components/common/SideBar';
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Sidebar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/all-entries" element={<Index />} />
              <Route path="/entry/new" element={<New />} />
              <Route path="/entry/:id/edit" element={<Edit />} />
              <Route path="/entry/:id" element={<Show />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
