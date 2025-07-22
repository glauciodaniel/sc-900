import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

// Layout Components
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

// Page Components
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Module1 from './pages/Module1'
import Module2 from './pages/Module2'
import Module3 from './pages/Module3'
import Module4 from './pages/Module4'
import Resources from './pages/Resources'

// Context for progress tracking
import { ProgressProvider } from './contexts/ProgressContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ProgressProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          
          <div className="flex">
            <Sidebar 
              open={sidebarOpen}
              setOpen={setSidebarOpen}
            />
            
            <main className="flex-1 min-h-screen pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/modulo1/*" element={<Module1 />} />
                <Route path="/modulo2/*" element={<Module2 />} />
                <Route path="/modulo3/*" element={<Module3 />} />
                <Route path="/modulo4/*" element={<Module4 />} />
                <Route path="/recursos" element={<Resources />} />
              </Routes>
            </main>
          </div>
          
          <Footer />
        </div>
      </Router>
    </ProgressProvider>
  )
}

export default App

