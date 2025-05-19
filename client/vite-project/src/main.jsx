import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { VideoProvider } from './context/VideoContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
<VideoProvider>
    <App />
    </VideoProvider>
  </StrictMode>,

)
