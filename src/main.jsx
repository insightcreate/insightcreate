import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InsightCreate from './InsightCreate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InsightCreate />
  </StrictMode>,
)
