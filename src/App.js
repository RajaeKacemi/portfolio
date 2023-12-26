import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact';
import NotFound from './pages/404/NotFound';

import { createContext, useState } from 'react';

export const AppContext = createContext();


// w-screen h-screen  bg-gradient-to-r from-dark-500 to-dark-900 dark:bg-dark-700 flex justify-center items-center  selection:text-light-900'>
function App() {

  const [openMenu, setOpenMenu] = useState("Home");
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu, theme, setTheme }}>
      <div className='w-screen h-screen bg-gradient-to-r from-dark-500 to-dark-900 dark:bg-darkTheme-900 flex justify-center items-center dark:selection:bg-dark-800 selection:bg-dark-700 selection:text-light-900'>
        <div className='w-full max-w-[93rem] h-full '>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
