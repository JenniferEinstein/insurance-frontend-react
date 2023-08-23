//DEPENDENCIES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//STYLING
import './App.css';

//PAGES
import Home from "./components/landing/Home";
import Show from "./Pages/Show";
import Entries from "./components/Entries";
import PageNotFound from "./Pages/PageNotFound"
import Edit from "./Pages/Edit";
// import Index from "./Pages/Index";
// import New from "./Pages/New";



//COMPONENTS
import NavBar from './components/common/NavBar';
import Entry from './components/Entry';
import EntryNewForm from './components/EntryNewForm';
import EntryEditForm from './components/EntryEditForm';
// import Sidebar from './components/common/SideBar';
// import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <Router>
        <NavBar />
        {/* <Sidebar /> */}
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entry' element={<Entry />} />
            <Route path='/entries' element={<Entries />} />
            <Route path='/entry/new' element={<EntryNewForm />} />
            <Route path="/entry/edit" element={<Edit />} />/
            <Route path="/entry/editform" element={<EntryEditForm />} />/
            <Route path='/entry/:id' element={<Show />} />
            <Route path='*' element={<PageNotFound />} />

            {/* <Route path='/entry/:id/edit' element={<Edit />} /> */}
  

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;


/* ==  ORIGINAL ROUTES ==
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