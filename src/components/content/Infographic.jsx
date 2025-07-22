import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ZoomIn, ZoomOut, Download, Info } from 'lucide-react'

const Infographic = ({ 
  title, 
  description, 
  children, 
  category,
  difficulty = "Básico",
  estimatedTime = "5 min"
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Básico': return 'bg-green-100 text-green-800'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800'
      case 'Avançado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="infographic-container">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <CardTitle className="text-xl">{title}</CardTitle>
              <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
              {category && (
                <Badge variant="secondary">
                  {category}
                </Badge>
              )}
            </div>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
            <div className="flex items-center space-x-4 mt-3 text-sm text-muted-foreground">
              <span>⏱️ {estimatedTime}</span>
              <span>📊 Infográfico Interativo</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInfo(!showInfo)}
              className="h-8 w-8"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8"
            >
              {isExpanded ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {showInfo && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold mb-2">💡 Como usar este infográfico:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Clique nos elementos para ver detalhes</li>
              <li>• Use os botões de zoom para melhor visualização</li>
              <li>• Passe o mouse sobre os ícones para dicas</li>
              <li>• Baixe o infográfico para referência futura</li>
            </ul>
          </div>
        )}
        
        <div className={`transition-all duration-300 ${isExpanded ? 'scale-110' : 'scale-100'}`}>
          {children}
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Baseado na documentação oficial da Microsoft
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Baixar PNG
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Infographic

