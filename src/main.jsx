import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InsightCreate from './InsightCreate.jsx'
import NavBar from './components/NavBar.jsx'
import { Bounce, ToastContainer, toast } from 'react-toastify';

import join from './assets/join.svg'
import appLogo from './assets/logo.svg'
import logodark from './assets/logodark.svg'
import whatsapp from './assets/whatsapp.svg'
import arrow_right from './assets/arrow_right.svg'
import email from './assets/email.svg'
import call from './assets/call.svg'

import insightcreate from './assets/insightcreate.svg'
import insight from './assets/insight.svg'
import create from './assets/create.svg'
import copy from './assets/copy.svg'

import Instagram from'./assets/social/instagram.svg'
import WhatsApp from'./assets/social/whatsapp.svg'
import Facebook from'./assets/social/facebook.svg'
import Linkedin from'./assets/social/linkedin.svg'
import X from'./assets/social/x.svg'
import GitHub from'./assets/social/github.svg'
import Medium from'./assets/social/medium.svg'
import Dev from'./assets/social/dev.svg'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Join from './components/Join.jsx'
import Policy from './components/PolicyPrivacy.jsx'
import Capabilities from './components/Capabilities.jsx'
// import { ShiftingDropDown } from './components/Tabs.jsx'
// import Nav from './components/Nav.jsx'


const socialIcons = { Instagram, WhatsApp, Facebook, Linkedin, X, Medium, Dev, GitHub };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-poppins'>
      <Router>
        <NavBar logodark={logodark} logo={appLogo} whatsapp={whatsapp} arrow_right={arrow_right}/>
        {/* <ShiftingDropDown/> */}
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<InsightCreate />} />
          <Route path="/contact" element={<Contact join={join} logodark={logodark} arrow_right={arrow_right} logo={appLogo} whatsapp={whatsapp} email={email} call={call} socialIcons={socialIcons} insightcreate={insightcreate} insight={insight} create={create} copy={copy}/> } />
          <Route path="/about" element={<About join={join} logodark={logodark} arrow_right={arrow_right} logo={appLogo} whatsapp={whatsapp} email={email} call={call} socialIcons={socialIcons} insightcreate={insightcreate} insight={insight} create={create} copy={copy}/> } />
          <Route path="/join" element={<Join join={join} logodark={logodark} arrow_right={arrow_right} logo={appLogo} whatsapp={whatsapp} email={email} call={call} socialIcons={socialIcons} insightcreate={insightcreate} insight={insight} create={create} copy={copy}/> } />
          <Route path="/policy" element={<Policy join={join} logodark={logodark} arrow_right={arrow_right} logo={appLogo} whatsapp={whatsapp} email={email} call={call} socialIcons={socialIcons} insightcreate={insightcreate} insight={insight} create={create} copy={copy}/> } />
          <Route path="/services" element={<Capabilities join={join} logodark={logodark} arrow_right={arrow_right} logo={appLogo} whatsapp={whatsapp} email={email} call={call} socialIcons={socialIcons} insightcreate={insightcreate} insight={insight} create={create} copy={copy}/> } />
        </Routes>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </div>
  </StrictMode>,
)


