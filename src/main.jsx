import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

import "boxicons/dist/boxicons.js"
import "boxicons/css/boxicons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
