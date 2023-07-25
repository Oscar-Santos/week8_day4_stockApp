// import './App.css'
// import { Routes, Route } from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Stock from './pages/Stock'
// import Dashboard from './pages/Dashboard'
// import Nav from './components/Nav'
// import data from './data'



// function App() {
  

//   return (
//       <div className="App">
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/stocks" element={<Dashboard />}/>
//           <Route path="/stocks/:symbol" element={<Stock />}/>
//         </Routes>
//       </div>
//   )
// }

// export default App

import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;

