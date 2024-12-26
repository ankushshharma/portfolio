import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Portfolio from './components/pages/Portfolio'
import ThemeToggle from './components/ui/ThemeToggle'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <div className="theme-toggle-container">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </Router>
  )
}

export default App
