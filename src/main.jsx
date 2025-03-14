import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InsightCreate from './InsightCreate.jsx'
import NavBar from './components/NavBar.jsx'

import appLogo from './assets/logo.svg'
import logodark from './assets/logodark.svg'
import whatsapp from './assets/whatsapp.svg'
import arrow_right from './assets/arrow_right.svg'
import email from './assets/email.svg'
import call from './assets/call.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-poppins'>
      <Router>
        <NavBar logodark={logodark} logo={appLogo} whatsapp={whatsapp} arrow_right={arrow_right} />
        <Routes>
          <Route path="/" element={<InsightCreate />} />
          <Route path="/contact" element={<Contact arrow_right={arrow_right} logo={appLogo} whatsapp={whatsapp} email={email} call={call}/> } />
        </Routes>
      </Router>
    </div>
  </StrictMode>,
)
