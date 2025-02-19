import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "normalize.css"
import "@fontsource/roboto"
import App from './Components/App/App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
