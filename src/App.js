//DEPENDENCIES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//STYLING
import './App.css';

//PAGES & COMPONENTS
import Home from "./components/landing/Home";
import Show from "./Pages/Show";
import PageNotFound from "./Pages/PageNotFound"
import Edit from "./Pages/Edit";
import NavBar from './components/common/NavBar';
import Entry from './components/Entry';
import New from "./Pages/New";
import Index from "./Pages/Index";
// import Sidebar from './components/common/SideBar';
// import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entries' element={<Index />} />
            <Route path='/entries/new' element={<New />} />
            <Route path="/entries/edit" element={<Edit />} />/
            <Route path='/entries/:id' element={<Show />} />
            <Route path='/entries' element={<Entry />} />
            <Route path='*' element={<PageNotFound />} />

            {/* <Route path='/entries/:id/edit' element={<Edit />} /> */}
            {/* <Route path='/entries/:id' element={<Show />} /> */}

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


/* ==  ORIGINAL ROUTES ==
C
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entries' element={<Index />} />
            <Route path='/entry/new' element={<New />} />
            <Route path="/entry/edit" element={<Edit />} />/
            <Route path='/entry/:id' element={<Show />} />
            <Route path='/entry' element={<Entry />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>




B
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entry' element={<Entry />} />
            <Route path='/entry/entries' element={<Index />} />
            <Route path='/entry/new' element={<EntryNewForm />} />
            <Route path='/entry/:id' element={<Show />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>


A
            <Route path='/' element={<Home />} />
            <Route path='/entry' element={<Entry />} />
            <Route path='/entry/all-entries' element={<Index />} />
            <Route path='/entry/new' element={<New />} />
            <Route path='/entry/:id/edit' element={<Edit />} />
            <Route path='/entry/:id' element={<Show />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>

*/