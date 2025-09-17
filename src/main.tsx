import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { ThemeProvider } from './components/service/ThemeProvider.tsx'

import './assets/style/main.css'


const root = createRoot(document.getElementById('root')!)
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)


console.log(root);