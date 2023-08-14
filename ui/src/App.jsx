import {ChakraProvider} from '@chakra-ui/react'

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  )
}


export default App









// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
// import Home from './components/Home.jsx';
// import About from './components/About.jsx';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path='/about' element={<About/>} />
//           <Route path='/' element={<Home/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


