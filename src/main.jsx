import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FamilyTree from "./components/FamilyTree";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section className="mt-20">
     <h2 className="text-3xl font-bold text-center mb-10">
    Our Family Tree 🌳
    </h2>

    <FamilyTree />
    <App />
    </section>
  </StrictMode>,
)
