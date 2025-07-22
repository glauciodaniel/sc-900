import { Menu, Moon, Sun, BookOpen, Award } from 'lucide-react'
import { Button } from '../ui/button'
import { useProgress } from '../../contexts/ProgressContext'

const Header = ({ sidebarOpen, setSidebarOpen, darkMode, toggleDarkMode }) => {
  const { calculateOverallProgress } = useProgress()
  const overallProgress = calculateOverallProgress()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex h-16 items-center px-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo and title */}
        <div className="flex items-center space-x-3 ml-4 md:ml-0">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">SC-900</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Fundamentos de Segurança, Conformidade e Identidade
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Progresso:</span>
            <div className="flex-1 bg-secondary rounded-full h-2">
              <div 
                className="progress-bar h-2 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {Math.round(overallProgress)}%
            </span>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Certification badge */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Certificação Microsoft</span>
          </div>

          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-9 w-9"
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

