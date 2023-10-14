import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline, ThemeProvider} from "@mui/material"
import theme from './theme/theme.js'
import ProviderContext from './context/ProviderContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ProviderContext>
      
      <BrowserRouter>
        
        <ThemeProvider theme={theme}>
          
            <CssBaseline/>
            <App/>
        </ThemeProvider>
      </BrowserRouter>
    </ProviderContext>
  </React.StrictMode>,
)
