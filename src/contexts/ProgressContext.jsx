import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('sc900-progress')
    return saved ? JSON.parse(saved) : {
      modules: {
        module1: { completed: false, topics: {} },
        module2: { completed: false, topics: {} },
        module3: { completed: false, topics: {} },
        module4: { completed: false, topics: {} }
      },
      overallProgress: 0,
      timeSpent: 0,
      lastAccessed: null
    }
  })

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sc900-progress', JSON.stringify(progress))
  }, [progress])

  const markTopicComplete = (moduleId, topicId) => {
    setProgress(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          topics: {
            ...prev.modules[moduleId].topics,
            [topicId]: true
          }
        }
      },
      lastAccessed: new Date().toISOString()
    }))
  }

  const markModuleComplete = (moduleId) => {
    setProgress(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          ...prev.modules[moduleId],
          completed: true
        }
      },
      lastAccessed: new Date().toISOString()
    }))
  }

  const updateTimeSpent = (minutes) => {
    setProgress(prev => ({
      ...prev,
      timeSpent: prev.timeSpent + minutes
    }))
  }

  const calculateOverallProgress = () => {
    const modules = Object.values(progress.modules)
    const completedModules = modules.filter(module => module.completed).length
    return (completedModules / modules.length) * 100
  }

  const getModuleProgress = (moduleId) => {
    const module = progress.modules[moduleId]
    if (!module) return 0
    
    const topics = Object.values(module.topics)
    if (topics.length === 0) return 0
    
    const completedTopics = topics.filter(Boolean).length
    return (completedTopics / topics.length) * 100
  }

  const value = {
    progress,
    markTopicComplete,
    markModuleComplete,
    updateTimeSpent,
    calculateOverallProgress,
    getModuleProgress
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

